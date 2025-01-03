<?php

namespace Elementor_Magic_Kit\Admin;

/**
 * Ajax handler for admin settings
 */
class Ajax {

    /**
     * Initialize ajax handlers
     */
    public function __construct() {
        add_action('wp_ajax_save_magic_kit_settings', [$this, 'save_settings']);
    }

    /**
     * Save widget settings
     */
    public function save_settings() {
        // Sanitize and verify nonce
        $nonce = isset($_POST['nonce']) ? sanitize_text_field($_POST['nonce']) : '';
        if (!wp_verify_nonce($nonce, 'magic_kit_settings_nonce')) {
            wp_send_json_error([
                'message' => esc_html__('Security check failed', 'magic-kit')
            ]);
        }

        // Verify user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => esc_html__('You do not have permission to perform this action', 'magic-kit')
            ]);
        }

        // Get and sanitize enabled widgets
        $enabled_widgets = [];
        if (isset($_POST['magic_kit_enabled_widgets']) && is_array($_POST['magic_kit_enabled_widgets'])) {
            $enabled_widgets = array_map(function($widget) {
                return sanitize_key($widget);
            }, $_POST['magic_kit_enabled_widgets']);
        }

        // Update option
        update_option('magic_kit_enabled_widgets', $enabled_widgets);

        wp_send_json_success([
            'message' => esc_html__('Settings saved successfully', 'magic-kit'),
            'widgets' => $enabled_widgets
        ]);
    }
}
