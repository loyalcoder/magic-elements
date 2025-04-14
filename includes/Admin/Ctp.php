<?php
namespace MagicElements\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Custom Post Type Handler
 * 
 * Handles registration and management of custom post types for Magic Elements.
 * This class is responsible for:
 * - Registering the Magic Builder post type
 * - Managing post type capabilities and settings
 * - Handling post type specific functionality
 *
 * @package MagicElements\Admin
 * @since 1.0.0
 */
class Ctp {
    /**
     * Initialize the custom post type handler
     * 
     * Hooks into WordPress init action to register custom post types
     * 
     * @since 1.0.0
     */
    public function __construct() {
        add_action('init', [$this, 'register_magic_builder_post_type']);
    }

    /**
     * Register Magic Builder custom post type
     * 
     * Creates a new post type for Magic Builder templates with custom labels
     * and settings. The post type is hidden from the main admin menu but
     * accessible through the admin bar.
     *
     * @since 1.0.0
     * @return void
     */
    public function register_magic_builder_post_type() {
        $labels = [
            'name'               => esc_html__('Magic Builder', 'magic-elements'),
            'singular_name'      => esc_html__('Magic Builder', 'magic-elements'),
            'menu_name'          => esc_html__('Magic Builder', 'magic-elements'),
            'add_new'            => esc_html__('Add New', 'magic-elements'),
            'add_new_item'       => esc_html__('Add New Magic Builder', 'magic-elements'),
            'edit_item'          => esc_html__('Edit Magic Builder', 'magic-elements'),
            'new_item'           => esc_html__('New Magic Builder', 'magic-elements'),
            'view_item'          => esc_html__('View Magic Builder', 'magic-elements'),
            'search_items'       => esc_html__('Search Magic Builder', 'magic-elements'),
            'not_found'          => esc_html__('No Magic Builder found', 'magic-elements'),
            'not_found_in_trash' => esc_html__('No Magic Builder found in Trash', 'magic-elements'),
        ];

        $args = [
            'labels'              => $labels,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => false, // Hide from admin menu
            'show_in_nav_menus'   => false,
            'show_in_admin_bar'   => true,
            'menu_position'       => 5,
            'menu_icon'           => 'dashicons-buddicons-groups',
            'hierarchical'        => false,
            'supports'            => ['title', 'editor', 'elementor'],
            'has_archive'         => true,
            'rewrite'            => ['slug' => 'magic-builder'],
            'show_in_rest'       => false, // Enable Gutenberg editor
        ];

        register_post_type('magic_builder', $args);
    }
}