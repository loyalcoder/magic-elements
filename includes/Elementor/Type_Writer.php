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
        return [];
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
            'content_section',
            [
                'label' => __( 'Content', 'elementor-magic-kit' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'static_text',
            [
                'label' => __( 'Static Text', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __( 'Welcome to ', 'elementor-magic-kit' ),
            ]
        );

        $repeater = new \Elementor\Repeater();


        $repeater->add_control(
            'dynamic_text',
            [
                'label' => __( 'Dynamic Text', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __( 'Typewriter Effect', 'elementor-magic-kit' ),
                'label_block' => true
            ]
        );

        $this->add_control(
            'typewriter_texts',
            [
                'label' => __( 'Typewriter Texts', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'title_field' => '{{{ dynamic_text }}}',
            ]
        );

        $this->end_controls_section();

        // style section

        $this->start_controls_section(
			'type_writer_title_section',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'type_writer_title_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} #static-text' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'type_writer_title_typography',
				'selector' => '{{WRAPPER}} #static-text',
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'type_writer_title_stroke',
				'selector' => '{{WRAPPER}} #static-text',
			]
		);

        $this->add_group_control(
            \Elementor\Group_Control_Text_Shadow::get_type(),
            [
                'name' => 'type_writer_title_shadow',
                'label' => __( 'Text Shadow', 'elementor-magic-kit' ),
                'selector' => '{{WRAPPER}} #static-text',
            ]
        );

        $this->add_control(
			'type-writer_more_options',
			[
				'label' => esc_html__( 'Type Writer', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

        
		$this->add_control(
			'type_writer_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} #typewriter-text' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'type_writer_typography',
				'selector' => '{{WRAPPER}} #typewriter-text',
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

        $settings = $this->get_settings_for_display();
        $static_text = $settings['static_text'];
        $typewriter_texts = $settings['typewriter_texts'];

        $dynamic_texts = [];
        if ( ! empty( $typewriter_texts ) ) {
            foreach ( $typewriter_texts as $item ) {
                $dynamic_texts[] = $item['dynamic_text'];
            }
        }

          // Safely encode the dynamic texts array for JavaScript
          $dynamic_texts_json = wp_json_encode($dynamic_texts);

        
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