<?php

    /**
 * Elementor Classes.
 *
 * @package Accordion Magic Elements
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
 * Elementor widget for Accordion.
 *
 * @since 1.0.0
 */
class Testimonial extends Widget_Base
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
        return 'em_kit_testimonial';
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
        return esc_html__('Testimonial', 'magic-elements');
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
        return 'eicon-testimonial-carousel magicelements-editor-widgets-icon';
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
        return ['emk-testimonial', 'slick'];
    }

    public function get_script_depends()
    {
        return ['emkit-testimonial', 'jquery' , 'slick'];
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

  // Content Tab
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'client_name',
            [
                'label' => __('Name', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('John Doe', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'client_position',
            [
                'label' => __('Position', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('CEO, Company', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'testimonial_content',
            [
                'label' => __('Content', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'client_image',
            [
                'label' => __('Image', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'rating',
            [
                'label' => __('Rating', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    '1' => '1 Star',
                    '2' => '2 Stars',
                    '3' => '3 Stars',
                    '4' => '4 Stars',
                    '5' => '5 Stars',
                ],
                'default' => '5',
            ]
        );

        $this->add_control(
            'testimonials',
            [
                'label' => __('Testimonials', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'client_name' => __('John Doe', 'magic-elements'),
                        'client_position' => __('CEO, Company', 'magic-elements'),
                        'testimonial_content' => __('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'magic-elements'),
                    ],
                    [
                        'client_name' => __('Jane Smith', 'magic-elements'),
                        'client_position' => __('Marketing Director', 'magic-elements'),
                        'testimonial_content' => __('Pellentesque euismod odio nec tellus volutpat, sed ultrices nisl tincidunt.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ client_name }}}',
            ]
        );

        $this->end_controls_section();

        // Settings Tab
        $this->start_controls_section(
            'settings_section',
            [
                'label' => __('Settings', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'layout',
            [
                'label' => __('Layout', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    'layout1' => __('Layout 1 - Classic', 'magic-elements'),
                    'layout2' => __('Layout 2 - Modern Card', 'magic-elements'),
                    'layout3' => __('Layout 3 - Side Image', 'magic-elements'),
                    'layout4' => __('Layout 4 - Bubble Style', 'magic-elements'),
                    'layout5' => __('Layout 5 - Minimalist', 'magic-elements'),
                ],
                'default' => 'layout1',
            ]
        );

        $this->add_control(
            'slides_to_show',
            [
                'label' => __('Slides to Show', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 5,
                'step' => 1,
                'default' => 3,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label' => __('Autoplay', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => __('Autoplay Speed (ms)', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3000,
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'show_arrows',
            [
                'label' => __('Show Arrows', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'show_dots',
            [
                'label' => __('Show Dots', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->end_controls_section();

         // Style Tab
    $this->start_controls_section(
        'section_style_container',
        [
            'label' => __('Container', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_responsive_control(
        'container_padding',
        [
            'label' => __('Padding', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', 'em', '%'],
            'selectors' => [
                '{{WRAPPER}} .pro-testimonial-widget' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_responsive_control(
        'container_margin',
        [
            'label' => __('Margin', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', 'em', '%'],
            'selectors' => [
                '{{WRAPPER}} .pro-testimonial-widget' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Background::get_type(),
        [
            'name' => 'container_background',
            'label' => __('Background', 'magic-elements'),
            'types' => ['classic', 'gradient'],
            'selector' => '{{WRAPPER}} .pro-testimonial-widget',
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Border::get_type(),
        [
            'name' => 'container_border',
            'label' => __('Border', 'magic-elements'),
            'selector' => '{{WRAPPER}} .pro-testimonial-widget',
        ]
    );

    $this->add_control(
        'container_border_radius',
        [
            'label' => __('Border Radius', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%'],
            'selectors' => [
                '{{WRAPPER}} .pro-testimonial-widget' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name' => 'container_box_shadow',
            'selector' => '{{WRAPPER}} .pro-testimonial-widget',
        ]
    );

    $this->end_controls_section();

    // Slide Content Style
    $this->start_controls_section(
        'section_style_content',
        [
            'label' => __('Content', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'content_text_color',
        [
            'label' => __('Text Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .testimonial-content' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'content_typography',
            'selector' => '{{WRAPPER}} .testimonial-content',
        ]
    );

    $this->add_responsive_control(
        'content_padding',
        [
            'label' => __('Padding', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', 'em', '%'],
            'selectors' => [
                '{{WRAPPER}} .testimonial-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_control(
        'content_background_color',
        [
            'label' => __('Background Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .testimonial-content' => 'background-color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'content_border_radius',
        [
            'label' => __('Border Radius', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%'],
            'selectors' => [
                '{{WRAPPER}} .testimonial-content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Text_Shadow::get_type(),
        [
            'name' => 'content_text_shadow',
            'selector' => '{{WRAPPER}} .testimonial-content',
        ]
    );

    $this->end_controls_section();

    // Client Name Style
    $this->start_controls_section(
        'section_style_name',
        [
            'label' => __('Name', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'name_text_color',
        [
            'label' => __('Text Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .client-name' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'name_typography',
            'selector' => '{{WRAPPER}} .client-name',
        ]
    );

    $this->add_responsive_control(
        'name_spacing',
        [
            'label' => __('Spacing', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px', 'em'],
            'range' => [
                'px' => [
                    'min' => 0,
                    'max' => 100,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .client-name' => 'margin-bottom: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // Client Position Style
    $this->start_controls_section(
        'section_style_position',
        [
            'label' => __('Position', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'position_text_color',
        [
            'label' => __('Text Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .client-position' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Typography::get_type(),
        [
            'name' => 'position_typography',
            'selector' => '{{WRAPPER}} .client-position',
        ]
    );

    $this->end_controls_section();

    // Image Style
    $this->start_controls_section(
        'section_style_image',
        [
            'label' => __('Image', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_responsive_control(
        'image_size',
        [
            'label' => __('Size', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px'],
            'range' => [
                'px' => [
                    'min' => 20,
                    'max' => 200,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .client-image' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                '{{WRAPPER}} .client-image img' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_responsive_control(
        'image_spacing',
        [
            'label' => __('Spacing', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px', 'em'],
            'range' => [
                'px' => [
                    'min' => 0,
                    'max' => 100,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .client-image' => 'margin-bottom: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Border::get_type(),
        [
            'name' => 'image_border',
            'selector' => '{{WRAPPER}} .client-image img',
        ]
    );

    $this->add_control(
        'image_border_radius',
        [
            'label' => __('Border Radius', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', '%'],
            'selectors' => [
                '{{WRAPPER}} .client-image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Box_Shadow::get_type(),
        [
            'name' => 'image_box_shadow',
            'selector' => '{{WRAPPER}} .client-image img',
        ]
    );

    $this->end_controls_section();

    // Rating Style
    $this->start_controls_section(
        'section_style_rating',
        [
            'label' => __('Rating', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
        ]
    );

    $this->add_control(
        'rating_color',
        [
            'label' => __('Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .testimonial-rating .star.full' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'rating_empty_color',
        [
            'label' => __('Empty Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .testimonial-rating .star.empty' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_responsive_control(
        'rating_size',
        [
            'label' => __('Size', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px', 'em'],
            'range' => [
                'px' => [
                    'min' => 10,
                    'max' => 60,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .testimonial-rating .star' => 'font-size: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_responsive_control(
        'rating_spacing',
        [
            'label' => __('Spacing', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px', 'em'],
            'range' => [
                'px' => [
                    'min' => 0,
                    'max' => 20,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .testimonial-rating' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                '{{WRAPPER}} .testimonial-rating .star' => 'margin-right: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->end_controls_section();

    // Navigation Arrows Style
    $this->start_controls_section(
        'section_style_navigation',
        [
            'label' => __('Navigation', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            'condition' => [
                'show_arrows' => 'yes',
            ],
        ]
    );

    $this->add_control(
        'arrow_size',
        [
            'label' => __('Size', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px'],
            'range' => [
                'px' => [
                    'min' => 20,
                    'max' => 60,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .slick-arrow' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                '{{WRAPPER}} .slick-arrow:before' => 'font-size: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_control(
        'arrow_color',
        [
            'label' => __('Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-arrow:before' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'arrow_background_color',
        [
            'label' => __('Background Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-arrow' => 'background-color: {{VALUE}};',
            ],
        ]
    );

    $this->add_group_control(
        \Elementor\Group_Control_Border::get_type(),
        [
            'name' => 'arrow_border',
            'selector' => '{{WRAPPER}} .slick-arrow',
        ]
    );

    $this->add_control(
        'arrow_border_radius',
        [
            'label' => __('Border Radius', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px', '%'],
            'selectors' => [
                '{{WRAPPER}} .slick-arrow' => 'border-radius: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_control(
        'arrow_hover_color',
        [
            'label' => __('Hover Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-arrow:hover:before' => 'color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'arrow_hover_background_color',
        [
            'label' => __('Hover Background', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-arrow:hover' => 'background-color: {{VALUE}};',
            ],
        ]
    );

    $this->end_controls_section();

    // Dots Style
    $this->start_controls_section(
        'section_style_dots',
        [
            'label' => __('Dots', 'magic-elements'),
            'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            'condition' => [
                'show_dots' => 'yes',
            ],
        ]
    );

    $this->add_control(
        'dots_size',
        [
            'label' => __('Size', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px'],
            'range' => [
                'px' => [
                    'min' => 5,
                    'max' => 20,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .slick-dots li button' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_control(
        'dots_color',
        [
            'label' => __('Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-dots li button' => 'background-color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'dots_active_color',
        [
            'label' => __('Active Color', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::COLOR,
            'selectors' => [
                '{{WRAPPER}} .slick-dots li.slick-active button' => 'background-color: {{VALUE}};',
            ],
        ]
    );

    $this->add_control(
        'dots_spacing',
        [
            'label' => __('Spacing', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::SLIDER,
            'size_units' => ['px'],
            'range' => [
                'px' => [
                    'min' => 0,
                    'max' => 20,
                ],
            ],
            'selectors' => [
                '{{WRAPPER}} .slick-dots li' => 'margin: 0 {{SIZE}}{{UNIT}};',
            ],
        ]
    );

    $this->add_responsive_control(
        'dots_margin',
        [
            'label' => __('Margin', 'magic-elements'),
            'type' => \Elementor\Controls_Manager::DIMENSIONS,
            'size_units' => ['px', 'em', '%'],
            'selectors' => [
                '{{WRAPPER}} .slick-dots' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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

        $id = 'testimonial-slider-' . $this->get_id(); ?>

         <div class="pro-testimonial-widget testimonial-<?php echo esc_attr($settings['layout']); ?>"
        data-slides-to-show="<?php echo esc_attr($settings['slides_to_show']); ?>"
        data-autoplay="<?php echo esc_attr($settings['autoplay']); ?>"
        data-autoplay-speed="<?php echo esc_attr($settings['autoplay_speed']); ?>"
        data-arrows="<?php echo esc_attr($settings['show_arrows']); ?>"
        data-dots="<?php echo esc_attr($settings['show_dots']); ?>">
        <div id="<?php echo esc_attr($id); ?>" class="testimonial-slider">
            <?php foreach ($settings['testimonials'] as $testimonial): ?>
                <div class="testimonial-slide">
                    <?php $this->render_testimonial($testimonial, $settings['layout']); ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php

     }
    protected function render_testimonial($testimonial, $layout) {
        switch ($layout) {
            case 'layout1':
                $this->render_layout1($testimonial);
                break;
            case 'layout2':
                $this->render_layout2($testimonial);
                break;
            case 'layout3':
                $this->render_layout3($testimonial);
                break;
            case 'layout4':
                $this->render_layout4($testimonial);
                break;
            case 'layout5':
                $this->render_layout5($testimonial);
                break;
            default:
                $this->render_layout1($testimonial);
        }
    }

    protected function render_layout1($testimonial) {
        ?>
        <div class="testimonial-layout1">
            <div class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></div>
            <div class="testimonial-meta">
                <div class="client-image">
                    <img src="<?php echo esc_url($testimonial['client_image']['url']); ?>" alt="<?php echo esc_attr($testimonial['client_name']); ?>">
                </div>
                <div class="client-info">
                    <h4 class="client-name"><?php echo esc_html($testimonial['client_name']); ?></h4>
                    <div class="client-position"><?php echo esc_html($testimonial['client_position']); ?></div>
                </div>
            </div>
            <div class="testimonial-rating">
                <?php $this->render_rating($testimonial['rating']); ?>
            </div>
        </div>
        <?php
    }

    protected function render_layout2($testimonial) {
        ?>
        <div class="testimonial-layout2">
            <div class="testimonial-card">
                <div class="testimonial-rating">
                    <?php $this->render_rating($testimonial['rating']); ?>
                </div>
                <div class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></div>
                <div class="testimonial-meta">
                    <div class="client-image">
                        <img src="<?php echo esc_url($testimonial['client_image']['url']); ?>" alt="<?php echo esc_attr($testimonial['client_name']); ?>">
                    </div>
                    <div class="client-info">
                        <h4 class="client-name"><?php echo esc_html($testimonial['client_name']); ?></h4>
                        <div class="client-position"><?php echo esc_html($testimonial['client_position']); ?></div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }

    protected function render_layout3($testimonial) {
        ?>
        <div class="testimonial-layout3">
            <div class="client-image">
                <img src="<?php echo esc_url($testimonial['client_image']['url']); ?>" alt="<?php echo esc_attr($testimonial['client_name']); ?>">
            </div>
            <div class="testimonial-right">
                <div class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></div>
                <div class="testimonial-meta">
                    <h4 class="client-name"><?php echo esc_html($testimonial['client_name']); ?></h4>
                    <div class="client-position"><?php echo esc_html($testimonial['client_position']); ?></div>
                </div>
                <div class="testimonial-rating">
                    <?php $this->render_rating($testimonial['rating']); ?>
                </div>
            </div>
        </div>
        <?php
    }

    protected function render_layout4($testimonial) {
        ?>
        <div class="testimonial-layout4">
            <div class="testimonial-bubble">
                <div class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></div>
                <div class="bubble-arrow"></div>
            </div>
            <div class="testimonial-meta">
                <div class="client-image">
                    <img src="<?php echo esc_url($testimonial['client_image']['url']); ?>" alt="<?php echo esc_attr($testimonial['client_name']); ?>">
                </div>
                <div class="client-info">
                    <h4 class="client-name"><?php echo esc_html($testimonial['client_name']); ?></h4>
                    <div class="client-position"><?php echo esc_html($testimonial['client_position']); ?></div>
                </div>
            </div>
            <div class="testimonial-rating">
                <?php $this->render_rating($testimonial['rating']); ?>
            </div>
        </div>
        <?php
    }

    protected function render_layout5($testimonial) {
        ?>
        <div class="testimonial-layout5">
            <div class="testimonial-content"><?php echo esc_html($testimonial['testimonial_content']); ?></div>
            <div class="testimonial-meta">
                <div class="client-info">
                    <h4 class="client-name"><?php echo esc_html($testimonial['client_name']); ?></h4>
                    <div class="client-position"><?php echo esc_html($testimonial['client_position']); ?></div>
                </div>
            </div>
        </div>
        <?php
    }

    protected function render_rating($rating) {
        $full_stars = (int)$rating;
        $empty_stars = 5 - $full_stars;
        
        for ($i = 0; $i < $full_stars; $i++) {
            echo '<span class="star full">★</span>';
        }
        for ($i = 0; $i < $empty_stars; $i++) {
            echo '<span class="star empty">☆</span>';
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
