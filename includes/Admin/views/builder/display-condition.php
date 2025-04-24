<div id="conditional-fields">
    <select id="condition1" class="select2">
        <option value="include"><?php esc_html_e('Include', 'magic-elements'); ?></option>
        <option value="exclude"><?php esc_html_e('Exclude', 'magic-elements'); ?></option>
    </select>

    <select id="condition2" class="select2">
        <option value="singular">Singular</option>
        <option value="plural">Plural</option>
    </select>

    <div id="post-type-select" style="display: none;">
        <select id="post-type" class="select2"></select>
    </div>

    <div id="taxonomy-select" style="display: none;">
        <select id="taxonomy" class="select2"></select>
    </div>

    <div id="specific-field" style="display: none;">
        <select id="specific-item" class="select2"></select>
    </div>
</div>