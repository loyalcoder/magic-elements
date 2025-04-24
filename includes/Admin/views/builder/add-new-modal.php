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
            <div class="preloader"></div>
            <div class="form-group">
                <div class="condition-loader"></div>
            </div>
            
            <div class="condition-container-dep-3">
            </div>
            <div class="form-group">
               <button class="button button-primary" type="button" id="add-condition"><?php echo esc_html__('Add Condition', 'magic-elements'); ?></button>
            </div>
            <div class="form-actions">
                <input type="hidden" name="_display_type" value="header">                
                <button type="submit" class="button button-primary"><?php echo esc_html__('Create Content', 'magic-elements'); ?></button>
                <button type="button" class="button close-modal"><?php echo esc_html__('Cancel', 'magic-elements'); ?></button>
            </div>
        </form>
    </div>
</div>