class Pano_360ty{
	constructor(parentContainerID,basepath, suffix){
	this.deviceType = function(){
			if(window.matchMedia("only screen and (max-width: 400px)").matches == true){
				return "mobile";
			}else if(window.matchMedia("only screen and (max-width: 800px)").matches == true){
				return "tablet";
			}else{
				return "desktop";
		}
	};
	this.name = function(){
		for (var name in window)
		  if (window[name] == this)
			return name;
};
	this.suffix = suffix !== undefined ? suffix : "instance";

	this.elementIDs = {
		parentContainer : parentContainerID,
		container : "tourbuilder_360ty_"+this.suffix,
		panoContainer : "pano_container_360ty_"+this.suffix,
		impressumContainer : "impressum_360ty_"+this.suffix,
		buttonContainer : "button_container_360ty_"+this.suffix,
		shareButton : "shareButton_360ty_"+this.suffix,
		FBshareButton : "FBshareButton_360ty_"+this.suffix,
		URLshareButton : "URLshareButton_360ty_"+this.suffix,
		slidesButton : "slidesButton_360ty_"+this.suffix,
		class_shareButtons : "shareButton_360ty_"+this.suffix,
		buttonContainer_value_setter : "buttonContainer_value_setter_360ty_"+this.suffix,
		targetValueSetter_button : "setTargetValue_360ty_"+this.suffix,
		startValueSetter_button : "setStartValues_360ty_"+this.suffix,
		class_valueSetter_button : "valueSetter_360ty_"+this.suffix,
	};
	
	this.elements = {
		parentContainer : null,
		panoContainer : null,
		container : null,
		impressumContainer : null,
		impressum : null,
		buttonContainer : null,
		shareButton : null,
		URLshareButton : null,
		FBshareButton : null,
		buttonContainer_value_setter : null,
		targetValueSetter_button : null,
		startValueSetter_button : null,
	};

	this.tour_params = {
		base_Tour : basepath ? basepath : "",
		node : null,
		fov : null,
		tilt : null,
		pan : null,
		roll : null,
	};
	this.movement_params = {
		keyframes : [],
		delay : 0,
		loop_amount : 1,
		movementAborted : false
	}
	this.addons_params = {
		singleImage : null,
		share_buttons : null,
		show_impressum : null,
	};
	this.responsive_params = {
			tablet : {
				tour_dimensions : {
					width: null,
					height: null
				},
				singleImage : null,
				share_buttons : null,
				show_impressum : null,
				horizontal_alignment : null,
			},
			mobile: {
				tour_dimensions : {
					width: null,
					height: null
				},
				singleImage : null,
				share_buttons : null,
				show_impressum : null,
				horizontal_alignment : null,
			}
	};
	this.style_params = {
		tour_dimensions: {
			width: "100%",
			height: "16:9"
		},
		horizontal_alignment : null,
	};
	
	this.skin_variables = [];
	this.hovered_node = null,
    this.externalHotspotListenerSet = false;
	this.pano = null;
	this.skin = null;
	this.controlsListener = {};
	this.getWebGLcontexts = function(){
		var contexts = [];
		var canvas = this.elements.panoContainer.querySelectorAll("canvas");
			for(let i = 0; i < canvas.length ; i++){
				contexts.push(canvas[i].getContext("webgl"));
			}
			return contexts;
	};
	this.pano_loaded =  function(){
			if(this.pano != null){
				return this.pano.isLoaded;
				}else{
					return false;
				}
			};
	}
init () {
	if(!document.getElementById(this.elementIDs.container)){
		let viewportMetaSet = false;
		document.head.querySelectorAll("meta").forEach(function(meta){
			if(meta.name === "viewport"){
				viewportMetaSet = true;
			}
		}.bind(this));
		if(viewportMetaSet === false){
			this.addMeta("viewport","width=device-width, initial-scale=1");
		}
		this.includeStyle();
		var share_buttons;
		var show_impressum;
		var tour_width;
		var tour_height;
		var horAlign;
		switch(this.deviceType()){
			case 'desktop':
				share_buttons = this.addons_params.share_buttons;
				show_impressum = this.addons_params.show_impressum;
				tour_width = this.style_params.tour_dimensions.width;
				tour_height = this.style_params.tour_dimensions.height;
				horAlign = this.style_params.horizontal_alignment;
				break;
			case 'tablet':
				share_buttons = this.responsive_params.tablet.share_buttons;
				show_impressum = this.responsive_params.tablet.show_impressum;
				tour_width = this.responsive_params.tablet.tour_dimensions.width;
				tour_height = this.responsive_params.tablet.tour_dimensions.height;
				horAlign = this.responsive_params.tablet.horizontal_alignment;
				break;
			case 'mobile':
				share_buttons = this.responsive_params.mobile.share_buttons;
				show_impressum = this.responsive_params.mobile.show_impressum;
				tour_width = this.responsive_params.mobile.tour_dimensions.width;
				tour_height = this.responsive_params.mobile.tour_dimensions.height;
				horAlign = this.responsive_params.mobile.horizontal_alignment;
				break;
			default:
				share_buttons = this.addons_params.share_buttons;
				show_impressum = this.addons_params.show_impressum;
				tour_width = this.style_params.tour_dimensions.width;
				tour_height = this.style_params.tour_dimensions.height;
				horAlign = this.style_params.horizontal_alignment;
				break;
		}
		let init_interval = setInterval(function(){
			if(document.getElementById(this.elementIDs.parentContainer)){
				clearInterval(init_interval);
				this.declareElements();
				this.setup_pano();
				if(share_buttons == true){
					this.setupButtons();
				}
				if(show_impressum == true){
					this.createImpressum();
				}
				
				this.setViewerSize(tour_width,tour_height);
				
				if(horAlign){
					this.horizontallyAlignImage(horAlign);
				}
				this.addListeners();
			}
		}.bind(this),100);
	}
}
//user inputs
setBasePath(url){
	if(typeof(url) === "string"){
		if(!url.endsWith("/")){
			url += "/"; 
		}
		if(url.startsWith("http://")){
			url = url.substring(7);
			url = "https://" + url; 
		}
		if(!url.startsWith("https://")){
			url = "https://" + url; 
		}
		this.tour_params.base_Tour = url;
	}else{
		console.log("basepath URL has to be a String in the following Format: 'https://*.360ty.cloud' or 'https://*.360ty.tour.world' ")
	}
}
setDimensions(width, height){
	this.setWidth(width);
	this.setHeight(height);
}
setWidth(width){
	this.style_params.tour_dimensions.width = width;
}
setHeight(height){
	this.style_params.tour_dimensions.height = height;
}

setStartNode(nodeNr){
	typeof(nodeNr) == "number"?
	this.tour_params.node = nodeNr
	: console.log("start node value has to be a number");
}
setViewingParameter(fov,tilt,pan,roll){
	this.setFov(fov);
	this.setTilt(tilt);
	this.setPan(pan);
	if(roll){
		this.setRoll(roll);
	}
}
setFov(fov){
	typeof(fov) == "number"?
	this.tour_params.fov = fov
	: console.log("fov value has to be a number");
}
setTilt(tilt){
	typeof(tilt) == "number"?
	this.tour_params.tilt = tilt
	: console.log("tilt value has to be a number");
}
setPan(pan){
	typeof(pan) == "number"?
	this.tour_params.pan = pan
	: console.log("fov value has to be a number");
}
setRoll(roll){
	typeof(roll) == "number"? this.tour_params.roll = roll
	: console.log("roll value has to be a number");
}
setSingleImage(bool){
	typeof(bool) == "boolean"?
	this.addons_params.singleImage = bool
	: console.log("single image value has to be a boolean (true,false)");
}
setShareButtonVisibility(bool){
	typeof(bool) == "boolean"?
	this.addons_params.share_buttons = bool
	: console.log("sharebutton value has to be a boolean (true,false)");
}
setImpressumVisibility(bool){
	typeof(bool) == "boolean"?
	this.addons_params.show_impressum = bool
	: console.log("impressum value has to be a boolean (true,false)");
}
setHorizontalAlignment (value){
	value === "left"  || "center" || "right" ? this.style_params.horizontal_alignment = value
	: console.log("horizontal alignment value has to be either 'left', 'center' or 'right'")
}
//tablet parameter
setDimensions_tablet(width, height){
	this.setWidth_tablet(width);
	this.setHeight_tablet(height);
}
setWidth_tablet(width){
	this.responsive_params.tablet.tour_dimensions.width = width;
}
setHeight_tablet(height){
	this.responsive_params.tablet.tour_dimensions.height = height;
}
setSingleImage_tablet(bool){
	typeof(bool) == "boolean"?
	this.responsive_params.tablet.singleImage = bool
	: console.log("single image value has to be a boolean (true,false)");
}
setShareButtonVisibility_tablet(bool){
	typeof(bool) == "boolean"?
	this.responsive_params.tablet.share_buttons = bool
	: console.log("sharebutton value has to be a boolean (true,false)");
}
setImpressumVisibility_tablet(bool){
	typeof(bool) == "boolean"?
	this.responsive_params.tablet.show_impressum = bool
	: console.log("impressum value has to be a boolean (true,false)");
}
setHorizontalAlignment_tablet(value){
	value === "left"  || "center" || "right" ? this.responsive_params.tablet.horizontal_alignment = value
	: console.log("horizontal alignment value has to be either 'left', 'center' or 'right'")
}
//mobile parameter
setDimensions_mobile(width, height){
	this.setWidth_mobile(width);
	this.setHeight_mobile(height);
}
setWidth_mobile(width){
	this.responsive_params.mobile.tour_dimensions.width = width;
}
setHeight_mobile(height){
	this.responsive_params.mobile.tour_dimensions.height = height;
}
setSingleImage_mobile(bool){
	typeof(bool) == "boolean"?
	this.responsive_params.mobile.singleImage = bool
	: console.log("single image value has to be a boolean (true,false)");
}
setShareButtonVisibility_mobile(bool){
	typeof(bool) == "boolean"?
	this.responsive_params.mobile.share_buttons = bool
	: console.log("sharebutton value has to be a boolean (true,false)");
}
setImpressumVisibility_mobile (bool){
	typeof(bool) == "boolean"?
	this.responsive_params.mobile.show_impressum = bool
	: console.log("impressum value has to be a boolean (true,false)");
}
setHorizontalAlignment_mobile(value){
	value === "left"  || "center" || "right" ? this.responsive_params.mobile.horizontal_alignment = value
	: console.log("horizontal alignment value has to be either 'left', 'center' or 'right'")
}
//
setSkinVariables (array_vars) {
	typeof(array_vars) === "object"? (typeof(array_vars[0]) === "object"
	?array_vars.forEach(function(obj_var){
		this.skin_variables.push(obj_var)
	}.bind(this))
	:console.log("params in the array have to be objects [{varname: value},...]"))
	:console.log("skin variable values have to be an array of objects [{varname: value},...]");
}
setMovementDelay(delay){
	typeof(delay) === "number" ? this.movement_params.delay = delay
	: console.log("move delay has to be a number (in ms)")
}
setMovementLoopAmount (loop_amount){
	typeof(loop_amount) === "number" ? this.movement_params.loop_amount = loop_amount
	: console.log("loop amount has to be a number")
}
addKeyframe (fov,tilt,pan,speed,lock_controls, node){
	var keyframeParams = {
		fov : fov,
		tilt : tilt,
		pan : pan,
		speed : speed,
		locked_controls : lock_controls,
		node : node
	}
	let valid = this.checkKeyframeParams(keyframeParams);
	valid === true ? this.movement_params.keyframes.push(keyframeParams) : console.log("keyframe values not valid. -> (fov:number,tilt:number,pan:number,speed:number,locked_controls:'all'||'none'||'Mousewheel'||'Mouse'||'Keyboard'||'Keyboard+Mousewheel',[optional]node:number)")
	
}
reload(){
	this.clearwebglContext()

	this.elements.container.parentElement.removeChild(this.elements.container);
	this.elements.container = null;
	this.elements.panoContainer = null;
	if(this.elements.shareButton){
		this.elements.shareButton.parentElement.removeChild(this.elements.shareButton);
		this.elements.shareButton = null;
	}
	if(this.elements.FBshareButton){
		this.elements.FBshareButton.parentElement.removeChild(this.elements.FBshareButton);
		this.elements.FBshareButton = null;
	}
	if(this.elements.URLshareButton){
		this.elements.URLshareButton.parentElement.removeChild(this.elements.URLshareButton);
		this.elements.URLshareButton = null;
	}
	if(this.elements.buttonContainer){
		this.elements.buttonContainer.parentElement.removeChild(this.elements.buttonContainer);
		this.elements.buttonContainer = null;
	}
	if(this.elements.impressumContainer){
		this.elements.impressumContainer.parentElement.removeChild(this.elements.impressumContainer);
		this.elements.impressumContainer = null;
	}
	this.init();
}
checkKeyframeParams(keyframeParams){
	if(typeof(keyframeParams.fov) === "number" && typeof(keyframeParams.tilt) === "number" && typeof(keyframeParams.pan) === "number" &&
	typeof(keyframeParams.speed) === "number" && (keyframeParams.locked_controls === 'all'||'none'||'Mousewheel'||'Mouse'||'Keyboard'||'Keyboard+Mousewheel')
	&& typeof(keyframeParams.node) === "number" || "undefined"){
		return true
	}else{
		return false
	}
}
//
checkIncludedStyle(){
	var nodes = document.head.childNodes;
	var link_list = [];
	for(let i = 0; i < document.head.childElementCount; i++){
		if(nodes[i].nodeName == "LINK"){
			link_list.push(nodes[i]);
		}
	}
	for(let i = 0; i < link_list.length;i++){
		if(link_list[i].href.includes("360ty_styles.css")){
			return true;
		}
	}
	return false;
}

includeStyle(){
	if(this.checkIncludedStyle() == false){
		var style_include = document.createElement("link");
		style_include.rel = "stylesheet";
		style_include.href = "https://storage.googleapis.com/api.360ty.cloud/360ty_styles.css";
		document.head.appendChild(style_include);
	}
}

declareElements(){
	this.elements.parentContainer = document.getElementById(this.elementIDs.parentContainer);

	if(this.responsive_params.tablet.tour_dimensions.width === null){
		this.responsive_params.tablet.tour_dimensions.width = this.style_params.tour_dimensions.width
	}
	if(this.responsive_params.tablet.tour_dimensions.height === null){
		this.responsive_params.tablet.tour_dimensions.height = this.style_params.tour_dimensions.height
	}
	if(this.responsive_params.tablet.singleImage === null){
		this.responsive_params.tablet.singleImage = this.addons_params.singleImage
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.share_buttons = this.addons_params.share_buttons
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.show_impressum = this.addons_params.show_impressum
	}
	if(this.responsive_params.tablet.share_buttons === null){
		this.responsive_params.tablet.horizontal_alignment = this.addons_params.horizontal_alignment
	}
	
	if(this.responsive_params.mobile.tour_dimensions.width === null){
		this.responsive_params.mobile.tour_dimensions.width = this.style_params.tour_dimensions.width
	}
	if(this.responsive_params.mobile.tour_dimensions.height === null){
		this.responsive_params.mobile.tour_dimensions.height = this.style_params.tour_dimensions.height
	}
	if(this.responsive_params.mobile.singleImage === null){
		this.responsive_params.mobile.singleImage = this.addons_params.singleImage
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.share_buttons = this.addons_params.share_buttons
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.show_impressum = this.addons_params.show_impressum
	}
	if(this.responsive_params.mobile.share_buttons === null){
		this.responsive_params.mobile.horizontal_alignment = this.addons_params.horizontal_alignment
	}
}
/*
responsive_init(array_varNames ,array_prefixes){
	var i = 0;
	array_varNames.forEach(varName =>{
	if((this[array_prefixes[i]][varName] || this[varName]) && this.responsive_params[varName]){
		if(i > array_varNames.length -1){
			i = 0;
		}
		switch(this.deviceType()){
				case "mobile":
					if(array_prefixes[i] == ""){
						this[varName] = this.responsive_params[varName].mobile;
					}else{
						this[array_prefixes[i]][varName] = this.responsive_params[varName].mobile;
					}
					break;
				case "tablet":
					if(array_prefixes[i] == ""){
						this[varName] = this.responsive_params[varName].tablet;
					}else{
						this[array_prefixes[i]][varName] = this.responsive_params[varName].tablet;
					}
					break;
				case "desktop":
					if(array_prefixes[i] == ""){
						this[varName] = this.responsive_params[varName].desktop;
					}else{
						this[array_prefixes[i]][varName] = this.responsive_params[varName].desktop;
					}
					break;
			}
			i++;
		}
	});

}

chooseHeight(){
	switch(this.style_params.tour_dimensions.aspect_ratio){
		case "custom_height":
			return this.style_params.tour_dimensions.height;
			break;
		case "custom":
			return this.style_params.tour_dimensions.custom_aspect_ratio;
			break;
		default:
			return this.style_params.tour_dimensions.aspect_ratio;
			break;
		}
	}
*/


addMeta(metaName, metaContent){
	var meta = document.createElement("meta");
	meta.name = metaName;
	meta.content = metaContent;
	document.head.appendChild(meta);
}
//setup_pano

setup_pano(){
	if(!this.elements.panoContainer){
		this.createContainer();
	}
	this.pano=new pano2vrPlayer(this.elementIDs.panoContainer);
	if(this.tour_params.node){
		this.pano.startNode = "node"+this.tour_params.node;
	}
	
	this.skin=new pano2vrSkin(this.pano,this.tour_params.base_Tour);
	var singleImage;
	switch(this.deviceType()){
		case 'desktop':
			singleImage = this.addons_params.singleImage;
			break;
		case 'tablet':
			singleImage = this.responsive_params.tablet.singleImage;
			break;
		case 'mobile':
			singleImage = this.responsive_params.mobile.singleImage;
			break;
		default:
			singleImage = this.addons_params.singleImage;
	}
	this.pano.readConfigUrlAsync(this.tour_params.base_Tour +"pano.xml", function(){
        if(singleImage === true){
			this.pano.removeHotspots();
			this.pano.stopAutorotate();
		}
		if(this.skin_variables){
			this.changeSkinVars();
		}
		this.pano_UpdateViewingParams();
	
}.bind(this))
this.callAfterPanoLoaded("loadKeyframes");
this.callAfterPanoLoaded("addHotspotListeners");
}
pano_UpdateViewingParams(){
	if(this.tour_params.fov || this.tour_params.fov === 0){
		this.pano.setFov(this.tour_params.fov);
	}
	if(this.tour_params.tilt || this.tour_params.tilt === 0){
		this.pano.setTilt(this.tour_params.tilt)
	}
	if(this.tour_params.pan || this.tour_params.pan === 0){
		this.pano.setPan(this.tour_params.pan)
	}
}
async loadKeyframes (){
	setTimeout(async function(){
			if(this.movement_params.keyframes !== []){
				this.elements.panoContainer.addEventListener("mousedown",function(){
			
						this.movement_params.movementAborted = true
					
				}.bind(this));
				this.elements.panoContainer.addEventListener("touchstart",function(){
					this.movement_params.movementAborted = true
				}.bind(this))
				for(let i = 0; i< this.movement_params.loop_amount;i++){
					if(this.movement_params.movementAborted === false){
						await this.moveToKeyframes();
					}else{
						break;
					}
				}
			}
	
	}.bind(this),this.movement_params.delay);
}
moveToStartNode(){
	return new Promise(function(resolve, reject){
		if(this.tour_params.node){
			this.elements.panoContainer.addEventListener("mousedown",function(){
			
				reject("movement aborted by user")
			
		}.bind(this));
		this.elements.panoContainer.addEventListener("touchstart",function(){
			reject("movement aborted by user")
		}.bind(this))
			if(parseInt(this.pano.getCurrentNode().substring(4)) !== this.tour_params.node){
				this.pano.openNext("{node"+this.tour_params.node+"}")
			}
			resolve();
		}else{
			reject("start node not set");
		}
	}.bind(this))
}
async moveToKeyframes(){
		try{
			const promises = this.movement_params.keyframes.map(async function(keyframe){
			const frame = await this.moveToKeyframe(keyframe);
			return frame;
		}.bind(this))
		const frames = await Promise.all(promises)
		return frames;
	
	}catch(err){
		console.log(err)
	}
}
moveToKeyframe (keyframe){
	return new Promise(async function(resolve,reject){
		try{
			if(this.movement_params.movementAborted === false){
				await this.checkActiveMovement();
				this.setLock(keyframe.locked_controls)
				if(this.movement_params.keyframes[0] == keyframe){
					await this.moveToStartNode()
				}
				if(keyframe.node && "node"+keyframe.node !== this.pano.getCurrentNode()){
					await this.pano.openNext("{node"+keyframe.node+"}")
				}
				await this.pano.moveTo(keyframe.pan, keyframe.tilt, keyframe.fov,keyframe.speed,0,1);
				this.removeLockAfterMovement(keyframe.locked_controls);
				if(keyframe.node && !this.pano.getNodeIds().includes("node"+keyframe.node)){
					reject("movement aborted")
					console.log("Aborted Movement! There is no node"+keyframe.node+" in this tour.")
				}else{
					resolve()
				}
			}
		}catch(err){console.log(err)}
	}.bind(this))
}
checkActiveMovement(){
	return new Promise(async function(resolve,reject){
		var activeMov = setInterval(function(){
			if(this.movement_params.movementAborted === true){
				reject("movement aborted by user")
			}
			if(this.pano.F.active === false){
				clearInterval(activeMov)
				resolve()
			}
		}.bind(this),100)
	}.bind(this));
}

changeSkinVars(){
	if(typeof(this.skin_variables) === "object"){
		this.skin_variables.forEach(function(variable){
			for(const[key,value] of Object.entries(variable)){
				if(value !== null || value !== ""){
					this.pano.setVariableValue(key,value);
				}
			}
		}.bind(this));
	} 
}
removeLockAfterMovement(type){
	if(type != "none"){
	switch (type){
		case "all":
			var lock_controls_interval = setInterval(function(){
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLocked(false);
					}
				}.bind(this),100);
			break;
		case "Mousewheel":
			var lock_controls_interval = setInterval(function(){
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedWheel(false);
					}
				}.bind(this),100);
			break;
		case "Mouse":
			var lock_controls_interval = setInterval(function(){
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedMouse(false);
					}
				}.bind(this),100);
			break;
		case "Keyboard":
			var lock_controls_interval = setInterval(function(){
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedKeyboard(false);
					}
				}.bind(this),100);
			break;
		case "Keyboard_Mousewheel":
			var lock_controls_interval = setInterval(function(){
					if(this.pano.F.active == false){
						clearInterval(lock_controls_interval);
						this.pano.setLockedKeyboard(false);
						this.pano.setLockedWheel(false);
					}
				}.bind(this),100);
			break;
		default:
			console.log("couldnt find lock-parameter "+type);
			break;
		}
	}
}
setLock(type){
	if(type != "none"){
	switch (type){
		case "all":
			this.pano.setLocked(true);
			break;
		case "Mousewheel":
			this.pano.setLockedWheel(true);
			break;
		case "Mouse":
			this.pano.setLockedMouse(true);
			break;
		case "Keyboard":
			this.pano.setLockedKeyboard(true);
			break;
		case "Keyboard_Mousewheel":
			this.pano.setLockedKeyboard(true);
			this.pano.setLockedWheel(true);
			break;
		default:
			console.log("couldnt find lock-parameter "+type);
			break;
		}
	}
}

