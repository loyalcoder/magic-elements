<?php

    /**
 * Elementor Classes.
 *
 * @package Button Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * Magic Elements for Elementor Extension
 *
 * Elementor widget for Button.
 *
 * @since 1.0.0
 */
class Button extends Widget_Base
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
        return 'magicelements_button';
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
        return esc_html__('Button', 'magic-elements');
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
        return 'eicon-button magicelements-editor-widgets-icon';
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
        return ['emkit-button'];
    }
        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_button_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_button_controls( $args = [])
    {
		$default_args = [
			'section_condition'           => [],
			'icon_exclude_inline_options' => [],
		];

		$args = wp_parse_args( $args, $default_args );
		
        $this->start_controls_section(
            'section_button',
            [
                'label' => esc_html__('Button', 'magic-elements'),
            ]
        );

        $this->add_control(
			'button_type',
			[
				'label'   => esc_html__( 'Type', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'default',
				'options' => [
					'default' => esc_html__( 'Default', 'magic-elements' ),
					'info'    => esc_html__( 'Info', 'magic-elements' ),
					'success' => esc_html__( 'Success', 'magic-elements' ),
					'warning' => esc_html__( 'Warning', 'magic-elements' ),
					'danger'  => esc_html__( 'Danger', 'magic-elements' ),
					'light'   => esc_html__( 'Light', 'magic-elements' ),
					'dark'    => esc_html__( 'Dark', 'magic-elements' ),
				],
			]
		);

        $this->add_control(
            'text',
            [
                'label'       => esc_html__('Text', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'label_block' => false,
                'default'     => esc_html__('Click here', 'magic-elements'),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        $this->add_control(
			'link',
			[
				'label'   => esc_html__( 'Link', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'default' => [
					'url' => '#',
				],
				'label_block' => true,
			]
		);

        $this->add_control(
			'align',
			[
				'label'   => esc_html__( 'Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-text-align-right',
					],
                    'justify' => [
						'title' => esc_html__( 'Justified', 'magic-elements' ),
						'icon'  => 'eicon-text-align-justify',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .emk-button-wrapper' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			'size',
			[
				'label'   => esc_html__( 'Size', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'sm',
				'options' => [
				'xs' => esc_html__( 'Extra Small', 'magic-elements' ),
				'sm' => esc_html__( 'Small', 'magic-elements' ),
				'md' => esc_html__( 'Medium', 'magic-elements' ),
				'lg' => esc_html__( 'Large', 'magic-elements' ),
				'xl' => esc_html__( 'Extra Large', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'selected_icon',
			[
				'label'                       => esc_html__( 'Icon', 'magic-elements' ),
				'type'                        => \Elementor\Controls_Manager::ICONS,
				'fa4compatibility'            => 'icon',
				'skin'                        => 'inline',
				'label_block'                 => false,
				'condition'                   => $args['section_condition'],
				'icon_exclude_inline_options' => $args['icon_exclude_inline_options'],
			]
		);

        $this->add_control(
			'icon_align',
			[
				'label'   => esc_html__( 'Icon Position', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'left',
				'options' => [
					'left'  => esc_html__( 'Before', 'magic-elements' ),
					'right' => esc_html__( 'After', 'magic-elements' ),
				],
				'condition' => array_merge( $args['section_condition'], [ 'selected_icon[value]!' => '' ] ),
			]
		);

        $this->add_control(
			'icon_indent',
			[
				'label'      => esc_html__( 'Icon Spacing', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'max' => 50,
					],
					'em' => [
						'max' => 5,
					],
					'rem' => [
						'max' => 5,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button-wrapper .emk-button .emk-button-content-wrapper .magicelements-align-icon-left'  => 'margin-right: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .emk-button-wrapper .emk-button .emk-button-content-wrapper .magicelements-align-icon-right' => 'margin-left: {{SIZE}}{{UNIT}};',
				],
				'condition' => array_merge( $args['section_condition'], [ 'selected_icon[value]!' => '' ] ),
			]
		);

        $this->end_controls_section();

            // Style section
            // --- Container section
        $this->start_controls_section(
            $this->get_name() . 'button_style_section',
            [
                'label' => esc_html__('Button', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'typography',
				'selector' => '{{WRAPPER}} .emk-button',
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'text_shadow',
				'selector' => '{{WRAPPER}} .emk-button-text',
			]
		);

        $this->start_controls_tabs(
			'style_tabs'
		);

		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'magic-elements' ),
			]
		);

        $this->add_control(
			$this->get_name() . 'button_text_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .emk-button',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'magic-elements' ),
			]
		);

        $this->add_control(
			$this->get_name() . 'hover_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text:hover' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'button_background_hover',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .emk-button:hover',
			]
		);

        $this->add_control(
			$this->get_name() . 'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text:hover, {{WRAPPER}} .emk-button-text:focus' => 'border-color: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			'hover_animation',
			[
				'label'     => esc_html__( 'Hover Animation', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HOVER_ANIMATION,
				'condition' => $args['section_condition'],
			]
		);

		
		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'border',
				'selector' => '{{WRAPPER}} .emk-button',
			]
		);

        $this->add_responsive_control(
			$this->get_name() . 'border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .emk-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name'     => 'button_box_shadow',
				'selector' => '{{WRAPPER}} .emk-button',
			]
		);

        $this->add_responsive_control(
			$this->get_name() . 'text_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .emk-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
		
		$this->add_render_attribute( 'wrapper', 'class', 'emk-button-wrapper' );

		$this->add_render_attribute( 'button', 'class', 'emk-button' );

		$this->add_render_attribute( 'content', 'class', 'emk-button-content-wrapper' );

		$this->add_render_attribute( 'span', 'class', 'emk-button-icon' );

		$this->add_render_attribute( 'text', 'class', 'emk-button-text' );

		if ( ! empty( $settings['button_type'] ) ) {
			$this->add_render_attribute( 'button', 'class', 'emk-color-' . $settings['button_type'] );
		}

		if ( ! empty( $settings['link']['url'] ) ) {
			$this->add_link_attributes( 'button', $settings['link'] );
			$this->add_render_attribute( 'button', 'class', 'ekm-button-link' );
		}

		if ( ! empty( $settings['size'] ) ) {
			$this->add_render_attribute( 'button', 'class', 'emk-size-' . $settings['size'] );
		}

		if ( ! empty( $settings['hover_animation'] ) ) {
			$this->add_render_attribute( 'button', 'class', 'emk-animation-' . $settings['hover_animation'] );
		}
		

				  // if ( ! empty( $settings['background_transitions'] ) ) {
				  // 	$this->add_render_attribute( 'button', 'class', 'hvr-' . $settings['background_transitions'] );
				  // }

		if ( ! empty( $settings['icon_align'] ) ) {
			$this->add_render_attribute( 'span', 'class', 'magicelements-align-icon-' . $settings['icon_align'] );
		}
        
        include __DIR__ . '/layouts/button/button.php';
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
