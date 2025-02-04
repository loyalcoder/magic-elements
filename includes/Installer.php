<?php

namespace Elementor_Magic_Kit;

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

class Installer
{
    /**
     * Run the installer to set up plugin version and database tables.
     *
     * @return void
     */
    public function run()
    {
        $this->add_version();
        $this->create_tables();
    }

    /**
     * Store the plugin installation time and version in the WordPress options table.
     *
     * @return void
     */
    public function add_version()
    {
        $installed = get_option('EM_KIT_installed');

        if (!$installed) {
            update_option('EM_KIT_installed', time());
        }

        update_option('EM_KIT_version', EM_KIT_VERSION);
    }

    /**
     * Create custom database tables required by the plugin.
     *
     * @return void
     */
    public function create_tables()
    {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        $checkout_scheme = "CREATE TABLE IF NOT EXISTS `{$wpdb->prefix}EM_KIT_boilerplate` (
            `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
            `name` varchar(250) DEFAULT NULL,
            `value` varchar(250) DEFAULT NULL,
            `create_at` datetime NOT NULL,
            PRIMARY KEY (`id`)
          ) $charset_collate";

        if (!function_exists('dbDelta')) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        dbDelta($checkout_scheme);
    }
}
