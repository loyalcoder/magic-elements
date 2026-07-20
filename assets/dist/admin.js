/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/admin.scss"
/*!*************************************!*\
  !*** ./assets/src/admin/admin.scss ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHRixNQUFNO1FBQzdCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9hZG1pbi5zY3NzPzY5ZjUiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBNYWdpYyBLaXQgQWRtaW4gSmF2YVNjcmlwdFxuICogXG4gKiBIYW5kbGVzIGFkbWluIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBNYWdpYyBLaXQgcGx1Z2luIGluY2x1ZGluZzpcbiAqIC0gU2V0dGluZ3MgZm9ybSBzdWJtaXNzaW9uIHZpYSBBSkFYXG4gKiAtIFRvYXN0IG5vdGlmaWNhdGlvbnNcbiAqIC0gQnVsayB3aWRnZXQgZW5hYmxlL2Rpc2FibGUgYWN0aW9uc1xuICpcbiAqIEBwYWNrYWdlIEVsZW1lbnRvcl9NYWdpY19LaXRcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5cbmltcG9ydCBcIi4vYWRtaW4uc2Nzc1wiO1xuXG4vKipcbiAqIERpc3BsYXkgdG9hc3Qgbm90aWZpY2F0aW9uIG1lc3NhZ2VcbiAqIFxuICogU2hvd3MgYSB0ZW1wb3Jhcnkgbm90aWZpY2F0aW9uIG1lc3NhZ2UgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyIGFjdGlvbnMuXG4gKiBBdXRvbWF0aWNhbGx5IGhpZGVzIGFmdGVyIDMgc2Vjb25kcy5cbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIHRvYXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBub3RpZmljYXRpb24gLSAnc3VjY2Vzcycgb3IgJ2Vycm9yJ1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuY29uc3Qgc2hvd1RvYXN0ID0gKG1lc3NhZ2UsIHR5cGUgPSAnc3VjY2VzcycpID0+IHtcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2FzdCcpO1xuICAgIGlmICghdG9hc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0b2FzdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgdG9hc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJyM0Q0FGNTAnIDogJyNmNDQzMzYnO1xuICAgIHRvYXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0b2FzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDMwMDApO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFkbWluIGZ1bmN0aW9uYWxpdHkgd2hlbiBET00gaXMgbG9hZGVkXG4gKiBcbiAqIFNldHMgdXAgZXZlbnQgbGlzdGVuZXJzIGZvcjpcbiAqIC0gU2V0dGluZ3MgZm9ybSBzdWJtaXNzaW9uXG4gKiAtIEJ1bGsgYWN0aW9uIGJ1dHRvbnNcbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBHZXQgc2V0dGluZ3MgZm9ybSBlbGVtZW50XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWdpYy1raXQtc2V0dGluZ3MnKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc2V0dGluZ3MgZm9ybSBzdWJtaXNzaW9uXG4gICAgICogXG4gICAgICogU3VibWl0cyBmb3JtIGRhdGEgdmlhIEFKQVggYW5kIHNob3dzIHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hZ2ljX2tpdF9ub25jZScpO1xuICAgICAgICBcbiAgICAgICAgLy8gVmVyaWZ5IG5vbmNlIGV4aXN0c1xuICAgICAgICBpZiAoIW5vbmNlKSB7XG4gICAgICAgICAgICBzaG93VG9hc3QoJ1NlY3VyaXR5IGNoZWNrIGZhaWxlZCcsICdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgcmVxdWlyZWQgYWN0aW9uIGFuZCBub25jZSB0byBmb3JtIGRhdGFcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhY3Rpb24nLCAnc2F2ZV9tYWdpY19raXRfc2V0dGluZ3MnKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdub25jZScsIG5vbmNlLnZhbHVlKTtcblxuICAgICAgICAvLyBTdWJtaXQgZm9ybSB2aWEgQUpBWCB1c2luZyB2YW5pbGxhIEpTXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHdpbmRvdy5hamF4dXJsKTtcbiAgICAgICAgXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QocmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCAnU2V0dGluZ3Mgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0KHJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgJ0Vycm9yIHNhdmluZyBzZXR0aW5ncycsICdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0KCdFcnJvciBwcm9jZXNzaW5nIHJlc3BvbnNlJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hZ2ljIEtpdCBQYXJzZSBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoJ0Vycm9yIHNhdmluZyBzZXR0aW5ncycsICdlcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hZ2ljIEtpdCBYSFIgRXJyb3I6JywgeGhyLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzaG93VG9hc3QoJ05ldHdvcmsgZXJyb3Igb2NjdXJyZWQnLCAnZXJyb3InKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hZ2ljIEtpdCBOZXR3b3JrIEVycm9yJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGJ1bGsgZW5hYmxlL2Rpc2FibGUgYWN0aW9ucyBmb3Igd2lkZ2V0c1xuICAgICAqIFxuICAgICAqIEFsbG93cyBjaGVja2luZy91bmNoZWNraW5nIGFsbCB3aWRnZXQgY2hlY2tib3hlcyBhdCBvbmNlXG4gICAgICovXG4gICAgY29uc3QgYnVsa0FjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVsay1hY3Rpb24tYnV0dG9uJyk7XG4gICAgaWYgKGJ1bGtBY3Rpb25CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICBidWxrQWN0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwibWFnaWNfZWxlbWVudHNfZW5hYmxlZF93aWRnZXRzW11cIl0nKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCBidXR0b24gZW5hYmxlcyAoaW5kZXggMCksIHNlY29uZCBkaXNhYmxlcyAoaW5kZXggMSlcbiAgICAgICAgICAgICAgICBjb25zdCBlbmFibGUgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZW5hYmxlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJtZXNzYWdlIiwidHlwZSIsInRvYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5vbmNlIiwiYXBwZW5kIiwidmFsdWUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJ3aW5kb3ciLCJhamF4dXJsIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsImJ1bGtBY3Rpb25CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJidXR0b24iLCJpbmRleCIsImNoZWNrYm94ZXMiLCJlbmFibGUiLCJjaGVja2JveCIsImNoZWNrZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==