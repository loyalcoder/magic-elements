<?php

namespace MagicElements;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Admin
 * 
 * Handles all admin functionality for Magic Elements.
 * This includes:
 * - Initializing the admin menu functionality.
 * - Initializing AJAX handlers.
 * - Managing admin-specific plugin components.
 *
 * @package MagicElements
 * @since 1.0.0
 */
class Admin
{
    /**
     * Initialize Admin class
     * 
     * Instantiates the admin menu and AJAX handler classes
     * to set up admin functionality.
     */
    public function __construct()
    {
        new \MagicElements\Admin\Menu();
        new \MagicElements\Admin\Ajax();
    }
}
