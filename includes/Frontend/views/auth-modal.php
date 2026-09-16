<?php
/**
 * Shared auth modal markup (Sign Up / Sign In).
 *
 * @package MagicElements
 *
 * @var string $widget_id       Scope / instance id.
 * @var string $subscribe_title Signup panel title.
 */

if (!defined('ABSPATH')) {
    exit;
}

$widget_id       = !empty($widget_id) ? (string) $widget_id : 'global';
$auth_modal_id   = 'magic-auth-modal-' . sanitize_html_class($widget_id);
$is_logged_in    = is_user_logged_in();
$current_user    = $is_logged_in ? wp_get_current_user() : null;
$subscribe_title = !empty($subscribe_title) ? $subscribe_title : esc_html__('Subscribe', 'magic-elements');
?>
<div
    id="<?php echo esc_attr($auth_modal_id); ?>"
    class="magic-auth-modal"
    data-me-auth-scope="<?php echo esc_attr($widget_id); ?>"
    aria-hidden="true"
    hidden
>
    <div class="magic-auth-modal__overlay" data-auth-modal-close></div>
    <div class="magic-auth-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="<?php echo esc_attr($auth_modal_id); ?>-title">
        <button
            type="button"
            class="magic-auth-modal__close"
            data-auth-modal-close
            aria-label="<?php echo esc_attr__('Close', 'magic-elements'); ?>"
        >
            <span aria-hidden="true">&times;</span>
        </button>

        <?php if ($is_logged_in && $current_user) : ?>
            <div class="magic-auth-modal__panel is-active" data-auth-panel="account">
                <h2 id="<?php echo esc_attr($auth_modal_id); ?>-title" class="magic-auth-modal__title">
                    <?php echo esc_html__('My Account', 'magic-elements'); ?>
                </h2>
                <p class="magic-auth-modal__subtitle">
                    <?php
                    printf(
                        /* translators: %s: user display name */
                        esc_html__('Signed in as %s', 'magic-elements'),
                        esc_html($current_user->display_name)
                    );
                    ?>
                </p>
                <div class="magic-auth-modal__message" data-auth-message hidden></div>
                <button type="button" class="magic-auth-modal__submit" data-auth-logout>
                    <?php echo esc_html__('Sign Out', 'magic-elements'); ?>
                </button>
            </div>
        <?php else : ?>
            <div class="magic-auth-modal__panel is-active" data-auth-panel="signup">
                <h2 id="<?php echo esc_attr($auth_modal_id); ?>-title" class="magic-auth-modal__title">
                    <?php echo esc_html($subscribe_title); ?>
                </h2>
                <p class="magic-auth-modal__subtitle">
                    <?php echo esc_html__('Create your account to get started.', 'magic-elements'); ?>
                </p>
                <form class="magic-auth-modal__form" data-auth-form="signup" novalidate autocomplete="on">
                    <div class="magic-auth-modal__honeypot" aria-hidden="true">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-website"><?php echo esc_html__('Website', 'magic-elements'); ?></label>
                        <input type="text" id="<?php echo esc_attr($auth_modal_id); ?>-website" name="website" value="" tabindex="-1" autocomplete="off" />
                    </div>
                    <div class="magic-auth-modal__row">
                        <div class="magic-auth-modal__field">
                            <label for="<?php echo esc_attr($auth_modal_id); ?>-first-name"><?php echo esc_html__('First Name', 'magic-elements'); ?></label>
                            <input type="text" id="<?php echo esc_attr($auth_modal_id); ?>-first-name" name="first_name" autocomplete="given-name" required maxlength="60" />
                        </div>
                        <div class="magic-auth-modal__field">
                            <label for="<?php echo esc_attr($auth_modal_id); ?>-last-name"><?php echo esc_html__('Last Name', 'magic-elements'); ?></label>
                            <input type="text" id="<?php echo esc_attr($auth_modal_id); ?>-last-name" name="last_name" autocomplete="family-name" required maxlength="60" />
                        </div>
                    </div>
                    <div class="magic-auth-modal__field">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-signup-email"><?php echo esc_html__('Email', 'magic-elements'); ?></label>
                        <input type="email" id="<?php echo esc_attr($auth_modal_id); ?>-signup-email" name="email" autocomplete="email" required maxlength="100" />
                    </div>
                    <div class="magic-auth-modal__field">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-signup-password"><?php echo esc_html__('Password', 'magic-elements'); ?></label>
                        <input type="password" id="<?php echo esc_attr($auth_modal_id); ?>-signup-password" name="password" autocomplete="new-password" required minlength="6" />
                    </div>
                    <div class="magic-auth-modal__field">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-confirm-password"><?php echo esc_html__('Confirm Password', 'magic-elements'); ?></label>
                        <input type="password" id="<?php echo esc_attr($auth_modal_id); ?>-confirm-password" name="confirm_password" autocomplete="new-password" required minlength="6" />
                    </div>
                    <label class="magic-auth-modal__checkbox">
                        <input type="checkbox" name="agree" value="1" required />
                        <span><?php echo esc_html__('I agree to the Terms & Conditions', 'magic-elements'); ?></span>
                    </label>
                    <div class="magic-auth-modal__message" data-auth-message hidden></div>
                    <button type="submit" class="magic-auth-modal__submit">
                        <?php echo esc_html__('Sign Up', 'magic-elements'); ?>
                    </button>
                    <p class="magic-auth-modal__switch">
                        <?php echo esc_html__('Already have an account?', 'magic-elements'); ?>
                        <button type="button" data-auth-switch="signin"><?php echo esc_html__('Sign In', 'magic-elements'); ?></button>
                    </p>
                </form>
            </div>

            <div class="magic-auth-modal__panel" data-auth-panel="signin">
                <h2 class="magic-auth-modal__title">
                    <?php echo esc_html__('Sign In', 'magic-elements'); ?>
                </h2>
                <p class="magic-auth-modal__subtitle">
                    <?php echo esc_html__('Welcome back. Sign in with your email and password.', 'magic-elements'); ?>
                </p>
                <form class="magic-auth-modal__form" data-auth-form="signin" novalidate autocomplete="on">
                    <div class="magic-auth-modal__field">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-signin-email"><?php echo esc_html__('Email', 'magic-elements'); ?></label>
                        <input type="email" id="<?php echo esc_attr($auth_modal_id); ?>-signin-email" name="email" autocomplete="email" required maxlength="100" />
                    </div>
                    <div class="magic-auth-modal__field">
                        <label for="<?php echo esc_attr($auth_modal_id); ?>-signin-password"><?php echo esc_html__('Password', 'magic-elements'); ?></label>
                        <input type="password" id="<?php echo esc_attr($auth_modal_id); ?>-signin-password" name="password" autocomplete="current-password" required />
                    </div>
                    <label class="magic-auth-modal__checkbox">
                        <input type="checkbox" name="remember" value="1" checked />
                        <span><?php echo esc_html__('Remember me', 'magic-elements'); ?></span>
                    </label>
                    <div class="magic-auth-modal__message" data-auth-message hidden></div>
                    <button type="submit" class="magic-auth-modal__submit">
                        <?php echo esc_html__('Sign In', 'magic-elements'); ?>
                    </button>
                    <p class="magic-auth-modal__switch">
                        <?php echo esc_html__('Need an account?', 'magic-elements'); ?>
                        <button type="button" data-auth-switch="signup"><?php echo esc_html__('Sign Up', 'magic-elements'); ?></button>
                    </p>
                </form>
            </div>
        <?php endif; ?>
    </div>
</div>
