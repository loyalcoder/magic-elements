<?php
/**
 * Elementor Post List Widget - Fixed Version
 */
namespace MagicElements\Elementor;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;

if (!defined('ABSPATH')) exit;

class Post_List extends Widget_Base {

    public function get_name() {
        return 'em_kit_post_list';
    }

    public function get_title() {
        return esc_html__('Post List', 'magic-elements');
    }

    public function get_icon() {
        return 'eicon-post-list magicelements-editor-widgets-icon';
    }

    public function get_categories() {
        return ['magicelements-widgets'];
    }

    public function get_style_depends() {
        return ['emk-post-list'];
    }

    protected function register_controls() {
        $this->register_query_controls();
        $this->register_layout_controls();
        $this->register_content_controls();
    }

    protected function register_query_controls() {
        $this->start_controls_section(
            'section_query',
            [
                'label' => __('Query', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'post_source',
            [
                'label' => __('Post Source', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'recent' => __('Recent Posts', 'magic-elements'),
                    'popular' => __('Popular Posts', 'magic-elements'),
                    'selected' => __('Selected Posts', 'magic-elements'),
                    'taxonomy' => __('Taxonomy Posts', 'magic-elements'),
                ],
                'default' => 'recent',
            ]
        );

        $this->add_control(
            'popular_by',
            [
                'label' => __('Popular By', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'views' => __('Views', 'magic-elements'),
                    'comments' => __('Comments', 'magic-elements'),
                ],
                'condition' => ['post_source' => 'popular'],
                'default' => 'views'
            ]
        );

        $this->add_control(
            'selected_posts',
            [
                'label' => __('Select Posts', 'magic-elements'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->get_all_posts(),
                'multiple' => true,
                'label_block' => true,
                'condition' => ['post_source' => 'selected'],
            ]
        );

        $this->add_control(
            'taxonomy',
            [
                'label' => __('Taxonomy', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'options' => $this->get_taxonomies(),
                'condition' => ['post_source' => 'taxonomy'],
                'default' => 'category'
            ]
        );

        $this->add_control(
            'terms',
            [
                'label' => __('Terms', 'magic-elements'),
                'type' => Controls_Manager::SELECT2,
                'options' => $this->get_terms_options(),
                'multiple' => true,
                'label_block' => true,
                'condition' => ['post_source' => 'taxonomy'],
            ]
        );

        $this->add_control(
            'posts_per_page',
            [
                'label' => __('Number of Posts', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'default' => 6,
            ]
        );

        $this->end_controls_section();
    }

    protected function register_layout_controls() {
        $this->start_controls_section(
            'section_layout',
            [
                'label' => __('Layout', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'layout',
            [
                'label' => __('Layout Style', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'grid' => __('Grid', 'magic-elements'),
                    'list' => __('List', 'magic-elements'),
                ],
                'default' => 'grid',
                'prefix_class' => 'magic-post-layout-',
            ]
        );

        $this->add_responsive_control(
            'columns',
            [
                'label' => __('Columns', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                ],
                'condition' => ['layout' => 'grid'],
                'selectors' => [
                    '{{WRAPPER}} .magic-post-list' => 'grid-template-columns: repeat({{VALUE}}, 1fr)',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function register_content_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => __('Content', 'magic-elements'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_image',
            [
                'label' => __('Show Featured Image', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'magic-elements'),
                'label_off' => __('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Image_Size::get_type(),
            [
                'name' => 'image_size',
                'default' => 'medium',
                'condition' => ['show_image' => 'yes'],
            ]
        );

        $this->add_control(
            'show_title',
            [
                'label' => __('Show Title', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'magic-elements'),
                'label_off' => __('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'title_tag',
            [
                'label' => __('Title HTML Tag', 'magic-elements'),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'h1' => 'H1',
                    'h2' => 'H2',
                    'h3' => 'H3',
                    'h4' => 'H4',
                    'h5' => 'H5',
                    'h6' => 'H6',
                ],
                'default' => 'h3',
                'condition' => ['show_title' => 'yes'],
            ]
        );

        $this->add_control(
            'show_excerpt',
            [
                'label' => __('Show Excerpt', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'magic-elements'),
                'label_off' => __('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'excerpt_length',
            [
                'label' => __('Excerpt Length', 'magic-elements'),
                'type' => Controls_Manager::NUMBER,
                'default' => 20,
                'condition' => ['show_excerpt' => 'yes'],
            ]
        );

        $this->add_control(
            'show_meta',
            [
                'label' => __('Show Meta', 'magic-elements'),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => __('Show', 'magic-elements'),
                'label_off' => __('Hide', 'magic-elements'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'meta_data',
            [
                'label' => __('Meta Data', 'magic-elements'),
                'type' => Controls_Manager::SELECT2,
                'default' => ['date', 'author'],
                'multiple' => true,
                'options' => [
                    'author' => __('Author', 'magic-elements'),
                    'date' => __('Date', 'magic-elements'),
                    'categories' => __('Categories', 'magic-elements'),
                    'comments' => __('Comments', 'magic-elements'),
                ],
                'condition' => ['show_meta' => 'yes'],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $query_args = $this->get_query_args($settings);
        $posts = new \WP_Query($query_args);

        if (!$posts->have_posts()) {
            echo '<div class="magic-no-posts">' . esc_html__('No posts found', 'magic-elements') . '</div>';
            return;
        }

        $this->render_posts($posts, $settings);
        
        wp_reset_postdata();
    }

    protected function get_query_args($settings) {
        $args = [
            'post_type' => 'post',
            'posts_per_page' => $settings['posts_per_page'],
            'ignore_sticky_posts' => 1,
        ];

        switch ($settings['post_source']) {
            case 'popular':
                $args['orderby'] = ('views' === $settings['popular_by']) ? 'meta_value_num' : 'comment_count';
                if ('views' === $settings['popular_by']) {
                    $args['meta_key'] = 'post_views';
                }
                break;

            case 'selected':
                $args['post__in'] = $settings['selected_posts'];
                $args['orderby'] = 'post__in';
                break;

            case 'taxonomy':
                if (!empty($settings['taxonomy']) && !empty($settings['terms'])) {
                    $args['tax_query'] = [
                        [
                            'taxonomy' => $settings['taxonomy'],
                            'field' => 'term_id',
                            'terms' => $settings['terms'],
                        ]
                    ];
                }
                break;

            default: // recent
                $args['orderby'] = 'date';
                $args['order'] = 'DESC';
        }

        return $args;
    }

    protected function render_posts($posts, $settings) {
        echo '<div class="magic-post-list magic-post-layout-' . esc_attr($settings['layout']) . '">';

        while ($posts->have_posts()) {
            $posts->the_post();
            $this->render_single_post($settings);
        }

        echo '</div>';
    }

    protected function render_single_post($settings) {
        ?>
        <article class="magic-post-item">
            
            <?php if ('yes' === $settings['show_image'] && has_post_thumbnail()) : ?>
                <div class="magic-post-thumbnail">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail($settings['image_size_size']); ?>
                    </a>
                </div>
            <?php endif; ?>
            
            <div class="magic-post-content">
                
                <?php if ('yes' === $settings['show_title']) : ?>
                    <<?php echo esc_attr($settings['title_tag']); ?> class="magic-post-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </<?php echo esc_attr($settings['title_tag']); ?>>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['show_meta'] && !empty($settings['meta_data'])) : ?>
                    <div class="magic-post-meta">
                        <?php $this->render_meta_data($settings['meta_data']); ?>
                    </div>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['show_excerpt']) : ?>
                    <div class="magic-post-excerpt">
                        <?php echo wp_trim_words(get_the_excerpt(), $settings['excerpt_length']); ?>
                    </div>
                <?php endif; ?>
                
            </div>
        </article>
        <?php
    }

    protected function render_meta_data($meta_data) {
        foreach ($meta_data as $meta) {
            switch ($meta) {
                case 'author':
                    echo '<span class="post-author">';
                    echo get_the_author();
                    echo '</span>';
                    break;
                    
                case 'date':
                    echo '<span class="post-date">';
                    echo get_the_date();
                    echo '</span>';
                    break;
                    
                case 'categories':
                    $categories = get_the_category_list(', ');
                    if ($categories) {
                        echo '<span class="post-categories">' . $categories . '</span>';
                    }
                    break;
                    
                case 'comments':
                    echo '<span class="post-comments">';
                    comments_number();
                    echo '</span>';
                    break;
            }
        }
    }

    protected function get_all_posts() {
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

    protected function get_taxonomies() {
        $taxonomies = get_taxonomies([
            'public' => true,
            'object_type' => ['post'],
        ], 'objects');

        $options = [];
        foreach ($taxonomies as $taxonomy) {
            $options[$taxonomy->name] = $taxonomy->label;
        }

        return $options;
    }

    protected function get_terms_options() {
        // $settings = $this->get_settings();
        $terms = [];

        if (!empty($settings['taxonomy'])) {
            $terms = get_terms([
                'taxonomy' => $settings['taxonomy'],
                'hide_empty' => false,
            ]);
        }

        $options = [];

        if (!empty($terms) && !is_wp_error($terms)) {
            foreach ($terms as $term) {
                $options[$term->term_id] = $term->name;
            }
        }

        return $options;
    }
}