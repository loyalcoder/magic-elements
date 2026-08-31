# AGENTS.md

# Magic Elements — WordPress & WooCommerce Development Guidelines

This document defines the coding standards, architecture rules, security practices, and development workflow for the **Magic Elements** WordPress plugin.

The plugin must follow WordPress, WooCommerce, PHP, JavaScript, and frontend best practices while maintaining compatibility, security, performance, and extensibility.

---

## 1. Project Overview

**Plugin Name:** Magic Elements

Magic Elements is a WordPress plugin that integrates with WordPress and may provide WooCommerce and frontend functionality.

All development must prioritize:

* WordPress compatibility
* WooCommerce compatibility
* Security
* Performance
* Maintainability
* Backward compatibility
* Extensibility
* Clean UX
* Accessibility
* Proper internationalization

---

# 2. General Development Rules

## 2.1 Inspect Before Changing

Before modifying code:

1. Inspect the existing project structure.
2. Search for existing implementations.
3. Identify related classes, functions, hooks, filters, templates, and assets.
4. Check how the feature is currently implemented.
5. Reuse existing utilities and abstractions where possible.
6. Make the smallest change necessary.

Do not rewrite existing working functionality without a clear reason.

## 2.2 Preserve Existing Behavior

Unless explicitly requested:

* Do not change public APIs.
* Do not rename existing hooks.
* Do not remove existing actions or filters.
* Do not change database structures.
* Do not change existing URLs.
* Do not change unrelated frontend behavior.
* Do not remove backwards compatibility.
* Do not change existing settings behavior.

If a breaking change is necessary, document it clearly.

## 2.3 Follow Existing Architecture

Existing project conventions take priority.

Before introducing new patterns, inspect:

* Directory structure
* Namespaces
* Autoloading
* Class architecture
* Naming conventions
* JavaScript architecture
* CSS architecture
* Build tools
* Testing setup
* Translation setup

---

# 3. PHP Standards

## 3.1 WordPress Coding Standards

Follow WordPress PHP Coding Standards.

Use:

* 4-space indentation where consistent with WordPress standards
* Descriptive variable names
* WordPress naming conventions
* Proper spacing
* Yoda conditions where appropriate
* Proper escaping
* Proper sanitization
* Proper validation
* WordPress internationalization functions

Example:

```php
if ( $is_available ) {
    // ...
}
```

## 3.2 Naming

Use descriptive names.

Good:

```php
$booking_start_date;
$customer_id;
$product_id;
$element_settings;
```

Avoid:

```php
$x;
$data1;
$tmp;
```

Functions:

```php
function magic_elements_get_settings() {}
```

Classes:

```php
class Magic_Elements_Manager {}
```

Methods:

```php
public function render_element() {}
```

Always follow the existing Magic Elements prefix or namespace.

Never create generic global functions.

---

# 4. Namespaces and Classes

Use namespaces if the project already uses them.

Example:

```php
namespace MagicElements;

class Manager {

    public function init() {
        // ...
    }
}
```

Keep classes focused.

Prefer small, single-purpose classes such as:

```text
Magic_Elements_Manager
Magic_Elements_Admin
Magic_Elements_Frontend
Magic_Elements_Element
Magic_Elements_Assets
Magic_Elements_Ajax
Magic_Elements_REST
Magic_Elements_WooCommerce
```

Avoid creating a single massive class containing unrelated functionality.

---

# 5. WordPress Hooks

Use WordPress hooks instead of modifying core behavior directly.

Example:

```php
add_action( 'init', 'magic_elements_init' );

add_filter(
    'woocommerce_product_get_price',
    'magic_elements_product_price'
);
```

Never modify WordPress or WooCommerce core files.

Do not edit:

```text
wp-admin/
wp-includes/
woocommerce/
```

directly.

## 5.1 Hook Priority

Use the default priority unless there is a specific reason to change it.

If a custom priority is required, document why.

---

# 6. Security

