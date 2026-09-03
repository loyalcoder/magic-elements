<?php
/**
 * Nav Menu V2 AJAX search and WooCommerce cart fragments.
 *
 * @package MagicElements
 */

declare(strict_types=1);

namespace MagicElements\Frontend;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Handles frontend AJAX for Nav Menu V2.
 */
class Nav_Menu_V2_Ajax
{
    /**
     * Bootstrap hooks.
     */
    public function __construct()
    {
        add_action('wp_ajax_me_nav_v2_search', [$this, 'ajax_search']);
        add_action('wp_ajax_nopriv_me_nav_v2_search', [$this, 'ajax_search']);
        add_filter('woocommerce_add_to_cart_fragments', [$this, 'cart_count_fragment']);
        add_filter('nav_menu_css_class', [$this, 'mega_menu_item_class'], 10, 4);
    }

    /**
     * Add helper class when a menu item has a mega menu template.
     *
     * @param string[] $classes Menu item classes.
     * @param \WP_Post $item    Menu item.
     * @param object   $args    Menu args.
     * @param int      $depth   Depth.
     * @return string[]
     */
    public function mega_menu_item_class($classes, $item, $args, $depth = 0): array
    {
        if ((int) $depth > 0) {
            return $classes;
        }

        $template_id = isset($item->me_mega_menu_template_id)
            ? (int) $item->me_mega_menu_template_id
            : (int) get_post_meta($item->ID, '_me_mega_menu_template_id', true);

        if ($template_id > 0) {
            $classes[] = 'menu-item-has-mega';
            $classes[] = 'menu-item-has-children';
        }

        return $classes;
    }

    /**
     * AJAX live search.
     *
     * @return void
     */
    public function ajax_search(): void
    {
        check_ajax_referer('me_nav_v2_nonce', 'nonce');

        $keyword = isset($_POST['s']) ? sanitize_text_field(wp_unslash($_POST['s'])) : '';
        if (strlen($keyword) < 2) {
            wp_send_json_success(['html' => '', 'count' => 0]);
        }

        $post_types = [];
        if (isset($_POST['post_types']) && is_string($_POST['post_types'])) {
            $raw     = sanitize_text_field(wp_unslash($_POST['post_types']));
            $decoded = json_decode($raw, true);
            $raw     = is_array($decoded) ? $decoded : explode(',', $raw);
            $post_types = array_values(array_filter(array_map('sanitize_key', $raw)));
        }

        if (empty($post_types)) {
            $post_types = ['post', 'page'];
        }

        $public_types = get_post_types(['public' => true], 'names');
        $post_types   = array_values(array_intersect($post_types, array_keys($public_types)));

        if (empty($post_types)) {
            $post_types = ['post'];
        }

        $query = new \WP_Query([
            's'              => $keyword,
            'post_type'      => $post_types,
            'post_status'    => 'publish',
            'posts_per_page' => 8,
            'no_found_rows'  => true,
        ]);

        ob_start();

        if ($query->have_posts()) {
            echo '<ul class="me-nav-v2-search-results-list">';
            while ($query->have_posts()) {
                $query->the_post();
                $ptype = get_post_type_object(get_post_type());
                ?>
                <li class="me-nav-v2-search-result">
                    <a href="<?php echo esc_url(get_permalink()); ?>">
                        <?php if (has_post_thumbnail()) : ?>
                            <span class="me-nav-v2-search-thumb">
                                <?php the_post_thumbnail('thumbnail'); ?>
                            </span>
                        <?php endif; ?>
                        <span class="me-nav-v2-search-meta">
                            <span class="me-nav-v2-search-title"><?php echo esc_html(get_the_title()); ?></span>
                            <?php if ($ptype) : ?>
                                <span class="me-nav-v2-search-type"><?php echo esc_html($ptype->labels->singular_name); ?></span>
                            <?php endif; ?>
                        </span>
                    </a>
                </li>
                <?php
            }
            echo '</ul>';
            wp_reset_postdata();
        } else {
            echo '<p class="me-nav-v2-search-empty">' . esc_html__('No results found.', 'magic-elements') . '</p>';
        }

        $html = ob_get_clean();

        wp_send_json_success([
            'html'  => $html,
            'count' => (int) $query->post_count,
        ]);
    }

    /**
     * Live-update cart count badge via WooCommerce fragments.
     *
     * @param array $fragments Cart fragments.
     * @return array
     */
    public function cart_count_fragment($fragments): array
    {
        if (!function_exists('WC')) {
            return $fragments;
        }

        $woocommerce = \WC();
        if (!$woocommerce || !$woocommerce->cart) {
            return $fragments;
        }

        $count = (int) $woocommerce->cart->get_cart_contents_count();
        $fragments['span.me-nav-v2-cart-count'] = '<span class="me-nav-v2-cart-count"' . ($count < 1 ? ' style="display:none"' : '') . '>' . esc_html((string) $count) . '</span>';

        return $fragments;
    }
}
