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
          $('.condition-group select').select2({
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
    console.log('remove condition');
    $(this).parent('.form-group').remove();
  });
  // add new condition display
  $(document).on('change', '.condition-display', function () {
    let current_condition = $(this).val();
    let currentElement = $(this);
    if (current_condition == 'singular') {
      $.ajax({
        url: magic_builder_data.ajax_url,
        type: 'POST',
        data: {
          action: 'magic_builder_singular_options',
          nonce: magic_builder_data.nonce
        },
        beforeSend: function () {
          $('.preloader').html('<p>Loading options...</p>');
        },
        success: function (response) {
          if (response.success) {
            // Create a new select element for singular options
            currentElement.parent().append(response.data.html);
            // Add options to the select

            // Insert after the current condition display select

            // Initialize Select2 for the new select
            $('.condition-singular-d-1').select2({
              width: '100%',
              placeholder: 'Select singular option',
              allowClear: true
            });
          } else {
            $('.condition-loader').html('<p>Error loading singular options.</p>');
          }
        },
        error: function () {
          $('.condition-loader').html('<p>Error loading singular options.</p>');
        }
      });
    } else {
      $('.condition-container-dep-2').html('');
    }
  });
  // post type change
  $(document).on('change', '.condition-singular-d-1', function () {
    console.log($(this).val());
    let current_condition = $(this).val();
    let currentElement = $(this);
    $.ajax({
      url: magic_builder_data.ajax_url,
      type: 'POST',
      data: {
        action: 'magic_builder_single_post_type_options',
        nonce: magic_builder_data.nonce,
        post_type: current_condition
      },
      beforeSend: function () {
        $('.preloader').html('<p>Loading options...</p>');
      },
      success: function (response) {
        console.log(response);
        if (response.success) {
          // Handle the response data
          $('.condition-container-dep-2').html(response.data.html);

          // Initialize Select2 for the new content
          $('.condition-container-dep-2 select').select2({
            width: '100%',
            placeholder: 'Select option',
            allowClear: true
          });
        } else {
          $('.condition-loader').html('<p>Error loading post type options.</p>');
        }
      },
      error: function () {
        $('.condition-loader').html('<p>Error loading post type options.</p>');
      }
    });
  });
  $(document).on('change', '.condition-singular-d-2', function () {
    let current_condition = $(this).val();
    let currentElement = $(this);
    console.log($('.condition-singular-d-1').val(), 'last');
    let postOrTaxonomy = '<div class="condition-container-dep-3">Loaded<select class="single_post_loader" multiple></select></div>';
    if (current_condition == 'specific') {
      $('.spacif-ox').html(postOrTaxonomy);
      // Initialize Select2 for the single post loader
      $('.single_post_loader').select2({
        width: '100%',
        placeholder: 'Select posts',
        allowClear: true,
        multiple: true,
        minimumInputLength: 1,
        // Require at least 1 character
        ajax: {
          url: magic_builder_data.ajax_url,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              action: 'magic_builder_search_posts',
              nonce: magic_builder_data.nonce,
              post_type: currentElement.closest('.condition-item').find('.condition-singular-d-1').val(),
              search: params.term,
              page: params.page || 1
            };
          },
          processResults: function (data, params) {
            params.page = params.page || 1;
            if (!data.success || !data.data || !data.data.items) {
              return {
                results: [],
                pagination: {
                  more: false
                }
              };
            }
            const results = data.data.items.map(item => ({
              id: item.ID,
              text: item.post_title
            }));
            return {
              results: results,
              pagination: {
                more: data.data.pagination.more
              }
            };
          },
          cache: true
        }
      });
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUZzQixNQUFNLEVBQUVILE1BQU0sQ0FBQ0ksSUFBSTtjQUNuQkMsSUFBSSxFQUFFTCxNQUFNLENBQUNLLElBQUksSUFBSTtZQUN6QixDQUFDO1VBQ0wsQ0FBQztVQUNEQyxjQUFjLEVBQUUsU0FBQUEsQ0FBUzVDLElBQUksRUFBRXNDLE1BQU0sRUFBRTtZQUNuQ0EsTUFBTSxDQUFDSyxJQUFJLEdBQUdMLE1BQU0sQ0FBQ0ssSUFBSSxJQUFJLENBQUM7WUFFOUIsSUFBSSxDQUFDM0MsSUFBSSxDQUFDWSxPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDQSxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDQSxJQUFJLENBQUM2QyxLQUFLLEVBQUU7Y0FDakQsT0FBTztnQkFDSEMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1hDLFVBQVUsRUFBRTtrQkFBRUMsSUFBSSxFQUFFO2dCQUFNO2NBQzlCLENBQUM7WUFDTDtZQUVBLE1BQU1GLE9BQU8sR0FBRzlDLElBQUksQ0FBQ0EsSUFBSSxDQUFDNkMsS0FBSyxDQUFDSSxHQUFHLENBQUNDLElBQUksS0FBSztjQUN6Q0MsRUFBRSxFQUFFRCxJQUFJLENBQUNFLEVBQUU7Y0FDWEMsSUFBSSxFQUFFSCxJQUFJLENBQUNJO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPO2NBQ0hSLE9BQU8sRUFBRUEsT0FBTztjQUNoQkMsVUFBVSxFQUFFO2dCQUNSQyxJQUFJLEVBQUVoRCxJQUFJLENBQUNBLElBQUksQ0FBQytDLFVBQVUsQ0FBQ0M7Y0FDL0I7WUFDSixDQUFDO1VBQ0wsQ0FBQztVQUNETyxLQUFLLEVBQUU7UUFDWDtNQUNKLENBQUMsQ0FBQztJQUNOO0VBRUosQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9tYWdpY19idWlsZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9tYWdpY19idWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgaW1wb3J0IFwiLi9tYWdpY19idWlsZGVyLnNjc3NcIjtcbiBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuICAgIGpRdWVyeShmdW5jdGlvbigkKXtcbiAgICAgICAgJCgnLndpZGdldC1yb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICQodGhpcykuZGF0YSgndGVtcGxhdGUnKTtcbiAgICAgICAgICAgICQoJyN0ZW1wbGF0ZS1wcmV2aWV3LW1vZGFsJykuZmFkZUluKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogbWFnaWNfYnVpbGRlcl9kYXRhLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ21hZ2ljX2J1aWxkZXJfaGVhZGVyX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+TG9hZGluZyAnICsgdGVtcGxhdGUgKyAnIHRlbXBsYXRlIHByZXZpZXcuLi48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXN0cm95IGV4aXN0aW5nIFNlbGVjdDIgaW5zdGFuY2UgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnI2Rpc3BsYXktb24nKS5kYXRhKCdzZWxlY3QyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGlzcGxheS1vbicpLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlaW5pdGlhbGl6ZSBTZWxlY3QyIHdpdGggb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGRpc3BsYXkgb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgcHJlLXNlbGVjdGVkIHZhbHVlcywgdHJpZ2dlciBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcjZGlzcGxheS1vbicpLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyB0ZW1wbGF0ZSBwcmV2aWV3LjwvcD4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgdGVtcGxhdGUgcHJldmlldy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEhlcmUgeW91IHdvdWxkIHR5cGljYWxseSBsb2FkIHRoZSB0ZW1wbGF0ZSBwcmV2aWV3IGNvbnRlbnQgdmlhIEFKQVhcbiAgICAgICAgICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3Qgc2hvdyBhIHBsYWNlaG9sZGVyXG4gICAgICAgICAgIC8vICQoJy5tb2RhbC1ib2R5JykuaHRtbCgnPHA+TG9hZGluZyAnICsgdGVtcGxhdGUgKyAnIHRlbXBsYXRlIHByZXZpZXcuLi48L3A+Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjcmVhdGUgbmV3IGhlYWRlclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctaGVhZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjY3JlYXRlLWNvbnRlbnQtbW9kYWwnKS5mYWRlSW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtbW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNjcmVhdGUtY29udGVudC1tb2RhbCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENsb3NlIG1vZGFsIHdoZW4gY2xpY2tpbmcgdGhlIGNsb3NlIGJ1dHRvbiBvciBvdXRzaWRlIHRoZSBtb2RhbFxuICAgICAgICAkKCcuY2xvc2UtbW9kYWwsIC50ZW1wbGF0ZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgICQoJyN0ZW1wbGF0ZS1wcmV2aWV3LW1vZGFsJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIG5ldyBjb25kaXRpb25cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGQtY29uZGl0aW9uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX2hlYWRlcl9jb25kaXRpb25fZm9ybScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uVHlwOiAnZmlyc3RfbGFiZWwnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wcmVsb2FkZXInKS5odG1sKCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgb3BhY2l0eT1cIjAuMjVcIi8+PHBhdGggZD1cIk0xMiAyYTEwIDEwIDAgMCAxIDEwIDEwXCIgb3BhY2l0eT1cIjFcIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGZyb209XCIwIDEyIDEyXCIgdG89XCIzNjAgMTIgMTJcIiBkdXI9XCIxc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiLz48L3BhdGg+PC9zdmc+Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWxvYWRlcicpLmFwcGVuZChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdDIgZm9yIGFueSBuZXcgc2VsZWN0IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tZ3JvdXAgc2VsZWN0Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3Qgb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tZ3JvdXAnKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIGNvbmRpdGlvbnMuPC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tZ3JvdXAnKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIGNvbmRpdGlvbnMuPC9wPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZSBjb25kaXRpb24nKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuZm9ybS1ncm91cCcpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIG5ldyBjb25kaXRpb24gZGlzcGxheVxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jb25kaXRpb24tZGlzcGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfY29uZGl0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZihjdXJyZW50X2NvbmRpdGlvbiA9PSAnc2luZ3VsYXInKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogbWFnaWNfYnVpbGRlcl9kYXRhLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ21hZ2ljX2J1aWxkZXJfc2luZ3VsYXJfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnPHA+TG9hZGluZyBvcHRpb25zLi4uPC9wPicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzZWxlY3QgZWxlbWVudCBmb3Igc2luZ3VsYXIgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgb3B0aW9ucyB0byB0aGUgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgYWZ0ZXIgdGhlIGN1cnJlbnQgY29uZGl0aW9uIGRpc3BsYXkgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0MiBmb3IgdGhlIG5ldyBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tc2luZ3VsYXItZC0xJykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBzaW5ndWxhciBvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1sb2FkZXInKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIHNpbmd1bGFyIG9wdGlvbnMuPC9wPicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tbG9hZGVyJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBzaW5ndWxhciBvcHRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWNvbnRhaW5lci1kZXAtMicpLmh0bWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcG9zdCB0eXBlIGNoYW5nZVxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jb25kaXRpb24tc2luZ3VsYXItZC0xJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2NvbmRpdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtYWdpY19idWlsZGVyX2RhdGEuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbWFnaWNfYnVpbGRlcl9zaW5nbGVfcG9zdF90eXBlX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2UsXG4gICAgICAgICAgICAgICAgcG9zdF90eXBlOiBjdXJyZW50X2NvbmRpdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcmVsb2FkZXInKS5odG1sKCc8cD5Mb2FkaW5nIG9wdGlvbnMuLi48L3A+Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tY29udGFpbmVyLWRlcC0yJykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBTZWxlY3QyIGZvciB0aGUgbmV3IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1jb250YWluZXItZGVwLTIgc2VsZWN0Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3Qgb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1sb2FkZXInKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIHBvc3QgdHlwZSBvcHRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tbG9hZGVyJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBwb3N0IHR5cGUgb3B0aW9ucy48L3A+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY29uZGl0aW9uLXNpbmd1bGFyLWQtMicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfY29uZGl0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKCcuY29uZGl0aW9uLXNpbmd1bGFyLWQtMScpLnZhbCgpLCAnbGFzdCcpO1xuICAgICAgICAgICAgbGV0IHBvc3RPclRheG9ub215ID0gJzxkaXYgY2xhc3M9XCJjb25kaXRpb24tY29udGFpbmVyLWRlcC0zXCI+TG9hZGVkPHNlbGVjdCBjbGFzcz1cInNpbmdsZV9wb3N0X2xvYWRlclwiIG11bHRpcGxlPjwvc2VsZWN0PjwvZGl2Pic7XG4gICAgICAgICAgICBpZihjdXJyZW50X2NvbmRpdGlvbiA9PSAnc3BlY2lmaWMnKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNwYWNpZi1veCcpLmh0bWwocG9zdE9yVGF4b25vbXkpO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0MiBmb3IgdGhlIHNpbmdsZSBwb3N0IGxvYWRlclxuICAgICAgICAgICAgICAgICQoJy5zaW5nbGVfcG9zdF9sb2FkZXInKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgcG9zdHMnLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAxLCAvLyBSZXF1aXJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbWFnaWNfYnVpbGRlcl9kYXRhLmFqYXhfdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX3NlYXJjaF9wb3N0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfdHlwZTogY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmNvbmRpdGlvbi1pdGVtJykuZmluZCgnLmNvbmRpdGlvbi1zaW5ndWxhci1kLTEnKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXMudGVybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uKGRhdGEsIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wYWdlID0gcGFyYW1zLnBhZ2UgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuc3VjY2VzcyB8fCAhZGF0YS5kYXRhIHx8ICFkYXRhLmRhdGEuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogeyBtb3JlOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5wb3N0X3RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogcmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZTogZGF0YS5kYXRhLnBhZ2luYXRpb24ubW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSk7XG4iXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsIm9uIiwidGVtcGxhdGUiLCJkYXRhIiwiZmFkZUluIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ1cmwiLCJtYWdpY19idWlsZGVyX2RhdGEiLCJhamF4X3VybCIsInR5cGUiLCJhY3Rpb24iLCJub25jZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJodG1sIiwic2VsZWN0MiIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwidmFsIiwidHJpZ2dlciIsImVycm9yIiwiZG9jdW1lbnQiLCJmYWRlT3V0IiwiZSIsInRhcmdldCIsImNvbmRpdGlvblR5cCIsImFwcGVuZCIsInBhcmVudCIsInJlbW92ZSIsImN1cnJlbnRfY29uZGl0aW9uIiwiY3VycmVudEVsZW1lbnQiLCJwb3N0X3R5cGUiLCJwb3N0T3JUYXhvbm9teSIsIm11bHRpcGxlIiwibWluaW11bUlucHV0TGVuZ3RoIiwiZGF0YVR5cGUiLCJkZWxheSIsInBhcmFtcyIsImNsb3Nlc3QiLCJmaW5kIiwic2VhcmNoIiwidGVybSIsInBhZ2UiLCJwcm9jZXNzUmVzdWx0cyIsIml0ZW1zIiwicmVzdWx0cyIsInBhZ2luYXRpb24iLCJtb3JlIiwibWFwIiwiaXRlbSIsImlkIiwiSUQiLCJ0ZXh0IiwicG9zdF90aXRsZSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==