createContainer(){
 	var parentContainer = this.elements.parentContainer;
	var container = document.createElement("div");
	var pano_container = document.createElement("div");
	pano_container.setAttribute("id",this.elementIDs.panoContainer);
	container.style.width = this.elements.parentContainer.getBoundingClientRect().width + "px";
	container.style.height = this.elements.parentContainer.getBoundingClientRect().height + "px";
	pano_container.style.width = container.getBoundingClientRect().width + "px";
	pano_container.style.height = container.getBoundingClientRect().height + "px";
    container.setAttribute("id",this.elementIDs.container);
	parentContainer.appendChild(container);
	container.appendChild(pano_container);

	this.elements.panoContainer = pano_container;
	this.elements.container = container;
}

createImpressum(){
	var parent = this.elements.container;
	var impressumContainer = document.createElement("div");
	impressumContainer.setAttribute("id",this.elementIDs.impressumContainer);
	var p = document.createElement("p");
 	var impressum = document.createElement("a");
    impressum.setAttribute("href","https://360ty.world/");
 	impressum.setAttribute("target","_blank");
	impressum.innerHTML = "360ty.world | Made with ♥ in Europe";
 	parent.appendChild(impressumContainer);
	impressumContainer.appendChild(p);
	p.appendChild(impressum);
	this.elements.impressum = impressum;
	this.elements.impressumContainer = impressumContainer;
}

