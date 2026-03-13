<?php
/**
 * Frontend class for Magic Elements Builder
 *
 * @package MagicElements
 * @subpackage MBuilder
 * @since 1.0.0
 */

declare(strict_types=1);

namespace MagicElements\MBuilder;

use MagicElements\Traits\Builder;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Mbuilder_Frontend {
    use Builder;
    private static $_instance = null;

    /**
     * Get singleton instance
     *
     * @return self
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Initialize hooks and filters
     *
     * @return void
     */
    public function init()
    {
        // Replace header 
        add_action('get_header', [$this, 'replace_header']);
        // replace footer 
        add_action('get_footer', [$this, 'replace_footer']);
        add_action('magic_builder_header_content', [$this,'header_builder_put_content']);
        add_action('magic_builder_footer_content', [$this,'footer_builder_put_content']);
        // Clear cache on builder updates
        add_action('save_post_me_builder', [$this, 'clear_builder_cache']);
    }

    /**
     * Clear builder cache when post is updated
     *
     * @param int $post_id Post ID
     * @return void
     */
    public function clear_builder_cache($post_id) {
        if (get_post_type($post_id) === 'me_builder') {
            $this->delete_builder_cache();
        }
    }

    /**
     * Replace default header with custom header
     *
     * @return bool|void
     */
    public function replace_header()
    {
        $header_id = $this->get_active_id('header');
        
        if ( ! $header_id ) {
            return false;
        }
        include __DIR__. '/templates/header.php';
        $templates   = [];
        $templates[] = 'header.php';
        remove_all_actions('wp_head');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    public function replace_footer()
    {
        $footer_id = $this->get_active_id('footer');
        
        if ($footer_id == '') {
            return false;
        }
        include __DIR__. '/templates/footer.php';
        $templates   = [];
        $templates[] = 'footer.php';
        remove_all_actions('wp_footer');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    /**
     * Output header builder content
     *
     * @return bool|void
     */
    public function header_builder_put_content()
    {
        $active_header_id = $this->get_active_id('header');
        if($active_header_id == ''){
            return false;
        }
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_header_id, true);
        }
    }
    public function footer_builder_put_content()
    {
        $active_footer_id = $this->get_active_id('footer');

        if ( ! $active_footer_id ) {
            return false;
        }        
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_footer_id, false);
        }
    }
    /**
     * Get active header/footer ID for current request (respects display conditions).
     *
     * @param string $type 'header' or 'footer'.
     * @return int|false Template post ID or false.
     */
    public function get_active_id($type = 'header'){
        $args = [
            'post_type'      => 'me_builder',
            'post_status'    => 'publish',
            'posts_per_page' => 50,
            'meta_query'     => [
                'relation' => 'AND',
                [
                    'key'     => '_me_builder_type',
                    'value'   => $type,
                    'compare' => '=',
                ],
                [
                    'key'     => '_me_builder_status',
                    'value'   => '1',
                    'compare' => '=',
                ],
            ],
        ];
        $result = $this->get_builder_templates($args);
        
        if ( empty( $result['templates'] ) ) {
            return false;
        }

        $current_page = $this->get_current_page();

         if(isset($result['templates'])){
             foreach($result['templates'] as $templates){
                $template_id = ($templates['ID']) ? $templates['ID'] : '';
                // echo '<pre>';
                // print_r($templates);
                // echo '</pre>';
                
                if(isset($templates['condition'])){ 
                    foreach($templates['condition'] as $condition){
                        echo '<pre>';
                        print_r($condition);
                        echo '</pre>';
                    }
                      
                    foreach($templates['condition'] as $condition){
                        // exclude
                        
                        if(isset($condition['display_type']) && $condition['display_type'] == 'exclude'){
                            echo '<pre>';
                            print_r($condition);
                            echo '</pre>';
                            
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'custom'){
                                if(is_array($condition['post_ids']) && !empty($condition['post_ids']) && in_array($current_page['post_id'], $condition['post_ids'])){
                                    return '';
                                }
                            }
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'taxonomy'){
                                if(isset($condition['taxonomy_terms']) && !empty($condition['taxonomy_terms'])){
                                    if($condition['taxonomy'] == $current_page['taxonomy'] && in_array($current_page['term_id'], $condition['taxonomy_terms']) ){
                                        return '';
                                    }
                                }
                                if(isset($condition['taxonomy_terms']) && empty($condition['taxonomy_terms']))  {
                                    if($condition['taxonomy'] == $current_page['taxonomy']){
                                        return '';
                                    }
                                }                           
                            }
                            //  all post 
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'all_posts'){
                                if($current_page['post_type'] == $condition['post_type']){
                                    return '';
                                }
                            }
                            // all other header
                            
                            if(isset($condition['display_on']) && $condition['display_on'] != 'selective_singular'){    
                                if($current_page['type'] == $condition['display_on']){
                                    return '';
                                }
                            }                            
                            if(isset($condition['display_on']) && $condition['display_on'] == 'entire_website'){    
                                return '';
                            }
                        }
                        //  include 
                        if(isset($condition['display_type']) && $condition['display_type'] == 'include'){
                            
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'custom'){
                                
                                if(is_array($condition['post_ids']) && !empty($condition['post_ids']) && in_array($current_page['post_id'], $condition['post_ids'])){
                                    return $template_id;
                                }
                            }
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'taxonomy'){
                                if(isset($condition['taxonomy_terms']) && !empty($condition['taxonomy_terms'])){
                                    if($condition['taxonomy'] == $current_page['taxonomy'] && in_array($current_page['term_id'], $condition['taxonomy_terms']) ){
                                        return $template_id;
                                    }
                                }
                                if(isset($condition['taxonomy_terms']) && empty($condition['taxonomy_terms']))  {
                                    if($condition['taxonomy'] == $current_page['taxonomy']){
                                        return $template_id;
                                    }
                                }                           
                            }
                            //  all post 
                            if(isset($condition['selective_mode']) && $condition['selective_mode'] == 'all_posts'){
                                if($current_page['post_type'] == $condition['post_type']){
                                    return $template_id;
                                }
                            }
                            // all other header
                            
                            if(isset($condition['display_on']) && $condition['display_on'] != 'selective_singular'){    
                                if($current_page['type'] == $condition['display_on']){
                                    return $template_id;
                                }
                            }                            
                            if(isset($condition['display_on']) && $condition['display_on'] == 'entire_website'){    
                                return $template_id;
                            }
                        }
                    }
                }                
             }
         }
        return false;
    }
    protected function get_display_id($template_id, $include_list, $exclude_list, $current_page){

        if (empty($template_id)) {
            return false;
        }
    
        /*
        |------------------------------------------------
        | EXCLUDE CONDITIONS (priority)
        |------------------------------------------------
        */
        // echo '<pre>';
        // print_r($include_list);
        // echo '</pre>';
        // wp_die();
        
        if (!empty($exclude_list)) {
    
            foreach ($exclude_list as $condition) {
    
                if (!isset($condition['display_on'])) {
                    continue;
                }
    
                // match simple page types (front_page, blog_page, etc)
                if ($condition['display_on'] === $current_page['type']) {
                    return '';
                }
    
                // selective singular logic
                if ($condition['display_on'] === 'selective_singular') {
    
                    if ($current_page['post_type'] !== $condition['post_type']) {
                        continue;
                    }
    
                    if ($condition['selective_mode'] === 'all_posts') {
                        return '';
                    }
    
                    if ($condition['selective_mode'] === 'custom') {
    
                        if (!empty($condition['post_ids']) &&
                            in_array($current_page['post_id'], $condition['post_ids'])
                        ) {
                            return '';
                        }
                    }
                }
            }
        }
    
    
        /*
        |------------------------------------------------
        | INCLUDE CONDITIONS
        |------------------------------------------------
        */
    
        if (!empty($include_list)) {
    
            foreach ($include_list as $condition) {
    
                if (!isset($condition['display_on'])) {
                    continue;
                }
    
                // entire website
                if ($condition['display_on'] === 'entire_website') {
                    return $template_id;
                }
    
                // match page type (front_page, blog_page etc)
                if ($condition['display_on'] === $current_page['type']) {
                    return $template_id;
                }
    
                // selective singular
                if ($condition['display_on'] === 'selective_singular') {
    
                    if ($current_page['post_type'] !== $condition['post_type']) {
                        continue;
                    }
    
                    if ($condition['selective_mode'] === 'all_posts') {
                        return $template_id;
                    }
    
                    if ($condition['selective_mode'] === 'custom') {
    
                        if (!empty($condition['post_ids']) &&
                            in_array($current_page['post_id'], $condition['post_ids'])
                        ) {
                            return $template_id;
                        }
                    }
                }
            }
        }
    
        return false;
    }
    /**
     * Get current page type
     *
     * @param object $obj Query object
     * @return string|int|bool
     */
    /**
     * Get current page identifier for condition matching (string or singular post ID).
     *
     * @param object $obj Queried object.
     * @return string|int|false
     */
    public function get_current_page(){

        global $post;
    
        $data = [
            'type'        => '',
            'post_id'     => null,
            'post_type'   => null,
            'taxonomy'    => null,
            'term_id'     => null,
            'term_slug'   => null,
            'archive_pt'  => null,
        ];
    
        // Special contexts
        switch ( true ) {
    
            case is_404():
                $data['type'] = 'four_0_4';
                return $data;
    
            case is_search():
                $data['type'] = 'search_page';
                return $data;
    
            case is_front_page():
                $data['type'] = 'front_page';
                return $data;
    
            case is_home():
                $data['type'] = 'blog_page';
                return $data;
    
            case is_category():
                $term              = get_queried_object();
                $data['type']      = 'blog_category_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_tag():
                $term              = get_queried_object();
                $data['type']      = 'blog_tag_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_tax():
                $term              = get_queried_object();
                // For custom taxonomies, treat as generic blog archive.
                $data['type']      = 'blog_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_author():
                $data['type'] = 'blog_author_archive';
                return $data;
    
            case is_date():
                $data['type'] = 'blog_date_archive';
                return $data;
    
            case is_post_type_archive():
                // Generic blog archive (e.g. CPT archives) unless more specific conditions are added later.
                $data['type']       = 'blog_archive';
                $data['archive_pt'] = get_query_var('post_type');
    
                return $data;
    
            case is_archive():
                $data['type'] = 'blog_archive';
                return $data;
        }
    
        // Singular (post, page, custom post type)
        if ( is_singular() ) {
    
            $data['type']      = 'singular';
            $data['post_id']   = $post->ID ?? null;
            $data['post_type'] = get_post_type( $post );
    
            // Get taxonomy terms
            $taxonomies = get_object_taxonomies( $data['post_type'] );
    
            if ( ! empty( $taxonomies ) ) {
    
                foreach ( $taxonomies as $tax ) {
    
                    $terms = get_the_terms( $post->ID, $tax );
    
                    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
    
                        foreach ( $terms as $term ) {
    
                            $data['terms'][] = [
                                'taxonomy' => $tax,
                                'term_id'  => $term->term_id,
                                'slug'     => $term->slug,
                                'name'     => $term->name,
                            ];
                        }
                    }
                }
            }
    
            return $data;
        }
    
        return $data;
    }
}
