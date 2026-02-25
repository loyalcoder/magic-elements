<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- View variables from parent scope.
if(!empty($lists)){ 
                 foreach($lists as $list){
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
                            <a href="javascript:void(0)" class="edit-link" data-id="<?php echo esc_attr($list['ID']); ?>"><?php echo esc_html__('Edit Condition', 'magic-elements'); ?></a>
                            <a href="<?php echo esc_url($edit_with_elementor); ?>" class="edit-elementor-link" target="_blank"><?php echo esc_html__('Edit with Elementor', 'magic-elements'); ?></a>
                            <a href="javascript:void(0)" class="delete-link" data-id="<?php echo esc_attr($list['ID']); ?>"><?php echo esc_html__('Delete', 'magic-elements'); ?></a>
                        </div>
                    </div>
                    <div class="preview-item-details">
                        <div class="preview-item-condition">
                            <strong><?php echo esc_html__('Display Condition:', 'magic-elements'); ?></strong>
                            <span><?php echo esc_html__('All Pages', 'magic-elements'); ?></span>
                        </div>
                        <div class="preview-item-display">
                            <strong><?php echo esc_html__('Display On:', 'magic-elements'); ?></strong>
                            <span><?php echo esc_html__('Desktop & Mobile', 'magic-elements'); ?></span>
                        </div>
                    </div>
                </div>
                <?php } ?>
            <?php } ?>