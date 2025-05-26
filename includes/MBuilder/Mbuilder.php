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
        add_action('wp_ajax_me_submit_template', [$this, 'ajax_submit_template']);
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
        $args = [
            'post_id' => $post_id,
            'display_type' => $this->display_type_list()
        ];
        $html = '';
        ob_start();
        magic_elements_get_template_part('admin/builder/addnew', '', $args);
        $html = ob_get_clean();
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
        $display_on  = $this->get_display_on_list();
        $args = [
            'post_id' => $post_id,
            'display_on' => $display_on
        ];
        ob_start();
        magic_elements_get_template_part('admin/builder/add-condition', '', $args);
        $html = ob_get_clean();
        
        wp_send_json_success([
            'html' => $html,
            'post_id' => $post_id
        ]);
        wp_die();
    }
    public function ajax_submit_template(): void {
        // Verify nonce
        if (!check_ajax_referer('me_builder_nonce', 'nonce', false)) {
            wp_send_json_error(['message' => esc_html__('Invalid security token', 'magic-elements')]);
        }
        
        $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
        $title = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $type = isset($_POST['type']) ? sanitize_text_field($_POST['type']) : '';
        parse_str($_POST['formData'], $formData);
        $display_condition = $this->get_display_condition_list($formData);
        $template_title = isset($formData['template_title']) ? sanitize_text_field($formData['template_title']) : '';
        $template_status = isset($formData['template_status']) ? intval($formData['template_status']) : 0;
        $template_type = isset($formData['template_type']) ? sanitize_text_field($formData['template_type']) : '';
        $meta = [
            '_me_builder_condition' => $display_condition
        ];
        $template_id = $this->insert_builder_template($template_title, $type, $meta);
        if($template_id){
        wp_send_json_success([
            'message' => esc_html__('Template submitted successfully', 'magic-elements'),
            'post_id' => $template_id,
            ]);
        }else{
            wp_send_json_error(['message' => esc_html__('Failed to create template', 'magic-elements')]);
        }
        wp_die();
    }
}
