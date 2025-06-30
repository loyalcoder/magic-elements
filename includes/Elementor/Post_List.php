<?php
/**
 * Elementor Classes.
 *
 * @package Post List Magic Elements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use MagicElements\Traits\Data;

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
class Post_List extends Widget_Base 
{
    use Data;
    
    /**
     * Retrieve the widget name.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget name.
     */
    public function get_name() {
        return 'em_kit_post_list';
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
    public function get_title() {
        return esc_html__('Post List', 'magic-elements');
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
    public function get_icon() {
        return 'eicon-post-list magicelements-editor-widgets-icon';
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
    public function get_categories() {
        return ['magicelements-widgets'];
    }

    public function get_style_depends() {
        return ['emk-post-list'];
    }
    
    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls() {
        $this->register_query_controls();
        $this->register_layout_controls();
        $this->register_content_controls();
        $this->register_style_controls();
    }
    
    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_query_controls() {
        $this->start_controls_section(
            'section_query',
            [
                'label' => esc_html__('Query', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
    
        $this->add_control(
            'post_source',
            [
                'label' => esc_html__('Post Source', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'recent' => esc_html__('Recent Posts', 'magic-elements'),
                    'popular' => esc_html__('Popular Posts', 'magic-elements'),
                    'selected' => esc_html__('Selected Posts', 'magic-elements'),
                    'category' => esc_html__('Category Posts', 'magic-elements'),
                ],
                'default' => 'recent',
            ]
        );
    
        $this->add_control(
            'popular_by',
            [
                'label' => esc_html__('Popular By', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'views' => esc_html__('Views', 'magic-elements'),
                    'comments' => esc_html__('Comments', 'magic-elements'),
                ],
                'condition' => ['post_source' => 'popular'],
                'default' => 'views'
            ]
        );
    
        $this->add_control(
            'selected_posts',
            [
                'label' => esc_html__('Select Posts', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT2,
                'options' => $this->get_all_posts(),
                'multiple' => true,
                'label_block' => true,
                'condition' => ['post_source' => 'selected'],
            ]
        );
    
        $this->add_control(
            'categories',
            [
                'label' => esc_html__('Categories', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT2,
                'options' => $this->get_categories_options(),
                'multiple' => true,
                'label_block' => true,
                'condition' => ['post_source' => 'category'],
            ]
        );
    
        $this->add_responsive_control(
            'posts_per_page',
            [
                'label' => esc_html__('Number of Posts', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 6,
            ]
        );

        $this->add_control(
            'orderby',
            [
                'label' => esc_html__('Order By', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'date' => esc_html__('Date', 'magic-elements'),
                    'title' => esc_html__('Title', 'magic-elements'),
                    'rand' => esc_html__('Random', 'magic-elements'),
                    'comment_count' => esc_html__('Comment Count', 'magic-elements'),
                    'menu_order' => esc_html__('Menu Order', 'magic-elements'),
                    'modified' => esc_html__('Last Modified', 'magic-elements'),
                ],
                'default' => 'date',
                'condition' => [
                    'post_source!' => ['popular', 'selected'],
                ],
            ]
        );

        $this->add_control(
            'order',
            [
                'label' => esc_html__('Order', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'ASC' => esc_html__('Ascending', 'magic-elements'),
                    'DESC' => esc_html__('Descending', 'magic-elements'),
                ],
                'default' => 'DESC',
                'condition' => [
                    'post_source!' => 'selected',
                ],
            ]
        );
    
        $this->add_control(
            'cache_time',
            [
                'label' => esc_html__('Cache Time (seconds)', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3600,
                'description' => esc_html__('Set 0 to disable caching', 'magic-elements'),
            ]
        );
    
        $this->end_controls_section();
    }

    protected function register_layout_controls() {
        $this->start_controls_section(
            'section_layout',
            [
                'label' => esc_html__('Layout', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
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
					'{{WRAPPER}} .magic-post-item' => 'justify-content: {{VALUE}};',
					'{{WRAPPER}} .magic-post-item' => 'align-items: {{VALUE}};',
				],
			]
		);
    
        $this->add_control(
            'layout',
            [
                'label' => esc_html__('Layout Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'grid' => esc_html__('Grid', 'magic-elements'),
                    'list' => esc_html__('List', 'magic-elements'),
                ],
                'default' => 'grid',
                'prefix_class' => 'magic-post-layout-',
            ]
        );
    
        $this->add_responsive_control(
            'columns',
            [
                'label' => esc_html__('Columns', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5' => '5',
                    '6' => '6',
                ],
                'condition' => ['layout' => 'grid'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'grid-template-columns: repeat({{VALUE}}, 1fr)',
                ],
            ]
        );
    
        // image position control ( Top, Left, Bottom)
        $this->add_control(
            'image_position',
            [
                'label' => esc_html__('Image Position', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'top' => esc_html__('Top', 'magic-elements'),
                    'left' => esc_html__('Left', 'magic-elements'),
                ],
                'default' => 'top',
                'prefix_class' => 'magic-post-imgpos-',
            ]
        );
    
        $this->add_control(
            'image_width',
            [
                'label' => esc_html__('Image Width (for Left position)', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 20,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 30,
                ],
                'condition' => [
                    'image_position' => 'left',
                ],
                'selectors' => [
                    '{{WRAPPER}}.magic-post-imgpos-left .magic-post-item' => 'grid-template-columns: {{SIZE}}{{UNIT}} 1fr',
                ],
            ]
        );
    
        $this->add_control(
            'gap_between_posts',
            [
                'label' => esc_html__('Gap Between Posts', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'size' => 30,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'gap: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_content_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_image',
            [
                'label' => esc_html__('Show Featured Image', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Image_Size::get_type(),
            [
                'name' => 'image_size',
                'default' => 'medium',
                'condition' => ['show_image' => 'yes'],
            ]
        );

        $this->add_control(
            'show_title',
            [
                'label' => esc_html__('Show Title', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'title_tag',
            [
                'label' => esc_html__('Title HTML Tag', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'h1' => 'H1',
                    'h2' => 'H2',
                    'h3' => 'H3',
                    'h4' => 'H4',
                    'h5' => 'H5',
                    'h6' => 'H6',
                ],
                'default' => 'h3',
                'condition' => ['show_title' => 'yes'],
            ]
        );

        $this->add_control(
            'show_excerpt',
            [
                'label' => esc_html__('Show Excerpt', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'excerpt_length',
            [
                'label' => esc_html__('Excerpt Length', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 20,
                'condition' => ['show_excerpt' => 'yes'],
            ]
        );

        $this->add_control(
            'show_meta',
            [
                'label' => esc_html__('Show Meta', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'meta_data',
            [
                'label' => esc_html__('Meta Data', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT2,
                'default' => ['date', 'author'],
                'multiple' => true,
                'options' => [
                    'author' => esc_html__('Author', 'magic-elements'),
                    'date' => esc_html__('Date', 'magic-elements'),
                    'categories' => esc_html__('Categories', 'magic-elements'),
                    'comments' => esc_html__('Comments', 'magic-elements'),
                ],
                'condition' => ['show_meta' => 'yes'],
            ]
        );

        $this->add_control(
            'show_read_more',
            [
                'label' => esc_html__('Show Read More', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'read_more_text',
            [
                'label' => esc_html__('Read More Text', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Read More', 'magic-elements'),
                'condition' => ['show_read_more' => 'yes'],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_style_controls() {
        // Container Style
        $this->start_controls_section(
            'section_container_style',
            [
                'label' => esc_html__('Container', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'container_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'container_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-list',
            ]
        );

        $this->add_control(
            'container_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'container_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-list',
            ]
        );

        $this->add_responsive_control(
            'container_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'container_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Post Item Style
        $this->start_controls_section(
            'section_post_item_style',
            [
                'label' => esc_html__('Post Item', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'post_item_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-item' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'post_item_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-item',
            ]
        );

        $this->add_control(
            'post_item_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-item' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'post_item_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-item',
            ]
        );

        $this->add_responsive_control(
            'post_item_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'post_item_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-item' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Image Style
        $this->start_controls_section(
            'section_image_style',
            [
                'label' => esc_html__('Featured Image', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => ['show_image' => 'yes'],
            ]
        );

        $this->add_control(
            'image_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-thumbnail' => 'margin-bottom: {{SIZE}}{{UNIT}}',
                    '{{WRAPPER}}.magic-post-list-style-image-left .magic-post-thumbnail' => 'margin-right: {{SIZE}}{{UNIT}}; margin-bottom: 0',
                    '{{WRAPPER}}.magic-post-list-style-image-right .magic-post-thumbnail' => 'margin-left: {{SIZE}}{{UNIT}}; margin-bottom: 0',
                ],
            ]
        );

        $this->add_control(
            'image_height',
            [
                'label' => esc_html__('Height', 'magic-elements'),
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
					'size' => 350,
				],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-thumbnail img' => 'height: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'image_width_',
            [
                'label' => esc_html__('Width', 'magic-elements'),
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
					'size' => 100,
				],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-thumbnail img' => 'width: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'image_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-thumbnail img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'image_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-thumbnail img',
            ]
        );

        $this->end_controls_section();

        // Title Style
        $this->start_controls_section(
            'section_title_style',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => ['show_title' => 'yes'],
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-title a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'title_hover_color',
            [
                'label' => esc_html__('Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-title a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__('Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-title',
            ]
        );

        $this->add_responsive_control(
            'title_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-title' => 'margin-bottom: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Excerpt Style
        $this->start_controls_section(
            'section_excerpt_style',
            [
                'label' => esc_html__('Excerpt', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => ['show_excerpt' => 'yes'],
            ]
        );

        $this->add_control(
            'excerpt_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-excerpt' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'excerpt_typography',
                'label' => esc_html__('Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-excerpt',
            ]
        );

        $this->add_responsive_control(
            'excerpt_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-excerpt' => 'margin-bottom: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Meta Style
        $this->start_controls_section(
            'section_meta_style',
            [
                'label' => esc_html__('Meta Data', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => ['show_meta' => 'yes'],
            ]
        );

        $this->add_control(
            'meta_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-meta' => 'color: {{VALUE}};',
                    '{{WRAPPER}} .magic-post-meta a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'meta_link_hover_color',
            [
                'label' => esc_html__('Link Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-meta a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'meta_typography',
                'label' => esc_html__('Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-meta',
            ]
        );

        $this->add_responsive_control(
            'meta_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-meta' => 'margin-bottom: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'meta_divider',
            [
                'label' => esc_html__('Divider', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '|',
                'selectors' => [
                    '{{WRAPPER}} .magic-post-meta span + span:before' => 'content: "{{VALUE}}"; margin: 0 0.5em;',
                ],
            ]
        );

        $this->end_controls_section();

       // Read More Style
        $this->start_controls_section(
            'section_read_more_style',
            [
                'label' => esc_html__('Read More', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => ['show_read_more' => 'yes'],
            ]
        );

        // Text Color
        $this->add_control(
            'read_more_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a' => 'color: {{VALUE}};',
                ],
            ]
        );

        // Text Hover Color
        $this->add_control(
            'read_more_hover_color',
            [
                'label' => esc_html__('Text Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        // Background Color
        $this->add_control(
            'read_more_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        // Background Hover Color
        $this->add_control(
            'read_more_bg_hover_color',
            [
                'label' => esc_html__('Background Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        // Typography
        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'read_more_typography',
                'label' => esc_html__('Typography', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-read-more a',
            ]
        );

        // Padding
        $this->add_responsive_control(
            'read_more_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Border
        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'read_more_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-read-more a',
            ]
        );

        // Border Hover Color
        $this->add_control(
            'read_more_border_hover_color',
            [
                'label' => esc_html__('Border Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        // Border Radius
        $this->add_responsive_control(
            'read_more_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Box Shadow
        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'read_more_box_shadow',
                'label' => esc_html__('Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-read-more a',
            ]
        );

        // Hover Box Shadow
        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'read_more_box_shadow_hover',
                'label' => esc_html__('Hover Box Shadow', 'magic-elements'),
                'selector' => '{{WRAPPER}} .magic-post-read-more a:hover',
            ]
        );

        // Spacing
        $this->add_responsive_control(
            'read_more_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-read-more' => 'margin-top: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $query_args = $this->get_query_args($settings);
        
        // Use the trait method to get posts data with caching
        $posts = $this->get_posts_data($query_args, $settings['cache_time']);
        
        if (empty($posts)) { ?>
        
            <div class="magic-no-posts"> <?php  echo esc_html__('No posts found', 'magic-elements') ?>   </div>;
            <?php
            return;
        }

        $this->render_posts($posts, $settings);
    }

    protected function get_query_args($settings) {
        $args = [
            'post_type' => 'post',
            'posts_per_page' => $settings['posts_per_page'],
            'ignore_sticky_posts' => 1,
        ];
    
        switch ($settings['post_source']) {
            case 'popular':
                $args['orderby'] = ('views' === $settings['popular_by']) ? 'meta_value_num' : 'comment_count';
                if ('views' === $settings['popular_by']) {
                    $args['meta_key'] = 'post_views';
                }
                break;
    
            case 'selected':
                $args['post__in'] = $settings['selected_posts'];
                $args['orderby'] = 'post__in';
                break;
    
            case 'category':
                if (!empty($settings['categories'])) {
                    $args['category__in'] = $settings['categories'];
                }
                // No break - intentionally fall through to apply orderby and order
                // for category posts just like recent posts
                            
            default: // recent
                if (!empty($settings['orderby'])) {
                    $args['orderby'] = $settings['orderby'];
                }
                if (!empty($settings['order'])) {
                    $args['order'] = $settings['order'];
                }
        }
    
        return $args;
    }
    
    protected function render_posts($posts, $settings) {
        $layout = $settings['layout'];
        $image_position = $settings['image_position']; ?>
        
        <div class="magic-post-list magic-post-layout-<?php echo esc_attr($layout); ?>" data-image-pos="<?php echo esc_attr($image_position); ?>">
            <?php foreach ($posts as $index => $post) {
                $this->render_single_post($post, $settings, $index);
            } ?>
        </div>
        <?php
    }
    
    protected function render_single_post($post, $settings, $index = 0) {
        $thumbnail_url = !empty($post['thumbnail']) ? $post['thumbnail'] : '';
        $image_position = $settings['image_position'];
        ?>
        
        <article class="magic-post-item magic-post-imgpos-<?php echo esc_attr($image_position); ?>">
            <?php if (in_array($image_position, ['top', 'left']) && 'yes' === $settings['show_image'] && $thumbnail_url) : ?>
                <div class="magic-post-thumbnail">
                    <a href="<?php echo esc_url($post['permalink']); ?>">
                        <img src="<?php echo esc_url($thumbnail_url); ?>" alt="<?php echo esc_attr($post['title']); ?>" />
                    </a>
                </div>
            <?php endif; ?>
            
            <div class="magic-post-content">
                <?php if ('yes' === $settings['show_title']) : ?>
                    <<?php echo esc_attr($settings['title_tag']); ?> class="magic-post-title">
                        <a href="<?php echo esc_url($post['permalink']); ?>"><?php echo esc_html($post['title']); ?></a>
                    </<?php echo esc_attr($settings['title_tag']); ?>>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['show_meta'] && !empty($settings['meta_data'])) : ?>
                    <div class="magic-post-meta">
                        <?php $this->render_meta_data($post, $settings['meta_data']); ?>
                    </div>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['show_excerpt']) : ?>
                    <div class="magic-post-excerpt">
                        <?php echo wp_trim_words($post['excerpt'], $settings['excerpt_length']); ?>
                    </div>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['show_read_more']) : ?>
                    <div class="magic-post-read-more">
                        <a href="<?php echo esc_url($post['permalink']); ?>">
                            <?php echo esc_html($settings['read_more_text']); ?>
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </article>
        <?php
    }



protected function render_meta_data($post, $meta_data) {
    foreach ($meta_data as $meta) {
        switch ($meta) {
            case 'author':
                echo '<span class="post-author">' . esc_html($post['author']) . '</span>';
                break;
                
            case 'date':
                echo '<span class="post-date">' . esc_html($post['date']) . '</span>';
                break;
                
            case 'categories':
                if (!empty($post['categories'])) {
                    echo '<span class="post-categories">' . implode(', ', $post['categories']) . '</span>';
                }
                break;
                
            case 'comments':
                $comments_number = get_comments_number($post['ID']);
                echo '<span class="post-comments">';
                printf(
                    _n('%s Comment', '%s Comments', $comments_number, 'magic-elements'),
                    number_format_i18n($comments_number)
                );
                echo '</span>';
                break;
        }
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
    public function render_plain_content() {
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
    protected function content_template() {
    }

    protected function get_all_posts() {
        $posts = $this->get_posts_data([
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => -1,
        ], 0); // No caching for admin

        $options = [];
        foreach ($posts as $post) {
            $options[$post['ID']] = $post['title'];
        }

        return $options;
    }

    protected function get_categories_options() {
        $categories = get_categories([
            'hide_empty' => false,
        ]);
    
        $options = [];
    
        if (!empty($categories) && !is_wp_error($categories)) {
            foreach ($categories as $category) {
                $options[$category->term_id] = $category->name;
            }
        }
    
        return $options;
    }
}