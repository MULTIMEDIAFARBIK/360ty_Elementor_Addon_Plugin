window.addEventListener( 'elementor/init', () => {
	let classWrapper = "control-360ty-algolia";
	var algoliaControlView = elementor.modules.controls.BaseData.extend({
		onReady() {
			this.control_select = this.$el.find(`.${classWrapper}-select`);
			this.save_input = this.$el.find(`.${classWrapper}-input`);
			this.control_select.select2({
				templateSelection: this.selectTemplate,
				placeholder: "click to search tour",
				ajax:{
					url: "https://ERXSFIJXTC-dsn.algolia.net/1/indexes/tours",
					type: "GET",
					data: function(params){
						var query = {
							query : params.term || ""
						};
						return query
					},
					dataType: 'json',
					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'X-Algolia-API-Key' : "52fe8b96fc6ea9bf76196aa1eb7bec0f",
						"X-Algolia-Application-Id" : "ERXSFIJXTC"
					},
					processResults: function(data){
						return{
							results: data.hits.map(hit => ({id:hit.basepath, text:hit.tour}))
						}
					},
					
					cache: true
				}
			});

			this.control_select.on('change', ()=>{
				this.saveValue();
			});
		},
		saveValue() {
			this.setValue(this.control_select.val());
			this.save_input.val(this.control_select.val())
		},
		onBeforeDestroy() {
			this.saveValue();
			this.control_select.find('')
		}
	});
	elementor.addControlView( 'algolia-360ty', algoliaControlView );
});