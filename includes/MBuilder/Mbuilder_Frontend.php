<?php
declare(strict_types=1);

namespace MagicElements\MBuilder;

use MagicElements\Traits\Builder;

class Mbuilder_Frontend {
    use Builder;
    private static $_instance = null;

    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function init()
    {
        // Replace header 
        add_action('get_header', [$this, 'replace_header']);
        add_action('magic_builder_header_content', [$this,'header_builder_put_content']);
        
        // Clear cache on builder updates
        add_action('save_post_me_builder', [$this, 'clear_builder_cache']);
    }

    public function clear_builder_cache($post_id) {
        if (get_post_type($post_id) === 'me_builder') {
            $this->delete_builder_cache();
        }
    }

    public function replace_header()
    {
        $header_id = $this->active_header_id();
        
        if ($header_id == '') {
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

    public function header_builder_put_content()
    {
        $active_header_id = $this->active_header_id();
        
        if($active_header_id == ''){
            return false;
        }
        if (class_exists('\Elementor\Plugin')) {
            echo wp_kses_post(\Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_header_id), ['style' => []]);
        }
    }

    public function active_header_id(){
        $args = [
            'post_type' => 'me_builder',
            'post_status' => 'publish',
            'posts_per_page' => 1,
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key' => '_me_builder_type',
                    'value' => 'header',
                    'compare' => '='
                ],
                [
                    'key' => '_me_builder_status', 
                    'value' => '1',
                    'compare' => '='
                ]
            ]
        ];
        $header_post = $this->get_builder_templates($args);
        
        if(empty($header_post)){
            return false;
        }
        $post_id = isset($header_post['templates'][0]['ID']) ? $header_post['templates'][0]['ID'] : 0;        
        return $this->should_display_header($post_id);         
    }

    public function should_display_header($header_id) {
        if (!$header_id) {
            return false;
        }        
        $get_display_condition = get_post_meta($header_id, '_me_builder_condition', true);
        $include = [];
        $exclude = [];
        if (!empty($get_display_condition)) {
            foreach ($get_display_condition as $condition) {
                if ($condition['display_type'] == 'include') {
                    $include[] = $condition['display_on'];
                } else {
                    $exclude[] = $condition['display_on'];
                }
            }
        }
        $query_object = get_queried_object();
        $current_page = $this->get_current_page($query_object);
        
        if (!empty($exclude) && in_array('entire_website', $exclude)) {
            return false;
        } elseif (!empty($exclude) && in_array($current_page, $exclude)) {
            return false;
        }

        if (!empty($include) && in_array('entire_website', $include)) {
            
            return $header_id;
        } elseif (!empty($include) && in_array($current_page, $include)) {

            return $header_id;
        }

        return false;
    }

    public function get_current_page($obj){
        if(empty($obj)){
            switch (true) {
                case is_search():
                    return 'search_page';
                case is_404():
                    return 'four_0_4'; 
                case is_front_page():
                    return 'front_page';
                // WooCommerce specific checks
                case class_exists('WooCommerce') && is_shop():
                    return 'shop_page';
                case class_exists('WooCommerce') && is_cart():
                    return 'cart_page';
                case class_exists('WooCommerce') && is_checkout():
                    return 'checkout_page';
                case class_exists('WooCommerce') && is_order_received_page():
                    return 'thank_you_page';
                default:
                    return false;
            }
        } else {
            if(class_exists('WooCommerce') && is_shop()){
                return 'shop_page';
            } else {
                return $obj->ID;
            }
        }
    }
}
