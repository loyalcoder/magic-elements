<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from passed $args.
$display_on  = isset( $args['display_on'] ) ? $args['display_on'] : [];
$post_types  = isset( $args['post_types'] ) ? $args['post_types'] : [];
?>
<div class="magic-elements-add-condition d-flex flex-wrap align-items-start">
    <div class="magic-elements-add-condition-content d-flex flex-wrap">
        <div class="condition-group">
            <select name="me_builder_condition[0][display_type]" class="me-condition-display-type">
                <option value="exclude"><?php echo esc_html__( 'Exclude', 'magic-elements' ); ?></option>
                <option value="include"><?php echo esc_html__( 'Include', 'magic-elements' ); ?></option>
            </select>
        </div>
        <div class="condition-group">
            <select name="me_builder_condition[0][display_on]" class="me-condition-display-on">
                <?php foreach ( $display_on as $key => $value ) { ?>
                    <option value="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $value ); ?></option>
                <?php } ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective" style="display:none;">
            <label class="me-condition-label"><?php echo esc_html__( 'Post type', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[0][post_type]" class="me-builder-post-type">
                <?php foreach ( $post_types as $pt => $label ) { ?>
                    <option value="<?php echo esc_attr( $pt ); ?>"><?php echo esc_html( $label ); ?></option>
                <?php } ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective me-builder-post-select-wrap" style="display:none;">
            <label class="me-condition-label"><?php echo esc_html__( 'Select posts', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[0][post_ids][]" class="me-builder-post-select" multiple="multiple" data-placeholder="<?php echo esc_attr__( 'Search or select…', 'magic-elements' ); ?>"></select>
        </div>
    </div>
    <button type="button" class="remove-condition">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </button>
</div>