<?php
/**
 * Nav Menu V2 layout.
 *
 * @var array $settings Widget settings.
 * @package MagicElements
 */

if (!defined('ABSPATH')) {
    exit;
}

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- Layout template variables from widget include scope.

$widget_id          = $this->get_id();
$menu_layout        = !empty($settings['menu_layout']) ? $settings['menu_layout'] : 'default';
$show_logo          = isset($settings['show_logo']) && 'yes' === $settings['show_logo'];
$show_search        = isset($settings['show_search']) && 'yes' === $settings['show_search'];
$show_cart          = isset($settings['show_cart']) && 'yes' === $settings['show_cart'] && class_exists('WooCommerce') && function_exists('WC');
$show_offcanvas     = isset($settings['show_offcanvas']) && 'yes' === $settings['show_offcanvas'];
$enable_mega        = isset($settings['enable_mega_menu']) && 'yes' === $settings['enable_mega_menu'];
$enable_sticky      = isset($settings['enable_sticky']) && 'yes' === $settings['enable_sticky'];
$mobile_icon_pos    = !empty($settings['mobile_icon_position']) ? $settings['mobile_icon_position'] : 'right';
$offcanvas_pos      = !empty($settings['offcanvas_position']) ? $settings['offcanvas_position'] : 'right';
$offcanvas_content  = !empty($settings['offcanvas_content']) ? $settings['offcanvas_content'] : 'menu';
$offcanvas_template = !empty($settings['offcanvas_template']) ? (int) $settings['offcanvas_template'] : 0;
$mega_width         = !empty($settings['mega_width']) ? $settings['mega_width'] : 'container';
$breakpoint         = !empty($settings['mobile_breakpoint']) ? (int) $settings['mobile_breakpoint'] : 1024;
$search_post_types  = !empty($settings['search_post_types']) && is_array($settings['search_post_types'])
    ? $settings['search_post_types']
    : ['post', 'page'];

$logo_url = home_url('/');
if (!empty($settings['logo_link']['url'])) {
    $logo_url = $settings['logo_link']['url'];
}

$offcanvas_id = 'me-nav-v2-offcanvas-' . $widget_id;

$header_classes = [
    'me-nav-v2',
    'me-nav-v2--' . sanitize_html_class($menu_layout),
    'me-nav-v2--mobile-icon-' . sanitize_html_class($mobile_icon_pos),
];

if ($enable_sticky) {
    $header_classes[] = 'is-sticky-enabled';
}
if ($enable_mega) {
    $header_classes[] = 'me-nav-v2--mega';
    $header_classes[] = 'me-nav-v2--mega-' . sanitize_html_class($mega_width);
}

$menu_args = [
    'container'   => false,
    'menu_class'  => 'me-nav-v2__menu',
    'fallback_cb' => false,
    'echo'        => true,
];

$dropdown_icon_html = $this->get_dropdown_icon_html($settings);

/**
 * Append dropdown/mega icon to parent menu item titles.
 *
 * @param string   $title Item title.
 * @param \WP_Post $item  Menu item.
 * @param object   $args  Menu args.
 * @param int      $depth Depth.
 * @return string
 */
$dropdown_title_filter = static function ($title, $item, $args, $depth) use ($dropdown_icon_html) {
    if ('' === $dropdown_icon_html || !is_object($item)) {
        return $title;
    }

    $classes = is_array($item->classes) ? $item->classes : [];
    $is_parent = in_array('menu-item-has-children', $classes, true)
        || in_array('menu-item-has-mega', $classes, true);

    if (!$is_parent) {
        $template_id = isset($item->me_mega_menu_template_id)
            ? (int) $item->me_mega_menu_template_id
            : (int) get_post_meta($item->ID, '_me_mega_menu_template_id', true);
        $is_parent = $template_id > 0 && (int) $depth === 0;
    }

    if (!$is_parent) {
        return $title;
    }

    return $title . $dropdown_icon_html;
};

/**
 * Render a nav menu by ID or slug.
 *
 * @param string|int $menu Menu ID or slug.
 * @param array      $args Menu args.
 * @return void
 */
