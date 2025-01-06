<?php
  // Render the List
  if ( ! empty( $settings['category_items'] ) ) {
    echo '<ul class="category-list-widget" style="display: flex; flex-direction: ' . esc_attr( $flex_direction ) . '; ' . esc_attr( $align_property ) . ': ' . esc_attr( $alignment ) . ';">';
    foreach ( $settings['category_items'] as $item ) {
        $category_id = $item['selected_category'];
        $icon = $item['icon']['value'];

        if ( $category_id ) {
            $category = get_category( $category_id );
            if ( $category ) {
                echo '<li>';
                echo '<i class="' . esc_attr( $icon ) . '"></i> ';
                echo '<a href="' . esc_url( get_category_link( $category_id ) ) . '">';
                echo esc_html( $category->name );
                echo '</a>';
                echo '</li>';
            }
        }
    }
    echo '</ul>';
}
