<?php

namespace MagicElements\Admin;

/**
 * Class Settings
 * 
 * Handles the settings page functionality for the Magic Kit plugin.
 * This class is responsible for:
 * - Loading and rendering the settings page template
 * - Managing plugin configuration options
 * - Providing settings page interface
 *
 * @package Elementor_Magic_Kit\Admin
 * @since 1.0.0
 */
class Settings
{
    /**
     * Render the settings page template
     * 
     * Loads and includes the settings page template file if it exists.
     * The template contains the HTML markup and form elements for
     * configuring plugin options.
     *
     * @return void
     */
    public function settings_page()
    {
        $template = __DIR__ . '/views/settings.php';

        if (file_exists($template)) {
            include $template;
        }
    }
}
