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
        //add_action('wp_enqueue_scripts', [$this, 'register_assets']);
        add_action('admin_enqueue_scripts', [$this, 'register_admin_assets']);
    

         add_action( 'elementor/editor/after_enqueue_styles', [$this, 'emk_elementor_css'] );

         /**
          * Enqueue editor styles
          */
        
    }

    /**
     * Scripts
     *
     * @return array
     */
    public function get_scripts(): array
    {
        return [
            'script' => [
                'src'     => MAGIC_ELEMENTS_ASSETS . '/js/frontend.js',
                'version' => filemtime(MAGIC_ELEMENTS_PATH . '/assets/js/frontend.js'),
                'deps'    => ['jquery']
            ]
        ];
    }

    /**
     * Styles
     *
     * @return array
     */
    public function get_styles(): array
    {
        return [
            'emk-button' => [
                'src'     => MAGIC_ELEMENTS_ASSETS . '/css/elementor/button.css',
                'version' => filemtime(MAGIC_ELEMENTS_PATH . '/assets/css/elementor/button.css'),
            ],
            'emk-social' => [
                'src'     => MAGIC_ELEMENTS_ASSETS . '/css/elementor/social.css',
                'version' => filemtime(MAGIC_ELEMENTS_PATH . '/assets/css/elementor/social.css'),
            ],
        ];
        return [
            'emk-icons' => [
                'src'     => MAGIC_ELEMENTS_ASSETS . '/css/elementor/icon.css',
                'version' => filemtime(MAGIC_ELEMENTS_PATH . '/assets/css/elementor/icon.css'),
            ],
        ];
    }

    /**
     * Register assets
     */
    public function register_assets()
    {
        $scripts = $this->get_scripts();
        $styles = $this->get_styles();

        foreach ($scripts as $handle => $script) {
            $deps = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : MAGIC_ELEMENTS_VERSION;

            wp_register_script($handle, $script['src'], $deps, $version, true);
        }

        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;
            $version = isset($style['version']) ? $style['version'] : MAGIC_ELEMENTS_VERSION;

            wp_register_style($handle, $style['src'], $deps, $version);
        }
    }
    public function register_admin_assets() {
        $screen = get_current_screen();
        if ($screen && $screen->id === 'toplevel_page_magic-kit-dashboard') {
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
    public function emk_elementor_css() {
        wp_enqueue_style( 'emk-editor', MAGIC_ELEMENTS_ASSETS . '/css/editor.css', [], MAGIC_ELEMENTS_VERSION );
    }
}
