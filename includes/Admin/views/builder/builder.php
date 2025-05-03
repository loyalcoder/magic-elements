<div class="builder-container">
    <div class="builder-header">
        <h2><?php echo esc_html__('Header Builder', 'magic-elements'); ?></h2>
    </div>
    <div class="builder-add-new">
        <button class="button button-primary add-new-header" data-type="header"><?php echo esc_html__('Add New Header', 'magic-elements'); ?></button>
    </div>
    <?php 
       $type = 'header';
        include __DIR__.'/builder-list.php'; 
    ?>
</div>

<!-- Add New Header Modal -->
 <?php 
 include __DIR__ . '/add-new-modal.php';