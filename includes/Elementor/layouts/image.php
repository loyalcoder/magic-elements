<div>
    <div class="main_img">
        <?php
            if ( ! empty( $settings['link']['url'] ) ) {
                $this->add_link_attributes( 'link', $settings['link'] );
            }
        ?>
        <a <?php echo $this->get_render_attribute_string( 'link' ); ?>>
            <?php echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'image' );?>
		</a>
    </div>
    <div class="custom_caption">
        <?php 
            if( ! empty( $settings['caption_source'] ) ){
                switch ( $settings['caption_source'] ) {
                    case 'attachment':
                        $caption = wp_get_attachment_caption( $settings['image']['id'] );
                        break;
                    case 'custom':
                        echo wp_kses_post($settings['caption']);
                        break;
                    default: echo "";
                }
            }
        ?>
    </div>
    <?php
            if ( 'custom' !== $settings['link_to'] ) {
            $this->add_lightbox_data_attributes( 'link', $settings['image']['id'], $settings['open_lightbox'] );
        }
    ?> 
</div>