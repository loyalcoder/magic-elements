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
          // Handle successful submission
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions button').after('<span class="success-message">' + response.data.message + '</span>');
          if (response.data.edit_link) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-form-actions button').before(response.data.edit_link);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ3ZCQyxNQUFNLENBQUMsWUFBVTtFQUNiO0VBQ0FELDZDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDMURBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDMUJMLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUMzRCxJQUFJQyxVQUFVLEdBQUdWLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdENYLDZDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ1ksSUFBSSxDQUFDRixVQUFVLENBQUM7SUFDdkRWLDZDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ2EsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSUMsUUFBUSxHQUFHZCw2Q0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUNXLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekU7SUFDQSxJQUFJQSxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLHNCQUFzQjtNQUM5QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ0UsU0FBUyxFQUFFSjtJQUNmLENBQUM7SUFDREssU0FBUyxDQUFDUixJQUFJLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLENBQUM7RUFDakYsQ0FBQyxDQUFDO0VBQ0Y7RUFDQVgsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDL0RBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsTUFBTWlCLEdBQUcsR0FBR3JCLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxlQUFlLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU1DLFVBQVUsR0FBR0gsU0FBUyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3pDLElBQUliLFFBQVEsR0FBR2QsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRCLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDckIsUUFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3SSxJQUFJQSxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLHNCQUFzQjtNQUM5QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ0UsU0FBUyxFQUFFSixRQUFRO01BQ25CZSxLQUFLLEVBQUVIO0lBQ1gsQ0FBQztJQUNEUCxTQUFTLENBQUNSLElBQUksRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztFQUNqRixDQUFDLENBQUM7RUFDRlgsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDOURBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0QixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7RUFDOUQsQ0FBQyxDQUFDO0VBQ0Y5Qiw2Q0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ3REQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUdELENBQUMsQ0FBQzRCLE1BQU0sS0FBSzVCLENBQUMsQ0FBQzZCLGFBQWEsRUFBQztNQUM1QjtJQUNKO0lBQ0FoQyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLENBQUM7SUFDakI7RUFDSixDQUFDLENBQUM7RUFDRjs7RUFFQTlCLDZDQUFDLENBQUNvQixRQUFRLENBQUMsQ0FBQ2xCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsaUVBQWlFLEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ2xHQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCSiw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNhLE1BQU0sQ0FBQyxDQUFDO0lBQzFDYixrREFBTSxDQUFDO01BQ0hxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRTtRQUNGSSxNQUFNLEVBQUUsZ0NBQWdDO1FBQ3hDQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFDRCxLQUFLO1FBQ25Db0IsT0FBTyxFQUFFcEMsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLElBQUk7TUFDOUIsQ0FBQztNQUNEMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQnJDLDZDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQ3VDLElBQUksQ0FBQ0QsUUFBUSxDQUFDM0IsSUFBSSxDQUFDNEIsSUFBSSxDQUFDO1VBQzFFdkMsNkNBQUMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDUyxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ2pFO1VBQ0ErQixVQUFVLENBQUMsWUFBVztZQUNsQnhDLDZDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3lDLE9BQU8sQ0FBQztjQUN4QkMsS0FBSyxFQUFFLE1BQU07Y0FDYkMsY0FBYyxFQUFFM0MsNkNBQUMsQ0FBQyw4QkFBOEI7WUFDcEQsQ0FBQyxDQUFDO1lBQ0ZBLDZDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ3lDLE9BQU8sQ0FBQztjQUM5Q0MsS0FBSyxFQUFFLE1BQU07Y0FDYkMsY0FBYyxFQUFFM0MsNkNBQUMsQ0FBQywrQkFBK0I7WUFDckQsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNYO01BQ0osQ0FBQztNQUNENEMsS0FBSyxFQUFFLFNBQUFBLENBQVNBLEtBQUssRUFBQztRQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUN0QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUNGO0VBQ0E1Qyw2Q0FBQyxDQUFDb0IsUUFBUSxDQUFDLENBQUNsQixFQUFFLENBQUMsT0FBTyxFQUFFLG9FQUFvRSxFQUFFLFVBQVNDLENBQUMsRUFBQztJQUNyR0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFDRkosNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSwrRkFBK0YsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDaElBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbkIsSUFBSzJDLFdBQVcsR0FBRy9DLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDMEIsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFdBQVcsRUFBRSxRQUFRLENBQUM7RUFDdEMsQ0FBQyxDQUFDO0VBQ0YvQyw2Q0FBQyxDQUFDb0IsUUFBUSxDQUFDLENBQUNsQixFQUFFLENBQUMsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLFVBQVNDLENBQUMsRUFBQztJQUM1RUEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJOEMsV0FBVyxHQUFHbEQsNkNBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsSUFBSW9DLE9BQU8sR0FBR3BDLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRWhDO0lBQ0EsSUFBSSxDQUFDd0MsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLEVBQUU7TUFDNUQ7SUFDSjtJQUVBLElBQUl4QyxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLG9CQUFvQjtNQUM1QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ29CLE9BQU8sRUFBRUE7SUFDYixDQUFDO0lBQ0RwQyxrREFBTSxDQUFDO01BQ0hxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRUEsSUFBSTtNQUNWMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQnJDLDZDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxPQUFPLENBQUM7VUFDOURGLFdBQVcsQ0FBQ3RCLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDeUIsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxNQUFJO1VBQ0RSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixRQUFRLENBQUM7UUFDekI7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVEdEMsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSwwREFBMEQsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDNUZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ29ELE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOURwRCw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM4QixPQUFPLENBQUMsQ0FBQztFQUU5QyxDQUFDLENBQUM7RUFDTDtFQUNBOUIsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxnREFBZ0QsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDbkZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSThDLFdBQVcsR0FBR2xELDZDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hCQSxrREFBTSxDQUFDO01BQ0pxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRTtRQUNGSSxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFDRCxLQUFLO1FBQ25Db0IsT0FBTyxFQUFFcEMsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLFNBQVM7TUFDbkMsQ0FBQztNQUNEMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQixJQUFJRSxJQUFJLEdBQUdELFFBQVEsQ0FBQzNCLElBQUksQ0FBQzRCLElBQUk7VUFDN0I7VUFDQSxJQUFJZSxjQUFjLEdBQUd0RCw2Q0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUN1RCxNQUFNO1VBQzlEO1VBQ0FoQixJQUFJLEdBQUdBLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSUYsY0FBYyxHQUFHLENBQUM7VUFDcERKLFdBQVcsQ0FBQzVDLE1BQU0sQ0FBQyxDQUFDLENBQUNtRCxNQUFNLENBQUNsQixJQUFJLENBQUM7VUFDakM7VUFDQUMsVUFBVSxDQUFDLFlBQVc7WUFDbEJ4Qyw2Q0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUN5QyxPQUFPLENBQUM7Y0FDOUNDLEtBQUssRUFBRSxNQUFNO2NBQ2JDLGNBQWMsRUFBRTNDLDZDQUFDLENBQUMsOEJBQThCO1lBQ3BELENBQUMsQ0FBQztVQUNOLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDWCxDQUFDLE1BQUk7VUFDRDZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixRQUFRLENBQUM7UUFDekI7TUFDSixDQUFDO01BQ0RNLEtBQUssRUFBRSxTQUFBQSxDQUFTQSxLQUFLLEVBQUM7UUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDdEI7SUFDSCxDQUFDLENBQUM7RUFDTCxDQUFDLENBQUM7RUFDRjtFQUNBNUMsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxnREFBZ0QsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDbkZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUMrQyxNQUFNLENBQUMsQ0FBQztFQUMzQixDQUFDLENBQUM7RUFDRjtFQUNBckQsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxrREFBa0QsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDckZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSXNELFFBQVEsR0FBRzFELDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQzJELFNBQVMsQ0FBQyxDQUFDOztJQUVyRDtJQUNBLElBQUlDLEtBQUssR0FBRzVELDZDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzZELEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQ0QsS0FBSyxFQUFFO01BQ1Y7TUFDQTVELDZDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3FELE1BQU0sQ0FBQyxDQUFDOztNQUVuQztNQUNBckQsNkNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOEQsS0FBSyxDQUFDLDhIQUE4SCxDQUFDO01BQzFKO0lBQ0Y7SUFDQTlELGtEQUFNLENBQUM7TUFDSHFCLEdBQUcsRUFBRUosc0JBQXNCLENBQUNpQixRQUFRO01BQ3BDQyxJQUFJLEVBQUUsTUFBTTtNQUNaeEIsSUFBSSxFQUFFO1FBQ0ZJLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLEtBQUssRUFBRUMsc0JBQXNCLENBQUNELEtBQUs7UUFDbkMwQyxRQUFRLEVBQUVBO01BQ2QsQ0FBQztNQUNEckIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBRTtRQUN4QixJQUFJQSxRQUFRLENBQUNELE9BQU8sRUFBRTtVQUNsQjtVQUNBckMsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDOEQsS0FBSyxDQUFDLGdDQUFnQyxHQUFDeEIsUUFBUSxDQUFDM0IsSUFBSSxDQUFDb0QsT0FBTyxHQUFDLFNBQVMsQ0FBQztVQUNoSCxJQUFHekIsUUFBUSxDQUFDM0IsSUFBSSxDQUFDcUQsU0FBUyxFQUFDO1lBQ3ZCaEUsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDbkIsUUFBUSxDQUFDM0IsSUFBSSxDQUFDcUQsU0FBUyxDQUFDO1VBQzNFO1VBQ0Q7UUFFSixDQUFDLE1BQU07VUFDSDtVQUNBbkIsT0FBTyxDQUFDRCxLQUFLLENBQUMsUUFBUSxFQUFFTixRQUFRLENBQUMzQixJQUFJLENBQUNvRCxPQUFPLENBQUM7VUFDOUM7UUFFSjtNQUNKLENBQUM7TUFDRG5CLEtBQUssRUFBRSxTQUFBQSxDQUFTcUIsR0FBRyxFQUFFQyxNQUFNLEVBQUV0QixLQUFLLEVBQUU7UUFDaENDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLGFBQWEsRUFBRUEsS0FBSyxDQUFDO1FBQ25DdUIsS0FBSyxDQUFDLG9FQUFvRSxDQUFDO01BQy9FO0lBQ0osQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUYsU0FBU2hELFNBQVNBLENBQUVSLElBQUksRUFBRXlELGdCQUFnQixFQUFFQyxtQkFBbUIsRUFBRTtJQUMvRHJFLGtEQUFNLENBQUM7TUFDTHFCLEdBQUcsRUFBRUosc0JBQXNCLENBQUNpQixRQUFRO01BQ3BDQyxJQUFJLEVBQUUsTUFBTTtNQUNaeEIsSUFBSSxFQUFFQSxJQUFJO01BQ1YwQixPQUFPLEVBQUUsU0FBQUEsQ0FBU0MsUUFBUSxFQUFDO1FBRXpCdEMsNkNBQUMsQ0FBQ29FLGdCQUFnQixDQUFDLENBQUM3QixJQUFJLENBQUNELFFBQVEsQ0FBQzNCLElBQUksQ0FBQzRCLElBQUksQ0FBQztRQUU1Q3ZDLDZDQUFDLENBQUNxRSxtQkFBbUIsQ0FBQyxDQUFDOUIsSUFBSSxDQUFDRCxRQUFRLENBQUMzQixJQUFJLENBQUMyRCxlQUFlLENBQUM7TUFDNUQsQ0FBQztNQUNEMUIsS0FBSyxFQUFFLFNBQUFBLENBQVNBLEtBQUssRUFBQztRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNwQjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmpRdWVyeShmdW5jdGlvbigpe1xuICAgIC8vIHNlbGVjdDJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGxldCBwb3B1cFRpdGxlID0gJCh0aGlzKS5kYXRhKCd0aXRsZScpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1oZWFkZXIgaDInKS50ZXh0KHBvcHVwVGl0bGUpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEuYWN0aXZlJykuZGF0YSgndHlwZScpO1xuICAgICAgICAvLyBsb2FkIHByZXZpZXdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZV9hamF4KGRhdGEsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1saXN0JywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uJyk7XG4gICAgfSk7XG4gICAgLy8gcGFnaW5hdGlvbiBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBjb25zdCBwYWdlUGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2VQYXJhbS5nZXQoJ3BhZ2VkJyk7XG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5zaWJsaW5ncygnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItc2VjdGlvbnMnKS5maW5kKCdsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGUsXG4gICAgICAgICAgICBwYWdlZDogcGFnZU51bWJlclxuICAgICAgICB9O1xuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZmFkZU91dCgpO1xuICAgICAgICAvLyQoJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgLy8gbmV3IHRlbXBsYXRlXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctdGVtcGxhdGUtbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ25ld19vcl91cGRhdGVfYnVpbGRlcl90ZW1wbGF0ZScsXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdpZCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLmNvbnRlbnQtbG9hZGVyJykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFmdGVyIGNvbnRlbnQgaXMgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdGVtcGxhdGVfdHlwZScpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbiBzZWxlY3QnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHByZXZpZXcgbGluayBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctdGVtcGxhdGUtbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAucHJldmlldy1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAucHJldmlldy1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5lZGl0LWVsZW1lbnRvci1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBsZXQgIHByZXZpZXdMSW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIHdpbmRvdy5vcGVuKHByZXZpZXdMSW5rLCAnX2JsYW5rJyk7IFxuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5kZWxldGUtbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgIGxldCBwb3N0X2lkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXG4gICAgICAgIGlmICghY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRlbXBsYXRlPycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2RlbGV0ZV90ZW1wbGF0ZScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIHBvc3RfaWQ6IHBvc3RfaWRcbiAgICAgICAgfTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykuZmFkZU91dCgpO1xuXG4gICAgIH0pO1xuICAvLyBhZGQgY29uZGl0aW9uICAgXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1hZGQtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XG4gICAgICQuYWpheCh7XG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9hZGRfY29uZGl0aW9uJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdwb3N0LWlkJylcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXNwb25zZS5kYXRhLmh0bWw7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgbnVtYmVyIG9mIGNvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uQ291bnQgPSAkKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGluZGV4IG51bWJlcnMgaW4gdGhlIEhUTUxcbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXFswXFxdL2csIGBbJHtjb25kaXRpb25Db3VudH1dYCk7XG4gICAgICAgICAgICAgICAgdGhpc19idXR0b24ucGFyZW50KCkuYmVmb3JlKGh0bWwpO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MiBhZnRlciBhZGRpbmcgbmV3IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uIHNlbGVjdCcpLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfSk7XG4gIC8vIHJlbW92ZSBjb25kaXRpb25cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLnJlbW92ZS1jb25kaXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgfSk7XG4gIC8vIHN1Ym1pdCB0ZW1wbGF0ZVxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjbWUtc3VibWl0LXRlbXBsYXRlJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9ICQoJyNtZS1hZGQtdGVtcGxhdGUtZm9ybScpLnNlcmlhbGl6ZSgpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRpdGxlIGlzIGVtcHR5XG4gICAgbGV0IHRpdGxlID0gJCgnI3RlbXBsYXRlX3RpdGxlJykudmFsKCk7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBleGlzdGluZyBlcnJvciBtZXNzYWdlXG4gICAgICAkKCcudGVtcGxhdGUtdGl0bGUtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgIFxuICAgICAgLy8gQWRkIGVycm9yIG1lc3NhZ2UgYWZ0ZXIgdGhlIHRpdGxlIGlucHV0XG4gICAgICAkKCcjdGVtcGxhdGVfdGl0bGUnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZS1lcnJvclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDVweDtcIj5QbGVhc2UgZW50ZXIgYSB0ZW1wbGF0ZSB0aXRsZTwvc3Bhbj4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX3N1Ym1pdF90ZW1wbGF0ZScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgc3VibWlzc2lvblxuICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgYnV0dG9uJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwic3VjY2Vzcy1tZXNzYWdlXCI+JytyZXNwb25zZS5kYXRhLm1lc3NhZ2UrJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmVkaXRfbGluayl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgYnV0dG9uJykuYmVmb3JlKHJlc3BvbnNlLmRhdGEuZWRpdF9saW5rKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgY2xvc2UgcG9wdXAgb3IgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgZXJyb3IgbWVzc2FnZSB0byB1c2VyXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBSkFYIEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIGZpcmVfYWpheCAoZGF0YSwgZGlzcGxheV9zZWxlY3RvciwgcGFnaW5hdGlvbl9zZWxlY3Rvcikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBcbiAgICAgICAgJChkaXNwbGF5X3NlbGVjdG9yKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgIFxuICAgICAgICAkKHBhZ2luYXRpb25fc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5wYWdpbmF0aW9uX2h0bWwpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7ICJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicG9wdXBUaXRsZSIsImRhdGEiLCJ0ZXh0IiwiZmFkZUluIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJub25jZSIsIm1lX2J1aWxkZXJfYWpheF9vYmplY3QiLCJkYXRhX3R5cGUiLCJmaXJlX2FqYXgiLCJkb2N1bWVudCIsInVybCIsImF0dHIiLCJwYWdlUGFyYW0iLCJVUkxTZWFyY2hQYXJhbXMiLCJzcGxpdCIsInBhZ2VOdW1iZXIiLCJnZXQiLCJwYXJlbnRzIiwicGFnZWQiLCJmYWRlT3V0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImFqYXgiLCJhamF4X3VybCIsInR5cGUiLCJwb3N0X2lkIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsInNldFRpbWVvdXQiLCJzZWxlY3QyIiwid2lkdGgiLCJkcm9wZG93blBhcmVudCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByZXZpZXdMSW5rIiwid2luZG93Iiwib3BlbiIsInRoaXNfYnV0dG9uIiwiY29uZmlybSIsInRyaWdnZXIiLCJyZW1vdmUiLCJjb25kaXRpb25Db3VudCIsImxlbmd0aCIsInJlcGxhY2UiLCJiZWZvcmUiLCJmb3JtRGF0YSIsInNlcmlhbGl6ZSIsInRpdGxlIiwidmFsIiwiYWZ0ZXIiLCJtZXNzYWdlIiwiZWRpdF9saW5rIiwieGhyIiwic3RhdHVzIiwiYWxlcnQiLCJkaXNwbGF5X3NlbGVjdG9yIiwicGFnaW5hdGlvbl9zZWxlY3RvciIsInBhZ2luYXRpb25faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=