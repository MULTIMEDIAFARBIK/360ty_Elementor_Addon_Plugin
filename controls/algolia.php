<?php

class Elementor_Algolia_Control extends \Elementor\Base_Data_Control {
    public function get_type() {
        return 'algolia-360ty';
    }

	protected function get_default_settings() {
        return [
            'label_block' => true,
            'seperator' => 'after',
            'tours' => [],
            'dynamic' => [
				'active' => true,
				'categories' => [ \Elementor\Modules\DynamicTags\Module::URL_CATEGORY, \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ],
			],
        ];
    }

	public function get_default_value() {
        return 'https://lechwinter.360ty.cloud/';
    }

	public function content_template() {
        $control_uid = $this->get_control_uid();
		?>
		<div class="elementor-control-field">

			<# if ( data.label ) {#>
				<label for="<?php echo $control_uid; ?>" class="elementor-control-title">{{{ data.label }}}</label>
			<# } #>
                <div class="elementor-control-input-wrapper control-360ty-algolia-wrapper">
					<label for="<?php echo esc_attr( $control_uid ); ?>-select" class="control-360ty-algolia-label">search</label>
					<select id="<?php echo esc_attr( $control_uid ); ?>-select" style="width:100%; margin-bottom: .5em;" class="control-360ty-algolia control-360ty-algolia-select"></select>
					<label for="<?php echo esc_attr( $control_uid ); ?>"  class="control-360ty-algolia-label">URL</label>
					<div class="elementor-control-dynamic-switcher-wrapper">
						<input id="<?php echo esc_attr( $control_uid ); ?>" type="text" class = "control-360ty-algolia control-360ty-algolia-input" data-setting="{{ data.name }}" data-tooltip="{{ data.title }}" title="{{ data.title }}" default="{{data.default}}" placeholder="{{ data.placeholder }}"></input>
					</div>
				</div>
		</div>

		<# if ( data.description ) { #>
			<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>

		<?php
	}

	public function enqueue() {
        // Styles
        wp_register_style( 'algolia-control-style', plugins_url( 'assets/css/algolia-control.css', __FILE__ ) );
		wp_enqueue_style( 'algolia-control-style' );

		// Scripts
		wp_register_script( 'algolia-control-script', plugins_url( 'assets/js/algolia-control.js', __FILE__ ),["jquery"]);
		wp_enqueue_script( 'algolia-control-script' );
    }
}