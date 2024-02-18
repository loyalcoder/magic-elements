<?php

namespace Pkun\Frontend;

/**
 * Shortcode class
 */
class Shortcode
{
    /**
     * Initialize class
     */
    public function __construct()
    {
        add_shortcode('EM_KIT_shortcode', [$this, 'EM_KIT_shortcode']);
        add_shortcode('EM_KIT_enquiry', [$this, 'EM_KIT_enquiry']);
    }

    /**
     * Shortcode
     *
     * @param array $atts
     * @param string $content
     * @return string
     */
    public function EM_KIT_shortcode($atts, $content = null)
    {
        wp_enqueue_script('pkun-script');
        wp_enqueue_style('pkun-style');

        ob_start();

        include __DIR__ . '/views/shortcode.php';

        return ob_get_clean();
    }

    /**
     * Shortcode
     *
     * @param array $atts
     * @param string $content
     * @return string
     */
    public function EM_KIT_enquiry($atts, $content = null)
    {
        wp_enqueue_script('pkun-enquiry-script');
        wp_enqueue_style('pkun-style');

        // wp_localize_script('pkun-enquiry-script', 'EM_KIT_data', [
        //     'ajax_url' => admin_url('admin-ajax.php'),
        //     'message' => __('Message from enquiry form', 'pkun'),
        // ]);

        ob_start();

        include __DIR__ . '/views/enquiry.php';

        return ob_get_clean();
    }
}
