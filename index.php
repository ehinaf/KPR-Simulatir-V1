<?php
/*
Plugin Name: KPR Simulation V1
Plugin URI: https://github.com/naf/nafkpr
Description: Plugin simulasi KPR untuk Wordpress
Version: 1.2
Author: Nur Achmad Fauzi
Author URI: https://github.com/nurachmadfauzi
*/

// Register the script
wp_register_script('jquery', 'https://code.jquery.com/jquery-3.6.1.js');
wp_register_script('accounting_js_script', plugins_url('/js/accounting.js', __FILE__));
wp_register_script('jquery_inputmask_bundle', plugins_url('js/jquery.inputmask.bundle.min.js', __FILE__));
wp_register_script('jquery_inputmask_binding', plugins_url('js/inputmask.binding.min.js', __FILE__));
wp_register_script('popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js');
wp_register_script('jquery_bootstrap_bundle', "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
wp_register_script('tooltip', "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/tooltip.js");
wp_register_script('faicon', "https://use.fontawesome.com/releases/v5.15.4/js/all.js");
wp_register_script('kpr_js_script', plugins_url('/js/app.js', __FILE__));
wp_register_style('kpr_bootstrap_css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css');
wp_register_style('kpr_simulation_css', plugins_url('/css/styles.css', __FILE__));
wp_register_style('font_poppins', 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');




function load_form_kpr_konven()
{
    include(plugin_dir_path(__FILE__) . 'views/form_kpr_konven.php');
}

function load_form_kpr_syariah()
{
    include(plugin_dir_path(__FILE__) . 'views/form_kpr_syariah.php');
}

function bootstrap_styles()
{

    if (wp_style_is('bootstrap-main')) {

        wp_enqueue_style('kpr_simulation_css');
    }
}
add_action('wp_enqueue_scripts', 'bootstrap_styles');


wp_enqueue_script('accounting_js_script');
wp_enqueue_script('jquery');
wp_enqueue_script('popper');
wp_enqueue_script('jquery_bootstrap_bundle');
wp_enqueue_script('tooltip');
wp_enqueue_script('faicon');
wp_enqueue_script('jquery_inputmask_bundle');
wp_enqueue_script('jquery_inputmask_binding');
wp_enqueue_script('kpr_js_script');
wp_enqueue_style('kpr_bootstrap_css');
wp_enqueue_style('kpr_simulation_css');
wp_enqueue_style('font_poppins');

add_shortcode('kpr_konven_form', 'load_form_kpr_konven');
add_shortcode('kpr_syariah_form', 'load_form_kpr_syariah');
