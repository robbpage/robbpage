<?php

function load_css() {
    wp_register_style('main', get_template_directory_uri() . '/css/main.css', array(), false, 'all');
    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), false, 'all');
    wp_enqueue_style('main');
    wp_enqueue_style('bootstrap');
}
add_action('wp_enqueue_scripts', 'load_css');

function load_js() {
    wp_register_script('main', get_template_directory_uri() . '/js/main.js', array(), false, true);
    wp_register_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', 'jquery', false, true);
    wp_enqueue_script('jquery');
    wp_enqueue_script('main');
    wp_enqueue_script('bootstrap');
}
add_action('wp_enqueue_scripts', 'load_js');

?>