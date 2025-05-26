<?php
declare(strict_types=1);

namespace MagicElements\MBuilder;

use MagicElements\Traits\Builder;

class MBuilder {
    use Builder;

    /**
     * Constructor
     */
    public function __construct() {
        add_action('wp_ajax_me_insert_template', [$this, 'ajax_insert_template']);
        add_action('wp_ajax_new_or_update_builder_template', [$this, 'ajax_new_or_update_builder_template']);
        add_action('wp_ajax_me_add_condition', [$this, 'ajax_add_condition']);
    }

    /**
     * Handle AJAX request to insert a new template
     */
    public function ajax_insert_template(): void {
        // Verify nonce
        if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'me_insert_template')) {
            wp_send_json_error(['message' => esc_html__('Invalid security token', 'magic-elements')]);
        }

        // Validate required fields
        if (!isset($_POST['title']) || !isset($_POST['type'])) {
            wp_send_json_error(['message' => esc_html__('Missing required fields', 'magic-elements')]);
        }

        // Sanitize input
        $title = sanitize_text_field($_POST['title']);
        $type = sanitize_text_field($_POST['type']);
        $condition = isset($_POST['condition']) ? sanitize_text_field($_POST['condition']) : 'all';

        // Additional meta data
        $meta = [
            '_me_builder_condition' => $condition
        ];

        // Insert template
        $template_id = $this->insert_builder_template($title, $type, $meta);

        if (!$template_id) {
            wp_send_json_error(['message' => esc_html__('Failed to create template', 'magic-elements')]);
        }

        wp_send_json_success([
            'message' => esc_html__('Template created successfully', 'magic-elements'),
            'template_id' => $template_id
        ]);
    }

    public function ajax_new_or_update_builder_template(): void {
        // Verify nonce
        if (!check_ajax_referer('me_builder_nonce', 'nonce', false)) {
            wp_send_json_error(['message' => esc_html__('Invalid security token', 'magic-elements')]);
        }

        $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
        $html = '';
        if ($post_id) {
             ob_start();
             magic_elements_get_template_part('admin/builder/update');
             $html = ob_get_clean();
        } else {
            ob_start();
            magic_elements_get_template_part('admin/builder/addnew');
             $html = ob_get_clean();
        }
        wp_send_json_success([
            'html' => $html,
            'post_id' => $post_id
        ]);
        wp_die();
    }
    public function ajax_add_condition(): void {
        // Verify nonce
        if (!check_ajax_referer('me_builder_nonce', 'nonce', false)) {
            wp_send_json_error(['message' => esc_html__('Invalid security token', 'magic-elements')]);
        }
        $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
        $html = '';

            ob_start();
            magic_elements_get_template_part('admin/builder/add-condition', '', ['post_id' => $post_id]);
            $html = ob_get_clean();
        
        wp_send_json_success([
            'html' => $html,
            'post_id' => $post_id
        ]);
        wp_die();
    }
}
