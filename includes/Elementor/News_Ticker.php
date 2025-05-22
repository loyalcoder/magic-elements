<?php
namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) {
    exit;
}


class News_Ticker extends Widget_Base

{
    public function get_name() {
        return 'em_kit_news_ticker';
    }

    public function get_title() {
        return esc_html__('News Ticker', 'magic-elements');
    }

    public function get_icon() {
        return 'eicon-single-page magicelements-editor-widgets-icon';
    }

    public function get_categories() {
        return ['magicelements-widgets'];
    }

    public function get_style_depends() {
        return ['emk-news-ticker', 'slick'];
    }

    public function get_script_depends() {
        return ['emkit-news-ticker', 'jquery', 'slick'];
    }

    protected function register_controls() {
        $this->register_content_controls();
        $this->register_style_controls();
    }

    protected function register_content_controls() {
        // Content Tab
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Content Source
        $this->add_control(
            'content_source',
            [
                'label' => esc_html__('Content Source', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'custom',
                'options' => [
                    'custom' => esc_html__('Custom Text', 'magic-elements'),
                    'selected_posts' => __('Selected Posts', 'magic-elements'),
                    'category' => esc_html__('Category Posts', 'magic-elements'),
                ],
            ]
        );

        // Custom Text Repeater
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'custom_text',
            [
                'label' => esc_html__('Text', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('News Item', 'magic-elements'),
            ]
        );

        $repeater->add_control(
            'custom_link',
            [
                'label' => esc_html__('Link', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__('https://your-link.com', 'magic-elements'),
            ]
        );

        $this->add_control(
            'custom_items',
            [
                'label' => esc_html__('Custom Items', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    ['custom_text' => esc_html__('Jun control', 'magic-elements')],
                    ['custom_text' => esc_html__('Unlimited section nesting', 'magic-elements')],
                    ['custom_text' => esc_html__('On-demand asset loading', 'magic-elements')],
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
                'label' => esc_html__('Select Posts', 'magic-elements'),
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
                'label' => esc_html__('Select Category', 'magic-elements'),
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
                'label' => esc_html__('Number of Posts', 'magic-elements'),
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
                'label' => esc_html__('Ticker Title', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('BREAKING NEWS', 'magic-elements'),
                'separator' => 'before',
            ]
        );

        $this->end_controls_section();

        // Settings Tab
        $this->start_controls_section(
            'settings_section',
            [
                'label' => esc_html__('Settings', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
            );

        $this->add_responsive_control(
            'slide_show',
            [
                'label' => esc_html__('Slide Show', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 2,
                'min' => 1,
                'max' => 10,
                'step' => 1,
            ]
        );

        $this->add_responsive_control(
            'slide_scroll',
            [
                'label' => esc_html__('Slide Scroll', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 2,
                'min' => 1,
                'max' => 10,
                'step' => 1,
            ]
        );

        $this->add_control(
            'speed',
            [
                'label' => esc_html__('Scroll Speed (ms)', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3000,
                'min' => 500,
                'max' => 10000,
                'step' => 100,
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => esc_html__('Autoplay Speed', 'magic-elements'),
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
                'label' => esc_html__('Autoplay', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'pause_on_hover',
            [
                'label' => esc_html__('Pause on Hover', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'infinite_loop',
            [
                'label' => esc_html__('Infinite Loop', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'magic-elements'),
                'label_off' => esc_html__('No', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();
    }

    protected function register_style_controls() {
        // Style Tab
        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('Style', 'magic-elements'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_style_heading',
            [
                'label' => esc_html__('Title Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'title_background',
            [
                'label' => esc_html__('Title Background', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ff0000',
                'selectors' => [
                    '{{WRAPPER}} .mst-title' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__('Title Text Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .mst-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'selector' => '{{WRAPPER}} .mst-title',
            ]
        );

        $this->add_control(
            'items_style_heading',
            [
                'label' => esc_html__('Items Style', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::HEADING,
                'separator' => 'before',
            ]
        );

        $this->add_control(
            'items_background',
            [
                'label' => esc_html__('Items Background', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#f8f8f8',
                'selectors' => [
                    '{{WRAPPER}} .mst-content' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'items_color',
            [
                'label' => esc_html__('Items Text Color', 'magic-elements'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333333',
                'selectors' => [
                    '{{WRAPPER}} .mst-item' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'items_typography',
                'selector' => '{{WRAPPER}} .mst-item',
            ]
        );

       
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $id = 'mst-' . $this->get_id();
        
        

        // Slider settings for JS
        $slider_settings = [
            'slideShow' => $settings['slide_show'] ,
            'slideScroll' => $settings['slide_scroll'],
            'autoplay' => $settings['autoplay'] === 'yes',
            'speed' => $settings['speed'],
            'autoplaySpeed' => $settings['autoplay_speed'],
            'pauseOnHover' => $settings['pause_on_hover'] === 'yes',
            'infinite' => $settings['infinite_loop'] === 'yes',
        ];
        
        

        $this->add_render_attribute('ticker-container', [
            'id' => $id,
            'class' => ['multi-source-ticker', 'mst-title-right'],
            'data-settings' => wp_json_encode($slider_settings)
        ]);
        ?>

        <div <?php echo $this->get_render_attribute_string('ticker-container'); ?>>
            <div class="mst-header">
                    <div class="mst-title"><?php echo esc_html($settings['ticker_title']); ?></div>
                <div class="mst-content">
                    <?php $this->render_content_items($settings); ?>
                </div>             
            </div>
        </div>
        <?php
    }

    protected function render_content_items($settings) {
        switch ($settings['content_source']) {
            case 'selected_posts':
                $this->render_selected_posts($settings['selected_posts']);
                break;
            case 'category':
                $this->render_category_posts($settings['category_posts'], $settings['category_posts_count']);
                break;
            case 'custom':
            default:
                $this->render_custom_items($settings['custom_items']);
                break;
        }
    }

    protected function render_selected_posts($post_ids) {
        if (empty($post_ids)) return;

        $posts = get_posts([
            'post__in' => $post_ids,
            'orderby' => 'post__in',
            'post_status' => 'publish'
        ]);

        foreach ($posts as $post) {
            echo '<div class="mst-item">';
            echo '<a href="' . esc_url(get_permalink($post->ID)) . '">';
            echo esc_html($post->post_title);
            echo '</a>';
            echo '</div>';
        }
    }

    protected function render_category_posts($category_id, $count) {
        if (empty($category_id)) return;

        $cats = get_categories([
            'category' => $category_id,
            'numberposts' => $count,
            'post_status' => 'publish'
        ]);

        foreach ($cats as $cat) {
            echo '<div class="mst-item">';
            echo '<a href="' . esc_url(get_permalink($cat->term_id)) . '">';
            echo esc_html($cat->name);
            echo '</a>';
            echo '</div>';
        }
    }

    protected function render_custom_items($items) {
        if (empty($items)) return;

        foreach ($items as $item) {
            echo '<div class="mst-item">';
            if (!empty($item['custom_link']['url'])) {
                echo '<a href="' . esc_url($item['custom_link']['url']) . '"';
                echo ' target="' . ($item['custom_link']['is_external'] ? '_blank' : '_self') . '"';
                echo ' rel="' . ($item['custom_link']['nofollow'] ? 'nofollow' : '') . '">';
                echo esc_html($item['custom_text']);
                echo '</a>';
            } else {
                echo esc_html($item['custom_text']);
            }
            echo '</div>';
        }
    }

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