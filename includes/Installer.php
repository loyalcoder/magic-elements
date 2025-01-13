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
        $installed = get_option('magic_elements_installed');

        if (!$installed) {
            update_option('magic_elements_installed', time());
        }

        update_option('magic_elements_version', MAGIC_ELEMENTS_VERSION);
    }
}
