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
  // preview link 
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.add-new-template-link, .magic-elements-preview-item .preview-link', function (e) {
    e.preventDefault();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-preview-item .preview-link, .magic-elements-preview-item .edit-elementor-link', function (e) {
    e.preventDefault();
    let previewLInk = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
    window.open(previewLInk, '_blank');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-preview-item .delete-link', function (e) {
    e.preventDefault();
    let this_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    let post_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id');

    // Show confirmation dialog
    if (!confirm('Are you sure you want to delete this template?')) {
      return;
    }
    let data = {
      action: 'me_delete_template',
      nonce: me_builder_ajax_object.nonce,
      post_id: post_id
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: data,
      success: function (response) {
        if (response.success) {
          this_button.parents('.magic-elements-preview-item').remove();
        } else {
          console.log(response);
        }
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions').prepend(response.data.edit_link);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFDO1FBRXpCdkMsNkNBQUMsQ0FBQ3FFLGdCQUFnQixDQUFDLENBQUM3QixJQUFJLENBQUNELFFBQVEsQ0FBQzVCLElBQUksQ0FBQzZCLElBQUksQ0FBQztRQUU1Q3hDLDZDQUFDLENBQUNzRSxtQkFBbUIsQ0FBQyxDQUFDOUIsSUFBSSxDQUFDRCxRQUFRLENBQUM1QixJQUFJLENBQUM0RCxlQUFlLENBQUM7TUFDNUQsQ0FBQztNQUNEMUIsS0FBSyxFQUFFLFNBQUFBLENBQVNBLEtBQUssRUFBQztRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNwQjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmpRdWVyeShmdW5jdGlvbigpe1xuICAgIC8vIHNlbGVjdDJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGxldCBwb3B1cFRpdGxlID0gJCh0aGlzKS5kYXRhKCd0aXRsZScpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1oZWFkZXIgaDInKS50ZXh0KHBvcHVwVGl0bGUpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEuYWN0aXZlJykuZGF0YSgndHlwZScpO1xuICAgICAgICAvLyBsb2FkIHByZXZpZXdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZV9hamF4KGRhdGEsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1saXN0JywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uJyk7XG4gICAgfSk7XG4gICAgLy8gcGFnaW5hdGlvbiBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBjb25zdCBwYWdlUGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2VQYXJhbS5nZXQoJ3BhZ2VkJyk7XG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5zaWJsaW5ncygnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItc2VjdGlvbnMnKS5maW5kKCdsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGUsXG4gICAgICAgICAgICBwYWdlZDogcGFnZU51bWJlclxuICAgICAgICB9O1xuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgLy8gbmV3IHRlbXBsYXRlXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctdGVtcGxhdGUtbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ25ld19vcl91cGRhdGVfYnVpbGRlcl90ZW1wbGF0ZScsXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdpZCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLmNvbnRlbnQtbG9hZGVyJykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFmdGVyIGNvbnRlbnQgaXMgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdGVtcGxhdGVfdHlwZScpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBwcmV2aWV3IGxpbmsgXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1lbGVtZW50b3ItbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgbGV0ICBwcmV2aWV3TEluayA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICB3aW5kb3cub3BlbihwcmV2aWV3TEluaywgJ19ibGFuaycpOyBcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZGVsZXRlLWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGhpc19idXR0b24gPSAkKHRoaXMpO1xuICAgICAgICBsZXQgcG9zdF9pZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNob3cgY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0ZW1wbGF0ZT8nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9kZWxldGVfdGVtcGxhdGUnLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBwb3N0X2lkOiBwb3N0X2lkXG4gICAgICAgIH07XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICAgfSk7XG4gIC8vIGFkZCBjb25kaXRpb24gICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgI21lLWFkZC1jb25kaXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcbiAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2FkZF9jb25kaXRpb24nLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ3Bvc3QtaWQnKVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBudW1iZXIgb2YgY29uZGl0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25Db3VudCA9ICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaW5kZXggbnVtYmVycyBpbiB0aGUgSFRNTFxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWzBcXF0vZywgYFske2NvbmRpdGlvbkNvdW50fV1gKTtcbiAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnQoKS5iZWZvcmUoaHRtbCk7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFmdGVyIGFkZGluZyBuZXcgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24gc2VsZWN0Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgIH0pO1xuICB9KTtcbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjcmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICB9KTtcbiAgLy8gc3VibWl0IHRlbXBsYXRlXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gJCgnI21lLWFkZC10ZW1wbGF0ZS1mb3JtJykuc2VyaWFsaXplKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgICBsZXQgdGl0bGUgPSAkKCcjdGVtcGxhdGVfdGl0bGUnKS52YWwoKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGVycm9yIG1lc3NhZ2VcbiAgICAgICQoJy50ZW1wbGF0ZS10aXRsZS1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZXJyb3IgbWVzc2FnZSBhZnRlciB0aGUgdGl0bGUgaW5wdXRcbiAgICAgICQoJyN0ZW1wbGF0ZV90aXRsZScpLmFmdGVyKCc8c3BhbiBjbGFzcz1cInRlbXBsYXRlLXRpdGxlLWVycm9yXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNXB4O1wiPlBsZWFzZSBlbnRlciBhIHRlbXBsYXRlIHRpdGxlPC9zcGFuPicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHk6JywgcmVzcG9uc2UuZGF0YS5lZGl0X2xpbmspO1xuICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmVkaXRfbGluayl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMnKS5wcmVwZW5kKHJlc3BvbnNlLmRhdGEuZWRpdF9saW5rKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgY2xvc2UgcG9wdXAgb3IgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3IgbWVzc2FnZSB0byB1c2VyXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBSkFYIEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIGZpcmVfYWpheCAoZGF0YSwgZGlzcGxheV9zZWxlY3RvciwgcGFnaW5hdGlvbl9zZWxlY3Rvcikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBcbiAgICAgICAgJChkaXNwbGF5X3NlbGVjdG9yKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgIFxuICAgICAgICAkKHBhZ2luYXRpb25fc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5wYWdpbmF0aW9uX2h0bWwpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7ICJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicG9wdXBUaXRsZSIsImRhdGEiLCJ0ZXh0IiwiZmFkZUluIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJub25jZSIsIm1lX2J1aWxkZXJfYWpheF9vYmplY3QiLCJkYXRhX3R5cGUiLCJmaXJlX2FqYXgiLCJkb2N1bWVudCIsInVybCIsImF0dHIiLCJwYWdlUGFyYW0iLCJVUkxTZWFyY2hQYXJhbXMiLCJzcGxpdCIsInBhZ2VOdW1iZXIiLCJnZXQiLCJwYXJlbnRzIiwicGFnZWQiLCJmYWRlT3V0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInRyaWdnZXIiLCJhamF4IiwiYWpheF91cmwiLCJ0eXBlIiwicG9zdF9pZCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImh0bWwiLCJzZXRUaW1lb3V0Iiwic2VsZWN0MiIsIndpZHRoIiwiZHJvcGRvd25QYXJlbnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmV2aWV3TEluayIsIndpbmRvdyIsIm9wZW4iLCJ0aGlzX2J1dHRvbiIsImNvbmZpcm0iLCJyZW1vdmUiLCJjb25kaXRpb25Db3VudCIsImxlbmd0aCIsInJlcGxhY2UiLCJiZWZvcmUiLCJmb3JtRGF0YSIsInNlcmlhbGl6ZSIsInRpdGxlIiwidmFsIiwiYWZ0ZXIiLCJlZGl0X2xpbmsiLCJwcmVwZW5kIiwibWVzc2FnZSIsInhociIsInN0YXR1cyIsImFsZXJ0IiwiZGlzcGxheV9zZWxlY3RvciIsInBhZ2luYXRpb25fc2VsZWN0b3IiLCJwYWdpbmF0aW9uX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9