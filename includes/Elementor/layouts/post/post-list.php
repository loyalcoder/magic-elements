<?php 
    // Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
?>

<ul>
    <?php  
    if(!empty($settings['emk_select_post_list'])){
        foreach($settings['emk_select_post_list'] as $posts){
            $post = get_post($posts); 
            if($post){ ?>
                <li>
                    <a href="<?php echo esc_url(get_permalink($post)); ?>">
                        <?php  echo esc_html(get_the_title($post)) ?>  
                    </a>
                </li>
                <?php
            }  
            
        }
    }
    
    ?>  
</ul>