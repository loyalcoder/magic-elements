<?php

/**
 * Elementor Classes.
 *
 * @package Search Poopup Magic Elements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Elementor Search Popup Widget
 *
 * Elementor widget for Search Popup.
 *
 * @since 1.0.0
 */
class Search_Popup extends Widget_Base
{
    /**
     * Retrieve the widget name.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget name.
     */
    public function get_name()
    {
        return 'em_kit_search_poopup';
    }

    /**
     * Retrieve the widget title.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget title.
     */
    public function get_title()
    {
        return esc_html__('Search Popup', 'magic-elements');
    }
    public function get_keywords()
    {
        return ['search', 'search popup', 'popup', 'button'];
    }

    /**
     * Retrieve the widget icon.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget icon.
     */
    public function get_icon()
    {
        return 'eicon-site-search magicelements-editor-widgets-icon';
    }

    /**
     * Retrieve the list of categories the widget belongs to.
     *
     * Used to determine where to display the widget in the editor.
     *
     * Note that currently Elementor supports only one category.
     * When multiple categories passed, Elementor uses the first one.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return array Widget categories.
     */
    public function get_categories()
    {
        return ['magicelements-widgets'];
    }
    public function get_style_depends()
    {
        return ['emkit-multiple-button'];
    }

    /**
     * Register Pricing Table controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_search_poopup_controls();
    }

    /**
     * Register Search Poopup General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_search_poopup_controls()
    {
    

    }

    /**
     * Render Copyright output on the frontend.
     *
     * Written in PHP and used to generate the final HTML.
     *
     * @since 1.0.0
     * @access protected
     */
    
    protected function render()
    {
        $settings = $this->get_settings_for_display();

        include __DIR__ . '/layouts/search-popup/search-popup.php';
 
         
    }

    /**
     * Render shortcode widget as plain content.
     *
     * Override the default behavior by printing the shortcode instead of rendering it.
     *
     * @since 1.0.0
     * @access public
     */
    public function render_plain_content()
    {
        // In plain mode, render without shortcode.
        echo esc_attr($this->get_settings('shortcode'));
    }

    /**
     * Render shortcode widget output in the editor.
     *
     * Written as a Backbone JavaScript template and used to generate the live preview.
     *
     * @since 1.3.0
     * @access protected
     */
}