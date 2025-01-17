<?php

    /**
 * Elementor Classes.
 *
 * @package Heading Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
} 

    /**
 * Magic Elements for Elementor Extension
 *
 * Elementor widget for Heading.
 *
 * @since 1.0.0
 */
class Heading extends Widget_Base
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
        return 'magicelements_heading';
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
        return esc_html__('Heading', 'magic-elements');
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
        return 'eicon-heading magicelements-editor-widgets-icon';
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
        $this->register_heading_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_heading_controls()
    {
        $this->start_controls_section(
            'magicelements_heading_section_title',
            [
                'label' => esc_html__('Heading', 'magic-elements'),
            ]
        );

        $this->add_control(
			'title',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type'  => \Elementor\Controls_Manager::TEXTAREA,
				'ai'    => [
					'type' => 'text',
				],
				'dynamic' => [
					'active' => true,
				],
    'placeholder' => esc_html__( 'Enter your title', 'magic-elements' ),
    'default'     => esc_html__( 'Add Your Heading Text Here', 'magic-elements' ),
    'description' => esc_html__('to add highlight text use {{I am highlight}}', 'magic-elements'),
			]
		);

              // Link Control
        $this->add_control(
            'heading_link',
            [
                'label'       => esc_html__( 'Heading Link', 'magic-elements' ),
                'type'        => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'magic-elements' ),
                'options'     => [ 'url', 'is_external', 'nofollow' ],
                'default'     => [
                    'url'         => '',
                    'is_external' => false,
                    'nofollow'    => false,
                ],
            ]
        );

		$this->add_control(
			'header_size',
			[
				'label'   => esc_html__( 'HTML Tag', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'h1'   => 'H1',
					'h2'   => 'H2',
					'h3'   => 'H3',
					'h4'   => 'H4',
					'h5'   => 'H5',
					'h6'   => 'H6',
					'div'  => 'div',
					'span' => 'span',
					'p'    => 'p',
				],
				'default' => 'h2',
			]
		);

        $this->end_controls_section();

            // Style section
            // --- Container section
        $this->start_controls_section(
            'magicelements_section_title_style',
            [
                'label' => esc_html__('Heading', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
			'align',
			[
				'label'   => esc_html__( 'Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-text-align-right',
					],
					'justify' => [
						'title' => esc_html__( 'Justified', 'magic-elements' ),
						'icon'  => 'eicon-text-align-justify',
					],
				],
				'default'   => '',
				'selectors' => [
					'{{WRAPPER}} .magicelements-heading-title' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			'magicelements_title',
			[
				'label'     => esc_html__( 'Title', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'title_color_',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .magicelements-heading-title, {{WRAPPER}} .magicelements-heading-title a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'typography',
				'selector' => '{{WRAPPER}} .magicelements-heading-title',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name'     => 'text_stroke',
				'selector' => '{{WRAPPER}} .magicelements-heading-title',
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'text_shadow',
				'selector' => '{{WRAPPER}} .magicelements-heading-title',
			]
		);
        $this->add_control(
			'magicelements_replace_title',
			[
				'label'     => esc_html__( 'Highlight Title', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
            'magicelements_replace_color',
            [
                'label'     => esc_html__('Replace Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} span.ornaments' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'magicelements_replace_typography',
				'selector' => '{{WRAPPER}} span.ornaments',
			]
		);

        $this->add_group_control(
            \Elementor\Group_Control_Text_Stroke::get_type(),
            [
                'name'     => 'magicelements_replace_text_stroke',
                'selector' => '{{WRAPPER}} span.ornaments',
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

        $title        = $settings['title'];
        $newoutput    = str_replace(['{{', '}}'], ['<span class="ornaments">', '</span>'], $title);
        $heading_link = !empty( $settings['heading_link']['url'] ) ? $settings['heading_link']['url'] : '';

        include __DIR__ . '/layouts/heading/heading.php';
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
