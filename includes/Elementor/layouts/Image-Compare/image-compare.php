 <div <?php echo $this->get_render_attribute_string('image-compare'); ?>>
            <img src="<?php echo esc_url($settings['before_image']['url']); ?>" alt="<?php echo esc_attr($settings['before_label']); ?>">
            <img src="<?php echo esc_url($settings['after_image']['url']); ?>" alt="<?php echo esc_attr($settings['after_label']); ?>">
        </div>