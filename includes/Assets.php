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
    

         add_action( 'elementor/editor/after_enqueue_styles', [$this, 'elementor_css'] );

         /**
          * Enqueue editor styles
          */
        add_action('wp_enqueue_scripts', [$this, 'enqueue_front_assets']);
    }

    public function register_admin_assets() {
        $screen = get_current_screen();                
        if ($screen && $screen->id === 'toplevel_page_magic-elements-dashboard') {
            wp_enqueue_style(
                'magic-element-admin',
                MAGIC_ELEMENTS_ASSETS . '/dist/admin.css',
                [],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/dist/admin.css')
            );
            wp_enqueue_script(
                'magic-element-admin',
                MAGIC_ELEMENTS_ASSETS . '/dist/admin.js', 
                ['jquery'],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/dist/admin.js'),
                true
            );
        }
        // builder page
        if ($screen && $screen->id === 'magic-elements_page_magic-builder') {
            wp_enqueue_style(
                'magic-element-builder',
                MAGIC_ELEMENTS_ASSETS . '/dist/builder.css',
                [],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/dist/builder.css')
            );
            wp_enqueue_style(
                'magic-element-builder-select2',
                MAGIC_ELEMENTS_ASSETS . '/vendors/select2/select2.min.css',
                [],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/vendors/select2/select2.min.css')
            );
            wp_enqueue_script(
                'magic-element-builder',
                MAGIC_ELEMENTS_ASSETS . '/dist/builder.js',
                ['jquery'],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/dist/builder.js'),
                true
            );
            wp_enqueue_script(
                'magic-element-builder-select2',
                MAGIC_ELEMENTS_ASSETS . '/vendors/select2/select2.min.js',
                ['jquery'],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/vendors/select2/select2.min.js'),
                true
            );
            wp_enqueue_script(
                'magic-element-builder-conditions',
                MAGIC_ELEMENTS_ASSETS . '/js/builder-conditions.js',
                ['jquery', 'magic-element-builder-select2'],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/js/builder-conditions.js'),
                true
            );
            wp_enqueue_style(
                'magic-element-builder-conditions',
                MAGIC_ELEMENTS_ASSETS . '/css/builder-conditions.css',
                ['magic-element-builder'],
                filemtime(MAGIC_ELEMENTS_PATH . '/assets/css/builder-conditions.css')
            );
            wp_localize_script(
                'magic-element-builder',
                'me_builder_ajax_object',
                [
                    'ajax_url' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('me_builder_nonce')
                ]
            );
        }
    }
    public function elementor_css() {
        wp_enqueue_style( 'magic-elements-editor', MAGIC_ELEMENTS_ASSETS . '/css/editor.css', [], MAGIC_ELEMENTS_VERSION );
    }

    /**
     * Frontend assets
     */
    public function enqueue_front_assets() {
        $front_css = MAGIC_ELEMENTS_PATH . '/assets/css/frontend.css';
        $front_css_url = MAGIC_ELEMENTS_ASSETS . '/css/frontend.css';
        if (file_exists($front_css)) {
            wp_enqueue_style(
                'magic-elements-frontend',
                $front_css_url,
                [],
                filemtime($front_css)
            );
        }
    }
}
