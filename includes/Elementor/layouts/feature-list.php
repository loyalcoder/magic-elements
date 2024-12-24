<div>
    <h2><?php echo esc_html($settings['feature_list_title']); ?></h2>


  
        <?php if(!empty($feature_list)) {?>
            <?php foreach($feature_list as $list) { ?>
               <div class="feature_list">
                    <?php \Elementor\Icons_Manager::render_icon( $list['feature_list_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                    <p><?php echo esc_html($list['feature_list_item']); ?></p>
               </div>
       <?php } } ?>





</div>