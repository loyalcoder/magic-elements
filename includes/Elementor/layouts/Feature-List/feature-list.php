<div class="feature-list">
    <?php if ( ! empty( $feature_list ) ) : ?>
        <?php foreach ( $feature_list as $list ) : ?>
            <div class="feature">
                <div class="feature-icon">
                    <?php \Elementor\Icons_Manager::render_icon( $list['feature_list_icon'], [ 'aria-hidden' => 'true' ] ); ?>
                </div>
                <div class="feature-content">
                    <h3><?php echo esc_html($list['feature_list_title']); ?></h3>
                    <p><?php echo esc_html( $list['feature_list_description'] ); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>