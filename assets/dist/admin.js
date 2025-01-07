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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.scss */ \"./assets/src/admin/admin.scss\");\n/**\n * Magic Kit Admin JavaScript\n * \n * Handles admin functionality for the Magic Kit plugin including:\n * - Settings form submission via AJAX\n * - Toast notifications\n * - Bulk widget enable/disable actions\n *\n * @package Elementor_Magic_Kit\n * @since 1.0.0\n */\n\n\n\n/**\n * Display toast notification message\n * \n * Shows a temporary notification message to provide feedback to user actions.\n * Automatically hides after 3 seconds.\n *\n * @since 1.0.0\n * @param {string} message The message to display in the toast\n * @param {string} type The type of notification - 'success' or 'error'\n * @return {void}\n */\nconst showToast = (message, type = 'success') => {\n  const toast = document.getElementById('settings-toast');\n  if (!toast) {\n    return;\n  }\n  toast.textContent = message;\n  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';\n  toast.style.display = 'block';\n  setTimeout(() => {\n    toast.style.display = 'none';\n  }, 3000);\n};\n\n/**\n * Initialize admin functionality when DOM is loaded\n * \n * Sets up event listeners for:\n * - Settings form submission\n * - Bulk action buttons\n *\n * @since 1.0.0\n */\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Get settings form element\n  const form = document.getElementById('magic-kit-settings');\n  if (!form) {\n    return;\n  }\n\n  /**\n   * Handle settings form submission\n   * \n   * Submits form data via AJAX and shows success/error message\n   */\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    const nonce = document.getElementById('magic_kit_nonce');\n\n    // Verify nonce exists\n    if (!nonce) {\n      showToast('Security check failed', 'error');\n      return;\n    }\n\n    // Add required action and nonce to form data\n    formData.append('action', 'save_magic_kit_settings');\n    formData.append('nonce', nonce.value);\n\n    // Submit form via AJAX using vanilla JS\n    const xhr = new XMLHttpRequest();\n    xhr.open('POST', window.ajaxurl);\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        try {\n          const response = JSON.parse(xhr.responseText);\n          if (response && response.success) {\n            showToast(response.data?.message || 'Settings saved successfully!');\n          } else {\n            showToast(response.data?.message || 'Error saving settings', 'error');\n          }\n        } catch (error) {\n          showToast('Error processing response', 'error');\n          console.error('Magic Kit Parse Error:', error);\n        }\n      } else {\n        showToast('Error saving settings', 'error');\n        console.error('Magic Kit XHR Error:', xhr.statusText);\n      }\n    };\n    xhr.onerror = function () {\n      showToast('Network error occurred', 'error');\n      console.error('Magic Kit Network Error');\n    };\n    xhr.send(formData);\n  });\n\n  /**\n   * Handle bulk enable/disable actions for widgets\n   * \n   * Allows checking/unchecking all widget checkboxes at once\n   */\n  const bulkActionButtons = document.querySelectorAll('.bulk-action-button');\n  if (bulkActionButtons.length) {\n    bulkActionButtons.forEach((button, index) => {\n      button.addEventListener('click', () => {\n        const checkboxes = document.querySelectorAll('input[type=\"checkbox\"][name=\"magic_kit_enabled_widgets[]\"]');\n        // First button enables (index 0), second disables (index 1)\n        const enable = index === 0;\n        checkboxes.forEach(checkbox => {\n          checkbox.checked = enable;\n        });\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://elementor-magic-kit/./assets/src/admin/index.js?");

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