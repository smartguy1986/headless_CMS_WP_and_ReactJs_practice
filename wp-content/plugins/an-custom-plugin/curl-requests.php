<?php
// curl-requests.php

if (!class_exists('CustomCurlRequests')) {
    class CustomCurlRequests
    {
        public static function makeGetRequest($url, $headers = array(), $method = 'GET', $body = null, $options = array())
        {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

            $response = curl_exec($ch);

            if ($response === false) {
                // cURL request failed
                $error = curl_error($ch);
                curl_close($ch);
                return new WP_Error('curl_error', $error);
            }

            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode >= 400) {
                // HTTP error response
                curl_close($ch);
                return new WP_Error('http_error', "HTTP error: $httpCode");
            }

            curl_close($ch);

            $decodedResponse = json_decode($response);

            if (json_last_error() !== JSON_ERROR_NONE) {
                // JSON decoding error
                return new WP_Error('json_error', 'Error decoding JSON response');
            }

            return $decodedResponse;
        }

        // Add more methods for different types of requests (POST, PUT, etc.) if needed
    }
}
?>