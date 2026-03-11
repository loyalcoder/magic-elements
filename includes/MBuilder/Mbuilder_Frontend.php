<?php
/**
 * Frontend class for Magic Elements Builder
 *
 * @package MagicElements
 * @subpackage MBuilder
 * @since 1.0.0
 */

declare(strict_types=1);

namespace MagicElements\MBuilder;

use MagicElements\Traits\Builder;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Mbuilder_Frontend {
    use Builder;
    private static $_instance = null;

    /**
     * Get singleton instance
     *
     * @return self
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Initialize hooks and filters
     *
     * @return void
     */
    public function init()
    {
        // Replace header 
        add_action('get_header', [$this, 'replace_header']);
        // replace footer 
        add_action('get_footer', [$this, 'replace_footer']);
        add_action('magic_builder_header_content', [$this,'header_builder_put_content']);
        add_action('magic_builder_footer_content', [$this,'footer_builder_put_content']);
        // Clear cache on builder updates
        add_action('save_post_me_builder', [$this, 'clear_builder_cache']);
    }

    /**
     * Clear builder cache when post is updated
     *
     * @param int $post_id Post ID
     * @return void
     */
    public function clear_builder_cache($post_id) {
        if (get_post_type($post_id) === 'me_builder') {
            $this->delete_builder_cache();
        }
    }

    /**
     * Replace default header with custom header
     *
     * @return bool|void
     */
    public function replace_header()
    {
        $header_id = $this->get_active_id('header');
        
        if ($header_id == '') {
            return false;
        }
        include __DIR__. '/templates/header.php';
        $templates   = [];
        $templates[] = 'header.php';
        remove_all_actions('wp_head');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    public function replace_footer()
    {
        $footer_id = $this->get_active_id('footer');
        $header_id = $this->get_active_id('header');
        if ($footer_id == '') {
            return false;
        }
        include __DIR__. '/templates/footer.php';
        $templates   = [];
        $templates[] = 'footer.php';
        remove_all_actions('wp_footer');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    /**
     * Output header builder content
     *
     * @return bool|void
     */
    public function header_builder_put_content()
    {
        $active_header_id = $this->get_active_id('header');
        if($active_header_id == ''){
            return false;
        } 
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_header_id, true);
        }
    }
    public function footer_builder_put_content()
    {
        $active_footer_id = $this->get_active_id('footer');
        if($active_footer_id == ''){
            return false;
        }
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_footer_id, false);
        }
    }
    /**
     * Get active header/footer ID for current request (respects display conditions).
     *
     * @param string $type 'header' or 'footer'.
     * @return int|false Template post ID or false.
     */
    public function get_active_id($type = 'header'){
        $args = [
            'post_type'      => 'me_builder',
            'post_status'   => 'publish',
            'posts_per_page' => 50,
            'meta_query'    => [
                'relation' => 'AND',
                [
                    'key'     => '_me_builder_type',
                    'value'   => $type,
                    'compare' => '=',
                ],
                [
                    'key'     => '_me_builder_status',
                    'value'   => '1',
                    'compare' => '=',
                ],
            ],
        ];
        $result = $this->get_builder_templates($args);
        if ( empty( $result['templates'] ) ) {
            return false;
        }
        // Priority 1: Selective Singular (specific pages) over broad conditions (e.g. Entire Website).
        foreach ( $result['templates'] as $template ) {
            $tid = isset( $template['ID'] ) ? (int) $template['ID'] : 0;
            if ( $tid && $this->should_display( $tid ) && $this->matches_via_selective_singular( $tid ) ) {
                return $tid;
            }
        }
        // Priority 2: Any template that matches (e.g. Entire Website for all other pages).
        foreach ( $result['templates'] as $template ) {
            $tid = isset( $template['ID'] ) ? (int) $template['ID'] : 0;
            if ( $tid && $this->should_display( $tid ) ) {
                return $tid;
            }
        }
        return false;
    }

    /**
     * Whether this template matches the current page via an Include + Selective Singular condition.
     * Used for priority: selective_singular wins over entire_website on matching pages.
     *
     * @param int $template_id Template post ID.
     * @return bool
     */
    public function matches_via_selective_singular( $template_id ) {
        $query_object = get_queried_object();
        $current_page = $this->get_current_page( $query_object );
        $current_id   = is_numeric( $current_page ) ? (int) $current_page : 0;
        if ( ! $current_id ) {
            return false;
        }
        $current_post_type = '';
        $current_post      = get_post( $current_id );
        if ( $current_post ) {
            $current_post_type = $current_post->post_type;
        }
        $conditions = get_post_meta( $template_id, '_me_builder_condition', true );
        if ( ! is_array( $conditions ) ) {
            return false;
        }
        foreach ( $conditions as $condition ) {
            $display_type = isset( $condition['display_type'] ) ? $condition['display_type'] : 'include';
            $display_on   = isset( $condition['display_on'] ) ? $condition['display_on'] : '';
            if ( $display_on !== 'selective_singular' || $display_type !== 'include' ) {
                continue;
            }
            $post_type  = isset( $condition['post_type'] ) ? $condition['post_type'] : '';
            $all_posts  = ! empty( $condition['all_posts'] );
            $post_ids   = isset( $condition['post_ids'] ) && is_array( $condition['post_ids'] ) ? array_map( 'intval', $condition['post_ids'] ) : [];
            if ( $post_type && $post_type !== $current_post_type ) {
                continue;
            }
            // If marked as all_posts or no IDs, treat as \"all posts\" of this post type.
            if ( $all_posts || empty( $post_ids ) || in_array( $current_id, $post_ids, true ) ) {
                return true;
            }
        }
        return false;
    }

    /**
     * Check if header should be displayed based on conditions
     *
     * @param int $header_id Header ID
     * @return int|bool
     */
    /**
     * Check if header/footer should be displayed based on conditions (including selective singular).
     *
     * @param int $header_id Template post ID.
     * @return int|false Template ID if should display, false otherwise.
     */
    public function should_display($header_id) {
        if ( ! $header_id ) {
            return false;
        }
        $conditions = get_post_meta( $header_id, '_me_builder_condition', true );
        if ( ! is_array( $conditions ) ) {
            $conditions = [];
        }
        $query_object = get_queried_object();
        $current_page = $this->get_current_page( $query_object );
        $current_id  = is_numeric( $current_page ) ? (int) $current_page : 0;

        $include_list      = [];
        $exclude_list      = [];
        $include_selective = []; // items with display_on selective_singular + post_type + post_ids
        $exclude_selective = [];

        foreach ( $conditions as $condition ) {
            $display_type = isset( $condition['display_type'] ) ? $condition['display_type'] : 'include';
            $display_on   = isset( $condition['display_on'] ) ? $condition['display_on'] : '';
            if ( $display_on === 'selective_singular' ) {
                $entry = array(
                    'post_type' => isset( $condition['post_type'] ) ? $condition['post_type'] : '',
                    'post_ids'  => isset( $condition['post_ids'] ) && is_array( $condition['post_ids'] ) ? array_map( 'intval', $condition['post_ids'] ) : array(),
                    'all_posts' => ! empty( $condition['all_posts'] ),
                );
                if ( $display_type === 'include' ) {
                    $include_selective[] = $entry;
                } else {
                    $exclude_selective[] = $entry;
                }
                continue;
            }
            if ( $display_type === 'include' ) {
                $include_list[] = $display_on;
            } else {
                $exclude_list[] = $display_on;
            }
        }

        // Exclude: entire_website or current page type
        if ( ! empty( $exclude_list ) ) {
            $exclude_match = in_array( 'entire_website', $exclude_list, true )
                || in_array( $current_page, $exclude_list, true )
                || ( $current_id && in_array( 'single_page', $exclude_list, true ) );
            if ( $exclude_match ) {
                return false;
            }
        }
        // Exclude: selective singular — current post ID (or all posts of post_type when marked/all IDs empty)
        if ( $current_id && ! empty( $exclude_selective ) ) {
            $current_post      = get_post( $current_id );
            $current_post_type = $current_post ? $current_post->post_type : '';
            foreach ( $exclude_selective as $entry ) {
                $pt        = isset( $entry['post_type'] ) ? $entry['post_type'] : '';
                $ids       = isset( $entry['post_ids'] ) && is_array( $entry['post_ids'] ) ? $entry['post_ids'] : array();
                $all_posts = ! empty( $entry['all_posts'] );
                if ( $pt && $pt !== $current_post_type ) {
                    continue;
                }
                if ( $all_posts || empty( $ids ) || in_array( $current_id, $ids, true ) ) {
                    return false;
                }
            }
        }

        // Include: entire_website or current page type
        if ( ! empty( $include_list ) ) {
            $include_match = in_array( 'entire_website', $include_list, true )
                || in_array( $current_page, $include_list, true )
                || ( $current_id && in_array( 'single_page', $include_list, true ) );
            if ( $include_match ) {
                return $header_id;
            }
        }
        // Include: selective singular — current post ID in any include list, or any post for post_type when marked/all IDs empty
        if ( $current_id && ! empty( $include_selective ) ) {
            $current_post      = get_post( $current_id );
            $current_post_type = $current_post ? $current_post->post_type : '';
            foreach ( $include_selective as $entry ) {
                $pt        = isset( $entry['post_type'] ) ? $entry['post_type'] : '';
                $ids       = isset( $entry['post_ids'] ) && is_array( $entry['post_ids'] ) ? $entry['post_ids'] : array();
                $all_posts = ! empty( $entry['all_posts'] );
                if ( $pt && $pt !== $current_post_type ) {
                    continue;
                }
                if ( $all_posts || empty( $ids ) || in_array( $current_id, $ids, true ) ) {
                    return $header_id;
                }
            }
        }

        return false;
    }

    /**
     * Get current page type
     *
     * @param object $obj Query object
     * @return string|int|bool
     */
    /**
     * Get current page identifier for condition matching (string or singular post ID).
     *
     * @param object $obj Queried object.
     * @return string|int|false
     */
    public function get_current_page($obj){
        // First handle special contexts (front page, blog, archives, etc.).
        switch ( true ) {
            case is_search():
                return 'search_page';
            case is_404():
                return 'four_0_4';
            case is_front_page():
                return 'front_page';
            case is_home():
                return 'blog_page';
            case is_category():
                return 'blog_category_archive';
            case is_tag():
                return 'tag_page';
            case is_author():
                return 'author_page';
            case is_date():
                return 'date_page';
            case is_archive():
                return 'archive_page';
        }
        // For normal singular content (posts, pages, CPTs), use the post ID so Selective Singular can match.
        if ( is_singular() && isset( $obj->ID ) ) {
            return (int) $obj->ID;
        }
        if ( isset( $obj->ID ) ) {
            return (int) $obj->ID;
        }
        return false;
    }
}