Security is mandatory for all Magic Elements code.

## 6.1 Never Trust Input

Never trust:

* `$_GET`
* `$_POST`
* `$_REQUEST`
* `$_COOKIE`
* AJAX requests
* REST API requests
* URL parameters
* User metadata
* Product metadata
* WooCommerce checkout data

Sanitize and validate all external input.

Example:

```php
$name = isset( $_POST['name'] )
    ? sanitize_text_field( wp_unslash( $_POST['name'] ) )
    : '';
```

## 6.2 Output Escaping

Escape according to context.

HTML:

```php
echo esc_html( $name );
```

Attribute:

```php
echo esc_attr( $value );
```

URL:

```php
echo esc_url( $url );
```

Allowed HTML:

```php
echo wp_kses_post( $content );
```

Do not escape data too early.

Escape it when outputting it.

---

# 7. Nonces

All state-changing AJAX requests and custom forms must use nonces.

Create:

```php
wp_create_nonce( 'magic_elements_action' );
```

Verify:

```php
check_ajax_referer(
    'magic_elements_action',
    'nonce'
);
```

A nonce does not replace authorization.

Always perform capability checks where required.

---

# 8. Capability Checks

Privileged operations must check user capabilities.

Example:

```php
if ( ! current_user_can( 'manage_options' ) ) {
    wp_die(
        esc_html__(
            'Permission denied.',
            'magic-elements'
        )
    );
}
```

WooCommerce-related administrative operations should use the appropriate WooCommerce capability.

Never rely on hiding UI elements for security.

---

# 9. Database

Prefer WordPress APIs instead of direct SQL.

Use:

```php
get_option();
update_option();

get_post_meta();
update_post_meta();

get_user_meta();
update_user_meta();

get_term_meta();
update_term_meta();
```

When direct SQL is necessary, always use `$wpdb->prepare()`.

Example:

```php
$query = $wpdb->prepare(
    "SELECT * FROM {$wpdb->prefix}magic_elements_data WHERE id = %d",
    $id
);

$results = $wpdb->get_results( $query );
```

Never concatenate user input directly into SQL.

Bad:

```php
$sql = "SELECT * FROM table WHERE id = " . $_GET['id'];
```

Good:

```php
$sql = $wpdb->prepare(
    "SELECT * FROM table WHERE id = %d",
    $id
);
```

---

# 10. WooCommerce

When WooCommerce functionality is involved, use WooCommerce APIs.

Prefer:

```php
$product = wc_get_product( $product_id );
```

instead of directly querying product database tables.

Use CRUD APIs:

```php
$product->get_id();
$product->get_name();
$product->get_price();
$product->get_regular_price();
$product->get_sale_price();
$product->get_stock_quantity();
```

Orders:

```php
$order = wc_get_order( $order_id );

$order->get_id();
$order->get_status();
$order->get_total();
$order->get_billing_email();
```

Always verify that objects exist:

```php
$product = wc_get_product( $product_id );

if ( ! $product ) {
    return;
}
```

---

# 11. WooCommerce HPOS

Magic Elements must be compatible with WooCommerce High-Performance Order Storage (HPOS).

Do not assume WooCommerce orders are stored in `wp_posts` and `wp_postmeta`.

Avoid:

```php
get_post_meta(
    $order_id,
    '_billing_email',
    true
);
```

Prefer:

```php
$order = wc_get_order( $order_id );

$email = $order
    ? $order->get_billing_email()
    : '';
```

Use WooCommerce CRUD APIs whenever possible.

---

# 12. WooCommerce Product Types

Do not assume every WooCommerce product is a simple product.

Account for:

* Simple products
* Variable products
* Product variations
* Grouped products
* External products
* Subscription products
* Custom product types
* Third-party product types

When product type matters:

```php
$product->get_type();
```

Do not hard-code product IDs or product types.

---

# 13. WooCommerce Pricing

Never trust frontend pricing.

