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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMwQixRQUFRLENBQUMsQ0FBQ3hCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVc7SUFDL0NGLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDMkIsT0FBTyxDQUFDLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTNCLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDRSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMwQixDQUFDLEVBQUU7SUFDdkQsSUFBSUEsQ0FBQyxDQUFDQyxNQUFNLEtBQUssSUFBSSxFQUFFO01BQ25CN0IsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMyQixPQUFPLENBQUMsQ0FBQztJQUMxQztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vbWFnaWNfYnVpbGRlci5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vbWFnaWNfYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIGltcG9ydCBcIi4vbWFnaWNfYnVpbGRlci5zY3NzXCI7XG4gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbiAgICBqUXVlcnkoZnVuY3Rpb24oJCl7XG4gICAgICAgICQoJy53aWRnZXQtcm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSAkKHRoaXMpLmRhdGEoJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICAkKCcjdGVtcGxhdGUtcHJldmlldy1tb2RhbCcpLmZhZGVJbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGUpO1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IG1hZ2ljX2J1aWxkZXJfZGF0YS5hamF4X3VybCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWdpY19idWlsZGVyX2hlYWRlcl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogbWFnaWNfYnVpbGRlcl9kYXRhLm5vbmNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkxvYWRpbmcgJyArIHRlbXBsYXRlICsgJyB0ZW1wbGF0ZSBwcmV2aWV3Li4uPC9wPicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveSBleGlzdGluZyBTZWxlY3QyIGluc3RhbmNlIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyNkaXNwbGF5LW9uJykuZGF0YSgnc2VsZWN0MicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2Rpc3BsYXktb24nKS5zZWxlY3QyKCdkZXN0cm95Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWluaXRpYWxpemUgU2VsZWN0MiB3aXRoIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaXNwbGF5LW9uJykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkaXNwbGF5IG9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHByZS1zZWxlY3RlZCB2YWx1ZXMsIHRyaWdnZXIgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnI2Rpc3BsYXktb24nKS52YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaXNwbGF5LW9uJykudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkVycm9yIGxvYWRpbmcgdGVtcGxhdGUgcHJldmlldy48L3A+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJvZHknKS5odG1sKCc8cD5FcnJvciBsb2FkaW5nIHRlbXBsYXRlIHByZXZpZXcuPC9wPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgbG9hZCB0aGUgdGVtcGxhdGUgcHJldmlldyBjb250ZW50IHZpYSBBSkFYXG4gICAgICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBqdXN0IHNob3cgYSBwbGFjZWhvbGRlclxuICAgICAgICAgICAvLyAkKCcubW9kYWwtYm9keScpLmh0bWwoJzxwPkxvYWRpbmcgJyArIHRlbXBsYXRlICsgJyB0ZW1wbGF0ZSBwcmV2aWV3Li4uPC9wPicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBoZWFkZXJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LWhlYWRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI2NyZWF0ZS1jb250ZW50LW1vZGFsJykuZmFkZUluKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLW1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjY3JlYXRlLWNvbnRlbnQtbW9kYWwnKS5mYWRlT3V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDbG9zZSBtb2RhbCB3aGVuIGNsaWNraW5nIHRoZSBjbG9zZSBidXR0b24gb3Igb3V0c2lkZSB0aGUgbW9kYWxcbiAgICAgICAgJCgnLmNsb3NlLW1vZGFsLCAudGVtcGxhdGUtbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAkKCcjdGVtcGxhdGUtcHJldmlldy1tb2RhbCcpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4iXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsIm9uIiwidGVtcGxhdGUiLCJkYXRhIiwiZmFkZUluIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJ1cmwiLCJtYWdpY19idWlsZGVyX2RhdGEiLCJhamF4X3VybCIsInR5cGUiLCJhY3Rpb24iLCJub25jZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJodG1sIiwic2VsZWN0MiIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJhbGxvd0NsZWFyIiwidmFsIiwidHJpZ2dlciIsImVycm9yIiwiZG9jdW1lbnQiLCJmYWRlT3V0IiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=