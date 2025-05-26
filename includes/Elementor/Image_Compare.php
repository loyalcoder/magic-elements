<?php

    /**
 * Elementor Classes.
 *
 * @package Image Compare Magic Elements
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
 * Elementor widget for Image Compare.
 *
 * @since 1.0.0
 */
class Image_Compare extends Widget_Base
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
        return 'em_kit_image_compare';
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
        return esc_html__('Image Compare', 'magic-elements');
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
        return 'eicon-image-before-after magicelements-editor-widgets-icon';
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
        return ['emkit-image-compare','jquery'];
    }
       public function get_style_depends()
    {
        return ['emk-image-compare'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_image_compare_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_image_compare_controls()
    {
        // Before Image
        $this->start_controls_section(
            'before_image_content_section',
            [
                'label' => esc_html__( 'Image Compare', 'magic-elements' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        //Start after before
        $this->start_controls_tabs(
            'style_tabs'
        );
        //before
        $this->start_controls_tab(
            'style_before_tab',
            [
                'label' => esc_html__( 'Before', 'magic-elements' ),
            ]
        );
        $this->add_control(
            'before_image',
            [
                'label' => esc_html__('Before Image', 'magic-elements'),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );
        $this->add_control(
            'before_image_lebel',
            [
                'label' => esc_html__( 'Before Lebel', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Before', 'magic-elements' ),
                'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
            ]
        );
        
        $this->end_controls_tab();
        //after
        $this->start_controls_tab(
            'style_after_tab',
            [
                'label' => esc_html__( 'After', 'magic-elements' ),
            ]
        );
        $this->add_control(
            'after_image',
            [
                'label' => esc_html__('After Image', 'magic-elements'),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );
        $this->add_control(
            'after_image_lebel',
            [
                'label' => esc_html__( 'After Lebel', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'After', 'magic-elements' ),
                'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
            ]
        );
        
        $this->end_controls_tab();
        
        $this->end_controls_tabs();
        //end after before
        $this->end_controls_section();
        // Style section
        $this->start_controls_section(
            'image_compare_style_section',
			[
				'label' => esc_html__( 'Before Label', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_control(
        'image_compare_before_label_color',
        [
            'label' => esc_html__( 'Text Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .before-label' => 'color: {{VALUE}}',
            ],
        ]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'image_compare_before_label_typography',
				'selector' => '{{WRAPPER}} .before-label',
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'image_compare_before_label_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .before-label',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'image_compare_before_label_box_shadow',
				'selector' => '{{WRAPPER}} .before-label',
			]
		);
        	$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'image_compare_before_label_border',
				'selector' => '{{WRAPPER}} .before-label',
			]
		);
        $this->add_control(
			'image_compare_before_label_divider',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        	$this->add_responsive_control(
			'image_compare_before_label_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .before-label' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_compare_before_label_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .before-label' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_compare_before_label_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .before-label' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //After label
        $this->start_controls_section(
            'image_compare_after_style_section',
			[
				'label' => esc_html__( 'After Label', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_control(
        'image_compare_after_label_color',
        [
            'label' => esc_html__( 'Text Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .after-label' => 'color: {{VALUE}}',
            ],
        ]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'image_compare_after_label_typography',
				'selector' => '{{WRAPPER}} .after-label',
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'image_compare_after_label_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .after-label',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'image_compare_after_label_box_shadow',
				'selector' => '{{WRAPPER}} .after-label',
			]
		);
        	$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'image_compare_after_label_border',
				'selector' => '{{WRAPPER}} .after-label',
			]
		);
        $this->add_control(
			'image_compare_after_label_divider',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        	$this->add_responsive_control(
			'image_compare_after_label_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .after-label' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_compare_after_label_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .after-label' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_compare_after_label_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .after-label' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //compare-drag
        $this->start_controls_section(
			'compare_drag_style_section',
			[
				'label' => esc_html__( 'Compare Drag', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'compare_drag_width',
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
				'selectors' => [
					'{{WRAPPER}} .compare-drag' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'compare_drag_hight',
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
				'selectors' => [
					'{{WRAPPER}} .compare-drag' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'compare_drag_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .compare-drag',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'compare_drag_box_shadow',
				'selector' => '{{WRAPPER}} .compare-drag',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'compare_drag_border',
				'selector' => '{{WRAPPER}} .compare-drag',
			]
		);
        $this->add_control(
			'compare_drag_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_responsive_control(
			'compare_drag_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .compare-drag' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'compare_drag_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .compare-drag' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings = $this->get_settings_for_display();
        include __DIR__ . '/layouts/Image-Compare/image-compare.php';


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
