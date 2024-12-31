<?php

/**
 * Elementor Classes.
 *
 * @package Accordion Elementor Magic Kit
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
} 

/**
 * Magic Kit for Elementor Extension
 *
 * Elementor widget for Accordion.
 *
 * @since 1.0.0
 */
class Tab extends Widget_Base
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
        return 'em_kit_tab';
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
        return esc_html__('Magic Tab', 'elementor-magic-kit');
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
        return 'eicon-accordion';
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
        return ['emk-widgets'];
    }

    public function get_style_depends()
    {
        return ['emk-tab'];
    }

    public function get_script_depends()
    {
        return ['emkit-tab', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_tab_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_tab_controls()
    {

        $this->start_controls_section(
            'tabs_section',
            [
                'label' => __( 'Tabs', 'elementor' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'tab_title',
            [
                'label' => __( 'Tab Title', 'elementor' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'Tab Title',
            ]
        );

        $repeater->add_control(
            'tab_content_title',
            [
                'label' => __( 'Tab Content Title', 'elementor' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'Content for this tab.',
            ]
        );

        $repeater->add_control(
            'tab_content',
            [
                'label' => __( 'Tab Content', 'elementor' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => 'Content for this tab.',
            ]
        );

        $this->add_control(
            'tabs',
            [
                'label' => __( 'Tabs', 'elementor' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'tab_title' => __( 'Tab 1', 'elementor' ),
                        'tab_content' => __( 'This is the content for the first tab.', 'elementor' ),
                    ],
                    [
                        'tab_title' => __( 'Tab 2', 'elementor' ),
                        'tab_content' => __( 'This is the content for the second tab.', 'elementor' ),
                    ],
                ],
                'title_field' => '{{{ tab_title }}}',
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
        $settings    = $this->get_settings_for_display();

        $tabs = $settings['tabs'];
       
        include __DIR__ . '/layouts/tab.php';
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
    protected function content_template()
    {
    }
}
