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
			'team_style',
			[
				'label' => esc_html__( 'Card Style', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
            'card_layout_style',
            [
                'label'   => esc_html__('Style', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'style_one',
                'options' => [
                    'style_one' => esc_html__('Style One', 'magic-elements'),
                    'style_two' => esc_html__('Style Two', 'magic-elements'),
                ],
            ]
        );
        
        $this->end_controls_section();
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
    'section_social_icons',
    [
        'label' => esc_html__('Social Icons', 'magic-elements'),
        'tab' => Controls_Manager::TAB_CONTENT,
    ]
);

$repeater = new \Elementor\Repeater();

$repeater->add_control(
    'social_icon',
    [
        'label' => esc_html__('Icon', 'magic-elements'),
        'type' => Controls_Manager::ICONS,
        'default' => [
            'value' => 'fab fa-wordpress',
            'library' => 'fa-brands',
        ],
        'recommended' => [
            'fa-brands' => [
                'facebook',
                'twitter',
                'linkedin',
                'instagram',
                'youtube',
                'pinterest',
            ],
        ],
    ]
);

$repeater->add_control(
    'social_link',
    [
        'label' => esc_html__('Link', 'magic-elements'),
        'type' => Controls_Manager::URL,
        'placeholder' => esc_html__('https://your-link.com', 'magic-elements'),
        'show_external' => true,
        'default' => [
            'url' => '',
            'is_external' => true,
            'nofollow' => true,
        ],
    ]
);

// Start Icon Style Tabs
$repeater->start_controls_tabs(
    'icon_style_tabs'
);

// Normal Tab
$repeater->start_controls_tab(
    'icon_style_normal_tab',
    [
        'label' => esc_html__('Normal', 'magic-elements'),
    ]
);

$repeater->add_control(
    'icon_color',
    [
        'label' => esc_html__('Color', 'magic-elements'),
        'type' => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}} svg path' => 'fill: {{VALUE}}',
        ],
    ]
);

$repeater->add_control(
    'icon_bg_color',
    [
        'label' => esc_html__('Background Color', 'magic-elements'),
        'type' => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}' => 'background-color: {{VALUE}}',
        ],
    ]
);

// Border Controls
$repeater->add_group_control(
    \Elementor\Group_Control_Border::get_type(),
    [
        'name' => 'icon_border',
        'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}',
    ]
);

// Continue with other controls
$repeater->add_control(
    'icon_size',
    [
        'label' => esc_html__('Size', 'magic-elements'),
        'type' => Controls_Manager::SLIDER,
        'size_units' => ['px', 'em'],
        'range' => [
            'px' => [
                'min' => 6,
                'max' => 200,
            ],
            'em' => [
                'min' => 0.5,
                'max' => 20,
            ],
        ],
        'default' => [
            'unit' => 'px',
            'size' => 25,
        ],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}} svg' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
        ],
    ]
);

$repeater->add_control(
    'icon_body_width',
    [
        'label' => esc_html__('Width', 'magic-elements'),
        'type' => Controls_Manager::SLIDER,
        'size_units' => ['px', 'em'],
        'range' => [
            'px' => [
                'min' => 6,
                'max' => 200,
            ],
            'em' => [
                'min' => 0.5,
                'max' => 20,
            ],
        ],
        'default' => [
            'unit' => 'px',
            'size' => 50,
        ],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}' => 'width: {{SIZE}}{{UNIT}};',
        ],
    ]
);

$repeater->add_control(
    'icon_body_height',
    [
        'label' => esc_html__('Height', 'magic-elements'),
        'type' => Controls_Manager::SLIDER,
        'size_units' => ['px', 'em'],
        'range' => [
            'px' => [
                'min' => 6,
                'max' => 200,
            ],
            'em' => [
                'min' => 0.5,
                'max' => 20,
            ],
        ],
        'default' => [
            'unit' => 'px',
            'size' => 50,
        ],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}' => 'height: {{SIZE}}{{UNIT}};',
        ],
    ]
);
$repeater->add_group_control(
    \Elementor\Group_Control_Box_Shadow::get_type(),
    [
        'name' => 'box_shadow_normal',
        'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}',
    ]
);
$repeater->add_control(
    'icon_border_radius',
    [
        'label' => esc_html__('Border Radius', 'magic-elements'),
        'type' => Controls_Manager::DIMENSIONS,
        'size_units' => ['px', '%'],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        ],
    ]
);

$repeater->end_controls_tab();

// Hover Tab
$repeater->start_controls_tab(
    'icon_style_hover_tab',
    [
        'label' => esc_html__('Hover', 'magic-elements'),
    ]
);

$repeater->add_control(
    'icon_hover_color',
    [
        'label' => esc_html__('Color', 'magic-elements'),
        'type' => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}:hover svg path' => 'fill: {{VALUE}}',
        ],
    ]
);

