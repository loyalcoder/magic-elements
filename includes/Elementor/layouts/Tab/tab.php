<?php 
// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}
?>
<div class="tabs-container">
  <div class="tabs">
    <?php foreach($tabs as $index => $tab){ 
      $data_tab_id = $index + 1;
      $active_class = ($index === 0) ? 'active' : '';
      ?>
      <div class="tab <?php echo esc_attr($active_class); ?>" data-tab="<?php echo esc_attr($data_tab_id); ?>">
        <?php echo esc_html($tab['tab_title']); ?>
      </div>
    <?php } ?>  
  </div>
  <div class="tab-content">
    <?php foreach($tabs as $index => $tab){ 
      $data_tab_id = $index + 1;
      $active_class = ($index === 0) ? 'active' : '';
      ?>
      <div class="content <?php echo esc_attr($active_class); ?>" id="tab-<?php echo esc_attr($data_tab_id); ?>">
        <h2><?php echo esc_html($tab['tab_content_title']); ?></h2>
        <p><?php echo wp_kses_post($tab['tab_content']); ?></p>
      </div> 
    <?php } ?>
  </div>
</div>