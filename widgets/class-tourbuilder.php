<?php
namespace Elementor360ty\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Control_Base_Units;
use Elementor\Base_Data_Control;
if ( ! defined( 'ABSPATH' ) ) {
	// Exit if accessed directly.
	exit;
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Tourbuilder extends Widget_Base{
	/**
	 * Class constructor.
	 *
	 * @param array $data Widget data.
	 * @param array $args Widget arguments.
	 */
	
	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		wp_register_script( 'pano2vr_player', 'https://storage.googleapis.com/api.360ty.cloud/pano2vr_player.js', [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'skin', 'https://storage.googleapis.com/api.360ty.cloud/skin.js', [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'three',plugins_url('assets/js/three.min.js', dirname(__FILE__) ), [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'class-360ty',"https://storage.googleapis.com/api.360ty.cloud/Elementor-tour-widget/class-elementor-360ty.js", [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'jQuery','https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', [ 'elementor-frontend' ], '1.0.0', true );
		//wp_register_style( '360ty_styles',plugins_url('assets/css/pano_styles.css', dirname(__FILE__) ), ['elementor-frontend'], '1.0.0' );
	}
	

	/**
	 * Retrieve the widget name.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return '360ty Tourbuilder';
	}

	/**
	 * Retrieve the widget title.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return string Widget title.
	 */
	public function get_title() {
		return __( '360ty Tourbuilder', 'tour-builder' );
	}

	/**
	 * Retrieve the widget icon.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'fas fa-globe';
	}

	/**
	 * Retrieve the list of categories the widget belongs to.
	 *
	 * Used to determine where to display the widget in the editor.
	 *
	 * Note that currently Elementor supports only one category.
	 * When multiple categories passed, Elementor uses the first one.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return ['360ty'];
	}
	
	/**
	 * Enqueue styles.
	 */
	public function get_style_depends() {
		$styles = [];//['pano_styles'];
	
		return $styles;
	}
	/**
	 * Enqueue scripts.
	 */
	public function get_script_depends() {
		//$scripts = ['pano2vr_player','three','skin','init','setup_pano','share_buttons','class-360ty'];
		$scripts = ['pano2vr_player','three','skin','class-360ty','jQuery'];
	
		return $scripts;
	}

	/**
	 * Register the widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	
	protected function _register_controls() {
		
		//basetour settings
		
		$this->start_controls_section(
			'base_options',
			array(
				'label' => __( 'Tour Options', 'tour-builder' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			)
		);
		$this->add_control(
			'note',
			[
				'label' => __( 'Info', 'tour-builder' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'raw' => __( 'Use the middle mouse button, to move in the tour!', 'tour-builder' ),
				'content_classes' => '360ty_tourbuilder_controls_info elementor-control-field-description',
			]
		);
		$this->add_control(
				'basepath',
				[
				'label'   => __( 'Basepath', 'tour-builder' ),
				'type'    => Controls_Manager::TEXT,
				'default' => __( 'https://bregenzsommer.360ty.cloud/', 'tour-builder' ),
				'description' => ' base URI of the tour, where the pano2vr tour files are located. (http://*/)',
				]
		);
		$this->add_control(
			'suffix',
			[
				'type'    => Controls_Manager::HIDDEN,
				'default' => __(substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyz'), 0, 8), 'tour-builder' ),
			]
		);
		/*$this->add_control(
			'insert_current_target_values',
			[
				'text' => 'insert current Values',
				'show_label' => false,
				'discription' => "click to insert the current values of the preview",
				'event' =>
			]	
		);*/
		$this->add_control(
			'startnodeID',
			[
				'label'   => __( 'start Node', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 1,
				'step' => 1,
				'default' => 1,
				'description' => 'start node ID of the desired 360 image.'
			]
		);
		/*
		$this->add_control(
				'set_target_values',
				[
				'type' => \Elementor\Controls_Manager::BUTTON,
				'label' => '',
				'text' => 'set Target values',
				'event' => 'elementor:editor:setTargetValues',
				'description' => 'set the current values of the tour as Target values'
				]
		);
		*/
		$this->add_control(
				'fov_target',
				[
				'label' => __( 'Target FOV', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => 1,
								'max' => 100,
								'step' => 1,
								],
							],
				'input_type' => 'number',
				'description' => 'Field of View/Zoom target value of the Movement Animation in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 65,
							],
				]
		);
		$this->add_control(
				'tilt_target',
				[
				'label' => __( 'Target Tilt', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => -90,
								'max' => 90,
								'step' => 1,
								],
							],
				'input_type' => 'number',
				'description' => 'Vertical target value of the Movement Animation in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				]
		);
		$this->add_control(
				'pan_target',
				[
				'label' => __( 'Target Pan', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
							'deg' => [
							'min' => -180,
							'max' => 180,
							'step' => 1,
							],
				],
				'input_type' => 'number',
				'description' => 'Horizontal target value of the Movement Animation in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				]
		);
		$this->add_control(
				'roll',
				[
				'label' => __( 'Roll', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
				'deg' => [
				'min' => -180,
				'max' => 180,
				'step' => 1,
				],
				],
				'input_type' => 'number',
				'description' => 'Tilts the tour over by x degree',
				'default' => [
				'unit' => 'deg',
				'size' => 0,
				],
				]
		);
		$this->end_controls_section();
		//movement options
		
		$this->start_controls_section(
				'movement_options',
				array(
						'label' => __( 'Movement Options', 'tour-builder' ),
						'tab' => Controls_Manager::TAB_CONTENT,
				)
		);
		$this->add_control(
				'show_movement',
				[
				'label' => __( 'Movement Animation', 'tour-builder' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'tour-builder' ),
				'label_off' => __( 'Hide', 'tour-builder' ),
				'return_value' => 'true',
				'default' =>'false',
				'description' => '"Fly-in" at the beginning of the tour from the Movement values to the Tour values',
				]
		);
		/*$this->add_control(
				'set_start_values',
				[
				'type' => \Elementor\Controls_Manager::BUTTON,
				'label' => '',
				'text' => 'set Start values',
				'event' => 'setStartValues',
				'description' => 'set the current values of the tour as Start values',
				'condition'=>[
				'			show_movement' => 'true',
							],
				],
		);
		*/
		$this->add_control(
				'fov_start',
				[
				'label' => __( 'Start FOV', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => 1,
								'max' => 100,
								'step' => 1,
								],
						],
				'input_type' => 'number',
				'description' => 'Field of View/Zoom start value of the Movement Animation in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 65,
							],
				'condition'=>[
							'show_movement' => 'true',
							],
				]
		);
		$this->add_control(
				'tilt_start',
				[
				'label' => __( 'Start Tilt', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => -90,
								'max' => 90,
								'step' => 1,
								],
						],
				'input_type' => 'number',
				'description' => 'Vertical start value of the Movement Animation  in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				'condition'=>[
							'show_movement' => 'true',
							],
				]
		);
		$this->add_control(
				'pan_start',
				[
				'label' => __( 'Start Pan', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => -180,
								'max' => 180,
								'step' => 1,
								],
						],
				'input_type' => 'number',
				'description' => 'Horizontal start value of the Movement Animation in degree',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				'condition'=>[
							'show_movement' => 'true',
							],
				]
		);
		$this->add_control(
				'movement_speed',
				[
				'label'   => __( 'Speed', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 0.1,
				'step' => 0.1,
				'default' => 1,
				'description' => 'Speed of the movement.Value 0.5 = 0.5x quicker, value 2 = 2x quicker, value 3 = 3x quicker...',
				'condition'=>[
							'show_movement' => 'true',
							],
				],
				);
		$this->add_control(
				'movement_projection_type',
				[
				'label' => __( 'Projection Type', 'tour-builder' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'Rectilinear',
				'options' => [
					'Rectilinear'  => __( 'Rectilinear', 'tour-builder' ),
					'Stereographic' => __( 'Stereographic  (Little Planet)', 'tour-builder' ),
					'Fisheye' => __( 'Fisheye', 'tour-builder' ),
				],
				'description' => 'Projection type of the Movement',
				'condition'=>[
							'show_movement' => 'true',
							],				
				]
		);
		$this->add_control(
				'movement_delay',
				[
				'label'   => __( 'Delay', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 0,
				'step' => 100,
				'default' => 0,
				'description' => 'Starts the movement after x milliseconds',
				'condition'=>[
							'show_movement' => 'true',
							],
				]
		);
		$this->add_control(
				'movement_lock_controls',
				[
				'label' => __( 'Lock controls', 'tour-builder' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'Mousewheel',
				'options' => [
					'all' => __( 'all', 'tour-builder' ),
					'none' => __( 'none', 'tour-builder' ),
					'Mousewheel'  => __( 'Mousewheel', 'tour-builder' ),
					'Mouse' => __( 'Mouse', 'tour-builder' ),
					'Keyboard' => __( 'Keyboard', 'tour-builder' ),
					'Keyboard_Mousewheel' => __( 'Keyboard+Mousewheel', 'tour-builder' ),
					],
				'description' => 'Which controls should be locked while the movement is active',
				'condition'=>[
							'show_movement' => 'true',
							],
				]
		);
		$this->end_controls_section();
		//additional options
		$this->start_controls_section(
				'additional_options',
				array(
						'label' => __( 'Additional options', 'tour-builder' ),
						'tab' => Controls_Manager::TAB_CONTENT,
				)
		);
		$this->add_responsive_control(
				'single_image',
				[
					'label' => __( 'Remove Hotspots', 'tour-builder' ),
					'type' => Controls_Manager::SWITCHER,
					'label_on' => __( 'yes', 'tour-builder' ),
					'label_off' => __( 'no', 'tour-builder' ),
					'return_value' => 'true',
					'devices' => ['desktop','tablet','mobile'],
					'desktop_default' => "no",
					'mobile_default' => "no",
					'tablet_default' => "no",
					'discription' => 'If only the start hotspot should be displayed. Removes all nodes to change hotspots.',
				]
		);
		$this->add_responsive_control(
				'share_buttons',
				[
				'label' => __( 'Show share Buttons', 'tour-builder' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'yes', 'tour-builder' ),
				'label_off' => __( 'no', 'tour-builder' ),
				'return_value' => 'true',
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "no",
				'mobile_default' => "no",
				'tablet_default' => "no",
				'discription' => 'Include share buttons for facebook and as an URL  to the current location',
				]
		);
		/*
		$this->add_control(
				'slides_url',
				[
				'label'   => __( 'Slides URL', 'tour-builder' ),
				'type'    => Controls_Manager::TEXT,
				'description' => 'URL to Slides page',
				'default' => "",
				]
		);
		*/
		$this->add_responsive_control(
				'show_impressum',
				[
				'label' => __( 'Show impressum', 'tour-builder' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'yes', 'tour-builder' ),
				'label_off' => __( 'no', 'tour-builder' ),
				'return_value' => 'true',
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "yes",
				'mobile_default' => "yes",
				'tablet_default' => "yes",
				]
		);
		
		
		$this->end_controls_section();
		//tour style
		$this->start_controls_section(
				'style_tour',
				[
				'label' => __( 'Tour', 'tour-builder' ),
				'tab' => Controls_Manager::TAB_STYLE,
				]
		);
		$this->add_responsive_control(
				'dimensions_parent',
				[
				'label' => __( 'Dimension relative to', 'tour-builder' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
							'section_dim' => __( 'Section', 'tour-builder' ),
							'window_dim' => __( 'Whole site', 'tour-builder' ),
							],
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "section_dim",
				'mobile_default' => "section_dim",
				'tablet_default' => "section_dim",
				],
		);
		$this->add_responsive_control(
				'tour_width',
				[
				'label' => __( 'Width', 'tour-builder' ),
				'show_label' => true,
				'type' => Controls_Manager::TEXT,
				'description' => __( 'Width of the Tour. Use % to responsively use x% of the above chosen dimensions. Units: px, %, (default unit = px) ', 'tour-builder' ),
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "100%",
				'mobile_default' => "100%",
				'tablet_default' => "100%",
				],
				
		);
		$this->add_responsive_control(
				'aspect_ratio',
				[
				'label' => __( 'Aspect Ratio', 'tour-builder' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
							'1:1' => __( '1:1', 'tour-builder' ),
							'3:2' => __( '3:2', 'tour-builder' ),
							'4:3' => __( '4:3', 'tour-builder' ),
							'16:9' => __( '16:9', 'tour-builder' ),
							'21:9' => __( '21:9', 'tour-builder' ),
							'9:16' => __( '9:16', 'tour-builder' ),
							'custom' => __('Custom Aspect Ratio', 'tour-builder'),
							'custom_height' => __('Custom height', 'tour-builder'),
							],
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "16:9",
				'mobile_default' => "custom_height",
				'tablet_default' => "custom_height",
				]
		);
		$this->add_responsive_control(
				'custom_aspect_ratio',
				[
				'label'   => __( 'Custom Aspect Ratio', 'tour-builder' ),
				'type'    => Controls_Manager::TEXT,
				'devices' => ['desktop','tablet','mobile'],
				]
		);
		$this->add_responsive_control(
				'tour_height',
				[
				'label' => __( 'Custom Height', 'tour-builder' ),
				'show_label' => true,
				'type' => Controls_Manager::TEXT,
				'description' => __( 'Width of the Tour. Use % to responsively use x% of the above chosen dimensions. Units: px, %, (default unit = px) ', 'tour-builder' ),
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "50%",
				'mobile_default' => "50%",
				'tablet_default' => "50%",
				]
		);
		$this->add_responsive_control(
				'horizontal_alignment',
				[
					'label' => __( 'Horizontal Alignment', 'tour-builder' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
							'left' => __( 'Left', 'tour-builder' ),
							'center' => __( 'Center', 'tour-builder' ),
							'right' => __( 'Right', 'tour-builder' ),
							],
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "center",
				'mobile_default' => "center",
				'tablet_default' => "center",
				],
		);
		$this->end_controls_section();
		//sharebutton style
		/*
		$this->start_controls_section(
				'style_shareButtons',
				[
				'label' => __( 'Share Buttons', 'tour-builder' ),
				'tab' => Controls_Manager::TAB_STYLE,
				]
		);

		$this->end_controls_section();
		$this->start_controls_section(
				'style_hotspots',
				[
				'label' => __( 'Hotspots', 'tour-builder' ),
				'tab' => Controls_Manager::TAB_STYLE,
				]
		);
		
		$this->end_controls_section();
		*/
	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function render() {
		$fov_target = isset($_POST['fov_target']) ? $_POST['fov_target'] : null;
		$tilt_target = isset($_POST['$tilt_target']) ? $_POST['$tilt_target'] : null;
		$pan_target = isset($_POST['$pan_target']) ? $_POST['$pan_target'] : null;
		$settings = $this->get_settings_for_display();
		$params = [
				"basepath" => "'".$settings["basepath"]."'",
				"node" => $settings["startnodeID"],
				"fov_start" => isset($settings["fov_start"]["size"]) ? $settings["fov_start"]["size"] : 0,
				"tilt_start" => isset($settings["tilt_start"]["size"]) ? $settings["tilt_start"]["size"] : 0,
				"pan_start" => isset($settings["pan_start"]["size"]) ? $settings["pan_start"]["size"] : 0,
				"fov_target" => $settings["fov_target"]["size"],
				"tilt_target" => $settings["tilt_target"]["size"],
				"pan_target" => $settings["pan_target"]["size"],
				"tour_dimensions" =>[
						"desktop" => [
													"width" =>$settings["tour_width"],
													"aspect_ratio" => $settings["aspect_ratio"],
													"custom_aspect_ratio" => $settings["custom_aspect_ratio"],
													"tour_height" => $settings["tour_height"],
													],
						"tablet" => [
													"width" => $settings["tour_width_tablet"],
													"aspect_ratio" => $settings["aspect_ratio_tablet"],
													"custom_aspect_ratio" => $settings["custom_aspect_ratio_tablet"],
													"tour_height" => $settings["tour_height_tablet"],
													],
						"mobile" => [
													"width" => $settings["tour_width_mobile"],
													"aspect_ratio" => $settings["aspect_ratio_mobile"],
													"custom_aspect_ratio" => $settings["custom_aspect_ratio_mobile"],
													"tour_height" => $settings["tour_height_mobile"],
													],
				],
				"single_image" =>[
						"desktop" => $settings["single_image"],
						"tablet" => $settings["single_image_tablet"],
						"mobile" => $settings["single_image_mobile"],
				], 
				"slides_url" => "''",
				"share_buttons" =>[
						"desktop" => $settings["share_buttons"],
						"tablet" => $settings["share_buttons_tablet"],
						"mobile" => $settings["share_buttons_mobile"],
				], 
				"show_movement" => $settings["show_movement"],
				"show_impressum" =>[
						"desktop" => $settings["show_impressum"],
						"tablet" => $settings["show_impressum_tablet"],
						"mobile" => $settings["show_impressum_mobile"],
				], 
				"roll" => $settings["roll"]["size"],
				"movement_speed" => isset($settings["movement_speed"]) ? $settings["movement_speed"] : 1,
				"movement_projection_type" => isset($settings["movement_projection_type"]) ? $settings["movement_projection_type"] : 1,
				"movement_delay" => isset($settings["movement_delay"]) ? $settings["movement_delay"] : 0,
				"movement_lock_controls" => isset($settings["movement_lock_controls"]) ? "'".$settings["movement_lock_controls"]."'" : "'none'",
				"horizontal_alignment" => "'".$settings['horizontal_alignment']."'",
				"dimensions_parent" => "'".$settings['dimensions_parent']."'",
				"suffix" => "'".$settings['suffix']."'",
				"suffix_noStr" => $settings['suffix'],
				"iframeID" => "'"."preview-360ty-iframe"."'",
				"containerID" => "'"."360ty"."'",
				"containerID_noStr" => "360ty",
				"view_id" => "'".$this->get_id()."'",
				"view_id_noStr" => $this->get_id(),
			];
		
		foreach ($params["single_image"] as $device => $value){
			if($params["single_image"][$device] != 'true'){
				$params["single_image"][$device] = false;
			}else{
				$params["single_image"][$device] = true;
			}
		}
		foreach ($params["share_buttons"] as $device => $value){
			if($params["share_buttons"][$device] != 'true'){
				$params["share_buttons"][$device] = false;
			}else{
				$params["share_buttons"][$device]  = true;
			}
		}
		foreach ($params["show_impressum"] as $device => $value){
			if($params["show_impressum"][$device] != 'true'){
				$params["show_impressum"][$device] = false;
			}else{
				$params["show_impressum"][$device] = true;
			}
		}
		
		if($params["show_movement"] !== 'true'){
			$params["show_movement"] = 'false';
		}
	
		switch($params["movement_projection_type"]){
			case $params["movement_projection_type"] == "Rectilinear":
				$params["movement_projection_type"] = 1;
				break;
			case $params["movement_projection_type"] == "Stereographic":
				$params["movement_projection_type"] = 2;
				break;
			case $params["movement_projection_type"] == "Fisheye":
				$params["movement_projection_type"] = 3;
				break;
			default:
				$params["movement_projection_type"] = 1;
				break;
		}
			$paramsstring = $params["basepath"].",".$params["node"].",". $params["fov_start"].",".$params["tilt_start"].",".$params["pan_start"].",".$params["fov_target"].",".$params["tilt_target"].",".$params["pan_target"].",".json_encode($params["tour_dimensions"]).",".json_encode($params["single_image"]).",".$params["slides_url"].",".json_encode($params["share_buttons"]).",".json_encode($params["show_impressum"]).",".$params["movement_speed"].",".$params["roll"].",".$params["movement_projection_type"].",".$params["movement_delay"].",".$params["movement_lock_controls"].",".$params["show_movement"].",200".",".$params["horizontal_alignment"].",".$params["dimensions_parent"].",".$params["containerID"].",".$params["iframeID"].",".$params["suffix"].",".$params["view_id"];
			?>

		
<style scoped>
#<?php echo $params['containerID_noStr']."_".$params['view_id_noStr']?>{
	z-index: 5;
}
#tourbuilder_360ty_<?php echo $params["view_id_noStr"]?>{
	display: block;
	overflow: hidden;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	z-index: 5;
}
#pano_container_<?php echo $params["view_id_noStr"]?>{
	position: relative;
	z-index: 4;
}
#button_container_<?php echo $params["view_id_noStr"]?>{
	position: absolute;
	bottom: 0px;
	display: inline-block;
	z-index: 5;
}
.shareButton_<?php echo $params["view_id_noStr"]?>{
	font-size: 11px;
	position: relative;
	bottom: 0px;
	left: 0px;
	font-family: Raleway, "Helvetica Neue", "Lucida Grande", Arial, Verdana, sans-serif;
	font-size: 10px;
	font-weight: 700;
	margin: 6px 0px 6px 6px;
	padding: 10px 10px;
	color: #FFFFFF;
	border: 1px solid rgba(255, 255, 255, 0.4);
	background: rgba(45, 49, 56, 0.1);
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-ms-border-radius: 3px;
	border-radius: 3px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

.shareButton_<?php echo $params["view_id_noStr"]?>:hover{
	color: #22264b;
	border-color: #FFFFFF;
	background: #FFFFFF;
	text-decoration : none;
}
#impressum_<?php echo $params["view_id_noStr"]?>{
	position: relative;
	float: right;
	display: inline-block;
	bottom: 20px;
	right: 4px;
	z-index: 5;
}
#impressum_<?php echo $params["view_id_noStr"]?> a,#impressum_<?php echo $params["view_id_noStr"]?> a:visited{
	cursor: pointer;
	text-decoration: none;
	color: #FFFFFF;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

#impressum_<?php echo $params["view_id_noStr"]?> a:hover{
	text-decoration: none !important;
	color: #521bff;
	outline: none !important;
}
#impressum_<?php echo $params["view_id_noStr"]?> a:active,#impressum_<?php echo $params["view_id_noStr"]?> a:focus {
text-decoration: none !important;
color: #FFFFFF;
outline: none !important;
}

