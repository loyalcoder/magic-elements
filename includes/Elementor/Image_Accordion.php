<?php

    /**
 * Elementor Classes.
 *
 * @package Image Accordion Magic Elements
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
        return esc_html__('Image Accordion', 'magic-elements');
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
        return 'eicon-image-box magicelements-editor-widgets-icon';
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
        return ['emkit-image-accordion'];
    }

    public function get_script_depends()
    {
        return ['emkit-image-accordion-script', 'jquery'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_image_accordion_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_image_accordion_controls()
    {
        $this->start_controls_section(
            '_section_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'background_image',
            [
                'label'   => esc_html__('Choose Image', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::MEDIA,
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
                'label'       => esc_html__('Title', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXT,
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'description',
            [
                'label'       => esc_html__('Description', 'magic-elements'),
                'type'        => \Elementor\Controls_Manager::TEXTAREA,
                'default'     => esc_html__('Image accordion content.', 'magic-elements'),
                'placeholder' => esc_html__('Type your description here', 'magic-elements'),
                'dynamic'     => [
                    'active' => true,
                ],
            ]
        );
        $repeater->add_control(
			'image_accordion_button_text',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Click Me', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
        $repeater->add_control(
			'image_accordion_button_link',
			[
				'label' => esc_html__( 'Link', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '',
					'is_external' => true,
					'nofollow' => true,
					// 'custom_attributes' => '',
				],
				'label_block' => true,
			]
		);
        $this->add_control(
            'accordion_items',
            [
                'label'         => esc_html__('Items', 'magic-elements'),
                'type'          => \Elementor\Controls_Manager::REPEATER,
                'fields'        => $repeater->get_controls(),
                'prevent_empty' => true,
                'default'       => [
                    [
                        'title'       => esc_html__('Image Accordion 1', 'magic-elements'),
                        'description' => __('Image accordion content.', 'magic-elements'),
                    ],
                    [
                        'title'       => esc_html__('Image Accordion 2', 'magic-elements'),
                        'description' => __('Image accordion content.', 'magic-elements'),
                    ],
                    [
                        'title'       => esc_html__('Image Accordion 3', 'magic-elements'),
                        'description' => __('Image accordion content.', 'magic-elements'),
                    ],
                    [
                        'title'       => esc_html__('Image Accordion 4', 'magic-elements'),
                        'description' => esc_html__('Image accordion content.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->add_control(
            'active_behavior',
            [
                'label'   => esc_html__('Active Behavior', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'click' => esc_html__('Click', 'magic-elements'),
                    'hover' => esc_html__('Hover', 'magic-elements'),
                ],
                'default'      => 'click',
                'prefix_class' => 'emk-image-accordion-',
            ]
        );

        $this->add_control(
            'active_behavior_notice',
            [
                'raw'             => '<strong>' . esc_html__('Please note!', 'magic-elements') . '</strong> ' . esc_html__('Active on load won\'t be working with this active behavior.', 'magic-elements'),
                'type'            => \Elementor\Controls_Manager::RAW_HTML,
                'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
                'render_type'     => 'ui',
                'condition'       => [
                    'active_behavior' => 'hover',
                ],
            ]
        );


        $this->end_controls_section();

        $this->start_controls_section(
            'section_style',
            [
                'label' => esc_html__('Image', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'image_accordion_min_height',
            [
                'label'      => esc_html__('Height', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', 'vh'],
                'range'      => [
                    'px' => [
                        'min'  => 100,
                        'max'  => 1500,
                        'step' => 1,
                    ],
                    'vh' => [
                        'min'  => 10,
                        'max'  => 100,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 300,
                ],
                'selectors' => [
                    '{{WRAPPER}} .accordion' => 'min-height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'image_accordion_width', 
            [
                'label'      => esc_html__('Width', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', 'vh'],
                'range'      => [
                    'px' => [
                        'min'  => 100,
                        'max'  => 1500,
                        'step' => 1,
                    ],
                    '%' => [
                        'min'  => 20,
                        'max'  => 100,
                        'step' => 1,
                    ],
                    'vh' => [
                        'min'  => 10,
                        'max'  => 100,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .accordion' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'section_caption_style',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
			'content_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .caption' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->add_control(
			'section_title_style',
			[
				'label'     => esc_html__( 'Title', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

        $this->add_control(
            'title_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} h2' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'image_accordion_title_typography',
                'selector' => '{{WRAPPER}} h2',
            ]
        );
        

        $this->add_responsive_control(
            'title_spacing',
            [
                'label'      => esc_html__('Spacing', 'magic-elements'),
                'type'       => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', 'em'],
                'range'      => [
                    'px' => [
                        'min'  => 0,
                        'max'  => 100,
                        'step' => 1,
                    ],
                    'em' => [
                        'min'  => 0,
                        'max'  => 10,
                        'step' => 0.1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} h2' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
			'section_description_style',
			[
				'label'     => esc_html__( 'Description', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

        $this->add_control(
            'description_color',
            [
                'label'     => esc_html__('Color', 'magic-elements'),
                'type'      => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} p' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name'     => 'description_typography',
                'selector' => '{{WRAPPER}} p',
            ]
        );
        $this->add_responsive_control(
			'description_spacing',
			[
				'label' => esc_html__( 'Margin', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Button Style
        $this->start_controls_section(
			'image_accordion_button_style_section',
			[
				'label' => esc_html__( 'Button', 'magic-elements' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'image_accordion_button_typography',
				'selector' => '{{WRAPPER}} .image-accordion-button',
			]
		);
        //start normal-hover-style
        $this->start_controls_tabs(
            'image_accordion_button_style_tabs'
        );
        //Normal Style
        $this->start_controls_tab(
            'image_accordion_button_normal_tab',
            [
                'label' => esc_html__( 'Normal', 'magic-elements' ),
            ]
        );
        $this->add_control(
			'image_accordion_button_text_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .image-accordion-button' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'image_accordion_button_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .image-accordion-button',
			]
		);
        
        $this->end_controls_tab();
        //Hover Style
        $this->start_controls_tab(
            'image_accordion_button_hover_tab',
            [
                'label' => esc_html__( 'Hover', 'magic-elements' ),
            ]
        );
        $this->add_control(
			'image_accordion_button_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .image-accordion-button:hover' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'image_accordion_button_hover_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .image-accordion-button:hover',
			]
		);
        $this->add_responsive_control(
			'image_accordion_button_hover_transition',
			[
				'label' => esc_html__( 'Transition Duration', 'magic-elements' ) . ' (s)',
				'type'  => \Elementor\Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min'  => 0,
						'max'  => 3,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .image-accordion-button:hover' => 'transition-duration: {{SIZE}}s',
				],
			]
		);
        $this->end_controls_tab();
        
        $this->end_controls_tabs();
        //end normal-hover-style
        $this->add_control(
			'image_accordion_button_hover_more_options',
			[
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'image_accordion_button_border',
				'selector' => '{{WRAPPER}} .image-accordion-button',
			]
		);
        $this->add_responsive_control(
			'image_accordion_button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .image-accordion-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'image_accordion_button_border_padding',
			[
				'label' => esc_html__( 'Padding', 'magic-elements' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .image-accordion-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings        = $this->get_settings_for_display();
        $image_accordion = $settings['accordion_items'];

            // Determine active behavior class
        $active_behavior = $settings['active_behavior'];
        $behavior_class  = ($active_behavior === 'hover') ? 'emk-image-accordion-hover' : 'emk-image-accordion-click';

		
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
