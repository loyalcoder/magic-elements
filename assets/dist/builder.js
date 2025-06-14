/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./assets/src/admin/builder/builder.scss ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*********************************************!*\
  !*** ./assets/src/admin/builder/builder.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jQuery(function () {
  // select2
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().siblings().find('a').removeClass('active');
    let popupTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('title');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-header h2').text(popupTitle);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-popup').fadeIn();
    let dataType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a.active').data('type');
    // load preview
    let data = {
      action: 'me_load_preview_data',
      nonce: me_builder_ajax_object.nonce,
      data_type: dataType
    };
    fire_ajax(data, '.magic-elements-preview-list', '.magic-elements-pagination');
  });
  // pagination 
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-pagination a', function (e) {
    e.preventDefault();
    const url = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
    const pageParam = new URLSearchParams(url.split('?')[1]);
    const pageNumber = pageParam.get('paged');
    let dataType = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.magic-elements-preview-popup').siblings('.magic-elements-builder-sections').find('li a.active').data('type');
    let data = {
      action: 'me_load_preview_data',
      nonce: me_builder_ajax_object.nonce,
      data_type: dataType,
      paged: pageNumber
    };
    fire_ajax(data, '.magic-elements-preview-list', '.magic-elements-pagination');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-close-popup', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.magic-elements-preview-popup').fadeOut();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-popup').on('click', function (e) {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-close-popup').trigger('click');
  });
  // new template

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.add-new-template-link, .magic-elements-preview-item .edit-link', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup').fadeIn();
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'new_or_update_builder_template',
        nonce: me_builder_ajax_object.nonce,
        post_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id')
      },
      success: function (response) {
        if (response.success) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup .content-loader').html(response.data.html);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup .loading').removeClass('loading');
          // Initialize select2 after content is loaded
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#template_type').select2({
              width: '100%',
              dropdownParent: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup')
            });
          }, 100);
        } else {}
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup .magic-elements-close-popup').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup').fadeOut();
  });
  // add condition   
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-addnew-popup #me-add-condition', function (e) {
    e.preventDefault();
    let this_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'me_add_condition',
        nonce: me_builder_ajax_object.nonce,
        post_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('post-id')
      },
      success: function (response) {
        if (response.success) {
          let html = response.data.html;
          // Get current number of conditions
          let conditionCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-add-condition').length;
          // Replace index numbers in the HTML
          html = html.replace(/\[0\]/g, `[${conditionCount}]`);
          this_button.parent().before(html);
          // Initialize select2 after adding new condition
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-add-condition select').select2({
              width: '100%',
              dropdownParent: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup')
            });
          }, 100);
        } else {
          console.log(response);
        }
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
  // remove condition
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-addnew-popup #remove-condition', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().remove();
  });
  // submit template
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-addnew-popup #me-submit-template', function (e) {
    e.preventDefault();
    let formData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#me-add-template-form').serialize();

    // Check if title is empty
    let title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#template_title').val();
    if (!title) {
      // Remove any existing error message
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.template-title-error').remove();

      // Add error message after the title input
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#template_title').after('<span class="template-title-error" style="color: red; display: block; margin-top: 5px;">Please enter a template title</span>');
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'me_submit_template',
        nonce: me_builder_ajax_object.nonce,
        formData: formData
      },
      success: function (response) {
        if (response.success) {
          // Handle successful submission
          console.log('Template submitted successfully:', response.data.edit_link);
          if (response.data.edit_link) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions').append(response.data.edit_link);
          }
          // Optionally close popup or redirect
        } else {
          // Handle error message from server
          console.error('Error:', response.data.message);
          // Display error message to user
        }
      },
      error: function (xhr, status, error) {
        console.error('AJAX Error:', error);
        alert('An error occurred while submitting the template. Please try again.');
      }
    });
  });
  function fire_ajax(data, display_selector, pagination_selector) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: data,
      success: function (response) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(display_selector).html(response.data.html);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(pagination_selector).html(response.data.pagination_html);
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9idWlsZGVyL2J1aWxkZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9idWlsZGVyL2J1aWxkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5qUXVlcnkoZnVuY3Rpb24oKXtcbiAgICAvLyBzZWxlY3QyXG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgcG9wdXBUaXRsZSA9ICQodGhpcykuZGF0YSgndGl0bGUnKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaGVhZGVyIGgyJykudGV4dChwb3B1cFRpdGxlKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5mYWRlSW4oKTtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcbiAgICAgICAgLy8gbG9hZCBwcmV2aWV3XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfbG9hZF9wcmV2aWV3X2RhdGEnLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBkYXRhX3R5cGU6IGRhdGFUeXBlXG4gICAgICAgIH07XG4gICAgICAgIGZpcmVfYWpheChkYXRhLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctbGlzdCcsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbicpO1xuICAgIH0pO1xuICAgIC8vIHBhZ2luYXRpb24gXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uIGEnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgcGFnZVBhcmFtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdlUGFyYW0uZ2V0KCdwYWdlZCcpO1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSAkKHRoaXMpLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuc2libGluZ3MoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLXNlY3Rpb25zJykuZmluZCgnbGkgYS5hY3RpdmUnKS5kYXRhKCd0eXBlJyk7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfbG9hZF9wcmV2aWV3X2RhdGEnLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBkYXRhX3R5cGU6IGRhdGFUeXBlLFxuICAgICAgICAgICAgcGFnZWQ6IHBhZ2VOdW1iZXJcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZV9hamF4KGRhdGEsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1saXN0JywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uJyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5mYWRlT3V0KCk7XG4gICAgfSk7XG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtY2xvc2UtcG9wdXAnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuICAgIC8vIG5ldyB0ZW1wbGF0ZVxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmVkaXQtbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlSW4oKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICduZXdfb3JfdXBkYXRlX2J1aWxkZXJfdGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgnaWQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5jb250ZW50LWxvYWRlcicpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAubG9hZGluZycpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MiBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3RlbXBsYXRlX3R5cGUnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICAgfSk7XG4gIC8vIGFkZCBjb25kaXRpb24gICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgI21lLWFkZC1jb25kaXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcbiAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2FkZF9jb25kaXRpb24nLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ3Bvc3QtaWQnKVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBudW1iZXIgb2YgY29uZGl0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25Db3VudCA9ICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaW5kZXggbnVtYmVycyBpbiB0aGUgSFRNTFxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWzBcXF0vZywgYFske2NvbmRpdGlvbkNvdW50fV1gKTtcbiAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnQoKS5iZWZvcmUoaHRtbCk7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFmdGVyIGFkZGluZyBuZXcgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24gc2VsZWN0Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgIH0pO1xuICB9KTtcbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjcmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICB9KTtcbiAgLy8gc3VibWl0IHRlbXBsYXRlXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gJCgnI21lLWFkZC10ZW1wbGF0ZS1mb3JtJykuc2VyaWFsaXplKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgICBsZXQgdGl0bGUgPSAkKCcjdGVtcGxhdGVfdGl0bGUnKS52YWwoKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGVycm9yIG1lc3NhZ2VcbiAgICAgICQoJy50ZW1wbGF0ZS10aXRsZS1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZXJyb3IgbWVzc2FnZSBhZnRlciB0aGUgdGl0bGUgaW5wdXRcbiAgICAgICQoJyN0ZW1wbGF0ZV90aXRsZScpLmFmdGVyKCc8c3BhbiBjbGFzcz1cInRlbXBsYXRlLXRpdGxlLWVycm9yXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNXB4O1wiPlBsZWFzZSBlbnRlciBhIHRlbXBsYXRlIHRpdGxlPC9zcGFuPicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UuZGF0YS5lZGl0X2xpbmspO1xuICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmVkaXRfbGluayl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMnKS5hcHBlbmQocmVzcG9uc2UuZGF0YS5lZGl0X2xpbmspO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxseSBjbG9zZSBwb3B1cCBvciByZWRpcmVjdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IgbWVzc2FnZSBmcm9tIHNlcnZlclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlIHRvIHVzZXJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FKQVggRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHN1Ym1pdHRpbmcgdGhlIHRlbXBsYXRlLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgZnVuY3Rpb24gZmlyZV9hamF4IChkYXRhLCBkaXNwbGF5X3NlbGVjdG9yLCBwYWdpbmF0aW9uX3NlbGVjdG9yKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIFxuICAgICAgICAkKGRpc3BsYXlfc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcbiAgICAgICAgXG4gICAgICAgICQocGFnaW5hdGlvbl9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLnBhZ2luYXRpb25faHRtbCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTsgIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJwb3B1cFRpdGxlIiwiZGF0YSIsInRleHQiLCJmYWRlSW4iLCJkYXRhVHlwZSIsImFjdGlvbiIsIm5vbmNlIiwibWVfYnVpbGRlcl9hamF4X29iamVjdCIsImRhdGFfdHlwZSIsImZpcmVfYWpheCIsImRvY3VtZW50IiwidXJsIiwiYXR0ciIsInBhZ2VQYXJhbSIsIlVSTFNlYXJjaFBhcmFtcyIsInNwbGl0IiwicGFnZU51bWJlciIsImdldCIsInBhcmVudHMiLCJwYWdlZCIsImZhZGVPdXQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwidHJpZ2dlciIsImFqYXgiLCJhamF4X3VybCIsInR5cGUiLCJwb3N0X2lkIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsInNldFRpbWVvdXQiLCJzZWxlY3QyIiwid2lkdGgiLCJkcm9wZG93blBhcmVudCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRoaXNfYnV0dG9uIiwiY29uZGl0aW9uQ291bnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYmVmb3JlIiwicmVtb3ZlIiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJ0aXRsZSIsInZhbCIsImFmdGVyIiwiZWRpdF9saW5rIiwiYXBwZW5kIiwibWVzc2FnZSIsInhociIsInN0YXR1cyIsImFsZXJ0IiwiZGlzcGxheV9zZWxlY3RvciIsInBhZ2luYXRpb25fc2VsZWN0b3IiLCJwYWdpbmF0aW9uX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9