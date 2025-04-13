<?php
/**
 * Magic Elements Data Trait
 *
 * @package    Magic Elements
 * @subpackage Magic Elements/includes/trait
 * @author     LoyalCoder <support@loyalcoder.com>
 * @license    GPL-2.0+ http://www.gnu.org/licenses/gpl-2.0.txt
 * @link       https://magickit.loyalcoder.com/
 * @since      1.0.0
 */

namespace MagicElements\Traits;

trait Data {
    /**
     * Get posts data with caching support
     *
     * @param array $args Query arguments
     * @param int $cache_time Cache time in seconds
     * @return array
     */
    public function get_posts_data(array $args = [], int $cache_time = 3600): array {
        $default_args = [
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC'
        ];

        $args = wp_parse_args($args, $default_args);
        $cache_key = 'magic_elements_posts_' . md5(serialize($args));

        // Try to get cached data
        $cached_data = get_transient($cache_key);
        if (false !== $cached_data) {
            return $cached_data;
        }

        // Get posts
        $query = new \WP_Query($args);
        $posts = [];

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $posts[] = [
                    'ID' => get_the_ID(),
                    'title' => get_the_title(),
                    'excerpt' => get_the_excerpt(),
                    'content' => get_the_content(),
                    'permalink' => get_permalink(),
                    'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                    'date' => get_the_date(),
                    'author' => get_the_author(),
                    'post_type' => get_post_type(),
                    'meta' => get_post_meta(get_the_ID())
                ];
            }
        }

        wp_reset_postdata();

        // Cache the results
        if ($cache_time > 0) {
            set_transient($cache_key, $posts, $cache_time);
        }

        return $posts;
    }

    /**
     * Clear posts data cache
     *
     * @param array $args Query arguments to clear specific cache
     * @return bool
     */
    public function clear_posts_cache(array $args = []): bool {
        if (empty($args)) {
            // Clear all magic elements posts cache
            global $wpdb;
            $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s",
                    $wpdb->esc_like('_transient_magic_elements_posts_') . '%'
                )
            );
            return true;
        }

        // Clear specific cache
        $cache_key = 'magic_elements_posts_' . md5(serialize($args));
        return delete_transient($cache_key);
    }

    /**
     * Get WooCommerce products data with caching support
     *
     * @param array $args Query arguments
     * @param int $cache_time Cache time in seconds
     * @return array
     */
    public function get_products_data(array $args = [], int $cache_time = 3600): array {
        if (!class_exists('WooCommerce')) {
            return [];
        }

        $default_args = [
            'post_type' => 'product',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC'
        ];

        $args = wp_parse_args($args, $default_args);
        $cache_key = 'magic_elements_products_' . md5(serialize($args));

        // Try to get cached data
        $cached_data = get_transient($cache_key);
        if (false !== $cached_data) {
            return $cached_data;
        }

        // Get products
        $query = new \WP_Query($args);
        $products = [];

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $product = wc_get_product(get_the_ID());
                
                if (!$product) {
                    continue;
                }

                $products[] = [
                    'ID' => $product->get_id(),
                    'title' => $product->get_name(),
                    'price' => $product->get_price(),
                    'regular_price' => $product->get_regular_price(),
                    'sale_price' => $product->get_sale_price(),
                    'permalink' => $product->get_permalink(),
                    'thumbnail' => wp_get_attachment_image_url($product->get_image_id(), 'full'),
                    'gallery' => array_map(function($id) {
                        return wp_get_attachment_image_url($id, 'full');
                    }, $product->get_gallery_image_ids()),
                    'stock_status' => $product->get_stock_status(),
                    'rating' => $product->get_average_rating(),
                    'review_count' => $product->get_review_count(),
                    'categories' => wp_get_post_terms($product->get_id(), 'product_cat', ['fields' => 'names']),
                    'tags' => wp_get_post_terms($product->get_id(), 'product_tag', ['fields' => 'names']),
                    'attributes' => $product->get_attributes(),
                    'meta' => get_post_meta($product->get_id())
                ];
            }
        }

        wp_reset_postdata();

        // Cache the results
        if ($cache_time > 0) {
            set_transient($cache_key, $products, $cache_time);
        }

        return $products;
    }

    /**
     * Clear WooCommerce products data cache
     *
     * @param array $args Query arguments to clear specific cache
     * @return bool
     */
    public function clear_products_cache(array $args = []): bool {
        if (empty($args)) {
            // Clear all magic elements products cache
            global $wpdb;
            $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s",
                    $wpdb->esc_like('_transient_magic_elements_products_') . '%'
                )
            );
            return true;
        }

        // Clear specific cache
        $cache_key = 'magic_elements_products_' . md5(serialize($args));
        return delete_transient($cache_key);
    }
}
