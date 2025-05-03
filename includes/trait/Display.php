<?php 
namespace MagicElements\Trait;
trait Display {
    public function get_builder_by_type($type = 'header') {
        $builder_posts = $this->get_builder_posts();
        $builder_posts_by_type = array();
        foreach ($builder_posts as $builder_post) {
            if (get_post_meta($builder_post->ID, '_display_type', true) == $type) {
                $builder_posts_by_type[] = $builder_post;
            }
        }
    }
    public function display_on(){

    }
    public function display_not_on(){
        
    }
    

}