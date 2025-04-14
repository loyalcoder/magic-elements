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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9hZG1pbi5zY3NzPzY5ZjUiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogTWFnaWMgS2l0IEFkbWluIEphdmFTY3JpcHRcbiAqIFxuICogSGFuZGxlcyBhZG1pbiBmdW5jdGlvbmFsaXR5IGZvciB0aGUgTWFnaWMgS2l0IHBsdWdpbiBpbmNsdWRpbmc6XG4gKiAtIFNldHRpbmdzIGZvcm0gc3VibWlzc2lvbiB2aWEgQUpBWFxuICogLSBUb2FzdCBub3RpZmljYXRpb25zXG4gKiAtIEJ1bGsgd2lkZ2V0IGVuYWJsZS9kaXNhYmxlIGFjdGlvbnNcbiAqXG4gKiBAcGFja2FnZSBFbGVtZW50b3JfTWFnaWNfS2l0XG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuXG5pbXBvcnQgXCIuL2FkbWluLnNjc3NcIjtcbi8qKlxuICogRGlzcGxheSB0b2FzdCBub3RpZmljYXRpb24gbWVzc2FnZVxuICogXG4gKiBTaG93cyBhIHRlbXBvcmFyeSBub3RpZmljYXRpb24gbWVzc2FnZSB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXIgYWN0aW9ucy5cbiAqIEF1dG9tYXRpY2FsbHkgaGlkZXMgYWZ0ZXIgMyBzZWNvbmRzLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgdG9hc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbiAtICdzdWNjZXNzJyBvciAnZXJyb3InXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCBzaG93VG9hc3QgPSAobWVzc2FnZSwgdHlwZSA9ICdzdWNjZXNzJykgPT4ge1xuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvYXN0Jyk7XG4gICAgaWYgKCF0b2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRvYXN0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB0b2FzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0eXBlID09PSAnc3VjY2VzcycgPyAnIzRDQUY1MCcgOiAnI2Y0NDMzNic7XG4gICAgdG9hc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRvYXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMzAwMCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYWRtaW4gZnVuY3Rpb25hbGl0eSB3aGVuIERPTSBpcyBsb2FkZWRcbiAqIFxuICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yOlxuICogLSBTZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb25cbiAqIC0gQnVsayBhY3Rpb24gYnV0dG9uc1xuICpcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIEdldCBzZXR0aW5ncyBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hZ2ljLWtpdC1zZXR0aW5ncycpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBzZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb25cbiAgICAgKiBcbiAgICAgKiBTdWJtaXRzIGZvcm0gZGF0YSB2aWEgQUpBWCBhbmQgc2hvd3Mgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFnaWNfa2l0X25vbmNlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBWZXJpZnkgbm9uY2UgZXhpc3RzXG4gICAgICAgIGlmICghbm9uY2UpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdCgnU2VjdXJpdHkgY2hlY2sgZmFpbGVkJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCByZXF1aXJlZCBhY3Rpb24gYW5kIG5vbmNlIHRvIGZvcm0gZGF0YVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjdGlvbicsICdzYXZlX21hZ2ljX2tpdF9zZXR0aW5ncycpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25vbmNlJywgbm9uY2UudmFsdWUpO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBmb3JtIHZpYSBBSkFYIHVzaW5nIHZhbmlsbGEgSlNcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgd2luZG93LmFqYXh1cmwpO1xuICAgICAgICBcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdChyZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8ICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QocmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCAnRXJyb3Igc2F2aW5nIHNldHRpbmdzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QoJ0Vycm9yIHByb2Nlc3NpbmcgcmVzcG9uc2UnLCAnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IFBhcnNlIEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdCgnRXJyb3Igc2F2aW5nIHNldHRpbmdzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IFhIUiBFcnJvcjonLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdCgnTmV0d29yayBlcnJvciBvY2N1cnJlZCcsICdlcnJvcicpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IE5ldHdvcmsgRXJyb3InKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYnVsayBlbmFibGUvZGlzYWJsZSBhY3Rpb25zIGZvciB3aWRnZXRzXG4gICAgICogXG4gICAgICogQWxsb3dzIGNoZWNraW5nL3VuY2hlY2tpbmcgYWxsIHdpZGdldCBjaGVja2JveGVzIGF0IG9uY2VcbiAgICAgKi9cbiAgICBjb25zdCBidWxrQWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWxrLWFjdGlvbi1idXR0b24nKTtcbiAgICBpZiAoYnVsa0FjdGlvbkJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgIGJ1bGtBY3Rpb25CdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCJtYWdpY19lbGVtZW50c19lbmFibGVkX3dpZGdldHNbXVwiXScpO1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGJ1dHRvbiBlbmFibGVzIChpbmRleCAwKSwgc2Vjb25kIGRpc2FibGVzIChpbmRleCAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IGVuYWJsZSA9IGluZGV4ID09PSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBlbmFibGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbInNob3dUb2FzdCIsIm1lc3NhZ2UiLCJ0eXBlIiwidG9hc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibm9uY2UiLCJhcHBlbmQiLCJ2YWx1ZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIndpbmRvdyIsImFqYXh1cmwiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwiYnVsa0FjdGlvbkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4IiwiY2hlY2tib3hlcyIsImVuYWJsZSIsImNoZWNrYm94IiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=