
    <button class="emk-search-button btn btn-primary">
        <?php if ('yes' === $settings['show_icon'] && 'left' === $settings['icon_position']) : ?>
            <span class="magic-icon magic-icon-left">
                <?php \Elementor\Icons_Manager::render_icon($settings['selected_icon'], ['aria-hidden' => 'true']); ?>
            </span>
        <?php endif; ?>
        
        <?php echo esc_html($settings['button_text']); ?>
        
        <?php if ('yes' === $settings['show_icon'] && 'right' === $settings['icon_position']) : ?>
            <span class="magic-icon magic-icon-right">
                <?php \Elementor\Icons_Manager::render_icon($settings['selected_icon'], ['aria-hidden' => 'true']); ?>
            </span>
        <?php endif; ?>
    </button>

    <div class="emk-search-modal">
        <div class="emk-modal-content">
            <button class="emk-close-btn"></button>
            <form class="emk-search-form">
                <input type="text" class="emk-search-input" placeholder="Type to search..." />
                <button type="submit" class="btn btn-success">Go</button>
            </form>
        </div>
    </div>