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

    public function get_style_depends()
    {
        return ['emk-category_list'];
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
                'label' => esc_html__( 'Categories', 'elementor-magic-kit' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        // Category Select Control
        $repeater->add_control(
            'selected_category',
            [
                'label' => esc_html__( 'Select Category', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => $this->get_all_categories(),
                'default' => '',
            ]
        );

        // Icon Control
        $repeater->add_control(
            'icon',
            [
                'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Category List', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Layout', 'elementor-magic-kit' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );


        // Layout Control
        $this->add_control(
            'layout',
            [
                'label' => esc_html__( 'Layout', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'flex' => [
                        'title' => esc_html__( 'Flex', 'elementor-magic-kit' ),
                        'icon' => 'eicon-gallery-grid',
                    ],
                    'column' => [
                        'title' => esc_html__( 'Column', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'flex-start' => [
                        'title' => esc_html__( 'Start', 'elementor-magic-kit' ),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'flex-end' => [
                        'title' => esc_html__( 'End', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Spacing Between Items', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'List Padding', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Style Controls: Typography
        $this->start_controls_section(
            'typography_section',
            [
                'label' => esc_html__( 'Typography', 'elementor-magic-kit' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'category_typography',
                'label' => esc_html__( 'Typography', 'elementor-magic-kit' ),
                'selector' => '{{WRAPPER}} .category-list-widget li a',
            ]
        );

        $this->add_control(
            'text_color',
            [
                'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .category-list-widget li a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'text_hover_color',
            [
                'label' => esc_html__( 'Text Hover Color', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Icon Style', 'elementor-magic-kit' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
    
        $this->add_control(
            'icon_color',
            [
                'label' => esc_html__( 'Icon Color', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Icon Hover Color', 'elementor-magic-kit' ),
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
                'label' => esc_html__( 'Icon Size', 'elementor-magic-kit' ),
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
        // $limit = $settings['category_limit'];
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
