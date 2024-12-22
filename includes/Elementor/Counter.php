<?php

/**
 * Elementor Classes.
 *
 * @package Counter Elementor Magic Kit
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
 * Elementor widget for Counter.
 *
 * @since 1.0.0
 */
class Counter extends Widget_Base
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
        return 'em_kit_counter';
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
        return esc_html__('Counter', 'elementor-magic-kit ');
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
        return 'eicon-counter';
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
        return ['emk-counter', 'emkit-style'];
    }

    public function get_script_depends()
    {
        return ['emkit-counter', 'jquery' ];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_counter_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_counter_controls()
    {
        $this->start_controls_section(
			'counter_content_section',
			[
				'label' => esc_html__( 'Counter', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'counter_number_one',
			[
				'label' => esc_html__( 'Number One', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 5,
				'max' => 10000,
				'step' => 1,
				'default' => 31,
			]
		);
        $this->add_control(
			'counter_suffix_one',
			[
				'label' => esc_html__( 'Number Suffix', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				
			]
		);
        $this->add_control(
			'counter_one_title',
			[
				'label' => esc_html__( 'Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'professional Teachers', 'textdomain' ),
				'placeholder' => esc_html__( 'Type your title here', 'textdomain' ),
			]
		);

        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
            $this->get_name() .'style_section',
			[
				'label' => esc_html__( 'Counter', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
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
        include __DIR__ . '/layouts/counter.php';
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
