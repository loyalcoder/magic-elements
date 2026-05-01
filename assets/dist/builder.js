/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jquery"
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
(module) {

module.exports = jQuery;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
          // Initialize select2 and condition UI after content is loaded
          setTimeout(function () {
            meBuilderInitConditionUI(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup'));
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
          // Initialize select2 and condition UI for new row
          setTimeout(function () {
            meBuilderInitConditionUI(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup'));
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
  // Display-on change: show/hide selective singular fields
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.magic-elements-addnew-popup .me-condition-display-on', function () {
    var v = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
    var $row = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.magic-elements-add-condition');
    $row.find('.me-builder-condition-selective').toggle(v === 'selective_singular');
    if (v !== 'selective_singular') {
      var $sel = $row.find('.me-builder-post-select');
      if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
        $sel.val(null).trigger('change');
      }
    }
  });

  // Post type change: clear post select (selected items may be from another type)
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.magic-elements-addnew-popup .me-builder-post-type', function () {
    var $row = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.magic-elements-add-condition');
    var $sel = $row.find('.me-builder-post-select');
    if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
      $sel.val(null).trigger('change');
    }
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
  function meBuilderInitConditionUI($popup) {
    if (!$popup || !$popup.length) return;
    $popup.find('#template_type').each(function () {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      if ($el.hasClass('select2-hidden-accessible')) $el.select2('destroy');
      $el.select2({
        width: '100%',
        dropdownParent: $popup
      });
    });
    $popup.find('.magic-elements-add-condition').each(function () {
      var $row = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var $displayType = $row.find('.me-condition-display-type');
      var $displayOn = $row.find('.me-condition-display-on');
      var $postType = $row.find('.me-builder-post-type');
      var $postSelect = $row.find('.me-builder-post-select');
      [$displayType, $displayOn, $postType].forEach(function ($sel) {
        if ($sel.length && $sel.hasClass('select2-hidden-accessible')) $sel.select2('destroy');
        if ($sel.length) $sel.select2({
          width: '100%',
          dropdownParent: $popup
        });
      });
      var showSelective = $displayOn.val() === 'selective_singular';
      $row.find('.me-builder-condition-selective').toggle(showSelective);
      if ($postSelect.length) {
        if ($postSelect.hasClass('select2-hidden-accessible')) $postSelect.select2('destroy');
        $postSelect.select2({
          width: '100%',
          dropdownParent: $popup,
          placeholder: $postSelect.data('placeholder') || 'Search or select…',
          minimumInputLength: 0,
          allowClear: true,
          ajax: {
            url: me_builder_ajax_object.ajax_url,
            dataType: 'json',
            delay: 250,
            data: function (params) {
              return {
                action: 'me_builder_search_posts',
                nonce: me_builder_ajax_object.nonce,
                search: params.term || '',
                page: params.page || 1,
                post_type: $postType.val() || 'post'
              };
            },
            processResults: function (data) {
              if (data.success && data.data && data.data.results) {
                return {
                  results: data.data.results,
                  pagination: data.data.pagination
                };
              }
              return {
                results: []
              };
            }
          }
        });
      }
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ3ZCQyxNQUFNLENBQUMsWUFBVTtFQUNiO0VBQ0FELDZDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDMURBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDMUJMLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUMzRCxJQUFJQyxVQUFVLEdBQUdWLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdENYLDZDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ1ksSUFBSSxDQUFDRixVQUFVLENBQUM7SUFDdkRWLDZDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ2EsTUFBTSxDQUFDLENBQUM7SUFDM0MsSUFBSUMsUUFBUSxHQUFHZCw2Q0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUNXLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDekU7SUFDQSxJQUFJQSxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLHNCQUFzQjtNQUM5QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ0UsU0FBUyxFQUFFSjtJQUNmLENBQUM7SUFDREssU0FBUyxDQUFDUixJQUFJLEVBQUUsOEJBQThCLEVBQUUsNEJBQTRCLENBQUM7RUFDakYsQ0FBQyxDQUFDO0VBQ0Y7RUFDQVgsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDL0RBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsTUFBTWlCLEdBQUcsR0FBR3JCLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxlQUFlLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU1DLFVBQVUsR0FBR0gsU0FBUyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3pDLElBQUliLFFBQVEsR0FBR2QsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRCLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDckIsUUFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3SSxJQUFJQSxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLHNCQUFzQjtNQUM5QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ0UsU0FBUyxFQUFFSixRQUFRO01BQ25CZSxLQUFLLEVBQUVIO0lBQ1gsQ0FBQztJQUNEUCxTQUFTLENBQUNSLElBQUksRUFBRSw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztFQUNqRixDQUFDLENBQUM7RUFDRlgsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDOURBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM0QixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7RUFDOUQsQ0FBQyxDQUFDO0VBQ0Y5Qiw2Q0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ3REQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUdELENBQUMsQ0FBQzRCLE1BQU0sS0FBSzVCLENBQUMsQ0FBQzZCLGFBQWEsRUFBQztNQUM1QjtJQUNKO0lBQ0FoQyw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDLENBQUM7SUFDakI7RUFDSixDQUFDLENBQUM7RUFDRjs7RUFFQTlCLDZDQUFDLENBQUNvQixRQUFRLENBQUMsQ0FBQ2xCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsaUVBQWlFLEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ2xHQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCSiw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNhLE1BQU0sQ0FBQyxDQUFDO0lBQzFDYixrREFBTSxDQUFDO01BQ0hxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRTtRQUNGSSxNQUFNLEVBQUUsZ0NBQWdDO1FBQ3hDQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFDRCxLQUFLO1FBQ25Db0IsT0FBTyxFQUFFcEMsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLElBQUk7TUFDOUIsQ0FBQztNQUNEMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQnJDLDZDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQ3VDLElBQUksQ0FBQ0QsUUFBUSxDQUFDM0IsSUFBSSxDQUFDNEIsSUFBSSxDQUFDO1VBQzFFdkMsNkNBQUMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDUyxXQUFXLENBQUMsU0FBUyxDQUFDO1VBQ2pFO1VBQ0ErQixVQUFVLENBQUMsWUFBVztZQUNsQkMsd0JBQXdCLENBQUN6Qyw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM7VUFDL0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNYO01BQ0osQ0FBQztNQUNEMEMsS0FBSyxFQUFFLFNBQUFBLENBQVNBLEtBQUssRUFBQztRQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUN0QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUNGO0VBQ0ExQyw2Q0FBQyxDQUFDb0IsUUFBUSxDQUFDLENBQUNsQixFQUFFLENBQUMsT0FBTyxFQUFFLG9FQUFvRSxFQUFFLFVBQVNDLENBQUMsRUFBQztJQUNyR0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFDRkosNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSwrRkFBK0YsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDaElBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbkIsSUFBS3lDLFdBQVcsR0FBRzdDLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDd0IsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFdBQVcsRUFBRSxRQUFRLENBQUM7RUFDdEMsQ0FBQyxDQUFDO0VBQ0Y3Qyw2Q0FBQyxDQUFDb0IsUUFBUSxDQUFDLENBQUNsQixFQUFFLENBQUMsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLFVBQVNDLENBQUMsRUFBQztJQUM1RUEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJNEMsV0FBVyxHQUFHaEQsNkNBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsSUFBSW9DLE9BQU8sR0FBR3BDLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRWhDO0lBQ0EsSUFBSSxDQUFDc0MsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLEVBQUU7TUFDNUQ7SUFDSjtJQUVBLElBQUl0QyxJQUFJLEdBQUc7TUFDUEksTUFBTSxFQUFFLG9CQUFvQjtNQUM1QkMsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztNQUNuQ29CLE9BQU8sRUFBRUE7SUFDYixDQUFDO0lBQ0RwQyxrREFBTSxDQUFDO01BQ0hxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRUEsSUFBSTtNQUNWMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQnJDLDZDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ2tELE9BQU8sQ0FBQyxPQUFPLENBQUM7VUFDOURGLFdBQVcsQ0FBQ3BCLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDdUIsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxNQUFJO1VBQ0RSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUM7UUFDekI7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVEdEMsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSwwREFBMEQsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDNUZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJKLDZDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ2tELE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOURsRCw2Q0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM4QixPQUFPLENBQUMsQ0FBQztFQUU5QyxDQUFDLENBQUM7RUFDTDtFQUNBOUIsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxnREFBZ0QsRUFBRSxVQUFTQyxDQUFDLEVBQUM7SUFDbkZBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSTRDLFdBQVcsR0FBR2hELDZDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hCQSxrREFBTSxDQUFDO01BQ0pxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRTtRQUNGSSxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFDRCxLQUFLO1FBQ25Db0IsT0FBTyxFQUFFcEMsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLFNBQVM7TUFDbkMsQ0FBQztNQUNEMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QixJQUFHQSxRQUFRLENBQUNELE9BQU8sRUFBQztVQUNoQixJQUFJRSxJQUFJLEdBQUdELFFBQVEsQ0FBQzNCLElBQUksQ0FBQzRCLElBQUk7VUFDN0I7VUFDQSxJQUFJYSxjQUFjLEdBQUdwRCw2Q0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNxRCxNQUFNO1VBQzlEO1VBQ0FkLElBQUksR0FBR0EsSUFBSSxDQUFDZSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUlGLGNBQWMsR0FBRyxDQUFDO1VBQ3BESixXQUFXLENBQUMxQyxNQUFNLENBQUMsQ0FBQyxDQUFDaUQsTUFBTSxDQUFDaEIsSUFBSSxDQUFDO1VBQ2pDO1VBQ0FDLFVBQVUsQ0FBQyxZQUFXO1lBQ2xCQyx3QkFBd0IsQ0FBQ3pDLDZDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztVQUMvRCxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ1gsQ0FBQyxNQUFJO1VBQ0QyQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDO1FBQ3pCO01BQ0osQ0FBQztNQUNESSxLQUFLLEVBQUUsU0FBQUEsQ0FBU0EsS0FBSyxFQUFDO1FBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO01BQ3RCO0lBQ0gsQ0FBQyxDQUFDO0VBQ0wsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTFDLDZDQUFDLENBQUNvQixRQUFRLENBQUMsQ0FBQ2xCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdURBQXVELEVBQUUsWUFBVztJQUMzRixJQUFJc0QsQ0FBQyxHQUFHeEQsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3lELEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUlDLElBQUksR0FBRzFELDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyRCxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDM0RELElBQUksQ0FBQ2xELElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDb0QsTUFBTSxDQUFDSixDQUFDLEtBQUssb0JBQW9CLENBQUM7SUFDL0UsSUFBSUEsQ0FBQyxLQUFLLG9CQUFvQixFQUFFO01BQzlCLElBQUlLLElBQUksR0FBR0gsSUFBSSxDQUFDbEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDO01BQy9DLElBQUlxRCxJQUFJLENBQUNSLE1BQU0sSUFBSVEsSUFBSSxDQUFDQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsRUFBRTtRQUM3REQsSUFBSSxDQUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNQLE9BQU8sQ0FBQyxRQUFRLENBQUM7TUFDbEM7SUFDRjtFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBbEQsNkNBQUMsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDbEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxvREFBb0QsRUFBRSxZQUFXO0lBQ3hGLElBQUl3RCxJQUFJLEdBQUcxRCw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkQsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQzNELElBQUlFLElBQUksR0FBR0gsSUFBSSxDQUFDbEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQy9DLElBQUlxRCxJQUFJLENBQUNSLE1BQU0sSUFBSVEsSUFBSSxDQUFDQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsRUFBRTtNQUM3REQsSUFBSSxDQUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNQLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEM7RUFDRixDQUFDLENBQUM7O0VBRUY7RUFDQWxELDZDQUFDLENBQUNvQixRQUFRLENBQUMsQ0FBQ2xCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0RBQWdELEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ25GQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCSiw2Q0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUFDNkMsTUFBTSxDQUFDLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0VBQ0Y7RUFDQW5ELDZDQUFDLENBQUNvQixRQUFRLENBQUMsQ0FBQ2xCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsa0RBQWtELEVBQUUsVUFBU0MsQ0FBQyxFQUFDO0lBQ3JGQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUkyRCxRQUFRLEdBQUcvRCw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNnRSxTQUFTLENBQUMsQ0FBQzs7SUFFckQ7SUFDQSxJQUFJQyxLQUFLLEdBQUdqRSw2Q0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUN5RCxHQUFHLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUNRLEtBQUssRUFBRTtNQUNWO01BQ0FqRSw2Q0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNtRCxNQUFNLENBQUMsQ0FBQzs7TUFFbkM7TUFDQW5ELDZDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2tFLEtBQUssQ0FBQyw4SEFBOEgsQ0FBQztNQUMxSjtJQUNGO0lBQ0FsRSxrREFBTSxDQUFDO01BQ0hxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRTtRQUNGSSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFDRCxLQUFLO1FBQ25DK0MsUUFBUSxFQUFFQTtNQUNkLENBQUM7TUFDRDFCLE9BQU8sRUFBRSxTQUFBQSxDQUFTQyxRQUFRLEVBQUU7UUFDeEIsSUFBSUEsUUFBUSxDQUFDRCxPQUFPLEVBQUU7VUFDbEI4QixhQUFhLENBQUM3QixRQUFRLENBQUMzQixJQUFJLENBQUM7UUFDaEMsQ0FBQyxNQUFNO1VBQ0h5RCxXQUFXLENBQUM5QixRQUFRLENBQUMzQixJQUFJLENBQUM7UUFDOUI7TUFDSixDQUFDO01BQ0QrQixLQUFLLEVBQUUsU0FBQUEsQ0FBUzJCLEdBQUcsRUFBRUMsTUFBTSxFQUFFNUIsS0FBSyxFQUFFO1FBQ2hDQyxPQUFPLENBQUNELEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztRQUNuQzZCLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQztNQUMvRTtJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLFNBQVM5Qix3QkFBd0JBLENBQUMrQixNQUFNLEVBQUU7SUFDeEMsSUFBSSxDQUFDQSxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDbkIsTUFBTSxFQUFFO0lBQy9CbUIsTUFBTSxDQUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNpRSxJQUFJLENBQUMsWUFBVztNQUM1QyxJQUFJQyxHQUFHLEdBQUcxRSw2Q0FBQyxDQUFDLElBQUksQ0FBQztNQUNqQixJQUFJMEUsR0FBRyxDQUFDWixRQUFRLENBQUMsMkJBQTJCLENBQUMsRUFBRVksR0FBRyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDO01BQ3JFRCxHQUFHLENBQUNDLE9BQU8sQ0FBQztRQUFFQyxLQUFLLEVBQUUsTUFBTTtRQUFFQyxjQUFjLEVBQUVMO01BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQztJQUNGQSxNQUFNLENBQUNoRSxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQ2lFLElBQUksQ0FBQyxZQUFXO01BQzNELElBQUlmLElBQUksR0FBRzFELDZDQUFDLENBQUMsSUFBSSxDQUFDO01BQ2xCLElBQUk4RSxZQUFZLEdBQUdwQixJQUFJLENBQUNsRCxJQUFJLENBQUMsNEJBQTRCLENBQUM7TUFDMUQsSUFBSXVFLFVBQVUsR0FBR3JCLElBQUksQ0FBQ2xELElBQUksQ0FBQywwQkFBMEIsQ0FBQztNQUN0RCxJQUFJd0UsU0FBUyxHQUFHdEIsSUFBSSxDQUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDO01BQ2xELElBQUl5RSxXQUFXLEdBQUd2QixJQUFJLENBQUNsRCxJQUFJLENBQUMseUJBQXlCLENBQUM7TUFDdEQsQ0FBQ3NFLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxTQUFTLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLFVBQVNyQixJQUFJLEVBQUU7UUFDM0QsSUFBSUEsSUFBSSxDQUFDUixNQUFNLElBQUlRLElBQUksQ0FBQ0MsUUFBUSxDQUFDLDJCQUEyQixDQUFDLEVBQUVELElBQUksQ0FBQ2MsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RixJQUFJZCxJQUFJLENBQUNSLE1BQU0sRUFBRVEsSUFBSSxDQUFDYyxPQUFPLENBQUM7VUFBRUMsS0FBSyxFQUFFLE1BQU07VUFBRUMsY0FBYyxFQUFFTDtRQUFPLENBQUMsQ0FBQztNQUMxRSxDQUFDLENBQUM7TUFDRixJQUFJVyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ3RCLEdBQUcsQ0FBQyxDQUFDLEtBQUssb0JBQW9CO01BQzdEQyxJQUFJLENBQUNsRCxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQ29ELE1BQU0sQ0FBQ3VCLGFBQWEsQ0FBQztNQUNsRSxJQUFJRixXQUFXLENBQUM1QixNQUFNLEVBQUU7UUFDdEIsSUFBSTRCLFdBQVcsQ0FBQ25CLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFbUIsV0FBVyxDQUFDTixPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3JGTSxXQUFXLENBQUNOLE9BQU8sQ0FBQztVQUNsQkMsS0FBSyxFQUFFLE1BQU07VUFDYkMsY0FBYyxFQUFFTCxNQUFNO1VBQ3RCWSxXQUFXLEVBQUVILFdBQVcsQ0FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxtQkFBbUI7VUFDbkUwRSxrQkFBa0IsRUFBRSxDQUFDO1VBQ3JCQyxVQUFVLEVBQUUsSUFBSTtVQUNoQnJELElBQUksRUFBRTtZQUNKWixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtZQUNwQ3BCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCeUUsS0FBSyxFQUFFLEdBQUc7WUFDVjVFLElBQUksRUFBRSxTQUFBQSxDQUFTNkUsTUFBTSxFQUFFO2NBQ3JCLE9BQU87Z0JBQ0x6RSxNQUFNLEVBQUUseUJBQXlCO2dCQUNqQ0MsS0FBSyxFQUFFQyxzQkFBc0IsQ0FBQ0QsS0FBSztnQkFDbkN5RSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0UsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBSSxJQUFJLENBQUM7Z0JBQ3RCQyxTQUFTLEVBQUVaLFNBQVMsQ0FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUk7Y0FDaEMsQ0FBQztZQUNILENBQUM7WUFDRG9DLGNBQWMsRUFBRSxTQUFBQSxDQUFTbEYsSUFBSSxFQUFFO2NBQzdCLElBQUlBLElBQUksQ0FBQzBCLE9BQU8sSUFBSTFCLElBQUksQ0FBQ0EsSUFBSSxJQUFJQSxJQUFJLENBQUNBLElBQUksQ0FBQ21GLE9BQU8sRUFBRTtnQkFDbEQsT0FBTztrQkFDTEEsT0FBTyxFQUFFbkYsSUFBSSxDQUFDQSxJQUFJLENBQUNtRixPQUFPO2tCQUMxQkMsVUFBVSxFQUFFcEYsSUFBSSxDQUFDQSxJQUFJLENBQUNvRjtnQkFDeEIsQ0FBQztjQUNIO2NBQ0EsT0FBTztnQkFBRUQsT0FBTyxFQUFFO2NBQUcsQ0FBQztZQUN4QjtVQUNGO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVMzRSxTQUFTQSxDQUFFUixJQUFJLEVBQUVxRixnQkFBZ0IsRUFBRUMsbUJBQW1CLEVBQUU7SUFDL0RqRyxrREFBTSxDQUFDO01BQ0xxQixHQUFHLEVBQUVKLHNCQUFzQixDQUFDaUIsUUFBUTtNQUNwQ0MsSUFBSSxFQUFFLE1BQU07TUFDWnhCLElBQUksRUFBRUEsSUFBSTtNQUNWMEIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUV6QnRDLDZDQUFDLENBQUNnRyxnQkFBZ0IsQ0FBQyxDQUFDekQsSUFBSSxDQUFDRCxRQUFRLENBQUMzQixJQUFJLENBQUM0QixJQUFJLENBQUM7UUFFNUN2Qyw2Q0FBQyxDQUFDaUcsbUJBQW1CLENBQUMsQ0FBQzFELElBQUksQ0FBQ0QsUUFBUSxDQUFDM0IsSUFBSSxDQUFDdUYsZUFBZSxDQUFDO01BQzVELENBQUM7TUFDRHhELEtBQUssRUFBRSxTQUFBQSxDQUFTQSxLQUFLLEVBQUM7UUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDLENBQUM7RUFDSjtFQUNBLFNBQVN5QixhQUFhQSxDQUFDeEQsSUFBSSxFQUFFO0lBQzNCO0lBQ0FYLDZDQUFDLENBQUMsMkRBQTJELENBQUMsQ0FBQ21ELE1BQU0sQ0FBQyxDQUFDOztJQUV2RTtJQUNBbkQsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDa0UsS0FBSyxDQUMxQyxpQ0FBaUN2RCxJQUFJLENBQUN3RixPQUFPLFNBQ2pELENBQUM7O0lBRUQ7SUFDQSxJQUFJeEYsSUFBSSxDQUFDeUYsU0FBUyxFQUFFO01BQ2hCcEcsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDdUQsTUFBTSxDQUMzQywyQkFBMkI1QyxJQUFJLENBQUN5RixTQUFTLFNBQzdDLENBQUM7SUFDTDs7SUFFQTs7SUFFQTtFQUNKO0VBRUEsU0FBU2hDLFdBQVdBLENBQUN6RCxJQUFJLEVBQUU7SUFDdkJnQyxPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLEVBQUUvQixJQUFJLENBQUN3RixPQUFPLENBQUM7SUFDckM7RUFDSjtBQUVBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9idWlsZGVyL2J1aWxkZXIuc2Nzcz9mMjE1Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5qUXVlcnkoZnVuY3Rpb24oKXtcclxuICAgIC8vIHNlbGVjdDJcclxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBsZXQgcG9wdXBUaXRsZSA9ICQodGhpcykuZGF0YSgndGl0bGUnKTtcclxuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1oZWFkZXIgaDInKS50ZXh0KHBvcHVwVGl0bGUpO1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuZmFkZUluKCk7XHJcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcclxuICAgICAgICAvLyBsb2FkIHByZXZpZXdcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnbWVfbG9hZF9wcmV2aWV3X2RhdGEnLFxyXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcclxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZV9hamF4KGRhdGEsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1saXN0JywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uJyk7XHJcbiAgICB9KTtcclxuICAgIC8vIHBhZ2luYXRpb24gXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBjb25zdCBwYWdlUGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zcGxpdCgnPycpWzFdKTtcclxuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnZVBhcmFtLmdldCgncGFnZWQnKTtcclxuICAgICAgICBsZXQgZGF0YVR5cGUgPSAkKHRoaXMpLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuc2libGluZ3MoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLXNlY3Rpb25zJykuZmluZCgnbGkgYS5hY3RpdmUnKS5kYXRhKCd0eXBlJyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2xvYWRfcHJldmlld19kYXRhJyxcclxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHBhZ2VkOiBwYWdlTnVtYmVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuZmFkZU91dCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHRoaXMpLmZhZGVPdXQoKTtcclxuICAgICAgICAvLyQoJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9KTtcclxuICAgIC8vIG5ldyB0ZW1wbGF0ZVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLW5ldy10ZW1wbGF0ZS1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5lZGl0LWxpbmsnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVJbigpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICduZXdfb3JfdXBkYXRlX2J1aWxkZXJfdGVtcGxhdGUnLFxyXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ2lkJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5jb250ZW50LWxvYWRlcicpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlbGVjdDIgYW5kIGNvbmRpdGlvbiBVSSBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gcHJldmlldyBsaW5rIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1lbGVtZW50b3ItbGluaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIGxldCAgcHJldmlld0xJbmsgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICB3aW5kb3cub3BlbihwcmV2aWV3TEluaywgJ19ibGFuaycpOyBcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmRlbGV0ZS1saW5rJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHBvc3RfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXHJcbiAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGVtcGxhdGU/JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2RlbGV0ZV90ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxyXG4gICAgICAgICAgICBwb3N0X2lkOiBwb3N0X2lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc19idXR0b24ucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlT3V0KCk7XHJcblxyXG4gICAgIH0pO1xyXG4gIC8vIGFkZCBjb25kaXRpb24gICBcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjbWUtYWRkLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdtZV9hZGRfY29uZGl0aW9uJyxcclxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgncG9zdC1pZCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXNwb25zZS5kYXRhLmh0bWw7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBudW1iZXIgb2YgY29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkNvdW50ID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGluZGV4IG51bWJlcnMgaW4gdGhlIEhUTUxcclxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWzBcXF0vZywgYFske2NvbmRpdGlvbkNvdW50fV1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfYnV0dG9uLnBhcmVudCgpLmJlZm9yZShodG1sKTtcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MiBhbmQgY29uZGl0aW9uIFVJIGZvciBuZXcgcm93XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8gRGlzcGxheS1vbiBjaGFuZ2U6IHNob3cvaGlkZSBzZWxlY3RpdmUgc2luZ3VsYXIgZmllbGRzXHJcbiAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tZS1jb25kaXRpb24tZGlzcGxheS1vbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHYgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdmFyICRyb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJyk7XHJcbiAgICAkcm93LmZpbmQoJy5tZS1idWlsZGVyLWNvbmRpdGlvbi1zZWxlY3RpdmUnKS50b2dnbGUodiA9PT0gJ3NlbGVjdGl2ZV9zaW5ndWxhcicpO1xyXG4gICAgaWYgKHYgIT09ICdzZWxlY3RpdmVfc2luZ3VsYXInKSB7XHJcbiAgICAgIHZhciAkc2VsID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xyXG4gICAgICBpZiAoJHNlbC5sZW5ndGggJiYgJHNlbC5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSB7XHJcbiAgICAgICAgJHNlbC52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUG9zdCB0eXBlIGNoYW5nZTogY2xlYXIgcG9zdCBzZWxlY3QgKHNlbGVjdGVkIGl0ZW1zIG1heSBiZSBmcm9tIGFub3RoZXIgdHlwZSlcclxuICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1lLWJ1aWxkZXItcG9zdC10eXBlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJHJvdyA9ICQodGhpcykuY2xvc2VzdCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKTtcclxuICAgIHZhciAkc2VsID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xyXG4gICAgaWYgKCRzZWwubGVuZ3RoICYmICRzZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkge1xyXG4gICAgICAkc2VsLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5yZW1vdmUtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIC8vIHN1Ym1pdCB0ZW1wbGF0ZVxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmb3JtRGF0YSA9ICQoJyNtZS1hZGQtdGVtcGxhdGUtZm9ybScpLnNlcmlhbGl6ZSgpO1xyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiB0aXRsZSBpcyBlbXB0eVxyXG4gICAgbGV0IHRpdGxlID0gJCgnI3RlbXBsYXRlX3RpdGxlJykudmFsKCk7XHJcbiAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAkKCcudGVtcGxhdGUtdGl0bGUtZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBlcnJvciBtZXNzYWdlIGFmdGVyIHRoZSB0aXRsZSBpbnB1dFxyXG4gICAgICAkKCcjdGVtcGxhdGVfdGl0bGUnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZS1lcnJvclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDVweDtcIj5QbGVhc2UgZW50ZXIgYSB0ZW1wbGF0ZSB0aXRsZTwvc3Bhbj4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcclxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQUpBWCBFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBtZUJ1aWxkZXJJbml0Q29uZGl0aW9uVUkoJHBvcHVwKSB7XHJcbiAgICBpZiAoISRwb3B1cCB8fCAhJHBvcHVwLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgJHBvcHVwLmZpbmQoJyN0ZW1wbGF0ZV90eXBlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICRlbCA9ICQodGhpcyk7XHJcbiAgICAgIGlmICgkZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJGVsLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuICAgICAgJGVsLnNlbGVjdDIoeyB3aWR0aDogJzEwMCUnLCBkcm9wZG93blBhcmVudDogJHBvcHVwIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkcG9wdXAuZmluZCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgJHJvdyA9ICQodGhpcyk7XHJcbiAgICAgIHZhciAkZGlzcGxheVR5cGUgPSAkcm93LmZpbmQoJy5tZS1jb25kaXRpb24tZGlzcGxheS10eXBlJyk7XHJcbiAgICAgIHZhciAkZGlzcGxheU9uID0gJHJvdy5maW5kKCcubWUtY29uZGl0aW9uLWRpc3BsYXktb24nKTtcclxuICAgICAgdmFyICRwb3N0VHlwZSA9ICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItcG9zdC10eXBlJyk7XHJcbiAgICAgIHZhciAkcG9zdFNlbGVjdCA9ICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItcG9zdC1zZWxlY3QnKTtcclxuICAgICAgWyRkaXNwbGF5VHlwZSwgJGRpc3BsYXlPbiwgJHBvc3RUeXBlXS5mb3JFYWNoKGZ1bmN0aW9uKCRzZWwpIHtcclxuICAgICAgICBpZiAoJHNlbC5sZW5ndGggJiYgJHNlbC5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSAkc2VsLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuICAgICAgICBpZiAoJHNlbC5sZW5ndGgpICRzZWwuc2VsZWN0Mih7IHdpZHRoOiAnMTAwJScsIGRyb3Bkb3duUGFyZW50OiAkcG9wdXAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgc2hvd1NlbGVjdGl2ZSA9ICRkaXNwbGF5T24udmFsKCkgPT09ICdzZWxlY3RpdmVfc2luZ3VsYXInO1xyXG4gICAgICAkcm93LmZpbmQoJy5tZS1idWlsZGVyLWNvbmRpdGlvbi1zZWxlY3RpdmUnKS50b2dnbGUoc2hvd1NlbGVjdGl2ZSk7XHJcbiAgICAgIGlmICgkcG9zdFNlbGVjdC5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoJHBvc3RTZWxlY3QuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJHBvc3RTZWxlY3Quc2VsZWN0MignZGVzdHJveScpO1xyXG4gICAgICAgICRwb3N0U2VsZWN0LnNlbGVjdDIoe1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkcG9wdXAsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJHBvc3RTZWxlY3QuZGF0YSgncGxhY2Vob2xkZXInKSB8fCAnU2VhcmNoIG9yIHNlbGVjdOKApicsXHJcbiAgICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXHJcbiAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRlbGF5OiAyNTAsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtZV9idWlsZGVyX3NlYXJjaF9wb3N0cycsXHJcbiAgICAgICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm0gfHwgJycsXHJcbiAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgcG9zdF90eXBlOiAkcG9zdFR5cGUudmFsKCkgfHwgJ3Bvc3QnXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzICYmIGRhdGEuZGF0YSAmJiBkYXRhLmRhdGEucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5kYXRhLnJlc3VsdHMsXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRhdGEuZGF0YS5wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHRzOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlyZV9hamF4IChkYXRhLCBkaXNwbGF5X3NlbGVjdG9yLCBwYWdpbmF0aW9uX3NlbGVjdG9yKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoZGlzcGxheV9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQocGFnaW5hdGlvbl9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLnBhZ2luYXRpb25faHRtbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAvLyBDbGVhbiB1cCBvbGQgbWVzc2FnZXMgZmlyc3QgdG8gYXZvaWQgZHVwbGljYXRlIGVudHJpZXNcclxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgLnN1Y2Nlc3MtbWVzc2FnZSwgLmVkaXQtbGluaycpLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtZm9ybS1hY3Rpb25zIGJ1dHRvbicpLmFmdGVyKFxyXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPiR7ZGF0YS5tZXNzYWdlfTwvc3Bhbj5gXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFByZXBlbmQgYW4gZWRpdCBsaW5rIGlmIGF2YWlsYWJsZVxyXG4gICAgaWYgKGRhdGEuZWRpdF9saW5rKSB7XHJcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWZvcm0tYWN0aW9ucyBidXR0b24nKS5iZWZvcmUoXHJcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cImVkaXQtbGlua1wiPiR7ZGF0YS5lZGl0X2xpbmt9PC9zcGFuPmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wdGlvbmFsbHkgY2xvc2UgdGhlIHBvcHVwIG9yIHJlZGlyZWN0XHJcblxyXG4gICAgLy8gQWRkIGxvZ2ljIGhlcmUsIGUuZy4sIHNldCBhIHRpbWVvdXQgdG8gY2xvc2Ugb3IgcmVkaXJlY3RcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZGF0YSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZGF0YS5tZXNzYWdlKTtcclxuICAgIC8vIFlvdSBjb3VsZCBhbHNvIGRpc3BsYXkgdGhpcyBlcnJvciB0byB0aGUgdXNlciBpbiB0aGUgVUkgYXMgbmVlZGVkXHJcbn1cclxuXHJcbn0pOyAiXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInBvcHVwVGl0bGUiLCJkYXRhIiwidGV4dCIsImZhZGVJbiIsImRhdGFUeXBlIiwiYWN0aW9uIiwibm9uY2UiLCJtZV9idWlsZGVyX2FqYXhfb2JqZWN0IiwiZGF0YV90eXBlIiwiZmlyZV9hamF4IiwiZG9jdW1lbnQiLCJ1cmwiLCJhdHRyIiwicGFnZVBhcmFtIiwiVVJMU2VhcmNoUGFyYW1zIiwic3BsaXQiLCJwYWdlTnVtYmVyIiwiZ2V0IiwicGFyZW50cyIsInBhZ2VkIiwiZmFkZU91dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJhamF4IiwiYWpheF91cmwiLCJ0eXBlIiwicG9zdF9pZCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImh0bWwiLCJzZXRUaW1lb3V0IiwibWVCdWlsZGVySW5pdENvbmRpdGlvblVJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJldmlld0xJbmsiLCJ3aW5kb3ciLCJvcGVuIiwidGhpc19idXR0b24iLCJjb25maXJtIiwidHJpZ2dlciIsInJlbW92ZSIsImNvbmRpdGlvbkNvdW50IiwibGVuZ3RoIiwicmVwbGFjZSIsImJlZm9yZSIsInYiLCJ2YWwiLCIkcm93IiwiY2xvc2VzdCIsInRvZ2dsZSIsIiRzZWwiLCJoYXNDbGFzcyIsImZvcm1EYXRhIiwic2VyaWFsaXplIiwidGl0bGUiLCJhZnRlciIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVFcnJvciIsInhociIsInN0YXR1cyIsImFsZXJ0IiwiJHBvcHVwIiwiZWFjaCIsIiRlbCIsInNlbGVjdDIiLCJ3aWR0aCIsImRyb3Bkb3duUGFyZW50IiwiJGRpc3BsYXlUeXBlIiwiJGRpc3BsYXlPbiIsIiRwb3N0VHlwZSIsIiRwb3N0U2VsZWN0IiwiZm9yRWFjaCIsInNob3dTZWxlY3RpdmUiLCJwbGFjZWhvbGRlciIsIm1pbmltdW1JbnB1dExlbmd0aCIsImFsbG93Q2xlYXIiLCJkZWxheSIsInBhcmFtcyIsInNlYXJjaCIsInRlcm0iLCJwYWdlIiwicG9zdF90eXBlIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwicGFnaW5hdGlvbiIsImRpc3BsYXlfc2VsZWN0b3IiLCJwYWdpbmF0aW9uX3NlbGVjdG9yIiwicGFnaW5hdGlvbl9odG1sIiwibWVzc2FnZSIsImVkaXRfbGluayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9