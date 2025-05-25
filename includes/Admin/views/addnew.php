<div class="magic-elements-addnew-popup hidden">
    <div class="magic-elements-addnew-content">
        <div class="magic-elements-addnew-header">
            <h2><?php echo esc_html__('Add New Template', 'magic-elements'); ?></h2>
            <button class="magic-elements-close-popup">×</button>
        </div>
        
        <form method="post" action="" id="me-add-template-form">
            <?php wp_nonce_field('me_add_template_nonce', 'me_template_nonce'); ?>
            
            <div class="magic-elements-form-group">
                <label for="template_title"><?php echo esc_html__('Template Title', 'magic-elements'); ?></label>
                <input type="text" 
                       name="template_title" 
                       id="template_title" 
                       class="regular-text" 
                       required>
            </div>
            
            <div class="magic-elements-form-group">
                <label for="template_type"><?php echo esc_html__('Template Type', 'magic-elements'); ?></label>
                <select name="template_type" id="template_type" required>
                    <option value=""><?php echo esc_html__('Select Type', 'magic-elements'); ?></option>
                    <option value="header"><?php echo esc_html__('Header', 'magic-elements'); ?></option>
                    <option value="footer"><?php echo esc_html__('Footer', 'magic-elements'); ?></option>
                </select>
            </div>

            <div class="magic-elements-form-group">
                <label for="template_condition"><?php echo esc_html__('Display Condition', 'magic-elements'); ?></label>
                <select name="template_condition" id="template_condition">
                    <option value="all"><?php echo esc_html__('Entire Site', 'magic-elements'); ?></option>
                    <option value="home"><?php echo esc_html__('Home Page', 'magic-elements'); ?></option>
                    <option value="archive"><?php echo esc_html__('Archive Pages', 'magic-elements'); ?></option>
                    <option value="single"><?php echo esc_html__('Single Posts', 'magic-elements'); ?></option>
                    <option value="page"><?php echo esc_html__('Pages', 'magic-elements'); ?></option>
                </select>
            </div>

            <div class="magic-elements-form-actions">
                <button type="submit" class="button button-primary" id="me-submit-template">
                    <?php echo esc_html__('Create Template', 'magic-elements'); ?>
                </button>
            </div>
        </form>
    </div>
</div>