checkParameter(){
	var exceptions = ["singleImage","customClass"];
	var check = true;
for (var prop in this.tour_params){
	if(exceptions.includes(prop) == false){
		if(prop == null){
			console.error("360ty Pano - emtpy or wrong parameter" , "parameter "+prop+" empty or wrong! Please fill it out correctly and try again.");
			check = false;
		}
	}
}
 if(check == true){
        return true;
    } else {
        return false;
    }
}



addHotspotListeners(){
	var hotspots = this.elements.panoContainer.getElementsByClassName("ggskin_hotspot");
	for(let i = 0; i<hotspots.length;i++){
	hotspots[i].addEventListener("mouseover",function(){
	var timesCalled = 0;
	var hn_interval = setInterval(function(){
		if(timesCalled < 25){
		if(this.pano && this.pano.hotspot){
			var hotspot = this.pano.hotspot;
		}
		if(hotspot.url != ""){
			this.hovered_node = hotspot;
			clearInterval(hn_interval);
		}else{
			timesCalled++
		}
		}else{
			clearInterval(hn_interval);
		}
	}.bind(this),10);
	}.bind(this));
	hotspots[i].addEventListener("mouseup",function(){
		if(this.hovered_node.url.includes("http")){
		var hotspotURL = this.hovered_node.url;
		var basePathStartIndex = hotspotURL.indexOf("//")+2;
		var basePathEndIndex = hotspotURL.indexOf("/",basePathStartIndex);
		var basepath = hotspotURL.substring(0,basePathEndIndex+1);
		var nodeIndex = hotspotURL.indexOf("#",basePathEndIndex)+5;
		var nodeID = hotspotURL.substring(nodeIndex,hotspotURL.length);
		this.tour_params.base_Tour = basepath;
		this.tour_params.node = nodeID;
		this.tour_params.fov = start_fov;
		this.tour_params.pan = start_pan + 20;
		this.tour_params.tilt = start_tilt;
        this.setup_pano();
        this.externalHotspotListenerSet = false;
	}
	}.bind(this));
    }
    if(this.externalHotspotListenerSet == false){
        this.externalHotspotListenerSet = true;
        this.pano.addListener("changenode",function(){
            this.addHotspotListeners();
        }.bind(this));
    }
}


