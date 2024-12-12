<?php

/**
 * Elementor Classes.
 *
 * @package Heading Elementor Magic Kit
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
 * Elementor widget for Heading.
 *
 * @since 1.0.0
 */
class Type_Writer extends Widget_Base
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
        return 'emk_type_writer';
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
        return esc_html__('Magic Type Writer', 'elementor-magic-kit');
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
        return 'eicon-heading';
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

    public function get_script_depends()
    {
        return ['script', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_heading_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_heading_controls()
    {
        $this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'elementor-magic-kit' ),
			]
		);

		$this->add_control(
			'typewriter_normal_text',
			[
				'label'   => esc_html__( 'Non-Animated Text', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::TEXT,
				'ai'      => [
					'type' => 'text',
				],
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'A Web', 'elementor-magic-kit' ),
			]
		);

		$repeater = new \Elementor\Repeater();
		$repeater->add_control(
			'list_text',
			[
				'label'       => esc_html__( 'Text', 'elementor-magic-kit' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( 'Designer', 'elementor-magic-kit' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'typewriter_animated_text',
			[
				'label'       => esc_html__( 'Animated Text List', 'elementor-magic-kit' ),
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $repeater->get_controls(),
				'default'     => [
					[
						'list_text' => esc_html__( 'Designer', 'elementor-magic-kit' ),
					],
					[
						'list_text' => esc_html__( 'Developer', 'elementor-magic-kit' ),
					],
					[
						'list_text' => esc_html__( 'programmer', 'elementor-magic-kit' ),
					],
				],
				'title_field' => '{{{ list_text }}}', //phpcs:ignore
			]
		);

		$this->add_control(
			'html_tag',
			[
				'label'   => esc_html__( 'HTML Tag', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'h1'  => 'H1',
					'h2'  => 'H2',
					'h3'  => 'H3',
					'h4'  => 'H4',
					'h5'  => 'H5',
					'h6'  => 'H6',
					'div' => 'div',
					'p'   => 'p',
				],
				'default' => 'h2',
			]
		);

		$this->add_responsive_control(
			'align',
			[
				'label'     => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::CHOOSE,
				'options'   => [
					'left'    => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center'  => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'   => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-right',
					],
					'justify' => [
						'title' => esc_html__( 'Justified', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-justify',
					],
				],
				'default'   => '',
				'separator' => 'before',
				'selectors' => [
					'{{WRAPPER}}' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

        // style section

       
		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Style', 'elementor-magic-kit' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'typewriter_color',
			[
				'label'     => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .typed_title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'typography',
				'selector' => '{{WRAPPER}} .typed_title',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name'     => 'text_stroke',
				'selector' => '{{WRAPPER}} .typed_title',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'text_shadow',
				'selector' => '{{WRAPPER}} .typed_title',
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

         // If both static and animated texts are empty, return early.
    if ( empty( $settings['typewriter_normal_text'] ) && empty( $settings['typewriter_animated_text'] ) ) {
        return;
    }

    // Add a wrapper class for the widget
    $this->add_render_attribute( 'typewriter-attr', 'class', 'wcf--typewriter' );

    // Start with normal text (non-animated)
    $typewriter_text = '';
    if ( ! empty( $settings['typewriter_normal_text'] ) ) {
        $typewriter_text = $settings['typewriter_normal_text'];
    }

    // Initialize the dynamic (animated) text
    $typewriter_animated_text = '';
    if ( ! empty( $settings['typewriter_animated_text'] ) ) {
        foreach ( $settings['typewriter_animated_text'] as $animated_text ) {
            $typewriter_animated_text .= '<span class="typed-text-item">' . esc_html( $animated_text['list_text'] ) . '</span>';
        }
    }

        include __DIR__ . '/layouts/typeWriter/type-writer.php';
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