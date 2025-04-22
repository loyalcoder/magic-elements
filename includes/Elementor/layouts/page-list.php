<?php 

// Prevent direct access to the file
    if (!defined('ABSPATH')) {
        exit;
    }
    
    if ( ! empty( $settings['page_items'] ) ) {
        // Initialize an empty variable to store the HTML
        $output = '<ul class="page-list-widget" style="display: flex; flex-direction: ' . esc_attr( $flex_direction ) . '; ' . esc_attr( $align_property ) . ': ' . esc_attr( $alignment ) . ';">';

        foreach ( $settings['page_items'] as $item ) {
            $page_id = $item['selected_page'];
            $icon = $item['icon']['value'];

            if ( $page_id ) {
                $page = get_page( $page_id );
                if ( $category ) {
                    $output .= '<li>';
                    $output .= '<i class="' . esc_attr( $icon ) . '"></i> ';
                    $output .= '<a href="' . esc_url( get_page_link( $page_id ) ) . '">';
                    $output .= esc_html( $page->name );
                    $output .= '</a>';
                    $output .= '</li>';
                }
            }
        }

        $output .= '</ul>';

        // Echo the sanitized output using wp_kses
        echo wp_kses(
            $output,
            array(
                'ul' => array(
                    'class' => array(),
                    'style' => array(),
                ),
                'li' => array(),
                'i'  => array( 'class' => array() ),
                'a'  => array( 'href' => array() ),
            )
        );
    }
