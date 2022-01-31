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
		wp_register_script( 'pano2vr_player', 'https://api.360ty.cloud/pano2vr_player.js', [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'skin', 'https://api.360ty.cloud/skin.js', [ 'elementor-frontend' ], '1.0.0', true );
		wp_register_script( 'class-tourbuilder', plugins_url('assets/js/class-tourbuilder-360ty.js', dirname(__FILE__) ), [ 'elementor-frontend' ] , '1.1.2', true );
		wp_register_script( 'elementor-editor-script', plugins_url('assets/js/elementor-editor.js', dirname(__FILE__) ), [ 'elementor-frontend' ] , '1.1.2', true );
		wp_register_style( '360ty-styles', "https://api.360ty.cloud/360ty_styles.css" );
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

	public function get_keywords() {
		return ['360ty','360','360°','tour'];
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
		$scripts = ['pano2vr_player','skin','class-tourbuilder','elementor-editor-script'];
	
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
	
	protected function register_controls() {
		
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
				'dynamic' => [
					'active' => true,
				],
			]
		);
		$this->add_control('basepath',
			[
				'label'   => __( 'Basepath', 'tour-builder' ),
				'type'    => 'algolia-360ty',
				'default' => 'https://lechwinter.360ty.cloud/',
				'description' => __( 'The URL, where the Tour files are located', 'tour-builder' ),
				'dynamic' => [
					'active' => true,
				],
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
				'description' => 'start node ID of the desired 360 image.',
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
				'description' => 'node ID of the desired 360 image.'
			]
		);
		$repeater->add_control(
			'fov',
				[
				'label' => __( 'FOV', 'tour-builder' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => ['deg'],
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
				'description' => 'Speed of the movement. Value 0.5 = 0.5x quicker, value 2 = 2x quicker, value 3 = 3x quicker...',
				],
		);
		$repeater->add_control(
			'movement_lock_controls',
				[
				'label' => __( 'Lock controls', 'tour-builder' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'Mousewheel',
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
					'dynamic' => [
						'active' => true,
					],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
				'mobile_default' => "16:9",
				'tablet_default' => "16:9",
				'dynamic' => [
					'active' => true,
				],
				]
		);
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'label' => __( 'Background', 'plugin-domain' ),
				'types' => [ 'classic', 'gradient', 'image' ],
				'description' => 'Placeholder before the tour is loaded'
			]
		);
		$this->add_responsive_control(
				'custom_aspect_ratio',
				[
				'label'   => __( 'Custom Aspect Ratio', 'tour-builder' ),
				'type'    => Controls_Manager::TEXT,
				'devices' => ['desktop','tablet','mobile'],
				'desktop_default' => "16:9",
				'mobile_default' => "16:9",
				'tablet_default' => "16:9",
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
				'dynamic' => [
					'active' => true,
				],
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
				'dynamic' => [
					'active' => true,
				],
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
						'type' => \Elementor\Core\Schemes\Color::get_type(),
						'value' => \Elementor\Core\Schemes\Color::COLOR_1,
						],
			'description' => __( 'Color of the pulsating effect', 'tour-builder' ),
			'dynamic' => [
				'active' => true,
			],
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
	public function render() {
		$settings = $this->get_settings_for_display();
		$viewID = $this->get_id();
		$containerID = "container_360ty_".$viewID;
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
		if(isset($setting['aspect_ratio_tablet'])){
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
		}else{
			$tourheight_tablet = $tourheight_desktop;
		}
		if(isset($setting['aspect_ratio_tablet'])){

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
		}else{
			$tourheight_mobile = $tourheight_desktop;
		}
		$tourWidthTablet = isset($settings['tour_width_tablet']) ? $settings['tour_width_tablet'] : $settings['tour_width'];
		$tourWidthMobile = isset($settings['tour_width_mobile']) ? $settings['tour_width_mobile'] : $settings['tour_width'];

		$horAlignTablet = isset($settings['horizontal_alignment_tablet']) ? $settings['horizontal_alignment_tablet'] : $settings['horizontal_alignment'];
		$horAlignMobile = isset($settings['horizontal_alignment_mobile']) ? $settings['horizontal_alignment_mobile'] : $settings['horizontal_alignment'];

		$shareButtonsTablet = isset($settings['share_buttons_tablet']) ? $settings['share_buttons_tablet'] : $settings['share_buttons'];
		$shareButtonsMobile = isset($settings['share_buttons_mobile']) ? $settings['share_buttons_mobile'] : $settings['share_buttons'];

		$impressumTablet = isset($settings['show_impressum_tablet']) ? $settings['show_impressum_tablet'] : $settings['show_impressum'];
		$impressumMobile = isset($settings['show_impressum_mobile']) ? $settings['show_impressum_mobile'] : $settings['show_impressum'];

		$singleImageTablet = isset($settings['single_image_tablet']) ? $settings['single_image_tablet'] : $settings['single_image'];
		$singleImageMobile = isset($settings['single_image_mobile']) ? $settings['single_image_mobile'] : $settings['single_image'];

		?>
		<div id=<?php echo $containerID?>>
		</div>
		<script>
		var tour_360ty_<?php echo $viewID?>;
		window.tour_360ty_<?php echo $viewID?> = tour_360ty_<?php echo $viewID?>;
		function chooseBool(value){
			let returnVal;
			value === ("no" || false || "false") ? returnVal = false : returnVal = true;
			return returnVal;
		}
		function init_<?php echo $viewID?>(className){
			return new Promise(function(resolve, reject){
					if(tour_360ty_<?php echo $viewID?>){
						setTourValues();
						fetch("<?php echo $settings['basepath']?>pano.xml").then(function(res){
							if(res.status === 200){
								tour_360ty_<?php echo $viewID?>.setBasePath("<?php echo $settings['basepath']?>");
							}
							tour_360ty_<?php echo $viewID?>.onReloadFinished = resolve;
							tour_360ty_<?php echo $viewID?>.reload();
						}).catch();
					}else{
						tour_360ty_<?php echo $viewID?> = new (className)(<?php echo "'".$containerID."','".$settings['basepath']."','".$viewID."'"?>);
						setTourValues();
						tour_360ty_<?php echo $viewID?>.init().then(resolve);
					}
			});
			
		}
		function setTourValues(){
				tour_360ty_<?php echo $viewID?>.setDimensions(<?php echo "'".$settings['tour_width']."','".$tourheight_desktop."'"?>);
				tour_360ty_<?php echo $viewID?>.setHorizontalAlignment(<?php echo "'".$settings['horizontal_alignment']."'"?>);
				tour_360ty_<?php echo $viewID?>.setStartNode(<?php echo $settings['startnodeID']?>);
				tour_360ty_<?php echo $viewID?>.setViewingParameter(<?php echo $settings['fov']['size'].",".$settings['tilt']['size'].",".$settings['pan']['size']?>);
				tour_360ty_<?php echo $viewID?>.setSingleImage(<?php echo $settings['single_image'] === "true"? "true" : "false" ?>);
				tour_360ty_<?php echo $viewID?>.setShareButtonVisibility(<?php echo $settings['share_buttons']  === "true"? "true" : "false" ?>);
				tour_360ty_<?php echo $viewID?>.setImpressumVisibility(<?php echo $settings['show_impressum'] === "true"? "true" : "false" ?>);
				tour_360ty_<?php echo $viewID?>.setSkinVariables(<?php echo json_encode($skin_variables)?>);
				tour_360ty_<?php echo $viewID?>.setMovementLoopAmount(<?php echo $settings['loop_amount']?>);
				tour_360ty_<?php echo $viewID?>.setMovementDelay(parseInt(<?php echo $settings['movement_delay']?>));
				<?php
				if($settings['keyframes']){
					foreach($settings['keyframes'] as $keyframe){
						echo 'tour_360ty_'.$viewID.'.addKeyframe('.$keyframe['fov']['size'].','.$keyframe['tilt']['size'].','.$keyframe['pan']['size'].','.$keyframe['movement_speed'].',"'.$keyframe['movement_lock_controls'].'",'.$keyframe['nodeID'].');';
					}
				}
				?>			
				//responsive params
				//tablet
				tour_360ty_<?php echo $viewID?>.setDimensions_tablet(<?php echo "'".$tourWidthTablet."','".$tourheight_tablet."'"?>);
				tour_360ty_<?php echo $viewID?>.setHorizontalAlignment_tablet(<?php echo "'".$horAlignTablet."'"?>);
				tour_360ty_<?php echo $viewID?>.setSingleImage_tablet(<?php echo $singleImageTablet=== "true"? "true" : "false"?>);
				tour_360ty_<?php echo $viewID?>.setShareButtonVisibility_tablet(<?php echo $shareButtonsTablet=== "true"? "true" : "false"?>);
				tour_360ty_<?php echo $viewID?>.setImpressumVisibility_tablet(<?php echo $impressumTablet=== "true"? "true" : "false"?>);
				//mobile
				tour_360ty_<?php echo $viewID?>.setDimensions_mobile(<?php echo "'".$tourWidthMobile."','".$tourheight_mobile."'"?>);
				tour_360ty_<?php echo $viewID?>.setHorizontalAlignment_mobile(<?php echo "'".$horAlignMobile."'"?>);
				tour_360ty_<?php echo $viewID?>.setSingleImage_mobile(<?php echo $singleImageMobile=== "true"? "true" : "false"?>);
				tour_360ty_<?php echo $viewID?>.setShareButtonVisibility_mobile(<?php echo $shareButtonsMobile=== "true"? "true" : "false"?>);
				tour_360ty_<?php echo $viewID?>.setImpressumVisibility_mobile(<?php echo $impressumMobile=== "true"? "true" : "false"?>);			
		}
		function run(){
			return new Promise(function(resolve, reject){
				let classInterval = setInterval(function(){
				try{
					if(Pano_360ty){
						clearInterval(classInterval);
						init_<?php echo $viewID?>(Pano_360ty).then(resolve);
						
					}
				}catch(err){
					console.error(err);
					clearInterval(classInterval);
					reject(err);
				}
			},50);
			});
		}
		run().then(function(){
			if(window["elementor"]){
				let elemEditor_<?php echo $viewID?> = new ElementorEditor360ty("<?php echo $viewID?>",tour_360ty_<?php echo $viewID?>);
			}
		});
	
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
