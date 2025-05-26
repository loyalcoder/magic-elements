<div class="wrapper">
	<figure class="comparison-wrapper">
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
        <span class="comparison-label before-label" data-type="original"><?php echo esc_html($settings['before_image_lebel']); ?></span>
		<div class="compare-img">
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
            <span class="comparison-label after-label" data-type="modified"><?php echo esc_html($settings['after_image_lebel']); ?></span>
		</div>
		<span class="compare-drag"></span>
	</figure>
</div>