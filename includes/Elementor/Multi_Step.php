<?php
/**
 * Elementor Multi-Step Progress Bar Widget
 */
namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Core\Schemes\Color;
use Elementor\Core\Schemes\Typography;

if (!defined('ABSPATH')) {
    exit;
}

class Multi_Step extends Widget_Base
{
    public function get_name()
    {
        return 'em_kit_multi_step';
    }

    public function get_title()
    {
        return esc_html__('Multi-Step', 'magic-elements');
    }

    public function get_icon()
    {
        return 'eicon-flow magicelements-editor-widgets-icon';
    }

    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    public function get_keywords()
    {
        return [ 'step', 'flow', 'progress', 'multi-step'];
    }

    public function get_script_depends()
    {
        return ['emkit-multi-step', 'jquery'];
    }

    public function get_style_depends()
    {
        return ['emk-multi-step'];
    }

    protected function register_controls()
    {
        // Content Tab
        $this->register_content_controls();
        
        // Style Tab
        $this->register_style_controls();
    }

    protected function register_content_controls()
    {
        $this->start_controls_section(
            'section_steps',
            [
                'label' => esc_html__('Steps', 'magic-elements'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'step_title',
            [
                'label' => esc_html__('Title', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Step Title', 'magic-elements'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'step_content',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__('Step content goes here. Describe what this step is about.', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'step_icon',
            [
                'label' => esc_html__('Icon', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-check',
                    'library' => 'fa-solid',
                ],
            ]
        );

        $this->add_control(
            'steps',
            [
                'label' => esc_html__('Steps', 'magic-elements'),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'step_title' => esc_html__('Start Order', 'magic-elements'),
                        'step_content' => esc_html__('Begin your gift ordering process.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Prepare Gift', 'magic-elements'),
                        'step_content' => esc_html__('Select and prepare the perfect gift.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Pack Gift', 'magic-elements'),
                        'step_content' => esc_html__('Carefully pack the gift for shipping.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Decorate Box', 'magic-elements'),
                        'step_content' => esc_html__('Add decorative touches to the gift box.', 'magic-elements'),
                    ],
                    [
                        'step_title' => esc_html__('Send Gift', 'magic-elements'),
                        'step_content' => esc_html__('Finalize and send the gift to recipient.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ step_title }}}',
            ]
        );

        $this->add_control(
            'active_step',
            [
                'label' => esc_html__('Default Active Step', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 10,
                'step' => 1,
                'default' => 1,
            ]
        );

        $this->end_controls_section();

        // Navigation Controls
        $this->start_controls_section(
            'section_navigation',
            [
                'label' => esc_html__('Navigation', 'magic-elements'),
            ]
        );

        $this->add_control(
            'show_arrows',
            [
                'label' => esc_html__('Show Navigation Arrows', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Show', 'magic-elements'),
                'label_off' => esc_html__('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'prev_arrow',
            [
                'label' => esc_html__('Previous Arrow', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-arrow-left',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'next_arrow',
            [
                'label' => esc_html__('Next Arrow', 'magic-elements'),
                'type' => Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fas fa-arrow-right',
                    'library' => 'fa-solid',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'next_button_text',
            [
                'label' => esc_html__('Next Button Text', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Next', 'magic-elements'),
            ]
        );

        $this->add_control(
            'prev_button_text',
            [
                'label' => esc_html__('Previous Button Text', 'magic-elements'),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__('Previous', 'magic-elements'),
            ]
        );

        $this->end_controls_section();
    }

    protected function register_style_controls()
    {
        // Progress Bar Style
        $this->start_controls_section(
            'section_progress_bar_style',
            [
                'label' => esc_html__('Progress Bar', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'progress_bar_height',
            [
                'label' => esc_html__('Height', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 1,
                        'max' => 50,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 4,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'progress_bar_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'progress_bar_active_color',
            [
                'label' => esc_html__('Active Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar-fill' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'progress_bar_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 50,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-bar, {{WRAPPER}} .em-progress-bar-fill' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'progress_bar_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-progress-container' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Indicators Style
        $this->start_controls_section(
            'section_step_indicators_style',
            [
                'label' => esc_html__('Step Indicators', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'step_indicator_size',
            [
                'label' => esc_html__('Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 40,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_bg_color',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_active_bg_color',
            [
                'label' => esc_html__('Active Background', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_completed_bg_color',
            [
                'label' => esc_html__('Completed Background', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.completed' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_active_text_color',
            [
                'label' => esc_html__('Active Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'step_indicator_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-step-indicator',
            ]
        );

        $this->add_control(
            'step_indicator_active_border_color',
            [
                'label' => esc_html__('Active Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_indicator_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_indicator_typography',
                'selector' => '{{WRAPPER}} .em-step-indicator',
            ]
        );

        $this->add_responsive_control(
            'step_indicator_spacing',
            [
                'label' => esc_html__('Spacing Between Steps', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 20,
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicators-container' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Titles Style
        $this->start_controls_section(
            'section_step_titles_style',
            [
                'label' => esc_html__('Step Titles', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'step_title_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'step_title_active_color',
            [
                'label' => esc_html__('Active Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-indicator.active .em-step-title' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_title_typography',
                'selector' => '{{WRAPPER}} .em-step-title',
            ]
        );

        $this->add_responsive_control(
            'step_title_spacing',
            [
                'label' => esc_html__('Spacing', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-title' => 'margin-top: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Step Content Style
        $this->start_controls_section(
            'section_step_content_style',
            [
                'label' => esc_html__('Step Content', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'step_content_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'step_content_typography',
                'selector' => '{{WRAPPER}} .em-step-content',
            ]
        );

        $this->add_responsive_control(
            'step_content_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'step_content_margin',
            [
                'label' => esc_html__('Margin', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Navigation Buttons Style
        $this->start_controls_section(
            'section_navigation_buttons_style',
            [
                'label' => esc_html__('Navigation Buttons', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'button_typography',
                'selector' => '{{WRAPPER}} .em-nav-button',
            ]
        );

        $this->add_control(
            'button_width',
            [
                'label' => esc_html__('Width', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px', '%'],
                'range' => [
                    'px' => [
                        'min' => 50,
                        'max' => 500,
                    ],
                    '%' => [
                        'min' => 5,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'button_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em'],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'button_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->start_controls_tabs('button_tabs');

        $this->start_controls_tab(
            'button_normal',
            [
                'label' => esc_html__('Normal', 'magic-elements'),
            ]
        );

        $this->add_control(
            'button_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'button_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-nav-button',
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-nav-button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'button_hover',
            [
                'label' => esc_html__('Hover', 'magic-elements'),
            ]
        );

        $this->add_control(
            'button_hover_text_color',
            [
                'label' => esc_html__('Text Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'button_hover_background',
                'label' => esc_html__('Background', 'magic-elements'),
                'types' => ['classic', 'gradient'],
                'selector' => '{{WRAPPER}} .em-nav-button:hover',
            ]
        );

        $this->add_control(
            'button_hover_border_color',
            [
                'label' => esc_html__('Border Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-nav-button:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

        $this->add_control(
            'buttons_spacing',
            [
                'label' => esc_html__('Spacing Between Buttons', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-nav-buttons-container' => 'gap: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Navigation Arrows Style
        $this->start_controls_section(
            'section_navigation_arrows_style',
            [
                'label' => esc_html__('Navigation Arrows', 'magic-elements'),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'arrow_size',
            [
                'label' => esc_html__('Size', 'magic-elements'),
                'type' => Controls_Manager::SLIDER,
                'size_units' => ['px'],
                'range' => [
                    'px' => [
                        'min' => 10,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow' => 'font-size: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_color',
            [
                'label' => esc_html__('Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_hover_color',
            [
                'label' => esc_html__('Hover Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow:hover' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_background',
            [
                'label' => esc_html__('Background Color', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_control(
            'arrow_hover_background',
            [
                'label' => esc_html__('Hover Background', 'magic-elements'),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'arrow_border',
                'label' => esc_html__('Border', 'magic-elements'),
                'selector' => '{{WRAPPER}} .em-step-nav-arrow',
            ]
        );

        $this->add_control(
            'arrow_border_radius',
            [
                'label' => esc_html__('Border Radius', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'arrow_padding',
            [
                'label' => esc_html__('Padding', 'magic-elements'),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => ['px', 'em', '%'],
                'selectors' => [
                    '{{WRAPPER}} .em-step-nav-arrow' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $id = 'em-multi-step-wizard-' . $this->get_id();
        $active_step = $settings['active_step'] - 1; // Convert to 0-based index
        
        if (empty($settings['steps'])) {
            return;
        }
        ?>
        <div class="em-multi-step-wizard-container" id="<?php echo esc_attr($id); ?>">
            <!-- Progress Bar -->
            <div class="em-progress-container">
                <div class="em-progress-bar">
                    <div class="em-progress-bar-fill" style="width: <?php echo esc_attr(($active_step / (count($settings['steps']) - 1)) * 100); ?>%"></div>
                </div>
            </div>
            
            <!-- Step Indicators -->
            <div class="em-step-indicators-container">
                <?php foreach ($settings['steps'] as $index => $step): ?>
                    <div class="em-step-indicator-wrapper">
                        <div class="em-step-indicator <?php echo ($index === $active_step) ? 'active' : ''; ?> <?php echo ($index < $active_step) ? 'completed' : ''; ?>" 
                             data-step="<?php echo esc_attr($index); ?>">
                            <?php if (!empty($step['step_icon'])): ?>
                                <div class="em-step-icon">
                                    <?php \Elementor\Icons_Manager::render_icon($step['step_icon'], ['aria-hidden' => 'true']); ?>
                                </div>
                            <?php else: ?>
                                <span class="em-step-number"><?php echo esc_html($index + 1); ?></span>
                            <?php endif; ?>
                        </div>
                        <div class="em-step-title"><?php echo esc_html($step['step_title']); ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
            
            <!-- Step Content -->
            <div class="em-step-content-container">
                <?php foreach ($settings['steps'] as $index => $step): ?>
                    <div class="em-step-content <?php echo ($index === $active_step) ? 'active' : ''; ?>" data-step="<?php echo esc_attr($index); ?>">
                        <?php echo wp_kses_post($step['step_content']); ?>
                    </div>
                <?php endforeach; ?>
            </div>
            
            <!-- Navigation Buttons -->
            <div class="em-nav-buttons-container">
                <button type="button" class="em-nav-button em-prev-button" <?php echo ($active_step === 0) ? 'disabled' : ''; ?>>
                    <?php echo esc_html($settings['prev_button_text']); ?>
                </button>
                <button type="button" class="em-nav-button em-next-button" <?php echo ($active_step === count($settings['steps']) - 1) ? 'disabled' : ''; ?>>
                    <?php echo esc_html($settings['next_button_text']); ?>
                </button>
            </div>
            
            <?php if ('yes' === $settings['show_arrows']): ?>
                <div class="em-step-navigation">
                    <button type="button" class="em-step-nav-arrow em-step-prev" <?php echo ($active_step === 0) ? 'disabled' : ''; ?>>
                        <?php \Elementor\Icons_Manager::render_icon($settings['prev_arrow'], ['aria-hidden' => 'true']); ?>
                    </button>
                    <button type="button" class="em-step-nav-arrow em-step-next" <?php echo ($active_step === count($settings['steps']) - 1) ? 'disabled' : ''; ?>>
                        <?php \Elementor\Icons_Manager::render_icon($settings['next_arrow'], ['aria-hidden' => 'true']); ?>
                    </button>
                </div>
            <?php endif; ?>
        </div>
        
        <script>
            jQuery(document).ready(function($) {
                var $container = $('#<?php echo esc_attr($id); ?>');
                var $indicators = $container.find('.em-step-indicator');
                var $contents = $container.find('.em-step-content');
                var $progressFill = $container.find('.em-progress-bar-fill');
                var $prevButton = $container.find('.em-prev-button');
                var $nextButton = $container.find('.em-next-button');
                var $prevArrow = $container.find('.em-step-prev');
                var $nextArrow = $container.find('.em-step-next');
                var totalSteps = $indicators.length;
                var currentStep = <?php echo esc_attr($active_step); ?>;
                
                // Initialize
                updateUI();
                
                // Click on step indicators
                $indicators.on('click', function() {
                    var step = $(this).data('step');
                    if (step !== currentStep) {
                        currentStep = step;
                        updateUI();
                    }
                });
                
                // Navigation buttons
                $prevButton.on('click', goToPrevStep);
                $nextButton.on('click', goToNextStep);
                
                // Navigation arrows
                $prevArrow.on('click', goToPrevStep);
                $nextArrow.on('click', goToNextStep);
                
                // Keyboard navigation
                $(document).on('keydown', function(e) {
                    if ($container.is(':visible')) {
                        if (e.key === 'ArrowLeft') {
                            goToPrevStep();
                        } else if (e.key === 'ArrowRight') {
                            goToNextStep();
                        }
                    }
                });
                
                function goToPrevStep() {
                    if (currentStep > 0) {
                        currentStep--;
                        updateUI();
                    }
                }
                
                function goToNextStep() {
                    if (currentStep < totalSteps - 1) {
                        currentStep++;
                        updateUI();
                    }
                }
                
                function updateUI() {
                    // Update indicators
                    $indicators.removeClass('active completed');
                    $indicators.each(function(index) {
                        if (index === currentStep) {
                            $(this).addClass('active');
                        } else if (index < currentStep) {
                            $(this).addClass('completed');
                        }
                    });
                    
                    // Update content
                    $contents.removeClass('active');
                    $contents.eq(currentStep).addClass('active');
                    
                    // Update progress bar
                    var progressPercent = (currentStep / (totalSteps - 1)) * 100;
                    $progressFill.css('width', progressPercent + '%');
                    
                    // Update buttons state
                    $prevButton.prop('disabled', currentStep === 0);
                    $nextButton.prop('disabled', currentStep === totalSteps - 1);
                    
                    // Update arrows state
                    $prevArrow.prop('disabled', currentStep === 0);
                    $nextArrow.prop('disabled', currentStep === totalSteps - 1);
                }
            });
        </script>
        <?php
    }
}