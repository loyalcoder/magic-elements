<?php if(!empty($social_item_list)) {?>
     <?php foreach($social_item_list as $key=>$list) { ?>
        <div class="social_icon">    
            <?php
                if ( ! empty( $list['icon_link']['url'] ) ) {
                    $this->add_link_attributes( 'icon_link', $list['icon_link'] );
                }
            ?>
            <a <?php echo $this->get_render_attribute_string( 'icon_link' ); ?>>
                <?php \Elementor\Icons_Manager::render_icon( $list['social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </a>
        </div>
<?php } } ?>
   