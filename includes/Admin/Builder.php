<?php

namespace MagicElements\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Builder
 * 
 * Handles the builder page functionality for the Magic Elements plugin.
 * This class is responsible for:
 * - Loading and rendering the builder page template
 * - Managing builder configuration options
 * - Providing builder interface
 *
 * @package MagicElements\Admin
 * @since 1.0.0
 */

class Builder
{
    /**
     * Render the builder page template
     * 
     * Loads and includes the builder page template file if it exists.
     * The template contains the HTML markup and form elements for
     * configuring builder options.
     *
     * @return void
     */
    public function builder_page()
    {
        $template = __DIR__ . '/views/builder.php';

        if (file_exists($template)) {
            include $template;
        }
    }
}
