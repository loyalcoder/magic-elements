<?php

    /**
 * Elementor Classes.
 *
 * @package Post Category Tab Elementor Magic Kit
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
        return esc_html__('Post Category Tab', 'elementor-magic-kit');
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
        return 'eicon-post-info';
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
        return ['emk-post-tab', 'emkit-style'];
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
				'label' => esc_html__( 'Post', 'elementor-magic-kit' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'emk__get_post_in',
			[
    'label'       => esc_html__( 'Select Category', 'elementor-magic-kit' ),
    'type'        => \Elementor\Controls_Manager::SELECT2,
    'label_'      => true,
    'multiple'    => true,
    'options'     => $this->get_post_terms(),
    'default'     => [],
    'description' => esc_html__( 'Select a category', 'elementor-magic-kit' ),
			]
		);

		$this->add_control(
            'emk__post_per_page',
            [
                'label'   => esc_html__('Posts per page', 'elementor-magic-kit'),
                'type'    => \Elementor\Controls_Manager::NUMBER,
                'step'    => 1,
                'default' => 3,
            ]
        );

        $this->add_control(
            'emk__post_order_by',
            [
                'label'   => esc_html__('Post Order By', 'elementor-magic-kit'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none'  => esc_html__('None', 'elementor-magic-kit'),
                    'ID'    => esc_html__('ID', 'elementor-magic-kit'),
                    'title' => esc_html__('Title', 'elementor-magic-kit'),
                    'name'  => esc_html__('Name', 'elementor-magic-kit'),
                    'date'  => esc_html__('Date', 'elementor-magic-kit'),
                ],
            ]
        );

        $this->add_control(
            'emk__post_case_order',
            [
                'label'   => esc_html__('Post Order', 'elementor-magic-kit'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'DESC',
                'options' => [
                    'DESC' => esc_html__('DESC', 'elementor-magic-kit'),
                    'ASC'  => esc_html__('ASC', 'elementor-magic-kit'),
                ],
            ]
        );

		$this->end_controls_section();

            // Style section
            // Tabs Style Section
            $this->start_controls_section(
                'tab_styles_section',
                [
                    'label' => esc_html__( 'Tab Styles', 'elementor-magic-kit' ),
                    'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );
    
            $this->add_control(
                'tab_color',
                [
                    'label'     => esc_html__( 'Tab Text Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link' => 'color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_control(
                'tab_bg_color',
                [
                    'label'     => esc_html__( 'Tab Background Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link' => 'background-color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_control(
                'active_tab_color',
                [
                    'label'     => esc_html__( 'Active Tab Text Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active' => 'color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_control(
                'active_tab_bg_color',
                [
                    'label'     => esc_html__( 'Active Tab Background Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .nav-tabs .nav-item .nav-link.active' => 'background-color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->end_controls_section();
    
                // Post Style Section
            $this->start_controls_section(
                'post_styles_section',
                [
                    'label' => esc_html__( 'Post Styles', 'elementor-magic-kit' ),
                    'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );
    
            $this->add_control(
                'post_border_color',
                [
                    'label'     => esc_html__( 'Post Border Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .post' => 'border-color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_control(
                'img_height',
                [
                    'label'      => esc_html__( 'Image Height', 'elementor-magic-kit' ),
                    'type'       => \Elementor\Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%' ],
                    'range'      => [
                        'px' => [
                            'min'  => 50,
                            'max'  => 500,
                            'step' => 5,
                        ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .img-container img' => 'height: {{SIZE}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_control(
                'post_title_color',
                [
                    'label'     => esc_html__( 'Post Title Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .post-title' => 'color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name'     => 'post_title_typography',
                    'label'    => esc_html__( 'Post Title Typography', 'elementor-magic-kit' ),
                    'selector' => '{{WRAPPER}} .post-title',
                ]
            );
            $this->add_responsive_control(
                'post_tab_margin',
                [
                    'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
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
                        '{{WRAPPER}} .post-content' => 'margin-top: {{SIZE}}{{UNIT}};',
                    ],
                ]
            );
            $this->add_control(
                'post_author_color',
                [
                    'label'     => esc_html__( 'Post Author Color', 'elementor-magic-kit' ),
                    'type'      => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .author' => 'color: {{VALUE}};',
                    ],
                ]
            );
    
            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name'     => 'post_author_typography',
                    'label'    => esc_html__( 'Post Author Typography', 'elementor-magic-kit' ),
                    'selector' => '{{WRAPPER}} .author',
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
       

        include __DIR__ . '/layouts/post/post-category-tab.php';
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
