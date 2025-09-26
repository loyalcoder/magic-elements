<?php

/**
 * Elementor Classes.
 *
 * @package Button Magic Elements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Background;
use Elementor\Icons_Manager;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Magic Elements for Elementor Extension
 *
 * Elementor widget for Enhanced Button.
 *
 * @since 1.0.0
 */
class Button extends Widget_Base
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
        return 'magicelements_button';
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
        return esc_html__('Enhanced Button', 'magic-elements');
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
        return 'eicon-button magicelements-editor-widgets-icon';
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
        return ['emkit-button'];
    }

    public function get_script_depends()
    {
        return ['emkit-button'];
    }

    /**
     * Register Button controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_button_controls();
        $this->register_icon_controls();
        $this->register_style_controls();
        $this->register_hover_controls();
        $this->register_animation_controls();
    }

    /**
     * Register button controls
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_button_controls()
    {
        $this->start_controls_section(
            'section_button',
            [
                'label' => esc_html__('Button', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__('Text', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Click Here', 'magic-elements'),
                'placeholder' => esc_html__('Enter button text', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'link',
            [
                'label' => esc_html__('Link', 'magic-elements'),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__('https://your-link.com', 'magic-elements'),
                'default' => [
                    'url' => '#',
                    'is_external' => false,
                    'nofollow' => false,
                ],
            ]
        );

        $this->add_control(
            'button_size',
            [
                'label' => esc_html__('Size', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'md',
                'options' => [
                    'xs' => esc_html__('Extra Small', 'magic-elements'),
                    'sm' => esc_html__('Small', 'magic-elements'),
                    'md' => esc_html__('Medium', 'magic-elements'),
                    'lg' => esc_html__('Large', 'magic-elements'),
                    'xl' => esc_html__('Extra Large', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'button_type',
            [
                'label' => esc_html__('Type', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'filled',
                'options' => [
                    'filled' => esc_html__('Filled', 'magic-elements'),
                    'outline' => esc_html__('Outline', 'magic-elements'),
                    'ghost' => esc_html__('Ghost', 'magic-elements'),
                    'gradient' => esc_html__('Gradient', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'button_shape',
            [
                'label' => esc_html__('Shape', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'rounded',
                'options' => [
                    'square' => esc_html__('Square', 'magic-elements'),
                    'rounded' => esc_html__('Rounded', 'magic-elements'),
                    'pill' => esc_html__('Pill', 'magic-elements'),
                    'circle' => esc_html__('Circle', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'button_width',
            [
                'label' => esc_html__('Width', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'auto',
                'options' => [
                    'auto' => esc_html__('Auto', 'magic-elements'),
                    'full' => esc_html__('Full Width', 'magic-elements'),
                    'custom' => esc_html__('Custom', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'use_custom_styles',
            [
                'label' => esc_html__('Use Custom Styles', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
                'description' => esc_html__('Enable to use custom background and color controls instead of preset styles', 'magic-elements'),
            ]
        );

        $this->add_control(
            'button_custom_width',
            [
                'label' => esc_html__('Custom Width', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 200,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'width: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'button_width' => 'custom',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Register icon controls
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_icon_controls()
    {
        $this->start_controls_section(
            'section_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_icon',
            [
                'label' => esc_html__('Show Icon', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
                'description' => esc_html__('Enable to show icon on the button', 'magic-elements'),
            ]
        );

        $this->add_control(
            'selected_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'fa4compatibility' => 'icon',
                'default' => [
                    'value' => 'fas fa-star',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_position',
            [
                'label' => esc_html__('Icon Position', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'right',
                'options' => [
                    'left' => esc_html__('Left', 'magic-elements'),
                    'right' => esc_html__('Right', 'magic-elements'),
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_spacing',
            [
                'label' => esc_html__('Icon Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 5,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 8,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button .icon-left' => 'margin-right: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .magic-button .icon-right' => 'margin-left: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_size',
            [
                'label' => esc_html__('Icon Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em'],
                'range' => [
                    'px' => [
                        'min' => 6,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0.5,
                        'max' => 10,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 16,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button .icon' => 'font-size: {{SIZE}}{{UNIT}};',
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_hover_behavior',
            [
                'label' => esc_html__('Icon Hover Behavior', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none' => esc_html__('None', 'magic-elements'),
                    'hide' => esc_html__('Hide on Hover', 'magic-elements'),
                    'show' => esc_html__('Show on Hover', 'magic-elements'),
                ],
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'icon_hover_move',
            [
                'label' => esc_html__('Icon Hover Movement', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
                'description' => esc_html__('Icon will move on hover', 'magic-elements'),
                'condition' => [
                    'show_icon' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Register style controls
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_style_controls()
    {
        $this->start_controls_section(
            'section_style',
            [
                'label' => esc_html__('Button Style', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'typography',
                'selector' => '{{WRAPPER}} .magic-button',
            ]
        );

        $this->start_controls_tabs('button_styles');

        $this->start_controls_tab(
            'button_normal',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'button_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'button_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .magic-button',
                'fields_options' => [
                    'background' => [
                        'default' => 'classic',
                    ],
                    'color' => [
                        'default' => '#667eea',
                    ],
                ],
                'condition' => [
                    'use_custom_styles' => 'yes',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-button',
            ]
        );

        $this->add_control(
            'button_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'button_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'button_hover',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'button_hover_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'button_hover_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .magic-button:hover',
                'fields_options' => [
                    'background' => [
                        'default' => 'classic',
                    ],
                    'color' => [
                        'default' => '#764ba2',
                    ],
                ],
                'condition' => [
                    'use_custom_styles' => 'yes',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button_hover_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-button:hover',
            ]
        );

        $this->add_control(
            'button_hover_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-button:hover' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'button_hover_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-button:hover',
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_control(
            'button_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Register hover effect controls
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_hover_controls()
    {
        $this->start_controls_section(
            'section_hover_effects',
            [
                'label' => esc_html__('Hover Effects', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'hover_effect',
            [
                'label' => esc_html__('Hover Effect', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none' => esc_html__('None', 'magic-elements'),
                    'slide' => esc_html__('Slide', 'magic-elements'),
                    'push' => esc_html__('Push', 'magic-elements'),
                    'shutter' => esc_html__('Shutter', 'magic-elements'),
                    'flash' => esc_html__('Flash', 'magic-elements'),
                    'pulse' => esc_html__('Pulse', 'magic-elements'),
                    'rubber' => esc_html__('Rubber', 'magic-elements'),
                    'swing' => esc_html__('Swing', 'magic-elements'),
                    'tada' => esc_html__('Tada', 'magic-elements'),
                    'wobble' => esc_html__('Wobble', 'magic-elements'),
                    'jello' => esc_html__('Jello', 'magic-elements'),
                    'bounce' => esc_html__('Bounce', 'magic-elements'),
                    'flip' => esc_html__('Flip', 'magic-elements'),
                    'rotate' => esc_html__('Rotate', 'magic-elements'),
                    'scale' => esc_html__('Scale', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'hover_animation_duration',
            [
                'label' => esc_html__('Animation Duration', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['s'],
                'range' => [
                    's' => [
                        'min' => 0.1,
                        'max' => 3,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 's',
                    'size' => 0.3,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'transition-duration: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'hover_scale',
            [
                'label' => esc_html__('Hover Scale', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [''],
                'range' => [
                    '' => [
                        'min' => 0.5,
                        'max' => 2,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'size' => 1.05,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button:hover' => 'transform: scale({{SIZE}});',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Register animation controls
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_animation_controls()
    {
        $this->start_controls_section(
            'section_animations',
            [
                'label' => esc_html__('Animations', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'entrance_animation',
            [
                'label' => esc_html__('Entrance Animation', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none' => esc_html__('None', 'magic-elements'),
                    'fadeIn' => esc_html__('Fade In', 'magic-elements'),
                    'fadeInUp' => esc_html__('Fade In Up', 'magic-elements'),
                    'fadeInDown' => esc_html__('Fade In Down', 'magic-elements'),
                    'fadeInLeft' => esc_html__('Fade In Left', 'magic-elements'),
                    'fadeInRight' => esc_html__('Fade In Right', 'magic-elements'),
                    'slideInUp' => esc_html__('Slide In Up', 'magic-elements'),
                    'slideInDown' => esc_html__('Slide In Down', 'magic-elements'),
                    'slideInLeft' => esc_html__('Slide In Left', 'magic-elements'),
                    'slideInRight' => esc_html__('Slide In Right', 'magic-elements'),
                    'zoomIn' => esc_html__('Zoom In', 'magic-elements'),
                    'bounceIn' => esc_html__('Bounce In', 'magic-elements'),
                    'rotateIn' => esc_html__('Rotate In', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'animation_delay',
            [
                'label' => esc_html__('Animation Delay', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['s'],
                'range' => [
                    's' => [
                        'min' => 0,
                        'max' => 5,
                        'step' => 0.1,
                    ],
                ],
                'default' => [
                    'unit' => 's',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-button' => 'animation-delay: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Render button widget output on the frontend.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();

        $button_classes = [
            'magic-button',
            'magic-button-' . $settings['button_size'],
            'magic-button-' . $settings['button_type'],
            'magic-button-' . $settings['button_shape'],
            'magic-button-width-' . $settings['button_width'],
        ];

        if ($settings['use_custom_styles'] === 'yes') {
            $button_classes[] = 'magic-button-custom-styles';
        }

        $this->add_render_attribute('button', 'class', $button_classes);

        if ($settings['hover_effect'] && $settings['hover_effect'] !== 'none') {
            $this->add_render_attribute('button', 'class', 'magic-button-hover-' . $settings['hover_effect']);
        }

        if ($settings['entrance_animation'] && $settings['entrance_animation'] !== 'none') {
            $this->add_render_attribute('button', 'class', 'magic-button-animate-' . $settings['entrance_animation']);
        }

        if ($settings['show_icon'] === 'yes') {
            $this->add_render_attribute('button', 'class', 'magic-button-has-icon');
        }
        
        if ($settings['icon_hover_behavior'] === 'hide') {
            $this->add_render_attribute('button', 'class', 'magic-button-icon-hide-hover');
        } elseif ($settings['icon_hover_behavior'] === 'show') {
            $this->add_render_attribute('button', 'class', 'magic-button-icon-show-hover');
        }
        
        if ($settings['icon_hover_move'] === 'yes') {
            $this->add_render_attribute('button', 'class', 'magic-button-icon-move-hover');
        }

        if (!empty($settings['link']['url'])) {
            $this->add_link_attributes('button', $settings['link']);
        }

        $icon_position = $settings['icon_position'];
        $has_icon = !empty($settings['selected_icon']['value']) && $settings['show_icon'] === 'yes';

        ?>
        <div class="magic-button-wrapper">
            <a <?php echo $this->get_render_attribute_string('button'); ?>>
                <?php if ($has_icon && $icon_position === 'left') : ?>
                    <span class="icon icon-left">
                        <?php Icons_Manager::render_icon($settings['selected_icon'], ['aria-hidden' => 'true']); ?>
                    </span>
                <?php endif; ?>
                
                <span class="button-text"><?php echo esc_html($settings['button_text']); ?></span>
                
                <?php if ($has_icon && $icon_position === 'right') : ?>
                    <span class="icon icon-right">
                        <?php Icons_Manager::render_icon($settings['selected_icon'], ['aria-hidden' => 'true']); ?>
                    </span>
                <?php endif; ?>
            </a>
        </div>
        <?php
    }

    /**
     * Render button widget output in the editor.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function content_template()
    {
        ?>
        <#
        var buttonClasses = [
            'magic-button',
            'magic-button-' + settings.button_size,
            'magic-button-' + settings.button_type,
            'magic-button-' + settings.button_shape,
            'magic-button-width-' + settings.button_width
        ];

        if (settings.hover_effect && settings.hover_effect !== 'none') {
            buttonClasses.push('magic-button-hover-' + settings.hover_effect);
        }

        if (settings.entrance_animation && settings.entrance_animation !== 'none') {
            buttonClasses.push('magic-button-animate-' + settings.entrance_animation);
        }

        if (settings.show_icon === 'yes') {
            buttonClasses.push('magic-button-has-icon');
        }
        
        if (settings.icon_hover_behavior === 'hide') {
            buttonClasses.push('magic-button-icon-hide-hover');
        } else if (settings.icon_hover_behavior === 'show') {
            buttonClasses.push('magic-button-icon-show-hover');
        }
        
        if (settings.icon_hover_move === 'yes') {
            buttonClasses.push('magic-button-icon-move-hover');
        }

        var iconPosition = settings.icon_position;
        var hasIcon = settings.selected_icon && settings.selected_icon.value && settings.show_icon === 'yes';
        #>
        
        <div class="magic-button-wrapper">
            <a class="{{ buttonClasses.join(' ') }}" href="{{ settings.link.url }}">
                <# if (hasIcon && iconPosition === 'left') { #>
                    <span class="icon icon-left">
                        <i class="{{ settings.selected_icon.value }}"></i>
                    </span>
                <# } #>
                
                <span class="button-text">{{{ settings.button_text }}}</span>
                
                <# if (hasIcon && iconPosition === 'right') { #>
                    <span class="icon icon-right">
                        <i class="{{ settings.selected_icon.value }}"></i>
                    </span>
                <# } #>
            </a>
        </div>
        <?php
    }
} 