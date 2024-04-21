<div class="image-wrapper">
    <div class="magic-kit-image">
        <?php echo wp_get_attachment_image( $settings['image_box_image']['id'], 'thumbnail' ); ?>
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
			        echo '<a href="#">' . "Button Will Display Here" . '</a>';
		        } 
            ?>
        </div>
    </div>
</div>