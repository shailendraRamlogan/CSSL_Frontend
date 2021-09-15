/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/custom.css */ \"./src/css/custom.css\");\n/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ \"./node_modules/@glidejs/glide/dist/glide.modular.esm.js\");\n/* harmony import */ var _glidejs_glide_src_assets_sass_glide_core_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide/src/assets/sass/glide.core.scss */ \"./node_modules/@glidejs/glide/src/assets/sass/glide.core.scss\");\n/* harmony import */ var _glidejs_glide_src_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @glidejs/glide/src/utils/dom */ \"./node_modules/@glidejs/glide/src/utils/dom.js\");\n/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! alpinejs */ \"./node_modules/alpinejs/dist/module.esm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nalpinejs__WEBPACK_IMPORTED_MODULE_4__.default.data('testimonial', () => ({\r\n  init(){\r\n\r\n      const classes = {\r\n        glideSlideNextActive: 'glide__slide--next-active',\r\n      };\r\n\r\n      const selectors = {\r\n        glideSlideNextActive: '.glide__slide--next-active',\r\n        glideTrack: '.glide__track',\r\n      };\r\n\r\n      /*\r\n      * This allows for auto height on the glide container\r\n      * */\r\n      function ResizeSlider(Glide, Components, Events) {\r\n        var Component = {\r\n          mount() {\r\n            this.changeActiveSlide();\r\n            this.updateTrackHeight();\r\n          },\r\n\r\n          changeActiveSlide() {\r\n            let slide = Components.Html.slides[Glide.index];\r\n            slide.classList.add(classes.glideSlideNextActive);\r\n\r\n            (0,_glidejs_glide_src_utils_dom__WEBPACK_IMPORTED_MODULE_3__.siblings)(slide).forEach((sibling) => {\r\n              sibling.classList.remove(classes.glideSlideNextActive);\r\n            });\r\n          },\r\n\r\n          updateTrackHeight() {\r\n            console.log('update track height');\r\n\r\n            const activeSlide = document.querySelector(\r\n              selectors.glideSlideNextActive\r\n            );\r\n            const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;\r\n\r\n            const glideTrack = document.querySelector(selectors.glideTrack);\r\n            const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;\r\n\r\n            console.log(`Active slide: ${activeSlide} activeSlideHeight: ${activeSlideHeight}`)\r\n\r\n            if (activeSlideHeight !== glideTrackHeight) {\r\n              glideTrack.style.height = `${activeSlideHeight}px`;\r\n            }\r\n          },\r\n        };\r\n\r\n        Events.on('run', () => {\r\n          Component.changeActiveSlide();\r\n          Component.updateTrackHeight();\r\n        });\r\n\r\n        return Component;\r\n      };\r\n\r\n      const slider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.default('.testimonials', {\r\n        type: 'carousel',\r\n        gap: 0,\r\n        hoverpause: true,\r\n        perView: 3,\r\n        autoplay: 4000,\r\n        breakpoints: {\r\n          600:{\r\n            perView: 1,\r\n          },\r\n          1024:{\r\n            perView:2,\r\n          }\r\n        }\r\n      });\r\n\r\n      slider.mount({\r\n        ResizeSlider: ResizeSlider,\r\n        Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Controls, Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Breakpoints,Autoplay: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Autoplay, Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Swipe\r\n      });\r\n\r\n    }\r\n}))\r\n\r\nalpinejs__WEBPACK_IMPORTED_MODULE_4__.default.data('header', () => ({\r\n  init(){\r\n\r\n      const classes = {\r\n        glideSlideNextActive: 'glide__slide--next-active',\r\n      };\r\n\r\n      const selectors = {\r\n        glideSlideNextActive: '.glide__slide--next-active',\r\n        glideTrack: '.glide__track',\r\n      };\r\n\r\n      /*\r\n      * This allows for auto height on the glide container\r\n      * */\r\n      function ResizeSlider(Glide, Components, Events) {\r\n        var Component = {\r\n          mount() {\r\n            this.changeActiveSlide();\r\n            this.updateTrackHeight();\r\n          },\r\n\r\n          changeActiveSlide() {\r\n            let slide = Components.Html.slides[Glide.index];\r\n            slide.classList.add(classes.glideSlideNextActive);\r\n\r\n            (0,_glidejs_glide_src_utils_dom__WEBPACK_IMPORTED_MODULE_3__.siblings)(slide).forEach((sibling) => {\r\n              sibling.classList.remove(classes.glideSlideNextActive);\r\n            });\r\n          },\r\n\r\n          updateTrackHeight() {\r\n            console.log('update track height');\r\n\r\n            const activeSlide = document.querySelector(\r\n              selectors.glideSlideNextActive\r\n            );\r\n            const activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;\r\n\r\n            const glideTrack = document.querySelector(selectors.glideTrack);\r\n            const glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;\r\n\r\n            console.log(`Active slide: ${activeSlide} activeSlideHeight: ${activeSlideHeight}`)\r\n\r\n            if (activeSlideHeight !== glideTrackHeight) {\r\n              glideTrack.style.height = `${activeSlideHeight}px`;\r\n            }\r\n          },\r\n        };\r\n\r\n        Events.on('run', () => {\r\n          Component.changeActiveSlide();\r\n          Component.updateTrackHeight();\r\n        });\r\n\r\n        return Component;\r\n      };\r\n\r\n      const slider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.default('.headerSlider', {\r\n        type: 'carousel',\r\n        gap: 0,\r\n        hoverpause: true,\r\n        perView: 1\r\n      });\r\n\r\n      slider.mount({\r\n        ResizeSlider: ResizeSlider,\r\n        Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Controls, Autoplay: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Autoplay, Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_1__.Swipe\r\n      });\r\n\r\n    }\r\n}))\r\n\r\nalpinejs__WEBPACK_IMPORTED_MODULE_4__.default.start()\r\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["base"], () => (__webpack_require__("./src/js/home.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["base"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;