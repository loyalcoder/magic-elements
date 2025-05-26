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
        return 'eicon-person magicelements-editor-widgets-icon';
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
                'label' => __('Timeline Items', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'item_title',
            [
                'label' => __('Title', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Timeline Item', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'item_date',
            [
                'label' => __('Date', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('January 2023', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'item_content',
            [
                'label' => __('Content', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => __('Timeline item content goes here.', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'item_icon',
            [
                'label' => __('Icon', 'magic-elements'),
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
                'label' => __('Category', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'description' => __('For filtering timeline items', 'magic-elements'),
            ]
        );

        $this->add_control(
            'timeline_items',
            [
                'label' => __('Items', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'item_title' => __('Project Launch', 'magic-elements'),
                        'item_date' => __('January 2023', 'magic-elements'),
                        'item_content' => __('We launched our first product to the market.', 'magic-elements'),
                    ],
                    [
                        'item_title' => __('First Milestone', 'magic-elements'),
                        'item_date' => __('March 2023', 'magic-elements'),
                        'item_content' => __('Reached our first major milestone with 1000 users.', 'magic-elements'),
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
                'label' => __('Layout', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'layout_type',
            [
                'label' => __('Layout', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'vertical',
                'options' => [
                    'vertical' => __('Vertical', 'magic-elements'),
                    'vertical-alternate' => __('Vertical Alternate', 'magic-elements'),
                    'horizontal' => __('Horizontal', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'enable_3d',
            [
                'label' => __('Enable 3D Effect', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'enable_filtering',
            [
                'label' => __('Enable Filtering', 'ultimate-timeline'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
                'condition' => [
                    'layout_type!' => 'magic-elements',
                ],
            ]
        );

        $this->end_controls_section();


         // কন্টেইনার স্টাইল
    $this->start_controls_section(
        'container_style',
        [
            'label' => __('Container Style', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_responsive_control(
        'container_padding',
        [
            'label' => __('Padding', 'ultimate-timeline'),
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
            'label' => __('Background Color', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .ultimate-timeline' => 'background-color: {{VALUE}}',
            ],
        ]
    );

    $this->end_controls_section();

    // কানেক্টর লাইন স্টাইল
    $this->start_controls_section(
        'connector_style',
        [
            'label' => __('Connector Line', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'connector_color',
        [
            'label' => __('Color', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'default' => '#3498db',
            'selectors' => [
                '{{WRAPPER}} .timeline-connector' => 'background-color: {{VALUE}}',
            ],
        ]
    );

    $this->add_control(
        'connector_width',
        [
            'label' => __('Width', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'range' => [
                'px' => [
                    'min' => 1,
                    'max' => 20,
                ],
            ],
            'default' => [
                'size' => 3,
                'unit' => 'px',
            ],
            'selectors' => [
                '{{WRAPPER}} .vertical .timeline-connector' => 'width: {{SIZE}}{{UNIT}}',
                '{{WRAPPER}} .horizontal .timeline-connector' => 'height: {{SIZE}}{{UNIT}}',
            ],
        ]
    );

    $this->add_control(
        'connector_style_type',
        [
            'label' => __('Style', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'solid' => __('Solid', 'ultimate-timeline'),
                'dashed' => __('Dashed', 'ultimate-timeline'),
                'dotted' => __('Dotted', 'ultimate-timeline'),
                'double' => __('Double', 'ultimate-timeline'),
            ],
            'default' => 'solid',
            'selectors' => [
                '{{WRAPPER}} .timeline-connector' => 'border-style: {{VALUE}}',
                '{{WRAPPER}} .timeline-connector' => 'background: none',
                '{{WRAPPER}} .timeline-connector' => 'border-color: {{connector_color.VALUE}}',
            ],
        ]
    );

    $this->end_controls_section();

    // মার্কার স্টাইল
    $this->start_controls_section(
        'marker_style',
        [
            'label' => __('Marker Style', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'marker_type',
        [
            'label' => __('Marker Type', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'circle' => __('Circle', 'ultimate-timeline'),
                'square' => __('Square', 'ultimate-timeline'),
                'diamond' => __('Diamond', 'ultimate-timeline'),
                'number' => __('Number', 'ultimate-timeline'),
            ],
            'default' => 'circle',
        ]
    );

    $this->add_control(
        'marker_primary_color',
        [
            'label' => __('Primary Color', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'default' => '#3498db',
            'selectors' => [
                '{{WRAPPER}} .timeline-marker' => 'background-color: {{VALUE}}',
                '{{WRAPPER}} .timeline-marker' => 'border-color: {{VALUE}}',
            ],
        ]
    );

    $this->add_control(
        'marker_icon_color',
        [
            'label' => __('Icon Color', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'default' => '#ffffff',
            'selectors' => [
                '{{WRAPPER}} .timeline-marker i' => 'color: {{VALUE}}',
            ],
            'condition' => [
                'marker_type!' => 'number',
            ],
        ]
    );

    $this->add_responsive_control(
        'marker_size',
        [
            'label' => __('Size', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'range' => [
                'px' => [
                    'min' => 10,
                    'max' => 100,
                ],
            ],
            'default' => [
                'size' => 30,
                'unit' => 'px',
            ],
            'selectors' => [
                '{{WRAPPER}} .timeline-marker' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // কন্টেন্ট বক্স স্টাইল
    $this->start_controls_section(
        'content_style',
        [
            'label' => __('Content Box', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'content_bg_color',
        [
            'label' => __('Background Color', 'ultimate-timeline'),
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
            'label' => __('Border', 'ultimate-timeline'),
            'selector' => '{{WRAPPER}} .timeline-content',
        ]
    );

    $this->add_control(
        'content_border_radius',
        [
            'label' => __('Border Radius', 'ultimate-timeline'),
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
            'label' => __('Padding', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}} .timeline-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // টাইটেল স্টাইল
    $this->start_controls_section(
        'title_style',
        [
            'label' => __('Title', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'title_color',
        [
            'label' => __('Color', 'ultimate-timeline'),
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
            'name' => 'title_typography',
            'selector' => '{{WRAPPER}} .timeline-title',
        ]
    );

    $this->add_responsive_control(
        'title_margin',
        [
            'label' => __('Margin', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}} .timeline-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // তারিখ স্টাইল
    $this->start_controls_section(
        'date_style',
        [
            'label' => __('Date', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'date_color',
        [
            'label' => __('Color', 'ultimate-timeline'),
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
            'label' => __('Icon', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::ICONS,
            'default' => [
                'value' => 'fas fa-calendar-alt',
                'library' => 'solid',
            ],
        ]
    );

    $this->end_controls_section();

    // কন্টেন্ট টেক্সট স্টাইল
    $this->start_controls_section(
        'text_style',
        [
            'label' => __('Text', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'text_color',
        [
            'label' => __('Color', 'ultimate-timeline'),
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

    // ফিল্টার বাটন স্টাইল
    $this->start_controls_section(
        'filter_style',
        [
            'label' => __('Filter Buttons', 'ultimate-timeline'),
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
            'label' => __('Normal', 'ultimate-timeline'),
        ]
    );

    $this->add_control(
        'filter_button_color',
        [
            'label' => __('Text Color', 'ultimate-timeline'),
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
            'label' => __('Background Color', 'ultimate-timeline'),
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
            'label' => __('Hover/Active', 'ultimate-timeline'),
        ]
    );

    $this->add_control(
        'filter_button_hover_color',
        [
            'label' => __('Text Color', 'ultimate-timeline'),
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
            'label' => __('Background Color', 'ultimate-timeline'),
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
            'label' => __('Border Radius', 'ultimate-timeline'),
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
            'label' => __('Padding', 'ultimate-timeline'),
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
            'label' => __('Margin', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%', 'em'],
            'selectors' => [
                '{{WRAPPER}} .timeline-filter-button' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // এনিমেশন স্টাইল
    $this->start_controls_section(
        'animation_style',
        [
            'label' => __('Animation', 'ultimate-timeline'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'item_animation',
        [
            'label' => __('Animation', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::SELECT,
            'options' => [
                'none' => __('None', 'ultimate-timeline'),
                'fade' => __('Fade', 'ultimate-timeline'),
                'fade-up' => __('Fade Up', 'ultimate-timeline'),
                'fade-down' => __('Fade Down', 'ultimate-timeline'),
                'zoom-in' => __('Zoom In', 'ultimate-timeline'),
            ],
            'default' => 'fade-up',
        ]
    );

    $this->add_control(
        'animation_duration',
        [
            'label' => __('Duration (ms)', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::NUMBER,
            'default' => 600,
            'min' => 100,
            'max' => 5000,
            'step' => 100,
        ]
    );

    $this->add_control(
        'animation_delay',
        [
            'label' => __('Delay between items (ms)', 'ultimate-timeline'),
            'type' => \Elementor\Controls_Manager::NUMBER,
            'default' => 100,
            'min' => 0,
            'max' => 1000,
            'step' => 50,
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
        
        <div id="<?php echo esc_attr($id); ?>" class="<?php echo implode(' ', $classes); ?>">
            <?php if ($settings['enable_filtering'] === 'yes' && !empty($categories)) : ?>
                <div class="timeline-filters">
                    <button class="timeline-filter-button active" data-filter="all"><?php _e('All', 'ultimate-timeline'); ?></button>
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
