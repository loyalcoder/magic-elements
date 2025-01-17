<?php 
// Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
?>
<div class="magicelements-heading-title">
    <?php if ( $heading_link ) { ?>
        <a href="<?php echo esc_url( $heading_link ); ?>">
            <?php echo wp_kses_post( $newoutput ); ?>
        </a>
    <?php } else { ?>
        <?php echo wp_kses_post( $newoutput ); ?>
    <?php } ?>
</div>
