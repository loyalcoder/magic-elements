<?php 

  $lists = isset($builder_list['templates']) ? $builder_list['templates'] : [];

?>
<div class="magic-elements-preview-popup">
    <div class="magic-elements-preview-content">
        <div class="magic-elements-preview-header">
            <h2><?php echo esc_html__('Header Templates', 'magic-elements'); ?></h2>
            <div class="add-new-template">
                <a href="#" class="add-new-template-link">
                    <?php echo esc_html__('Add New Template', 'magic-elements'); ?>
                </a>
            </div>
            <button class="magic-elements-close-popup">×</button>
        </div>
        
        <div class="magic-elements-preview-list">
            <!-- Demo Header 1 -->
            <?php if(!empty($lists)){ 
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
                            <a href="javascript:void(0)" class="edit-link" data-id="<?php echo esc_attr($list['ID']); ?>"><?php echo esc_html__('Edit', 'magic-elements'); ?></a>
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
        </div>

        <!-- Pagination -->
        <div class="magic-elements-pagination">
            <a href="#" class="page-numbers prev"><?php echo esc_html__('Previous', 'magic-elements'); ?></a>
            <a href="#" class="page-numbers current">1</a>
            <a href="#" class="page-numbers">2</a>
            <a href="#" class="page-numbers">3</a>
            <span class="page-numbers dots">...</span>
            <a href="#" class="page-numbers">10</a>
            <a href="#" class="page-numbers next"><?php echo esc_html__('Next', 'magic-elements'); ?></a>
        </div>
    </div>
</div>




