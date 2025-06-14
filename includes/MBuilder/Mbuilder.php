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
        add_action('wp_ajax_me_load_preview_data', [$this, 'ajax_load_preview_data']);
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
        $post_data = $this->get_builder_template_by_id($post_id);
        $display_on = $this->get_display_on_list();
        $args = [
            'post_id' => $post_id,
            'display_type' => $this->display_type_list(),
            'post_data' => $post_data,
            'display_on' => $display_on
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
        $post_id = isset($formData['template_id']) ? intval($formData['template_id']) : 0;
        $meta = [
            '_me_builder_condition' => $display_condition,
            '_me_builder_type' => $template_type,
            '_me_builder_status' => $template_status
        ];
        if($post_id){
            $template_id = $this->update_builder_template($post_id, $template_title, $meta);
            $message = esc_html__('Template updated successfully', 'magic-elements');
        }else{
            $template_id = $this->insert_builder_template($template_title, $type, $meta);
            $message = esc_html__('Template created successfully', 'magic-elements');
        }
        $edit_with_elementor = add_query_arg([
            'post' => $template_id,
            'action' => 'elementor'
        ], admin_url('post.php'));
        if($template_id != ''){
            $edit_elementor_html = '<a href="'.esc_url($edit_with_elementor).'" class="button button-primary" target="_blank">'.esc_html__('Edit with Elementor', 'magic-elements').'</a>';
        }
        wp_send_json_success([
            'message' => $message,
            'edit_link' => $edit_elementor_html
        ]);
        
        wp_die();
    }
    public function ajax_load_preview_data(): void {
        // Verify nonce
        if (!check_ajax_referer('me_builder_nonce', 'nonce', false)) {
            wp_send_json_error(['message' => esc_html__('Invalid security token', 'magic-elements')]);
        }
       
       $data_type = isset($_POST['data_type']) ? sanitize_text_field($_POST['data_type']) : '';
       $paged = isset($_POST['paged']) ? intval($_POST['paged']) : 1;
       $args = $this->get_builder_templates([
        'post_type' => 'me_builder',
        'post_status' => 'publish',
        'posts_per_page' => 5,
        'paged' => $paged,
        'meta_query' => [
            [
                'key' => '_me_builder_type',
                'value' => $data_type,
                'compare' => '='
            ]
        ],
        'orderby' => [
            'meta_value' => 'DESC',
            'date' => 'DESC'
        ],
        'meta_key' => '_me_builder_status'
       ]);
       $html = '';
       ob_start();
       magic_elements_get_template_part('admin/builder/builder-list', '', $args);
       $html = ob_get_clean();
       wp_send_json_success([
        'message' => esc_html__('Preview data loaded successfully', 'magic-elements'),
        'html' => $html,
        'pagination_html' => $args['pagination_html']
       ]);
       wp_die();
    }
}
