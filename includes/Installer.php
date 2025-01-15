<?php

namespace MagicElements;

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
    }

    /**
     * Store the plugin installation time and version in the WordPress options table.
     *
     * @return void
     */
    public function add_version()
    {
        $installed = get_option('magicelements_installed');

        if (!$installed) {
            update_option('magicelements_installed', time());
        }

        update_option('magicelements_version', MAGICELEMENTS_VERSION);
    }
}
