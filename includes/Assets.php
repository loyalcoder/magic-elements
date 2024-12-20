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
    }

    /**
     * Pkun scripts
     *
     * @return array
     */
    public function get_scripts()
    {
        return [
            'pkun-script' => [
                'src'     => EM_KIT_ASSETS . '/js/frontend.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/js/frontend.js'),
                'deps'    => ['jquery']
            ],
            'pkun-enquiry-script' => [
                'src'     => EM_KIT_ASSETS . '/js/enquiry.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/js/enquiry.js'),
                'deps'    => ['jquery']
            ]
        ];
    }

    /**
     * Pkun styles
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

        wp_localize_script('pkun-enquiry-script', 'EM_KIT_data', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'message' => __('Message from enquiry form', 'pkun'),
        ]);

        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;
            $version = isset($style['version']) ? $style['version'] : EM_KIT_VERSION;

            wp_register_style($handle, $style['src'], $deps, $version);
        }
    }
}
