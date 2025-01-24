<?php
  // Prevent direct access to the file
  if (!defined('ABSPATH')) {
    exit;
  }
?>
<div class="<?php echo esc_attr($wrapper_class); ?>" <?php echo $this->get_render_attribute_string( 'wrapper'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped by elementor ?>>
	<a class="<?php echo esc_attr($button_class); ?>" <?php echo $this->get_render_attribute_string( 'button'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped by elementor ?>>
        <span class="<?php echo esc_attr($content_class); ?>" <?php echo $this->get_render_attribute_string( 'content'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped by elementor ?>>
            <span class="<?php echo esc_attr($span_class); ?>" <?php echo $this->get_render_attribute_string( 'span'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped by elementor ?>>
              <?php \Elementor\Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );?>
            </span> 
            <span <?php echo $text_class; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Already escaped by elementor ?>>
              <?php echo esc_html($settings['text']) ?>
            </span>
        </span>
	</a>
</div> 