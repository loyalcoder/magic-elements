<?php

/**
 * Elementor Classes.
 *
 * @package Feature List Elementor Magic Kit
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
 * Elementor widget for Feature List.
 *
 * @since 1.0.0
 */
class Feature_List extends Widget_Base
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
        return 'em_kit_feature_list';
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
        return esc_html__('Feature List', 'elementor-magic-kit');
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
        return 'eicon-bullet-list emk-editor-widgets-icon';
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
        return ['emk-feature-list', 'emkit-style'];
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
        $this->register_feature_list_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_feature_list_controls()
    {
        $this->start_controls_section(
			'feature_list_content_section',
			[
				'label' => esc_html__( 'Feature Title', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'feature_list_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Basic', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'feature_list_section',
			[
				'label' => esc_html__( 'Feature List', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$repeater = new \Elementor\Repeater();
        $repeater->add_control(
			'feature_list_icons',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-check',
					'library' => 'fa-solid',
                    
				],
			]
		);
        $repeater->add_control(
			'feature_list_item',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Feature Item', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'feature_list',
			[
				'label' => esc_html__( 'Repeater List', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'feature_list_item' => esc_html__( 'Feature Item 1', 'elementor-magic-kit' ),
					],
					[
						'feature_list_item' => esc_html__( 'Feature Item 2', 'elementor-magic-kit' ),
					],
					[
						'feature_list_item' => esc_html__( 'Feature Item 3', 'elementor-magic-kit' ),
					],
					[
						'feature_list_item' => esc_html__( 'Feature Item 4', 'elementor-magic-kit' ),
					],
					[
						'feature_list_item' => esc_html__( 'Feature Item 5', 'elementor-magic-kit' ),
					],
				],
				'title_field' => '{{{ feature_list_item }}}',
			]
		);

        $this->end_controls_section();

        $this->start_controls_section(
			'button_content_section',
			[
				'label' => esc_html__( 'Button', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'button_text',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Free', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'button_link',
			[
				'label' => esc_html__( 'Link', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '#',
					'is_external' => true,
					'nofollow' => true,
				],
				'label_block' => true,
			]
		);
        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
			'feature_box_section',
			[
				'label' => esc_html__( 'Feature Box', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'feature_box_align',
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
					'{{WRAPPER}} .feature' => 'justify-content: {{VALUE}};',
				],
			]
		);
        //Start-normal-hover
        $this->start_controls_tabs(
			'style_tabs'
		);
        //normal
		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'feature_box_normal_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature_list',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'feature_box_normal_border',
				'selector' => '{{WRAPPER}} .feature_list',
			]
		);
        $this->add_responsive_control(
			'feature_box_normal_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 8,
					'bottom' => 8,
					'left' => 8,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'feature_box_normal_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 30,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

        //hover
		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'feature_box_hover_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature_list:hover',
			]
		);
        $this->add_control(
			'feature_box_hover_transition',
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
					'{{WRAPPER}} .feature_list:hover' => 'transition-duration: {{SIZE}}s',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'feature_box_hover_border',
				'selector' => '{{WRAPPER}} .feature_list:hover',
			]
		);
        $this->add_responsive_control(
			'feature_box_hover_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 8,
					'bottom' => 8,
					'left' => 8,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list:hover' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'feature_box_hover_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 30,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list:hover' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();
        //End-normal-hover
        $this->end_controls_section();

        
        $this->start_controls_section(
            $this->get_name() .'_feature_title_section',
			[
				'label' => esc_html__( 'Feature Title', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'feature_title_align',
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
					'{{WRAPPER}} .feature_list h2' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'feature_title_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .feature_list h2' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'feature_title_typography',
				'selector' => '{{WRAPPER}} .feature_list h2',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'feature_title_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature_list h2',
			]
		);
		$this->add_control(
			'feature_title_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'feature_title_border',
				'selector' => '{{WRAPPER}} .feature_list h2',
			]
		);
        $this->add_responsive_control(
			'feature_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 8,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list h2' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'feature_title_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 0,
					'bottom' => 10,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list h2' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'feature_title_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list h2' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'feature_icon_section',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_control(
			'feature_icon_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .feature svg' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'feature_icon_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature svg',
			]
		);
		$this->add_control(
			'icon_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'feature_icon_border',
				'selector' => '{{WRAPPER}} .feature svg',
			]
		);
        $this->add_responsive_control(
			'feature_icon_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .feature svg' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'feature_icon_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 4,
					'right' => 4,
					'bottom' => 4,
					'left' => 4,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature svg' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->end_controls_section();

		$this->start_controls_section(
			'feature_item_section',
			[
				'label' => esc_html__( 'Feature Item', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'feature_item_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .feature h4' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'feature_item_typography',
				'selector' => '{{WRAPPER}} .feature h4',
			]
		);
		$this->add_responsive_control(
			'feature_item_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-magic-kit' ),
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
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} .feature h4' => 'margin-left: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'feature_item_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_list .feature' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

		$this->end_controls_section();

		
		$this->start_controls_section(
			'feature_button_section',
			[
				'label' => esc_html__( 'Button', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'feature_button_align',
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
					'{{WRAPPER}} .feature_button' => 'text-align: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'button_content_typography',
				'selector' => '{{WRAPPER}} .feature_button a',
			]
		);
		//start-normal-hover
		$this->start_controls_tabs(
			'button_style_tabs'
		);
		//normal
		$this->start_controls_tab(
			'button_style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);
		$this->add_control(
			'button_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .feature_button a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'button_normal_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature_button a',
			]
		);
		$this->add_control(
			'button_normal_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'button_normal_border',
				'selector' => '{{WRAPPER}} .feature_button a',
			]
		);
		$this->add_responsive_control(
			'button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 4,
					'right' => 4,
					'bottom' => 4,
					'left' => 4,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_button a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'button_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 30,
					'bottom' => 10,
					'left' => 30,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_button a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();
		//hover
		$this->start_controls_tab(
			'button_style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);
		$this->add_control(
			'button_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .feature_button a:hover' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'button_hover_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .feature_button a:hover',
			]
		);
		$this->add_control(
			'button_hover_transition',
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
					'{{WRAPPER}} .feature_button a:hover' => 'transition-duration: {{SIZE}}s',
				],
			]
		);
		$this->add_control(
			'button_hover_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'button_hover_border',
				'selector' => '{{WRAPPER}} .feature_button a:hover',
			]
		);
		
		$this->add_responsive_control(
			'button_hover_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 30,
					'bottom' => 10,
					'left' => 30,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_button a:hover' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();
		//start-normal-hover
		$this->add_control(
			'button_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'button_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 30,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .feature_button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings    = $this->get_settings_for_display();
        
        $feature_list = $settings['feature_list'];

        include __DIR__ . '/layouts/feature-list.php';
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
