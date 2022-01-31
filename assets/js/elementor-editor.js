class ElementorEditor360ty{
    viewId = "";
    view;
    pano_instance;
    controlsListener = {};
    constructor(viewID, pano_instance){
        this.viewId = viewID;
        this.pano_instance = pano_instance;        
        this.init();
        this.pano_instance.afterReload = this.init;
	}

    init = function () {
        this.pano_instance.waitForPanoLoad().then(function () {
            this.view = this.findViewById(this.viewId);
            this.add_responsive_control_listener();
            this.waitForPanoContainer().then(this.createValueSetterButtons.bind(this));
        }.bind(this));
    }
    getViewId = function () {
        var view = this.pano_instance.elements.container.parentElement.parentElement.parentElement.dataset.id;
        if (view === undefined) {
            view = this.pano_instance.elements.container.parentElement.parentElement.dataset.id;
        }
        return view;
    };
    waitForPanoContainer = function () {
        return new Promise(function (resolve, reject) {
            let containerInterval = setInterval(function (){
                if(this.pano_instance.elements.container){
                    clearInterval(containerInterval);
                    resolve();
                }
            }.bind(this),100);
        }.bind(this));
    }
	setValuesTargetButton_listener(){
		var targetButtonInterval = setInterval(function(){
			if(window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].attributes.listener === undefined){
				clearInterval(targetButtonInterval);
				var button = window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].getElementsByTagName("button")[0];
				button.addEventListener("mouseup",function(){
					button.setAttribute('listener',true);
					var container = this.view.getContainer();
					var settings = this.view.getContainer().settings.attributes;
					settings.basepath = this.pano_instance.pano.getBasePath();
					settings.startnodeID = parseInt(this.pano_instance.pano.getCurrentNode().substring(4));
					settings.fov.size = parseFloat(this.pano_instance.pano.getFov().toFixed(2));
					settings.tilt.size = parseFloat(this.pano_instance.pano.getTilt().toFixed(2));
					settings.pan.size = parseFloat(this.pano_instance.pano.getPan().toFixed(2));
					
					parent.window.$e.run("document/elements/settings", {
						container: container,
						settings: settings,
						options: {
							external: true
						}
					});
				}.bind(this));
				button.addEventListener("touchend",function(){
					button.setAttribute('listener',true);
					var container = this.view.getContainer();
					var settings = this.view.getContainer().settings.attributes;
					settings.basepath = this.pano_instance.pano.getBasePath();
					settings.startnodeID = parseInt(this.pano_instance.pano.getCurrentNode().substring(4));
					settings.fov.size = parseFloat(this.pano_instance.pano.getFov().toFixed(2));
					settings.tilt.size = parseFloat(this.pano_instance.pano.getTilt().toFixed(2));
					settings.pan.size = parseFloat(this.pano_instance.pano.getPan().toFixed(2));
					
					parent.window.$e.run("document/elements/settings", {
						container: container,
						settings: settings,
						options: {
							external: true
						}
					});
				}.bind(this));
			}
		}.bind(this),1000);
	}
	createValueSetterButtons(){
		var buttoncontainer = document.createElement("div");
		buttoncontainer.setAttribute("id", this.pano_instance.elementIDs.buttonContainer_value_setter);
		this.pano_instance.elements.container.appendChild(buttoncontainer);
		this.pano_instance.elements.buttonContainer_value_setter = buttoncontainer;
		var aboveElement = this.pano_instance.elements.buttonContainer_value_setter;
	
		var targetButton = document.createElement("button");
		targetButton.onclick = this.updatePanoValues.bind(this);
		targetButton.setAttribute("id",this.pano_instance.elementIDs.targetValueSetter_button);
		targetButton.setAttribute("class",this.pano_instance.elementIDs.class_valueSetter_button);
		targetButton.innerHTML = "set values to current position";
		targetButton.style.width = "100%";
		
		aboveElement.appendChild(targetButton);
		this.pano_instance.elements.targetValueSetter_button = targetButton;
	}
	findViewById( id ){
		const elements = this.findViewRecursive(
			elementor.getPreviewView().children,
			'id',
			id,
			false
		);
		return elements ? elements[ 0 ] : false;
	}
	findViewRecursive( parent, key, value, multiple){
		let found = [];
		for ( const x in parent._views ) {
			const view = parent._views[ x ];

			if ( value === view.model.get( key ) ) {
				found.push( view );
				if ( ! multiple ) {
					return found;
				}
			}

			if ( view.children ) {
				const views = this.findViewRecursive( view.children, key, value, multiple );
				if ( views.length ) {
					found = found.concat( views );
					if ( ! multiple ) {
						return found;
					}
				}
			}
		}

		return found;
	}
	add_responsive_control_listener(){
			if(window.parent.document.getElementById("elementor-panel-content-wrapper")){
				if(this.controlsListener.controls_panel === undefined || this.controlsListener.controls_panel == false){
					this.controlsListener.controls_panel = true;
					window.parent.document.getElementById("elementor-panel-content-wrapper").addEventListener("mouseup",function(){
						this.toggle_responsive_control_visibility("aspect_ratio","custom_height","tour_height");
						this.toggle_responsive_control_visibility("aspect_ratio","custom","custom_aspect_ratio");
					}.bind(this));
					window.parent.document.getElementById("elementor-panel-content-wrapper").addEventListener("touchend",function(){
						this.toggle_responsive_control_visibility("aspect_ratio","custom_height","tour_height");
						this.toggle_responsive_control_visibility("aspect_ratio","custom","custom_aspect_ratio");
					}.bind(this));
					window.addEventListener("resize", function(){
						this.toggle_responsive_control_visibility("aspect_ratio","custom_height","tour_height");
						this.toggle_responsive_control_visibility("aspect_ratio","custom","custom_aspect_ratio");
					}.bind(this));
					
					this.toggle_responsive_control_visibility_listener("aspect_ratio","custom_height","tour_height");
					this.toggle_responsive_control_visibility_listener("aspect_ratio","custom","custom_aspect_ratio");
					}
			}else{
				var controlsListenerInterval = setInterval(function(){
					if(window.parent.document.getElementById("elementor-panel-content-wrapper")){
						clearInterval(controlsListenerInterval);
						this.add_responsive_control_listener();
					}
				}.bind(this),100);
			}
	}
	
	toggle_responsive_control_visibility_listener(controlName, compareValue, controlToHide, reverse){
		if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
		var control_desktop = window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0];
		var control_tablet = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_tablet")[0];
		var control_mobile = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_mobile")[0];

			control_desktop.addEventListener("mouseup",function(){
				if(this.pano_instance.deviceType() == "desktop"){
					this.toggleControl("desktop",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_tablet.addEventListener("mouseup",function(){
				if(this.pano_instance.deviceType() == "tablet"){
					this.toggleControl("tablet",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_mobile.addEventListener("mouseup",function(){
				if(this.pano_instance.deviceType() == "mobile"){
					this.toggleControl("mobile",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_desktop.addEventListener("touchend",function(){
				if(this.pano_instance.deviceType() == "desktop"){
					this.toggleControl("desktop",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_tablet.addEventListener("touchend",function(){
				if(this.pano_instance.deviceType() == "tablet"){
					this.toggleControl("tablet",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_mobile.addEventListener("touchend",function(){
				if(this.pano_instance.deviceType() == "mobile"){
					this.toggleControl("mobile",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
		}else{
			if(this.controlsListener[controlName] == undefined){
				this.controlsListener[controlName] = {};
			}
			if(this.controlsListener[controlName][controlToHide+"_listener"] === undefined){
				this.controlsListener[controlName][controlToHide+"_listener"] = false;
				var interval_control = setInterval(function(){
					if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
						clearInterval(interval_control);
						this.toggle_responsive_control_visibility(controlName,compareValue,controlToHide,reverse);
					}
				}.bind(this),100);
			}
		}
	}
	toggleControl(type, controlName, compareValue, controlToHide, reverse){
	var controlsToHide = {
		"desktop" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide)[0],
		"tablet" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_tablet")[0],
		"mobile" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_mobile")[0]
	};
	if(type == "desktop"){
		var control_value = this.view.getContainer().settings.attributes[controlName];
	}else{
		var control_value = this.view.getContainer().settings.attributes[controlName + "_" +type];
	}
	
		if(reverse && reverse == true){
			if(control_value == compareValue){
				if(controlsToHide.desktop){
					controlsToHide.desktop.style.display = "none";
				}
				if(controlsToHide.tablet){
					controlsToHide.tablet.style.display = "none";
				}
				if(controlsToHide.mobile){
					controlsToHide.mobile.style.display = "none";
				}
			}else{
				if(controlsToHide[type]){
					controlsToHide[type].style.display = "block";
				}
			}
		}else{
			if(controlsToHide[type]){
				if(control_value == compareValue){
					controlsToHide[type].style.display = "block";
				}else{
					if(controlsToHide.desktop){
						controlsToHide.desktop.style.display = "none";
					}
					if(controlsToHide.tablet){
						controlsToHide.tablet.style.display = "none";
					}
					if(controlsToHide.mobile){
						controlsToHide.mobile.style.display = "none";
					}
				}
			}
		}
	}
	toggle_responsive_control_visibility(controlName, compareValue, controlToHide, reverse){
			if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
			switch(this.pano_instance.deviceType()){
			case "desktop":
				this.toggleControl("desktop",controlName,compareValue,controlToHide,reverse);
				break;
			
			case "tablet":
				this.toggleControl("tablet",controlName,compareValue,controlToHide,reverse);
				break;
			
			case "mobile":
				this.toggleControl("mobile",controlName,compareValue,controlToHide,reverse);
				break;
			default:
				console.error("device type not found");
				}
		}else{
			if(this.controlsListener[controlName] === undefined){
				this.controlsListener[controlName] = {};
			}
			if(this.controlsListener[controlName][controlToHide+"_listener"] === undefined){
				this.controlsListener[controlName][controlToHide+"_listener"] = false;
				var interval_control = setInterval(function(){
					if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
						this.toggle_responsive_control_visibility(controlName,compareValue,controlToHide,reverse);
						clearInterval(interval_control);
					}
				}.bind(this),100);
			}
		}
	}
	
	updatePanoValues(){
			var container = this.view? this.view.getContainer() : this.findViewById(this.getViewId()).getContainer();
			var settings = container.settings.attributes;
			
			settings.basepath = this.pano_instance.pano.getBasePath();
			settings.startnodeID = parseInt(this.pano_instance.pano.getCurrentNode().substring(4));
			settings.fov.size = parseFloat(this.pano_instance.pano.getFov().toFixed(2));
			settings.tilt.size = parseFloat(this.pano_instance.pano.getTilt().toFixed(2));
			settings.pan.size = parseFloat(this.pano_instance.pano.getPan().toFixed(2));
		
		parent.window.$e.run("document/elements/settings", {
			container: container,
			settings: settings,
			options: {
				external: true
			}	
		});
	}

}
