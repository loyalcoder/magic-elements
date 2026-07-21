<?php
/**
 * Elementor Image Slider widget.
 *
 * @package MagicElements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Repeater;
use Elementor\Utils;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Image Slider widget with Slick and zoom-in effect.
 *
 * @since 1.0.0
 */
class Image_Slider extends Widget_Base {

	/**
	 * Widget name.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'em_kit_image_slider';
	}

	/**
	 * Widget title.
	 *
	 * @return string
	 */
	public function get_title() {
		return esc_html__( 'Image Slider', 'magic-elements' );
	}

	/**
	 * Widget icon.
	 *
	 * @return string
	 */
	public function get_icon() {
		return 'eicon-slider-push magicelements-editor-widgets-icon';
	}

	/**
	 * Widget categories.
	 *
	 * @return array
	 */
	public function get_categories() {
		return [ 'magicelements-widgets' ];
	}

	/**
	 * Style dependencies.
	 *
	 * @return array
	 */
	public function get_style_depends() {
		return [ 'emk-image-slider', 'slick', 'slick-theme' ];
	}

	/**
	 * Script dependencies.
	 *
	 * @return array
	 */
	public function get_script_depends() {
		return [ 'emkit-image-slider', 'jquery', 'slick' ];
	}

	/**
	 * Register controls.
	 *
	 * @return void
	 */
	protected function register_controls() {
		$this->register_content_controls();
		$this->register_style_controls();
	}

