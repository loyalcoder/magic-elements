<?php

    /**
 * Elementor Classes.
 *
 * @package Nav Menu Magic Elements
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
 * Elementor widget for Nav Menu.
 *
 * @since 1.0.0
 */
class Nav_Menu extends Widget_Base
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
        return 'em_kit_nav_menu';
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
        return esc_html__('Nav Menu', 'magic-elements');
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
        return 'eicon-nav-menu magicelements-editor-widgets-icon';
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
        return ['emkit-nav-menu','jquery'];
    }

	public function get_style_depends()
    {
        return ['emk-nav-menu'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_nav_menu_controls();
        //Header
           $this->start_controls_section(
			'header_section',
			[
				'label' => esc_html__( 'Header', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'sticky_switch',
			[
				'label' => esc_html__( 'Sticky Header', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Enable', 'textdomain' ),
				'label_off' => esc_html__( 'Disable', 'textdomain' ),
				'return_value' => 'no',
				'default' => 'no',
			]
		);
         $this->add_control(
            'header_layout_type',
            [
                'label' => esc_html__( 'Choose Layout', 'textdomain' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'layout-one',
                'options' => [
                    'layout-one' => esc_html__( 'Layout One', 'textdomain' ),
                    'layout-two' => esc_html__( 'Layout Two', 'textdomain' ),
                    'layout-three' => esc_html__( 'Layout Three', 'textdomain' ),
                ],
            ]
        );
        $this->end_controls_section();
        // Logo
        $this->start_controls_section(
			'logo_section',
			[
				'label' => esc_html__( 'Logo', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'logo',
			[
				'label' => esc_html__( 'Upload Logo', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
                'media_types' => [ 'image', 'svg'],
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);
        $this->end_controls_section();

        // Menu Select
        $this->start_controls_section(
			'menu_section',
			[
				'label' => esc_html__( 'Menu', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'menu_select',
			[
				'label' => esc_html__( 'Left Menu', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options'=> cnw_get_menus()
			]
		);
        $this->add_control(
			'menu_select_right',
			[
				'label' => esc_html__( 'Right Menu', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options'=> cnw_get_menus()
			]
		);
        $this->end_controls_section();
        //Search Section
         $this->start_controls_section(
			'search_section',
			[
				'label' => esc_html__( 'Search Icon', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'show_search',
			[
				'label' => esc_html__( 'Show Search Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'textdomain' ),
				'label_off' => esc_html__( 'Hide', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_control(
			'search_icon',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
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
			]
		);
        $this->end_controls_section();

        //Mobile Menu
        $this->start_controls_section(
			'mobile_menu_section',
			[
				'label' => esc_html__( 'Mobile Menu', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
			'show_mobile_menu_icon',
			[
				'label' => esc_html__( 'Show Mobile Menu Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'textdomain' ),
				'label_off' => esc_html__( 'Hide', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_control(
			'mobile_menu_icon',
			[
				'label' => esc_html__( 'Mobile Menu Icon', 'textdomain' ),
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
			]
		);
        $this->end_controls_section();
        //Header Style Section
        $this->start_controls_section(
			'header_style_section',
			[
				'label' => esc_html__( 'Header', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'header_background',
				'types' => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .your-class',
			]
		);
		$this->end_controls_section();
        //Logo Style Section
        $this->start_controls_section(
			'logo_style_section',
			[
				'label' => esc_html__( 'Logo', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'header_logo_width',
			[
				'label' => esc_html__( 'Width', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'header_logo_height',
			[
				'label' => esc_html__( 'Height', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Menu Style Section
        $this->start_controls_section(
			'menu_style_section',
			[
				'label' => esc_html__( 'Menu', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->end_controls_section();
        //Search Style Section
        $this->start_controls_section(
			'search_style_section',
			[
				'label' => esc_html__( 'Search', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'search_icon_width',
			[
				'label' => esc_html__( 'Width', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .cnw-search' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'search_icon_height',
			[
				'label' => esc_html__( 'Height', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .cnw-search' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        //Mobile Menu Style Section
        $this->start_controls_section(
			'mobile_menu_style_section',
			[
				'label' => esc_html__( 'Mobile Menu', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'mobile_menu_icon_width',
			[
				'label' => esc_html__( 'Width', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .mobile-menu' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_responsive_control(
			'mobile_menu_icon_height',
			[
				'label' => esc_html__( 'Height', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .mobile-menu' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();


    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_nav_menu_controls()
    {
        function cnw_get_menus(){
            $menus = wp_get_nav_menus();
            $options = [];
            foreach($menus as $m){
                $options[$m->slug] = $m->name;
            }
            return $options;
        }
		
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
        $header_layout = $settings['header_layout_type'];
        include __DIR__ . '/layouts/Nav-Menu/nav-menu.php';
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
