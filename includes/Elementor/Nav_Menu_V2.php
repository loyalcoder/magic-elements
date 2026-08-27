<?php
/**
 * Elementor Nav Menu V2 widget.
 *
 * @package MagicElements
 */

declare(strict_types=1);

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Nav Menu V2 — logo, center menus, mega menu, cart, AJAX search, off-canvas.
 */
class Nav_Menu_V2 extends Widget_Base
{
    /**
     * @return string
     */
    public function get_name()
    {
        return 'em_kit_nav_menu_v2';
    }

    /**
     * @return string
     */
    public function get_title()
    {
        return esc_html__('Nav Menu V2', 'magic-elements');
    }

    /**
     * @return string
     */
    public function get_icon()
    {
        return 'eicon-nav-menu magicelements-editor-widgets-icon';
    }

    /**
     * @return array
     */
    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    /**
     * @return array
     */
    public function get_script_depends()
    {
        $deps = ['emkit-nav-menu-v2', 'jquery'];
        if (class_exists('WooCommerce')) {
            $deps[] = 'wc-cart-fragments';
        }
        return $deps;
    }

    /**
     * @return array
     */
    public function get_style_depends()
    {
        return ['emk-nav-menu-v2'];
    }

    /**
     * Register controls.
     *
     * @return void
     */
    protected function register_controls()
    {
        $this->register_layout_controls();
        $this->register_logo_controls();
        $this->register_menu_controls();
        $this->register_icons_controls();
        $this->register_search_controls();
        $this->register_cart_controls();
        $this->register_offcanvas_controls();
        $this->register_mobile_controls();

        $this->register_style_header();
        $this->register_style_logo();
        $this->register_style_menu();
        $this->register_style_mega();
        $this->register_style_icons();
        $this->register_style_search();
        $this->register_style_cart();
        $this->register_style_offcanvas();
    }

