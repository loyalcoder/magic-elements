<div class="wrap">
    <h1><?php echo esc_html__('Magic Kit Settings', 'magic-kit'); ?></h1>

    <div id="settings-toast" class="toast"></div>

    <form id="magic-kit-settings" method="post">
        <?php wp_nonce_field('magic_kit_settings_nonce', 'magic_kit_nonce'); ?>
        
        <div class="form-group">
            <h3><?php esc_html_e('Enable/Disable Widgets', 'magic-kit'); ?></h3>

            <div class="bulk-actions">
                <button type="button" class="bulk-action-button" onclick="toggleAll(true)">
                    <?php esc_html_e('Enable All', 'magic-kit'); ?>
                </button>
                <button type="button" class="bulk-action-button" onclick="toggleAll(false)">
                    <?php esc_html_e('Disable All', 'magic-kit'); ?>
                </button>
            </div>
            
            <?php
            $widgets = [
                'button' => __('Button', 'magic-kit'),
                'heading' => __('Heading', 'magic-kit'), 
                'image' => __('Image', 'magic-kit'),
                'text' => __('Text', 'magic-kit'),
                'icon' => __('Icon', 'magic-kit')
            ];

            $enabled_widgets = get_option('magic_kit_enabled_widgets', array());

            foreach($widgets as $widget_key => $widget_label) : ?>
                <div class="widget-row">
                    <label class="toggle-switch" for="toggle-<?php echo esc_attr($widget_key); ?>">
                        <input type="checkbox" 
                               id="toggle-<?php echo esc_attr($widget_key); ?>"
                               name="magic_kit_enabled_widgets[]" 
                               value="<?php echo esc_attr($widget_key); ?>" 
                               <?php checked(in_array($widget_key, $enabled_widgets)); ?>>
                        <span class="toggle-slider"></span>
                        <span class="widget-label"><?php echo esc_html($widget_label); ?></span>
                    </label>
                </div>
            <?php endforeach; ?>
        </div>

        <button type="submit" class="button button-primary"><?php esc_html_e('Save Changes', 'magic-kit'); ?></button>
    </form>
</div>

<script>

const toggleAll = (enable) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic_kit_enabled_widgets[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = enable;
    });
}
</script>
