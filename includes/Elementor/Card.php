<?php

    /**
 * Elementor Classes.
 *
 * @package Image Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * magic-elements for Elementor Extension
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
        return 'em_kit_card';
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
        return esc_html__('Card', 'magic-elements');
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
        return 'eicon-image magicelements-editor-widgets-icon';
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
          
                // Content Controls
        $this->start_controls_section(
            'card_section',
            [
                'label' => esc_html__('Card', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'card_title',
            [
                'label'       => esc_html__('Title', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__('Card Title', 'magic-elements'),
                'placeholder' => esc_html__('Enter your title', 'magic-elements'),
            ]
        );

        $this->add_control(
            'card_description',
            [
                'label'       => esc_html__('Description', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXTAREA,
                'default'     => esc_html__('This is the card description.', 'magic-elements'),
                'placeholder' => esc_html__('Enter your description', 'magic-elements'),
            ]
        );

        $this->add_control(
            'card_image',
            [
                'label'   => esc_html__('Image', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'card_button_text',
            [
                'label'       => esc_html__('Button Text', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'default'     => esc_html__('Read More', 'magic-elements'),
                'placeholder' => esc_html__('Enter button text', 'magic-elements'),
            ]
        );
                
        $this->add_control(
            'card_button_link',
            [
                'label'       => esc_html__('Button Link', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://your-link.com', 'magic-elements'),
                'default'     => [
                    'url' => '',
                ],
            ]
        );

        $this->end_controls_section();

            // Style Controls
        $this->start_controls_section(
            'card_style_section',
            [
                'label' => esc_html__('Card', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'card_align',
            [
                'label'   => esc_html__('Alignment', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__('Left', 'magic-elements'),
                        'icon'  => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__('Center', 'magic-elements'),
                        'icon'  => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'magic-elements'),
                        'icon'  => 'eicon-text-align-right',
                    ],
                ],
                'default'   => 'center',
                'toggle'    => true,
                'selectors' => [
                    '{{WRAPPER}} .card-widget' => 'text-align: {{VALUE}};',
                ],
            ]
        );
         $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name'     => 'card_background',
                'types'    => ['classic', 'gradient', 'video'],
                'selector' => '{{WRAPPER}} .card-widget',
            ]
        );
        $this->add_responsive_control(
            'card_width',
            [
                'label'      => esc_html__('Width', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range'      => [
                    'px' => [
                        'min' => 200,
                        'max' => 1200,
                    ],
                    '%' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => '%',
                    'size' => 100,
                ],
                'selectors' => [
                    '{{WRAPPER}} .card-widget' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'card_height',
            [
                'label'      => esc_html__('Height', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range'      => [
                    'px' => [
                        'min' => 100,
                        'max' => 800,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .card-widget' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'card_border',
				'selector' => '{{WRAPPER}} .card-widget',
			]
		);
        	$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'card_shadow',
				'selector' => '{{WRAPPER}} .card-widget',
			]
		);
        $this->add_responsive_control(
            'card_border_radius',
            [
                'label'      => esc_html__('Border Radius', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .card-widget' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'card_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .card-widget' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
            'title_section',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

            // Card Title Settings
        $this->add_control(
            'card_title_color',
            [
                'label'     => esc_html__('Title Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card-title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'title_typography',
                'selector' => '{{WRAPPER}} .card-title',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'description_section',
            [
                'label' => esc_html__('Description', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
            'card_description_color',
            [
                'label'     => esc_html__('Description Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card-description' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'description_typography',
                'selector' => '{{WRAPPER}} .card-description',
            ]
        );
        $this->add_responsive_control(
			'card_margin',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .card-description' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'button_section',
            [
                'label' => esc_html__('Button', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        // Start Tabs
         $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'button_typography',
                'selector' => '{{WRAPPER}} .card-button',
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'box_shadow',
				'selector' => '{{WRAPPER}} .card-button',
			]
		);
        $this->start_controls_tabs('button_tabs');
            // Normal Tab
        $this->start_controls_tab(
            'button_normal_tab',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );
         $this->add_control(
            'card_button_color',
            [
                'label'     => esc_html__('Text Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card-button' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'card_button_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .card-button',
			]
		);
        
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'card_button_border',
				'selector' => '{{WRAPPER}} .card-button',
			]
		);
        $this->end_controls_tab();  // End Normal Tab

            // Hover Tab
        $this->start_controls_tab(
            'button_hover_tab',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );
        $this->add_control(
            'card_button_hover_text_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card-button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'card_button_hover_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .card-button:hover',
			]
		);
       $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'card_button_hover_border',
				'selector' => '{{WRAPPER}} .card-button:hover',
			]
		);
        $this->end_controls_tab();  
        // End Hover Tab
        $this->end_controls_tabs();  
                	$this->add_control(
			'card_button_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_responsive_control(
            'card_button_border_radius',
            [
                'label'      => esc_html__('Border Radius', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .card-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'card_button_padding',
            [
                'label'      => esc_html__('Padding', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .card-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'card_button_margin',
            [
                'label'      => esc_html__('Margin', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors'  => [
                    '{{WRAPPER}} .card-button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings = $this->get_settings_for_display();

        include __DIR__ . '/layouts/Card/card.php';
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
