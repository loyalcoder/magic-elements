<?php

namespace Elementor_Magic_Kit;

use Elementor\Plugin;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Load elementor class
 */
class Load_Elementor
{
    /**
     * Init elementor class
     *
     * @since 1.0.0
     * @return null
     */
    public function __construct()
    {
        add_action('elementor/elements/categories_registered', [$this, 'register_category']);
        add_action('elementor/widgets/widgets_registered', [$this, 'register_widgets']);
        add_action('elementor/editor/after_enqueue_scripts', [$this, 'custom_elementor_scripts']);
        add_action('wp_enqueue_scripts', [$this, 'ekit_style_register']);
    }


    /**
     * custom_elementor_scripts
     * 
     * @since 1.0.0
     */
    public function custom_elementor_scripts()
    {
        $scripts     = $this->get_scripts();

        foreach ($scripts as $handle => $script) {
            $deps    = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : EM_KIT_VERSION;
            wp_register_script($handle, $script['src'], $deps, $version, true);
            wp_enqueue_script($handle);
        }
    }

    /**
     * Register elementor category
     *
     * @param object $elementor
     *
     * @since 1.0.0
     * @return object
     */
    public function register_category($elementor)
    {
        $elementor->add_category(
            'emk-widgets',
            [
                'title' =>  esc_html__('Elementor Magic Kit', 'elementor-magic-kit'),
                'icon'  => 'eicon-font',
            ]
        );

        return $elementor;
    }

    /**
     * Register elementor widgets
     *
     * @since 1.0.0
     * @return void
     */
    public function register_widgets()
    {
        $this->includeWidgetsFiles();

        Plugin::instance()->widgets_manager->register(new Elementor\Hello_World());
        Plugin::instance()->widgets_manager->register(new Elementor\Button());
        Plugin::instance()->widgets_manager->register(new Elementor\Image_Accordion());
        Plugin::instance()->widgets_manager->register(new Elementor\Team());
        Plugin::instance()->widgets_manager->register(new Elementor\Image());
        Plugin::instance()->widgets_manager->register(new Elementor\Flip_Card());
        Plugin::instance()->widgets_manager->register(new Elementor\Heading());
        Plugin::instance()->widgets_manager->register(new Elementor\Feature_List());
    }

    /**
     * Widget Scripts
     *
     * @since 1.0.0
     * @return array
     */
    public static function getWidgetScript()
    {
        return [];
    }

    /**
     * Lily scripts
     *
     * @return array
     */
    public function get_scripts()
    {
        return [
            'emkit-button' => [
                'src'     => EM_KIT_ASSETS . '/dist/button.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/button.js'),
                'deps'    => ['jquery']
            ],
            'emkit-image-accordion-script' => [
                'src'     => EM_KIT_ASSETS . '/dist/image_accordion.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/image_accordion.js'),
                'deps'    => ['jquery']
            ],
        ];
    }

    /**
     * CHH Elementor styles
     *
     * @since 1.0.0
     * @return array
     */
    public function getStyles()
    {
        return [

            'emkit-button' => [
                'src'     => EM_KIT_ASSETS . '/dist/button.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/button.css'),
            ],
            'emkit-image-accordion' => [
                'src'     => EM_KIT_ASSETS . '/dist/image_accordion.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/image_accordion.css'),
            ],
            'emkit-flipcard' => [
                'src'     => EM_KIT_ASSETS . '/dist/flipcard.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/flipcard.css'),
            ],
            'emkit-team' => [
                'src'     => EM_KIT_ASSETS . '/dist/team.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/team.css'),
            ],
            'emkit-feature-list' => [
                'src'     => EM_KIT_ASSETS . '/dist/feature_list.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/feature_list.css'),
            ],
            'emkit-style' => [
                'src'     => EM_KIT_ASSETS . '/css/style.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/css/style.css'),
            ]
        ];
    }

    /**
     * Widget list
     *
     * @since 1.0.0
     * @return array
     */
    public static function getWidgetList()
    {
        return [
            'Hello_World',
            'Image',
            'Button',
            'Image_Accordion',
            'Team',
            'Flip_Card',
            'Heading',
            'Feature_List',
        ];
    }

    /**
     * Widget files
     *
     * @since 1.0.0
     * @return void
     */
    public function includeWidgetsFiles()
    {
        $scripts     = $this->get_scripts();
        $widget_list = $this->getWidgetList();

        if (!count($widget_list)) {
            return;
        }

        foreach ($widget_list as $handle => $widget) {
            $file = EM_KIT_ELEMENTOR . $widget . '.php';
            if (file_exists($file)) {
                continue;
            }
            require_once $file;
        }

        foreach ($scripts as $handle => $script) {
            $deps    = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : EM_KIT_VERSION;
            wp_register_script($handle, $script['src'], $deps, $version, true);
            // wp_enqueue_script($handle);
        }

        // foreach ($styles as $handle => $style) {
        //     $deps = isset($style['deps']) ? $style['deps'] : false;
        //     $version = isset($style['version']) ? $style['version'] : EM_KIT_VERSION;
        //     wp_register_style($handle, $style['src'], $deps, $version);
        //     // wp_enqueue_style($handle);
        // }
    }
    public function ekit_style_register () {
        $styles  = $this->getStyles();
         foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;
            $version = isset($style['version']) ? $style['version'] : EM_KIT_VERSION;
            wp_register_style($handle, $style['src'], $deps, $version);
        }
    }
}
