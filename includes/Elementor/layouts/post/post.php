<?php
/**
 * Posts layout template.
 *
 * @var array $settings Widget settings from Post widget.
 * @var array $query    Posts data from MagicElements\Traits\Data::get_posts_data().
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Template variables from widget settings/query.

$show_date    = ! empty( $settings['show_post_date'] ) && 'yes' === $settings['show_post_date'];
$show_author  = ! empty( $settings['show_post_author'] ) && 'yes' === $settings['show_post_author'];
$show_excerpt = ! empty( $settings['show_post_excerpt'] ) && 'yes' === $settings['show_post_excerpt'];
$excerpt_len  = ! empty( $settings['post_excerpt_length'] ) ? absint( $settings['post_excerpt_length'] ) : 25;
?>

<?php if (!empty($query) && is_array($query)) : ?>
    <div class="emk-post-wrapper">
        <?php foreach ($query as $post_item) : ?>
            <article class="post-item">
                <?php if (!empty($post_item['thumbnail'])) : ?>
                    <div class="post-thumbnail">
                        <a href="<?php echo esc_url($post_item['permalink']); ?>">
                            <img src="<?php echo esc_url($post_item['thumbnail']); ?>" alt="<?php echo esc_attr($post_item['title']); ?>">
                        </a>
                    </div>
                <?php endif; ?>

                <div class="post-content">
                    <h3 class="post-title">
                        <a href="<?php echo esc_url($post_item['permalink']); ?>">
                            <?php echo esc_html($post_item['title']); ?>
                        </a>
                    </h3>

                    <?php if ($show_date || $show_author) : ?>
                        <div class="post-meta">
                            <?php if ($show_date && !empty($post_item['date'])) : ?>
                                <span class="post-date"><?php echo esc_html($post_item['date']); ?></span>
                            <?php endif; ?>

                            <?php if ($show_author && !empty($post_item['author'])) : ?>
                                <span class="post-author"><?php echo esc_html($post_item['author']); ?></span>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>

                    <?php if ($show_excerpt && !empty($post_item['excerpt'])) : ?>
                        <div class="post-excerpt">
                            <?php echo wp_kses_post(wp_trim_words($post_item['excerpt'], $excerpt_len, '...')); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
<?php else : ?>
    <div class="emk-post-wrapper no-posts-found">
        <p><?php echo esc_html__('No posts found.', 'magic-elements'); ?></p>
    </div>
<?php endif; ?>