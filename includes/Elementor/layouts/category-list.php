<?php 
    if ( ! empty( $settings['category_items'] ) ) {
        // Initialize an empty variable to store the HTML
        $output = '<ul class="category-list-widget" style="display: flex; flex-direction: ' . esc_attr( $flex_direction ) . '; ' . esc_attr( $align_property ) . ': ' . esc_attr( $alignment ) . ';">';

        foreach ( $settings['category_items'] as $item ) {
            $category_id = $item['selected_category'];
            $icon = $item['icon']['value'];

            if ( $category_id ) {
                $category = get_category( $category_id );
                if ( $category ) {
                    $output .= '<li>';
                    $output .= '<i class="' . esc_attr( $icon ) . '"></i> ';
                    $output .= '<a href="' . esc_url( get_category_link( $category_id ) ) . '">';
                    $output .= esc_html( $category->name );
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