$render_menu = static function ($menu, $args) use ($dropdown_title_filter) {
    if ($menu === '' || $menu === null) {
        return;
    }

    // Accept menu ID or slug.
    if (is_numeric($menu)) {
        $args['menu'] = (int) $menu;
    } else {
        $term = get_term_by('slug', $menu, 'nav_menu');
        if (!$term || is_wp_error($term)) {
            $term = get_term_by('name', $menu, 'nav_menu');
        }
        if ($term && !is_wp_error($term)) {
            $args['menu'] = (int) $term->term_id;
        } else {
            $args['menu'] = $menu;
        }
    }

    add_filter('nav_menu_item_title', $dropdown_title_filter, 20, 4);
    wp_nav_menu($args);
    remove_filter('nav_menu_item_title', $dropdown_title_filter, 20);
};

$cart_count = 0;
$cart_url   = '';
if ($show_cart) {
    $cart_url   = function_exists('wc_get_cart_url') ? wc_get_cart_url() : home_url('/');
    $cart_count = (WC()->cart) ? (int) WC()->cart->get_cart_contents_count() : 0;
}
?>
<style>
    @media screen and (max-width: <?php echo esc_attr((string) $breakpoint); ?>px) {
        .elementor-element-<?php echo esc_attr($widget_id); ?> .me-nav-v2__desktop-nav {
            display: none !important;
        }
        .elementor-element-<?php echo esc_attr($widget_id); ?> .me-nav-v2__mobile-toggle {
            display: inline-flex !important;
        }
        .elementor-element-<?php echo esc_attr($widget_id); ?> .me-nav-v2__desktop-offcanvas-toggle {
            display: none !important;
        }
    }
    @media screen and (min-width: <?php echo esc_attr((string) ($breakpoint + 1)); ?>px) {
        .elementor-element-<?php echo esc_attr($widget_id); ?> .me-nav-v2__mobile-toggle {
            display: none !important;
        }
    }
</style>

<header
    class="<?php echo esc_attr(implode(' ', $header_classes)); ?>"
    data-widget-id="<?php echo esc_attr($widget_id); ?>"
    data-sticky="<?php echo $enable_sticky ? 'yes' : 'no'; ?>"
