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

        $this->end_controls_section();

        // Style Section
        $this->start_controls_section(
            'post_style_section',
            [
                'label' => esc_html__('Post Style', 'magic-elements'),
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
                'label' => esc_html__('Title Style', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'post_title_typography',
                'selector' => '{{WRAPPER}} .post-title',
            ]
        );

        $this->add_control(
            'post_title_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .post-title' => 'color: {{VALUE}};',
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
        
        include __DIR__ . '/layouts/post.php';
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
