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

        register_rest_route(
            $this->base,
            '/banners',
            array(
                'methods' => 'GET',
                'callback' => array($this, 'an_image_service_get_banner_images'),
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

    public function an_image_service_get_banner_images($request)
    {
        if (class_exists('anCustomImagesAPI')) {
            $myAPI = new anCustomImagesAPI();
            return $myAPI->an_image_service_get_banner_images();
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
            // Logic for the custom logo endpoint
            // Get the attachment ID for the logo
            $logo_id = get_theme_mod('custom_logo');

            if ($logo_id) {
                // Retrieve the URL of the logo
                $logo_url = wp_get_attachment_image_src($logo_id, 'full');

                if ($logo_url) {
                    return new WP_REST_Response(array('status' => 0, 'message' => 'Success', 'data' => $logo_url[0]), 200);
                }
            }

            return new WP_REST_Response(array('status' => 0, 'message' => 'Error', 'data' => $logo_url), 400);

        }

        public function an_image_service_get_banner_images()
        {
            $image_arr = [];

            // Use a custom query to retrieve banner posts
            $loop = new WP_Query(array('post_type' => 'banner', 'nopaging' => true));

            while ($loop->have_posts()):
                $loop->the_post();

                // Get the banner images from ACF field
                $images = get_field('banner_image');
                $tagline = get_field('banner_text');

                if ($images):
                    // $image_arr[] = $images;
                    $new_arr = array(
                        'ID' => $images['ID'],
                        'title' => $images['title'],
                        "filename" => $images['filename'],
                        "url" => $images['url'],
                        "tagline" => $tagline,
                        "date" => $images['date'],
                    );
                    $image_arr[] = $new_arr;

                endif;

            endwhile;

            // Sort the array by date in ascending order
            usort($image_arr, function ($a, $b) {
                return strtotime($a['date']) - strtotime($b['date']);
            });

            // Reset post data to restore the original query
            wp_reset_postdata();

            // Return the image array as a JSON response
            $response = new WP_REST_Response(array('status' => 0, 'message' => 'Success', 'data' => $image_arr), 200);
            return $response;


        }
    }
}