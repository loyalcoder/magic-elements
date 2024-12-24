<style>
.category-list-widget {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
}

.category-list-widget li {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.category-list-widget li i {
    margin-right: 10px;
}

.category-list-widget li a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
}



</style>

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
