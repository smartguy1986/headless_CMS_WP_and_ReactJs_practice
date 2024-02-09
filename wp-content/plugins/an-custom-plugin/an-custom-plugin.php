<?php
/*
Plugin Name: AN Endpoints Plugin
Description: Custom REST Endpoints for React Frontend
Version: 1.0
Author: Arijit Nandi
*/

include_once(plugin_dir_path(__FILE__) . 'url-config.php');
require_once(plugin_dir_path(__FILE__) . 'curl-requests.php');
// Define constants for file paths
define('AN_ENDPOINTS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('AN_ENDPOINTS_PLUGIN_URL', plugin_dir_url(__FILE__));

// Load dependencies
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/images/*.php') as $file) {
    require_once $file;
}
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/general/*.php') as $file) {
    require_once $file;
}

// Activation hook
register_activation_hook(__FILE__, 'an_endpoints_activation');

function an_endpoints_activation() {
    // Perform activation tasks if needed
    // Example: create database tables, set default options, etc.
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'an_endpoints_deactivation');

function an_endpoints_deactivation() {
    // Perform deactivation tasks if needed
    // Example: clean up temporary data, etc.
}

// // Load custom endpoints
// add_action('rest_api_init', 'an_endpoints_register');

// function an_endpoints_register() {
//     // Register your custom endpoints here
//     $logo_endpoint = new CustomLogoEndpoint();
//     $logo_endpoint->register();
// }
