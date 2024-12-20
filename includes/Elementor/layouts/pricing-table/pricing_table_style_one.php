<div class="pricing-table-container position-relative">
    <!-- ribbon start -->
     <?php 
     if ( 'yes' === $settings['ribbon_control'] ) {
        $ribbon_style = $settings['ribbon_direction'];
        switch ($ribbon_style) {
            case $ribbon_style === 'left':
              ?><div class="ribbon ribbon-top-left"><div class="ribbon-bar d-flex flex-nowrap justify-content-center align-items-center"><span class="position-absolute"><?php echo esc_html($settings['ribbon_text']); ?></span></div></div><?php
              break;
              case $ribbon_style === 'right':
              ?><div class="ribbon ribbon-top-right"><div class="ribbon-bar d-flex flex-nowrap justify-content-center align-items-center"><span class="position-absolute"><?php echo esc_html($settings['ribbon_text']); ?></span></div></div><?php
              break;
            default:
                ?><div class="ribbon ribbon-top-left"><div class="ribbon-bar d-flex flex-nowrap justify-content-center align-items-center"><span class="position-absolute"><?php echo esc_html($settings['ribbon_text']); ?></span></div></div><?php
          }
    }
     ?>
    <!-- ribbon end -->
    <h2 class="title"><?php echo esc_html($settings['pricing_table_title']); ?></h2>
    <h3 class="sub-title"><?php echo esc_html($settings['pricing_table_subtitle']); ?></h3>
    <div class="price-box d-flex">
        <span class="text-decoration-line-through original-price">
            <?php if ( 'yes' === $settings['show_sale'] ) {
                echo esc_html($settings['currency_symbol']);
                echo esc_html($settings['original_price']);
            } ?>
        </span>
        <span class="current-price cp-symble"><?php echo esc_html($settings['currency_symbol']); ?></span>
        <span class="current-price cp"><?php echo esc_html($settings['price']); ?></span>
        <span class="period"><?php echo esc_html($settings['period']); ?></span>
    </div>
    <div class="hex_border"></div>
    <div class="content">
        <?php 
            if ( ! empty( $settings['features_items'] ) ) {
            ?><ul><?php
            foreach ( $settings['features_items'] as $item ) {
                ?><li class="f-item d-flex align-items-center"><?php
                \Elementor\Icons_Manager::render_icon( $item['features_icon'], [ 'aria-hidden' => 'true', 'class' => 'list-icon' ] ); 
                echo esc_html($item['features_text']);
                ?></li><?php
            }
            ?></ul><?php
        }?>
    </div>
    <div class="button d-flex">
    <a href="<?php echo esc_url( $settings['btn_link']['url'] ); ?>" class="d-inline-flex align-items-center"><?php echo esc_html($settings['pricing_btn']); ?><?php \Elementor\Icons_Manager::render_icon( $settings['button_icon'], [ 'aria-hidden' => 'true', 'class' => 'btn-icon' ] ); ?></a>
    </div>
</div>