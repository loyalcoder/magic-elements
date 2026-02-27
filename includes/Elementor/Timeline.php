<?php

    /**
 * Elementor Classes.
 *
 * @package Team Magic Elements
 */


namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

    /**
 * Magic Elements for Elementor Extension
 *
 * Elementor widget for Team.
 *
 * @since 1.0.0
 */
class Timeline extends Widget_Base
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
        return 'magicelements_timeline';
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
        return esc_html__('Timeline', 'magic-elements');
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
        return 'eicon-time-line magicelements-editor-widgets-icon';
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
        return ['emk-timeline'];
    }

    public function get_script_depends()
    {
        return ['jquery','emkit-timeline'];
    }
        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_timeline_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_timeline_controls()
    {

          // Content Tab
          $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Timeline Items', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'item_title',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Timeline Item', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'item_date',
            [
                'label' => esc_html__('Date', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('January 2023', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'item_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__('Timeline item content goes here.', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'item_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-calendar',
                    'library' => 'solid',
                ],
            ]
        );

        $repeater->add_control(
            'item_category',
            [
                'label' => esc_html__('Category', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'description' => esc_html__('For filtering timeline items', 'magic-elements'),
            ]
        );

        $this->add_control(
            'timeline_items',
            [
                'label' => esc_html__('Items', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'item_title' => esc_html__('Project Launch', 'magic-elements'),
                        'item_date' => esc_html__('January 2023', 'magic-elements'),
                        'item_content' => esc_html__('We launched our first product to the market.', 'magic-elements'),
                    ],
                    [
                        'item_title' => esc_html__('First Milestone', 'magic-elements'),
                        'item_date' => esc_html__('March 2023', 'magic-elements'),
                        'item_content' => esc_html__('Reached our first major milestone with 1000 users.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ item_title }}}',
            ]
        );

        $this->end_controls_section();

        // Layout Tab
        $this->start_controls_section(
            'layout_section',
            [
                'label' => esc_html__('Layout', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'layout_type',
            [
                'label' => esc_html__('Layout', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'vertical',
                'options' => [
                    'vertical' => esc_html__('Vertical', 'magic-elements'),
                    'vertical-alternate' => esc_html__('Vertical Alternate', 'magic-elements')
                ],
            ]
        );

        $this->add_control(
            'enable_3d',
            [
                'label' => esc_html__('Enable 3D Effect', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'enable_filtering',
            [
                'label' => esc_html__('Enable Filtering', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
                'condition' => [
                    'layout_type!' => 'magic-elements',
                ],
            ]
        );

        $this->end_controls_section();


         // container style
        $this->start_controls_section(
            'container_style',
            [
                'label' => esc_html__('Container Style', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'container_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'container_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();
            // Connector Line Style
        $this->start_controls_section(
            'section_connector_style',
            [
                'label' => esc_html__('Connector Line', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'connector_line_color',
            [
                'label' => esc_html__('Line Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#3498db',
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-connector' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'connector_line_width',
            [
                'label' => esc_html__('Line Width', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 10,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'size' => 3,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline.vertical .timeline-connector' => 'border-width: {{SIZE}}{{UNIT}}',
                    '{{WRAPPER}} .ultimate-timeline.vertical-alternate .timeline-connector' => 'border-width: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'connector_line_style',
            [
                'label' => esc_html__('Line Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'solid' => esc_html__('Solid', 'magic-elements'),
                    'dashed' => esc_html__('Dashed', 'magic-elements'),
                    'dotted' => esc_html__('Dotted', 'magic-elements'),
                ],
                'default' => 'solid',
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-connector' => 'border-style: {{VALUE}}; background: none; border-color: {{connector_line_color.VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();
        // Marker Style
        $this->start_controls_section(
            'section_marker_style',
            [
                'label' => esc_html__('Marker', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'marker_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#3498db',
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-marker' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'marker_border_color',
            [
                'label' => esc_html__('Border Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-marker' => 'border-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'marker_icon_color',
            [
                'label' => esc_html__('Icon Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-marker i' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_responsive_control(
            'marker_size',
            [
                'label' => esc_html__('Size', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 60,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'size' => 24,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-marker' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'marker_border_width',
            [
                'label' => esc_html__('Border Width', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'size' => 3,
                    'unit' => 'px',
                ],
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .magic-elements' => 'border-width: {{SIZE}}{{UNIT}}; border-style: solid;',
                ],
            ]
        );

        $this->add_control(
            'marker_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .ultimate-timeline .timeline-marker' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

            // content box style
            $this->start_controls_section(
                'content_style',
                [
                    'label' => esc_html__('Content Box', 'magic-elements'),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );

            $this->add_control(
                'content_bg_color',
                [
                    'label' => esc_html__('Background Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#ffffff',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-content' => 'background-color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'content_border',
                    'label' => esc_html__('Border', 'magic-elements'),
                    'selector' => '{{WRAPPER}} .timeline-content',
                ]
            );

            $this->add_control(
                'content_border_radius',
                [
                    'label' => esc_html__('Border Radius', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Box_Shadow::get_type(),
                [
                    'name' => 'content_box_shadow',
                    'selector' => '{{WRAPPER}} .timeline-content',
                ]
            );

            $this->add_responsive_control(
                'content_padding',
                [
                    'label' => esc_html__('Padding', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%', 'em'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->end_controls_section();

            // title style
            $this->start_controls_section(
                'title_style',
                [
                    'label' => esc_html__('Title', 'magic-elements'),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );

            $this->add_control(
                'timeline_title_color',
                [
                    'label' => esc_html__('Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#333333',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-title' => 'color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'timeline_title_typography',
                    'selector' => '{{WRAPPER}} .timeline-title',
                ]
            );

            $this->add_responsive_control(
                'title_margin',
                [
                    'label' => esc_html__('Margin', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%', 'em'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->end_controls_section();

            // date style
            $this->start_controls_section(
                'date_style',
                [
                    'label' => esc_html__('Date', 'magic-elements'),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );

            $this->add_control(
                'date_color',
                [
                    'label' => esc_html__('Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#3498db',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-date' => 'color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'date_typography',
                    'selector' => '{{WRAPPER}} .timeline-date',
                ]
            );

            $this->add_control(
                'date_icon',
                [
                    'label' => esc_html__('Icon', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::ICONS,
                    'default' => [
                        'value' => 'fas fa-calendar-alt',
                        'library' => 'solid',
                    ],
                ]
            );

            $this->end_controls_section();

            // content text style
            $this->start_controls_section(
                'text_style',
                [
                    'label' => esc_html__('Text', 'magic-elements'),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                ]
            );

            $this->add_control(
                'text_color',
                [
                    'label' => esc_html__('Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#666666',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-text' => 'color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'text_typography',
                    'selector' => '{{WRAPPER}} .timeline-text',
                ]
            );

            $this->end_controls_section();

            // filter button style
            $this->start_controls_section(
                'filter_style',
                [
                    'label' => esc_html__('Filter Buttons', 'magic-elements'),
                    'tab' => \Elementor\Controls_Manager::TAB_STYLE,
                    'condition' => [
                        'enable_filtering' => 'yes',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'filter_typography',
                    'selector' => '{{WRAPPER}} .timeline-filter-button',
                ]
            );

            $this->start_controls_tabs('filter_button_tabs');

            $this->start_controls_tab(
                'filter_button_normal',
                [
                    'label' => esc_html__('Normal', 'magic-elements'),
                ]
            );

            $this->add_control(
                'filter_button_color',
                [
                    'label' => esc_html__('Text Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#333333',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button' => 'color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_control(
                'filter_button_bg_color',
                [
                    'label' => esc_html__('Background Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#f5f5f5',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button' => 'background-color: {{VALUE}}',
                    ],
                ]
            );

            $this->end_controls_tab();

            $this->start_controls_tab(
                'filter_button_hover',
                [
                    'label' => esc_html__('Hover/Active', 'magic-elements'),
                ]
            );

            $this->add_control(
                'filter_button_hover_color',
                [
                    'label' => esc_html__('Text Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#ffffff',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button:hover, {{WRAPPER}} .timeline-filter-button.active' => 'color: {{VALUE}}',
                    ],
                ]
            );

            $this->add_control(
                'filter_button_hover_bg_color',
                [
                    'label' => esc_html__('Background Color', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '#3498db',
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button:hover, {{WRAPPER}} .timeline-filter-button.active' => 'background-color: {{VALUE}}',
                    ],
                ]
            );

            $this->end_controls_tab();
            $this->end_controls_tabs();

            $this->add_control(
                'filter_button_border_radius',
                [
                    'label' => esc_html__('Border Radius', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_responsive_control(
                'filter_button_padding',
                [
                    'label' => esc_html__('Padding', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%', 'em'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_responsive_control(
                'filter_button_margin',
                [
                    'label' => esc_html__('Margin', 'magic-elements'),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%', 'em'],
                    'selectors' => [
                        '{{WRAPPER}} .timeline-filter-button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->end_controls_section();

            
            }

            protected function render() {
                $settings = $this->get_settings_for_display();
                $id = 'ultimate-timeline-' . $this->get_id();
                
                $classes = ['ultimate-timeline'];
                $classes[] = $settings['layout_type'];
                
                if ($settings['enable_3d'] === 'yes') {
                    $classes[] = 'perspective-3d';
                }
                
                if ($settings['enable_filtering'] === 'yes') {
                    $classes[] = 'filterable';
                }
                
                // Get unique categories for filtering
                $categories = [];
                foreach ($settings['timeline_items'] as $item) {
                    if (!empty($item['item_category'])) {
                        $categories[$item['item_category']] = $item['item_category'];
                    }
                }
                ?>
                
                <div id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
                    <?php if ($settings['enable_filtering'] === 'yes' && !empty($categories)) : ?>
                        <div class="timeline-filters">
                            <button class="timeline-filter-button active" data-filter="all"><?php esc_html_e('All', 'magic-elements'); ?></button>
                            <?php foreach ($categories as $category) : ?>
                                <button class="timeline-filter-button" data-filter="<?php echo esc_attr($category); ?>">
                                    <?php echo esc_html($category); ?>
                                </button>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="timeline-connector"></div>
                    
                    <div class="timeline-items-wrapper">
                        <?php foreach ($settings['timeline_items'] as $index => $item) : ?>
                            <div class="timeline-item" data-category="<?php echo esc_attr($item['item_category']); ?>">
                                <div class="timeline-marker">
                                    <?php \Elementor\Icons_Manager::render_icon($item['item_icon'], ['aria-hidden' => 'true']); ?>
                                </div>
                                <div class="timeline-content">
                                    <?php if ($item['item_date']) : ?>
                                        <div class="timeline-date"><?php echo esc_html($item['item_date']); ?></div>
                                    <?php endif; ?>
                                    <h3 class="timeline-title"><?php echo esc_html($item['item_title']); ?></h3>
                                    <div class="timeline-text"><?php echo wp_kses_post($item['item_content']); ?></div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                
                <?php
        

            }

                /**
             * Render Copyright output on the frontend.
             *
             * Written in PHP and used to generate the final HTML.
             *
             * @since 1.0.0
             * @access protected
             */
            

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
