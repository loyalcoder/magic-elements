<?php 
namespace MagicElements\Trait;

trait Builder {
    public function get_builder_by_type($type = 'header') {
        $args = array(
            'post_type' => 'magic_builder',
            'posts_per_page' => -1,
            'meta_query' => array(
                array(
                    'key' => '_display_type',
                    'value' => $type,
                    'compare' => '='
                )
            )
        );
        $builder_posts = get_posts($args);
        return $builder_posts;
    }
    public function get_active_builder_by_type($type = 'header') {
        $builder_posts = $this->get_builder_by_type($type);
        foreach ($builder_posts as $builder_post) {
            if (get_post_meta($builder_post->ID, '_is_active', true) == 'yes') {
                return $builder_post;
            }
        }
        return null;
    }
    public function display_type_list() {
        $display_types = array(
            'header' => 'Header',
            'footer' => 'Footer',
        );
        return apply_filters('magic_elements_display_types', $display_types);
    }
    public function get_display_on_list() {
        $display = [
            'entire_website' => esc_html__('Entire Website', 'turbo-manager'),
            'front_page'     => esc_html__('Front Page', 'turbo-manager'),
            'blog_page'      => esc_html__('Blog Page', 'turbo-manager'),
            'four_0_4'       => esc_html__('404', 'turbo-manager'),
            'post_types'     => [
                'title'   => esc_html__('Post Types(Singular)', 'turbo-manager'),
				'options' => $this->get_all_post_type_list()
            ],
            'specific_select'  => esc_html__('Specific Select', 'turbo-manager'),
        ];

        // Add taxonomy groups
        return apply_filters('magic_elements_display_on_list', $display);
    }
    public function get_all_post_type() {
        return get_post_types(array(
            'public' => true,
            'show_in_nav_menus' => true,
        ), 'objects');
    }
    public function get_all_post_type_list() {
        $post_types = $this->get_all_post_type();
        $post_types_list = array();
        foreach ($post_types as $post_type) {
            $post_types_list[$post_type->name] = $post_type->label;
        }
        return $post_types_list;
    }
    public function get_all_taxonomy_by_post_type( $post_type ) {
        $taxonomies = get_taxonomies(array(
            'public' => true,
            'show_in_nav_menus' => true,
        ), 'objects');
        return $taxonomies;
    }
    public function get_all_term_list( $post_type, $taxonomies ) {
   
        $terms = get_terms(array(
            'taxonomy' => $taxonomies,
            'object_ids' => $post_type,
        ));
        return $terms;
    }
    public function get_post_list($post_type, $keyword = '') {
        $cache_key = 'magic_elements_post_list_' . $post_type . '_' . md5($keyword);
        $cached_posts = get_transient($cache_key);
        
        if (false !== $cached_posts) {
            return $cached_posts;
        }

        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => -1,
            's' => $keyword,
            'post_status' => 'publish',
            'orderby' => 'title',
            'order' => 'ASC'
        );
        
        $posts = get_posts($args);
        
        if (!empty($posts)) {
            set_transient($cache_key, $posts, HOUR_IN_SECONDS);
        }
        
        return $posts;
    }

    /**
     * Clear all cached post lists
     *
     * @return bool True if cache was cleared, false otherwise
     */
    public function clear_post_list_cache() {
        global $wpdb;
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_magic_elements_post_list_%'");
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_magic_elements_post_list_%'");
        return true;
    }
}