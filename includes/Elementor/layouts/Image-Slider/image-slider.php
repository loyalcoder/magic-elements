<?php
/**
 * Image Slider layout template.
 *
 * @package MagicElements
 * @var array $settings Widget settings.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget include scope.
?>
<div <?php echo $this->get_render_attribute_string( 'slider' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php foreach ( $settings['slides'] as $index => $slide ) : ?>
		<?php
		$image_url = ! empty( $slide['slide_image']['url'] ) ? $slide['slide_image']['url'] : '';
		$link      = ! empty( $slide['slide_button_link']['url'] ) ? $slide['slide_button_link']['url'] : '';
		$target    = ! empty( $slide['slide_button_link']['is_external'] ) ? '_blank' : '_self';
		$nofollow  = ! empty( $slide['slide_button_link']['nofollow'] ) ? 'nofollow' : '';
		?>
		<div class="emk-image-slider__slide">
			<div
				class="emk-image-slider__bg"
				<?php if ( $image_url ) : ?>
					style="background-image: url(<?php echo esc_url( $image_url ); ?>);"
				<?php endif; ?>
			></div>
			<div class="emk-image-slider__overlay"></div>
			<div class="emk-image-slider__content">
				<?php if ( ! empty( $slide['slide_subtitle'] ) ) : ?>
					<div class="emk-image-slider__subtitle"><?php echo esc_html( $slide['slide_subtitle'] ); ?></div>
				<?php endif; ?>

				<?php if ( ! empty( $slide['slide_title'] ) ) : ?>
					<h2 class="emk-image-slider__title"><?php echo esc_html( $slide['slide_title'] ); ?></h2>
				<?php endif; ?>

				<?php if ( ! empty( $slide['slide_button_text'] ) && $link ) : ?>
					<a
						class="emk-image-slider__btn"
						href="<?php echo esc_url( $link ); ?>"
						target="<?php echo esc_attr( $target ); ?>"
						<?php if ( $nofollow ) : ?>
							rel="<?php echo esc_attr( $nofollow ); ?>"
						<?php endif; ?>
					>
						<?php echo esc_html( $slide['slide_button_text'] ); ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	<?php endforeach; ?>
</div>
