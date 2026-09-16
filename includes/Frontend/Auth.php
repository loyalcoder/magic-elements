<?php
/**
 * Shared frontend auth (signup / sign-in) for Magic Elements + themes.
 *
 * @package MagicElements
 */

declare(strict_types=1);

namespace MagicElements\Frontend;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Secure, reusable auth modal + AJAX API.
 */
class Auth
{
    public const NONCE_ACTION = 'me_nav_auth_nonce';
    public const MODAL_ID     = 'magic-auth-modal-global';
    public const SCOPE        = 'global';

    /** Max auth attempts per IP window. */
    private const RATE_LIMIT = 8;

    /** Rate limit window in seconds. */
    private const RATE_WINDOW = 900;

    /**
     * Bootstrap hooks.
     */
    public function __construct()
    {
        add_action('wp_ajax_me_nav_auth_register', [$this, 'ajax_register']);
        add_action('wp_ajax_nopriv_me_nav_auth_register', [$this, 'ajax_register']);
        add_action('wp_ajax_me_nav_auth_login', [$this, 'ajax_login']);
        add_action('wp_ajax_nopriv_me_nav_auth_login', [$this, 'ajax_login']);
        add_action('wp_ajax_me_nav_auth_logout', [$this, 'ajax_logout']);

        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets'], 20);
        add_action('wp_footer', [$this, 'render_modal'], 5);
    }

    /**
     * Enqueue shared auth CSS/JS once for theme + Elementor nav triggers.
     *
     * @return void
     */
    public function enqueue_assets(): void
    {
        if (is_admin()) {
            return;
        }

        $css = MAGIC_ELEMENTS_PATH . '/assets/dist/auth_modal.css';
        $js  = MAGIC_ELEMENTS_PATH . '/assets/dist/auth_modal.js';

        if (file_exists($css)) {
            wp_enqueue_style(
                'emkit-auth-modal',
                MAGIC_ELEMENTS_ASSETS . '/dist/auth_modal.css',
                [],
                (string) filemtime($css)
            );
        }

        if (file_exists($js)) {
            wp_enqueue_script(
                'emkit-auth-modal',
                MAGIC_ELEMENTS_ASSETS . '/dist/auth_modal.js',
                ['jquery'],
                (string) filemtime($js),
                true
            );

            wp_localize_script('emkit-auth-modal', 'meNavAuth', $this->get_localize_data());
        }
    }

    /**
     * Script localization payload.
     *
     * @return array<string, mixed>
     */
    public function get_localize_data(): array
    {
        return [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce(self::NONCE_ACTION),
            'i18n'    => [
                'genericError' => esc_html__('Something went wrong. Please try again.', 'magic-elements'),
                'processing'   => esc_html__('Please wait…', 'magic-elements'),
            ],
        ];
    }

    /**
     * Print one shared modal in the footer.
     *
     * @return void
     */
    public function render_modal(): void
    {
        if (is_admin()) {
            return;
        }

        static $printed = false;
        if ($printed) {
            return;
        }
        $printed = true;

        $title = '';
        if (function_exists('moviwala_opt')) {
            $title = (string) moviwala_opt('action_button_label', '');
        }

        $args = [
            'widget_id'       => self::SCOPE,
            'subscribe_title' => $title !== '' ? $title : esc_html__('Subscribe', 'magic-elements'),
        ];

        // phpcs:ignore WordPress.PHP.DontExtract.extract_extract -- Controlled template vars.
        extract($args, EXTR_SKIP);

        include MAGIC_ELEMENTS_PATH . '/includes/Frontend/views/auth-modal.php';
    }

    /**
     * Register a subscriber account.
     *
     * @return void
     */
    public function ajax_register(): void
    {
        $this->verify_request();

        if (is_user_logged_in()) {
            wp_send_json_error([
                'message' => esc_html__('You are already signed in.', 'magic-elements'),
            ]);
        }

        if (!$this->check_rate_limit('register')) {
            wp_send_json_error([
                'message' => esc_html__('Too many attempts. Please try again later.', 'magic-elements'),
            ]);
        }

        // Honeypot — bots fill hidden fields.
        $honeypot = isset($_POST['website']) ? sanitize_text_field(wp_unslash($_POST['website'])) : '';
        if ($honeypot !== '') {
            wp_send_json_error([
                'message' => esc_html__('Unable to create account.', 'magic-elements'),
            ]);
        }

        $first_name = isset($_POST['first_name']) ? sanitize_text_field(wp_unslash($_POST['first_name'])) : '';
        $last_name  = isset($_POST['last_name']) ? sanitize_text_field(wp_unslash($_POST['last_name'])) : '';
        $email      = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
        $password   = isset($_POST['password']) ? (string) wp_unslash($_POST['password']) : '';
        $confirm    = isset($_POST['confirm_password']) ? (string) wp_unslash($_POST['confirm_password']) : '';
        $agree      = !empty($_POST['agree']);

        if ($first_name === '' || $last_name === '') {
            wp_send_json_error([
                'message' => esc_html__('Please enter your first and last name.', 'magic-elements'),
            ]);
        }

        if (!is_email($email)) {
            wp_send_json_error([
                'message' => esc_html__('Please enter a valid email address.', 'magic-elements'),
            ]);
        }

        if (email_exists($email) || username_exists($email)) {
            $this->bump_rate_limit('register');
            wp_send_json_error([
                'message' => esc_html__('An account with this email already exists.', 'magic-elements'),
            ]);
        }

        $min_length = max(6, (int) apply_filters('magic_elements_auth_min_password_length', 6));
        if (strlen($password) < $min_length) {
            wp_send_json_error([
                'message' => sprintf(
                    /* translators: %d: minimum password length */
                    esc_html__('Password must be at least %d characters.', 'magic-elements'),
                    $min_length
                ),
            ]);
        }

        if (!hash_equals($password, $confirm)) {
            wp_send_json_error([
                'message' => esc_html__('Passwords do not match.', 'magic-elements'),
            ]);
        }

        if (!$agree) {
            wp_send_json_error([
                'message' => esc_html__('Please accept the terms to continue.', 'magic-elements'),
            ]);
        }

        // Force subscriber — never elevate privileges from public signup.
        $role = 'subscriber';
        if (!get_role($role)) {
            $role = get_option('default_role', 'subscriber');
            if ($role === 'administrator' || $role === 'editor') {
                $role = 'subscriber';
            }
        }

        $user_id = wp_insert_user([
            'user_login'   => $email,
            'user_email'   => $email,
            'user_pass'    => $password,
            'first_name'   => $first_name,
            'last_name'    => $last_name,
            'display_name' => trim($first_name . ' ' . $last_name),
            'role'         => $role,
        ]);

        if (is_wp_error($user_id)) {
            $this->bump_rate_limit('register');
            wp_send_json_error([
                'message' => esc_html($user_id->get_error_message()),
            ]);
        }

        // Ensure role was not escalated by another plugin.
        $user = new \WP_User((int) $user_id);
        if (user_can($user, 'manage_options')) {
            $user->set_role('subscriber');
        }

        $signed_in = $this->sign_in_user($email, $password);

        if (is_wp_error($signed_in)) {
            wp_send_json_success([
                'message'  => esc_html__('Account created. Please sign in.', 'magic-elements'),
                'redirect' => '',
                'open'     => 'signin',
            ]);
        }

        wp_send_json_success([
            'message'  => esc_html__('Account created successfully.', 'magic-elements'),
            'redirect' => home_url('/'),
        ]);
    }

