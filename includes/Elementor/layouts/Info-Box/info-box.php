<div class="info-box">
    <div class="info-icon">
        <?php \Elementor\Icons_Manager::render_icon( $settings['info_box_icon'], [ 'aria-hidden' => 'true' ] ); ?>
    </div>
    <div class="info-content">
        <h3 class="info-title"><?php echo esc_html($settings['info_box_title']); ?></h3>
        <p class="info-text"><?php echo esc_html($settings['info_box_description']); ?></p>
        <div class="info-button">
            <?php
                if ( ! empty( $settings['info_box_button_link']['url'] ) ) {
                    $this->add_link_attributes( 'info_box_button_link', $settings['info_box_button_link'] );
                }
            ?>
            
            <a <?php $this->print_render_attribute_string( 'info_box_button_link' ); ?>>
                <?php echo esc_html($settings['info_box_button_title']); ?>
            </a>
        </div>
    </div>
</div>
 
