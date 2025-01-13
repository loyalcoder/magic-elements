 <div class="accordion <?php echo esc_attr($behavior_class) ?>">
    <?php  if(!empty($image_accordion)){
        foreach ($image_accordion as $index=> $item){ ?>
        <div class="tab">
          <?php
            $this->add_render_attribute('image', 'src', $item['background_image']['url']);
            $this->add_render_attribute('image', 'alt', \Elementor\Control_Media::get_image_alt($item['background_image']));
            $this->add_render_attribute('image', 'title', \Elementor\Control_Media::get_image_title($item['background_image']));            
            echo wp_kses(
              \Elementor\Group_Control_Image_Size::get_attachment_image_html( $item, 'full', 'background_image' ),
              array(
                  'img' => array(
                      'src'    => true,
                      'alt'    => true,
                      'class'  => true,
                      'width'  => true,
                      'height' => true,
                      'srcset' => true,
                      'sizes'  => true,
                  ),
              )
          );
          
            ?>
            <div class="caption">
            <h2><?php  echo esc_html( $item['title']); ?>  </h2>
            <p><?php  echo esc_html( $item['description']); ?> </p>
            </div>
        </div>
   <?php } } ?>  
</div>