//buttons
setupButtons(){
	if(this.elements.shareButton == null){
	if(this.pano && this.pano.isLoaded == true){
		this.createShareButtons();
	}else{
		var shareButtonsInterval = setInterval(function(){
			if(this.pano && this.pano.isLoaded == true){
				this.createShareButtons();
				clearInterval(shareButtonsInterval);
				}
		}.bind(this),100);
	}
	}
}

callAfterPanoLoaded(callbackName){
	var called = false;
	if(this.pano_loaded() == true){
		this[callbackName]();
	}else{
		var panoLoaded_interval = setInterval(function(){
			if(this.pano_loaded() == true){
					clearInterval(panoLoaded_interval);
					if(called == false){
						this[callbackName]();
						called = true;
					}
				}
		}.bind(this),100);
	}
}

createButton(onclickEvent, id, text, style_display){
	if(this.elements.buttonContainer !== null){
		var buttonContainer = this.elements.buttonContainer;
	}else{
		var buttonContainer = document.createElement("div");
		buttonContainer.setAttribute("id",this.elementIDs.buttonContainer);
		this.elements.container.appendChild(buttonContainer);
		this.elements.buttonContainer = buttonContainer;
	}
	var button = document.createElement("button");
    button.setAttribute("id",this.elementIDs[id]);
    button.setAttribute("class",this.elementIDs.class_shareButtons);
    if(style_display){
    	button.setAttribute("style","display: "+ style_display +";");
	}
	button.addEventListener("click",function(){
		this[onclickEvent]();
	}.bind(this))
    button.innerHTML = text;
	buttonContainer.appendChild(button);
	this.elements[id] = button;
}

