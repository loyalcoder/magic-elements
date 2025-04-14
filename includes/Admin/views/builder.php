<div class="wrap magic-builder-wrap">
    <h1><?php echo esc_html__('Magic Builder', 'magic-elements'); ?></h1>
    <?php 
     $builder_posts = get_posts([
        'post_type' => 'magic_builder',
        'posts_per_page' => -1,
     ]);
     echo '<pre>';
     print_r(get_post_meta(2123, '_display_type', true));
     print_r(get_post_meta(2122, '_display_type', true));
     echo '</pre>';
     
    echo '<pre>';
    print_r($builder_posts);
    echo '</pre>';
    // $post_id = wp_insert_post([
    //     'post_type' => 'magic_builder',
    //     'post_title' => 'Header header',
    //     'post_content' => 'Header se',
    //     'post_status' => 'publish',
    // ]);

    // if ($post_id) {
    //     update_post_meta($post_id, '_is_active', 'yes');
    //     update_post_meta($post_id, '_display_type', 'header');
    //     update_post_meta($post_id, '_display_on', 'all');
    // }
    
    ?>
    
    <div class="magic-builder-container">
        <!-- Template List -->
        <div class="template-list">
            <div class="widget-row" data-template="header">
                <svg class="template-icon" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
                    <path d="M4 4h16v2H4V4z"/>
                </svg>
                <span><?php echo esc_html__('Header', 'magic-elements'); ?></span>
            </div>
            
            <div class="widget-row" data-template="footer">
                <svg class="template-icon" viewBox="0 0 24 24">
                    <path d="M4 4h16v2H4V4z"/>
                    <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"/>
                </svg>
                <span><?php echo esc_html__('Footer', 'magic-elements'); ?></span>
            </div>
            
            <div class="widget-row" data-template="single-post">
                <svg class="template-icon" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    <path d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
                </svg>
                <span><?php echo esc_html__('Single Post', 'magic-elements'); ?></span>
            </div>
            
            <div class="widget-row" data-template="post-archive">
                <svg class="template-icon" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
                    <path d="M4 4h16v2H4V4z"/>
                </svg>
                <span><?php echo esc_html__('Post Archive', 'magic-elements'); ?></span>
            </div>
        </div>

        <!-- Template Preview Modal -->
        <div id="template-preview-modal" class="template-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-body">
                    htis is 
                </div>
            </div>
        </div>
    </div>
</div>
