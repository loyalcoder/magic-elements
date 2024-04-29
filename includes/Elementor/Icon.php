<?php

/**
 * Elementor Classes.
 *
 * @package Icon Elementor Magic Kit
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 *  Magic Kit for Elementor Extension
 *
 * Elementor widget for Icon.
 *
 * @since 1.0.0
 */
class Icon extends Widget_Base
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
        return 'em_kit_icon';
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
        return __('Icon', 'elementor-magic-kit');
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
        return 'eicon-nerd-chuckle';
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
        return ['emk-icons'];
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
        $this->register_icon_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_icon_controls()
    {
        $this->start_controls_section(
			'icon_section',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
			'icon_single',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-circle',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'circle',
						'dot-circle',
						'square-full',
					],
					'fa-regular' => [
						'circle',
						'dot-circle',
						'square-full',
					],
				],
			]
		);
        $this->add_control(
			'icon_link',
			[
				'label' => esc_html__( 'Link', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '',
					'is_external' => true,
					'nofollow' => true,
				],
				'label_block' => true,
			]
		);

        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
			'icon_style_section',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

        $this->add_responsive_control(
			'icon_alinenment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .icon a svg' => 'justify-content: {{VALUE}};',
				],
			]
		);
         // normal-hover-start
		//normal
        $this->start_controls_tabs(
			'icon_style_tabs'
		);

		$this->start_controls_tab(
			'style_icon_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			$this->get_name() .'icon_primary_color',
			[
				'label' => esc_html__( 'Primary Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon a svg' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
            $this->get_name() . 'icon_size',
            [
                'label' => esc_html__( 'Size', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .icon a svg' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            $this->get_name() . 'icon_rotate',
            [
                'label' => esc_html__( 'Icon Rotate', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%', 'em', 'deg' , 'rem', 'custom' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'deg',
                    'size' => 50,
                ],
                'selectors' => [
                    '{{WRAPPER}} .icon a svg' => 'transform: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

		$this->end_controls_tab();
		//hover
		$this->start_controls_tab(
			'style_icon_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			$this->get_name() .'icon_hover_color',
			[
				'label' => esc_html__( 'Icon Hover Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon a svg:hover' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			$this->get_name() .'icon_hover_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-magic-kit' ) . ' (s)',
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .icon a svg:hover' => 'transition-duration: {{SIZE}}s',
				],
			]
		);
        $this->add_control(
			$this->get_name() .'hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-magic-ki' ),
				'type' => \Elementor\Controls_Manager::HOVER_ANIMATION,
			]
		);
		$this->end_controls_tab();
    // normal-hover-end
    
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
        include __DIR__ . '/layouts/icon.php';
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