JavaScript calculations are for presentation only.

The server must calculate authoritative:

* Product prices
* Discounts
* Fees
* Taxes
* Cart totals
* Checkout totals
* Booking prices
* Deposits
* Additional charges
* Refund amounts

Never accept a frontend total as authoritative.

Bad:

```php
$total = $_POST['total'];
```

Calculate the total server-side.

---

# 14. WooCommerce Cart

Use WooCommerce cart APIs.

Example:

```php
WC()->cart->add_to_cart(
    $product_id,
    $quantity
);
```

Before modifying the cart:

* Validate product ID.
* Validate product type.
* Validate quantity.
* Validate user permissions.
* Validate custom data.
* Sanitize input.
* Verify nonce where applicable.
* Recalculate pricing server-side.

---

# 15. JavaScript

Use modern JavaScript according to the project's supported browsers and build system.

Prefer:

```js
const productId = 123;
let quantity = 1;
```

Avoid:

```js
var productId = 123;
```

Use modules when the existing project supports them.

Keep JavaScript files focused and modular.

Avoid creating massive JavaScript files containing unrelated functionality.

---

# 16. jQuery

WordPress and WooCommerce may require jQuery for compatibility.

When working with existing jQuery-based code:

```js
(function ($) {
    'use strict';

    $(document).ready(function () {
        // ...
    });

})(jQuery);
```

Do not rewrite existing jQuery code unnecessarily.

If WooCommerce exposes an event required by the feature, use the WooCommerce event rather than creating a duplicate mechanism.

Use native browser APIs when they are simpler and appropriate.

---

# 17. JavaScript Security

Never insert untrusted data directly into HTML.

Avoid:

```js
element.innerHTML = userInput;
```

Prefer:

```js
element.textContent = userInput;
```

Never expose sensitive information in frontend JavaScript.

Never expose:

* API secrets
* Private keys
* Database credentials
* Authentication secrets
* Payment credentials

---

# 18. AJAX

WordPress AJAX actions must be properly registered.

Example:

```php
add_action(
    'wp_ajax_magic_elements_action',
    'magic_elements_action'
);
```

If logged-out users are intentionally supported:

```php
add_action(
    'wp_ajax_nopriv_magic_elements_action',
    'magic_elements_action'
);
```

Every state-changing AJAX request must validate:

1. Nonce
2. Input
3. Permissions
4. Business rules

Return structured responses:

```php
wp_send_json_success(
    array(
        'message' => __(
            'Operation completed.',
            'magic-elements'
        ),
    )
);
```

Error:

```php
wp_send_json_error(
    array(
        'message' => __(
            'Something went wrong.',
            'magic-elements'
        ),
    )
);
```

---

# 19. REST API

Register REST routes using WordPress APIs.

Example:

```php
register_rest_route(
    'magic-elements/v1',
    '/items',
    array(
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => array(
            $this,
            'get_items',
        ),
        'permission_callback' => array(
            $this,
            'permissions_check',
        ),
    )
);
```

Protected endpoints must always have a proper:

```php
permission_callback
```

Do not use:

```php
'permission_callback' => '__return_true'
```

for private functionality.

Validate REST API parameters.

---

# 20. Internationalization

All user-facing strings must be translatable.

The text domain for Magic Elements is:

```text
magic-elements
```

Use:

```php
__( 'Settings', 'magic-elements' );
```

```php
esc_html__(
    'Settings',
    'magic-elements'
);
```

```php
esc_html_e(
    'Settings',
    'magic-elements'
);
```

Do not hard-code user-facing strings.

Bad:

```php
echo 'Settings saved';
```

Good:

```php
echo esc_html__(
    'Settings saved.',
    'magic-elements'
);
```

---

# 21. Templates

Templates should primarily handle presentation.

Do not put large amounts of business logic inside templates.

Bad:

```php
<?php
// Hundreds of lines of business logic.
?>
```

Prepare data before rendering.

Example:

