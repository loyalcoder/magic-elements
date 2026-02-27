<?php 
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget settings/loop.
// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}
$counter_id = 'counters_' . (isset($settings['_id']) ? esc_attr($settings['_id']) : uniqid('counter_', true));
$start_number = !empty($settings['counter_start_number']) ? absint($settings['counter_start_number']) : 0;
$end_number = !empty($settings['counter_number']) ? absint($settings['counter_number']) : 100;
$speed = !empty($settings['counter_speed']) ? absint($settings['counter_speed']) : 2000;
?>
<div class="counter-wrapper">
    <h3 id="<?php echo esc_attr($counter_id); ?>">
        <span class="counter" data-StartNum="<?php echo esc_attr($start_number); ?>" data-TargetNum="<?php echo esc_attr($end_number); ?>" data-Speed="<?php echo esc_attr($speed); ?>"><?php echo esc_html($end_number); ?></span><?php echo esc_html($settings['counter_suffix_one']); ?>
    </h3>
    <p><?php echo esc_html($settings['counter_title']); ?></p>
</div>