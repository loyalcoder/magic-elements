<?php 
    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
<?php do_action('magic_builder_header_content', get_the_ID());  ?>
 <?php if (function_exists('astra_get_option')) : ?>
    <div id="content" class="site-content">
        <div class="ast-container">
 <?php endif; ?>