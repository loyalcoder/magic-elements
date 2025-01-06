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
class Pricing_Table extends Widget_Base
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
        return 'EM_KIT_pricing_table';
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
        return __('Pricing Table', 'elementor-magic-kit');
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
        return 'eicon-price-table';
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
        return ['emk-pricingtable'];
    }
    public function get_script_depends()
    {
        return ['emkit-pricingtable', 'jquery'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_pricing_table_controls();
    }

    /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_pricing_table_controls()
    {
        $this->start_controls_section(
            'section_style',
            [
                'label' => __('Table Settings', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
            'layout_style',
            [
                'label' => esc_html__('Style', 'elementor-magic-kit'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'style_one',
                'options' => [
                    'style_one' => esc_html__('Style One', 'elementor-magic-kit'),
                    'style_two' => esc_html__('Style Two', 'elementor-magic-kit'),
                ],
            ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
            'table_header',
            [
                'label' => __('Header', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'pricing_table_title',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'pricing_table_subtitle',
			[
				'label' => esc_html__( 'Sub Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Sub Title', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your sub title here', 'elementor-magic-kit' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'price_section',
            [
                'label' => __('Pricing', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
            'currency_symbol',
            [
                'label'   => esc_html__( 'Currency Symbol', 'elementor-magic-kit' ),
                'type'    => Controls_Manager::SELECT,
                'options' => [
                    ''             => esc_html__( 'None', 'elementor-magic-kit' ),
                    '&#36;'        => esc_html__( '&#36; dollar', 'elementor-magic-kit' ),
                    'C&#36;'       => esc_html__( 'C&#36; Canadian dollar', 'elementor-magic-kit' ),
                    'A&#36;'       => esc_html__( 'A&#36; Australian dollar', 'elementor-magic-kit' ),
                    '&#128;'       => esc_html__( '&#128; euro', 'elementor-magic-kit' ),
                    '&#3647;'      => esc_html__( '&#3647; baht', 'elementor-magic-kit' ),
                    '&#8355;'      => esc_html__( '&#8355; franc', 'elementor-magic-kit' ),
                    '&fnof;'       => esc_html__( '&fnof; guilder', 'elementor-magic-kit' ),
                    'kr'           => esc_html__( 'kr krona', 'elementor-magic-kit' ),
                    '&#8356;'      => esc_html__( '&#8356; lira', 'elementor-magic-kit' ),
                    '&#8359;'      => esc_html__( '&#8359; peseta', 'elementor-magic-kit' ),
                    '&#8369;'      => esc_html__( '&#8369; peso', 'elementor-magic-kit' ),
                    '&#163;'       => esc_html__( '&#163; pound', 'elementor-magic-kit' ),
                    '&#8381;'      => esc_html__( '&#8381; ruble', 'elementor-magic-kit' ),
                    'R$'           => esc_html__( 'R$ real', 'elementor-magic-kit' ),
                    '&#8360;'      => esc_html__( '&#8360; rupee', 'elementor-magic-kit' ),
                    '&#8377;'      => esc_html__( '&#8377; rupee (Indian)', 'elementor-magic-kit' ),
                    '&#8362;'      => esc_html__( '&#8362; shekel', 'elementor-magic-kit' ),
                    '&#165;'       => esc_html__( '&#165; yen/yuan', 'elementor-magic-kit' ),
                    '&#8361;'      => esc_html__( '&#8361; won', 'elementor-magic-kit' ),
                    '&#8383;'      => esc_html__( '&#8383; bitcoin', 'elementor-magic-kit' ),
                ],
                'default' => '&#36;',
            ]
        );
        $this->add_control(
			'price',
			[
				'label' => esc_html__( 'Price', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( '89.9', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your price', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'show_sale',
			[
				'label' => esc_html__( 'Sale', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'no',
			]
		);
        $this->add_control(
			'original_price',
			[
				'label' => esc_html__( 'Original Price', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( '99.9', 'elementor-magic-kit' ),
                'condition' => [
                    'show_sale' => 'yes', // Only show this control when switch is ON
                ]
			]
		);
        $this->add_control(
			'period',
			[
				'label' => esc_html__( 'Period', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( '/monthly', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your period', 'elementor-magic-kit' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'features_section',
            [
                'label' => __('Features', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
      
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'features_text',
            [
                'label' => __( 'Text', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __( 'Default Text', 'text-domain' ),
            ]
        );

        $repeater->add_control(
			'features_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-check',
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

        $this->add_control(
            'features_items',
            [
                'label' => __( 'Repeater Items', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'features_text' => __( 'Sample Text 1', 'text-domain' ),
                        'features_icon' => 'fa fa-heart',
                    ],
                    [
                        'features_text' => __( 'Sample Text 2', 'text-domain' ),
                        'features_icon' => 'fa fa-cogs',
                    ],
                ],
                'title_field' => '{{{ features_text }}}',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'button_section',
            [
                'label' => __('Button', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'pricing_btn',
			[
				'label' => esc_html__( 'Text', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Button', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your button text', 'elementor-magic-kit' ),
			]
		);
        $this->add_control(
			'btn_link',
			[
				'label' => esc_html__( 'Link', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url' => '#',
					'is_external' => true,
					'nofollow' => true,
				],
				'label_block' => true,
			]
		);
		$this->add_control(
			'show_btn_icon',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'textdomain' ),
				'label_off' => esc_html__( 'Hide', 'textdomain' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
		$this->add_control(
			'button_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-arrow-right',
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
					'show_btn_icon' => 'yes'
				]
			]
		);
        $this->end_controls_section();
        $this->start_controls_section(
            'ribbon_section',
            [
                'label' => __('Ribbon', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'ribbon_control',
			[
				'label' => esc_html__( 'Ribbon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_control(
			'ribbon_text',
			[
				'label' => esc_html__( 'Ribbon Text', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Ribbon', 'elementor-magic-kit' ),
				'placeholder' => esc_html__( 'Type your title here', 'elementor-magic-kit' ),
                'condition' => [
                    'ribbon_control' => 'yes', // Only show this control when switch is ON
                ]
			]
		);
        $this->end_controls_section();
        /**
         * style control start ===============================
         */
        $this->start_controls_section(
            'pricing_card_style',
            [
                'label' => __('Table Style', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'layout_style' => 'style_one'
				]
            ]
        );
        $this->add_control(
			'card_body_bg',
			[
				'label' => esc_html__( 'Background Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pricing-table-container' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'card_body_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .pricing-table-container' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'card_border',
				'selector' => '{{WRAPPER}} .pricing-table-container',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'hex_border',
				'selector' => '{{WRAPPER}} .hex_border',
			]
		);
        $this->add_responsive_control(
			'card_body_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .pricing-table-container' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'card_body_shadow',
				'selector' => '{{WRAPPER}} .pricing-table-container',
			]
		);
        $this->end_controls_section();
		$this->start_controls_section(
            'pricing_card_style_two',
            [
                'label' => __('Table Body', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'layout_style' => 'style_two'
				]
            ]
        );
		$this->add_control(
			'table_reverse',
			[
				'label' => esc_html__( 'Reverse', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Row', 'elementor-magic-kit' ),
						'icon' => 'eicon-order-start',
					],
					'row-reverse' => [
						'title' => esc_html__( 'Row Reverse', 'elementor-magic-kit' ),
						'icon' => 'eicon-order-end',
					],
				],
				'default' => 'row',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .pricing-table-container' => 'flex-direction: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'left_options',
			[
				'label' => esc_html__( 'Left Part', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'left_part_width',
			[
				'label' => esc_html__( 'Width', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .left-part' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'left_bg',
			[
				'label' => esc_html__( 'Background', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .left-part' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_responsive_control(
			'left_part_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .left-part' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'left_price_align',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .left-part' => 'align-content: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'left_part_radius',
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
					'{{WRAPPER}} .left-part' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'right_options',
			[
				'label' => esc_html__( 'Right Part', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'right_part_width',
			[
				'label' => esc_html__( 'Width', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 50,
				],
				'selectors' => [
					'{{WRAPPER}} .right-part' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'right_bg',
			[
				'label' => esc_html__( 'Background', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .right-part' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_responsive_control(
			'right_part_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .right-part' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'right_part_radius',
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
					'{{WRAPPER}} .right-part' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'header_style',
            [
                'label' => __('Header', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			'title_options',
			[
				'label' => esc_html__( 'Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'selector' => '{{WRAPPER}} .title',
			]
		);
        $this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Title Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .title' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
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
					'{{WRAPPER}} .title' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'title_shadow',
				'selector' => '{{WRAPPER}} .title',
			]
		);
        $this->add_responsive_control(
			'title_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        //sub title ================================
        $this->add_control(
			'sub_title_options',
			[
				'label' => esc_html__( 'Sub Title', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'sub_title_typography',
				'selector' => '{{WRAPPER}} .sub-title',
			]
		);
        $this->add_control(
			'sub_title_color',
			[
				'label' => esc_html__( 'Sub Title Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .sub-title' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'sub-title_text_align',
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
					'{{WRAPPER}} .sub-title' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'sub_title_shadow',
				'selector' => '{{WRAPPER}} .sub-title',
			]
		);
        $this->add_responsive_control(
			'sub_title_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .sub-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        // Price Style ===================================
        $this->start_controls_section(
            'price_style',
            [
                'label' => __('Price', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			'price_text_align',
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
					'{{WRAPPER}} .price-box' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'price_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .price-box' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'price_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .current-price' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'current_price_options',
			[
				'label' => esc_html__( 'Current Price', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'current_price_typography',
				'selector' => '{{WRAPPER}} .cp',
			]
		);
        $this->add_control(
			'price_align',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .cp' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'currency_symbol_options',
			[
				'label' => esc_html__( 'Currency Symbol', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'currency_symbol_typography',
				'selector' => '{{WRAPPER}} .cp-symble',
			]
		);
        $this->add_control(
			'currency_symbol_align',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .cp-symble' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'original_price_options',
			[
				'label' => esc_html__( 'Original Price', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
                'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'original_price_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .original-price' => 'color: {{VALUE}}',
				],
                'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'original_price_typography',
				'selector' => '{{WRAPPER}} .original-price',
                'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'original_price_align',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .original-price' => 'align-content: {{VALUE}};',
				],
                'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'original_price_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
						'step' => 2,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 2,
				],
				'selectors' => [
					'{{WRAPPER}} .original-price' => 'margin-right: {{SIZE}}{{UNIT}};',
				],
                'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'period_options',
			[
				'label' => esc_html__( 'Period', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'period_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .period' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'period_typography',
				'selector' => '{{WRAPPER}} .period',
			]
		);
        $this->add_control(
			'period_align',
			[
				'label' => esc_html__( 'Vertical Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'elementor-magic-kit' ),
						'icon' => 'eicon-v-align-bottom',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .period' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'period_gap',
			[
				'label' => esc_html__( 'Gap', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
						'step' => 2,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 2,
				],
				'selectors' => [
					'{{WRAPPER}} .period' => 'margin-left: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        // Features Style ===================================
        $this->start_controls_section(
            'features_style',
            [
                'label' => __('Features', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_responsive_control(
			'content_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'features_item_options',
			[
				'label' => esc_html__( 'Item', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'features_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .f-item' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'features_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .f-item' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'show_item_border',
			[
				'label' => esc_html__( 'Items Border', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-magic-kit' ),
				'label_off' => esc_html__( 'Hide', 'elementor-magic-kit' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'selector' => '{{WRAPPER}} .f-item:not(:last-child)',
                'condition' => [
                    'show_item_border' => 'yes'
                ],
			]
		);
        $this->add_responsive_control(
			'features_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-magic-kit' ),
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
					'{{WRAPPER}} .f-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
                'condition' => [
                    'show_item_border' => 'yes'
                ],
			]
		);
        $this->add_control(
			'features_icon_options',
			[
				'label' => esc_html__( 'Icon', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 15,
				],
				'selectors' => [
					'{{WRAPPER}} .list-icon' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'icon_gap',
			[
				'label' => esc_html__( 'Icon Gap', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 2,
				],
				'selectors' => [
					'{{WRAPPER}} .list-icon' => 'margin-right: {{SIZE}}{{UNIT}};',
				],
			]
		);
        $this->add_control(
			'f_icon_color',
			[
				'label' => esc_html__( 'Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .list-icon path' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'features_content_options',
			[
				'label' => esc_html__( 'Content', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'f-item_typography',
				'selector' => '{{WRAPPER}} .f-item',
			]
		);
        $this->add_control(
			'f-item_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .f-item' => 'color: {{VALUE}}',
				],
			]
		);
        $this->end_controls_section();
        // Button ==============================
        $this->start_controls_section(
            'button_style',
            [
                'label' => __('Button', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'emk_btn_typography',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_control(
			'btn_direction',
			[
				'label' => esc_html__( 'Direction', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-left',
					],
					'space-evenly' => [
						'title' => esc_html__( 'Center', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'default' => 'space-evenly',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .emk-button' => 'justify-content: {{VALUE}};',
				],
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_responsive_control(
			'btn_padding',
			[
				'label' => esc_html__( 'Padding', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 12,
					'bottom' => 8,
					'left' => 12,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'btn_margin',
			[
				'label' => esc_html__( 'Margin', 'textdomain' ),
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
					'{{WRAPPER}} .emk-button a' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_control(
			'btn_hr',
			[
				'type' => \Elementor\Controls_Manager::DIVIDER,
			]
		);
		// tabs control start==========
		$this->start_controls_tabs(
			'btn_style_tabs'
		);
		
		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'textdomain' ),
			]
		);
		$this->add_control(
			'btn_bg',
			[
				'label' => esc_html__( 'Background', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'btn_color',
			[
				'label' => esc_html__( 'color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'btn_border',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_responsive_control(
			'btn_radius',
			[
				'label' => esc_html__( 'Radius', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 8,
					'bottom' => 8,
					'left' => 8,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'btn_box_shadow',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_control(
			'btn_icon_options',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_direction',
			[
				'label' => esc_html__( 'Icon Direction', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row-reverse' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-left',
					],
					'row' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-right',
					],
				],
				'default' => 'row',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'flex-direction: {{VALUE}};',
				],
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_gap',
			[
				'label' => esc_html__( 'Gap', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
						'step' => 2,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button a svg' => 'margin-right: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'btn_icon_direction' => 'row-reverse',
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_gap_reverse',
			[
				'label' => esc_html__( 'Gap', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
						'step' => 2,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 5,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button a svg' => 'margin-left: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'btn_icon_direction' => 'row',
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_size',
			[
				'label' => esc_html__( 'Size', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 16,
				],
				'selectors' => [
					'{{WRAPPER}} .btn-icon' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_color',
			[
				'label' => esc_html__( 'Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .btn-icon path' => 'fill: {{VALUE}}',
				],
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);

		$this->end_controls_tab();
		$this->start_controls_tab(
			'style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'textdomain' ),
			]
		);
		$this->add_control(
			'btn_bg_hover',
			[
				'label' => esc_html__( 'Background', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'btn_color_hover',
			[
				'label' => esc_html__( 'color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'btn_border_hover',
				'selector' => '{{WRAPPER}} .emk-button a:hover',
			]
		);
		$this->add_responsive_control(
			'btn_radius_hover',
			[
				'label' => esc_html__( 'Radius', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default' => [
					'top' => 8,
					'right' => 8,
					'bottom' => 8,
					'left' => 8,
					'unit' => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'btn_box_shadow_hover',
				'selector' => '{{WRAPPER}} .emk-button a:hover',
			]
		);
		$this->add_control(
			'btn_icon_options_hover',
			[
				'label' => esc_html__( 'Icon', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_color_hover',
			[
				'label' => esc_html__( 'Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover .btn-icon path' => 'fill: {{VALUE}}',
				],
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->end_controls_tab();
		
		$this->end_controls_tabs();
		// tabs control end==========
        $this->end_controls_section();
        // Ribbon ==============================
        $this->start_controls_section(
            'ribbon_style',
            [
                'label' => __('Ribbon', 'elementor-magic-kit'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => [
                    'ribbon_control' => 'yes', // Only show this control when switch is ON
                ]
            ]
        );
        $this->add_control(
			'ribbon_direction',
			[
				'label' => esc_html__( 'Direction', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-left',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-magic-kit' ),
						'icon' => 'eicon-h-align-right',
					],
				],
			]
		);
        $this->add_control(
			'ribbon_bg',
			[
				'label' => esc_html__( 'Ribbon Background', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ribbon .ribbon-bar' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'ribbon_ba',
			[
				'label' => esc_html__( 'Ribbon Before After', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}   .pricing-table-container .ribbon::before, .pricing-table-container .ribbon::after ' => 'border-color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'ribon_typography',
				'selector' => '{{WRAPPER}} .ribbon-bar span',
			]
		);
        $this->add_control(
			'ribbon_color',
			[
				'label' => esc_html__( 'Ribbon Text', 'elementor-magic-kit' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}   .ribbon-bar span' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'ribbon_text_shadow',
				'selector' => '{{WRAPPER}} .ribbon-bar span',
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

        $layout_style = $settings['layout_style'];
        $file_path = __DIR__ . '/layouts/pricing-table/';

        switch ($layout_style) {
            case 'style_two':
                $file_path .= 'pricing_table_style_two.php';
                break;

            case 'style_one':
            default:
                $file_path .= 'pricing_table_style_one.php';
                break;
        }

        if (file_exists($file_path)) {
            include $file_path;
        } 
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