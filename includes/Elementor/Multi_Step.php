<?php
/**
 * Elementor Multi-Step Progress Bar Widget
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

class Multi_Step extends Widget_Base
{
    public function get_name()
    {
        return 'em_kit_multi_step';
    }

    public function get_title()
    {
        return esc_html__('Multi-Step', 'magic-elements');
    }

    public function get_icon()
    {
        return 'eicon-flow magicelements-editor-widgets-icon';
    }

    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    public function get_keywords()
    {
        return [ 'step', 'flow', 'progress', 'multi-step'];
    }

    public function get_script_depends()
    {
        return ['emkit-multi-step', 'jquery'];
    }

    public function get_style_depends()
    {
        return ['emk-multi-step'];
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
        $this->start_controls_section(
            'section_steps',
            [
                'label' => esc_html__('Steps', 'magic-elements'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'step_title',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Step Title', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'step_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__('Step content goes here. Describe what this step is about.', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'step_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-check',
                    'library' => 'fa-solid',
                ],
            ]
        );
$repeater->add_control(
    'show_checkbox',
    [
        'label' => esc_html__('Show Checkbox', 'magic-elements'),
        'type' => Controls_Manager::SWITCHER,
        'label_on' => esc_html__('Show', 'magic-elements'),
        'label_off' => esc_html__('Hide', 'magic-elements'),
        'return_value' => 'yes',
        'default' => 'no',
    ]
);

$repeater->add_control(
    'checkbox_label',
    [
        'label' => esc_html__('Checkbox Label', 'magic-elements'),
        'type' => Controls_Manager::TEXT,
        'default' => esc_html__('I agree to proceed to the next step', 'magic-elements'),
        'condition' => [
            'show_checkbox' => 'yes',
        ],
    ]
);
        $this->add_control(
            'steps',
            [
                'label' => esc_html__('Steps', 'magic-elements'),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'step_title' => esc_html__('Start Order', 'magic-elements'),
                        'step_content' => esc_html__('Begin your gift ordering process.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Prepare Gift', 'magic-elements'),
                        'step_content' => esc_html__('Select and prepare the perfect gift.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Pack Gift', 'magic-elements'),
                        'step_content' => esc_html__('Carefully pack the gift for shipping.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Decorate Box', 'magic-elements'),
                        'step_content' => esc_html__('Add decorative touches to the gift box.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Send Gift', 'magic-elements'),
                        'step_content' => esc_html__('Finalize and send the gift to recipient.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ step_title }}}',
            ]
        );

        $this->add_control(
            'active_step',
            [
                'label' => esc_html__('Default Active Step', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 10,
                'step' => 1,
                'default' => 1,
            ]
        );
        $this->add_control(
			'complete_step_alert',
			[
				'label' => esc_html__( 'Complete Step Alert', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'textdomain' ),
				'label_off' => esc_html__( 'Hide', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);
        $this->add_control(
			'alert_title',
			[
				'label' => esc_html__( 'Alert Title', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Default Alert title', 'textdomain' ),
				'placeholder' => esc_html__( 'Type your alert title here', 'textdomain' ),
                'condition' => [
                    'complete_step_alert' => 'yes',
                ],
			]
		);
        $this->add_control(
			'alert_description',
			[
				'label' => esc_html__( 'Alert Description', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'Default description', 'textdomain' ),
				'placeholder' => esc_html__( 'Type your description here', 'textdomain' ),
                'condition' => [
                    'complete_step_alert' => 'yes',
                ],
			]
		);
        $this->add_control(
			'alert_btn',
			[
				'label' => esc_html__( 'Button Text', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Ok', 'textdomain' ),
				'placeholder' => esc_html__( 'Type your button text', 'textdomain' ),
                'condition' => [
                    'complete_step_alert' => 'yes',
                ],
			]
		);

        $this->end_controls_section();

        // Navigation Controls
        $this->start_controls_section(
            'section_navigation',
            [
                'label' => esc_html__('Navigation', 'magic-elements'),
            ]
        );
        $this->add_control(
			'show_n_button',
			[
				'label' => esc_html__( 'Show Navigation Button', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'textdomain' ),
				'label_off' => esc_html__( 'Hide', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

         $this->add_control(
            'next_button_text',
            [
                'label' => esc_html__('Next Button Text', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Next', 'magic-elements'),
                'condition' => [
                    'show_n_button' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'prev_button_text',
            [
                'label' => esc_html__('Previous Button Text', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Previous', 'magic-elements'),
                'condition' => [
                    'show_n_button' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'show_arrows',
            [
                'label' => esc_html__('Show Navigation Arrows', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'prev_arrow',
            [
                'label' => esc_html__('Previous Arrow', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-arrow-left',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'next_arrow',
            [
                'label' => esc_html__('Next Arrow', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-arrow-right',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_style_controls()
    {
        // Progress Bar Style
        $this->start_controls_section(
            'section_progress_bar_style',
            [
                'label' => esc_html__('Progress Bar', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'progress_bar_height',
            [
                'label' => esc_html__('Height', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 4,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'progress_bar_width',
            [
                'label' => esc_html__('Width', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px','%'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 1500,
                    ],
                    '%' => [
                        'min' => 1,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 95,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'progress_bar_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'progress_bar_active_color',
            [
                'label' => esc_html__('Active Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar-fill' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'progress_bar_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar, {{WRAPPER}} .em-progress-bar-fill' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'progress_bar_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Indicators Style
        $this->start_controls_section(
            'section_step_indicators_style',
            [
                'label' => esc_html__('Step Indicators', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'step_indicator_size',
            [
                'label' => esc_html__('Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 40,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'step_indicator_icon_size',
            [
                'label' => esc_html__('Icon Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 15,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_active_bg_color',
            [
                'label' => esc_html__('Active Background', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_completed_bg_color',
            [
                'label' => esc_html__('Completed Background', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.completed' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_icon_color',
            [
                'label' => esc_html__('Icon Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator .em-step-icon svg path' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_active_icon_color',
            [
                'label' => esc_html__('Active Icon Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active .em-step-icon svg path' => 'fill: {{VALUE}};',
                ],
            ]
        );
        $this->add_control(
            'step_indicator_completed_icon_color',
            [
                'label' => esc_html__('Completed Icon Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.completed .em-step-icon svg path' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'step_indicator_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-step-indicator',
            ]
        );

        $this->add_control(
            'step_indicator_active_border_color',
            [
                'label' => esc_html__('Active Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'step_indicator_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_indicator_typography',
                'selector' => '{{WRAPPER}} .em-step-indicator',
            ]
        );

        $this->add_responsive_control(
            'step_indicator_spacing',
            [
                'label' => esc_html__('Spacing Between Steps', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 20,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicators-container' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Titles Style
        $this->start_controls_section(
            'section_step_titles_style',
            [
                'label' => esc_html__('Step Titles', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'step_title_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-title' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_control(
            'step_title_completed_color',
            [
                'label' => esc_html__('Completed Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.completed + .em-step-title' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_control(
            'step_title_active_color',
            [
                'label' => esc_html__('Active Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active + .em-step-title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_title_typography',
                'selector' => '{{WRAPPER}} .em-step-title',
            ]
        );

        $this->add_responsive_control(
            'step_title_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-title' => 'margin-top: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Content Style
        $this->start_controls_section(
            'section_step_content_style',
            [
                'label' => esc_html__('Step Content', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'step_content_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_content_typography',
                'selector' => '{{WRAPPER}} .em-step-content',
            ]
        );

        $this->add_responsive_control(
            'step_content_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'step_content_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
		$this->add_control(
			'checkbox_header',
			[
				'label' => esc_html__( 'Checkbox', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
            'checkbox_size',
            [
                'label' => esc_html__('Checkbox Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 20,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-checkbox input[type="checkbox"]' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'checkbox_color',
            [
                'label' => esc_html__('Checkbox Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-checkbox input[type="checkbox"]' => 'accent-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'checkbox_label_color',
            [
                'label' => esc_html__('Label Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-checkbox label' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'checkbox_label_typography',
                'selector' => '{{WRAPPER}} .em-step-checkbox label',
            ]
        );

        $this->add_responsive_control(
            'checkbox_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-checkbox' => 'margin-top: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->end_controls_section();
        // alert style ======================
        $this->start_controls_section(
			'alert_style',
			[
				'label' => esc_html__( 'Alert', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => [
                    'complete_step_alert' => 'yes',
                ],
			]
		);
        $this->add_responsive_control(
			'alert_width',
			[
				'label' => esc_html__( 'Width', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 350,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'alert_position',
			[
				'label' => esc_html__( 'Position', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 35,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content' => 'top: {{SIZE}}{{UNIT}};',
				],
			]
		);
        	
        $this->add_control(
			'alert_overlay',
			[
				'label' => esc_html__( 'Overlay', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-popup-overlay' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'alert_bg',
			[
				'label' => esc_html__( 'Background', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'alert_padding',
			[
				'label' => esc_html__( 'Padding', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 20,
					'right' => 35,
					'bottom' => 20,
					'left' => 35,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'alert_box_shadow',
				'selector' => '{{WRAPPER}} .em-step-completion-popup .em-step-popup-content',
			]
		);

        $this->add_control(
			'text_heding',
			[
				'label' => esc_html__( 'Text', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'alert_title_color',
			[
				'label' => esc_html__( 'title Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content h3' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'alert_title_typography',
				'selector' => '{{WRAPPER}} .em-step-completion-popup .em-step-popup-content h3',
			]
		);
        $this->add_responsive_control(
			'alert_title_margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content h3' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'alert_content_color',
			[
				'label' => esc_html__( 'Content Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content p' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'alert_content_typography',
				'selector' => '{{WRAPPER}} .em-step-completion-popup .em-step-popup-content p',
			]
		);
        $this->add_responsive_control(
			'alert_content_margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'button_heding',
			[
				'label' => esc_html__( 'Button', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'button_title_typography',
				'selector' => '{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button',
			]
		);
        $this->add_control(
			'button_text_color',
			[
				'label' => esc_html__( 'Active Button Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'button_bg',
			[
				'label' => esc_html__( 'Active Button Backround', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'button_text_color_hover',
			[
				'label' => esc_html__( 'Hover Button Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button:hover' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'button_bg_hover',
			[
				'label' => esc_html__( 'Hover Button Backround', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'button_margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'button_padding',
			[
				'label' => esc_html__( 'Padding', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 16,
					'bottom' => 8,
					'left' => 16,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button' => 'Padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'button_radius',
			[
				'label' => esc_html__( 'Radius', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 4,
					'right' => 4,
					'bottom' => 4,
					'left' => 4,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'button_box_shadow',
				'selector' => '{{WRAPPER}} .em-step-completion-popup .em-step-popup-content .em-step-popup-button',
			]
		);

        $this->end_controls_section();

        // Navigation Buttons Style
        $this->start_controls_section(
            'section_navigation_buttons_style',
            [
                'label' => esc_html__('Navigation Buttons', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' => [
                    'show_n_button' => 'yes',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'button_typography',
                'selector' => '{{WRAPPER}} .em-nav-button',
            ]
        );
       $this->add_control(
			'button_alinment',
			[
				'label' => esc_html__( 'Alinment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-justify-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-justify-center-h',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-justify-end-h',
					],
					'space-between' => [
						'title' => esc_html__( 'Space Between', 'magic-elements' ),
						'icon' => 'eicon-justify-space-between-h',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .em-nav-buttons-container' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'arbtn_padding',
			[
				'label' => esc_html__( 'Padding', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 16,
					'bottom' => 8,
					'left' => 16,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .em-nav-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->add_responsive_control(
            'button_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
			'em_nav_btn_margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .em-nav-buttons-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->add_responsive_control(
            'buttons_spacing',
            [
                'label' => esc_html__('Spacing Between Buttons', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-buttons-container' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        // Previous Button Style
        $this->add_control(
			'prev_button',
			[
				'label' => esc_html__( 'Previous Button', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->start_controls_tabs('prev_button_tabs');

        $this->start_controls_tab(
            'prev_button_normal',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'prev_button_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-prev-button' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'prev_button_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-prev-button',
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'prev_button_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-prev-button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'prev_button_hover',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'prev_button_hover_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-prev-button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'prev_button_hover_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-prev-button:hover',
            ]
        );

        $this->add_control(
            'prev_button_hover_border_color',
            [
                'label' => esc_html__('Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-prev-button:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        // Next Button Style
        $this->add_control(
			'next_button',
			[
				'label' => esc_html__( 'Next Button', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->start_controls_tabs('next_button_tabs');

        $this->start_controls_tab(
            'next_button_normal',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'next_button_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-next-button' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'next_button_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-next-button',
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'next_button_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-next-button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'next_button_hover',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'next_button_hover_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-next-button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'next_button_hover_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-next-button:hover',
            ]
        );

        $this->add_control(
            'next_button_hover_border_color',
            [
                'label' => esc_html__('Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-next-button:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();
        $this->end_controls_section();

        // Navigation Arrows Style
        $this->start_controls_section(
            'section_navigation_arrows_style',
            [
                'label' => esc_html__('Navigation Arrows', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_arrow_size',
            [
                'label' => esc_html__( 'Arrow Size', 'textdomain' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 200,
                        'step' => 5,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 50,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_icon_size',
            [
                'label' => esc_html__('Icon Size', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 200,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 20,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button svg' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
			'arrow_alinment',
			[
				'label' => esc_html__( 'Alinment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-justify-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-justify-center-h',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-justify-end-h',
					],
					'space-between' => [
						'title' => esc_html__( 'Space Between', 'magic-elements' ),
						'icon' => 'eicon-justify-space-between-h',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .em-step-navigation' => 'justify-content: {{VALUE}};',
				],
			]
		);

        $this->start_controls_tabs('arrow_style_tabs');

        $this->start_controls_tab(
            'arrow_normal_tab',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'arrow_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .em-step-navigation button svg path' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'arrow_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-step-navigation button',
            ]
        );

        $this->add_responsive_control(
            'arrow_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'arrow_box_shadow',
                'selector' => '{{WRAPPER}} .em-step-navigation button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'arrow_hover_tab',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'arrow_hover_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button:hover' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .em-step-navigation button:hover svg path' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_hover_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_hover_border_color',
            [
                'label' => esc_html__('Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'arrow_hover_box_shadow',
                'selector' => '{{WRAPPER}} .em-step-navigation button:hover',
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_responsive_control(
            'arrow_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-navigation button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();

        include __DIR__ . '/layouts/multi-step/multi_step.php';
    }
}