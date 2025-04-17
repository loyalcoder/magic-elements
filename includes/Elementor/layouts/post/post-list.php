<?php
if (have_posts()) :
    $query = new WP_Query($args);

    if ($query->have_posts()) :
        echo '<div class="emkit-post-list layout-' . esc_attr($settings['layout']) . ' columns-' . esc_attr($settings['columns']) . '">';
        
        while ($query->have_posts()) : $query->the_post();
            echo '<div class="emkit-post-item">';

            // Featured Image
            if ('yes' === $settings['show_image'] && has_post_thumbnail()) {
                echo '<div class="post-thumbnail">';
                the_post_thumbnail($settings['image_size']);
                echo '</div>';
            }

            // Title
            if ('yes' === $settings['show_title']) {
                echo '<' . esc_attr($settings['title_tag']) . ' class="post-title">';
                echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
                echo '</' . esc_attr($settings['title_tag']) . '>';
            }

            // Meta Data
            if ('yes' === $settings['show_meta']) {
                echo '<div class="post-meta">';
                foreach ($settings['meta_data'] as $meta) {
                    switch ($meta) {
                        case 'author':
                            echo '<span class="post-author">' . get_the_author() . '</span>';
                            break;
                        case 'date':
                            echo '<span class="post-date">' . get_the_date() . '</span>';
                            break;
                        case 'time':
                            echo '<span class="post-time">' . get_the_time() . '</span>';
                            break;
                        case 'comments':
                            echo '<span class="post-comments">' . get_comments_number() . ' ' . __('Comments', 'magic-elements') . '</span>';
                            break;
                        case 'categories':
                            echo '<span class="post-categories">' . get_the_category_list(', ') . '</span>';
                            break;
                        case 'tags':
                            echo '<span class="post-tags">' . get_the_tag_list('', ', ') . '</span>';
                            break;
                    }
                }
                echo '</div>';
            }

            // Excerpt
            if ('yes' === $settings['show_excerpt']) {
                echo '<div class="post-excerpt">';
                echo wp_trim_words(get_the_excerpt(), $settings['excerpt_length'], '...');
                echo '</div>';
            }

            // Read More
            if ('yes' === $settings['show_read_more']) {
                echo '<div class="post-read-more">';
                echo '<a href="' . get_permalink() . '">' . esc_html($settings['read_more_text']) . '</a>';
                echo '</div>';
            }

            echo '</div>'; // emkit-post-item
        endwhile;

        echo '</div>'; // emkit-post-list

        wp_reset_postdata();
    else :
        echo '<p>' . __('No posts found.', 'magic-elements') . '</p>';
    endif;
endif;
