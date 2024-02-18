<?php

/**
 * Plugin Name:       Elementor Magic kit
 * Plugin URI:        https://marlink-checkout.com
 * Description:       Boilerplate for WordPress Plugin
 * Version:           1.0.0
 * Author:            WildRain
 * Author URI:        https://wildrain.net
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       elementor-magic-kit
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * Main plugin class
 */
final class Elementor_Magic_Kit
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
     * @return \Elementor_Magic_Kit
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
        define('EM_KIT_VERSION', self::version);
        define('EM_KIT_FILE', __FILE__);
        define('EM_KIT_PATH', __DIR__);
        define('EM_KIT_URL', plugins_url('', EM_KIT_FILE));
        define('EM_KIT_ASSETS', EM_KIT_URL . '/assets');
        define('EM_KIT_DIR_PATH', plugin_dir_path(__FILE__));
        define('EM_KIT_ELEMENTOR', EM_KIT_DIR_PATH . 'includes/Elementor/');
    }

    /**
     * Plugin information
     *
     * @return void
     */
    public function activate()
    {
        $installer = new Elementor_Magic_Kit\Installer();

        $installer->run();
    }

    /**
     * Load plugin files
     *
     * @return void
     */
    public function init_plugin()
    {
        new Elementor_Magic_Kit\Assets();
        new Elementor_Magic_Kit\EM_KIT_Ajax();
        new Elementor_Magic_Kit\Load_Elementor();
        new Elementor_Magic_Kit\Generator();
        if (is_admin()) {
            new Elementor_Magic_Kit\Admin();
        }
    }
}

/**
 * Initialize main plugin
 *
 * @return \Elementor_Magic_Kit
 */
function elementor_magic_kit()
{
    return Elementor_Magic_Kit::init();
}

elementor_magic_kit();