createShareButtons(){
    this.createButton("showShareButtons","shareButton","share");
    this.createButton("shareOnFacebook","FBshareButton", "share on facebook","none");
 	this.createButton("copyShareUrlToClipboard","URLshareButton", "get link to location","none");
}

copyShareUrlToClipboard (){
	this.copyToClipboard(this.getShareURL(),'link')
}

showShareButtons(){
	this.elements.shareButton.style.display = "none";
	this.elements.URLshareButton.style.display = "";
	this.elements.FBshareButton.style.display = "";
}

shareOnFacebook(){
    var facebookURL =  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = window.visualViewport?(window.visualViewport.width / 2) : (window.screen.availWidth / 2);
    var topPosition = window.visualViewport?(window.visualViewport.height / 2) : (window.screen.availWidth / 2);
    var popUpSettings = 'height=700,width=500, screenX =' + leftPosition + ',screenY =' + topPosition + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
    var win = window.open(facebookURL,'popUpWindow',popUpSettings);
    win.focus();
}

copyToClipboard(text,alertText){ 
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert(alertText + ' copied to clipboard!');
}

getShareURL(){
        var shareUrl = this.pano.getBasePath() +"?Pano=" + this.pano.getCurrentNode() + "&PanoFovTarget=" + this.pano.getFov() + "&PanoPanTarget=" + this.pano.getPan() + "&PanoTiltTarget=" + this.pano.getTilt() + "&PanoFovStart=" + (this.pano.getFov() + 20) + "&PanoPanStart=" + (this.pano.getPan() +50) + "&PanoTiltStart=" + this.pano.getTilt();
      return shareUrl;
}
addListeners() {
			this.windowResizeListener();
			this.clearwebglContext_listener();
		}
