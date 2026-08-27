<?php
/**
 * YouTube Data API v3 handler with transient caching.
 *
 * @package MagicElements
 */

namespace MagicElements\YouTube;

use DateInterval;
use Exception;
use WP_Error;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Api
 */
class Api {

	/**
	 * YouTube Data API base URL
	 *
	 * @var string
	 */
	const API_BASE = 'https://www.googleapis.com/youtube/v3/';

	/**
	 * Get the saved API key
	 *
	 * @return string
	 */
	public static function get_api_key() {
		$options = get_option( Settings::OPTION_NAME, [] );

		return isset( $options['api_key'] ) ? trim( $options['api_key'] ) : '';
	}

	/**
	 * Get cache duration in seconds
	 *
	 * @return int
	 */
	public static function get_cache_duration() {
		$options  = get_option( Settings::OPTION_NAME, [] );
		$duration = isset( $options['cache_duration'] ) ? absint( $options['cache_duration'] ) : 60;

		return max( 1, $duration ) * MINUTE_IN_SECONDS;
	}

	/**
	 * Fetch videos based on source type.
	 *
	 * @param array $args {
	 *     Query arguments.
	 *
	 *     @type string $source      channel|playlist|search|videos.
	 *     @type string $channel_id  Channel ID (for channel source).
	 *     @type string $playlist_id Playlist ID (for playlist source).
	 *     @type string $search      Search query (for search source).
	 *     @type string $video_ids   Comma separated video IDs (for videos source).
	 *     @type int    $limit       Number of videos.
	 *     @type string $order       Sort order for search source.
	 * }
	 * @return array|WP_Error Array of normalized video arrays or WP_Error.
	 */
	public static function get_videos( $args ) {
		$api_key = self::get_api_key();

		if ( empty( $api_key ) ) {
			return new WP_Error( 'myf_no_api_key', esc_html__( 'YouTube API key is missing. Add it under Settings → Magic YouTube Feed.', 'magic-elements' ) );
		}

		$defaults = [
			'source'      => 'channel',
			'channel_id'  => '',
			'playlist_id' => '',
			'search'      => '',
			'video_ids'   => '',
			'limit'       => 6,
			'order'       => 'date',
		];

		$args          = wp_parse_args( $args, $defaults );
		$args['limit'] = min( 50, max( 1, absint( $args['limit'] ) ) );

		$cache_key = 'myf_' . md5( wp_json_encode( $args ) . $api_key );
		$cached    = get_transient( $cache_key );

		if ( false !== $cached ) {
			return $cached;
		}

		switch ( $args['source'] ) {
			case 'playlist':
				$videos = self::fetch_playlist_videos( $args['playlist_id'], $args['limit'], $api_key );
				break;

			case 'search':
				$videos = self::fetch_search_videos( $args['search'], $args['limit'], $args['order'], $api_key );
				break;

			case 'videos':
				$ids    = array_filter( array_map( 'trim', explode( ',', $args['video_ids'] ) ) );
				$videos = self::fetch_videos_by_ids( $ids, $api_key );
				break;

			case 'channel':
			default:
				$videos = self::fetch_channel_videos( $args['channel_id'], $args['limit'], $api_key );
				break;
		}

		if ( is_wp_error( $videos ) ) {
			return $videos;
		}

		set_transient( $cache_key, $videos, self::get_cache_duration() );

		return $videos;
	}

