<?php
/**
 * Mobile menu panel markup for Nav Menu widget.
 *
 * @package MagicElements
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$mobile_menu_id       = 'magic-mobile-menu-' . $this->get_id();
$mobile_menu_label_id = 'magic-mobile-menu-label-' . $this->get_id();

$mobile_menu_icon = ! empty( $settings['mobile_menu_icon']['value'] )
	? $settings['mobile_menu_icon']
	: [
		'value'   => 'fas fa-bars',
		'library' => 'fa-solid',
	];

$mobile_menu_close_icon = ! empty( $settings['mobile_menu_close_icon']['value'] )
	? $settings['mobile_menu_close_icon']
	: [
		'value'   => 'fas fa-times',
		'library' => 'fa-solid',
	];
?>
<button
	class="mobile-menu-toggle"
	type="button"
	aria-controls="<?php echo esc_attr( $mobile_menu_id ); ?>"
	aria-expanded="false"
	aria-label="<?php echo esc_attr__( 'Open menu', 'magic-elements' ); ?>"
>
	<?php \Elementor\Icons_Manager::render_icon( $mobile_menu_icon, [ 'aria-hidden' => 'true', 'class' => 'mobile-menu-toggle__icon' ] ); ?>
</button>

<div
	class="mobile-menu-panel"
	id="<?php echo esc_attr( $mobile_menu_id ); ?>"
	aria-labelledby="<?php echo esc_attr( $mobile_menu_label_id ); ?>"
	aria-hidden="true"
>
	<div class="mobile-menu-panel__header">
		<h2 id="<?php echo esc_attr( $mobile_menu_label_id ); ?>" class="screen-reader-text">
			<?php echo esc_html__( 'Menu', 'magic-elements' ); ?>
		</h2>

		<?php if ( ! empty( $settings['mobile_menu_logo']['url'] ) ) : ?>
			<div class="mobile-menu-panel__logo">
				<img src="<?php echo esc_url( $settings['mobile_menu_logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			</div>
		<?php elseif ( ! empty( $settings['logo']['url'] ) ) : ?>
			<div class="mobile-menu-panel__logo">
				<img src="<?php echo esc_url( $settings['logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			</div>
		<?php endif; ?>

		<div class="mobile-menu-panel__actions" data-mobile-search-slot></div>

		<button
			class="mobile-menu-close"
			type="button"
			aria-label="<?php echo esc_attr__( 'Close menu', 'magic-elements' ); ?>"
		>
			<?php \Elementor\Icons_Manager::render_icon( $mobile_menu_close_icon, [ 'aria-hidden' => 'true', 'class' => 'mobile-menu-close__icon' ] ); ?>
		</button>
	</div>

	<div class="mobile-menu-panel__body">
		<nav class="mobile-menu-panel__nav">
			<?php
			if ( ! empty( $settings['menu_select'] ) ) {
				wp_nav_menu(
					[
						'menu'       => $settings['menu_select'],
						'container'  => false,
						'menu_class' => 'cnw-nav cnw-nav-mobile',
					]
				);
			}

			if ( ! empty( $settings['menu_select_right'] ) && 'layout-one' === $header_layout ) {
				wp_nav_menu(
					[
						'menu'       => $settings['menu_select_right'],
						'container'  => false,
						'menu_class' => 'cnw-nav cnw-nav-mobile',
					]
				);
			}
			?>
		</nav>
	</div>
</div>

<div class="mobile-menu-backdrop" hidden></div>
