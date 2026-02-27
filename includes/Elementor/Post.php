<?php

/**
 * Elementor Classes.
 *
 * @package Magic Elements
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
 * Elementor widget for Posts.
 *
 * @since 1.0.0
 */
class Post extends Widget_Base
{
    use Data;

    /**
     * Retrieve the widget name.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget name.
     */
    public function get_name()
    {
        return 'em_kit_post';
    }

    /**
     * Retrieve the widget title.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget title.
     */
    public function get_title()
    {
        return esc_html__('Post', 'magic-elements');
    }

    /**
     * Retrieve the widget icon.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget icon.
     */
    public function get_icon()
    {
        return 'eicon-posts-grid magicelements-editor-widgets-icon';
    }

    /**
     * Retrieve the list of categories the widget belongs to.
     *
     * @since 1.0.0
     * @access public
     * @return array Widget categories.
     */
    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    public function get_style_depends()
    {
        return ['emk-post'];
    }

    public function get_script_depends()
    {
        return ['emkit-post', 'jquery'];
    }

    /**
     * Register Post controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_post_controls();
    }

    /**
     * Register Post General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_post_controls()
    {
        $this->start_controls_section(
            'post_section',
            [
                'label' => esc_html__('Post Settings', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'post_type',
            [
                'label'   => esc_html__('Post Type', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'post',
                'options' => $this->get_post_types(),
            ]
        );

        $this->add_control(
            'posts_per_page',
            [
                'label'   => esc_html__('Posts Per Page', 'magic-elements'),
                'type'    => Controls_Manager::NUMBER,
                'default' => 3,
            ]
        );

        $this->add_control(
            'orderby',
            [
                'label'   => esc_html__('Order By', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'date',
                'options' => [
                    'date'     => esc_html__('Date', 'magic-elements'),
                    'title'    => esc_html__('Title', 'magic-elements'),
                    'menu_order' => esc_html__('Menu Order', 'magic-elements'),
                    'rand'     => esc_html__('Random', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'order',
            [
                'label'   => esc_html__('Order', 'magic-elements'),
                'type'    => Controls_Manager::SELECT,
                'default' => 'DESC',
                'options' => [
                    'DESC' => esc_html__('Descending', 'magic-elements'),
                    'ASC'  => esc_html__('Ascending', 'magic-elements'),
                ],
            ]
        );

        // Meta & Content visibility controls.
        $this->add_control(
            'show_post_date',
            [
                'label'        => esc_html__('Show Date', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => esc_html__('Yes', 'magic-elements'),
                'label_off'    => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->add_control(
            'show_post_author',
            [
                'label'        => esc_html__('Show Author', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => esc_html__('Yes', 'magic-elements'),
                'label_off'    => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->add_control(
            'show_post_excerpt',
            [
                'label'        => esc_html__('Show Excerpt', 'magic-elements'),
                'type'         => Controls_Manager::SWITCHER,
                'label_on'     => esc_html__('Yes', 'magic-elements'),
                'label_off'    => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default'      => 'yes',
            ]
        );

        $this->add_control(
            'post_excerpt_length',
            [
                'label'     => esc_html__('Excerpt Length (words)', 'magic-elements'),
                'type'      => Controls_Manager::NUMBER,
                'min'       => 5,
                'max'       => 100,
                'step'      => 1,
                'default'   => 25,
                'condition' => [
                    'show_post_excerpt' => 'yes',
                ],
            ]
        );

        $this->end_controls_section();

        // Style Section
        $this->start_controls_section(
            'post_style_section',
            [
                'label' => esc_html__('Post', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name'     => 'post_background',
                'types'    => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .post-item',
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name'     => 'post_border',
                'selector' => '{{WRAPPER}} .post-item',
            ]
        );

        $this->add_control(
            'post_border_radius',
            [
                'label'      => esc_html__('Border Radius', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .post-item' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'post_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .post-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Title Style Section
        $this->start_controls_section(
            'post_title_style_section',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'post_title_typography',
                'selector' => '{{WRAPPER}} .post-title, {{WRAPPER}} .post-title a',
            ]
        );

        $this->add_control(
            'post_title_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .post-title, {{WRAPPER}} .post-title a' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'post_title_hover_color',
            [
                'label'     => esc_html__('Hover Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .post-title a:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'post_title_margin',
            [
                'label'      => esc_html__('Margin', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .post-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Meta Style Section (Date & Author)
        $this->start_controls_section(
            'post_meta_style_section',
            [
                'label' => esc_html__('Meta (Date & Author)', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'post_meta_typography',
                'selector' => '{{WRAPPER}} .post-meta, {{WRAPPER}} .post-meta .post-date, {{WRAPPER}} .post-meta .post-author',
            ]
        );

        $this->add_control(
            'post_meta_color',
            [
                'label'     => esc_html__('Text Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .post-meta, {{WRAPPER}} .post-meta .post-date, {{WRAPPER}} .post-meta .post-author' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'post_meta_spacing',
            [
                'label'      => esc_html__('Top Spacing', 'magic-elements'),
                'type'       => Controls_Manager::SLIDER,
                'size_units' => ['px', 'em'],
                'range'      => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 5,
                        'step'=> 0.1,
                    ],
                ],
                'selectors'  => [
                    '{{WRAPPER}} .post-meta' => 'margin-top: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Excerpt / Content Style Section
        $this->start_controls_section(
            'post_excerpt_style_section',
            [
                'label' => esc_html__('Excerpt / Content', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'post_excerpt_typography',
                'selector' => '{{WRAPPER}} .post-excerpt',
            ]
        );

        $this->add_control(
            'post_excerpt_color',
            [
                'label'     => esc_html__('Text Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .post-excerpt' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'post_excerpt_margin',
            [
                'label'      => esc_html__('Margin', 'magic-elements'),
                'type'       => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors'  => [
                    '{{WRAPPER}} .post-excerpt' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Get available post types
     *
     * @return array
     */
    private function get_post_types()
    {
        $post_types = get_post_types(['public' => true], 'objects');
        $options = [];

        foreach ($post_types as $post_type) {
            $options[$post_type->name] = $post_type->label;
        }

        return $options;
    }

    /**
     * Render Post output on the frontend.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();

        $args = [
            'post_type'      => $settings['post_type'],
            'posts_per_page' => $settings['posts_per_page'],
            'orderby'        => $settings['orderby'],
            'order'          => $settings['order'],
        ];

        $query = $this->get_posts_data($args);
        
        include __DIR__ . '/layouts/post/post.php';
    }

    /**
     * Render shortcode widget as plain content.
     *
     * @since 1.0.0
     * @access public
     */
    public function render_plain_content()
    {
        echo esc_attr($this->get_settings('shortcode'));
    }

    /**
     * Render widget output in the editor.
     *
     * @since 1.3.0
     * @access protected
     */
    protected function content_template()
    {
    }
}
