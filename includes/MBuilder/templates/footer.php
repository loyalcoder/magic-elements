<?php 
    if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly.
    }
   
?>

 <?php if (function_exists('astra_get_option') && $header_id != '') : ?>
   </div>
   </div>
 <?php endif; ?>
     <?php do_action('magic_builder_footer_content', get_the_ID());  ?>
     <?php wp_footer(); ?>
</body>
</html>