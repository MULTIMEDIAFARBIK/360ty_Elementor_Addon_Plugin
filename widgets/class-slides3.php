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

class Slides3 extends Widget_Base{
	/**
	 * Class constructor.
	 *
	 * @param array $data Widget data.
	 * @param array $args Widget arguments.
	 */

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
        wp_register_script( 'class-slides3', "https://storage.googleapis.com/api.360ty.cloud/slides3/js/slides3.js" , [ 'elementor-frontend' ], '1.0.0', true );

        wp_register_style( '360ty-styles', "https://storage.googleapis.com/api.360ty.cloud/360ty_styles.css" );
        wp_register_style( 'slides3-styles', "https://storage.googleapis.com/api.360ty.cloud/slides3/css/slides3.css" );

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
		return '360ty Slides3';
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
		return __( 'Slides3', 'slides3' );
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
		$styles = ['360ty-styles','slides3-styles'];
	
		return $styles;
	}
	/**
	 * Enqueue scripts.
	 */
	public function get_script_depends() {
		$scripts = ['class-slides3'];
	
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
        $this->start_controls_section(
			'settings_section',
			[
				'label' => __( 'Settings', 'slides3' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
            $this->add_control(
                'load_tour',
                    [
                    'type'    => Controls_Manager::SWITCHER,
                    'label'   => __( 'Load Tour', 'slides3' ),
                    'label_on' => __( 'yes', 'slides3' ),
                    'label_off' => __( 'no', 'slides3' ),
                    'return_value' => 'true',
                    'default' => 'false',
                    'dynamic' => [
                        'active' => true,
                    ],
                    'description' => 'turn this off to save ressources in the Elementor Editor. The tour will still load normally on the live page',
                    ]
            );
            $this->add_control(
                'show_screenshot_button',
                [
                    'type'    => Controls_Manager::SWITCHER,
                    'label' => __( 'Screenshot Studio Button', 'slides3' ),
                    'label_on' => __( 'Show', 'slides3' ),
                    'label_off' => __( 'Hide', 'slides3' ),
                    'return_value' => 'show',
                    'default' => 'show',
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );
        $this->end_controls_section();
		$this->start_controls_section(
			'homeslide_section',
			[
				'label' => __( 'Homeslide', 'slides3' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
       
            $this->start_controls_tabs(
                'slides3_homeslide_tabs'
            );
                $this->start_controls_tab(
                    'homeslide_tab_content',
                    [
                        'label' => __( 'Content', 'slides3' ),
                    ]
                );
               
                        $this->add_control(
                            'homeslide_headline',
                                [
                                'label'   => __( 'Headline', 'slides3' ),
                                'type'    => Controls_Manager::TEXT,
                                'default' => __( '', 'slides3' ),
                                'dynamic' => [
                                    'active' => true,
                                ],
                                ]
                        );
                        $this->add_control(
                            'homeslide_subheadline',
                                [
                                'label'   => __( 'Sub-Headline', 'slides3' ),
                                'type'    => Controls_Manager::TEXT,
                                'default' => __( '', 'slides3' ),
                                'dynamic' => [
                                    'active' => true,
                                ],
                                ]
                        );
                        $this->add_control(
                            'homeslide_startButton_text',
                                [
                                'label'   => __( 'Start Slides Button label', 'slides3' ),
                                'type'    => Controls_Manager::TEXT,
                                'default' => __( 'start', 'slides3' ),
                                'dynamic' => [
                                    'active' => true,
                                ],
                                ]
                        );
                        $this->add_control(
                            'homeslide_logo',
                                [
                                'label'   => __( 'Logo', 'slides3' ),
                                'type'    => Controls_Manager::MEDIA,
                                'default' => __( '', 'slides3' ),
                                'dynamic' => [
                                    'active' => true,
                                ],
                                ]
                        );
                        $this->add_control(
                            'homeslide_logo_link',
                                [
                                'label'   => __( 'Logo Link', 'slides3' ),
                                'type'    => Controls_Manager::URL,
                                'default' => [
                                    'url' => ''
                                ],
                                'dynamic' => [
                                    'active' => true,
                                ],    
                                ]
                        );
                        
                $this->end_controls_tab();
                $this->start_controls_tab(
                    'homeslide_tab_background',
                    [
                        'label' => __( 'Background', 'slides3' ),
                    ]
                );
                
                    $this->add_control(
                        'homeslide_background_type',
                        [
                            'label'   => __( 'Background Type', 'slides3' ),
                            'type' => \Elementor\Controls_Manager::SELECT,
                            'default' => 'tour',
                            'options' => [
                                'tour'  => __( 'Tour', 'slides3' ),
                                'image' => __( 'Image', 'slides3' ),
                                'video' => __( 'Video', 'slides3' )
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                        ],
                    );
                    //type = tour
                    $this->add_control(
                        'homeslide_background_tour_basepath',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Basepath','slides3'),
                            'condition' => [
                                'homeslide_background_type' => 'tour'
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                            'default' => 'https://lechwinter.360ty.cloud/',
                        ]
                    );
                    
                    $this->add_control(
                        'homeslide_background_tour_node',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Node','slides3'),
                            'condition' => [
                                'homeslide_background_type' => 'tour'
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                            'default' => 1,
                        ]
                    );
                    $this->add_control(
                        'homeslide_background_tour_fov',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('FOV','slides3'),
                            'condition' => [
                                'homeslide_background_type' => 'tour'
                            ],
                            'default' => 70,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $this->add_control(
                        'homeslide_background_tour_tilt',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Tilt','slides3'),
                            'condition' => [
                                'homeslide_background_type' => 'tour'
                            ],
                            'default' => 0,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $this->add_control(
                        'homeslide_background_tour_pan',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Pan','slides3'),
                            'condition' => [
                                'homeslide_background_type' => 'tour'
                            ],
                            'default' => 0,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    //type = image
                    $this->add_control(
                        'homeslide_background_image',
                        [
                            'label' => __( 'Choose Image', 'slides3' ),
                            'type' => \Elementor\Controls_Manager::MEDIA,
                            'default' => [
                                'url' => \Elementor\Utils::get_placeholder_image_src(),
                            ],
                            'condition' => [
                                'homeslide_background_type' => 'image'
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    //type = video
                  
                    $this->add_control(
                        'homeslide_background_video',
                        [
                            'label' => __( 'Video URL', 'slides3' ),
                            'type' => \Elementor\Controls_Manager::TEXT,
                            'default' => '',
                            'condition' => [
                                'homeslide_background_type' => 'video',
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                            'description' => 'insert Cloudflare Video ID to use a Cloudflare Video',
                        ]
                    );

                $this->end_controls_tab();
            $this->end_controls_tabs();
        $this->end_controls_section();
        $this->start_controls_section(
			'navbar_section',
			[
				'label' => __( 'Navbar', 'slides3' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
        $navbar_socials_repeater = new \Elementor\Repeater();
        $navbar_socials_repeater->add_control(
            'social_type',
            [
                'label'   => __( 'Social Type', 'slides3' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'facebook',
                'options' => [
                    'facebook'  => __( 'Facebook', 'slides3' ),
                    'instagram' => __( 'Instagram', 'slides3' ),
                    'twitter' => __( 'Twitter', 'slides3' ),
                    'linkedin' => __( 'LinkedIn', 'slides3' ),
                    'youtube' => __( 'YouTube', 'slides3' ),
                    'flickr' => __( 'Flickr', 'slides3' ),
                ],
                'dynamic' => [
                    'active' => true,
                ],
            ],
        );
        $navbar_socials_repeater->add_control(
            'social_url',
            [
                'label'   => __( 'Social URL', 'slides3' ),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '',
                ],
                'dynamic' => [
                    'active' => true,
                ],
            ],
        );
        $this->add_control(
            'navbar_socials',
                [
                'label' => __('Social Buttons', 'tour-builder'),
                'type' => Controls_Manager::REPEATER,
                'fields' => $navbar_socials_repeater->get_controls(),
                'title_field' => 'Social Button {{{social_type}}}',
                ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
			'about_us_section',
			[
				'label' => __( 'About us & Partner', 'slides3' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                
			]
		);
            $this->start_controls_tabs(
                'slides3_about-us_tabs'
            );
                $this->start_controls_tab(
                    'about-us_tab',
                    [
                        'label' => __( 'About us', 'slides3' ),
                    ]
                );
                    $this->add_control(
                        'showAboutUs',
                        [
                            'type'    => Controls_Manager::SWITCHER,
                            'label' => __( 'About us & Partner', 'slides3' ),
                            'label_on' => __( 'Show', 'slides3' ),
                            'label_off' => __( 'Hide', 'slides3' ),
                            'return_value' => 'show',
                            'default' => 'show',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $this->add_control(
                        'about-us_headline',
                            [
                            'label'   => __( 'Headline', 'slides3' ),
                            'type'    => Controls_Manager::TEXT,
                            'default' => __( 'Über uns', 'slides3' ),
                            'dynamic' => [
                                'active' => true,
                            ],
                            'condition' => [
                                'showAboutUs' => 'show'
                            ],
                            ]
                    );
                    $this->add_control(
                        'about-us_subheadline',
                            [
                            'label'   => __( 'Sub-headline', 'slides3' ),
                            'type'    => Controls_Manager::TEXT,
                            'default' => __( '', 'slides3' ),
                            'dynamic' => [
                                'active' => true,
                            ],
                            'condition' => [
                                'showAboutUs' => 'show'
                            ],
                            ]
                    );
                    $this->add_control(
                        'about-us_description',
                            [
                            'label'   => __( 'Description', 'slides3' ),
                            'type'    => Controls_Manager::TEXTAREA,
                            'default' => __( '', 'slides3' ),
                            'dynamic' => [
                                'active' => true,
                            ],
                            'condition' => [
                                'showAboutUs' => 'show'
                            ],
                            ]
                    );
                    $this->add_control(
                        'about-us_image',
                            [
                            'label'   => __( 'Image', 'slides3' ),
                            'type'    => Controls_Manager::MEDIA,
                            'default' => __( '', 'slides3' ),
                            'dynamic' => [
                                'active' => true,
                            ],
                            'condition' => [
                                'showAboutUs' => 'show'
                            ],
                            ]
                    );
                $this->end_controls_tab();
                $this->start_controls_tab(
                    'partner_tab',
                    [
                        'label' => __( 'Partner', 'slides3' ),
                        
                    ]
                );
                    $partner_repeater = new \Elementor\Repeater();
                    $partner_repeater->add_control(
                        'partner_name',
                        [
                            'type' => Controls_Manager::TEXT,
                            'label' => "Name",
                            'default' => '',
                            'description' => "doesn't affect slides",
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $partner_repeater->add_control(
                        'partner_link',
                        [
                            'type' => Controls_Manager::URL,
                            'label' => "Link",
                            'default' => [
                                'url' => ''
                            ],
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $partner_repeater->add_control(
                        'partner_img',
                        [
                            'type' => Controls_Manager::MEDIA,
                            'label' => "Image",
                            'dynamic' => [
                                'active' => true,
                            ],
                            'default' => [
                                'url' => '',
                            ],
                        ]
                    );
                    
                    $this->add_control(
                        'partners',
                            [
                            'label' => __('Partner', 'tour-builder'),
                            'type' => Controls_Manager::REPEATER,
                            'fields' => $partner_repeater->get_controls(),
                            'title_field' => '{{{partner_name}}}',
                            'condition' => [
                                'showAboutUs' => 'show'
                            ],
                            ]
                    );
                    $this->end_controls_tab();
                $this->end_controls_tabs();
            $this->end_controls_section();
            $this->start_controls_section(
                'slides_section',
                [
                    'label' => __( 'Slides', 'slides3' ),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
            $slides_repeater = new \Elementor\Repeater();
            $slides_repeater->add_control(
                'slide_title',
                [
                    'label' => __('Slide Name','slides3'),
                    'type' => \Elementor\Controls_Manager::TEXT,
                    'default' => 'Slide',
                    'description' => "doesn't affect Slides",
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );
            $slides_repeater->add_control(
                'slide_direction',
                [
                    'label' => __('Direction','slides3'),
                    'type' => \Elementor\Controls_Manager::SELECT,
                    'options' => [
                        'vertical' => 'vertical',
                        'horizontal' => 'horizontal'
                    ],
                    'default' => 'vertical',
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );
           
            $slides_repeater->start_controls_tabs(
                'slides3_slides_tabs'
            );
                $slides_repeater->start_controls_tab(
                    'slides_content_tab',
                    [
                        'label' => __( 'Content', 'slides3' ),
                    ]
                );
                    $slides_repeater->add_control(
                        'slide_headline',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Headline','slides3'),
                            'default' => '',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_tourstart-button-label',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Tour-start Button Label','slides3'),
                            'default' => 'start Tour',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                
                    $slides_repeater->add_control(
                        'slide_facebook_button_link',
                        [
                            'type'    => Controls_Manager::URL,
                            'label' => __('Facebook Button URL','slides3'),
                            'default' => '',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_description',
                        [
                            'type'    => Controls_Manager::TEXTAREA,
                            'label' => __('Description','slides3'),
                            'default' => '',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_fotograf',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Photographer','slides3'),
                            'default' => '',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_location',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Location','slides3'),
                            'default' => '',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                $slides_repeater->end_controls_tab();
                $slides_repeater->start_controls_tab(
                    'slides_tour_tab',
                    [
                        'label' => __( 'Tour', 'slides3' ),
                    ]
                );
                    $slides_repeater->add_control(
                        'slide_tour_basepath',
                        [
                            'type'    => Controls_Manager::TEXT,
                            'label' => __('Basepath','slides3'),
                            'default' => 'https://lechwinter.360ty.cloud/',
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    
                    $slides_repeater->add_control(
                        'slide_tour_node',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Node','slides3'),
                            'default' => 1,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_tour_fov',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('FOV','slides3'),
                            'default' => 70,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_tour_tilt',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Tilt','slides3'),
                            'default' => 0,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                    $slides_repeater->add_control(
                        'slide_tour_pan',
                        [
                            'type'    => Controls_Manager::NUMBER,
                            'label' => __('Pan','slides3'),
                            'default' => 0,
                            'dynamic' => [
                                'active' => true,
                            ],
                        ]
                    );
                $slides_repeater->end_controls_tab();
            $slides_repeater->end_controls_tabs();
           /* $subslides_repeater = new \Elementor\Repeater();
            $subslides_repeater->add_control(
                'test',
                
                    [
                        'type'    => Controls_Manager::TEXT,
                        'label' => __('Test','slides3'),
                        'default' => "test",
                    ]
                
            );
            $slides_repeater->add_control(
                'subslides',
                    [
                    'label' => __('Subslides', 'tour-builder'),
                    'type' => Controls_Manager::REPEATER,
                    'fields' => $subslides_repeater->get_controls(),
                    'title_field' => 'Subslide',
                    ]
            );
                       */

            $this->add_control(
                'slides',
                    [
                    'label' => __('Slides', 'tour-builder'),
                    'type' => Controls_Manager::REPEATER,
                    'fields' => $slides_repeater->get_controls(),
                    'title_field' => '{{{slide_title}}}',
                    ]
            );
          
        $this->end_controls_section();
        $this->start_controls_section(
            'section_style_color',
            [
            'label' => __( 'Slides Colors', 'tour-builder' ),
            'tab' => Controls_Manager::TAB_STYLE,
            ]
        );
            $this->add_control(
                'color_primary',
                    [
                    'label' => __('Primary Color', 'tour-builder'),
                    'type' => Controls_Manager::COLOR,
                    'alpha' => false,
                    'default' => '#f40000',
                    'dynamic' => [
                        'active' => true,
                    ],
                    ]
            );
            $this->add_control(
                'color_secondary',
                    [
                    'label' => __('Secondary Color', 'tour-builder'),
                    'type' => Controls_Manager::COLOR,
                    'alpha' => false,
                    'default' => '#000000',
                    'dynamic' => [
                        'active' => true,
                    ],
                    ]
            );
        $this->end_controls_section();

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
        ?>
        <style>
            #slides_container .color-primary{
                color:<?php echo $settings["color_primary"]?> !important;
            }
            #slides_container .background-primary{
                background-color:<?php echo $settings["color_primary"]?> !important;
            }
            #slides_container .border-primary{
                border-color:<?php echo $settings["color_primary"]?> !important;
            }
            #slides_container .color-secondary{
                color:<?php echo $settings["color_secondary"]?> !important;
            }
            #slides_container .background-secondary{
                background-color:<?php echo $settings["color_secondary"]?> !important;
            }
            #slides_container .border-secondary{
                border-color:<?php echo $settings["color_secondary"]?> !important;
            }
            
        </style>
        <div id="slides_container" style="height:100%;width:100%;"></div>
        <script>
            function init_slides3(){
            document.getElementById("slides_container").parentElement.style.height="100%";
            document.getElementById("slides_container").parentElement.parentElement.style.height="100%";
            var slides3 = new Slides3("slides_container");
            <?php
            if($settings["load_tour"] !== 'true'){
                $tourload = 'false';
            }else{
                $tourload = 'true';
            }
            ?>
            if(window["elementor"]){
                slides3.setTourLoad(<?php echo $tourload ?>);
            }
            <?php if($settings['show_screenshot_button'] === "show") : ?>
                slides3.setShowScreenshotButton(true);
            <?php endif; ?>

            //homeslide
            slides3.createHomeSlide(<?php 
            if($settings['homeslide_background_type'] === "tour"){
                echo '{
                    basepath:"'.$settings["homeslide_background_tour_basepath"].'",
                    node: '.$settings["homeslide_background_tour_node"].',
                    fov: '.$settings["homeslide_background_tour_fov"].',
                    tilt: '.$settings["homeslide_background_tour_tilt"].',
                    pan: '.$settings["homeslide_background_tour_pan"].',
                }';

            }?>);

            <?php if($settings["homeslide_headline"] !== "") :?>
                slides3.addHomeslideHeadline("<?php echo $settings["homeslide_headline"] ?>");
            <?php endif;?>
            <?php if($settings["homeslide_subheadline"] !== "") :?>
                slides3.addHomeslideParagraph("<?php echo $settings["homeslide_subheadline"] ?>");
            <?php endif;?>
            slides3.addHomeslideStartSlidesButton("<?php echo $settings["homeslide_startButton_text"] ?>");
            <?php if($settings["homeslide_logo"] !== "") :?>
                slides3.addHomeslideLogo("<?php echo $settings["homeslide_logo"]["url"] ?>","<?php echo $settings["homeslide_logo_link"]["url"] ?>");
            <?php endif;?>
            <?php echo getHomeslideBackground($settings); ?>
            
            //about us
            <?php if($settings["showAboutUs"] === "show") : ?>
                slides3.setShowAboutUs(true);
                slides3.createAboutContainer();
                slides3.addAboutUsHeadline("<?php echo $settings["about-us_headline"]?>");
                <?php if($settings["about-us_subheadline"] !== "") :?>
                    slides3.addAboutUsSubHeadline("<?php echo $settings["about-us_subheadline"]?>");
                <?php endif;?>
                <?php if($settings["about-us_image"] !== "") :?>
                    slides3.addAboutUsImage("<?php echo $settings["about-us_image"]["url"]?>");
                <?php endif;?>
                <?php if($settings["about-us_description"] !== "") :?>
                    slides3.addAboutUsDescription(`<?php echo $settings["about-us_description"]?>`);
                <?php endif;?>

                //partners
                <?php if(!empty($settings["partners"])) :?>
                    <?php
                    $partners = [];
                    foreach($settings["partners"] as $partner){
                        $partner_array = [
                            "link" => $partner["partner_link"]["url"],
                            "imgURL" => $partner["partner_img"]["url"]
                        ];
                        if($partner["partner_link"]["url"] !== "" || $partner["partner_img"]["url"] !== "")
                        array_push($partners,$partner_array);
                    }?>
                    <?php if(!empty($partners)) :?>
                        slides3.addPartners(<?php echo json_encode($partners) ?>);
                    <?php endif;?>
                <?php endif;?>
            <?php endif; ?>
            //nav
            slides3.createNav();
            <?php foreach($settings["navbar_socials"] as $social){
                if($social["social_type"] !=="" && $social["social_url"]["url"] !== ""){
                    echo 'slides3.addNavbarSocialButton("'.$social["social_type"].'", "'.$social["social_url"]["url"].'");
                    ';
                }
            }
            ?>
         
            //slides 
            <?php 
            $vertical_slide_index = 0;
            $horizontal_slide_index = 0;
            $slide_index;
            foreach($settings["slides"] as $slide){

                $params = getSlideParams($slide);
                if($slide["slide_direction"] === "vertical"){
                    $vertical_slide_index++;
                    $slide_index = $vertical_slide_index;
                    echo 'let slide'.$slide_index.' = slides3.createSlide('.json_encode($params).');';
                }else{
                    $horizontal_slide_index++;
                    $slide_index = $vertical_slide_index."_".$horizontal_slide_index;
                    echo 'let slide'.$slide_index.' = slides3.createSubSlide(slide'.$vertical_slide_index.','.json_encode($params).');';
                }
                echo '
                slides3.addToSlideButtonContainer(slide'.$slide_index.',slides3.addSlideStartButton("'.$slide["slide_tourstart-button-label"].'"));';
                if($slide["slide_facebook_button_link"]["url"] !== ""){
                    echo '
                    slides3.addSlideFacebookButton(slide'.$slide_index.',"'.$slide["slide_facebook_button_link"]["url"].'");';
                }
                if($slide["slide_headline"] !== ""){
                    echo '
                    slides3.addSlideHeadline(slide'.$slide_index.',`'.$slide["slide_headline"].'`);';
                }
                if($slide["slide_description"] !== ""){
                    echo "
                    slides3.addSlideDescription(slide".$slide_index.",`".$slide['slide_description']."`);";
                }
                if($slide["slide_fotograf"] !== ""){
                    echo '
                    slides3.addSlideFotograf(slide'.$slide_index.',"'.$slide["slide_fotograf"].'");';
                }
                if($slide["slide_location"] !== ""){
                    echo '
                    slides3.addSlideLocation(slide'.$slide_index.',"'.$slide["slide_location"].'");';
                }
    
            }
            ?>
            //init
            slides3.init();
        }
        if(window["elementor"]){
            init_slides3();
        }else{
            let slidesInterval = setInterval(function(){
            try {
                if (window["Slides3"]) {
                    clearInterval(slidesInterval);
                    init_slides3();
                }
            }catch (err) {
            console.log(err);
            }
        }, 50);
        }
        </script>
		<?php
    }
}
function getHomeslideBackground($settings){
    switch($settings['homeslide_background_type']){
        case 'tour':
            return '';
        case 'image':
            return 'slides3.addHomeslideBackgroundImage("'.$settings['homeslide_background_image']["url"].'");';
        case 'video':
            return 'slides3.addHomeslideBackgroundVideo("'.$settings['homeslide_background_video'].'");';
    }
}
function getSlideParams($slide){
    $params = [
        "basepath" => $slide["slide_tour_basepath"],
        "node" => $slide["slide_tour_node"],
        "fov" => $slide["slide_tour_fov"],
        "tilt" => $slide["slide_tour_tilt"],
        "pan" => $slide["slide_tour_pan"],
    ];
    return $params;
}