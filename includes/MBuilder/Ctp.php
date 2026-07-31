<?php
declare(strict_types=1);

namespace MagicElements\MBuilder;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Ctp {
    /**
     * Constructor
     */
    public function __construct() {
        add_action('init', [$this, 'register_post_type']);
        add_action('init', [$this, 'maybe_flush_rewrite_rules'], 99);
        add_action('elementor/init', [$this, 'register_elementor_cpt_support']);
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
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => false,
            'show_in_admin_bar'   => false,
            'show_in_nav_menus'   => false,
            'publicly_queryable'  => true,
            'exclude_from_search' => true,
            'has_archive'         => false,
            'query_var'           => true,
            'rewrite'             => ['slug' => 'me-builder'],
            'capability_type'     => 'post',
            'hierarchical'        => false,
            'show_in_rest'        => true,
            'supports'            => ['title', 'editor', 'elementor', 'thumbnail'],
        ];

        register_post_type('me_builder', $args);
    }

    /**
     * One-time rewrite flush after CPT changes (fixes Elementor preview 404).
     */
    public function maybe_flush_rewrite_rules(): void {
        if (get_option('magic_elements_flush_rewrite') === MAGIC_ELEMENTS_VERSION) {
            return;
        }

        flush_rewrite_rules(false);
        update_option('magic_elements_flush_rewrite', MAGIC_ELEMENTS_VERSION);
    }

    /**
     * Register me_builder with Elementor supported post types.
     */
    public function register_elementor_cpt_support(): void {
        $cpt_support = get_option('elementor_cpt_support', ['page', 'post']);

        if (!is_array($cpt_support)) {
            $cpt_support = ['page', 'post'];
        }

        if (!in_array('me_builder', $cpt_support, true)) {
            $cpt_support[] = 'me_builder';
            update_option('elementor_cpt_support', $cpt_support);
        }
    }
}
