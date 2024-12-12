<?php

/**
 * Elementor Classes.
 *
 * @package Image Accordion Elementor Magic Kit
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
 * Elementor widget for Button.
 *
 * @since 1.0.0
 */
class Image_Accordion extends Widget_Base
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
        return 'em_image_accordion';
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
        return esc_html__('Magic Image Accordion', 'elementor-magic-kit');
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
        return 'eicon-image-box';
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
        return [''];
    }

    public function get_script_depends()
    {
        return ['script', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_button_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_button_controls()
    {
        $this->start_controls_section(
            '_section_content',
            [
                'label' => __('Content', 'kinder-world-manager'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'background_image',
            [
                'label' => __('Choose Image', 'kinder-world-manager'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
                'dynamic' => [
                    'active' => true,
                ],
            ]
        );

        $repeater->add_control(
            'title',
            [
                'label'   => __('Title', 'kinder-world-manager'),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'description',
            [
                'label' => __('Description', 'kinder-world-manager'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'description' => ha_get_allowed_html_desc( 'intermediate' ),
                'default' => __('Image accordion content.', 'kinder-world-manager'),
                'placeholder' => __('Type your description here', 'kinder-world-manager'),
                'dynamic' => [
                    'active' => true,
                ],
            ]
        );

        $repeater->add_control(
            'link_url',
            [
                'label'   => __('Link URL', 'kinder-world-manager'),
                'type'    => \Elementor\Controls_Manager::URL,
                'dynamic' => [
                    'active' => true,
                ],
            ]
        );

        $this->add_control(
            'accordion_items',
            [
                'label'         => __('Items', 'kinder-world-manager'),
                'type'          => \Elementor\Controls_Manager::REPEATER,
                'fields'        => $repeater->get_controls(),
                'prevent_empty' => true,
                'default'       => [
                    [
                        'title'         => __('Image Accordion 1', 'kinder-world-manager'),
                        'description'         => __('Image accordion content.', 'kinder-world-manager'),
                    ],
                    [
                        'title'         => __('Image Accordion 2', 'kinder-world-manager'),
                        'description'         => __('Image accordion content.', 'kinder-world-manager'),
                    ],
                    [
                        'title'         => __('Image Accordion 3', 'kinder-world-manager'),
                        'description'         => __('Image accordion content.', 'kinder-world-manager'),
                    ],
                    [
                        'title'         => __('Image Accordion 4', 'kinder-world-manager'),
                        'description'         => __('Image accordion content.', 'kinder-world-manager'),
                    ],
                ],
                'title_field'   => '{{{ title }}}',
            ]
        );

        $this->add_control(
            'active_behavior',
            [
                'label'         => esc_html__('Active Behavior', 'kinder-world-manager'),
                'type'          => \Elementor\Controls_Manager::SELECT,
                'options'       => [
                    'click' => esc_html__('Click', 'kinder-world-manager'),
                    'hover' => esc_html__('Hover', 'kinder-world-manager'),
                ],
                'default'       => 'click',
                'prefix_class'  => 'emk-image-accordion-',
            ]
        );

        $this->add_control(
            'active_behavior_notice',
            [
                'raw' => '<strong>' . esc_html__('Please note!', 'kinder-world-manager') . '</strong> ' . esc_html__('Active on load won\'t be working with this active behavior.', 'kinder-world-manager'),
                'type' => \Elementor\Controls_Manager::RAW_HTML,
                'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
                'render_type' => 'ui',
                'condition' => [
                    'active_behavior' => 'hover',
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
        $image_accordion = $settings['accordion_items'];

        // Determine active behavior class
        $active_behavior = $settings['active_behavior'];
        $behavior_class = ($active_behavior === 'hover') ? 'emk-image-accordion-hover' : 'emk-image-accordion-click';

		
        include __DIR__ . '/layouts/image-accordion/image-accordion.php';
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
