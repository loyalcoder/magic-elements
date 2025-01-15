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
 * Magic Elements Tab Widget
 *
 * A custom Elementor widget for Tabs.
 *
 * @since 1.0.0
 */
class MagicElements_Tab extends Widget_Base
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
        return 'magicelements_tab';
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
        return esc_html__('Tab', 'magic-elements');
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
        return 'eicon-accordion magicelements-editor-widget-icon';
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
     * Retrieve the widget keywords.
     *
     * @since 1.0.0
     * @access public
     * @return array List of keywords associated with the widget.
     */
    public function get_keywords(): array
    {
        return ['tab', 'accordion', 'toggle', 'content', 'magic-elements'];
    }

    /**
     * Retrieve style dependencies.
     *
     * @since 1.0.0
     * @access public
     * @return array List of style dependencies.
     */
    public function get_style_depends()
    {
        return ['magicelements-tab'];
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
        return ['magicelements-tab', 'jquery'];
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
            'magicelements_tabs_section',
            [
                'label' => esc_html__('Tabs', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'tab_title',
            [
                'label'   => esc_html__('Tab Title', 'magic-elements'),
                'type'    => Controls_Manager::TEXT,
                'default' => 'Tab Title',
            ]
        );

        $repeater->add_control(
            'tab_content',
            [
                'label'   => esc_html__('Tab Content', 'magic-elements'),
                'type'    => Controls_Manager::WYSIWYG,
                'default' => 'Content for this tab.',
            ]
        );

        $this->add_control(
            'tabs',
            [
                'label'       => esc_html__('Tabs', 'magic-elements'),
                'type'        => Controls_Manager::REPEATER,
                'fields'      => $repeater->get_controls(),
                'default'     => [
                    [
                        'tab_title'   => esc_html__('Tab 1', 'magic-elements'),
                        'tab_content' => esc_html__('This is the content for the first tab.', 'magic-elements'),
                    ],
                    [
                        'tab_title'   => esc_html__('Tab 2', 'magic-elements'),
                        'tab_content' => esc_html__('This is the content for the second tab.', 'magic-elements'),
                    ],
                ],
                'title_field' => '{{{ tab_title }}}',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'magicelements_tabs_style_section',
            [
                'label' => esc_html__('Tabs Style', 'magic-elements'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'tabs_background_color',
            [
                'label'     => esc_html__('Background Color', 'magic-elements'),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .tab' => 'background-color: {{VALUE}};',
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
        $tabs     = $settings['tabs'];

        include __DIR__ . '/layouts/tab.php';
    }

    /**
     * Render the widget in plain text in the editor.
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
