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
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
            <!-- White background -->
                <rect width="100%" height="100%" fill="white"/>
            <!-- Spinner -->
                <g fill="none" fill-rule="evenodd" stroke="#2563EB" stroke-width="4">
                    <circle cx="22" cy="22" r="16" stroke-opacity="0.3"/>
                    <path d="M22 6 A16 16 0 0 1 38 22">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 22 22"
                        to="360 22 22"
                        dur="1s"
                        repeatCount="indefinite"/>
                    </path>
                </g>
            </svg>
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




