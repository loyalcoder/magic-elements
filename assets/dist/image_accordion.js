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

/***/ "./assets/src/js/image_accordion.js":
/*!******************************************!*\
  !*** ./assets/src/js/image_accordion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_image_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/image_accordion.scss */ \"./assets/src/scss/image_accordion.scss\");\n\n(function ($, elementor) {\n  \"use strict\";\n\n  var $window = $(elementor);\n  var emkElementor = {\n    onInit: function () {\n      var E_FRONT = elementorFrontend;\n      var widgetHandlersMap = {\n        \"em_image_accordion.default\": emkElementor.EmKitImageAccordion\n      };\n      $.each(widgetHandlersMap, function (widgetName, callback) {\n        E_FRONT.hooks.addAction(\"frontend/element_ready/\" + widgetName, callback);\n      });\n    },\n    EmKitImageAccordion: function ($scope) {\n      let image_accordion = $scope.find('.accordion');\n      image_accordion.each(function () {\n        const $accordion = $(this);\n        const behavior = $accordion.hasClass('emk-image-accordion-hover') ? 'hover' : 'click';\n        if (!$accordion.find('.tab.active').length) {\n          $accordion.find('.tab').first().addClass('active');\n        }\n        if (behavior === 'hover') {\n          $accordion.on('mouseenter', '.tab', function () {\n            $(this).siblings().removeClass('active');\n            $(this).addClass('active');\n          });\n        } else {\n          $accordion.on('click', '.tab', function () {\n            $(this).siblings().removeClass('active');\n            $(this).addClass('active');\n          });\n        }\n      });\n    }\n  };\n  $window.on(\"elementor/frontend/init\", emkElementor.onInit);\n})(jQuery, window);\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/js/image_accordion.js?");

/***/ }),

/***/ "./assets/src/scss/image_accordion.scss":
/*!**********************************************!*\
  !*** ./assets/src/scss/image_accordion.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/scss/image_accordion.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/image_accordion.js");
/******/ 	
/******/ })()
;