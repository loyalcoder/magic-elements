<?php

/**
 * Elementor Classes.
 *
 * @package Category List Elementor Magic Kit
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
 * Elementor widget for Category List.
 *
 * @since 1.0.0
 */
class Category_List extends Widget_Base
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
        return 'em_kit_category_list';
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
        return esc_html__('Magic Category List', 'elementor-magic-kit');
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
        return 'eicon-product-categories';
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

    public function get_script_depends()
    {
        return [];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_category_list_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_category_list_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __( 'Categories', 'wp-elementor-category-widget' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        // Category Select Control
        $repeater->add_control(
            'selected_category',
            [
                'label' => __( 'Select Category', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => $this->get_all_categories(),
                'default' => '',
            ]
        );

        // Icon Control
        $repeater->add_control(
            'icon',
            [
                'label' => __( 'Icon', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-tag',
                    'library' => 'solid',
                ],
            ]
        );

        $this->add_control(
            'category_items',
            [
                'label' => __( 'Category List', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'title_field' => '{{{ selected_category }}}',
            ]
        );

        $this->end_controls_section();

        // Style Controls: Layout
        $this->start_controls_section(
            'layout_section',
            [
                'label' => __( 'Layout', 'wp-elementor-category-widget' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );


        // Layout Control
        $this->add_control(
            'layout',
            [
                'label' => __( 'Layout', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'flex' => [
                        'title' => __( 'Flex', 'wp-elementor-category-widget' ),
                        'icon' => 'eicon-gallery-grid',
                    ],
                    'column' => [
                        'title' => __( 'Column', 'wp-elementor-category-widget' ),
                        'icon' => 'eicon-editor-list-ul',
                    ],
                ],
                'default' => 'column',
                'toggle' => true,
            ]
        );

        // Alignment Control
        $this->add_responsive_control(
            'alignment',
            [
                'label' => __( 'Alignment', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'flex-start' => [
                        'title' => __( 'Start', 'wp-elementor-category-widget' ),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => __( 'Center', 'wp-elementor-category-widget' ),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'flex-end' => [
                        'title' => __( 'End', 'wp-elementor-category-widget' ),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'flex-start',
            ]
        );

        // Space Control
        $this->add_responsive_control(
            'category_spacing',
            [
                'label' => __( 'Spacing Between Items', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li' => 'margin: {{SIZE}}{{UNIT}};',
                ],
            ]
        );


        $this->add_responsive_control(
            'list_padding',
            [
                'label' => __( 'List Padding', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'border_radius',
            [
                'label' => __( 'Border Radius', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Style Controls: Typography
        $this->start_controls_section(
            'typography_section',
            [
                'label' => __( 'Typography', 'wp-elementor-category-widget' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'category_typography',
                'label' => __( 'Typography', 'wp-elementor-category-widget' ),
                'selector' => '{{WRAPPER}} .category-list-widget li a',
            ]
        );

        $this->add_control(
            'text_color',
            [
                'label' => __( 'Text Color', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'text_hover_color',
            [
                'label' => __( 'Text Hover Color', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Style Controls: Icon Styling
        $this->start_controls_section(
            'icon_style_section',
            [
                'label' => __( 'Icon Style', 'wp-elementor-category-widget' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
    
        $this->add_control(
            'icon_color',
            [
                'label' => __( 'Icon Color', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#0073aa',
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li i' => 'color: {{VALUE}};',
                ],
            ]
        );
    
        $this->add_control(
            'icon_hover_color',
            [
                'label' => __( 'Icon Hover Color', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#005177',
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li:hover i' => 'color: {{VALUE}};',
                ],
            ]
        );
    
        $this->add_responsive_control(
            'icon_size',
            [
                'label' => __( 'Icon Size', 'wp-elementor-category-widget' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'size' => 20,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li i' => 'font-size: {{SIZE}}{{UNIT}};',
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
        $layout = $settings['layout'];
        $limit = $settings['category_limit'];
        $alignment = isset( $settings['alignment'] ) ? $settings['alignment'] : 'flex-start';

        // Determine Flex or Column Layout Properties
        $flex_direction = $layout === 'flex' ? 'row' : 'column';
        $align_property = $layout === 'flex' ? 'justify-content' : 'align-items';

        include __DIR__ . '/layouts/category-list.php';
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
    // Helper function to fetch all categories
    protected function get_all_categories() {
        $categories = get_categories();
        $options = [];
        foreach ( $categories as $category ) {
            $options[ $category->term_id ] = $category->name;
        }
        return $options;
    }
}
