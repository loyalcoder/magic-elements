<?php
/**
 * Elementor Hero Slider Widget.
 *
 * @package MagicElements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Css_Filter;
use Elementor\Group_Control_Typography;
use Elementor\Repeater;
use Elementor\Utils;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Hero Slider widget class.
 */
class Hero_Slider extends Widget_Base {

	/**
	 * Widget name.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'em_kit_hero_slider';
	}

	/**
	 * Widget title.
	 *
	 * @return string
	 */
	public function get_title() {
		return esc_html__( 'Hero Slider', 'magic-elements' );
	}

	/**
	 * Widget icon.
	 *
	 * @return string
	 */
	public function get_icon() {
		return 'eicon-slides magicelements-editor-widgets-icon';
	}

	/**
	 * Widget categories.
	 *
	 * @return array
	 */
	public function get_categories() {
		return array( 'magicelements-widgets' );
	}

	/**
	 * Widget keywords.
	 *
	 * @return array
	 */
	public function get_keywords() {
		return array( 'hero', 'slider', 'banner', 'movie', 'carousel', 'cinema' );
	}

	/**
	 * Script dependencies.
	 *
	 * @return array
	 */
	public function get_script_depends() {
		return array( 'emkit-hero-slider', 'jquery' );
	}

	/**
	 * Style dependencies.
	 *
	 * @return array
	 */
	public function get_style_depends() {
		return array( 'emk-hero-slider' );
	}

	/**
	 * Register controls.
	 *
	 * @return void
	 */
	protected function register_controls() {
		$this->register_slides_controls();
		$this->register_slider_settings_controls();
		$this->register_layout_controls();
		$this->register_style_slider_controls();
		$this->register_style_overlay_controls();
		$this->register_style_foreground_controls();
		$this->register_style_content_box_controls();
		$this->register_style_title_controls();
		$this->register_style_meta_controls();
		$this->register_style_description_controls();
		$this->register_style_info_controls();
		$this->register_style_button_controls();
		$this->register_style_credits_controls();
		$this->register_style_pagination_controls();
	}

