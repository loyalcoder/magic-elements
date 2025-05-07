<?php

namespace MagicElements;

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}
use MagicElements\Trait\Builder;
class MeBuilder
{
    use Builder;
    private static $_instance = null;
    /**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 * @return Plugin An instance of the class.
	 */
	public static function instance()
	{

		if (is_null(self::$_instance)) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * init
	 * Replace header and footer with Elementor Content
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 */

	public function init()
	{
		// Replace header 
		add_action('get_header', [$this, 'replace_header']);
        add_action('magic_builder_header_content', [$this,'header_builder_put_content']);
	}

    /**
	 * Header Replace 
	 *
	 * Only Work when a header created and select from admin panel 
	 *
	 * @since 1.0.0
	 * @access public
	 */
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
    /**
	 * Header Content 
	 *
	 * Only Work when a Footer created and select from admin panel 
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function header_builder_put_content( $header_content )
	{
        $active_header_id = $this->active_header_id();
        if($active_header_id == ''){
            return false;
        }
		if ($header_content != '' && class_exists('\Elementor\Plugin')) {
			echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_header_id);
		}
	}
    public function active_header_id(){
        $args = [
            'post_type' => 'magic_builder',
            'post_status' => 'publish',
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key' => '_display_type',
                    'value' => 'header',
                    'compare' => '='
                ],
                [
                    'key' => '_is_active', 
                    'value' => 'on',
                    'compare' => '='
                ]
            ]
                ];
        $header_post = get_posts($args);        
        if(empty($header_post)){
            return false;
        }
        return $this->should_display_header($header_post[0]->ID);         
    }
    public function should_display_header( $header_id ) {
        if ( ! $header_id ) {
            return false;
        }        
        $get_display_condition = get_post_meta($header_id, '_magic_builder_conditions', true);
        $include = [];
        $exclude = [];
        if (! empty($get_display_condition)) {
            foreach ($get_display_condition as $condition) {
                if ($condition['type'] == 'include') {
                    $include[] = $condition['display'];
                } else {
                    $exclude[] = $condition['display'];
                }
            }
        }
        $query_object = get_queried_object();
        $current_page = $this->get_current_page($query_object);

        if (!empty($exclude) && in_array('entire_website', $exclude)) {
            return false;
        }elseif (!empty($exclude) && in_array($current_page, $exclude)) {
            return false;
        }
        if (! empty($include) && in_array('entire_website', $include)) {
            return $header_id;
        }elseif (! empty($include) && in_array($current_page, $include)) {
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
                    return '404_page'; 
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
        }else{
            if(class_exists('WooCommerce') && is_shop()){
                return 'shop_page';
            }else{
                return $obj->ID;
            }
        }
    }
}