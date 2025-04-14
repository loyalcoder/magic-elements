<?php
if (!defined('ABSPATH')) {
    exit;
}

foreach ($query as $post) {
    include __DIR__ . '/loop/default.php';
}

