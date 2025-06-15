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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut();
    //$('.magic-elements-close-popup').trigger('click');
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
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-add-condition select').select2({
              width: '100%',
              dropdownParent: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-add-condition')
            });
          }, 100);
        }
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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a.active').trigger('click');
          this_button.parents('.magic-elements-preview-item').remove();
        } else {
          console.log(response);
        }
      }
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-addnew-popup .magic-elements-close-popup', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a.active').trigger('click');
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.magic-elements-addnew-popup .remove-condition', function (e) {
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
          handleSuccess(response.data);
        } else {
          handleError(response.data);
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
  function handleSuccess(data) {
    // Clean up old messages first to avoid duplicate entries
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions .success-message, .edit-link').remove();

    // Append the success message
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions button').after(`<span class="success-message">${data.message}</span>`);

    // Prepend an edit link if available
    if (data.edit_link) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions button').before(`<span class="edit-link">${data.edit_link}</span>`);
    }

    // Optionally close the popup or redirect

    // Add logic here, e.g., set a timeout to close or redirect
  }
  function handleError(data) {
    console.error('Error:', data.message);
    // You could also display this error to the user in the UI as needed
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBU0MsUUFBUSxFQUFDO1FBRXpCdEMsNkNBQUMsQ0FBQ29FLGdCQUFnQixDQUFDLENBQUM3QixJQUFJLENBQUNELFFBQVEsQ0FBQzNCLElBQUksQ0FBQzRCLElBQUksQ0FBQztRQUU1Q3ZDLDZDQUFDLENBQUNxRSxtQkFBbUIsQ0FBQyxDQUFDOUIsSUFBSSxDQUFDRCxRQUFRLENBQUMzQixJQUFJLENBQUMyRCxlQUFlLENBQUM7TUFDNUQsQ0FBQztNQUNEMUIsS0FBSyxFQUFFLFNBQUFBLENBQVNBLEtBQUssRUFBQztRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNwQjtJQUNGLENBQUMsQ0FBQztFQUNKO0VBQ0EsU0FBU21CLGFBQWFBLENBQUNwRCxJQUFJLEVBQUU7SUFDM0I7SUFDQVgsNkNBQUMsQ0FBQywyREFBMkQsQ0FBQyxDQUFDcUQsTUFBTSxDQUFDLENBQUM7O0lBRXZFO0lBQ0FyRCw2Q0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUM4RCxLQUFLLENBQzFDLGlDQUFpQ25ELElBQUksQ0FBQzRELE9BQU8sU0FDakQsQ0FBQzs7SUFFRDtJQUNBLElBQUk1RCxJQUFJLENBQUM2RCxTQUFTLEVBQUU7TUFDaEJ4RSw2Q0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUN5RCxNQUFNLENBQzNDLDJCQUEyQjlDLElBQUksQ0FBQzZELFNBQVMsU0FDN0MsQ0FBQztJQUNMOztJQUVBOztJQUVBO0VBQ0o7RUFFQSxTQUFTUixXQUFXQSxDQUFDckQsSUFBSSxFQUFFO0lBQ3ZCa0MsT0FBTyxDQUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFakMsSUFBSSxDQUFDNEQsT0FBTyxDQUFDO0lBQ3JDO0VBQ0o7QUFFQSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYnVpbGRlci9idWlsZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYnVpbGRlci9idWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xualF1ZXJ5KGZ1bmN0aW9uKCl7XG4gICAgLy8gc2VsZWN0MlxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgbGV0IHBvcHVwVGl0bGUgPSAkKHRoaXMpLmRhdGEoJ3RpdGxlJyk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWhlYWRlciBoMicpLnRleHQocG9wdXBUaXRsZSk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuZmFkZUluKCk7XG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS5kYXRhKCd0eXBlJyk7XG4gICAgICAgIC8vIGxvYWQgcHJldmlld1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2xvYWRfcHJldmlld19kYXRhJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZVxuICAgICAgICB9O1xuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcbiAgICB9KTtcbiAgICAvLyBwYWdpbmF0aW9uIFxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbiBhJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHBhZ2VQYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnZVBhcmFtLmdldCgncGFnZWQnKTtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLnNpYmxpbmdzKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1zZWN0aW9ucycpLmZpbmQoJ2xpIGEuYWN0aXZlJykuZGF0YSgndHlwZScpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2xvYWRfcHJldmlld19kYXRhJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZSxcbiAgICAgICAgICAgIHBhZ2VkOiBwYWdlTnVtYmVyXG4gICAgICAgIH07XG4gICAgICAgIGZpcmVfYWpheChkYXRhLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctbGlzdCcsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbicpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtY2xvc2UtcG9wdXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuZmFkZU91dCgpO1xuICAgIH0pO1xuICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5mYWRlT3V0KCk7XG4gICAgICAgIC8vJCgnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcbiAgICAvLyBuZXcgdGVtcGxhdGVcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLW5ldy10ZW1wbGF0ZS1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5lZGl0LWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykuZmFkZUluKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbmV3X29yX3VwZGF0ZV9idWlsZGVyX3RlbXBsYXRlJyxcbiAgICAgICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAuY29udGVudC1sb2FkZXInKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLmxvYWRpbmcnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlbGVjdDIgYWZ0ZXIgY29udGVudCBpcyBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0ZW1wbGF0ZV90eXBlJykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blBhcmVudDogJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uIHNlbGVjdCcpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcHJldmlldyBsaW5rIFxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLW5ldy10ZW1wbGF0ZS1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5wcmV2aWV3LWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5wcmV2aWV3LWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmVkaXQtZWxlbWVudG9yLWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgIGxldCAgcHJldmlld0xJbmsgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgd2luZG93Lm9wZW4ocHJldmlld0xJbmssICdfYmxhbmsnKTsgXG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmRlbGV0ZS1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IHBvc3RfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBTaG93IGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGVtcGxhdGU/JykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfZGVsZXRlX3RlbXBsYXRlJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgcG9zdF9pZDogcG9zdF9pZFxuICAgICAgICB9O1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNfYnV0dG9uLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlT3V0KCk7XG5cbiAgICAgfSk7XG4gIC8vIGFkZCBjb25kaXRpb24gICBcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgI21lLWFkZC1jb25kaXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcbiAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2FkZF9jb25kaXRpb24nLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ3Bvc3QtaWQnKVxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBudW1iZXIgb2YgY29uZGl0aW9uc1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25Db3VudCA9ICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgaW5kZXggbnVtYmVycyBpbiB0aGUgSFRNTFxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWzBcXF0vZywgYFske2NvbmRpdGlvbkNvdW50fV1gKTtcbiAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnQoKS5iZWZvcmUoaHRtbCk7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFmdGVyIGFkZGluZyBuZXcgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24gc2VsZWN0Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgIH0pO1xuICB9KTtcbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAucmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICB9KTtcbiAgLy8gc3VibWl0IHRlbXBsYXRlXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gJCgnI21lLWFkZC10ZW1wbGF0ZS1mb3JtJykuc2VyaWFsaXplKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgICBsZXQgdGl0bGUgPSAkKCcjdGVtcGxhdGVfdGl0bGUnKS52YWwoKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGVycm9yIG1lc3NhZ2VcbiAgICAgICQoJy50ZW1wbGF0ZS10aXRsZS1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZXJyb3IgbWVzc2FnZSBhZnRlciB0aGUgdGl0bGUgaW5wdXRcbiAgICAgICQoJyN0ZW1wbGF0ZV90aXRsZScpLmFmdGVyKCc8c3BhbiBjbGFzcz1cInRlbXBsYXRlLXRpdGxlLWVycm9yXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNXB4O1wiPlBsZWFzZSBlbnRlciBhIHRlbXBsYXRlIHRpdGxlPC9zcGFuPicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQUpBWCBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc3VibWl0dGluZyB0aGUgdGVtcGxhdGUuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICBmdW5jdGlvbiBmaXJlX2FqYXggKGRhdGEsIGRpc3BsYXlfc2VsZWN0b3IsIHBhZ2luYXRpb25fc2VsZWN0b3IpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgXG4gICAgICAgICQoZGlzcGxheV9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICBcbiAgICAgICAgJChwYWdpbmF0aW9uX3NlbGVjdG9yKS5odG1sKHJlc3BvbnNlLmRhdGEucGFnaW5hdGlvbl9odG1sKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhkYXRhKSB7XG4gICAgLy8gQ2xlYW4gdXAgb2xkIG1lc3NhZ2VzIGZpcnN0IHRvIGF2b2lkIGR1cGxpY2F0ZSBlbnRyaWVzXG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWZvcm0tYWN0aW9ucyAuc3VjY2Vzcy1tZXNzYWdlLCAuZWRpdC1saW5rJykucmVtb3ZlKCk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHN1Y2Nlc3MgbWVzc2FnZVxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgYnV0dG9uJykuYWZ0ZXIoXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPiR7ZGF0YS5tZXNzYWdlfTwvc3Bhbj5gXG4gICAgKTtcblxuICAgIC8vIFByZXBlbmQgYW4gZWRpdCBsaW5rIGlmIGF2YWlsYWJsZVxuICAgIGlmIChkYXRhLmVkaXRfbGluaykge1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtZm9ybS1hY3Rpb25zIGJ1dHRvbicpLmJlZm9yZShcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cImVkaXQtbGlua1wiPiR7ZGF0YS5lZGl0X2xpbmt9PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBPcHRpb25hbGx5IGNsb3NlIHRoZSBwb3B1cCBvciByZWRpcmVjdFxuXG4gICAgLy8gQWRkIGxvZ2ljIGhlcmUsIGUuZy4sIHNldCBhIHRpbWVvdXQgdG8gY2xvc2Ugb3IgcmVkaXJlY3Rcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGRhdGEubWVzc2FnZSk7XG4gICAgLy8gWW91IGNvdWxkIGFsc28gZGlzcGxheSB0aGlzIGVycm9yIHRvIHRoZSB1c2VyIGluIHRoZSBVSSBhcyBuZWVkZWRcbn1cblxufSk7ICJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicG9wdXBUaXRsZSIsImRhdGEiLCJ0ZXh0IiwiZmFkZUluIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJub25jZSIsIm1lX2J1aWxkZXJfYWpheF9vYmplY3QiLCJkYXRhX3R5cGUiLCJmaXJlX2FqYXgiLCJkb2N1bWVudCIsInVybCIsImF0dHIiLCJwYWdlUGFyYW0iLCJVUkxTZWFyY2hQYXJhbXMiLCJzcGxpdCIsInBhZ2VOdW1iZXIiLCJnZXQiLCJwYXJlbnRzIiwicGFnZWQiLCJmYWRlT3V0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImFqYXgiLCJhamF4X3VybCIsInR5cGUiLCJwb3N0X2lkIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsInNldFRpbWVvdXQiLCJzZWxlY3QyIiwid2lkdGgiLCJkcm9wZG93blBhcmVudCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByZXZpZXdMSW5rIiwid2luZG93Iiwib3BlbiIsInRoaXNfYnV0dG9uIiwiY29uZmlybSIsInRyaWdnZXIiLCJyZW1vdmUiLCJjb25kaXRpb25Db3VudCIsImxlbmd0aCIsInJlcGxhY2UiLCJiZWZvcmUiLCJmb3JtRGF0YSIsInNlcmlhbGl6ZSIsInRpdGxlIiwidmFsIiwiYWZ0ZXIiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJhbGVydCIsImRpc3BsYXlfc2VsZWN0b3IiLCJwYWdpbmF0aW9uX3NlbGVjdG9yIiwicGFnaW5hdGlvbl9odG1sIiwibWVzc2FnZSIsImVkaXRfbGluayJdLCJzb3VyY2VSb290IjoiIn0=