#impressum_<?php echo $params["view_id_noStr"]?> p {
font-family: Montserrat, "Helvetica Neue", "Lucida Grande", Arial, Verdana, sans-serif;
font-size: 12px;
color: rgba(255, 255, 255, 0.6);
}
#buttonContainer_value_setter_<?php echo $params["view_id_noStr"]?>{
	bottom: 100%;
	overflow: auto;
	display: block;
	position: relative;
	z-index: 5;
}
.valueSetter_<?php echo $params["view_id_noStr"]?>{
	position: relative;
	font-size: 12px;
	background-color: rgba(188,188,188,0.2);
	display: inline-block;
}
.valueSetter_<?php echo $params["view_id_noStr"]?>:hover{
	background-color: rgba(188,188,188,0.3);
}
</style>
<div id="<?php echo $params['containerID_noStr'].'_'.$params['view_id_noStr']?>">
		</div>
		
		<script>
		var throttled = false;
		var pano_360ty_<?echo $params["view_id_noStr"]?>;
		render_init();
		function render_init(){
		if(window["class_360ty_ready"] && window["class_360ty_ready"] == true){
			pano_360ty_<?echo $params["view_id_noStr"]?> = new Elementor_render_360ty(<?php echo $paramsstring?>);
			pano_360ty_<?echo $params["view_id_noStr"]?>.init();
		}else{
			var interval_render_360ty = setInterval(function(){
				if(window["class_360ty_ready"] && window["class_360ty_ready"] == true){
					clearInterval(interval_render_360ty);
					pano_360ty_<?echo $params["view_id_noStr"]?> = new Elementor_render_360ty(<?php echo $paramsstring?>);
					pano_360ty_<?echo $params["view_id_noStr"]?>.init();
				}
			},50);
		}
	}
		</script>
		<?php
	}
	/**
	 * Render the widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function _content_template() {
		?>
		<div id = "preview-360ty_{{{ settings.suffix }}}">
		<style scoped>
		#preview_360ty_{{{ settings.suffix }}}{
			display: block;
			overflow: auto;
			-webkit-transition: all 0.2s ease-in-out;
			-moz-transition: all 0.2s ease-in-out;
			transition: all 0.2s ease-in-out;
			z-index: 5;
		}
		#preview-360ty-iframe_{{{ settings.suffix }}}{
			position: relative;
			z-index: 4;
		}
		#pano_container_{{{ settings.suffix }}}{
			position: relative;
		}
		#button_container_{{{ settings.suffix }}}{
			position: absolute;
			bottom: 0px;
			display: "inline-block";
			z-index: 5;
		}
		.shareButton_{{{ settings.suffix }}}{
			font-size: 11px;
			position: relative;
			bottom: 0px;
			left: 0px;
			font-family: Raleway, "Helvetica Neue", "Lucida Grande", Arial, Verdana, sans-serif;
			font-size: 10px;
			font-weight: 700;
			margin: 6px 0px 6px 6px;
			padding: 10px 10px;
			color: #FFFFFF;
			border: 1px solid rgba(255, 255, 255, 0.4);
			background: rgba(45, 49, 56, 0.1);
			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			-ms-border-radius: 3px;
			border-radius: 3px;
			-webkit-transition: all 0.2s ease-in-out;
			-moz-transition: all 0.2s ease-in-out;
			transition: all 0.2s ease-in-out;
		}

		.shareButton_{{{ settings.suffix }}}:hover{
			color: #22264b;
			border-color: #FFFFFF;
			background: #FFFFFF;
			text-decoration : none;
		}
		#impressum_{{{ settings.suffix }}}{
			position: relative;
			float: right;
			display: inline-block;
			bottom: 20px;
			right: 4px;
			z-index: 5;
		}
		#impressum_{{{ settings.suffix }}} a,#impressum_{{{ settings.suffix }}} a:visited{
			cursor: pointer;
			text-decoration: none;
			color: #FFFFFF;
			-webkit-transition: all 0.2s ease-in-out;
			-moz-transition: all 0.2s ease-in-out;
			transition: all 0.2s ease-in-out;
		}

		#impressum_{{{ settings.suffix }}} a:hover{
			text-decoration: none !important;
			color: #521bff;
			outline: none !important;
		}
		#impressum_{{{ settings.suffix }}} a:active,#impressum_{{{ settings.suffix }}} a:focus {
			text-decoration: none !important;
			color: #FFFFFF;
			outline: none !important;
		}

		#impressum_{{{ settings.suffix }}} p {
			font-family: Montserrat, "Helvetica Neue", "Lucida Grande", Arial, Verdana, sans-serif;
			font-size: 12px;
			color: rgba(255, 255, 255, 0.6);
		}
		#buttonContainer_value_setter_{{{ settings.suffix }}}{
			bottom: 100%;
			overflow: auto;
			display: block;
			position: relative;
			z-index: 5;
		}
		.valueSetter_{{{ settings.suffix }}}{
			position: relative;
			font-size: 12px;
			background-color: rgba(188,188,188,0.2);
			display: inline-block;
		}
		.valueSetter_{{{ settings.suffix }}}:hover{
			background-color: rgba(188,188,188,0.3);
		}

		</style>
		<iframe id = "preview-360ty-iframe_{{{ settings.suffix }}}" src = "" scrolling = "no" style = "border: none;" seamless></iframe>
		<script>
		var iframe_src;
		var containerID = "preview-360ty_{{{ settings.suffix }}}";
		var render_containerID = "tourbuilder-360ty_{{{ settings.suffix }}}";
		var suffix = "{{{ settings.suffix }}}";
		var viewID = "";
		var sentParams;
		var throttled = false;
		var show_movement = {{{ settings.show_movement ? settings.show_movement : false}}};
		var single_image = {
				"desktop" : "{{{ settings.single_image }}}",
				"tablet" : "{{{ settings.single_image_tablet }}}",
				"mobile" : "{{{ settings.single_image_mobile }}}",
		};
		var share_buttons = {
				"desktop" : "{{{ settings.share_buttons }}}",
				"tablet" : "{{{ settings.share_buttons_tablet }}}",
				"mobile" : "{{{ settings.share_buttons_mobile }}}",
		};
		var show_impressum = {
				"desktop" : "{{{ settings.show_impressum }}}",
				"tablet" : "{{{ settings.show_impressum_tablet }}}",
				"mobile" : "{{{ settings.show_impressum_mobile }}}",
		};
		var movement_projection_type = "{{{settings.movement_projection_type}}}";
		var image_dimensions = {
				"desktop" : {
						"width":"{{{ settings.tour_width }}}",
						"tour_height":"{{{ settings.tour_height }}}",
						"custom_aspect_ratio": "{{{ settings.custom_aspect_ratio }}}",
						"aspect_ratio" : "{{{ settings.aspect_ratio }}}",
						},
				"tablet" : {
						"width":"{{{ settings.tour_width_tablet }}}",
						"tour_height":"{{{ settings.tour_height_tablet }}}",
						"custom_aspect_ratio": "{{{ settings.custom_aspect_ratio_tablet }}}",
						"aspect_ratio" : "{{{ settings.aspect_ratio_tablet }}}",
						},
				"mobile" : {
						"width":"{{{ settings.tour_width_mobile }}}",
						"tour_height":"{{{ settings.tour_height_mobile }}}",
						"custom_aspect_ratio": "{{{ settings.custom_aspect_ratio_mobile }}}",
						"aspect_ratio" : "{{{ settings.aspect_ratio_mobile }}}",
						}
		};

		var iframeID = "preview-360ty-iframe_{{{ settings.suffix }}}";
		var slides_link = "";
		var horizontal_alignment = "{{{ settings.horizontal_alignment }}}";
		var dimensions_parent = "{{{ settings.dimensions_parent }}}";
		
		parse_responsive_button(show_impressum);
		parse_responsive_button(single_image);
		parse_responsive_button(share_buttons);
		preview_init();
	
		function preview_init(){

		switch(movement_projection_type){
		case "Rectilinear":
			movement_projection_type = 1;
			break;
		case "Stereographic":
			movement_projection_type = 2;
			break;
		case "Fisheye":
			movement_projection_type = 3;
			break;
		default:
			console.log("couldnt find projection type");
			break;
		}
		if(show_movement == true){
			iframe_src = "https://preview.360ty.world/?parent="+window.location.host+"&basepath={{{ settings.basepath }}}&Pano={{{ settings.startnodeID }}}&PanoFovTarget={{{ settings.fov_target.size }}}&PanoTiltTarget={{{ settings.tilt_target.size }}}&PanoPanTarget={{{settings.pan_target.size}}}&PanoFovStart={{{ settings.fov_start.size }}}&PanoTiltStart={{{ settings.tilt_start.size }}}&PanoPanStart={{{settings.pan_start.size}}}&SingleImage={{{settings.single_image}}}&PanoRoll={{{settings.roll.size}}}&movSpeed={{{settings.movement_speed}}}&movProjection="+movement_projection_type+"&movDelay={{{settings.movement_delay}}}&movLock={{{settings.movement_lock_controls}}}";
		}else{
			iframe_src = "https://preview.360ty.world/?parent="+window.location.host+"&basepath={{{ settings.basepath }}}&Pano={{{ settings.startnodeID }}}&PanoFovTarget={{{ settings.fov_target.size }}}&PanoTiltTarget={{{ settings.tilt_target.size }}}&PanoPanTarget={{{settings.pan_target.size}}}&PanoFovStart={{{ settings.fov_target.size }}}&PanoTiltStart={{{ settings.tilt_target.size }}}&PanoPanStart={{{settings.pan_target.size}}}&SingleImage={{{settings.single_image}}}&PanoRoll={{{settings.roll.size}}}&movSpeed={{{settings.movement_speed}}}&movProjection="+movement_projection_type+"&movDelay={{{settings.movement_delay}}}&movLock={{{settings.movement_lock_controls}}}";
			}
		if(window["class_360ty_ready"] && window["class_360ty_ready"] == true){
			preview_360ty_{{{ settings.suffix }}} = new Elementor_preview_360ty(show_movement,single_image,share_buttons,show_impressum,movement_projection_type, containerID, iframeID, image_dimensions,iframe_src,200,slides_link,horizontal_alignment,dimensions_parent,render_containerID, viewID, suffix);
			preview_360ty_{{{ settings.suffix }}}.init();
		}else{
			var interval_preview_360ty = setInterval(function(){
				if(window["class_360ty_ready"] && window["class_360ty_ready"] == true){
					clearInterval(interval_preview_360ty);
					preview_360ty_{{{ settings.suffix }}} = new Elementor_preview_360ty(show_movement,single_image,share_buttons,show_impressum,movement_projection_type, containerID, iframeID, image_dimensions,iframe_src,200,slides_link,horizontal_alignment,dimensions_parent,render_containerID, viewID, suffix);
					preview_360ty_{{{ settings.suffix }}}.init();
				}
			},50);
		}
	}
		function parse_responsive_button(object){
			for(var device in object){
				if(object[device] == 'true'){
					object[device] = true;
				}else{
					object[device] = false;
				}
			}
		}
		</script>
		</div>

<?php
	}
	
}