>
    <div class="me-nav-v2__inner">
        <?php if ('left' === $mobile_icon_pos) : ?>
            <button
                type="button"
                class="me-nav-v2__action me-nav-v2__mobile-toggle"
                data-me-offcanvas-open="#<?php echo esc_attr($offcanvas_id); ?>"
                aria-label="<?php echo esc_attr__('Open menu', 'magic-elements'); ?>"
            >
                <?php \Elementor\Icons_Manager::render_icon($settings['offcanvas_icon'], ['aria-hidden' => 'true']); ?>
            </button>
        <?php endif; ?>

        <?php if ('center' === $menu_layout) : ?>
            <div class="me-nav-v2__side me-nav-v2__side--left">
                <nav class="me-nav-v2__nav me-nav-v2__nav--left me-nav-v2__desktop-nav" aria-label="<?php echo esc_attr__('Left menu', 'magic-elements'); ?>">
                    <?php $render_menu(!empty($settings['menu_select_left']) ? $settings['menu_select_left'] : '', $menu_args); ?>
                </nav>
            </div>

            <?php if ($show_logo && !empty($settings['logo']['url'])) : ?>
                <a class="me-nav-v2__logo" href="<?php echo esc_url($logo_url); ?>" <?php echo !empty($settings['logo_link']['is_external']) ? 'target="_blank"' : ''; ?> <?php echo !empty($settings['logo_link']['nofollow']) ? 'rel="nofollow"' : ''; ?>>
                    <img src="<?php echo esc_url($settings['logo']['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                </a>
            <?php else : ?>
                <span class="me-nav-v2__logo me-nav-v2__logo--spacer" aria-hidden="true"></span>
            <?php endif; ?>

            <div class="me-nav-v2__side me-nav-v2__side--right">
                <nav class="me-nav-v2__nav me-nav-v2__nav--right me-nav-v2__desktop-nav" aria-label="<?php echo esc_attr__('Right menu', 'magic-elements'); ?>">
                    <?php $render_menu(!empty($settings['menu_select_right']) ? $settings['menu_select_right'] : '', $menu_args); ?>
                </nav>
            </div>
        <?php else : ?>
            <?php if ($show_logo && !empty($settings['logo']['url'])) : ?>
                <a class="me-nav-v2__logo" href="<?php echo esc_url($logo_url); ?>" <?php echo !empty($settings['logo_link']['is_external']) ? 'target="_blank"' : ''; ?> <?php echo !empty($settings['logo_link']['nofollow']) ? 'rel="nofollow"' : ''; ?>>
                    <img src="<?php echo esc_url($settings['logo']['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                </a>
            <?php endif; ?>

            <nav class="me-nav-v2__nav me-nav-v2__nav--main me-nav-v2__desktop-nav" aria-label="<?php echo esc_attr__('Primary menu', 'magic-elements'); ?>">
                <?php $render_menu(!empty($settings['menu_select']) ? $settings['menu_select'] : '', $menu_args); ?>
            </nav>
        <?php endif; ?>

        <div class="me-nav-v2__actions">
            <?php if ($show_search) : ?>
                <button
                    type="button"
                    class="me-nav-v2__action me-nav-v2__search-toggle"
                    aria-expanded="false"
                    aria-controls="me-nav-v2-search-<?php echo esc_attr($widget_id); ?>"
                    aria-label="<?php echo esc_attr__('Toggle search', 'magic-elements'); ?>"
                >
                    <?php \Elementor\Icons_Manager::render_icon($settings['search_icon'], ['aria-hidden' => 'true']); ?>
                </button>
            <?php endif; ?>

            <?php if ($show_cart) : ?>
                <a
                    class="me-nav-v2__action me-nav-v2__cart"
                    href="<?php echo esc_url($cart_url); ?>"
                    aria-label="<?php echo esc_attr__('View cart', 'magic-elements'); ?>"
                >
                    <?php \Elementor\Icons_Manager::render_icon($settings['cart_icon'], ['aria-hidden' => 'true']); ?>
                    <?php if (isset($settings['show_cart_count']) && 'yes' === $settings['show_cart_count']) : ?>
                        <span class="me-nav-v2-cart-count"<?php echo $cart_count < 1 ? ' style="display:none"' : ''; ?>>
                            <?php echo esc_html((string) $cart_count); ?>
                        </span>
                    <?php endif; ?>
                </a>
            <?php endif; ?>

            <?php if ($show_offcanvas) : ?>
                <button
                    type="button"
                    class="me-nav-v2__action me-nav-v2__desktop-offcanvas-toggle"
                    data-me-offcanvas-open="#<?php echo esc_attr($offcanvas_id); ?>"
                    aria-label="<?php echo esc_attr__('Open off canvas', 'magic-elements'); ?>"
                >
                    <?php \Elementor\Icons_Manager::render_icon($settings['offcanvas_icon'], ['aria-hidden' => 'true']); ?>
                </button>
            <?php endif; ?>

            <?php if ('right' === $mobile_icon_pos) : ?>
                <button
                    type="button"
                    class="me-nav-v2__action me-nav-v2__mobile-toggle"
                    data-me-offcanvas-open="#<?php echo esc_attr($offcanvas_id); ?>"
                    aria-label="<?php echo esc_attr__('Open menu', 'magic-elements'); ?>"
                >
                    <?php \Elementor\Icons_Manager::render_icon($settings['offcanvas_icon'], ['aria-hidden' => 'true']); ?>
                </button>
            <?php endif; ?>
        </div>
    </div>

    <?php if ($show_search) : ?>
        <div
            id="me-nav-v2-search-<?php echo esc_attr($widget_id); ?>"
            class="me-nav-v2__search-panel"
            hidden
            data-post-types="<?php echo esc_attr(wp_json_encode(array_values($search_post_types))); ?>"
        >
            <form class="me-nav-v2__search-form" action="<?php echo esc_url(home_url('/')); ?>" method="get" role="search">
                <input
                    type="search"
                    name="s"
                    class="me-nav-v2__search-input"
                    placeholder="<?php echo esc_attr(!empty($settings['search_placeholder']) ? $settings['search_placeholder'] : esc_html__('Search…', 'magic-elements')); ?>"
                    autocomplete="off"
                    value="<?php echo esc_attr(get_search_query()); ?>"
                />
                <?php foreach ($search_post_types as $ptype) : ?>
                    <input type="hidden" name="post_type[]" value="<?php echo esc_attr($ptype); ?>" />
                <?php endforeach; ?>
                <button type="button" class="me-nav-v2__search-close" aria-label="<?php echo esc_attr__('Close search', 'magic-elements'); ?>">
                    &times;
                </button>
            </form>
            <div class="me-nav-v2__search-results" aria-live="polite"></div>
        </div>
    <?php endif; ?>
