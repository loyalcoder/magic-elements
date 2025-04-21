<div class="condition-item">
    <select name="condition-type[display][]" class="condition-display condition-singular-d-1">
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