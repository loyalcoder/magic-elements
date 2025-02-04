<div <?php echo esc_attr($this->get_render_attribute_string( 'wrapper')); ?>>
	<a  <?php echo esc_attr($this->get_render_attribute_string( 'button')); ?>>
        <span <?php echo esc_attr($this->get_render_attribute_string( 'content')); ?>>
            <span <?php echo esc_attr($this->get_render_attribute_string( 'span')); ?>>
              <?php \Elementor\Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );?>
            </span> 
            <span <?php echo esc_attr($this->get_render_attribute_string( 'text')); ?>>
              <?php echo esc_html($settings['text']) ?>
            </span>
        </span>
	</a>
</div> 