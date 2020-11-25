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

class Tourbuilder extends Widget_Base{
	/**
	 * Class constructor.
	 *
	 * @param array $data Widget data.
	 * @param array $args Widget arguments.
	 */

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		wp_register_script( 'pano2vr_player', plugins_url('assets/js/pano2vr_player.js', dirname(__FILE__) ), [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'skin', plugins_url('assets/js/skin.js', dirname(__FILE__) ), [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'three', plugins_url('assets/js/three.min.js', dirname(__FILE__) ), [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'class-360ty', plugins_url('assets/js/class-elementor-360ty.js', dirname(__FILE__) ), [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_style( '360ty-styles', plugins_url('assets/css/360ty_styles.css', dirname(__FILE__) ) );
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
		$styles = ['360ty-styles'];
	
		return $styles;
	}
	/**
	 * Enqueue scripts.
	 */
	public function get_script_depends() {
		//$scripts = ['pano2vr_player','three','skin','init','setup_pano','share_buttons','class-360ty'];
		$scripts = ['pano2vr_player','three','skin','class-360ty'];
	
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
				'description' => __( 'Width of the Tour. Use % to use x% of the width. Units: px, % (default unit = px) ', 'tour-builder' ),
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "75%",
				'mobile_default' => "200%",
				'tablet_default' => "200%",
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
		$this->start_controls_section(
			'style_hotspots',
			[
			'label' => __( 'Hotspots', 'tour-builder' ),
			'tab' => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'hotspot_color',
			[
			'label' => __( 'Pulse Color', 'tour-builder' ),
			'show_label' => true,
			'alpha' => false,
			'type' => Controls_Manager::COLOR,
			'scheme' => [
						'type' => \Elementor\Scheme_Color::get_type(),
						'value' => \Elementor\Scheme_Color::COLOR_1,
						],
			'description' => __( 'Color of the pulsating effect', 'tour-builder' ),
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
													"height" => $settings["tour_height"],
													],
						"tablet" => [
													"width" => $settings["tour_width_tablet"],
													"aspect_ratio" => $settings["aspect_ratio_tablet"],
													"custom_aspect_ratio" => $settings["custom_aspect_ratio_tablet"],
													"height" => $settings["tour_height_tablet"],
													],
						"mobile" => [
													"width" => $settings["tour_width_mobile"],
													"aspect_ratio" => $settings["aspect_ratio_mobile"],
													"custom_aspect_ratio" => $settings["custom_aspect_ratio_mobile"],
													"height" => $settings["tour_height_mobile"],
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
				"movement_delay" => isset($settings["movement_delay"]) ? $settings["movement_delay"] : 0,
				"movement_lock_controls" => isset($settings["movement_lock_controls"]) ? "'".$settings["movement_lock_controls"]."'" : "'none'",
				"horizontal_alignment" => "'".$settings['horizontal_alignment']."'",
				"suffix" => "'".$settings['suffix']."'",
				"suffix_noStr" => $settings['suffix'],
				"iframeID" => "'"."preview-360ty-iframe"."'",
				"containerID" => "'"."360ty_".$this->get_id()."'",
				"containerID_noStr" => "360ty_".$this->get_id(),
				"view_id" => "'".$this->get_id()."'",
				"view_id_noStr" => $this->get_id(),
				"skin_variables" => [
					[
						"variable" => "hotspotFarbe",
						"value" => $settings['hotspot_color'],
					]
				]
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
	
			$paramsstring = $params["view_id"].",".$params["basepath"].",".$params["node"].",". $params["fov_start"].",".$params["tilt_start"].",".$params["pan_start"].",".$params["fov_target"].",".$params["tilt_target"].",".$params["pan_target"].",".json_encode($params["tour_dimensions"]).",".json_encode($params["single_image"]).",".json_encode($params["share_buttons"]).",".json_encode($params["show_impressum"]).",".$params["movement_speed"].",".$params["roll"].",".$params["movement_delay"].",".$params["movement_lock_controls"].",".$params["show_movement"].",".$params["horizontal_alignment"].",".$params["containerID"].",".json_encode($params["skin_variables"]).",200";
			?>

<div id="<?php echo $params['containerID_noStr']?>">
		</div>
		
		<script>
		var throttled = false;
		var pano_360ty_<?echo $params["view_id_noStr"]?>;
		if(window["elementor"]){
			pano_360ty_<?echo $params["view_id_noStr"]?> = new Elementor_360ty(<?php echo $paramsstring?>);
			pano_360ty_<?echo $params["view_id_noStr"]?>.init();
		}else{
			window.addEventListener("load",function(){
				pano_360ty_<?echo $params["view_id_noStr"]?> = new Elementor_360ty(<?php echo $paramsstring?>);
				pano_360ty_<?echo $params["view_id_noStr"]?>.init();
			});
		}
		</script>
		<?php
	}

}