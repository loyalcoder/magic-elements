<div class="icon">    
    <?php
        if ( ! empty( $settings['icon_link']['url'] ) ) {
            $this->add_link_attributes( 'icon_link', $settings['icon_link'] );
        }
    ?>
    <a <?php echo $this->get_render_attribute_string( 'icon_link' ); ?>>
        <?php \Elementor\Icons_Manager::render_icon( $settings ['icon_single'], [ 'aria-hidden' => 'true' ] ); ?>
    </a>
</div>