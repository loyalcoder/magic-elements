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
        return ['emk-nav-menu'];
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
				'options'=> cnw_get_menus(),
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
				'options'=> cnw_get_menus(),
				'condition' => [
                    'header_layout_type' => ['layout-one','layout-two']
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

        //Mobile Menu
        $this->start_controls_section(
			'mobile_menu_section',
			[
				'label' => esc_html__( 'Mobile Menu Icon', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_responsive_control(
			'show_mobile_menu_icon',
			[
				'label' => esc_html__( 'Show Mobile Menu Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'magic-elements' ),
				'label_off' => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_responsive_control(
			'mobile_menu_icon',
			[
				'label' => esc_html__( 'Mobile Menu Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-align-left',
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
		//Offcanvas Section
		    $this->start_controls_section(
			'offcanvas_section',
			[
				'label' => esc_html__( 'Offcanvas', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'offcanvas_style',
			[
				'label' => esc_html__( 'Style', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'sidebar',
				'options' => [
					'sidebar' => esc_html__( 'Sidebar (current)', 'magic-elements' ),
					'fullscreen' => esc_html__( 'Fullscreen', 'magic-elements' ),
				],
			]
		);
		$this->add_control(
			'offcanvas_sidebar_logo',
			[
				'label' => esc_html__( 'Sidebar Logo', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'image', 'svg' ],
				'condition' => [
					'offcanvas_style' => 'sidebar',
				],
			]
		);
		$this->add_control(
			'offcanvas_fullscreen_logo',
			[
				'label' => esc_html__( 'Fullscreen Logo', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'image', 'svg'],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_close_icon_picker',
			[
				'label' => esc_html__( 'Close Icon', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => '',
					'library' => 'fa-solid',
				],
			]
		);
		$this->add_control(
			'offcanvas_email',
			[
				'label' => esc_html__( 'Email (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_phone',
			[
				'label' => esc_html__( 'Phone (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => '',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_address',
			[
				'label' => esc_html__( 'Address (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 3,
				'default' => '',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_search_icon',
			[
				'label' => esc_html__( 'Search Icon (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'media_types' => [ 'image', 'svg' ],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
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
					'{{WRAPPER}} .menu-logo' => 'width: {{SIZE}}{{UNIT}};',
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
					'{{WRAPPER}} .menu-logo' => 'height: {{SIZE}}{{UNIT}};',
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
			'menu_dropdown_more_options',
			[
				'label' => esc_html__( 'Dropdown Menu', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
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
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'menu_search_icon_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .menu-search',
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
        //Mobile Menu Style Section
        $this->start_controls_section(
			'mobile_menu_style_section',
			[
				'label' => esc_html__( 'Mobile Menu Icon', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'mobile_menu_icon_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .mobile-menu',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'mobile_menu_icon_border',
				'selector' => '{{WRAPPER}} .mobile-menu',
			]
		);
        $this->add_responsive_control(
			'mobile_menu_icon_width',
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
					'{{WRAPPER}} .mobile-menu svg' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'mobile_menu_icon_height',
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
					'{{WRAPPER}} .mobile-menu svg' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'mobile_menu_icon_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'mobile_menu_icon_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .mobile-menu' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_icon_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .mobile-menu' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mobile_menu_icon_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .mobile-menu' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
		// Fullscreen Offcanvas dropdown menu 
		$this->start_controls_section(
			'fullscreen_dropdown_menu_style_section',
			[
				'label' => esc_html__( 'Fullscreen Dropdown Menu', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'fullscreen_dropdown_menu_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .offcanvas-fullscreen .cnw-nav-fullscreen .menu-item .sub-menu',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'fullscreen_dropdown_menu_typography',
				'selector' => '{{WRAPPER}} .offcanvas-fullscreen .fullscreen-menus .cnw-nav-fullscreen .sub-menu li a',
			]
		);
        $this->end_controls_section();

		// Offcanvas style controls 
		$this->start_controls_section(
			'offcanvas_controls_style_section',
			[
				'label' => esc_html__( 'Fullscreen Offcanvas', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'offcanvas_close_color',
			[
				'label' => esc_html__( 'Close Button Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fullscreen .btn-close' => 'filter: invert(0); color: {{VALUE}};',
					'{{WRAPPER}} .offcanvas .btn-close' => 'color: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_close_size',
			[
				'label' => esc_html__( 'Close Button Size', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 12,
						'max' => 64,
						'step' => 1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fullscreen .btn-close' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}; background-size: {{SIZE}}{{UNIT}} {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .offcanvas .btn-close' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}; background-size: {{SIZE}}{{UNIT}} {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'offcanvas_menu_hover_color',
			[
				'label' => esc_html__( 'Menu Hover Color (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fullscreen .cnw-nav-fullscreen > li > a:hover' => 'color: {{VALUE}};',
				],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_menu_hover_bg',
			[
				'label' => esc_html__( 'Menu Hover Background (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fullscreen .cnw-nav-fullscreen > li > a:hover' => 'background-color: {{VALUE}};',
				],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_menu_hover_underline',
			[
				'label' => esc_html__( 'Menu Hover Underline (Fullscreen)', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'magic-elements' ),
				'label_off' => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fullscreen .cnw-nav-fullscreen > li > a:hover' => 'text-decoration: underline;',
				],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'offcanvas_fs_logo_heading',
			[
				'label' => esc_html__( 'Fullscreen Logo', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_fs_logo_width',
			[
				'label' => esc_html__( 'Logo Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem' ],
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
					'unit' => 'PX',
					'size' => 150,
				],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fs-logo' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_fs_logo_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-fs-logo' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->end_controls_section();
		//Fullscreen Offcanvas Content 
		$this->start_controls_section(
			'fullscreen_offcanvas_content_style_section',
			[
				'label' => esc_html__( 'Fullscreen Offcanvas Content ', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_control(
			'more_options_fullscreen_title',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'fullscreen_title_color',
			[
				'label' => esc_html__( 'Title Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left .contact-block h6' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'fullscreen_title_typography',
				'selector' => '{{WRAPPER}} .fullscreen-left .contact-block h6',
			]
		);
		$this->add_responsive_control(
			'fullscreen_title_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left .contact-block' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'more_options_fullscreen_content',
			[
				'label' => esc_html__( 'Content', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'fullscreen_content_color',
			[
				'label' => esc_html__( 'Content Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left .contact-block p' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'fullscreen_content_typography',
				'selector' => '{{WRAPPER}} .fullscreen-left .contact-block p',
			]
		);
		$this->add_responsive_control(
			'fullscreen_content_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left .contact-block p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'more_options_fullscreen_copyright',
			[
				'label' => esc_html__( 'Copyright', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'fullscreen_copyright_color',
			[
				'label' => esc_html__( 'Copyright Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left-footer .fullscreen-copyright span' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'fullscreen_copyright_typography',
				'selector' => '{{WRAPPER}} .fullscreen-left-footer .fullscreen-copyright span',
			]
		);
		$this->add_responsive_control(
			'fullscreen_copyright_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .fullscreen-left-footer' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();
		//Sidebar Offcanvas Section
		$this->start_controls_section(
			'offcanvas_style_section',
			[
				'label' => esc_html__( 'Sidebar Offcanvas', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'offcanvas_width',
			[
				'label' => esc_html__( 'Offcanvas Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .offcanvas' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'offcanvas_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .offcanvas',
			]
		);
		$this->add_control(
			'sidebar_logo_more_options',
			[
				'label' => esc_html__( 'Sidebar Logo', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'offcanvas_sidebar_logo_width',
			[
				'label' => esc_html__( 'Logo Width', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 20,
						'max' => 600,
						'step' => 1,
					],
					'%' => [
						'min' => 10,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-sidebar-logo img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_sidebar_logo_margin',
			[
				'label' => esc_html__( 'Logo Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-sidebar-logo' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'offcanvas_menu_more_options',
			[
				'label' => esc_html__( 'Offcanvas Menu', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_control(
			'offcanvas_menu_item_color',
			[
				'label' => esc_html__( 'Menu Item Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .offcanvas-body ul li a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'offcanvas_menu_item_typography',
				'selector' => '{{WRAPPER}} .offcanvas-body ul li a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'offcanvas_menu_item_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .offcanvas-body ul li a',
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'offcanvas_menu_item_border',
				'selector' => '{{WRAPPER}} .offcanvas-body ul li a',
			]
		);
		$this->add_control(
			'offcanvas_divider_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'offcanvas_menu_item_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-body ul li a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_menu_item_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-body ul li a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'offcanvas_menu_item_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .offcanvas-body ul li' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
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
			'offcanvas_fs_columns_heading',
			[
				'label' => esc_html__( 'Fullscreen Columns Background', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'offcanvas_fs_left_bg',
				'label' => esc_html__( 'Left Column Background', 'magic-elements' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .offcanvas-fullscreen .fullscreen-left',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'offcanvas_fs_right_bg',
				'label' => esc_html__( 'Right Column Background', 'magic-elements' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .offcanvas-fullscreen .fullscreen-right',
				'condition' => [
					'offcanvas_style' => 'fullscreen',
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
        function cnw_get_menus(){
           $menus = wp_get_nav_menus();
    	   $options = [];
		foreach ( $menus as $m ) {
			$options[ $m->slug ] = $m->name;
		}
		return $options;
        }
		
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
        include __DIR__ . '/layouts/Nav-Menu/nav-menu.php';
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
