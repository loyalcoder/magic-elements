<?php 
namespace MagicElements\Elementor;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;

if (!defined('ABSPATH')) {
    exit;
}

class Vertical_Menu extends Widget_Base {
    public function get_name() {
        return 'magic-vertical-menu';
    }

    public function get_title() {
        return esc_html__('Vertical Menu', 'magic-elements');
    }

    public function get_icon() {
        return 'eicon-nav-menu';
    }
    public function get_script_depends() {
        return ['emkit-vertical-menu'];
    }
    public function get_style_depends() {
        return ['emkit-vertical-menu'];
    }
    public function get_categories() {
        return ['magic-elements'];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Menu Settings', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'menu',
            [
                'label' => esc_html__('Select Menu', 'magic-elements'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->get_menus(),
                'default' => '',
            ]
        );

        $this->end_controls_section();

        // Style Section
        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('Menu Style', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'menu_typography',
                'label' => esc_html__('Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-vertical-menu li a',
            ]
        );

        $this->start_controls_tabs('menu_style_tabs');

        // Normal State
        $this->start_controls_tab(
            'menu_normal_tab',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'menu_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu li a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'menu_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu li a' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        // Hover State
        $this->start_controls_tab(
            'menu_hover_tab',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'menu_hover_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu li a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'menu_hover_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu li a:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'menu_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-vertical-menu li a',
            ]
        );

        $this->add_responsive_control(
            'menu_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu li a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Dropdown Style Section
        $this->start_controls_section(
            'dropdown_style_section',
            [
                'label' => esc_html__('Dropdown Style', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'dropdown_arrow_color',
            [
                'label' => esc_html__('Arrow Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu .dropdown-toggle::after' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'dropdown_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-vertical-menu .sub-menu' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    private function get_menus() {
        $menus = wp_get_nav_menus();
        $options = [];

        foreach ($menus as $menu) {
            $options[$menu->term_id] = $menu->name;
        }

        return $options;
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
          <div class="vertical-menu-container">
                <?php 
                if (!empty($settings['menu'])) {
                    wp_nav_menu([
                        'menu' => $settings['menu'],
                        'menu_class' => 'magic-vertical-menu',
                        'container' => false,
                        'fallback_cb' => false,
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                        'walker' => new \MagicElements\MenuWalker(),
                    ]);
                }
                ?>
          </div>
        <?php 
    }
}