	/**
	 * Fetch latest videos of a channel via its uploads playlist.
	 *
	 * Uses channels.list (1 unit) + playlistItems.list (1 unit) instead of
	 * search.list (100 units) to preserve API quota.
	 *
	 * @param string $channel_id Channel ID.
	 * @param int    $limit      Max results.
	 * @param string $api_key    API key.
	 * @return array|WP_Error
	 */
	private static function fetch_channel_videos( $channel_id, $limit, $api_key ) {
		if ( empty( $channel_id ) ) {
			return new WP_Error( 'myf_no_channel', esc_html__( 'No channel ID provided.', 'magic-elements' ) );
		}

		$response = self::request(
			'channels',
			[
				'part' => 'contentDetails',
				'id'   => $channel_id,
				'key'  => $api_key,
			]
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		if ( empty( $response['items'][0]['contentDetails']['relatedPlaylists']['uploads'] ) ) {
			return new WP_Error( 'myf_channel_not_found', esc_html__( 'Channel not found. Check the channel ID.', 'magic-elements' ) );
		}

		$uploads_playlist = $response['items'][0]['contentDetails']['relatedPlaylists']['uploads'];

		return self::fetch_playlist_videos( $uploads_playlist, $limit, $api_key );
	}

	/**
	 * Fetch videos from a playlist.
	 *
	 * @param string $playlist_id Playlist ID.
	 * @param int    $limit       Max results.
	 * @param string $api_key     API key.
	 * @return array|WP_Error
	 */
	private static function fetch_playlist_videos( $playlist_id, $limit, $api_key ) {
		if ( empty( $playlist_id ) ) {
			return new WP_Error( 'myf_no_playlist', esc_html__( 'No playlist ID provided.', 'magic-elements' ) );
		}

		$response = self::request(
			'playlistItems',
			[
				'part'       => 'snippet,contentDetails',
				'playlistId' => $playlist_id,
				'maxResults' => $limit,
				'key'        => $api_key,
			]
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$video_ids = [];

		foreach ( (array) $response['items'] as $item ) {
			if ( ! empty( $item['contentDetails']['videoId'] ) ) {
				$video_ids[] = $item['contentDetails']['videoId'];
			}
		}

		return self::fetch_videos_by_ids( $video_ids, $api_key );
	}

	/**
	 * Fetch videos matching a search query.
	 *
	 * @param string $query   Search query.
	 * @param int    $limit   Max results.
	 * @param string $order   Sort order (date, rating, relevance, title, viewCount).
	 * @param string $api_key API key.
	 * @return array|WP_Error
	 */
	private static function fetch_search_videos( $query, $limit, $order, $api_key ) {
		if ( empty( $query ) ) {
			return new WP_Error( 'myf_no_query', esc_html__( 'No search query provided.', 'magic-elements' ) );
		}

		$response = self::request(
			'search',
			[
				'part'       => 'id',
				'q'          => $query,
				'type'       => 'video',
				'order'      => $order,
				'maxResults' => $limit,
				'key'        => $api_key,
			]
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$video_ids = [];

		foreach ( (array) $response['items'] as $item ) {
			if ( ! empty( $item['id']['videoId'] ) ) {
				$video_ids[] = $item['id']['videoId'];
			}
		}

		return self::fetch_videos_by_ids( $video_ids, $api_key );
	}

	/**
	 * Fetch full video details (snippet, statistics, duration) by IDs.
	 *
	 * @param array  $video_ids Video IDs.
	 * @param string $api_key   API key.
	 * @return array|WP_Error
	 */
	private static function fetch_videos_by_ids( $video_ids, $api_key ) {
		if ( empty( $video_ids ) ) {
			return [];
		}

		$response = self::request(
			'videos',
			[
				'part' => 'snippet,statistics,contentDetails',
				'id'   => implode( ',', array_slice( $video_ids, 0, 50 ) ),
				'key'  => $api_key,
			]
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$videos = [];

		foreach ( (array) $response['items'] as $item ) {
			$snippet    = isset( $item['snippet'] ) ? $item['snippet'] : [];
			$statistics = isset( $item['statistics'] ) ? $item['statistics'] : [];
			$thumbnails = isset( $snippet['thumbnails'] ) ? $snippet['thumbnails'] : [];

			$videos[] = [
				'id'            => $item['id'],
				'title'         => isset( $snippet['title'] ) ? $snippet['title'] : '',
				'description'   => isset( $snippet['description'] ) ? $snippet['description'] : '',
				'published_at'  => isset( $snippet['publishedAt'] ) ? $snippet['publishedAt'] : '',
				'channel_title' => isset( $snippet['channelTitle'] ) ? $snippet['channelTitle'] : '',
				'thumbnails'    => [
					'default'  => isset( $thumbnails['default']['url'] ) ? $thumbnails['default']['url'] : '',
					'medium'   => isset( $thumbnails['medium']['url'] ) ? $thumbnails['medium']['url'] : '',
					'high'     => isset( $thumbnails['high']['url'] ) ? $thumbnails['high']['url'] : '',
					'standard' => isset( $thumbnails['standard']['url'] ) ? $thumbnails['standard']['url'] : '',
					'maxres'   => isset( $thumbnails['maxres']['url'] ) ? $thumbnails['maxres']['url'] : '',
				],
				'duration'      => isset( $item['contentDetails']['duration'] ) ? self::format_duration( $item['contentDetails']['duration'] ) : '',
				'views'         => isset( $statistics['viewCount'] ) ? (int) $statistics['viewCount'] : 0,
				'likes'         => isset( $statistics['likeCount'] ) ? (int) $statistics['likeCount'] : 0,
				'comments'      => isset( $statistics['commentCount'] ) ? (int) $statistics['commentCount'] : 0,
				'url'           => 'https://www.youtube.com/watch?v=' . $item['id'],
			];
		}

		return $videos;
	}

	/**
	 * Perform a GET request against the YouTube API.
	 *
	 * @param string $endpoint Endpoint name.
	 * @param array  $params   Query parameters.
	 * @return array|WP_Error Decoded JSON body or WP_Error.
	 */
	private static function request( $endpoint, $params ) {
		$url      = add_query_arg( $params, self::API_BASE . $endpoint );
		$response = wp_remote_get( $url, [ 'timeout' => 15 ] );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( 200 !== $code ) {
			$message = isset( $body['error']['message'] ) ? $body['error']['message'] : esc_html__( 'Unknown YouTube API error.', 'magic-elements' );

			return new WP_Error( 'myf_api_error', $message, [ 'status' => $code ] );
		}

		return is_array( $body ) ? $body : [];
	}

	/**
	 * Convert ISO 8601 duration (e.g. PT1H2M10S) to readable format.
	 *
	 * @param string $duration ISO 8601 duration.
	 * @return string
	 */
	private static function format_duration( $duration ) {
		try {
			$interval = new DateInterval( $duration );
		} catch ( Exception $e ) {
			return '';
		}

		$hours   = (int) $interval->h + ( (int) $interval->d * 24 );
		$minutes = (int) $interval->i;
		$seconds = (int) $interval->s;

		if ( $hours > 0 ) {
			return sprintf( '%d:%02d:%02d', $hours, $minutes, $seconds );
		}

		return sprintf( '%d:%02d', $minutes, $seconds );
	}

	/**
	 * Format large numbers (e.g. 1.2K, 3.4M).
	 *
	 * @param int $number Number to format.
	 * @return string
	 */
	public static function format_count( $number ) {
		$number = (int) $number;

		if ( $number >= 1000000000 ) {
			return round( $number / 1000000000, 1 ) . 'B';
		}

		if ( $number >= 1000000 ) {
			return round( $number / 1000000, 1 ) . 'M';
		}

		if ( $number >= 1000 ) {
			return round( $number / 1000, 1 ) . 'K';
		}

		return number_format_i18n( $number );
	}

	/**
	 * Clear all plugin transients.
	 *
	 * @return void
	 */
	public static function clear_cache() {
		global $wpdb;

		$wpdb->query( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching -- Purges this plugin's transient rows by prefix.
			$wpdb->prepare(
				"DELETE FROM {$wpdb->options} WHERE option_name LIKE %s OR option_name LIKE %s",
				$wpdb->esc_like( '_transient_myf_' ) . '%',
				$wpdb->esc_like( '_transient_timeout_myf_' ) . '%'
			)
		);
	}
}
