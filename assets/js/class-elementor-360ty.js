

class Pano_360ty{
	constructor(suffix, base_Tour, node, fov_start, tilt_start, pan_start, fov_target, tilt_target, pan_target, tour_dimensions, single_image, share_buttons, show_impressum, movement_speed, roll, movement_delay, locked_controls, show_movement,horizontal_alignment,parentContainerID,skin_variables, throttleDelay = 50){
	this.deviceType = () =>{
			if(window.matchMedia("only screen and (max-width: 360px)").matches == true){
				return "mobile";
			}else if(window.matchMedia("only screen and (max-width: 768px)").matches == true){
				return "tablet";
			}else{
				return "desktop";
		}
	};
	this.suffix = suffix;

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
		parentContainer : undefined,
		panoContainer : undefined,
		container : undefined,
		impressumContainer : undefined,
		impressum : undefined,
		buttonContainer : undefined,
		shareButton : undefined,
		URLshareButton : undefined,
		FBshareButton : undefined,
		buttonContainer_value_setter : undefined,
		targetValueSetter_button : undefined,
		startValueSetter_button : undefined,
	};

	this.tour_params = {
		base_Tour : base_Tour,
		node : node,
		fov_target : fov_target,
		tilt_target : tilt_target,
		pan_target : pan_target,
		roll : roll,
	};
	this.movement_params = {
		show_movement : show_movement,
		fov_start : fov_start,
		tilt_start : tilt_start,
		pan_start : pan_start,
		speed : movement_speed,
		delay : movement_delay,
		locked_controls : locked_controls,
	};
	this.addons_params = {
		singleImage : undefined,
		share_buttons : undefined,
		show_impressum : undefined,
	};
	this.responsive_params = {
		throttled : true,
		throttleDelay : throttleDelay,
		tour_dimensions : tour_dimensions,
		singleImage : single_image,
		share_buttons : share_buttons,
		show_impressum : show_impressum,
	};
	this.style_params = {
		tour_dimensions:undefined,
		horizontal_alignment : horizontal_alignment,
	};
	
	this.name = () =>{
		    for (var name in window)
		      if (window[name] == this)
		        return name;
	};
	this.skin_variables = skin_variables;
	this.hovered_node = null,
    this.externalHotspotListenerSet = false;
	this.pano = undefined;
	this.skin = undefined;
	this.controlsListener = {};
	this.getWebGLcontexts = () =>{
		var contexts = [];
		var canvas = this.elements.panoContainer.querySelectorAll("canvas");
			for(let i = 0; i < canvas.length ; i++){
				contexts.push(canvas[i].getContext("webgl"));
			}
			return contexts;
	};
	this.pano_loaded = () =>{
			if(this.pano != undefined){
				return this.pano.isLoaded;
				}else{
					return false;
				}
			};
	}
init () {
	if(!document.getElementById(this.elementIDs.container)){
		this.responsive_init(["tour_dimensions","show_impressum","share_buttons","singleImage"],["style_params","addons_params","addons_params","addons_params"]);
		this.addMeta("viewport","width=device-width, initial-scale=1");
		this.includeStyle();
		let init_interval = setInterval(() =>{
			if(document.getElementById(this.elementIDs.parentContainer)){
				clearInterval(init_interval);
				this.declareElements();
				this.setup_pano();
				if(this.addons_params.share_buttons == true){
					this.setupButtons();
				}
				if(this.addons_params.show_impressum == true){
					this.createImpressum();
				}
				this.setViewerSize(this.style_params.tour_dimensions.width,this.chooseHeight());
				this.horizontallyAlignImage(this.style_params.horizontal_alignment);
				this.addListeners();
			}
		},100);
	}
}
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
//replace for gs link
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
}

