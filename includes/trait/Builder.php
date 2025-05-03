<?php 
namespace MagicElements\Trait;

trait Builder {
    public function get_builder_by_type($type = 'header', $paged = 1, $per_page = -1) {
        $args = array(
            'post_type' => 'magic_builder',
            'posts_per_page' => $per_page,
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
            'entire_website' => esc_html__('Entire Website', 'magic-elements'),
            'front_page'     => esc_html__('Front Page', 'magic-elements'),
            'blog_page'      => esc_html__('Blog Page', 'magic-elements'),
            'four_0_4'       => esc_html__('404', 'magic-elements'),
            'search_page'    => esc_html__('Search Page', 'magic-elements'),
            'blog_archive'   => esc_html__('Blog Archive', 'magic-elements'),
            'blog_date_archive' => esc_html__('Blog Date Archive', 'magic-elements'),
            'blog_category_archive' => esc_html__('Blog Category Archive', 'magic-elements'),
            'blog_tag_archive' => esc_html__('Blog Tag Archive', 'magic-elements'),
            'blog_author_archive' => esc_html__('Author Archive', 'magic-elements'),
            'singular' => esc_html__('Singular', 'magic-elements'),
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
        return get_object_taxonomies( $post_type, 'objects' );
    }
    public function get_all_term_list( $post_type, $taxonomies ) {
        $terms = get_terms(array(
            'taxonomy' => $taxonomies,
            'object_ids' => $post_type,
        ));
        return $terms;
    }
    public function get_post_list($post_type, $keyword = '') {
        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => -1,
            's' => $keyword,
            'post_status' => 'publish',
            'orderby' => 'title',
            'order' => 'ASC'
        );
        
        return get_posts($args);
    }

    public function generate_post_type_list($post_type) {
        $post_type_obj = get_post_type_object($post_type);
        if (!$post_type_obj) {
            return array();
        }
        $post_types_list = array();
        $post_types_list[$post_type] = array(
            'label' => $post_type_obj->label,
            'taxonomies' => array()
        );
        
        // Get all taxonomies for this post type
        $taxonomies = $this->get_all_taxonomy_by_post_type($post_type);
        
        foreach ($taxonomies as $taxonomy) {
            // Only include taxonomies that are shown in admin menu
            if ($taxonomy->show_in_menu) {
                $post_types_list[$post_type]['taxonomies'][$taxonomy->name] = array(
                    'label' => $taxonomy->label,
                    'terms' => $this->get_all_term_list($post_type, $taxonomy->name)
                );
            }
        }

        if ($post_type === 'post') {
            $post_types_list[$post_type]['blog_page'] = esc_html__('Blog Page', 'magic-elements');
        }
        
        $post_types_list[$post_type]['specific_pages'] = esc_html__('Specific ' . $post_type_obj->label . 's', 'magic-elements');
        _log($post_type);
        return $post_types_list;
    }
    public function post_type_archive_list( $post_type ) {
        $post_type_obj = get_post_type_object($post_type);
        if (!$post_type_obj) {
            return array();
        }
        $post_types_list = array();
        $post_types_list[$post_type] = array(
            'label' => esc_html__('All', 'magic-elements').' '.$post_type_obj->label,
            'taxonomies' => array()
        );
        $taxonomies = $this->get_all_taxonomy_by_post_type($post_type);
        foreach ($taxonomies as $taxonomy) {
            if ($taxonomy->show_in_menu) {
                $post_types_list[$post_type]['taxonomies'][$taxonomy->name] = array(
                    'label' => $taxonomy->label,
                    'terms' => $this->get_all_term_list($post_type, $taxonomy->name)
                );
            }
        }
        $post_types_list[$post_type]['specific_pages'] = esc_html__('Specific ' . $post_type_obj->label . 's', 'magic-elements');
        return $post_types_list;
    }
    public function user_role_list() {
        $user_roles = get_editable_roles();
        $user_roles_list = array(
            'logged_in' => esc_html__('Logged In Users', 'magic-elements'),
            'logged_out' => esc_html__('Logged Out Users', 'magic-elements')
        );
        
        foreach ($user_roles as $role_key => $user_role) {
            $user_roles_list[$role_key] = $user_role['name'];
        }
        return $user_roles_list;
    }
}