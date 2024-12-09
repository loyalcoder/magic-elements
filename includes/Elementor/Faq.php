<?php

/**
 * Elementor Classes.
 *
 * @package Faq Elementor Magic Kit
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
class Faq extends Widget_Base
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
        return 'EM_KIT_faq';
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
        return __('FAQ', 'elementor-magic-kit');
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
        return 'eicon-help-o';
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
        return ['pkun-widgets'];
    }

    public function get_script_depends()
    {
        return [];
    } 
    
    public function get_style_depends()
    {
        return ['emk-faq'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_faq_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_faq_controls()
    {
        $this->start_controls_section(
            'faq_content_section',
            [
                'label' => esc_html__('FAQ', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'layout_type',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'one',
				'options' => [
					'one' => esc_html__( 'One', 'textdomain' ),
					'two' => esc_html__( 'Two', 'textdomain' ),
				],
				
			]
		);
        $repeater = new \Elementor\Repeater();
        $repeater->add_control(
            'faq_title',
            [
                'label' => esc_html__('FAQ Title', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'How do I create an account on the platform?', 'elementor-magic-kit' ),
                'label_block' => true,
            ]
        );
        $repeater->add_control(
            'faq_content',
            [
                'label' => esc_html__('Description', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Asked Questions (FAQ) section on your OTTP (online teaching tutoring platform) website can help user information quickly and improve their overall experience.', 'elementor-magic-kit' ),
                'rows' => 10,
            ]
        );

        $this->add_control(
            'faq_control',
            [
                'label' => esc_html__('Tab Content', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'faq_title' => esc_html__('How do I create an account on the platform?', 'elementor-magic-kit'),
                        'faq_content' => esc_html__('Asked Questions (FAQ) section on your OTTP (online teaching tutoring platform) website can help user information quickly and improve their overall experience. here some suggestions remember to organise your faq’s user-friendly headings concise  you can also include quickly.', 'elementor-magic-kit'),
                    ],
                    [
                        'faq_title' => esc_html__('How can I update my profile information?', 'elementor-magic-kit'),
                        'faq_content' => esc_html__('Asked Questions (FAQ) section on your OTTP (online teaching tutoring platform) website can help user information quickly and improve their overall experience. here some suggestions remember to organise your faq’s user-friendly headings concise  you can also include quickly.', 'elementor-magic-kit'),
                    ],
                    [
                        'faq_title' => esc_html__('How can I book a tutoring/teaching session?', 'elementor-magic-kit'),
                        'faq_content' => esc_html__('Asked Questions (FAQ) section on your OTTP (online teaching tutoring platform) website can help user information quickly and improve their overall experience. here some suggestions remember to organise your faq’s user-friendly headings concise  you can also include quickly.', 'elementor-magic-kit'),
                    ],
                    [
                        'faq_title' => esc_html__('How does the payment system work?', 'elementor-magic-kit'),
                        'faq_content' => esc_html__('Asked Questions (FAQ) section on your OTTP (online teaching tutoring platform) website can help user information quickly and improve their overall experience. here some suggestions remember to organise your faq’s user-friendly headings concise  you can also include quickly.', 'elementor-magic-kit'),
                    ],
                ],
                'title_field' => '{{{ faq_title }}}',
            ]
        );
        $this->end_controls_section();

        // Style section
        $this->start_controls_section(
			$this->get_name() .'title_style',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'title_text_align',
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
					'{{WRAPPER}} .faq h2' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			$this->get_name() .'text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .faq h2' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'selector' => '{{WRAPPER}} .faq h2',
			]
		);
        $this->add_responsive_control(
            $this->get_name() . 'bg_title_color',
            [
                'label' => __('Background Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .faq h2' => 'background-color: {{VALUE}}',
                ],
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'title_border',
				'selector' => '{{WRAPPER}} .faq h2',
			]
		);
        $this->add_responsive_control(
            $this->get_name() .'title_rediis',
			[
				'label' => esc_html__( 'Border Radius', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .faq h2' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);


        $this->add_responsive_control(
            $this->get_name() . 'title_container_padding',
            [
                'label' => __('Padding', 'elementor-magic-kit'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .faq h2' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            $this->get_name() . 'title_container_margin',
            [
                'label' => __('Margin', 'elementor-magic-kit'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .faq h2' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
			$this->get_name() .'content_style',
			[
				'label' => esc_html__( 'Discription', 'elementor-magic-kit' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
        $this->add_responsive_control(
			'discription_text_align',
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
					'{{WRAPPER}} .faq p' => 'text-align: {{VALUE}};',
				],
			]
		);

        $this->add_control(
			$this->get_name() .'discription_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .faq p' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'discription_typography',
				'selector' => '{{WRAPPER}} .faq p',
			]
		);
        $this->add_responsive_control(
            $this->get_name() . 'bg_discription_color',
            [
                'label' => __('Background Color', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .faq p' => 'background-color: {{VALUE}}',
                ],
            ]
        );
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'discription_border',
				'selector' => '{{WRAPPER}} .faq p',
			]
		);
        $this->add_responsive_control(
            $this->get_name() .'discription_rediis',
			[
				'label' => esc_html__( 'Border Radius', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => [
					'{{WRAPPER}} .faq p' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

        $this->add_responsive_control(
            $this->get_name() . 'discription_container_padding',
            [
                'label' => __('Padding', 'elementor-magic-kit'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .faq p' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        $this->add_responsive_control(
            $this->get_name() . 'discription_container_margin',
            [
                'label' => __('Margin', 'elementor-magic-kit'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .faq p' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
        $faq_item_list = $settings['faq_control'];
        $layout = $settings['layout_type'];
        include __DIR__ . '/layouts/faq.php';
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
