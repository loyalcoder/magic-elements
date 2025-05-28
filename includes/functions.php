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

if(!function_exists('me_get_display_condition_html')){
    function me_get_display_condition_html($condition) {
        $html = '<ul class="me-display-condition-list">';
        
        if (!empty($condition) && is_array($condition)) {
            foreach ($condition as $item) {
                if (isset($item['display_type']) && isset($item['display_on'])) {
                    $display_type = str_replace('_', ' ', $item['display_type']);
                    $display_on = str_replace('_', ' ', $item['display_on']);
                    $html .= '<li><strong>' . esc_html__('Display Type:', 'magic-elements') . '</strong> ' . esc_html(ucwords($display_type)) . '</li>';
                    $html .= '<li><strong>' . esc_html__('Display On:', 'magic-elements') . '</strong> ' . esc_html(ucwords($display_on)) . '</li>';
                }
            }
        }
        
        $html .= '</ul>';
        return $html;
    }
}