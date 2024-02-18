<?php

namespace Elementor_Magic_Kit;

class Admin
{
    /**
     * Class initialize
     */
    function __construct()
    {
        new Admin\Menu();
        new Admin\Handler();
    }
}
