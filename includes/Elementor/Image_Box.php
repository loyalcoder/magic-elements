<?php

/**
 * Elementor Classes.
 *
 * @package Image Box Elementor Magic Kit
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Magic Kit For Elementor Extension
 *
 * Elementor widget for Image Box.
 *
 * @since 1.0.0
 */
class Image_Box extends Widget_Base
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
        return 'em_kit_magic_kit_image'; 
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
        return esc_html('Image Box', 'elementor-magic-kit');
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
        return 'eicon-single-page';
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
        $this->register_image_box_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_image_box_controls()
    {
        $this->start_controls_section(
            'section_title',
            [
                'label' => __('Image Box Settings', 'elementor-magic-kit'),
            ]
        );
        // $this->add_control(
		// 	'image_box_image',
		// 	[
		// 		'label' => esc_html__( 'Choose Image', 'elementor-magic-kit' ),
		// 		'type' => \Elementor\Controls_Manager::MEDIA,
		// 		'default' => [
		// 			'url' => \Elementor\Utils::get_placeholder_image_src(),
		// 		],
		// 	]
		// );
        $this->add_control(
			'image_box_image',
			[
				'label' => esc_html__( 'Choose Image', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[
				'name' => 'thumbnail', // Usage: `{name}_size` and `{name}_custom_dimension`, in this case `thumbnail_size` and `thumbnail_custom_dimension`.
				'exclude' => [ 'custom' ],
				'include' => [],
				'default' => 'large',
			]
		);
		$this->add_control(
			'img_box_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Image Title', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'image_box_description',
			[
				'label' => esc_html__( 'Description', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 10,
				'default' => esc_html__( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your description here', 'elementor-magic-kit' ),
			]
		);
        $this->end_controls_section();
        // button ==============
        $this->start_controls_section(
            'button_section',
            [
                'label' => __('Button Settings', 'elementor-magic-kit'),
            ]
        );
                $this->add_control(
			'show_img_btn',
			[
				'label' => esc_html__( 'Enable Button', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_control(
			'button_text',
			[
				'label' => esc_html__( 'Label', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Button', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
                'condition' => [
                    'show_img_btn' => 'yes',
                ]
			]
		);
        $this->add_control(
			'button_align',
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
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .image-box-button' => 'text-align: {{VALUE}};',
				],
                'condition' => [
                    'show_img_btn' => 'yes',
                ]
			]
		);
        $this->add_control(
			'img_website_link',
			[
				'label' => esc_html__( 'Link', 'textdomain' ),
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
        $this->add_control(
			'show_button_icon',
			[
				'label' => esc_html__( 'Add Icon?', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);
        $this->add_control(
			'button_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-circle',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'circle',
						'dot-circle',
						'square-full',
					],
					'fa-regular' => [
						'circle',
						'dot-circle',
						'square-full',
					],
				],
                'condition' => [
                    'show_button_icon' => 'yes',
                ]
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
        if ( ! empty( $settings['img_website_link']['url'] ) ) {
			$this->add_link_attributes( 'img_website_link', $settings['img_website_link'] );
		}
        include __DIR__ . '/layouts/image-box.php';
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