	/**
	 * Content controls.
	 *
	 * @return void
	 */
	protected function register_content_controls() {
		$this->start_controls_section(
			'section_slides',
			[
				'label' => esc_html__( 'Slides', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'slide_image',
			[
				'label'   => esc_html__( 'Image', 'magic-elements' ),
				'type'    => Controls_Manager::MEDIA,
				'default' => [
					'url' => Utils::get_placeholder_image_src(),
				],
			]
		);

		$repeater->add_control(
			'slide_subtitle',
			[
				'label'       => esc_html__( 'Subtitle', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'default'     => esc_html__( 'News & stories', 'magic-elements' ),
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'slide_title',
			[
				'label'       => esc_html__( 'Title', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'default'     => esc_html__( 'TOKYO FESTIVAL', 'magic-elements' ),
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'slide_button_text',
			[
				'label'   => esc_html__( 'Button Text', 'magic-elements' ),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__( 'READ MORE', 'magic-elements' ),
			]
		);

		$repeater->add_control(
			'slide_button_link',
			[
				'label'       => esc_html__( 'Button Link', 'magic-elements' ),
				'type'        => Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'magic-elements' ),
				'default'     => [
					'url' => '#',
				],
			]
		);

		$this->add_control(
			'slides',
			[
				'label'       => esc_html__( 'Slides', 'magic-elements' ),
				'type'        => Controls_Manager::REPEATER,
				'fields'      => $repeater->get_controls(),
				'default'     => [
					[
						'slide_subtitle'    => esc_html__( 'News & stories', 'magic-elements' ),
						'slide_title'       => esc_html__( 'TOKYO FESTIVAL', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'READ MORE', 'magic-elements' ),
					],
					[
						'slide_subtitle'    => esc_html__( 'News & stories', 'magic-elements' ),
						'slide_title'       => esc_html__( 'NEW YORK NIGHTS', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'READ MORE', 'magic-elements' ),
					],
					[
						'slide_subtitle'    => esc_html__( 'News & stories', 'magic-elements' ),
						'slide_title'       => esc_html__( 'PARIS LIGHTS', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'READ MORE', 'magic-elements' ),
					],
				],
				'title_field' => '{{{ slide_title }}}',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_slider_settings',
			[
				'label' => esc_html__( 'Slider Settings', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_responsive_control(
			'slider_height',
			[
				'label'      => esc_html__( 'Height', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'vh' ],
				'range'      => [
					'px' => [
						'min' => 200,
						'max' => 1200,
					],
					'vh' => [
						'min' => 20,
						'max' => 100,
					],
				],
				'default'    => [
					'unit' => 'vh',
					'size' => 80,
				],
				'selectors'  => [
					'{{WRAPPER}} .emk-image-slider' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'autoplay',
			[
				'label'        => esc_html__( 'Autoplay', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'autoplay_speed',
			[
				'label'     => esc_html__( 'Autoplay Speed (ms)', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => 5000,
				'min'       => 1000,
				'max'       => 15000,
				'step'      => 100,
				'condition' => [
					'autoplay' => 'yes',
				],
			]
		);

		$this->add_control(
			'speed',
			[
				'label'   => esc_html__( 'Transition Speed (ms)', 'magic-elements' ),
				'type'    => Controls_Manager::NUMBER,
				'default' => 800,
				'min'     => 100,
				'max'     => 3000,
				'step'    => 50,
			]
		);

		$this->add_control(
			'fade',
			[
				'label'        => esc_html__( 'Fade Effect', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'infinite',
			[
				'label'        => esc_html__( 'Infinite Loop', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'pause_on_hover',
			[
				'label'        => esc_html__( 'Pause on Hover', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
				'condition'    => [
					'autoplay' => 'yes',
				],
			]
		);

		$this->add_control(
			'show_arrows',
			[
				'label'        => esc_html__( 'Arrows', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => '',
			]
		);

		$this->add_control(
			'show_dots',
			[
				'label'        => esc_html__( 'Dots', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'zoom_effect',
			[
				'label'        => esc_html__( 'Zoom In Effect', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
				'separator'    => 'before',
			]
		);

		$this->add_control(
			'zoom_scale',
			[
				'label'     => esc_html__( 'Zoom Scale', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [
					'px' => [
						'min'  => 1.05,
						'max'  => 1.5,
						'step' => 0.01,
					],
				],
				'default'   => [
					'size' => 1.15,
				],
				'condition' => [
					'zoom_effect' => 'yes',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style controls.
	 *
	 * @return void
	 */
	protected function register_style_controls() {
		$this->start_controls_section(
			'section_content_style',
			[
				'label' => esc_html__( 'Content', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'content_align',
			[
				'label'        => esc_html__( 'Alignment', 'magic-elements' ),
				'type'         => Controls_Manager::CHOOSE,
				'options'      => [
					'left'   => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'  => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default'      => 'left',
				'prefix_class' => 'emk-slider-align-',
				'selectors'    => [
					'{{WRAPPER}} .emk-image-slider__content' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'content_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'default'    => [
					'top'      => '0',
					'right'    => '0',
					'bottom'   => '0',
					'left'     => '80',
					'unit'     => 'px',
					'isLinked' => false,
				],
				'selectors'  => [
					'{{WRAPPER}} .emk-image-slider__content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'overlay_color',
			[
				'label'     => esc_html__( 'Overlay Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(0,0,0,0.25)',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__overlay' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_subtitle_style',
			[
				'label' => esc_html__( 'Subtitle', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'subtitle_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__subtitle' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'subtitle_typography',
				'selector' => '{{WRAPPER}} .emk-image-slider__subtitle',
			]
		);

		$this->add_responsive_control(
			'subtitle_spacing',
			[
				'label'      => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range'      => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'default'    => [
					'size' => 12,
				],
				'selectors'  => [
					'{{WRAPPER}} .emk-image-slider__subtitle' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_title_style',
			[
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'title_typography',
				'selector' => '{{WRAPPER}} .emk-image-slider__title',
			]
		);

		$this->add_responsive_control(
			'title_spacing',
			[
				'label'      => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range'      => [
					'px' => [
						'min' => 0,
						'max' => 80,
					],
				],
				'default'    => [
					'size' => 24,
				],
				'selectors'  => [
					'{{WRAPPER}} .emk-image-slider__title' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button_style',
			[
				'label' => esc_html__( 'Button', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'selector' => '{{WRAPPER}} .emk-image-slider__btn',
			]
		);

		$this->add_responsive_control(
			'button_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em' ],
				'default'    => [
					'top'      => '12',
					'right'    => '28',
					'bottom'   => '12',
					'left'     => '28',
					'unit'     => 'px',
					'isLinked' => false,
				],
				'selectors'  => [
					'{{WRAPPER}} .emk-image-slider__btn' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->start_controls_tabs( 'button_style_tabs' );

		$this->start_controls_tab(
			'button_style_normal',
			[
				'label' => esc_html__( 'Normal', 'magic-elements' ),
			]
		);

		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__btn' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__btn' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'button_border',
				'selector' => '{{WRAPPER}} .emk-image-slider__btn',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'button_style_hover',
			[
				'label' => esc_html__( 'Hover', 'magic-elements' ),
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__btn:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__btn:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider__btn:hover' => 'border-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_dots_style',
			[
				'label'     => esc_html__( 'Dots', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_dots' => 'yes',
				],
			]
		);

		$this->add_control(
			'dots_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(255,255,255,0.5)',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider .slick-dots li button:before' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'dots_active_color',
			[
				'label'     => esc_html__( 'Active Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .emk-image-slider .slick-dots li.slick-active button:before' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Render widget output.
	 *
	 * @return void
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['slides'] ) ) {
			return;
		}

		$autoplay_speed = ! empty( $settings['autoplay_speed'] ) ? absint( $settings['autoplay_speed'] ) : 5000;
		$zoom_scale     = ! empty( $settings['zoom_scale']['size'] ) ? floatval( $settings['zoom_scale']['size'] ) : 1.15;

		$slider_settings = [
			'autoplay'      => ( 'yes' === $settings['autoplay'] ),
			'autoplaySpeed' => $autoplay_speed,
			'speed'         => ! empty( $settings['speed'] ) ? absint( $settings['speed'] ) : 800,
			'fade'          => ( 'yes' === $settings['fade'] ),
			'infinite'      => ( 'yes' === $settings['infinite'] ),
			'pauseOnHover'  => ( 'yes' === $settings['pause_on_hover'] ),
			'arrows'        => ( 'yes' === $settings['show_arrows'] ),
			'dots'          => ( 'yes' === $settings['show_dots'] ),
			'zoomEffect'    => ( 'yes' === $settings['zoom_effect'] ),
			'zoomScale'     => $zoom_scale,
			'zoomDuration'  => $autoplay_speed,
		];

		$this->add_render_attribute(
			'slider',
			[
				'class'         => 'emk-image-slider',
				'data-settings' => wp_json_encode( $slider_settings ),
			]
		);

		include __DIR__ . '/layouts/Image-Slider/image-slider.php';
	}
}
