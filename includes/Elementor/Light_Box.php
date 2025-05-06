<?php

    /**
 * Elementor Classes.
 *
 * @package Light Box Magic Elements
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
 * Elementor widget for Light Box.
 *
 * @since 1.0.0
 */
class Light_Box extends Widget_Base
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
        return 'em_kit_light_box';
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
        return esc_html__('Light Box', 'magic-elements');
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
        return 'eicon-lightbox magicelements-editor-widgets-icon';
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
        return ['emkit-light-box'];
    }
    public function get_style_depends()
    {
        return ['emk-light-box'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_light_box_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_light_box_controls()
    {
    // Content Tab
    $this->start_controls_section(
        'content_section',
        [
            'label' => esc_html__('Light Box', 'magic-elements'),
            'tab' => Controls_Manager::TAB_CONTENT,
        ]
    );

    $this->add_control(
        'lightbox_type',
        [
            'label' => esc_html__('Lightbox Content Type', 'magic-elements'),
            'type' => Controls_Manager::SELECT,
            'default' => 'image',
            'options' => [
                'image' => esc_html__('Image', 'magic-elements'),
                'text' => esc_html__('Text', 'magic-elements'),
                'video' => esc_html__('Video', 'magic-elements'),
            ],
        ]
    );

    $this->add_control(
        'image_content',
        [
            'label' => esc_html__('Image', 'magic-elements'),
            'type' => Controls_Manager::MEDIA,
            'default' => [
                'url' => \Elementor\Utils::get_placeholder_image_src(),
            ],
            'condition' => [
                'lightbox_type' => 'image',
            ],
        ]
    );
    $this->add_control(
        'text_content',
        [
            'label' => esc_html__('Text Content', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::TEXTAREA,
            'rows' => 5,
            'default' => esc_html__('This is your lightbox text content', 'magic-elements'),
            'condition' => [
                'lightbox_type' => 'text',
                ],
            ]
    );

    $this->add_control(
        'video_content',
        [
            'label' => esc_html__('Video URL', 'magic-elements'),
            'type' => Controls_Manager::TEXT,
            'placeholder' => esc_html__('Enter YouTube or Vimeo URL', 'magic-elements'),
            'condition' => [
                'lightbox_type' => 'video',
            ],
        ]
    );

    $this->add_control(
        'trigger_type',
        [
            'label' => esc_html__('Trigger Type', 'magic-elements'),
            'type' => Controls_Manager::SELECT,
            'default' => 'button',
            'options' => [
                'button' => esc_html__('Button', 'magic-elements'),
                'image' => esc_html__('Image', 'magic-elements'),
                'text' => esc_html__('Text Link', 'magic-elements'),
            ],
        ]
    );

    $this->add_control(
        'button_text',
        [
            'label' => esc_html__('Button Text', 'magic-elements'),
            'type' => Controls_Manager::TEXT,
            'default' => esc_html__('Open Lightbox', 'magic-elements'),
            'condition' => [
                'trigger_type' => 'button',
            ],
        ]
    );

    $this->add_control(
        'trigger_image',
        [
            'label' => esc_html__('Trigger Image', 'magic-elements'),
            'type' => Controls_Manager::MEDIA,
            'default' => [
                'url' => \Elementor\Utils::get_placeholder_image_src(),
            ],
            'condition' => [
                'trigger_type' => 'image',
            ],
        ]
    );

    $this->add_control(
        'trigger_text',
        [
            'label' => esc_html__('Trigger Text', 'magic-elements'),
            'type' => Controls_Manager::TEXT,
            'default' => esc_html__('Click to open', 'magic-elements'),
            'condition' => [
                'trigger_type' => 'text',
            ],
        ]
    );

    $this->end_controls_section();

        // Style section
    $this->start_controls_section(
        'light_box_image_style_section',
        [
            'label' => esc_html__( 'Image', 'magic-elements' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );
    $this->add_responsive_control(
        'light_box_image_width',
        [
            'label' => esc_html__( 'Width', 'textdomain' ),
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
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner img' => 'width: {{SIZE}}{{UNIT}};',
            ],
        ]
    );
    $this->add_responsive_control(
        'light_box_image_max_width',
        [
            'label' => esc_html__( 'Max Width', 'textdomain' ),
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
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner img' => 'max-width: {{SIZE}}{{UNIT}};',
            ],
        ]
    );
    $this->add_responsive_control(
        'light_box_image_height',
        [
            'label' => esc_html__( 'Height', 'textdomain' ),
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
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner img' => 'height: {{SIZE}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'light_box_image_divider',
        [
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );
    $this->add_responsive_control(
        'light_box_image_border_radius',
        [
            'label' => esc_html__( 'Border Radius', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->end_controls_section();
    //Title
    $this->start_controls_section(
        'light_box_content_style_section',
        [
            'label' => esc_html__( 'Content', 'textdomain' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'light_box_content_color',
        [
            'label' => esc_html__( 'Text Color', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner .lightbox-text-content' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name' => 'light_box_content_background',
            'types' => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .lightbox-inner .lightbox-text-content',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'light_box_content_typography',
            'selector' => '{{WRAPPER}} .lightbox-inner .lightbox-text-content',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Text_Shadow::get_type(),
        [
            'name' => 'light_box_content_text_shadow',
            'selector' => '{{WRAPPER}} .lightbox-inner .lightbox-text-content',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Text_Stroke::get_type(),
        [
            'name' => 'light_box_content_text_stroke',
            'selector' => '{{WRAPPER}} .lightbox-inner .lightbox-text-content',
        ]
    );
    $this->add_control(
        'lightbox_content_divider',
        [
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );
    $this->add_responsive_control(
        'light_box_content_border_radius',
        [
            'label' => esc_html__( 'Border Radius', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner .lightbox-text-content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_responsive_control(
        'light_box_content_padding',
        [
            'label' => esc_html__( 'Padding', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner .lightbox-text-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->end_controls_section();
    //Close Icon
    $this->start_controls_section(
        'lightbox_close_icon_style_section',
        [
            'label' => esc_html__( 'Close Button', 'textdomain' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );
    $this->add_control(
        'lightbox_close_icon_color',
        [
            'label' => esc_html__( 'Icon Color', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .lightbox-inner .lightbox-close' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->end_controls_section();
    //Button
    $this->start_controls_section(
        'lightbox_button_style_section',
        [
            'label' => esc_html__( 'Button', 'textdomain' ),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'lightbox_button_typography',
            'selector' => '{{WRAPPER}} .lightbox-trigger',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Text_Shadow::get_type(),
        [
            'name' => 'lightbox_button_text_shadow',
            'selector' => '{{WRAPPER}} .lightbox-trigger',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Text_Stroke::get_type(),
        [
            'name' => 'lightbox_button_text_stroke',
            'selector' => '{{WRAPPER}} .lightbox-trigger',
        ]
    );
    //start normal hover
    $this->start_controls_tabs(
        'lightbox_button_style_tabs'
    );
    //normal
    $this->start_controls_tab(
        'lightbox_button_normal_tab',
        [
            'label' => esc_html__( 'Normal', 'textdomain' ),
        ]
    );
    $this->add_control(
        'lightbox_button_normal_text_color',
        [
            'label' => esc_html__( 'Text Color', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .lightbox-trigger' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name' => 'lightbox_button_normal_background',
            'types' => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .lightbox-trigger',
        ]
    );
    
    $this->end_controls_tab();
    //hover
    $this->start_controls_tab(
        'lightbox_button_hover_tab',
        [
            'label' => esc_html__( 'Hover', 'textdomain' ),
        ]
    );
    $this->add_control(
        'lightbox_button_hover_text_color',
        [
            'label' => esc_html__( 'Text Color', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .lightbox-trigger:hover' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name' => 'lightbox_button_hover_background',
            'types' => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .lightbox-trigger:hover',
        ]
    );
    $this->add_control(
        'lightbox_button_hover_transition',
        [
            'label' => esc_html__( 'Transition Duration', 'magic-elements' ) . ' (s)',
            'type'  => \Elementor\Controls_Manager::SLIDER,
            'range' => [
                'px' => [
                    'min'  => 0,
                    'max'  => 3,
                    'step' => 0.1,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-trigger:hover' => 'transition-duration: {{SIZE}}s',
            ],
        ]
    );
    
    $this->end_controls_tab();
    
    $this->end_controls_tabs();
    //end normal hover
    $this->add_control(
        'lightbox_button_divider',
        [
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );
    $this->add_responsive_control(
        'lightbox_button_border_radius',
        [
            'label' => esc_html__( 'Border Radius', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-trigger' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_responsive_control(
        'lightbox_button_padding',
        [
            'label' => esc_html__( 'Padding', 'textdomain' ),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
            'selectors' => [
                '{{WRAPPER}} .lightbox-trigger' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();



    }

        /**
     * Render Copyright output on the frontend.
     *s
     * Written in PHP and used to generate the final HTML.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $unique_id = 'lightbox-' . $this->get_id();


        include __DIR__ . '/layouts/Light-Box/light-box.php';




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
