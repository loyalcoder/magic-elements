<div class="image-wrapper">
    <div class="magic-kit-image">
        <?php echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'image_box_image' ); ?>
    </div>
    <div class="magic-kit-image-content">
        <div class="image-box-title">
            <h3><?php echo $settings['img_box_title']; ?></h3>
        </div>
        <div class="image-box-description">
            <p><?php echo $settings['image_box_description']; ?></p>
        </div>
        <div class="image-box-button">
            <?php 
                if ( 'yes' === $settings['show_img_btn'] ) {
			        ?><a class="img-btn flex" style="display: flex;" <?php $this->print_render_attribute_string( 'img_website_link' ); ?>> <span><?php \Elementor\Icons_Manager::render_icon( $settings['button_icon'], [ 'aria-hidden' => 'true' ] ); ?></span><span><?php echo $settings['button_text']; ?></span>  </a><?php
		        } 
            ?>
        </div>
    </div>
</div>