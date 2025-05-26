<div class="magic-elements-add-condition">
    <div class="magic-elements-add-condition-header">
        <h3><?php echo esc_html__('Condition', 'magic-elements'); ?></h3>
    </div>
    <div class="magic-elements-add-condition-content">
        <div class="condition-group">
            <select name="condition_type" id="condition_type">
                <option value="exclude"><?php echo esc_html__('Exclude', 'magic-elements'); ?></option>
                <option value="include"><?php echo esc_html__('Include', 'magic-elements'); ?></option>
            </select>
        </div>
        <div class="condition-group">
            <select name="condition_value" id="condition_value">
                <option value="all"><?php echo esc_html__('All', 'magic-elements'); ?></option>
                <option value="home"><?php echo esc_html__('Home Page', 'magic-elements'); ?></option>
                <option value="archive"><?php echo esc_html__('Archive Pages', 'magic-elements'); ?></option>
                <option value="single"><?php echo esc_html__('Single Posts', 'magic-elements'); ?></option>
            </select>
        </div>
    </div>
</div>