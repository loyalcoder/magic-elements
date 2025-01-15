<?php

/**
 * Elementor Classes.
 *
 * @package MagicElements
 */

namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Magic Elements Text Editor Widget
 *
 * A custom Elementor widget for a Text Editor.
 *
 * @since 1.0.0
 */
class Text_Editor extends Widget_Base
{
    /**
     * Retrieve the widget name.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget name.
     */
    public function get_name()
    {
        return 'magicelements_text_editor';
    }

    /**
     * Retrieve the widget title.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget title.
     */
    public function get_title()
    {
        return esc_html__('Text Editor', 'magic-elements');
    }

    /**
     * Retrieve the widget icon.
     *
     * @since 1.0.0
     * @access public
     * @return string Widget icon.
     */
    public function get_icon()
    {
        return 'eicon-text-align-left magicelements-editor-widget-icon';
    }

    /**
     * Retrieve the list of categories the widget belongs to.
     *
     * @since 1.0.0
     * @access public
     * @return array Widget categories.
     */
    public function get_categories()
    {
        return ['magicelements-widgets'];
    }

    /**
     * Retrieve script dependencies.
     *
     * @since 1.0.0
     * @access public
     * @return array List of script dependencies.
     */
    public function get_script_depends()
    {
        return [];
    }

    /**
     * Retrieve the widget keywords.
     *
     * @since 1.0.0
     * @access public
     * @return array List of keywords associated with the widget.
     */
    public function get_keywords(): array
    {
        return ['text', 'editor', 'content', 'magic-elements', 'customize'];
    }

    /**
     * Register controls for the widget.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->start_controls_section(
            'magicelements_text_editor_section',
            [
                'label' => esc_html__('Text Editor', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'text_editor_description',
            [
                'label'       => esc_html__('Description', 'magic-elements'),
                'type'        => Controls_Manager::TEXTAREA,
                'default'     => esc_html__('Enter your text here.', 'magic-elements'),
                'placeholder' => esc_html__('Type your description here', 'magic-elements'),
            ]
        );

        $this->add_responsive_control(
            'text_columns',
            [
                'label'     => esc_html__('Columns', 'magic-elements'),
                'type'      => Controls_Manager::SELECT,
                'options'   => [
                    ''   => esc_html__('Default', 'magic-elements'),
                    '1'  => esc_html__('1', 'magic-elements'),
                    '2'  => esc_html__('2', 'magic-elements'),
                    '3'  => esc_html__('3', 'magic-elements'),
                ],
                'selectors' => [
                    '{{WRAPPER}}' => 'columns: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'magicelements_text_editor_style_section',
            [
                'label' => esc_html__('Text Editor Style', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'text_editor_color',
            [
                'label'     => esc_html__('Text Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .text_editor p' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section();
    }

    /**
     * Render the widget output on the frontend.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function render()
    {
        $settings = $this->get_settings_for_display();
        include __DIR__ . '/layouts/Text-Editor/text-editor.php';
    }

    /**
     * Render the widget as plain content in the editor.
     *
     * @since 1.0.0
     * @access public
     */
    public function render_plain_content()
    {
        echo esc_attr($this->get_settings('shortcode'));
    }

    /**
     * Render the widget in the live editor.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function content_template()
    {
    }
}
