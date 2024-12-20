<?php

/**
 * Elementor Classes.
 *
 * @package Team Elementor Magic Kit
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Magic Kit for Elementor Extension
 *
 * Elementor widget for Team.
 *
 * @since 1.0.0
 */
class Team extends Widget_Base
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
        return 'em_kit_team';
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
        return esc_html__('Team', 'elementor-magic-kit');
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
        return 'eicon-handle';
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
        return ['emk-widgets'];
    }

    public function get_style_depends()
    {
		return ['emkit-team', 'emkit-style'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_button_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_button_controls()
    {
        $this->start_controls_section(
			'team_layout_content_section',
			[
				'label' => esc_html__( 'Layout', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_responsive_control(
			'team_text_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .team' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'team_image_content_section',
			[
				'label' => esc_html__( 'Image', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
    
        $this->add_control(
			'team_image',
			[
				'label' => esc_html__( 'Choose Image', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[
				'name' => 'thumbnail',
				'exclude' => [ 'custom' ],
				'default' => 'medium',
			]
		);

        $this->end_controls_section();

        $this->start_controls_section(
			'team_content_content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'team_title',
			[
				'label' => esc_html__( 'Name', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'John Michael', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'team_designation',
			[
				'label' => esc_html__( 'Designation', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Developer', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'team_description',
			[
				'label' => esc_html__( 'Description', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 5,
				'default' => esc_html__( 'LoyalCoder delivers innovative, robust, and reliable software development solutions worldwide.', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your description here', 'elementor-magic-kit' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'team_social_media_content_section',
			[
				'label' => esc_html__( 'Social Media', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'show_icon',
			[
				'label' => esc_html__( 'Social Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $repeater = new \Elementor\Repeater();
        $repeater->add_control(
			'team_social_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-circle',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'android',
						'apple',
						'behance',
						'bitbucket',
						'codepen',
						'delicious',
						'deviantart',
						'digg',
						'dribbble',
						'elementor',
						'facebook',
						'flickr',
						'foursquare',
						'free-code-camp',
						'github',
						'gitlab',
						'globe',
						'houzz',
						'instagram',
						'jsfiddle',
						'linkedin',
						'medium',
						'meetup',
						'mix',
						'mixcloud',
						'odnoklassniki',
						'pinterest',
						'product-hunt',
						'reddit',
						'shopping-cart',
						'skype',
						'slideshare',
						'snapchat',
						'soundcloud',
						'spotify',
						'stack-overflow',
						'steam',
						'telegram',
						'thumb-tack',
						'threads',
						'tripadvisor',
						'tumblr',
						'twitch',
						'twitter',
						'viber',
						'vimeo',
						'vk',
						'weibo',
						'weixin',
						'whatsapp',
						'wordpress',
						'xing',
						'x-twitter',
						'yelp',
						'youtube',
						'500px',
					],
					'fa-regular' => [
						'circle',
						'dot-circle',
						'square-full',
					],
				],
			]
		);
        $repeater->add_control(
			'icon_link',
			[
				'label' => esc_html__( 'Link', 'elementor-magic-kit' ),
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
        $this->add_control(
			'icon_control',
			[
				'label' => esc_html__( 'Icon List', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'social_icon' => [
							'value' => 'fab fa-facebook',
							'library' => 'fa-brands',
						],
					],
					[
						'social_icon' => [
							'value' => 'fab fa-twitter',
							'library' => 'fa-brands',
						],
					],
					[
						'social_icon' => [
							'value' => 'fab fa-youtube',
							'library' => 'fa-brands',
						],
					],
				],
			]
		);

        $this->end_controls_section();

        // Style section
 
        $this->start_controls_section(
			'team_image_style_section',
			[
				'label' => esc_html__( 'Image', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'image_width',
			[
				'label' => esc_html__( 'Width', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .team .team-image' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_max_width',
			[
				'label' => esc_html__( 'Max Width', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .team .team-image' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_height',
			[
				'label' => esc_html__( 'Height', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .team .team-image img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'team_object_fit',
			[
				'label'     => esc_html__( 'Object Fit', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options'   => [
					''        => esc_html__( 'Default', 'elementor-magic-kit' ),
					'fill'    => esc_html__( 'Fill', 'elementor-magic-kit' ),
					'cover'   => esc_html__( 'Cover', 'elementor-magic-kit' ),
					'contain' => esc_html__( 'Contain', 'elementor-magic-kit' ),
				],
				'default'   => '',
				'selectors' => [
					'{{WRAPPER}} .team .team-image img' => 'object-fit: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'team_border',
				'selector' => '{{WRAPPER}} .team .team-image img',
			]
		);
        $this->add_responsive_control(
			'team_image_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .team .team-image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        // normal-hover-start
		//normal
        $this->start_controls_tabs(
			'style_tabs'
		);

		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);

        $this->add_control(
			'opacity',
			[
				'label' => esc_html__( 'Opacity', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 1,
						'min' => 0.10,
						'step' => 0.01,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .team .team-image img' => 'opacity: {{SIZE}};',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'css_filters',
				'selector' => '{{WRAPPER}} .team .team-image img',
			]
		);
   
		$this->end_controls_tab();
		//hover
		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);

        $this->add_control(
			'hover_opacity',
			[
				'label' => esc_html__( 'Opacity', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 1,
						'min' => 0.10,
						'step' => 0.01,
					],
				],
				'selectors' => [
					'{{WRAPPER}}:hover .team .team-image img' => 'opacity: {{SIZE}};',
				],
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[
				'name' => 'css_filters_hover',
				'selector' => '{{WRAPPER}}:hover .team .team-image img',
			]
		);

        $this->add_control(
			'hover_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-magic-kit' ) . ' (s)',
				'type' => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .team .team-image img' => 'transition-duration: {{SIZE}}s',
				],
			]
		);

        $this->add_control(
			'hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HOVER_ANIMATION,
			]
		);
		
		$this->end_controls_tab();
// normal-hover-end

        $this->end_controls_section();

        $this->start_controls_section(
			'team_name_style_section',
			[
				'label' => esc_html__( 'Name', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]

		);
        $this->add_control(
			'team_name_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .team h2' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'team_name_content_typography',
				'selector' => '{{WRAPPER}} .team h2',
			]
		);
        $this->add_responsive_control(
			'team_name_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .team h2' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'team_designation_style_section',
			[
				'label' => esc_html__( 'Designation', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]

		);
        $this->add_control(
			'team_designation_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .team h6' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'team_designation_content_typography',
				'selector' => '{{WRAPPER}} .team h6',
			]
		);
        $this->add_responsive_control(
			'team_designation_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .team h6' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'team_description_style_section',
			[
				'label' => esc_html__( 'Description', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]

		);
        $this->add_control(
			'team_description_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .team p' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'team_description_content_typography',
				'selector' => '{{WRAPPER}} .team p',
			]
		);
        $this->add_responsive_control(
			'team_description_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .team p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
			'team_social_media_style_section',
			[
				'label' => esc_html__( 'Social Media', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]

		);
		$this->add_responsive_control(
			'team_social_icon_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .team .team-icon' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'team_social_icon_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .team-icon .social-icon a svg', '{{WRAPPER}} .team-icon .social-icon svg' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'team_social_icon_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .team-icon .social-icon svg',
			]
		);
        $this->add_responsive_control(
			'team_icon_size',
			[
				'label' => esc_html__( 'Size', 'elementor-magic-kit' ),
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
					'size' => 24,
				],
				'selectors' => [
					'{{WRAPPER}} .team .team-icon .social-icon' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'icon_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .team-icon .social-icon' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'icon_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .team-icon .social-icon svg' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'team_icon_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'icon_border',
				'selector' => '{{WRAPPER}} .team-icon .social-icon svg',
			]
		);
        $this->add_responsive_control(
			'icon_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .team-icon .social-icon svg' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings    = $this->get_settings_for_display();

        $team_icon_list = $settings['icon_control'];
        include __DIR__ . '/layouts/team.php';

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
