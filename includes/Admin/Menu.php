<?php

namespace Elementor_Magic_Kit\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Menu
 * 
 * Handles the admin menu registration and rendering for the Magic Kit plugin.
 * This class is responsible for:
 * - Adding the main plugin menu item
 * - Adding submenu items
 * - Rendering the dashboard/settings pages
 *
 * @package Elementor_Magic_Kit\Admin
 * @since 1.0.0
 */
class Menu
{
    /**
     * Initialize menu
     * 
     * Hooks into WordPress admin_menu action to register the plugin menus
     */
    function __construct()
    {
        add_action('admin_menu', [$this, 'admin_menu']);
    }

    /**
     * Handle plugin menu
     * 
     * Registers the main menu and submenu items for the plugin
     *
     * @return void
     */
    public function admin_menu()
    {
        $parent_slug = 'magic-kit-dashboard';
        $capability = 'manage_options';

        add_menu_page(esc_html__('MagicKit', 'magic-kit'), esc_html__('Magic Kit', 'magic-kit'), $capability, $parent_slug, [$this, 'dashboard_page'], 'dashicons-buddicons-groups');
        add_submenu_page($parent_slug, esc_html__('Settings', 'magic-kit'), esc_html__('Settings', 'magic-kit'), $capability, $parent_slug, [$this, 'dashboard_page']);
    }

    /**
     * Handle menu page
     * 
     * Initializes and renders the settings page content
     *
     * @return void
     */
    public function dashboard_page()
    {
        $settings = new Settings();
        $settings->settings_page();
    }
}
