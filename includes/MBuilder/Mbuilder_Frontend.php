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
     * Get active header ID
     *
     * @return int|bool
     */
    public function get_active_id($type = 'header'){
        $args = [
            'post_type' => 'me_builder',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'ID',
            'order' => 'ASC',
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key' => '_me_builder_type',
                    'value' => $type,
                    'compare' => '='
                ],
                [
                    'key' => '_me_builder_status', 
                    'value' => '1',
                    'compare' => '='
                ]
            ]
        ];
        $header_post = $this->get_builder_templates($args);

        if (empty($header_post['templates'])) {
            return false;
        }

        $selected_id = false;
        $selected_priority = PHP_INT_MAX;

        foreach ($header_post['templates'] as $template) {
            $post_id = isset($template['ID']) ? (int) $template['ID'] : 0;
            if (!$post_id) {
                continue;
            }

            $priority = $this->get_match_priority($post_id, isset($template['condition']) ? $template['condition'] : []);
            if ($priority === false) {
                continue;
            }

            if ($priority < $selected_priority) {
                $selected_priority = $priority;
                $selected_id = $post_id;
            }
        }

        return $selected_id;
    }

    /**
     * Check if header should be displayed based on conditions
     *
     * @param int $header_id Header ID
     * @return int|bool
     */
    public function should_display($header_id) {
        return $this->get_match_priority((int) $header_id) !== false ? (int) $header_id : false;
    }

    /**
     * Get match priority for a template.
     * Lower number means higher priority.
     *
     * Priority order:
     * 1) selective_singular exact current page match
     * 2) specific display_on current context match
     * 3) entire_website fallback
     *
     * @param int $header_id Template ID
     * @param array $conditions Optional preloaded conditions
     * @return int|false
     */
    private function get_match_priority(int $header_id, array $conditions = [])
    {
        if (!$header_id) {
            return false;
        }

        $get_display_condition = !empty($conditions)
            ? $conditions
            : get_post_meta($header_id, '_me_builder_condition', true);

        $include = [];
        $exclude = [];
        $has_entire_website = false;
        $has_current_context = false;
        $has_selective_singular = false;

        $query_object = get_queried_object();
        $current_page = $this->get_current_page($query_object);
        $current_object_id = (int) get_queried_object_id();

        if (!empty($get_display_condition)) {
            foreach ($get_display_condition as $condition) {
                $display_type = isset($condition['display_type']) ? (string) $condition['display_type'] : '';
                $display_on = isset($condition['display_on']) ? (string) $condition['display_on'] : '';

                if ($display_type === 'include') {
                    $include[] = $display_on;

                    if ($display_on === 'entire_website') {
                        $has_entire_website = true;
                    }

                    if ($display_on === 'selective_singular' && $current_object_id > 0 && !empty($condition['post_ids']) && is_array($condition['post_ids'])) {
                        $post_ids = array_map('intval', $condition['post_ids']);
                        if (in_array($current_object_id, $post_ids, true)) {
                            $has_selective_singular = true;
                        }
                    }

                    if ($current_page !== false && $display_on === (string) $current_page) {
                        $has_current_context = true;
                    }
                } else {
                    $exclude[] = $display_on;
                }
            }
        }

        // Include rules have higher priority than exclude rules.
        if ($has_selective_singular) {
            return 1;
        }

        if ($has_current_context) {
            return 2;
        }

        if ($has_entire_website) {
            return 3;
        }

        // Keep previous behavior for ID-based include condition values.
        if ($current_object_id > 0 && in_array((string) $current_object_id, $include, true)) {
            return 2;
        }

        // Exclude rules apply only when no include matched.
        if (!empty($exclude)) {
            if (in_array('entire_website', $exclude, true) || ($current_page !== false && in_array((string) $current_page, $exclude, true))) {
                return false;
            }
            if ($current_object_id > 0 && in_array((string) $current_object_id, $exclude, true)) {
                return false;
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
    public function get_current_page($obj){
        switch (true) {
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
            case is_single():
                return 'single_page';
            case isset($obj->ID) :
                return $obj->ID;
            default:
                return false;
        }
    }
}