    /**
     * Sign in with email + password.
     *
     * @return void
     */
    public function ajax_login(): void
    {
        $this->verify_request();

        if (is_user_logged_in()) {
            wp_send_json_error([
                'message' => esc_html__('You are already signed in.', 'magic-elements'),
            ]);
        }

        if (!$this->check_rate_limit('login')) {
            wp_send_json_error([
                'message' => esc_html__('Too many attempts. Please try again later.', 'magic-elements'),
            ]);
        }

        $email    = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
        $password = isset($_POST['password']) ? (string) wp_unslash($_POST['password']) : '';
        $remember = !empty($_POST['remember']);

        if (!is_email($email) || $password === '') {
            wp_send_json_error([
                'message' => esc_html__('Please enter your email and password.', 'magic-elements'),
            ]);
        }

        $signed_in = $this->sign_in_user($email, $password, $remember);

        if (is_wp_error($signed_in)) {
            $this->bump_rate_limit('login');
            wp_send_json_error([
                'message' => esc_html__('Invalid email or password.', 'magic-elements'),
            ]);
        }

        wp_send_json_success([
            'message'  => esc_html__('Signed in successfully.', 'magic-elements'),
            'redirect' => home_url('/'),
        ]);
    }

    /**
     * Log out current user.
     *
     * @return void
     */
    public function ajax_logout(): void
    {
        $this->verify_request();

        if (!is_user_logged_in()) {
            wp_send_json_error([
                'message' => esc_html__('You are not signed in.', 'magic-elements'),
            ]);
        }

        wp_logout();

        wp_send_json_success([
            'message'  => esc_html__('Signed out successfully.', 'magic-elements'),
            'redirect' => home_url('/'),
        ]);
    }

    /**
     * Verify nonce for all auth AJAX.
     *
     * @return void
     */
    private function verify_request(): void
    {
        if (!check_ajax_referer(self::NONCE_ACTION, 'nonce', false)) {
            wp_send_json_error([
                'message' => esc_html__('Security check failed. Please refresh and try again.', 'magic-elements'),
            ]);
        }
    }

    /**
     * Authenticate and set the auth cookie.
     *
     * @param string $email    Email / login.
     * @param string $password Plain password.
     * @param bool   $remember Remember me.
     * @return \WP_User|\WP_Error
     */
    private function sign_in_user(string $email, string $password, bool $remember = true)
    {
        // Clear any stale auth cookie before signing in.
        wp_clear_auth_cookie();

        $user = wp_signon(
            [
                'user_login'    => $email,
                'user_password' => $password,
                'remember'      => $remember,
            ],
            is_ssl()
        );

        if (!is_wp_error($user)) {
            wp_set_current_user($user->ID);
        }

        return $user;
    }

    /**
     * Whether the client is still under the rate limit.
     *
     * @param string $action Action key.
     * @return bool
     */
    private function check_rate_limit(string $action): bool
    {
        $key   = $this->rate_limit_key($action);
        $count = (int) get_transient($key);

        return $count < self::RATE_LIMIT;
    }

    /**
     * Increment failed / contested attempts.
     *
     * @param string $action Action key.
     * @return void
     */
    private function bump_rate_limit(string $action): void
    {
        $key   = $this->rate_limit_key($action);
        $count = (int) get_transient($key);
        set_transient($key, $count + 1, self::RATE_WINDOW);
    }

    /**
     * Transient key for the current client IP + action.
     *
     * @param string $action Action key.
     * @return string
     */
    private function rate_limit_key(string $action): string
    {
        $ip = '';
        if (!empty($_SERVER['REMOTE_ADDR'])) {
            $ip = sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR']));
        }

        return 'me_auth_' . $action . '_' . md5($ip);
    }
}
