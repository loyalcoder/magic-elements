<div class="image-compare-wrapper <?php echo esc_attr($overlay_class); ?>">
    <div class="image-compare" data-orientation="<?php echo esc_attr($orientation); ?>" data-before-label="<?php echo esc_attr($before_label); ?>" data-after-label="<?php echo esc_attr($after_label); ?>">
        <?php echo wp_kses( \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'before_image' ), 
                array(
                    'img' => array(
                        'src'    => true,
                        'alt'    => true,
                        'width'  => true,
                        'height' => true,
                        'class'  => true,
                        'srcset' => true,
                        'sizes'  => true,
                    ),
                )
            );
        ?>
        <?php echo wp_kses( \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'after_image' ), 
                array(
                    'img' => array(
                        'src'    => true,
                        'alt'    => true,
                        'width'  => true,
                        'height' => true,
                        'class'  => true,
                        'srcset' => true,
                        'sizes'  => true,
                    ),
                )
            );
        ?>
    </div>
</div>