<?php

    /**
 * Elementor Classes.
 *
 * @package Text Editor Elementor Magic Kit
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
 * Elementor widget for Text Editor.
 *
 * @since 1.0.0
 */
class Text_Editor extends Widget_Base
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
        return 'em_kit_text_editor';
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
        return esc_html__('Text Editor', 'elementor-magic-kit');
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
        return 'eicon-text-align-left emk-editor-widgets-icon';
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
        $this->register_text_editor_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_text_editor_controls()
    {
        $this->start_controls_section(
			'text_editor_section',
			[
				'label' => esc_html__( 'Text Editor', 'elementor-magic-kit' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'text_editor_description',
			[
				'label'       => esc_html__( 'Description', 'elementor-magic-kit' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'default'     => esc_html__( 'Proper nutrition plays a crucial role in maintaining good oral health. The foods you choose to include in your diet can either promote dental health or contribute to dental problems.', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your description here', 'elementor-magic-kit' ),
			]
		);
        $this->add_responsive_control(
			'text_columns',
			[
				'label'     => esc_html__( 'Columns', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::SELECT,
				'separator' => 'before',
				'options'   => [
					''   => esc_html__( 'Default', 'elementor-magic-kit' ),
					'1'  => esc_html__( '1', 'elementor-magic-kit' ),
					'2'  => esc_html__( '2', 'elementor-magic-kit' ),
					'3'  => esc_html__( '3', 'elementor-magic-kit' ),
					'4'  => esc_html__( '4', 'elementor-magic-kit' ),
					'5'  => esc_html__( '5', 'elementor-magic-kit' ),
					'6'  => esc_html__( '6', 'elementor-magic-kit' ),
					'7'  => esc_html__( '7', 'elementor-magic-kit' ),
					'8'  => esc_html__( '8', 'elementor-magic-kit' ),
					'9'  => esc_html__( '9', 'elementor-magic-kit' ),
					'10' => esc_html__( '10', 'elementor-magic-kit' ),
				],
				'selectors' => [
					'{{WRAPPER}}' => 'columns: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'column_gap',
			[
				'label'      => esc_html__( 'Columns Gap', 'elementor-magic-kit' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range'      => [
					'px' => [
						'max' => 100,
					],
					'%' => [
						'max'  => 10,
						'step' => 0.1,
					],
					'vw' => [
						'max'  => 10,
						'step' => 0.1,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => 'column-gap: {{SIZE}}{{UNIT}};',
				],
				'conditions' => [
					'relation' => 'or',
					'terms'    => [
						[
							'name'     => 'text_columns',
							'operator' => '>',
							'value'    => 1,
						],
						[
							'name'     => 'text_columns',
							'operator' => '===',
							'value'    => '',
						],
					],
				],
			]
		);
        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
			'text_editor_style_section',
			[
				'label' => esc_html__( 'Text Editor', 'elementor-magic-kit' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
            $this->get_name() .'text_editor_align',
			[
				'label'   => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon'  => 'eicon-text-align-right',
					],
                    'justify' => [
						'title' => esc_html__( 'Justified', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .text_editor p' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			$this->get_name() .'text_editor_color',
			[
				'label'     => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .text_editor p' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'text_editor_background',
				'types'    => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .text_editor p',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'text_editor_typography',
				'selector' => '{{WRAPPER}} .text_editor p',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'label'    => esc_html__( 'Text Shadow', 'elementor-magic-kit' ),
				'name'     => 'text_shadow',
				'selector' => '{{WRAPPER}} .text_editor p',
			]
		);
		$this->add_responsive_control(
			'text_editor_margin',
			[
				'label'      => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .text_editor p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'text_editor_padding',
			[
				'label'      => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .text_editor p' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        include __DIR__ . '/layouts/Text-Editor/text-editor.php';
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
