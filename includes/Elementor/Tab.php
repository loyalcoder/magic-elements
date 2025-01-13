<?php

    /**
 * Elementor Classes.
 *
 * @package Accordion Magic Elements
 */


namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
} 

    /**
 * Magic Elements for Elementor Extension
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
        return esc_html__('Tab', 'magic-elements');
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
        return 'eicon-accordion emk-editor-widgets-icon';
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
                'label' => esc_html__( 'Tabs', 'magic-elements' ),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'tab_title',
            [
                'label'   => esc_html__( 'Tab Title', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'Tab Title',
            ]
        );

        $repeater->add_control(
            'tab_content_title',
            [
                'label'   => esc_html__( 'Tab Content Title', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => 'Content for this tab.',
            ]
        );

        $repeater->add_control(
            'tab_content',
            [
                'label'   => esc_html__( 'Tab Content', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::WYSIWYG,
                'default' => 'Content for this tab.',
            ]
        );

        $this->add_control(
            'tabs',
            [
                'label'   => esc_html__( 'Tabs', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::REPEATER,
                'fields'  => $repeater->get_controls(),
                'default' => [
                    [
                        'tab_title' => esc_html__( 'Tab 1', 'magic-elements' ),
                        'tab_content' => esc_html__( 'This is the content for the first tab.', 'magic-elements' ),
                    ],
                    [
                        'tab_title' => esc_html__( 'Tab 2', 'magic-elements' ),
                        'tab_content' => esc_html__( 'This is the content for the second tab.', 'magic-elements' ),
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
				'label' => esc_html__( 'Tabs', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

        $this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'tabs_background',
				'types'    => [ 'classic', 'gradient', 'video' ],
				'selector' => '{{WRAPPER}} .tabs',
			]
		);

		$this->add_control(
			'tabs_column gap',
			[
				'label'      => esc_html__( 'Gap Between Tabs', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 1000,
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
				'label'      => esc_html__( 'Distance From Content', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 1000,
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
            'label' => esc_html__( 'Normal', 'magic-elements' ),
        ]
    );

         // Background Color Control
     $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name'     => 'background',
            'types'    => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .tab',
        ]
    );

    

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'tab_box_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab',
        ]
    ); 
    
    $this->end_controls_tab();

        // hover tab
    $this->start_controls_tab(
        'style_hover_tab',
        [
            'label' => esc_html__( 'Hover', 'magic-elements' ),
        ]
    );

         // Background Color Control
     $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name'     => 'hover_background',
            'types'    => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .tab:hover',
        ]
    );

    

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'tab_box_hover_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab:hover',
        ]
    ); 
    
    $this->end_controls_tab();
        // active tab
    $this->start_controls_tab(
        'style_active_tab',
        [
            'label' => esc_html__( 'Active', 'magic-elements' ),
        ]
    );

         // Background Color Control
     $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name'     => 'active_background',
            'types'    => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .tab.active',
        ]
    );

    

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'active_tab_box_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab.active',
        ]
    ); 
    
    $this->end_controls_tab();
    
    $this->end_controls_tabs();

        // Border Radius Control
    $this->add_control(
        'tab_border_radius',
        [
            'label'      => esc_html__('Border Radius', 'magic-elements'),
            'type'       => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors'  => [
                '{{WRAPPER}} .tab' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

        // Margin Control
    $this->add_responsive_control(
        'tab_padding',
        [
            'label'      => esc_html__('Padding', 'magic-elements'),
            'type'       => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors'  => [
                '{{WRAPPER}} .tab' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

	$this->end_controls_section();

        // title
    $this->start_controls_section(
        'tab_title_style_section',
        [
            'label' => esc_html__( 'Titles', 'magic-elements' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name'     => 'tab_titles_typography',
            'selector' => '{{WRAPPER}} .tab',
        ]
    );

         // control for tab

     $this->start_controls_tabs(
        'tab_titles_style_tabs'
    );
        // normal tab
    $this->start_controls_tab(
        'tab_titles_style_normal_tab',
        [
            'label' => esc_html__( 'Normal', 'magic-elements' ),
        ]
    );

    $this->add_control(
        'normal_tab_titles_color',
        [
            'label'     => esc_html__( 'Color', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .tab' => 'color: {{VALUE}}',
            ],
        ]
    );

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'normal_tab_titles_box_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab',
        ]
    ); 

    $this->add_group_control(
        \Elementor\Group_Control_Text_Stroke::get_type(),
        [
            'name'     => 'normal_tab_titles_stroke',
            'selector' => '{{WRAPPER}} .tab',
        ]
    );

    
    $this->end_controls_tab();

        // hover tab
    $this->start_controls_tab(
        'tab_titles_style_hover_tab',
        [
            'label' => esc_html__( 'Hover', 'magic-elements' ),
        ]
    );

    $this->add_control(
        'hover_tab_titles_color',
        [
            'label'     => esc_html__( 'Color', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .tab:hover' => 'color: {{VALUE}}',
            ],
        ]
    );

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'hover_tab_titles_box_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab:hover',
        ]
    ); 

    $this->add_group_control(
        \Elementor\Group_Control_Text_Stroke::get_type(),
        [
            'name'     => 'hover_tab_titles_stroke',
            'selector' => '{{WRAPPER}} .tab:hover',
        ]
    );

    
    $this->end_controls_tab();
        // active tab
    $this->start_controls_tab(
        'tab_titles_style_active_tab',
        [
            'label' => esc_html__( 'Active', 'magic-elements' ),
        ]
    );

    $this->add_control(
        'active_tab_titles_color',
        [
            'label'     => esc_html__( 'Color', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .tab.active' => 'color: {{VALUE}}',
            ],
        ]
    );

        // Box Shadow Control
    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name'     => 'active_tab_titles_box_shadow',
            'label'    => esc_html__('Shadow', 'magic-elements'),
            'selector' => '{{WRAPPER}} .tab.active',
        ]
    ); 

    $this->add_group_control(
        \Elementor\Group_Control_Text_Stroke::get_type(),
        [
            'name'     => 'active_tab_titles_stroke',
            'selector' => '{{WRAPPER}} .tab.active',
        ]
    );

    
    $this->end_controls_tab();
    
    $this->end_controls_tabs();

    $this->end_controls_section();

        // content
    $this->start_controls_section(
        'tabs_content_section',
        [
            'label' => esc_html__( 'Content', 'magic-elements' ),
            'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'text_align',
        [
            'label'   => esc_html__( 'Alignment', 'magic-elements' ),
            'type'    => \Elementor\Controls_Manager::CHOOSE,
            'options' => [
                'left' => [
                    'title' => esc_html__( 'Left', 'magic-elements' ),
                    'icon'  => 'eicon-text-align-left',
                ],
                'center' => [
                    'title' => esc_html__( 'Center', 'magic-elements' ),
                    'icon'  => 'eicon-text-align-center',
                ],
                'right' => [
                    'title' => esc_html__( 'Right', 'magic-elements' ),
                    'icon'  => 'eicon-text-align-right',
                ],
            ],
            'default'   => 'center',
            'toggle'    => true,
            'selectors' => [
                '{{WRAPPER}} .content' => 'text-align: {{VALUE}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name'     => 'tab_content_background',
            'types'    => [ 'classic', 'gradient', 'video' ],
            'selector' => '{{WRAPPER}} .tab-content',
        ]
    );

    $this->add_control(
        'tab_content_title_heading',
        [
            'label'     => esc_html__( 'Title', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );

    $this->add_control(
        'tab_content_title_color',
        [
            'label'     => esc_html__( 'Text Color', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .tab-content .content h2' => 'color: {{VALUE}}',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name'     => 'tab_content_title_typography',
            'selector' => '{{WRAPPER}} .tab-content .content h2',
        ]
    );

    $this->add_control(
        'tab_content_des_heading',
        [
            'label'     => esc_html__( 'Description', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::HEADING,
            'separator' => 'before',
        ]
    );

    $this->add_control(
        'tab_content_des_color',
        [
            'label'     => esc_html__( 'Text Color', 'magic-elements' ),
            'type'      => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .tab-content .content p' => 'color: {{VALUE}}',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name'     => 'tab_content_des_typography',
            'selector' => '{{WRAPPER}} .tab-content .content p',
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
