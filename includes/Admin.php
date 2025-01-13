<?php

namespace MagicElements;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Admin
 * 
 * Main admin class that initializes all admin functionality.
 * This class is responsible for:
 * - Loading admin menu functionality
 * - Loading AJAX handlers
 * - Managing admin-side plugin components
 *
 * @package Magic_Elements
 * @since 1.0.0
 */
class Admin
{
    /**
     * Class initialize
     * 
     * Instantiates the admin menu and AJAX handler classes
     * to set up admin functionality.
     */
    function __construct()
    {
        new Admin\Menu();
        new Admin\Ajax();
    }
}
