<div class="me-team-wrapper">
  <div class="team-card">
    <div class="img-part">
      <?php
      if ( ! empty( $settings['team_image']['id'] )) {
          // If image is from Media Library (has ID), use Group_Control_Image_Size
          echo wp_kses(
              \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'team_image' ),
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
      } elseif ( ! empty( $settings['team_image']['url'] )) {
          ?>
          <img src="<?php echo esc_url( $settings['team_image']['url'] ); ?>" alt="<?php echo esc_attr__( 'Team Member', 'magic-elements' ); ?>" />
          <?php
      }
      ?>
    </div>
    <div class="content-part">
      <h3 class="team-title">
        <?php echo $settings['team_title']; ?>
      </h3>
        <p class="team-des">
          <?php echo $settings['team_description']; ?>
        </p>
      <div class="icon-part">
      <?php if (!empty($settings['social_icon_list'])) : ?>
        <div class="magic-team-social-icons">
            <?php foreach ($settings['social_icon_list'] as $index => $item) : ?>
                <?php
                $link_key = 'link_' . $index;
                $this->add_link_attributes($link_key, $item['social_link']);
                ?>
                <a <?php echo $this->get_render_attribute_string($link_key); ?> class="elementor-repeater-item-<?php echo esc_attr($item['_id']); ?>">
                    <!-- <div class="i-box"> -->
                      <?php \Elementor\Icons_Manager::render_icon($item['social_icon'], ['aria-hidden' => 'true']); ?>
                    <!-- </div> -->
                </a>
            <?php endforeach; ?>
        </div>
      <?php endif; ?>
      </div>
    </div>
  </div>
</div>