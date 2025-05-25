<?php
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
    
    // Optional: Log missing template if in debug mode
    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        error_log( 'Magic Elements: Template ' . $template_dir . $templates[0] . ' not found.' );
    }
}