$repeater->add_control(
    'icon_hover_bg_color',
    [
        'label' => esc_html__('Background Color', 'magic-elements'),
        'type' => Controls_Manager::COLOR,
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}:hover' => 'background-color: {{VALUE}}',
        ],
    ]
);
// Add this after the hover animation control in your repeater
$repeater->add_control(
    'hover_duration',
    [
        'label' => esc_html__('Hover Duration', 'magic-elements'),
        'type' => Controls_Manager::SLIDER,
        'size_units' => ['ms'],
        'range' => [
            'ms' => [
                'min' => 0,
                'max' => 2000,
                'step' => 50,
            ],
        ],
        'default' => [
            'unit' => 'ms',
            'size' => 300,
        ],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}' => 'transition: all {{SIZE}}{{UNIT}} ease;',
            '{{WRAPPER}} {{CURRENT_ITEM}} svg path' => 'transition: fill {{SIZE}}{{UNIT}} ease;',
        ],
    ]
);
$repeater->add_control(
    'icon_hover_animation',
    [
        'label' => esc_html__('Hover Animation', 'magic-elements'),
        'type' => Controls_Manager::HOVER_ANIMATION,
    ]
);

// Border Controls
$repeater->add_group_control(
    \Elementor\Group_Control_Border::get_type(),
    [
        'name' => 'icon_border_hover',
        'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}:hover',
        'separator' => 'before',
    ]
);
$repeater->add_group_control(
    \Elementor\Group_Control_Box_Shadow::get_type(),
    [
        'name' => 'box_shadow_hover',
        'selector' => '{{WRAPPER}} {{CURRENT_ITEM}}:hover',
    ]
);
$repeater->add_control(
    'icon_border_radius',
    [
        'label' => esc_html__('Border Radius', 'magic-elements'),
        'type' => Controls_Manager::DIMENSIONS,
        'size_units' => ['px', '%'],
        'selectors' => [
            '{{WRAPPER}} {{CURRENT_ITEM}}:hover' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
        ],
    ]
);
$repeater->end_controls_tab();

$repeater->end_controls_tabs();

$this->add_control(
    'social_icon_list',
    [
        'label' => esc_html__('Social Icons', 'magic-elements'),
        'type' => Controls_Manager::REPEATER,
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
                    'value' => 'fab fa-linkedin',
                    'library' => 'fa-brands',
                ],
            ],
        ],
        'title_field' => '<# var migrated = "undefined" !== typeof __fa4_migrated, social = ( "undefined" === typeof social ) ? false : social; #>{{{ elementor.helpers.getSocialNetworkNameFromIcon( social_icon, social, true, migrated, true ) }}}',
    ]
);

