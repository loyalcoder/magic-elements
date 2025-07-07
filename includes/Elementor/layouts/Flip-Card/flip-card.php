<?php 
// Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
?>
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <?php
                $this->add_render_attribute( 'flip-card-image', 'src', $settings['flip_card_front_image']['url'] );
		        $this->add_render_attribute( 'flip-card-image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['flip_card_front_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'title', \Elementor\Control_Media::get_image_title( $settings['flip_card_front_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'class', 'my-custom-class' );
                echo wp_kses(
                    \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'flip_card_front_image' ),
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
             <h3><?php echo esc_html($settings['card_front_title']); ?></h3>
             <p class="front-description"><?php echo esc_html($settings['card_front_description']); ?></p> 
            <div class="flip_card_icon">
                <?php
                    if ( 'yes' === $settings['show_social_icon'] ) { ?>
                        <?php if(!empty($flip_card_icon_list)) {?>
                            <?php foreach($flip_card_icon_list as $list) { 
                                $icon_link = (!empty($list['flip_icon_link']['url']) ? $list['flip_icon_link']['url'] : '' );
                                ?>
                                <div class="social-icon ">
                                    <?php if(  $icon_link ) { ?>
                                        <a href="<?php echo esc_url( $icon_link); ?>">
                                            <?php \Elementor\Icons_Manager::render_icon( $list['flip_card_front_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                                        </a>
                                    <?php }else{ ?>
                                    <div>
                                        <?php \Elementor\Icons_Manager::render_icon( $list['flip_card_front_icon'], [ 'aria-hidden' => 'true' ] ); ?> 
                                    </div>
                                    <?php } ?>
                                </div>
                            <?php } } ?>
                        <?php
                    }
                ?>
            </div>
        </div>
        <div class="flip-card-back">
            <?php if ( 'yes' === $settings['show_social_back_icon'] ) { ?>
                <?php \Elementor\Icons_Manager::render_icon( $settings['flipcard_back_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                <?php
            } ?>
            <h2><?php echo esc_html($settings['card_back_title']); ?></h2> 
            <p><?php echo esc_html($settings['card_back_designation']); ?></p> 
            <p class="back-content"><?php echo esc_html($settings['card_back_description']); ?></p> 
            <div class="flip_card_button">
                <?php
                    if ( ! empty( $settings['flip_card_button_link']['url'] ) ) {
                        $this->add_link_attributes( 'flip_card_button_link', $settings['flip_card_button_link'] );
                    }
                ?>
                 <a <?php echo esc_attr($this->get_render_attribute_string( 'flip_card_button_link' )); ?>>
                    <?php echo esc_html($settings['card_back_button']); ?>
                </a>
            </div> 
        </div>
    </div>
</div>