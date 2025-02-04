<?php 
    $cursor_class = $settings['enable_cursor_pointer'] === 'yes' ? 'cursor-pointer' : 'cursor-default';
 ?>
<div class="emk-accordion-wrapper <?php echo esc_attr($settings['accordion_style']); ?> " data-animation-duration="<?php echo esc_attr($settings['toggle_animation_duration']); ?>">
    <div class="emk-accordion-container">
        <?php if (!empty($settings['accordion_list'])) : ?>
            <?php foreach ($settings['accordion_list'] as $item) : ?>
                <div class="emk-accordion-item">
                    <div class="emk-accordion-title d-flex align-items-center <?php echo esc_attr($cursor_class); ?>">
                        <h3 class="emk-heading"><?php echo esc_html($item['accordion_list_title']); ?></h3>
                        <div class="emk-icons">
                            <div class="accordion_expand_icon">
                                <span class="d-flex">
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['accordion_expand_icon'], [ 'aria-hidden' => 'true'] ); ?>
                                </span>
                            </div>
                            <div class="accordion_collapse_icon">
                                <span class="d-flex">
                                    <?php \Elementor\Icons_Manager::render_icon( $settings['accordion_collapse_icon'], [ 'aria-hidden' => 'true'] ); ?>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="emk-accordion-content" style="<?php echo $settings['accordion_style'] === 'style_three' ? 'display: block;' : 'display: none;'; ?>">
                        <?php echo wp_kses_post($item['accordion_list_content']); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>