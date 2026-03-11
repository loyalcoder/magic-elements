<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Load a template part from the plugin templates directory
 *
 * @param string $slug The slug name for the generic template
 * @param string $name Optional. The name of the specialized template
 * @param array  $args Optional. Variables to pass to the template
 * @return void
 */
function magic_elements_get_template_part( $slug, $name = '', $args = array() ) {
    // Extract args as variables if supplied
    if ( !empty( $args ) && is_array( $args ) ) {
        extract( $args );
    }
    
    // Build the template hierarchy
    $templates = array();
    if ( !empty( $name ) ) {
        $templates[] = "{$slug}-{$name}.php";
    }
    $templates[] = "{$slug}.php";
    
    // Define plugin template directory
    $template_dir = MAGIC_ELEMENTS_DIR_PATH . 'templates/';
    
    // Allow overriding templates in theme
    $template_dir = apply_filters( 'magic_elements_template_directory', $template_dir );
    
    // Loop through templates, return first one found
    foreach ( $templates as $template ) {
        $template_path = $template_dir . $template;
        if ( file_exists( $template_path ) ) {
            include $template_path;
            return;
        }
    }
    
    // Optional: Log missing template if in debug mode (development only).
    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- Intentional debug logging when WP_DEBUG is enabled.
        error_log( 'Magic Elements: Template ' . $template_dir . $templates[0] . ' not found.' );
    }
}

if ( ! function_exists( 'me_get_display_condition_html' ) ) {
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound -- Plugin uses me_ prefix for global functions.
    function me_get_display_condition_html( $condition ) {
        $html = '<ul class="me-display-condition-list">';
        
        if ( ! empty( $condition ) && is_array( $condition ) ) {
            foreach ( $condition as $item ) {
                if ( ! isset( $item['display_type'] ) || ! isset( $item['display_on'] ) ) {
                    continue;
                }
                $display_type = str_replace( '_', ' ', $item['display_type'] );
                $display_on   = $item['display_on'];
                $display_on_label = ( $display_on === 'selective_singular' )
                    ? esc_html__( 'Selective Singular', 'magic-elements' )
                    : esc_html( ucwords( str_replace( '_', ' ', $display_on ) ) );
                $html .= '<li><strong>' . esc_html__( 'Display Type:', 'magic-elements' ) . '</strong> ' . esc_html( ucwords( $display_type ) ) . '</li>';
                $html .= '<li><strong>' . esc_html__( 'Display On:', 'magic-elements' ) . '</strong> ' . $display_on_label;
                if ( $display_on === 'selective_singular' ) {
                    $post_type = isset( $item['post_type'] ) ? $item['post_type'] : 'post';
                    $post_type_obj = get_post_type_object( $post_type );
                    $post_type_label = $post_type_obj ? $post_type_obj->labels->singular_name : $post_type;
                    $mode = isset( $item['selective_mode'] ) ? $item['selective_mode'] : 'all_posts';
                    $html .= ' <span class="me-condition-meta">(' . esc_html( $post_type_label ) . ')';
                    if ( $mode === 'all_posts' ) {
                        $html .= ' — ' . esc_html__( 'All posts', 'magic-elements' );
                    } elseif ( $mode === 'taxonomy' && ! empty( $item['taxonomy'] ) ) {
                        $tax_obj = get_taxonomy( $item['taxonomy'] );
                        $tax_label = $tax_obj ? $tax_obj->labels->singular_name : $item['taxonomy'];
                        $html .= ' — ' . esc_html__( 'Taxonomy:', 'magic-elements' ) . ' ' . esc_html( $tax_label );
                        $term_ids = isset( $item['taxonomy_terms'] ) && is_array( $item['taxonomy_terms'] ) ? $item['taxonomy_terms'] : [];
                        if ( ! empty( $term_ids ) ) {
                            $term_names = array_filter( array_map( function ( $id ) {
                                $t = get_term( $id );
                                return ( $t && ! is_wp_error( $t ) ) ? $t->name : '';
                            }, $term_ids ) );
                            $html .= ' (' . esc_html( implode( ', ', $term_names ) ) . ')';
                        }
                    } elseif ( $mode === 'custom' ) {
                        $post_ids = isset( $item['post_ids'] ) && is_array( $item['post_ids'] ) ? array_map( 'intval', $item['post_ids'] ) : [];
                        if ( ! empty( $post_ids ) ) {
                            $titles = array_filter( array_map( function ( $id ) {
                                return $id ? get_the_title( $id ) : '';
                            }, $post_ids ) );
                            $html .= ' — ' . esc_html( implode( ', ', $titles ) );
                        }
                    }
                    $html .= '</span>';
                }
                $html .= '</li>';
            }
        }
        
        $html .= '</ul>';
        return $html;
    }
}