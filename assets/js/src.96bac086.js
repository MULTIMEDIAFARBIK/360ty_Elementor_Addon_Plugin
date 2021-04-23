// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"yLm4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Slides3;

function Slides3(parentID) {
  this.parentID = parentID;
  this.Class_pano = null;
  this.pano_instance = null;
  this.elements = {};
  this.slides = [];
  this.startSlideIndex = 0;
  this.pano_container_id = "pano_container";

  this.init = () => {
    let hasStartParam = this.parseHash();
    this.setParentContainer(this.parentID);
    this.createSlidesContainer();
    this.createBackgroundContainer(this.elements.slidesContainer);
    this.setListeners();
    this.afterSlidesCreation();
    this.addSlideBackButton(this.elements.backgroundContainer, "zurück");
    this.createInstanceContainer(this.elements.backgroundContainer, this.pano_container_id);
    let startSlide = this.getParentSlide(this.startSlideIndex);
    this.createPanoInstance(this.Class_pano, this.elements.instanceContainer.id, startSlide.pano_params);
    this.pano_instance.init();
    this.initSlide(this.elements.slidesContainer);

    if (this.homeslide) {
      this.initHomeslide();

      if (!hasStartParam) {
        this.goToHomeslide();
      } else {
        this.setActiveSlide(this.startSlideIndex);
      }
    } else {
      this.setActiveSlide(this.startSlideIndex);
    }
  }; //userInput


  this.setParentContainer = parentID => {
    if (document.getElementById(parentID)) {
      this.elements.parentContainer = document.getElementById(parentID);
    } else {
      console.error("Element with ID " + parentID + " doesnt exist");
    }
  };

  this.addPanoClass = Class_pano => {
    if (typeof Class_pano === "function") {
      this.Class_pano = Class_pano;
    } else {
      console.error("given pano class isnt a class");
    }
  };

  this.addToSlideButtonContainer = (slideIndex, element) => {
    element.classList.add("slide-button");
    let parent = this.getParentSlide(slideIndex);
    parent.children.buttonContainer.append(element);
  };

  this.addToHomeslideTextContainer = element => {
    this.homeslide.children.textContainer.append(element);
  };

  this.setStartSlide = slideIndex => {
    this.startSlideIndex = slideIndex;
  };

  this.createHomeSlide = pano_params => {
    let homeslideContainer = document.createElement("div");
    homeslideContainer.classList.add("inactive-homeslide");
    this.homeslide = {
      id: "home",
      div: homeslideContainer,
      pano_params: pano_params || {},
      children: {
        textContainer: this.addHomeslideTextContainer(),
        scrollIndicator: this.addHomeslideScrollIndicator(),
        navbar: this.addHomeslideNavbar(),
        aboutContainer: this.createHomeslideAboutContainer()
      }
    };
  };

  this.createSlide = pano_params => {
    let slide = document.createElement("div");
    slide.classList.add("active-slide");
    this.slides.push({
      id: this.getRandomID(8),
      subslides: [],
      slide_div: slide,
      pano_params: pano_params || {
        basepath: "https://lechwinter.360ty.cloud/"
      },
      children: {
        buttonContainer: this.addSlideButtonContainer(),
        slideNav: this.addSlideNav(),
        textContainer: this.createSlideTextContainer()
      }
    });
    return this.slides.length - 1;
  };

  this.createSubSlide = (parentSlideIndex, pano_params) => {
    let subslide = document.createElement("div");
    subslide.classList.add("active-slide");
    let parentSlide = this.slides[parentSlideIndex];

    if (!parentSlide || parentSlide.isSubslide) {
      console.error(`slide with index ${parentSlideIndex} doesnt exist or is a subslide itself`);
    } else {
      parentSlide.subslides.push({
        id: this.getRandomID(8),
        isSubslide: true,
        slide_div: subslide,
        pano_params: pano_params || {
          basepath: "https://lechwinter.360ty.cloud/"
        },
        children: {
          buttonContainer: this.addSlideButtonContainer(),
          slideNav: this.addSlideNav(),
          textContainer: this.createSlideTextContainer()
        }
      });
      return {
        parent: parentSlideIndex,
        sub: parentSlide.subslides.length
      };
    }
  };

  this.addHomeslideHeadline = text => {
    let headlineContainer = document.createElement("div");
    headlineContainer.classList.add("homeslide-header");
    let headline = document.createElement("h1");
    headline.innerText = text;
    headlineContainer.append(headline);
    this.addToHomeslideTextContainer(headlineContainer);
  };

  this.addHomeslideParagraph = text => {
    let paragraphContainer = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerText = text;
    let lineBreak = document.createElement("br");
    paragraphContainer.append(paragraph);
    paragraphContainer.append(lineBreak);
    this.addToHomeslideTextContainer(paragraphContainer);
  };

  this.addHomeslideStartSlidesButton = text => {
    let button = document.createElement("button");
    button.innerText = text || "start";
    button.classList.add("homeslide-button-start");
    button.classList.add("slide-button");

    button.onclick = () => {
      this.setActiveSlideIndex({
        parent: 0,
        sub: 0
      });
    };

    this.addToHomeslideTextContainer(button);
  };

  this.addSlideFacebookButton = (slideIndex, link) => {
    let button = document.createElement("button");
    button.innerText = "share on Facebook";

    button.onclick = function () {
      window.open(link, '_blank');
    };

    button.classList.add("slide-button-facebook");
    button.classList.add("slide-button");
    this.addToSlideButtonContainer(slideIndex, button);
  };

  this.addHomeslideBackgroundImage = url => {
    this.homeslide.div.style.backgroundImage = `url(${url})`;
  };

  this.addSlideHeadline = (slideIndex, text) => {
    let parent = this.getParentSlide(slideIndex);
    let headline = document.createElement("h2");
    headline.innerText = text;
    parent.children.textContainer.append(headline);
  };

  this.addSlideDescription = (slideIndex, text) => {
    let parent = this.getParentSlide(slideIndex);
    let description = document.createElement("p");
    description.innerText = text;
    parent.children.textContainer.append(description);
  };

  this.addSlideFotograf = (slideIndex, text) => {
    let parent = this.getParentSlide(slideIndex);
    let fotoParagraph = document.createElement("p");
    fotoParagraph.classList.add("slide-icon-paragraph");
    let icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-camera");
    let fotograf_text = document.createElement("p");
    fotograf_text.classList.add("slide-fotograf");
    fotograf_text.innerText = text;
    fotoParagraph.append(icon);
    fotoParagraph.append(fotograf_text);
    parent.children.textContainer.append(fotoParagraph);
  };

  this.addSlideLocation = (slideIndex, location) => {
    let parent = this.getParentSlide(slideIndex);
    let locationParagraf = document.createElement("p");
    locationParagraf.classList.add("slide-icon-paragraph");
    let icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-location-arrow");
    let location_text = document.createElement("p");
    location_text.classList.add("slide-location");
    location_text.innerText = location;
    locationParagraf.append(icon);
    locationParagraf.append(location_text);
    parent.children.textContainer.append(locationParagraf);
  };

  this.addHomeslideBackgroundVideo = url => {
    let videoBackgroundContainer = document.createElement("div");
    videoBackgroundContainer.classList.add("video-background");
    let videoForegroundContainer = document.createElement("div");
    videoForegroundContainer.classList.add("video-foreground");
    videoBackgroundContainer.append(videoForegroundContainer);
    let videoElement;

    if (url.includes("http")) {
      videoElement = document.createElement("video");
      videoElement.classList.add("background-video-video");
      videoElement.src = url;
      videoElement.autoplay = true;
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.playsInline = true;
    } else {
      videoElement = document.createElement("iframe");
      videoElement.classList.add("background-video-iframe");
      videoElement.src = `https://iframe.videodelivery.net/${url}?muted=true&loop=true&autoplay=true&controls=false`;
      videoElement.allow = "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;";
    }

    videoForegroundContainer.append(videoElement);
    this.homeslide.div.append(videoBackgroundContainer);
  };

  this.addHomeslideLogo = url => {
    let logo = document.createElement("img");
    logo.classList.add("customer-logo");
    logo.src = url;
    this.homeslide.div.append(logo);
  };

  this.addHomeslideSocialButton = (social, link) => {
    let li = document.createElement("li");
    li.classList.add("social-menu");
    let button = document.createElement("a");
    button.classList.add("social");
    button.target = "_blank";
    button.href = link;
    let icon = document.createElement("i");
    icon.classList.add("fab");
    icon.classList.add("fa-" + social);
    let iconAlt = document.createElement("span");
    iconAlt.innerText = social;
    icon.append(iconAlt);
    button.append(icon);
    li.append(button);
    this.homeslide.children.navbar.querySelector(".menu-link").querySelector("ul").append(li);
  }; //userInput end


  this.getParentSlide = slideIndex => {
    if (typeof slideIndex !== "number") {
      if (slideIndex.sub === 0) {
        return this.slides[slideIndex.parent];
      } else {
        return this.slides[slideIndex.parent].subslides[slideIndex.sub - 1];
      }
    } else {
      return this.slides[slideIndex];
    }
  };

  this.parseHash = () => {
    let hash = window.location.hash;

    if (hash && hash.includes("Shot")) {
      let startNum = hash.substring(hash.indexOf("Shot") + 4);
      var parent = startNum.includes("-") ? parseInt(startNum.substring(0, startNum.indexOf("-"))) - 1 : parseInt(startNum) - 1;
      var sub = startNum.includes("-") ? parseInt(startNum.substring(startNum.indexOf("-") + 1)) - 1 : 0;
      this.setStartSlide({
        parent: parent,
        sub: sub || 0
      });
      return true;
    } else {
      return false;
    }
  };

  this.parseSearch = () => {
    let params = new URLSearchParams(document.location.search.substring(1));
  };

  this.checkStartSlideIndex = () => {
    if (this.startSlideIndex >= this.slides.length - 1) {
      this.startSlideIndex = 0;
      console.log("invalid startSlideIndex: " + this.startSlideIndex);
    }
  };

  this.createBackgroundContainer = parentElement => {
    let backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("background-container");
    parentElement.append(backgroundContainer);
    this.elements.backgroundContainer = backgroundContainer;
  };

  this.createInstanceContainer = (parentContainer, instanceContainerID) => {
    let container = document.createElement("div");
    container.classList.add("pano-container");
    container.id = instanceContainerID;
    parentContainer.append(container);
    this.elements.instanceContainer = container;
  };

  this.setTourPos = (params, oldBasepath) => {
    if (oldBasepath && oldBasepath !== params.basepath) {
      this.pano_instance.setBasePath(params.basepath);
      this.pano_instance.setStartNode(params.node || 1);
      this.pano_instance.setViewingParameter(params.fov || 70, params.tilt || 0, params.pan || 0);
      this.pano_instance.reload();
      this.pano_instance.pano.startAutorotate();
    } else {
      this.pano_instance.pano.openNext(`{node${params.node || 1}}`);

      if (params.fov) {
        this.pano_instance.pano.setFov(params.fov);
      }

      if (params.pan) {
        this.pano_instance.pano.setPan(params.pan);
      }

      if (params.tilt) {
        this.pano_instance.pano.setTilt(params.tilt);
      }
    }
  };

  this.createPanoInstance = (Class_pano, instance_container_id, start_params) => {
    start_params = !start_params ? {} : start_params;
    let instance = new Class_pano(instance_container_id, start_params.basepath);
    instance.setDimensions("100%", "100%");
    instance.setHorizontalAlignment("center");
    instance.setStartNode(start_params.node || 70);
    instance.setViewingParameter(start_params.fov || 70, start_params.tilt || 0, start_params.pan || 0);
    instance.setSingleImage(false);
    instance.setShareButtonVisibility(false);
    instance.setImpressumVisibility(true);
    instance.setDimensions_tablet("100%", "100%");
    instance.setHorizontalAlignment_tablet("center");
    instance.setSingleImage_tablet(false);
    instance.setShareButtonVisibility_tablet(false);
    instance.setImpressumVisibility_tablet(true);
    instance.setDimensions_mobile("100%", "100%");
    instance.setHorizontalAlignment_mobile("center");
    instance.setSingleImage_mobile(false);
    instance.setShareButtonVisibility_mobile(false);
    instance.setImpressumVisibility_mobile(false);
    this.pano_instance = instance;
  };

  this.createSlidesContainer = () => {
    let slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides");
    this.elements.parentContainer.append(slidesContainer);
    this.elements.slidesContainer = slidesContainer;
  };

  this.initSlide = parentElement => {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    parentElement.append(slide);
    this.elements.slide = slide;
  };

  this.getRandomID = length => {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    var str = '';

    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }

    return str;
  };

  this.createSubSlidePagination = parentSlideIndex => {
    let navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");
    let paginationContainer = document.createElement("div");
    paginationContainer.classList.add("subslide-pagination-container");
    let paginationOL = document.createElement("ol");

    for (let i = 0; i <= this.slides[parentSlideIndex].subslides.length; i++) {
      let li = document.createElement("li");

      li.onclick = () => {
        this.setActiveSlideIndex({
          parent: parentSlideIndex,
          sub: i
        });
      };

      paginationOL.append(li);
    }

    paginationContainer.append(paginationOL);
    navContainer.append(paginationContainer);
    this.slides[parentSlideIndex].children.subslide_pagination = navContainer;
    this.slides[parentSlideIndex].subslides.forEach(subslide => {
      subslide.children.subslide_pagination = navContainer;
    });
  };

  this.updatePagination = () => {
    this.updateActiveSubslidePaginationDot();
    this.updateActiveSlidePaginationDot();
  };

  this.updateActiveSubslidePaginationDot = () => {
    let parent = this.getParentSlide(this.activeSlideIndex);
    let LIs = parent.children.subslide_pagination.querySelector("ol").querySelectorAll("li");
    LIs.forEach((li, i) => {
      if (this.activeSlideIndex.sub === i) {
        if (!li.classList.contains("active-dot")) {
          li.classList.add("active-dot");
        }
      } else {
        if (li.classList.contains("active-dot")) {
          li.classList.remove("active-dot");
        }
      }
    });
    LIs[this.activeSlideIndex.sub].classList.add("active-dot");
  };

  this.createSlidePagination = slideIndex => {
    let navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");
    let paginationContainer = document.createElement("div");
    paginationContainer.classList.add("slide-pagination-container");
    let paginationOL = document.createElement("ol");
    this.slides.forEach((slide, i) => {
      let li = document.createElement("li");

      li.onclick = () => {
        this.setActiveSlideIndex({
          parent: i,
          sub: 0
        });
      };

      paginationOL.append(li);
    });
    paginationContainer.append(paginationOL);
    navContainer.append(paginationContainer);
    this.slides[slideIndex].children.slides_pagination = navContainer;
    this.slides[slideIndex].subslides.forEach(subslide => {
      subslide.children.slides_pagination = navContainer;
    });
  };

  this.updateActiveSlidePaginationDot = () => {
    let parent = this.getParentSlide(this.activeSlideIndex);
    let LIs = parent.children.slides_pagination.querySelector("ol").querySelectorAll("li");
    LIs[this.activeSlideIndex.parent].classList.add("active-dot");
  };

  this.afterSlidesCreation = () => {
    this.slides.forEach((slide, i) => {
      this.createSubSlidePagination(i);
      this.createSlidePagination(i);
    });
    this.checkStartSlideIndex();
  };

  this.addSlideNav = () => {
    let navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");
    let leftArrowContainer = document.createElement("div");
    leftArrowContainer.classList.add("nav-left");
    let leftArrow = document.createElement("img");
    leftArrow.src = "https://storage.googleapis.com/api.360ty.cloud/slides3/arrow.svg";
    leftArrowContainer.append(leftArrow);

    leftArrow.onclick = () => {
      let activeIndex = this.activeSlideIndex;
      let newIndex = {
        parent: activeIndex.parent,
        sub: 0
      };

      if (!activeIndex.sub || activeIndex.sub === 0) {
        newIndex.sub = this.slides[activeIndex.parent].subslides.length - 1;
      } else {
        newIndex.sub = activeIndex.sub - 1;
      }

      this.setActiveSlideIndex(newIndex);
    };

    let rightArrowContainer = document.createElement("div");
    rightArrowContainer.classList.add("nav-right");
    let rightArrow = document.createElement("img");
    rightArrow.src = "https://storage.googleapis.com/api.360ty.cloud/slides3/arrow.svg";
    rightArrowContainer.append(rightArrow);

    rightArrow.onclick = () => {
      let activeIndex = this.activeSlideIndex;
      let newIndex = {
        parent: activeIndex.parent,
        sub: 0
      };

      if (activeIndex.sub >= this.slides[activeIndex.parent].subslides.length) {
        newIndex.sub = 0;
      } else {
        newIndex.sub = activeIndex.sub + 1;
      }

      this.setActiveSlideIndex(newIndex);
    };

    navContainer.append(leftArrowContainer);
    navContainer.append(rightArrowContainer);
    return navContainer;
  };

  this.getHashIndexValue = () => {
    let hash = window.location.hash;

    if (hash && hash.includes("Shot")) {
      let startNum = hash.substring(hash.indexOf("Shot") + 4);
      var slide = startNum.includes("-") ? parseInt(startNum.substring(0, startNum.indexOf("-"))) - 1 : parseInt(startNum) - 1;
      var subslide = startNum.includes("-") ? parseInt(startNum.substring(startNum.indexOf("-") + 1)) - 1 : 0;
      return {
        parent: slide,
        sub: subslide
      };
    } else if (hash && hash.includes("Home")) {
      return "Home";
    } else {
      return {
        parent: 0,
        sub: 0
      };
    }
  };

  this.throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
        return;
      }

      lastCall = now;
      return fn(...args);
    };
  };

  this.setListeners = () => {
    this.setHashListener();
    this.setScrollListener();
    this.setSwipeListeners();
  };

  this.setSwipeListeners = () => {
    this.elements.slidesContainer.addEventListener("mousedown", () => {
      this.mousedown = true;
    });
    this.elements.slidesContainer.addEventListener("touchstart", e => {
      this.mousedown = true;
      this.touchstart = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    });
    this.elements.slidesContainer.addEventListener("mousemove", this.throttled(100, this.handleMousemove.bind(this)));
    this.elements.slidesContainer.addEventListener("touchmove", this.throttled(100, this.handleMousemove.bind(this)));
    this.elements.slidesContainer.addEventListener("mouseup", this.handleMouseUp);
    this.elements.slidesContainer.addEventListener("touchend", this.handleMouseUp);
  };

  this.handleMouseUp = e => {
    if (!this.elements.backgroundContainer.classList.contains("foreground-container") && this.swiping) {
      let absSlideValues = {
        x: Math.abs(this.swiping.movementX),
        y: Math.abs(this.swiping.movementY)
      };
      let xSwipeDirection = this.swiping.movementX < 0 ? "left" : "right";
      let ySwipeDirection = this.swiping.movementY < 0 ? "up" : "down";
      let swipeDirection;

      if (absSlideValues.x >= absSlideValues.y) {
        swipeDirection = xSwipeDirection;
      } else {
        swipeDirection = ySwipeDirection;
      }

      if (window.location.hash.includes("Home")) {
        if (swipeDirection === "up") {
          if (this.homeslide && this.homeslide.div) {
            this.homeslide.div.style.opacity = 0;
          }

          this.setActiveSlideIndex({
            parent: 0,
            sub: 0
          });
        }
      } else {
        switch (swipeDirection) {
          case "up":
            if (this.slides[this.activeSlideIndex.parent + 1]) {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent + 1,
                sub: 0
              });
            } else {
              this.setActiveSlideIndex({
                parent: 0,
                sub: 0
              });
            }

            break;

          case "down":
            if (this.activeSlideIndex.parent !== 0) {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent - 1,
                sub: 0
              });
            } else {
              this.setHomeslideHash();
            }

            break;

          case "left":
            if (this.slides[this.activeSlideIndex.parent].subslides[this.activeSlideIndex.sub]) {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent,
                sub: this.activeSlideIndex.sub + 1
              });
            } else {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent,
                sub: 0
              });
            }

            break;

          case "right":
            if (this.activeSlideIndex.sub !== 0) {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent,
                sub: this.activeSlideIndex.sub - 1
              });
            } else {
              this.setActiveSlideIndex({
                parent: this.activeSlideIndex.parent,
                sub: this.slides[this.activeSlideIndex.parent].subslides.length
              });
            }

            break;
        }
      }
    }

    this.swiping = false;
    this.mousedown = false;
  };

  this.handleMousemove = e => {
    e.preventDefault();

    if (!this.elements.backgroundContainer.classList.contains("foreground-container") && this.mousedown && !this.homeslide.children.aboutContainer.classList.contains("about-open")) {
      console.log(this.touchstart);

      if (this.touchstart) {
        this.handleTouchmove(e, this.touchstart);
      } else {
        if (e.movementX > 15 || e.movementX < -15 || e.movementY > 15 || e.movementY < -15) {
          this.swiping = {
            movementX: e.movementX,
            movementY: e.movementY
          };
        }
      }
    }
  };

  this.handleTouchmove = (e, touchstart) => {
    if (e.touches && e.touches.length !== 0) {
      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;
      var xDiff = xUp - touchstart.x;
      var yDiff = yUp - touchstart.y;
      this.swiping = {
        movementX: xDiff,
        movementY: yDiff
      };
      console.log(this.swiping);
    }
  };

  this.setScrollListener = () => {
    window.addEventListener("mousewheel", this.throttled(500, this.handleScroll.bind(this)));
  };

  this.handleScroll = e => {
    if (!this.elements.backgroundContainer.classList.contains("foreground-container") && !this.homeslide.children.aboutContainer.classList.contains("about-open")) {
      let currentHashVal = this.getHashIndexValue();
      let scrollDirection = e.wheelDeltaY >= 0 ? "up" : "down";
      console.log(scrollDirection);

      if (scrollDirection === "down") {
        if (currentHashVal !== "Home") {
          this.setActiveSlideIndex(this.slides.length > currentHashVal.parent + 1 ? {
            parent: parseInt(currentHashVal.parent + 1),
            sub: 0
          } : {
            parent: 0,
            sub: 0
          });
        } else {
          this.setActiveSlideIndex({
            parent: 0,
            sub: 0
          });
        }
      } else {
        if (currentHashVal.parent === 0) {
          this.setHomeslideHash();
        } else {
          if (currentHashVal !== "Home") {
            this.setActiveSlideIndex({
              parent: currentHashVal.parent - 1,
              sub: currentHashVal.sub
            });
          }
        }
      }
    }
  };

  this.setHashListener = () => {
    window.addEventListener("hashchange", () => {
      let val = this.getHashIndexValue();

      if (val === "Home") {
        window.getComputedStyle(this.homeslide.div).opacity;
        this.goToHomeslide();
      } else {
        if (this.homeslide && this.homeslide.children.aboutContainer.classList.contains("about-open")) {
          this.homeslide.children.aboutContainer.classList.replace("about-open", "about-closed");
        }

        this.setActiveSlide(val);
      }
    });
  };

  this.setActiveSlideIndex = newSlideIndex => {
    if (this.elements.slide.classList.contains("inactive-slide")) {
      this.elements.slide.classList.replace("inactive-slide", "slide");
    }

    if (this.homeslide && this.homeslide.div) {
      this.homeslide.div.style.opacity = 0;
    }

    setTimeout(() => {
      window.location.hash = `Shot${newSlideIndex.parent + 1}-${newSlideIndex.sub + 1 || 1}`;
    }, 250);
  };

  this.setActiveSlide = activeSlideIndex => {
    if (this.homeslide.div.classList.contains("active-homeslide")) {
      this.homeslide.div.classList.replace("active-homeslide", "inactive-homeslide");
    }

    let newslide = activeSlideIndex.sub && activeSlideIndex.sub !== 0 ? this.slides[activeSlideIndex.parent].subslides[activeSlideIndex.sub - 1] : this.slides[activeSlideIndex.parent];

    if (!this.activeSlideIndex) {
      this.activeSlideIndex = activeSlideIndex;
    }

    let oldslide = this.activeSlideIndex.sub && this.activeSlideIndex.sub !== 0 ? this.slides[this.activeSlideIndex.parent].subslides[this.activeSlideIndex.sub - 1] : this.slides[this.activeSlideIndex.parent];
    let slide_div = newslide.slide_div;

    if (!this.elements.activeSlide) {
      this.elements.slide.append(slide_div);
    } else {
      for (let child in oldslide.children) {
        oldslide.children[child].remove();
      }

      let oldParams = oldslide.pano_params;
      let oldBasepath = oldParams.basepath || "https://lechwinter.360ty.cloud/";
      let newParams = newslide.pano_params || {
        basepath: "https://lechwinter.360ty.cloud/"
      };
      this.setTourPos(newParams, oldBasepath);
      this.elements.activeSlide.remove();
    }

    for (let newchild in newslide.children) {
      slide_div.append(newslide.children[newchild]);
    }

    this.elements.activeSlide = slide_div;
    this.elements.activeSlide.style.opacity = 0;
    this.elements.slide.append(this.elements.activeSlide);
    window.getComputedStyle(this.elements.slide).opacity;
    this.elements.activeSlide.style.opacity = 1;
    this.activeSlideIndex = activeSlideIndex;

    if (newslide.children.slides_pagination || newslide.children.subslide_pagination) {
      this.updatePagination();
    }
  };

  this.initHomeslide = () => {
    for (let child in this.homeslide.children) {
      this.homeslide.div.append(this.homeslide.children[child]);
    }

    this.elements.slidesContainer.append(this.homeslide.div);
  };

  this.setHomeslideHash = () => {
    window.getComputedStyle(this.homeslide.div).opacity;
    this.elements.activeSlide.style.opacity = 0;
    setTimeout(() => {
      window.location.hash = "Home";
      this.homeslide.div.opacity = 1;
    }, 250);
  };

  this.goToHomeslide = () => {
    if (this.homeslide.div.classList.contains("inactive-homeslide")) {
      this.homeslide.div.classList.replace("inactive-homeslide", "active-homeslide");
    }

    window.getComputedStyle(this.homeslide.div).opacity;
    this.homeslide.div.style.opacity = 1;

    if (this.elements.slide.classList.contains("slide")) {
      this.elements.slide.classList.replace("slide", "inactive-slide");
    }
  };

  this.addSlideStartButton = buttonText => {
    let button = document.createElement("button");
    button.innerText = buttonText;

    button.onclick = function () {
      this.elements.slide.style.opacity = 0;
      this.elements.slide.style.pointerEvents = "none";
      setTimeout(() => {
        this.elements.backgroundContainer.classList.replace("background-container", "foreground-container");
      }, 500);
    }.bind(this);

    button.classList.add("slide-start-button");
    button.classList.add("slide-button");
    return button;
  };

  this.addSlideBackButton = (parentElement, buttonText) => {
    let button = document.createElement("button");
    button.innerText = buttonText;

    button.onclick = function () {
      parentElement.classList.replace("foreground-container", "background-container");
      this.elements.slide.style.pointerEvents = "all";
      this.elements.slide.style.opacity = 1;
    }.bind(this);

    button.classList.add("slide-back-button");
    button.classList.add("slide-button");
    parentElement.append(button);
  };

  this.addSlideButtonContainer = () => {
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("slide-button-container");
    return buttonContainer;
  };

  this.addHomeslideTextContainer = () => {
    let textContainer = document.createElement("div");
    textContainer.classList.add("homeslide-text-container");
    return textContainer;
  };

  this.addHomeslideScrollIndicator = () => {
    let scrollIndicator = document.createElement("a");
    scrollIndicator.classList.add("scroll-indicator");
    scrollIndicator.href = "#Shot1";
    scrollIndicator.innerHTML = `<span></span>
        scroll
        `;
    return scrollIndicator;
  };

  this.addHomeslideNavbar = () => {
    let navbar = document.createElement("ul");
    navbar.classList.add("homeslide-navbar");
    let menu = document.createElement("li");
    menu.classList.add("menu-link");
    let menuList = document.createElement("ul");
    menuList.append(this.createHomeslideNavButton("über uns", () => {
      this.homeslide.children.aboutContainer.classList.replace("about-closed", "about-open");
      setTimeout(() => {
        this.homeslide.children.aboutContainer.scrollTop = 0;
      }, 500);
    }));
    menuList.append(this.createHomeslideNavButton("partner", () => {
      this.homeslide.children.aboutContainer.classList.replace("about-closed", "about-open");
      setTimeout(() => {
        this.homeslide.children.aboutContainer.scrollTop = this.homeslide.children.aboutContainer.scrollHeight;
      }, 500);
    }));
    menu.append(menuList);
    navbar.append(menu);
    return navbar;
  };

  this.createHomeslideNavButton = (label, callback) => {
    let li = document.createElement("li");
    li.classList.add("open-info");
    let button = document.createElement("a");
    button.classList.add("open-info");
    button.innerText = label;
    button.onclick = callback;
    li.append(button);
    return li;
  };

  this.createSlideTextContainer = () => {
    let container = document.createElement("div");
    container.classList.add("slide-text-container");
    return container;
  };

  this.createHomeslideAboutContainer = () => {
    let container = document.createElement("div");
    container.classList.add("about-closed");
    let closeButton = document.createElement("button");
    closeButton.classList.add("close-content");

    closeButton.onclick = () => {
      container.classList.replace("about-open", "about-closed");
    };

    container.append(closeButton);
    return container;
  };

  this.addAboutUsHeadline = text => {
    let headline = document.createElement("h2");
    headline.innerText = text;
    this.homeslide.children.aboutContainer.append(headline);
  };

  this.addAboutUsSubHeadline = text => {
    let subheadline = document.createElement("small");
    subheadline.innerText = text;
    this.homeslide.children.aboutContainer.append(subheadline);
  };

  this.addAboutUsImage = src => {
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("about-image");
    let img = document.createElement("img");
    img.src = src;
    img.alt = "About us Image";
    imgContainer.append(img);
    this.homeslide.children.aboutContainer.append(imgContainer);
  };

  this.addAboutUsDescription = text => {
    let description = document.createElement("p");
    description.innerText = text;
    this.homeslide.children.aboutContainer.append(description);
  };

  this.addPartners = partners => {
    let partnersContainer = document.createElement("div");
    partnersContainer.classList.add("partners");
    let seperator = document.createElement("div");
    let seperatorSpan = document.createElement("span");
    seperator.classList.add("seperator");
    seperator.append(seperatorSpan);
    partnersContainer.append(seperator);
    let partnerHeadline = document.createElement("h2");
    partnerHeadline.innerText = "Partner";
    partnersContainer.append(partnerHeadline);
    partners.forEach(partner => {
      let a = document.createElement("a");
      a.href = partner.link;
      a.target = "_blank";
      let img = document.createElement("img");
      img.src = partner.imgURL;
      a.append(img);
      partnersContainer.append(a);
    });
    partnersContainer.append(seperator.cloneNode(true));
    this.homeslide.children.aboutContainer.append(partnersContainer);
  };
}
},{}],"tF8G":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Pano_360ty {
  constructor(parentContainerID, basepath, suffix) {
    _defineProperty(this, "getProductPanels", async projectID => {
      return new Promise(async function (resolve, reject) {
        try {
          let products = await fetch(`https://europe-west1-woo-products-360ty.cloudfunctions.net/getProducts?project=${projectID}`);
          resolve(products.json());
        } catch (err) {
          reject(err);
        }
      }.bind(this));
    });

    this.deviceType = function () {
      if (window.matchMedia("only screen and (max-width: 400px)").matches == true) {
        return "mobile";
      } else if (window.matchMedia("only screen and (max-width: 800px)").matches == true) {
        return "tablet";
      } else {
        return "desktop";
      }
    };

    this.name = function () {
      for (var name in window) if (window[name] == this) return name;
    };

    this.suffix = suffix !== "" ? suffix : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
    this.elementIDs = {
      parentContainer: parentContainerID,
      container: "tourbuilder_360ty_" + this.suffix,
      panoContainer: "pano_container_360ty_" + this.suffix,
      impressumContainer: "impressum_360ty_" + this.suffix,
      buttonContainer: "button_container_360ty_" + this.suffix,
      shareButton: "shareButton_360ty_" + this.suffix,
      FBshareButton: "FBshareButton_360ty_" + this.suffix,
      URLshareButton: "URLshareButton_360ty_" + this.suffix,
      slidesButton: "slidesButton_360ty_" + this.suffix,
      class_shareButtons: "shareButton_360ty_" + this.suffix,
      buttonContainer_value_setter: "buttonContainer_value_setter_360ty_" + this.suffix,
      targetValueSetter_button: "setTargetValue_360ty_" + this.suffix,
      class_valueSetter_button: "valueSetter_360ty_" + this.suffix
    };
    this.elements = {
      parentContainer: null,
      panoContainer: null,
      container: null,
      impressumContainer: null,
      impressum: null,
      buttonContainer: null,
      shareButton: null,
      URLshareButton: null,
      FBshareButton: null,
      buttonContainer_value_setter: null,
      targetValueSetter_button: null
    };
    this.tour_params = {
      base_Tour: basepath ? basepath : "",
      node: null,
      fov: null,
      tilt: null,
      pan: null,
      roll: null
    };
    this.movement_params = {
      keyframes: [],
      delay: 0,
      loop_amount: 1,
      movementAborted: false
    };
    this.addons_params = {
      singleImage: null,
      share_buttons: null,
      show_impressum: null
    };
    this.responsive_params = {
      tablet: {
        tour_dimensions: {
          width: null,
          height: null
        },
        singleImage: null,
        share_buttons: null,
        show_impressum: null,
        horizontal_alignment: null
      },
      mobile: {
        tour_dimensions: {
          width: null,
          height: null
        },
        singleImage: null,
        share_buttons: null,
        show_impressum: null,
        horizontal_alignment: null
      }
    };
    this.style_params = {
      tour_dimensions: {
        width: "100%",
        height: "16:9"
      },
      horizontal_alignment: null
    };
    this.skin_variables = [];
    this.hovered_node = null, this.externalHotspotListenerSet = false;
    this.pano = null;
    this.skin = null;
    this.controlsListener = {};
    this.wooProjectID = "";
    this.productPanels = [];

    this.getWebGLcontexts = function () {
      var contexts = [];
      var canvas = this.elements.panoContainer.querySelectorAll("canvas");

      for (let i = 0; i < canvas.length; i++) {
        contexts.push(canvas[i].getContext("webgl"));
      }

      return contexts;
    };

    this.pano_loaded = function () {
      if (this.pano != null) {
        return this.pano.isLoaded;
      } else {
        return false;
      }
    };
  }

  init() {
    if (!document.getElementById(this.elementIDs.container)) {
      let viewportMetaSet = false;
      document.head.querySelectorAll("meta").forEach(function (meta) {
        if (meta.name === "viewport") {
          viewportMetaSet = true;
        }
      }.bind(this));

      if (viewportMetaSet === false) {
        this.addMeta("viewport", "width=device-width, initial-scale=1");
      }

      this.includeStyle();
      var share_buttons;
      var show_impressum;
      var tour_width;
      var tour_height;
      var horAlign;

      switch (this.deviceType()) {
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

      let init_interval = setInterval(function () {
        if (document.getElementById(this.elementIDs.parentContainer)) {
          clearInterval(init_interval);
          this.declareElements();
          this.setup_pano();

          if (share_buttons == true) {
            this.setupButtons();
          }

          if (show_impressum == true) {
            this.createImpressum();
          }

          this.setViewerSize(tour_width, tour_height);

          if (horAlign) {
            this.horizontallyAlignImage(horAlign);
          }

          this.addListeners();
        }
      }.bind(this), 100);
    }
  } //user inputs


  setBasePath(url) {
    if (typeof url === "string") {
      if (!url.endsWith("/")) {
        url += "/";
      }

      if (url.startsWith("http://")) {
        url = url.substring(7);
        url = "https://" + url;
      }

      if (!url.startsWith("https://")) {
        url = "https://" + url;
      }

      this.tour_params.base_Tour = url;
    } else {
      console.log("basepath URL has to be a String in the following Format: 'https://*.360ty.cloud' or 'https://*.360ty.tour.world' ");
    }
  }

  setDimensions(width, height) {
    this.setWidth(width);
    this.setHeight(height);
  }

  setWidth(width) {
    this.style_params.tour_dimensions.width = width;
  }

  setHeight(height) {
    this.style_params.tour_dimensions.height = height;
  }

  setStartNode(nodeNr) {
    typeof nodeNr == "number" ? this.tour_params.node = nodeNr : console.log("start node value has to be a number");
  }

  setViewingParameter(fov, tilt, pan, roll) {
    this.setFov(fov);
    this.setTilt(tilt);
    this.setPan(pan);

    if (roll) {
      this.setRoll(roll);
    }
  }

  setFov(fov) {
    typeof fov == "number" ? this.tour_params.fov = fov : console.log("fov value has to be a number");
  }

  setTilt(tilt) {
    typeof tilt == "number" ? this.tour_params.tilt = tilt : console.log("tilt value has to be a number");
  }

  setPan(pan) {
    typeof pan == "number" ? this.tour_params.pan = pan : console.log("fov value has to be a number");
  }

  setRoll(roll) {
    typeof roll == "number" ? this.tour_params.roll = roll : console.log("roll value has to be a number");
  }

  setSingleImage(bool) {
    typeof bool == "boolean" ? this.addons_params.singleImage = bool : console.log("single image value has to be a boolean (true,false)");
  }

  setShareButtonVisibility(bool) {
    typeof bool == "boolean" ? this.addons_params.share_buttons = bool : console.log("sharebutton value has to be a boolean (true,false)");
  }

  setImpressumVisibility(bool) {
    typeof bool == "boolean" ? this.addons_params.show_impressum = bool : console.log("impressum value has to be a boolean (true,false)");
  }

  setHorizontalAlignment(value) {
    value === "left" || "center" || "right" ? this.style_params.horizontal_alignment = value : console.log("horizontal alignment value has to be either 'left', 'center' or 'right'");
  } //tablet parameter


  setDimensions_tablet(width, height) {
    this.setWidth_tablet(width);
    this.setHeight_tablet(height);
  }

  setWidth_tablet(width) {
    this.responsive_params.tablet.tour_dimensions.width = width;
  }

  setHeight_tablet(height) {
    this.responsive_params.tablet.tour_dimensions.height = height;
  }

  setSingleImage_tablet(bool) {
    typeof bool == "boolean" ? this.responsive_params.tablet.singleImage = bool : console.log("single image value has to be a boolean (true,false)");
  }

  setShareButtonVisibility_tablet(bool) {
    typeof bool == "boolean" ? this.responsive_params.tablet.share_buttons = bool : console.log("sharebutton value has to be a boolean (true,false)");
  }

  setImpressumVisibility_tablet(bool) {
    typeof bool == "boolean" ? this.responsive_params.tablet.show_impressum = bool : console.log("impressum value has to be a boolean (true,false)");
  }

  setHorizontalAlignment_tablet(value) {
    value === "left" || "center" || "right" ? this.responsive_params.tablet.horizontal_alignment = value : console.log("horizontal alignment value has to be either 'left', 'center' or 'right'");
  } //mobile parameter


  setDimensions_mobile(width, height) {
    this.setWidth_mobile(width);
    this.setHeight_mobile(height);
  }

  setWidth_mobile(width) {
    this.responsive_params.mobile.tour_dimensions.width = width;
  }

  setHeight_mobile(height) {
    this.responsive_params.mobile.tour_dimensions.height = height;
  }

  setSingleImage_mobile(bool) {
    typeof bool == "boolean" ? this.responsive_params.mobile.singleImage = bool : console.log("single image value has to be a boolean (true,false)");
  }

  setShareButtonVisibility_mobile(bool) {
    typeof bool == "boolean" ? this.responsive_params.mobile.share_buttons = bool : console.log("sharebutton value has to be a boolean (true,false)");
  }

  setImpressumVisibility_mobile(bool) {
    typeof bool == "boolean" ? this.responsive_params.mobile.show_impressum = bool : console.log("impressum value has to be a boolean (true,false)");
  }

  setHorizontalAlignment_mobile(value) {
    value === "left" || "center" || "right" ? this.responsive_params.mobile.horizontal_alignment = value : console.log("horizontal alignment value has to be either 'left', 'center' or 'right'");
  } //


  setSkinVariables(array_vars) {
    typeof array_vars === "object" ? typeof array_vars[0] === "object" ? array_vars.forEach(function (obj_var) {
      this.skin_variables.push(obj_var);
    }.bind(this)) : console.log("params in the array have to be objects [{varname: value},...]") : console.log("skin variable values have to be an array of objects [{varname: value},...]");
  }

  setMovementDelay(delay) {
    typeof delay === "number" ? this.movement_params.delay = delay : console.log("move delay has to be a number (in ms)");
  }

  setMovementLoopAmount(loop_amount) {
    typeof loop_amount === "number" ? this.movement_params.loop_amount = loop_amount : console.log("loop amount has to be a number");
  }

  addKeyframe(fov, tilt, pan, speed, lock_controls, node) {
    var keyframeParams = {
      fov: fov,
      tilt: tilt,
      pan: pan,
      speed: speed,
      locked_controls: lock_controls,
      node: node
    };
    let valid = this.checkKeyframeParams(keyframeParams);
    valid === true ? this.movement_params.keyframes.push(keyframeParams) : console.log("keyframe values not valid. -> (fov:number,tilt:number,pan:number,speed:number,locked_controls:'all'||'none'||'Mousewheel'||'Mouse'||'Keyboard'||'Keyboard+Mousewheel',[optional]node:number)");
  }

  reload() {
    this.clearwebglContext();
    this.elements.container.parentElement.removeChild(this.elements.container);
    this.elements.container = null;
    this.elements.panoContainer = null;

    if (this.elements.shareButton) {
      this.elements.shareButton.parentElement.removeChild(this.elements.shareButton);
      this.elements.shareButton = null;
    }

    if (this.elements.FBshareButton) {
      this.elements.FBshareButton.parentElement.removeChild(this.elements.FBshareButton);
      this.elements.FBshareButton = null;
    }

    if (this.elements.URLshareButton) {
      this.elements.URLshareButton.parentElement.removeChild(this.elements.URLshareButton);
      this.elements.URLshareButton = null;
    }

    if (this.elements.buttonContainer) {
      this.elements.buttonContainer.parentElement.removeChild(this.elements.buttonContainer);
      this.elements.buttonContainer = null;
    }

    if (this.elements.impressumContainer) {
      this.elements.impressumContainer.parentElement.removeChild(this.elements.impressumContainer);
      this.elements.impressumContainer = null;
    }

    this.init();
  }

  checkKeyframeParams(keyframeParams) {
    if (typeof keyframeParams.fov === "number" && typeof keyframeParams.tilt === "number" && typeof keyframeParams.pan === "number" && typeof keyframeParams.speed === "number" && (keyframeParams.locked_controls === 'all' || 'none' || 'Mousewheel' || 'Mouse' || 'Keyboard' || 'Keyboard+Mousewheel') && typeof keyframeParams.node === "number" || "undefined") {
      return true;
    } else {
      return false;
    }
  } //


  checkIncludedStyle() {
    var nodes = document.head.childNodes;
    var link_list = [];

    for (let i = 0; i < document.head.childElementCount; i++) {
      if (nodes[i].nodeName == "LINK") {
        link_list.push(nodes[i]);
      }
    }

    for (let i = 0; i < link_list.length; i++) {
      if (link_list[i].href.includes("360ty_styles.css")) {
        return true;
      }
    }

    return false;
  }

  includeStyle() {
    if (this.checkIncludedStyle() == false) {
      var style_include = document.createElement("link");
      style_include.rel = "stylesheet";
      style_include.href = "https://storage.googleapis.com/api.360ty.cloud/360ty_styles.css";
      document.head.appendChild(style_include);
    }
  }

  declareElements() {
    this.elements.parentContainer = document.getElementById(this.elementIDs.parentContainer);

    if (this.responsive_params.tablet.tour_dimensions.width === null) {
      this.responsive_params.tablet.tour_dimensions.width = this.style_params.tour_dimensions.width;
    }

    if (this.responsive_params.tablet.tour_dimensions.height === null) {
      this.responsive_params.tablet.tour_dimensions.height = this.style_params.tour_dimensions.height;
    }

    if (this.responsive_params.tablet.singleImage === null) {
      this.responsive_params.tablet.singleImage = this.addons_params.singleImage;
    }

    if (this.responsive_params.tablet.share_buttons === null) {
      this.responsive_params.tablet.share_buttons = this.addons_params.share_buttons;
    }

    if (this.responsive_params.tablet.share_buttons === null) {
      this.responsive_params.tablet.show_impressum = this.addons_params.show_impressum;
    }

    if (this.responsive_params.tablet.share_buttons === null) {
      this.responsive_params.tablet.horizontal_alignment = this.addons_params.horizontal_alignment;
    }

    if (this.responsive_params.mobile.tour_dimensions.width === null) {
      this.responsive_params.mobile.tour_dimensions.width = this.style_params.tour_dimensions.width;
    }

    if (this.responsive_params.mobile.tour_dimensions.height === null) {
      this.responsive_params.mobile.tour_dimensions.height = this.style_params.tour_dimensions.height;
    }

    if (this.responsive_params.mobile.singleImage === null) {
      this.responsive_params.mobile.singleImage = this.addons_params.singleImage;
    }

    if (this.responsive_params.mobile.share_buttons === null) {
      this.responsive_params.mobile.share_buttons = this.addons_params.share_buttons;
    }

    if (this.responsive_params.mobile.share_buttons === null) {
      this.responsive_params.mobile.show_impressum = this.addons_params.show_impressum;
    }

    if (this.responsive_params.mobile.share_buttons === null) {
      this.responsive_params.mobile.horizontal_alignment = this.addons_params.horizontal_alignment;
    }
  }

  addMeta(metaName, metaContent) {
    var meta = document.createElement("meta");
    meta.name = metaName;
    meta.content = metaContent;
    document.head.appendChild(meta);
  } //setup_pano


  setup_pano() {
    if (!this.elements.panoContainer) {
      this.createContainer();
    }

    this.pano = new pano2vrPlayer(this.elementIDs.panoContainer);

    if (this.tour_params.node) {
      this.pano.startNode = "node" + this.tour_params.node;
    }

    this.skin = new pano2vrSkin(this.pano, this.tour_params.base_Tour);
    var singleImage;

    switch (this.deviceType()) {
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

    this.pano.readConfigUrlAsync(this.tour_params.base_Tour + "pano.xml", function () {
      if (singleImage === true) {
        this.pano.removeHotspots();
        this.pano.stopAutorotate();
      }

      if (this.skin_variables) {
        this.changeSkinVars();
      }

      this.pano_UpdateViewingParams();
    }.bind(this));
    this.callAfterPanoLoaded("loadKeyframes");
    this.callAfterPanoLoaded("addHotspotListeners");
    this.callAfterPanoLoaded("init_woo_panels");
  }

  pano_UpdateViewingParams() {
    if (this.tour_params.fov || this.tour_params.fov === 0) {
      this.pano.setFov(this.tour_params.fov);
    }

    if (this.tour_params.tilt || this.tour_params.tilt === 0) {
      this.pano.setTilt(this.tour_params.tilt);
    }

    if (this.tour_params.pan || this.tour_params.pan === 0) {
      this.pano.setPan(this.tour_params.pan);
    }
  }

  async loadKeyframes() {
    setTimeout(async function () {
      if (this.movement_params.keyframes !== []) {
        this.elements.panoContainer.addEventListener("mousedown", function () {
          this.movement_params.movementAborted = true;
        }.bind(this));
        this.elements.panoContainer.addEventListener("touchstart", function () {
          this.movement_params.movementAborted = true;
        }.bind(this));

        for (let i = 0; i < this.movement_params.loop_amount; i++) {
          if (this.movement_params.movementAborted === false) {
            await this.moveToKeyframes();
          } else {
            break;
          }
        }
      }
    }.bind(this), this.movement_params.delay);
  }

  moveToStartNode() {
    return new Promise(function (resolve, reject) {
      if (this.tour_params.node) {
        this.elements.panoContainer.addEventListener("mousedown", function () {
          reject("movement aborted by user");
        }.bind(this));
        this.elements.panoContainer.addEventListener("touchstart", function () {
          reject("movement aborted by user");
        }.bind(this));

        if (parseInt(this.pano.getCurrentNode().substring(4)) !== this.tour_params.node) {
          this.pano.openNext("{node" + this.tour_params.node + "}");
        }

        resolve();
      } else {
        reject("start node not set");
      }
    }.bind(this));
  }

  async moveToKeyframes() {
    try {
      const promises = this.movement_params.keyframes.map(async function (keyframe) {
        const frame = await this.moveToKeyframe(keyframe);
        return frame;
      }.bind(this));
      const frames = await Promise.all(promises);
      return frames;
    } catch (err) {
      console.log(err);
    }
  }

  moveToKeyframe(keyframe) {
    return new Promise(async function (resolve, reject) {
      try {
        if (this.movement_params.movementAborted === false) {
          await this.checkActiveMovement();
          this.setLock(keyframe.locked_controls);

          if (this.movement_params.keyframes[0] == keyframe) {
            await this.moveToStartNode();
          }

          if (keyframe.node && "node" + keyframe.node !== this.pano.getCurrentNode()) {
            await this.pano.openNext("{node" + keyframe.node + "}");
          }

          await this.pano.moveTo(keyframe.pan, keyframe.tilt, keyframe.fov, keyframe.speed, 0, 1);
          this.removeLockAfterMovement(keyframe.locked_controls);

          if (keyframe.node && !this.pano.getNodeIds().includes("node" + keyframe.node)) {
            reject("movement aborted");
            console.log("Aborted Movement! There is no node" + keyframe.node + " in this tour.");
          } else {
            resolve();
          }
        }
      } catch (err) {
        console.log(err);
      }
    }.bind(this));
  }

  checkActiveMovement() {
    return new Promise(async function (resolve, reject) {
      var activeMov = setInterval(function () {
        if (this.movement_params.movementAborted === true) {
          reject("movement aborted by user");
        }

        if (this.pano.F.active === false) {
          clearInterval(activeMov);
          resolve();
        }
      }.bind(this), 100);
    }.bind(this));
  }

  changeSkinVars() {
    if (typeof this.skin_variables === "object") {
      this.skin_variables.forEach(function (variable) {
        for (const [key, value] of Object.entries(variable)) {
          if (value !== null || value !== "") {
            this.pano.setVariableValue(key, value);
          }
        }
      }.bind(this));
    }
  }

  removeLockAfterMovement(type) {
    if (type != "none") {
      switch (type) {
        case "all":
          var lock_controls_interval = setInterval(function () {
            if (this.pano.F.active == false) {
              clearInterval(lock_controls_interval);
              this.pano.setLocked(false);
            }
          }.bind(this), 100);
          break;

        case "Mousewheel":
          var lock_controls_interval = setInterval(function () {
            if (this.pano.F.active == false) {
              clearInterval(lock_controls_interval);
              this.pano.setLockedWheel(false);
            }
          }.bind(this), 100);
          break;

        case "Mouse":
          var lock_controls_interval = setInterval(function () {
            if (this.pano.F.active == false) {
              clearInterval(lock_controls_interval);
              this.pano.setLockedMouse(false);
            }
          }.bind(this), 100);
          break;

        case "Keyboard":
          var lock_controls_interval = setInterval(function () {
            if (this.pano.F.active == false) {
              clearInterval(lock_controls_interval);
              this.pano.setLockedKeyboard(false);
            }
          }.bind(this), 100);
          break;

        case "Keyboard_Mousewheel":
          var lock_controls_interval = setInterval(function () {
            if (this.pano.F.active == false) {
              clearInterval(lock_controls_interval);
              this.pano.setLockedKeyboard(false);
              this.pano.setLockedWheel(false);
            }
          }.bind(this), 100);
          break;

        default:
          console.log("couldnt find lock-parameter " + type);
          break;
      }
    }
  }

  setLock(type) {
    if (type != "none") {
      switch (type) {
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
          console.log("couldnt find lock-parameter " + type);
          break;
      }
    }
  }

  createContainer() {
    var parentContainer = this.elements.parentContainer;
    var container = document.createElement("div");
    var pano_container = document.createElement("div");
    pano_container.setAttribute("id", this.elementIDs.panoContainer);
    container.style.width = this.elements.parentContainer.getBoundingClientRect().width + "px";
    container.style.height = this.elements.parentContainer.getBoundingClientRect().height + "px";
    pano_container.style.width = container.getBoundingClientRect().width + "px";
    pano_container.style.height = container.getBoundingClientRect().height + "px";
    container.setAttribute("id", this.elementIDs.container);
    parentContainer.appendChild(container);
    container.appendChild(pano_container);
    this.elements.panoContainer = pano_container;
    this.elements.container = container;
  }

  createImpressum() {
    var parent = this.elements.container;
    var impressumContainer = document.createElement("div");
    impressumContainer.setAttribute("id", this.elementIDs.impressumContainer);
    var p = document.createElement("p");
    var impressum = document.createElement("a");
    impressum.setAttribute("href", "https://360ty.world/");
    impressum.setAttribute("target", "_blank");
    impressum.innerHTML = "360ty.world | Made with ♥ in Europe";
    parent.appendChild(impressumContainer);
    impressumContainer.appendChild(p);
    p.appendChild(impressum);
    this.elements.impressum = impressum;
    this.elements.impressumContainer = impressumContainer;
  }

  checkParameter() {
    var exceptions = ["singleImage", "customClass"];
    var check = true;

    for (var prop in this.tour_params) {
      if (exceptions.includes(prop) == false) {
        if (prop == null) {
          console.error("360ty Pano - emtpy or wrong parameter", "parameter " + prop + " empty or wrong! Please fill it out correctly and try again.");
          check = false;
        }
      }
    }

    if (check == true) {
      return true;
    } else {
      return false;
    }
  }

  addHotspotListeners() {
    var hotspots = this.elements.panoContainer.querySelectorAll(".ggskin .ggskin_external");

    for (let i = 0; i < hotspots.length; i++) {
      hotspots[i].addEventListener("mouseover", function () {
        var timesCalled = 0;
        var hn_interval = setInterval(function () {
          if (timesCalled < 25) {
            if (this.pano && this.pano.hotspot) {
              var hotspot = this.pano.hotspot;
            }

            if (hotspot.url != "") {
              this.hovered_node = hotspot;
              clearInterval(hn_interval);
            } else {
              timesCalled++;
            }
          } else {
            clearInterval(hn_interval);
          }
        }.bind(this), 10);
      }.bind(this));
      hotspots[i].addEventListener("touchstart", function () {
        var timesCalled = 0;
        var hn_interval = setInterval(function () {
          if (timesCalled < 25) {
            if (this.pano && this.pano.hotspot) {
              var hotspot = this.pano.hotspot;
            }

            if (hotspot.url != "") {
              this.hovered_node = hotspot;
              clearInterval(hn_interval);
            } else {
              timesCalled++;
            }
          } else {
            clearInterval(hn_interval);
          }
        }.bind(this), 10);
      }.bind(this));
      hotspots[i].addEventListener("mouseup", function () {
        if (this.hovered_node.url.includes("http")) {
          var hotspotURL = this.hovered_node.url;
          var basePathStartIndex = hotspotURL.indexOf("//") + 2;
          var basePathEndIndex = hotspotURL.indexOf("/", basePathStartIndex);
          var basepath = hotspotURL.substring(0, basePathEndIndex + 1);
          var nodeIndex = hotspotURL.indexOf("#", basePathEndIndex) + 5;
          var nodeID = hotspotURL.substring(nodeIndex, hotspotURL.length);
          this.tour_params.base_Tour = basepath;
          this.tour_params.node = nodeID;
          this.keyframes = [];
          this.reload();
          this.externalHotspotListenerSet = false;
        }
      }.bind(this));
      hotspots[i].addEventListener("touchend", function (e) {
        if (this.hovered_node.url.includes("http")) {
          var hotspotURL = this.hovered_node.url;
          var basePathStartIndex = hotspotURL.indexOf("//") + 2;
          var basePathEndIndex = hotspotURL.indexOf("/", basePathStartIndex);
          var basepath = hotspotURL.substring(0, basePathEndIndex + 1);
          var nodeIndex = hotspotURL.indexOf("#", basePathEndIndex) + 5;
          var nodeID = hotspotURL.substring(nodeIndex, hotspotURL.length);
          this.tour_params.base_Tour = basepath;
          this.tour_params.node = nodeID;
          this.keyframes = [];
          this.setup_pano();
          this.externalHotspotListenerSet = false;
        }
      }.bind(this));
    }

    if (this.externalHotspotListenerSet == false) {
      this.externalHotspotListenerSet = true;
      this.pano.addListener("changenode", function () {
        this.addHotspotListeners();
      }.bind(this));
    }
  } //buttons


  setupButtons() {
    if (this.elements.shareButton == null) {
      if (this.pano && this.pano.isLoaded == true) {
        this.createShareButtons();
      } else {
        var shareButtonsInterval = setInterval(function () {
          if (this.pano && this.pano.isLoaded == true) {
            this.createShareButtons();
            clearInterval(shareButtonsInterval);
          }
        }.bind(this), 100);
      }
    }
  }

  callAfterPanoLoaded(callbackName) {
    var called = false;

    if (this.pano_loaded() == true) {
      this[callbackName]();
    } else {
      var panoLoaded_interval = setInterval(function () {
        if (this.pano_loaded() == true) {
          clearInterval(panoLoaded_interval);

          if (called == false) {
            this[callbackName]();
            called = true;
          }
        }
      }.bind(this), 100);
    }
  }

  createButton(onclickEvent, id, text, style_display) {
    if (this.elements.buttonContainer !== null) {
      var buttonContainer = this.elements.buttonContainer;
    } else {
      var buttonContainer = document.createElement("div");
      buttonContainer.setAttribute("id", this.elementIDs.buttonContainer);
      this.elements.container.appendChild(buttonContainer);
      this.elements.buttonContainer = buttonContainer;
    }

    var button = document.createElement("button");
    button.setAttribute("id", this.elementIDs[id]);
    button.setAttribute("class", this.elementIDs.class_shareButtons);

    if (style_display) {
      button.setAttribute("style", "display: " + style_display + ";");
    }

    button.addEventListener("click", function () {
      this[onclickEvent]();
    }.bind(this));
    button.innerHTML = text;
    buttonContainer.appendChild(button);
    this.elements[id] = button;
  }

  createShareButtons() {
    this.createButton("showShareButtons", "shareButton", "share");
    this.createButton("shareOnFacebook", "FBshareButton", "share on facebook", "none");
    this.createButton("copyShareUrlToClipboard", "URLshareButton", "get link to location", "none");
  }

  copyShareUrlToClipboard() {
    this.copyToClipboard(this.getShareURL(), 'link');
  }

  showShareButtons() {
    this.elements.shareButton.style.display = "none";
    this.elements.URLshareButton.style.display = "";
    this.elements.FBshareButton.style.display = "";
  }

  shareOnFacebook() {
    var facebookURL = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=" + encodeURIComponent(this.getShareURL());
    var leftPosition = window.visualViewport ? window.visualViewport.width / 2 : window.screen.availWidth / 2;
    var topPosition = window.visualViewport ? window.visualViewport.height / 2 : window.screen.availWidth / 2;
    var popUpSettings = 'height=700,width=500, screenX =' + leftPosition + ',screenY =' + topPosition + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes';
    var win = window.open(facebookURL, 'popUpWindow', popUpSettings);
    win.focus();
  }

  copyToClipboard(text, alertText) {
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert(alertText + ' copied to clipboard!');
  }

  getShareURL() {
    var shareUrl = this.pano.getBasePath() + "?Pano=" + this.pano.getCurrentNode() + "&PanoFovTarget=" + this.pano.getFov() + "&PanoPanTarget=" + this.pano.getPan() + "&PanoTiltTarget=" + this.pano.getTilt() + "&PanoFovStart=" + (this.pano.getFov() + 20) + "&PanoPanStart=" + (this.pano.getPan() + 50) + "&PanoTiltStart=" + this.pano.getTilt();
    return shareUrl;
  }

  addListeners() {
    this.windowResizeListener();
    this.clearwebglContext_listener();
  }

  windowResizeListener() {
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", function () {
        let height;
        let width;

        switch (this.deviceType()) {
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

        this.setViewerSize(width, height);
      }.bind(this));
    } else {
      window.addEventListener("resize", function () {
        let height;
        let width;

        switch (this.deviceType()) {
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

        this.setViewerSize(width, height);
      }.bind(this));
    }
  }

  setViewerSize(width, height) {
    width = isNaN(width) == false ? width + "px" : width;
    this.elements.container.style.width = width;
    height = isNaN(height) === false ? height + "px" : height.includes(":") ? this.calculateAspectRatio(height) + "px" : height.endsWith("%%") ? this.calcHeight_Precentage(height) + "px" : height;
    this.elements.container.style.height = height;
    var containerSize = this.elements.container.getBoundingClientRect();
    this.elements.panoContainer.style.width = containerSize.width + "px";
    this.elements.panoContainer.style.height = containerSize.height + "px";
    this.pano.setViewerSize(containerSize.width, containerSize.height);
  }

  calculateAspectRatio(ratio) {
    var colonIndex = ratio.indexOf(":");
    var x_aspect = parseFloat(ratio.substring(0, colonIndex));
    var y_aspect = parseFloat(ratio.substring(colonIndex + 1));
    var height = this.elements.container.getBoundingClientRect().width / (x_aspect / y_aspect);
    return height;
  }

  calcHeight_Precentage(height) {
    var width = this.elements.container.getBoundingClientRect().width;
    var perc_height = parseFloat(height.substring(-1)) / 100;
    var calc_height = width * perc_height;
    return calc_height;
  }

  horizontallyAlignImage(alignment) {
    var container_style = this.elements.container.style;

    switch (alignment) {
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

  clearwebglContext_listener() {
    document.addEventListener("close", function () {
      this.clearwebglContext();
    }.bind(this));
  }

  clearwebglContext() {
    var canvas = this.elements.panoContainer.getElementsByTagName("canvas");

    for (let i = 0; i < canvas.length; i++) {
      canvas[i].getContext('webgl').getExtension('WEBGL_lose_context').loseContext();
    }

    console.log("panorama wegl context cleared");
  }
  /*
  WooCommerce Integration
  */


  setProjectID(id) {
    this.wooProjectID = id;
  }

  init_woo_panels() {
    if (this.wooProjectID) {
      this.addWooCommerceProductPanels(this.wooProjectID).then(() => {
        this.addProductPanelsVisibilityListener();
        this.addProductNodeListener();
      }).catch(function (err) {
        console.error(err);
      });
    }
  }

  async addWooCommerceProductPanels(projectID) {
    return new Promise(async function (resolve, reject) {
      try {
        let panels = await this.getProductPanels(projectID);

        if (!panels.error) {
          this.productPanels = panels;
          this.renderHotspots(panels);
          resolve(panels);
        } else {
          reject(panels.error);
        }
      } catch (err) {
        reject(err);
      }
    }.bind(this));
  }

  createHotspotDot() {
    let container = document.createElement("div");
    let hs_dot = document.createElement("div");
    hs_dot.classList.add("hotspot_dot");
    let hs_pulse = document.createElement("div");
    hs_pulse.classList.add("hotspot_pulse");
    container.append(hs_dot);
    container.append(hs_pulse);
    return container;
  }

  setHotspotDotsListener() {
    setTimeout(function () {
      setInterval(function () {
        this.pano.$.querySelectorAll(".hotspot_pulse").forEach(function (hs_pulse) {
          if (hs_pulse.style.opacity == 0) {
            hs_pulse.style.opacity = 0.65;
          } else {
            hs_pulse.style.opacity = 0;
          }
        });
      }.bind(this), 2000);
    }.bind(this), 5000);
  }

  createPanel(imgSrc, headline, description, price) {
    let container = document.createElement("div");
    container.classList.add("product_container");

    if (imgSrc) {
      let leftColumn = document.createElement("div");
      leftColumn.classList.add("left-column");
      let img = document.createElement("img");
      img.src = imgSrc;
      leftColumn.append(img);
      container.append(leftColumn);
    }

    let rightColumn = document.createElement("div");
    rightColumn.classList.add("right-column");
    let productDescriptionContainer = document.createElement("div");
    productDescriptionContainer.classList.add("product-description");

    if (headline) {
      let header = document.createElement("h1");
      header.innerText = headline;
      productDescriptionContainer.append(header);
    }

    if (description) {
      let description_p = document.createElement("p");
      description_p.innerHTML = description;
      productDescriptionContainer.append(description_p);
    }

    rightColumn.append(productDescriptionContainer);

    if (price) {
      let priceContainer = document.createElement("div");
      priceContainer.classList.add("product-price");
      let priceSpan = document.createElement("span");
      priceSpan.innerText = price;
      priceContainer.append(priceSpan);
      rightColumn.append(priceContainer);
    }

    container.append(rightColumn);
    return container;
  }

  createProductHotspot(imgSrc, headline, description, price) {
    let hsDiv = document.createElement("div");
    let product_panel = document.createElement("div");
    product_panel.classList.add("product_panel");
    let panel = this.createPanel(imgSrc, headline, description, price);
    let hsDot = this.createHotspotDot();
    hsDiv.addEventListener("mouseover", function () {
      product_panel.style.pointerEvents = "auto";
      product_panel.style.opacity = 1;
    }.bind(this));
    hsDiv.addEventListener("mouseleave", function () {
      product_panel.style.opacity = 0;
      setTimeout(function () {
        product_panel.style.pointerEvents = "none";
      }, 500);
    }.bind(this));
    product_panel.append(panel);
    hsDiv.append(hsDot);
    hsDiv.append(product_panel);
    return hsDiv;
  }

  renderHotspots(panels) {
    panels.forEach(function (panel, i) {
      if (this.pano.getCurrentNode() === "node" + panel.position.node) {
        let hs_div = this.createProductHotspot(panel.product.images[0].src, panel.product.name, panel.product.description, panel.product.price);
        hs_div.style.visibility = "";
        this.pano.addHotspot("product_panel_" + i, panel.position.pan, panel.position.tilt, hs_div);
      }
    }.bind(this));
  }

  addProductNodeListener() {
    this.pano.addListener("changenode", function () {
      this.renderHotspots(this.productPanels);
    }.bind(this));
  }

  addProductPanelsVisibilityListener() {
    this.pano.addListener("positionchanged", function () {
      this.productPanels.forEach(function (panel, i) {
        if (this.pano.getHotspot("product_panel_" + i)) {
          let hs = this.pano.getHotspot("product_panel_" + i);
          let currentPan = this.pano.getPan();

          if (currentPan < 0) {
            currentPan = currentPan + 360;
          }

          if (hs.pan < 0) {
            hs.pan = hs.pan + 360;
          }

          let pan_diff = parseInt(currentPan - hs.pan);

          if (pan_diff < 0) {
            pan_diff = pan_diff * -1;
          }

          if (pan_diff <= 75 || pan_diff - 360 >= -75) {
            if (hs.div.style.visibility === "hidden") {
              hs.div.style.visibility = "";
            }
          }
        }
      }.bind(this));
    }.bind(this));
  }

}

exports.default = Pano_360ty;
},{}],"Iv8a":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";

var _classSlides3360ty = _interopRequireDefault(require("./class-slides3-360ty"));

var _classTourbuilder360ty = _interopRequireDefault(require("./class-tourbuilder-360ty"));

require("./css/slides3.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let interval = setInterval(() => {
  if (_classSlides3360ty.default && _classTourbuilder360ty.default) {
    clearInterval(interval);
    window.Slides3 = _classSlides3360ty.default;
    window.Pano_360ty = _classTourbuilder360ty.default;
  }
});
},{"./class-slides3-360ty":"yLm4","./class-tourbuilder-360ty":"tF8G","./css/slides3.scss":"Iv8a"}]},{},["Focm"], null)
//# sourceMappingURL=/src.96bac086.js.map