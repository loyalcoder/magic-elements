<?php 
namespace MagicElements\Elementor;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Plugin;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Offcanvas extends Widget_Base {

    public function get_name() {
        return 'magic-offcanvas';
    }

    public function get_title() {
        return esc_html__('Magic Offcanvas', 'magic-elements');
    }

    public function get_icon() {
        return 'eicon-menu-bar';
    }

    public function get_categories() {
        return ['magic-elements'];
    }

    public function get_keywords() {
        return ['offcanvas', 'menu', 'sidebar', 'navigation'];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
            ]
        );
        $this->add_control(
            'trigger_icon',
            [
                'label' => esc_html__('Trigger Icon', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
            ]
        );
         
        
        $this->add_control(
            'template_id',
            [
                'label' => esc_html__('Select Template', 'magic-elements'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->get_elementor_templates(),
                'default' => '',
            ]
        );

        $this->add_control(
            'position',
            [
                'label' => esc_html__('Position', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'right',
                'options' => [
                    'left' => esc_html__('Left', 'magic-elements'),
                    'right' => esc_html__('Right', 'magic-elements'),
                    'top' => esc_html__('Top', 'magic-elements'),
                    'bottom' => esc_html__('Bottom', 'magic-elements'),
                ],
            ]
        );

        $this->add_responsive_control(
            'canvas_width',
            [
                'label' => esc_html__('Canvas Width', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'vw'],
                'range' => [
                    'px' => [
                        'min' => 100,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 10,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'vw' => [
                        'min' => 10,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 300,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-offcanvas-left' => 'width: {{SIZE}}{{UNIT}}; left: -{{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-offcanvas-right' => 'width: {{SIZE}}{{UNIT}}; right: -{{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-offcanvas-left.active' => 'transform: translateX({{SIZE}}{{UNIT}});',
                    '{{WRAPPER}} .magic-offcanvas-right.active' => 'transform: translateX(-{{SIZE}}{{UNIT}});',
                ],
                'condition' => [
                    'position' => ['left', 'right'],
                ],
            ]
        );

        $this->add_responsive_control(
            'canvas_height',
            [
                'label' => esc_html__('Canvas Height', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'vh'],
                'range' => [
                    'px' => [
                        'min' => 100,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 10,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'vh' => [
                        'min' => 10,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'vh',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-offcanvas-top' => 'height: {{SIZE}}{{UNIT}}; top: -{{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-offcanvas-bottom' => 'height: {{SIZE}}{{UNIT}}; bottom: -{{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-offcanvas-top.active' => 'transform: translateY({{SIZE}}{{UNIT}});',
                    '{{WRAPPER}} .magic-offcanvas-bottom.active' => 'transform: translateY(-{{SIZE}}{{UNIT}});',
                ],
                'condition' => [
                    'position' => ['top', 'bottom'],
                ],
            ]
        );

        $this->end_controls_section();

        // Style Section
        $this->start_controls_section(
            'section_style',
            [
                'label' => esc_html__('Style', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'trigger_typography',
                'label' => esc_html__('Trigger Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-offcanvas-trigger',
            ]
        );

        $this->add_control(
            'trigger_color',
            [
                'label' => esc_html__('Trigger Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-offcanvas-trigger' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'trigger_icon_color',
            [
                'label' => esc_html__('Trigger Icon Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-offcanvas-trigger-icon' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .magic-offcanvas-trigger-icon svg' => 'fill: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'trigger_icon_size',
            [
                'label' => esc_html__('Icon Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em', 'rem'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 200,
                    ],
                    'em' => [
                        'min' => 0.1,
                        'max' => 20,
                    ],
                    'rem' => [
                        'min' => 0.1,
                        'max' => 20,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 20,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-offcanvas-trigger-icon' => 'font-size: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-offcanvas-trigger-icon svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'trigger_button_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .magic-offcanvas-trigger'
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'trigger_button_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-offcanvas-trigger'
            ]
        );

        
        

        

    }

    private function get_elementor_templates() {
        $templates = Plugin::instance()->templates_manager->get_source('local')->get_items();
        $options = [];

        foreach ($templates as $template) {
            $options[$template['template_id']] = $template['title'];
        }

        return $options;
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $template_id = $settings['template_id'];
        $position = $settings['position'];
        ?>
        <div class="magic-offcanvas-wrapper">
            <button class="magic-offcanvas-trigger">
                <?php if (!empty($settings['trigger_icon']['value'])) { ?>
                    <span class="magic-offcanvas-trigger-icon">
                        <?php \Elementor\Icons_Manager::render_icon($settings['trigger_icon']); ?>
                    </span>
                <?php } ?>
            </button>

            <div class="magic-offcanvas magic-offcanvas-<?php echo esc_attr($position); ?>">
                <div class="magic-offcanvas-content">
                    <button class="magic-offcanvas-close">&times;</button>
                    <?php
                    if (!empty($template_id)) {
                        $allowed_tags = wp_kses_allowed_html('post');
                    
                        // Add <style> to the allowed tags
                        $allowed_tags['style'] = [
                            'type' => true,
                            'media' => true,
                            'scoped' => true
                        ];
                    
                        echo wp_kses(
                            Plugin::instance()->frontend->get_builder_content_for_display($template_id, false),
                            $allowed_tags
                        );
                    }
                    
                    ?>
                </div>
            </div>
            <div class="magic-offcanvas-overlay"></div>
        </div>

        <style>
            .magic-offcanvas {
                position: fixed;
                background: #fff;
                z-index: 999;
                transition: transform 0.3s ease;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }

            .magic-offcanvas-left {
                top: 0;
                height: 100vh;
            }

            .magic-offcanvas-right {
                top: 0;
                height: 100vh;
            }

            .magic-offcanvas-top {
                left: 0;
                width: 100%;
            }

            .magic-offcanvas-bottom {
                left: 0;
                width: 100%;
            }

            .magic-offcanvas-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 998;
                display: none;
            }

            .magic-offcanvas-overlay.active {
                display: block;
            }

            .magic-offcanvas-close {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                z-index: 1000;
            }
        </style>

        <script>
        jQuery(document).ready(function($) {
            $('.magic-offcanvas-trigger').on('click', function() {
                $('.magic-offcanvas, .magic-offcanvas-overlay').addClass('active');
            });

            $('.magic-offcanvas-close, .magic-offcanvas-overlay').on('click', function() {
                $('.magic-offcanvas, .magic-offcanvas-overlay').removeClass('active');
            });
        });
        </script>
        <?php
    }
}
