<?php

namespace MagicElements\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
use MagicElements\Trait\Builder;
/**
 * Class Ajax
 * 
 * Handles AJAX requests for the Magic Kit plugin's admin settings.
 * This class is responsible for:
 * - Processing AJAX requests to save widget settings
 * - Validating nonces and user capabilities
 * - Sanitizing and storing widget configuration
 * - Handling template preview requests
 *
 * @package MagicElements\Admin
 * @since 1.0.0
 */
class Ajax {
    use Builder;
    /**
     * Initialize ajax handlers
     * 
     * Hooks into WordPress AJAX actions to handle settings updates and previews
     */
    public function __construct() {
        add_action('wp_ajax_save_magic_kit_settings', [$this, 'save_settings']);
        add_action('wp_ajax_magic_builder_header_list', [$this, 'magic_builder_header_list']);
        add_action('wp_ajax_magic_builder_header_condition_form', [$this, 'magic_builder_header_condition_form']);
        add_action('wp_ajax_magic_builder_singular_options', [$this, 'magic_builder_singular_options']);
        add_action('wp_ajax_magic_builder_single_post_type_options', [$this, 'magic_builder_single_post_type_options']);
        add_action('wp_ajax_magic_builder_search_posts', [$this, 'magic_builder_search_posts']);
    }

    /**
     * Save widget settings
     * 
     * Handles the AJAX request to save enabled/disabled widget settings.
     * Performs security checks and sanitizes input data before saving.
     *
     * @return void Sends JSON response and exits
     */
    public function save_settings() {
        // Sanitize and verify nonce
        $nonce = isset($_POST['nonce']) ? sanitize_key($_POST['nonce']) : '';
        if (!wp_verify_nonce($nonce, 'magic_elements_settings_nonce')) {
            wp_send_json_error([
                'message' => esc_html__('Security check failed', 'magic-elements')
            ]);
        }

        // Verify user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => esc_html__('You do not have permission to perform this action', 'magic-elements')
            ]);
        }

        // Get and sanitize enabled widgets
        $enabled_widgets = [];
        if (isset($_POST['magic_elements_enabled_widgets'])) {
            // Unslash and ensure it's an array
            $raw_widgets = ! is_array( $_POST['magic_elements_enabled_widgets'] ) 
            ? array() 
            : array_map( 'sanitize_text_field', wp_unslash( $_POST['magic_elements_enabled_widgets'] ) );

            
            if (is_array($raw_widgets)) {
                // Sanitize each item in the array
                $enabled_widgets = array_map('sanitize_key', $raw_widgets);
            }
        }
        // Update option
        update_option('magic_elements_enabled_widgets', $enabled_widgets);

        wp_send_json_success([
            'message' => esc_html__('Settings saved successfully', 'magic-elements'),
            'widgets' => $enabled_widgets
        ]);
    }

    public function magic_builder_header_list() {
        check_ajax_referer('magic_builder_nonce', 'nonce');
        $builder_posts = $this->get_builder_by_type('header');
        $display = $this->get_display_on_list();
        $post_types = $this->get_all_post_type_list();
        ob_start();
         include __DIR__ . '/views/builder/builder.php';
        $html = ob_get_clean();
        wp_send_json_success([
            'html' => $html
        ]);
    }
   
    public function magic_builder_header_condition_form() {
        check_ajax_referer('magic_builder_nonce', 'nonce');
        $display = $this->get_display_on_list();
        ob_start();
        include __DIR__ . '/views/builder/condition-form.php';
        $html = ob_get_clean();
        wp_send_json_success([
            'html' => $html
        ]);
    }
    public function magic_builder_singular_options() {
        check_ajax_referer('magic_builder_nonce', 'nonce');
        $singular_options = $this->get_all_post_type_list();
        ob_start();
        include __DIR__ . '/views/builder/ctp-list.php';
        $html = ob_get_clean();
        wp_send_json_success([
            'html' => $html
        ]);
    }
    public function magic_builder_single_post_type_options() {
        check_ajax_referer('magic_builder_nonce', 'nonce');
        if (!isset($_REQUEST['post_type']) || empty($_REQUEST['post_type'])) {
            wp_send_json_error([
                'message' => esc_html__('Post type is required', 'magic-elements')
            ]);
        }
        $post_type = sanitize_key($_REQUEST['post_type']);
        if (!post_type_exists($post_type)) {
            wp_send_json_error([
                'message' => esc_html__('Invalid post type', 'magic-elements')
            ]);
        }
        $post_types_archive_list = $this->post_type_archive_list($post_type);
        ob_start();
        include __DIR__ . '/views/builder/ctp-singular.php';
        $html = ob_get_clean();
        wp_send_json_success([
            'html' => $html
        ]);
    }
    public function magic_builder_search_posts() {
        check_ajax_referer('magic_builder_nonce', 'nonce');
        $page = isset($_REQUEST['page']) ? intval($_REQUEST['page']) : 1;
        $posts_per_page = 100; // Set a reasonable number for posts per page
    
        $query_args = [
            'post_type' => 'product',
            'posts_per_page' => $posts_per_page,
            'paged' => $page,
            's' => ''
        ];
        
        $query = new \WP_Query($query_args);
    
        $items = [];
        foreach ($query->posts as $post) {
            $items[] = [
                'ID' => $post->ID,
                'post_title' => $post->post_title
            ];
        }
        _log($items);
        
        wp_send_json_success([
            'items' => $items,
            'total' => $query->found_posts, // Total count for pagination
            'pagination' => [
                'more' => $page < $query->max_num_pages // Whether more pages exist
            ]
        ]);
    }
}