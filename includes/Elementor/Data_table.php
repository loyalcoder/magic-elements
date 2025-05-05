<?php

/**
 * Elementor Classes.
 *
 * @package Data Table Magic Elements
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
 * Elementor widget for Data Table.
 *
 * @since 1.0.0
 */
class Data_table extends Widget_Base
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
        return 'em_kit_data_table';
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
        return esc_html__('Data Table', 'magic-elements');
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
        return 'eicon-table magicelements-editor-widgets-icon';
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

    public function get_style_depends()
    {
        return ['emk-data-table'];
    }

    /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_data_table_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_data_table_controls()
    {
        $this->start_controls_section(
            'columns_section',
            [
                'label' => __('Table Columns', 'text-domain'),
            ]
        );

        $this->add_control(
            'table_columns',
            [
                'label' => __('Columns', 'text-domain'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'column_name',
                        'label' => __('Column Title', 'text-domain'),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'default' => __('Column', 'text-domain'),
                    ],
                    [
                        'name' => 'column_width',
                        'label' => __('Width', 'text-domain'),
                        'type' => \Elementor\Controls_Manager::SLIDER,
                        'size_units' => ['%', 'px'],
                        'range' => [
                            '%' => [
                                'min' => 1,
                                'max' => 100,
                            ],
                            'px' => [
                                'min' => 50,
                                'max' => 500,
                            ],
                        ],
                        'default' => [
                            'unit' => '%',
                            'size' => 20,
                        ],
                    ],
                ],
                'default' => [
                    [
                        'column_name' => __('First Name', 'text-domain'),
                    ],
                    [
                        'column_name' => __('Last Name', 'text-domain'),
                    ],
                ],
                'title_field' => '{{{ column_name }}}',
            ]
        );
        $this->end_controls_section();

        // Rows Repeater Control
        $this->start_controls_section(
            'rows_section',
            [
                'label' => __('Table Rows', 'text-domain'),
            ]
        );
        
        $this->add_control(
            'table_rows',
            [
                'label' => __('Rows', 'text-domain'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'row_cells',
                        'label' => __('Cells', 'text-domain'),
                        'type' => \Elementor\Controls_Manager::REPEATER,
                        'fields' => [
                            [
                                'name' => 'cell_content',
                                'label' => __('Cell Content', 'text-domain'),
                                'type' => \Elementor\Controls_Manager::TEXTAREA,
                                'default' => __('Cell Content', 'text-domain'),
                            ],
                        ],
                        'default' => [
                            [
                                'cell_content' => __('Cell 1', 'text-domain'),
                            ],
                            [
                                'cell_content' => __('Cell 2', 'text-domain'),
                            ],
                        ],
                    ],
                ],
                'default' => [
                    [
                        'row_cells' => [
                            [
                                'cell_content' => __('John', 'text-domain'),
                            ],
                            [
                                'cell_content' => __('Doe', 'text-domain'),
                            ],
                        ],
                    ],
                    [
                        'row_cells' => [
                            [
                                'cell_content' => __('Jane', 'text-domain'),
                            ],
                            [
                                'cell_content' => __('Smith', 'text-domain'),
                            ],
                        ],
                    ],
                ],
                'title_field' => __('Row', 'text-domain'),
            ]
        );
        
        $this->end_controls_section();
        
        //Style
        $this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'textdomain' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => esc_html__( 'Text Color', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .your-class' => 'color: {{VALUE}}',
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
        $settings = $this->get_settings_for_display();
        
        $columns = $settings['table_columns'];
        $rows = $settings['table_rows'];
       
        include __DIR__ . '/layouts/Data-Table/data-table.php';
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
