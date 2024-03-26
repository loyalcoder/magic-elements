<?php

/**
 * Elementor Classes.
 *
 * @package Header Footer Elementor
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Elementor test
 *
 * Elementor widget for test.
 *
 * @since 1.0.0
 */
class Magic_Kit_Icon extends Widget_Base
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
        return 'EM_KIT_Magic_Kit_Icon';
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
        return __('Icon Box', 'elementor-magic-kit');
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
        return 'eicon-social-icons';
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
        return ['elementor-magic-kit-widgets'];
    }

    public function get_script_depends()
    {
        return [];
    }

    public function get_style_depends()
    {
        return ['emk-icon-box'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_magic_kit_icon_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_magic_kit_icon_controls()
    {
        $this->start_controls_section(
            'section_title',
            [
                'label' => __('Icon Box Settings', 'elementor-magic-kit'),
            ]
        );
        $this->add_control(
            'icon',
            [
                'label' => __( 'Icon', 'elementor-magic-kit' ),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-star',
                    'library' => 'fa-solid',
                ],
            ]
        );
		$this->add_control(
			'icon_border_style',
			[
				'label' => esc_html__( 'Border Style', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'default',
				'options' => [
					'default' => esc_html__( 'Default', 'elementor-magic-kit' ),
					'framed' => esc_html__( 'Framed', 'elementor-magic-kit' ),
					'stacked' => esc_html__( 'Stacked', 'elementor-magic-kit' ),
				],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'border-style: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'icon_box_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Default title', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'icon_box_description',
			[
				'label' => esc_html__( 'Description', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 7,
				'default' => esc_html__( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your description here', 'elementor-magic-kit' ),
			]
		);
		$this->add_control(
			'html_tag',
			[
				'label' => esc_html__( 'Title HTML Tag', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'h3',
				'options' => [
					'' => esc_html__( 'h3', 'elementor-magic-kit' ),
					'h1' => esc_html__( 'h1', 'elementor-magic-kit' ),
					'h2'  => esc_html__( 'h2', 'elementor-magic-kit' ),
					'h3' => esc_html__( 'h3', 'elementor-magic-kit' ),
					'h4' => esc_html__( 'h4', 'elementor-magic-kit' ),
					'h5' => esc_html__( 'h5', 'elementor-magic-kit' ),
					'h6' => esc_html__( 'h6', 'elementor-magic-kit' ),
					'div' => esc_html__( 'div', 'elementor-magic-kit' ),
					'span' => esc_html__( 'span', 'elementor-magic-kit' ),
					'p' => esc_html__( 'p', 'elementor-magic-kit' ),
				],
			]
		);
		$this->add_control(
			'link',
			[
				'label' => esc_html__( 'Link', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '',
					'is_external' => true,
					'nofollow' => true,
				],
				'label_block' => true,
			]
		);

        $this->end_controls_section();

        // Style section
        // --- Container section
        $this->start_controls_section(
            $this->get_name() . 'icon_box_style_section',
            [
                'label' => __('Box', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

		$this->start_controls_tabs(
			'box_tabs'
		);
		$this->start_controls_tab(
			'box_tabs_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
			]
		);
		$this->add_control(
			'box_background_normal',
			[
				'label' => esc_html__( 'Background', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'box_tabs_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
			]
		);
		$this->add_control(
			'box_background_hover',
			[
				'label' => esc_html__( 'Background', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper:hover' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'title_hover_color',
			[
				'label' => esc_html__( 'Title Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper:hover .icon-box-content .magic-kit-icon-title .title span' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'description_hover_color',
			[
				'label' => esc_html__( 'Description Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper:hover .icon-box-content .magic-kit-icon-description p.description' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'box_hover_duration',
			[
				'label' => esc_html__( 'Duration', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 0,
				'max' => 10,
				'step' => 0.1,
				'default' => 0.3,
			]
		);
		$this->end_controls_tab();
		$this->end_controls_tabs();
		$this->add_control(
			'heading_box_default',
			[
				'label' => esc_html__( 'Default', 'elementor-magic-kit' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_responsive_control(
			'icon_position',
			[
				'label' => esc_html__( 'Icon Position', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-left',
					],
					'column' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'row-reverse' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'default' => 'column',
				'mobile_default' => 'column',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'flex-direction: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'icon_alignment',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'top',
				'mobile_default' => 'top',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'align-items: {{VALUE}};',
				],
				'condition' => [
					'icon_position!' => 'column',
				],
			]
		);
		$this->add_responsive_control(
			'alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-right',
					],
					'justify' => [
						'title' => esc_html__( 'Justify', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'default' => 'left',
				'mobile_default' => 'left',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'text-align: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'box_radius',
			[
				'label' => esc_html__( 'Radius', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'box_padding',
			[
				'label' => esc_html__( 'Box Padding', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        // Icon control ====================================
        $this->start_controls_section(
            $this->get_name() . 'icon_style_section',
            [
                'label' => __('Icon', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			$this->get_name() . 'icon_color',
			[
				'label' => esc_html__( 'Icon Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-wrapper .magic-kit-icon svg path' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'icon_size',
			[
				'label' => esc_html__( 'Size', 'elementor-magic-kit' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'min' => 6,
						'max' => 500,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 100,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-kit-icon svg' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'icon_rotate',
			[
				'label' => esc_html__( 'Rotate', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'deg', 'grad', 'rad', 'turn', 'custom' ],
				'range' => [
					'deg' => [
						'min' => 0,
						'max' => 360,
						'step' => 0,
					],
					'grad' => [
						'min' => 0,
						'max' => 400,
						'step' => 0,
					],
					'rad' => [
						'min' => 0,
						'max' => 6.283,
						'step' => 0,
					],
					'turn' => [
						'min' => 0.0,
						'max' => 1,
						'step' => 0,
					],
				],
				'default' => [
					'unit' => 'deg',
					'size' => 0,
				],
				'selectors' => [
					'{{WRAPPER}} .magic-kit-icon svg' => 'rotate: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        // content control ==================================
        $this->start_controls_section(
            $this->get_name() . 'icon_content_section',
            [
                'label' => __('Content', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			'heading_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Title Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-box-content .magic-kit-icon-title .title span' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-title .title span',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'title_stroke',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-title .title span',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'title_shadow',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-title .title span',
			]
		);
        $this->add_responsive_control(
			'title_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 2,
					'right' => 0,
					'bottom' => 2,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .icon-box-content .magic-kit-icon-title .title span' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'heading_description',
			[
				'label' => esc_html__( 'Description', 'elementor-magic-kit' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'description_color',
			[
				'label' => esc_html__( 'Description Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .icon-box-content .magic-kit-icon-description p.description' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'description_typography',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-description p.description',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'description_stroke',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-description p.description',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'description_shadow',
				'selector' => '{{WRAPPER}} .icon-box-content .magic-kit-icon-description p.description',
			]
		);
        $this->add_responsive_control(
			'description_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 2,
					'right' => 0,
					'bottom' => 2,
					'left' => 0,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .icon-box-content .icon-box-content .magic-kit-icon-description p.description' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		
        $this->end_controls_section();
		// $this->start_controls_section(
		// 	'style_section',
		// 	[
		// 		'label' => esc_html__( 'Style Section', 'elementor-magic-kit' ),
		// 		'tab' => \Elementor\Controls_Manager::TAB_STYLE,
		// 	]
		// );
		// $this->start_controls_tabs(
		// 	'style_tabs'
		// );
		// $this->start_controls_tab(
		// 	'style_normal_tab',
		// 	[
		// 		'label' => esc_html__( 'Normal', 'elementor-magic-kit' ),
		// 	]
		// );

		// $this->end_controls_tab();

		// $this->start_controls_tab(
		// 	'style_hover_tab',
		// 	[
		// 		'label' => esc_html__( 'Hover', 'elementor-magic-kit' ),
		// 	]
		// );
		// $this->end_controls_tab();
		// $this->end_controls_section();
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
		$link = $settings['link']['url'];
		$addlinkaft = ! empty( $link ) ? "<a " . "href=".$settings['link']['url']."" : "<span";
		$addlinkpre = ! empty( $link ) ? "</a> "  : "</";
         
		$this->add_render_attribute(  'icon', 'class', 'magic-kit-icon-shape');
		 
		if( ! empty($settings['icon_border_style'])){
			$this->add_render_attribute(  'icon', 'class', 'magic-kit-icon-'. $settings['icon_border_style'] );
		}
        include __DIR__ . '/layouts/magic-kit-icon.php';
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
