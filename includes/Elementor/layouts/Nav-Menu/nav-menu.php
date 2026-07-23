<?php
/**
 * Nav Menu layouts.
 *
 * @package MagicElements
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<?php if ( 'layout-one' === $header_layout ) { ?>
<header class="magic-header magic-header-layout-one <?php echo ( 'yes' === $settings['enable_sticky'] ) ? 'is-sticky' : ''; ?>">
	<div class="container magic-menu">
		<div class="mid-point flex items-center justify-center">
			<nav class="nav-menu-left">
				<?php
				if ( ! empty( $settings['menu_select'] ) ) {
					wp_nav_menu(
						[
							'menu'       => $settings['menu_select'],
							'container'  => false,
							'menu_class' => 'cnw-nav',
						]
					);
				}
				?>
			</nav>

			<?php if ( ! empty( $settings['logo']['url'] ) ) : ?>
				<a class="menu-logo menu-logo-desktop-gap" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img src="<?php echo esc_url( $settings['logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
				</a>
			<?php endif; ?>

			<nav class="nav-menu-right">
				<?php
				if ( ! empty( $settings['menu_select_right'] ) ) {
					wp_nav_menu(
						[
							'menu'       => $settings['menu_select_right'],
							'container'  => false,
							'menu_class' => 'cnw-nav',
						]
					);
				}
				?>
			</nav>
		</div>

		<div class="magic-menu-actions" data-desktop-search-slot>
			<?php if ( 'yes' === $settings['show_search'] ) : ?>
				<button class="menu-search open_search" type="button" aria-label="<?php echo esc_attr__( 'Search', 'magic-elements' ); ?>">
					<?php \Elementor\Icons_Manager::render_icon( $settings['search_icon'], [ 'aria-hidden' => 'true' ] ); ?>
				</button>
				<div class="search_block">
					<div class="search_box">
						<?php
						$search_close_icon = ! empty( $settings['search_close_icon']['value'] )
							? $settings['search_close_icon']
							: [
								'value'   => 'fas fa-times',
								'library' => 'fa-solid',
							];
						?>
						<button class="search_close" type="button" aria-label="<?php echo esc_attr__( 'Close search', 'magic-elements' ); ?>">
							<?php \Elementor\Icons_Manager::render_icon( $search_close_icon, [ 'aria-hidden' => 'true' ] ); ?>
						</button>
						<div class="inner">
							<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
								<input type="search" name="s" id="search" class="search_input" autocomplete="off" placeholder="<?php echo esc_attr__( 'Search Here ...', 'magic-elements' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" />
								<button type="submit">
									<?php echo esc_html( $settings['search_button_title'] ); ?>
								</button>
							</form>
						</div>
					</div>
					<div class="overlayer"></div>
				</div>
			<?php endif; ?>

			<?php include __DIR__ . '/mobile-menu.php'; ?>
		</div>
	</div>
</header>
<?php } elseif ( 'layout-two' === $header_layout ) { ?>
<header class="magic-header magic-header-layout-two <?php echo ( 'yes' === $settings['enable_sticky'] ) ? 'is-sticky' : ''; ?>">
	<div class="container magic-menu">
		<?php if ( ! empty( $settings['logo']['url'] ) ) : ?>
			<a class="menu-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( $settings['logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			</a>
		<?php endif; ?>

		<nav class="nav-menu-center">
			<?php
			if ( ! empty( $settings['menu_select'] ) ) {
				wp_nav_menu(
					[
						'menu'       => $settings['menu_select'],
						'container'  => false,
						'menu_class' => 'cnw-nav',
					]
				);
			}
			?>
		</nav>

		<div class="book-button">
			<?php
			if ( ! empty( $settings['book_button_link']['url'] ) ) {
				$this->add_link_attributes( 'book_button_link', $settings['book_button_link'] );
			}
			?>
			<a <?php $this->print_render_attribute_string( 'book_button_link' ); ?>>
				<?php echo esc_html( $settings['book_button_title'] ); ?>
			</a>
		</div>

		<div class="magic-menu-actions">
			<?php include __DIR__ . '/mobile-menu.php'; ?>
		</div>
	</div>
</header>
<?php } elseif ( 'layout-three' === $header_layout ) { ?>
<header class="magic-header magic-header-layout-three <?php echo ( 'yes' === $settings['enable_sticky'] ) ? 'is-sticky' : ''; ?>">
	<div class="container magic-menu">
		<?php if ( ! empty( $settings['logo']['url'] ) ) : ?>
			<a class="menu-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( $settings['logo']['url'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			</a>
		<?php endif; ?>

		<nav class="nav-menu-left">
			<?php
			if ( ! empty( $settings['menu_select'] ) ) {
				wp_nav_menu(
					[
						'menu'       => $settings['menu_select'],
						'container'  => false,
						'menu_class' => 'cnw-nav',
					]
				);
			}
			?>
		</nav>

		<div class="right-side">
			<div class="call-us">
				<p><?php echo esc_html( $settings['call_us_text'] ); ?></p>
			</div>
			<div class="book-button">
				<?php
				if ( ! empty( $settings['book_button_link']['url'] ) ) {
					$this->add_link_attributes( 'book_button_link', $settings['book_button_link'] );
				}
				?>
				<a <?php $this->print_render_attribute_string( 'book_button_link' ); ?>>
					<?php echo esc_html( $settings['book_button_title'] ); ?>
				</a>
			</div>
		</div>

		<div class="magic-menu-actions">
			<?php include __DIR__ . '/mobile-menu.php'; ?>
		</div>
	</div>
</header>
<?php } else { ?>
	<h3><?php echo esc_html__( 'Any Layout not Found', 'magic-elements' ); ?></h3>
<?php } ?>
