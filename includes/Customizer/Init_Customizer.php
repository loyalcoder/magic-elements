<?php

namespace Pkun\Customizer;

use Kirki;

if (!defined('ABSPATH')) {
    exit;
}

class Init_Customizer
{
    public function __construct()
    {
        $this->initPanel();
    }

    /**
     * Init panel
     *
     * @return void
     */
    public function initPanel()
    {
        Kirki::add_config('EM_KIT_config', [
            'capability'  => 'edit_theme_options',
            'option_type' => 'theme_mod',
        ]);

        Kirki::add_panel('EM_KIT_config_panel', [
            'priority'    => 10,
            'title'       => esc_html__('Pkun Options', 'pkun'),
            'description' => esc_html__('Pkun Options description', 'pkun'),
        ]);
    }
}