responsive_init(array_varNames ,array_prefixes){
	var i = 0;
	array_varNames.forEach(varName =>{
	
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



addMeta(metaName, metaContent){
	var meta = document.createElement("meta");
	meta.name = metaName;
	meta.content = metaContent;
	document.head.appendChild(meta);
}
//setup_pano

setup_pano(){
	if(this.checkParameter() == true){
	if(!this.elements.panoContainer){
		this.createContainer();
	}
	this.pano=new pano2vrPlayer(this.elementIDs.panoContainer);
	this.pano.startNode = "node"+this.tour_params.node;
	this.skin=new pano2vrSkin(this.pano,this.tour_params.base_Tour);
	this.pano.readConfigUrlAsync(this.tour_params.base_Tour +"pano.xml", function(){
		if(this.tour_params.base_Tour.includes("bregenzsommer.360ty.cloud")){
			this.removeOsterHotspotsInSkin();
			this.removeOsterHotspots();
		}
        if(this.addons_params.singleImage == true){
			this.pano.removeHotspots();
			this.pano.stopAutorotate();
		}
	this.changeSkinVars();
	if(this.movement_params.show_movement == true){
	this.setLock(this.movement_params.locked_controls);
    this.pano.setPan(this.movement_params.pan_start);
    this.pano.setFov(this.movement_params.fov_start);
    this.pano.setTilt(this.movement_params.tilt_start);
	this.pano.setRoll(this.tour_params.roll);
    window.setTimeout(function(){
        this.pano.moveTo(this.tour_params.pan_target, this.tour_params.tilt_target, this.tour_params.fov_target,this.movement_params.speed,this.tour_params.roll,1 );
		this.removeLockAfterMovement(this.movement_params.locked_controls);
    }.bind(this),this.movement_params.delay);
}else{
	this.pano.setPan(this.movement_params.pan_target);
    this.pano.setFov(this.movement_params.fov_target);
    this.pano.setTilt(this.movement_params.tilt_target);
	this.pano.setRoll(this.tour_params.roll);
}
}.bind(this));
	this.callAfterPanoLoaded("addHotspotListeners");
	}
}
removeOsterHotspotsInSkin(){
	let i = 6;
		while(this.pano.getVariableValue("apr"+i)!== undefined){
			this.pano.setVariableValue("apr"+i,false);
			i++;
		}
		this.pano.addListener("changenode",function(){
			let i = 6;
			while(this.pano.getVariableValue("apr"+i)!== undefined){
				this.pano.setVariableValue("apr"+i,false);
				i++;
			}
		}.bind(this));
}
removeOsterHotspots(){
	var hotspots = this.pano.getCurrentPointHotspots();
	var hotspotIDs = this.pano.getPointHotspotIds();
	for(let i = 0; i < hotspots.length; i++){
		var elToSearch = hotspots[i].firstElementChild.firstElementChild;
		if(elToSearch && elToSearch.nodeName === "IMG" && (elToSearch.src.includes("Oster") || elToSearch.src.includes("oster"))){
			this.pano.removeHotspot(hotspotIDs[i]);
		}
	}
	this.pano.addListener("changenode",function(){
		var hotspots = this.pano.getCurrentPointHotspots();
		var hotspotIDs = this.pano.getPointHotspotIds();
		for(let i = 0; i < hotspots.length; i++){
			var elToSearch = hotspots[i].firstElementChild.firstElementChild;
			if(elToSearch && elToSearch.nodeName === "IMG" && (elToSearch.src.includes("Oster") || elToSearch.src.includes("oster"))){
				this.pano.removeHotspot(hotspotIDs[i]);
			}
		}
	}.bind(this));
}
changeSkinVars(){
	if(typeof(this.skin_variables) === "object"){
		this.skin_variables.forEach((variable) => {
			if(variable.value !== null || variable.value !== ""){
				this.pano.setVariableValue(variable.variable,variable.value);
			}
		});
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

alignImpressum(){
	var container = this.elements.container;
	var impressum = this.elements.impressumContainer;
	impressum.style.position = "absolute";
	impressum.style.left = "";
	impressum.style.right = "";
	impressum.style.width = container.style.width;
	impressum.style.height = "0px";
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
		var start_fov = this.hovered_node.fov;
		var start_pan = this.hovered_node.pan;
		var start_tilt = this.hovered_node.tilt;
		this.tour_params.base_Tour = basepath;
		this.tour_params.node = nodeID;
		this.movement_params.fov_start = start_fov;
		this.movement_params.pan_start = start_pan;
		this.movement_params.tilt_start = start_tilt;
		this.tour_params.fov_target = start_fov;
		this.tour_params.pan_target = start_pan + 20;
		this.tour_params.tilt_target = start_tilt;
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
	if(this.elements.shareButton == undefined){
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
	if(this.elements.buttonContainer !== undefined){
		var buttonContainer = this.elements.buttonContainer;
	}else{
		var buttonContainer = document.createElement("div");
		buttonContainer.setAttribute("id",this.elementIDs.buttonContainer);
		this.elements.container.appendChild(buttonContainer);
		this.elements.buttonContainer = buttonContainer;
	}
	var button = document.createElement("button");
    button.setAttribute("onclick",this.name() + "." + onclickEvent);
    button.setAttribute("id",this.elementIDs[id]);
    button.setAttribute("class",this.elementIDs.class_shareButtons);
    if(style_display){
    	button.setAttribute("style","display: "+ style_display +";");
	}
    button.innerHTML = text;
	buttonContainer.appendChild(button);
	this.elements[id] = button;
}
alignShareButtonsStart(){
    var shareButtons = this.elements.container.querySelectorAll(".shareButton");

	for(let i = 0;i< shareButtons.length;i++){
    shareButtons.forEach(function(shareButton){       
        switch(shareButton.id){
            case "slidesButton":
                var shareButtonDimensions = this.elements.container.getElementById("shareButton").getBoundingClientRect();
               	shareButton.style.left = shareButtonDimensions.width + 8 +"px";
                break;
            default:
                break;
        }
    }.bind(this));
}
}


alignShareButtonsShowShareButtons(){
    var shareButtons = this.elements.container.querySelectorAll(".shareButton");
for(let i = 0;i< shareButtons.length;i++){
    shareButtons.forEach(function(shareButton){
        switch(shareButton.id){
            case "slidesButton":
                var FBshareButtonDimensions = this.elements.FBshareButton.getBoundingClientRect();
				var URLshareButtonDimensions = this.elements.URLshareButton.getBoundingClientRect();
                shareButton.style.left = FBshareButtonDimensions.width + URLshareButtonDimensions.width + 16 +"px";
                break;
            case "FBshareButton":
                var urlShareButtonDimensions = this.elements.URLshareButton.getBoundingClientRect();
                shareButton.style.left = urlShareButtonDimensions.width + 8 + "px";
                break;
            default:
               break;
        }
    }.bind(this));
}
}

createShareButtons(){
    this.createButton("showShareButtons()","shareButton","share");
    this.createButton("shareOnFacebook()","FBshareButton", "share on facebook","none");
 	this.createButton("copyToClipboard("+this.name() + ".getShareURL(),'link')","URLshareButton", "get link to location","none");
}


showShareButtons(){
	this.elements.shareButton.style.display = "none";
	this.elements.URLshareButton.style.display = "";
	this.elements.FBshareButton.style.display = "";
}


shareOnFacebook(){
    var facebookURL =  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = (window.visualViewport.width / 2);
    var topPosition = (window.visualViewport.height / 2);
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
	window.visualViewport.addEventListener("resize", function(){
				 if (!this.responsive_params.throttled) {
					 this.setViewerSize(this.style_params.tour_dimensions.width, this.chooseHeight());
					 this.responsive_params.throttled = true;
					    setTimeout(function() {
							this.responsive_params.throttled = false;
					    }.bind(this), this.responsive_params.throttleDelay);
					  }  
			}.bind(this));
}
setViewerSize(width, height){
		width =  isNaN(width) == false ? width + "px" : width;
		this.elements.container.style.width = width;

		height = isNaN(height) === false ? height + "px" : (height.includes(":") ? this.calculateAspectRatio(height) + "px" : (height.endsWith("%") ? this.calcHeight_Precentage(height) + "px" : height));
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
		var canvas = this.elements.panoContainer.getElementsByTagName("canvas");
		for( let i = 0; i< canvas.length;i++){
			canvas[i].getContext('webgl').getExtension('WEBGL_lose_context').loseContext();
		}
		console.log("context lost");
	}.bind(this));
}

createValueSetterButtons(){
	var buttoncontainer = document.createElement("div");
	buttoncontainer.setAttribute("id", this.elementIDs.buttonContainer_value_setter);
	this.elements.container.appendChild(buttoncontainer);
	this.elements.buttonContainer_value_setter = buttoncontainer;
	var aboveElement = this.elements.buttonContainer_value_setter;

	var targetButton = document.createElement("button");
	targetButton.setAttribute("onclick",this.name()+".updatePanoValues('target')");
	targetButton.setAttribute("id",this.elementIDs.targetValueSetter_button);
	targetButton.setAttribute("class",this.elementIDs.class_valueSetter_button);
	targetButton.innerHTML = "set current values as Target values";
	targetButton.style.width = "50%";
	
	var startButton = document.createElement("button");
	startButton.setAttribute("onclick",this.name()+".updatePanoValues('start')");
	startButton.setAttribute("id",this.elementIDs.startValueSetter_button);
	startButton.setAttribute("class",this.elementIDs.class_valueSetter_button);
	startButton.innerHTML = "set current values as Start values";
	startButton.style.width = "50%";
	
	aboveElement.appendChild(startButton);
	aboveElement.appendChild(targetButton);
	this.elements.startValueSetter_button = startButton;
	this.elements.targetValueSetter_button = targetButton;
}
}
class Elementor_360ty extends Pano_360ty{
	constructor(viewID, base_Tour = "https://bregenzsommer.360ty.cloud/", node = 1, fov_start = 65, tilt_start = 0, pan_start = 0, fov_target = 65, tilt_target = 0, pan_target = 0, tour_dimensions, single_image, share_buttons, show_impressum, movement_speed, roll, movement_delay, locked_controls, show_movement,horizontal_alignment,parentContainerID,skin_variables, throttleDelay){
        super(...arguments)
		this.viewID = viewID;
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
				var button = window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].getElementsByTagName("button")[0];
				button.addEventListener("mouseup",function(){
					button.setAttribute('listener',true);
					var container = this.view().getContainer();
					var settings = this.view().getContainer().settings.attributes;
					settings.basepath = this.pano.getBasePath();
					settings.startnodeID = parseInt(this.pano.getCurrentNode().substring(4));
					settings.fov_target.size = parseFloat(this.pano.getFov().toFixed(2));
					settings.tilt_target.size = parseFloat(this.pano.getTilt().toFixed(2));
					settings.pan_target.size = parseFloat(this.pano.getPan().toFixed(2));
					
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
	setValuesStartButton_listener(){
		var startButtonInterval = setInterval(function(){
			if(window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0].attributes.listener === undefined){
				var button = window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0].getElementsByTagName("button")[0];
				button.addEventListener("mouseup",function(){
					button.setAttribute('listener',true);
					var container = this.view().getContainer();
					var settings = this.view().getContainer().settings.attributes;
					settings.basepath = this.pano.getBasePath();
					settings.startnodeID = parseInt(this.pano.getCurrentNode().substring(4));
					settings.fov_start.size = parseFloat(this.pano.getFov().toFixed(2));
					settings.tilt_start.size = parseFloat(this.pano.getTilt().toFixed(2));
					settings.pan_start.size = parseFloat(this.pano.getPan().toFixed(2));
					
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
