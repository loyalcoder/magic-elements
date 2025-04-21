<div class="condition-item">
    <select name="condition-type[display][]" class="condition-display condition-singular-d-2">
        <?php 
        if (!empty($post_types_archive_list) && is_array($post_types_archive_list)) {
            foreach($post_types_archive_list as $post_type => $data) {
                // Add the "All" option
                printf(
                    '<option value="%s">%s</option>',
                    esc_attr($post_type),
                    esc_html($data['label'])
                );

                // Add taxonomy options
                if (!empty($data['taxonomies'])) {
                    foreach($data['taxonomies'] as $tax_name => $tax_data) {
                        printf(
                            '<option value="%s">%s</option>',
                            esc_attr($tax_name),
                            esc_html($tax_data['label'])
                        );
                    }
                }

                // Add specific pages option
                printf(
                    '<option value="specific">%s</option>',
                    esc_html($data['specific_pages'])
                );
            }
        }
        ?>
    </select>
</div>
<div class="spacif-ox"></div>