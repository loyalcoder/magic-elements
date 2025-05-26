<?php
$display_type = isset($args['display_type']) ? $args['display_type'] : [];
?>
<div class="magic-elements-addnew-header">
    <h2><?php echo esc_html__('Add New Template', 'magic-elements'); ?></h2>
</div>

<form method="post" action="" id="me-add-template-form">
    <?php wp_nonce_field('me_add_template_nonce', 'me_template_nonce'); ?>
    
    <div class="magic-elements-form-group">
        <label for="template_title"><?php echo esc_html__('Template Title', 'magic-elements'); ?></label>
        <input type="text" 
               name="template_title" 
               id="template_title" 
               class="regular-text" 
               required>
    </div>
    <div class="magic-elements-form-group">
        <label for="template_status">
            <input type="checkbox" 
                   name="template_status" 
                   id="template_status" 
                   value="1" 
                   checked>
            <?php echo esc_html__('Active', 'magic-elements'); ?>
        </label>
    </div>
    <div class="magic-elements-form-group">
        <label for="template_type"><?php echo esc_html__('Template Type', 'magic-elements'); ?></label>
        <select name="template_type" id="template_type" required>
            <option value=""><?php echo esc_html__('Select Type', 'magic-elements'); ?></option>
            <?php if (!empty($display_type)) : ?>
                <?php foreach ($display_type as $key => $value) : ?>
                    <option value="<?php echo esc_attr($key); ?>"><?php echo esc_html($value); ?></option>
                <?php endforeach; ?>
            <?php endif; ?>
        </select>
    </div>
    <div class="magic-elements-add-condition-header">
        <h3><?php echo esc_html__('Condition', 'magic-elements'); ?></h3>
    </div>

    <div class="magic-elements-form-group">
        <button type="button" class="button button-secondary" id="me-add-condition"><?php echo esc_html__('Add Condition', 'magic-elements'); ?></button>
    </div>
    <div class="magic-elements-form-actions">
        <button type="submit" class="button button-primary" id="me-submit-template">
            <?php echo esc_html__('Create Template', 'magic-elements'); ?>
        </button>
    </div>
</form>