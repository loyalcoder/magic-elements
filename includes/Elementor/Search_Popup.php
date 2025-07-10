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
        return ['emk-search-popup'];
    }
    public function get_script_depends()
    {
        return ['emkit-search-popup'];
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
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Button Text', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Search', 'magic-elements'),
                'placeholder' => esc_html__('Type your Text here', 'magic-elements'),
            ]
        );
        
        $this->add_control(
            'show_icon',
            [
                'label' => esc_html__('Show Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );
        
        $this->add_control(
            'selected_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'fa4compatibility' => 'icon',
                'default' => [
                    'value' => 'fas fa-search',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );
        $this->add_control(
			'icon_size',
            [
                'label' => esc_html__( 'Icon Size', 'textdomain' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', 'rem', 'custom' ],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0.5,
                        'max' => 5,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'size' => 16,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-icon-left i, {{WRAPPER}} .magic-icon-right i' => 'font-size: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_control(
            'icon_position',
            [
                'label' => esc_html__('Icon Position', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'left',
                'options' => [
                    'left' => esc_html__('Left', 'magic-elements'),
                    'right' => esc_html__('Right', 'magic-elements'),
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );
        
        $this->add_control(
            'icon_spacing',
            [
                'label' => esc_html__('Icon Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .emk-search-button .magic-icon-left' => 'margin-right: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .emk-search-button .magic-icon-right' => 'margin-left: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();
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