```php
$data = array(
    'title' => $title,
    'price' => $price,
);

include $template;
```

---

# 22. Assets

Use WordPress enqueue APIs.

JavaScript:

```php
wp_enqueue_script();
```

CSS:

```php
wp_enqueue_style();
```

Do not hard-code `<script>` or `<link>` tags.

Example:

```php
wp_enqueue_script(
    'magic-elements-admin',
    MAGIC_ELEMENTS_URL . 'assets/js/admin.js',
    array( 'jquery' ),
    MAGIC_ELEMENTS_VERSION,
    true
);
```

Use proper dependency declarations.

---

# 23. Frontend Architecture

Magic Elements frontend functionality should be:

* Modular
* Reusable
* Accessible
* Responsive
* Performance-conscious

Avoid global JavaScript state where possible.

Prefer scoped selectors:

```js
const container = document.querySelector(
    '.magic-elements-widget'
);
```

Avoid generic selectors that can conflict with themes or other plugins.

---

# 24. CSS

Follow the existing project CSS architecture.

Prefer plugin-specific classes:

```css
.magic-elements-widget {}

.magic-elements-widget__header {}

.magic-elements-widget__content {}

.magic-elements-widget__button {}
```

Avoid generic global selectors:

```css
.button {}
.container {}
.title {}
```

Avoid unnecessary `!important`.

Only use `!important` when there is a specific documented reason.

---

# 25. Performance

Avoid unnecessary:

* Database queries
* REST requests
* AJAX requests
* DOM operations
* Asset loading
* Large dependencies
* Repeated WooCommerce object creation

Do not load admin-only assets on the frontend.

Do not load frontend-only assets across every admin page.

Load assets only where required.

---

# 26. Error Handling

Do not silently ignore errors.

Check WordPress errors:

```php
if ( is_wp_error( $result ) ) {
    // Handle the error.
}
```

REST errors should use `WP_Error`:

```php
return new WP_Error(
    'magic_elements_error',
    __(
        'Unable to complete the operation.',
        'magic-elements'
    ),
    array(
        'status' => 400,
    )
);
```

Never expose sensitive internal information to users.

---

# 27. Logging

Do not leave debugging statements in production.

Avoid:

```php
var_dump();
print_r();
die();
exit();
```

For WooCommerce-related logging:

```php
$logger = wc_get_logger();

$logger->info(
    'Magic Elements operation completed.',
    array(
        'source' => 'magic-elements',
    )
);
```

Never log:

* Passwords
* API keys
* Payment credentials
* Authentication tokens
* Private customer information

---

# 28. Date and Time

Use WordPress and WooCommerce date/time APIs.

Avoid relying blindly on PHP server timezone.

Use:

```php
current_time();
```

or WooCommerce date APIs where appropriate.

When storing dates, consistently follow the project's timezone convention.

Do not mix:

* UTC
* Server timezone
* WordPress timezone
* Browser timezone

without explicit conversion.

---

# 29. File Uploads

Use WordPress upload APIs where possible.

Validate:

* File type
* MIME type
* File size
* Upload errors
* User permissions

Never allow arbitrary PHP files to be uploaded.

Never trust the uploaded filename.

---

# 30. Accessibility

Follow accessible HTML practices.

Prefer:

```html
<button type="button">
    Save
</button>
```

instead of:

```html
<div class="button">
    Save
</div>
```

Forms must have labels.

Dynamic interfaces must maintain appropriate focus behavior.

Interactive elements must be keyboard accessible.

Do not rely only on color to communicate state.

---

# 31. React / TypeScript

If Magic Elements uses React or TypeScript:

* Follow the existing project architecture.
* Use functional components.
* Keep components focused.
* Avoid unnecessary global state.
* Define proper TypeScript types.
* Avoid `any` unless there is a justified reason.
* Keep API calls separate from presentation components.
* Handle loading, error, and empty states.

Example:

