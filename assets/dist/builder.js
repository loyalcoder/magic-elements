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
  let selectedBuilderType = '';
  // select2
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().siblings().find('a').removeClass('active');
    let popupTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('title');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-header h2').text(popupTitle);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-popup').fadeIn();
    let dataType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a.active').data('type');
    selectedBuilderType = dataType;
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
    var $popup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup');
    $popup.fadeIn();
    $popup.find('.magic-elements-addnew-content').addClass('loading');
    $popup.find('.content-loader').html('');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'new_or_update_builder_template',
        nonce: me_builder_ajax_object.nonce,
        post_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id'),
        selected_type: selectedBuilderType
      },
      success: function (response) {
        if (response.success) {
          $popup.find('.content-loader').html(response.data.html);
          $popup.find('.magic-elements-addnew-content').removeClass('loading');
          // Initialize select2 and condition UI after content is loaded
          setTimeout(function () {
            meBuilderInitConditionUI($popup);
          }, 100);
        } else {
          var message = response && response.data && response.data.message ? response.data.message : 'Failed to load template form.';
          $popup.find('.content-loader').html('<p class="me-builder-error">' + message + '</p>');
          $popup.find('.magic-elements-addnew-content').removeClass('loading');
        }
      },
      error: function () {
        $popup.find('.content-loader').html('<p class="me-builder-error">Failed to load template form.</p>');
        $popup.find('.magic-elements-addnew-content').removeClass('loading');
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
      toggleConditionFields($el.val(), $popup);
      $el.on('change', function () {
        toggleConditionFields(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(), $popup);
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
  function toggleConditionFields(templateType, $popup) {
    var isMegaMenu = templateType === 'mega_menu';
    $popup.find('.magic-elements-add-condition-header').toggle(!isMegaMenu);
    $popup.find('.magic-elements-condition-wrap').toggle(!isMegaMenu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixTQUFTLEVBQUU7TUFDaEJ6Ryw2Q0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMyRCxNQUFNLENBQzNDLDJCQUEyQi9DLElBQUksQ0FBQzZGLFNBQVMsU0FDN0MsQ0FBQztJQUNMOztJQUVBOztJQUVBO0VBQ0o7RUFFQSxTQUFTakMsV0FBV0EsQ0FBQzVELElBQUksRUFBRTtJQUN2QjBDLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDLFFBQVEsRUFBRWxDLElBQUksQ0FBQ2lDLE9BQU8sQ0FBQztJQUNyQztFQUNKO0FBRUEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5zY3NzP2YyMTUiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYnVpbGRlci9idWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5qUXVlcnkoZnVuY3Rpb24oKXtcbiAgICBsZXQgc2VsZWN0ZWRCdWlsZGVyVHlwZSA9ICcnO1xuICAgIC8vIHNlbGVjdDJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGxldCBwb3B1cFRpdGxlID0gJCh0aGlzKS5kYXRhKCd0aXRsZScpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1oZWFkZXIgaDInKS50ZXh0KHBvcHVwVGl0bGUpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICBsZXQgZGF0YVR5cGUgPSAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEuYWN0aXZlJykuZGF0YSgndHlwZScpO1xuICAgICAgICBzZWxlY3RlZEJ1aWxkZXJUeXBlID0gZGF0YVR5cGU7XG4gICAgICAgIC8vIGxvYWQgcHJldmlld1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2xvYWRfcHJldmlld19kYXRhJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZVxuICAgICAgICB9O1xuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcbiAgICB9KTtcbiAgICAvLyBwYWdpbmF0aW9uIFxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbiBhJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHBhZ2VQYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnZVBhcmFtLmdldCgncGFnZWQnKTtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLnNpYmxpbmdzKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1zZWN0aW9ucycpLmZpbmQoJ2xpIGEuYWN0aXZlJykuZGF0YSgndHlwZScpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2xvYWRfcHJldmlld19kYXRhJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZSxcbiAgICAgICAgICAgIHBhZ2VkOiBwYWdlTnVtYmVyXG4gICAgICAgIH07XG4gICAgICAgIGZpcmVfYWpheChkYXRhLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctbGlzdCcsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbicpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtY2xvc2UtcG9wdXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykuZmFkZU91dCgpO1xuICAgIH0pO1xuICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5mYWRlT3V0KCk7XG4gICAgICAgIC8vJCgnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcbiAgICAvLyBuZXcgdGVtcGxhdGVcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLW5ldy10ZW1wbGF0ZS1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5lZGl0LWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgJHBvcHVwID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpO1xuICAgICAgICAkcG9wdXAuZmFkZUluKCk7XG4gICAgICAgICRwb3B1cC5maW5kKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LWNvbnRlbnQnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAkcG9wdXAuZmluZCgnLmNvbnRlbnQtbG9hZGVyJykuaHRtbCgnJyk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbmV3X29yX3VwZGF0ZV9idWlsZGVyX3RlbXBsYXRlJyxcbiAgICAgICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgICAgICBwb3N0X2lkOiAkKHRoaXMpLmRhdGEoJ2lkJyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfdHlwZTogc2VsZWN0ZWRCdWlsZGVyVHlwZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKXsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkcG9wdXAuZmluZCgnLmNvbnRlbnQtbG9hZGVyJykuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAkcG9wdXAuZmluZCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3QyIGFuZCBjb25kaXRpb24gVUkgYWZ0ZXIgY29udGVudCBpcyBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkcG9wdXApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5tZXNzYWdlKSA/IHJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9hZCB0ZW1wbGF0ZSBmb3JtLic7XG4gICAgICAgICAgICAgICAgICAgICRwb3B1cC5maW5kKCcuY29udGVudC1sb2FkZXInKS5odG1sKCc8cCBjbGFzcz1cIm1lLWJ1aWxkZXItZXJyb3JcIj4nICsgbWVzc2FnZSArICc8L3A+Jyk7XG4gICAgICAgICAgICAgICAgICAgICRwb3B1cC5maW5kKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkcG9wdXAuZmluZCgnLmNvbnRlbnQtbG9hZGVyJykuaHRtbCgnPHAgY2xhc3M9XCJtZS1idWlsZGVyLWVycm9yXCI+RmFpbGVkIHRvIGxvYWQgdGVtcGxhdGUgZm9ybS48L3A+Jyk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmZpbmQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctY29udGVudCcpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHByZXZpZXcgbGluayBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctdGVtcGxhdGUtbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAucHJldmlldy1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAucHJldmlldy1saW5rLCAubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5lZGl0LWVsZW1lbnRvci1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICBsZXQgIHByZXZpZXdMSW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIHdpbmRvdy5vcGVuKHByZXZpZXdMSW5rLCAnX2JsYW5rJyk7IFxuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtIC5kZWxldGUtbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgIGxldCBwb3N0X2lkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXG4gICAgICAgIGlmICghY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRlbXBsYXRlPycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2RlbGV0ZV90ZW1wbGF0ZScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIHBvc3RfaWQ6IHBvc3RfaWRcbiAgICAgICAgfTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1pdGVtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykuZmFkZU91dCgpO1xuXG4gICAgIH0pO1xuICAvLyBhZGQgY29uZGl0aW9uICAgXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1hZGQtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XG4gICAgICQuYWpheCh7XG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9hZGRfY29uZGl0aW9uJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdwb3N0LWlkJylcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXNwb25zZS5kYXRhLmh0bWw7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgbnVtYmVyIG9mIGNvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uQ291bnQgPSAkKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGluZGV4IG51bWJlcnMgaW4gdGhlIEhUTUxcbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXFswXFxdL2csIGBbJHtjb25kaXRpb25Db3VudH1dYCk7XG4gICAgICAgICAgICAgICAgdGhpc19idXR0b24ucGFyZW50KCkuYmVmb3JlKGh0bWwpO1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MiBhbmQgY29uZGl0aW9uIFVJIGZvciBuZXcgcm93XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVCdWlsZGVySW5pdENvbmRpdGlvblVJKCQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICB9KTtcbiAgfSk7XG4gIC8vIERpc3BsYXktb24gY2hhbmdlOiBzaG93L2hpZGUgc2VsZWN0aXZlIHNpbmd1bGFyIGZpZWxkc1xuICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1lLWNvbmRpdGlvbi1kaXNwbGF5LW9uJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSAkKHRoaXMpLnZhbCgpO1xuICAgIHZhciAkcm93ID0gJCh0aGlzKS5jbG9zZXN0KCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpO1xuICAgICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItY29uZGl0aW9uLXNlbGVjdGl2ZScpLnRvZ2dsZSh2ID09PSAnc2VsZWN0aXZlX3Npbmd1bGFyJyk7XG4gICAgaWYgKHYgIT09ICdzZWxlY3RpdmVfc2luZ3VsYXInKSB7XG4gICAgICB2YXIgJHNlbCA9ICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItcG9zdC1zZWxlY3QnKTtcbiAgICAgIGlmICgkc2VsLmxlbmd0aCAmJiAkc2VsLmhhc0NsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykpIHtcbiAgICAgICAgJHNlbC52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBQb3N0IHR5cGUgY2hhbmdlOiBjbGVhciBwb3N0IHNlbGVjdCAoc2VsZWN0ZWQgaXRlbXMgbWF5IGJlIGZyb20gYW5vdGhlciB0eXBlKVxuICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1lLWJ1aWxkZXItcG9zdC10eXBlJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyICRyb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJyk7XG4gICAgdmFyICRzZWwgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3Qtc2VsZWN0Jyk7XG4gICAgaWYgKCRzZWwubGVuZ3RoICYmICRzZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkge1xuICAgICAgJHNlbC52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyByZW1vdmUgY29uZGl0aW9uXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5yZW1vdmUtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gIH0pO1xuICAvLyBzdWJtaXQgdGVtcGxhdGVcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgI21lLXN1Ym1pdC10ZW1wbGF0ZScsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSAkKCcjbWUtYWRkLXRlbXBsYXRlLWZvcm0nKS5zZXJpYWxpemUoKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiB0aXRsZSBpcyBlbXB0eVxuICAgIGxldCB0aXRsZSA9ICQoJyN0ZW1wbGF0ZV90aXRsZScpLnZhbCgpO1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZVxuICAgICAgJCgnLnRlbXBsYXRlLXRpdGxlLWVycm9yJykucmVtb3ZlKCk7XG4gICAgICBcbiAgICAgIC8vIEFkZCBlcnJvciBtZXNzYWdlIGFmdGVyIHRoZSB0aXRsZSBpbnB1dFxuICAgICAgJCgnI3RlbXBsYXRlX3RpdGxlJykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwidGVtcGxhdGUtdGl0bGUtZXJyb3JcIiBzdHlsZT1cImNvbG9yOiByZWQ7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA1cHg7XCI+UGxlYXNlIGVudGVyIGEgdGVtcGxhdGUgdGl0bGU8L3NwYW4+Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9zdWJtaXRfdGVtcGxhdGUnLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBmb3JtRGF0YTogZm9ybURhdGEsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBSkFYIEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkcG9wdXApIHtcbiAgICBpZiAoISRwb3B1cCB8fCAhJHBvcHVwLmxlbmd0aCkgcmV0dXJuO1xuICAgICRwb3B1cC5maW5kKCcjdGVtcGxhdGVfdHlwZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJGVsID0gJCh0aGlzKTtcbiAgICAgIGlmICgkZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJGVsLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICRlbC5zZWxlY3QyKHsgd2lkdGg6ICcxMDAlJywgZHJvcGRvd25QYXJlbnQ6ICRwb3B1cCB9KTtcbiAgICAgIHRvZ2dsZUNvbmRpdGlvbkZpZWxkcygkZWwudmFsKCksICRwb3B1cCk7XG4gICAgICAkZWwub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2dnbGVDb25kaXRpb25GaWVsZHMoJCh0aGlzKS52YWwoKSwgJHBvcHVwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICRwb3B1cC5maW5kKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJHJvdyA9ICQodGhpcyk7XG4gICAgICB2YXIgJGRpc3BsYXlUeXBlID0gJHJvdy5maW5kKCcubWUtY29uZGl0aW9uLWRpc3BsYXktdHlwZScpO1xuICAgICAgdmFyICRkaXNwbGF5T24gPSAkcm93LmZpbmQoJy5tZS1jb25kaXRpb24tZGlzcGxheS1vbicpO1xuICAgICAgdmFyICRwb3N0VHlwZSA9ICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItcG9zdC10eXBlJyk7XG4gICAgICB2YXIgJHBvc3RTZWxlY3QgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3Qtc2VsZWN0Jyk7XG4gICAgICBbJGRpc3BsYXlUeXBlLCAkZGlzcGxheU9uLCAkcG9zdFR5cGVdLmZvckVhY2goZnVuY3Rpb24oJHNlbCkge1xuICAgICAgICBpZiAoJHNlbC5sZW5ndGggJiYgJHNlbC5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSAkc2VsLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgaWYgKCRzZWwubGVuZ3RoKSAkc2VsLnNlbGVjdDIoeyB3aWR0aDogJzEwMCUnLCBkcm9wZG93blBhcmVudDogJHBvcHVwIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc2hvd1NlbGVjdGl2ZSA9ICRkaXNwbGF5T24udmFsKCkgPT09ICdzZWxlY3RpdmVfc2luZ3VsYXInO1xuICAgICAgJHJvdy5maW5kKCcubWUtYnVpbGRlci1jb25kaXRpb24tc2VsZWN0aXZlJykudG9nZ2xlKHNob3dTZWxlY3RpdmUpO1xuICAgICAgaWYgKCRwb3N0U2VsZWN0Lmxlbmd0aCkge1xuICAgICAgICBpZiAoJHBvc3RTZWxlY3QuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJHBvc3RTZWxlY3Quc2VsZWN0MignZGVzdHJveScpO1xuICAgICAgICAkcG9zdFNlbGVjdC5zZWxlY3QyKHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkcG9wdXAsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICRwb3N0U2VsZWN0LmRhdGEoJ3BsYWNlaG9sZGVyJykgfHwgJ1NlYXJjaCBvciBzZWxlY3TigKYnLFxuICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMCxcbiAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkZWxheTogMjUwLFxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbWVfYnVpbGRlcl9zZWFyY2hfcG9zdHMnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm0gfHwgJycsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcbiAgICAgICAgICAgICAgICBwb3N0X3R5cGU6ICRwb3N0VHlwZS52YWwoKSB8fCAncG9zdCdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzICYmIGRhdGEuZGF0YSAmJiBkYXRhLmRhdGEucmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLmRhdGEucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRhdGEuZGF0YS5wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHRzOiBbXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVDb25kaXRpb25GaWVsZHModGVtcGxhdGVUeXBlLCAkcG9wdXApIHtcbiAgICB2YXIgaXNNZWdhTWVudSA9IHRlbXBsYXRlVHlwZSA9PT0gJ21lZ2FfbWVudSc7XG4gICAgJHBvcHVwLmZpbmQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uLWhlYWRlcicpLnRvZ2dsZSghaXNNZWdhTWVudSk7XG4gICAgJHBvcHVwLmZpbmQoJy5tYWdpYy1lbGVtZW50cy1jb25kaXRpb24td3JhcCcpLnRvZ2dsZSghaXNNZWdhTWVudSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaXJlX2FqYXggKGRhdGEsIGRpc3BsYXlfc2VsZWN0b3IsIHBhZ2luYXRpb25fc2VsZWN0b3IpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgXG4gICAgICAgICQoZGlzcGxheV9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLmh0bWwpO1xuICAgICAgICBcbiAgICAgICAgJChwYWdpbmF0aW9uX3NlbGVjdG9yKS5odG1sKHJlc3BvbnNlLmRhdGEucGFnaW5hdGlvbl9odG1sKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU3VjY2VzcyhkYXRhKSB7XG4gICAgLy8gQ2xlYW4gdXAgb2xkIG1lc3NhZ2VzIGZpcnN0IHRvIGF2b2lkIGR1cGxpY2F0ZSBlbnRyaWVzXG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWZvcm0tYWN0aW9ucyAuc3VjY2Vzcy1tZXNzYWdlLCAuZWRpdC1saW5rJykucmVtb3ZlKCk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHN1Y2Nlc3MgbWVzc2FnZVxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgYnV0dG9uJykuYWZ0ZXIoXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPiR7ZGF0YS5tZXNzYWdlfTwvc3Bhbj5gXG4gICAgKTtcblxuICAgIC8vIFByZXBlbmQgYW4gZWRpdCBsaW5rIGlmIGF2YWlsYWJsZVxuICAgIGlmIChkYXRhLmVkaXRfbGluaykge1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtZm9ybS1hY3Rpb25zIGJ1dHRvbicpLmJlZm9yZShcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cImVkaXQtbGlua1wiPiR7ZGF0YS5lZGl0X2xpbmt9PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBPcHRpb25hbGx5IGNsb3NlIHRoZSBwb3B1cCBvciByZWRpcmVjdFxuXG4gICAgLy8gQWRkIGxvZ2ljIGhlcmUsIGUuZy4sIHNldCBhIHRpbWVvdXQgdG8gY2xvc2Ugb3IgcmVkaXJlY3Rcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGRhdGEubWVzc2FnZSk7XG4gICAgLy8gWW91IGNvdWxkIGFsc28gZGlzcGxheSB0aGlzIGVycm9yIHRvIHRoZSB1c2VyIGluIHRoZSBVSSBhcyBuZWVkZWRcbn1cblxufSk7ICJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5Iiwic2VsZWN0ZWRCdWlsZGVyVHlwZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsInBvcHVwVGl0bGUiLCJkYXRhIiwidGV4dCIsImZhZGVJbiIsImRhdGFUeXBlIiwiYWN0aW9uIiwibm9uY2UiLCJtZV9idWlsZGVyX2FqYXhfb2JqZWN0IiwiZGF0YV90eXBlIiwiZmlyZV9hamF4IiwiZG9jdW1lbnQiLCJ1cmwiLCJhdHRyIiwicGFnZVBhcmFtIiwiVVJMU2VhcmNoUGFyYW1zIiwic3BsaXQiLCJwYWdlTnVtYmVyIiwiZ2V0IiwicGFyZW50cyIsInBhZ2VkIiwiZmFkZU91dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCIkcG9wdXAiLCJodG1sIiwiYWpheCIsImFqYXhfdXJsIiwidHlwZSIsInBvc3RfaWQiLCJzZWxlY3RlZF90eXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsIm1lQnVpbGRlckluaXRDb25kaXRpb25VSSIsIm1lc3NhZ2UiLCJlcnJvciIsInByZXZpZXdMSW5rIiwid2luZG93Iiwib3BlbiIsInRoaXNfYnV0dG9uIiwiY29uZmlybSIsInRyaWdnZXIiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiY29uZGl0aW9uQ291bnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYmVmb3JlIiwidiIsInZhbCIsIiRyb3ciLCJjbG9zZXN0IiwidG9nZ2xlIiwiJHNlbCIsImhhc0NsYXNzIiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJ0aXRsZSIsImFmdGVyIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwieGhyIiwic3RhdHVzIiwiYWxlcnQiLCJlYWNoIiwiJGVsIiwic2VsZWN0MiIsIndpZHRoIiwiZHJvcGRvd25QYXJlbnQiLCJ0b2dnbGVDb25kaXRpb25GaWVsZHMiLCIkZGlzcGxheVR5cGUiLCIkZGlzcGxheU9uIiwiJHBvc3RUeXBlIiwiJHBvc3RTZWxlY3QiLCJmb3JFYWNoIiwic2hvd1NlbGVjdGl2ZSIsInBsYWNlaG9sZGVyIiwibWluaW11bUlucHV0TGVuZ3RoIiwiYWxsb3dDbGVhciIsImRlbGF5IiwicGFyYW1zIiwic2VhcmNoIiwidGVybSIsInBhZ2UiLCJwb3N0X3R5cGUiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJwYWdpbmF0aW9uIiwidGVtcGxhdGVUeXBlIiwiaXNNZWdhTWVudSIsImRpc3BsYXlfc2VsZWN0b3IiLCJwYWdpbmF0aW9uX3NlbGVjdG9yIiwicGFnaW5hdGlvbl9odG1sIiwiZWRpdF9saW5rIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=