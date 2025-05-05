<?php

/**
 * Elementor Classes.
 *
 * @package Multiple Button Magic Elements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Elementor Multiple Button Widget
 *
 * Elementor widget for multiple button.
 *
 * @since 1.0.0
 */
class Multiple_Button extends Widget_Base
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
        return 'em_kit_multiple_button';
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
        return esc_html__('Multiple Button', 'magic-elements');
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
        return 'eicon-dual-button magicelements-editor-widgets-icon';
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
        return ['emkit-multiple-button'];
    }

    /**
     * Register Pricing Table controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_multiple_button_controls();
    }

    /**
     * Register Multiple Button General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_multiple_button_controls()
    {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Edit Button', 'magic-elements' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'button_text',
            [
                'label' => esc_html__( 'Button Text', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Button Text' , 'magic-elements' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'btn_link',
            [
                'label' => esc_html__( 'Link', 'magic-elements' ),
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

        $repeater->add_control(
			'icon',
			[
				'label' => esc_html__( 'Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
                    'value' => 'far fa-check-circle', // new default icon
                    'library' => 'fa-regular',
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

        $repeater->add_control(
			'icon_alinment',
			[
				'label' => esc_html__( 'Icon Alinment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'row',
				'options' => [
					'row'  => esc_html__( 'Left', 'magic-elements' ),
					'row-reverse' => esc_html__( 'Right', 'magic-elements' ),
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'flex-direction: {{VALUE}};',
				],
			]
		);
        
        $repeater->add_control(
            'btn_style',
            [
                'label' => esc_html__( 'Button Style', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );
        
        $repeater->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'selector' => '{{WRAPPER}} {{CURRENT_ITEM}} .magic-button-text',
            ]
        );
        $repeater->add_responsive_control(
			'icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 300,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 12,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}} .btn-icon svg' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $repeater->add_control(
			'icon_gap',
			[
				'label' => esc_html__( 'Icon Gap', 'magic-elements' ),
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
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

        $repeater->start_controls_tabs( 'button_style_tabs' );

        $repeater->start_controls_tab(
            'button_style_normal',
            [
                'label' => esc_html__( 'Normal', 'magic-elements' ),
            ]
        );
        $repeater->add_control(
            'btn_text_color',
            [
                'label' => esc_html__( 'Text Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}' => 'color: {{VALUE}} !important;',
                ],
            ]
        );

        $repeater->add_control(
            'btn_bg_color',
            [
                'label' => esc_html__( 'Background Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}' => 'background-color: {{VALUE}} !important;',
                ],
            ]
        ); 
        $repeater->add_control(
            'btn_icon_color',
            [
                'label' => esc_html__( 'Icon Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}} .btn-icon svg path' => 'fill: {{VALUE}} !important;',
                ],
            ]
        );
        $repeater->add_control(
			'btn_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 6,
					'right' => 16,
					'bottom' => 6,
					'left' => 16,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $repeater->add_control(
			'btn_margin',
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
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $repeater->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}',
			]
		);
        $repeater->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}',
			]
		);
        $repeater->add_control(
			'btn_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
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
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $repeater->end_controls_tab();

        // Hover Tab
        $repeater->start_controls_tab(
            'button_style_hover',
            [
                'label' => esc_html__( 'Hover', 'magic-elements' ),
            ]
        );
         // Add transition control
        $repeater->add_control(
            'btn_transition',
            [
                'label' => esc_html__('Transition Duration', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['s', 'ms'],
                'range' => [
                    's' => [
                        'min' => 0,
                        'max' => 3,
                        'step' => 0.1,
                    ],
                    'ms' => [
                        'min' => 0,
                        'max' => 3000,
                        'step' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 's',
                    'size' => 0.3,
                ],
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}.magic-button .magic-button-text' => 'transition: color {{SIZE}}{{UNIT}} ease;',
                    '{{WRAPPER}} {{CURRENT_ITEM}}.magic-button' => 'transition: all {{SIZE}}{{UNIT}} ease;',
                    '{{WRAPPER}} {{CURRENT_ITEM}}.magic-button .btn-icon svg path' => 'transition: fill {{SIZE}}{{UNIT}} ease;',
                ],
            ]
        );

        $repeater->add_control(
            'btn_text_hover_color',
            [
                'label' => esc_html__( 'Hover Text Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}:hover .magic-button-text' => 'color: {{VALUE}};',
                ],
            ]
        );
        
        $repeater->add_control(
            'btn_bg_hover_color',
            [
                'label' => esc_html__( 'Hover Background Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}:hover' => 'background-color: {{VALUE}} !important;',
                ],
            ]
        );
        $repeater->add_control(
            'btn_icon_hover_color',
            [
                'label' => esc_html__( 'Hover Icon Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} {{CURRENT_ITEM}}:hover .btn-icon svg path' => 'fill: {{VALUE}} !important;',
                ],
            ]
        );
        $repeater->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow_hover',
				'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}:hover',
			]
		);
        $repeater->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'hoverborder',
				'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}:hover',
			]
		);
        $repeater->add_control(
			'btn_radius_hover',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}:hover' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $repeater->end_controls_tab();

        $repeater->end_controls_tabs();
        // End of tabs

        $this->add_control(
            'button_list',
            [
                'label' => esc_html__( 'Repeater Button List', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'button_text' => esc_html__( 'Button #1', 'magic-elements' ),
                        'btn_link' => [ 'url' => '#' ],
                    ],
                    [
                        'button_text' => esc_html__( 'Button #2', 'magic-elements' ),
                        'btn_link' => [ 'url' => '#' ],
                    ],
                ],
                'title_field' => '{{{ button_text }}}',
            ]
        );

        $this->add_control(
			'bt_direction',
			[
				'label' => esc_html__( 'Direction', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Row', 'magic-elements' ),
						'icon' => 'eicon-arrow-right',
					],
					'column' => [
						'title' => esc_html__( 'Column', 'magic-elements' ),
						'icon' => 'eicon-arrow-down',
					],
				],
				'default' => 'row',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper' => 'flex-direction: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'button_justify',
			[
				'label' => esc_html__( 'Justify', 'magic-elements' ),
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
					'space-around' => [
						'title' => esc_html__( 'Space Around', 'magic-elements' ),
						'icon' => 'eicon-justify-space-around-h',
					],
				],
				'default' => 'flex-start',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper' => 'justify-content: {{VALUE}};',
				],
                'condition' => [
                    'bt_direction' => 'row',
                ],
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
				],
				'default' => 'flex-start',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper' => 'align-content: {{VALUE}};',
				],
                'condition' => [
                    'bt_direction' => 'column',
                ],
			]
		);
        $this->add_control(
			'button_self_justify',
			[
				'label' => esc_html__( 'Justify', 'magic-elements' ),
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
				],
				'default' => 'flex-start',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper .bt-item' => 'justify-content: {{VALUE}};',
				],
                'condition' => [
                    'bt_direction' => 'column',
                ],
			]
		);
        $this->add_control(
			'btn_clmn_gap',
			[
				'label' => esc_html__( 'Button Column Gap', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 10,
				],
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper' => 'column-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'btn_row_gap',
			[
				'label' => esc_html__( 'Button Row Gap', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 10,
				],
				'selectors' => [
					'{{WRAPPER}} .multiple-button-wrapper' => 'row-gap: {{SIZE}}{{UNIT}};',
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

        include __DIR__ . '/layouts/button/multiple-button.php';
 
         
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