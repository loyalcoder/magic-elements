<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <?php
                $this->add_render_attribute( 'flip-card-image', 'src', $settings['flip_card_font_image']['url'] );
		        $this->add_render_attribute( 'flip-card-image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['flip_card_font_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'title', \Elementor\Control_Media::get_image_title( $settings['flip_card_font_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'class', 'my-custom-class' );
		        echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'flip_card_font_image' );
            ?>
            <div class="flip_card_icon">
                <?php if(!empty($flip_card_icon_list)) {?>
                    <?php foreach($flip_card_icon_list as $list) { 
                        $icon_link = (!empty($list['flip_icon_link']['url']) ? $list['flip_icon_link']['url'] : '' );
                        ?>
                        <div class="social-icon">
                            <?php if(  $icon_link ) { ?>
                                <a href="<?php echo esc_url( $icon_link); ?>">
                                    <?php \Elementor\Icons_Manager::render_icon( $list['flip_card_font_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                                </a>
                            <?php }else{ ?>
                            <div>
                                <?php \Elementor\Icons_Manager::render_icon( $list['flip_card_font_icon'], [ 'aria-hidden' => 'true' ] ); ?> 
                            </div>
                            <?php } ?>
                        </div>
                    <?php } } ?>
                <?
                ?>
            </div>
        </div>
        <div class="flip-card-back">
            <h2><?php echo esc_html($settings['card_back_title']); ?></h2> 
            <p><?php echo esc_html($settings['card_back_designation']); ?></p> 
            <p><?php echo esc_html($settings['card_back_description']); ?></p> 
            <div class="flip_card_button">
                <?php
                    if ( ! empty( $settings['flip_card_button_link']['url'] ) ) {
                        $this->add_link_attributes( 'flip_card_button_link', $settings['flip_card_button_link'] );
                    }
                ?>
                 <a <?php echo $this->get_render_attribute_string( 'flip_card_button_link' ); ?>>
                    <?php echo esc_html($settings['card_back_button']); ?>
                </a>
            </div> 
        </div>
    </div>
</div>