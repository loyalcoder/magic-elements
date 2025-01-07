<?php

namespace Elementor_Magic_Kit;

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
    public function get_scripts()
    {
        return [
            'script' => [
                'src'     => EM_KIT_ASSETS . '/js/frontend.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/js/frontend.js'),
                'deps'    => ['jquery']
            ]
        ];
    }

    /**
     * Styles
     *
     * @return array
     */
    public function get_styles()
    {
        return [
            'emk-button' => [
                'src'     => EM_KIT_ASSETS . '/css/elementor/button.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/css/elementor/button.css'),
            ],
            'emk-social' => [
                'src'     => EM_KIT_ASSETS . '/css/elementor/social.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/css/elementor/social.css'),
            ],
        ];
        return [
            'emk-icons' => [
                'src'     => EM_KIT_ASSETS . '/css/elementor/icon.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/css/elementor/icon.css'),
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
            $version = isset($script['version']) ? $script['version'] : EM_KIT_VERSION;

            wp_register_script($handle, $script['src'], $deps, $version, true);
        }

        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;
            $version = isset($style['version']) ? $style['version'] : EM_KIT_VERSION;

            wp_register_style($handle, $style['src'], $deps, $version);
        }
    }
    public function register_admin_assets() {
        if (isset($_GET['page']) && $_GET['page'] === 'magic-kit-dashboard') {
            wp_enqueue_style(
                'elementor-magic-kit-admin',
                EM_KIT_ASSETS . '/dist/admin.css',
                [],
                filemtime(EM_KIT_PATH . '/assets/dist/admin.css')
            );

            wp_enqueue_script(
                'elementor-magic-kit-admin',
                EM_KIT_ASSETS . '/dist/admin.js', 
                ['jquery'],
                filemtime(EM_KIT_PATH . '/assets/dist/admin.js'),
                true
            );
        }
    }
    public function emk_elementor_css() {
        wp_enqueue_style( 'emk-editor', EM_KIT_ASSETS . '/css/editor.css', [], EM_KIT_VERSION );
    }
}
