<?php
/**
 * Elementor Progress Bar Widget with Advanced Features
 */
namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Core\Schemes\Color;
use Elementor\Core\Schemes\Typography;

if (!defined('ABSPATH')) {
    exit;
}

class Progress_Bar extends Widget_Base
{
    public function get_name()
    {
        return 'em_kit_ptogress_bar';
    }

    public function get_title()
    {
        return esc_html__('Progress Bar', 'magic-elements');
    }

    public function get_icon()
    {
        return 'eicon-skill-bar magicelements-editor-widgets-icon';
    }

    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    public function get_keywords()
    {
        return ['progress', 'bar', 'skill', 'percentage'];
    }

    public function get_script_depends()
    {
        return ['emkit-progress-bar', 'jquery'];
    }

    public function get_style_depends()
    {
        return ['emk-progress-bar'];
    }

    protected function register_controls()
    {
        // Content Tab
        $this->register_content_controls();
        
        // Style Tab
        $this->register_style_controls();
    }

    protected function register_content_controls()
    {
        // Progress Bar Section
        $this->start_controls_section(
            'section_progress',
            [
                'label' => esc_html__('Progress Bar', 'magic-elements'),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('My Skill', 'magic-elements'),
                'placeholder' => esc_html__('Enter your title', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'percent',
            [
                'label' => esc_html__('Percentage', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 75,
                ],
            ]
        );

        $this->add_control(
            'display_percentage',
            [
                'label' => esc_html__('Display Percentage', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'percentage_position',
            [
                'label' => esc_html__('Percentage Position', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'inside',
                'options' => [
                    'inside' => esc_html__('Inside', 'magic-elements'),
                    'outside' => esc_html__('Outside', 'magic-elements'),
                    'tooltip' => esc_html__('Tooltip', 'magic-elements'),
                ],
                'condition' => [
                    'display_percentage' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'duration',
            [
                'label' => esc_html__('Animation Duration (ms)', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'default' => 1500,
                'min' => 100,
                'step' => 100,
            ]
        );

        $this->add_control(
            'animation_delay',
            [
                'label' => esc_html__('Animation Delay (ms)', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'default' => 0,
                'min' => 0,
                'step' => 100,
            ]
        );

        $this->end_controls_section();

        // Additional Features Section
        $this->start_controls_section(
            'section_additional',
            [
                'label' => esc_html__('Additional Features', 'magic-elements'),
            ]
        );

        $this->add_control(
            'show_icon',
            [
                'label' => esc_html__('Show Icon', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );
        $this->add_control( 
            'icon',
            [
                'label' => esc_html__( 'Icon', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-star',
                    'library' => 'fa-solid',
                ],
                'recommended' => [
                    'fa-solid' => [
                        'star',
                        'star-half-alt',
                        'star-of-life',
                    ],
                    'fa-regular' => [
                        'star',
                        'star-half',
                    ],
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
            );


        $this->add_control(
            'icon_position',
            [
                'label' => esc_html__('Icon Position', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'before_title',
                'options' => [
                    'before_title' => esc_html__('Before Title', 'magic-elements'),
                    'after_title' => esc_html__('After Title', 'magic-elements'),
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_style_controls()
    {
        // Progress Bar Style
        $this->start_controls_section(
            'section_progress_style',
            [
                'label' => esc_html__('Progress Bar', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'bar_height',
            [
                'label' => esc_html__('Height', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 50,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 12,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-container' => 'height: {{SIZE}}{{UNIT}}',
                    '{{WRAPPER}} .magic-progress-bar-fill' => 'height: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'bar_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-container' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    '{{WRAPPER}} .magic-progress-bar-fill' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'bar_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-container' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'bar_box_shadow',
                'selector' => '{{WRAPPER}} .magic-progress-bar-container',
            ]
        );

        $this->end_controls_section();

        // Progress Fill Style
        $this->start_controls_section(
            'section_progress_fill',
            [
                'label' => esc_html__('Progress Fill', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'fill_background',
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .magic-progress-bar-fill',
            ]
        );

        $this->add_control(
            'fill_stripe',
            [
                'label' => esc_html__('Show Stripes', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'stripe_size',
            [
                'label' => esc_html__( 'Stripe Size', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 40,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-stripe' => 'background-size: {{SIZE}}{{UNIT}} {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-progress-bar-animate' => '--stripe-size: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'fill_stripe' => 'yes',
                ],
            ]
        );
        $this->add_control(
            'fill_stripe_animate',
            [
                'label' => esc_html__('Animate Stripes', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default' => 'no',
                'condition' => [
                    'fill_stripe' => 'yes',
                ],
            ]
        );
     
        $this->add_control(
            'animation_speed',
            [
                'label' => esc_html__( 'Animation Speed (s)', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 's' ],
                'range' => [
                    's' => [
                        'min' => 0.1,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 's',
                    'size' => 2,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-animate' => 'animation-duration: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'fill_stripe' => 'yes',
                    'fill_stripe_animate' => 'yes',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'fill_box_shadow',
                'selector' => '{{WRAPPER}} .magic-progress-bar-fill',
            ]
        );

        $this->end_controls_section();

        // Title Style
        $this->start_controls_section(
            'section_title_style',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'progress_bar_title_typography',
                'selector' => '{{WRAPPER}} .magic-progress-bar-title',
            ]
        );

        $this->add_responsive_control(
            'title_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .progress-icons-wrapper' => 'margin-bottom: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Percentage Style
        $this->start_controls_section(
            'section_percentage_style',
            [
                'label' => esc_html__('Percentage', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' => [
                    'display_percentage' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'percentage_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-percentage' => 'color: {{VALUE}}',
                    '{{WRAPPER}} .magic-progress-bar-percentage-tooltip' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'percentage_typography',
                'selector' => '{{WRAPPER}} .magic-progress-bar-percentage, {{WRAPPER}} .magic-progress-bar-percentage-tooltip',
            ]
        );

        $this->add_control(
            'percentage_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-percentage-tooltip' => 'background-color: {{VALUE}}',
                    '{{WRAPPER}} .magic-progress-bar-percentage-tooltip:after' => 'border-color: {{VALUE}} transparent transparent',
                ],
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'percentage_tooltip_border',
                'selector' => '{{WRAPPER}} .magic-progress-bar-percentage-tooltip',
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
            ]
        );

        $this->add_control(
            'percentage_tooltip_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-percentage-tooltip' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
            ]
        );

        $this->add_responsive_control(
            'percentage_tooltip_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-percentage-tooltip' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
            ]
        );

        $this->add_control(
			'tooltip_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-progress-bar-percentage-tooltip' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow_tooltip',
				'selector' => '{{WRAPPER}} .magic-progress-bar-percentage-tooltip',
                'condition' => [
                    'percentage_position' => 'tooltip',
                ],
			]
            
		);

        $this->add_control(
            'percentage_outside_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-percentage.outside' => 'margin-left: {{SIZE}}{{UNIT}}',
                ],
                'condition' => [
                    'percentage_position' => 'outside',
                ],
            ]
        );

        $this->end_controls_section();

        // Icon Style
        $this->start_controls_section(
            'section_icon_style',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-icon svg path' => 'fill: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
			'icon_size',
			[
				'label' => esc_html__( 'Size', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 15,
				],
				'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-icon' => 'width: {{SIZE}}{{UNIT}}',
                ],
			]
		);

        $this->add_responsive_control(
            'icon_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-progress-bar-icon-before_title' => 'margin-right: {{SIZE}}{{UNIT}}',
                    '{{WRAPPER}} .magic-progress-bar-icon-after_title' => 'margin-left: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        include __DIR__ . '/layouts/progress-bar/progress_bar.php';

    }
}