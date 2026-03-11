<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from passed $args.
$display_on = isset( $args['display_on'] ) ? $args['display_on'] : [];
$post_types = isset( $args['post_types'] ) ? $args['post_types'] : [];
$condition  = isset( $args['post_data']['condition'] ) ? $args['post_data']['condition'] : [];

if ( ! empty( $condition ) ) {
    foreach ( $condition as $key => $value ) {
        $display_type_value = isset( $value['display_type'] ) ? $value['display_type'] : '';
        $display_on_value   = isset( $value['display_on'] ) ? $value['display_on'] : '';
        $post_type_value    = isset( $value['post_type'] ) ? $value['post_type'] : 'post';
        $post_ids_value     = isset( $value['post_ids'] ) && is_array( $value['post_ids'] ) ? $value['post_ids'] : [];
        $all_posts_value    = ! empty( $value['all_posts'] );
        // Back-compat: if selective_singular with empty IDs, treat as \"all posts\" for that post type.
        $is_selective       = ( $display_on_value === 'selective_singular' );
        if ( $is_selective && empty( $post_ids_value ) ) {
            $all_posts_value = true;
        }
        ?>
<div class="magic-elements-add-condition d-flex flex-wrap align-items-start">
    <div class="magic-elements-add-condition-content d-flex flex-wrap">
        <div class="condition-group">
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][display_type]" class="me-condition-display-type">
                <option value="exclude" <?php selected( $display_type_value, 'exclude' ); ?>><?php echo esc_html__( 'Exclude', 'magic-elements' ); ?></option>
                <option value="include" <?php selected( $display_type_value, 'include' ); ?>><?php echo esc_html__( 'Include', 'magic-elements' ); ?></option>
            </select>
        </div>
        <div class="condition-group">
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][display_on]" class="me-condition-display-on">
                <?php foreach ( $display_on as $opt_key => $opt_label ) { ?>
                    <option value="<?php echo esc_attr( $opt_key ); ?>" <?php selected( $display_on_value, $opt_key ); ?>><?php echo esc_html( $opt_label ); ?></option>
                <?php } ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective" style="display:<?php echo $is_selective ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Post type', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][post_type]" class="me-builder-post-type">
                <?php foreach ( $post_types as $pt => $label ) { ?>
                    <option value="<?php echo esc_attr( $pt ); ?>" <?php selected( $post_type_value, $pt ); ?>><?php echo esc_html( $label ); ?></option>
                <?php } ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective me-builder-post-select-wrap" style="display:<?php echo $is_selective ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Select posts', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][post_ids][]" class="me-builder-post-select" multiple="multiple" data-placeholder="<?php echo esc_attr__( 'Search or select…', 'magic-elements' ); ?>">
                <?php
                // If \"all posts\" is set for this condition, preselect the synthetic All option.
                if ( $is_selective && $all_posts_value ) {
                    $pt_obj   = get_post_type_object( $post_type_value );
                    $pt_label = $pt_obj ? $pt_obj->labels->name : $post_type_value;
                    $all_text = sprintf(
                        /* translators: %s: post type label, e.g. Posts, Pages. */
                        esc_html__( 'All %s', 'magic-elements' ),
                        esc_html( $pt_label )
                    );
                    echo '<option value="__all__" selected>' . $all_text . '</option>';
                }
                foreach ( $post_ids_value as $pid ) {
                    $pid = (int) $pid;
                    if ( $pid && get_post_status( $pid ) ) {
                        echo '<option value="' . esc_attr( $pid ) . '" selected>' . esc_html( get_the_title( $pid ) ) . '</option>';
                    }
                }
                ?>
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
<?php
    }
}