windowResizeListener(){
	if(window.visualViewport){
		window.visualViewport.addEventListener("resize", function(){
			let height;
			let width;
			switch(this.deviceType()){
				case "desktop":
					width = this.style_params.tour_dimensions.width;
					height = this.style_params.tour_dimensions.height;
					break;
				case "tablet":
					width = this.responsive_params.tablet.tour_dimensions.width;
					height = this.responsive_params.tablet.tour_dimensions.height;
					break;
				case "mobile":
					width = this.responsive_params.mobile.tour_dimensions.width;
					height = this.responsive_params.mobile.tour_dimensions.height;
					break;
			}
			this.setViewerSize(width,height);
		}.bind(this));
	}else{
		window.addEventListener("resize", function(){
			let height;
			let width;
			switch(this.deviceType()){
				case "desktop":
					width = this.style_params.tour_dimensions.width;
					height = this.style_params.tour_dimensions.height;
					break;
				case "tablet":
					width = this.responsive_params.tablet.tour_dimensions.width;
					height = this.responsive_params.tablet.tour_dimensions.height;
					break;
				case "mobile":
					width = this.responsive_params.mobile.tour_dimensions.width;
					height = this.responsive_params.mobile.tour_dimensions.height;
					break;
			}
			this.setViewerSize(width,height);
		}.bind(this));
	}
	
}
setViewerSize(width, height){
		width =  isNaN(width) == false ? width + "px" : width;
		this.elements.container.style.width = width;

		height = isNaN(height) === false ? height + "px" : (height.includes(":") ? this.calculateAspectRatio(height) + "px" : (height.endsWith("%%") ? this.calcHeight_Precentage(height) + "px" : height));
		this.elements.container.style.height = height;
		
		var containerSize = this.elements.container.getBoundingClientRect();
		this.elements.panoContainer.style.width = containerSize.width + "px";
		this.elements.panoContainer.style.height = containerSize.height + "px";
		this.pano.setViewerSize(containerSize.width,containerSize.height);
	}
