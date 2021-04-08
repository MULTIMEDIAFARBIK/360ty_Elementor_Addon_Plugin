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
		wp_register_script( 'class-360ty', "https://storage.googleapis.com/api.360ty.cloud/Elementor-tour-widget/class-elementor-360ty.js" , [ 'elementor-frontend' ], '1.1.2', true );
		wp_register_style( '360ty-styles', "https://storage.googleapis.com/api.360ty.cloud/360ty_styles.css" );
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
				'default' => __( 'https://lechwinter.360ty.cloud/', 'tour-builder' ),
				'description' => ' base URI of the tour, where the pano2vr tour files are located. (http://*/)',
				]
		);
		
		$this->add_control(
			'suffix',
			[
				'type'    => Controls_Manager::HIDDEN,
				'default' => RandomString(),
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
				'default' => 4,
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
				'fov',
				[
				'label' => __( 'FOV', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => 5,
								'max' => 100,
								'step' => 1,
								],
							],
				'input_type' => 'number',
				'description' => 'Field of View/Zoom value of the starting position of the tour',
				'default' => [
							'unit' => 'deg',
							'size' => 65,
							],
				]
		);
		$this->add_control(
				'tilt',
				[
				'label' => __( 'Tilt', 'tour-builder' ),
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
				'description' => 'Vertical value of the starting position of the tour',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				]
		);
		$this->add_control(
				'pan',
				[
				'label' => __( 'Pan', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
							'deg' => [
								'min' => -360,
								'max' => 360,
								'step' => 1,
							],
				],
				'input_type' => 'number',
				'description' => 'Horizontal value of the starting position of the tour',
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
			'movement_delay',
				[
				'label'   => __( 'Delay', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 0,
				'step' => 100,
				'default' => 0,
				'description' => 'Starts the movement after x milliseconds',
				]
		);
		$this->add_control(
			'loop_amount',
				[
				'label'   => __( 'Loop Amount', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 0,
				'step' => 1,
				'default' => 1,
				'description' => 'How often the Keyframes should repeat. If the value is 0, the Movement will not be shown.',
				]
		);
		$repeater = new \Elementor\Repeater();
		$repeater->add_control(
			'nodeID',
			[
				'label'   => __( 'Node', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 1,
				'step' => 1,
				'default' => 1,
				'description' => 'node ID of the desired 360 image.'
			]
		);
		$repeater->add_control(
			'fov',
				[
				'label' => __( 'FOV', 'tour-builder' ),
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
				'description' => 'Field of View/Zoom value, where the Keyframe should move to',
				'default' => [
							'unit' => 'deg',
							'size' => 65,
							],
				]
		);
		$repeater->add_control(
			'tilt',
				[
				'label' => __( 'Tilt', 'tour-builder' ),
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
				'description' => 'Vertical value, where the Keyframe should move to',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				]
		);
		$repeater->add_control(
			'pan',
				[
				'label' => __( 'Pan', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'range' => [
						'deg' => [
								'min' => -360,
								'max' => 360,
								'step' => 1,
								],
						],
				'input_type' => 'number',
				'description' => 'Horizontal value, where the Keyframe should move to',
				'default' => [
							'unit' => 'deg',
							'size' => 0,
							],
				]
		);
		$repeater->add_control(
			'movement_speed',
				[
				'label'   => __( 'Speed', 'tour-builder' ),
				'type'    => Controls_Manager::NUMBER,
				'min' => 0.1,
				'step' => 0.1,
				'default' => 1,
				'description' => 'Speed of the movement. Value 0.5 = 0.5x quicker, value 2 = 2x quicker, value 3 = 3x quicker...',
				],
		);
		$repeater->add_control(
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
				'description' => 'Which controls dont instantly abort the movement, while the keyframe is active. A mouseclick will always abort the movement. If the mouse is locked, the movement will be aborted after the Keyframe finished moving',
				]
		);
		$this->add_control(
			'keyframes',
				[
				'label' => __('Keyframes', 'tour-builder'),
				'type' => Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'title_field' => 'Keyframe',
				'description' => 'Each Keyframe has a position, where it will move to from the previous Keyframe. The first Keyframe moves from the starting Position.',
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
				'mobile_default' => "4:3",
				'tablet_default' => "4:3",
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
		$viewID = $this->get_id();
		$containerID = "container_360ty_".$viewID;
		$tourheight_desktop;
		$tourheight_tablet;
		$tourheight_mobile;
		$skin_variables = array(
			[
				"hotspotFarbe" => $settings['hotspot_color'],
			]
		);

		switch($settings['aspect_ratio']){
			case "custom":
				$tourheight_desktop = $settings['custom_aspect_ratio'];
				break;
			case "custom_height":
				$tourheight_desktop = $settings['tour_height'];
				break;
			default:
				$tourheight_desktop = $settings['aspect_ratio'];
				break;
		}
		switch($settings['aspect_ratio_tablet']){
			case "custom":
				$tourheight_tablet = $settings['custom_aspect_ratio_tablet'];
				break;
			case "custom_height":
				$tourheight_tablet = $settings['tour_height_tablet'];
				break;
			default:
				$tourheight_tablet = $settings['aspect_ratio_tablet'];
				break;
		}
		switch($settings['aspect_ratio_mobile']){
			case "custom":
				$tourheight_mobile = $settings['custom_aspect_ratio_mobile'];
				break;
			case "custom_height":
				$tourheight_mobile = $settings['tour_height_mobile'];
				break;
			default:
				$tourheight_mobile = $settings['aspect_ratio_mobile'];
				break;
		}	
		?>
		
		<div id=<?php echo $containerID?>>
		</div>
		<script>
		var tour_360ty_<?echo $viewID?>;
		function chooseBool(value){
			let returnVal;
			value === ("no" || false || "false") ? returnVal = false : returnVal = true;
			return returnVal;
		}
		function init_<?echo $viewID?>(className){
			tour_360ty_<?echo $viewID?> = new (className)(<?php echo "'".$containerID."','".$settings['basepath']."','"."','".$viewID."'"?>);
			tour_360ty_<?echo $viewID?>.setDimensions(<?php echo "'".$settings['tour_width']."','".$tourheight_desktop."'"?>);
			tour_360ty_<?echo $viewID?>.setHorizontalAlignment(<?php echo "'".$settings['horizontal_alignment']."'"?>);
			tour_360ty_<?echo $viewID?>.setStartNode(<?php echo $settings['startnodeID']?>);
			tour_360ty_<?echo $viewID?>.setViewingParameter(<?php echo $settings['fov']['size'].",".$settings['tilt']['size'].",".$settings['pan']['size']?>);
			tour_360ty_<?echo $viewID?>.setSingleImage(<?php echo $settings['single_image'] === "true"? "true" : "false" ?>);
			tour_360ty_<?echo $viewID?>.setShareButtonVisibility(<?php echo $settings['share_buttons']  === "true"? "true" : "false" ?>);
			tour_360ty_<?echo $viewID?>.setImpressumVisibility(<?php echo $settings['show_impressum'] === "true"? "true" : "false" ?>);
			tour_360ty_<?echo $viewID?>.setSkinVariables(<?php echo json_encode($skin_variables)?>);
			tour_360ty_<?echo $viewID?>.setMovementLoopAmount(<?php echo $settings['loop_amount']?>);
			tour_360ty_<?echo $viewID?>.setMovementDelay(parseInt(<?php echo $settings['movement_delay']?>));
			<?php
			if($settings['keyframes']){
				foreach($settings['keyframes'] as $keyframe){
					echo 'tour_360ty_'.$viewID.'.addKeyframe('.$keyframe['fov']['size'].','.$keyframe['tilt']['size'].','.$keyframe['pan']['size'].','.$keyframe['movement_speed'].',"'.$keyframe['movement_lock_controls'].'",'.$keyframe['nodeID'].');';
				}
			}
			?>			
			//responsive params
			tour_360ty_<?echo $viewID?>.setDimensions_tablet(<?php echo "'".$settings['tour_width_tablet']."','".$tourheight_tablet."'"?>);
			tour_360ty_<?echo $viewID?>.setHorizontalAlignment_tablet(<?php echo "'".$settings['horizontal_alignment_tablet']."'"?>);
			tour_360ty_<?echo $viewID?>.setSingleImage_tablet(<?php echo $settings['single_image_tablet']=== "true"? "true" : "false"?>);
			tour_360ty_<?echo $viewID?>.setShareButtonVisibility_tablet(<?php echo $settings['share_buttons_tablet']=== "true"? "true" : "false"?>);
			tour_360ty_<?echo $viewID?>.setImpressumVisibility_tablet(<?php echo $settings['show_impressum_tablet']=== "true"? "true" : "false"?>);
			tour_360ty_<?echo $viewID?>.setDimensions_mobile(<?php echo "'".$settings['tour_width_mobile']."','".$tourheight_mobile."'"?>);
			tour_360ty_<?echo $viewID?>.setHorizontalAlignment_mobile(<?php echo "'".$settings['horizontal_alignment_mobile']."'"?>);
			tour_360ty_<?echo $viewID?>.setSingleImage_mobile(<?php echo $settings['single_image_mobile']=== "true"? "true" : "false"?>);
			tour_360ty_<?echo $viewID?>.setShareButtonVisibility_mobile(<?php echo $settings['share_buttons_mobile']=== "true"? "true" : "false"?>);
			tour_360ty_<?echo $viewID?>.setImpressumVisibility_mobile(<?php echo $settings['show_impressum_mobile']=== "true"? "true" : "false"?>);			
			tour_360ty_<?echo $viewID?>.init();
		}
		if(window["elementor"]){
			init_<?echo $viewID?>(Elementor_360ty);
		}else{
			if(document.readyState == 'complete'){
				init_<?echo $viewID?>(Pano_360ty);
			}else{
				window.addEventListener("load",function(){
				init_<?echo $viewID?>(Pano_360ty);
			});
			}
		
		}
		</script>
		<?php
	}
}
function RandomString()
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randstring = '';
        for ($i = 0; $i < 10; $i++) {
            $randstring = $randstring.$characters[rand(0, strlen($characters)-1)];
        }
        return $randstring;
	}
