<?php
/**
 * Magic Elements Builder Trait
 *
 * @package    Magic Elements
 * @subpackage Magic Elements/includes/trait
 * @author     LoyalCoder <support@loyalcoder.com>
 * @license    GPL-2.0+ http://www.gnu.org/licenses/gpl-2.0.txt
 * @link       https://magickit.loyalcoder.com/
 * @since      1.0.0
 */

namespace MagicElements\Traits;

trait Builder {
    /**
     * Get builder templates with caching support
     *
     * @param array $args Query arguments
     * @param int $cache_time Cache time in seconds
     * @return array
     */
    public function get_builder_templates(array $args = [], int $cache_time = 3600): array {
        $default_args = [
            'post_type' => 'me_builder',
            'post_status' => 'publish',
            'posts_per_page' => 10,
            'paged' => 1,
            'meta_query' => [],
            'orderby' => 'date',
            'order' => 'DESC'
        ];

        $args = wp_parse_args($args, $default_args);
        $cache_key = 'magic_elements_builder_' . md5(serialize($args));

        // Try to get cached data
        $cached_data = get_transient($cache_key);
        if (false !== $cached_data) {
            return $cached_data;
        }

        // Get posts
        $query = new \WP_Query($args);
        $templates = [];

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $templates[] = [
                    'ID' => get_the_ID(),
                    'title' => get_the_title(),
                    'type' => get_post_meta(get_the_ID(), '_me_builder_type', true),
                    'date' => get_the_date(),
                    'status' => get_post_meta(get_the_ID(), '_me_builder_status', true),
                    'condition' => get_post_meta(get_the_ID(), '_me_builder_condition', true),
                    'modified' => get_the_modified_date()
                ];
            }
        }
        wp_reset_postdata();

        $data = [
            'templates' => $templates,
            'total' => $query->found_posts,
            'max_num_pages' => $query->max_num_pages
        ];

        // Cache the data
        set_transient($cache_key, $data, $cache_time);

        return $data;
    }
    public function get_builder_template_by_id(int $post_id) {
        $cache_key = 'magic_elements_builder_template_' . $post_id;
        $cached_data = get_transient($cache_key);
        
        if (false !== $cached_data) {
            return $cached_data;
        }

        $post = get_post($post_id);
        if (!$post || $post->post_type !== 'me_builder') {
            return false;
        }

        $data = [
            'ID' => $post->ID,
            'title' => $post->post_title,
            'type' => get_post_meta($post->ID, '_me_builder_type', true),
            'date' => get_the_date('', $post->ID),
            'status' => get_post_meta($post->ID, '_me_builder_status', true),
            'condition' => get_post_meta($post->ID, '_me_builder_condition', true),
            'modified' => get_the_modified_date('', $post->ID)
        ];

        set_transient($cache_key, $data, HOUR_IN_SECONDS);
        return $data;
    }

    /**
     * Delete builder templates cache
     *
     * @param array $args Query arguments to delete specific cache
     * @return void
     */
    public function delete_builder_cache(array $args = []): void {
        if (empty($args)) {
            // Delete all builder caches
            global $wpdb;
            $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM $wpdb->options WHERE option_name LIKE %s",
                    $wpdb->esc_like('_transient_magic_elements_builder_') . '%'
                )
            );
            $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM $wpdb->options WHERE option_name LIKE %s",
                    $wpdb->esc_like('_transient_timeout_magic_elements_builder_') . '%'
                )
            );
        } else {
            // Delete specific cache
            $cache_key = 'magic_elements_builder_' . md5(serialize($args));
            delete_transient($cache_key);
        }
    }

    /**
     * Insert a new builder template with meta type
     *
     * @param string $title Template title
     * @param string $type Builder type
     * @param array $meta Additional meta data
     * @return int|false The post ID on success, false on failure
     */
    public function insert_builder_template(string $title, string $type, array $meta = []): int|false {
        // Prepare post data
        $post_data = [
            'post_title'   => sanitize_text_field($title),
            'post_type'    => 'me_builder',
            'post_status'  => 'publish',
        ];

        // Insert the post
        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            return false;
        }

        // Add builder type meta
        update_post_meta($post_id, '_me_builder_type', sanitize_text_field($type));

        // Add additional meta if provided
        if (!empty($meta)) {
            foreach ($meta as $key => $value) {
                update_post_meta($post_id, sanitize_key($key), $value);
            }
        }

        // Clear cache
        $this->delete_builder_cache();

        return $post_id;
    }

    /**
     * Delete a builder template
     *
     * @param int $template_id The ID of the template to delete
     * @param bool $force_delete Whether to force delete or move to trash
     * @return bool True on success, false on failure
     */
    public function delete_builder_template(int $template_id, bool $force_delete = true): bool {
        // Verify the post exists and is of the correct type
        $post = get_post($template_id);
        if (!$post || $post->post_type !== 'me_builder') {
            return false;
        }

        // Delete the post
        $result = wp_delete_post($template_id, $force_delete);

        if ($result) {
            // Clear cache after successful deletion
            $this->delete_builder_cache();
            return true;
        }

        return false;
    }
    public function display_type_list() {
        $display_types = array(
            'header' => 'Header',
            'footer' => 'Footer',
        );
        return apply_filters('magic_elements_display_types', $display_types);
    }
    public function get_display_on_list() {
        $display = [
            'entire_website' => esc_html__('Entire Website', 'magic-elements'),
            'front_page'     => esc_html__('Front Page', 'magic-elements'),
            'blog_page'      => esc_html__('Blog Page', 'magic-elements'),
            'four_0_4'       => esc_html__('404', 'magic-elements'),
            'search_page'    => esc_html__('Search Page', 'magic-elements'),
            'blog_archive'   => esc_html__('Blog Archive', 'magic-elements'),
            'blog_date_archive' => esc_html__('Blog Date Archive', 'magic-elements'),
            'blog_category_archive' => esc_html__('Blog Category Archive', 'magic-elements'),
            'blog_tag_archive' => esc_html__('Blog Tag Archive', 'magic-elements'),
            'blog_author_archive' => esc_html__('Author Archive', 'magic-elements'),
        ];
        // Add taxonomy groups
        return apply_filters('magic_elements_display_on_list', $display);
    }
    public function get_display_condition_list($formData) {
        $display_condition = [];
        if(isset($formData['me_builder_condition'])){
            $display_condition = array_map(function($condition) {
                return array(
                    'display_type' => sanitize_text_field($condition['display_type']),
                    'display_on' => sanitize_text_field($condition['display_on'])
                );
            }, $formData['me_builder_condition']);
        }
        return $display_condition;
    }
    public function update_builder_template(int $template_id, string $title, array $meta = []): bool {
        if (empty($template_id)) {
            return false;
        }

        // Verify post exists and is correct type
        $post = get_post($template_id);
        if (!$post || $post->post_type !== 'me_builder') {
            return false;
        }

        $post_data = [
            'post_title' => sanitize_text_field($title),
            'ID' => $template_id,
            'post_type' => 'me_builder',
            'post_status' => 'publish'
        ];

        // Update the post
        $post_id = wp_update_post($post_data);
        if (is_wp_error($post_id)) {
            return false;
        }

        // Update meta data
        foreach ($meta as $key => $value) {
            update_post_meta($post_id, sanitize_key($key), $value);
        }

        // Clear cache after successful update
        $this->delete_builder_cache();

        return true;
    }
}
