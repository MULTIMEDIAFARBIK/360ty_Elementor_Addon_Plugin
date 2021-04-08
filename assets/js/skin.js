// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: MAIN_360ty.ggsk
// Generated 2020-12-22T20:05:37

function pano2vrSkin(player,base) {
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_website_1', 2, false);
	player.addVariable('apr6', 2, false);
	player.addVariable('apr7', 2, false);
	player.addVariable('apr8', 2, false);
	player.addVariable('apr9', 2, false);
	player.addVariable('apr10', 2, false);
	player.addVariable('apr11', 2, false);
	player.addVariable('apr12', 2, false);
	player.addVariable('apr13', 2, false);
	player.addVariable('blinken_starten', 2, false);
	player.addVariable('ht_ani', 2, true);
	player.addVariable('UA_ID', 0, "");
	player.addVariable('UA_category', 0, "virtual tour");
	player.addVariable('vis_map', 2, false);
	player.addVariable('vis_map_close_desktop', 2, true);
	player.addVariable('vis_map_close_mobile', 2, true);
	player.addVariable('UA_ID_1', 0, "");
	player.addVariable('UA_category_1', 0, "virtual tour");
	player.addVariable('hotspotFarbe', 0, "#ae8b57");
	player.addVariable('hotspotFarbe_alpha_prozent', 1, 20);
	player.addVariable('smallPanel', 2, false);
	player.addVariable('panelFarbe', 0, "#ae8b57");
	player.addVariable('panelText', 0, "zum Produkt");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 296px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.ggNodeChange=function () {
			if(Boolean(player.getVariableValue("hotspotFarbe"))){
var hotspots = player.$.querySelectorAll(".HS_Farbe");
for(var i = 0; i < hotspots.length;i++){
    var hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    var border_color_index = hs_color.lastIndexOf(",");
    var border_color = hs_color.substring(0,border_color_index) + ",1)";
    hotspots[i].style.background = hs_color;
    hotspots[i].style.borderColor = border_color;
  hotspots[i].style.borderStyle = "solid";
 hotspots[i].style.borderSize = "2px";
}
function convertHex(hexCode,opacity){
	if(Boolean(hexCode)){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}else{
return 'rgba(174, 139, 87, 0.2)';
}
}
}
		}
		me.divSkin.appendChild(me._container_1);
		el=me._blinken=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="blinken";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blinken.ggIsActive=function() {
			return (me._blinken.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._blinken.ggTimestamp) / me._blinken.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blinken.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me._blinken.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._blinken);
		el=me._blinken_starten=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3000;
		el.ggId="blinken_starten";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 432px;';
		hs+='position : absolute;';
		hs+='top : 141px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blinken_starten.ggIsActive=function() {
			return (me._blinken_starten.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._blinken_starten.ggTimestamp) / me._blinken_starten.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blinken_starten.ggActivate=function () {
			player.setVariableValue('blinken_starten', true);
		}
		me._blinken_starten.ggUpdatePosition=function (useTransition) {
		}
		me._blinken_starten.ggNodeChange=function () {
			player.setVariableValue('blinken_starten', false);
		}
		me.divSkin.appendChild(me._blinken_starten);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if(Boolean(player.getVariableValue("hotspotFarbe"))){
var hotspots = player.$.querySelectorAll(".HS_Farbe");
for(var i = 0; i < hotspots.length;i++){
    var hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    var border_color_index = hs_color.lastIndexOf(",");
    var border_color = hs_color.substring(0,border_color_index) + ",1)";
    hotspots[i].style.background = hs_color;
    hotspots[i].style.borderColor = border_color;
  hotspots[i].style.borderStyle = "solid";
 hotspots[i].style.borderSize = "2px";
}
function convertHex(hexCode,opacity){
	if(Boolean(hexCode)){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}else{
return 'rgba(174, 139, 87, 0.2)';
}
}
}
		});
		player.addListener('varchanged_hotspotFarbe', function() {if(Boolean(player.getVariableValue("hotspotFarbe"))){
var hotspots = player.$.querySelectorAll(".HS_Farbe");
for(var i = 0; i < hotspots.length;i++){
    var hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    var border_color_index = hs_color.lastIndexOf(",");
    var border_color = hs_color.substring(0,border_color_index) + ",1)";
    hotspots[i].style.background = hs_color;
    hotspots[i].style.borderColor = border_color;
  hotspots[i].style.borderStyle = "solid";
 hotspots[i].style.borderSize = "2px";
}
function convertHex(hexCode,opacity){
	if(Boolean(hexCode)){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}else{
return 'rgba(174, 139, 87, 0.2)';
}
}
}});
		player.addListener('varchanged_hotspotFarbe_alpha_prozent', function() {if(Boolean(player.getVariableValue("hotspotFarbe"))){
var hotspots = player.$.querySelectorAll(".HS_Farbe");
for(var i = 0; i < hotspots.length;i++){
    var hs_color = convertHex(player.getVariableValue("hotspotFarbe"),player.getVariableValue("hotspotFarbe_alpha_prozent"));
    var border_color_index = hs_color.lastIndexOf(",");
    var border_color = hs_color.substring(0,border_color_index) + ",1)";
    hotspots[i].style.background = hs_color;
    hotspots[i].style.borderColor = border_color;
  hotspots[i].style.borderStyle = "solid";
 hotspots[i].style.borderSize = "2px";
}
function convertHex(hexCode,opacity){
	if(Boolean(hexCode)){
    var hex = hexCode.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba('+r+','+g+','+b+','+opacity/100+')';
}else{
return 'rgba(174, 139, 87, 0.2)';
}
}
}});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_panel_sizechanged = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._panel.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._panel.logicBlock_alpha();
				}
				if (hotspotTemplates['Panel'][i]._panel_rect && hotspotTemplates['Panel'][i]._panel_rect.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._panel_rect.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_changenode = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._panel_container && hotspotTemplates['Panel'][i]._panel_container.logicBlock_size) {
					hotspotTemplates['Panel'][i]._panel_container.logicBlock_size();
				}
				if (hotspotTemplates['Panel'][i]._panel_container && hotspotTemplates['Panel'][i]._panel_container.logicBlock_position) {
					hotspotTemplates['Panel'][i]._panel_container.logicBlock_position();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_alpha();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_visible();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_scaling) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_scaling();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_alpha();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_visible();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_scaling) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_configloaded = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._svg_2 && hotspotTemplates['Panel'][i]._svg_2.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._svg_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_mouseover = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._panel_container && hotspotTemplates['Panel'][i]._panel_container.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._panel_container.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_mouseover = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._hs_image_i_1_panel && hotspotTemplates['Panel'][i]._hs_image_i_1_panel.logicBlock_scaling) {
					hotspotTemplates['Panel'][i]._hs_image_i_1_panel.logicBlock_scaling();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_i_1_panel && hotspotTemplates['Panel'][i]._hs_image_i_1_panel.logicBlock_bordercolor) {
					hotspotTemplates['Panel'][i]._hs_image_i_1_panel.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_hastouch = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._svg_2 && hotspotTemplates['Panel'][i]._svg_2.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._svg_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_varchanged_smallPanel = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._panel_container && hotspotTemplates['Panel'][i]._panel_container.logicBlock_size) {
					hotspotTemplates['Panel'][i]._panel_container.logicBlock_size();
				}
				if (hotspotTemplates['Panel'][i]._panel_container && hotspotTemplates['Panel'][i]._panel_container.logicBlock_position) {
					hotspotTemplates['Panel'][i]._panel_container.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_varchanged_ht_ani = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_alpha();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_scaling) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_scaling();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_alpha) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_alpha();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_scaling) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_panel_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				if (hotspotTemplates['Panel'][i]._hs_image_animated_1_panel && hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._hs_image_animated_1_panel.logicBlock_visible();
				}
				if (hotspotTemplates['Panel'][i]._hs_image_animated_2_panel && hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_visible) {
					hotspotTemplates['Panel'][i]._hs_image_animated_2_panel.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_l_changenode = function(){
		if(hotspotTemplates['Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_alpha) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_visible) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_alpha) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_visible) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_l_mouseover = function(){
		if(hotspotTemplates['Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
				if (hotspotTemplates['Hotspot L'][i]._hs_image_i_l && hotspotTemplates['Hotspot L'][i]._hs_image_i_l.logicBlock_bordercolor) {
					hotspotTemplates['Hotspot L'][i]._hs_image_i_l.logicBlock_bordercolor();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_i_l && hotspotTemplates['Hotspot L'][i]._hs_image_i_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._hs_image_i_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot L'][i]._nodeimage_1_l && hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_angle) {
					hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_angle();
				}
				if (hotspotTemplates['Hotspot L'][i]._nodeimage_1_l && hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_alpha) {
					hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot L'][i]._nodeimage_1_l && hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._nodeimage_1_l.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_l_varchanged_ht_ani = function(){
		if(hotspotTemplates['Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_alpha) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_alpha) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_scaling) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_l_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_visible) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_2_l.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l && hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_visible) {
					hotspotTemplates['Hotspot L'][i]._hs_image_animated_1_l.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_s_changenode = function(){
		if(hotspotTemplates['Hotspot S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_alpha) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_visible) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_alpha) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_visible) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_s_mouseover = function(){
		if(hotspotTemplates['Hotspot S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
				if (hotspotTemplates['Hotspot S'][i]._hs_image_i_s && hotspotTemplates['Hotspot S'][i]._hs_image_i_s.logicBlock_bordercolor) {
					hotspotTemplates['Hotspot S'][i]._hs_image_i_s.logicBlock_bordercolor();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_i_s && hotspotTemplates['Hotspot S'][i]._hs_image_i_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._hs_image_i_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot S'][i]._nodeimage_1_s && hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_angle) {
					hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_angle();
				}
				if (hotspotTemplates['Hotspot S'][i]._nodeimage_1_s && hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_alpha) {
					hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot S'][i]._nodeimage_1_s && hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._nodeimage_1_s.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_s_varchanged_ht_ani = function(){
		if(hotspotTemplates['Hotspot S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_alpha) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_alpha) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_scaling) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_s_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Hotspot S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_visible) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_2_s.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s && hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_visible) {
					hotspotTemplates['Hotspot S'][i]._hs_image_animated_1_s.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_image_i_1_htm && hotspotTemplates['ht_node'][i]._hs_image_i_1_htm.logicBlock_bordercolor) {
					hotspotTemplates['ht_node'][i]._hs_image_i_1_htm.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_i_1_htm && hotspotTemplates['ht_node'][i]._hs_image_i_1_htm.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._hs_image_i_1_htm.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._nodeimage_1_ht && hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_angle) {
					hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_angle();
				}
				if (hotspotTemplates['ht_node'][i]._nodeimage_1_ht && hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._nodeimage_1_ht && hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._nodeimage_1_ht.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_blinken_starten = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_2_htm.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm && hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_image_animated_1_htm.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_m_changenode = function(){
		if(hotspotTemplates['Drone M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone M'].length; i++) {
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_alpha) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_visible) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_visible();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_alpha) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_visible) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_visible();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_m_mouseover = function(){
		if(hotspotTemplates['Drone M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone M'].length; i++) {
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_2 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_2.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_1 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_angle) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_angle();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_1 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_alpha) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_1 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_m_varchanged_ht_ani = function(){
		if(hotspotTemplates['Drone M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone M'].length; i++) {
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_alpha) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_alpha) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_scaling) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_m_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Drone M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone M'].length; i++) {
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_5 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_visible) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_5.logicBlock_visible();
				}
				if (hotspotTemplates['Drone M'][i]._nodeimage_dronem_4 && hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_visible) {
					hotspotTemplates['Drone M'][i]._nodeimage_dronem_4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_s_changenode = function(){
		if(hotspotTemplates['Drone S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone S'].length; i++) {
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_alpha) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_visible) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_visible();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_alpha) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_visible) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_visible();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_s_mouseover = function(){
		if(hotspotTemplates['Drone S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone S'].length; i++) {
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_2 && hotspotTemplates['Drone S'][i]._nodeimage_drones_2.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_1 && hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_angle) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_angle();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_1 && hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_alpha) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_1 && hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_s_varchanged_ht_ani = function(){
		if(hotspotTemplates['Drone S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone S'].length; i++) {
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_alpha) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_scaling();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_alpha) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_alpha();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_scaling) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_drone_s_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Drone S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone S'].length; i++) {
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_5 && hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_visible) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_5.logicBlock_visible();
				}
				if (hotspotTemplates['Drone S'][i]._nodeimage_drones_4 && hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_visible) {
					hotspotTemplates['Drone S'][i]._nodeimage_drones_4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot_l_changenode = function(){
		if(hotspotTemplates['Extern Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot_l_mouseover = function(){
		if(hotspotTemplates['Extern Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l.logicBlock_bordercolor) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l.logicBlock_bordercolor();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_i_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_angle) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_nodeimage_1_l.logicBlock_angle();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_ht_ani = function(){
		if(hotspotTemplates['Extern Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Extern Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_2_l.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l && hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot L'][i]._extern_hs_image_animated_1_l.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot__changenode = function(){
		if(hotspotTemplates['Extern Hotspot ']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot__mouseover = function(){
		if(hotspotTemplates['Extern Hotspot ']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s.logicBlock_bordercolor) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s.logicBlock_bordercolor();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_i_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_angle) {
					hotspotTemplates['Extern Hotspot '][i]._extern_nodeimage_1_s.logicBlock_angle();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_ht_ani = function(){
		if(hotspotTemplates['Extern Hotspot ']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_scaling();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_alpha) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_alpha();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_scaling) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_blinken_starten = function(){
		if(hotspotTemplates['Extern Hotspot ']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_2_s.logicBlock_visible();
				}
				if (hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s && hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_visible) {
					hotspotTemplates['Extern Hotspot '][i]._extern_hs_image_animated_1_s.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_infopoint_changenode = function(){
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				if (hotspotTemplates['Infopoint'][i]._information && hotspotTemplates['Infopoint'][i]._information.logicBlock_visible) {
					hotspotTemplates['Infopoint'][i]._information.logicBlock_visible();
				}
				if (hotspotTemplates['Infopoint'][i]._tt_information && hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_infopoint_configloaded = function(){
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				if (hotspotTemplates['Infopoint'][i]._tt_information && hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_infopoint_mouseover = function(){
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				if (hotspotTemplates['Infopoint'][i]._tt_information && hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['Infopoint'][i]._tt_information && hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_alpha) {
					hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_alpha();
				}
				if (hotspotTemplates['Infopoint'][i]._svg_1 && hotspotTemplates['Infopoint'][i]._svg_1.logicBlock_angle) {
					hotspotTemplates['Infopoint'][i]._svg_1.logicBlock_angle();
				}
				if (hotspotTemplates['Infopoint'][i]._svg_1 && hotspotTemplates['Infopoint'][i]._svg_1.logicBlock_scaling) {
					hotspotTemplates['Infopoint'][i]._svg_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_infopoint_activehotspotchanged = function(){
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				if (hotspotTemplates['Infopoint'][i]._tt_information && hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['Infopoint'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_infopoint_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				if (hotspotTemplates['Infopoint'][i]._information && hotspotTemplates['Infopoint'][i]._information.logicBlock_visible) {
					hotspotTemplates['Infopoint'][i]._information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_link_changenode = function(){
		if(hotspotTemplates['Link']) {
			var i;
			for(i = 0; i < hotspotTemplates['Link'].length; i++) {
				if (hotspotTemplates['Link'][i]._link_info && hotspotTemplates['Link'][i]._link_info.logicBlock_visible) {
					hotspotTemplates['Link'][i]._link_info.logicBlock_visible();
				}
				if (hotspotTemplates['Link'][i]._svg_link && hotspotTemplates['Link'][i]._svg_link.logicBlock_visible) {
					hotspotTemplates['Link'][i]._svg_link.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_link_configloaded = function(){
		if(hotspotTemplates['Link']) {
			var i;
			for(i = 0; i < hotspotTemplates['Link'].length; i++) {
				if (hotspotTemplates['Link'][i]._link_info && hotspotTemplates['Link'][i]._link_info.logicBlock_position) {
					hotspotTemplates['Link'][i]._link_info.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_link_mouseover = function(){
		if(hotspotTemplates['Link']) {
			var i;
			for(i = 0; i < hotspotTemplates['Link'].length; i++) {
				if (hotspotTemplates['Link'][i]._link_info && hotspotTemplates['Link'][i]._link_info.logicBlock_visible) {
					hotspotTemplates['Link'][i]._link_info.logicBlock_visible();
				}
				if (hotspotTemplates['Link'][i]._link_info && hotspotTemplates['Link'][i]._link_info.logicBlock_alpha) {
					hotspotTemplates['Link'][i]._link_info.logicBlock_alpha();
				}
				if (hotspotTemplates['Link'][i]._svg_link && hotspotTemplates['Link'][i]._svg_link.logicBlock_angle) {
					hotspotTemplates['Link'][i]._svg_link.logicBlock_angle();
				}
				if (hotspotTemplates['Link'][i]._svg_link && hotspotTemplates['Link'][i]._svg_link.logicBlock_scaling) {
					hotspotTemplates['Link'][i]._svg_link.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_link_activehotspotchanged = function(){
		if(hotspotTemplates['Link']) {
			var i;
			for(i = 0; i < hotspotTemplates['Link'].length; i++) {
				if (hotspotTemplates['Link'][i]._link_info && hotspotTemplates['Link'][i]._link_info.logicBlock_visible) {
					hotspotTemplates['Link'][i]._link_info.logicBlock_visible();
				}
				if (hotspotTemplates['Link'][i]._svg_link && hotspotTemplates['Link'][i]._svg_link.logicBlock_visible) {
					hotspotTemplates['Link'][i]._svg_link.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_m_changenode = function(){
		if(hotspotTemplates['Hotspot M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_alpha) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_visible) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_alpha) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_visible) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_m_mouseover = function(){
		if(hotspotTemplates['Hotspot M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
				if (hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m.logicBlock_bordercolor) {
					hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m.logicBlock_bordercolor();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._hs_image_i_1_m.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot M'][i]._nodeimage_1_m && hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_angle) {
					hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_angle();
				}
				if (hotspotTemplates['Hotspot M'][i]._nodeimage_1_m && hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_alpha) {
					hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot M'][i]._nodeimage_1_m && hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._nodeimage_1_m.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_m_varchanged_ht_ani = function(){
		if(hotspotTemplates['Hotspot M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_alpha) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_alpha) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_scaling) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_m_varchanged_blinken_starten = function(){
		if(hotspotTemplates['Hotspot M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_visible) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_2_m.logicBlock_visible();
				}
				if (hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m && hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_visible) {
					hotspotTemplates['Hotspot M'][i]._hs_image_animated_1_m.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._blinken.ggLastIsActive!=me._blinken.ggIsActive()) {
			me._blinken.ggLastIsActive=me._blinken.ggIsActive();
			if (me._blinken.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		if (me._blinken_starten.ggLastIsActive!=me._blinken_starten.ggIsActive()) {
			me._blinken_starten.ggLastIsActive=me._blinken_starten.ggIsActive();
			if (me._blinken_starten.ggLastIsActive) {
				player.setVariableValue('blinken_starten', true);
			} else {
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_panel(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._panel=document.createElement('div');
		el.ggId="Panel";
		el.ggDx=137;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot hotspot panel-farbe";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._panel.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._panel.ggCurrentLogicStateAlpha == 0) {
					me._panel.style.visibility=me._panel.ggVisible?'inherit':'hidden';
					me._panel.style.opacity=1;
				}
				else {
					me._panel.style.visibility=me._panel.ggVisible?'inherit':'hidden';
					me._panel.style.opacity=1;
				}
			}
		}
		me._panel.onclick=function (e) {
			if (
				(
					((player.getHasTouch() == true))
				)
			) {
				var flag=me._panel_container.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._panel_container.style[domTransition]='none';
				} else {
					me._panel_container.style[domTransition]='all 1000ms ease-out 0ms';
				}
				if (flag) {
					me._panel_container.style.opacity='0';
					me._panel_container.style.visibility='hidden';
				} else {
					me._panel_container.style.opacity='1';
					me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
				}
				me._panel_container.ggOpacitiyActive=!flag;
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._panel.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._panel.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style[domTransition]='none';
				me._panel_container.style.opacity='1';
				me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
			}
			me.elementMouseOver['panel']=true;
			me._hs_image_i_1_panel.logicBlock_scaling();
			me._hs_image_i_1_panel.logicBlock_bordercolor();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._panel.onmouseout=function (e) {
			player.setActiveHotspot(null);
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style[domTransition]='none';
				me._panel_container.style.opacity='0';
				me._panel_container.style.visibility='hidden';
			}
			me.elementMouseOver['panel']=false;
			me._hs_image_i_1_panel.logicBlock_scaling();
			me._hs_image_i_1_panel.logicBlock_bordercolor();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._panel.ontouchend=function (e) {
			me.elementMouseOver['panel']=false;
			me._hs_image_i_1_panel.logicBlock_scaling();
			me._hs_image_i_1_panel.logicBlock_bordercolor();
		}
		me._panel.ggActivate=function () {
			if (
				(
					((player.getVariableValue('smallPanel') == true))
				)
			) {
				function changeFontSize(className, fontSize){
document.getElementById("container").querySelectorAll("."+className).forEach((textItem)=>{
textItem.childNodes[0].style.fontSize = fontSize + "px";
});
}

changeFontSize("panel_text_button", 11);
changeFontSize("panel_text_description",9);
changeFontSize("panel_text_header",10);
			}
		}
		me._panel.ggUpdatePosition=function (useTransition) {
		}
		me._panel.ggNodeChange=function () {
			var path = player.getBasePath() !== "" ? player.getBasePath() : (""+window.location.origin+window.location.pathname);

player.getPointHotspotIds().filter(hotspot =>{ return hotspot.includes("panel")}).forEach(panel =>{
player.getHotspot(panel).div.querySelector("img").src = path + "assets/"+panel+".png"
});
			if (me._panel.ggLastIsActive!=me._panel.ggIsActive()) {
				me._panel.ggLastIsActive=me._panel.ggIsActive();
				if (me._panel.ggIsActive()) {
					if (me._panel.ggActivate) me._panel.ggActivate();
				} else {
					if (me._panel.ggDeactivate) me._panel.ggDeactivate();
				}
			}
		}
		el=me._panel_container=document.createElement('div');
		el.ggId="Panel_container";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 476px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -8px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 326px;';
		hs+='pointer-events:none;';
		hs+='-webkit-transition:opacity 1000ms ease-out; -moz-transition:opacity 1000ms ease-out; -o-transition:opacity 1000ms ease-out; transition:opacity 1000ms ease-out;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._panel_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('smallPanel') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._panel_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._panel_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._panel_container.style[domTransition]='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStatePosition == 0) {
					me._panel_container.style.right='3px';
					this.ggDy = 0;
					me._panel_container.ggUpdatePosition(true);
				}
				else {
					me._panel_container.style.right='-8px';
					me._panel_container.ggDy=0;
					me._panel_container.ggUpdatePosition(true);
				}
			}
		}
		me._panel_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('smallPanel') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._panel_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._panel_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._panel_container.style[domTransition]='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStateSize == 0) {
					me._panel_container.style.width='163px';
					me._panel_container.style.height='234px';
					skin.updateSize(me._panel_container);
				}
				else {
					me._panel_container.style.width='326px';
					me._panel_container.style.height='476px';
					skin.updateSize(me._panel_container);
				}
			}
		}
		me._panel_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['panel_container'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel_container.style[domTransition]='right 0s, top 0s, width 0s, height 0s, opacity 1000ms ease 0ms';
				if (me._panel_container.ggCurrentLogicStateAlpha == 0) {
					me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
					me._panel_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._panel_container.style.opacity == 0.0) { me._panel_container.style.visibility="hidden"; } }, 1005);
					me._panel_container.style.opacity=0;
				}
			}
		}
		me._panel_container.onmouseover=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style[domTransition]='none';
				me._panel_container.style.opacity='1';
				me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
			}
			me.elementMouseOver['panel_container']=true;
			me._panel_container.logicBlock_alpha();
		}
		me._panel_container.onmouseout=function (e) {
			if (
				(
					((player.getHasTouch() == false))
				)
			) {
				me._panel_container.style[domTransition]='none';
				me._panel_container.style.opacity='0';
				me._panel_container.style.visibility='hidden';
			}
			me.elementMouseOver['panel_container']=false;
			me._panel_container.logicBlock_alpha();
		}
		me._panel_container.ontouchend=function (e) {
			me.elementMouseOver['panel_container']=false;
			me._panel_container.logicBlock_alpha();
		}
		me._panel_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._panel_hover_rect=document.createElement('div');
		el.ggId="panel_hover_rect";
		el.ggDx=151;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 22.3926%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._panel_hover_rect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_hover_rect.onmouseover=function (e) {
			me.elementMouseOver['panel_hover_rect']=true;
		}
		me._panel_hover_rect.onmouseout=function (e) {
			me.elementMouseOver['panel_hover_rect']=false;
		}
		me._panel_hover_rect.ontouchend=function (e) {
			me.elementMouseOver['panel_hover_rect']=false;
		}
		me._panel_hover_rect.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._panel_container.appendChild(me._panel_hover_rect);
		el=me._panel_rect=document.createElement('div');
		el.ggId="Panel_rect";
		el.ggDx=-10.74;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle panel-farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 7px;';
		hs+='border-radius : 7px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 2px solid #e64215;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 95.09%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._panel_rect.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._panel_rect.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getViewerSize().width == 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._panel_rect.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._panel_rect.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._panel_rect.style[domTransition]='opacity 0s';
				if (me._panel_rect.ggCurrentLogicStateAlpha == 0) {
					me._panel_rect.style.visibility=me._panel_rect.ggVisible?'inherit':'hidden';
					me._panel_rect.style.opacity=1;
				}
				else {
					me._panel_rect.style.visibility=me._panel_rect.ggVisible?'inherit':'hidden';
					me._panel_rect.style.opacity=1;
				}
			}
		}
		me._panel_rect.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._button0=document.createElement('div');
		el.ggId="Button";
		el.ggDx=0;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle panel-button-farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 4px;';
		hs+='border-radius : 4px;';
		hs+='background : #e64215;';
		hs+='border : 1px solid #818181;';
		hs+='cursor : default;';
		hs+='height : 10%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._button0.onclick=function (e) {
			player.openUrl(me.hotspot.target,"_blank");
		}
		me._button0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._buttontext=document.createElement('div');
		els=me._buttontext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ButtonText";
		el.ggDx=0.18;
		el.ggDy=8.41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_button";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 81.9328%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 21px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._buttontext.ggUpdateText=function() {
			var hs=player.getVariableValue('panelText');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._buttontext.ggUpdateText();
		player.addListener('timer', function() {
			me._buttontext.ggUpdateText();
		});
		el.appendChild(els);
		me._buttontext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._buttontext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._button0.appendChild(me._buttontext);
		me._panel_rect.appendChild(me._button0);
		el=me._beschreibung=document.createElement('div');
		els=me._beschreibung__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Beschreibung";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_description";
		el.ggType='text';
		hs ='';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(35,35,35,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._beschreibung.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._beschreibung.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._panel_rect.appendChild(me._beschreibung);
		el=me._ueberschrift=document.createElement('div');
		els=me._ueberschrift__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ueberschrift";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text panel_text_header";
		el.ggType='text';
		hs ='';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ueberschrift.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ueberschrift.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._panel_rect.appendChild(me._ueberschrift);
		el=me._bild=document.createElement('div');
		els=me._bild__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._bild.ggUpdatePosition();}
		el.ggText=basePath + ""+player.hotspot.title+"";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="bild";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 5.42%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bild.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bild.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._bild.clientWidth;
			var parentHeight = me._bild.clientHeight;
			var img = me._bild__img;
			var aspectRatioDiv = me._bild.clientWidth / me._bild.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			img.style.width=parentWidth + 'px';
			img.style.height='';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._panel_rect.appendChild(me._bild);
		el=me._triangle=document.createElement('div');
		el.ggId="Triangle";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle panel-triangle";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 100%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._triangle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._triangle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._panel_rect.appendChild(me._triangle);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgdmlld0JveD0iMCAwIDUxMS43NiA1MTEuNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBjbGFzcz0iIiBoZWlnaHQ9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIj4KIDxyZWN0IHNoYXBlPSJzcXVhcmUiIGZpbGw9IiNmZmZmZmYiIGhlaWdodD'+
			'0iNTExLjc2IiB3aWR0aD0iNTExLjc2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjMzLDAsMCwwLjMzLDE3MS40Mzk2MDMyNzE0ODQzNywxNzEuNDM5NjAzMjcxNDg0MzcpIi8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni43NjQwNzQ3MDcwMzEyNiw3Ni43NjM4MTE0OTI5MTk5MykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiIgZmlsbD0iI2U2NDIxNSIgZD0iTTQzNi44OTYsNzQuODY5Yy05OS44NC05OS44MTktMjYyLjIwOC05OS44MTktMzYyLjA0OCwwYy05'+
			'OS43OTcsOTkuODE5LTk5Ljc5NywyNjIuMjI5LDAsMzYyLjA0OCAgICBjNDkuOTIsNDkuODk5LDExNS40NzcsNzQuODM3LDE4MS4wMzUsNzQuODM3czEzMS4wOTMtMjQuOTM5LDE4MS4wMTMtNzQuODM3QzUzNi43MTUsMzM3LjA5OSw1MzYuNzE1LDE3NC42ODgsNDM2Ljg5Niw3NC44Njl6ICAgICBNMzYxLjQ2MSwzMzEuMzE3YzguMzQxLDguMzQxLDguMzQxLDIxLjgyNCwwLDMwLjE2NWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxICAgIGwtNzUuNDEzLTc1LjQzNWwtNzUuMzkyLDc1LjQxM2MtNC4xODEsNC4xNi05Lj'+
			'Y0Myw2LjI1MS0xNS4wODMsNi4yNTFjLTUuNDYxLDAtMTAuOTIzLTIuMDkxLTE1LjA4My02LjI1MSAgICBjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NWw3NS4zOTItNzUuNDEzbC03NS40MTMtNzUuNDEzYy04LjM0MS04LjM0MS04LjM0MS0yMS44NDUsMC0zMC4xNjUgICAgYzguMzItOC4zNDEsMjEuODI0LTguMzQxLDMwLjE2NSwwbDc1LjQxMyw3NS40MTNsNzUuNDEzLTc1LjQxM2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDAgICAgYzguMzQxLDguMzIsOC4zNDEsMjEuODI0LDAsMzAuMTY1bC03NS40MTMsNzUuNDEzTDM2MS40NjEsMzMxLjMxN3oiIHN0eWxlPSIi'+
			'Lz4KICAgPC9nPgogIDwvZz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=50.0011;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg panel-farbe";
		el.ggType='svg';
		hs ='';
		hs+='height : 11.9748%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 18.3875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2.style[domTransition]='';
				if (me._svg_2.ggCurrentLogicStateVisible == 0) {
					me._svg_2.style.visibility=(Number(me._svg_2.style.opacity)>0||!me._svg_2.style.opacity)?'inherit':'hidden';
					me._svg_2.ggVisible=true;
				}
				else {
					me._svg_2.style.visibility="hidden";
					me._svg_2.ggVisible=false;
				}
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._panel_rect.appendChild(me._svg_2);
		me._panel_container.appendChild(me._panel_rect);
		me._panel.appendChild(me._panel_container);
		el=me._hs_image_i_1_panel=document.createElement('div');
		el.ggId="hs_image_i_1_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle panel-hotspot-farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(230,66,21,0.352941);';
		hs+='border : 6px solid #e64215;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['panel'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_panel.ggParameter.sx = 0.8;
					me._hs_image_i_1_panel.ggParameter.sy = 0.8;
					me._hs_image_i_1_panel.style[domTransform]=parameterToTransform(me._hs_image_i_1_panel.ggParameter);
				}
				else {
					me._hs_image_i_1_panel.ggParameter.sx = 0.5;
					me._hs_image_i_1_panel.ggParameter.sy = 0.5;
					me._hs_image_i_1_panel.style[domTransform]=parameterToTransform(me._hs_image_i_1_panel.ggParameter);
				}
			}
		}
		me._hs_image_i_1_panel.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['panel'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_panel.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_panel.style.borderColor="rgba(230,66,21,1)";
				}
				else {
					me._hs_image_i_1_panel.style.borderColor="rgba(230,66,21,1)";
				}
			}
		}
		me._hs_image_i_1_panel.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._panel.appendChild(me._hs_image_i_1_panel);
		el=me._hs_image_animated_1_panel=document.createElement('div');
		el.ggId="hs_image_animated_1_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle panel-hotspot-farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #e64215;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_panel.ggParameter.sx = 0.8;
					me._hs_image_animated_1_panel.ggParameter.sy = 0.8;
					me._hs_image_animated_1_panel.style[domTransform]=parameterToTransform(me._hs_image_animated_1_panel.ggParameter);
				}
				else {
					me._hs_image_animated_1_panel.ggParameter.sx = 0.5;
					me._hs_image_animated_1_panel.ggParameter.sy = 0.5;
					me._hs_image_animated_1_panel.style[domTransform]=parameterToTransform(me._hs_image_animated_1_panel.ggParameter);
				}
			}
		}
		me._hs_image_animated_1_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_panel.style.visibility=(Number(me._hs_image_animated_1_panel.style.opacity)>0||!me._hs_image_animated_1_panel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_panel.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_panel.style.visibility="hidden";
					me._hs_image_animated_1_panel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_panel.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_panel.style.opacity == 0.0) { me._hs_image_animated_1_panel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_panel.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_panel.style.visibility=me._hs_image_animated_1_panel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_panel.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_panel.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._panel.appendChild(me._hs_image_animated_1_panel);
		el=me._hs_image_animated_2_panel=document.createElement('div');
		el.ggId="hs_image_animated_2_panel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle panel-hotspot-farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(230,66,21,0.196078);';
		hs+='border : 2px solid #e64215;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_image_animated_2_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_panel.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_panel.ggParameter.sx = 0.8;
					me._hs_image_animated_2_panel.ggParameter.sy = 0.8;
					me._hs_image_animated_2_panel.style[domTransform]=parameterToTransform(me._hs_image_animated_2_panel.ggParameter);
				}
				else {
					me._hs_image_animated_2_panel.ggParameter.sx = 1;
					me._hs_image_animated_2_panel.ggParameter.sy = 1;
					me._hs_image_animated_2_panel.style[domTransform]=parameterToTransform(me._hs_image_animated_2_panel.ggParameter);
				}
			}
		}
		me._hs_image_animated_2_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_panel.style.visibility=(Number(me._hs_image_animated_2_panel.style.opacity)>0||!me._hs_image_animated_2_panel.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_panel.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_panel.style.visibility="hidden";
					me._hs_image_animated_2_panel.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_panel.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_panel.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_panel.style.visibility=me._hs_image_animated_2_panel.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_panel.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_panel.style.opacity == 0.0) { me._hs_image_animated_2_panel.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_panel.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_panel.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._panel.appendChild(me._hs_image_animated_2_panel);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((20-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._panel.appendChild(me._text_1);
		if (
			(
				((player.getViewerSize().width <= 500)) || 
				((player.getViewerSize().height <= 750))
			)
		) {
			player.setVariableValue('smallPanel', true);
		}
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['panel_hover_rect']) {
					me._panel_container.style[domTransition]='none';
					me._panel_container.style.opacity='1';
					me._panel_container.style.visibility=me._panel_container.ggVisible?'inherit':'hidden';
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._panel;
	};
	function SkinHotspotClass_hotspot_l(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_l=document.createElement('div');
		el.ggId="Hotspot L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_l.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_l.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_l.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_l']=true;
			me._hs_image_i_l.logicBlock_bordercolor();
			me._hs_image_i_l.logicBlock_scaling();
			me._nodeimage_1_l.logicBlock_angle();
			me._nodeimage_1_l.logicBlock_alpha();
			me._nodeimage_1_l.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_l.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_l']=false;
			me._hs_image_i_l.logicBlock_bordercolor();
			me._hs_image_i_l.logicBlock_scaling();
			me._nodeimage_1_l.logicBlock_angle();
			me._nodeimage_1_l.logicBlock_alpha();
			me._nodeimage_1_l.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_l.ontouchend=function (e) {
			me.elementMouseOver['hotspot_l']=false;
			me._hs_image_i_l.logicBlock_bordercolor();
			me._hs_image_i_l.logicBlock_scaling();
			me._nodeimage_1_l.logicBlock_angle();
			me._nodeimage_1_l.logicBlock_alpha();
			me._nodeimage_1_l.logicBlock_scaling();
		}
		me._hotspot_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_l=document.createElement('div');
		el.ggId="hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_image_animated_2_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_l.ggParameter.sx = 0.8;
					me._hs_image_animated_2_l.ggParameter.sy = 0.8;
					me._hs_image_animated_2_l.style[domTransform]=parameterToTransform(me._hs_image_animated_2_l.ggParameter);
				}
				else {
					me._hs_image_animated_2_l.ggParameter.sx = 1;
					me._hs_image_animated_2_l.ggParameter.sy = 1;
					me._hs_image_animated_2_l.style[domTransform]=parameterToTransform(me._hs_image_animated_2_l.ggParameter);
				}
			}
		}
		me._hs_image_animated_2_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_l.style.visibility=(Number(me._hs_image_animated_2_l.style.opacity)>0||!me._hs_image_animated_2_l.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_l.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_l.style.visibility="hidden";
					me._hs_image_animated_2_l.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_l.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_l.style.visibility=me._hs_image_animated_2_l.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_l.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_l.style.opacity == 0.0) { me._hs_image_animated_2_l.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_l.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_l.appendChild(me._hs_image_animated_2_l);
		el=me._hs_image_animated_1_l=document.createElement('div');
		el.ggId="hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_l.ggParameter.sx = 0.8;
					me._hs_image_animated_1_l.ggParameter.sy = 0.8;
					me._hs_image_animated_1_l.style[domTransform]=parameterToTransform(me._hs_image_animated_1_l.ggParameter);
				}
				else {
					me._hs_image_animated_1_l.ggParameter.sx = 0.5;
					me._hs_image_animated_1_l.ggParameter.sy = 0.5;
					me._hs_image_animated_1_l.style[domTransform]=parameterToTransform(me._hs_image_animated_1_l.ggParameter);
				}
			}
		}
		me._hs_image_animated_1_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_l.style.visibility=(Number(me._hs_image_animated_1_l.style.opacity)>0||!me._hs_image_animated_1_l.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_l.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_l.style.visibility="hidden";
					me._hs_image_animated_1_l.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_l.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_l.style.opacity == 0.0) { me._hs_image_animated_1_l.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_l.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_l.style.visibility=me._hs_image_animated_1_l.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_l.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_l.appendChild(me._hs_image_animated_1_l);
		el=me._hs_image_i_l=document.createElement('div');
		el.ggId="hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_i_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_l'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_l.ggParameter.sx = 0.8;
					me._hs_image_i_l.ggParameter.sy = 0.8;
					me._hs_image_i_l.style[domTransform]=parameterToTransform(me._hs_image_i_l.ggParameter);
				}
				else {
					me._hs_image_i_l.ggParameter.sx = 0.5;
					me._hs_image_i_l.ggParameter.sy = 0.5;
					me._hs_image_i_l.style[domTransform]=parameterToTransform(me._hs_image_i_l.ggParameter);
				}
			}
		}
		me._hs_image_i_l.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_l'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_l.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_l.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_l.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_l.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_l.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_l.appendChild(me._hs_image_i_l);
		el=me._nodeimage_1_l=document.createElement('div');
		els=me._nodeimage_1_l__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_1_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_l'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_l.ggParameter.sx = 3;
					me._nodeimage_1_l.ggParameter.sy = 3;
					me._nodeimage_1_l.style[domTransform]=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
				else {
					me._nodeimage_1_l.ggParameter.sx = 0;
					me._nodeimage_1_l.ggParameter.sy = 0;
					me._nodeimage_1_l.style[domTransform]=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
			}
		}
		me._nodeimage_1_l.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_l'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_l.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_l.ggParameter.a = 360;
					me._nodeimage_1_l.style[domTransform]=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
				else {
					me._nodeimage_1_l.ggParameter.a = -360;
					me._nodeimage_1_l.style[domTransform]=parameterToTransform(me._nodeimage_1_l.ggParameter);
				}
			}
		}
		me._nodeimage_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_l'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_l.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_l.style.visibility=me._nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._nodeimage_1_l.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_l.style.opacity == 0.0) { me._nodeimage_1_l.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_l.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_l.appendChild(me._nodeimage_1_l);
		me.__div = me._hotspot_l;
	};
	function SkinHotspotClass_hotspot_s(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_s=document.createElement('div');
		el.ggId="Hotspot S";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_s.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_s.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_s.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_s']=true;
			me._hs_image_i_s.logicBlock_bordercolor();
			me._hs_image_i_s.logicBlock_scaling();
			me._nodeimage_1_s.logicBlock_angle();
			me._nodeimage_1_s.logicBlock_alpha();
			me._nodeimage_1_s.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_s.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_s']=false;
			me._hs_image_i_s.logicBlock_bordercolor();
			me._hs_image_i_s.logicBlock_scaling();
			me._nodeimage_1_s.logicBlock_angle();
			me._nodeimage_1_s.logicBlock_alpha();
			me._nodeimage_1_s.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_s.ontouchend=function (e) {
			me.elementMouseOver['hotspot_s']=false;
			me._hs_image_i_s.logicBlock_bordercolor();
			me._hs_image_i_s.logicBlock_scaling();
			me._nodeimage_1_s.logicBlock_angle();
			me._nodeimage_1_s.logicBlock_alpha();
			me._nodeimage_1_s.logicBlock_scaling();
		}
		me._hotspot_s.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_s=document.createElement('div');
		el.ggId="hs_image_animated_2_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_image_animated_2_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_s.ggParameter.sx = 0.8;
					me._hs_image_animated_2_s.ggParameter.sy = 0.8;
					me._hs_image_animated_2_s.style[domTransform]=parameterToTransform(me._hs_image_animated_2_s.ggParameter);
				}
				else {
					me._hs_image_animated_2_s.ggParameter.sx = 1;
					me._hs_image_animated_2_s.ggParameter.sy = 1;
					me._hs_image_animated_2_s.style[domTransform]=parameterToTransform(me._hs_image_animated_2_s.ggParameter);
				}
			}
		}
		me._hs_image_animated_2_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_s.style.visibility=(Number(me._hs_image_animated_2_s.style.opacity)>0||!me._hs_image_animated_2_s.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_s.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_s.style.visibility="hidden";
					me._hs_image_animated_2_s.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_s.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_s.style.visibility=me._hs_image_animated_2_s.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_s.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_s.style.opacity == 0.0) { me._hs_image_animated_2_s.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_s.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_s.appendChild(me._hs_image_animated_2_s);
		el=me._hs_image_animated_1_s=document.createElement('div');
		el.ggId="hs_image_animated_1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_s.ggParameter.sx = 0.8;
					me._hs_image_animated_1_s.ggParameter.sy = 0.8;
					me._hs_image_animated_1_s.style[domTransform]=parameterToTransform(me._hs_image_animated_1_s.ggParameter);
				}
				else {
					me._hs_image_animated_1_s.ggParameter.sx = 0.5;
					me._hs_image_animated_1_s.ggParameter.sy = 0.5;
					me._hs_image_animated_1_s.style[domTransform]=parameterToTransform(me._hs_image_animated_1_s.ggParameter);
				}
			}
		}
		me._hs_image_animated_1_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_s.style.visibility=(Number(me._hs_image_animated_1_s.style.opacity)>0||!me._hs_image_animated_1_s.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_s.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_s.style.visibility="hidden";
					me._hs_image_animated_1_s.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_s.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_s.style.opacity == 0.0) { me._hs_image_animated_1_s.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_s.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_s.style.visibility=me._hs_image_animated_1_s.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_s.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_s.appendChild(me._hs_image_animated_1_s);
		el=me._hs_image_i_s=document.createElement('div');
		el.ggId="hs_image_i_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_i_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_s'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_s.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_s.ggParameter.sx = 0.8;
					me._hs_image_i_s.ggParameter.sy = 0.8;
					me._hs_image_i_s.style[domTransform]=parameterToTransform(me._hs_image_i_s.ggParameter);
				}
				else {
					me._hs_image_i_s.ggParameter.sx = 0.5;
					me._hs_image_i_s.ggParameter.sy = 0.5;
					me._hs_image_i_s.style[domTransform]=parameterToTransform(me._hs_image_i_s.ggParameter);
				}
			}
		}
		me._hs_image_i_s.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_s'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_s.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_s.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_s.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_s.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_s.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_s.appendChild(me._hs_image_i_s);
		el=me._nodeimage_1_s=document.createElement('div');
		els=me._nodeimage_1_s__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_s_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_1_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_s'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_s.ggParameter.sx = 3;
					me._nodeimage_1_s.ggParameter.sy = 3;
					me._nodeimage_1_s.style[domTransform]=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
				else {
					me._nodeimage_1_s.ggParameter.sx = 0;
					me._nodeimage_1_s.ggParameter.sy = 0;
					me._nodeimage_1_s.style[domTransform]=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
			}
		}
		me._nodeimage_1_s.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_s'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_s.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_s.ggParameter.a = 360;
					me._nodeimage_1_s.style[domTransform]=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
				else {
					me._nodeimage_1_s.ggParameter.a = -360;
					me._nodeimage_1_s.style[domTransform]=parameterToTransform(me._nodeimage_1_s.ggParameter);
				}
			}
		}
		me._nodeimage_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_s'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_s.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_s.style.visibility=me._nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._nodeimage_1_s.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_s.style.opacity == 0.0) { me._nodeimage_1_s.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_s.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_s.appendChild(me._nodeimage_1_s);
		me.__div = me._hotspot_s;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hs_image_i_1_htm.logicBlock_bordercolor();
			me._hs_image_i_1_htm.logicBlock_scaling();
			me._nodeimage_1_ht.logicBlock_angle();
			me._nodeimage_1_ht.logicBlock_alpha();
			me._nodeimage_1_ht.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hs_image_i_1_htm.logicBlock_bordercolor();
			me._hs_image_i_1_htm.logicBlock_scaling();
			me._nodeimage_1_ht.logicBlock_angle();
			me._nodeimage_1_ht.logicBlock_alpha();
			me._nodeimage_1_ht.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hs_image_i_1_htm.logicBlock_bordercolor();
			me._hs_image_i_1_htm.logicBlock_scaling();
			me._nodeimage_1_ht.logicBlock_angle();
			me._nodeimage_1_ht.logicBlock_alpha();
			me._nodeimage_1_ht.logicBlock_scaling();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_htm=document.createElement('div');
		el.ggId="hs_image_animated_2_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_image_animated_2_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_htm.ggParameter.sx = 0.8;
					me._hs_image_animated_2_htm.ggParameter.sy = 0.8;
					me._hs_image_animated_2_htm.style[domTransform]=parameterToTransform(me._hs_image_animated_2_htm.ggParameter);
				}
				else {
					me._hs_image_animated_2_htm.ggParameter.sx = 1;
					me._hs_image_animated_2_htm.ggParameter.sy = 1;
					me._hs_image_animated_2_htm.style[domTransform]=parameterToTransform(me._hs_image_animated_2_htm.ggParameter);
				}
			}
		}
		me._hs_image_animated_2_htm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_htm.style.visibility=(Number(me._hs_image_animated_2_htm.style.opacity)>0||!me._hs_image_animated_2_htm.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_htm.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_htm.style.visibility="hidden";
					me._hs_image_animated_2_htm.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_htm.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_htm.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_htm.style.visibility=me._hs_image_animated_2_htm.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_htm.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_htm.style.opacity == 0.0) { me._hs_image_animated_2_htm.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_htm.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_htm.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hs_image_animated_2_htm);
		el=me._hs_image_animated_1_htm=document.createElement('div');
		el.ggId="hs_image_animated_1_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_htm.ggParameter.sx = 0.8;
					me._hs_image_animated_1_htm.ggParameter.sy = 0.8;
					me._hs_image_animated_1_htm.style[domTransform]=parameterToTransform(me._hs_image_animated_1_htm.ggParameter);
				}
				else {
					me._hs_image_animated_1_htm.ggParameter.sx = 0.5;
					me._hs_image_animated_1_htm.ggParameter.sy = 0.5;
					me._hs_image_animated_1_htm.style[domTransform]=parameterToTransform(me._hs_image_animated_1_htm.ggParameter);
				}
			}
		}
		me._hs_image_animated_1_htm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_htm.style.visibility=(Number(me._hs_image_animated_1_htm.style.opacity)>0||!me._hs_image_animated_1_htm.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_htm.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_htm.style.visibility="hidden";
					me._hs_image_animated_1_htm.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_htm.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_htm.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_htm.style.opacity == 0.0) { me._hs_image_animated_1_htm.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_htm.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_htm.style.visibility=me._hs_image_animated_1_htm.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_htm.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_htm.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hs_image_animated_1_htm);
		el=me._hs_image_i_1_htm=document.createElement('div');
		el.ggId="hs_image_i_1_htm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_htm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_htm.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_htm.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_htm.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_htm.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_htm.ggParameter.sx = 0.8;
					me._hs_image_i_1_htm.ggParameter.sy = 0.8;
					me._hs_image_i_1_htm.style[domTransform]=parameterToTransform(me._hs_image_i_1_htm.ggParameter);
				}
				else {
					me._hs_image_i_1_htm.ggParameter.sx = 0.5;
					me._hs_image_i_1_htm.ggParameter.sy = 0.5;
					me._hs_image_i_1_htm.style[domTransform]=parameterToTransform(me._hs_image_i_1_htm.ggParameter);
				}
			}
		}
		me._hs_image_i_1_htm.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_htm.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_htm.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_htm.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_1_htm.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_htm.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hs_image_i_1_htm);
		el=me._nodeimage_1_ht=document.createElement('div');
		els=me._nodeimage_1_ht__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_ht_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_ht";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_1_ht.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_ht.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_ht.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_ht.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_ht.ggParameter.sx = 3;
					me._nodeimage_1_ht.ggParameter.sy = 3;
					me._nodeimage_1_ht.style[domTransform]=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
				else {
					me._nodeimage_1_ht.ggParameter.sx = 0;
					me._nodeimage_1_ht.ggParameter.sy = 0;
					me._nodeimage_1_ht.style[domTransform]=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
			}
		}
		me._nodeimage_1_ht.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_ht.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_ht.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_ht.ggParameter.a = 360;
					me._nodeimage_1_ht.style[domTransform]=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
				else {
					me._nodeimage_1_ht.ggParameter.a = -360;
					me._nodeimage_1_ht.style[domTransform]=parameterToTransform(me._nodeimage_1_ht.ggParameter);
				}
			}
		}
		me._nodeimage_1_ht.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_ht.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_ht.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_ht.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_ht.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_ht.style.visibility=me._nodeimage_1_ht.ggVisible?'inherit':'hidden';
					me._nodeimage_1_ht.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_ht.style.opacity == 0.0) { me._nodeimage_1_ht.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_ht.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_ht.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._nodeimage_1_ht);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_drone_m(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._drone_m=document.createElement('div');
		el.ggId="Drone M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._drone_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._drone_m.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._drone_m.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._drone_m.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['drone_m']=true;
			me._nodeimage_dronem_2.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_angle();
			me._nodeimage_dronem_1.logicBlock_alpha();
			me._nodeimage_dronem_1.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._drone_m.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['drone_m']=false;
			me._nodeimage_dronem_2.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_angle();
			me._nodeimage_dronem_1.logicBlock_alpha();
			me._nodeimage_dronem_1.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._drone_m.ontouchend=function (e) {
			me.elementMouseOver['drone_m']=false;
			me._nodeimage_dronem_2.logicBlock_scaling();
			me._nodeimage_dronem_1.logicBlock_angle();
			me._nodeimage_dronem_1.logicBlock_alpha();
			me._nodeimage_dronem_1.logicBlock_scaling();
		}
		me._drone_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_dronem_5=document.createElement('div');
		el.ggId="NodeImage_DroneM_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_dronem_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_5.ggParameter.sx = 0.8;
					me._nodeimage_dronem_5.ggParameter.sy = 0.8;
					me._nodeimage_dronem_5.style[domTransform]=parameterToTransform(me._nodeimage_dronem_5.ggParameter);
				}
				else {
					me._nodeimage_dronem_5.ggParameter.sx = 1;
					me._nodeimage_dronem_5.ggParameter.sy = 1;
					me._nodeimage_dronem_5.style[domTransform]=parameterToTransform(me._nodeimage_dronem_5.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_dronem_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_dronem_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_dronem_5.style.visibility=(Number(me._nodeimage_dronem_5.style.opacity)>0||!me._nodeimage_dronem_5.style.opacity)?'inherit':'hidden';
					me._nodeimage_dronem_5.ggVisible=true;
				}
				else {
					me._nodeimage_dronem_5.style.visibility="hidden";
					me._nodeimage_dronem_5.ggVisible=false;
				}
			}
		}
		me._nodeimage_dronem_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_5.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_dronem_5.style.visibility=me._nodeimage_dronem_5.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_5.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._nodeimage_dronem_5.style.opacity == 0.0) { me._nodeimage_dronem_5.style.visibility="hidden"; } }, 505);
					me._nodeimage_dronem_5.style.opacity=0;
				}
			}
		}
		me._nodeimage_dronem_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_m.appendChild(me._nodeimage_dronem_5);
		el=me._nodeimage_dronem_4=document.createElement('div');
		el.ggId="NodeImage_DroneM_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_4.ggParameter.sx = 0.8;
					me._nodeimage_dronem_4.ggParameter.sy = 0.8;
					me._nodeimage_dronem_4.style[domTransform]=parameterToTransform(me._nodeimage_dronem_4.ggParameter);
				}
				else {
					me._nodeimage_dronem_4.ggParameter.sx = 0.5;
					me._nodeimage_dronem_4.ggParameter.sy = 0.5;
					me._nodeimage_dronem_4.style[domTransform]=parameterToTransform(me._nodeimage_dronem_4.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_dronem_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_dronem_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_dronem_4.style.visibility=(Number(me._nodeimage_dronem_4.style.opacity)>0||!me._nodeimage_dronem_4.style.opacity)?'inherit':'hidden';
					me._nodeimage_dronem_4.ggVisible=true;
				}
				else {
					me._nodeimage_dronem_4.style.visibility="hidden";
					me._nodeimage_dronem_4.ggVisible=false;
				}
			}
		}
		me._nodeimage_dronem_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_dronem_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nodeimage_dronem_4.style.opacity == 0.0) { me._nodeimage_dronem_4.style.visibility="hidden"; } }, 505);
					me._nodeimage_dronem_4.style.opacity=0;
				}
				else {
					me._nodeimage_dronem_4.style.visibility=me._nodeimage_dronem_4.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_4.style.opacity=1;
				}
			}
		}
		me._nodeimage_dronem_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_m.appendChild(me._nodeimage_dronem_4);
		el=me._nodeimage_dronem_2=document.createElement('div');
		el.ggId="NodeImage_DroneM_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_dronem_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_m'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._nodeimage_dronem_2.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_2.ggParameter.sx = 0.8;
					me._nodeimage_dronem_2.ggParameter.sy = 0.8;
					me._nodeimage_dronem_2.style[domTransform]=parameterToTransform(me._nodeimage_dronem_2.ggParameter);
				}
				else {
					me._nodeimage_dronem_2.ggParameter.sx = 0.5;
					me._nodeimage_dronem_2.ggParameter.sy = 0.5;
					me._nodeimage_dronem_2.style[domTransform]=parameterToTransform(me._nodeimage_dronem_2.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_m.appendChild(me._nodeimage_dronem_2);
		el=me._ht_image_dorne=document.createElement('div');
		els=me._ht_image_dorne__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iRWJlbmVfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ni4zLDQ0My44Yy0yMC4xLDkuNS0xNDAsMTIxLjUtMTUzLjYsMTQ1LjhjLTE0LjEsMjUuMy03LjksNTAsMCw2Ny4zYzEwLjEsMjIuMSw2NS43LDQ4LjMsMTI4LjQsNDYuNiYjeGQ7JiN4YTsmI3g5O2MxMC4yLTAuMywxNjkuMSwxMC4zLDE5Mi44LDAuMWMyOC4yLTEyLjEsMTA0LjYtNjkuMiwxMTAtNjYuNVM4OTgsNjA3LDg5OCw2MDdsMTUuNCw3MC43bDU3LDQzLjFsLTM2LjktMTQyLjJMOTkwLDM5OC4zJiN4ZDsm'+
			'I3hhOyYjeDk7Yy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4ybC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMmI3hkOyYjeGE7JiN4OTt2LTQ5LjFsMTMtNi42bDMzMy44LTguNkw3NDQuNiwzMTlsLTMxNi40LDE5LjhjMCwwLTcuMS0xMy0zNC45LTEzLjFjLTIzLjEtMC4xLTMwLjIsNy4xLTMwLjIsNy4xTDEwNC43LDIwNi45JiN4ZDsmI3hhOyYjeDk7YzAsMC03MC41LDE0LjUtOTQuNiwyNC4xYy04LjQsMy40LDMzNy4zLDExMy4yLDMzNy4zLDExMy4ycy0wLjUsMTIsMi4yLD'+
			'Eycy0yMzYuOSw2NC41LTIzNi45LDY0LjVzNjguNywxMC40LDg2LjMsMTAuNCYjeGQ7JiN4YTsmI3g5O3MxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLjhsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0y'+
			'MTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40Ii8+Cjwvc3ZnPgo=';
		me._ht_image_dorne__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_dorne__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iRWJlbmVfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ni4zLDQ0My44Yy0yMC4xLDkuNS0xNDAsMTIxLjUtMTUzLjYsMTQ1LjhjLTE0LjEsMjUuMy03LjksNTAsMCw2Ny4zYzEwLjEsMjIuMSw2NS43LDQ4LjMsMTI4LjQsNDYuNiYjeGQ7JiN4YTsmI3g5O2MxMC4yLTAuMywxNjkuMSwxMC4zLDE5Mi44LDAuMWMyOC4yLTEyLjEsMTA0LjYtNjkuMiwxMTAtNjYuNVM4OTgsNjA3LDg5OCw2MDdsMTUuNCw3MC43bDU3LDQzLjFsLTM2LjktMTQyLjJMOTkwLDM5OC4zJiN4ZDsm'+
			'I3hhOyYjeDk7Yy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4ybC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMmI3hkOyYjeGE7JiN4OTt2LTQ5LjFsMTMtNi42bDMzMy44LTguNkw3NDQuNiwzMTlsLTMxNi40LDE5LjhjMCwwLTcuMS0xMy0zNC45LTEzLjFjLTIzLjEtMC4xLTMwLjIsNy4xLTMwLjIsNy4xTDEwNC43LDIwNi45JiN4ZDsmI3hhOyYjeDk7YzAsMC03MC41LDE0LjUtOTQuNiwyNC4xYy04LjQsMy40LDMzNy4zLDExMy4yLDMzNy4zLDExMy4ycy0wLjUsMTIsMi4yLD'+
			'Eycy0yMzYuOSw2NC41LTIzNi45LDY0LjVzNjguNywxMC40LDg2LjMsMTAuNCYjeGQ7JiN4YTsmI3g5O3MxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLjhsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0y'+
			'MTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40Ii8+Cjwvc3ZnPgo=';
		me._ht_image_dorne__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_dorne";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_dorne.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_dorne.onmouseover=function (e) {
			me._ht_image_dorne__img.style.visibility='hidden';
			me._ht_image_dorne__imgo.style.visibility='inherit';
		}
		me._ht_image_dorne.onmouseout=function (e) {
			me._ht_image_dorne__img.style.visibility='inherit';
			me._ht_image_dorne__imgo.style.visibility='hidden';
		}
		me._ht_image_dorne.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_m.appendChild(me._ht_image_dorne);
		el=me._nodeimage_dronem_1=document.createElement('div');
		els=me._nodeimage_dronem_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_l_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage_DroneM_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_dronem_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_dronem_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_m'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_dronem_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_dronem_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_dronem_1.ggParameter.sx = 3;
					me._nodeimage_dronem_1.ggParameter.sy = 3;
					me._nodeimage_dronem_1.style[domTransform]=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
				else {
					me._nodeimage_dronem_1.ggParameter.sx = 0;
					me._nodeimage_dronem_1.ggParameter.sy = 0;
					me._nodeimage_dronem_1.style[domTransform]=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['drone_m'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_dronem_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_dronem_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_dronem_1.ggParameter.a = 360;
					me._nodeimage_dronem_1.style[domTransform]=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
				else {
					me._nodeimage_dronem_1.ggParameter.a = -360;
					me._nodeimage_dronem_1.style[domTransform]=parameterToTransform(me._nodeimage_dronem_1.ggParameter);
				}
			}
		}
		me._nodeimage_dronem_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['drone_m'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_dronem_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_dronem_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_dronem_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_dronem_1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_dronem_1.style.visibility=me._nodeimage_dronem_1.ggVisible?'inherit':'hidden';
					me._nodeimage_dronem_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_dronem_1.style.opacity == 0.0) { me._nodeimage_dronem_1.style.visibility="hidden"; } }, 405);
					me._nodeimage_dronem_1.style.opacity=0;
				}
			}
		}
		me._nodeimage_dronem_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_m.appendChild(me._nodeimage_dronem_1);
		me.__div = me._drone_m;
	};
	function SkinHotspotClass_drone_s(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._drone_s=document.createElement('div');
		el.ggId="Drone S";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._drone_s.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._drone_s.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._drone_s.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._drone_s.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['drone_s']=true;
			me._nodeimage_drones_2.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_angle();
			me._nodeimage_drones_1.logicBlock_alpha();
			me._nodeimage_drones_1.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._drone_s.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['drone_s']=false;
			me._nodeimage_drones_2.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_angle();
			me._nodeimage_drones_1.logicBlock_alpha();
			me._nodeimage_drones_1.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._drone_s.ontouchend=function (e) {
			me.elementMouseOver['drone_s']=false;
			me._nodeimage_drones_2.logicBlock_scaling();
			me._nodeimage_drones_1.logicBlock_angle();
			me._nodeimage_drones_1.logicBlock_alpha();
			me._nodeimage_drones_1.logicBlock_scaling();
		}
		me._drone_s.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodeimage_drones_5=document.createElement('div');
		el.ggId="NodeImage_DroneS_5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_drones_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_5.ggParameter.sx = 0.8;
					me._nodeimage_drones_5.ggParameter.sy = 0.8;
					me._nodeimage_drones_5.style[domTransform]=parameterToTransform(me._nodeimage_drones_5.ggParameter);
				}
				else {
					me._nodeimage_drones_5.ggParameter.sx = 1;
					me._nodeimage_drones_5.ggParameter.sy = 1;
					me._nodeimage_drones_5.style[domTransform]=parameterToTransform(me._nodeimage_drones_5.ggParameter);
				}
			}
		}
		me._nodeimage_drones_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_drones_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_drones_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_drones_5.style.visibility=(Number(me._nodeimage_drones_5.style.opacity)>0||!me._nodeimage_drones_5.style.opacity)?'inherit':'hidden';
					me._nodeimage_drones_5.ggVisible=true;
				}
				else {
					me._nodeimage_drones_5.style.visibility="hidden";
					me._nodeimage_drones_5.ggVisible=false;
				}
			}
		}
		me._nodeimage_drones_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_5.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_5.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_drones_5.style.visibility=me._nodeimage_drones_5.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_5.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._nodeimage_drones_5.style.opacity == 0.0) { me._nodeimage_drones_5.style.visibility="hidden"; } }, 505);
					me._nodeimage_drones_5.style.opacity=0;
				}
			}
		}
		me._nodeimage_drones_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_s.appendChild(me._nodeimage_drones_5);
		el=me._nodeimage_drones_4=document.createElement('div');
		el.ggId="NodeImage_DroneS_4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_4.ggParameter.sx = 0.8;
					me._nodeimage_drones_4.ggParameter.sy = 0.8;
					me._nodeimage_drones_4.style[domTransform]=parameterToTransform(me._nodeimage_drones_4.ggParameter);
				}
				else {
					me._nodeimage_drones_4.ggParameter.sx = 0.5;
					me._nodeimage_drones_4.ggParameter.sy = 0.5;
					me._nodeimage_drones_4.style[domTransform]=parameterToTransform(me._nodeimage_drones_4.ggParameter);
				}
			}
		}
		me._nodeimage_drones_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodeimage_drones_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodeimage_drones_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateVisible == 0) {
					me._nodeimage_drones_4.style.visibility=(Number(me._nodeimage_drones_4.style.opacity)>0||!me._nodeimage_drones_4.style.opacity)?'inherit':'hidden';
					me._nodeimage_drones_4.ggVisible=true;
				}
				else {
					me._nodeimage_drones_4.style.visibility="hidden";
					me._nodeimage_drones_4.ggVisible=false;
				}
			}
		}
		me._nodeimage_drones_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_4.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._nodeimage_drones_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._nodeimage_drones_4.style.opacity == 0.0) { me._nodeimage_drones_4.style.visibility="hidden"; } }, 505);
					me._nodeimage_drones_4.style.opacity=0;
				}
				else {
					me._nodeimage_drones_4.style.visibility=me._nodeimage_drones_4.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_4.style.opacity=1;
				}
			}
		}
		me._nodeimage_drones_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_s.appendChild(me._nodeimage_drones_4);
		el=me._nodeimage_drones_2=document.createElement('div');
		el.ggId="NodeImage_DroneS_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodeimage_drones_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_s'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._nodeimage_drones_2.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_2.ggParameter.sx = 0.8;
					me._nodeimage_drones_2.ggParameter.sy = 0.8;
					me._nodeimage_drones_2.style[domTransform]=parameterToTransform(me._nodeimage_drones_2.ggParameter);
				}
				else {
					me._nodeimage_drones_2.ggParameter.sx = 0.5;
					me._nodeimage_drones_2.ggParameter.sy = 0.5;
					me._nodeimage_drones_2.style[domTransform]=parameterToTransform(me._nodeimage_drones_2.ggParameter);
				}
			}
		}
		me._nodeimage_drones_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_s.appendChild(me._nodeimage_drones_2);
		el=me._ht_image_dorne_2=document.createElement('div');
		els=me._ht_image_dorne_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iRWJlbmVfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ni4zLDQ0My44Yy0yMC4xLDkuNS0xNDAsMTIxLjUtMTUzLjYsMTQ1LjhjLTE0LjEsMjUuMy03LjksNTAsMCw2Ny4zYzEwLjEsMjIuMSw2NS43LDQ4LjMsMTI4LjQsNDYuNiYjeGQ7JiN4YTsmI3g5O2MxMC4yLTAuMywxNjkuMSwxMC4zLDE5Mi44LDAuMWMyOC4yLTEyLjEsMTA0LjYtNjkuMiwxMTAtNjYuNVM4OTgsNjA3LDg5OCw2MDdsMTUuNCw3MC43bDU3LDQzLjFsLTM2LjktMTQyLjJMOTkwLDM5OC4zJiN4ZDsm'+
			'I3hhOyYjeDk7Yy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4ybC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMmI3hkOyYjeGE7JiN4OTt2LTQ5LjFsMTMtNi42bDMzMy44LTguNkw3NDQuNiwzMTlsLTMxNi40LDE5LjhjMCwwLTcuMS0xMy0zNC45LTEzLjFjLTIzLjEtMC4xLTMwLjIsNy4xLTMwLjIsNy4xTDEwNC43LDIwNi45JiN4ZDsmI3hhOyYjeDk7YzAsMC03MC41LDE0LjUtOTQuNiwyNC4xYy04LjQsMy40LDMzNy4zLDExMy4yLDMzNy4zLDExMy4ycy0wLjUsMTIsMi4yLD'+
			'Eycy0yMzYuOSw2NC41LTIzNi45LDY0LjVzNjguNywxMC40LDg2LjMsMTAuNCYjeGQ7JiN4YTsmI3g5O3MxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLjhsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0y'+
			'MTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40Ii8+Cjwvc3ZnPgo=';
		me._ht_image_dorne_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_dorne_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iRWJlbmVfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ni4zLDQ0My44Yy0yMC4xLDkuNS0xNDAsMTIxLjUtMTUzLjYsMTQ1LjhjLTE0LjEsMjUuMy03LjksNTAsMCw2Ny4zYzEwLjEsMjIuMSw2NS43LDQ4LjMsMTI4LjQsNDYuNiYjeGQ7JiN4YTsmI3g5O2MxMC4yLTAuMywxNjkuMSwxMC4zLDE5Mi44LDAuMWMyOC4yLTEyLjEsMTA0LjYtNjkuMiwxMTAtNjYuNVM4OTgsNjA3LDg5OCw2MDdsMTUuNCw3MC43bDU3LDQzLjFsLTM2LjktMTQyLjJMOTkwLDM5OC4zJiN4ZDsm'+
			'I3hhOyYjeDk7Yy00LjktNS4yLTQuOS01LjItMTEuOC0xOC45bC02NC44LDE2NC4ybC0zNTYuMS0yMi45YzAsMC0xMi4xLTMuNS0xNi4xLTEyLjFzLTkuNC02NS4yLTI2LjgtNzMuOGMtMTcuNS04LjYtMTA2LTE1LjMtMTA2LTE1LjMmI3hkOyYjeGE7JiN4OTt2LTQ5LjFsMTMtNi42bDMzMy44LTguNkw3NDQuNiwzMTlsLTMxNi40LDE5LjhjMCwwLTcuMS0xMy0zNC45LTEzLjFjLTIzLjEtMC4xLTMwLjIsNy4xLTMwLjIsNy4xTDEwNC43LDIwNi45JiN4ZDsmI3hhOyYjeDk7YzAsMC03MC41LDE0LjUtOTQuNiwyNC4xYy04LjQsMy40LDMzNy4zLDExMy4yLDMzNy4zLDExMy4ycy0wLjUsMTIsMi4yLD'+
			'Eycy0yMzYuOSw2NC41LTIzNi45LDY0LjVzNjguNywxMC40LDg2LjMsMTAuNCYjeGQ7JiN4YTsmI3g5O3MxMjUuMi01MCwxMjUuMi01MGwzNi4xLTEzLjhsMTUuNCw0LjN2NDkuMUMzNzUuNiw0MjAuNiwyODYuNCw0MzQuMywyNjYuMyw0NDMuOEwyNjYuMyw0NDMuOHoiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzEuOSw3NzIuOGwyMS42LDExLjZ2MTYuNGwtMjA2LjMsMS43bC01Mi4yLTUwaDI2LjJsMzguMiwyOS41aDQ4LjMgTTI1Ny43LDc4MS45IE0zNzUuMSw3ODEuOSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1OC40LDY2Ny4xIE00ODAuNyw3MzcuOGwzMC4zLDEyLjdWNzY0bC0y'+
			'MTUtMC4ybC02MC45LTU1aDI2LjJsMzguMiwzMC41aDQ4LjMgTTM1Ny44LDczOS4zaDExNy40Ii8+Cjwvc3ZnPgo=';
		me._ht_image_dorne_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_dorne_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_dorne_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_dorne_2.onmouseover=function (e) {
			me._ht_image_dorne_2__img.style.visibility='hidden';
			me._ht_image_dorne_2__imgo.style.visibility='inherit';
		}
		me._ht_image_dorne_2.onmouseout=function (e) {
			me._ht_image_dorne_2__img.style.visibility='inherit';
			me._ht_image_dorne_2__imgo.style.visibility='hidden';
		}
		me._ht_image_dorne_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_s.appendChild(me._ht_image_dorne_2);
		el=me._nodeimage_drones_1=document.createElement('div');
		els=me._nodeimage_drones_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_drones_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage_DroneS_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_drones_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_drones_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['drone_s'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_drones_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_drones_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_drones_1.ggParameter.sx = 3;
					me._nodeimage_drones_1.ggParameter.sy = 3;
					me._nodeimage_drones_1.style[domTransform]=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
				else {
					me._nodeimage_drones_1.ggParameter.sx = 0;
					me._nodeimage_drones_1.ggParameter.sy = 0;
					me._nodeimage_drones_1.style[domTransform]=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
			}
		}
		me._nodeimage_drones_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['drone_s'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_drones_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_drones_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_drones_1.ggParameter.a = 360;
					me._nodeimage_drones_1.style[domTransform]=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
				else {
					me._nodeimage_drones_1.ggParameter.a = -360;
					me._nodeimage_drones_1.style[domTransform]=parameterToTransform(me._nodeimage_drones_1.ggParameter);
				}
			}
		}
		me._nodeimage_drones_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['drone_s'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_drones_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_drones_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_drones_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_drones_1.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_drones_1.style.visibility=me._nodeimage_drones_1.ggVisible?'inherit':'hidden';
					me._nodeimage_drones_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_drones_1.style.opacity == 0.0) { me._nodeimage_drones_1.style.visibility="hidden"; } }, 405);
					me._nodeimage_drones_1.style.opacity=0;
				}
			}
		}
		me._nodeimage_drones_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._drone_s.appendChild(me._nodeimage_drones_1);
		me.__div = me._drone_s;
	};
	function SkinHotspotClass_extern_hotspot_l(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._extern_hotspot_l=document.createElement('div');
		el.ggId="Extern Hotspot L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._extern_hotspot_l.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._extern_hotspot_l.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_l.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_l.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['extern_hotspot_l']=true;
			me._extern_hs_image_i_l.logicBlock_bordercolor();
			me._extern_hs_image_i_l.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_l.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['extern_hotspot_l']=false;
			me._extern_hs_image_i_l.logicBlock_bordercolor();
			me._extern_hs_image_i_l.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_l.ontouchend=function (e) {
			me.elementMouseOver['extern_hotspot_l']=false;
			me._extern_hs_image_i_l.logicBlock_bordercolor();
			me._extern_hs_image_i_l.logicBlock_scaling();
		}
		me._extern_hotspot_l.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_hs_image_animated_2_l=document.createElement('div');
		el.ggId="Extern hs_image_animated_2_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._extern_hs_image_animated_2_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_2_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_2_l.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_2_l.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_2_l.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_2_l.ggParameter);
				}
				else {
					me._extern_hs_image_animated_2_l.ggParameter.sx = 1;
					me._extern_hs_image_animated_2_l.ggParameter.sy = 1;
					me._extern_hs_image_animated_2_l.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_2_l.ggParameter);
				}
			}
		}
		me._extern_hs_image_animated_2_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_2_l.style.visibility=(Number(me._extern_hs_image_animated_2_l.style.opacity)>0||!me._extern_hs_image_animated_2_l.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_2_l.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_2_l.style.visibility="hidden";
					me._extern_hs_image_animated_2_l.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_2_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_2_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_l.ggCurrentLogicStateAlpha == 0) {
					me._extern_hs_image_animated_2_l.style.visibility=me._extern_hs_image_animated_2_l.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_2_l.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._extern_hs_image_animated_2_l.style.opacity == 0.0) { me._extern_hs_image_animated_2_l.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_2_l.style.opacity=0;
				}
			}
		}
		me._extern_hs_image_animated_2_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_animated_2_l);
		el=me._extern_hs_image_animated_1_l=document.createElement('div');
		el.ggId="Extern hs_image_animated_1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_hs_image_animated_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_1_l.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_1_l.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_1_l.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_1_l.ggParameter);
				}
				else {
					me._extern_hs_image_animated_1_l.ggParameter.sx = 0.5;
					me._extern_hs_image_animated_1_l.ggParameter.sy = 0.5;
					me._extern_hs_image_animated_1_l.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_1_l.ggParameter);
				}
			}
		}
		me._extern_hs_image_animated_1_l.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_1_l.style.visibility=(Number(me._extern_hs_image_animated_1_l.style.opacity)>0||!me._extern_hs_image_animated_1_l.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_1_l.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_1_l.style.visibility="hidden";
					me._extern_hs_image_animated_1_l.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_1_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_l.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._extern_hs_image_animated_1_l.style.opacity == 0.0) { me._extern_hs_image_animated_1_l.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_1_l.style.opacity=0;
				}
				else {
					me._extern_hs_image_animated_1_l.style.visibility=me._extern_hs_image_animated_1_l.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_1_l.style.opacity=1;
				}
			}
		}
		me._extern_hs_image_animated_1_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_animated_1_l);
		el=me._extern_hs_image_i_l=document.createElement('div');
		el.ggId="Extern hs_image_i_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_hs_image_i_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_i_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['extern_hotspot_l'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_i_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_i_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_i_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_l.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_i_l.ggParameter.sx = 0.8;
					me._extern_hs_image_i_l.ggParameter.sy = 0.8;
					me._extern_hs_image_i_l.style[domTransform]=parameterToTransform(me._extern_hs_image_i_l.ggParameter);
				}
				else {
					me._extern_hs_image_i_l.ggParameter.sx = 0.5;
					me._extern_hs_image_i_l.ggParameter.sy = 0.5;
					me._extern_hs_image_i_l.style[domTransform]=parameterToTransform(me._extern_hs_image_i_l.ggParameter);
				}
			}
		}
		me._extern_hs_image_i_l.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['extern_hotspot_l'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._extern_hs_image_i_l.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_l.ggCurrentLogicStateBorderColor == 0) {
					me._extern_hs_image_i_l.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._extern_hs_image_i_l.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._extern_hs_image_i_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_l.appendChild(me._extern_hs_image_i_l);
		el=me._mousetarget_container=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="mousetarget_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mousetarget_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mousetarget_container.onmouseover=function (e) {
			me.elementMouseOver['mousetarget_container']=true;
			me._extern_nodeimage_1_l.logicBlock_scaling();
			me._extern_nodeimage_1_l.logicBlock_alpha();
			me._extern_nodeimage_1_l.logicBlock_angle();
		}
		me._mousetarget_container.onmouseout=function (e) {
			me.elementMouseOver['mousetarget_container']=false;
			me._extern_nodeimage_1_l.logicBlock_scaling();
			me._extern_nodeimage_1_l.logicBlock_alpha();
			me._extern_nodeimage_1_l.logicBlock_angle();
		}
		me._mousetarget_container.ontouchend=function (e) {
			me.elementMouseOver['mousetarget_container']=false;
			me._extern_nodeimage_1_l.logicBlock_scaling();
			me._extern_nodeimage_1_l.logicBlock_alpha();
			me._extern_nodeimage_1_l.logicBlock_angle();
		}
		me._mousetarget_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._extern_nodeimage_1_l=document.createElement('div');
		els=me._extern_nodeimage_1_l__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._extern_nodeimage_1_l.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Extern NodeImage 1_L";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_nodeimage_1_l.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_nodeimage_1_l.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mousetarget_container'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateScaling == 0) {
					me._extern_nodeimage_1_l.ggParameter.sx = 3;
					me._extern_nodeimage_1_l.ggParameter.sy = 3;
					me._extern_nodeimage_1_l.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
				else {
					me._extern_nodeimage_1_l.ggParameter.sx = 0;
					me._extern_nodeimage_1_l.ggParameter.sy = 0;
					me._extern_nodeimage_1_l.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_l.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['mousetarget_container'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._extern_nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateAngle == 0) {
					me._extern_nodeimage_1_l.ggParameter.a = 360;
					me._extern_nodeimage_1_l.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
				else {
					me._extern_nodeimage_1_l.ggParameter.a = -360;
					me._extern_nodeimage_1_l.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_l.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_l.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mousetarget_container'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_nodeimage_1_l.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_l.ggCurrentLogicStateAlpha == 0) {
					me._extern_nodeimage_1_l.style.visibility=me._extern_nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_l.style.opacity=1;
				}
				else {
					me._extern_nodeimage_1_l.style.visibility=me._extern_nodeimage_1_l.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_l.style.opacity=0.01;
				}
			}
		}
		me._extern_nodeimage_1_l.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._extern_nodeimage_1_l.clientWidth;
			var parentHeight = me._extern_nodeimage_1_l.clientHeight;
			var img = me._extern_nodeimage_1_l__img;
			var aspectRatioDiv = me._extern_nodeimage_1_l.clientWidth / me._extern_nodeimage_1_l.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._mousetarget_container.appendChild(me._extern_nodeimage_1_l);
		me._extern_hotspot_l.appendChild(me._mousetarget_container);
		me._extern_nodeimage_1_l.ggText="https:\/\/logos.360ty.cloud\/"+me.hotspot.title;
		me._extern_nodeimage_1_l.ggSubElement.style.width = '0px';
		me._extern_nodeimage_1_l.ggSubElement.style.height = '0px';
		me._extern_nodeimage_1_l.ggSubElement.src='';
		me._extern_nodeimage_1_l.ggSubElement.src=me._extern_nodeimage_1_l.ggText;
		me.__div = me._extern_hotspot_l;
	};
	function SkinHotspotClass_extern_hotspot_(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._extern_hotspot_=document.createElement('div');
		el.ggId="Extern Hotspot ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._extern_hotspot_.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._extern_hotspot_.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['extern_hotspot_']=true;
			me._extern_hs_image_i_s.logicBlock_bordercolor();
			me._extern_hs_image_i_s.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['extern_hotspot_']=false;
			me._extern_hs_image_i_s.logicBlock_bordercolor();
			me._extern_hs_image_i_s.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._extern_hotspot_.ontouchend=function (e) {
			me.elementMouseOver['extern_hotspot_']=false;
			me._extern_hs_image_i_s.logicBlock_bordercolor();
			me._extern_hs_image_i_s.logicBlock_scaling();
		}
		me._extern_hotspot_.ggUpdatePosition=function (useTransition) {
		}
		el=me._extern_hs_image_animated_2_s=document.createElement('div');
		el.ggId="Extern hs_image_animated_2_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._extern_hs_image_animated_2_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_2_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_2_s.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_2_s.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_2_s.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_2_s.ggParameter);
				}
				else {
					me._extern_hs_image_animated_2_s.ggParameter.sx = 1;
					me._extern_hs_image_animated_2_s.ggParameter.sy = 1;
					me._extern_hs_image_animated_2_s.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_2_s.ggParameter);
				}
			}
		}
		me._extern_hs_image_animated_2_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_2_s.style.visibility=(Number(me._extern_hs_image_animated_2_s.style.opacity)>0||!me._extern_hs_image_animated_2_s.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_2_s.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_2_s.style.visibility="hidden";
					me._extern_hs_image_animated_2_s.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_2_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_2_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_2_s.ggCurrentLogicStateAlpha == 0) {
					me._extern_hs_image_animated_2_s.style.visibility=me._extern_hs_image_animated_2_s.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_2_s.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._extern_hs_image_animated_2_s.style.opacity == 0.0) { me._extern_hs_image_animated_2_s.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_2_s.style.opacity=0;
				}
			}
		}
		me._extern_hs_image_animated_2_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_animated_2_s);
		el=me._extern_hs_image_animated_1_s=document.createElement('div');
		el.ggId="Extern hs_image_animated_1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_hs_image_animated_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_animated_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_animated_1_s.ggParameter.sx = 0.8;
					me._extern_hs_image_animated_1_s.ggParameter.sy = 0.8;
					me._extern_hs_image_animated_1_s.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_1_s.ggParameter);
				}
				else {
					me._extern_hs_image_animated_1_s.ggParameter.sx = 0.5;
					me._extern_hs_image_animated_1_s.ggParameter.sy = 0.5;
					me._extern_hs_image_animated_1_s.style[domTransform]=parameterToTransform(me._extern_hs_image_animated_1_s.ggParameter);
				}
			}
		}
		me._extern_hs_image_animated_1_s.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extern_hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateVisible == 0) {
					me._extern_hs_image_animated_1_s.style.visibility=(Number(me._extern_hs_image_animated_1_s.style.opacity)>0||!me._extern_hs_image_animated_1_s.style.opacity)?'inherit':'hidden';
					me._extern_hs_image_animated_1_s.ggVisible=true;
				}
				else {
					me._extern_hs_image_animated_1_s.style.visibility="hidden";
					me._extern_hs_image_animated_1_s.ggVisible=false;
				}
			}
		}
		me._extern_hs_image_animated_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_hs_image_animated_1_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._extern_hs_image_animated_1_s.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._extern_hs_image_animated_1_s.style.opacity == 0.0) { me._extern_hs_image_animated_1_s.style.visibility="hidden"; } }, 505);
					me._extern_hs_image_animated_1_s.style.opacity=0;
				}
				else {
					me._extern_hs_image_animated_1_s.style.visibility=me._extern_hs_image_animated_1_s.ggVisible?'inherit':'hidden';
					me._extern_hs_image_animated_1_s.style.opacity=1;
				}
			}
		}
		me._extern_hs_image_animated_1_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_animated_1_s);
		el=me._extern_hs_image_i_s=document.createElement('div');
		el.ggId="Extern hs_image_i_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_hs_image_i_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_hs_image_i_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['extern_hotspot_'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_hs_image_i_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_hs_image_i_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_hs_image_i_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_s.ggCurrentLogicStateScaling == 0) {
					me._extern_hs_image_i_s.ggParameter.sx = 0.8;
					me._extern_hs_image_i_s.ggParameter.sy = 0.8;
					me._extern_hs_image_i_s.style[domTransform]=parameterToTransform(me._extern_hs_image_i_s.ggParameter);
				}
				else {
					me._extern_hs_image_i_s.ggParameter.sx = 0.5;
					me._extern_hs_image_i_s.ggParameter.sy = 0.5;
					me._extern_hs_image_i_s.style[domTransform]=parameterToTransform(me._extern_hs_image_i_s.ggParameter);
				}
			}
		}
		me._extern_hs_image_i_s.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['extern_hotspot_'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._extern_hs_image_i_s.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._extern_hs_image_i_s.ggCurrentLogicStateBorderColor == 0) {
					me._extern_hs_image_i_s.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._extern_hs_image_i_s.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._extern_hs_image_i_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._extern_hotspot_.appendChild(me._extern_hs_image_i_s);
		el=me._mousetarget_container_s=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="mousetarget_container_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mousetarget_container_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._mousetarget_container_s.onmouseover=function (e) {
			me.elementMouseOver['mousetarget_container_s']=true;
			me._extern_nodeimage_1_s.logicBlock_scaling();
			me._extern_nodeimage_1_s.logicBlock_alpha();
			me._extern_nodeimage_1_s.logicBlock_angle();
		}
		me._mousetarget_container_s.onmouseout=function (e) {
			me.elementMouseOver['mousetarget_container_s']=false;
			me._extern_nodeimage_1_s.logicBlock_scaling();
			me._extern_nodeimage_1_s.logicBlock_alpha();
			me._extern_nodeimage_1_s.logicBlock_angle();
		}
		me._mousetarget_container_s.ontouchend=function (e) {
			me.elementMouseOver['mousetarget_container_s']=false;
			me._extern_nodeimage_1_s.logicBlock_scaling();
			me._extern_nodeimage_1_s.logicBlock_alpha();
			me._extern_nodeimage_1_s.logicBlock_angle();
		}
		me._mousetarget_container_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._extern_nodeimage_1_s=document.createElement('div');
		els=me._extern_nodeimage_1_s__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._extern_nodeimage_1_s.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Extern NodeImage 1_s";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._extern_nodeimage_1_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._extern_nodeimage_1_s.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._extern_nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateScaling == 0) {
					me._extern_nodeimage_1_s.ggParameter.sx = 3;
					me._extern_nodeimage_1_s.ggParameter.sy = 3;
					me._extern_nodeimage_1_s.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
				else {
					me._extern_nodeimage_1_s.ggParameter.sx = 0;
					me._extern_nodeimage_1_s.ggParameter.sy = 0;
					me._extern_nodeimage_1_s.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_s.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._extern_nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateAngle == 0) {
					me._extern_nodeimage_1_s.ggParameter.a = 360;
					me._extern_nodeimage_1_s.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
				else {
					me._extern_nodeimage_1_s.ggParameter.a = -360;
					me._extern_nodeimage_1_s.style[domTransform]=parameterToTransform(me._extern_nodeimage_1_s.ggParameter);
				}
			}
		}
		me._extern_nodeimage_1_s.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mousetarget_container_s'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._extern_nodeimage_1_s.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._extern_nodeimage_1_s.ggCurrentLogicStateAlpha == 0) {
					me._extern_nodeimage_1_s.style.visibility=me._extern_nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_s.style.opacity=1;
				}
				else {
					me._extern_nodeimage_1_s.style.visibility=me._extern_nodeimage_1_s.ggVisible?'inherit':'hidden';
					me._extern_nodeimage_1_s.style.opacity=0.01;
				}
			}
		}
		me._extern_nodeimage_1_s.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._extern_nodeimage_1_s.clientWidth;
			var parentHeight = me._extern_nodeimage_1_s.clientHeight;
			var img = me._extern_nodeimage_1_s__img;
			var aspectRatioDiv = me._extern_nodeimage_1_s.clientWidth / me._extern_nodeimage_1_s.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = parentHeight;
			img.style.width=parentWidth + 'px';
			img.style.height=parentHeight + 'px';
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._mousetarget_container_s.appendChild(me._extern_nodeimage_1_s);
		me._extern_hotspot_.appendChild(me._mousetarget_container_s);
		me._extern_nodeimage_1_s.ggText="https:\/\/logos.360ty.cloud\/"+me.hotspot.title;
		me._extern_nodeimage_1_s.ggSubElement.style.width = '0px';
		me._extern_nodeimage_1_s.ggSubElement.style.height = '0px';
		me._extern_nodeimage_1_s.ggSubElement.src='';
		me._extern_nodeimage_1_s.ggSubElement.src=me._extern_nodeimage_1_s.ggText;
		me.__div = me._extern_hotspot_;
	};
	function SkinHotspotClass_buttonrezeption(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._buttonrezeption=document.createElement('div');
		el.ggId="ButtonRezeption";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttonrezeption.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._buttonrezeption.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._buttonrezeption.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._buttonrezeption.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._buttonrezeption.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._buttonrezeption.ggUpdatePosition=function (useTransition) {
		}
		el=me._buttonrezeption0=document.createElement('div');
		els=me._buttonrezeption0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Button-Rezeption";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.70002;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 82px;';
		hs+='height: 82px;';
		hs+='background: #bfa056;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: 300;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._buttonrezeption0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._buttonrezeption0.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._buttonrezeption0.style[domTransition]='none';
			} else {
				me._buttonrezeption0.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._buttonrezeption0.style.opacity='1';
			me._buttonrezeption0.style.visibility=me._buttonrezeption0.ggVisible?'inherit':'hidden';
		}
		me._buttonrezeption0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._buttonrezeption0__text)
					return;
				}
			}
			if (player.transitionsDisabled) {
				me._buttonrezeption0.style[domTransition]='none';
			} else {
				me._buttonrezeption0.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._buttonrezeption0.style.opacity='0.7';
			me._buttonrezeption0.style.visibility=me._buttonrezeption0.ggVisible?'inherit':'hidden';
		}
		me._buttonrezeption0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._buttonrezeption.appendChild(me._buttonrezeption0);
		me.__div = me._buttonrezeption;
	};
	function SkinHotspotClass_button(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._button=document.createElement('div');
		el.ggId="Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._button.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._button.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._button.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._button.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		el=me._kategorien_bestimmen=document.createElement('div');
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 100;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._kategorien_bestimmen.ggUpdating == true) return;
			me._kategorien_bestimmen.ggUpdating = true;
			var el=me._kategorien_bestimmen;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._kategorien_bestimmen.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._kategorien_bestimmen.ggHeight) + 'px';
				parameter.left=(column * me._kategorien_bestimmen.ggWidth) + 'px';
				parameter.width=me._kategorien_bestimmen.ggWidth + 'px';
				parameter.height=me._kategorien_bestimmen.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_kategorien_bestimmen_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._kategorien_bestimmen.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._kategorien_bestimmen.parentNode.classList.contains('ggskin_subelement') && me._kategorien_bestimmen.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._kategorien_bestimmen.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"dsaHotel",title:"Das Hotel"},
			{tag:"Doppelzimmer",title:"Doppelzimmer"},
			{tag:"Suite",title:"Suiten"},
			];
		el.ggId="Kategorien bestimmen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kategorien_bestimmen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kategorien_bestimmen.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._kategorien_bestimmen.childNodes.length; i++) {
				var child=me._kategorien_bestimmen.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._kategorien_bestimmen.ggUpdatePosition=function (useTransition) {
				me._kategorien_bestimmen.ggUpdate();
		}
		me._kategorien_bestimmen.ggNodeChange=function () {
			me._kategorien_bestimmen.ggUpdateConditionNodeChange();
		}
		me._button.appendChild(me._kategorien_bestimmen);
		me.__div = me._button;
	};
	function SkinHotspotClass_infopoint(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._infopoint=document.createElement('div');
		el.ggId="Infopoint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infopoint.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._infopoint.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._infopoint.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._infopoint.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._infopoint.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._infopoint.ggUpdatePosition=function (useTransition) {
		}
		el=me._informationsicon=document.createElement('div');
		el.ggId="Informationsicon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 296px;';
		hs+='position : absolute;';
		hs+='top : 216px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationsicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._informationsicon.onmouseover=function (e) {
			me.elementMouseOver['informationsicon']=true;
			me._tt_information.logicBlock_visible();
			me._tt_information.logicBlock_alpha();
			me._svg_1.logicBlock_angle();
			me._svg_1.logicBlock_scaling();
		}
		me._informationsicon.onmouseout=function (e) {
			me.elementMouseOver['informationsicon']=false;
			me._tt_information.logicBlock_visible();
			me._tt_information.logicBlock_alpha();
			me._svg_1.logicBlock_angle();
			me._svg_1.logicBlock_scaling();
		}
		me._informationsicon.ontouchend=function (e) {
			me.elementMouseOver['informationsicon']=false;
			me._tt_information.logicBlock_visible();
			me._tt_information.logicBlock_alpha();
			me._svg_1.logicBlock_angle();
			me._svg_1.logicBlock_scaling();
		}
		me._informationsicon.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=-346;
		el.ggDy=-186;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -50;
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=-346;
					me._tt_information.ggDy=-186;
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['informationsicon'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_information.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_information.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_information.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._tt_information.ggCurrentLogicStateAlpha == 0) {
					me._tt_information.style.visibility=me._tt_information.ggVisible?'inherit':'hidden';
					me._tt_information.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_information.style.opacity == 0.0) { me._tt_information.style.visibility="hidden"; } }, 505);
					me._tt_information.style.opacity=0;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._informationsicon.appendChild(me._tt_information);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADGUlEQVRYhc2ZP08UQRjGn90LUf4IUlwCV2ACH0ErK1sNCVTIB7DR8AU0nMEWjEhlorUCFgY7pdFWIwmBSgrLOxK7a6AAfhY7l5vdm+Vm9g7wSSbZ7M7zvE9mdmfeeTdSQQBTkmYk3ZFUMW3cPK5Lqpn2S9JWFEV/isYKMVUGXgD7hGPfcMsXYWwQqAKNAsayaBitAZ/YkYe5GUlv1Jq+LE7VmtK6uTeu1pSXcnh1SY+jKPrsY9RlLAKeA2c5o7AOPASGz9EYNn3Wc0b/DKgWMdcPfHQIHgHLwGgBzVFgBTh26G4C/SFiLnNfgYlQYw7tCaPVZtJXoOogvwLy3qUiJkvAqiPOYifiDO3v3IJn0BHgiWkjnpyFTKwzko/S2XkQqGUIq56BhoADi3cADH'+
			'lyX2di1nAtQY6p/eI7rcCcY7rmPLkl2t/JxWynMull4IiADwKYdhicDuBPkP66G9g7DskWZGPZV9zwS8C2xd/2HX1LYyXjYcl+aO+tDYqtcxFw17SOO5SDP5qZxb3mg6mM8/VQ8V4B2Mh4mYyVpEw2tq7CXE7sWQEfLMcnnLO3XjRI9u4Ty8/7WEnW0UQ9iqJGQfF7wKFp94pomNiH1q2KSC+wP4oIG4PfLZ1vXej8tHR+x0rnefU8ogduWtfBq0COh0rchdClIFbacV7WfJmwPdRiJal6ExVdPWwPbQbHr3qZkTRm3arFSs6tTZQk3b9UV2k8UPqQtRNLyp6qZi/PTxuysZOdpUfJwq6lsVuA70wWmsvMJ6vvDUlPQwP0AM9M7CZanugyYTUahUcQuEVOwhpLUhRFfyWtWJzrkt4RlnSe5lx3MleS9FbSNev2svGU'+
			'6lj40GT4axZvLYDnd2gynbs5dvYBj0zr8+T4Hzstkuvgvho43Z1ilBwjB50O7pbApoP8f5Q+jEh/jsljktNX0eLRS3pRPLJEq+SX3zaAeTqX3+ZN37zy27nT2qsC5qHcBcwxXVQBM2NyAFjMGYVQNIyWVwk41GgZWAL2ChjbM9ygInpwBcAyO6kk+7it1m+IZrJZs9qOuvgN8Q+B9Uvh1MSshwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-346;
		el.ggDy=-226;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 2.5;
					me._svg_1.ggParameter.sy = 2.5;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['informationsicon'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_1.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_1.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_1.ggCurrentLogicStateAngle == 0) {
					me._svg_1.ggParameter.a = -360;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
				else {
					me._svg_1.ggParameter.a = 0;
					me._svg_1.style[domTransform]=parameterToTransform(me._svg_1.ggParameter);
				}
			}
		}
		me._svg_1.onclick=function (e) {
			me._info_title.ggText=me.hotspot.title;
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText=me.hotspot.description;
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._informationsicon.appendChild(me._svg_1);
		me._infopoint.appendChild(me._informationsicon);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='a:link { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:active { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:visited { color: #FFFFFF !important; text-decoration: none; font-weight: bold } a:hover { color: #FFFFFF !important; text-decoration: underline; font-weight: bold }';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4PSIwcHgiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSIgaWQ9IkxheWVyXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4PSIwcHgiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me._infopoint.appendChild(me._information);
		me.__div = me._infopoint;
	};
	function SkinHotspotClass_link(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._link=document.createElement('div');
		el.ggId="Link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -215px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._link.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._link.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._link.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['link']=true;
			me._link_info.logicBlock_visible();
			me._link_info.logicBlock_alpha();
			me._svg_link.logicBlock_angle();
			me._svg_link.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._link.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['link']=false;
			me._link_info.logicBlock_visible();
			me._link_info.logicBlock_alpha();
			me._svg_link.logicBlock_angle();
			me._svg_link.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._link.ontouchend=function (e) {
			me.elementMouseOver['link']=false;
			me._link_info.logicBlock_visible();
			me._link_info.logicBlock_alpha();
			me._svg_link.logicBlock_angle();
			me._svg_link.logicBlock_scaling();
		}
		me._link.ggUpdatePosition=function (useTransition) {
		}
		el=me._link_info=document.createElement('div');
		els=me._link_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Link_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._link_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._link_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._link_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._link_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._link_info.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -50;
					me._link_info.ggUpdatePosition(true);
				}
				else {
					me._link_info.ggDx=0;
					me._link_info.ggDy=0;
					me._link_info.ggUpdatePosition(true);
				}
			}
		}
		me._link_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['link'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._link_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._link_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._link_info.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStateVisible == 0) {
					me._link_info.style.visibility=(Number(me._link_info.style.opacity)>0||!me._link_info.style.opacity)?'inherit':'hidden';
					me._link_info.ggVisible=true;
				}
				else {
					me._link_info.style.visibility="hidden";
					me._link_info.ggVisible=false;
				}
			}
		}
		me._link_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._link_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._link_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._link_info.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._link_info.ggCurrentLogicStateAlpha == 0) {
					me._link_info.style.visibility=me._link_info.ggVisible?'inherit':'hidden';
					me._link_info.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._link_info.style.opacity == 0.0) { me._link_info.style.visibility="hidden"; } }, 505);
					me._link_info.style.opacity=0;
				}
			}
		}
		me._link_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._link.appendChild(me._link_info);
		el=me._svg_link=document.createElement('div');
		els=me._svg_link__img=document.createElement('img');
		els.className='ggskin ggskin_svg_link';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADGUlEQVRYhc2ZP08UQRjGn90LUf4IUlwCV2ACH0ErK1sNCVTIB7DR8AU0nMEWjEhlorUCFgY7pdFWIwmBSgrLOxK7a6AAfhY7l5vdm+Vm9g7wSSbZ7M7zvE9mdmfeeTdSQQBTkmYk3ZFUMW3cPK5Lqpn2S9JWFEV/isYKMVUGXgD7hGPfcMsXYWwQqAKNAsayaBitAZ/YkYe5GUlv1Jq+LE7VmtK6uTeu1pSXcnh1SY+jKPrsY9RlLAKeA2c5o7AOPASGz9EYNn3Wc0b/DKgWMdcPfHQIHgHLwGgBzVFgBTh26G4C/SFiLnNfgYlQYw7tCaPVZtJXoOogvwLy3qUiJkvAqiPOYifiDO3v3IJn0BHgiWkjnpyFTKwzko/S2XkQqGUIq56BhoADi3cADH'+
			'lyX2di1nAtQY6p/eI7rcCcY7rmPLkl2t/JxWynMull4IiADwKYdhicDuBPkP66G9g7DskWZGPZV9zwS8C2xd/2HX1LYyXjYcl+aO+tDYqtcxFw17SOO5SDP5qZxb3mg6mM8/VQ8V4B2Mh4mYyVpEw2tq7CXE7sWQEfLMcnnLO3XjRI9u4Ty8/7WEnW0UQ9iqJGQfF7wKFp94pomNiH1q2KSC+wP4oIG4PfLZ1vXej8tHR+x0rnefU8ogduWtfBq0COh0rchdClIFbacV7WfJmwPdRiJal6ExVdPWwPbQbHr3qZkTRm3arFSs6tTZQk3b9UV2k8UPqQtRNLyp6qZi/PTxuysZOdpUfJwq6lsVuA70wWmsvMJ6vvDUlPQwP0AM9M7CZanugyYTUahUcQuEVOwhpLUhRFfyWtWJzrkt4RlnSe5lx3MleS9FbSNev2svGU'+
			'6lj40GT4axZvLYDnd2gynbs5dvYBj0zr8+T4Hzstkuvgvho43Z1ilBwjB50O7pbApoP8f5Q+jEh/jsljktNX0eLRS3pRPLJEq+SX3zaAeTqX3+ZN37zy27nT2qsC5qHcBcwxXVQBM2NyAFjMGYVQNIyWVwk41GgZWAL2ChjbM9ygInpwBcAyO6kk+7it1m+IZrJZs9qOuvgN8Q+B9Uvh1MSshwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg Link";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_link.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_link.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_link.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_link.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateScaling == 0) {
					me._svg_link.ggParameter.sx = 2.5;
					me._svg_link.ggParameter.sy = 2.5;
					me._svg_link.style[domTransform]=parameterToTransform(me._svg_link.ggParameter);
				}
				else {
					me._svg_link.ggParameter.sx = 1;
					me._svg_link.ggParameter.sy = 1;
					me._svg_link.style[domTransform]=parameterToTransform(me._svg_link.ggParameter);
				}
			}
		}
		me._svg_link.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['link'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_link.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_link.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_link.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateAngle == 0) {
					me._svg_link.ggParameter.a = -360;
					me._svg_link.style[domTransform]=parameterToTransform(me._svg_link.ggParameter);
				}
				else {
					me._svg_link.ggParameter.a = 0;
					me._svg_link.style[domTransform]=parameterToTransform(me._svg_link.ggParameter);
				}
			}
		}
		me._svg_link.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_link.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_link.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_link.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_link.ggCurrentLogicStateVisible == 0) {
					me._svg_link.style.visibility="hidden";
					me._svg_link.ggVisible=false;
				}
				else {
					me._svg_link.style.visibility=(Number(me._svg_link.style.opacity)>0||!me._svg_link.style.opacity)?'inherit':'hidden';
					me._svg_link.ggVisible=true;
				}
			}
		}
		me._svg_link.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
		}
		me._svg_link.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._link.appendChild(me._svg_link);
		me.__div = me._link;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website_1', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style[domTransition]='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage__img.src = '';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url.appendChild(me._ht_url_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_hotspot_m(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_m=document.createElement('div');
		el.ggId="Hotspot M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot hotspot";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_m.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_m.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_m.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot_m']=true;
			me._hs_image_i_1_m.logicBlock_bordercolor();
			me._hs_image_i_1_m.logicBlock_scaling();
			me._nodeimage_1_m.logicBlock_angle();
			me._nodeimage_1_m.logicBlock_alpha();
			me._nodeimage_1_m.logicBlock_scaling();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_m.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot_m']=false;
			me._hs_image_i_1_m.logicBlock_bordercolor();
			me._hs_image_i_1_m.logicBlock_scaling();
			me._nodeimage_1_m.logicBlock_angle();
			me._nodeimage_1_m.logicBlock_alpha();
			me._nodeimage_1_m.logicBlock_scaling();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_m.ontouchend=function (e) {
			me.elementMouseOver['hotspot_m']=false;
			me._hs_image_i_1_m.logicBlock_bordercolor();
			me._hs_image_i_1_m.logicBlock_scaling();
			me._nodeimage_1_m.logicBlock_angle();
			me._nodeimage_1_m.logicBlock_alpha();
			me._nodeimage_1_m.logicBlock_scaling();
		}
		me._hotspot_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_image_animated_2_m=document.createElement('div');
		el.ggId="hs_image_animated_2_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle HS_Farbe hotspot-pulsate-big";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : rgba(174,139,87,0.196078);';
		hs+='border : 2px solid #ae8b57;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_image_animated_2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_2_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_2_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_2_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_2_m.ggParameter.sx = 0.8;
					me._hs_image_animated_2_m.ggParameter.sy = 0.8;
					me._hs_image_animated_2_m.style[domTransform]=parameterToTransform(me._hs_image_animated_2_m.ggParameter);
				}
				else {
					me._hs_image_animated_2_m.ggParameter.sx = 1;
					me._hs_image_animated_2_m.ggParameter.sy = 1;
					me._hs_image_animated_2_m.style[domTransform]=parameterToTransform(me._hs_image_animated_2_m.ggParameter);
				}
			}
		}
		me._hs_image_animated_2_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_2_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_2_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_2_m.style.visibility=(Number(me._hs_image_animated_2_m.style.opacity)>0||!me._hs_image_animated_2_m.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_2_m.ggVisible=true;
				}
				else {
					me._hs_image_animated_2_m.style.visibility="hidden";
					me._hs_image_animated_2_m.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_2_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_2_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_2_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_2_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_2_m.ggCurrentLogicStateAlpha == 0) {
					me._hs_image_animated_2_m.style.visibility=me._hs_image_animated_2_m.ggVisible?'inherit':'hidden';
					me._hs_image_animated_2_m.style.opacity=0.65;
				}
				else {
					setTimeout(function() { if (me._hs_image_animated_2_m.style.opacity == 0.0) { me._hs_image_animated_2_m.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_2_m.style.opacity=0;
				}
			}
		}
		me._hs_image_animated_2_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_m.appendChild(me._hs_image_animated_2_m);
		el=me._hs_image_animated_1_m=document.createElement('div');
		el.ggId="hs_image_animated_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle hotspot-pulsate-small";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_animated_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_animated_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_animated_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_animated_1_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_animated_1_m.ggParameter.sx = 0.8;
					me._hs_image_animated_1_m.ggParameter.sy = 0.8;
					me._hs_image_animated_1_m.style[domTransform]=parameterToTransform(me._hs_image_animated_1_m.ggParameter);
				}
				else {
					me._hs_image_animated_1_m.ggParameter.sx = 0.5;
					me._hs_image_animated_1_m.ggParameter.sy = 0.5;
					me._hs_image_animated_1_m.style[domTransform]=parameterToTransform(me._hs_image_animated_1_m.ggParameter);
				}
			}
		}
		me._hs_image_animated_1_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('blinken_starten') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_image_animated_1_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_image_animated_1_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateVisible == 0) {
					me._hs_image_animated_1_m.style.visibility=(Number(me._hs_image_animated_1_m.style.opacity)>0||!me._hs_image_animated_1_m.style.opacity)?'inherit':'hidden';
					me._hs_image_animated_1_m.ggVisible=true;
				}
				else {
					me._hs_image_animated_1_m.style.visibility="hidden";
					me._hs_image_animated_1_m.ggVisible=false;
				}
			}
		}
		me._hs_image_animated_1_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_image_animated_1_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_image_animated_1_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_image_animated_1_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hs_image_animated_1_m.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._hs_image_animated_1_m.style.opacity == 0.0) { me._hs_image_animated_1_m.style.visibility="hidden"; } }, 505);
					me._hs_image_animated_1_m.style.opacity=0;
				}
				else {
					me._hs_image_animated_1_m.style.visibility=me._hs_image_animated_1_m.ggVisible?'inherit':'hidden';
					me._hs_image_animated_1_m.style.opacity=1;
				}
			}
		}
		me._hs_image_animated_1_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_m.appendChild(me._hs_image_animated_1_m);
		el=me._hs_image_i_1_m=document.createElement('div');
		el.ggId="hs_image_i_1_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle hotspot-main";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 3px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._hs_image_i_1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_image_i_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_m'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_image_i_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_image_i_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_image_i_1_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_m.ggCurrentLogicStateScaling == 0) {
					me._hs_image_i_1_m.ggParameter.sx = 0.8;
					me._hs_image_i_1_m.ggParameter.sy = 0.8;
					me._hs_image_i_1_m.style[domTransform]=parameterToTransform(me._hs_image_i_1_m.ggParameter);
				}
				else {
					me._hs_image_i_1_m.ggParameter.sx = 0.5;
					me._hs_image_i_1_m.ggParameter.sy = 0.5;
					me._hs_image_i_1_m.style[domTransform]=parameterToTransform(me._hs_image_i_1_m.ggParameter);
				}
			}
		}
		me._hs_image_i_1_m.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['hotspot_m'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._hs_image_i_1_m.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._hs_image_i_1_m.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._hs_image_i_1_m.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, border-color 500ms ease 0ms';
				if (me._hs_image_i_1_m.ggCurrentLogicStateBorderColor == 0) {
					me._hs_image_i_1_m.style.borderColor="rgba(174,139,87,1)";
				}
				else {
					me._hs_image_i_1_m.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._hs_image_i_1_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_m.appendChild(me._hs_image_i_1_m);
		el=me._nodeimage_1_m=document.createElement('div');
		els=me._nodeimage_1_m__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_ht_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1_m";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-360,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._nodeimage_1_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1_m.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hotspot_m'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nodeimage_1_m.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nodeimage_1_m.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateScaling == 0) {
					me._nodeimage_1_m.ggParameter.sx = 3;
					me._nodeimage_1_m.ggParameter.sy = 3;
					me._nodeimage_1_m.style[domTransform]=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
				else {
					me._nodeimage_1_m.ggParameter.sx = 0;
					me._nodeimage_1_m.ggParameter.sy = 0;
					me._nodeimage_1_m.style[domTransform]=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
			}
		}
		me._nodeimage_1_m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['hotspot_m'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._nodeimage_1_m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._nodeimage_1_m.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateAngle == 0) {
					me._nodeimage_1_m.ggParameter.a = 360;
					me._nodeimage_1_m.style[domTransform]=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
				else {
					me._nodeimage_1_m.ggParameter.a = -360;
					me._nodeimage_1_m.style[domTransform]=parameterToTransform(me._nodeimage_1_m.ggParameter);
				}
			}
		}
		me._nodeimage_1_m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_m'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._nodeimage_1_m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._nodeimage_1_m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._nodeimage_1_m.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._nodeimage_1_m.ggCurrentLogicStateAlpha == 0) {
					me._nodeimage_1_m.style.visibility=me._nodeimage_1_m.ggVisible?'inherit':'hidden';
					me._nodeimage_1_m.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._nodeimage_1_m.style.opacity == 0.0) { me._nodeimage_1_m.style.visibility="hidden"; } }, 405);
					me._nodeimage_1_m.style.opacity=0;
				}
			}
		}
		me._nodeimage_1_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_m.appendChild(me._nodeimage_1_m);
		me.__div = me._hotspot_m;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Panel') {
			hotspot.skinid = 'Panel';
			hsinst = new SkinHotspotClass_panel(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_panel_sizechanged();;
			me.callChildLogicBlocksHotspot_panel_changenode();;
			me.callChildLogicBlocksHotspot_panel_configloaded();;
			me.callChildLogicBlocksHotspot_panel_mouseover();;
			me.callChildLogicBlocksHotspot_panel_mouseover();;
			me.callChildLogicBlocksHotspot_panel_hastouch();;
			me.callChildLogicBlocksHotspot_panel_varchanged_smallPanel();;
			me.callChildLogicBlocksHotspot_panel_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_panel_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Hotspot L') {
			hotspot.skinid = 'Hotspot L';
			hsinst = new SkinHotspotClass_hotspot_l(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_l_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_l_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_l_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_hotspot_l_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Hotspot S') {
			hotspot.skinid = 'Hotspot S';
			hsinst = new SkinHotspotClass_hotspot_s(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_s_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_s_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_s_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_hotspot_s_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Drone M') {
			hotspot.skinid = 'Drone M';
			hsinst = new SkinHotspotClass_drone_m(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_drone_m_changenode();;
			me.callChildLogicBlocksHotspot_drone_m_mouseover();;
			me.callChildLogicBlocksHotspot_drone_m_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_drone_m_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Drone S') {
			hotspot.skinid = 'Drone S';
			hsinst = new SkinHotspotClass_drone_s(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_drone_s_changenode();;
			me.callChildLogicBlocksHotspot_drone_s_mouseover();;
			me.callChildLogicBlocksHotspot_drone_s_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_drone_s_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Extern Hotspot L') {
			hotspot.skinid = 'Extern Hotspot L';
			hsinst = new SkinHotspotClass_extern_hotspot_l(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_extern_hotspot_l_changenode();;
			me.callChildLogicBlocksHotspot_extern_hotspot_l_mouseover();;
			me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='Extern Hotspot ') {
			hotspot.skinid = 'Extern Hotspot ';
			hsinst = new SkinHotspotClass_extern_hotspot_(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_extern_hotspot__changenode();;
			me.callChildLogicBlocksHotspot_extern_hotspot__mouseover();;
			me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_blinken_starten();;
		} else
		if (hotspot.skinid=='ButtonRezeption') {
			hotspot.skinid = 'ButtonRezeption';
			hsinst = new SkinHotspotClass_buttonrezeption(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Button') {
			hotspot.skinid = 'Button';
			hsinst = new SkinHotspotClass_button(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Infopoint') {
			hotspot.skinid = 'Infopoint';
			hsinst = new SkinHotspotClass_infopoint(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_infopoint_changenode();;
			me.callChildLogicBlocksHotspot_infopoint_configloaded();;
			me.callChildLogicBlocksHotspot_infopoint_mouseover();;
			me.callChildLogicBlocksHotspot_infopoint_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_infopoint_varchanged_vis_info_popup();;
		} else
		if (hotspot.skinid=='Link') {
			hotspot.skinid = 'Link';
			hsinst = new SkinHotspotClass_link(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_link_changenode();;
			me.callChildLogicBlocksHotspot_link_configloaded();;
			me.callChildLogicBlocksHotspot_link_mouseover();;
			me.callChildLogicBlocksHotspot_link_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'Hotspot M';
			hsinst = new SkinHotspotClass_hotspot_m(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_m_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_m_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_m_varchanged_ht_ani();;
			me.callChildLogicBlocksHotspot_hotspot_m_varchanged_blinken_starten();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Panel']) {
			var i;
			for(i = 0; i < hotspotTemplates['Panel'].length; i++) {
				hotspotTemplates['Panel'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot L'].length; i++) {
				hotspotTemplates['Hotspot L'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot S'].length; i++) {
				hotspotTemplates['Hotspot S'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['Drone M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone M'].length; i++) {
				hotspotTemplates['Drone M'][i] = null;
			}
		}
		if(hotspotTemplates['Drone S']) {
			var i;
			for(i = 0; i < hotspotTemplates['Drone S'].length; i++) {
				hotspotTemplates['Drone S'][i] = null;
			}
		}
		if(hotspotTemplates['Extern Hotspot L']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot L'].length; i++) {
				hotspotTemplates['Extern Hotspot L'][i] = null;
			}
		}
		if(hotspotTemplates['Extern Hotspot ']) {
			var i;
			for(i = 0; i < hotspotTemplates['Extern Hotspot '].length; i++) {
				hotspotTemplates['Extern Hotspot '][i] = null;
			}
		}
		if(hotspotTemplates['ButtonRezeption']) {
			var i;
			for(i = 0; i < hotspotTemplates['ButtonRezeption'].length; i++) {
				hotspotTemplates['ButtonRezeption'][i] = null;
			}
		}
		if(hotspotTemplates['Button']) {
			var i;
			for(i = 0; i < hotspotTemplates['Button'].length; i++) {
				hotspotTemplates['Button'][i] = null;
			}
		}
		if(hotspotTemplates['Infopoint']) {
			var i;
			for(i = 0; i < hotspotTemplates['Infopoint'].length; i++) {
				hotspotTemplates['Infopoint'][i] = null;
			}
		}
		if(hotspotTemplates['Link']) {
			var i;
			for(i = 0; i < hotspotTemplates['Link'].length; i++) {
				hotspotTemplates['Link'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot M']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot M'].length; i++) {
				hotspotTemplates['Hotspot M'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_kategorien_bestimmen_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 100px; height: 35px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._berschriften=document.createElement('div');
		els=me._berschriften__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\xdcberschriften";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 30px;';
		hs+='background: #bfa056;';
		hs+='background: rgba(191,160,86,0);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle;
		el.appendChild(els);
		me._berschriften.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._berschriften.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodecloner=document.createElement('div');
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 85;
		el.ggHeight = 85;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._nodecloner.ggUpdating == true) return;
			me._nodecloner.ggUpdating = true;
			var el=me._nodecloner;
			var curNumCols = 0;
			curNumCols = me._nodecloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (parentScope.ggTag) filter.push(parentScope.ggTag);
			filter=filter.concat(parentScope._kategorien_bestimmen.ggFilter);
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._nodecloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._nodecloner.ggHeight) + 'px';
				parameter.left=(column * me._nodecloner.ggWidth) + 'px';
				parameter.width=me._nodecloner.ggWidth + 'px';
				parameter.height=me._nodecloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_nodecloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._nodecloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._nodecloner.parentNode.classList.contains('ggskin_subelement') && me._nodecloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._nodecloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="NodeCloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 85px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodecloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodecloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._nodecloner.childNodes.length; i++) {
				var child=me._nodecloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._nodecloner.ggUpdatePosition=function (useTransition) {
				me._nodecloner.ggUpdate();
		}
		me._nodecloner.ggNodeChange=function () {
			me._nodecloner.ggUpdateConditionNodeChange();
		}
		me._berschriften.appendChild(me._nodecloner);
		me.__div.appendChild(me._berschriften);
	};
	function SkinCloner_nodecloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 85px; height: 85px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._nodetext=document.createElement('div');
		els=me._nodetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="NodeText";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 82px;';
		hs+='height: 82px;';
		hs+='background: #bfa056;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: 300;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.description;
		el.appendChild(els);
		me._nodetext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._nodetext.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._nodetext.onmouseover=function (e) {
			me._nodetext.style[domTransition]='none';
			me._nodetext.style.opacity='1';
			me._nodetext.style.visibility=me._nodetext.ggVisible?'inherit':'hidden';
		}
		me._nodetext.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._nodetext__text)
					return;
				}
			}
			me._nodetext.style[domTransition]='none';
			me._nodetext.style.opacity='0.7';
			me._nodetext.style.visibility=me._nodetext.ggVisible?'inherit':'hidden';
		}
		me._nodetext.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._nodetext);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Montserrat, Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_panel_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_panel_changenode();me.callChildLogicBlocksHotspot_hotspot_l_changenode();me.callChildLogicBlocksHotspot_hotspot_s_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_drone_m_changenode();me.callChildLogicBlocksHotspot_drone_s_changenode();me.callChildLogicBlocksHotspot_extern_hotspot_l_changenode();me.callChildLogicBlocksHotspot_extern_hotspot__changenode();me.callChildLogicBlocksHotspot_infopoint_changenode();me.callChildLogicBlocksHotspot_link_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_hotspot_m_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_panel_configloaded();me.callChildLogicBlocksHotspot_infopoint_configloaded();me.callChildLogicBlocksHotspot_link_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_panel_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_panel_mouseover();me.callChildLogicBlocksHotspot_hotspot_l_mouseover();me.callChildLogicBlocksHotspot_hotspot_s_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_drone_m_mouseover();me.callChildLogicBlocksHotspot_drone_s_mouseover();me.callChildLogicBlocksHotspot_extern_hotspot_l_mouseover();me.callChildLogicBlocksHotspot_extern_hotspot__mouseover();me.callChildLogicBlocksHotspot_infopoint_mouseover();me.callChildLogicBlocksHotspot_link_mouseover();me.callChildLogicBlocksHotspot_hotspot_m_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_panel_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_infopoint_activehotspotchanged();me.callChildLogicBlocksHotspot_link_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged(); });
	player.addListener('varchanged_smallPanel', function(args) { me.callChildLogicBlocksHotspot_panel_varchanged_smallPanel(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_panel_varchanged_ht_ani();me.callChildLogicBlocksHotspot_hotspot_l_varchanged_ht_ani();me.callChildLogicBlocksHotspot_hotspot_s_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();me.callChildLogicBlocksHotspot_drone_m_varchanged_ht_ani();me.callChildLogicBlocksHotspot_drone_s_varchanged_ht_ani();me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_ht_ani();me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_ht_ani();me.callChildLogicBlocksHotspot_hotspot_m_varchanged_ht_ani(); });
	player.addListener('varchanged_blinken_starten', function(args) { me.callChildLogicBlocksHotspot_panel_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_hotspot_l_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_hotspot_s_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_ht_node_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_drone_m_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_drone_s_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_extern_hotspot_l_varchanged_blinken_starten();me.callChildLogicBlocksHotspot_extern_hotspot__varchanged_blinken_starten();me.callChildLogicBlocksHotspot_hotspot_m_varchanged_blinken_starten(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_infopoint_varchanged_vis_info_popup(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};