<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from passed $args.
$display_on  = isset( $args['display_on'] ) ? $args['display_on'] : [];
$post_types  = isset( $args['post_types'] ) ? $args['post_types'] : [];
$taxonomies_by_post_type = isset( $args['taxonomies_by_post_type'] ) ? $args['taxonomies_by_post_type'] : [];
$condition   = isset( $args['post_data']['condition'] ) ? $args['post_data']['condition'] : [];

if ( ! empty( $condition ) ) {
    foreach ( $condition as $key => $value ) {
        $display_type_value   = isset( $value['display_type'] ) ? $value['display_type'] : '';
        $display_on_value     = isset( $value['display_on'] ) ? $value['display_on'] : '';
        $post_type_value      = isset( $value['post_type'] ) ? $value['post_type'] : 'post';
        $selective_mode_value = isset( $value['selective_mode'] ) ? $value['selective_mode'] : 'all_posts';
        $post_ids_value       = isset( $value['post_ids'] ) && is_array( $value['post_ids'] ) ? $value['post_ids'] : [];
        $taxonomy_value       = isset( $value['taxonomy'] ) ? $value['taxonomy'] : '';
        $taxonomy_terms_value = isset( $value['taxonomy_terms'] ) && is_array( $value['taxonomy_terms'] ) ? array_map( 'intval', $value['taxonomy_terms'] ) : [];
        $is_selective         = ( $display_on_value === 'selective_singular' );
        $taxonomies_for_pt    = isset( $taxonomies_by_post_type[ $post_type_value ] ) ? $taxonomies_by_post_type[ $post_type_value ] : [];
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
        <div class="condition-group me-builder-condition-selective me-builder-scope-wrap" style="display:<?php echo $is_selective ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Scope', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][selective_mode]" class="me-builder-selective-mode">
                <option value="all_posts" <?php selected( $selective_mode_value, 'all_posts' ); ?>><?php echo esc_html__( 'All posts (of this type)', 'magic-elements' ); ?></option>
                <option value="custom" <?php selected( $selective_mode_value, 'custom' ); ?>><?php echo esc_html__( 'Custom (select posts)', 'magic-elements' ); ?></option>
                <option value="taxonomy" <?php selected( $selective_mode_value, 'taxonomy' ); ?>><?php echo esc_html__( 'Taxonomy', 'magic-elements' ); ?></option>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective me-builder-post-select-wrap" style="display:<?php echo ( $is_selective && $selective_mode_value === 'custom' ) ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Select posts', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][post_ids][]" class="me-builder-post-select" multiple="multiple" data-placeholder="<?php echo esc_attr__( 'Search or select…', 'magic-elements' ); ?>">
                <?php
                foreach ( $post_ids_value as $pid ) {
                    $pid = (int) $pid;
                    if ( $pid && get_post_status( $pid ) ) {
                        echo '<option value="' . esc_attr( $pid ) . '" selected>' . esc_html( get_the_title( $pid ) ) . '</option>';
                    }
                }
                ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective me-builder-taxonomy-wrap" style="display:<?php echo ( $is_selective && $selective_mode_value === 'taxonomy' ) ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Taxonomy', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][taxonomy]" class="me-builder-taxonomy">
                <option value=""><?php echo esc_html__( '— Select taxonomy —', 'magic-elements' ); ?></option>
                <?php foreach ( $taxonomies_for_pt as $tax_slug => $tax_label ) { ?>
                    <option value="<?php echo esc_attr( $tax_slug ); ?>" <?php selected( $taxonomy_value, $tax_slug ); ?>><?php echo esc_html( $tax_label ); ?></option>
                <?php } ?>
            </select>
        </div>
        <div class="condition-group me-builder-condition-selective me-builder-taxonomy-terms-wrap" style="display:<?php echo ( $is_selective && $selective_mode_value === 'taxonomy' ) ? 'block' : 'none'; ?>;">
            <label class="me-condition-label"><?php echo esc_html__( 'Select terms', 'magic-elements' ); ?></label>
            <select name="me_builder_condition[<?php echo esc_attr( $key ); ?>][taxonomy_terms][]" class="me-builder-taxonomy-terms" multiple="multiple" data-placeholder="<?php echo esc_attr__( 'Select terms (optional)', 'magic-elements' ); ?>">
                <?php
                foreach ( $taxonomy_terms_value as $tid ) {
                    $term = $tid ? get_term( $tid ) : null;
                    if ( $term && ! is_wp_error( $term ) ) {
                        echo '<option value="' . esc_attr( $term->term_id ) . '" selected>' . esc_html( $term->name ) . '</option>';
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