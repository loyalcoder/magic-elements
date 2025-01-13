<div class="team">
    <div class="team-image justify-self-center">
        <?php 
            $this->add_render_attribute( 'team_image', 'src', $settings['team_image']['url'] );
            $this->add_render_attribute( 'team_image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['team_image'] ) );
            $this->add_render_attribute( 'team_image', 'title', \Elementor\Control_Media::get_image_title( $settings['team_image'] ) );
            $this->add_render_attribute( 'team_image', 'class', '' );
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
        ?>
    </div>
    <h2><?php echo esc_html($settings['team_title']); ?></h2>
    <h6><?php echo esc_html($settings['team_designation']); ?></h6>
    <p><?php echo esc_html($settings['team_description']); ?></p>
    <div class="team-icon">
        <?php
            if ( 'yes' === $settings['show_icon'] ) {   
            ?>
                <?php if(!empty($team_icon_list)) {?>
                    <?php foreach($team_icon_list as $list) { 
                        if ( ! empty( $list['icon_link']['url'] ) ) {
                            $this->add_link_attributes( 'icon_link'.$list['_id'], $list['icon_link'] );
                        }
                        ?>
                        <div class="social-icon">
                            <a <?php $this->print_render_attribute_string( 'icon_link'.$list['_id'] ); ?>>
                                <?php \Elementor\Icons_Manager::render_icon( $list['team_social_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                            </a>
                        </div>
                    <?php } } ?>
                <?php
            }
        ?>
    </div>
</div>

