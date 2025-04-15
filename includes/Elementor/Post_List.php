<?php

    /**
 * Elementor Classes.
 *
 * @package Post Category Tab Magic Elements
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
 * Elementor widget for Post Category Tab.
 *
 * @since 1.0.0
 */
class Post_List extends Widget_Base
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
        return 'em_kit_post_list';
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
        return esc_html__('Post List', 'magic-elements');
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
        return 'eicon-post-list magicelements-editor-widgets-icon';
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
        return ['emk-post-list'];
    }

    public function get_script_depends()
    {
        return ['emkit-post-list', 'jquery'];
    }

        /**
     * Register Copyright controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_controls()
    {
        $this->register_post_list_controls();
    }

        /**
     * Register Copyright General Controls.
     *
     * @since 1.0.0
     * @access protected
     */
    protected function register_post_list_controls()
    {

		$this->start_controls_section(
			'emk__post_section',
			[
				'label' => esc_html__( 'Post', 'magic-elements' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'emk_select_post_list',
            [
            'label'       => esc_html__( 'Select Post', 'magic-elements' ),
            'type'        => \Elementor\Controls_Manager::SELECT2,
            'label_'      => true,
            'multiple'    => true,
            'options'     => $this->get_post_list(),
            'default'     => [],
            'description' => esc_html__( 'Select a Post', 'magic-elements' ),
            ]
        );

		$this->add_control(
            'emk__post_per_page',
            [
                'label'   => esc_html__('Posts per page', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::NUMBER,
                'step'    => 1,
                'default' => 3,
            ]
        );

        $this->add_control(
            'emk__post_order_by',
            [
                'label'   => esc_html__('Post Order By', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'none',
                'options' => [
                    'none'  => esc_html__('None', 'magic-elements'),
                    'ID'    => esc_html__('ID', 'magic-elements'),
                    'title' => esc_html__('Title', 'magic-elements'),
                    'name'  => esc_html__('Name', 'magic-elements'),
                    'date'  => esc_html__('Date', 'magic-elements'),
                ],
            ]
        );

        $this->add_control(
            'emk__post_case_order',
            [
                'label'   => esc_html__('Post Order', 'magic-elements'),
                'type'    => \Elementor\Controls_Manager::SELECT,
                'default' => 'DESC',
                'options' => [
                    'DESC' => esc_html__('DESC', 'magic-elements'),
                    'ASC'  => esc_html__('ASC', 'magic-elements'),
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

		// $args = [
        //     'post_type'      => 'post',
        //     'posts_per_page' => -1,
        //     'post_status'    => 'publish',
        //     'posts_per_page' => $settings['emk__post_per_page'],
        //     'orderby'        => $settings['emk__post_order_by'],
        //     'order'          => $settings['emk__post_case_order'],
        // ];
        
        // $query = new WP_Query($args);
        
       

        include __DIR__ . '/layouts/post/post-list.php';
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

    protected function get_post_list(){
		$post_list = [
            'post_type' => 'post',
            'numberposts' => -1 
        ];


       $posts_terms = get_posts($post_list);
     
       $posts = [];

       foreach($posts_terms as $post){
        $posts[$post->ID] = $post->post_title;
       }

       return $posts ;
       

        
	}
}
