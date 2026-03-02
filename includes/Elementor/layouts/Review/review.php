<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from widget settings/loop.
?>
<div class="review-wapper">
    <div class="reviewer">
        <?php echo wp_kses( \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'reviewer_image' ), 
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
        <?php if ('before_name' === $settings['description_position']) : ?>
            <p><?php echo esc_html($settings['reviewer_description']); ?></p>
        <?php endif; ?>
        
        <h5><?php echo esc_html($settings['reviewer_name']); ?></h5>
        <h6><?php echo esc_html($settings['reviewer_title']); ?></h6>
    </div>
    <div class="review">
        <?php 
            // Full stars
            for ($i = 0; $i < $full_stars; $i++) {
                \Elementor\Icons_Manager::render_icon($settings['full_star_icon'], ['class' => 'active']);
            }
            // Half star
            if ($has_half_star) {
                \Elementor\Icons_Manager::render_icon($settings['half_star_icon'], ['class' => 'active']);
            }
            // Empty stars
            for ($i = 0; $i < $empty_stars; $i++) {
                \Elementor\Icons_Manager::render_icon($settings['empty_star_icon'], []);
            }
        ?>
    </div>
        <?php if ('after_name' === $settings['description_position']) : ?>
            <p class="after_rating"><?php echo esc_html($settings['reviewer_description']); ?></p>
        <?php endif; ?>
</div>