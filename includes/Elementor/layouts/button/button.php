<div class="emk-button-wrapper">
	<a <?php echo $this->get_render_attribute_string( 'button'); ?>>
        <span class="emk-button-content-wrapper">
            <span <?php echo $this->get_render_attribute_string( 'span'); ?>>
              <?php \Elementor\Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );?>
            </span> 
            <span class="emk-button-text">
             <?php echo esc_html($settings['text']) ?>
            </span>
        </span>
	</a>
</div>

<!-- <?php echo esc_attr($active_icon); ?> -->