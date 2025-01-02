<?php

/**
 * Elementor Classes.
 *
 * @package Accordion Elementor Magic Kit
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
 * Elementor widget for Accordion.
 *
 * @since 1.0.0
 */
class Tab extends Widget_Base
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
        return 'em_kit_tab';
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
        return esc_html__('Magic Tab', 'elementor-magic-kit');
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
        return 'eicon-accordion';
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
        return ['emk-tab'];
    }

    public function get_script_depends()
    {
        return ['emkit-tab', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_tab_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_tab_controls()
    {

        $this->start_controls_section(
            'tabs_section',
            [
                'label' => __( 'Tabs', 'elementor' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'tab_title',
            [
                'label' => __( 'Tab Title', 'elementor' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'Tab Title',
            ]
        );

        $repeater->add_control(
            'tab_content_title',
            [
                'label' => __( 'Tab Content Title', 'elementor' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'Content for this tab.',
            ]
        );

        $repeater->add_control(
            'tab_content',
            [
                'label' => __( 'Tab Content', 'elementor' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => 'Content for this tab.',
            ]
        );

        $this->add_control(
            'tabs',
            [
                'label' => __( 'Tabs', 'elementor' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'tab_title' => __( 'Tab 1', 'elementor' ),
                        'tab_content' => __( 'This is the content for the first tab.', 'elementor' ),
                    ],
                    [
                        'tab_title' => __( 'Tab 2', 'elementor' ),
                        'tab_content' => __( 'This is the content for the second tab.', 'elementor' ),
                    ],
                ],
                'title_field' => '{{{ tab_title }}}',
            ]
        );

        $this->end_controls_section(); 

        // style section
        $this->start_controls_section(
			'tabs_style_section',
			[
				'label' => esc_html__( 'Tabs', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'tabs_column gap',
			[
				'label' => esc_html__( 'Gap Between Tabs', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .tabs' => 'column-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);
        
		$this->add_control(
			'tabs_distance_from_content',
			[
				'label' => esc_html__( 'Distance From Content', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .tab-content' => 'margin-top: {{SIZE}}{{UNIT}};',
				],
			]
		);


   

    // control for tab

    $this->start_controls_tabs(
        'style_tabs'
    );
    // normal tab
    $this->start_controls_tab(
        'style_normal_tab',
        [
            'label' => esc_html__( 'Normal', 'textdomain' ),
        ]
    );

     // Background Color Control
     $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name' => 'background',
            'types' => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .tab',
        ]
    );

    

    // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name' => 'tab_box_shadow',
            'label' => __('Box Shadow', 'plugin-name'),
            'selector' => '{{WRAPPER}} .tab',
        ]
    ); 
    
    $this->end_controls_tab();

    // hover tab
    $this->start_controls_tab(
        'style_hover_tab',
        [
            'label' => esc_html__( 'Hover', 'textdomain' ),
        ]
    );
    
    $this->end_controls_tab();
    // active tab
    $this->start_controls_tab(
        'style_active_tab',
        [
            'label' => esc_html__( 'Active', 'textdomain' ),
        ]
    );
    
    $this->end_controls_tab();
    
    $this->end_controls_tabs();

    // Border Radius Control
    $this->add_control(
        'tab_border_radius',
        [
            'label' => __('Border Radius', 'plugin-name'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}} .tab' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    // Margin Control
    $this->add_responsive_control(
        'tab_padding',
        [
            'label' => __('Padding', 'plugin-name'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}} .tab' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $settings    = $this->get_settings_for_display();

        $tabs = $settings['tabs'];
       
        include __DIR__ . '/layouts/tab.php';
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