```ts
interface ElementSettings {
    id: number;
    name: string;
    enabled: boolean;
}
```

Avoid:

```ts
const settings: any = {};
```

---

# 32. Build Tools

Before modifying:

* Webpack
* Vite
* Gulp
* npm scripts
* Sass
* Tailwind
* TypeScript

inspect the existing build configuration.

Do not replace the build system unless explicitly requested.

Use the commands already defined in `package.json`.

Examples:

```bash
npm run build
```

```bash
npm run dev
```

---

# 33. Composer

If Composer is used:

* Follow the project's PHP version.
* Keep dependencies compatible.
* Do not manually edit generated files.
* Do not commit `vendor/` unless required by the project.

After dependency changes:

```bash
composer validate
composer install
```

Use the project's documented Composer workflow.

---

# 34. Git

Keep changes focused.

Before finishing:

```bash
git diff
```

Review every changed file.

Do not commit:

```text
.env
API keys
Private keys
Passwords
Credentials
Debug files
Local configuration
```

Do not modify unrelated files.

Avoid large formatting changes when making a small feature or bug fix.

---

# 35. Testing

Before completing a task, test the affected functionality.

Check:

* PHP syntax
* PHP linting
* JavaScript linting
* TypeScript
* Frontend build
* WordPress functionality
* WooCommerce functionality
* AJAX
* REST API
* Permissions
* Invalid input
* Error states
* Empty states

Use the existing project's test commands.

Do not invent test commands that do not exist in the project.

---

# 36. Backward Compatibility

Magic Elements should avoid unnecessary breaking changes.

Preserve existing:

* Hooks
* Filters
* Function signatures
* Class APIs
* REST endpoints
* AJAX actions
* Settings
* Database data
* Public URLs

When deprecating functionality, use WordPress-compatible deprecation mechanisms.

Example:

```php
_deprecated_function(
    __FUNCTION__,
    '2.0.0',
    'new_function_name'
);
```

---

# 37. Extensibility

Magic Elements should remain extensible for developers.

Use filters where a meaningful extension point exists.

Example:

```php
$value = apply_filters(
    'magic_elements_value',
    $value,
    $context
);
```

Actions:

```php
do_action(
    'magic_elements_after_render',
    $element_id
);
```

Do not add hooks unnecessarily.

Hooks should represent meaningful extension points.

---

# 38. Admin Development

Admin functionality should:

* Use WordPress admin APIs.
* Check capabilities.
* Use nonces for state-changing operations.
* Sanitize settings.
* Escape output.
* Avoid loading assets on unrelated admin pages.

Settings should use WordPress Settings API where appropriate.

Never trust values submitted from admin forms.

---

# 39. Elementor Compatibility

If Magic Elements integrates with Elementor:

* Follow Elementor's widget architecture.
* Do not modify Elementor core.
* Use Elementor APIs.
* Register widgets through the appropriate hooks.
* Check whether Elementor is active before using Elementor-specific APIs.
* Avoid fatal errors when Elementor is unavailable.
* Keep Elementor-specific code isolated.

Do not assume Elementor is always installed or activated.

---

# 40. WooCommerce Compatibility

If WooCommerce is optional:

* Detect whether WooCommerce is active.
* Avoid calling WooCommerce classes/functions when WooCommerce is unavailable.
* Keep WooCommerce-specific functionality isolated.

Example:

```php
if ( ! class_exists( 'WooCommerce' ) ) {
    return;
}
```

Use the project's preferred WooCommerce dependency check if one already exists.

---

# 41. Dependency Checks

Magic Elements must fail gracefully when optional dependencies are unavailable.

Possible dependencies may include:

* WordPress
* WooCommerce
* Elementor
* Other supported plugins

Do not cause fatal errors because an optional dependency is missing.

---

# 42. API Requests

External API requests must:

* Use WordPress HTTP APIs.
* Set appropriate timeouts.
* Validate responses.
* Handle `WP_Error`.
* Avoid exposing credentials.
* Avoid unnecessary repeated requests.