calculateAspectRatio(ratio){
	var colonIndex = ratio.indexOf(":");
	var x_aspect = parseFloat(ratio.substring(0,colonIndex));
	var y_aspect = parseFloat(ratio.substring(colonIndex+1));
	var height = this.elements.container.getBoundingClientRect().width/(x_aspect/y_aspect);
	return height;
}
calcHeight_Precentage(height){
	var width = this.elements.container.getBoundingClientRect().width;
	var perc_height = parseFloat(height.substring(-1))/100;
	var calc_height = width * perc_height;
	return calc_height;
}
horizontallyAlignImage(alignment){
	var container_style = this.elements.container.style;
	switch(alignment){
		case "center":
			container_style.marginRight = "auto";
			container_style.marginLeft = "auto";

			break;
		case "left":
			container_style.marginRight = "auto";
			container_style.marginLeft = "";

			break;
		case "right":
			container_style.marginRight = "";
			container_style.marginLeft = "auto";
	}
}	

clearwebglContext_listener(){
	document.addEventListener("close", function(){
		this.clearwebglContext()
	}.bind(this));
}
clearwebglContext(){
	var canvas = this.elements.panoContainer.getElementsByTagName("canvas");
	for( let i = 0; i< canvas.length;i++){
		canvas[i].getContext('webgl').getExtension('WEBGL_lose_context').loseContext();
	}
	console.log("panorama wegl context cleared");
}
/*
*/
}
class Elementor_360ty extends Pano_360ty{
	constructor(parentContainerID,basepath, suffix){
		super(...arguments);
		this.viewID = suffix;
		this.view = () => {
			return this.findViewById(this.viewID);
		}
		this.controlsListener = {};
		this.elementorEditing = () => {
			if(window["elementor"]){
				return true;
			}else{
				return false;
			}
		}
	}
	init(){
		super.init();
		let init_interval = setInterval(() =>{
			if(document.getElementById(this.elementIDs.parentContainer)){
				clearInterval(init_interval);
				if(this.elementorEditing() == true){
					this.createValueSetterButtons();
					this.add_responsive_control_listener();
					if (this.addons_params.show_impressum == true){
						this.elements.impressumContainer.style.marginTop = "-19px";
					}
				}
			}
		},100);
	}
	setValuesTargetButton_listener(){
		var targetButtonInterval = setInterval(function(){
			if(window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].attributes.listener === undefined){
				clearInterval(targetButtonInterval);
				var button = window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].getElementsByTagName("button")[0];
				button.addEventListener("mouseup",function(){
					button.setAttribute('listener',true);
					var container = this.view().getContainer();
					var settings = this.view().getContainer().settings.attributes;
					settings.basepath = this.pano.getBasePath();
					settings.startnodeID = parseInt(this.pano.getCurrentNode().substring(4));
					settings.fov.size = parseFloat(this.pano.getFov().toFixed(2));
					settings.tilt.size = parseFloat(this.pano.getTilt().toFixed(2));
					settings.pan.size = parseFloat(this.pano.getPan().toFixed(2));
					
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
		buttoncontainer.setAttribute("id", this.elementIDs.buttonContainer_value_setter);
		this.elements.container.appendChild(buttoncontainer);
		this.elements.buttonContainer_value_setter = buttoncontainer;
		var aboveElement = this.elements.buttonContainer_value_setter;
	
		var targetButton = document.createElement("button");
		targetButton.setAttribute("onclick",Pano_360ty.prototype+".updatePanoValues('target')");
		targetButton.setAttribute("id",this.elementIDs.targetValueSetter_button);
		targetButton.setAttribute("class",this.elementIDs.class_valueSetter_button);
		targetButton.innerHTML = "set values to current position";
		targetButton.style.width = "100%";
		
		aboveElement.appendChild(startButton);
		aboveElement.appendChild(targetButton);
		this.elements.startValueSetter_button = startButton;
		this.elements.targetValueSetter_button = targetButton;
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
				if(this.deviceType() == "desktop"){
					this.toggleControl("desktop",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_tablet.addEventListener("mouseup",function(){
				if(this.deviceType() == "tablet"){
					this.toggleControl("tablet",controlName,compareValue,controlToHide,reverse);
				}
			}.bind(this));
			control_mobile.addEventListener("mouseup",function(){
				if(this.deviceType() == "mobile"){
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
	toggleControl = (type, controlName, compareValue, controlToHide, reverse) =>{
	var controlsToHide = {
		"desktop" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide)[0],
		"tablet" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_tablet")[0],
		"mobile" : window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_mobile")[0]
	};
	if(type == "desktop"){
		var control_value = this.view().getContainer().settings.attributes[controlName];
	}else{
		var control_value = this.view().getContainer().settings.attributes[controlName + "_" +type];
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
			switch(this.deviceType()){
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
	
	updatePanoValues(type){
			var container = this.view().getContainer();
			var settings = this.view().getContainer().settings.attributes;
			if(type == "start"){
				settings.show_movement = "true";
			}
			settings.basepath = this.pano.getBasePath();
			settings.startnodeID = parseInt(this.pano.getCurrentNode().substring(4));
			settings["fov_"+type].size = parseFloat(this.pano.getFov().toFixed(2));
			settings["tilt_"+type].size = parseFloat(this.pano.getTilt().toFixed(2));
			settings["pan_"+type].size = parseFloat(this.pano.getPan().toFixed(2));
		
		parent.window.$e.run("document/elements/settings", {
			container: container,
			settings: settings,
			options: {
				external: true
			}	
		});
	}

}