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
        <?php echo $settings['team_description']; ?>
      <div class="icon-part">
        <?php 
          if ( ! empty( $settings['icon_list'] ) ) {
            foreach ( $settings['icon_list'] as $item ) {
                $link_url = ! empty( $item['link']['url'] ) ? $item['link']['url'] : '#';
                $link_target = ! empty( $item['link']['is_external'] ) ? ' target="_blank"' : '';
                $link_nofollow = ! empty( $item['link']['nofollow'] ) ? ' rel="nofollow"' : '';
              ?>
                <a href="<?php echo esc_url( $link_url ); ?>" <?php echo $link_target . $link_nofollow; ?>>
                    <?php 
                    if ( ! empty( $item['icon'] ) ) {
                      \Elementor\Icons_Manager::render_icon( $item['icon'], [ 'aria-hidden' => 'true' ] );
                    }
                    ?>
                </a>
              <?php
            }
          }
        ?>
      </div>
    </div>
  </div>
</div>