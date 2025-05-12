<?php

    /**
 * Elementor Classes.
 *
 * @package Review Magic Elements
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
 * Elementor widget for Review.
 *
 * @since 1.0.0
 */
class Review extends Widget_Base
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
        return 'em_kit_review';
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
        return esc_html__('Review', 'magic-elements');
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
        return 'eicon-review magicelements-editor-widgets-icon';
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
        return ['emkit-review'];
    }
	    public function get_style_depends()
    {
        return ['emk-review'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_review_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_review_controls()
    {
        $this->start_controls_section(
            'review_content_section',
            [
                'label' => esc_html__('Rating Settings', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
            'rating',
            [
                'label' => esc_html__('Rating', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 0,
                'max' => 5,
                'step' => 0.5,
                'default' => 3.5,
            ]
        );
		$this->add_responsive_control(
            'star_size',
            [
                'label' => esc_html__('Star Size', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 15,
                ],
                'selectors' => [
                    '{{WRAPPER}} .review-wapper .review svg' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_control(
            'full_star_icon',
            [
                'label' => esc_html__('Full Star Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-star',
                    'library' => 'solid',
                ],
            ]
        );
        $this->add_control(
            'half_star_icon',
            [
                'label' => esc_html__('Half Star Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-star-half-alt',
                    'library' => 'solid',
                ],
            ]
        );
        $this->add_control(
            'empty_star_icon',
            [
                'label' => esc_html__('Empty Star Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'far fa-star',
                    'library' => 'regular',
                ],
            ]
        );
        $this->end_controls_section();
		
        //Reviewer
        $this->start_controls_section(
            'reviewer_content_section',
            [
                'label' => esc_html__('Reviewer', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'reviewer_image',
			[
				'label' => esc_html__( 'Choose Image', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
                'media_types' => ['image' , 'svg'],
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[
				'name' => 'thumbnail', 
				'include' => [],
				'default' => 'large',
			]
		);
        $this->add_control(
			'reviewer_description',
			[
				'label' => esc_html__( 'Description', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 5,
				'default' => esc_html__( 'Absolutely fantastic! Exceeded my expectations in every way', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your description here', 'magic-elements' ),
			]
		);
        $this->add_control(
			'reviewer_name',
			[
				'label' => esc_html__( 'Name', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Jos Steven', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
        $this->add_control(
			'reviewer_title',
			[
				'label' => esc_html__( 'Position', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'HR', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
            'review_box_style_section',
             [
                 'label' => esc_html__( 'Review Box', 'magic-elements' ),
                 'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
             ]
         );
         //start normal hover
         $this->start_controls_tabs(
            'style_tabs'
        );
        //normal
        $this->start_controls_tab(
            'review_box_style_normal_tab',
            [
                'label' => esc_html__( 'Normal', 'magic-elements' ),
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'review_box_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .review-wapper',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'review_box_border',
				'selector' => '{{WRAPPER}} .review-wapper',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'review_box_shadow',
				'selector' => '{{WRAPPER}} .review-wapper',
			]
		);
        $this->end_controls_tab();
        //Hover
        $this->start_controls_tab(
            'review_box_style_hover_tab',
            [
                'label' => esc_html__( 'Hover', 'magic-elements' ),
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'review_box_hover_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .review-wapper:hover',
			]
		);
        $this->add_control(
			'review_box_hover_transition',
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
					'{{WRAPPER}} .review-wapper:hover' => 'transition-duration: {{SIZE}}s',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'review_box_hover_border',
				'selector' => '{{WRAPPER}} .review-wapper:hover',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'review_box_hover_box_shadow',
				'selector' => '{{WRAPPER}} .review-wapper:hover',
			]
		);

        $this->end_controls_tab();
        
        $this->end_controls_tabs();
        //end normal hover
        $this->add_control(
			'review_box_divider',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_responsive_control(
			'review_box_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .review-wapper' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'review_box_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'default' => [
					'top' => 30,
					'right' => 20,
					'bottom' => 30,
					'left' => 20,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .review-wapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        //rating
        $this->start_controls_section(
           'review_style_section',
			[
				'label' => esc_html__( 'Rating', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'review_wapper_align',
			[
				'label' => esc_html__( 'Alignment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .review-wapper' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'rating_icon_color',
			[
				'label' => esc_html__( 'Icon Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .review-wapper .review svg' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'rating_icon_margin',
			[
				'label' => esc_html__( 'Margin Top', 'magic-elements' ),
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
					'{{WRAPPER}} .review-wapper .review svg' => 'margin-top: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Image
        $this->start_controls_section(
			'reviewer_image_style_section',
			[
				'label' => esc_html__( 'Image', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'reviewer_image_width',
			[
				'label' => esc_html__( 'Width', 'magic-elements' ),
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
					'size' => 150,
				],
				'selectors' => [
					'{{WRAPPER}} .reviewer img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'reviewer_image_height',
			[
				'label' => esc_html__( 'Height', 'magic-elements' ),
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
					'size' => 100,
				],
				'selectors' => [
					'{{WRAPPER}} .reviewer img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'reviewer_image_box_shadow',
				'selector' => '{{WRAPPER}} .reviewer img',
			]
		);
        $this->add_control(
			'reviewer_image_divider',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'reviewer_image_border',
				'selector' => '{{WRAPPER}} .reviewer img',
			]
		);
        $this->add_responsive_control(
			'reviewer_image_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .reviewer img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->end_controls_section();
        //description
        $this->start_controls_section(
			'reviewer_description_style_section',
			[
				'label' => esc_html__( 'Description', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'reviewer_description_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .reviewer p' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'reviewer_description_typography',
				'selector' => '{{WRAPPER}} .reviewer p',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'reviewer_description_shadow',
				'selector' => '{{WRAPPER}} .reviewer p',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'reviewer_description_stroke',
				'selector' => '{{WRAPPER}} .reviewer p',
			]
		);
        $this->add_responsive_control(
			'reviewer_description_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
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
					'{{WRAPPER}} .reviewer p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();
        //Name
        $this->start_controls_section(
			'reviewer_name_style_section',
			[
				'label' => esc_html__( 'Name', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'reviewer_name_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .reviewer h5' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'reviewer_name_typography',
				'selector' => '{{WRAPPER}} .reviewer h5',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'reviewer_name_shadow',
				'selector' => '{{WRAPPER}} .reviewer h5',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'reviewer_name_stroke',
				'selector' => '{{WRAPPER}} .reviewer h5',
			]
		);
        $this->add_responsive_control(
			'reviewer_name_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 5,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .reviewer h5' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();
        //Position
        $this->start_controls_section(
			'reviewer_position_style_section',
			[
				'label' => esc_html__( 'Position', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'reviewer_position_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .reviewer h6' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'reviewer_position_typography',
				'selector' => '{{WRAPPER}} .reviewer h6',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'reviewer_position_shadow',
				'selector' => '{{WRAPPER}} .reviewer h6',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'reviewer_position_stroke',
				'selector' => '{{WRAPPER}} .reviewer h6',
			]
		);
        $this->add_responsive_control(
			'reviewer_position_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .reviewer h6' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
         $rating = (float) $settings['rating'];
        
        // Calculate stars
        $full_stars = floor($rating);
        $has_half_star = ($rating - $full_stars) >= 0.5;
        $empty_stars = 5 - $full_stars - ($has_half_star ? 1 : 0);
        
        // Get icons
        $full_star_icon = $settings['full_star_icon']['value'];
        $half_star_icon = $settings['half_star_icon']['value'];
        $empty_star_icon = $settings['empty_star_icon']['value'];

        include __DIR__ . '/layouts/Review/review.php';
        
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
