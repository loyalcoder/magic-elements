<?php
$display_on = isset($args['display_on']) ? $args['display_on'] : [];
?>
<div class="magic-elements-add-condition d-flex">
    <div class="magic-elements-add-condition-content d-flex">
        <div class="condition-group">
            <select name="me_builder_condition[0][display_type]">
              <option value="exclude"><?php echo esc_html__('Exclude', 'magic-elements'); ?></option>
              <option value="include"><?php echo esc_html__('Include', 'magic-elements'); ?></option>
            </select>
        </div>
        <div class="condition-group">
            <select name="me_builder_condition[0][display_on]">
                <?php foreach ($display_on as $key => $value) { ?>
                    <option value="<?php echo esc_attr($key); ?>"><?php echo esc_html($value); ?></option>
                <?php } ?>
            </select>
        </div>
    </div>
    <button type="button" class="remove-condition">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </button>
</div>