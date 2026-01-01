<?php
$id = 'em-multi-step-wizard-' . $this->get_id();
$active_step = $settings['active_step'] - 1; // Convert to 0-based index

if (empty($settings['steps'])) {
    return;
}
?>
<div class="em-multi-step-wizard-container" id="<?php echo esc_attr($id); ?>" data-active-step="<?php echo esc_attr($active_step); ?>">
    <!-- Progress Bar -->
    <div class="em-progress-container">
        <div class="em-progress-bar">
            <div class="em-progress-bar-fill" style="width: <?php echo esc_attr(($active_step / (count($settings['steps']) - 1)) * 100); ?>%"></div>
        </div>
    </div>
    
    <!-- Step Indicators -->
    <div class="em-step-indicators-container">
        <?php foreach ($settings['steps'] as $index => $step): ?>
            <div class="em-step-indicator-wrapper">
                <div class="em-step-indicator <?php echo ($index === $active_step) ? 'active' : ''; ?> <?php echo ($index < $active_step) ? 'completed' : ''; ?>" 
                        data-step="<?php echo esc_attr($index); ?>">
                    <?php if (!empty($step['step_icon'])): ?>
                        <div class="em-step-icon">
                            <?php \Elementor\Icons_Manager::render_icon($step['step_icon'], ['aria-hidden' => 'true']); ?>
                        </div>
                    <?php else: ?>
                        <span class="em-step-number"><?php echo esc_html($index + 1); ?></span>
                    <?php endif; ?>
                </div>
                <div class="em-step-title"><?php echo esc_html($step['step_title']); ?></div>
            </div>
        <?php endforeach; ?>
    </div>
    
    <!-- Step Content -->
    <div class="em-step-content-container">
        <?php foreach ($settings['steps'] as $index => $step): ?>
            <div class="em-step-content <?php echo ($index === $active_step) ? 'active' : ''; ?>" data-step="<?php echo esc_attr($index); ?>">
            <?php echo wp_kses_post($step['step_content']); ?>
                <?php if ('yes' === $step['show_checkbox']): ?>
                <div class="em-step-checkbox">
                    <label>
                        <input type="checkbox" class="em-step-agree" data-step="<?php echo esc_attr($index); ?>">
                        <?php echo esc_html($step['checkbox_label']); ?>
                    </label>
                </div>
            <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    
    <!-- Navigation Buttons -->    
    <?php 
    	if ( 'yes' === $settings['show_n_button'] ) {
			?>
            <div class="em-nav-buttons-container">
                <button type="button" class="em-nav-button em-prev-button" <?php echo ($active_step === 0) ? 'disabled' : ''; ?>>
                    <?php echo esc_html($settings['prev_button_text']); ?>
                </button>
                <button type="button" class="em-nav-button em-next-button" <?php echo ($active_step === count($settings['steps']) - 1) ? 'disabled' : ''; ?>>
                    <?php echo esc_html($settings['next_button_text']); ?>
                </button>
            </div>
            <?php
		}
    
    if ('yes' === $settings['show_arrows']): ?>
        <div class="em-step-navigation">
            <button type="button" class="em-step-nav-arrow em-step-prev" <?php echo ($active_step === 0) ? 'disabled' : ''; ?>>
                <?php \Elementor\Icons_Manager::render_icon($settings['prev_arrow'], ['aria-hidden' => 'true']); ?>
            </button>
            <button type="button" class="em-step-nav-arrow em-step-next" <?php echo ($active_step === count($settings['steps']) - 1) ? 'disabled' : ''; ?>>
                <?php \Elementor\Icons_Manager::render_icon($settings['next_arrow'], ['aria-hidden' => 'true']); ?>
            </button>
        </div>
    <?php endif; 
    // Completion Popup (hidden by default)==========
    if ( 'yes' === $settings['complete_step_alert'] ) {
			?>
            <div class="em-step-completion-popup" style="display: none;">
                <div class="em-step-popup-overlay"></div>
                <div class="em-step-popup-content">
                    <div class="em-step-popup-close">&times;</div>
                    <h3><?php echo $settings['alert_title']; ?></h3>
                    <?php echo $settings['alert_description']; ?>
                    <button class="em-step-popup-button"><?php echo $settings['alert_btn']; ?></button>
                </div>
            </div>
            <?php 
		}
    ?>
</div>