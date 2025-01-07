<?php

    /**
 * Elementor Classes.
 *
 * @package Button Elementor Magic Kit
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
        return 'em_kit_button';
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
        return esc_html__('Button Magic', 'elementor-magic-kit');
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
        return 'eicon-button';
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
        return ['emkit-button'];
    }
	public function get_script_depends()
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
                'label' => esc_html__('Button', 'elementor-magic-kit'),
            ]
        );

        $this->add_control(
			'button_type',
			[
				'label'   => esc_html__( 'Type', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'default',
				'options' => [
					'default' => esc_html__( 'Default', 'elementor-magic-kit' ),
					'info'    => esc_html__( 'Info', 'elementor-magic-kit' ),
					'success' => esc_html__( 'Success', 'elementor-magic-kit' ),
					'warning' => esc_html__( 'Warning', 'elementor-magic-kit' ),
					'danger'  => esc_html__( 'Danger', 'elementor-magic-kit' ),
					'light'   => esc_html__( 'Light', 'elementor-magic-kit' ),
					'dark'    => esc_html__( 'Dark', 'elementor-magic-kit' ),
				],
			]
		);

        $this->add_control(
            'text',
            [
                'label'       => esc_html__('Text', 'elementor-magic-kit'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'label_block' => false,
                'default'     => esc_html__('Click here', 'elementor-magic-kit'),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );

        $this->add_control(
			'link',
			[
				'label'   => esc_html__( 'Link', 'elementor-magic-kit' ),
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
				'label'   => esc_html__( 'Size', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'sm',
				'options' => [
     'xs' => esc_html__( 'Extra Small', 'elementor-magic-kit' ),
     'sm' => esc_html__( 'Small', 'elementor-magic-kit' ),
     'md' => esc_html__( 'Medium', 'elementor-magic-kit' ),
     'lg' => esc_html__( 'Large', 'elementor-magic-kit' ),
     'xl' => esc_html__( 'Extra Large', 'elementor-magic-kit' ),
				],
			]
		);

		$this->add_control(
			'selected_icon',
			[
				'label'                       => esc_html__( 'Icon', 'elementor-magic-kit' ),
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
				'label'   => esc_html__( 'Icon Position', 'elementor-magic-kit' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'default' => 'left',
				'options' => [
					'left'  => esc_html__( 'Before', 'elementor-magic-kit' ),
					'right' => esc_html__( 'After', 'elementor-magic-kit' ),
				],
				'condition' => array_merge( $args['section_condition'], [ 'selected_icon[value]!' => '' ] ),
			]
		);

        $this->add_control(
			'icon_indent',
			[
				'label'      => esc_html__( 'Icon Spacing', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .emk-button-wrapper .emk-button .emk-button-content-wrapper .emk-align-icon-left'  => 'margin-right: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .emk-button-wrapper .emk-button .emk-button-content-wrapper .emk-align-icon-right' => 'margin-left: {{SIZE}}{{UNIT}};',
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
                'label' => esc_html__('Button', 'elementor-magic-kit'),
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
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);

        $this->add_control(
			$this->get_name() . 'button_text_color',
			[
				'label'     => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'background',
				'types'    => [ 'classic', 'gradient', 'video' ],
				'exclude'  => [ 'image' ],
				'selector' => '{{WRAPPER}} .emk-button',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);

        $this->add_control(
			$this->get_name() . 'hover_color',
			[
				'label'     => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text:hover' => 'color: {{VALUE}}',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'button_background_hover',
				'types'    => [ 'classic', 'gradient', 'video' ],
				'exclude'  => [ 'image' ],
				'selector' => '{{WRAPPER}} .emk-button:hover',
			]
		);

        $this->add_control(
			$this->get_name() . 'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'elementor-magic-kit' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button-text:hover, {{WRAPPER}} .emk-button-text:focus' => 'border-color: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			'hover_animation',
			[
				'label'     => esc_html__( 'Hover Animation', 'elementor-magic-kit' ),
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
				'label'      => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
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
				'label'      => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
			$this->add_render_attribute( 'span', 'class', 'emk-align-icon-' . $settings['icon_align'] );
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
