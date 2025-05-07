<tr>
    <td><?php echo esc_html($post->post_title); ?></td>
    <td>
        <?php 
        $is_active = get_post_meta($post->ID, '_is_active', true);
        echo $is_active === 'on' ? 
            '<span class="status-active">' . esc_html__('Active', 'magic-elements') . '</span>' : 
            '<span class="status-inactive">' . esc_html__('Inactive', 'magic-elements') . '</span>';
        ?>
        <a href="">Edit</a>
    </td>
    <td><?php echo esc_html(get_post_meta($post->ID, '_display_by', true)); ?><a href="">Edit</a></td>
    <td><?php echo esc_html(get_post_meta($post->ID, '_display_on', true)); ?><a href="">Edit</a></td>
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
