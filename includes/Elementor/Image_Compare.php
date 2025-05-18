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
              // Before Image
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__('Content', 'magicelements'),
            ]
        );

        $this->add_control(
            'before_image',
            [
                'label' => esc_html__('Before Image', 'magicelements'),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'after_image',
            [
                'label' => esc_html__('After Image', 'magicelements'),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'before_label',
            [
                'label' => esc_html__('Before Label', 'magicelements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Before', 'magicelements'),
            ]
        );

        $this->add_control(
            'after_label',
            [
                'label' => esc_html__('After Label', 'magicelements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('After', 'magicelements'),
            ]
        );

        $this->add_control(
            'orientation',
            [
                'label' => esc_html__('Orientation', 'magicelements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'horizontal' => esc_html__('Horizontal', 'magicelements'),
                    'vertical' => esc_html__('Vertical', 'magicelements'),
                ],
                'default' => 'horizontal',
            ]
        );

        $this->add_control(
            'show_overlay',
            [
                'label' => esc_html__('Show Overlay Text?', 'magicelements'),
                'type' => Controls_Manager::SWITCHER,
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'overlay_position',
            [
                'label' => esc_html__('Overlay Position', 'magicelements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'top-left' => 'Top Left',
                    'top-right' => 'Top Right',
                    'bottom-left' => 'Bottom Left',
                    'bottom-right' => 'Bottom Right',
                    'center' => 'Center',
                ],
                'default' => 'top-left',
                'condition' => [
                    'show_overlay' => 'yes',
                ],
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
 $orientation = $settings['orientation'] === 'vertical' ? 'vertical' : 'horizontal';
        $before_label = esc_html($settings['before_label']);
        $after_label = esc_html($settings['after_label']);
        $show_overlay = $settings['show_overlay'] === 'yes';
        $overlay_class = $show_overlay ? 'show-overlay ' . esc_attr($settings['overlay_position']) : '';


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
