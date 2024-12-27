<?php

/**
 * Elementor Classes.
 *
 * @package Image Elementor Magic Kit
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
 * Elementor widget for Image.
 *
 * @since 1.0.0
 */
class Card extends Widget_Base
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
        return 'em_kit_image';
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
        return esc_html__('Magic Card', 'elementor-magic-kit ');
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
        return 'eicon-image';
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
        return ['emk-card'];
    }

    public function get_script_depends()
    {
        return ['emkit-card', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_card_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_card_controls()
    {
            // Section: Content
            $this->start_controls_section(
                'content_section',
                [
                    'label' => __( 'Content', 'plugin-name' ),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
    
            // Image Control
            $this->add_control(
                'image',
                [
                    'label' => __( 'Choose Image', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::MEDIA,
                    'default' => [
                        'url' => \Elementor\Utils::get_placeholder_image_src(),
                    ],
                ]
            );
    
            // Title Control
            $this->add_control(
                'title',
                [
                    'label' => __( 'Title', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXT,
                    'default' => __( 'Card title', 'plugin-name' ),
                    'placeholder' => __( 'Enter your title', 'plugin-name' ),
                ]
            );
    
            // Paragraph Control
            $this->add_control(
                'paragraph',
                [
                    'label' => __( 'Paragraph', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXTAREA,
                    'default' => __( 'Some quick example text to build on the card title and make up the bulk of the card s content.', 'plugin-name' ),
                    'placeholder' => __( 'Enter your text here', 'plugin-name' ),
                ]
            );
    
            // Button Text Control
            $this->add_control(
                'button_text',
                [
                    'label' => __( 'Button Text', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXT,
                    'default' => __( 'Click Here', 'plugin-name' ),
                    'placeholder' => __( 'Enter button text', 'plugin-name' ),
                ]
            );
    
            // Button URL Control
            $this->add_control(
                'button_url',
                [
                    'label' => __( 'Button URL', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::URL,
                    'placeholder' => __( 'https://your-link.com', 'plugin-name' ),
                    'default' => [
                        'url' => '',
                        'is_external' => false,
                        'nofollow' => false,
                    ],
                ]
            );
    
            $this->end_controls_section();

        // Style section


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
        $img = $settings['image']['url'];
        $title = $settings['title'];
        $desc = $settings['paragraph'];
        $button = $settings['button_text'];
        

        include __DIR__ . '/layouts/card.php';
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
