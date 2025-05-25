<?php
declare(strict_types=1);

namespace MagicElements\MBuilder;

class Ctp {
    /**
     * Constructor
     */
    public function __construct() {
        add_action('init', [$this, 'register_post_type']);
    }

    /**
     * Register custom post type for Magic Elements Builder
     */
    public function register_post_type(): void {
        $labels = [
            'name'               => esc_html__('Magic Elements Builder', 'magic-elements'),
            'singular_name'      => esc_html__('Magic Elements Builder', 'magic-elements'),
            'menu_name'          => esc_html__('Magic Elements Builder', 'magic-elements'),
            'add_new'            => esc_html__('Add New', 'magic-elements'),
            'add_new_item'       => esc_html__('Add New Template', 'magic-elements'),
            'edit_item'          => esc_html__('Edit Template', 'magic-elements'),
            'new_item'           => esc_html__('New Template', 'magic-elements'),
            'view_item'          => esc_html__('View Template', 'magic-elements'),
            'search_items'       => esc_html__('Search Templates', 'magic-elements'),
            'not_found'          => esc_html__('No templates found', 'magic-elements'),
            'not_found_in_trash' => esc_html__('No templates found in Trash', 'magic-elements'),
        ];

        $args = [
            'labels'              => $labels,
            'public'              => false,
            'show_ui'             => false,
            'show_in_menu'        => false,
            'show_in_admin_bar'   => false,
            'show_in_nav_menus'   => false,
            'publicly_queryable'  => false,
            'exclude_from_search' => true,
            'has_archive'         => false,
            'query_var'           => false,
            'rewrite'             => false,
            'capability_type'     => 'post',
            'hierarchical'        => false,
            'supports'            => ['title', 'editor', 'elementor'],
            'menu_position'       => null,
        ];

        register_post_type('me_builder', $args);
    }
}
