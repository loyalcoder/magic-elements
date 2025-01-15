<?php

namespace MagicElements;

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Assets class handler
 */
class Assets
{
    /**
     * Initialize assets
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'register_admin_assets']);
        add_action('elementor/editor/after_enqueue_styles', [$this, 'elementor_css']);
    }

    /**
     * Register admin assets
     */
    public function register_admin_assets()
    {
        $screen = get_current_screen();

        if ($screen && $screen->id === 'toplevel_page_magicelements-dashboard') {
            wp_enqueue_style(
                'magicelements_admin',
                MAGICELEMENTS_ASSETS . '/dist/admin.css',
                [],
                filemtime(MAGICELEMENTS_PATH . '/assets/dist/admin.css')
            );

            wp_enqueue_script(
                'magicelements_admin',
                MAGICELEMENTS_ASSETS . '/dist/admin.js',
                ['jquery'],
                filemtime(MAGICELEMENTS_PATH . '/assets/dist/admin.js'),
                true
            );
        }
    }

    /**
     * Enqueue Elementor editor CSS
     */
    public function elementor_css()
    {
        wp_enqueue_style(
            'magicelements_editor',
            MAGICELEMENTS_ASSETS . '/css/editor.css',
            [],
            MAGICELEMENTS_VERSION
        );
    }
}
