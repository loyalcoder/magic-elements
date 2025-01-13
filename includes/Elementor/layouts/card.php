<?php 
// Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
?>
<div class="card-widget">
  <div class="card-image">
      <?php  
      echo wp_kses(
        \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'full', 'card_image' ),
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
  </div>
  <div class="card-content">
      <h3 class="card-title"><?php echo esc_html($settings['card_title']); ?></h3>
      <p class="card-description"><?php echo esc_html($settings['card_description']); ?></p>
      <a class="card-button" href="<?php echo esc_url($settings['card_button_link']['url']); ?>">
          <?php echo esc_html($settings['card_button_text']); ?> <!-- Only button text -->
      </a>
  </div>
</div>