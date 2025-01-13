<?php

/**
 * Plugin Name:       Magic Elements
 * Plugin URI:        https://loyalcoder.com
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
final class Magic_Elements
{
    /**
     * Plugin version
     * 
     * @var string
     */
    const version = '1.0.0';

    /**
     * contractor
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
     * @return \Magic_Elements
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
        define('MAGIC_ELEMENTS_VERSION', self::version);
        define('MAGIC_ELEMENTS_FILE', __FILE__);
        define('MAGIC_ELEMENTS_PATH', __DIR__);
        define('MAGIC_ELEMENTS_URL', plugins_url('', MAGIC_ELEMENTS_FILE));
        define('MAGIC_ELEMENTS_ASSETS', MAGIC_ELEMENTS_URL . '/assets');
        define('MAGIC_ELEMENTS_DIR_PATH', plugin_dir_path(__FILE__));
        define('MAGIC_ELEMENTS_ELEMENTOR', MAGIC_ELEMENTS_DIR_PATH . 'includes/Elementor/');
    }

    /**
     * Plugin information
     *
     * @return void
     */
    public function activate()
    {
        $installer = new MagicElements\Installer();

        $installer->run();
    }

    /**
     * Load plugin files
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
 * @return \Magic_Elements
 */
function magic_elements()
{
    return Magic_Elements::init();
}

magic_elements();
