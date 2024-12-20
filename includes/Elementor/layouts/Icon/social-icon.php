<div class="social-main d-flex">
    <?php if(!empty($social_item)) {?>
        <?php foreach($social_item as $item) { 
            $social_icon_link = (!empty($item['icon_link']['url']) ? $item['icon_link']['url'] : '' );
            ?>
            <div class="social-icon">    
                <a href="<?php echo esc_url($social_icon_link); ?>">
                    <?php \Elementor\Icons_Manager::render_icon( $item ['social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                </a>
            </div>
    <?php } }?>
</div>