</header>

<?php
// Portal is moved to document.body in JS so Elementor overflow/stacking cannot clip it.
$offcanvas_template_html = '';
if ('template' === $offcanvas_content && $offcanvas_template > 0 && class_exists('\Elementor\Plugin')) {
    $offcanvas_template_html = \Elementor\Plugin::instance()->frontend->get_builder_content_for_display($offcanvas_template, true);
}

ob_start();
$oc_args = [
    'container'   => false,
    'menu_class'  => 'me-nav-v2__menu me-nav-v2__menu--offcanvas',
    'fallback_cb' => false,
    'echo'        => true,
];
$offcanvas_menu = !empty($settings['offcanvas_menu']) ? $settings['offcanvas_menu'] : '';
$render_menu($offcanvas_menu, $oc_args);
$offcanvas_menu_html = trim((string) ob_get_clean());
?>
<div
    class="me-nav-v2-portal elementor-element-<?php echo esc_attr($widget_id); ?>"
    data-me-nav-v2-portal="<?php echo esc_attr($widget_id); ?>"
>
    <div class="me-nav-v2__overlay" data-me-offcanvas-close hidden></div>

    <aside
        id="<?php echo esc_attr($offcanvas_id); ?>"
        class="me-nav-v2__offcanvas me-nav-v2__offcanvas--<?php echo esc_attr($offcanvas_pos); ?>"
        aria-hidden="true"
        role="dialog"
        aria-modal="true"
        aria-label="<?php echo esc_attr__('Off canvas menu', 'magic-elements'); ?>"
    >
        <div class="me-nav-v2__offcanvas-header">
            <?php if (!empty($settings['offcanvas_logo']['url'])) : ?>
                <a class="me-nav-v2__offcanvas-logo" href="<?php echo esc_url(home_url('/')); ?>">
                    <img src="<?php echo esc_url($settings['offcanvas_logo']['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
                </a>
            <?php endif; ?>
            <button
                type="button"
                class="me-nav-v2__offcanvas-close"
                data-me-offcanvas-close
                aria-label="<?php echo esc_attr__('Close', 'magic-elements'); ?>"
            >
                <?php \Elementor\Icons_Manager::render_icon($settings['offcanvas_close_icon'], ['aria-hidden' => 'true']); ?>
            </button>
        </div>
        <div class="me-nav-v2__offcanvas-body">
            <?php if ('template' === $offcanvas_content) : ?>
                <div class="me-nav-v2__offcanvas-template">
                    <?php if ($offcanvas_template < 1) : ?>
                        <p class="me-nav-v2__offcanvas-empty">
                            <?php echo esc_html__('Please select an Off Canvas template in the widget settings.', 'magic-elements'); ?>
                        </p>
                    <?php elseif ('' === trim((string) $offcanvas_template_html)) : ?>
                        <p class="me-nav-v2__offcanvas-empty">
                            <?php echo esc_html__('This template has no Elementor content yet. Edit it with Elementor and add widgets.', 'magic-elements'); ?>
                        </p>
                    <?php else : ?>
                        <?php echo $offcanvas_template_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    <?php endif; ?>
                </div>
            <?php else : ?>
                <nav class="me-nav-v2__offcanvas-menu" aria-label="<?php echo esc_attr__('Mobile menu', 'magic-elements'); ?>">
                    <?php if ('' === $offcanvas_menu_html) : ?>
                        <p class="me-nav-v2__offcanvas-empty">
                            <?php echo esc_html__('No menu selected. Choose a menu under Off Canvas → Select Off Canvas Menu.', 'magic-elements'); ?>
                        </p>
                    <?php else : ?>
                        <?php echo $offcanvas_menu_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    <?php endif; ?>
                </nav>
            <?php endif; ?>
        </div>
    </aside>
</div>
