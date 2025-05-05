<?php

    /**
 * Elementor Classes.
 *
 * @package Team Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * Magic Elements for Elementor Extension
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
        return 'magicelements_team';
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
        return esc_html__('Team', 'magic-elements');
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
        return 'eicon-person magicelements-editor-widgets-icon';
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
        return ['emkit-team'];
    }
        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_team_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_team_controls()
    {
        $this->start_controls_section(
			'image_content_section',
			[
				'label' => esc_html__( 'Image', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
            'team_image',
            [
                'label'       => esc_html__( 'Choose Image', 'magic-elements' ),
                'type'        => \Elementor\Controls_Manager::MEDIA,
                'media_types' => [ 'image', 'svg' ],
                'default'     => [
                    'id'  => '',
                    'url' => plugin_dir_url( __FILE__ ) . '../../assets/img/team-avater.webp',
                ],
            ]
        );
        
        $this->end_controls_section();
        $this->start_controls_section(
			'card_content_section',
			[
				'label' => esc_html__( 'Content', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'team_title',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Default title', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
        $this->add_control(
			'team_description',
			[
				'label' => esc_html__( 'Description', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'Default description', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your description here', 'magic-elements' ),
			]
		);
        $this->end_controls_section();


        $this->start_controls_section(
            'icon_section',
            [
                'label' => esc_html__( 'Icon List with Links', 'magic-elements' ),
            ]
        );
        $repeater = new \Elementor\Repeater();
        
        // Icon control
        $repeater->add_control(
            'icon',
            [
                'label' => esc_html__( 'Icon', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fab fa-linkedin-in',
                    'library' => 'fa-brands',
                ],
                'recommended' => [
                    'fa-brands' => [
                        'facebook-f',
                        'twitter',
                        'linkedin-in',
                    ],
                    'fa-solid' => [
                        'circle',
                        'square-full',
                    ],
                ],
            ]
        );
        
        // Link control
        $repeater->add_control(
            'link',
            [
                'label' => esc_html__( 'Link', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'magic-elements' ),
                'show_external' => true,
                'default' => [
                    'url' => '#',
                    'is_external' => true,
                    'nofollow' => true,
                ],
            ]
        );
        
        // Start style controls for each icon
        $repeater->add_control(
            'icon_style_heading',
            [
                'label' => esc_html__( 'Icon Style', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );
        
        // Icon padding
        $repeater->add_responsive_control(
            'icon_padding',
            [
                'label' => esc_html__( 'Padding', 'magic-elements' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        // Icon margin
        $repeater->add_responsive_control(
            'icon_margin',
            [
                'label' => esc_html__( 'Margin', 'magic-elements' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        // Icon color
        $repeater->add_control(
            'icon_color',
            [
                'label' => esc_html__( 'Color', 'magic-elements' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}' => 'color: {{VALUE}}',
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}} svg' => 'fill: {{VALUE}}',
                ],
            ]
        );
        
        // Icon background color
        $repeater->add_control(
            'icon_bg_color',
            [
                'label' => esc_html__( 'Background Color', 'magic-elements' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}' => 'background-color: {{VALUE}}',
                ],
            ]
        );
        
        // Icon border
        $repeater->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'icon_border',
                'selector' => '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}',
            ]
        );
        
        // Icon border radius
        $repeater->add_control(
            'icon_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'magic-elements' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        // Hover tab
        $repeater->add_control(
            'hover_tab',
            [
                'label' => esc_html__( 'Hover', 'magic-elements' ),
                'type' => Controls_Manager::TAB,
            ]
        );
        
        // Hover color
        $repeater->add_control(
            'icon_hover_color',
            [
                'label' => esc_html__( 'Hover Color', 'magic-elements' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}:hover' => 'color: {{VALUE}}',
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}:hover svg' => 'fill: {{VALUE}}',
                ],
            ]
        );
        
        // Hover background color
        $repeater->add_control(
            'icon_hover_bg_color',
            [
                'label' => esc_html__( 'Hover Background Color', 'magic-elements' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}:hover' => 'background-color: {{VALUE}}',
                ],
            ]
        );
        
        // Hover border color
        $repeater->add_control(
            'icon_hover_border_color',
            [
                'label' => esc_html__( 'Hover Border Color', 'magic-elements' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .icon-part a{{CURRENT_ITEM}}:hover' => 'border-color: {{VALUE}}',
                ],
            ]
        );
        
        // Hover animation
        $repeater->add_control(
            'icon_hover_animation',
            [
                'label' => esc_html__( 'Hover Animation', 'magic-elements' ),
                'type' => Controls_Manager::HOVER_ANIMATION,
            ]
        );
        
        $this->add_control(
            'icon_list',
            [
                'label' => esc_html__( 'Icons with Links', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'icon' => [
                            'value' => 'fab fa-linkedin-in',
                            'library' => 'fa-brands',
                        ],
                        'link' => [
                            'url' => 'https://linkedin.com',
                        ],
                    ],
                    [
                        'icon' => [
                            'value' => 'fab fa-facebook-f',
                            'library' => 'fa-brands',
                        ],
                        'link' => [
                            'url' => 'https://facebook.com',
                        ],
                    ],
                    [
                        'icon' => [
                            'value' => 'fab fa-twitter',
                            'library' => 'fa-brands',
                        ],
                        'link' => [
                            'url' => 'https://twitter.com',
                        ],
                    ],
                ],
                'title_field' => '<i class="{{ icon.value }}"></i>',
            ]
        );
        $this->end_controls_section();
        
        $this->start_controls_section(
            'card_style_section',
            [
                'label' => esc_html__( 'Card Design', 'magic-elements' ),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
            'card_bg_color',
            [
                'label' => esc_html__( 'Background Color', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#f4f4f4',
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .team-card' => 'background-color: {{VALUE}}',
                ],
            ]
        );
        $this->add_control(
			'card_width',
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
					'unit' => '%',
					'size' => 35,
				],
				'selectors' => [
					'{{WRAPPER}} .me-team-wrapper .team-card' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
            'card_margin',
            [
                'label' => esc_html__( 'Margin', 'magic-elements' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                'default' => [
                    'top' => 0,
                    'right' => 'auto',
                    'bottom' => 0,
                    'left' => 'auto',
                    'unit' => 'px',
                    'isLinked' => true,
                ],
                'selectors' => [
                    '{{WRAPPER}} .me-team-wrapper .team-card' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}} {{BOTTOM}}{{UNIT}} {{LEFT}};',
                ],
            ]
        );
        $this->add_control(
			'card_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 30,
					'right' => 30,
					'bottom' => 30,
					'left' => 30,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .me-team-wrapper .team-card' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        $this->start_controls_section(
            'card_image_style_section',
            [
                'label' => esc_html__('Image', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        
        $this->add_responsive_control(
            'image_width',
            [
                'label' => __('Width', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_responsive_control(
            'image_height',
            [
                'label' => __('Height', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_responsive_control(
            'image_object_fit',
            [
                'label' => __('Object Fit', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    '' => __('Default', 'magic-elements'),
                    'fill' => __('Fill', 'magic-elements'),
                    'cover' => __('Cover', 'magic-elements'),
                    'contain' => __('Contain', 'magic-elements'),
                ],
                'default' => 'cover',
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'object-fit: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'image_border_radius',
            [
                'label' => __('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'image_box_shadow',
                'selector' => '{{WRAPPER}} .img-part img',
            ]
        );
        
        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'image_border',
                'selector' => '{{WRAPPER}} .img-part img',
            ]
        );
        
        $this->add_responsive_control(
            'image_padding',
            [
                'label' => __('Padding', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_responsive_control(
            'image_margin',
            [
                'label' => __('Margin', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .img-part img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->end_controls_section();

    $this->start_controls_section(
        'card_content_style_section',
        [
            'label' => esc_html__( 'content', 'magic-elements' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );
    $this->add_control(
        'title_options',
        [
            'label' => esc_html__( 'Title', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'content_title_typography',
            'selector' => '{{WRAPPER}} .content-part .team-title',
        ]
    );
    $this->add_control(
        'text_align',
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
                '{{WRAPPER}} .content-part .team-title' => 'text-align: {{VALUE}};',
            ],
        ]
    );
    $this->add_control(
        'title_color',
        [
            'label' => esc_html__( 'Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .content-part .team-title' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'title_bg_color',
        [
            'label' => esc_html__( 'Background Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .content-part .team-title' => 'background-color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'title_margin',
        [
            'label' => esc_html__( 'Margin', 'magic-elements' ),
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
                '{{WRAPPER}} .content-part .team-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'title_padding',
        [
            'label' => esc_html__( 'Padding', 'magic-elements' ),
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
                '{{WRAPPER}} .content-part .team-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'content_options',
        [
            'label' => esc_html__( 'Content', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'content_typography',
            'selector' => '{{WRAPPER}} .content-part p',
        ]
    );
    $this->add_control(
        'text+content_align',
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
                '{{WRAPPER}} .content-part p' => 'text-align: {{VALUE}};',
            ],
        ]
    );
    $this->add_control(
        'content_color',
        [
            'label' => esc_html__( 'Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .content-part p' => 'color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'content_bg_color',
        [
            'label' => esc_html__( 'Background Color', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .content-part p' => 'background-color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'content_margin',
        [
            'label' => esc_html__( 'Margin', 'magic-elements' ),
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
                '{{WRAPPER}} .content-part p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'content_padding',
        [
            'label' => esc_html__( 'Padding', 'magic-elements' ),
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
                '{{WRAPPER}} .content-part p' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
		
        include __DIR__ . '/layouts/team/team.php';
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
