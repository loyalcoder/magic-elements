<?php
/**
 * Progress Bar Template
 */
$settings = $this->get_settings_for_display();

$this->add_render_attribute('wrapper', 'class', 'magic-progress-bar-wrapper');
$this->add_render_attribute('container', 'class', 'magic-progress-bar-container');

$this->add_render_attribute('fill', [
    'class' => ['magic-progress-bar-fill'],
    'data-percent' => $settings['percent']['size'], 
    'data-duration' => $settings['duration'],
    'data-delay' => $settings['animation_delay'],
]);

// Add stripe classes if needed
if ('yes' === $settings['fill_stripe']) {
    $this->add_render_attribute('fill', 'class', 'magic-progress-bar-stripe');
    
    if ('yes' === $settings['fill_stripe_animate']) {
        $this->add_render_attribute('fill', 'class', 'magic-progress-bar-animate');
    }
}

// Percentage attributes
if ('yes' === $settings['display_percentage']) {
    $this->add_render_attribute('percentage', [
        'class' => ['magic-progress-bar-percentage', $settings['percentage_position']],
    ]);
}

// Icon attributes
if ('yes' === $settings['show_icon'] && !empty($settings['icon']['value'])) {
    $this->add_render_attribute('icon', 'class', [
        'magic-progress-bar-icon',
        'magic-progress-bar-icon-' . $settings['icon_position'],
    ]);
}
?>

<div class="magic-progress-bar">
    <div class="progress-icons-wrapper">
        <?php if ('yes' === $settings['show_icon'] && 'before_title' === $settings['icon_position']) : ?>
            <div <?php echo $this->get_render_attribute_string('icon'); ?>>
                <?php \Elementor\Icons_Manager::render_icon($settings['icon'], ['aria-hidden' => 'true']); ?>
            </div>
        <?php endif; ?>
        
        <?php if ($settings['title'])  : ?>
            <div class="magic-progress-bar-title"><?php echo esc_html($settings['title']); ?></div>
        <?php endif; ?>
        
        <?php if ('yes' === $settings['show_icon'] && 'after_title' === $settings['icon_position']) : ?>
            <div <?php echo $this->get_render_attribute_string('icon'); ?>>
                <?php \Elementor\Icons_Manager::render_icon($settings['icon'], ['aria-hidden' => 'true']); ?>
            </div>
        <?php endif; ?>
    </div>
    
    <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
        <div <?php echo $this->get_render_attribute_string('container'); ?>>
            <div <?php echo $this->get_render_attribute_string('fill'); ?>>
                <?php if ('yes' === $settings['display_percentage'] && 'inside' === $settings['percentage_position']) : ?>
                    <span <?php echo $this->get_render_attribute_string('percentage'); ?>>0%</span>
                <?php endif; ?>
                
                <?php if ('yes' === $settings['display_percentage'] && 'tooltip' === $settings['percentage_position']) : ?>
                    <span class="magic-progress-bar-percentage-tooltip">0%</span>
                <?php endif; ?>
            </div>
        </div>
        
        <?php if ('yes' === $settings['display_percentage'] && 'outside' === $settings['percentage_position']) : ?>
            <span <?php echo $this->get_render_attribute_string('percentage'); ?>>0%</span>
        <?php endif; ?>
    </div>
</div>