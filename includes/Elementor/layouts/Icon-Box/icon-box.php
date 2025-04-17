<div class="icon-box-wapper">
    <?php
        if ( ! empty( $settings['icon_box_link']['url'] ) ) {
            $this->add_link_attributes( 'icon_box_link', $settings['icon_box_link'] );
        }
    ?>
    <a <?php $this->print_render_attribute_string( 'icon_box_link' ); ?>>
        <div class="icon-box">
            <div class="icon">
                <?php \Elementor\Icons_Manager::render_icon( $settings['icon_box_icon'], [ 'aria-hidden' => 'true' ] ); ?>
            </div>
            <div class="icon-box-content">
                <h3><?php echo esc_html($settings['icon_box_title']); ?></h3>
                <p><?php echo esc_html($settings['icon_box_description']); ?></p>
            </div>
        </div>
    </a>
</div>