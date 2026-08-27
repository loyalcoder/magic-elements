<?php
/**
 * Frontend class for Magic Elements Builder
 *
 * @package MagicElements
 * @subpackage MBuilder
 * @since 1.0.0
 */

declare(strict_types=1);

namespace MagicElements\MBuilder;

use MagicElements\Traits\Builder;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Mbuilder_Frontend {
    use Builder;
    private static $_instance = null;

    /**
     * Get singleton instance
     *
     * @return self
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Initialize hooks and filters
     *
     * @return void
     */
    public function init()
    {
        // Replace header 
        add_action('get_header', [$this, 'replace_header']);
        // replace footer 
        add_action('get_footer', [$this, 'replace_footer']);
        add_action('magic_builder_header_content', [$this,'header_builder_put_content']);
        add_action('magic_builder_footer_content', [$this,'footer_builder_put_content']);
        // Clear cache on builder updates
        add_action('save_post_me_builder', [$this, 'clear_builder_cache']);
        add_action('wp_nav_menu_item_custom_fields', [$this, 'add_mega_menu_nav_fields'], 10, 5);
        add_action('wp_update_nav_menu_item', [$this, 'save_mega_menu_nav_fields'], 10, 3);
        add_filter('wp_setup_nav_menu_item', [$this, 'setup_mega_menu_nav_item']);
        add_filter('walker_nav_menu_start_el', [$this, 'render_mega_menu_content'], 10, 4);
    }

    /**
     * Clear builder cache when post is updated
     *
     * @param int $post_id Post ID
     * @return void
     */
    public function clear_builder_cache($post_id) {
        if (get_post_type($post_id) === 'me_builder') {
            $this->delete_builder_cache();
        }
    }

    /**
     * Replace default header with custom header
     *
     * @return bool|void
     */
    /**
     * Skip theme builder swap while Elementor is editing/previewing templates.
     */
    protected function should_skip_builder_replacement(): bool {
        if (is_singular('me_builder')) {
            return true;
        }

        // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only Elementor preview flag.
        if (isset($_GET['elementor-preview']) || isset($_GET['elementor_library'])) {
            return true;
        }

        if (!class_exists('\Elementor\Plugin')) {
            return false;
        }

        $elementor = \Elementor\Plugin::$instance;

        if (!empty($elementor->editor) && method_exists($elementor->editor, 'is_edit_mode') && $elementor->editor->is_edit_mode()) {
            return true;
        }

        if (!empty($elementor->preview) && method_exists($elementor->preview, 'is_preview_mode') && $elementor->preview->is_preview_mode()) {
            return true;
        }

        return false;
    }

    public function replace_header()
    {
        if ($this->should_skip_builder_replacement()) {
            return false;
        }

        $header_id = $this->get_active_id('header');
        
        if ( ! $header_id ) {
            return false;
        }
        include __DIR__. '/templates/header.php';
        $templates   = [];
        $templates[] = 'header.php';
        remove_all_actions('wp_head');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    public function replace_footer()
    {
        if ($this->should_skip_builder_replacement()) {
            return false;
        }

        $footer_id = $this->get_active_id('footer');
        
        if ($footer_id == '') {
            return false;
        }
        include __DIR__. '/templates/footer.php';
        $templates   = [];
        $templates[] = 'footer.php';
        remove_all_actions('wp_footer');
        ob_start();
        locate_template($templates, true);
        ob_get_clean();
    }
    /**
     * Output header builder content
     *
     * @return bool|void
     */
    public function header_builder_put_content()
    {
        $active_header_id = $this->get_active_id('header');
        if($active_header_id == ''){
            return false;
        }
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_header_id, true);
        }
    }
    public function footer_builder_put_content()
    {
        $active_footer_id = $this->get_active_id('footer');

        if ( ! $active_footer_id ) {
            return false;
        }        
        if (class_exists('\Elementor\Plugin')) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Elementor get_builder_content_for_display() returns safe builder HTML.
            echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($active_footer_id, false);
        }
    }
    /**
     * Get active header/footer ID for current request (respects display conditions).
     *
     * @param string $type 'header' or 'footer'.
     * @return int|false Template post ID or false.
     */
    public function get_active_id($type = 'header'){
        $args = [
            'post_type'      => 'me_builder',
            'post_status'    => 'publish',
            'posts_per_page' => 100,
            'orderby'        => 'modified',
            'order'          => 'DESC',
            'meta_query'     => [
                'relation' => 'AND',
                [
                    'key'     => '_me_builder_type',
                    'value'   => $type,
                    'compare' => '=',
                ],
                [
                    'key'     => '_me_builder_status',
                    'value'   => '1',
                    'compare' => '=',
                ],
            ],
        ];
        $result = $this->get_builder_templates($args);

        if ( empty( $result['templates'] ) || ! is_array( $result['templates'] ) ) {
            return false;
        }

        $current_page = $this->get_current_page();
        $candidates   = [];

        foreach ( $result['templates'] as $template ) {
            $template_id = isset( $template['ID'] ) ? (int) $template['ID'] : 0;
            if ( $template_id <= 0 || empty( $template['condition'] ) || ! is_array( $template['condition'] ) ) {
                continue;
            }

            // Exclude conditions only skip THIS template.
            $is_excluded = false;
            foreach ( $template['condition'] as $condition ) {
                if ( ! is_array( $condition ) ) {
                    continue;
                }
                if ( ( $condition['display_type'] ?? '' ) !== 'exclude' ) {
                    continue;
                }
                if ( $this->condition_matches_current_page( $condition, $current_page ) ) {
                    $is_excluded = true;
                    break;
                }
            }
            if ( $is_excluded ) {
                continue;
            }

            // Include conditions: keep best specificity score for this template.
            $best_score = 0;
            foreach ( $template['condition'] as $condition ) {
                if ( ! is_array( $condition ) ) {
                    continue;
                }
                if ( ( $condition['display_type'] ?? '' ) !== 'include' ) {
                    continue;
                }
                if ( ! $this->condition_matches_current_page( $condition, $current_page ) ) {
                    continue;
                }
                $score = $this->get_condition_specificity_score( $condition );
                if ( $score > $best_score ) {
                    $best_score = $score;
                }
            }

            if ( $best_score > 0 ) {
                $candidates[] = [
                    'id'    => $template_id,
                    'score' => $best_score,
                ];
            }
        }

        if ( empty( $candidates ) ) {
            return false;
        }

        usort(
            $candidates,
            static function ( $a, $b ) {
                if ( $a['score'] === $b['score'] ) {
                    return $b['id'] <=> $a['id'];
                }
                return $b['score'] <=> $a['score'];
            }
        );

        return (int) $candidates[0]['id'];
    }

    /**
     * Whether a saved condition matches the current request.
     *
     * @param array $condition    Saved condition row.
     * @param array $current_page Current page context from get_current_page().
     * @return bool
     */
    protected function condition_matches_current_page( array $condition, array $current_page ): bool {
        $display_on = isset( $condition['display_on'] ) ? (string) $condition['display_on'] : '';

        if ( '' === $display_on ) {
            return false;
        }

        if ( 'entire_website' === $display_on ) {
            return true;
        }

        if ( 'selective_singular' === $display_on ) {
            return $this->matches_selective_singular_condition( $condition, $current_page );
        }

        $page_type = isset( $current_page['type'] ) ? (string) $current_page['type'] : '';
        return '' !== $page_type && $page_type === $display_on;
    }

    /**
     * Match Selective Singular using saved all_posts / post_ids format.
     *
     * @param array $condition    Condition row.
     * @param array $current_page Current page data.
     * @return bool
     */
    protected function matches_selective_singular_condition( array $condition, array $current_page ): bool {
        $post_id   = isset( $current_page['post_id'] ) ? (int) $current_page['post_id'] : 0;
        $post_type = isset( $current_page['post_type'] ) ? (string) $current_page['post_type'] : '';
        $cond_type = isset( $condition['post_type'] ) ? (string) $condition['post_type'] : '';

        if ( $post_id <= 0 ) {
            return false;
        }

        if ( $cond_type && $post_type && $cond_type !== $post_type ) {
            return false;
        }

        // Current saved format from admin form.
        if ( ! empty( $condition['all_posts'] ) ) {
            return true;
        }

        if ( ! empty( $condition['post_ids'] ) && is_array( $condition['post_ids'] ) ) {
            $ids = array_map( 'intval', $condition['post_ids'] );
            return in_array( $post_id, $ids, true );
        }

        // Back-compat with older selective_mode schema.
        $mode = isset( $condition['selective_mode'] ) ? (string) $condition['selective_mode'] : '';
        if ( 'all_posts' === $mode ) {
            return $cond_type && $post_type === $cond_type;
        }
        if ( 'custom' === $mode && ! empty( $condition['post_ids'] ) && is_array( $condition['post_ids'] ) ) {
            $ids = array_map( 'intval', $condition['post_ids'] );
            return in_array( $post_id, $ids, true );
        }
        if ( 'taxonomy' === $mode ) {
            $taxonomy = isset( $condition['taxonomy'] ) ? (string) $condition['taxonomy'] : '';
            $terms    = isset( $condition['taxonomy_terms'] ) && is_array( $condition['taxonomy_terms'] )
                ? array_map( 'intval', $condition['taxonomy_terms'] )
                : [];
            $page_tax = isset( $current_page['taxonomy'] ) ? (string) $current_page['taxonomy'] : '';
            $term_id  = isset( $current_page['term_id'] ) ? (int) $current_page['term_id'] : 0;

            if ( $taxonomy && $taxonomy === $page_tax ) {
                if ( empty( $terms ) ) {
                    return true;
                }
                return $term_id > 0 && in_array( $term_id, $terms, true );
            }

            // Also match singular posts that have the selected terms.
            if ( $taxonomy && ! empty( $current_page['terms'] ) && is_array( $current_page['terms'] ) ) {
                foreach ( $current_page['terms'] as $term_row ) {
                    if ( ( $term_row['taxonomy'] ?? '' ) !== $taxonomy ) {
                        continue;
                    }
                    if ( empty( $terms ) || in_array( (int) ( $term_row['term_id'] ?? 0 ), $terms, true ) ) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    /**
     * Higher score = more specific condition (wins over entire_website).
     *
     * @param array $condition Condition row.
     * @return int
     */
    protected function get_condition_specificity_score( array $condition ): int {
        $display_on = isset( $condition['display_on'] ) ? (string) $condition['display_on'] : '';

        if ( 'selective_singular' === $display_on ) {
            if ( ! empty( $condition['all_posts'] ) || ( isset( $condition['selective_mode'] ) && 'all_posts' === $condition['selective_mode'] ) ) {
                return 50;
            }
            if ( ! empty( $condition['post_ids'] ) || ( isset( $condition['selective_mode'] ) && 'custom' === $condition['selective_mode'] ) ) {
                return 100;
            }
            if ( isset( $condition['selective_mode'] ) && 'taxonomy' === $condition['selective_mode'] ) {
                return 70;
            }
            return 40;
        }

        if ( 'entire_website' === $display_on ) {
            return 10;
        }

        return 30;
    }
    /**
     * Get active mega menu templates list.
     *
     * @return array
     */
    protected function get_active_mega_menu_templates(): array {
        $result = $this->get_builder_templates([
            'post_type'      => 'me_builder',
            'post_status'    => 'publish',
            'posts_per_page' => 100,
            'meta_query'     => [
                'relation' => 'AND',
                [
                    'key'     => '_me_builder_type',
                    'value'   => 'mega_menu',
                    'compare' => '=',
                ],
                [
                    'key'     => '_me_builder_status',
                    'value'   => '1',
                    'compare' => '=',
                ],
            ],
            'orderby'        => 'title',
            'order'          => 'ASC',
        ]);

        return isset($result['templates']) && is_array($result['templates']) ? $result['templates'] : [];
    }

    /**
     * Add Mega Menu selector field for each nav menu item.
     *
     * @param int    $item_id Menu item DB ID.
     * @param object $item    Menu item data.
     * @param int    $depth   Item depth.
     * @param array  $args    Args.
     * @param int    $id      Nav menu ID.
     * @return void
     */
    public function add_mega_menu_nav_fields($item_id, $item, $depth, $args, $id): void {
        if ($depth > 0) {
            return;
        }
        $templates = $this->get_active_mega_menu_templates();
        $selected_template = (int) get_post_meta($item_id, '_me_mega_menu_template_id', true);
        ?>
        <p class="description-wide me-mega-menu-field">
            <?php wp_nonce_field('magic_elements_save_mega_menu', 'magic_elements_mega_menu_nonce'); ?>
            <label for="edit-menu-item-mega-template-<?php echo esc_attr((string) $item_id); ?>">
                <?php echo esc_html__('Mega Menu Template', 'magic-elements'); ?><br>
                <select id="edit-menu-item-mega-template-<?php echo esc_attr((string) $item_id); ?>" class="widefat code edit-menu-item-custom" name="menu-item-mega-template[<?php echo esc_attr((string) $item_id); ?>]">
                    <option value="0"><?php echo esc_html__('Default submenu', 'magic-elements'); ?></option>
                    <?php foreach ($templates as $template) { ?>
                        <option value="<?php echo esc_attr((string) $template['ID']); ?>" <?php selected($selected_template, (int) $template['ID']); ?>>
                            <?php echo esc_html($template['title']); ?>
                        </option>
                    <?php } ?>
                </select>
            </label>
        </p>
        <?php
    }

    /**
     * Save menu item mega menu template field.
     *
     * @param int   $menu_id         Menu ID.
     * @param int   $menu_item_db_id Menu item DB ID.
     * @param array $menu_item_args  Menu item args.
     * @return void
     */
    public function save_mega_menu_nav_fields($menu_id, $menu_item_db_id, $menu_item_args): void {
        if (!current_user_can('edit_theme_options')) {
            return;
        }

        if (empty($_POST['magic_elements_mega_menu_nonce']) || !is_string($_POST['magic_elements_mega_menu_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['magic_elements_mega_menu_nonce'])), 'magic_elements_save_mega_menu')) {
            return;
        }

        $template_id = 0;
        if (isset($_POST['menu-item-mega-template'][$menu_item_db_id]) && is_scalar($_POST['menu-item-mega-template'][$menu_item_db_id])) {
            $template_id = absint(sanitize_text_field(wp_unslash($_POST['menu-item-mega-template'][$menu_item_db_id])));
        }

        $valid_template_ids = array_map(
            static function ($template): int {
                return (int) $template['ID'];
            },
            $this->get_active_mega_menu_templates()
        );

        if ($template_id > 0 && in_array($template_id, $valid_template_ids, true)) {
            update_post_meta($menu_item_db_id, '_me_mega_menu_template_id', $template_id);
            return;
        }

        delete_post_meta($menu_item_db_id, '_me_mega_menu_template_id');
    }

    /**
     * Add mega menu template ID to nav menu item object.
     *
     * @param object $menu_item Menu item object.
     * @return object
     */
    public function setup_mega_menu_nav_item($menu_item) {
        $menu_item->me_mega_menu_template_id = (int) get_post_meta($menu_item->ID, '_me_mega_menu_template_id', true);
        return $menu_item;
    }

    /**
     * Render Mega Menu content after menu item link.
     *
     * @param string   $item_output Item output.
     * @param \WP_Post $item        Menu item.
     * @param int      $depth       Depth.
     * @param array    $args        Menu args.
     * @return string
     */
    public function render_mega_menu_content($item_output, $item, $depth, $args): string {
        if (is_admin() || $depth > 0 || !class_exists('\Elementor\Plugin')) {
            return $item_output;
        }
        $template_id = isset($item->me_mega_menu_template_id) ? (int) $item->me_mega_menu_template_id : 0;
        if ($template_id <= 0) {
            return $item_output;
        }
        $template_type = (string) get_post_meta($template_id, '_me_builder_type', true);
        $template_status = (string) get_post_meta($template_id, '_me_builder_status', true);
        if ($template_type !== 'mega_menu' || $template_status !== '1') {
            return $item_output;
        }
        $mega_content = \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($template_id, true);
        if (empty($mega_content)) {
            return $item_output;
        }

        return $item_output . '<div class="magic-elements-mega-menu-content"><div class="magic-elements-mega-menu-inner">' . $mega_content . '</div></div>';
    }
    protected function get_display_id($template_id, $include_list, $exclude_list, $current_page){

        if (empty($template_id)) {
            return false;
        }
    
        /*
        |------------------------------------------------
        | EXCLUDE CONDITIONS (priority)
        |------------------------------------------------
        */
        // echo '<pre>';
        // print_r($include_list);
        // echo '</pre>';
        // wp_die();
        
        if (!empty($exclude_list)) {
    
            foreach ($exclude_list as $condition) {
    
                if (!isset($condition['display_on'])) {
                    continue;
                }
    
                // match simple page types (front_page, blog_page, etc)
                if ($condition['display_on'] === $current_page['type']) {
                    return '';
                }
    
                // selective singular logic
                if ($condition['display_on'] === 'selective_singular') {
    
                    if ($current_page['post_type'] !== $condition['post_type']) {
                        continue;
                    }
    
                    if ($condition['selective_mode'] === 'all_posts') {
                        return '';
                    }
    
                    if ($condition['selective_mode'] === 'custom') {
    
                        if (!empty($condition['post_ids']) &&
                            in_array($current_page['post_id'], $condition['post_ids'])
                        ) {
                            return '';
                        }
                    }
                }
            }
        }
    
    
        /*
        |------------------------------------------------
        | INCLUDE CONDITIONS
        |------------------------------------------------
        */
    
        if (!empty($include_list)) {
    
            foreach ($include_list as $condition) {
    
                if (!isset($condition['display_on'])) {
                    continue;
                }
    
                // entire website
                if ($condition['display_on'] === 'entire_website') {
                    return $template_id;
                }
    
                // match page type (front_page, blog_page etc)
                if ($condition['display_on'] === $current_page['type']) {
                    return $template_id;
                }
    
                // selective singular
                if ($condition['display_on'] === 'selective_singular') {
    
                    if ($current_page['post_type'] !== $condition['post_type']) {
                        continue;
                    }
    
                    if ($condition['selective_mode'] === 'all_posts') {
                        return $template_id;
                    }
    
                    if ($condition['selective_mode'] === 'custom') {
    
                        if (!empty($condition['post_ids']) &&
                            in_array($current_page['post_id'], $condition['post_ids'])
                        ) {
                            return $template_id;
                        }
                    }
                }
            }
        }
    
        return false;
    }
    /**
     * Get current page type
     *
     * @param object $obj Query object
     * @return string|int|bool
     */
    /**
     * Get current page identifier for condition matching (string or singular post ID).
     *
     * @param object $obj Queried object.
     * @return string|int|false
     */
    public function get_current_page(){

        global $post;
    
        $data = [
            'type'        => '',
            'post_id'     => null,
            'post_type'   => null,
            'taxonomy'    => null,
            'term_id'     => null,
            'term_slug'   => null,
            'archive_pt'  => null,
        ];
    
        // Special contexts
        switch ( true ) {
    
            case is_404():
                $data['type'] = 'four_0_4';
                return $data;
    
            case is_search():
                $data['type'] = 'search_page';
                return $data;
    
            case is_front_page():
                $data['type'] = 'front_page';
                if ( is_singular() ) {
                    $data['post_id']   = (int) get_queried_object_id();
                    $data['post_type'] = get_post_type( $data['post_id'] ) ?: 'page';
                }
                return $data;
    
            case is_home():
                $data['type'] = 'blog_page';
                $posts_page   = (int) get_option( 'page_for_posts' );
                if ( $posts_page > 0 ) {
                    $data['post_id']   = $posts_page;
                    $data['post_type'] = 'page';
                }
                return $data;
    
            case is_category():
                $term              = get_queried_object();
                $data['type']      = 'blog_category_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_tag():
                $term              = get_queried_object();
                $data['type']      = 'blog_tag_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_tax():
                $term              = get_queried_object();
                // For custom taxonomies, treat as generic blog archive.
                $data['type']      = 'blog_archive';
                $data['taxonomy']  = $term->taxonomy ?? null;
                $data['term_id']   = $term->term_id ?? null;
                $data['term_slug'] = $term->slug ?? null;
                return $data;

            case is_author():
                $data['type'] = 'blog_author_archive';
                return $data;
    
            case is_date():
                $data['type'] = 'blog_date_archive';
                return $data;
    
            case is_post_type_archive():
                // Generic blog archive (e.g. CPT archives) unless more specific conditions are added later.
                $data['type']       = 'blog_archive';
                $data['archive_pt'] = get_query_var('post_type');
    
                return $data;
    
            case is_archive():
                $data['type'] = 'blog_archive';
                return $data;
        }
    
        // Singular (post, page, custom post type)
        if ( is_singular() ) {
    
            $data['type']      = 'singular';
            $data['post_id']   = (int) get_queried_object_id();
            if ( $data['post_id'] <= 0 && isset( $post->ID ) ) {
                $data['post_id'] = (int) $post->ID;
            }
            $data['post_type'] = $data['post_id'] ? get_post_type( $data['post_id'] ) : null;
    
            // Get taxonomy terms
            $taxonomies = get_object_taxonomies( $data['post_type'] );
    
            if ( ! empty( $taxonomies ) ) {
    
                foreach ( $taxonomies as $tax ) {
    
                    $terms = get_the_terms( $post->ID, $tax );
    
                    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
    
                        foreach ( $terms as $term ) {
    
                            $data['terms'][] = [
                                'taxonomy' => $tax,
                                'term_id'  => $term->term_id,
                                'slug'     => $term->slug,
                                'name'     => $term->name,
                            ];
                        }
                    }
                }
            }
    
            return $data;
        }
    
        return $data;
    }
}
