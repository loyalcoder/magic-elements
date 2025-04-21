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
        nonce: magic_builder_data.nonce
      },
      beforeSend: function () {
        $('.preloader').html('<p>Loading conditions...</p>');
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
    console.log(current_condition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDbkNBLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQUksSUFBSSxDQUFDO1lBRTlCLElBQUksQ0FBQzFDLElBQUksQ0FBQ1ksT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQ0EsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDNEMsS0FBSyxFQUFFO2NBQ2pELE9BQU87Z0JBQ0hDLE9BQU8sRUFBRSxFQUFFO2dCQUNYQyxVQUFVLEVBQUU7a0JBQUVDLElBQUksRUFBRTtnQkFBTTtjQUM5QixDQUFDO1lBQ0w7WUFFQSxNQUFNRixPQUFPLEdBQUc3QyxJQUFJLENBQUNBLElBQUksQ0FBQzRDLEtBQUssQ0FBQ0ksR0FBRyxDQUFDQyxJQUFJLEtBQUs7Y0FDekNDLEVBQUUsRUFBRUQsSUFBSSxDQUFDRSxFQUFFO2NBQ1hDLElBQUksRUFBRUgsSUFBSSxDQUFDSTtZQUNmLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTztjQUNIUixPQUFPLEVBQUVBLE9BQU87Y0FDaEJDLFVBQVUsRUFBRTtnQkFDUkMsSUFBSSxFQUFFL0MsSUFBSSxDQUFDQSxJQUFJLENBQUM4QyxVQUFVLENBQUNDO2NBQy9CO1lBQ0osQ0FBQztVQUNMLENBQUM7VUFDRE8sS0FBSyxFQUFFO1FBQ1g7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vbWFnaWNfYnVpbGRlci5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vbWFnaWNfYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIGltcG9ydCBcIi4vbWFnaWNfYnVpbGRlci5zY3NzXCI7XG4gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbiAgICBqUXVlcnkoZnVuY3Rpb24oJCl7XG4gICAgICAgICQoJy53aWRnZXQtcm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAkKHRoaXMpLmRhdGEoJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICAkKCcjdGVtcGxhdGUtcHJldmlldy1tb2RhbCcpLmZhZGVJbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGUpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX2hlYWRlcl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkxvYWRpbmcgJyArIHRlbXBsYXRlICsgJyB0ZW1wbGF0ZSBwcmV2aWV3Li4uPC9wPicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveSBleGlzdGluZyBTZWxlY3QyIGluc3RhbmNlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyNkaXNwbGF5LW9uJykuZGF0YSgnc2VsZWN0MicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS5zZWxlY3QyKCdkZXN0cm95Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWluaXRpYWxpemUgU2VsZWN0MiB3aXRoIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaXNwbGF5LW9uJykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkaXNwbGF5IG9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHByZS1zZWxlY3RlZCB2YWx1ZXMsIHRyaWdnZXIgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnI2Rpc3BsYXktb24nKS52YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaXNwbGF5LW9uJykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgdGVtcGxhdGUgcHJldmlldy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJvZHknKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIHRlbXBsYXRlIHByZXZpZXcuPC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgbG9hZCB0aGUgdGVtcGxhdGUgcHJldmlldyBjb250ZW50IHZpYSBBSkFYXG4gICAgICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBqdXN0IHNob3cgYSBwbGFjZWhvbGRlclxuICAgICAgICAgICAvLyAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkxvYWRpbmcgJyArIHRlbXBsYXRlICsgJyB0ZW1wbGF0ZSBwcmV2aWV3Li4uPC9wPicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBoZWFkZXJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI2NyZWF0ZS1jb250ZW50LW1vZGFsJykuZmFkZUluKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLW1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjY3JlYXRlLWNvbnRlbnQtbW9kYWwnKS5mYWRlT3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDbG9zZSBtb2RhbCB3aGVuIGNsaWNraW5nIHRoZSBjbG9zZSBidXR0b24gb3Igb3V0c2lkZSB0aGUgbW9kYWxcbiAgICAgICAgJCgnLmNsb3NlLW1vZGFsLCAudGVtcGxhdGUtbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAkKCcjdGVtcGxhdGUtcHJldmlldy1tb2RhbCcpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBuZXcgY29uZGl0aW9uXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYWRkLWNvbmRpdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtYWdpY19idWlsZGVyX2RhdGEuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbWFnaWNfYnVpbGRlcl9oZWFkZXJfY29uZGl0aW9uX2Zvcm0nLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtYWdpY19idWlsZGVyX2RhdGEubm9uY2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJlbG9hZGVyJykuaHRtbCgnPHA+TG9hZGluZyBjb25kaXRpb25zLi4uPC9wPicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1sb2FkZXInKS5hcHBlbmQocmVzcG9uc2UuZGF0YS5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBTZWxlY3QyIGZvciBhbnkgbmV3IHNlbGVjdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWdyb3VwIHNlbGVjdCcpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IG9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWdyb3VwJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBjb25kaXRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmh0bWwoJycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWdyb3VwJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBjb25kaXRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3JlbW92ZS1jb25kaXRpb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUgY29uZGl0aW9uJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBuZXcgY29uZGl0aW9uIGRpc3BsYXlcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY29uZGl0aW9uLWRpc3BsYXknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2NvbmRpdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoY3VycmVudF9jb25kaXRpb24gPT0gJ3Npbmd1bGFyJykge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX3Npbmd1bGFyX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmh0bWwoJzxwPkxvYWRpbmcgb3B0aW9ucy4uLjwvcD4nKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgc2VsZWN0IGVsZW1lbnQgZm9yIHNpbmd1bGFyIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudCgpLmFwcGVuZChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG9wdGlvbnMgdG8gdGhlIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGFmdGVyIHRoZSBjdXJyZW50IGNvbmRpdGlvbiBkaXNwbGF5IHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdDIgZm9yIHRoZSBuZXcgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLXNpbmd1bGFyLWQtMScpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3Qgc2luZ3VsYXIgb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jb25kaXRpb24tbG9hZGVyJykuaHRtbCgnPHA+RXJyb3IgbG9hZGluZyBzaW5ndWxhciBvcHRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWxvYWRlcicpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgc2luZ3VsYXIgb3B0aW9ucy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwb3N0IHR5cGUgY2hhbmdlXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNvbmRpdGlvbi1zaW5ndWxhci1kLTEnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfY29uZGl0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX3NpbmdsZV9wb3N0X3R5cGVfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1hZ2ljX2J1aWxkZXJfZGF0YS5ub25jZSxcbiAgICAgICAgICAgICAgICBwb3N0X3R5cGU6IGN1cnJlbnRfY29uZGl0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnByZWxvYWRlcicpLmh0bWwoJzxwPkxvYWRpbmcgb3B0aW9ucy4uLjwvcD4nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1jb250YWluZXItZGVwLTInKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdDIgZm9yIHRoZSBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWNvbnRhaW5lci1kZXAtMiBzZWxlY3QnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcuY29uZGl0aW9uLWxvYWRlcicpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgcG9zdCB0eXBlIG9wdGlvbnMuPC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbmRpdGlvbi1sb2FkZXInKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIHBvc3QgdHlwZSBvcHRpb25zLjwvcD4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5jb25kaXRpb24tc2luZ3VsYXItZC0yJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudF9jb25kaXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRfY29uZGl0aW9uKTtcbiAgICAgICAgICAgIGxldCBwb3N0T3JUYXhvbm9teSA9ICc8ZGl2IGNsYXNzPVwiY29uZGl0aW9uLWNvbnRhaW5lci1kZXAtM1wiPkxvYWRlZDxzZWxlY3QgY2xhc3M9XCJzaW5nbGVfcG9zdF9sb2FkZXJcIiBtdWx0aXBsZT48L3NlbGVjdD48L2Rpdj4nO1xuICAgICAgICAgICAgaWYoY3VycmVudF9jb25kaXRpb24gPT0gJ3NwZWNpZmljJykge1xuICAgICAgICAgICAgICAgICQoJy5zcGFjaWYtb3gnKS5odG1sKHBvc3RPclRheG9ub215KTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdDIgZm9yIHRoZSBzaW5nbGUgcG9zdCBsb2FkZXJcbiAgICAgICAgICAgICAgICAkKCcuc2luZ2xlX3Bvc3RfbG9hZGVyJykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IHBvc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMSwgLy8gUmVxdWlyZSBhdCBsZWFzdCAxIGNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgICBhamF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnbWFnaWNfYnVpbGRlcl9zZWFyY2hfcG9zdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25jZTogbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0X3R5cGU6IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5jb25kaXRpb24taXRlbScpLmZpbmQoJy5jb25kaXRpb24tc2luZ3VsYXItZC0xJykudmFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlIHx8IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbihkYXRhLCBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MgfHwgIWRhdGEuZGF0YSB8fCAhZGF0YS5kYXRhLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHsgbW9yZTogZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLmRhdGEuaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0ucG9zdF90aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmU6IGRhdGEuZGF0YS5wYWdpbmF0aW9uLm1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJvbiIsInRlbXBsYXRlIiwiZGF0YSIsImZhZGVJbiIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwidXJsIiwibWFnaWNfYnVpbGRlcl9kYXRhIiwiYWpheF91cmwiLCJ0eXBlIiwiYWN0aW9uIiwibm9uY2UiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsInNlbGVjdDIiLCJ3aWR0aCIsInBsYWNlaG9sZGVyIiwiYWxsb3dDbGVhciIsInZhbCIsInRyaWdnZXIiLCJlcnJvciIsImRvY3VtZW50IiwiZmFkZU91dCIsImUiLCJ0YXJnZXQiLCJhcHBlbmQiLCJwYXJlbnQiLCJyZW1vdmUiLCJjdXJyZW50X2NvbmRpdGlvbiIsImN1cnJlbnRFbGVtZW50IiwicG9zdF90eXBlIiwicG9zdE9yVGF4b25vbXkiLCJtdWx0aXBsZSIsIm1pbmltdW1JbnB1dExlbmd0aCIsImRhdGFUeXBlIiwiZGVsYXkiLCJwYXJhbXMiLCJjbG9zZXN0IiwiZmluZCIsInNlYXJjaCIsInRlcm0iLCJwYWdlIiwicHJvY2Vzc1Jlc3VsdHMiLCJpdGVtcyIsInJlc3VsdHMiLCJwYWdpbmF0aW9uIiwibW9yZSIsIm1hcCIsIml0ZW0iLCJpZCIsIklEIiwidGV4dCIsInBvc3RfdGl0bGUiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=