    /**
     * Layout content controls.
     *
     * @return void
     */
    protected function register_layout_controls(): void
    {
        $this->start_controls_section(
            'section_layout',
            [
                'label' => esc_html__('Layout', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'enable_sticky',
            [
                'label'        => esc_html__('Sticky Header', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => '',
            ]
        );

        $this->add_control(
            'menu_layout',
            [
                'label'   => esc_html__('Menu Layout', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'default',
                'options' => [
                    'default' => esc_html__('Default (Logo Left / Menu Center)', 'magic-elements'),
                    'center'  => esc_html__('Center Logo (Left + Right Menus)', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'enable_mega_menu',
            [
                'label'        => esc_html__('Enable Mega Menu Support', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
                'description'  => esc_html__('Shows Mega Menu templates assigned to menu items in Appearance → Menus.', 'magic-elements'),
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Logo controls.
     *
     * @return void
     */
    protected function register_logo_controls(): void
    {
        $this->start_controls_section(
            'section_logo',
            [
                'label' => esc_html__('Logo', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_logo',
            [
                'label'        => esc_html__('Show Logo', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->add_control(
            'logo',
            [
                'label'     => esc_html__('Upload Logo', 'magic-elements'),
                'type'      => Controls_Manager::MEDIA,
                'default'   => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'condition' => ['show_logo' => 'yes'],
            ]
        );

        $this->add_control(
            'logo_link',
            [
                'label'       => esc_html__('Logo Link', 'magic-elements'),
                'type'        => Controls_Manager::URL,
                'placeholder' => home_url('/'),
                'default'     => [
                    'url' => home_url('/'),
                ],
                'condition'   => ['show_logo' => 'yes'],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Menu select controls.
     *
     * @return void
     */
    protected function register_menu_controls(): void
    {
        $this->start_controls_section(
            'section_menu',
            [
                'label' => esc_html__('Menu', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'menu_select',
            [
                'label'     => esc_html__('Menu', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => $this->get_menus_options(),
                'condition' => ['menu_layout' => 'default'],
            ]
        );

        $this->add_control(
            'menu_select_left',
            [
                'label'     => esc_html__('Left Menu', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => $this->get_menus_options(),
                'condition' => ['menu_layout' => 'center'],
            ]
        );

        $this->add_control(
            'menu_select_right',
            [
                'label'     => esc_html__('Right Menu', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => $this->get_menus_options(),
                'condition' => ['menu_layout' => 'center'],
            ]
        );

        $this->add_control(
            'show_dropdown_icon',
            [
                'label'        => esc_html__('Dropdown Icon', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
                'separator'    => 'before',
                'description'  => esc_html__('Shows an arrow on dropdown and mega menu items.', 'magic-elements'),
            ]
        );

        $this->add_control(
            'dropdown_icon',
            [
                'label'     => esc_html__('Select Dropdown Icon', 'magic-elements'),
                'type'      => Controls_Manager::ICONS,
                'default'   => [
                    'value'   => 'fas fa-chevron-down',
                    'library' => 'fa-solid',
                ],
                'condition' => ['show_dropdown_icon' => 'yes'],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Right-side icon toggles.
     *
     * @return void
     */
    protected function register_icons_controls(): void
    {
        $this->start_controls_section(
            'section_icons',
            [
                'label' => esc_html__('Right Icons', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_search',
            [
                'label'        => esc_html__('Search', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $cart_default = class_exists('WooCommerce') ? 'yes' : '';

        $this->add_control(
            'show_cart',
            [
                'label'        => esc_html__('Cart', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => $cart_default,
                'description'  => class_exists('WooCommerce')
                    ? esc_html__('Shows cart with live count (WooCommerce).', 'magic-elements')
                    : esc_html__('Install and activate WooCommerce to enable the cart.', 'magic-elements'),
            ]
        );

        $this->add_control(
            'show_offcanvas',
            [
                'label'        => esc_html__('Off Canvas', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
                'description'  => esc_html__('Desktop off-canvas toggle. Mobile always uses off-canvas.', 'magic-elements'),
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Search settings.
     *
     * @return void
     */
    protected function register_search_controls(): void
    {
        $this->start_controls_section(
            'section_search',
            [
                'label'     => esc_html__('Search', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_CONTENT,
                'condition' => ['show_search' => 'yes'],
            ]
        );

        $this->add_control(
            'search_icon',
            [
                'label'   => esc_html__('Search Icon', 'magic-elements'),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-search',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->add_control(
            'search_placeholder',
            [
                'label'   => esc_html__('Placeholder', 'magic-elements'),
                'type'    => Controls_Manager::TEXT,
                'default' => esc_html__('Search…', 'magic-elements'),
            ]
        );

        $this->add_control(
            'search_post_types',
            [
                'label'       => esc_html__('Search Post Types', 'magic-elements'),
                'type'        => Controls_Manager::SELECT2,
                'multiple'    => true,
                'label_block' => true,
                'options'     => $this->get_public_post_types(),
                'default'     => ['post', 'page'],
                'description' => esc_html__('AJAX search will query the selected post types.', 'magic-elements'),
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Cart settings.
     *
     * @return void
     */
    protected function register_cart_controls(): void
    {
        $this->start_controls_section(
            'section_cart',
            [
                'label'     => esc_html__('Cart', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_CONTENT,
                'condition' => ['show_cart' => 'yes'],
            ]
        );

        if (!class_exists('WooCommerce')) {
            $this->add_control(
                'cart_woo_notice',
                [
                    'type'            => Controls_Manager::RAW_HTML,
                    'raw'             => esc_html__('WooCommerce is not active. Cart will not render on the frontend.', 'magic-elements'),
                    'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
                ]
            );
        }

        $this->add_control(
            'cart_icon',
            [
                'label'   => esc_html__('Cart Icon', 'magic-elements'),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-shopping-cart',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->add_control(
            'show_cart_count',
            [
                'label'        => esc_html__('Show Cart Count', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Off-canvas settings.
     *
     * @return void
     */
    protected function register_offcanvas_controls(): void
    {
        $this->start_controls_section(
            'section_offcanvas',
            [
                'label' => esc_html__('Off Canvas', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'offcanvas_position',
            [
                'label'   => esc_html__('Panel Position', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'right',
                'options' => [
                    'left'  => esc_html__('Left', 'magic-elements'),
                    'right' => esc_html__('Right', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'offcanvas_content',
            [
                'label'   => esc_html__('Content Source', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'menu',
                'options' => [
                    'menu'     => esc_html__('Navigation Menu', 'magic-elements'),
                    'template' => esc_html__('Builder Template', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'offcanvas_menu',
            [
                'label'     => esc_html__('Select Off Canvas Menu', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => $this->get_menus_options(),
                'condition' => ['offcanvas_content' => 'menu'],
            ]
        );

        $this->add_control(
            'offcanvas_template',
            [
                'label'     => esc_html__('Select Off Canvas Template', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => $this->get_builder_templates_options(),
                'condition' => ['offcanvas_content' => 'template'],
            ]
        );

        $this->add_control(
            'offcanvas_logo',
            [
                'label'   => esc_html__('Off Canvas Logo', 'magic-elements'),
                'type'    => Controls_Manager::MEDIA,
                'default' => [
                    'url' => '',
                ],
            ]
        );

        $this->add_control(
            'offcanvas_icon',
            [
                'label'   => esc_html__('Toggle Icon', 'magic-elements'),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-bars',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->add_control(
            'offcanvas_close_icon',
            [
                'label'   => esc_html__('Close Icon', 'magic-elements'),
                'type'    => Controls_Manager::ICONS,
                'default' => [
                    'value'   => 'fas fa-times',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Mobile settings.
     *
     * @return void
     */
    protected function register_mobile_controls(): void
    {
        $this->start_controls_section(
            'section_mobile',
            [
                'label' => esc_html__('Mobile', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'mobile_icon_position',
            [
                'label'   => esc_html__('Off Canvas Icon Position', 'magic-elements'),
                'type'    => Controls_Manager::CHOOSE,
                'options' => [
                    'left'  => [
                        'title' => esc_html__('Left', 'magic-elements'),
                        'icon'  => 'eicon-h-align-left',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'magic-elements'),
                        'icon'  => 'eicon-h-align-right',
                    ],
                ],
                'default' => 'right',
                'toggle'  => false,
            ]
        );

        $this->add_responsive_control(
            'mobile_breakpoint',
            [
                'label'   => esc_html__('Hide Desktop Menu Below (px)', 'magic-elements'),
                'type'    => Controls_Manager::NUMBER,
                'default' => 1024,
                'min'     => 320,
                'max'     => 1600,
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Header bar styles.
     *
     * @return void
     */
    protected function register_style_header(): void
    {
        $this->start_controls_section(
            'style_header',
            [
                'label' => esc_html__('Header', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name'     => 'header_bg',
                'selector' => '{{WRAPPER}} .me-nav-v2',
            ]
        );

        $this->add_responsive_control(
            'header_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__inner' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => 'header_shadow',
                'selector' => '{{WRAPPER}} .me-nav-v2',
            ]
        );

        $this->add_control(
            'header_sticky_bg',
            [
                'label'     => esc_html__('Sticky Background', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2.is-sticky' => 'background-color: {{VALUE}};',
                ],
                'condition' => ['enable_sticky' => 'yes'],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Logo styles.
     *
     * @return void
     */
    protected function register_style_logo(): void
    {
        $this->start_controls_section(
            'style_logo',
            [
                'label'     => esc_html__('Logo', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_STYLE,
                'condition' => ['show_logo' => 'yes'],
            ]
        );

        $this->add_responsive_control(
            'logo_width',
            [
                'label'      => esc_html__('Width', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range'      => [
                    'px' => ['min' => 20, 'max' => 400],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__logo img' => 'width: {{SIZE}}{{UNIT}}; height: auto;',
                ],
            ]
        );

        $this->add_responsive_control(
            'logo_margin',
            [
                'label'      => esc_html__('Margin', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__logo' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Menu item styles.
     *
     * @return void
     */
    protected function register_style_menu(): void
    {
        $this->start_controls_section(
            'style_menu',
            [
                'label' => esc_html__('Menu', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'menu_typography',
                'selector' => '{{WRAPPER}} .me-nav-v2__menu > li > a',
            ]
        );

        $this->add_responsive_control(
            'menu_gap',
            [
                'label'      => esc_html__('Item Gap', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 0, 'max' => 80],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__menu' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->start_controls_tabs('menu_tabs');

        $this->start_controls_tab(
            'menu_tab_normal',
            ['label' => esc_html__('Normal', 'magic-elements')]
        );

        $this->add_control(
            'menu_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__menu > li > a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'menu_tab_hover',
            ['label' => esc_html__('Hover', 'magic-elements')]
        );

        $this->add_control(
            'menu_color_hover',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__menu > li > a:hover' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .me-nav-v2__menu > li.current-menu-item > a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_control(
            'dropdown_icon_heading',
            [
                'label'     => esc_html__('Dropdown Icon', 'magic-elements'),
                'type'      => Controls_Manager::HEADING,
                'separator' => 'before',
                'condition' => ['show_dropdown_icon' => 'yes'],
            ]
        );

        $this->add_responsive_control(
            'dropdown_icon_size',
            [
                'label'      => esc_html__('Icon Size', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 8, 'max' => 40],
                ],
                'default'    => [
                    'unit' => 'px',
                    'size' => 12,
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__dropdown-icon' => 'font-size: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .me-nav-v2__dropdown-icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
                'condition'  => ['show_dropdown_icon' => 'yes'],
            ]
        );

        $this->add_control(
            'dropdown_icon_color',
            [
                'label'     => esc_html__('Icon Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__dropdown-icon' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .me-nav-v2__dropdown-icon svg' => 'fill: {{VALUE}};',
                ],
                'condition' => ['show_dropdown_icon' => 'yes'],
            ]
        );

        $this->add_responsive_control(
            'dropdown_icon_gap',
            [
                'label'      => esc_html__('Icon Gap', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 0, 'max' => 24],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__dropdown-icon' => 'margin-inline-start: {{SIZE}}{{UNIT}};',
                ],
                'condition'  => ['show_dropdown_icon' => 'yes'],
            ]
        );

        $this->add_control(
            'submenu_heading',
            [
                'label'     => esc_html__('Dropdown Submenu', 'magic-elements'),
                'type'      => Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'submenu_bg',
            [
                'label'     => esc_html__('Background', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__menu .sub-menu' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'submenu_color',
            [
                'label'     => esc_html__('Link Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__menu .sub-menu a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'submenu_typography',
                'selector' => '{{WRAPPER}} .me-nav-v2__menu .sub-menu a',
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => 'submenu_shadow',
                'selector' => '{{WRAPPER}} .me-nav-v2__menu .sub-menu',
            ]
        );

        $this->add_responsive_control(
            'submenu_width',
            [
                'label'      => esc_html__('Min Width', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 120, 'max' => 400],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__menu .sub-menu' => 'min-width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Mega menu styles.
     *
     * @return void
     */
    protected function register_style_mega(): void
    {
        $this->start_controls_section(
            'style_mega',
            [
                'label'     => esc_html__('Mega Menu', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_STYLE,
                'condition' => ['enable_mega_menu' => 'yes'],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name'     => 'mega_bg',
                'selector' => '{{WRAPPER}} .me-nav-v2--mega .magic-elements-mega-menu-inner',
            ]
        );

        $this->add_responsive_control(
            'mega_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2--mega .magic-elements-mega-menu-inner' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'     => 'mega_border',
                'selector' => '{{WRAPPER}} .me-nav-v2--mega .magic-elements-mega-menu-inner',
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name'     => 'mega_shadow',
                'selector' => '{{WRAPPER}} .me-nav-v2--mega .magic-elements-mega-menu-inner',
            ]
        );

        $this->add_control(
            'mega_width',
            [
                'label'   => esc_html__('Width Mode', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'container',
                'options' => [
                    'container' => esc_html__('Match Container', 'magic-elements'),
                    'full'      => esc_html__('Full Width', 'magic-elements'),
                    'custom'    => esc_html__('Custom', 'magic-elements'),
                ],
            ]
        );

        $this->add_responsive_control(
            'mega_custom_width',
            [
                'label'      => esc_html__('Custom Width', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'vw'],
                'range'      => [
                    'px' => ['min' => 200, 'max' => 1400],
                    '%'  => ['min' => 20, 'max' => 100],
                    'vw' => ['min' => 20, 'max' => 100],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2--mega.me-nav-v2--mega-custom .magic-elements-mega-menu-content' => 'width: {{SIZE}}{{UNIT}}; left: 50%; transform: translateX(-50%);',
                ],
                'condition'  => ['mega_width' => 'custom'],
            ]
        );

        $this->add_control(
            'mega_offset_top',
            [
                'label'      => esc_html__('Offset Top', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 0, 'max' => 60],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2--mega .magic-elements-mega-menu-content' => '--me-mega-offset: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Icon styles (search / cart / offcanvas).
     *
     * @return void
     */
    protected function register_style_icons(): void
    {
        $this->start_controls_section(
            'style_icons',
            [
                'label' => esc_html__('Icons', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'icons_gap',
            [
                'label'      => esc_html__('Gap', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 0, 'max' => 40],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__actions' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'icons_size',
            [
                'label'      => esc_html__('Icon Size', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 12, 'max' => 48],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__action' => 'font-size: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .me-nav-v2__action svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'icons_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__action' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .me-nav-v2__action svg' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'icons_color_hover',
            [
                'label'     => esc_html__('Hover Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__action:hover' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .me-nav-v2__action:hover svg' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Search panel styles.
     *
     * @return void
     */
    protected function register_style_search(): void
    {
        $this->start_controls_section(
            'style_search',
            [
                'label'     => esc_html__('Search', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_STYLE,
                'condition' => ['show_search' => 'yes'],
            ]
        );

        $this->add_control(
            'search_panel_bg',
            [
                'label'     => esc_html__('Panel Background', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__search-panel' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'search_input_color',
            [
                'label'     => esc_html__('Input Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__search-input' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'search_input_typo',
                'selector' => '{{WRAPPER}} .me-nav-v2__search-input',
            ]
        );

        $this->add_control(
            'search_result_color',
            [
                'label'     => esc_html__('Result Title Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2-search-title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Cart badge styles.
     *
     * @return void
     */
    protected function register_style_cart(): void
    {
        $this->start_controls_section(
            'style_cart',
            [
                'label'     => esc_html__('Cart', 'magic-elements'),
                'tab'       => Controls_Manager::TAB_STYLE,
                'condition' => ['show_cart' => 'yes'],
            ]
        );

        $this->add_control(
            'cart_badge_bg',
            [
                'label'     => esc_html__('Badge Background', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2-cart-count' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'cart_badge_color',
            [
                'label'     => esc_html__('Badge Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2-cart-count' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'cart_badge_size',
            [
                'label'      => esc_html__('Badge Size', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range'      => [
                    'px' => ['min' => 12, 'max' => 32],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2-cart-count' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}; line-height: {{SIZE}}{{UNIT}}; font-size: calc({{SIZE}}{{UNIT}} * 0.55);',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Off-canvas panel styles.
     *
     * @return void
     */
    protected function register_style_offcanvas(): void
    {
        $this->start_controls_section(
            'style_offcanvas',
            [
                'label' => esc_html__('Off Canvas', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'offcanvas_width',
            [
                'label'      => esc_html__('Width', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'vw'],
                'range'      => [
                    'px' => ['min' => 200, 'max' => 800],
                    '%'  => ['min' => 20, 'max' => 100],
                    'vw' => ['min' => 20, 'max' => 100],
                ],
                'default'    => [
                    'unit' => 'px',
                    'size' => 360,
                ],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__offcanvas' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name'     => 'offcanvas_bg',
                'selector' => '{{WRAPPER}} .me-nav-v2__offcanvas',
            ]
        );

        $this->add_responsive_control(
            'offcanvas_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .me-nav-v2__offcanvas-body' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'offcanvas_menu_color',
            [
                'label'     => esc_html__('Menu Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__offcanvas-menu a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'     => 'offcanvas_menu_typo',
                'selector' => '{{WRAPPER}} .me-nav-v2__offcanvas-menu a',
            ]
        );

        $this->add_control(
            'offcanvas_overlay',
            [
                'label'     => esc_html__('Overlay Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-nav-v2__overlay' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Build dropdown indicator HTML.
     *
     * @param array $settings Widget settings.
     * @return string
     */
    public function get_dropdown_icon_html(array $settings): string
    {
        if (empty($settings['show_dropdown_icon']) || 'yes' !== $settings['show_dropdown_icon']) {
            return '';
        }

        ob_start();
        echo '<span class="me-nav-v2__dropdown-icon" aria-hidden="true">';

        $has_icon = !empty($settings['dropdown_icon']['value']);
        if ($has_icon) {
            \Elementor\Icons_Manager::render_icon($settings['dropdown_icon'], ['aria-hidden' => 'true']);
        } else {
            // Default arrow-down SVG.
            echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" focusable="false"><path d="M6.7 8.7a1 1 0 0 1 1.4 0L12 12.6l3.9-3.9a1 1 0 1 1 1.4 1.4l-4.6 4.6a1 1 0 0 1-1.4 0L6.7 10.1a1 1 0 0 1 0-1.4z" fill="currentColor"/></svg>';
        }

        echo '</span>';

        return (string) ob_get_clean();
    }

    /**
     * Available WP menus.
     *
     * @return array
     */
    protected function get_menus_options(): array
    {
        $options = ['' => esc_html__('— Select —', 'magic-elements')];
        $menus   = wp_get_nav_menus();

        if (!empty($menus) && !is_wp_error($menus)) {
            foreach ($menus as $menu) {
                $options[(string) $menu->term_id] = $menu->name;
            }
        }

        return $options;
    }

    /**
     * Public post types for search.
     *
     * @return array
     */
    protected function get_public_post_types(): array
    {
        $options = [];
        $types   = get_post_types(['public' => true], 'objects');

        foreach ($types as $type) {
            if (in_array($type->name, ['attachment', 'elementor_library', 'me_builder'], true)) {
                continue;
            }
            $options[$type->name] = $type->labels->singular_name;
        }

        return $options;
    }

    /**
     * Builder templates for off-canvas content.
     *
     * @return array
     */
    protected function get_builder_templates_options(): array
    {
        $options = ['' => esc_html__('— Select —', 'magic-elements')];

        $query = new \WP_Query([
            'post_type'              => 'me_builder',
            'post_status'            => 'publish',
            'posts_per_page'         => 100,
            'orderby'                => 'title',
            'order'                  => 'ASC',
            'no_found_rows'          => true,
            'update_post_meta_cache' => true,
            'update_post_term_cache' => false,
        ]);

        if ($query->have_posts()) {
            foreach ($query->posts as $post) {
                $type  = (string) get_post_meta($post->ID, '_me_builder_type', true);
                $label = $post->post_title;
                if ($type) {
                    $label .= ' (' . $type . ')';
                }
                $options[(string) $post->ID] = $label;
            }
        }

        // Also include Elementor saved templates when available.
        if (post_type_exists('elementor_library')) {
            $library = new \WP_Query([
                'post_type'      => 'elementor_library',
                'post_status'    => 'publish',
                'posts_per_page' => 50,
                'orderby'        => 'title',
                'order'          => 'ASC',
                'no_found_rows'  => true,
            ]);

            if ($library->have_posts()) {
                foreach ($library->posts as $post) {
                    $options[(string) $post->ID] = $post->post_title . ' (Elementor)';
                }
            }
        }

        return $options;
    }

    /**
     * Render widget.
     *
     * @return void
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();

        wp_localize_script(
            'emkit-nav-menu-v2',
            'meNavV2',
            [
                'ajaxUrl' => admin_url('admin-ajax.php'),
                'nonce'   => wp_create_nonce('me_nav_v2_nonce'),
                'i18n'    => [
                    'searching' => esc_html__('Searching…', 'magic-elements'),
                    'empty'     => esc_html__('No results found.', 'magic-elements'),
                ],
            ]
        );

        include __DIR__ . '/layouts/Nav-Menu-V2/nav-menu-v2.php';
    }
}
