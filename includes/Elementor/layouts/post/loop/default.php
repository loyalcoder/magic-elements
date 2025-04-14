<?php 
if (!defined('ABSPATH')) {
    exit;
}
?>
<div class="emk-post">
    <?php if ($post['thumbnail']) : ?>
        <div class="emk-post-thumbnail">
            <a href="<?php echo esc_url($post['permalink']); ?>">
                <?php echo wp_kses_post($post['thumbnail']); ?>
            </a>
        </div>
    <?php endif; ?>
    <h2><a href="<?php echo esc_url($post['permalink']); ?>"><?php echo esc_html($post['title']); ?></a></h2>

</div>
