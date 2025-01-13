<?php

namespace MagicElements\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Ajax
 * 
 * Handles AJAX requests for the Magic Kit plugin's admin settings.
 * This class is responsible for:
 * - Processing AJAX requests to save widget settings
 * - Validating nonces and user capabilities
 * - Sanitizing and storing widget configuration
 *
 * @package Elementor_Magic_Kit\Admin
 * @since 1.0.0
 */
class Ajax {

    /**
     * Initialize ajax handlers
     * 
     * Hooks into WordPress AJAX actions to handle settings updates
     */
    public function __construct() {
        add_action('wp_ajax_save_magic_kit_settings', [$this, 'save_settings']);
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
        if (!wp_verify_nonce($nonce, 'magic_kit_settings_nonce')) {
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
        if (isset($_POST['magic_kit_enabled_widgets'])) {
            // Unslash and ensure it's an array
            $raw_widgets = ! is_array( $_POST['magic_kit_enabled_widgets'] ) 
            ? array() 
            : array_map( 'sanitize_text_field', wp_unslash( $_POST['magic_kit_enabled_widgets'] ) );

            
            if (is_array($raw_widgets)) {
                // Sanitize each item in the array
                $enabled_widgets = array_map('sanitize_key', $raw_widgets);
            }
        }
        // Update option
        update_option('magic_kit_enabled_widgets', $enabled_widgets);

        wp_send_json_success([
            'message' => esc_html__('Settings saved successfully', 'magic-elements'),
            'widgets' => $enabled_widgets
        ]);
    }
}
