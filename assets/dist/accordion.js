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

/***/ "./assets/src/js/accordion.js":
/*!************************************!*\
  !*** ./assets/src/js/accordion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/accordion.scss */ \"./assets/src/scss/accordion.scss\");\n\n(function ($, elementor) {\n  \"use strict\";\n\n  var $window = $(elementor);\n  var emkElementor = {\n    onInit: function () {\n      var E_FRONT = elementorFrontend;\n      var widgetHandlersMap = {\n        \"em_kit_accordion.default\": emkElementor.EmKitAccordion\n      };\n      $.each(widgetHandlersMap, function (widgetName, callback) {\n        E_FRONT.hooks.addAction(\"frontend/element_ready/\" + widgetName, callback);\n      });\n    },\n    EmKitAccordion: function ($scope) {\n      $('.emk-accordion-wrapper').each(function () {\n        const $wrapper = $(this);\n        const duration = parseInt($wrapper.data('animation-duration'), 10) || 300;\n\n        // Style 1: Only Current Item Toggles\n        if ($wrapper.hasClass('style_one')) {\n          const $titles = $wrapper.find('.emk-accordion-title');\n          const $contents = $wrapper.find('.emk-accordion-content');\n\n          // Initialize icons for Style 1\n          $titles.find('.accordion_expand_icon').show();\n          $titles.find('.accordion_collapse_icon').hide();\n\n          // Open the first item by default\n          $titles.first().addClass('active');\n          $contents.first().show();\n          $titles.first().find('.accordion_expand_icon').hide();\n          $titles.first().find('.accordion_collapse_icon').show();\n          $titles.on('click', function () {\n            const $this = $(this);\n            const $content = $this.next('.emk-accordion-content');\n\n            // Collapse all other accordions\n            $titles.not($this).removeClass('active').find('.accordion_expand_icon').show().end().find('.accordion_collapse_icon').hide();\n            $contents.not($content).slideUp(duration);\n\n            // Toggle the clicked accordion\n            $this.toggleClass('active');\n            $content.slideToggle(duration);\n\n            // Update icons for the clicked accordion\n            $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));\n            $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));\n          });\n        }\n\n        // Style 2: Only This Item Toggles Independently\n        if ($wrapper.hasClass('style_two')) {\n          const $titles = $wrapper.find('.emk-accordion-title');\n\n          // Initialize icons for Style 2\n          $titles.find('.accordion_expand_icon').show();\n          $titles.find('.accordion_collapse_icon').hide();\n          $titles.on('click', function () {\n            const $this = $(this);\n            const $content = $this.next('.emk-accordion-content');\n\n            // Only toggle this item's content\n            $this.toggleClass('active');\n            $content.slideToggle(duration);\n\n            // Toggle icons\n            $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));\n            $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));\n          });\n        }\n\n        // Style 3: All Items Open By Default\n        if ($wrapper.hasClass('style_three')) {\n          const $titles = $wrapper.find('.emk-accordion-title');\n          const $contents = $wrapper.find('.emk-accordion-content');\n\n          // Initialize icons and content for Style 3\n          $titles.find('.accordion_expand_icon').hide(); // Hide expand icon by default\n          $titles.find('.accordion_collapse_icon').show(); // Show collapse icon by default\n          $contents.show(); // Ensure all items are visible by default\n\n          $titles.on('click', function () {\n            const $this = $(this);\n            const $content = $this.next('.emk-accordion-content');\n\n            // Toggle content visibility\n            $this.toggleClass('active');\n            $content.slideToggle(duration);\n\n            // Toggle icons\n            $this.find('.accordion_expand_icon').toggle($this.hasClass('active'));\n            $this.find('.accordion_collapse_icon').toggle(!$this.hasClass('active'));\n          });\n        }\n      });\n    }\n  };\n  $window.on(\"elementor/frontend/init\", emkElementor.onInit);\n})(jQuery, window);\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/js/accordion.js?");

/***/ }),

/***/ "./assets/src/scss/accordion.scss":
/*!****************************************!*\
  !*** ./assets/src/scss/accordion.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/scss/accordion.scss?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/accordion.js");
/******/ 	
/******/ })()
;