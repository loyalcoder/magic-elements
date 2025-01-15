<?php

/**
 * Plugin Name:       Magic Elements
 * Plugin URI:        https://magickit.loyalcoder.com/
 * Description:       Magic Elements is a comprehensive extension for Elementor, providing advanced features, custom widgets, and templates to enhance your page-building experience. Perfect for users seeking seamless design customization with ease.
 * Version:           1.0.0
 * Author:            LoyalCoder
 * Author URI:        https://loyalcoder.com
 * Requires at least: 5.0
 * Tested up to:      6.6
 * Requires Plugins:  elementor
 * Requires PHP:      7.0
 * Text Domain:       magic-elements
 * Domain Path:       /languages/
 *
 * Copyright:         © 2025 LoyalCoder.
 * License:           GNU General Public License v3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Main plugin class
 */
final class MagicElements_Main
{
    /**
     * Plugin version
     * 
     * @var string
     */
    const VERSION = '1.0.0';

    /**
     * Constructor
     */
    private function __construct()
    {
        $this->define_constants();

        register_activation_hook(__FILE__, [$this, 'activate']);
        add_action('plugins_loaded', [$this, 'init_plugin']);
    }

    /**
     * Initialize singleton instance
     *
     * @return \MagicElements_Main
     */
    public static function init()
    {
        static $instance = false;

        if (!$instance) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * Define constants
     *
     * @return void
     */
    public function define_constants()
    {
        define('MAGICELEMENTS_VERSION', self::VERSION);
        define('MAGICELEMENTS_FILE', __FILE__);
        define('MAGICELEMENTS_PATH', __DIR__);
        define('MAGICELEMENTS_URL', plugins_url('', MAGICELEMENTS_FILE));
        define('MAGICELEMENTS_ASSETS', MAGICELEMENTS_URL . '/assets');
        define('MAGICELEMENTS_DIR_PATH', plugin_dir_path(__FILE__));
        define('MAGICELEMENTS_ELEMENTOR_PATH', MAGICELEMENTS_DIR_PATH . 'includes/Elementor/');
    }

    /**
     * Plugin activation
     *
     * @return void
     */
    public function activate()
    {
        $installer = new MagicElements\Installer();
        $installer->run();
    }

    /**
     * Initialize plugin components
     *
     * @return void
     */
    public function init_plugin()
    {
        new MagicElements\Assets();
        new MagicElements\Load_Elementor();

        if (is_admin()) {
            new MagicElements\Admin();
        }
    }
}

/**
 * Initialize main plugin
 *
 * @return \MagicElements_Main
 */
function magic_elements_main()
{
    return MagicElements_Main::init();
}

magic_elements_main();
