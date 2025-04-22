<div class="data_table">
    <?php if ( ! empty( $data_table_list ) ) : ?>
        <?php foreach ( $data_table_list as $list ) : ?>
            <div class="data">
                <div class="first-data">
                    <?php \Elementor\Icons_Manager::render_icon( $list['first_data_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                    <p><?php echo esc_html( $list['data_table_first_item'] ); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
