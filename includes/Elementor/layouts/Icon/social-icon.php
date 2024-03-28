<?php if(!empty($social_item_list)) {?>
     <?php foreach($social_item_list as $item) { ?>
        <div class="social_icon">    
            <?php
                if ( ! empty( $item['icon_link']['url'] ) ) {
                    $this->add_link_attributes( 'icon_link', $item['icon_link'] );
                }
            ?>
            <a <?php echo $this->get_render_attribute_string( 'icon_link' ); ?>>
                <?php \Elementor\Icons_Manager::render_icon( $item ['social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </a>
        </div>
<?php } } ?>
   