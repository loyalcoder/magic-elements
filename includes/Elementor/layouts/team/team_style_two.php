<div class="me-team-wrapper">
  <div class="team-card">
    <div class="img-part style-two-img-part">
      <?php
      if ( ! empty( $settings['team_image']['id'] )) {
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
      <div class="img-overlay"></div>

        <div class="icon-part">
        <?php if (!empty($settings['social_icon_list'])) : ?>
            <div class="magic-team-social-icons">
                <?php foreach ($settings['social_icon_list'] as $index => $item) : ?>
                    <?php
                    $link_key = 'link_' . $index;
                    $this->add_link_attributes($link_key, $item['social_link']);
                    $hover_animation = '';
                    if (!empty($item['icon_hover_animation'])) {
                        $hover_animation = ' elementor-animation-' . $item['icon_hover_animation'];
                    }
                    ?>
                    <a <?php echo $this->get_render_attribute_string($link_key); ?> class="elementor-repeater-item-<?php echo esc_attr($item['_id']); ?><?php echo esc_attr($hover_animation); ?>">
                        <?php \Elementor\Icons_Manager::render_icon($item['social_icon'], ['aria-hidden' => 'true']); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
        </div>

    </div>
    <div class="content-part">
      <h3 class="team-title">
        <?php echo esc_html($settings['team_title']); ?>
      </h3>
      <div class="team-des">
        <?php echo wp_kses_post($settings['team_description']); ?>
      </div>
    </div>
  </div>
</div>
