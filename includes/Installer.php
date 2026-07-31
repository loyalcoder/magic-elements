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
        $this->register_elementor_cpt_support();
        // CPT rewrite must be flushed so Elementor preview URLs resolve (avoid 404).
        flush_rewrite_rules();
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
        update_option('magic_elements_flush_rewrite', MAGIC_ELEMENTS_VERSION);
    }

    /**
     * Ensure Elementor can edit Magic Builder templates.
     *
     * @return void
     */
    public function register_elementor_cpt_support()
    {
        $cpt_support = get_option('elementor_cpt_support', ['page', 'post']);

        if (!is_array($cpt_support)) {
            $cpt_support = ['page', 'post'];
        }

        if (!in_array('me_builder', $cpt_support, true)) {
            $cpt_support[] = 'me_builder';
            update_option('elementor_cpt_support', $cpt_support);
        }
    }
}
