<?php

    /**
 * Elementor Classes.
 *
 * @package Category List Magic Elements
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
 * Elementor widget for Category List.
 *
 * @since 1.0.0
 */
class News_Ticker extends Widget_Base
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
        return 'em_kit_news_ticker';
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
        return esc_html__('News Ticker', 'magic-elements');
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
        return 'eicon-single-page magicelements-editor-widgets-icon';
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
        return ['emk-news-ticker', 'emk-slick'];
    }

    public function get_script_depends()
    {
        return ['emkit-news-ticker', 'jquery' ,'emkit-slick'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_news_ticker_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_news_ticker_controls()
    {
           // Content Tab
           $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'elementor-multi-source-ticker'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Source Selection
        $this->add_control(
            'content_source',
            [
                'label' => __('Content Source', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'custom',
                'options' => [
                    'custom' => __('Custom Text', 'elementor-multi-source-ticker'),
                    'selected_posts' => __('Selected Posts', 'elementor-multi-source-ticker'),
                    'category' => __('Category Posts', 'elementor-multi-source-ticker'),
                ],
            ]
        );

        // Custom Text Repeater
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'custom_text',
            [
                'label' => __('Text', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('News Item', 'elementor-multi-source-ticker'),
            ]
        );

        $repeater->add_control(
            'custom_link',
            [
                'label' => __('Link', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => __('https://your-link.com', 'elementor-multi-source-ticker'),
            ]
        );

        $this->add_control(
            'custom_items',
            [
                'label' => __('Custom Items', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    ['custom_text' => __('Jun control', 'elementor-multi-source-ticker')],
                    ['custom_text' => __('Unlimited section nesting', 'elementor-multi-source-ticker')],
                    ['custom_text' => __('On-demand asset loading', 'elementor-multi-source-ticker')],
                ],
                'title_field' => '{{{ custom_text }}}',
                'condition' => [
                    'content_source' => 'custom',
                ],
            ]
        );

        // Selected Posts
        $this->add_control(
            'selected_posts',
            [
                'label' => __('Select Posts', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::SELECT2,
                'label_block' => true,
                'multiple' => true,
                'options' => $this->get_all_posts(),
                'condition' => [
                    'content_source' => 'selected_posts',
                ],
            ]
        );

        // Category Selection
        $this->add_control(
            'category_posts',
            [
                'label' => __('Select Category', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::SELECT2,
                'label_block' => true,
                'multiple' => false,
                'options' => $this->get_all_categories(),
                'condition' => [
                    'content_source' => 'category',
                ],
            ]
        );

        $this->add_control(
            'category_posts_count',
            [
                'label' => __('Number of Posts', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 5,
                'min' => 1,
                'max' => 20,
                'condition' => [
                    'content_source' => 'category',
                ],
            ]
        );

        // Ticker Title
        $this->add_control(
            'ticker_title',
            [
                'label' => __('Ticker Title', 'elementor-multi-source-ticker'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('BREAKING NEWS', 'elementor-multi-source-ticker'),
                'separator' => 'before',
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
            'direction',
            [
                'label' => __('Direction', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'horizontal',
                'options' => [
                    'horizontal' => __('Horizontal', 'magic-elements'),
                    'vertical' => __('Vertical', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'speed',
            [
                'label' => __('Speed (ms)', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3000,
                'min' => 500,
                'max' => 10000,
                'step' => 100,
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
            'pause_on_hover',
            [
                'label' => __('Pause on Hover', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'show_arrows',
            [
                'label' => __('Show Navigation Arrows', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'infinite_loop',
            [
                'label' => __('Infinite Loop', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'magic-elements'),
                'label_off' => __('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();

        // Style Tab
        $this->start_controls_section(
            'style_section',
            [
                'label' => __('Style', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_style_heading',
            [
                'label' => __('Title Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'title_background',
            [
                'label' => __('Title Background', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ff0000',
                'selectors' => [
                    '{{WRAPPER}} .ant-title' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => __('Title Text Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .ant-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'selector' => '{{WRAPPER}} .ant-title',
            ]
        );

        $this->add_control(
            'items_style_heading',
            [
                'label' => __('Items Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'items_background',
            [
                'label' => __('Items Background', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#f8f8f8',
                'selectors' => [
                    '{{WRAPPER}} .ant-ticker' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'items_color',
            [
                'label' => __('Items Text Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333333',
                'selectors' => [
                    '{{WRAPPER}} .ant-ticker-item' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'items_typography',
                'selector' => '{{WRAPPER}} .ant-ticker-item',
            ]
        );

        $this->add_control(
            'arrows_style_heading',
            [
                'label' => __('Arrows Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'arrows_color',
            [
                'label' => __('Arrows Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333333',
                'selectors' => [
                    '{{WRAPPER}} .ant-arrow' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'arrows_hover_color',
            [
                'label' => __('Arrows Hover Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ff0000',
                'selectors' => [
                    '{{WRAPPER}} .ant-arrow:hover' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'show_arrows' => 'yes',
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

        
    
        $news_ticker_setting['direction'] = $settings['direction'];
        $news_ticker_setting['speed'] = $settings['speed'];
        $news_ticker_setting['autoplay'] = $settings['autoplay'];
        $news_ticker_setting['pause_on_hover'] = $settings['pause_on_hover'];
        $news_ticker_setting['show_arrows'] = $settings['show_arrows'];
        $news_ticker_setting['infinite_loop'] = $settings['infinite_loop'];


        $news_ticker_setting_obj = json_encode($news_ticker_setting);
       
        
       
    

        include __DIR__ . '/layouts/news-ticker/news-ticker.php';
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
        // Helper function to fetch all categories
        private function get_all_posts() {
            $posts = get_posts([
                'post_type' => 'post',
                'post_status' => 'publish',
                'numberposts' => -1,
            ]);
    
            $options = [];
            foreach ($posts as $post) {
                $options[$post->ID] = $post->post_title;
            }
    
            return $options;
        }
    
        // Helper function to get all categories
        private function get_all_categories() {
            $categories = get_categories([
                'hide_empty' => false,
            ]);
    
            $options = [];
            foreach ($categories as $category) {
                $options[$category->term_id] = $category->name;
            }
    
            return $options;
        }
    
}
