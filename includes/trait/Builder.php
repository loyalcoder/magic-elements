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
}
