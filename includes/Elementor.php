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
       
       $enabled_widgets = get_option('magic_kit_enabled_widgets', array());
       
       $widgets = (array) self::includeWidgetsFiles();
       
       foreach ($widgets as $widget) {
           $widget_key = strtolower(str_replace('_', '', $widget));
           if (!empty($enabled_widgets) && in_array($widget_key, $enabled_widgets)) {
               $widget_class = "\\Elementor_Magic_Kit\\Elementor\\$widget";
               \Elementor\Plugin::instance()->widgets_manager->register(new $widget_class());
           }
       }
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
            'emkit-post-tab' => [
                'src'     => EM_KIT_ASSETS . '/dist/post_tab.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/post_tab.js'),
            ],
            'emkit-pricingtable' => [
                'src'     => EM_KIT_ASSETS . '/dist/pricingtable.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/pricingtable.js'),
            ],
            'emkit-image-accordion-script' => [
                'src'     => EM_KIT_ASSETS . '/dist/image_accordion.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/image_accordion.js'),
            ],
            'emkit-card' => [
                'src'     => EM_KIT_ASSETS . '/dist/card.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/card.js'),
            ],
            'emkit-counter' => [
                'src'     => EM_KIT_ASSETS . '/dist/counter.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/counter.js'),
                'deps'    => ['jquery']
            ],
            'emkit-accordion' => [
                'src'     => EM_KIT_ASSETS . '/dist/accordion.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/accordion.js'),
                'deps'    => ['jquery']
            ],
            'emkit-tab' => [
                'src'     => EM_KIT_ASSETS . '/dist/tab.js',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/tab.js'),
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
            'emk-pricingtable' => [
                'src'     => EM_KIT_ASSETS . '/dist/pricingtable.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/pricingtable.css'),
            ],
            'emk-card' => [
                'src'     => EM_KIT_ASSETS . '/dist/card.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/card.css'),
            ],
            'emkit-image-accordion' => [
                'src'     => EM_KIT_ASSETS . '/dist/image_accordion.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/image_accordion.css'),
            ],
            'emkit-flipcard' => [
                'src'     => EM_KIT_ASSETS . '/dist/flipcard.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/flipcard.css'),
            ],
            'emk-post-tab' => [
                'src'     => EM_KIT_ASSETS . '/dist/post_tab.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/post_tab.css'),
            ],
            'emk-category_list' => [
                'src'     => EM_KIT_ASSETS . '/dist/category_list.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/category_list.css'),
            ],
            'emk-feature-list' => [
                'src'     => EM_KIT_ASSETS . '/dist/feature_list.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/feature_list.css'),
            ],
            'emkit-accordion' => [
                'src'     => EM_KIT_ASSETS . '/dist/accordion.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/accordion.css'),
            ],
            'emk-tab' => [
                'src'     => EM_KIT_ASSETS . '/dist/tab.css',
                'version' => filemtime(EM_KIT_PATH . '/assets/dist/tab.css'),
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
            'Image',
            'Button',
            'Pricing_Table',
            'Text_Editor',
            'Image_Accordion',
            'Flip_Card',
            'Heading',
            'Post_Category_Tab',
            'Feature_List',
            'Accordion',
            'Counter',
            'Category_List',
            'Card',
            'Tab',
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
            return [];
        }

        foreach ($widget_list as $handle => $widget) {
            $file = EM_KIT_ELEMENTOR . $widget . '.php';
            if (file_exists($file)) {
                require_once $file;
            }
        }

        foreach ($scripts as $handle => $script) {
            $deps    = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : EM_KIT_VERSION;
            wp_register_script($handle, $script['src'], $deps, $version, true);
        }

        return $widget_list;
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
