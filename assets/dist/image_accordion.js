/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/image_accordion.js":
/*!******************************************!*\
  !*** ./assets/src/js/image_accordion.js ***!
  \******************************************/
/***/ (() => {

eval("(function ($, elementor) {\n  \"use strict\";\n\n  var $window = $(elementor);\n  var emkElementor = {\n    onInit: function () {\n      var E_FRONT = elementorFrontend;\n      var widgetHandlersMap = {\n        \"em_image_accordion.default\": emkElementor.EmKitImageAccordion\n      };\n      $.each(widgetHandlersMap, function (widgetName, callback) {\n        E_FRONT.hooks.addAction(\"frontend/element_ready/\" + widgetName, callback);\n      });\n    },\n    EmKitImageAccordion: function ($scope) {\n      let image_accordion = $scope.find('.accordion');\n      image_accordion.each(function () {\n        const $accordion = $(this);\n        const behavior = $accordion.hasClass('emk-image-accordion-hover') ? 'hover' : 'click';\n        if (!$accordion.find('.tab.active').length) {\n          $accordion.find('.tab').first().addClass('active');\n        }\n        if (behavior === 'hover') {\n          $accordion.on('mouseenter', '.tab', function () {\n            $(this).siblings().removeClass('active');\n            $(this).addClass('active');\n          });\n        } else {\n          $accordion.on('click', '.tab', function () {\n            $(this).siblings().removeClass('active');\n            $(this).addClass('active');\n          });\n        }\n      });\n    }\n  };\n  $window.on(\"elementor/frontend/init\", emkElementor.onInit);\n})(jQuery, window);\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/js/image_accordion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/image_accordion.js"]();
/******/ 	
/******/ })()
;