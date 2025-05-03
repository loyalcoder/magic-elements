<div class="builder-list">
    <?php 
    
    $args = array(
        'post_type' => 'magic_builder',
        'posts_per_page' => -1,
        'meta_query' => array(
            array(
                'key' => '_display_type',
                'value' => $type,
                'compare' => '='
            )
        )
    );
    $get_all_post = get_posts($args);
    ?>
        <?php if (!empty($get_all_post)) : ?>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php echo esc_html__('Title', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Status', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Display By', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Display On', 'magic-elements'); ?></th>
                        <th><?php echo esc_html__('Actions', 'magic-elements'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($get_all_post as $post) : ?>
                        <tr>
                            <td><?php echo esc_html($post->post_title); ?></td>
                            <td>
                                <?php 
                                $is_active = get_post_meta($post->ID, '_is_active', true);
                                echo $is_active === 'on' ? 
                                    '<span class="status-active">' . esc_html__('Active', 'magic-elements') . '</span>' : 
                                    '<span class="status-inactive">' . esc_html__('Inactive', 'magic-elements') . '</span>';
                                ?>
                            </td>
                            <td><?php echo esc_html(get_post_meta($post->ID, '_display_by', true)); ?></td>
                            <td><?php echo esc_html(get_post_meta($post->ID, '_display_on', true)); ?></td>
                            <td>
                                <a href="<?php echo esc_url(admin_url('post.php?post=' . $post->ID . '&action=elementor')); ?>" class="button elementor-button elementor-button-default" target="_blank">
                                    <i class="eicon-edit"></i>
                                    <?php echo esc_html__('Edit with Elementor', 'magic-elements'); ?>
                                </a>
                                <a href="<?php echo esc_url(get_permalink($post->ID)); ?>" class="button" target="_blank">
                                    <i class="eicon-preview"></i>
                                    <?php echo esc_html__('Preview', 'magic-elements'); ?>
                                </a>
                                <button class="button delete-builder" data-id="<?php echo esc_attr($post->ID); ?>">
                                    <?php echo esc_html__('Delete', 'magic-elements'); ?>
                                </button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else : ?>
            <div class="builder-empty">
                <?php echo esc_html__('No headers found.', 'magic-elements'); ?>
            </div>
        <?php endif; ?>
    </div>