<?php
/**
 * Elementor 360ty WordPress Plugin
 *
 * @package Elementor360ty
 *
 * Plugin Name: 360ty Elementor Addon
 * Description: Elementor Widgets for 360ty Pano2VR 360 Panorama Tours
 * Plugin URI:  https://360ty.world/api/elementor-tourbuilder
 * Version:     1.1.8
 * Elementor tested up to: 3.6.5
 * Elementor Pro tested up to: 3.6.5
 * Author:      360ty - Multimediafabrik
 * Author URI:  https://360ty.world
 * Text Domain: 360ty
 */

define( 'ELEMENTOR_360TY', __FILE__ );

/**
 * Include the Elementor_360ty class.
 */
require plugin_dir_path( ELEMENTOR_360TY ) . 'class-elementor-360ty.php';
require plugin_dir_path( ELEMENTOR_360TY ) . 'appsero/src/Client.php';
/**
 * Initialize the plugin tracker
 *
 * @return void
 */
function appsero_init_tracker_360ty() {

	if ( ! class_exists( 'Appsero\Client' ) ) {
		require_once __DIR__ . 'appsero/src/Client.php';
	}
	$appsero = new Appsero\Client( '0598eaf7-17fa-4468-92e6-052487308ae4', '360ty', __FILE__ );
	

	// Active insights
	$appsero->insights()->hide_notice()->init();
	// Active automatic updater
	$appsero->updater();
}

appsero_init_tracker_360ty();