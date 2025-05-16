<?php

    /**
 * Elementor Classes.
 *
 * @package Image Compare Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * Magic Kit for Elementor Extension
 *
 * Elementor widget for Image Compare.
 *
 * @since 1.0.0
 */
class Image_Compare extends Widget_Base
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
        return 'em_kit_image_compare';
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
        return esc_html__('Image Compare', 'magic-elements');
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
        return 'eicon-image-before-after magicelements-editor-widgets-icon';
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

    public function get_script_depends()
    {
        return ['emkit-image-compare','jquery'];
    }
       public function get_style_depends()
    {
        return ['emk-image-compare'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_image_compare_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_image_compare_controls()
    {
               // Content Tab
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Image Settings', 'elementor-image-compare'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'before_image',
            [
                'label' => __('Before Image', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'before_label',
            [
                'label' => __('Before Label', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Before', 'elementor-image-compare'),
                'placeholder' => __('Before', 'elementor-image-compare'),
            ]
        );

        $this->add_control(
            'after_image',
            [
                'label' => __('After Image', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'after_label',
            [
                'label' => __('After Label', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('After', 'elementor-image-compare'),
                'placeholder' => __('After', 'elementor-image-compare'),
            ]
        );

        $this->add_control(
            'orientation',
            [
                'label' => __('Orientation', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'horizontal',
                'options' => [
                    'horizontal' => __('Horizontal', 'elementor-image-compare'),
                    'vertical' => __('Vertical', 'elementor-image-compare'),
                ],
            ]
        );

        $this->add_control(
            'default_offset',
            [
                'label' => __('Default Offset', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['%'],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 50,
                ],
            ]
        );

        $this->add_control(
            'no_overlay',
            [
                'label' => __('No Overlay?', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-image-compare'),
                'label_off' => __('No', 'elementor-image-compare'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'move_slider_on_hover',
            [
                'label' => __('Move on Hover?', 'elementor-image-compare'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'elementor-image-compare'),
                'label_off' => __('No', 'elementor-image-compare'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->end_controls_section();


        // Style section
        $this->start_controls_section(
            'image_compare_style_section',
			[
				'label' => esc_html__( 'Image', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
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
        $this->add_render_attribute('image-compare', 'class', 'image-compare-container');
        $this->add_render_attribute('image-compare', 'data-orientation', $settings['orientation']);
        $this->add_render_attribute('image-compare', 'data-offset', $settings['default_offset']['size'] / 100);
        $this->add_render_attribute('image-compare', 'data-overlay', ('yes' === $settings['no_overlay']) ? 'false' : 'true');
        $this->add_render_attribute('image-compare', 'data-hover', ('yes' === $settings['move_slider_on_hover']) ? 'true' : 'false');


        include __DIR__ . '/layouts/Image-Compare/image-compare.php';

      


        
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
