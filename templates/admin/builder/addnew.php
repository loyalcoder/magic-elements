<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from passed $args.
$display_type = isset($args['display_type']) ? $args['display_type'] : [];
$post_data = isset($args['post_data']) ? $args['post_data'] : [];
$title = isset($post_data['title']) ? $post_data['title'] : '';
$status = isset($post_data['status']) ? $post_data['status'] : '';
$type = isset($post_data['type']) ? $post_data['type'] : '';
$condition = isset($post_data['condition']) ? $post_data['condition'] : [];
$form_title = isset($post_data['ID']) ? esc_html__('Edit Template', 'magic-elements') : esc_html__('Add New Template', 'magic-elements');
$template_id = isset($post_data['ID']) ? $post_data['ID'] : '';
?>
<div class="magic-elements-addnew-header">
    <h2><?php echo esc_html($form_title); ?></h2>
</div>

<form method="post" action="" id="me-add-template-form">
    <?php wp_nonce_field('me_add_template_nonce', 'me_template_nonce'); ?>
    
    <div class="magic-elements-form-group">
        <label for="template_title"><?php echo esc_html__('Template Title', 'magic-elements'); ?></label>
        <input type="text" 
               name="template_title" 
               id="template_title" 
               class="regular-text" 
               value="<?php echo esc_attr($title); ?>"
               required>
    </div>
    <div class="magic-elements-form-group">
        <label for="template_status">
            <input type="checkbox" 
                   name="template_status" 
                   id="template_status" 
                   value="1" 
                   <?php checked($status, 1); ?>>
            <?php echo esc_html__('Active', 'magic-elements'); ?>
        </label>
    </div>
    <div class="magic-elements-form-group">
        <label for="template_type"><?php echo esc_html__('Template Type', 'magic-elements'); ?></label>
        <select name="template_type" id="template_type" required>
            <option value=""><?php echo esc_html__('Select Type', 'magic-elements'); ?></option>
            <?php if (!empty($display_type)) : ?>
                <?php foreach ($display_type as $key => $value) : ?>
                    <option value="<?php echo esc_attr($key); ?>" <?php selected($type, $key); ?>><?php echo esc_html($value); ?></option>
                <?php endforeach; ?>
            <?php endif; ?>
        </select>
    </div>
    <div class="magic-elements-add-condition-header">
        <h3><?php echo esc_html__('Condition', 'magic-elements'); ?></h3>
    </div>
    <?php if(!empty($condition)){ ?>
        <?php magic_elements_get_template_part('admin/builder/update-condition', '', $args); ?>
    <?php } ?>
    <div class="magic-elements-form-group">
        <button type="button" class="button button-secondary" id="me-add-condition"><?php echo esc_html__('Add Condition', 'magic-elements'); ?></button>
    </div>
    <?php 
     $button_text = isset($post_data['ID']) ? esc_html__('Update Template', 'magic-elements') : esc_html__('Create Template', 'magic-elements');
    
    ?>
    <input type="hidden" name="template_id" value="<?php echo esc_attr($template_id); ?>">
    <div class="magic-elements-form-actions">
        <button type="submit" class="button button-primary" id="me-submit-template">
            <?php echo esc_html($button_text); ?>
        </button>
    </div>
</form>
<?php
$taxonomies_by_post_type = isset( $args['taxonomies_by_post_type'] ) ? $args['taxonomies_by_post_type'] : [];
?>
<script type="text/javascript">
window.me_builder_taxonomies_by_post_type = <?php echo wp_json_encode( $taxonomies_by_post_type ); ?>;
</script>