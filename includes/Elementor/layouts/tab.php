<div class="tabs-container">
  <div class="tabs">
    <?php  foreach($tabs as $index => $tab){ ?>
      <div class="tab" data-tab="<?php echo $index +1 ?>"><?php echo esc_html( $tab['tab_title'] ); ?>  </div>
    <?php   } ?>  
  </div>
  <div class="tab-content">
    <?php    foreach($tabs as $index => $tab){ ?> 
      <div class="content" id="tab-<?php echo $index + 1; ?>">
      <h2><?php echo esc_html( $tab['tab_content_title'] ); ?></h2>
      <?php echo wp_kses_post( $tab['tab_content'] ); ?>
    </div> 
      <?php } ?>
  </div>
</div>