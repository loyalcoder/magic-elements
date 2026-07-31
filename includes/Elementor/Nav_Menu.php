<?php

    /**
 * Elementor Classes.
 *
 * @package Nav Menu Magic Elements
 */
 
namespace MagicElements\Elementor;
use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * Magic Kit for Elementor Extension
 *
 * Elementor widget for Nav Menu.
 *
 * @since 1.0.0
 */
class Nav_Menu extends Widget_Base
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
        return 'em_kit_nav_menu';
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
        return esc_html__('Nav Menu', 'magic-elements');
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
        return 'eicon-nav-menu magicelements-editor-widgets-icon';
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

    public function get_script_depends()
    {
        return ['emkit-nav-menu','jquery'];
    }

	public function get_style_depends()
    {
        return [
			'emk-nav-menu',
			'elementor-icons-fa-solid',
			'elementor-icons-fa-regular',
			'elementor-icons-fa-brands',
		];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_nav_menu_controls();
        //Header
           $this->start_controls_section(
			'header_section',
			[
				'label' => esc_html__( 'Header', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'enable_sticky',
			[
				'label' => esc_html__( 'Sticky Header', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Enable', 'magic-elements' ),
				'label_off' => esc_html__( 'Disable', 'magic-elements' ),
				'return_value' => 'yes',
				'default' => '',
			]
		);
         $this->add_control(
            'header_layout_type',
            [
                'label' => esc_html__( 'Choose Layout', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'layout-one',
                'options' => [
                    'layout-one' => esc_html__( 'Layout One', 'magic-elements' ),
                    'layout-two' => esc_html__( 'Layout Two', 'magic-elements' ),
                    'layout-three' => esc_html__( 'Layout Three', 'magic-elements' ),
                ],
            ]
        );
        $this->end_controls_section();
        // Logo
        $this->start_controls_section(
			'logo_section',
			[
				'label' => esc_html__( 'Logo', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'logo',
			[
				'label' => esc_html__( 'Upload Logo', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
                'media_types' => [ 'image', 'svg'],
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);
        $this->end_controls_section();

        // Menu Select
        $this->start_controls_section(
			'menu_section',
			[
				'label' => esc_html__( 'Menu', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'menu_select',
			[
				'label' => esc_html__( 'Left Menu', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options'=> $this->get_menus_options(),
				'condition' => [
                    'header_layout_type' => ['layout-one','layout-two','layout-three']
                ],
			]
		); 
        $this->add_control(
			'menu_select_right',
			[
				'label' => esc_html__( 'Right Menu', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options'=> $this->get_menus_options(),
				'condition' => [
                    'header_layout_type' => ['layout-one', 'layout-two']
                ],
			]
		);
		$this->add_control(
			'submenu_indicator_icon',
			[
				'label'       => esc_html__( 'Submenu Icon', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-chevron-down',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-down',
						'angle-down',
						'caret-down',
						'plus',
					],
				],
			]
		);
		$this->add_control(
			'submenu_nested_indicator_icon',
			[
				'label'       => esc_html__( 'Nested Submenu Icon', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-chevron-right',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-right',
						'angle-right',
						'caret-right',
						'arrow-right',
					],
				],
			]
		);
        $this->end_controls_section();
		//Layout-Three-call-us-Button
		$this->start_controls_section(
			'call_us_section',
			[
				'label' => esc_html__( 'Call Us', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
                    'header_layout_type' => ['layout-three']
                ],
			]
		);
		$this->add_control(
			'call_us_text',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Call Us: 123 4567 8904', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);

		$this->end_controls_section();
		//Layout-two-book-button
		$this->start_controls_section(
			'book_button_section',
			[
				'label' => esc_html__( 'Book Button', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
                    'header_layout_type' => ['layout-two', 'layout-three']
                ],
			]
		);
		$this->add_control(
			'book_button_title',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Book a Tour', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
		$this->add_control(
			'book_button_link',
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
        $this->end_controls_section();
        //Search Section
         $this->start_controls_section(
			'search_section',
			[
				'label' => esc_html__( 'Search Icon', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
                    'header_layout_type' => ['layout-one']
                ],
			]
		);
        $this->add_control(
			'show_search',
			[
				'label' => esc_html__( 'Show Search Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'magic-elements' ),
				'label_off' => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_control(
			'search_icon',
			[
				'label' => esc_html__( 'Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-search',
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
        $this->end_controls_section();

		// Mobile Menu
		$this->start_controls_section(
			'mobile_menu_section',
			[
				'label' => esc_html__( 'Mobile Menu', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'mobile_menu_icon',
			[
				'label'            => esc_html__( 'Menu Icon', 'magic-elements' ),
				'type'             => \Elementor\Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'default'          => [
					'value'   => 'fas fa-bars',
					'library' => 'fa-solid',
				],
				'recommended'      => [
					'fa-solid' => [
						'bars',
						'bars-staggered',
						'ellipsis-vertical',
						'grip-lines',
					],
				],
			]
		);
		$this->add_control(
			'mobile_menu_close_icon',
			[
				'label'       => esc_html__( 'Close Icon', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-times',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'times',
						'xmark',
						'circle-xmark',
						'arrow-right',
					],
				],
			]
		);
		$this->add_control(
			'mobile_menu_logo',
			[
				'label'       => esc_html__( 'Mobile Menu Logo', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'image', 'svg' ],
				'description' => esc_html__( 'Optional. Falls back to header logo if empty.', 'magic-elements' ),
			]
		);
		$this->end_controls_section();

		//Search Bar
		$this->start_controls_section(
			'search_bar_content_section',
			[
				'label' => esc_html__( 'Search Bar', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
				'condition' => [
                    'header_layout_type' => ['layout-one']
                ],
			]
		);
		$this->add_control(
			'search_button_title',
			[
				'label' => esc_html__( 'Button Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Search', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
		$this->add_control(
			'search_close_icon',
			[
				'label'       => esc_html__( 'Close Icon', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'default'     => [
					'value'   => 'fas fa-times',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'times',
						'xmark',
						'circle-xmark',
					],
				],
			]
		);
		$this->end_controls_section();
        //Header Style Section
        $this->start_controls_section(
			'header_style_section',
			[
				'label' => esc_html__( 'Header', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'header_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .magic-header',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name'      => 'header_scroll_box_shadow',
				'label'     => esc_html__( 'Scroll Box Shadow', 'magic-elements' ),
				'selector'  => '{{WRAPPER}} .magic-header.is-sticky.is-scrolled',
				'condition' => [
					'enable_sticky' => 'yes',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'header_border',
				'selector' => '{{WRAPPER}} .magic-header',
			]
		);
		$this->add_responsive_control(
			'header_width',
			[
				'label' => esc_html__( 'Header Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 2000,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 1290,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-menu' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'header_height',
			[
				'label' => esc_html__( 'Header Height', 'magic-elements' ),
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
					'size' => 100,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-menu' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'header_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .magic-header' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'header_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .magic-header' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'header_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .magic-header' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();
        //Logo Style Section
        $this->start_controls_section(
			'logo_style_section',
			[
				'label' => esc_html__( 'Logo', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'header_logo_width',
			[
				'label' => esc_html__( 'Width', 'magic-elements' ),
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
					'size' => 234,
				],
				'selectors' => [
					'{{WRAPPER}} .menu-logo img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'header_logo_height',
			[
				'label' => esc_html__( 'Height', 'magic-elements' ),
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
					'size' => 80,
				],
				'selectors' => [
					'{{WRAPPER}} .menu-logo img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'header_logo_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .menu-logo' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Menu Style Section
        $this->start_controls_section(
			'menu_style_section',
			[
				'label' => esc_html__( 'Menu', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'nav_menu_item_gap',
			[
				'label' => esc_html__( 'Item Gap', 'magic-elements' ),
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
				'selectors' => [
					'{{WRAPPER}} nav ul' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'nav_menu_text_color',
			[
				'label' => esc_html__( 'Item Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} nav ul li' => 'color: {{VALUE}}',
					'{{WRAPPER}} nav ul li > a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'nav_menu_text_hover_color',
			[
				'label' => esc_html__( 'Item Hover Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} nav ul li > a:hover' => 'color: {{VALUE}}',
					'{{WRAPPER}} nav ul li:hover > a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'nav_menu_item_typography',
				'selector' => '{{WRAPPER}} nav ul li',
			]
		);
		$this->add_control(
			'submenu_indicator_heading',
			[
				'label'     => esc_html__( 'Submenu Icon', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'submenu_indicator_gap',
			[
				'label'      => esc_html__( 'Icon Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 0,
						'max' => 40,
						'step' => 1,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 6,
				],
				'selectors'  => [
					'{{WRAPPER}} .cnw-nav > li.menu-item-has-children > a' => 'gap: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .cnw-nav .sub-menu li.menu-item-has-children > a' => 'gap: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .cnw-nav-mobile li.menu-item-has-children > a' => 'gap: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-submenu-icon' => 'margin-left: 0;',
				],
			]
		);
		$this->add_responsive_control(
			'submenu_indicator_vertical_offset',
			[
				'label'      => esc_html__( 'Icon Vertical Position', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => -30,
						'max' => 30,
						'step' => 1,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 0,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-submenu-icon' => 'top: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'submenu_indicator_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 8,
						'max' => 40,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 12,
				],
				'selectors'  => [
					'{{WRAPPER}} .magic-submenu-icon' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-submenu-icon i' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .magic-submenu-icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'submenu_indicator_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magic-submenu-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-submenu-icon i' => 'color: {{VALUE}};',
					'{{WRAPPER}} .magic-submenu-icon svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'submenu_indicator_hover_color',
			[
				'label'     => esc_html__( 'Icon Hover Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .cnw-nav li.menu-item-has-children > a:hover .magic-submenu-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .cnw-nav li.menu-item-has-children > a:hover .magic-submenu-icon i' => 'color: {{VALUE}};',
					'{{WRAPPER}} .cnw-nav li.menu-item-has-children > a:hover .magic-submenu-icon svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
					'{{WRAPPER}} .cnw-nav-mobile li.menu-item-has-children > a:hover .magic-submenu-icon' => 'color: {{VALUE}};',
					'{{WRAPPER}} .cnw-nav-mobile li.menu-item-has-children > a:hover .magic-submenu-icon i' => 'color: {{VALUE}};',
					'{{WRAPPER}} .cnw-nav-mobile li.menu-item-has-children > a:hover .magic-submenu-icon svg' => 'fill: {{VALUE}}; color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'menu_dropdown_more_options',
			[
				'label' => esc_html__( 'Dropdown Menu', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'dropdown_menu_width',
			[
				'label' => esc_html__( 'Dropdown Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 100,
						'max' => 600,
						'step' => 1,
					],
					'%' => [
						'min' => 10,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 180,
				],
				'selectors' => [
					'{{WRAPPER}} .nav-menu-left .sub-menu, {{WRAPPER}} .nav-menu-right .sub-menu, {{WRAPPER}} .nav-menu-center .sub-menu' => 'width: {{SIZE}}{{UNIT}}; min-width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'dropdown_menu_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .sub-menu',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'dropdown_menu_border',
				'selector' => '{{WRAPPER}} .sub-menu',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'dropdown_menu_box_shadow',
				'selector' => '{{WRAPPER}} .sub-menu',
			]
		);
		$this->add_responsive_control(
			'dropdown_menu_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .sub-menu' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'dropdown_menu_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .sub-menu' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'dropdown_menu_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .sub-menu' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
		//Layout-Three-call-us-Button Style Section
		$this->start_controls_section(
			'call_us_style_section',
			[
				'label' => esc_html__( 'Call Us', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
                    'header_layout_type' => ['layout-three'],
                ],
			]
		);
		$this->add_control(
			'call_us_text_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .call-us p' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'call_us_typography',
				'selector' => '{{WRAPPER}} .call-us p',
			]
		);
		$this->add_responsive_control(
			'call_us_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .call-us p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();
		//Layout-two-book-button Style Section
		$this->start_controls_section(
			'book_button_style_section',
			[
				'label' => esc_html__( 'Book Button', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
                    'header_layout_type' => ['layout-two', 'layout-three']
                ],
			]
		);
		$this->add_control(
			'book_button_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .book-button a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'book_button_typography',
				'selector' => '{{WRAPPER}} .book-button a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'book_button_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .book-button a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'book_button_border',
				'selector' => '{{WRAPPER}} .book-button a',
			]
		);
		$this->add_control(
			'book_button_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'book_button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .book-button a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'book_button_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .book-button a' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'book_button_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .book-button a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Search Style Section
		$this->start_controls_section(
			'search_style_section',
			[
				'label' => esc_html__( 'Search Icon', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
                    'header_layout_type' => ['layout-one']
                ],
			]
		);
		$this->add_control(
			'search_icon_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .menu-search' => 'color: {{VALUE}};',
					'{{WRAPPER}} .menu-search svg' => 'fill: {{VALUE}};',
					'{{WRAPPER}} .menu-search i' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'search_icon_hover_color',
			[
				'label'     => esc_html__( 'Icon Hover Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .menu-search:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .menu-search:hover svg' => 'fill: {{VALUE}};',
					'{{WRAPPER}} .menu-search:hover i' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'menu_search_icon_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .menu-search',
			]
		);
		$this->add_control(
			'search_icon_hover_bg_color',
			[
				'label'     => esc_html__( 'Hover Background Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .menu-search:hover' => 'background-color: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'menu_search_icon_border',
				'selector' => '{{WRAPPER}} .menu-search',
			]
		);
        $this->add_responsive_control(
			'search_icon_width',
			[
				'label' => esc_html__( 'Width', 'magic-elements' ),
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
					'size' => 20,
				],
				'selectors' => [
					'{{WRAPPER}} .menu-search svg' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'search_icon_height',
			[
				'label' => esc_html__( 'Height', 'magic-elements' ),
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
					'size' => 20,
				],
				'selectors' => [
					'{{WRAPPER}} .menu-search svg' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'search_icon_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'search_icon_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .menu-search' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_icon_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .menu-search' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_icon_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .menu-search' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

		// Mobile Menu Style
		$this->start_controls_section(
			'mobile_menu_style_section',
			[
				'label' => esc_html__( 'Mobile Menu', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'mobile_menu_toggle_heading',
			[
				'label' => esc_html__( 'Toggle Icon', 'magic-elements' ),
				'type'  => \Elementor\Controls_Manager::HEADING,
			]
		);
		$this->add_control(
			'mobile_menu_toggle_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-toggle' => 'color: {{VALUE}};',
					'{{WRAPPER}} .mobile-menu-toggle svg' => 'fill: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'mobile_menu_toggle_background',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .mobile-menu-toggle',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'mobile_menu_toggle_border',
				'selector' => '{{WRAPPER}} .mobile-menu-toggle',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_toggle_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 10,
						'max' => 80,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-toggle' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .mobile-menu-toggle svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_toggle_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-toggle' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_toggle_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-toggle' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_toggle_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-toggle' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mobile_menu_panel_heading',
			[
				'label'     => esc_html__( 'Panel', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_panel_width',
			[
				'label'      => esc_html__( 'Panel Width', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range'      => [
					'px' => [
						'min' => 200,
						'max' => 800,
					],
					'%'  => [
						'min' => 40,
						'max' => 100,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 320,
				],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-panel' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'mobile_menu_panel_background',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .mobile-menu-panel',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_panel_padding',
			[
				'label'      => esc_html__( 'Panel Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-panel' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mobile_menu_close_heading',
			[
				'label'     => esc_html__( 'Close Icon', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'mobile_menu_close_color',
			[
				'label'     => esc_html__( 'Close Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-close' => 'color: {{VALUE}};',
					'{{WRAPPER}} .mobile-menu-close svg' => 'fill: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'mobile_menu_close_hover_color',
			[
				'label'     => esc_html__( 'Close Hover Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-close:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .mobile-menu-close:hover svg' => 'fill: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'mobile_menu_close_bg_color',
			[
				'label'     => esc_html__( 'Close Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-close' => 'background-color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'mobile_menu_close_hover_bg_color',
			[
				'label'     => esc_html__( 'Close Hover Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-close:hover' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .mobile-menu-close:focus' => 'background-color: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_close_size',
			[
				'label'      => esc_html__( 'Close Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 12,
						'max' => 64,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-close' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .mobile-menu-close svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_close_border_radius',
			[
				'label'      => esc_html__( 'Close Border Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-close' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_close_padding',
			[
				'label'      => esc_html__( 'Close Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-close' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mobile_menu_items_heading',
			[
				'label'     => esc_html__( 'Menu Items', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_item_width',
			[
				'label'      => esc_html__( 'Item Width', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 50,
						'max' => 600,
						'step' => 1,
					],
					'%'  => [
						'min' => 10,
						'max' => 100,
					],
				],
				'default'    => [
					'unit' => '%',
					'size' => 100,
				],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li' => 'width: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a' => 'width: 100%;',
				],
			]
		);
		$this->add_control(
			'mobile_menu_item_color',
			[
				'label'     => esc_html__( 'Item Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'mobile_menu_item_hover_color',
			[
				'label'     => esc_html__( 'Item Hover Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a:hover' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'mobile_menu_item_typography',
				'selector' => '{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'mobile_menu_item_background',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_item_padding',
			[
				'label'      => esc_html__( 'Item Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li > a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_item_margin',
			[
				'label'      => esc_html__( 'Item Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'selectors'  => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile > li' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'mobile_menu_submenu_heading',
			[
				'label'     => esc_html__( 'Sub Menu', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'mobile_menu_submenu_color',
			[
				'label'     => esc_html__( 'Sub Item Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile .sub-menu a' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'mobile_menu_submenu_typography',
				'selector' => '{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile .sub-menu a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'mobile_menu_submenu_background',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .mobile-menu-panel .cnw-nav-mobile .sub-menu',
			]
		);
		$this->end_controls_section();

		//Search Bar Style Section
		$this->start_controls_section(
			'search_bar_style_section',
			[
				'label' => esc_html__( 'Search Bar', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
                    'header_layout_type' => ['layout-one']
                ],
			]
		);
		$this->add_control(
			'search_bar_more_options',
			[
				'label' => esc_html__( 'Search Bar', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'search_bar_width',
			[
				'label' => esc_html__( 'Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 550,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 550,
				],
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_bar_height',
			[
				'label' => esc_html__( 'Height', 'magic-elements' ),
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
					'size' => 60,
				],
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'search_bar_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .search_input',
			]
		);
		$this->add_control(
			'search_bar_input_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'search_bar_input_typography',
				'selector' => '{{WRAPPER}} .search_input',
			]
		);
		$this->add_responsive_control(
			'search_bar_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_bar_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_bar_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .search_input' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'search_button_more_options',
			[
				'label' => esc_html__( 'Search Button', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'search_bar_button_color',
			[
				'label' => esc_html__( 'Button Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .inner button' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'search_bar_button_typography',
				'selector' => '{{WRAPPER}} .inner button',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'search_bar_button_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .inner button',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'search_bar_button_border',
				'selector' => '{{WRAPPER}} .inner button',
			]
		);
		$this->add_responsive_control(
			'search_bar_button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .inner button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_bar_button_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .inner button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_bar_button_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .inner button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'search_close_heading',
			[
				'label'     => esc_html__( 'Close Button', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'search_close_offset_top',
			[
				'label'      => esc_html__( 'Top Offset From Center', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 0,
						'max' => 200,
						'step' => 1,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 60,
				],
				'selectors'  => [
					'{{WRAPPER}} .search_close' => 'top: calc(50% - {{SIZE}}{{UNIT}});',
				],
			]
		);
		$this->add_control(
			'search_close_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .search_close' => 'color: {{VALUE}};',
					'{{WRAPPER}} .search_close svg' => 'fill: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'search_close_hover_color',
			[
				'label'     => esc_html__( 'Icon Hover Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .search_close:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .search_close:hover svg' => 'fill: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'search_close_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .search_close' => 'background-color: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'search_close_hover_bg_color',
			[
				'label'     => esc_html__( 'Hover Background Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .search_close:hover' => 'background-color: {{VALUE}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'search_close_border',
				'selector' => '{{WRAPPER}} .search_close',
			]
		);
		$this->add_responsive_control(
			'search_close_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
				'default'    => [
					'top'      => '50',
					'right'    => '50',
					'bottom'   => '50',
					'left'     => '50',
					'unit'     => '%',
					'isLinked' => true,
				],
				'selectors'  => [
					'{{WRAPPER}} .search_close' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_close_size',
			[
				'label'      => esc_html__( 'Button Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 24,
						'max' => 80,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 44,
				],
				'selectors'  => [
					'{{WRAPPER}} .search_close' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'search_close_icon_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px' => [
						'min' => 10,
						'max' => 40,
					],
				],
				'default'    => [
					'unit' => 'px',
					'size' => 18,
				],
				'selectors'  => [
					'{{WRAPPER}} .search_close' => 'font-size: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .search_close svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();


    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_nav_menu_controls()
    {
        // Reserved for future shared controls.
    }

    /**
     * Get available nav menus as options for controls.
     *
     * @return array
     */
    protected function get_menus_options() {
        $menus   = wp_get_nav_menus();
        $options = [];

        if ( ! empty( $menus ) && ! is_wp_error( $menus ) ) {
            foreach ( $menus as $m ) {
                $options[ $m->slug ] = $m->name;
            }
        }

        return $options;
    }

	/**
	 * Render submenu indicator icon HTML.
	 *
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
	 * Append submenu indicator icons to parent menu item titles.
	 *
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
		$is_mobile  = false !== strpos( $menu_class, 'cnw-nav-mobile' );
		$icon_type  = ( $is_mobile || 0 === (int) $depth ) ? 'down' : 'nested';

		return $title . $this->get_submenu_indicator_html( $icon_type );
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
        $header_layout = $settings['header_layout_type'];
		add_filter( 'nav_menu_item_title', [ $this, 'append_submenu_indicator' ], 10, 4 );
        include __DIR__ . '/layouts/Nav-Menu/nav-menu.php';
		remove_filter( 'nav_menu_item_title', [ $this, 'append_submenu_indicator' ], 10 );
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
