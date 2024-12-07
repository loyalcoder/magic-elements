<div class="team">
    <div class="team-image justify-self-center">
        <?php 
            $this->add_render_attribute( 'team_image', 'src', $settings['team_image']['url'] );
            $this->add_render_attribute( 'team_image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['team_image'] ) );
            $this->add_render_attribute( 'team_image', 'title', \Elementor\Control_Media::get_image_title( $settings['team_image'] ) );
            $this->add_render_attribute( 'team_image', 'class', '' );
            echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'team_image' );
        ?>
    </div>
    <h2><?php echo esc_html($settings['team_title']); ?></h2>
    <h6><?php echo esc_html($settings['team_designation']); ?></h6>
    <p><?php echo esc_html($settings['team_description']); ?></p>
</div>

