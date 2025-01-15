<?php

namespace MagicElements;

use Elementor\Plugin;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Load Elementor class
 */
class Load_Elementor
{
    /**
     * Initialize Elementor class
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        add_action('elementor/elements/categories_registered', [$this, 'register_category']);
        add_action('elementor/widgets/widgets_registered', [$this, 'register_widgets']);
        add_action('elementor/editor/after_enqueue_scripts', [$this, 'custom_elementor_scripts']);
        add_action('wp_enqueue_scripts', [$this, 'style_register']);
    }

    /**
     * Enqueue custom Elementor scripts
     *
     * @since 1.0.0
     */
    public function custom_elementor_scripts()
    {
        $scripts = $this->get_scripts();

        foreach ($scripts as $handle => $script) {
            $deps = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : MAGICELEMENTS_VERSION;
            wp_register_script($handle, $script['src'], $deps, $version, true);
            wp_enqueue_script($handle);
        }
    }

    /**
     * Register Elementor category
     *
     * @param object $elementor
     *
     * @since 1.0.0
     * @return object
     */
    public function register_category($elementor)
    {
        $elementor->add_category(
            'magicelements-widgets',
            [
                'title' => esc_html__('Magic Elements Widgets', 'magic-elements'),
                'icon'  => 'eicon-font',
            ]
        );

        return $elementor;
    }

    /**
     * Register Elementor widgets
     *
     * @since 1.0.0
     */
    public function register_widgets()
    {
        $enabled_widgets = get_option('magicelements_enabled_widgets', []);
        $widgets = (array) $this->includeWidgetsFiles();

        foreach ($widgets as $widget) {
            $widget_key = strtolower(str_replace('_', '', $widget));
            if (!empty($enabled_widgets) && in_array($widget_key, $enabled_widgets)) {
                $widget_class = "\\MagicElements\\Elementor\\$widget";
                Plugin::instance()->widgets_manager->register(new $widget_class());
            }
        }
    }

    /**
     * Get scripts for widgets
     *
     * @since 1.0.0
     * @return array
     */
    public function get_scripts()
    {
        return [
            'magicelements-post-tab' => [
                'src'     => MAGICELEMENTS_ASSETS . '/dist/post_tab.js',
                'version' => filemtime(MAGICELEMENTS_PATH . '/assets/dist/post_tab.js'),
            ],
            // Other scripts updated similarly...
        ];
    }

    /**
     * Get styles for widgets
     *
     * @since 1.0.0
     * @return array
     */
    public function getStyles()
    {
        return [
            'magicelements-button' => [
                'src'     => MAGICELEMENTS_ASSETS . '/dist/button.css',
                'version' => filemtime(MAGICELEMENTS_PATH . '/assets/dist/button.css'),
            ],
            // Other styles updated similarly...
        ];
    }

    /**
     * Include widget files
     *
     * @since 1.0.0
     * @return array
     */
    public function includeWidgetsFiles()
    {
        $scripts = $this->get_scripts();
        $widget_list = $this->getWidgetList();

        if (!count($widget_list)) {
            return [];
        }

        foreach ($widget_list as $widget) {
            $file = MAGICELEMENTS_ELEMENTOR_PATH . $widget . '.php';
            if (file_exists($file)) {
                require_once $file;
            }
        }

        foreach ($scripts as $handle => $script) {
            $deps = isset($script['deps']) ? $script['deps'] : false;
            $version = isset($script['version']) ? $script['version'] : MAGICELEMENTS_VERSION;
            wp_register_script($handle, $script['src'], $deps, $version, true);
        }

        return $widget_list;
    }

    /**
     * Register styles
     *
     * @since 1.0.0
     */
    public function style_register()
    {
        $styles = $this->getStyles();
        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;
            $version = isset($style['version']) ? $style['version'] : MAGICELEMENTS_VERSION;
            wp_register_style($handle, $style['src'], $deps, $version);
        }
    }
}
