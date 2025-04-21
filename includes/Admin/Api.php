<?php

namespace MagicElements\Admin;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

use MagicElements\Trait\Builder;

/**
 * Class Api
 * 
 * Handles REST API endpoints for the Magic Elements plugin.
 * This class is responsible for:
 * - Registering and managing REST API routes
 * - Handling builder post CRUD operations
 * - Managing builder cache
 * - Validating user permissions
 *
 * @package MagicElements\Admin
 * @since 1.0.0
 */
class Api {
    use Builder;

    /**
     * Initialize the API endpoints
     * 
     * Hooks into WordPress REST API initialization
     */
    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * Register REST API routes
     * 
     * Sets up endpoints for:
     * - GET /builder - List builder posts
     * - POST /builder - Create new builder post
     * - PUT /builder/{id} - Update existing builder post
     */
    public function register_routes() {
        register_rest_route('magic-elements/v1', '/builder', [
            [
                'methods' => 'GET',
                'callback' => [$this, 'get_builder_list'],
                'permission_callback' => [$this, 'check_permission'],
                'args' => [
                    'type' => [
                        'required' => true,
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'page' => [
                        'default' => 1,
                        'type' => 'integer',
                        'sanitize_callback' => 'absint'
                    ],
                    'per_page' => [
                        'default' => 10,
                        'type' => 'integer',
                        'sanitize_callback' => 'absint'
                    ]
                ]
            ],
            [
                'methods' => 'POST',
                'callback' => [$this, 'create_builder'],
                'permission_callback' => [$this, 'check_permission'],
                'args' => [
                    'title' => [
                        'required' => true,
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'type' => [
                        'required' => true,
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'status' => [
                        'default' => 'draft',
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'meta' => [
                        'type' => 'object',
                        'default' => []
                    ]
                ]
            ]
        ]);

        register_rest_route('magic-elements/v1', '/builder/(?P<id>\d+)', [
            [
                'methods' => 'PUT',
                'callback' => [$this, 'update_builder'],
                'permission_callback' => [$this, 'check_permission'],
                'args' => [
                    'title' => [
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'status' => [
                        'type' => 'string',
                        'sanitize_callback' => 'sanitize_text_field'
                    ],
                    'meta' => [
                        'type' => 'object'
                    ]
                ]
            ]
        ]);
    }

    /**
     * Check if user has permission to access the API
     * 
     * @return bool True if user can manage options
     */
    public function check_permission() {
        return current_user_can('manage_options');
    }

    /**
     * Get builder list with caching
     * 
     * @param \WP_REST_Request $request The request object
     * @return \WP_REST_Response|\WP_Error Response object or error
     */
    public function get_builder_list($request) {
        $type = $request->get_param('type');
        $page = $request->get_param('page');
        $per_page = $request->get_param('per_page');
        
        $cache_key = "magic_elements_builder_{$type}_{$page}_{$per_page}";
        $cached_data = get_transient($cache_key);
        
        if (false !== $cached_data) {
            return rest_ensure_response($cached_data);
        }

        $args = [
            'post_type' => 'magic_builder',
            'posts_per_page' => $per_page,
            'paged' => $page,
            'meta_query' => [
                [
                    'key' => '_display_type',
                    'value' => $type
                ]
            ]
        ];

        $query = new \WP_Query($args);
        $posts = $query->posts;
        
        $data = [
            'items' => array_map([$this, 'prepare_builder_item'], $posts),
            'total' => $query->found_posts,
            'total_pages' => $query->max_num_pages
        ];

        set_transient($cache_key, $data, HOUR_IN_SECONDS);
        
        return rest_ensure_response($data);
    }

    /**
     * Create new builder post
     * 
     * @param \WP_REST_Request $request The request object
     * @return \WP_REST_Response|\WP_Error Response object or error
     */
    public function create_builder($request) {
        $title = $request->get_param('title');
        $type = $request->get_param('type');
        $status = $request->get_param('status');
        $meta = $request->get_param('meta');

        $post_data = [
            'post_title' => $title,
            'post_type' => 'magic_builder',
            'post_status' => $status
        ];

        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            return new \WP_Error(
                'create_failed', 
                esc_html__('Failed to create builder post', 'magic-elements'), 
                ['status' => 500]
            );
        }

        // Update meta fields
        foreach ($meta as $key => $value) {
            update_post_meta($post_id, $key, $value);
        }

        // Clear cache
        $this->clear_builder_cache($type);

        return rest_ensure_response($this->prepare_builder_item(get_post($post_id)));
    }

    /**
     * Update builder post
     * 
     * @param \WP_REST_Request $request The request object
     * @return \WP_REST_Response|\WP_Error Response object or error
     */
    public function update_builder($request) {
        $post_id = $request->get_param('id');
        $title = $request->get_param('title');
        $status = $request->get_param('status');
        $meta = $request->get_param('meta');

        $post_data = [
            'ID' => $post_id
        ];

        if ($title) {
            $post_data['post_title'] = $title;
        }

        if ($status) {
            $post_data['post_status'] = $status;
        }

        $updated = wp_update_post($post_data);

        if (is_wp_error($updated)) {
            return new \WP_Error(
                'update_failed', 
                esc_html__('Failed to update builder post', 'magic-elements'), 
                ['status' => 500]
            );
        }

        // Update meta fields
        if ($meta) {
            foreach ($meta as $key => $value) {
                update_post_meta($post_id, $key, $value);
            }
        }

        // Clear cache
        $type = get_post_meta($post_id, '_display_type', true);
        $this->clear_builder_cache($type);

        return rest_ensure_response($this->prepare_builder_item(get_post($post_id)));
    }

    /**
     * Prepare builder item for response
     * 
     * @param \WP_Post $post The post object
     * @return array Formatted post data
     */
    private function prepare_builder_item($post) {
        return [
            'id' => $post->ID,
            'title' => $post->post_title,
            'status' => $post->post_status,
            'type' => get_post_meta($post->ID, '_display_type', true),
            'meta' => [
                'is_active' => get_post_meta($post->ID, '_is_active', true),
                'display_by' => get_post_meta($post->ID, '_display_by', true),
                'display_on' => get_post_meta($post->ID, '_display_on', true)
            ],
            'date' => $post->post_date,
            'modified' => $post->post_modified
        ];
    }

    /**
     * Clear builder cache
     * 
     * @param string $type The builder type
     */
    private function clear_builder_cache($type) {
        global $wpdb;
        
        $transients = $wpdb->get_col(
            $wpdb->prepare(
                "SELECT option_name FROM $wpdb->options WHERE option_name LIKE %s",
                $wpdb->esc_like('_transient_magic_elements_builder_' . $type) . '%'
            )
        );

        foreach ($transients as $transient) {
            $transient_name = str_replace('_transient_', '', $transient);
            delete_transient($transient_name);
        }
    }
}