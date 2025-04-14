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
        add_filter('elementor/documents/post_type_support', [$this, 'add_elementor_support'], 10, 2);
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

        update_option('magicelements_version', MAGIC_ELEMENTS_VERSION);
    }

    public function add_elementor_support($post_type_support, $post_type)
    {
        if ('magic_builder' === $post_type) {
            return true;
        }
        return $post_type_support;
    }
}
