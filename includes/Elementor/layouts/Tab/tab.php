<?php
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget settings/loop.
// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}
?>
<div class="tabs-container">
  <div class="tabs">
    <?php  foreach($tabs as $index => $tab){ 
      $data_tab_id = $index + 1;
      ?>
      <div class="tab" data-tab="<?php echo esc_attr($data_tab_id); ?>"><?php echo esc_html( $tab['tab_title'] ); ?>  </div>
    <?php   } ?>  
  </div>
  <div class="tab-content">
    <?php    foreach($tabs as $index => $tab){ 
      $data_tab_id = $index + 1;
      ?> 
      <div class="content" id="tab-<?php echo esc_attr($data_tab_id); ?>">
        <h2><?php echo esc_html( $tab['tab_content_title'] ); ?></h2>
        <p><?php echo esc_html( $tab['tab_content'] ); ?></p>
        <a class="tab-button" href="<?php echo esc_url($tab['tab_button_link']['url']); ?>">
          <?php echo esc_html($tab['tab_button_text']); ?> <!-- Only button text -->
      </a>
      </div> 
    <?php } ?>
  </div>
</div>