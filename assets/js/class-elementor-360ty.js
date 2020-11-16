class Elementor_render_360ty{
	constructor(base_Tour, node, fov_start, tilt_start, pan_start, fov_target, tilt_target, pan_target, tour_dimensions, single_image, slides_link, share_buttons, show_impressum, movement_speed, roll, movement_projection_type, movement_delay, locked_controls, show_movement, throttleDelay,horizontal_alignment,dimensions_parent,parentContainerID,preview_containerID, suffix, viewID){
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
	this.viewID = viewID;
	this.view = () => {
		return this.findViewById(this.viewID);
	}
	this.elementorEditing = () => {
		if(window.location.search.includes("elementor-preview")){
			return true;
		}else{
			return false;
		}
		
	}
	this.elementIDs = {
		["parentContainer_"+this.viewID] : parentContainerID + "_" + this.viewID,
		["preview_container_"+this.viewID] : preview_containerID + "_" + this.viewID,
		["container_"+this.viewID] : "tourbuilder_360ty_"+this.viewID,
		["panoContainer_"+this.viewID] : "pano_container_"+this.viewID,
		["preview_container_"+this.viewID] : "preview_container_"+this.viewID,
		["impressumContainer_"+this.viewID] : "impressum_"+this.viewID,
		["buttonContainer_"+this.viewID] : "button_container_"+this.viewID,
		["shareButton_"+this.viewID] : "shareButton_"+this.viewID,
		["FBshareButton_"+this.viewID] : "FBshareButton_"+this.viewID,
		["URLshareButton_"+this.viewID] : "URLshareButton_"+this.viewID,
		["slidesButton_"+this.viewID] : "slidesButton_"+this.viewID,
		["class_shareButtons_"+this.viewID] : "shareButton_"+this.viewID,
		["buttonContainer_value_setter_"+this.viewID] : "buttonContainer_value_setter_"+this.viewID,
		["targetValueSetter_button_"+this.viewID] : "setTargetValues_"+this.viewID,
		["startValueSetter_button_"+this.viewID] : "setStartValues_"+this.viewID,
		["class_valueSetter_button"+this.viewID] : "valueSetter_"+this.viewID,
	};
	
	this.elements = {
		["parentContainer_"+this.viewID] : undefined,
		["panoContainer_"+this.viewID] : undefined,
		["container_"+this.viewID] : undefined,
		["impressumContainer_"+this.viewID] : undefined,
		["impressum_"+this.viewID] : undefined,
		["buttonContainer_"+this.viewID] : undefined,
		["shareButton_"+this.viewID] : undefined,
		["URLshareButton_"+this.viewID] : undefined,
		["FBshareButton_"+this.viewID] : undefined,
		["buttonContainer_value_setter_"+this.viewID] : undefined,
		["targetValueSetter_button_"+this.viewID] : undefined,
		["startValueSetter_button_"+this.viewID] : undefined,
	};
	this.section = () => {
		return this.elements["container_"+this.viewID].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
	};
	this.tour_params = {
		"base_Tour" : base_Tour,
		"node" : node,
		"fov_target" : fov_target,
		"tilt_target" : tilt_target,
		"pan_target" : pan_target,
		"roll" : roll,
	};
	this.movement_params = {
		"show_movement" : show_movement,
		"fov_start" : fov_start,
		"tilt_start" : tilt_start,
		"pan_start" : pan_start,
		"speed" : movement_speed,
		"delay" : movement_delay,
		"locked_controls" : locked_controls,
		"projection_type" : movement_projection_type,
	};
	this.addons_params = {
		"singleImage" : undefined,
		"slides_link" : slides_link,
		"share_buttons" : undefined,
		"show_impressum" : undefined,
	};
	this.responsive_params = {
		"throttled" : false,
		"throttleDelay" : throttleDelay,
		"tour_dimensions" : tour_dimensions,
		"singleImage" : single_image,
		"share_buttons" : share_buttons,
		"show_impressum" : show_impressum,
	};
	this.style_params = {
		"tour_dimensions":undefined,
		"horizontal_alignment" : horizontal_alignment,
		"dimensions_parent": dimensions_parent,
	};
	
	this.name = () =>{
		    for (var name in window)
		      if (window[name] == this)
		        return name;
	};
	this.hovered_node = null,
    this.scripts_ready = false;
    this.externalHotspotListenerSet = false;
	this.pano;
	this.skin;
	this.controlsListener = {};
	this.getWebGLcontexts = () =>{
		var contexts = [];
		var canvas = this.elements["panoContainer_"+this.viewID].querySelectorAll("canvas");
		for(let i = 0; i < canvas.length ; i++){
			contexts.push(canvas[i].getContext("webgl"));
		}
		return contexts;
	}
	this.pano_loaded = () =>{
			if(this.pano != undefined){
				return this.pano.isLoaded;
				}else{
					return false;
				}
			};
	}
init(){
	if(!document.getElementById(this.elementIDs["container_"+this.viewID])){
		this.responsive_init(["tour_dimensions","show_impressum","share_buttons","singleImage"],["style_params","addons_params","addons_params","addons_params"]);
		this.addMeta("viewport","width=device-width, initial-scale=1");
		let init_interval = setInterval(() =>{
			if(document.getElementById(this.elementIDs["parentContainer_"+this.viewID]) !== undefined){
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
				if(this.elementorEditing() == true){
					this.createValueSetterButtons();
				}
			}
		},100);
	}
}

declareElements(){
	this.elements["parentContainer_"+this.viewID] = document.getElementById(this.elementIDs["parentContainer_"+this.viewID]);
}
/*update_elements_new_suffix(object, newSuffix){
	for( var prop in object){
		if(prop.includes(this.viewID)){
			var newName = prop.substring(0,prop.lastIndexOf("_")+1) + newSuffix;
		}
		if(object[prop] && object[prop].includes(this.viewID)){
			var newValue = object[prop].substring(0, object[prop].lastIndexOf("_")+1) + newSuffix; 
		}
		if(newName){
			prop = newName;
		}
		if(newValue){
			object[prop] = newValue;
		}
	}
}
randomString(length) {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
*/
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
			return this.style_params.tour_dimensions.tour_height;
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
call_after_scripts_loaded(call){
	let interval_scripts = setInterval(function(){
		if(this.scripts_ready == true){
			clearInterval(interval_scripts);
			window[this][call]();
		}
	},20);
}

include_scripts(){
var includes = ["pano2vr_player.js","skin.js"];
//var promises = [];
includes.forEach(function(file) {
	 // var promise = new Promise(function(resolve, reject) {
            var script = document.createElement('script');
			var fileLocation = "https://storage.googleapis.com/api.360ty.cloud/" + file;
			script.type = "text/javascript";
			script.src = fileLocation;
			var includedScripts = document.querySelectorAll("script");
			var includeScript = true;
			includedScripts.forEach(includedScript =>{
				if(includedScript.src == fileLocation){
					includeScript = false;
				}
            script.addEventListener('load', function() {
                this.scripts_ready = true;
            }.bind(this), false);

            script.addEventListener('error', function() {
                console.log('was rej');
            }.bind(this), false);
			
			});
			if(includeScript == true){
		   		document.body.appendChild(script);
			}
		});
 		//promises.push(promise);
	//});
}
setup_pano(){
	if(this.checkParameter() == true){
	if(!this.elements["panoContainer_"+this.viewID]){
		this.createContainer();
	}
	this.pano=new pano2vrPlayer(this.elementIDs["panoContainer_"+this.viewID]);
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
	if(this.movement_params.show_movement == true){
	this.setLock(this.movement_params.locked_controls);
    this.pano.setPan(this.movement_params.pan_start);
    this.pano.setFov(this.movement_params.fov_start);
    this.pano.setTilt(this.movement_params.tilt_start);
	this.pano.setRoll(this.tour_params.roll);
    window.setTimeout(function(){
        this.pano.moveTo(this.tour_params.pan_target, this.tour_params.tilt_target, this.tour_params.fov_target,this.movement_params.speed,this.tour_params.roll,this.movement_params.projection );
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
 	var parentContainer = this.elements["parentContainer_"+this.viewID];
	var container = document.createElement("div");
	var pano_container = document.createElement("div");
	pano_container.setAttribute("id",this.elementIDs["panoContainer_"+this.viewID]);
	container.setAttribute("style","width:inherit ;height:inherit;");
    container.setAttribute("id",this.elementIDs["container_"+this.viewID]);
	pano_container.setAttribute("style","width:inherit ;height:inherit;");
	parentContainer.appendChild(container);
	container.appendChild(pano_container);

	this.elements["panoContainer_"+this.viewID] = pano_container;
	this.elements["container_"+this.viewID] = container;
	this.viewID = this.getViewId();
}

createImpressum(){
	var parent = this.elements["container_"+this.viewID];
	var impressumContainer = document.createElement("div");
	impressumContainer.setAttribute("id",this.elementIDs["impressumContainer_"+this.viewID]);
	var p = document.createElement("p");
 	var impressum = document.createElement("a");
    impressum.setAttribute("href","http://www.multimedia-fabrik.com/kontakt/impressum/");
 	impressum.setAttribute("target","_blank");
	impressum.innerHTML = "360ty.world | Made with Ã¢â„¢Â¥ in Europe";
 	parent.appendChild(impressumContainer);
	impressumContainer.appendChild(p);
	p.appendChild(impressum);
	this.elements["impressum_"+this.viewID] = impressum;
	this.elements["impressumContainer_"+this.viewID] = impressumContainer;
}

alignImpressum(parentID){
	var container = this.elements["container_"+this.viewID];
	var impressum = this.elements["impressumContainer_"+this.viewID];
	impressum.style.position = "absolute";
	impressum.style.left = "";
	impressum.style.right = "";
	impressum.style.width = container.style.width;
	impressum.style.height = "0px";
}

checkParameter() {
	var exceptions = ["singleImage","slides_link","customClass"];
	var check = true;
for (var prop in this.tour_params){
	if(exceptions.includes(prop) == false){
		if(prop == null){
			console.error("360ty Pano - emtpy or wrong parameter" , "parameter "+prop+" empty! Please fill it out correctly and try again.");
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
	var hotspots = this.elements["panoContainer_"+this.viewID].getElementsByClassName("ggskin_hotspot");
	for(let i = 0; i<hotspots.length;i++){
	hotspots[i].addEventListener("mouseover",function(){
	var timesCalled = 0;
	var hn_interval = setInterval(function(){
		if(timesCalled < 25){
		if(this.pano && this.pano.Ca){
			var hotspot = this.pano.Ca;
		}else{
			if(this.pano){
			var hotspot = this.pano.Da;
			}
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
	if(this.elements["shareButton_"+this.viewID] == undefined){
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
	if(this.elements["buttonContainer_"+this.viewID] !== undefined){
		var buttonContainer = this.elements["buttonContainer_"+this.viewID];
	}else{
		var buttonContainer = document.createElement("div");
		buttonContainer.setAttribute("id",this.elementIDs["buttonContainer_"+this.viewID]);
		this.elements["container_"+this.viewID].appendChild(buttonContainer);
		this.elements["buttonContainer_"+this.viewID] = buttonContainer;
	}
	var button = document.createElement("button");
    button.setAttribute("onclick",this.name() + "." + onclickEvent);
    button.setAttribute("id",this.elementIDs[id]);
    button.setAttribute("class",this.elementIDs["class_shareButtons_"+this.viewID]);
    if(style_display){
    	button.setAttribute("style","display: "+ style_display +";");
	}
    button.innerHTML = text;
	buttonContainer.appendChild(button);
	this.elements[id] = button;
}
alignShareButtonsStart(){
    var shareButtons = container.querySelectorAll(".shareButton");

	for(let i = 0;i< shareButtons.length;i++){
    shareButtons.forEach(function(shareButton){       
        switch(shareButton.id){
            case "slidesButton":
                var shareButtonDimensions = container.getElementById("shareButton").getBoundingClientRect();
               	shareButton.style.left = shareButtonDimensions.width + 8 +"px";
                break;
            default:
                break;
        }
    }.bind(this));
}
}


alignShareButtonsShowShareButtons(){
    var shareButtons = container.querySelectorAll(".shareButton");
for(let i = 0;i< shareButtons.length;i++){
    shareButtons.forEach(function(shareButton){
        switch(shareButton.id){
            case "slidesButton":
                var FBshareButtonDimensions = this.elements["FBshareButton_"+this.viewID].getBoundingClientRect();
				var URLshareButtonDimensions = this.elements["URLshareButton_"+this.viewID].getBoundingClientRect();
                shareButton.style.left = FBshareButtonDimensions.width + URLshareButtonDimensions.width + 16 +"px";
                break;
            case "FBshareButton":
                var urlShareButtonDimensions = this.elements["URLshareButton_"+this.viewID].getBoundingClientRect();
                shareButton.style.left = urlShareButtonDimensions.width + 8 + "px";
                break;
            default:
               break;
        }
    }.bind(this));
}
}

createShareButtons(){
    this.createButton("showShareButtons()",this.elementIDs["shareButton_"+this.viewID],"share");
    this.createButton("shareOnFacebook()",this.elementIDs["FBshareButton_"+this.viewID], "share on facebook","none");
 	this.createButton("copyToClipboard("+this.name() + ".getShareURL(),'link')",this.elementIDs["URLshareButton_"+this.viewID], "get link to location","none");
    if(this.addons_params.slides_link != null && this.addons_params.slides_link != ""){
    this.createButton("openSlidesInNewTab()", this.elementIDs["FBshareButton_"+this.viewID], "open Slides tour");
    }
}


showShareButtons(){
	this.elements["shareButton_"+this.viewID].style.display = "none";
	this.elements["URLshareButton_"+this.viewID].style.display = "";
	this.elements["FBshareButton_"+this.viewID].style.display = "";
}

openSlidesInNewTab() {
    var win = window.open(this.addons_params.slides_link, '_blank');
}

shareOnFacebook(){
    var facebookURL =  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = (window.visualViewport.width / 2);
    var topPosition = (window.visualViewport.height / 2);
    var popUpSettings = 'height=700,width=500, screenX =' + leftPosition + ',screenY =' + topPosition + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
    var win = window.open(facebookURL,'popUpWindow',popUpSettings);
    win.focus();
}

copyToClipboard(text,alertText) { 
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
addListeners(){
			/*this.elementor_setValuesTargetButton_listener();
			if(this.movement_params.show_movement == true){
				this.elementor_setValuesStartButton_listener();
			}
			*/
			this.add_responsive_control_listener();
			this.windowResizeListener();
			this.clearwebglContext_listener();
		}
windowResizeListener(){
	window.visualViewport.addEventListener("resize", function(){
				 if (!this.responsive_params.throttled) {
					 this.setViewerSize(this.style_params.tour_dimensions.width, this.chooseHeight());
					    throttled = true;
					    setTimeout(function() {
					      throttled = false;
					    }.bind(this), this.responsive_params.throttled);
					  }  
			}.bind(this));
}
setViewerSize(width, height){
		if(this.style_params.dimensions_parent == "window_dim"){
			var parent = window.visualViewport;
			}
		if(this.style_params.dimensions_parent == "section_dim"){
			var parent = this.section().getBoundingClientRect();
		}
			if(width.slice(-1) == "%"){
				width = parseInt((width.slice(0,-1)/100) * parent.width);
			}
			else if(width.slice(-2) == "px"){
				width = parseInt(width.slice(0,-2));
			}else if(typeof width == "number"){
				
			}else{
				console.log("invalid height unit");
			}
			if(height.slice(-1) == "%"){
				height = parseInt((height.slice(0,-1)/100) * parent.height);
			}
			else if(height.slice(-2) == "px"){
				height = parseInt(height.slice(0,-2));
			}else if(height.includes(":")){
				var colonIndex = height.indexOf(":");
				var x_aspect = parseFloat(height.substring(0,colonIndex));
				var y_aspect = parseFloat(height.substring(colonIndex+1));
				height = width/(x_aspect/y_aspect);
			}else if(typeof height == "number"){
			}else{
				console.log("invalid height unit");
			}

		this.elements["container_"+this.viewID].style.height = height + "px";
		this.elements["container_"+this.viewID].style.width = width + "px";
		this.elements["container_"+this.viewID].parentElement.parentElement.style.width = "100%";
		this.pano.setViewerSize(width,height);
	}
horizontallyAlignImage(alignment){
	var container_style = this.elements["container_"+this.viewID].style;
	var parentContainer_style = this.elements["container_"+this.viewID].parentElement.parentElement.style;
	switch(alignment){
		case "center":
			container_style.marginRight = "auto";
			container_style.marginLeft = "auto";
			
			parentContainer_style.marginLeft = "auto";
			parentContainer_style.marginRight = "auto";
			break;
		case "left":
			container_style.marginRight = "auto";
			container_style.marginLeft = "";
		
			parentContainer_style.marginRight = "auto";
			parentContainer_style.marginLeft = "";
			break;
		case "right":
			container_style.marginRight = "";
			container_style.marginLeft = "auto";
			
			parentContainer_style.marginRight = "";
			parentContainer_style.marginLeft = "auto";
	}
}	
elementor_setValuesTargetButton_listener(){
			var targetButtonInterval = setInterval(function(){
				if(window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].attributes.listner === undefined){
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
elementor_setValuesStartButton_listener(){
			var startButtonInterval = setInterval(function(){
				if(window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0].attributes.listner === undefined){
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
getViewId(){
			var view = this.elements["container_"+this.viewID].parentElement.parentElement.parentElement.dataset.id;
			if(view === undefined){
				view = this.elements["container_"+this.viewID].parentElement.parentElement.dataset.id;
			}
			return view;
		}
findViewById( id ) {
		    const elements = this.findViewRecursive(
		        elementor.getPreviewView().children,
		        'id',
		        id,
		        false
		    );

		    return elements ? elements[ 0 ] : false;
		}
findViewRecursive( parent, key, value, multiple = true ) {
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
	clearwebglContext_listener(){
			document.addEventListener("close", function(){
			var canvas = this.elements["panoContainer_"+this.viewID].getElementsByTagName("canvas");
			for( let i = 0; i< canvas.length;i++){
				canvas[i].getContext('webgl').getExtension('WEBGL_lose_context').loseContext();
			}
			console.log("context lost");
		}.bind(this));
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
					add_responsive_control_listener();
				}
			}.bind(this),100);
		}
	}
	
	toggle_responsive_control_visibility_listener(controlName,compareValue,controlToHide,reverse){
		if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
		var control_desktop = window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0];
		var control_tablet = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_tablet")[0];
		var control_mobile = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_mobile")[0];
		var controlToHide_desktop = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide)[0];
		var controlToHide_tablet = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_tablet")[0];
		var controlToHide_mobile = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_mobile")[0];
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
	toggleControl = (type,controlName,compareValue,controlToHide,reverse) =>{
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
	toggle_responsive_control_visibility(controlName,compareValue,controlToHide,reverse){
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
	createValueSetterButtons(){
		var buttoncontainer = document.createElement("div");
		buttoncontainer.setAttribute("id", this.elementIDs["buttonContainer_value_setter_"+this.viewID]);
		this.elements["container_"+this.viewID].appendChild(buttoncontainer);
		this.elements["buttonContainer_value_setter_"+this.viewID] = buttoncontainer;
		var aboveElement = this.elements["buttonContainer_value_setter_"+this.viewID];

		var targetButton = document.createElement("button");
		targetButton.setAttribute("onclick",this.name()+".updatePanoValues('target')");
		targetButton.setAttribute("id",this.elementIDs["targetValueSetter_button_"+this.viewID]);
		targetButton.setAttribute("class",this.elementIDs["class_valueSetter_button"+this.viewID]);
		targetButton.innerHTML = "set current values as Target values";
		targetButton.style.width = "50%";
		
		var startButton = document.createElement("button");
		startButton.setAttribute("onclick",this.name()+".updatePanoValues('start')");
		startButton.setAttribute("id",this.elementIDs["startValueSetter_button_"+this.viewID]);
		startButton.setAttribute("class",this.elementIDs["class_valueSetter_button"+this.viewID]);
		startButton.innerHTML = "set current values as Start values";
		startButton.style.width = "50%";
		
		aboveElement.appendChild(startButton);
		aboveElement.appendChild(targetButton);
		this.elements["startValueSetter_button_"+this.viewID] = startButton;
		this.elements["targetValueSetter_button_"+this.viewID] = targetButton;
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

class Elementor_preview_360ty{
	constructor(show_movement,single_image,share_buttons,show_impressum,movement_projection_type, containerID, iframeID, image_dimensions,iframe_src,throttleDelay, slides_link,horizontal_alignment,dimensions_parent, render_containerID, viewID, suffix){
		this.deviceType = () =>{
			if(window.matchMedia("only screen and (max-width: 360px)").matches == true){
				return "mobile";
			}else if(window.matchMedia("only screen and (max-width: 768px)").matches == true){
				return "tablet";
			}else{
				return "desktop";
		}
		};
		this.sentParams;
		this.throttled = false;
		this.show_movement = show_movement;
		this.single_image;
		this.share_buttons;
		this.show_impressum;
		this.movement_projection_type = movement_projection_type;
		this.container = () => {
			
		};
		this.name = () =>{
			    for (var name in window)
			      if (window[name] == this)
			        return name;
		};
		this.suffix = suffix;
		this.elementIDs = {
			["container_"+this.suffix] : containerID,
			["render_container_"+this.suffix] : render_containerID,
			["panoContainer_"+this.suffix] : "pano_container"+this.suffix,
			["iframe_"+this.suffix] : iframeID,
			["impressumContainer_"+this.suffix] : "impressum_"+this.suffix,
			["buttonContainer_"+this.suffix] : "button_container_"+this.suffix,
			["shareButton_"+this.suffix] : "shareButton_"+this.suffix,
			["FBshareButton_"+this.suffix] : "FBshareButton_"+this.suffix,
			["URLshareButton_"+this.suffix] : "URLshareButton_"+this.suffix,
			["slidesButton_"+this.suffix] : "slidesButton_"+this.suffix,
			["class_shareButtons_"+this.suffix] : "shareButton_"+this.suffix,
			["buttonContainer_value_setter_"+this.suffix] : "buttonContainer_value_setter_"+this.suffix,
			["targetValueSetter_button_"+this.suffix] : "setTargetValues_"+this.suffix,
			["startValueSetter_button_"+this.suffix] : "setStartValues_"+this.suffix,
			["class_valueSetter_button"+this.suffix] : "valueSetter_"+this.suffix,
		};
		this.elements = {
			["iframe_"+this.suffix] : undefined,
			["panoContainer_"+this.suffix] : undefined,
			["container_"+this.suffix] : undefined,
			["impressumContainer_"+this.suffix] : undefined,
			["impressum_"+this.suffix] : undefined,
			["buttonContainer_"+this.suffix] : undefined,
			["shareButton_"+this.suffix] : undefined,
			["URLshareButton_"+this.suffix] : undefined,
			["FBshareButton_"+this.suffix] : undefined,
			["buttonContainer_value_setter_"+this.suffix] : undefined,
			["targetValueSetter_button_"+this.suffix] : undefined,
			["startValueSetter_button_"+this.suffix] : undefined,
		};

		this.responsive_params = {
			"image_dimensions" : image_dimensions,
			"show_impressum" : show_impressum,
			"single_image" : single_image,
			"share_buttons" : share_buttons,
		};
		this.viewID = viewID; 
		this.image_dimensions;
		this.iframe_src_init = iframe_src;
		this.iframe_src;
		this.getiframe_src = () => {
			return this.setIframeSrc();
		};
		this.section = () => {
			return this.elements["container_"+this.suffix].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		}
	 	this.throttled = false;
		this.throttleDelay = throttleDelay;
		this.slides_link = slides_link;
		this.horizontal_alignment = horizontal_alignment;
		this.dimensions_parent = dimensions_parent;
		this.controlsListener ={};
		this.view = () => {
			return this.findViewById(this.viewID);
		};
		this.iframe_params;
		this.getWebGLcontexts = () =>{
			var contexts = [];
			var canvas = this.elements["panoContainer_"+this.suffix].querySelectorAll("canvas");
			for(let i = 0; i < canvas.length ; i++){
				contexts.push(canvas[i].getContext("webgl"));
			}
			return contexts;
		}
	}

init(){
		this.declareElements();
		this.responsive_init(["image_dimensions","show_impressum","single_image","share_buttons"]);
		this.updateIframeSrc({"SingleImage":this.single_image});
		this.setup_container();
		if(this.share_buttons == true){
			this.setupButtons();
		}
		if(this.show_impressum == true){
			this.createImpressum();
			//this.alignImpressum();
		}
		this.setViewerSize(this.image_dimensions.width, this.chooseHeight());
		this.horizontallyAlignImage(this.horizontal_alignment);
		this.addListeners();
		this.createValueSetterButtons();
}
responsive_init(array_varNames){
	array_varNames.forEach(varName =>{
		switch(this.deviceType()){
				case "mobile":
					this[varName] = this.responsive_params[varName].mobile;
					break;
				case "tablet":
					this[varName] = this.responsive_params[varName].tablet;
					break;
				case "desktop":
					this[varName] = this.responsive_params[varName].desktop;
					break;
			}
	});
}
getIframeParams(){
	var obj = {};
	var queryString = this.iframe_src_init.substring(this.iframe_src_init.indexOf('?')+1);
	if (queryString) {
		var arr = queryString.split('&');
		for (var i=0; i<arr.length; i++) {
			var a = arr[i].split('=');
			var paramNum = undefined;
			var paramName = a[0].replace(/[d*]/, function(v) {
				paramNum = v.slice(1,-1);
				return '';
			});
			var paramValue = typeof(a[1])==='undefined' ? true : a[1];
			if (obj[paramName]) {
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				if (typeof paramNum === 'undefined') {
					obj[paramName].push(paramValue);
				}
				else {
					obj[paramName][paramNum] = paramValue;
				}
			}
			else {
				obj[paramName] = paramValue;
			}
		}
	}

	return obj;
}
declareElements(){
	this.elements["iframe_"+this.suffix] = document.getElementById(this.elementIDs["iframe_"+this.suffix]);
	if(document.getElementById(this.elementIDs["container_"+this.suffix])){
		this.elements["container_"+this.suffix] = document.getElementById(this.elementIDs["container_"+this.suffix]);
	}else{
		this.elements["container_"+this.suffix] = document.getElementById(this.elementIDs["render_container_"+this.suffix]);
	}
	this.viewID = this.viewID !== "" ? this.viewID = this.viewID : this.viewID = document.getElementById(this.elementIDs["container_"+this.suffix]).parentElement.parentElement.dataset.id;
}
updateIframeSrc(obj_paramsToExchange){
	var iframe_params = this.getIframeParams();
	for(var param in obj_paramsToExchange){
		if(iframe_params[param]){
			iframe_params[param] = obj_paramsToExchange[param];
		}
	}
	this.setIframeSrc(iframe_params);
}
setIframeSrc(params){
	var srcString = "https://preview.360ty.world/?";
	for (var param in params){
		srcString = srcString + param + "=" + params[param] + "&";
	}
	srcString = srcString.substring(0, srcString.length -1);
	this.iframe_src = srcString;
}
chooseHeight(){
	switch(this.image_dimensions.aspect_ratio){
		case "custom_height":
			return this.image_dimensions.tour_height;
			break;
		case "custom":
			return this.image_dimensions.custom_aspect_ratio;
			break;
		default:
			return this.image_dimensions.aspect_ratio;
			break;
		}
	}
	
setupButtons(){
	if(this.elements["shareButton_"+this.suffix] === undefined){
		this.createShareButtons();
			}
	}
showShareButtons(){
	    var shareButton = this.elements["shareButton_"+this.suffix];
	    var URLshareButton = this.elements["URLshareButton_"+this.suffix];
	    var FBshareButton = this.elements["FBshareButton_"+this.suffix];
	        shareButton.style.display = "none";
	        URLshareButton.style.display = "";
	        FBshareButton.style.display = "";
	}
openSlidesInNewTab() {
    var win = window.open(this.slides_link, '_blank');
}
shareOnFacebook(){
    var facebookURL =  "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = (window.visualViewport.width / 2);
    var topPosition = (window.visualViewport.height / 2);
    var popUpSettings = 'height=700,width=500, screenX =' + leftPosition + ',screenY =' + topPosition + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
    var win = window.open(facebookURL,'popUpWindow',popUpSettings);
    win.focus();
}
copyToClipboard(text,alertText) { 
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
createButton(onclickEvent, id, text, style_display){
	if(this.elements["buttonContainer_"+this.suffix] !== undefined){
		var aboveElement = this.elements["buttonContainer_"+this.suffix];
	}else{
		var aboveElement = document.createElement("div");
		aboveElement.setAttribute("id",this.elementIDs["buttonContainer_"+this.suffix]);
		this.elements["container_"+this.suffix].appendChild(aboveElement);
		this.elements["buttonContainer_"+this.suffix] = aboveElement;
	}
	var button = document.createElement("button");
    button.setAttribute("onclick",this.name() + "." + onclickEvent);
    button.setAttribute("id",this.elementIDs[id]);
    button.setAttribute("class", this.elementIDs["class_shareButtons_"+this.suffix]);
    if(style_display){
    	button.setAttribute("style","display: "+ style_display +";");
	}
    button.innerHTML = text;
	  aboveElement.appendChild(button);
	  this.elements[id] = button;

}
		
alignShareButtonsStart(){
	    var shareButtons = document.querySelectorAll(this.elementIDs["class_shareButtons_"+this.suffix]);
	
		for(let i = 0;i< shareButtons.length;i++){
	    shareButtons.forEach(function(shareButton){       
	        switch(shareButton.id){
	            case this.elementIDs["slidesButton_"+this.suffix]:
	                var shareButtonDimensions = this.elements["shareButton_"+this.suffix].getBoundingClientRect();
	               	shareButton.style.left = shareButtonDimensions.width+ 16 +"px";
	                break;
	            default:
	                break;
	        }
	    }.bind(this));
	}
	}
alignShareButtonsShowShareButtons(){
    var shareButtons = document.querySelectorAll(this.elementIDs["class_shareButtons_"+this.suffix]);
for(let i = 0;i< shareButtons.length;i++){
    shareButtons.forEach(function(shareButton){
        switch(shareButton.id){
            case this.elementIDs["slidesButton_"+this.suffix]:
                var FBshareButtonDimensions = this.elements["FBshareButton_"+this.suffix].getBoundingClientRect();
				var URLshareButtonDimensions = this.elements["URLshareButton_"+this.suffix].getBoundingClientRect();
                shareButton.style.left = FBshareButtonDimensions.width + URLshareButtonDimensions.width + 24 + "px";
                break;
            case this.elementIDs["FBshareButton_"+this.suffix]:
                var urlShareButtonDimensions = this.elements["URLshareButton_"+this.suffix].getBoundingClientRect();
                shareButton.style.left = urlShareButtonDimensions.width + 16 + "px";
                break;
            default:
               break;
        }
    }.bind(this));
}
}
createShareButtons(){
    this.createButton("showShareButtons()", this.elementIDs["shareButton_"+this.suffix],"share");
    if(this.slides_link != null && this.slides_link != ""){
    this.createButton("openSlidesInNewTab()",this.elementIDs["slidesButton_"+this.suffix], "open Slides tour");
    }
    this.createButton("shareOnFacebook()",this.elementIDs["FBshareButton_"+this.suffix], "share on facebook","none");
 	this.createButton("copyToClipboard("+this.name()+".getShareURL(),'link')",this.elementIDs["URLshareButton_"+this.suffix], "get link to location","none");
}

createImpressum(){
	if(this.elements["impressumContainer_"+this.suffix] === undefined){
		var parent = this.elements["container_"+this.suffix];
		var impressumContainer = document.createElement("div");
		impressumContainer.setAttribute("id",this.elementIDs["impressumContainer_"+this.suffix]);
		var p = document.createElement("p");
	 	var impressum = document.createElement("a");
	    impressum.setAttribute("href","http://www.multimedia-fabrik.com/kontakt/impressum/");
	 	impressum.setAttribute("target","_blank");
		impressum.innerHTML = "360ty.world | Made with Ã¢â„¢Â¥ in Europe";
	 	parent.appendChild(impressumContainer);
		impressumContainer.appendChild(p);
		p.appendChild(impressum);
		this.elements["impressumContainer_"+this.suffix] = impressumContainer;
		this.elements["impressum_"+this.suffix] = impressum;
		if(this.elements["buttonContainer_"+this.suffix] !== undefined){
			this.elements["buttonContainer_"+this.suffix].style.bottom = "30px";
		}
	}
	}
alignImpressum(){
		var impressum = this.elements["impressumContainer_"+this.suffix];
		impressum.style.position = "absolute";
		impressum.style.left = "";
		impressum.style.right = "";
		impressum.style.width = "100%";
		impressum.style.height = "0px";
	}

setup_container(){
		this.elements["container_"+this.suffix].style.width =  this.image_dimensions.width;
		this.elements["container_"+this.suffix].style.height =  this.image_dimensions.height;
		var iframe = this.elements["iframe_"+this.suffix];
		iframe.width = this.image_dimensions.width;
		iframe.height = this.image_dimensions.height;
		iframe.src = this.iframe_src;
		this.elements["container_"+this.suffix].parentElement.parentElement.style.width = this.image_dimensions.width;
	}
requestPano(){
	if(this.elements["iframe_"+this.suffix] != null && this.elements["iframe_"+this.suffix].contentWindow != null){
		this.elements["iframe_"+this.suffix].contentWindow.postMessage({"action" : "sendPano", "instance" : this.name()},"https://preview.360ty.world");
	}
}

setValuesStartButton_listener(){
		var startButtonInterval = setInterval(function(){
			if(window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0].attributes.listner === undefined){
				var button = window.parent.document.getElementsByClassName("elementor-control-set_start_values")[0].getElementsByTagName("button")[0];
				button.addEventListener("mouseup",function(){
					this.requestPano();
					var requestPanoInterval = setInterval(function(){
						if(this.sentParams != null){
							clearInterval(requestPanoInterval);
							button.setAttribute('listener',true);
							var container = this.view().getContainer();
							var settings = this.view().getContainer().settings.attributes;
							settings.basepath = this.sentParams.basepath;
							settings.startnodeID = parseInt(this.sentParams.node.substring(4));
							settings.fov_start.size = parseFloat(this.sentParams.fov.toFixed(2));
							settings.tilt_start.size = parseFloat(this.sentParams.tilt.toFixed(2));
							settings.pan_start.size = parseFloat(this.sentParams.pan.toFixed(2));
					
					parent.window.$e.run("document/elements/settings", {
						container: container,
						settings: settings,
						options: {
							external: true
						}	
						});
						}
					}.bind(this),50);
				}.bind(this));
			}
		}.bind(this),1000);
	}
setValuesTargetButton_listener(){
			var targetButtonInterval = setInterval(function(){
				if(window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0] && window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].attributes.listner === undefined){
					var button = window.parent.document.getElementsByClassName("elementor-control-set_target_values")[0].getElementsByTagName("button")[0];
					button.addEventListener("mouseup",function(){
					this.requestPano();
					var requestPanoInterval = setInterval(function(){
						if(this.sentParams != null){
							clearInterval(requestPanoInterval);
							button.setAttribute('listener',true);
							var container = this.view().getContainer();
							var settings = this.view().getContainer().settings.attributes;
							settings.basepath = this.sentParams.basepath;
							settings.startnodeID = parseInt(this.sentParams.node.substring(4));
							settings.fov_target.size = parseFloat(this.sentParams.fov.toFixed(2));
							settings.tilt_target.size = parseFloat(this.sentParams.tilt.toFixed(2));
							settings.pan_target.size = parseFloat(this.sentParams.pan.toFixed(2));
					
					parent.window.$e.run("document/elements/settings", {
						container: container,
						settings: settings,
						options: {
							external: true
						}	
						});
						}
					}.bind(this),50);
				}.bind(this));
			}
		}.bind(this),1000);
	}
setViewerSize(width, height){
		if(this.dimensions_parent == "window_dim"){
			var parent = window.visualViewport;
			}
		if(this.dimensions_parent == "section_dim"){
			var parent =  this.section().getBoundingClientRect();
		}
			if(width.slice(-1) == "%"){
				width = parseInt((width.slice(0,-1)/100) * parent.width);
			}
			else if(width.slice(-2) == "px"){
				width = parseInt(width.slice(0,-2));
			}else if(typeof width == "number"){
				
			}else{
				console.log("invalid height unit");
			}
			if(height.slice(-1) == "%"){
				height = parseInt((height.slice(0,-1)/100) * parent.height);
			}
			else if(height.slice(-2) == "px"){
				height = parseInt(height.slice(0,-2));
			}else if(height.includes(":")){
				var colonIndex = height.indexOf(":");
				var x_aspect = parseFloat(height.substring(0,colonIndex));
				var y_aspect = parseFloat(height.substring(colonIndex+1));
				height = width/(x_aspect/y_aspect);
			}else if(typeof height == "number"){
			}else{
				console.log("invalid height unit");
			}
		var container = this.elements["container_"+this.suffix];
		container.style.height = height + "px";
		container.style.width = width + "px";
		var iframe = this.elements["iframe_"+this.suffix];;
		iframe.style.height = height + "px";
		iframe.style.width =  width + "px";
		container.parentElement.parentElement.style.width = "100%";
		
	}
setParentStyle(){
	this.elements["container_"+this.suffix].parentElement.parentElement.style.width = parseInt(this.elements["container_"+this.suffix].style.width.slice(0,-2)) - 16 +"px";
	
}
getViewId(){
			var view =this.elements["container_"+this.suffix].parentElement.parentElement.parentElement.dataset.id;
			if(view === undefined){
				view = this.elements["container_"+this.suffix].parentElement.parentElement.dataset.id;
			}
			return view;
		}
findViewById( id ) {
		    const elements = this.findViewIdRecursive(
		        elementor.getPreviewView().children,
		        'id',
		        id,
		        false
		    );

		    return elements ? elements[ 0 ] : false;
		}
		
findViewIdRecursive( parent, key, value, multiple = true ) {
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
		            const views = this.findViewIdRecursive( view.children, key, value, multiple );
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

updatePreview(type){
		this.requestPano();
		var requestPanoInterval = setInterval(function(){
			if(this.sentParams != null){
				clearInterval(requestPanoInterval);
				var container = this.view().getContainer();
				var settings = this.view().getContainer().settings.attributes;
				if(type == "start"){
					settings.show_movement = "true";
				}
				settings.basepath = this.sentParams.basepath;
				settings.startnodeID = parseInt(this.sentParams.node.substring(4));
				settings["fov_"+type].size = parseFloat(this.sentParams.fov.toFixed(2));
				settings["tilt_"+type].size = parseFloat(this.sentParams.tilt.toFixed(2));
				settings["pan_"+type].size = parseFloat(this.sentParams.pan.toFixed(2));
		
		parent.window.$e.run("document/elements/settings", {
			container: container,
			settings: settings,
			options: {
				external: true
			}	
			});
			}
		}.bind(this),50);
}
createValueSetterButtons(){
			var buttoncontainer = document.createElement("div");
			buttoncontainer.setAttribute("id", this.elementIDs["buttonContainer_value_setter_"+this.suffix]);
			this.elements["container_"+this.suffix].appendChild(buttoncontainer);
			this.elements["buttonContainer_value_setter_"+this.suffix] = buttoncontainer;
			var aboveElement = this.elements["buttonContainer_value_setter_"+this.suffix];

			var targetButton = document.createElement("button");
			targetButton.setAttribute("onclick",this.name()+".updatePreview('target')");
			targetButton.setAttribute("id",this.elementIDs["targetValueSetter_button_"+this.suffix]);
			targetButton.setAttribute("class",this.elementIDs["class_valueSetter_button"+this.suffix]);
			targetButton.innerHTML = "set current values as Target values";
			targetButton.style.width = "50%";
			
			var startButton = document.createElement("button");
			startButton.setAttribute("onclick",this.name()+".updatePreview('start')");
			startButton.setAttribute("id",this.elementIDs["startValueSetter_button_"+this.suffix]);
			startButton.setAttribute("class",this.elementIDs["class_valueSetter_button"+this.suffix]);
			startButton.innerHTML = "set current values as Start values";
			startButton.style.width = "50%";
			

			aboveElement.appendChild(startButton);
			aboveElement.appendChild(targetButton);
			this.elements["targetValueSetter_button_"+this.suffix] = targetButton;
			this.elements["startValueSetter_button_"+this.suffix] = startButton;
		}
createMessageListener(){
	 if (typeof window.addEventListener != 'undefined') {
		        window.addEventListener('message', function(e) {
		        if(e.origin == "https://preview.360ty.world" && e.data.instanceName == this.name()){
		           this.sentParams = e.data.values;
		         }
		        }.bind(this), false);
		    } else if (typeof window.attachEvent != 'undefined') { // this part is for IE8
		        window.attachEvent('onmessage', function(e) {
		            if(e.origin == "https://preview.360ty.world" && e.data.instanceName == this.name()){
	            	 this.sentParams = e.data.values;
		           }
		        }.bind(this));
		    }
}
addListeners(){
			
			/*this.setValuesTargetButton_listener();
			if(this.show_movement == true){
			this.setValuesStartButton_listener();
			}*/
			this.windowResizeListener();
			this.createMessageListener();
			this.add_responsive_control_listener();
		}
windowResizeListener(){
	document.addEventListener("resize", function(){
				 if (!this.throttled) {
					 this.setViewerSize(this.image_dimensions.width, this.chooseHeight());
					    this.throttled = true;
					    setTimeout(function() {
					      this.throttled = false;
					    }.bind(this), this.throttleDelay);
					  }  
			}.bind(this));
}
horizontallyAlignImage(alignment){
	var container_style = this.elements["container_"+this.suffix].style;
	var parentContainer_style = this.elements["container_"+this.suffix].parentElement.parentElement.style;
	switch(alignment){
		case "center":
			container_style.marginRight = "auto";
			container_style.marginLeft = "auto";
			
			parentContainer_style.marginLeft = "auto";
			parentContainer_style.marginRight = "auto";
			break;
		case "left":
			container_style.marginRight = "auto";
			container_style.marginLeft = "";
		
			parentContainer_style.marginRight = "auto";
			parentContainer_style.marginLeft = "";
			break;
		case "right":
			container_style.marginRight = "";
			container_style.marginLeft = "auto";
			
			parentContainer_style.marginRight = "";
			parentContainer_style.marginLeft = "auto";
	}
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
				add_responsive_control_listener();
			}
		}.bind(this),100);
	}
}

toggle_responsive_control_visibility_listener(controlName,compareValue,controlToHide,reverse){
	if(window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0]){
	var control_desktop = window.parent.document.getElementsByClassName("elementor-control-"+controlName)[0];
	var control_tablet = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_tablet")[0];
	var control_mobile = window.parent.document.getElementsByClassName("elementor-control-"+controlName+"_mobile")[0];
	var controlToHide_desktop = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide)[0];
	var controlToHide_tablet = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_tablet")[0];
	var controlToHide_mobile = window.parent.document.getElementsByClassName("elementor-control-"+controlToHide+"_mobile")[0];
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
	toggleControl = (type,controlName,compareValue,controlToHide,reverse) =>{
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
toggle_responsive_control_visibility(controlName,compareValue,controlToHide,reverse){
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
	
} 

var class_360ty_ready = true;