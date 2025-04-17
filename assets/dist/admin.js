/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/admin.scss":
/*!*************************************!*\
  !*** ./assets/src/admin/admin.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./assets/src/admin/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.scss */ "./assets/src/admin/admin.scss");
/**
 * Magic Kit Admin JavaScript
 * 
 * Handles admin functionality for the Magic Kit plugin including:
 * - Settings form submission via AJAX
 * - Toast notifications
 * - Bulk widget enable/disable actions
 *
 * @package Elementor_Magic_Kit
 * @since 1.0.0
 */



/**
 * Display toast notification message
 * 
 * Shows a temporary notification message to provide feedback to user actions.
 * Automatically hides after 3 seconds.
 *
 * @since 1.0.0
 * @param {string} message The message to display in the toast
 * @param {string} type The type of notification - 'success' or 'error'
 * @return {void}
 */
const showToast = (message, type = 'success') => {
  const toast = document.getElementById('settings-toast');
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
};

/**
 * Initialize admin functionality when DOM is loaded
 * 
 * Sets up event listeners for:
 * - Settings form submission
 * - Bulk action buttons
 *
 * @since 1.0.0
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get settings form element
  const form = document.getElementById('magic-kit-settings');
  if (!form) {
    return;
  }

  /**
   * Handle settings form submission
   * 
   * Submits form data via AJAX and shows success/error message
   */
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const nonce = document.getElementById('magic_kit_nonce');

    // Verify nonce exists
    if (!nonce) {
      showToast('Security check failed', 'error');
      return;
    }

    // Add required action and nonce to form data
    formData.append('action', 'save_magic_kit_settings');
    formData.append('nonce', nonce.value);

    // Submit form via AJAX using vanilla JS
    const xhr = new XMLHttpRequest();
    xhr.open('POST', window.ajaxurl);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          if (response && response.success) {
            showToast(response.data?.message || 'Settings saved successfully!');
          } else {
            showToast(response.data?.message || 'Error saving settings', 'error');
          }
        } catch (error) {
          showToast('Error processing response', 'error');
          console.error('Magic Kit Parse Error:', error);
        }
      } else {
        showToast('Error saving settings', 'error');
        console.error('Magic Kit XHR Error:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      showToast('Network error occurred', 'error');
      console.error('Magic Kit Network Error');
    };
    xhr.send(formData);
  });

  /**
   * Handle bulk enable/disable actions for widgets
   * 
   * Allows checking/unchecking all widget checkboxes at once
   */
  const bulkActionButtons = document.querySelectorAll('.bulk-action-button');
  if (bulkActionButtons.length) {
    bulkActionButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic_elements_enabled_widgets[]"]');
        // First button enables (index 0), second disables (index 1)
        const enable = index === 0;
        checkboxes.forEach(checkbox => {
          checkbox.checked = enable;
        });
      });
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYWRtaW4uc2Nzcz82OWY1Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogTWFnaWMgS2l0IEFkbWluIEphdmFTY3JpcHRcclxuICogXHJcbiAqIEhhbmRsZXMgYWRtaW4gZnVuY3Rpb25hbGl0eSBmb3IgdGhlIE1hZ2ljIEtpdCBwbHVnaW4gaW5jbHVkaW5nOlxyXG4gKiAtIFNldHRpbmdzIGZvcm0gc3VibWlzc2lvbiB2aWEgQUpBWFxyXG4gKiAtIFRvYXN0IG5vdGlmaWNhdGlvbnNcclxuICogLSBCdWxrIHdpZGdldCBlbmFibGUvZGlzYWJsZSBhY3Rpb25zXHJcbiAqXHJcbiAqIEBwYWNrYWdlIEVsZW1lbnRvcl9NYWdpY19LaXRcclxuICogQHNpbmNlIDEuMC4wXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi9hZG1pbi5zY3NzXCI7XHJcblxyXG4vKipcclxuICogRGlzcGxheSB0b2FzdCBub3RpZmljYXRpb24gbWVzc2FnZVxyXG4gKiBcclxuICogU2hvd3MgYSB0ZW1wb3Jhcnkgbm90aWZpY2F0aW9uIG1lc3NhZ2UgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyIGFjdGlvbnMuXHJcbiAqIEF1dG9tYXRpY2FsbHkgaGlkZXMgYWZ0ZXIgMyBzZWNvbmRzLlxyXG4gKlxyXG4gKiBAc2luY2UgMS4wLjBcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgdG9hc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2Ygbm90aWZpY2F0aW9uIC0gJ3N1Y2Nlc3MnIG9yICdlcnJvcidcclxuICogQHJldHVybiB7dm9pZH1cclxuICovXHJcbmNvbnN0IHNob3dUb2FzdCA9IChtZXNzYWdlLCB0eXBlID0gJ3N1Y2Nlc3MnKSA9PiB7XHJcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2FzdCcpO1xyXG4gICAgaWYgKCF0b2FzdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9hc3QudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgdG9hc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyM0Q0FGNTAnIDogJyNmNDQzMzYnO1xyXG4gICAgdG9hc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LCAzMDAwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGFkbWluIGZ1bmN0aW9uYWxpdHkgd2hlbiBET00gaXMgbG9hZGVkXHJcbiAqIFxyXG4gKiBTZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3I6XHJcbiAqIC0gU2V0dGluZ3MgZm9ybSBzdWJtaXNzaW9uXHJcbiAqIC0gQnVsayBhY3Rpb24gYnV0dG9uc1xyXG4gKlxyXG4gKiBAc2luY2UgMS4wLjBcclxuICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAvLyBHZXQgc2V0dGluZ3MgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hZ2ljLWtpdC1zZXR0aW5ncycpO1xyXG4gICAgaWYgKCFmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBzZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb25cclxuICAgICAqIFxyXG4gICAgICogU3VibWl0cyBmb3JtIGRhdGEgdmlhIEFKQVggYW5kIHNob3dzIHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IG5vbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hZ2ljX2tpdF9ub25jZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmeSBub25jZSBleGlzdHNcclxuICAgICAgICBpZiAoIW5vbmNlKSB7XHJcbiAgICAgICAgICAgIHNob3dUb2FzdCgnU2VjdXJpdHkgY2hlY2sgZmFpbGVkJywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIHJlcXVpcmVkIGFjdGlvbiBhbmQgbm9uY2UgdG8gZm9ybSBkYXRhXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhY3Rpb24nLCAnc2F2ZV9tYWdpY19raXRfc2V0dGluZ3MnKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25vbmNlJywgbm9uY2UudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBTdWJtaXQgZm9ybSB2aWEgQUpBWCB1c2luZyB2YW5pbGxhIEpTXHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB3aW5kb3cuYWpheHVybCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QocmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCAnU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdChyZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8ICdFcnJvciBzYXZpbmcgc2V0dGluZ3MnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdCgnRXJyb3IgcHJvY2Vzc2luZyByZXNwb25zZScsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hZ2ljIEtpdCBQYXJzZSBFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoJ0Vycm9yIHNhdmluZyBzZXR0aW5ncycsICdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IFhIUiBFcnJvcjonLCB4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93VG9hc3QoJ05ldHdvcmsgZXJyb3Igb2NjdXJyZWQnLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IE5ldHdvcmsgRXJyb3InKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBidWxrIGVuYWJsZS9kaXNhYmxlIGFjdGlvbnMgZm9yIHdpZGdldHNcclxuICAgICAqIFxyXG4gICAgICogQWxsb3dzIGNoZWNraW5nL3VuY2hlY2tpbmcgYWxsIHdpZGdldCBjaGVja2JveGVzIGF0IG9uY2VcclxuICAgICAqL1xyXG4gICAgY29uc3QgYnVsa0FjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVsay1hY3Rpb24tYnV0dG9uJyk7XHJcbiAgICBpZiAoYnVsa0FjdGlvbkJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgYnVsa0FjdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCJtYWdpY19lbGVtZW50c19lbmFibGVkX3dpZGdldHNbXVwiXScpO1xyXG4gICAgICAgICAgICAgICAgLy8gRmlyc3QgYnV0dG9uIGVuYWJsZXMgKGluZGV4IDApLCBzZWNvbmQgZGlzYWJsZXMgKGluZGV4IDEpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmFibGUgPSBpbmRleCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZW5hYmxlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiXSwibmFtZXMiOlsic2hvd1RvYXN0IiwibWVzc2FnZSIsInR5cGUiLCJ0b2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJub25jZSIsImFwcGVuZCIsInZhbHVlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwid2luZG93IiwiYWpheHVybCIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNlbmQiLCJidWxrQWN0aW9uQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW5kZXgiLCJjaGVja2JveGVzIiwiZW5hYmxlIiwiY2hlY2tib3giLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==