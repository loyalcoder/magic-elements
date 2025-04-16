<div class="builder-container">
    <div class="builder-header">
        <h2><?php echo esc_html__('Header Builder', 'magic-elements'); ?></h2>
    </div>
    <div class="builder-add-new">
        <button class="button button-primary add-new-header" data-type="header"><?php echo esc_html__('Add New Header', 'magic-elements'); ?></button>
    </div>
    <div class="builder-list">
        <?php if (!empty($builder_posts)) : ?>
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
                    <?php foreach ($builder_posts as $post) : ?>
                        <tr>
                            <td><?php echo esc_html($post->post_title); ?></td>
                            <td>
                                <?php 
                                $is_active = get_post_meta($post->ID, '_is_active', true);
                                echo $is_active === 'yes' ? 
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
</div>

<!-- Add New Header Modal -->
<div id="create-content-modal" class="template-modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h3><?php echo esc_html__('Create Content', 'magic-elements'); ?></h3>
        <form id="create-content-form">
            <div class="form-group">
                <label for="content-title"><?php echo esc_html__('Content Title', 'magic-elements'); ?></label>
                <input type="text" id="content-title" name="content-title" required>
            </div>
            <div class="form-group">
                <label for="content-status"><?php echo esc_html__('Status', 'magic-elements'); ?></label>
                <div class="switch-wrapper">
                    <input type="checkbox" id="content-status" name="content-status" class="switch-input">
                    <label for="content-status" class="switch-label"></label>
                </div>
            </div>
            <div class="form-group">
            
                <label for="display-on"><?php echo esc_html__('Display On', 'magic-elements'); ?></label>
                <select id="display-on" name="display-on[]" multiple>
                    <?php 
                    foreach ($display as $key => $value) : 
                        if (is_array($value) && !empty($value)) {
                            $title = ($value['title']) ?? ucfirst(str_replace(['_', '-'], ' ', $key));
                    ?>
                            <optgroup label="<?php echo esc_attr($title); ?>">
                                <?php
                                $options = ($value['options']) ?? [];
                                foreach ($options as $option_key => $option_value) : ?>
                                    <option value="<?php echo esc_attr($option_key); ?>">
                                        <?php echo esc_html($option_value); ?>
                                    </option>
                                <?php endforeach; ?>
                            </optgroup>
                    <?php
                        } else {
                    ?>
                            <option value="<?php echo esc_attr($key); ?>">
                                <?php echo esc_html($value); ?>
                            </option>
                    <?php
                        }
                    endforeach; 
                    ?>
                </select>
            </div>
            <div class="form-group">
                <label for="post-type"><?php echo esc_html__('Select Post Type', 'magic-elements'); ?></label>
                <select id="post-type" name="post-type[]" multiple>
                    <?php foreach ($post_types as $key => $value) : ?>
                        <option value="<?php echo esc_attr($key); ?>"><?php echo esc_html($value); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label for="post-type"><?php echo esc_html__('Select Post Type', 'magic-elements'); ?></label>
                <select id="post-type" name="post-type[]" multiple>
                    <?php foreach ($post_types as $key => $value) : ?>
                        <option value="<?php echo esc_attr($key); ?>"><?php echo esc_html($value); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-actions">
                <input type="hidden" name="_display_type" value="header">                
                <button type="submit" class="button button-primary"><?php echo esc_html__('Create Content', 'magic-elements'); ?></button>
                <button type="button" class="button close-modal"><?php echo esc_html__('Cancel', 'magic-elements'); ?></button>
            </div>
        </form>
    </div>
</div>