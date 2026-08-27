<?php
/**
 * Magic Nav layout.
 *
 * @package MagicElements
 * @var array $settings Widget settings.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget include scope.

$menu_slug      = ! empty( $settings['menu_select'] ) ? $settings['menu_select'] : '';
$layout         = ! empty( $settings['menu_layout'] ) ? $settings['menu_layout'] : 'horizontal';
$hover_effect   = ! empty( $settings['hover_effect'] ) ? $settings['hover_effect'] : 'underline';
$show_mobile    = ( 'yes' === ( $settings['show_mobile_menu'] ?? 'yes' ) );
$breakpoint     = ! empty( $settings['mobile_breakpoint'] ) ? absint( $settings['mobile_breakpoint'] ) : 1023;
$panel_position = ! empty( $settings['mobile_panel_position'] ) ? $settings['mobile_panel_position'] : 'right';

$root_classes = [
	'magic-nav',
	'magic-nav--' . $layout,
	'magic-nav--effect-' . $hover_effect,
	'magic-nav--panel-' . $panel_position,
];

if ( $show_mobile ) {
	$root_classes[] = 'magic-nav--has-mobile';
}

$panel_id = 'magic-nav-panel-' . $this->get_id();
?>
<nav
	class="<?php echo esc_attr( implode( ' ', $root_classes ) ); ?>"
	data-breakpoint="<?php echo esc_attr( (string) $breakpoint ); ?>"
	aria-label="<?php echo esc_attr__( 'Navigation', 'magic-elements' ); ?>"
>
	<div class="magic-nav__desktop">
		<?php
		if ( $menu_slug ) {
			wp_nav_menu(
				[
					'menu'       => $menu_slug,
					'container'  => false,
					'menu_class' => 'magic-nav__menu',
					'fallback_cb'=> false,
					'depth'      => 3,
				]
			);
		} elseif (
			class_exists( '\Elementor\Plugin' )
			&& \Elementor\Plugin::$instance->editor
			&& \Elementor\Plugin::$instance->editor->is_edit_mode()
		) {
			echo '<ul class="magic-nav__menu"><li><a href="#">' . esc_html__( 'Select a menu', 'magic-elements' ) . '</a></li></ul>';
		}
		?>
	</div>

	<?php if ( $show_mobile ) : ?>
		<div class="magic-nav__toggle-wrap">
			<button
				type="button"
				class="magic-nav__toggle"
				aria-controls="<?php echo esc_attr( $panel_id ); ?>"
				aria-expanded="false"
				aria-label="<?php echo esc_attr__( 'Open menu', 'magic-elements' ); ?>"
			>
				<?php
				$toggle_icon = ! empty( $settings['mobile_menu_icon']['value'] )
					? $settings['mobile_menu_icon']
					: [ 'value' => 'fas fa-bars', 'library' => 'fa-solid' ];
				\Elementor\Icons_Manager::render_icon( $toggle_icon, [ 'aria-hidden' => 'true' ] );
				?>
			</button>
		</div>

		<div
			class="magic-nav__panel"
			id="<?php echo esc_attr( $panel_id ); ?>"
			aria-hidden="true"
		>
			<div class="magic-nav__panel-header">
				<?php if ( ! empty( $settings['mobile_menu_logo']['url'] ) ) : ?>
					<div class="magic-nav__panel-logo">
						<img
							src="<?php echo esc_url( $settings['mobile_menu_logo']['url'] ); ?>"
							alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
						>
					</div>
				<?php else : ?>
					<span class="magic-nav__panel-title"><?php echo esc_html__( 'Menu', 'magic-elements' ); ?></span>
				<?php endif; ?>

				<button
					type="button"
					class="magic-nav__close"
					aria-label="<?php echo esc_attr__( 'Close menu', 'magic-elements' ); ?>"
				>
					<?php
					$close_icon = ! empty( $settings['mobile_menu_close_icon']['value'] )
						? $settings['mobile_menu_close_icon']
						: [ 'value' => 'fas fa-times', 'library' => 'fa-solid' ];
					\Elementor\Icons_Manager::render_icon( $close_icon, [ 'aria-hidden' => 'true' ] );
					?>
				</button>
			</div>

			<div class="magic-nav__panel-body">
				<?php
				if ( $menu_slug ) {
					wp_nav_menu(
						[
							'menu'       => $menu_slug,
							'container'  => false,
							'menu_class' => 'magic-nav__mobile-menu',
							'fallback_cb'=> false,
							'depth'      => 3,
						]
					);
				}
				?>
			</div>
		</div>

		<div class="magic-nav__backdrop" hidden></div>
	<?php endif; ?>
</nav>
