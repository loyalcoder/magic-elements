<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template vars from replace_footer().
$header_id = isset( $header_id ) ? $header_id : false;
?>

<?php if ( function_exists( 'astra_get_option' ) && ! empty( $header_id ) ) : ?>
	</div><!-- .ast-container -->
	</div><!-- #content -->
<?php endif; ?>
	<?php do_action( 'magic_builder_footer_content', get_the_ID() ); ?>
	<?php wp_footer(); ?>
</body>
</html>
