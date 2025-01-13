<?php
/**
 * Admin settings page template
 * 
 * Renders the main settings page interface for the Magic Kit plugin.
 * This template includes:
 * - Widget enable/disable toggles
 * - Bulk action buttons
 * - Settings form with nonce verification
 * - Success/error toast notifications
 *
 * @package Elementor_Magic_Kit\Admin\Views
 * @since 1.0.0
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
?>
<div class="wrap">
    <h1><?php echo esc_html__('Magic Kit Settings', 'magic-elements'); ?></h1>

    <div id="settings-toast" class="toast"></div>

    <form id="magic-kit-settings" method="post">
        <?php wp_nonce_field('magic_kit_settings_nonce', 'magic_kit_nonce'); ?>
        
        <div class="form-group">
            <h3><?php echo esc_html__('Enable/Disable Widgets', 'magic-elements'); ?></h3>

            <div class="bulk-actions">
                <button type="button" class="bulk-action-button" >
                    <?php echo esc_html__('Enable All', 'magic-elements'); ?>
                </button>
                <button type="button" class="bulk-action-button">
                    <?php echo esc_html__('Disable All', 'magic-elements'); ?>
                </button>
            </div>
            
            <?php
            $widget_list = \Elementor_Magic_Kit\Load_Elementor::getWidgetList();
            $widgets = [];
            foreach($widget_list as $widget) {
                $widget_key = strtolower(str_replace('_', '', $widget));
                $widgets[$widget_key] = esc_html($widget);
            }
            $enabled_widgets = get_option('magic_kit_enabled_widgets', array());

            foreach($widgets as $widget_key => $widget_label) : 
                $formatted_label = str_replace('_', ' ', $widget_label);
            ?>
                <div class="widget-row">
                    <label class="toggle-switch" for="toggle-<?php echo esc_attr($widget_key); ?>">
                        <input type="checkbox" 
                               id="toggle-<?php echo esc_attr($widget_key); ?>"
                               name="magic_kit_enabled_widgets[]" 
                               value="<?php echo esc_attr($widget_key); ?>" 
                               <?php checked(in_array($widget_key, $enabled_widgets)); ?>>
                        <span class="toggle-slider"></span>
                        <span class="widget-label"><?php echo esc_html($formatted_label); ?></span>
                    </label>
                </div>
            <?php endforeach; ?>
        </div>
        <button type="submit" class="button button-primary"><?php echo esc_html__('Save Changes', 'magic-elements'); ?></button>
    </form>
</div>