// ... [rest of your existing controls remain the same] ...
         $this->add_control(
			'bt_direction',
			[
				'label' => esc_html__( 'Direction', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Row', 'magic-elements' ),
						'icon' => 'eicon-arrow-right',
					],
					'column' => [
						'title' => esc_html__( 'Column', 'magic-elements' ),
						'icon' => 'eicon-arrow-down',
					],
				],
				'default' => 'row',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .magic-team-social-icons' => 'flex-direction: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'button_justify',
			[
				'label' => esc_html__( 'Justify', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-justify-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-justify-center-h',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-justify-end-h',
					],
					'space-between' => [
						'title' => esc_html__( 'Space Between', 'magic-elements' ),
						'icon' => 'eicon-justify-space-between-h',
					],
					'space-around' => [
						'title' => esc_html__( 'Space Around', 'magic-elements' ),
						'icon' => 'eicon-justify-space-around-h',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .magic-team-social-icons' => 'justify-content: {{VALUE}};',
				],
                'condition' => [
                    'bt_direction' => 'row',
                    'card_layout_style' => 'style_one',
                ],
			]
		);

		$this->add_control(
			'button_alinment',
			[
				'label' => esc_html__( 'Alinment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-justify-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-justify-center-h',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-justify-end-h',
					],
				],
				'default' => 'flex-start',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .magic-team-social-icons' => 'align-items: {{VALUE}};',
				],
                'condition' => [
                    'bt_direction' => 'column',
                    'card_layout_style' => 'style_one',
                ],
			]
		);
        // style two =========
		$this->add_control(
			'button_justify_two',
			[
				'label' => esc_html__( 'Justify', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-justify-start-h',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-justify-center-h',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-justify-end-h',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .style-two-img-part' => 'justify-content: {{VALUE}};',
				],
                'condition' => [
                    // 'bt_direction' => 'row',
                    'card_layout_style' => 'style_two',
                ],
			]
		);
        $this->add_control(
			'button_alinment_two',
			[
				'label' => esc_html__( 'Alinment', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Start', 'magic-elements' ),
						'icon' => 'eicon-align-start-v',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon' => 'eicon-align-center-v',
					],
					'flex-end' => [
						'title' => esc_html__( 'End', 'magic-elements' ),
						'icon' => 'eicon-align-end-v',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .style-two-img-part' => 'align-items: {{VALUE}};',
				],
                'condition' => [
                    // 'bt_direction' => 'row',
                    'card_layout_style' => 'style_two',
                ],
			]
		);

        $this->add_control(
			'icon_gap',
			[
				'label' => esc_html__( 'Gap', 'magic-elements' ),
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
				'default' => [
					'unit' => 'px',
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-team-social-icons' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

        $this->add_responsive_control(
            'icon_margin',
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
                    '{{WRAPPER}} .magic-team-social-icons' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}} {{BOTTOM}}{{UNIT}} {{LEFT}};',
                ],
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
            'card_layout_style',
            [
                'label'   => esc_html__('Style', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'style_one',
                'options' => [
                    'style_one' => esc_html__('Style One', 'magic-elements'),
                    'style_two' => esc_html__('Style Two', 'magic-elements'),
                ],
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
        $this->add_responsive_control(
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
					'unit' => 'px',
					'size' => 250,
				],
				'selectors' => [
					'{{WRAPPER}} .me-team-wrapper .team-card' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
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
        $this->add_responsive_control(
			'card_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 10,
					'right' => 10,
					'bottom' => 10,
					'left' => 10,
					'unit' => 'px',
					'isLinked' => true,
				],
				'selectors' => [
					'{{WRAPPER}} .me-team-wrapper .team-card' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'card_border_radius',
			[
				'label' => esc_html__( 'Radius', 'magic-elements' ),
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
					'{{WRAPPER}} .me-team-wrapper .team-card' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'team_card_box_shadow',
				'selector' => '{{WRAPPER}} .me-team-wrapper .team-card',
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
        
        $this->add_responsive_control(
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
    $this->add_responsive_control(
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
    $this->add_responsive_control(
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
        'text_content_align',
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
    $this->add_responsive_control(
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
    $this->add_responsive_control(
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


    $this->start_controls_section(
        'social_icon_style',
        [
            'label' => esc_html__( 'Social Icons', 'magic-elements' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );


    $this->start_controls_tabs(
			'icons_style_tabs'
		);

    $this->start_controls_tab(
        'icon_style_normal_tab',
        [
            'label' => esc_html__( 'Normal', 'magic-elements' ),
        ]
    );

    $this->add_control(
        'icons_container_bg',
        [
            'label' => esc_html__( 'Background', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .icon-part' => 'background-color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'icos_opacity',
        [
            'label' => esc_html__( 'Icons Opacity', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'range' => [
                '' => [
                    'min' => 0,
                    'max' => 1,
                    'step' => 0.01,
                ],
            ],
            'default' => [
                'size' => 1,
            ],
            'selectors' => [
                '{{WRAPPER}} .icon-part' => 'opacity: {{SIZE}};',
            ],
        ]
    );


    $this->add_control(
        'icons_container_margin',
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
                '{{WRAPPER}} .icon-part' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'icons_container_padding',
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
                '{{WRAPPER}} .icon-part' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Border::get_type(),
        [
            'name' => 'social_container_border',
            'selector' => '{{WRAPPER}} .icon-part',
        ]
    );
    $this->add_control(
        'icons_container_radius',
        [
            'label' => esc_html__( 'Radius', 'magic-elements' ),
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
                '{{WRAPPER}} .icon-part' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name' => 'social_icons_container_box_shadow',
            'selector' => '{{WRAPPER}} .icon-part',
        ]
    );

    $this->end_controls_tab();

    $this->start_controls_tab(
        'icon_style_hover_tab',
        [
            'label' => esc_html__( 'Hover', 'magic-elements' ),
        ]
    );
    $this->add_control(
        'icos_opacity_hover',
        [
            'label' => esc_html__( 'Icons Opacity', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'range' => [
                '' => [
                    'min' => 0,
                    'max' => 1,
                    'step' => 0.01,
                ],
            ],
            'default' => [
                'size' => 1,
            ],
            'selectors' => [
                '{{WRAPPER}} .team-card:hover .icon-part' => 'opacity: {{SIZE}};',
            ],
        ]
    );
    $this->add_control(
        'icons_container_margin_hover',
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
                '{{WRAPPER}} .team-card:hover .icon-part' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );
    $this->add_control(
        'img_overlay',
        [
            'label' => esc_html__( 'Img Overlay', 'magic-elements' ),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .team-card:hover .img-overlay' => 'background-color: {{VALUE}}',
            ],
        ]
    );
    $this->add_control(
        'img_hover_duration',
        [
            'label' => esc_html__('Hover Duration', 'magic-elements'),
            'type' => Controls_Manager::SLIDER,
            'size_units' => ['ms'],
            'range' => [
                'ms' => [
                    'min' => 0,
                    'max' => 2000,
                    'step' => 50,
                ],
            ],
            'default' => [
                'unit' => 'ms',
                'size' => 300,
            ],
            'selectors' => [
                '{{WRAPPER}} .img-overlay, .icon-part' => 'transition: all {{SIZE}}{{UNIT}} ease;',
            ],
        ]
    );
    $this->end_controls_tab();

    $this->end_controls_tabs();
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
		
        $layout_style = $settings['card_layout_style'];
        $file_path    = __DIR__ . '/layouts/team/';

        switch ($layout_style) {
            case 'style_two': 
                $file_path .= 'team_style_two.php';
                break;

            case 'style_one': 
                 default    : 
                $file_path .= 'team_style_one.php';
                break;
        }

        if (file_exists($file_path)) {
            include $file_path;
        } 
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