Prefer:

```php
wp_remote_get();
wp_remote_post();
```

over direct cURL implementations unless there is a specific technical requirement.

---

# 43. Caching

Cache expensive operations where appropriate.

Use WordPress caching APIs:

```php
wp_cache_get();
wp_cache_set();
wp_cache_delete();
```

For persistent configuration:

```php
get_option();
update_option();
```

Always consider cache invalidation when data changes.

Do not cache user-specific or permission-sensitive data globally.

---

# 44. Code Quality

Prefer code that is:

* Simple
* Explicit
* Testable
* Reusable
* Readable
* Maintainable

Avoid:

* Clever one-liners
* Excessive abstraction
* Deeply nested conditions
* Huge methods
* Duplicate business logic
* Global state
* Unnecessary dependencies

Do not optimize for fewer lines of code.

Optimize for correctness and maintainability.

---

# 45. AI Agent Workflow

When an AI coding agent receives a task, follow this process.

## Step 1 — Inspect

Understand:

* Project structure
* Relevant files
* Existing architecture
* Dependencies
* Hooks
* APIs
* Tests

## Step 2 — Search

Search for existing:

* Functions
* Classes
* Hooks
* Filters
* AJAX handlers
* REST routes
* Templates
* Components
* Utilities

Reuse existing implementations when appropriate.

## Step 3 — Plan

Determine:

* What needs to change?
* Which files are affected?
* Could this break existing behavior?
* Is backward compatibility required?
* Is there a simpler solution?

## Step 4 — Implement

Make the smallest clean change.

Follow the existing architecture.

Do not introduce unnecessary dependencies.

## Step 5 — Validate

Run appropriate project commands.

Examples:

```bash
php -l path/to/file.php
```

```bash
npm run lint
```

```bash
npm run build
```

```bash
composer validate
```

Only run commands that are actually supported by the project.

## Step 6 — Review

Run:

```bash
git diff
```

Check for:

* Unrelated changes
* Debug code
* Security issues
* Credentials
* Broken hooks
* Broken APIs
* Incorrect escaping
* Missing validation
* Missing capability checks

## Step 7 — Report

Provide a concise summary:

* What changed
* Files changed
* Tests/checks performed
* Any remaining concerns

---

# 46. Never Do These Things

Never:

* Modify WordPress core.
* Modify WooCommerce core.
* Modify Elementor core.
* Disable security checks to make something work.
* Trust frontend prices.
* Trust frontend permissions.
* Store secrets in JavaScript.
* Concatenate user input into SQL.
* Skip nonce verification for state-changing requests.
* Skip capability checks.
* Introduce deprecated APIs.
* Rewrite unrelated code.
* Remove existing hooks without checking compatibility.
* Add unnecessary dependencies.
* Use `eval()`.
* Execute arbitrary PHP.
* Commit credentials.
* Leave debugging code in production.
* Ignore errors.
* Hard-code environment-specific URLs.
* Assume WooCommerce HPOS is disabled.
* Assume every WooCommerce product is simple.
* Assume every order has a valid product.
* Assume frontend validation provides security.

---

# 47. Priority Rules

When choosing between implementation approaches, use this priority:

1. **Security**
2. **Correctness**
3. **WordPress compatibility**
4. **WooCommerce compatibility**
5. **Existing Magic Elements architecture**
6. **Backward compatibility**
7. **Maintainability**
8. **Performance**
9. **Developer convenience**

Never sacrifice security or correctness for convenience.

---

# 48. Final Principle

Write Magic Elements code as if another WordPress/WooCommerce developer will maintain it several years from now.

Prefer proven WordPress and WooCommerce APIs over custom implementations.

Keep business logic on the server.

Keep frontend code responsible for presentation and interaction.

Keep security checks close to the operation they protect.

Reuse existing project architecture.

Make every change deliberate, minimal, secure, testable, and production-ready.
