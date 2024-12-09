<?php 
    if($layout == 'one'){
        ?>
        <?php if(!empty($faq_item_list)) {?>
            <?php foreach($faq_item_list as $key=>$list) { ?>
               <div class="faq">
                   <h2><?php echo wp_kses_post($list['faq_title']); ?></h2>
                   <p><?php echo esc_html($list['faq_content']); ?></p>
               </div>
       <?php } } ?>
       <?php }elseif($layout == 'two'){ ?>
                <div><h1>Hello world</h1></div>
       <?php }
?>