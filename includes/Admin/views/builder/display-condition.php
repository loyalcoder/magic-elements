<?php $random_number = mt_rand(100000, 999999); ?>
<div id="conditional-fields">
    <select class="mc-condition-type" name="condition[<?php echo esc_attr($random_number); ?>][type]">
        <option value="include"><?php esc_html_e('Include', 'magic-elements'); ?></option>
        <option value="exclude"><?php esc_html_e('Exclude', 'magic-elements'); ?></option>
    </select>

    <select class="select2" name="condition[<?php echo esc_attr($random_number); ?>][display]">
        <?php foreach ($display as $key => $value) : ?>
            <option value="<?php echo esc_attr($key); ?>"><?php echo esc_html($value); ?></option>
        <?php endforeach; ?>
    </select>

    <div style="display: none;" name="condition[]">
        <select id="post-type" class="select2"></select>
    </div>

    <div style="display: none;" name="condition[]">
        <select id="taxonomy" class="select2"></select>
    </div>

    <div style="display: none;" name="condition">
        <select id="specific-item" class="select2"></select>
    </div>
</div>