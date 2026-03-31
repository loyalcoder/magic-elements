<div class="multiple-button-wrapper">
    <?php 
    if ($settings['button_list']) {
        foreach ($settings['button_list'] as $index => $item) {
            $btn_link = $item['btn_link'];
            $link_key = 'btn_link_' . $index;

            // Generate dynamic class for CURRENT_ITEM to work
            $repeater_class = 'elementor-repeater-item-' . $item['_id'];

            // Add link attributes
            if (!empty($btn_link['url'])) {
                $this->add_link_attributes($link_key, $btn_link);
            }

            // Add class attribute for dynamic styling
            $this->add_render_attribute($link_key, 'class', [
                $repeater_class,
                'magic-button'
            ]);
            ?>
            <div class="bt-item">
                <div class="btn-item-wrapper">
                    <a <?php echo $this->get_render_attribute_string($link_key); ?>>
                        <span class="btn-icon">
                        <?php 
                        // Display icon if it exists
                        if (!empty($item['icon']['value'])) {
                            \Elementor\Icons_Manager::render_icon($item['icon'], [
                                'aria-hidden' => 'true',
                                'class' => 'magic-button-icon'
                            ]);
                        }
                        ?>
                        </span>
                        <span class="magic-button-text"><?php echo esc_html($item['button_text']); ?></span>
                    </a>
                </div>
            </div>
            <?php
        }
    }
    ?>
</div>
