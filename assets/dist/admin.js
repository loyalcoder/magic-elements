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

/***/ "./assets/src/admin/index.js":
/*!***********************************!*\
  !*** ./assets/src/admin/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.scss */ \"./assets/src/admin/admin.scss\");\n\n// import * as Popper from \"@popperjs/core\"\n// import Tab from 'bootstrap/js/dist/tab';\nconst showToast = (message, type = 'success') => {\n  const toast = document.getElementById('settings-toast');\n  toast.textContent = message;\n  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';\n  toast.style.display = 'block';\n  setTimeout(() => {\n    toast.style.display = 'none';\n  }, 3000);\n};\ndocument.addEventListener('DOMContentLoaded', () => {\n  const form = document.getElementById('magic-kit-settings');\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    formData.append('action', 'save_magic_kit_settings');\n    formData.append('nonce', document.getElementById('magic_kit_nonce').value);\n    jQuery.ajax({\n      url: ajaxurl,\n      type: 'POST',\n      data: formData,\n      processData: false,\n      contentType: false,\n      success: function (response) {\n        if (response.success) {\n          showToast('Settings saved successfully!');\n        } else {\n          showToast('Error saving settings', 'error');\n        }\n      },\n      error: function (xhr, status, error) {\n        showToast('Error saving settings', 'error');\n        console.error('Error:', error);\n      }\n    });\n  });\n});\nconst toggleAll = enable => {\n  const checkboxes = document.querySelectorAll('input[type=\"checkbox\"][name=\"magic_kit_enabled_widgets[]\"]');\n  checkboxes.forEach(checkbox => {\n    checkbox.checked = enable;\n  });\n};\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/admin/index.js?");

/***/ }),

/***/ "./assets/src/admin/admin.scss":
/*!*************************************!*\
  !*** ./assets/src/admin/admin.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/admin/admin.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/admin/index.js");
/******/ 	
/******/ })()
;