<?php

/**
 * Elementor Classes.
 *
 * @package Accordion Elementor Magic Kit
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
 * Elementor widget for Accordion.
 *
 * @since 1.0.0
 */
class Accordion extends Widget_Base
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
        return 'em_kit_accordion';
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
        return esc_html__('Accordion', 'elementor-magic-kit');
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
        return 'eicon-accordion';
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
        return ['emkit-accordion'];
    }
    public function get_script_depends()
    {
        return ['emkit-accordion'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_accordion_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_accordion_controls()
    {
        $this->start_controls_section(
			'emk_accordion_section',
			[
				'label' => esc_html__( 'Item', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'accordion_style',
			[
				'label' => __('Accordion Style', 'elementor-magic-kit'),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'style_one' => __('Style 1 - Only Current Item Toggles', 'elementor-magic-kit'),
					'style_two' => __('Style 2 - Only This Item Toggles Independently', 'elementor-magic-kit'),
					'style_three' => __('Style 3 - All Items Open By Default', 'elementor-magic-kit'),
				],
				'default' => 'style_one',
			]
		);
		
		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'accordion_list_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'List Title' , 'elementor-magic-kit' ),
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'accordion_list_content',
			[
				'label' => esc_html__( 'Content', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'List Content' , 'elementor-magic-kit' ),
				'show_label' => false,
			]
		);

		$repeater->add_control(
			'accordion_list_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'color: {{VALUE}}'
				],
			]
		);
        $this->add_control(
			'accordion_list',
			[
				'label' => esc_html__( 'Accordion Items', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'accordion_list_title' => esc_html__( 'Title #1', 'elementor-magic-kit' ),
						'accordion_list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'elementor-magic-kit' ),
					],
					[
						'accordion_list_title' => esc_html__( 'Title #2', 'elementor-magic-kit' ),
						'accordion_list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'elementor-magic-kit' ),
					],
					[
						'accordion_list_title' => esc_html__( 'Title #3', 'elementor-magic-kit' ),
						'accordion_list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'elementor-magic-kit' ),
					],
				],
				'accordion_title_field' => '{{{ accordion_list_title }}}',
			]
		);
		$this->add_control(
			'enable_cursor_pointer',
			[
				'label' => __('Enable Cursor Pointer', 'elementor-magic-kit'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __('Yes', 'elementor-magic-kit'),
				'label_off' => __('No', 'elementor-magic-kit'),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
		
		$this->add_control(
			'toggle_animation_duration',
			[
				'label' => __('Toggle Animation Duration (ms)', 'elementor-magic-kit'),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 0,
				'max' => 5000,
				'step' => 100,
				'default' => 300,
			]
		);
		$this->add_control(
			'emk_title_align',
			[
				'label' => esc_html__( 'Item Position', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'elementor-magic-kit' ),
						'icon' => 'eicon-align-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'elementor-magic-kit' ),
						'icon' => 'eicon-align-end-h',
					],
					'space-between' => [
						'title' => esc_html__( 'Stretch', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-stretch',
					],
				],
				'default' => 'flex-start',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-title' => 'justify-content: {{VALUE}};',
				],
			]
		);
		$this->end_controls_section();
        $this->start_controls_section(
			'emk_accordion_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'show_accordion_icon',
			[
				'label' => esc_html__( 'Icons', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);
        $this->add_control(
			'accordion_expand_icon',
			[
				'label' => esc_html__( 'Expand', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-plus',
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
                'condition' => [
                    'show_accordion_icon' => 'yes'
                ],
			]
		);
        $this->add_control(
			'accordion_collapse_icon',
			[
				'label' => esc_html__( 'Collapse', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-minus',
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
                'condition' => [
                    'show_accordion_icon' => 'yes'
                ],
			]
		);

		$this->add_control(
			'icons_align',
			[
				'label' => esc_html__( 'Position', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'3' => [
						'title' => esc_html__( 'Start', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-left',
					],
					'1' => [
						'title' => esc_html__( 'End', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'default' => '3',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .emk-heading' => 'order: {{VALUE}};',
				],
				'condition' => [
                    'show_accordion_icon' => 'yes'
                ],
			]
		);
		$this->end_controls_section();
        $this->start_controls_section(
			'emk_accordion_section_style',
			[
				'label' => esc_html__( 'Item', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs('accordion_item_style_tabs');

		// Normal tab
		$this->start_controls_tab(
			'accordion_item_normal',
			[
				'label' => esc_html__('Normal', 'elementor-magic-kit'),
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'item_border',
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'item_box_shadow',
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'item_background',
				'types' => ['classic', 'gradient'],
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item',
			]
		);

		$this->end_controls_tab();

		// Hover tab
		$this->start_controls_tab(
			'accordion_item_hover',
			[
				'label' => esc_html__('Hover', 'elementor-magic-kit'),
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'item_border_hover',
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item:hover',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'item_box_shadow_hover',
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item:hover',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'item_background_hover',
				'types' => ['classic', 'gradient'],
				'selector' => '{{WRAPPER}} .emk-accordion-container .emk-accordion-item:hover',
			]
		);

		$this->add_control(
			'item_hover_transition',
			[
				'label' => esc_html__('Transition Duration', 'elementor-magic-kit'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item' => 'transition-duration: {{SIZE}}s',
				],
			]
		);


		$this->end_controls_tab();

		$this->end_controls_tabs();
		$this->add_control(
			'item_hover_hr',
			[
				'type' => \Elementor\Controls_Manager::DIVIDER,
			]
		);

		$this->add_responsive_control(
			'item_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'item_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'item_gap',
			[
				'label' => esc_html__( 'Items Gap', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
					'em' => [
						'min' => 0,
						'max' => 10,
						'step' => 0.1,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 15,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item:not(:last-child)' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'item_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();

        // Title Style Section
        $this->start_controls_section(
            'title_style_section',
            [
                'label' => esc_html__('Title Style', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__('Typography', 'elementor-magic-kit'),
                'selector' => '{{WRAPPER}} .emk-accordion-title h3',
            ]
        );

        $this->start_controls_tabs('title_style_tabs');

        // Normal State
        $this->start_controls_tab(
            'title_style_normal',
            [
                'label' => esc_html__('Normal', 'elementor-magic-kit'),
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__('Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-heading' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'title_background',
            [
                'label' => esc_html__('Background', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        // Hover State
        $this->start_controls_tab(
            'title_style_hover',
            [
                'label' => esc_html__('Hover', 'elementor-magic-kit'),
            ]
        );

        $this->add_control(
            'title_hover_color',
            [
                'label' => esc_html__('Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title:hover .emk-heading' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'title_hover_background',
            [
                'label' => esc_html__('Background', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );
		$this->add_control(
			'title_hover_transition',
			[
				'label' => esc_html__('Transition Duration', 'elementor-magic-kit'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-container .emk-accordion-item .emk-accordion-title, .emk-accordion-container .emk-accordion-item .emk-accordion-title h3' => 'transition-duration: {{SIZE}}s',
				],
			]
		);

        $this->end_controls_tab();

        $this->end_controls_tabs();
		$this->add_control(
			'title_hr',
			[
				'type' => \Elementor\Controls_Manager::DIVIDER,
			]
		);

        $this->add_responsive_control(
            'title_padding',
            [
                'label' => esc_html__('Padding', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
		$this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'title_border',
                'label' => esc_html__('Border', 'elementor-magic-kit'),
                'selector' => '{{WRAPPER}} .emk-accordion-title',
            ]
        );
        $this->add_responsive_control(
            'title_radius',
            [
                'label' => esc_html__('Border Radius', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Content Style Section
        $this->start_controls_section(
            'content_style_section',
            [
                'label' => esc_html__('Content Style', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__('Typography', 'elementor-magic-kit'),
                'selector' => '{{WRAPPER}} .emk-accordion-content',
            ]
        );
        $this->add_control(
			'content_text_align',
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
					'justify' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'default' => 'left',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .emk-accordion-content' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__('Text Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-content' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'content_background',
            [
                'label' => esc_html__('Background Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-content' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'content_padding',
            [
                'label' => esc_html__('Padding', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'content_border',
                'label' => esc_html__('Border', 'elementor-magic-kit'),
                'selector' => '{{WRAPPER}} .emk-accordion-content',
            ]
        );

        $this->add_responsive_control(
            'content_border_radius',
            [
                'label' => esc_html__('Border Radius', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
        // Icon Style Section
        $this->start_controls_section(
            'icon_style_section',
            [
                'label' => esc_html__('Icon Style', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
                    'show_accordion_icon' => 'yes'
                ],
            ]
        );

        $this->start_controls_tabs('icon_style_tabs');

        // Expand State
        $this->start_controls_tab(
            'icon_style_expand',
            [
                'label' => esc_html__('Expand', 'elementor-magic-kit'),
            ]
        );
        $this->add_responsive_control(
            'expand_icon_size',
            [
                'label' => esc_html__('Icon Size', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                    'rem' => [
                        'min' => 0,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 16,
                ],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon i' => 'font-size: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_control(
            'expand_icon_color',
            [
                'label' => esc_html__('Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon i' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon svg' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'expand_icon_background',
            [
                'label' => esc_html__('Background Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon' => 'background-color: {{VALUE}};',
                ],
            ]
        );

		$this->add_responsive_control(
            'expand_icon_padding',
            [
                'label' => esc_html__('Padding', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'expand_icon_border_radius',
            [
                'label' => esc_html__('Border Radius', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'expand_icon_margin',
            [
                'label' => esc_html__('Margin', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_expand_icon' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_tab();

        // Collapse State
        $this->start_controls_tab(
            'icon_style_collapse',
            [
                'label' => esc_html__('Collapse', 'elementor-magic-kit'),
            ]
        );
        $this->add_responsive_control(
            'collapse_icon_size',
            [
                'label' => esc_html__('Icon Size', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                    'rem' => [
                        'min' => 0,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 16,
                ],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon i' => 'font-size: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_control(
            'collapse_icon_color',
            [
                'label' => esc_html__('Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon i' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon svg' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'collapse_icon_background',
            [
                'label' => esc_html__('Background Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon' => 'background-color: {{VALUE}};',
                ],
            ]
        );

		$this->add_responsive_control(
            'collapse_icon_padding',
            [
                'label' => esc_html__('Padding', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'collapse_icon_border_radius',
            [
                'label' => esc_html__('Border Radius', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'collapse_icon_margin',
            [
                'label' => esc_html__('Margin', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .emk-accordion-title .emk-icons .accordion_collapse_icon' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );


        $this->end_controls_tab();

        $this->end_controls_tabs();

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

        include __DIR__ . '/layouts/Accordion/accordion.php';
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
