<?php
/**
 * YouTube Feed Elementor widget.
 *
 * @package MagicElements
 */

namespace MagicElements\Elementor;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Background;
use MagicElements\YouTube\Api;
use MagicElements\YouTube\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * YouTube Feed widget.
 */
class YouTube_Feed extends Widget_Base {

	/**
	 * Widget name.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'myf-youtube-feed';
	}

	/**
	 * Widget title.
	 *
	 * @return string
	 */
	public function get_title() {
		return esc_html__( 'YouTube Feed', 'magic-elements' );
	}

	/**
	 * Widget icon.
	 *
	 * @return string
	 */
	public function get_icon() {
		return 'eicon-youtube';
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
	 * Widget keywords.
	 *
	 * @return array
	 */
	public function get_keywords() {
		return [ 'youtube', 'video', 'feed', 'channel', 'playlist', 'gallery' ];
	}

	/**
	 * Style dependencies.
	 *
	 * @return array
	 */
	public function get_style_depends() {
		return [ 'magic-elements-youtube-feed' ];
	}

	/**
	 * Script dependencies.
	 *
	 * @return array
	 */
	public function get_script_depends() {
		return [ 'magic-elements-youtube-feed' ];
	}

	/**
	 * Register widget controls.
	 *
	 * @return void
	 */
	protected function register_controls() {
		$this->register_source_controls();
		$this->register_layout_controls();
		$this->register_content_controls();
		$this->register_style_layout_controls();
		$this->register_style_card_controls();
		$this->register_style_thumbnail_controls();
		$this->register_style_title_controls();
		$this->register_style_description_controls();
		$this->register_style_meta_controls();
		$this->register_style_duration_controls();
	}

	/**
	 * Content tab: video source.
	 *
	 * @return void
	 */
	private function register_source_controls() {
		$this->start_controls_section(
			'section_source',
			[
				'label' => esc_html__( 'Video Source', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		if ( '' === Api::get_api_key() ) {
			$this->add_control(
				'api_key_notice',
				[
					'type'            => Controls_Manager::RAW_HTML,
					'raw'             => sprintf(
						/* translators: %s: settings page URL */
						esc_html__( 'YouTube API key is not set. Add it in %s first.', 'magic-elements' ),
						'<a href="' . esc_url( admin_url( 'admin.php?page=magic-elements-youtube' ) ) . '" target="_blank">' . esc_html__( 'Magic Elements → YouTube API', 'magic-elements' ) . '</a>'
					),
					'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
				]
			);
		}

		$this->add_control(
			'source',
			[
				'label'   => esc_html__( 'Source', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'channel',
				'options' => [
					'channel'  => esc_html__( 'Channel', 'magic-elements' ),
					'playlist' => esc_html__( 'Playlist', 'magic-elements' ),
					'search'   => esc_html__( 'Search Query', 'magic-elements' ),
					'videos'   => esc_html__( 'Specific Videos', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'channel_id',
			[
				'label'       => esc_html__( 'Channel ID', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => 'UCxxxxxxxxxxxxxxxxxxxxxx',
				'description' => esc_html__( 'Leave empty to use the default channel from plugin settings.', 'magic-elements' ),
				'ai'          => [ 'active' => false ],
				'condition'   => [ 'source' => 'channel' ],
			]
		);

		$this->add_control(
			'playlist_id',
			[
				'label'       => esc_html__( 'Playlist ID', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => 'PLxxxxxxxxxxxxxxxxxxxxxx',
				'description' => esc_html__( 'Leave empty to use the default playlist from plugin settings.', 'magic-elements' ),
				'ai'          => [ 'active' => false ],
				'condition'   => [ 'source' => 'playlist' ],
			]
		);

		$this->add_control(
			'search_query',
			[
				'label'       => esc_html__( 'Search Query', 'magic-elements' ),
				'type'        => Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'e.g. wordpress tutorials', 'magic-elements' ),
				'condition'   => [ 'source' => 'search' ],
			]
		);

		$this->add_control(
			'search_order',
			[
				'label'     => esc_html__( 'Order By', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'relevance',
				'options'   => [
					'relevance' => esc_html__( 'Relevance', 'magic-elements' ),
					'date'      => esc_html__( 'Date', 'magic-elements' ),
					'viewCount' => esc_html__( 'View Count', 'magic-elements' ),
					'rating'    => esc_html__( 'Rating', 'magic-elements' ),
					'title'     => esc_html__( 'Title', 'magic-elements' ),
				],
				'condition' => [ 'source' => 'search' ],
			]
		);

		$this->add_control(
			'search_quota_notice',
			[
				'type'            => Controls_Manager::RAW_HTML,
				'raw'             => esc_html__( 'Note: search queries use 100 API quota units per request. Prefer Channel or Playlist sources when possible.', 'magic-elements' ),
				'content_classes' => 'elementor-descriptor',
				'condition'       => [ 'source' => 'search' ],
			]
		);

		$this->add_control(
			'video_ids',
			[
				'label'       => esc_html__( 'Video IDs', 'magic-elements' ),
				'type'        => Controls_Manager::TEXTAREA,
				'placeholder' => 'dQw4w9WgXcQ, jNQXAC9IVRw',
				'description' => esc_html__( 'Comma separated YouTube video IDs.', 'magic-elements' ),
				'ai'          => [ 'active' => false ],
				'condition'   => [ 'source' => 'videos' ],
			]
		);

		$this->add_control(
			'limit',
			[
				'label'     => esc_html__( 'Number of Videos', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'min'       => 1,
				'max'       => 50,
				'default'   => 6,
				'condition' => [ 'source!' => 'videos' ],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Content tab: layout.
	 *
	 * @return void
	 */
	private function register_layout_controls() {
		$this->start_controls_section(
			'section_layout',
			[
				'label' => esc_html__( 'Layout', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'layout',
			[
				'label'   => esc_html__( 'Layout', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'grid',
				'options' => [
					'grid' => esc_html__( 'Grid', 'magic-elements' ),
					'list' => esc_html__( 'List', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'theme',
			[
				'label'        => esc_html__( 'Theme', 'magic-elements' ),
				'type'         => Controls_Manager::CHOOSE,
				'default'      => 'light',
				'toggle'       => false,
				'options'      => [
					'light' => [
						'title' => esc_html__( 'Light', 'magic-elements' ),
						'icon'  => 'eicon-light-mode',
					],
					'dark'  => [
						'title' => esc_html__( 'Dark', 'magic-elements' ),
						'icon'  => 'eicon-dark-mode',
					],
				],
				'prefix_class' => 'myf-theme-',
			]
		);

		$this->add_responsive_control(
			'columns',
			[
				'label'          => esc_html__( 'Columns', 'magic-elements' ),
				'type'           => Controls_Manager::SELECT,
				'default'        => '3',
				'tablet_default' => '2',
				'mobile_default' => '1',
				'options'        => [
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
				],
				'selectors'      => [
					'{{WRAPPER}} .myf-feed--grid' => 'grid-template-columns: repeat({{VALUE}}, 1fr);',
				],
				'condition'      => [ 'layout' => 'grid' ],
			]
		);

		$this->add_control(
			'thumbnail_quality',
			[
				'label'   => esc_html__( 'Thumbnail Quality', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'high',
				'options' => [
					'default'  => esc_html__( 'Default (120x90)', 'magic-elements' ),
					'medium'   => esc_html__( 'Medium (320x180)', 'magic-elements' ),
					'high'     => esc_html__( 'High (480x360)', 'magic-elements' ),
					'standard' => esc_html__( 'Standard (640x480)', 'magic-elements' ),
					'maxres'   => esc_html__( 'Max Resolution (1280x720)', 'magic-elements' ),
				],
			]
		);

		$this->add_control(
			'click_action',
			[
				'label'   => esc_html__( 'On Click', 'magic-elements' ),
				'type'    => Controls_Manager::SELECT,
				'default' => 'lightbox',
				'options' => [
					'lightbox' => esc_html__( 'Play in Lightbox', 'magic-elements' ),
					'inline'   => esc_html__( 'Play Inline', 'magic-elements' ),
					'youtube'  => esc_html__( 'Open on YouTube', 'magic-elements' ),
					'none'     => esc_html__( 'None', 'magic-elements' ),
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Content tab: content elements toggles.
	 *
	 * @return void
	 */
	private function register_content_controls() {
		$this->start_controls_section(
			'section_content_elements',
			[
				'label' => esc_html__( 'Content', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'show_title',
			[
				'label'        => esc_html__( 'Title', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'title_tag',
			[
				'label'     => esc_html__( 'Title HTML Tag', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'h3',
				'options'   => [
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
				'condition' => [ 'show_title' => 'yes' ],
			]
		);

		$this->add_control(
			'title_length',
			[
				'label'       => esc_html__( 'Title Max Words', 'magic-elements' ),
				'type'        => Controls_Manager::NUMBER,
				'min'         => 0,
				'default'     => 0,
				'description' => esc_html__( '0 = full title.', 'magic-elements' ),
				'condition'   => [ 'show_title' => 'yes' ],
			]
		);

		$this->add_control(
			'show_description',
			[
				'label'        => esc_html__( 'Description', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => '',
				'separator'    => 'before',
			]
		);

		$this->add_control(
			'description_length',
			[
				'label'     => esc_html__( 'Description Max Words', 'magic-elements' ),
				'type'      => Controls_Manager::NUMBER,
				'min'       => 1,
				'default'   => 15,
				'condition' => [ 'show_description' => 'yes' ],
			]
		);

		$this->add_control(
			'show_date',
			[
				'label'        => esc_html__( 'Published Date', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => 'yes',
				'separator'    => 'before',
			]
		);

		$this->add_control(
			'date_format',
			[
				'label'     => esc_html__( 'Date Format', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'relative',
				'options'   => [
					'relative' => esc_html__( 'Relative (2 days ago)', 'magic-elements' ),
					'absolute' => esc_html__( 'Site Date Format', 'magic-elements' ),
				],
				'condition' => [ 'show_date' => 'yes' ],
			]
		);

		$this->add_control(
			'show_views',
			[
				'label'        => esc_html__( 'View Count', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->add_control(
			'show_likes',
			[
				'label'        => esc_html__( 'Like Count', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => '',
			]
		);

		$this->add_control(
			'show_comments',
			[
				'label'        => esc_html__( 'Comment Count', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => '',
			]
		);

		$this->add_control(
			'show_channel',
			[
				'label'        => esc_html__( 'Channel Name', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => '',
			]
		);

		$this->add_control(
			'show_duration',
			[
				'label'        => esc_html__( 'Duration Badge', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => 'yes',
				'separator'    => 'before',
			]
		);

		$this->add_control(
			'show_play_icon',
			[
				'label'        => esc_html__( 'Play Icon', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: layout spacing.
	 *
	 * @return void
	 */
	private function register_style_layout_controls() {
		$this->start_controls_section(
			'section_style_layout',
			[
				'label' => esc_html__( 'Layout', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'column_gap',
			[
				'label'      => esc_html__( 'Columns Gap', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [ 'px' => [ 'min' => 0, 'max' => 100 ] ],
				'default'    => [ 'size' => 24, 'unit' => 'px' ],
				'selectors'  => [
					'{{WRAPPER}} .myf-feed' => 'column-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'row_gap',
			[
				'label'      => esc_html__( 'Rows Gap', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [ 'px' => [ 'min' => 0, 'max' => 100 ] ],
				'default'    => [ 'size' => 24, 'unit' => 'px' ],
				'selectors'  => [
					'{{WRAPPER}} .myf-feed' => 'row-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'content_align',
			[
				'label'     => esc_html__( 'Content Alignment', 'magic-elements' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
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
				'selectors' => [
					'{{WRAPPER}} .myf-card__body' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: card.
	 *
	 * @return void
	 */
	private function register_style_card_controls() {
		$this->start_controls_section(
			'section_style_card',
			[
				'label' => esc_html__( 'Card', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs( 'card_style_tabs' );

		$this->start_controls_tab(
			'card_style_normal',
			[ 'label' => esc_html__( 'Normal', 'magic-elements' ) ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'card_background',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .myf-card',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'card_border',
				'selector' => '{{WRAPPER}} .myf-card',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name'     => 'card_box_shadow',
				'selector' => '{{WRAPPER}} .myf-card',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'card_style_hover',
			[ 'label' => esc_html__( 'Hover', 'magic-elements' ) ]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'     => 'card_background_hover',
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .myf-card:hover',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'     => 'card_border_hover',
				'selector' => '{{WRAPPER}} .myf-card:hover',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name'     => 'card_box_shadow_hover',
				'selector' => '{{WRAPPER}} .myf-card:hover',
			]
		);

		$this->add_control(
			'card_hover_transform',
			[
				'label'     => esc_html__( 'Hover Lift (px)', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [ 'px' => [ 'min' => 0, 'max' => 30 ] ],
				'selectors' => [
					'{{WRAPPER}} .myf-card:hover' => 'transform: translateY(-{{SIZE}}px);',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'card_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'separator'  => 'before',
				'selectors'  => [
					'{{WRAPPER}} .myf-card' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}; overflow: hidden;',
				],
			]
		);

		$this->add_responsive_control(
			'card_body_padding',
			[
				'label'      => esc_html__( 'Content Padding', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__body' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: thumbnail.
	 *
	 * @return void
	 */
	private function register_style_thumbnail_controls() {
		$this->start_controls_section(
			'section_style_thumbnail',
			[
				'label' => esc_html__( 'Thumbnail', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'thumbnail_ratio',
			[
				'label'     => esc_html__( 'Aspect Ratio', 'magic-elements' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => '16-9',
				'options'   => [
					'16-9' => '16:9',
					'4-3'  => '4:3',
					'1-1'  => '1:1',
					'3-2'  => '3:2',
				],
				'selectors_dictionary' => [
					'16-9' => '16 / 9',
					'4-3'  => '4 / 3',
					'1-1'  => '1 / 1',
					'3-2'  => '3 / 2',
				],
				'selectors' => [
					'{{WRAPPER}} .myf-card__thumb' => 'aspect-ratio: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'thumbnail_overlay_color',
			[
				'label'     => esc_html__( 'Overlay Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__thumb::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'thumbnail_overlay_hover_color',
			[
				'label'     => esc_html__( 'Overlay Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card:hover .myf-card__thumb::after' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'thumbnail_hover_zoom',
			[
				'label'        => esc_html__( 'Zoom on Hover', 'magic-elements' ),
				'type'         => Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default'      => 'yes',
				'prefix_class' => 'myf-zoom-',
			]
		);

		$this->add_responsive_control(
			'thumbnail_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__thumb' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}; overflow: hidden;',
				],
			]
		);

		$this->add_control(
			'play_icon_heading',
			[
				'label'     => esc_html__( 'Play Icon', 'magic-elements' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [ 'show_play_icon' => 'yes' ],
			]
		);

		$this->add_responsive_control(
			'play_icon_size',
			[
				'label'     => esc_html__( 'Size', 'magic-elements' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [ 'px' => [ 'min' => 20, 'max' => 150 ] ],
				'default'   => [ 'size' => 56, 'unit' => 'px' ],
				'selectors' => [
					'{{WRAPPER}} .myf-card__play svg' => 'width: {{SIZE}}{{UNIT}}; height: auto;',
				],
				'condition' => [ 'show_play_icon' => 'yes' ],
			]
		);

		$this->add_control(
			'play_icon_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ff0000',
				'selectors' => [
					'{{WRAPPER}} .myf-card__play svg .myf-play-bg' => 'fill: {{VALUE}};',
				],
				'condition' => [ 'show_play_icon' => 'yes' ],
			]
		);

		$this->add_control(
			'play_icon_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card:hover .myf-card__play svg .myf-play-bg' => 'fill: {{VALUE}};',
				],
				'condition' => [ 'show_play_icon' => 'yes' ],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: title.
	 *
	 * @return void
	 */
	private function register_style_title_controls() {
		$this->start_controls_section(
			'section_style_title',
			[
				'label'     => esc_html__( 'Title', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [ 'show_title' => 'yes' ],
			]
		);

		$this->add_control(
			'title_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__title, {{WRAPPER}} .myf-card__title a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'title_hover_color',
			[
				'label'     => esc_html__( 'Hover Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__title a:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'title_typography',
				'selector' => '{{WRAPPER}} .myf-card__title',
			]
		);

		$this->add_responsive_control(
			'title_spacing',
			[
				'label'      => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [ 'px' => [ 'min' => 0, 'max' => 60 ] ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__title' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: description.
	 *
	 * @return void
	 */
	private function register_style_description_controls() {
		$this->start_controls_section(
			'section_style_description',
			[
				'label'     => esc_html__( 'Description', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [ 'show_description' => 'yes' ],
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__description' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'selector' => '{{WRAPPER}} .myf-card__description',
			]
		);

		$this->add_responsive_control(
			'description_spacing',
			[
				'label'      => esc_html__( 'Bottom Spacing', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [ 'px' => [ 'min' => 0, 'max' => 60 ] ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__description' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: meta.
	 *
	 * @return void
	 */
	private function register_style_meta_controls() {
		$this->start_controls_section(
			'section_style_meta',
			[
				'label' => esc_html__( 'Meta', 'magic-elements' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'meta_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__meta' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'meta_icon_color',
			[
				'label'     => esc_html__( 'Icon Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__meta svg' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'meta_typography',
				'selector' => '{{WRAPPER}} .myf-card__meta',
			]
		);

		$this->add_responsive_control(
			'meta_gap',
			[
				'label'      => esc_html__( 'Items Gap', 'magic-elements' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'range'      => [ 'px' => [ 'min' => 0, 'max' => 50 ] ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__meta' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Style tab: duration badge.
	 *
	 * @return void
	 */
	private function register_style_duration_controls() {
		$this->start_controls_section(
			'section_style_duration',
			[
				'label'     => esc_html__( 'Duration Badge', 'magic-elements' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [ 'show_duration' => 'yes' ],
			]
		);

		$this->add_control(
			'duration_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__duration' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'duration_background',
			[
				'label'     => esc_html__( 'Background Color', 'magic-elements' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .myf-card__duration' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'duration_typography',
				'selector' => '{{WRAPPER}} .myf-card__duration',
			]
		);

		$this->add_responsive_control(
			'duration_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .myf-card__duration' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Render widget output on the frontend.
	 *
	 * @return void
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		$options  = get_option( Settings::OPTION_NAME, [] );

		$channel_id  = ! empty( $settings['channel_id'] ) ? $settings['channel_id'] : ( isset( $options['default_channel'] ) ? $options['default_channel'] : '' );
		$playlist_id = ! empty( $settings['playlist_id'] ) ? $settings['playlist_id'] : ( isset( $options['default_playlist'] ) ? $options['default_playlist'] : '' );

		$videos = Api::get_videos(
			[
				'source'      => $settings['source'],
				'channel_id'  => $channel_id,
				'playlist_id' => $playlist_id,
				'search'      => $settings['search_query'],
				'video_ids'   => $settings['video_ids'],
				'limit'       => $settings['limit'],
				'order'       => $settings['search_order'],
			]
		);

		if ( is_wp_error( $videos ) ) {
			if ( \Elementor\Plugin::$instance->editor->is_edit_mode() || current_user_can( 'manage_options' ) ) {
				printf(
					'<div class="myf-error" style="padding:15px;border:1px dashed #d63638;color:#d63638;">%s</div>',
					esc_html( $videos->get_error_message() )
				);
			}
			return;
		}

		if ( empty( $videos ) ) {
			if ( \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
				printf(
					'<div class="myf-error" style="padding:15px;border:1px dashed #dba617;color:#dba617;">%s</div>',
					esc_html__( 'No videos found for the current source settings.', 'magic-elements' )
				);
			}
			return;
		}

		$layout_class = 'list' === $settings['layout'] ? 'myf-feed--list' : 'myf-feed--grid';
		?>
		<div class="myf-feed <?php echo esc_attr( $layout_class ); ?>" data-click-action="<?php echo esc_attr( $settings['click_action'] ); ?>">
			<?php foreach ( $videos as $video ) : ?>
				<?php $this->render_video_card( $video, $settings ); ?>
			<?php endforeach; ?>
		</div>
		<?php
	}

	/**
	 * Render a single video card.
	 *
	 * @param array $video    Normalized video data.
	 * @param array $settings Widget settings.
	 * @return void
	 */
	private function render_video_card( $video, $settings ) {
		$quality   = isset( $settings['thumbnail_quality'] ) ? $settings['thumbnail_quality'] : 'high';
		$thumbnail = ! empty( $video['thumbnails'][ $quality ] ) ? $video['thumbnails'][ $quality ] : $video['thumbnails']['high'];

		if ( empty( $thumbnail ) ) {
			$thumbnail = $video['thumbnails']['medium'];
		}

		$title = $video['title'];

		if ( ! empty( $settings['title_length'] ) && absint( $settings['title_length'] ) > 0 ) {
			$title = wp_trim_words( $title, absint( $settings['title_length'] ), '…' );
		}

		$click_action = $settings['click_action'];
		$tag          = 'none' === $click_action ? 'div' : 'a';
		$attributes   = '';

		if ( 'a' === $tag ) {
			if ( 'youtube' === $click_action ) {
				$attributes = ' href="' . esc_url( $video['url'] ) . '" target="_blank" rel="noopener noreferrer"';
			} else {
				$attributes = ' href="' . esc_url( $video['url'] ) . '" data-myf-video-id="' . esc_attr( $video['id'] ) . '" data-myf-action="' . esc_attr( $click_action ) . '"';
			}
		}
		?>
		<div class="myf-card">
			<<?php echo esc_html( $tag ); ?> class="myf-card__thumb"<?php echo $attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped above. ?>>
				<img src="<?php echo esc_url( $thumbnail ); ?>" alt="<?php echo esc_attr( $video['title'] ); ?>" loading="lazy" />

				<?php if ( 'yes' === $settings['show_duration'] && ! empty( $video['duration'] ) ) : ?>
					<span class="myf-card__duration"><?php echo esc_html( $video['duration'] ); ?></span>
				<?php endif; ?>

				<?php if ( 'yes' === $settings['show_play_icon'] ) : ?>
					<span class="myf-card__play" aria-hidden="true">
						<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><path class="myf-play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"></path><path d="M45 24 27 14v20" fill="#fff"></path></svg>
					</span>
				<?php endif; ?>
			</<?php echo esc_html( $tag ); ?>>

			<div class="myf-card__body">
				<?php if ( 'yes' === $settings['show_title'] ) : ?>
					<?php $title_tag = \Elementor\Utils::validate_html_tag( $settings['title_tag'] ); ?>
					<<?php echo esc_html( $title_tag ); ?> class="myf-card__title">
						<a href="<?php echo esc_url( $video['url'] ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $title ); ?></a>
					</<?php echo esc_html( $title_tag ); ?>>
				<?php endif; ?>

				<?php if ( 'yes' === $settings['show_channel'] && ! empty( $video['channel_title'] ) ) : ?>
					<div class="myf-card__channel"><?php echo esc_html( $video['channel_title'] ); ?></div>
				<?php endif; ?>

				<?php if ( 'yes' === $settings['show_description'] && ! empty( $video['description'] ) ) : ?>
					<div class="myf-card__description">
						<?php echo esc_html( wp_trim_words( $video['description'], absint( $settings['description_length'] ), '…' ) ); ?>
					</div>
				<?php endif; ?>

				<?php $this->render_meta( $video, $settings ); ?>
			</div>
		</div>
		<?php
	}

	/**
	 * Render the meta row (date, views, likes, comments).
	 *
	 * @param array $video    Normalized video data.
	 * @param array $settings Widget settings.
	 * @return void
	 */
	private function render_meta( $video, $settings ) {
		$show_date     = 'yes' === $settings['show_date'] && ! empty( $video['published_at'] );
		$show_views    = 'yes' === $settings['show_views'];
		$show_likes    = 'yes' === $settings['show_likes'];
		$show_comments = 'yes' === $settings['show_comments'];

		if ( ! $show_date && ! $show_views && ! $show_likes && ! $show_comments ) {
			return;
		}
		?>
		<div class="myf-card__meta">
			<?php if ( $show_date ) : ?>
				<span class="myf-card__meta-item myf-card__meta-item--date">
					<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 10.59V7h-2v6.41l4.29 4.3 1.42-1.42z"/></svg>
					<?php
					$timestamp = strtotime( $video['published_at'] );

					if ( 'absolute' === $settings['date_format'] ) {
						echo esc_html( date_i18n( get_option( 'date_format' ), $timestamp ) );
					} else {
						/* translators: %s: human-readable time difference */
						echo esc_html( sprintf( __( '%s ago', 'magic-elements' ), human_time_diff( $timestamp, time() ) ) );
					}
					?>
				</span>
			<?php endif; ?>

			<?php if ( $show_views ) : ?>
				<span class="myf-card__meta-item myf-card__meta-item--views">
					<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></svg>
					<?php echo esc_html( Api::format_count( $video['views'] ) ); ?>
				</span>
			<?php endif; ?>

			<?php if ( $show_likes ) : ?>
				<span class="myf-card__meta-item myf-card__meta-item--likes">
					<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1 21h4V9H1zm22-11a2 2 0 0 0-2-2h-6.31l.95-4.57.03-.32a1.5 1.5 0 0 0-.44-1.06L14.17 1 7.59 7.59A2 2 0 0 0 7 9v10a2 2 0 0 0 2 2h9a2 2 0 0 0 1.84-1.22l3.02-7.05A2 2 0 0 0 23 12z"/></svg>
					<?php echo esc_html( Api::format_count( $video['likes'] ) ); ?>
				</span>
			<?php endif; ?>

			<?php if ( $show_comments ) : ?>
				<span class="myf-card__meta-item myf-card__meta-item--comments">
					<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
					<?php echo esc_html( Api::format_count( $video['comments'] ) ); ?>
				</span>
			<?php endif; ?>
		</div>
		<?php
	}
}
