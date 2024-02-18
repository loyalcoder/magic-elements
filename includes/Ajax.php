<?php

namespace Elementor_Magic_Kit;

/**
 * Ajax class
 */
class EM_KIT_Ajax
{
    /**
     * Initialize ajax class
     */
    public function __construct()
    {
        add_action('wp_ajax_EM_KIT_enquiry', [$this, 'EM_KIT_enquiry']);
        add_action('wp_ajax_nopriv_EM_KIT_enquiry', [$this, 'EM_KIT_enquiry']);
    }

    /**
     * Perform enquiry operation
     *
     * @return array
     */
    public function EM_KIT_enquiry()
    {
        if (!wp_verify_nonce($_REQUEST['_wpnonce'], 'pkun-enquiry-form')) {
            wp_send_json_error([
                'message' => __('Nonce verification failed!', 'pkun')
            ]);
        }

        wp_send_json_success([
            'message' => __('Perform your operation', 'pkun'),
            'data'    => $_REQUEST,
        ]);
    }
}
