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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYWRtaW4uc2Nzcz82OWY1Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIE1hZ2ljIEtpdCBBZG1pbiBKYXZhU2NyaXB0XG4gKiBcbiAqIEhhbmRsZXMgYWRtaW4gZnVuY3Rpb25hbGl0eSBmb3IgdGhlIE1hZ2ljIEtpdCBwbHVnaW4gaW5jbHVkaW5nOlxuICogLSBTZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb24gdmlhIEFKQVhcbiAqIC0gVG9hc3Qgbm90aWZpY2F0aW9uc1xuICogLSBCdWxrIHdpZGdldCBlbmFibGUvZGlzYWJsZSBhY3Rpb25zXG4gKlxuICogQHBhY2thZ2UgRWxlbWVudG9yX01hZ2ljX0tpdFxuICogQHNpbmNlIDEuMC4wXG4gKi9cblxuaW1wb3J0IFwiLi9hZG1pbi5zY3NzXCI7XG5cbi8qKlxuICogRGlzcGxheSB0b2FzdCBub3RpZmljYXRpb24gbWVzc2FnZVxuICogXG4gKiBTaG93cyBhIHRlbXBvcmFyeSBub3RpZmljYXRpb24gbWVzc2FnZSB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXIgYWN0aW9ucy5cbiAqIEF1dG9tYXRpY2FsbHkgaGlkZXMgYWZ0ZXIgMyBzZWNvbmRzLlxuICpcbiAqIEBzaW5jZSAxLjAuMFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgdG9hc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbiAtICdzdWNjZXNzJyBvciAnZXJyb3InXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5jb25zdCBzaG93VG9hc3QgPSAobWVzc2FnZSwgdHlwZSA9ICdzdWNjZXNzJykgPT4ge1xuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvYXN0Jyk7XG4gICAgaWYgKCF0b2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRvYXN0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB0b2FzdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0eXBlID09PSAnc3VjY2VzcycgPyAnIzRDQUY1MCcgOiAnI2Y0NDMzNic7XG4gICAgdG9hc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRvYXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMzAwMCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYWRtaW4gZnVuY3Rpb25hbGl0eSB3aGVuIERPTSBpcyBsb2FkZWRcbiAqIFxuICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yOlxuICogLSBTZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb25cbiAqIC0gQnVsayBhY3Rpb24gYnV0dG9uc1xuICpcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIEdldCBzZXR0aW5ncyBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hZ2ljLWtpdC1zZXR0aW5ncycpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBzZXR0aW5ncyBmb3JtIHN1Ym1pc3Npb25cbiAgICAgKiBcbiAgICAgKiBTdWJtaXRzIGZvcm0gZGF0YSB2aWEgQUpBWCBhbmQgc2hvd3Mgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICovXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFnaWNfa2l0X25vbmNlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBWZXJpZnkgbm9uY2UgZXhpc3RzXG4gICAgICAgIGlmICghbm9uY2UpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdCgnU2VjdXJpdHkgY2hlY2sgZmFpbGVkJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCByZXF1aXJlZCBhY3Rpb24gYW5kIG5vbmNlIHRvIGZvcm0gZGF0YVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjdGlvbicsICdzYXZlX21hZ2ljX2tpdF9zZXR0aW5ncycpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25vbmNlJywgbm9uY2UudmFsdWUpO1xuXG4gICAgICAgIC8vIFN1Ym1pdCBmb3JtIHZpYSBBSkFYIHVzaW5nIHZhbmlsbGEgSlNcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgd2luZG93LmFqYXh1cmwpO1xuICAgICAgICBcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdChyZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8ICdTZXR0aW5ncyBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QocmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCAnRXJyb3Igc2F2aW5nIHNldHRpbmdzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QoJ0Vycm9yIHByb2Nlc3NpbmcgcmVzcG9uc2UnLCAnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IFBhcnNlIEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdCgnRXJyb3Igc2F2aW5nIHNldHRpbmdzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IFhIUiBFcnJvcjonLCB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdCgnTmV0d29yayBlcnJvciBvY2N1cnJlZCcsICdlcnJvcicpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFnaWMgS2l0IE5ldHdvcmsgRXJyb3InKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYnVsayBlbmFibGUvZGlzYWJsZSBhY3Rpb25zIGZvciB3aWRnZXRzXG4gICAgICogXG4gICAgICogQWxsb3dzIGNoZWNraW5nL3VuY2hlY2tpbmcgYWxsIHdpZGdldCBjaGVja2JveGVzIGF0IG9uY2VcbiAgICAgKi9cbiAgICBjb25zdCBidWxrQWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWxrLWFjdGlvbi1idXR0b24nKTtcbiAgICBpZiAoYnVsa0FjdGlvbkJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgIGJ1bGtBY3Rpb25CdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCJtYWdpY19lbGVtZW50c19lbmFibGVkX3dpZGdldHNbXVwiXScpO1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IGJ1dHRvbiBlbmFibGVzIChpbmRleCAwKSwgc2Vjb25kIGRpc2FibGVzIChpbmRleCAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IGVuYWJsZSA9IGluZGV4ID09PSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBlbmFibGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbInNob3dUb2FzdCIsIm1lc3NhZ2UiLCJ0eXBlIiwidG9hc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibm9uY2UiLCJhcHBlbmQiLCJ2YWx1ZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIndpbmRvdyIsImFqYXh1cmwiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwiYnVsa0FjdGlvbkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4IiwiY2hlY2tib3hlcyIsImVuYWJsZSIsImNoZWNrYm94IiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=