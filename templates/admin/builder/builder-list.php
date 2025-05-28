<?php if (isset($args['templates']) && !empty($args['templates'])) { 
    foreach ($args['templates'] as $list) { 
         $status = $list['status'] == 1 ? 'active' : 'inactive';
        ?> 
        <div class="magic-elements-preview-item">
            <div class="preview-item-header">
                <h3><?php echo esc_html($list['title']); ?></h3>
                <?php 
                $edit_with_elementor = $elementor_edit_link = add_query_arg([
                    'post' => $list['ID'],
                    'action' => 'elementor'
                ], admin_url('post.php'));
                $preview_link = add_query_arg([
                    'post' => $list['ID'],
                    'action' => 'elementor'
                ], admin_url('post.php'));
                ?> 
                <div class="preview-item-actions">
                    <a href="<?php echo esc_url($preview_link); ?> " class="preview-link" target="_blank"><?php echo esc_html__('Preview', 'magic-elements'); ?></a>
                    <a href="javascript:void(0)" class="edit-link" data-id="<?php echo esc_attr($list['ID']); ?>"><?php echo esc_html__('Edit', 'magic-elements'); ?></a>
                    <a href="<?php echo esc_url($edit_with_elementor); ?>" class="edit-elementor-link" target="_blank"><?php echo esc_html__('Edit with Elementor', 'magic-elements'); ?></a>
                    <a href="javascript:void(0)" class="delete-link" data-id="<?php echo esc_attr($list['ID']); ?>"><?php echo esc_html__('Delete', 'magic-elements'); ?></a>
                </div>
            </div>
            <div class="preview-item-details">
                <div class="preview-item-condition">
                    <?php echo esc_html__('Status:', 'magic-elements'); ?>
                    <span class="status-<?php echo esc_attr($status); ?>"><?php echo esc_html($status); ?></span>
                </div>

                <div class="preview-item-condition">
                    <?php echo wp_kses(me_get_display_condition_html($list['condition']), ['ul' => [], 'li' => [], 'strong' => [], 'span' => []]); ?>
                </div>
            </div>
        </div>
        <?php 
    } 
} 
?>