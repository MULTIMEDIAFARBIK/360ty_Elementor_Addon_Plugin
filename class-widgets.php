<?php
/**
 * Widgets class.
 *
 * @category   Class
 * @package    Elementor360ty
 * @subpackage WordPress
 * @author     360ty link(https://360ty.world,
 *             360ty)
 * @copyright  2020 Multimediafabrik 360ty
 * @license    
 * @link       link(https://360ty.world)
 * @since      1.0.0
 * php version 7.0
 */

namespace Elementor360ty;

// Security Note: Blocks direct access to the plugin PHP files.
defined( 'ABSPATH' ) || die();

/**
 * Class Plugin
 *
 * Main Plugin class
 *
 * @since 1.0.0
 */
class Widgets {

	/**
	 * Instance
	 *
	 * @since 1.0.0
	 * @access private
	 * @static
	 *
	 * @var Plugin The single instance of the class.
	 */
	private static $instance = null;

	/**
	 * Instance
	 *
	 * Ensures only one instance of the class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return Plugin An instance of the class.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
	public function widget_scripts() {
	}
	/**
	 * Include Widgets files
	 *
	 * Load widgets files
	 *
	 * @since 1.0.0
	 * @access private
	 */
	private function include_widgets_files() {
		require_once 'widgets/class-tourbuilder.php';
	}
	/**
	 * Register Categories
	 *
	 * Register new Elementor categories.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function register_categories(){
		\Elementor\Plugin::instance()->elements_manager->add_category(
			'360ty',
			[
				'title' => __( '360ty', '360ty' ),
				'icon' => 'fas fa-globe',
			]
		);
	}
	/**
	 * Register Widgets
	 *
	 * Register new Elementor widgets.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	
	public function register_widgets(){
		// It's now safe to include Widgets files.
		$this->include_widgets_files();

		// Register the plugin widget classes.
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new Widgets\Tourbuilder() );
	}
	
	/**
	 *  Plugin class constructor
	 *
	 * Register plugin action hooks and filters
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {
		// Register the widgets.
		add_action( 'elementor/elements/categories_registered', array( $this, 'register_categories' ) );
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
	}
}

// Instantiate the Widgets class.
Widgets::instance();