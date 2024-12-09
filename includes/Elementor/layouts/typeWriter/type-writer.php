<div <?php $this->print_render_attribute_string( 'typewriter-attr' ); ?>>
    <<?php \Elementor\Utils::print_validated_html_tag( $settings['html_tag'] ); ?> class="typed_title">
    <?php echo wp_kses_post( $typewriter_text ); ?>
    <span class="typed_list">
        <?php echo wp_kses_post( $typewriter_animated_text ); ?>
    </span>
    <span class="typed"></span>
    </<?php \Elementor\Utils::print_validated_html_tag( $settings['html_tag'] ); ?>>
</div>