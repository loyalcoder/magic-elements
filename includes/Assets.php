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
    }
    public function elementor_css() {
        wp_enqueue_style( 'magic-elements-editor', MAGIC_ELEMENTS_ASSETS . '/css/editor.css', [], MAGIC_ELEMENTS_VERSION );
    }
}
