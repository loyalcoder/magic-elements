/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/admin/magic_builder.scss":
/*!*********************************************!*\
  !*** ./assets/src/admin/magic_builder.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./assets/src/admin/magic_builder.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _magic_builder_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magic_builder.scss */ "./assets/src/admin/magic_builder.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jQuery(function ($) {
  $('.widget-row').on('click', function () {
    var template = $(this).data('template');
    $('#template-preview-modal').fadeIn();
    console.log(template);
    $.ajax({
      url: magic_builder_data.ajax_url,
      type: 'POST',
      data: {
        action: 'magic_builder_header_list',
        template: template,
        nonce: magic_builder_data.nonce
      },
      beforeSend: function () {
        //$('.modal-body').html('<p>Loading ' + template + ' template preview...</p>');
      },
      success: function (response) {
        if (response.success) {
          $('.modal-body').html(response.data.html);
          // Destroy existing Select2 instance if it exists
          if ($('#display-on').data('select2')) {
            $('#display-on').select2('destroy');
          }
          // Reinitialize Select2 with options
          $('#display-on').select2({
            width: '100%',
            placeholder: 'Select display options',
            allowClear: true
          });
          // If there are pre-selected values, trigger change
          if ($('#display-on').val()) {
            $('#display-on').trigger('change');
          }
        } else {
          $('.modal-body').html('<p>Error loading template preview.</p>');
        }
      },
      error: function () {
        $('.modal-body').html('<p>Error loading template preview.</p>');
      }
    });

    // Here you would typically load the template preview content via AJAX
    // For now, we'll just show a placeholder
    // $('.modal-body').html('<p>Loading ' + template + ' template preview...</p>');
  });
  // create new header
  $(document).on('click', '.add-new-header', function () {
    $('#create-content-modal').fadeIn();
  });
  $(document).on('click', '.close-modal', function () {
    $('#create-content-modal').fadeOut();
  });
  // Close modal when clicking the close button or outside the modal
  $('.close-modal, .template-modal').on('click', function (e) {
    if (e.target === this) {
      $('#template-preview-modal').fadeOut();
    }
  });
  // add new condition
  $(document).on('click', '#add-condition', function () {
    $.ajax({
      url: magic_builder_data.ajax_url,
      type: 'POST',
      data: {
        action: 'magic_builder_header_condition_form',
        conditionTyp: 'first_label',
        nonce: magic_builder_data.nonce
      },
      beforeSend: function () {
        $('.preloader').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loading-spinner"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="1"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>');
      },
      success: function (response) {
        if (response.success) {
          $('.condition-loader').append(response.data.html);
          // Initialize Select2 for any new select elements
          $('.mc-condition-type').select2({
            width: '100%',
            placeholder: 'Select options',
            allowClear: true
          });
        } else {
          $('.condition-group').html('<p>Error loading conditions.</p>');
        }
        $('.preloader').html('');
      },
      error: function () {
        $('.condition-group').html('<p>Error loading conditions.</p>');
      }
    });
  });
  $(document).on('click', '#remove-condition', function () {
    $(this).parent('.form-group').remove();
  });
  // on submit form
  $(document).on('submit', '#create-content-form', function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      url: magic_builder_data.ajax_url,
      type: 'POST',
      data: formData + '&action=magic_builder_create_content&nonce=' + magic_builder_data.nonce,
      beforeSend: function () {
        $('.preloader').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loading-spinner"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="1"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>');
      },
      success: function (response) {
        console.log(response.data, 'farid');
        if (response.success) {
          console.log(response.data);
          $('.me-show-error').html(response.data.edit_url);
          //window.location.reload();
        } else {
          $('.preloader').html('<p class="error">Error creating content.</p>');
        }
      },
      error: function () {
        $('.preloader').html('<p class="error">Error creating content.</p>');
      }
    });
    // console.log(formData);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2tCLElBQUksQ0FBQyxvYkFBb2IsQ0FBQztNQUM5YyxDQUFDO01BQ0RGLE9BQU8sRUFBRSxTQUFBQSxDQUFTQyxRQUFRLEVBQUU7UUFDeEJYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxRQUFRLENBQUNiLElBQUksRUFBRSxPQUFPLENBQUM7UUFDbkMsSUFBSWEsUUFBUSxDQUFDRCxPQUFPLEVBQUU7VUFDbEJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxRQUFRLENBQUNiLElBQUksQ0FBQztVQUMxQkosQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNrQixJQUFJLENBQUNELFFBQVEsQ0FBQ2IsSUFBSSxDQUFDaUMsUUFBUSxDQUFDO1VBQ2hEO1FBQ0osQ0FBQyxNQUFNO1VBQ0hyQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNrQixJQUFJLENBQUMsOENBQThDLENBQUM7UUFDeEU7TUFDSixDQUFDO01BQ0RPLEtBQUssRUFBRSxTQUFBQSxDQUFBLEVBQVc7UUFDZHpCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2tCLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztNQUN4RTtJQUNKLENBQUMsQ0FBQztJQUNIO0VBQ0gsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9tYWdpY19idWlsZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9tYWdpY19idWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgaW1wb3J0IFwiLi9tYWdpY19idWlsZGVyLnNjc3NcIjtcbiBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuICAgIGpRdWVyeShmdW5jdGlvbigkKXtcbiAgICAgICAgJCgnLndpZGdldC1yb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICQodGhpcykuZGF0YSgndGVtcGxhdGUnKTtcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZS1wcmV2aWV3LW1vZGFsJykuZmFkZUluKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogbWFnaWNfYnVpbGRlcl9kYXRhLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ21hZ2ljX2J1aWxkZXJfaGVhZGVyX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+TG9hZGluZyAnICsgdGVtcGxhdGUgKyAnIHRlbXBsYXRlIHByZXZpZXcuLi48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXN0cm95IGV4aXN0aW5nIFNlbGVjdDIgaW5zdGFuY2UgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnI2Rpc3BsYXktb24nKS5kYXRhKCdzZWxlY3QyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGlzcGxheS1vbicpLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlaW5pdGlhbGl6ZSBTZWxlY3QyIHdpdGggb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRpc3BsYXkgb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgcHJlLXNlbGVjdGVkIHZhbHVlcywgdHJpZ2dlciBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcjZGlzcGxheS1vbicpLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyB0ZW1wbGF0ZSBwcmV2aWV3LjwvcD4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgdGVtcGxhdGUgcHJldmlldy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEhlcmUgeW91IHdvdWxkIHR5cGljYWxseSBsb2FkIHRoZSB0ZW1wbGF0ZSBwcmV2aWV3IGNvbnRlbnQgdmlhIEFKQVhcbiAgICAgICAgICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3Qgc2hvdyBhIHBsYWNlaG9sZGVyXG4gICAgICAgICAgIC8vICQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+TG9hZGluZyAnICsgdGVtcGxhdGUgKyAnIHRlbXBsYXRlIHByZXZpZXcuLi48L3A+Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGhlYWRlclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctaGVhZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjY3JlYXRlLWNvbnRlbnQtbW9kYWwnKS5mYWRlSW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtbW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNjcmVhdGUtY29udGVudC1tb2RhbCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENsb3NlIG1vZGFsIHdoZW4gY2xpY2tpbmcgdGhlIGNsb3NlIGJ1dHRvbiBvciBvdXRzaWRlIHRoZSBtb2RhbFxuICAgICAgICAkKCcuY2xvc2UtbW9kYWwsIC50ZW1wbGF0ZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgICQoJyN0ZW1wbGF0ZS1wcmV2aWV3LW1vZGFsJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIG5ldyBjb25kaXRpb25cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGQtY29uZGl0aW9uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogbWFnaWNfYnVpbGRlcl9kYXRhLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ21hZ2ljX2J1aWxkZXJfaGVhZGVyX2NvbmRpdGlvbl9mb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVHlwOiAnZmlyc3RfbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIG9wYWNpdHk9XCIwLjI1XCIvPjxwYXRoIGQ9XCJNMTIgMmExMCAxMCAwIDAgMSAxMCAxMFwiIG9wYWNpdHk9XCIxXCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCAxMiAxMlwiIHRvPVwiMzYwIDEyIDEyXCIgZHVyPVwiMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9wYXRoPjwvc3ZnPicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tbG9hZGVyJykuYXBwZW5kKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdDIgZm9yIGFueSBuZXcgc2VsZWN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWMtY29uZGl0aW9uLXR5cGUnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IG9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1ncm91cCcpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgY29uZGl0aW9ucy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWdyb3VwJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBjb25kaXRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5mb3JtLWdyb3VwJykucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBvbiBzdWJtaXQgZm9ybVxuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgJyNjcmVhdGUtY29udGVudC1mb3JtJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBtYWdpY19idWlsZGVyX2RhdGEuYWpheF91cmwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhICsgJyZhY3Rpb249bWFnaWNfYnVpbGRlcl9jcmVhdGVfY29udGVudCZub25jZT0nICsgbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlLFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIG9wYWNpdHk9XCIwLjI1XCIvPjxwYXRoIGQ9XCJNMTIgMmExMCAxMCAwIDAgMSAxMCAxMFwiIG9wYWNpdHk9XCIxXCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIHR5cGU9XCJyb3RhdGVcIiBmcm9tPVwiMCAxMiAxMlwiIHRvPVwiMzYwIDEyIDEyXCIgZHVyPVwiMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+PC9wYXRoPjwvc3ZnPicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSwgJ2ZhcmlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tZS1zaG93LWVycm9yJykuaHRtbChyZXNwb25zZS5kYXRhLmVkaXRfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmh0bWwoJzxwIGNsYXNzPVwiZXJyb3JcIj5FcnJvciBjcmVhdGluZyBjb250ZW50LjwvcD4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnPHAgY2xhc3M9XCJlcnJvclwiPkVycm9yIGNyZWF0aW5nIGNvbnRlbnQuPC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4iXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsIm9uIiwidGVtcGxhdGUiLCJkYXRhIiwiZmFkZUluIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ1cmwiLCJtYWdpY19idWlsZGVyX2RhdGEiLCJhamF4X3VybCIsInR5cGUiLCJhY3Rpb24iLCJub25jZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJodG1sIiwic2VsZWN0MiIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwidmFsIiwidHJpZ2dlciIsImVycm9yIiwiZG9jdW1lbnQiLCJmYWRlT3V0IiwiZSIsInRhcmdldCIsImNvbmRpdGlvblR5cCIsImFwcGVuZCIsInBhcmVudCIsInJlbW92ZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJlZGl0X3VybCJdLCJzb3VyY2VSb290IjoiIn0=