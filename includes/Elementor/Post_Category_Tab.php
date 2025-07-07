<?php

    /**
 * Elementor Classes.
 *
 * @package Post Category Tab Magic Elements
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
 * Elementor widget for Post Category Tab.
 *
 * @since 1.0.0
 */
class Post_Category_Tab extends Widget_Base
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
        return 'em_kit_post_tab';
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
        return esc_html__('Post Category Tab', 'magic-elements');
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
        return 'eicon-post-info magicelements-editor-widgets-icon';
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
        return ['emk-post-tab'];
    }

    public function get_script_depends()
    {
        return ['emkit-post-tab', 'jquery'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_post_category_tab_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_post_category_tab_controls()
    {

		$this->start_controls_section(
			'emk__post_section',
			[
				'label' => esc_html__( 'Post', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'emk__get_post_in',
			[
    'label'       => esc_html__( 'Select Category', 'magic-elements' ),
    'type'        => \Elementor\Controls_Manager::SELECT2,
    'label_'      => true,
    'multiple'    => true,
    'options'     => $this->get_post_terms(),
    'default'     => [],
    'description' => esc_html__( 'Select a category', 'magic-elements' ),
			]
		);

		$this->add_responsive_control(
            'emk__post_per_page',
            [
                'label'   => esc_html__('Posts per page', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::NUMBER,
                'step'    => 1,
                'default' => 3,
            ]
        );

        $this->add_control(
            'emk__post_order_by',
            [
                'label'   => esc_html__('Post Order By', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none'  => esc_html__('None', 'magic-elements'),
                    'ID'    => esc_html__('ID', 'magic-elements'),
                    'title' => esc_html__('Title', 'magic-elements'),
                    'name'  => esc_html__('Name', 'magic-elements'),
                    'date'  => esc_html__('Date', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'emk__post_case_order',
            [
                'label'   => esc_html__('Post Order', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'DESC',
                'options' => [
                    'DESC' => esc_html__('DESC', 'magic-elements'),
                    'ASC'  => esc_html__('ASC', 'magic-elements'),
                ],
            ]
        );

		$this->end_controls_section();

            // Style section
            $this->start_controls_section(
                'tab_styles_section',
                [
                    'label' => esc_html__( 'Tab', 'magic-elements' ),
                    'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );
             $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'tab_normal_typography',
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link',
                ]
		    );
            //normal-active start
            $this->start_controls_tabs(
                'style_tabs'
            );
            //normal
            $this->start_controls_tab(
                'style_normal_tab',
                [
                    'label' => esc_html__( 'Normal', 'magic-elements' ),
                ]
            );
                
            $this->add_control(
                'tab_color',
                [
                    'label'     => esc_html__( 'Text Color', 'magic-elements' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link' => 'color: {{VALUE}};',
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Background::get_type(),
                [
                    'name' => 'tab_bg_color',
                    'types' => [ 'classic', 'gradient', 'video' ],
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link',
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'tab_normal_border',
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link',
                ]
		    );
            	$this->add_group_control(
                    \Elementor\Group_Control_Box_Shadow::get_type(),
                    [
                        'name' => 'tab_normal_box_shadow',
                        'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link',
                    ]
		        );
            $this->end_controls_tab();
            //Hover
            $this->start_controls_tab(
                'style_hover_tab',
                [
                    'label' => esc_html__( 'Hover', 'magic-elements' ),
                ]
            );
            $this->add_control(
                'tab_hover_color',
                [
                    'label'     => esc_html__( 'Text Color', 'magic-elements' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link:hover' => 'color: {{VALUE}};',
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Background::get_type(),
                [
                    'name' => 'tab_hover_bg_color',
                    'types' => [ 'classic', 'gradient', 'video' ],
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link:hover',
                ]
		    );
            $this->add_responsive_control(
                'tab_hover_transition',
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
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link:hover' => 'transition-duration: {{SIZE}}s',
                    ],
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'tab_hover_border',
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link:hover',
                ]
		    );
            	$this->add_group_control(
                    \Elementor\Group_Control_Box_Shadow::get_type(),
                    [
                        'name' => 'tab_hover_box_shadow',
                        'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link:hover',
                    ]
		        );

            $this->end_controls_tab();
            //Active
            $this->start_controls_tab(
                'style_active_tab',
                [
                    'label' => esc_html__( 'Active', 'magic-elements' ),
                ]
            );
            $this->add_control(
                'tab_active_color',
                [
                    'label'     => esc_html__( 'Text Color', 'magic-elements' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active' => 'color: {{VALUE}};',
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Background::get_type(),
                [
                    'name' => 'tab_active_bg_color',
                    'types' => [ 'classic', 'gradient', 'video' ],
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active',
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'tab_active_border',
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active',
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Box_Shadow::get_type(),
                [
                    'name' => 'tab_active_box_shadow',
                    'selector' => '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active',
                ]
            );
            $this->end_controls_tab();

            $this->end_controls_tabs();
            //normal-active end
            $this->add_control(
                'tab_divider_options',
                [
                    'label' => esc_html__( 'Tab Line Style', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::HEADING,
                    'separator' => 'before',
                ]
		    );
            $this->add_responsive_control(
                'tab_line_align',
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
                        '{{WRAPPER}} .line' => 'justify-self: {{VALUE}};',
                    ],
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Background::get_type(),
                [
                    'name' => 'background',
                    'types' => [ 'classic', 'gradient', 'video' ],
                    'selector' => '{{WRAPPER}} .line',
                ]
		    );
            $this->add_responsive_control(
                'tab_line_height',
                [
                    'label' => esc_html__( 'Height', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'range' => [
                        'px' => [
                            'min' => 0,
                            'max' => 50,
                            'step' => 1,
                        ],
                        '%' => [
                            'min' => 0,
                            'max' => 100,
                        ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .line' => 'height: {{SIZE}}{{UNIT}};',
                    ],
                ]
		    );
             $this->add_responsive_control(
                'tab_line_width',
                [
                    'label' => esc_html__( 'Width', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'range' => [
                        'px' => [
                            'min' => 0,
                            'max' => 1200,
                            'step' => 1,
                        ],
                        '%' => [
                            'min' => 0,
                            'max' => 100,
                        ],
                        'default' => [
                        'unit' => '%',
                        'size' => 100,
                    ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .line' => 'width: {{SIZE}}{{UNIT}};',
                    ],
                ]
		    );
            $this->add_responsive_control(
                'tab_line_border_radius',
                [
                    'label' => esc_html__( 'Border Radius', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .line' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );
            $this->add_responsive_control(
                'tab_line_margin',
                [
                    'label' => esc_html__( 'Margin', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .line' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );
            $this->add_control(
                'tab_divider',
                [
                    'type' => \Elementor\Controls_Manager::HEADING,
                    'separator' => 'before',
                ]
		    );
            $this->add_responsive_control(
                'tab_gap',
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
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs' => 'gap: {{SIZE}}{{UNIT}};',
                    ],
                ]
		    );
             $this->add_responsive_control(
                'tab_normal_border_radius',
                [
                    'label' => esc_html__( 'Border Radius', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
		    );
            $this->add_responsive_control(
                'tab_normal_padding',
                [
                    'label' => esc_html__( 'Padding', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
		    );
            $this->end_controls_section();
    
            // Post Style Section
            $this->start_controls_section(
                'post_styles_section',
                [
                    'label' => esc_html__( 'Post', 'magic-elements' ),
                    'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );
            $this->add_responsive_control(
                'tab_post_gap',
                [
                    'label' => esc_html__( 'Post Gap', 'magic-elements' ),
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
                        '{{WRAPPER}} .posts-container' => 'gap: {{SIZE}}{{UNIT}};',
                    ],
                ]
		    );
            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'tab_post_border',
                    'selector' => '{{WRAPPER}} .post',
                ]
		    );
    
            $this->add_responsive_control(
                'img_height',
                [
                    'label'      => esc_html__( 'Image Height', 'magic-elements' ),
                    'type'       => \Elementor\Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%' ],
                    'range'      => [
                        'px' => [
                            'min'  => 50,
                            'max'  => 500,
                            'step' => 1,
                        ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .img-container img' => 'height: {{SIZE}}{{UNIT}};',
                    ],
                ]
            );
            $this->add_responsive_control(
                'tab_img_width',
                [
                    'label'      => esc_html__( 'Image Width', 'magic-elements' ),
                    'type'       => \Elementor\Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%' ],
                    'range'      => [
                        'px' => [
                            'min'  => 50,
                            'max'  => 500,
                            'step' => 1,
                        ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .img-container img' => 'width: {{SIZE}}{{UNIT}};',
                    ],
                ]
            );
            $this->add_responsive_control(
                'tab_post_border_radius',
                [
                    'label' => esc_html__( 'Border Radius', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .post' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
		    );
            $this->add_responsive_control(
                'tab_post_padding',
                [
                    'label' => esc_html__( 'Padding', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .post' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
		    );
            $this->end_controls_section();
            //Title
            $this->start_controls_section(
                'tab_post_title_section',
                [
                    'label' => esc_html__( 'Title', 'magic-elements' ),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
		    );

            $this->add_control(
                'post_title_color',
                [
                    'label' => esc_html__( 'Text Color', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .post-title' => 'color: {{VALUE}}',
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'post_title_typography',
                    'selector' => '{{WRAPPER}} .post-title',
                ]
		    );
            $this->add_responsive_control(
                'post_title_margin',
                [
                    'label' => esc_html__( 'Margin', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .post-content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
		    );

		    $this->end_controls_section();
            //Author
            $this->start_controls_section(
                'tab_post_author_section',
                [
                    'label' => esc_html__( 'Author', 'magic-elements' ),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
		    );

            $this->add_control(
                'post_author_color',
                [
                    'label' => esc_html__( 'Text Color', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .author' => 'color: {{VALUE}}',
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'post_author_typography',
                    'selector' => '{{WRAPPER}} .author',
                ]
		    );
            $this->add_responsive_control(
                'post_author_margin',
                [
                    'label' => esc_html__( 'Margin', 'magic-elements' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
                    'selectors' => [
                        '{{WRAPPER}} .author' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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

		$args = [
            'post_type'      => 'post',                              // Your custom post type
            'posts_per_page' => $settings['emk__post_per_page'],
            'orderby'        => $settings['emk__post_order_by'],
            'order'          => $settings['emk__post_case_order'],
            'tax_query'      => [
                [
                    'taxonomy' => 'category',                      // Replace with your taxonomy slug
                    'field'    => 'term_id',                       // Use term_id if terms are IDs
                    'terms'    => $settings['emk__get_post_in'],   // The selected terms from the SELECT2 control
                ],
            ],
        ];

		$query = new \WP_Query($args);
       

        include __DIR__ . '/layouts/post-category/post-category-tab.php';
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

    protected function get_post_terms(){
		$terms  = [
			'taxonomy'   => 'category',
			'hide_empty' => false,

		];
		$get_terms      = get_terms($terms );
		$get_terms_list = [];
		if(is_array($get_terms) && !empty($get_terms)){
			foreach($get_terms as $terms){
				$get_terms_list[$terms->term_id] = $terms->name;
			}
		}
        
		return $get_terms_list;
	}
}
