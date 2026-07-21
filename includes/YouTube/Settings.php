<?php
/**
 * Admin settings page.
 *
 * @package MagicElements
 */

namespace MagicElements\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * YouTube settings.
 */
class Settings {

	/**
	 * Option name
	 *
	 * @var string
	 */
	const OPTION_NAME = 'magic_elements_youtube_settings';

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->migrate_standalone_settings();

		add_action( 'admin_menu', [ $this, 'register_menu' ] );
		add_action( 'admin_init', [ $this, 'register_settings' ] );
		add_action( 'admin_post_magic_elements_youtube_clear_cache', [ $this, 'handle_clear_cache' ] );
		add_filter( 'plugin_action_links_' . plugin_basename( MAGIC_ELEMENTS_FILE ), [ $this, 'plugin_action_links' ] );
	}

	/**
	 * Preserve settings created by the former standalone plugin.
	 *
	 * @return void
	 */
	private function migrate_standalone_settings() {
		if ( false !== get_option( self::OPTION_NAME, false ) ) {
			return;
		}

		$legacy_settings = get_option( 'myf_settings', false );

		if ( is_array( $legacy_settings ) ) {
			update_option( self::OPTION_NAME, $legacy_settings );
		}
	}

	/**
	 * Add "Settings" link on the plugins list row.
	 *
	 * @param array $links Existing links.
	 * @return array
	 */
	public function plugin_action_links( $links ) {
		$settings_link = sprintf(
			'<a href="%s">%s</a>',
			esc_url( admin_url( 'admin.php?page=magic-elements-youtube' ) ),
			esc_html__( 'YouTube API', 'magic-elements' )
		);

		array_unshift( $links, $settings_link );

		return $links;
	}

	/**
	 * Register the settings page under Magic Elements.
	 *
	 * @return void
	 */
	public function register_menu() {
		add_submenu_page(
			'magic-elements-dashboard',
			esc_html__( 'Magic YouTube Feed Settings', 'magic-elements' ),
			esc_html__( 'YouTube API', 'magic-elements' ),
			'manage_options',
			'magic-elements-youtube',
			[ $this, 'render_settings_page' ]
		);
	}

	/**
	 * Register settings, sections, and fields.
	 *
	 * @return void
	 */
	public function register_settings() {
		register_setting(
			'magic_elements_youtube_settings_group',
			self::OPTION_NAME,
			[
				'type'              => 'array',
				'sanitize_callback' => [ $this, 'sanitize_settings' ],
			]
		);

		add_settings_section(
			'myf_api_section',
			esc_html__( 'API Configuration', 'magic-elements' ),
			[ $this, 'render_api_section_intro' ],
			'magic-elements-youtube'
		);

		add_settings_field(
			'myf_api_key',
			esc_html__( 'YouTube API Key', 'magic-elements' ),
			[ $this, 'render_api_key_field' ],
			'magic-elements-youtube',
			'myf_api_section'
		);

		add_settings_section(
			'myf_defaults_section',
			esc_html__( 'Default Source', 'magic-elements' ),
			'__return_null',
			'magic-elements-youtube'
		);

		add_settings_field(
			'myf_default_channel',
			esc_html__( 'Default Channel ID', 'magic-elements' ),
			[ $this, 'render_default_channel_field' ],
			'magic-elements-youtube',
			'myf_defaults_section'
		);

		add_settings_field(
			'myf_default_playlist',
			esc_html__( 'Default Playlist ID', 'magic-elements' ),
			[ $this, 'render_default_playlist_field' ],
			'magic-elements-youtube',
			'myf_defaults_section'
		);

		add_settings_section(
			'myf_cache_section',
			esc_html__( 'Cache', 'magic-elements' ),
			'__return_null',
			'magic-elements-youtube'
		);

		add_settings_field(
			'myf_cache_duration',
			esc_html__( 'Cache Duration (minutes)', 'magic-elements' ),
			[ $this, 'render_cache_duration_field' ],
			'magic-elements-youtube',
			'myf_cache_section'
		);
	}

	/**
	 * Sanitize settings before saving.
	 *
	 * @param array $input Raw input.
	 * @return array
	 */
	public function sanitize_settings( $input ) {
		$output = [];

		$output['api_key']          = isset( $input['api_key'] ) ? sanitize_text_field( $input['api_key'] ) : '';
		$output['default_channel']  = isset( $input['default_channel'] ) ? sanitize_text_field( $input['default_channel'] ) : '';
		$output['default_playlist'] = isset( $input['default_playlist'] ) ? sanitize_text_field( $input['default_playlist'] ) : '';
		$output['cache_duration']   = isset( $input['cache_duration'] ) ? max( 1, absint( $input['cache_duration'] ) ) : 60;

		// Settings changed — old cached responses may no longer apply.
		Api::clear_cache();

		return $output;
	}

	/**
	 * API section intro text.
	 *
	 * @return void
	 */
	public function render_api_section_intro() {
		printf(
			'<p>%s <a href="%s" target="_blank" rel="noopener noreferrer">%s</a></p>',
			esc_html__( 'Enter your YouTube Data API v3 key. You can create one for free in the Google Cloud Console.', 'magic-elements' ),
			'https://console.cloud.google.com/apis/library/youtube.googleapis.com',
			esc_html__( 'Get an API key', 'magic-elements' )
		);
	}

	/**
	 * API key field.
	 *
	 * @return void
	 */
	public function render_api_key_field() {
		$options = get_option( self::OPTION_NAME, [] );
		$api_key = isset( $options['api_key'] ) ? $options['api_key'] : '';
		?>
		<input
			type="password"
			id="myf_api_key"
			name="<?php echo esc_attr( self::OPTION_NAME ); ?>[api_key]"
			value="<?php echo esc_attr( $api_key ); ?>"
			class="regular-text"
			autocomplete="off"
		/>
		<button type="button" class="button" onclick="var f=document.getElementById('myf_api_key');f.type=f.type==='password'?'text':'password';">
			<?php esc_html_e( 'Show / Hide', 'magic-elements' ); ?>
		</button>
		<?php
		if ( ! empty( $api_key ) ) {
			$this->render_api_status( $api_key );
		}
	}

	/**
	 * Show live API connection status.
	 *
	 * @param string $api_key API key to test.
	 * @return void
	 */
	private function render_api_status( $api_key ) {
		$status = get_transient( 'myf_api_status_' . md5( $api_key ) );

		if ( false === $status ) {
			$response = wp_remote_get(
				add_query_arg(
					[
						'part'       => 'id',
						'chart'      => 'mostPopular',
						'maxResults' => 1,
						'key'        => $api_key,
					],
					'https://www.googleapis.com/youtube/v3/videos'
				),
				[ 'timeout' => 10 ]
			);

			if ( is_wp_error( $response ) ) {
				$status = 'error';
			} else {
				$status = ( 200 === wp_remote_retrieve_response_code( $response ) ) ? 'ok' : 'invalid';
			}

			set_transient( 'myf_api_status_' . md5( $api_key ), $status, 10 * MINUTE_IN_SECONDS );
		}

		if ( 'ok' === $status ) {
			printf(
				'<p style="color:#00a32a;"><span class="dashicons dashicons-yes-alt"></span> %s</p>',
				esc_html__( 'API key is valid and working.', 'magic-elements' )
			);
		} elseif ( 'invalid' === $status ) {
			printf(
				'<p style="color:#d63638;"><span class="dashicons dashicons-dismiss"></span> %s</p>',
				esc_html__( 'API key appears to be invalid or restricted.', 'magic-elements' )
			);
		} else {
			printf(
				'<p style="color:#dba617;"><span class="dashicons dashicons-warning"></span> %s</p>',
				esc_html__( 'Could not reach the YouTube API to verify the key.', 'magic-elements' )
			);
		}
	}

	/**
	 * Default channel field.
	 *
	 * @return void
	 */
	public function render_default_channel_field() {
		$options = get_option( self::OPTION_NAME, [] );
		$value   = isset( $options['default_channel'] ) ? $options['default_channel'] : '';
		?>
		<input
			type="text"
			name="<?php echo esc_attr( self::OPTION_NAME ); ?>[default_channel]"
			value="<?php echo esc_attr( $value ); ?>"
			class="regular-text"
			placeholder="UCxxxxxxxxxxxxxxxxxxxxxx"
		/>
		<p class="description"><?php esc_html_e( 'Used by widgets when no channel ID is set on the widget itself.', 'magic-elements' ); ?></p>
		<?php
	}

	/**
	 * Default playlist field.
	 *
	 * @return void
	 */
	public function render_default_playlist_field() {
		$options = get_option( self::OPTION_NAME, [] );
		$value   = isset( $options['default_playlist'] ) ? $options['default_playlist'] : '';
		?>
		<input
			type="text"
			name="<?php echo esc_attr( self::OPTION_NAME ); ?>[default_playlist]"
			value="<?php echo esc_attr( $value ); ?>"
			class="regular-text"
			placeholder="PLxxxxxxxxxxxxxxxxxxxxxx"
		/>
		<p class="description"><?php esc_html_e( 'Used by widgets when no playlist ID is set on the widget itself.', 'magic-elements' ); ?></p>
		<?php
	}

	/**
	 * Cache duration field.
	 *
	 * @return void
	 */
	public function render_cache_duration_field() {
		$options = get_option( self::OPTION_NAME, [] );
		$value   = isset( $options['cache_duration'] ) ? absint( $options['cache_duration'] ) : 60;
		?>
		<input
			type="number"
			name="<?php echo esc_attr( self::OPTION_NAME ); ?>[cache_duration]"
			value="<?php echo esc_attr( $value ); ?>"
			class="small-text"
			min="1"
			step="1"
		/>
		<p class="description"><?php esc_html_e( 'How long API responses are cached. Longer durations save API quota.', 'magic-elements' ); ?></p>
		<?php
	}

	/**
	 * Handle the "Clear Cache" action.
	 *
	 * @return void
	 */
	public function handle_clear_cache() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You are not allowed to do this.', 'magic-elements' ) );
		}

		check_admin_referer( 'magic_elements_youtube_clear_cache' );

		Api::clear_cache();

		wp_safe_redirect( add_query_arg( 'youtube-cache-cleared', '1', admin_url( 'admin.php?page=magic-elements-youtube' ) ) );
		exit;
	}

	/**
	 * Render the settings page.
	 *
	 * @return void
	 */
	public function render_settings_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only notice flag.
		if ( isset( $_GET['youtube-cache-cleared'] ) ) {
			printf(
				'<div class="notice notice-success is-dismissible"><p>%s</p></div>',
				esc_html__( 'Cache cleared successfully.', 'magic-elements' )
			);
		}
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'Magic YouTube Feed', 'magic-elements' ); ?></h1>

			<form action="options.php" method="post">
				<?php
				settings_fields( 'magic_elements_youtube_settings_group' );
				do_settings_sections( 'magic-elements-youtube' );
				submit_button();
				?>
			</form>

			<hr />

			<h2><?php esc_html_e( 'Tools', 'magic-elements' ); ?></h2>
			<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
				<input type="hidden" name="action" value="magic_elements_youtube_clear_cache" />
				<?php wp_nonce_field( 'magic_elements_youtube_clear_cache' ); ?>
				<?php submit_button( esc_html__( 'Clear Cached Feeds', 'magic-elements' ), 'secondary', 'submit', false ); ?>
				<p class="description"><?php esc_html_e( 'Removes all cached YouTube API responses so fresh data is fetched on the next page load.', 'magic-elements' ); ?></p>
			</form>
		</div>
		<?php
	}
}
