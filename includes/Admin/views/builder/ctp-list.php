<div class="condition-item">
    <select name="condition-type[display][]" class="condition-display condition-singular-d-1">
        <option value=""><?php echo esc_html__('Select Post Type', 'magic-elements'); ?></option>
        <?php 
        if (!empty($singular_options) && is_array($singular_options)) {
            foreach($singular_options as $key => $value) {
                printf(
                    '<option value="%s">%s</option>',
                    esc_attr($key),
                    esc_html($value)
                );
            }
        }
        ?>
    </select>
</div>
<div class="condition-container-dep-2"></div>