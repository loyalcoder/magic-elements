<div class="pricing-table-container" style="display: flex;">
    <div class="left-part">
        <h2 class="title"><?php echo esc_html($settings['pricing_table_title']); ?></h2>
        <div class="price-box">
            <span>
                <?php if ( 'yes' === $settings['show_sale'] ) {
                    echo esc_html($settings['currency_symbol'] . $settings['original_price']);
                } ?>
            </span>
            <span><?php echo esc_html($settings['currency_symbol']); ?></span>
            <span><?php echo esc_html($settings['price']); ?></span>
            <span><?php echo esc_html($settings['period']); ?></span>
        </div>
    </div>
    <div class="right-part">
        <div class="content">
        <h3 class="sub-title"><?php echo esc_html($settings['pricing_table_subtitle']); ?></h3>
            <?php 
                if ( ! empty( $settings['features_items'] ) ) {
                    echo '<ul>';
                    foreach ( $settings['features_items'] as $item ) {
                        echo '<li>';
                        \Elementor\Icons_Manager::render_icon( $item['features_icon'], [ 'aria-hidden' => 'true', 'class' => 'list-icon' ] ); 
                        echo esc_html($item['features_text']);
                        echo '</li>';
                    }
                    echo '</ul>';
                }
            ?>
        </div>
        <div class="button">
        <a href="<?php echo esc_url( $settings['btn_link']['url'] ); ?>"><?php echo esc_html($settings['pricing_btn']); ?></a>
        </div>
    </div>
</div>
