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

    <div class="team-icon">
        <?php if(!empty($team_icon_list)) {?>
        <?php foreach($team_icon_list as $list) { 
            $icon_link = (!empty($list['icon_link']['url']) ? $list['icon_link']['url'] : '' );
            ?>
            <div class="social-icon">
                <?php if(  $icon_link ) { ?>
                    <a href="<?php echo esc_url( $icon_link); ?>">
                        <?php \Elementor\Icons_Manager::render_icon( $list['team_social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                    </a>
               <?php }else{ ?>
                <div>
                    <?php \Elementor\Icons_Manager::render_icon( $list['team_social_icon'], [ 'aria-hidden' => 'true' ] ); ?> 
                </div>
              <?php } ?>
            </div>
        <?php } } ?>
    </div>
</div>

