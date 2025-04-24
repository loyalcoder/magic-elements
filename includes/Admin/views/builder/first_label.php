<div class="form-group">
    <label for="content-title"><?php echo esc_html__('Display Condition', 'magic-elements'); ?></label>
    <div class="condition-group">
        <div class="condition-item">
            <select name="condition-type[]">
                <option value="include"><?php echo esc_html__('Include', 'magic-elements'); ?></option>
                <option value="exclude"><?php echo esc_html__('Exclude', 'magic-elements'); ?></option>
            </select>
        </div>
        <div class="condition-item">
            <select name="condition-type[display][]" class="condition-display">
                <?php 
                if (!empty($display) && is_array($display)) {
                    foreach($display as $key => $value) {
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
    </div>
    <button class="button button-primary" type="button" id="remove-condition"><?php echo esc_html__('Remove', 'magic-elements'); ?></button>
</div>