	/**
	 * Slides content controls.
	 *
	 * @return void
	 */
	protected function register_slides_controls() {
		$this->start_controls_section(
			'section_slides',
			array(
				'label' => esc_html__( 'Slides', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'slide_background',
			array(
				'label'   => esc_html__( 'Background Image', 'magic-elements' ),
				'type'    => Controls_Manager::MEDIA,
				'default' => array(
					'url' => Utils::get_placeholder_image_src(),
				),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_foreground',
			array(
				'label'   => esc_html__( 'Foreground Image (Character Cutout)', 'magic-elements' ),
				'type'    => Controls_Manager::MEDIA,
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_title',
			array(
				'label'       => esc_html__( 'Title', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'default'     => esc_html__( 'SAFE OF CITY-2', 'magic-elements' ),
				'label_block' => true,
				'dynamic'     => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_date',
			array(
				'label'   => esc_html__( 'Date', 'magic-elements' ),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__( '26 October, 2021', 'magic-elements' ),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_categories',
			array(
				'label'       => esc_html__( 'Categories / Genres', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'default'     => esc_html__( 'Action, Drama, Thriller', 'magic-elements' ),
				'label_block' => true,
				'dynamic'     => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_description',
			array(
				'label'   => esc_html__( 'Description', 'magic-elements' ),
				'type'    => Controls_Manager::TEXTAREA,
				'rows'    => 4,
				'default' => esc_html__( 'Stream full season exclusive series, movies, kids content, and more. Watch now on any screen, anytime, anywhere.', 'magic-elements' ),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_runtime',
			array(
				'label'   => esc_html__( 'Runtime', 'magic-elements' ),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__( '2hr : 30Mins', 'magic-elements' ),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_rating',
			array(
				'label'   => esc_html__( 'Rating Text', 'magic-elements' ),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__( '(4.9+ IDMb Rating)', 'magic-elements' ),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_button_text',
			array(
				'label'   => esc_html__( 'Button Text', 'magic-elements' ),
				'type'    => Controls_Manager::TEXT,
				'default' => esc_html__( 'Watch Now', 'magic-elements' ),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'slide_button_link',
			array(
				'label'   => esc_html__( 'Button Link', 'magic-elements' ),
				'type'    => Controls_Manager::URL,
				'default' => array(
					'url' => '#',
				),
				'dynamic' => array( 'active' => true ),
			)
		);

		$repeater->add_control(
			'credits_heading',
			array(
				'label'     => esc_html__( 'Credits (Left Sidebar)', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$repeater->add_control(
			'slide_credits',
			array(
				'label'       => esc_html__( 'Credits List', 'magic-elements' ),
				'type'        => Controls_Manager::TEXTAREA,
				'rows'        => 5,
				'description' => esc_html__( 'One credit per line. Format: Name | Role', 'magic-elements' ),
				'default'     => "Scort De Cena | Director\nKevin Diesel | Producer\nBravo Daniel | Actor",
				'placeholder' => "Name | Role\nName | Role",
			)
		);

		$this->add_control(
			'slides',
			array(
				'label'       => esc_html__( 'Slides', 'magic-elements' ),
				'type'        => Controls_Manager::REPEATER,
				'fields'      => $repeater->get_controls(),
				'default'     => array(
					array(
						'slide_title'       => esc_html__( 'SAFE OF CITY-2', 'magic-elements' ),
						'slide_date'        => esc_html__( '26 October, 2021', 'magic-elements' ),
						'slide_categories'  => esc_html__( 'Action, Drama, Thriller', 'magic-elements' ),
						'slide_description' => esc_html__( 'Stream full season exclusive series, movies, kids content, and more. Watch now on any screen, anytime, anywhere.', 'magic-elements' ),
						'slide_runtime'     => esc_html__( '2hr : 30Mins', 'magic-elements' ),
						'slide_rating'      => esc_html__( '(4.9+ IDMb Rating)', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'Watch Now', 'magic-elements' ),
						'slide_credits'     => "Scort De Cena | Director\nKevin Diesel | Producer\nBravo Daniel | Actor",
					),
					array(
						'slide_title'       => esc_html__( 'DARK NIGHT RISE', 'magic-elements' ),
						'slide_date'        => esc_html__( '15 March, 2022', 'magic-elements' ),
						'slide_categories'  => esc_html__( 'Action, Sci-Fi', 'magic-elements' ),
						'slide_description' => esc_html__( 'An epic adventure through the shadows of the city. Exclusive premiere streaming now.', 'magic-elements' ),
						'slide_runtime'     => esc_html__( '2hr : 15Mins', 'magic-elements' ),
						'slide_rating'      => esc_html__( '(4.7+ IDMb Rating)', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'Watch Now', 'magic-elements' ),
						'slide_credits'     => "Alex Rivera | Director\nSam Ortega | Producer\nJordan Lee | Actor",
					),
					array(
						'slide_title'       => esc_html__( 'LAST HORIZON', 'magic-elements' ),
						'slide_date'        => esc_html__( '08 July, 2023', 'magic-elements' ),
						'slide_categories'  => esc_html__( 'Drama, Thriller', 'magic-elements' ),
						'slide_description' => esc_html__( 'When the world ends, one story begins. Stream the complete series today.', 'magic-elements' ),
						'slide_runtime'     => esc_html__( '1hr : 55Mins', 'magic-elements' ),
						'slide_rating'      => esc_html__( '(4.8+ IDMb Rating)', 'magic-elements' ),
						'slide_button_text' => esc_html__( 'Watch Now', 'magic-elements' ),
						'slide_credits'     => "Mia Chen | Director\nChris Vale | Producer\nNina Brooks | Actor",
					),
				),
				'title_field' => '{{{ slide_title }}}',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Slider settings controls.
	 *
	 * @return void
	 */
	protected function register_slider_settings_controls() {
		$this->start_controls_section(
			'section_slider_settings',
			array(
				'label' => esc_html__( 'Slider Settings', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'autoplay',
			array(
				'label'        => esc_html__( 'Autoplay', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);

		$this->add_control(
			'autoplay_speed',
			array(
				'label'     => esc_html__( 'Autoplay Speed (ms)', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => 5000,
				'min'       => 1000,
				'max'       => 20000,
				'step'      => 500,
				'condition' => array(
					'autoplay' => 'yes',
				),
			)
		);

		$this->add_control(
			'loop',
			array(
				'label'        => esc_html__( 'Infinite Loop', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);

		$this->add_control(
			'pause_on_hover',
			array(
				'label'        => esc_html__( 'Pause on Hover', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
				'condition'    => array(
					'autoplay' => 'yes',
				),
			)
		);

		$this->add_control(
			'transition_effect',
			array(
				'label'   => esc_html__( 'Transition Effect', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'fade',
				'options' => array(
					'fade'  => esc_html__( 'Fade', 'magic-elements' ),
					'slide' => esc_html__( 'Slide', 'magic-elements' ),
				),
			)
		);

		$this->add_control(
			'transition_speed',
			array(
				'label'   => esc_html__( 'Transition Speed (ms)', 'magic-elements' ),
				'type'    => Controls_Manager::NUMBER,
				'default' => 700,
				'min'     => 100,
				'max'     => 3000,
				'step'    => 50,
			)
		);

		$this->add_control(
			'show_pagination',
			array(
				'label'        => esc_html__( 'Show Pagination', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);

		$this->add_control(
			'show_credits',
			array(
				'label'        => esc_html__( 'Show Credits Sidebar', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);

		$this->add_control(
			'show_foreground',
			array(
				'label'        => esc_html__( 'Show Foreground Image', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Layout controls.
	 *
	 * @return void
	 */
	protected function register_layout_controls() {
		$this->start_controls_section(
			'section_layout',
			array(
				'label' => esc_html__( 'Layout', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_responsive_control(
			'slider_height',
			array(
				'label'      => esc_html__( 'Slider Height', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', 'vh', '%' ),
				'range'      => array(
					'px' => array(
						'min' => 300,
						'max' => 1200,
					),
					'vh' => array(
						'min' => 30,
						'max' => 100,
					),
				),
				'default'    => array(
					'unit' => 'vh',
					'size' => 85,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slider' => 'height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'foreground_position',
			array(
				'label'   => esc_html__( 'Foreground Position', 'magic-elements' ),
				'type'    => Controls_Manager::CHOOSE,
				'options' => array(
					'left'   => array(
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'default' => 'right',
				'toggle'  => false,
			)
		);

		$this->add_responsive_control(
			'content_position_left',
			array(
				'label'      => esc_html__( 'Content Position (Left)', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( '%', 'px' ),
				'range'      => array(
					'%'  => array(
						'min' => 5,
						'max' => 40,
					),
					'px' => array(
						'min' => 40,
						'max' => 400,
					),
				),
				'default'    => array(
					'unit' => '%',
					'size' => 15,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__inner' => 'padding-left: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'content_position_right',
			array(
				'label'      => esc_html__( 'Content Space (Right)', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( '%', 'px' ),
				'range'      => array(
					'%'  => array(
						'min' => 5,
						'max' => 50,
					),
					'px' => array(
						'min' => 40,
						'max' => 400,
					),
				),
				'default'    => array(
					'unit' => '%',
					'size' => 10,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__inner' => 'padding-right: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'content_horizontal_align',
			array(
				'label'   => esc_html__( 'Content Horizontal Align', 'magic-elements' ),
				'type'    => Controls_Manager::CHOOSE,
				'options' => array(
					'flex-start' => array(
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center'     => array(
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-h-align-center',
					),
					'flex-end'   => array(
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'default'   => 'flex-start',
				'toggle'    => false,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__inner' => 'justify-content: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'content_vertical_align',
			array(
				'label'   => esc_html__( 'Content Vertical Align', 'magic-elements' ),
				'type'    => Controls_Manager::CHOOSE,
				'options' => array(
					'flex-start' => array(
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					),
					'center'     => array(
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					),
					'flex-end'   => array(
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					),
				),
				'default'   => 'center',
				'toggle'    => false,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__inner' => 'align-items: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'parallax',
			array(
				'label'        => esc_html__( 'Parallax Background', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'magic-elements' ),
				'label_off'    => esc_html__( 'No', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => '',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Slider / background style.
	 *
	 * @return void
	 */
	protected function register_style_slider_controls() {
		$this->start_controls_section(
			'section_style_slider',
			array(
				'label' => esc_html__( 'Slider / Background', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'bg_position',
			array(
				'label'     => esc_html__( 'Background Position', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'center center',
				'options'   => array(
					'center center' => esc_html__( 'Center Center', 'magic-elements' ),
					'center left'   => esc_html__( 'Center Left', 'magic-elements' ),
					'center right'  => esc_html__( 'Center Right', 'magic-elements' ),
					'top center'    => esc_html__( 'Top Center', 'magic-elements' ),
					'top left'      => esc_html__( 'Top Left', 'magic-elements' ),
					'top right'     => esc_html__( 'Top Right', 'magic-elements' ),
					'bottom center' => esc_html__( 'Bottom Center', 'magic-elements' ),
					'bottom left'   => esc_html__( 'Bottom Left', 'magic-elements' ),
					'bottom right'  => esc_html__( 'Bottom Right', 'magic-elements' ),
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__bg' => 'background-position: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'bg_size',
			array(
				'label'     => esc_html__( 'Background Size', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'cover',
				'options'   => array(
					'cover'   => esc_html__( 'Cover', 'magic-elements' ),
					'contain' => esc_html__( 'Contain', 'magic-elements' ),
					'auto'    => esc_html__( 'Auto', 'magic-elements' ),
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__bg' => 'background-size: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			array(
				'name'     => 'bg_css_filters',
				'selector' => '{{WRAPPER}} .emk-hero-slide__bg',
			)
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			array(
				'name'     => 'slider_border',
				'selector' => '{{WRAPPER}} .emk-hero-slider',
			)
		);

		$this->add_responsive_control(
			'slider_border_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em' ),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slider' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}; overflow: hidden;',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Gradient overlay style.
	 *
	 * @return void
	 */
	protected function register_style_overlay_controls() {
		$this->start_controls_section(
			'section_style_gradient',
			array(
				'label' => esc_html__( 'Gradient Overlay', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			array(
				'name'     => 'gradient_overlay',
				'types'    => array( 'classic', 'gradient' ),
				'selector' => '{{WRAPPER}} .emk-hero-slide__gradient',
				'exclude'  => array( 'image' ),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Foreground image style.
	 *
	 * @return void
	 */
	protected function register_style_foreground_controls() {
		$this->start_controls_section(
			'section_style_foreground',
			array(
				'label'     => esc_html__( 'Foreground Image', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => array(
					'show_foreground' => 'yes',
				),
			)
		);

		$this->add_responsive_control(
			'foreground_width',
			array(
				'label'      => esc_html__( 'Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%' ),
				'range'      => array(
					'px' => array(
						'min' => 100,
						'max' => 900,
					),
					'%'  => array(
						'min' => 10,
						'max' => 100,
					),
				),
				'default'    => array(
					'unit' => '%',
					'size' => 42,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__foreground' => 'width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'foreground_offset_x',
			array(
				'label'      => esc_html__( 'Horizontal Offset', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%' ),
				'range'      => array(
					'px' => array(
						'min' => -200,
						'max' => 200,
					),
					'%'  => array(
						'min' => -30,
						'max' => 30,
					),
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__foreground' => 'transform: translateX({{SIZE}}{{UNIT}});',
				),
			)
		);

		$this->add_responsive_control(
			'foreground_offset_y',
			array(
				'label'      => esc_html__( 'Vertical Offset', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%' ),
				'range'      => array(
					'px' => array(
						'min' => -200,
						'max' => 200,
					),
					'%'  => array(
						'min' => -30,
						'max' => 30,
					),
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__foreground img' => 'transform: translateY({{SIZE}}{{UNIT}});',
				),
			)
		);

		$this->add_control(
			'foreground_opacity',
			array(
				'label'     => esc_html__( 'Opacity', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min'  => 0,
						'max'  => 1,
						'step' => 0.05,
					),
				),
				'default'   => array(
					'size' => 1,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__foreground' => 'opacity: {{SIZE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			array(
				'name'     => 'foreground_css_filters',
				'selector' => '{{WRAPPER}} .emk-hero-slide__foreground img',
			)
		);

		$this->add_control(
			'foreground_z_index',
			array(
				'label'     => esc_html__( 'Z-Index', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => 4,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__foreground' => 'z-index: {{VALUE}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Content box style.
	 *
	 * @return void
	 */
	protected function register_style_content_box_controls() {
		$this->start_controls_section(
			'section_style_content_box',
			array(
				'label' => esc_html__( 'Content Box', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control(
			'content_max_width',
			array(
				'label'      => esc_html__( 'Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%', 'vw' ),
				'range'      => array(
					'px' => array(
						'min'  => 200,
						'max'  => 1200,
						'step' => 1,
					),
					'%'  => array(
						'min' => 20,
						'max' => 100,
					),
					'vw' => array(
						'min' => 20,
						'max' => 100,
					),
				),
				'default'    => array(
					'unit' => 'px',
					'size' => 410,
				),
				'tablet_default' => array(
					'unit' => 'px',
					'size' => 360,
				),
				'mobile_default' => array(
					'unit' => '%',
					'size' => 100,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__content' => 'width: {{SIZE}}{{UNIT}} !important; max-width: {{SIZE}}{{UNIT}} !important; flex: 0 1 auto;',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			array(
				'name'     => 'content_box_bg',
				'types'    => array( 'classic', 'gradient' ),
				'selector' => '{{WRAPPER}} .emk-hero-slide__content',
			)
		);

		$this->add_responsive_control(
			'content_box_padding',
			array(
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em' ),
				'default'    => array(
					'top'      => 40,
					'right'    => 40,
					'bottom'   => 40,
					'left'     => 40,
					'unit'     => 'px',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'content_box_margin',
			array(
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em' ),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			array(
				'name'     => 'content_box_border',
				'selector' => '{{WRAPPER}} .emk-hero-slide__content',
			)
		);

		$this->add_responsive_control(
			'content_box_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			array(
				'name'     => 'content_box_shadow',
				'selector' => '{{WRAPPER}} .emk-hero-slide__content',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Title style.
	 *
	 * @return void
	 */
	protected function register_style_title_controls() {
		$this->start_controls_section(
			'section_style_title',
			array(
				'label' => esc_html__( 'Title', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'title_color',
			array(
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__title' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'title_typography',
				'selector' => '{{WRAPPER}} .emk-hero-slide__title',
			)
		);

		$this->add_responsive_control(
			'title_spacing',
			array(
				'label'      => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 80,
					),
				),
				'default'    => array(
					'size' => 16,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__title' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Meta (date / categories) style.
	 *
	 * @return void
	 */
	protected function register_style_meta_controls() {
		$this->start_controls_section(
			'section_style_meta',
			array(
				'label' => esc_html__( 'Date & Categories', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'meta_color',
			array(
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__meta' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'meta_separator_color',
			array(
				'label'     => esc_html__( 'Separator Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#e31c23',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__meta-sep' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_responsive_control(
			'meta_separator_width',
			array(
				'label'      => esc_html__( 'Separator Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 1,
						'max' => 8,
					),
				),
				'default'    => array(
					'size' => 2,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__meta-sep' => 'width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'meta_separator_height',
			array(
				'label'      => esc_html__( 'Separator Height', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 8,
						'max' => 40,
					),
				),
				'default'    => array(
					'size' => 14,
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__meta-sep' => 'height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'meta_typography',
				'selector' => '{{WRAPPER}} .emk-hero-slide__meta',
			)
		);

		$this->add_responsive_control(
			'meta_spacing',
			array(
				'label'     => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 0,
						'max' => 60,
					),
				),
				'default'   => array(
					'size' => 18,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__meta' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Description style.
	 *
	 * @return void
	 */
	protected function register_style_description_controls() {
		$this->start_controls_section(
			'section_style_description',
			array(
				'label' => esc_html__( 'Description', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'description_color',
			array(
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(255,255,255,0.85)',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__description' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'description_typography',
				'selector' => '{{WRAPPER}} .emk-hero-slide__description',
			)
		);

		$this->add_responsive_control(
			'description_spacing',
			array(
				'label'     => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 0,
						'max' => 60,
					),
				),
				'default'   => array(
					'size' => 22,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__description' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Runtime / rating style.
	 *
	 * @return void
	 */
	protected function register_style_info_controls() {
		$this->start_controls_section(
			'section_style_info',
			array(
				'label' => esc_html__( 'Runtime & Rating', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'info_color',
			array(
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__info' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'info_typography',
				'selector' => '{{WRAPPER}} .emk-hero-slide__info',
			)
		);

		$this->add_responsive_control(
			'info_gap',
			array(
				'label'     => esc_html__( 'Item Gap', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 0,
						'max' => 60,
					),
				),
				'default'   => array(
					'size' => 20,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__info' => 'gap: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Button style.
	 *
	 * @return void
	 */
	protected function register_style_button_controls() {
		$this->start_controls_section(
			'section_style_button',
			array(
				'label' => esc_html__( 'Button / Watch Now', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'button_typography',
				'selector' => '{{WRAPPER}} .emk-hero-slide__btn',
			)
		);

		$this->start_controls_tabs( 'button_tabs' );

		$this->start_controls_tab(
			'button_tab_normal',
			array(
				'label' => esc_html__( 'Normal', 'magic-elements' ),
			)
		);

		$this->add_control(
			'button_color',
			array(
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__btn' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'button_bg',
			array(
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__btn' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'button_tab_hover',
			array(
				'label' => esc_html__( 'Hover', 'magic-elements' ),
			)
		);

		$this->add_control(
			'button_color_hover',
			array(
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#e31c23',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__btn:hover' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'button_bg_hover',
			array(
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-slide__btn:hover' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();
		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Border::get_type(),
			array(
				'name'      => 'button_border',
				'selector'  => '{{WRAPPER}} .emk-hero-slide__btn',
				'separator' => 'before',
			)
		);

		$this->add_responsive_control(
			'button_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__btn' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'button_padding',
			array(
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', 'em' ),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-slide__btn' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Credits sidebar style.
	 *
	 * @return void
	 */
	protected function register_style_credits_controls() {
		$this->start_controls_section(
			'section_style_credits',
			array(
				'label'     => esc_html__( 'Credits Sidebar', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => array(
					'show_credits' => 'yes',
				),
			)
		);

		$this->add_control(
			'credit_name_color',
			array(
				'label'     => esc_html__( 'Name Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-credits__name' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'credit_name_typography',
				'label'    => esc_html__( 'Name Typography', 'magic-elements' ),
				'selector' => '{{WRAPPER}} .emk-hero-credits__name',
			)
		);

		$this->add_control(
			'credit_role_color',
			array(
				'label'     => esc_html__( 'Role Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(255,255,255,0.55)',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-credits__role' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'credit_role_typography',
				'label'    => esc_html__( 'Role Typography', 'magic-elements' ),
				'selector' => '{{WRAPPER}} .emk-hero-credits__role',
			)
		);

		$this->add_control(
			'credit_line_color',
			array(
				'label'     => esc_html__( 'Divider Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#e31c23',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-credits__item:not(:last-child)::after' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_responsive_control(
			'credit_divider_height',
			array(
				'label'      => esc_html__( 'Divider Width', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 8,
						'max' => 60,
					),
				),
				'default'    => array(
					'size' => 18,
					'unit' => 'px',
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-credits__item:not(:last-child)::after' => 'width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'credits_offset_x',
			array(
				'label'      => esc_html__( 'Left Offset', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 120,
					),
				),
				'default'    => array(
					'size' => 28,
					'unit' => 'px',
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-credits' => 'left: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'credits_gap',
			array(
				'label'     => esc_html__( 'Item Gap', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 20,
						'max' => 100,
					),
				),
				'default'   => array(
					'size' => 40,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-credits__item:not(:last-child)' => 'padding-bottom: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Pagination style.
	 *
	 * @return void
	 */
	protected function register_style_pagination_controls() {
		$this->start_controls_section(
			'section_style_pagination',
			array(
				'label'     => esc_html__( 'Pagination', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => array(
					'show_pagination' => 'yes',
				),
			)
		);

		$this->add_control(
			'pagination_color',
			array(
				'label'     => esc_html__( 'Number Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(255,255,255,0.5)',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination__btn' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'pagination_active_color',
			array(
				'label'     => esc_html__( 'Active Number Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination__btn.is-active' => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'pagination_ring_color',
			array(
				'label'     => esc_html__( 'Active Ring Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#e31c23',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination__btn.is-active' => 'border-color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'pagination_line_color',
			array(
				'label'     => esc_html__( 'Connector Line Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => 'rgba(255,255,255,0.25)',
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination::before' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'pagination_typography',
				'selector' => '{{WRAPPER}} .emk-hero-pagination__btn',
			)
		);

		$this->add_responsive_control(
			'pagination_size',
			array(
				'label'     => esc_html__( 'Circle Size', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 24,
						'max' => 80,
					),
				),
				'default'   => array(
					'size' => 42,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination__btn' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'pagination_ring_width',
			array(
				'label'     => esc_html__( 'Ring Width', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 1,
						'max' => 6,
					),
				),
				'default'   => array(
					'size' => 1,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination__btn.is-active' => 'border-width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'pagination_offset_x',
			array(
				'label'      => esc_html__( 'Right Offset', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 120,
					),
				),
				'default'    => array(
					'size' => 28,
					'unit' => 'px',
				),
				'selectors'  => array(
					'{{WRAPPER}} .emk-hero-pagination' => 'right: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'pagination_gap',
			array(
				'label'     => esc_html__( 'Item Gap', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => array(
					'px' => array(
						'min' => 8,
						'max' => 60,
					),
				),
				'default'   => array(
					'size' => 20,
				),
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination' => 'gap: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'pagination_z_index',
			array(
				'label'     => esc_html__( 'Z-Index', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => 5,
				'selectors' => array(
					'{{WRAPPER}} .emk-hero-pagination' => 'z-index: {{VALUE}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Parse credits textarea into name/role pairs.
	 *
	 * @param string $raw Raw credits text.
	 * @return array
	 */
	protected function parse_credits( $raw ) {
		$credits = array();
		$lines   = preg_split( '/\r\n|\r|\n/', (string) $raw );

		if ( empty( $lines ) ) {
			return $credits;
		}

		foreach ( $lines as $line ) {
			$line = trim( $line );
			if ( '' === $line ) {
				continue;
			}

			$parts = array_map( 'trim', explode( '|', $line, 2 ) );
			$credits[] = array(
				'name' => isset( $parts[0] ) ? $parts[0] : '',
				'role' => isset( $parts[1] ) ? $parts[1] : '',
			);
		}

		return $credits;
	}

	/**
	 * Frontend render.
	 *
	 * @return void
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		$slides   = ! empty( $settings['slides'] ) ? $settings['slides'] : array();

		if ( empty( $slides ) ) {
			return;
		}

		$widget_id = $this->get_id();

		$this->add_render_attribute(
			'slider',
			array(
				'class'                   => array(
					'emk-hero-slider',
					'emk-hero-slider--' . $settings['transition_effect'],
					'emk-hero-slider--fg-' . $settings['foreground_position'],
				),
				'data-autoplay'           => ( 'yes' === $settings['autoplay'] ) ? 'true' : 'false',
				'data-autoplay-speed'     => absint( $settings['autoplay_speed'] ),
				'data-loop'               => ( 'yes' === $settings['loop'] ) ? 'true' : 'false',
				'data-pause-on-hover'     => ( 'yes' === $settings['pause_on_hover'] ) ? 'true' : 'false',
				'data-transition-speed'   => absint( $settings['transition_speed'] ),
				'data-effect'             => esc_attr( $settings['transition_effect'] ),
				'data-parallax'           => ( 'yes' === $settings['parallax'] ) ? 'true' : 'false',
				'id'                      => 'emk-hero-slider-' . esc_attr( $widget_id ),
			)
		);

		include __DIR__ . '/layouts/hero-slider/hero-slider.php';
	}
}
