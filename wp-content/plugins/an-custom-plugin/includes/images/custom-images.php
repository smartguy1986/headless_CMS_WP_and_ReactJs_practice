<?php
if (!defined('ABSPATH'))
    exit;

add_action('rest_api_init', 'an_register_rest_images_service', 20);

function an_register_rest_images_service()
{
    $custom_image_controller = new customImage_API_Controller();
    $custom_image_controller->register_routes();
}


class customImage_API_Controller extends WP_REST_Controller
{
    protected $base = "an/images";
    public function register_routes()
    {
        register_rest_route(
            $this->base,
            '/sitelogo',
            array(
                'methods' => 'GET',
                'callback' => array($this, 'an_image_service_get_custom_logo'),
                // 'permission_callback' => array($this, 'check_permissions'),
            )
        );
    }

    public function an_image_service_get_custom_logo($request)
    {
        if (class_exists('anCustomImagesAPI')) {
            $myAPI = new anCustomImagesAPI();
            return $myAPI->an_image_service_get_custom_logo();
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'Success', 'data' => "No route was found matching this URL"), 200);
    }

    public function check_permissions()
    {
        return current_user_can('read'); // Adjust permissions as needed
    }
}

if (!class_exists('anCustomImagesAPI')) {

    class anCustomImagesAPI
    {
        public function __construct()
        {

        }
        public function an_image_service_get_custom_logo()
        {
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $custom_logo_data = wp_get_attachment_image_src( $custom_logo_id , 'full' );
            $custom_logo_url = $custom_logo_data;

            return json_encode($custom_logo_id);

        }
    }
}