<?php
/**
 * Elementor Magic Nav widget — menu only (desktop + mobile).
 *
 * @package MagicElements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Magic Nav widget.
 */
class Magic_Nav extends Widget_Base {

	/**
	 * @return string
	 */
	public function get_name() {
		return 'em_kit_magic_nav';
	}

	/**
	 * @return string
	 */
	public function get_title() {
		return esc_html__( 'Magic Nav', 'magic-elements' );
	}

	/**
	 * @return string
	 */
	public function get_icon() {
		return 'eicon-nav-menu magicelements-editor-widgets-icon';
	}

	/**
	 * @return array
	 */
	public function get_categories() {
		return [ 'magicelements-widgets' ];
	}

	/**
	 * @return array
	 */
	public function get_script_depends() {
		return [ 'emkit-magic-nav', 'jquery' ];
	}

	/**
	 * @return array
	 */
	public function get_style_depends() {
		return [
			'emk-magic-nav',
			'elementor-icons-fa-solid',
			'elementor-icons-fa-regular',
			'elementor-icons-fa-brands',
		];
	}

	/**
	 * Register controls.
	 */
	protected function register_controls() {
		$this->register_content_controls();
		$this->register_style_controls();
	}

	/**
	 * Content tab.
	 */
	protected function register_content_controls() {
		// Menu.
		$this->start_controls_section(
			'mn_menu_section',
			[
				'label' => esc_html__( 'Menu', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'menu_select',
			[
				'label'   => esc_html__( 'Select Menu', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'options' => $this->get_menus_options(),
			]
		);

		$this->add_responsive_control(
			'menu_align',
			[
				'label'   => esc_html__( 'Alignment', 'magic-elements' ),
				'type'    => Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'center'     => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-h-align-center',
					],
					'flex-end'   => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
					'space-between' => [
						'title' => esc_html__( 'Stretch', 'magic-elements' ),
						'icon'  => 'eicon-h-align-stretch',
					],
				],
				'default' => 'flex-start',
				'toggle'  => true,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu' => 'justify-content: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'menu_layout',
			[
				'label'   => esc_html__( 'Layout', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'horizontal',
				'options' => [
					'horizontal' => esc_html__( 'Horizontal', 'magic-elements' ),
					'vertical'   => esc_html__( 'Vertical', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'hover_effect',
			[
				'label'   => esc_html__( 'Hover Effect', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'underline',
				'options' => [
					'none'       => esc_html__( 'None', 'magic-elements' ),
					'underline'  => esc_html__( 'Underline', 'magic-elements' ),
					'overline'   => esc_html__( 'Overline', 'magic-elements' ),
					'double-line'=> esc_html__( 'Double Line', 'magic-elements' ),
					'background' => esc_html__( 'Background', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'submenu_indicator_icon',
			[
				'label'       => esc_html__( 'Submenu Icon', 'magic-elements' ),
				'type'        => Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-chevron-down',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [ 'plus', 'chevron-down', 'angle-down', 'caret-down' ],
				],
			]
		);

		$this->add_control(
			'submenu_nested_indicator_icon',
			[
				'label'       => esc_html__( 'Nested Submenu Icon', 'magic-elements' ),
				'type'        => Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-chevron-right',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [ 'chevron-right', 'angle-right', 'caret-right', 'arrow-right' ],
				],
			]
		);

		$this->end_controls_section();

		// Mobile Menu.
		$this->start_controls_section(
			'mn_mobile_section',
			[
				'label' => esc_html__( 'Mobile Menu', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'show_mobile_menu',
			[
				'label'        => esc_html__( 'Enable Mobile Menu', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'mobile_breakpoint',
			[
				'label'     => esc_html__( 'Breakpoint', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => '1023',
				'options'   => [
					'767'  => esc_html__( 'Mobile (< 768px)', 'magic-elements' ),
					'1023' => esc_html__( 'Tablet (< 1024px)', 'magic-elements' ),
					'1199' => esc_html__( 'Laptop (< 1200px)', 'magic-elements' ),
				],
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_control(
			'mobile_panel_position',
			[
				'label'     => esc_html__( 'Panel Position', 'magic-elements' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
					'left'  => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
				],
				'default'   => 'right',
				'toggle'    => false,
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_control(
			'mobile_menu_icon',
			[
				'label'     => esc_html__( 'Toggle Icon', 'magic-elements' ),
				'type'      => Controls_Manager::ICONS,
				'default'   => [
					'value'   => 'fas fa-bars',
					'library' => 'fa-solid',
				],
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_control(
			'mobile_menu_close_icon',
			[
				'label'     => esc_html__( 'Close Icon', 'magic-elements' ),
				'type'      => Controls_Manager::ICONS,
				'default'   => [
					'value'   => 'fas fa-times',
					'library' => 'fa-solid',
				],
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_control(
			'mobile_menu_logo',
			[
				'label'     => esc_html__( 'Panel Logo', 'magic-elements' ),
				'type'      => Controls_Manager::MEDIA,
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_responsive_control(
			'mobile_toggle_align',
			[
				'label'     => esc_html__( 'Toggle Alignment', 'magic-elements' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'center'     => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-h-align-center',
					],
					'flex-end'   => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
				],
				'default'   => 'flex-end',
				'selectors' => [
					'{{WRAPPER}} .magic-nav__toggle-wrap' => 'justify-content: {{VALUE}};',
				],
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab.
	 */
	protected function register_style_controls() {
		// Wrapper.
		$this->start_controls_section(
			'mn_wrapper_style',
			[
				'label' => esc_html__( 'Wrapper', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'mn_wrapper_bg',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .magic-nav',
			]
		);

		$this->add_responsive_control(
			'mn_wrapper_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_wrapper_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'mn_wrapper_border',
				'selector' => '{{WRAPPER}} .magic-nav',
			]
		);

		$this->add_responsive_control(
			'mn_wrapper_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Menu items.
		$this->start_controls_section(
			'mn_items_style',
			[
				'label' => esc_html__( 'Menu Items', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'mn_item_gap',
			[
				'label'      => esc_html__( 'Item Gap', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [ 'min' => 0, 'max' => 80 ],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 28,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'mn_item_typography',
				'selector' => '{{WRAPPER}} .magic-nav__menu > li > a',
			]
		);

		$this->start_controls_tabs( 'mn_item_tabs' );

		$this->start_controls_tab(
			'mn_item_normal',
			[ 'label' => esc_html__( 'Normal', 'magic-elements' ) ]
		);

		$this->add_control(
			'mn_item_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li > a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_item_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li > a' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'mn_item_hover',
			[ 'label' => esc_html__( 'Hover', 'magic-elements' ) ]
		);

		$this->add_control(
			'mn_item_hover_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li:hover > a' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu > li > a:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_item_hover_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li:hover > a' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav--effect-background .magic-nav__menu > li:hover > a' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_item_hover_line_color',
			[
				'label'     => esc_html__( 'Line Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#E50914',
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li > a::after' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu > li > a::before' => 'background-color: {{VALUE}};',
				],
				'condition' => [
					'hover_effect' => [ 'underline', 'overline', 'double-line' ],
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'mn_item_active',
			[ 'label' => esc_html__( 'Active', 'magic-elements' ) ]
		);

		$this->add_control(
			'mn_item_active_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li.current-menu-item > a' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu > li.current-menu-ancestor > a' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu > li.current_page_item > a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_item_active_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu > li.current-menu-item > a' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu > li.current-menu-ancestor > a' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();
		$this->end_controls_tabs();

		$this->add_responsive_control(
			'mn_item_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', 'rem' ],
				'separator'  => 'before',
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu > li > a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'mn_item_border',
				'selector' => '{{WRAPPER}} .magic-nav__menu > li > a',
			]
		);

		$this->add_responsive_control(
			'mn_item_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu > li > a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_line_height',
			[
				'label'      => esc_html__( 'Line Height', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range'      => [
					'px' => [ 'min' => 1, 'max' => 12 ],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 2,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu > li > a::after' => 'height: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-nav__menu > li > a::before' => 'height: {{SIZE}}{{UNIT}};',
				],
				'condition'  => [
					'hover_effect' => [ 'underline', 'overline', 'double-line' ],
				],
			]
		);

		$this->add_responsive_control(
			'mn_line_width',
			[
				'label'      => esc_html__( 'Line Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [ 'min' => 4, 'max' => 120 ],
					'%'  => [ 'min' => 10, 'max' => 100 ],
				],
				'default'    => [
					'unit' => '%',
					'size' => 100,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu > li > a::after' => 'width: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-nav__menu > li > a::before' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition'  => [
					'hover_effect' => [ 'underline', 'overline', 'double-line' ],
				],
			]
		);

		$this->end_controls_section();

		// Submenu.
		$this->start_controls_section(
			'mn_submenu_style',
			[
				'label' => esc_html__( 'Submenu', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'mn_submenu_width',
			[
				'label'      => esc_html__( 'Min Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [
					'px' => [ 'min' => 120, 'max' => 400 ],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 220,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu' => 'min-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'mn_submenu_typography',
				'selector' => '{{WRAPPER}} .magic-nav__menu .sub-menu a',
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'mn_submenu_bg',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .magic-nav__menu .sub-menu',
			]
		);

		$this->add_control(
			'mn_submenu_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_submenu_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu a:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_submenu_hover_bg',
			[
				'label'     => esc_html__( 'Hover Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu a:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_submenu_padding',
			[
				'label'      => esc_html__( 'Panel Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_submenu_item_padding',
			[
				'label'      => esc_html__( 'Item Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'mn_submenu_border',
				'selector' => '{{WRAPPER}} .magic-nav__menu .sub-menu',
			]
		);

		$this->add_responsive_control(
			'mn_submenu_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu .sub-menu' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name'     => 'mn_submenu_shadow',
				'selector' => '{{WRAPPER}} .magic-nav__menu .sub-menu',
			]
		);

		$this->add_responsive_control(
			'mn_submenu_offset',
			[
				'label'      => esc_html__( 'Top Offset', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range'      => [
					'px' => [ 'min' => 0, 'max' => 40 ],
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu > li > .sub-menu' => 'top: calc(100% + {{SIZE}}{{UNIT}});',
				],
			]
		);

		$this->add_control(
			'mn_indicator_heading',
			[
				'label'     => esc_html__( 'Submenu Icon', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'mn_indicator_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [
					'px' => [ 'min' => 6, 'max' => 30 ],
				],
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon' ) => 'font-size: {{SIZE}}{{UNIT}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon i' ) => 'font-size: {{SIZE}}{{UNIT}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon svg' ) => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mn_indicator_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon' ) => 'color: {{VALUE}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon i' ) => 'color: {{VALUE}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-submenu-icon svg' ) => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_indicator_hover_color',
			[
				'label'     => esc_html__( 'Icon Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__menu li.menu-item-has-children:hover > a .magic-submenu-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__menu li.menu-item-has-children:hover > a .magic-submenu-icon svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_indicator_gap',
			[
				'label'      => esc_html__( 'Icon Gap', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [
					'px' => [ 'min' => 0, 'max' => 30 ],
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__menu li.menu-item-has-children > a' => 'gap: {{SIZE}}{{UNIT}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu li.menu-item-has-children > a' ) => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Mobile toggle.
		$this->start_controls_section(
			'mn_mobile_toggle_style',
			[
				'label'     => esc_html__( 'Mobile Toggle', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_control(
			'mn_toggle_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__toggle' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__toggle i' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__toggle svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__toggle svg [fill]:not([fill="none"])' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_toggle_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-nav__toggle:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-nav__toggle:hover svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'mn_toggle_bg',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .magic-nav__toggle',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'mn_toggle_border',
				'selector' => '{{WRAPPER}} .magic-nav__toggle',
			]
		);

		$this->add_responsive_control(
			'mn_toggle_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [
					'px' => [ 'min' => 12, 'max' => 60 ],
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__toggle' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-nav__toggle svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_toggle_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__toggle' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_toggle_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .magic-nav__toggle' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		// Mobile panel.
		$this->start_controls_section(
			'mn_mobile_panel_style',
			[
				'label'     => esc_html__( 'Mobile Panel', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_mobile_menu' => 'yes',
				],
			]
		);

		$this->add_responsive_control(
			'mn_panel_width',
			[
				'label'      => esc_html__( 'Panel Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range'      => [
					'px' => [ 'min' => 220, 'max' => 600 ],
					'%'  => [ 'min' => 40, 'max' => 100 ],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 320,
				],
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__panel' ) => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'mn_panel_bg',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => $this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__panel' ),
			]
		);

		$this->add_responsive_control(
			'mn_panel_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', 'rem' ],
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__panel' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mn_backdrop_color',
			[
				'label'     => esc_html__( 'Backdrop Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(0,0,0,0.45)',
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__backdrop' ) => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_close_heading',
			[
				'label'     => esc_html__( 'Close Icon', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'mn_close_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close' ) => 'color: {{VALUE}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close svg' ) => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_close_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close:hover' ) => 'color: {{VALUE}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close:hover svg' ) => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_close_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [
					'px' => [ 'min' => 12, 'max' => 40 ],
				],
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close' ) => 'font-size: {{SIZE}}{{UNIT}};',
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__close svg' ) => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mn_mobile_items_heading',
			[
				'label'     => esc_html__( 'Menu Items', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'mn_mobile_item_typography',
				'selector' => $this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu > li > a' ),
			]
		);

		$this->add_control(
			'mn_mobile_item_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu > li > a' ) => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_mobile_item_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu > li > a:hover' ) => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'mn_mobile_item_border_color',
			[
				'label'     => esc_html__( 'Divider Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu > li > a' ) => 'border-bottom-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'mn_mobile_item_padding',
			[
				'label'      => esc_html__( 'Item Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em' ],
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu > li > a' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mn_mobile_submenu_heading',
			[
				'label'     => esc_html__( 'Submenu', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'mn_mobile_submenu_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu .sub-menu a' ) => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'mn_mobile_submenu_typography',
				'selector' => $this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu .sub-menu a' ),
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'mn_mobile_submenu_bg',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => $this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__mobile-menu .sub-menu' ),
			]
		);

		$this->add_responsive_control(
			'mn_mobile_logo_width',
			[
				'label'      => esc_html__( 'Logo Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [ 'min' => 40, 'max' => 240 ],
				],
				'separator'  => 'before',
				'selectors'  => [
					$this->mn_offcanvas_selector( '{{WRAPPER}} .magic-nav__panel-logo img' ) => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition'  => [
					'mobile_menu_logo[url]!' => '',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Selectors that still match after the mobile panel is moved to document.body.
	 *
	 * @param string $selector Selector using {{WRAPPER}}.
	 * @return string
	 */
	protected function mn_offcanvas_selector( $selector ) {
		$parts    = array_map( 'trim', explode( ',', $selector ) );
		$expanded = [];

		foreach ( $parts as $part ) {
			if ( '' === $part ) {
				continue;
			}

			$expanded[] = $part;

			if ( false !== strpos( $part, '{{WRAPPER}}' ) ) {
				$expanded[] = str_replace( '{{WRAPPER}}', '.magic-nav-portal.elementor-element-{{ID}}', $part );
			}
		}

		return implode( ', ', array_unique( $expanded ) );
	}

	/**
	 * @return array
	 */
	protected function get_menus_options() {
		$menus   = wp_get_nav_menus();
		$options = [ '' => esc_html__( '— Select Menu —', 'magic-elements' ) ];

		if ( ! empty( $menus ) && ! is_wp_error( $menus ) ) {
			foreach ( $menus as $menu ) {
				$options[ $menu->slug ] = $menu->name;
			}
		}

		return $options;
	}

	/**
	 * @param string $type down|nested
	 * @return string
	 */
	protected function get_submenu_indicator_html( $type = 'down' ) {
		$settings = $this->get_settings_for_display();
		$icon     = ( 'nested' === $type )
			? ( ! empty( $settings['submenu_nested_indicator_icon']['value'] ) ? $settings['submenu_nested_indicator_icon'] : [ 'value' => 'fas fa-chevron-right', 'library' => 'fa-solid' ] )
			: ( ! empty( $settings['submenu_indicator_icon']['value'] ) ? $settings['submenu_indicator_icon'] : [ 'value' => 'fas fa-chevron-down', 'library' => 'fa-solid' ] );

		ob_start();
		echo '<span class="magic-submenu-icon magic-submenu-icon--' . esc_attr( $type ) . '" aria-hidden="true">';
		\Elementor\Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] );
		echo '</span>';

		return ob_get_clean();
	}

	/**
	 * @param string   $title Item title.
	 * @param \WP_Post $item  Menu item.
	 * @param object   $args  Menu args.
	 * @param int      $depth Depth.
	 * @return string
	 */
	public function append_submenu_indicator( $title, $item, $args, $depth ) {
		if ( empty( $item->classes ) || ! in_array( 'menu-item-has-children', (array) $item->classes, true ) ) {
			return $title;
		}

		$menu_class = isset( $args->menu_class ) ? (string) $args->menu_class : '';
		$is_mobile  = false !== strpos( $menu_class, 'magic-nav__mobile-menu' );
		$icon_type  = ( $is_mobile || 0 === (int) $depth ) ? 'down' : 'nested';

		return $title . $this->get_submenu_indicator_html( $icon_type );
	}

	/**
	 * Render widget.
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		add_filter( 'nav_menu_item_title', [ $this, 'append_submenu_indicator' ], 10, 4 );
		include __DIR__ . '/layouts/Magic-Nav/magic-nav.php';
		remove_filter( 'nav_menu_item_title', [ $this, 'append_submenu_indicator' ], 10 );
	}

	/**
	 * Plain content.
	 */
	public function render_plain_content() {}

	/**
	 * Editor template.
	 */
	protected function content_template() {}
}
