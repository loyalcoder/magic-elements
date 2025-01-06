<div class="card-widget">
  <div class="card-image">
      <img src="<?php echo esc_url($settings['card_image']['url']); ?>" alt="">
  </div>
  <div class="card-content">
      <h3 class="card-title"><?php echo esc_html($settings['card_title']); ?></h3>
      <p class="card-description"><?php echo esc_html($settings['card_description']); ?></p>
      <a class="card-button" href="<?php echo esc_url($settings['card_button_link']['url']); ?>">
          <?php echo esc_html($settings['card_button_text']); ?> <!-- Only button text -->
      </a>
  </div>
</div>