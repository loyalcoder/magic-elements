<?php
/**
 * Hero Slider layout template.
 *
 * @package MagicElements
 */

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget settings.

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$show_pagination = isset( $settings['show_pagination'] ) && 'yes' === $settings['show_pagination'];
$show_credits    = isset( $settings['show_credits'] ) && 'yes' === $settings['show_credits'];
$show_foreground = isset( $settings['show_foreground'] ) && 'yes' === $settings['show_foreground'];
$total_slides    = count( $slides );
?>
<div <?php $this->print_render_attribute_string( 'slider' ); ?>>
	<div class="emk-hero-slider__track">
		<?php
		foreach ( $slides as $index => $slide ) :
			$is_active     = ( 0 === $index );
			$bg_url        = ! empty( $slide['slide_background']['url'] ) ? $slide['slide_background']['url'] : '';
			$fg_url        = ! empty( $slide['slide_foreground']['url'] ) ? $slide['slide_foreground']['url'] : '';
			$fg_alt        = ! empty( $slide['slide_foreground']['alt'] ) ? $slide['slide_foreground']['alt'] : ( ! empty( $slide['slide_title'] ) ? $slide['slide_title'] : '' );
			$credits       = $this->parse_credits( isset( $slide['slide_credits'] ) ? $slide['slide_credits'] : '' );
			$btn_key       = 'btn_' . $index;
			$link          = isset( $slide['slide_button_link'] ) ? $slide['slide_button_link'] : array();

			$this->add_render_attribute(
				$btn_key,
				array(
					'class' => 'emk-hero-slide__btn',
				)
			);

			if ( ! empty( $link['url'] ) ) {
				$this->add_link_attributes( $btn_key, $link );
			}

			$slide_classes = array( 'emk-hero-slide' );
			if ( $is_active ) {
				$slide_classes[] = 'is-active';
			}
			?>
			<div class="<?php echo esc_attr( implode( ' ', $slide_classes ) ); ?>" data-index="<?php echo esc_attr( (string) $index ); ?>"<?php echo $is_active ? '' : ' aria-hidden="true"'; ?>>
				<div class="emk-hero-slide__bg" style="<?php echo $bg_url ? 'background-image:url(' . esc_url( $bg_url ) . ');' : ''; ?>"></div>
				<div class="emk-hero-slide__overlay"></div>
				<div class="emk-hero-slide__gradient"></div>

				<div class="emk-hero-slide__inner">
					<?php if ( $show_credits && ! empty( $credits ) ) : ?>
						<aside class="emk-hero-credits" aria-label="<?php echo esc_attr__( 'Credits', 'magic-elements' ); ?>">
							<?php foreach ( $credits as $credit ) : ?>
								<?php if ( empty( $credit['name'] ) ) { continue; } ?>
								<div class="emk-hero-credits__item">
									<span class="emk-hero-credits__name"><?php echo esc_html( $credit['name'] ); ?></span>
									<?php if ( ! empty( $credit['role'] ) ) : ?>
										<span class="emk-hero-credits__role"><?php echo esc_html( $credit['role'] ); ?></span>
									<?php endif; ?>
								</div>
							<?php endforeach; ?>
						</aside>
					<?php endif; ?>

					<div class="emk-hero-slide__content">
						<?php if ( ! empty( $slide['slide_title'] ) ) : ?>
							<h2 class="emk-hero-slide__title"><?php echo esc_html( $slide['slide_title'] ); ?></h2>
						<?php endif; ?>

						<?php if ( ! empty( $slide['slide_date'] ) || ! empty( $slide['slide_categories'] ) ) : ?>
							<div class="emk-hero-slide__meta">
								<?php if ( ! empty( $slide['slide_date'] ) ) : ?>
									<span class="emk-hero-slide__date"><?php echo esc_html( $slide['slide_date'] ); ?></span>
								<?php endif; ?>
								<?php if ( ! empty( $slide['slide_date'] ) && ! empty( $slide['slide_categories'] ) ) : ?>
									<span class="emk-hero-slide__meta-sep" aria-hidden="true"></span>
								<?php endif; ?>
								<?php if ( ! empty( $slide['slide_categories'] ) ) : ?>
									<span class="emk-hero-slide__categories"><?php echo esc_html( $slide['slide_categories'] ); ?></span>
								<?php endif; ?>
							</div>
						<?php endif; ?>

						<?php if ( ! empty( $slide['slide_description'] ) ) : ?>
							<p class="emk-hero-slide__description"><?php echo esc_html( $slide['slide_description'] ); ?></p>
						<?php endif; ?>

						<div class="emk-hero-slide__info">
							<?php if ( ! empty( $slide['slide_runtime'] ) ) : ?>
								<span class="emk-hero-slide__runtime"><?php echo esc_html( $slide['slide_runtime'] ); ?></span>
							<?php endif; ?>
							<?php if ( ! empty( $slide['slide_rating'] ) ) : ?>
								<span class="emk-hero-slide__rating"><?php echo esc_html( $slide['slide_rating'] ); ?></span>
							<?php endif; ?>
							<?php if ( ! empty( $slide['slide_button_text'] ) ) : ?>
								<a <?php $this->print_render_attribute_string( $btn_key ); ?>><?php echo esc_html( $slide['slide_button_text'] ); ?></a>
							<?php endif; ?>
						</div>
					</div>

					<?php if ( $show_foreground && $fg_url ) : ?>
						<div class="emk-hero-slide__foreground">
							<img src="<?php echo esc_url( $fg_url ); ?>" alt="<?php echo esc_attr( $fg_alt ); ?>" loading="lazy" />
						</div>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

	<?php if ( $show_pagination && $total_slides > 1 ) : ?>
		<nav class="emk-hero-pagination" aria-label="<?php echo esc_attr__( 'Slide pagination', 'magic-elements' ); ?>">
			<?php for ( $i = 0; $i < $total_slides; $i++ ) : ?>
				<button
					type="button"
					class="emk-hero-pagination__btn<?php echo ( 0 === $i ) ? ' is-active' : ''; ?>"
					data-index="<?php echo esc_attr( (string) $i ); ?>"
					aria-label="<?php echo esc_attr( sprintf( /* translators: %d: slide number */ __( 'Go to slide %d', 'magic-elements' ), $i + 1 ) ); ?>"
					aria-current="<?php echo ( 0 === $i ) ? 'true' : 'false'; ?>"
				>
					<?php echo esc_html( str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?>
				</button>
			<?php endfor; ?>
		</nav>
	<?php endif; ?>
</div>
