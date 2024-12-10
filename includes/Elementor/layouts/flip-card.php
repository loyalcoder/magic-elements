<style>
    .flip-card {
        width: 300px;
        height: 300px;
        perspective: 1000px;
    }
    .flip-card-inner {
        background: transparent;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.9s;
        transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
        position: absolute;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .flip-card-front {
        color: black;
        background-color: red;
    }

    .flip-card-back {
        background-color: green;
        color: white;
        transform: rotateY(180deg);
    }
</style>




<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <?php
                $this->add_render_attribute( 'flip-card-image', 'src', $settings['flip_card_front_image']['url'] );
		        $this->add_render_attribute( 'flip-card-image', 'alt', \Elementor\Control_Media::get_image_alt( $settings['flip_card_front_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'title', \Elementor\Control_Media::get_image_title( $settings['flip_card_front_image'] ) );
		        $this->add_render_attribute( 'flip-card-image', 'class', 'my-custom-class' );
		        echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'flip_card_front_image' );
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
                                <div class="social-icon">
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
                ?> <?
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
            <p><?php echo esc_html($settings['card_back_description']); ?></p> 
            <div class="flip_card_button">
                <?php
                    if ( ! empty( $settings['flip_card_button_link']['url'] ) ) {
                        $this->add_link_attributes( 'flip_card_button_link', $settings['flip_card_button_link'] );
                    }
                ?>
                 <a <?php echo $this->get_render_attribute_string( 'flip_card_button_link' ); ?>>
                    <?php echo esc_html($settings['card_back_button']); ?>
                </a>
            </div> 
        </div>
    </div>
</div>