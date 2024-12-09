<?php

/**
 * Elementor Classes.
 *
 * @package Image Accordion Elementor Magic Kit
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Magic Kit for Elementor Extension
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
        return esc_html__('Magic Image Accordion', 'elementor-magic-kit');
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
        return 'eicon-image-box';
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
        return ['emk-widgets'];
    }

    public function get_style_depends()
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
        $this->register_button_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_button_controls()
    {
        $this->start_controls_section(
            'ekit_img_accordion_content_tab',
            [
                'label' => esc_html__('Content', 'elementskit-lite'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
            $repeater = new \Elementor\Repeater();

            $repeater->add_control(
                'ekit_img_accordion_active',
                [
                    'label'     => esc_html__('Active ? ', 'elementskit-lite'),
                    'type'      => \Elementor\Controls_Manager::SWITCHER,
                    'default'   => 'no',
                    'label_on'  => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off' => esc_html__( 'No', 'elementskit-lite' ),
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_bg',
                [
                    'label'     => esc_html__( 'Background Image', 'elementskit-lite' ),
                    'type'      => \Elementor\Controls_Manager::MEDIA,
					'dynamic'	=> [
						'active' => true,
					],
                    'default'   => [
                        'url' => \Elementor\Utils::get_placeholder_image_src(),
                        'id'    => -1
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_title',
                [
                    'label'         => esc_html__('Title', 'elementskit-lite'),
                    'type'          => \Elementor\Controls_Manager::TEXT,
					'dynamic'		=> [
						'active' => true,
					],
                    'label_block'   => true,
                    'default'       => esc_html__('Image accordion Title', 'elementskit-lite'),
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_enable_icon',
                [
                    'label'         => esc_html__( 'Enable Icon', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::SWITCHER,
                    'label_on'      => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off'     => esc_html__( 'No', 'elementskit-lite' ),
                    'return_value'  => 'yes',
                    'default'       => '',
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_title_icons',
                [
                    'label'             => esc_html__('Icon for title', 'elementskit-lite'),
                    'type'              => \Elementor\Controls_Manager::ICONS,
                    'fa4compatibility'  => 'ekit_img_accordion_title_icon',
                    'default'           => [
                        'value' => '',
                    ],
                    'condition'         => [
                        'ekit_img_accordion_enable_icon' => 'yes',
                    ]
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_title_icon_position',
                [
                    'label'     => esc_html__( 'Icon Position', 'elementskit-lite' ),
                    'type'      => \Elementor\Controls_Manager::SELECT,
                    'default'   => 'left',
                    'options'   => [
                        'left'      => esc_html__( 'Before', 'elementskit-lite' ),
                        'right'     => esc_html__( 'After', 'elementskit-lite' ),
                    ],
                    'condition' => [
                        'ekit_img_accordion_title_icons!' => '',
                        'ekit_img_accordion_enable_icon' => 'yes',
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_enable_wrap_link',
                [
                    'label'         => esc_html__( 'Enable Wrap Link', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::SWITCHER,
                    'label_on'      => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off'     => esc_html__( 'No', 'elementskit-lite' ),
                    'return_value'  => 'yes',
                    'default'       => 'no',
                    'separator'     => 'before',
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_wrap_link_url',
                [
                    'label'     => esc_html__('Wrap URL', 'elementskit-lite'),
                    'type'      => \Elementor\Controls_Manager::URL,
					'dynamic'	=> [
						'active' => true,
					],
                    'condition' => [
                        'ekit_img_accordion_enable_wrap_link' => 'yes',
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_enable_button',
                [
                    'label'         => esc_html__( 'Enable Button', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::SWITCHER,
                    'label_on'      => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off'     => esc_html__( 'No', 'elementskit-lite' ),
                    'return_value'  => 'yes',
                    'default'       => 'yes',
                    'separator'     => 'before',
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_button_label',
                [
                    'label'         => esc_html__('Button Label', 'elementskit-lite'),
                    'type'          => \Elementor\Controls_Manager::TEXT,
					'dynamic'		=> [
						'active' => true,
					],
                    'label_block'   => true,
                    'default'       => esc_html__('Read More','elementskit-lite'),
                    'condition'     => [
                        'ekit_img_accordion_enable_button' => 'yes',
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_button_url',
                [
                    'label'     => esc_html__('Button URL', 'elementskit-lite'),
                    'type'      => \Elementor\Controls_Manager::URL,
					'dynamic'	=> [
						'active' => true,
					],
                    'condition' => [
                        'ekit_img_accordion_enable_button' => 'yes',
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_enable_pupup',
                [
                    'label'         => esc_html__( 'Enable Popup', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::SWITCHER,
                    'label_on'      => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off'     => esc_html__( 'No', 'elementskit-lite' ),
                    'return_value'  => 'yes',
                    'default'       => '',
                    'separator'     => 'before',
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_pup_up_icons',
                [
                    'label'             => esc_html__('Pupup Icon', 'elementskit-lite'),
                    'type'              => \Elementor\Controls_Manager::ICONS,
                    'fa4compatibility'  => 'ekit_img_accordion_pup_up_icon',
                    'default'           => [
                        'value'     => 'icon icon-plus',
                        'library'   => 'ekiticons'
                    ],
                    'label_block'       => true,
                    'condition'         => [
                        'ekit_img_accordion_enable_pupup' => 'yes'
                    ]
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_enable_project_link',
                [
                    'label'         => esc_html__( 'Enable Project Link', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::SWITCHER,
                    'label_on'      => esc_html__( 'Yes', 'elementskit-lite' ),
                    'label_off'     => esc_html__( 'No', 'elementskit-lite' ),
                    'return_value'  => 'yes',
                    'separator'     => 'before',
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_project_link',
                [
                    'label'         => esc_html__( 'Project Link', 'elementskit-lite' ),
                    'type'          => \Elementor\Controls_Manager::URL,
					'dynamic'		=> [
						'active' => true,
					],
                    'placeholder'   => esc_html__( 'https://wpmet.com', 'elementskit-lite' ),
                    'condition'     => [
                        'ekit_img_accordion_enable_project_link' => 'yes'
                    ],
                ]
            );

            $repeater->add_control(
                'ekit_img_accordion_project_link_icons',
                [
                    'label'             => esc_html__('Project Link Icon', 'elementskit-lite'),
                    'type'              => \Elementor\Controls_Manager::ICONS,
                    'fa4compatibility'  => 'ekit_img_accordion_project_link_icon',
                    'default'           => [
                        'value' => 'icon icon icon-link',
                        'library'   => 'ekiticons'
                    ],
                    'label_block'       => true,
                    'condition'         => [
                        'ekit_img_accordion_enable_project_link' => 'yes'
                    ],
                ]
            );

            $this->add_control(
                'ekit_img_accordion_items',
                [
                    'label' => esc_html__('Accordion Items', 'elementskit-lite'),
                    'type' => \Elementor\Controls_Manager::REPEATER,
                    'default' => [
                        [ 'ekit_img_accordion_title' => esc_html__('This is title','elementskit-lite') ],
                        [ 'ekit_img_accordion_icon' => esc_attr('icon icon-minus') ],
                        [ 'ekit_img_accordion_link' => esc_url('#') ],
                        [ 'ekit_img_accordion_button_label' => esc_html__('Read More','elementskit-lite') ],
                    ],
                    'fields' => $repeater->get_controls(),
                    'title_field' => '{{ ekit_img_accordion_title }}',
                ]
            );

            $this->add_responsive_control(
                'items_style',
                [
                    'label'         => esc_html__('Style', 'elementskit-lite'),
                    'type'          => \Elementor\Controls_Manager::SELECT,
                    'options'       => [
                        ''              => esc_html__('Default', 'elementskit-lite'),
                        'horizontal'    => esc_html__('Horizontal', 'elementskit-lite'),
                        'vertical'      => esc_html__('Vertical', 'elementskit-lite'),
                    ],
                    'default'       => 'horizontal',
                    'prefix_class'  => 'ekit-image-accordion%s-',
                ]
            );

            $this->add_control(
                'active_behavior',
                [
                    'label'         => esc_html__('Active Behaivor', 'elementskit-lite'),
                    'type'          => \Elementor\Controls_Manager::SELECT,
                    'options'       => [
                        'click' => esc_html__('Click', 'elementskit-lite'),
                        'hover' => esc_html__('Hover', 'elementskit-lite'),
                    ],
                    'default'       => 'click',
                    'prefix_class'  => 'ekit-image-accordion-',
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
