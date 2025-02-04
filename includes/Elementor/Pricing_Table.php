<?php

            /**
 * Elementor Classes.
 *
 * @package Pricing Table Magic Elements
 */

namespace Elementor_Magic_Kit\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

        /**
 * Elementor Pricing Table Widget
 *
 * Elementor widget for pricing table.
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
        return esc_html__('Pricing Table', 'magic-elements');
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
        return 'eicon-price-table emk-editor-widgets-icon';
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
     * Register Pricing Table controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_pricing_table_controls();
    }

            /**
     * Register Pricing Table General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_pricing_table_controls()
    {
        $this->start_controls_section(
            'section_style',
            [
                'label' => esc_html__('Table Settings', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
            'layout_style',
            [
                'label'   => esc_html__('Style', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'style_one',
                'options' => [
                    'style_one' => esc_html__('Style One', 'magic-elements'),
                    'style_two' => esc_html__('Style Two', 'magic-elements'),
                ],
            ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
            'table_header',
            [
                'label' => esc_html__('Header', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'pricing_table_title',
			[
				'label'       => esc_html__( 'Title', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( 'Title', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
			]
		);
        $this->add_control(
			'pricing_table_subtitle',
			[
				'label'       => esc_html__( 'Sub Title', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( 'Sub Title', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your sub title here', 'magic-elements' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'price_section',
            [
                'label' => esc_html__('Pricing', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
            'currency_symbol',
            [
                'label'   => esc_html__( 'Currency Symbol', 'magic-elements' ),
                'type'    => Controls_Manager::SELECT,
                'options' => [
                    ''        => esc_html__( 'None', 'magic-elements' ),
                    '&#36;'   => esc_html__( '&#36; dollar', 'magic-elements' ),
                    'C&#36;'  => esc_html__( 'C&#36; Canadian dollar', 'magic-elements' ),
                    'A&#36;'  => esc_html__( 'A&#36; Australian dollar', 'magic-elements' ),
                    '&#128;'  => esc_html__( '&#128; euro', 'magic-elements' ),
                    '&#3647;' => esc_html__( '&#3647; baht', 'magic-elements' ),
                    '&#8355;' => esc_html__( '&#8355; franc', 'magic-elements' ),
                    '&fnof;'  => esc_html__( '&fnof; guilder', 'magic-elements' ),
                    'kr'      => esc_html__( 'kr krona', 'magic-elements' ),
                    '&#8356;' => esc_html__( '&#8356; lira', 'magic-elements' ),
                    '&#8359;' => esc_html__( '&#8359; peseta', 'magic-elements' ),
                    '&#8369;' => esc_html__( '&#8369; peso', 'magic-elements' ),
                    '&#163;'  => esc_html__( '&#163; pound', 'magic-elements' ),
                    '&#8381;' => esc_html__( '&#8381; ruble', 'magic-elements' ),
                    'R$'      => esc_html__( 'R$ real', 'magic-elements' ),
                    '&#8360;' => esc_html__( '&#8360; rupee', 'magic-elements' ),
                    '&#8377;' => esc_html__( '&#8377; rupee (Indian)', 'magic-elements' ),
                    '&#8362;' => esc_html__( '&#8362; shekel', 'magic-elements' ),
                    '&#165;'  => esc_html__( '&#165; yen/yuan', 'magic-elements' ),
                    '&#8361;' => esc_html__( '&#8361; won', 'magic-elements' ),
                    '&#8383;' => esc_html__( '&#8383; bitcoin', 'magic-elements' ),
                ],
                'default' => '&#36;',
            ]
        );
        $this->add_control(
			'price',
			[
				'label'       => esc_html__( 'Price', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( '89.9', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your price', 'magic-elements' ),
			]
		);
        $this->add_control(
			'show_sale',
			[
				'label'        => esc_html__( 'Sale', 'magic-elements' ),
				'type'         => \Elementor\Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'no',
			]
		);
        $this->add_control(
			'original_price',
			[
                'label'     => esc_html__( 'Original Price', 'magic-elements' ),
                'type'      => \Elementor\Controls_Manager::TEXT,
                'default'   => esc_html__( '99.9', 'magic-elements' ),
                'condition' => [
                    'show_sale' => 'yes',   // Only show this control when switch is ON
                ]
			]
		);
        $this->add_control(
			'period',
			[
				'label'       => esc_html__( 'Period', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( '/monthly', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your period', 'magic-elements' ),
			]
		);
        $this->end_controls_section();

        $this->start_controls_section(
            'features_section',
            [
                'label' => esc_html__('Features', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
      
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'features_text',
            [
                'label'   => esc_html__( 'Text', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Default Text', 'magic-elements' ),
            ]
        );

        $repeater->add_control(
			'features_icon',
			[
				'label'   => esc_html__( 'Icon', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value'   => 'fas fa-check',
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
                'label'   => esc_html__( 'Repeater Items', 'magic-elements' ),
                'type'    => \Elementor\Controls_Manager::REPEATER,
                'fields'  => $repeater->get_controls(),
                'default' => [
                    [
                        'features_text' => __( 'Sample Text 1', 'magic-elements' ),
                        'features_icon' => 'fa fa-heart',
                    ],
                    [
                        'features_text' => __( 'Sample Text 2', 'magic-elements' ),
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
                'label' => __('Button', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'pricing_btn',
			[
				'label'       => esc_html__( 'Text', 'magic-elements' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( 'Button', 'magic-elements' ),
				'placeholder' => esc_html__( 'Type your button text', 'magic-elements' ),
			]
		);
        $this->add_control(
			'btn_link',
			[
				'label'   => esc_html__( 'Link', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::URL,
				'options' => [ 'url', 'is_external', 'nofollow' ],
				'default' => [
					'url'         => '#',
					'is_external' => true,
					'nofollow'    => true,
				],
				'label_block' => true,
			]
		);
		$this->add_control(
			'show_btn_icon',
			[
				'label'        => esc_html__( 'Icon', 'magic-elements' ),
				'type'         => \Elementor\Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);
		$this->add_control(
			'button_icon',
			[
				'label'   => esc_html__( 'Icon', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value'   => 'fas fa-arrow-right',
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
                'label' => esc_html__('Ribbon', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->add_control(
			'ribbon_control',
			[
				'label'        => esc_html__( 'Ribbon', 'magic-elements' ),
				'type'         => \Elementor\Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);
        $this->add_control(
			'ribbon_text',
			[
    'label'       => esc_html__( 'Ribbon Text', 'magic-elements' ),
    'type'        => \Elementor\Controls_Manager::TEXT,
    'default'     => esc_html__( 'Ribbon', 'magic-elements' ),
    'placeholder' => esc_html__( 'Type your title here', 'magic-elements' ),
    'condition'   => [
                    'ribbon_control' => 'yes',   // Only show this control when switch is ON
                ]
			]
		);
        $this->end_controls_section();
                /**
         * Style control start
         */
        $this->start_controls_section(
            'pricing_card_style',
            [
				'label'     => esc_html__('Table Style', 'magic-elements'),
				'tab'       => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'layout_style' => 'style_one'
				]
            ]
        );
        $this->add_control(
			'card_body_bg',
			[
				'label'     => esc_html__( 'Background Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .pricing-table-container' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_responsive_control(
			'card_body_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'name'     => 'card_border',
				'selector' => '{{WRAPPER}} .pricing-table-container',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'hex_border',
				'selector' => '{{WRAPPER}} .hex_border',
			]
		);
        $this->add_responsive_control(
			'card_body_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'name'     => 'card_body_shadow',
				'selector' => '{{WRAPPER}} .pricing-table-container',
			]
		);
        $this->end_controls_section();
		$this->start_controls_section(
            'pricing_card_style_two',
            [
				'label'     => esc_html__('Table Body', 'magic-elements'),
				'tab'       => \Elementor\Controls_Manager::TAB_STYLE,
				'condition' => [
					'layout_style' => 'style_two'
				]
            ]
        );
		$this->add_control(
			'table_reverse',
			[
				'label'   => esc_html__( 'Reverse', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row' => [
						'title' => esc_html__( 'Row', 'magic-elements' ),
						'icon'  => 'eicon-order-start',
					],
					'row-reverse' => [
						'title' => esc_html__( 'Row Reverse', 'magic-elements' ),
						'icon'  => 'eicon-order-end',
					],
				],
				'default'   => 'row',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .pricing-table-container' => 'flex-direction: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'left_options',
			[
				'label'     => esc_html__( 'Left Part', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'left_part_width',
			[
				'label'      => esc_html__( 'Width', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 1000,
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
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .left-part' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_responsive_control(
			'left_part_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'   => esc_html__( 'Vertical Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .left-part' => 'align-content: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'left_part_radius',
			[
				'label'      => esc_html__( 'Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'     => esc_html__( 'Right Part', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
		$this->add_responsive_control(
			'right_part_width',
			[
				'label'      => esc_html__( 'Width', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 1000,
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
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .right-part' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_responsive_control(
			'right_part_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'      => esc_html__( 'Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
                'label' => esc_html__('Header', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			'title_options',
			[
				'label'     => esc_html__( 'Title', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'title_typography',
				'selector' => '{{WRAPPER}} .title',
			]
		);
        $this->add_control(
			'title_color',
			[
				'label'     => esc_html__( 'Title Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .title' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'title_text_align',
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
					'{{WRAPPER}} .title' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'title_shadow',
				'selector' => '{{WRAPPER}} .title',
			]
		);
        $this->add_responsive_control(
			'title_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
                // Sub Title
        $this->add_control(
			'sub_title_options',
			[
				'label'     => esc_html__( 'Sub Title', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'sub_title_typography',
				'selector' => '{{WRAPPER}} .sub-title',
			]
		);
        $this->add_control(
			'sub_title_color',
			[
				'label'     => esc_html__( 'Sub Title Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .sub-title' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'sub-title_text_align',
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
					'{{WRAPPER}} .sub-title' => 'text-align: {{VALUE}};',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'sub_title_shadow',
				'selector' => '{{WRAPPER}} .sub-title',
			]
		);
        $this->add_responsive_control(
			'sub_title_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
					'isLinked' => false,
				],
				'selectors' => [
					'{{WRAPPER}} .sub-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
                // Price Style
        $this->start_controls_section(
            'price_style',
            [
                'label' => esc_html__('Price', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
			'price_text_align',
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
					'{{WRAPPER}} .price-box' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'price_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .current-price' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'current_price_options',
			[
				'label'     => esc_html__( 'Current Price', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'current_price_typography',
				'selector' => '{{WRAPPER}} .cp',
			]
		);
        $this->add_control(
			'price_align',
			[
				'label'   => esc_html__( 'Vertical Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .cp' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'currency_symbol_options',
			[
				'label'     => esc_html__( 'Currency Symbol', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'currency_symbol_typography',
				'selector' => '{{WRAPPER}} .cp-symble',
			]
		);
        $this->add_control(
			'currency_symbol_align',
			[
				'label'   => esc_html__( 'Vertical Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .cp-symble' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'original_price_options',
			[
    'label'     => esc_html__( 'Original Price', 'magic-elements' ),
    'type'      => \Elementor\Controls_Manager::HEADING,
    'separator' => 'before',
    'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'original_price_text_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
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
    'name'      => 'original_price_typography',
    'selector'  => '{{WRAPPER}} .original-price',
    'condition' => [
                    'show_sale' => 'yes',
                ]
			]
		);
        $this->add_control(
			'original_price_align',
			[
				'label'   => esc_html__( 'Vertical Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
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
				'label'      => esc_html__( 'Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 50,
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
				'label'     => esc_html__( 'Period', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'period_text_color',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .period' => 'color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'period_typography',
				'selector' => '{{WRAPPER}} .period',
			]
		);
        $this->add_control(
			'period_align',
			[
				'label'   => esc_html__( 'Vertical Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Top', 'magic-elements' ),
						'icon'  => 'eicon-v-align-top',
					],
					'center' => [
						'title' => esc_html__( 'Middle', 'magic-elements' ),
						'icon'  => 'eicon-v-align-middle',
					],
					'flex-end' => [
						'title' => esc_html__( 'Bottom', 'magic-elements' ),
						'icon'  => 'eicon-v-align-bottom',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .period' => 'align-content: {{VALUE}};',
				],
			]
		);
        $this->add_control(
			'period_gap',
			[
				'label'      => esc_html__( 'Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 50,
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
                // Features Style
        $this->start_controls_section(
            'features_style',
            [
                'label' => esc_html__('Features', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_responsive_control(
			'content_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'     => esc_html__( 'Item', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'features_align',
			[
				'label'   => esc_html__( 'Alignment', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-text-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default'   => 'center',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .f-item' => 'justify-content: {{VALUE}};',
				],
			]
		);
        $this->add_responsive_control(
			'features_margin',
			[
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'        => esc_html__( 'Items Border', 'magic-elements' ),
				'type'         => \Elementor\Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'magic-elements' ),
				'label_off'    => esc_html__( 'Hide', 'magic-elements' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
                'name'      => 'border',
                'selector'  => '{{WRAPPER}} .f-item:not(:last-child)',
                'condition' => [
                    'show_item_border' => 'yes'
                ],
			]
		);
        $this->add_responsive_control(
			'features_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
				'label'     => esc_html__( 'Icon', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_control(
			'icon_size',
			[
				'label'      => esc_html__( 'Icon Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
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
				'label'      => esc_html__( 'Icon Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
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
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .list-icon path' => 'fill: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'features_content_options',
			[
				'label'     => esc_html__( 'Content', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'f-item_typography',
				'selector' => '{{WRAPPER}} .f-item',
			]
		);
        $this->add_control(
			'f-item_color',
			[
				'label'     => esc_html__( 'Text Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .f-item' => 'color: {{VALUE}}',
				],
			]
		);
        $this->end_controls_section();
                // Button
        $this->start_controls_section(
            'button_style',
            [
                'label' => esc_html__('Button', 'magic-elements'),
                'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'emk_btn_typography',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_control(
			'btn_direction',
			[
				'label'   => esc_html__( 'Direction', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'flex-start' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'space-evenly' => [
						'title' => esc_html__( 'Center', 'magic-elements' ),
						'icon'  => 'eicon-h-align-center',
					],
					'flex-end' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
				],
				'default'   => 'space-evenly',
				'toggle'    => true,
				'selectors' => [
					'{{WRAPPER}} .emk-button' => 'justify-content: {{VALUE}};',
				],
			]
		);
		$this->add_responsive_control(
			'btn_padding',
			[
				'label'      => esc_html__( 'Padding', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 8,
					'right'    => 12,
					'bottom'   => 8,
					'left'     => 12,
					'unit'     => 'px',
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
				'label'      => esc_html__( 'Margin', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 0,
					'right'    => 0,
					'bottom'   => 0,
					'left'     => 0,
					'unit'     => 'px',
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
								  // Tabs control start
		$this->start_controls_tabs(
			'btn_style_tabs'
		);
		
		$this->start_controls_tab(
			'style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'magic-elements' ),
			]
		);
		$this->add_control(
			'btn_bg',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'btn_color',
			[
				'label'     => esc_html__( 'color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'btn_border',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_responsive_control(
			'btn_radius',
			[
				'label'      => esc_html__( 'Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 8,
					'right'    => 8,
					'bottom'   => 8,
					'left'     => 8,
					'unit'     => 'px',
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
				'name'     => 'btn_box_shadow',
				'selector' => '{{WRAPPER}} .emk-button a',
			]
		);
		$this->add_control(
			'btn_icon_options',
			[
				'label'     => esc_html__( 'Icon', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_direction',
			[
				'label'   => esc_html__( 'Icon Direction', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'row-reverse' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'row' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
				],
				'default'   => 'row',
				'toggle'    => true,
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
				'label'      => esc_html__( 'Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 50,
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
					'show_btn_icon'      => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_gap_reverse',
			[
				'label'      => esc_html__( 'Gap', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 50,
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
					'show_btn_icon'      => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_size',
			[
				'label'      => esc_html__( 'Size', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
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
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
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
				'label' => esc_html__( 'Hover', 'magic-elements' ),
			]
		);
		$this->add_control(
			'btn_bg_hover',
			[
				'label'     => esc_html__( 'Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover' => 'background-color: {{VALUE}}',
				],
			]
		);
		$this->add_control(
			'btn_color_hover',
			[
				'label'     => esc_html__( 'color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .emk-button a:hover' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'btn_border_hover',
				'selector' => '{{WRAPPER}} .emk-button a:hover',
			]
		);
		$this->add_responsive_control(
			'btn_radius_hover',
			[
				'label'      => esc_html__( 'Radius', 'magic-elements' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'default'    => [
					'top'      => 8,
					'right'    => 8,
					'bottom'   => 8,
					'left'     => 8,
					'unit'     => 'px',
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
				'name'     => 'btn_box_shadow_hover',
				'selector' => '{{WRAPPER}} .emk-button a:hover',
			]
		);
		$this->add_control(
			'btn_icon_options_hover',
			[
				'label'     => esc_html__( 'Icon', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'show_btn_icon' => 'yes'
				]
			]
		);
		$this->add_control(
			'btn_icon_color_hover',
			[
				'label'     => esc_html__( 'Color', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
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
                'label'     => esc_html__('Ribbon', 'magic-elements'),
                'tab'       => \Elementor\Controls_Manager::TAB_STYLE,
                'condition' => [
                    'ribbon_control' => 'yes',   // Only show this control when switch is ON
                ]
            ]
        );
        $this->add_control(
			'ribbon_direction',
			[
				'label'   => esc_html__( 'Direction', 'magic-elements' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'magic-elements' ),
						'icon'  => 'eicon-h-align-left',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'magic-elements' ),
						'icon'  => 'eicon-h-align-right',
					],
				],
			]
		);
        $this->add_control(
			'ribbon_bg',
			[
				'label'     => esc_html__( 'Ribbon Background', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .ribbon .ribbon-bar' => 'background-color: {{VALUE}}',
				],
			]
		);
        $this->add_control(
			'ribbon_ba',
			[
				'label'     => esc_html__( 'Ribbon Before After', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}   .pricing-table-container .ribbon::before, .pricing-table-container .ribbon::after ' => 'border-color: {{VALUE}}',
				],
			]
		);
        $this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'ribon_typography',
				'selector' => '{{WRAPPER}} .ribbon-bar span',
			]
		);
        $this->add_control(
			'ribbon_color',
			[
				'label'     => esc_html__( 'Ribbon Text', 'magic-elements' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}   .ribbon-bar span' => 'color: {{VALUE}}',
				],
			]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'ribbon_text_shadow',
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
        $settings = $this->get_settings_for_display();

        $layout_style = $settings['layout_style'];
        $file_path    = __DIR__ . '/layouts/pricing-table/';

        switch ($layout_style) {
            case 'style_two': 
                $file_path .= 'pricing_table_style_two.php';
                break;

            case 'style_one': 
                 default    : 
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