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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup').fadeIn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7TUFDRDNELEtBQUssRUFBRSxTQUFBQSxDQUFTQSxLQUFLLEVBQUM7UUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDLENBQUM7RUFDSjtFQUNBLFNBQVN5QixhQUFhQSxDQUFDekQsSUFBSSxFQUFFO0lBQzNCO0lBQ0FaLDZDQUFDLENBQUMsMkRBQTJELENBQUMsQ0FBQ3FELE1BQU0sQ0FBQyxDQUFDOztJQUV2RTtJQUNBckQsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDb0UsS0FBSyxDQUMxQyxpQ0FBaUN4RCxJQUFJLENBQUM0RixPQUFPLFNBQ2pELENBQUM7O0lBRUQ7SUFDQSxJQUFJNUYsSUFBSSxDQUFDNkYsU0FBUyxFQUFFO01BQ2hCekcsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDeUQsTUFBTSxDQUMzQywyQkFBMkI3QyxJQUFJLENBQUM2RixTQUFTLFNBQzdDLENBQUM7SUFDTDs7SUFFQTs7SUFFQTtFQUNKO0VBRUEsU0FBU25DLFdBQVdBLENBQUMxRCxJQUFJLEVBQUU7SUFDdkJpQyxPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLEVBQUVoQyxJQUFJLENBQUM0RixPQUFPLENBQUM7SUFDckM7RUFDSjtBQUVBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9idWlsZGVyL2J1aWxkZXIuc2Nzcz9mMjE1Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5qUXVlcnkoZnVuY3Rpb24oKXtcclxuICAgIGxldCBzZWxlY3RlZEJ1aWxkZXJUeXBlID0gJyc7XHJcbiAgICAvLyBzZWxlY3QyXHJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgbGV0IHBvcHVwVGl0bGUgPSAkKHRoaXMpLmRhdGEoJ3RpdGxlJyk7XHJcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaGVhZGVyIGgyJykudGV4dChwb3B1cFRpdGxlKTtcclxuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVJbigpO1xyXG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS5kYXRhKCd0eXBlJyk7XHJcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGVyVHlwZSA9IGRhdGFUeXBlO1xyXG4gICAgICAgIC8vIGxvYWQgcHJldmlld1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXHJcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxyXG4gICAgICAgICAgICBkYXRhX3R5cGU6IGRhdGFUeXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcclxuICAgIH0pO1xyXG4gICAgLy8gcGFnaW5hdGlvbiBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbiBhJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VQYXJhbSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsLnNwbGl0KCc/JylbMV0pO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdlUGFyYW0uZ2V0KCdwYWdlZCcpO1xyXG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5zaWJsaW5ncygnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItc2VjdGlvbnMnKS5maW5kKCdsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnbWVfbG9hZF9wcmV2aWV3X2RhdGEnLFxyXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcclxuICAgICAgICAgICAgZGF0YV90eXBlOiBkYXRhVHlwZSxcclxuICAgICAgICAgICAgcGFnZWQ6IHBhZ2VOdW1iZXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmVfYWpheChkYXRhLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctbGlzdCcsICcubWFnaWMtZWxlbWVudHMtcGFnaW5hdGlvbicpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcykuZmFkZU91dCgpO1xyXG4gICAgICAgIC8vJCgnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pO1xyXG4gICAgLy8gbmV3IHRlbXBsYXRlXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmVkaXQtbGluaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykuZmFkZUluKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ25ld19vcl91cGRhdGVfYnVpbGRlcl90ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcclxuICAgICAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgnaWQnKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX3R5cGU6IHNlbGVjdGVkQnVpbGRlclR5cGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5jb250ZW50LWxvYWRlcicpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlbGVjdDIgYW5kIGNvbmRpdGlvbiBVSSBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gcHJldmlldyBsaW5rIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1lbGVtZW50b3ItbGluaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIGxldCAgcHJldmlld0xJbmsgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICB3aW5kb3cub3BlbihwcmV2aWV3TEluaywgJ19ibGFuaycpOyBcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLmRlbGV0ZS1saW5rJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IHBvc3RfaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gZGlhbG9nXHJcbiAgICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGVtcGxhdGU/JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21lX2RlbGV0ZV90ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxyXG4gICAgICAgICAgICBwb3N0X2lkOiBwb3N0X2lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc19idXR0b24ucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1idWlsZGVyLWxpc3QgbGkgYS5hY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlT3V0KCk7XHJcblxyXG4gICAgIH0pO1xyXG4gIC8vIGFkZCBjb25kaXRpb24gICBcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjbWUtYWRkLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRoaXNfYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdtZV9hZGRfY29uZGl0aW9uJyxcclxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgncG9zdC1pZCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSByZXNwb25zZS5kYXRhLmh0bWw7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VycmVudCBudW1iZXIgb2YgY29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkNvdW50ID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGluZGV4IG51bWJlcnMgaW4gdGhlIEhUTUxcclxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcWzBcXF0vZywgYFske2NvbmRpdGlvbkNvdW50fV1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfYnV0dG9uLnBhcmVudCgpLmJlZm9yZShodG1sKTtcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0MiBhbmQgY29uZGl0aW9uIFVJIGZvciBuZXcgcm93XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8gRGlzcGxheS1vbiBjaGFuZ2U6IHNob3cvaGlkZSBzZWxlY3RpdmUgc2luZ3VsYXIgZmllbGRzXHJcbiAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tZS1jb25kaXRpb24tZGlzcGxheS1vbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHYgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdmFyICRyb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJyk7XHJcbiAgICAkcm93LmZpbmQoJy5tZS1idWlsZGVyLWNvbmRpdGlvbi1zZWxlY3RpdmUnKS50b2dnbGUodiA9PT0gJ3NlbGVjdGl2ZV9zaW5ndWxhcicpO1xyXG4gICAgaWYgKHYgIT09ICdzZWxlY3RpdmVfc2luZ3VsYXInKSB7XHJcbiAgICAgIHZhciAkc2VsID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xyXG4gICAgICBpZiAoJHNlbC5sZW5ndGggJiYgJHNlbC5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSB7XHJcbiAgICAgICAgJHNlbC52YWwobnVsbCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUG9zdCB0eXBlIGNoYW5nZTogY2xlYXIgcG9zdCBzZWxlY3QgKHNlbGVjdGVkIGl0ZW1zIG1heSBiZSBmcm9tIGFub3RoZXIgdHlwZSlcclxuICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLm1lLWJ1aWxkZXItcG9zdC10eXBlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJHJvdyA9ICQodGhpcykuY2xvc2VzdCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKTtcclxuICAgIHZhciAkc2VsID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xyXG4gICAgaWYgKCRzZWwubGVuZ3RoICYmICRzZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkge1xyXG4gICAgICAkc2VsLnZhbChudWxsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5yZW1vdmUtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIC8vIHN1Ym1pdCB0ZW1wbGF0ZVxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmb3JtRGF0YSA9ICQoJyNtZS1hZGQtdGVtcGxhdGUtZm9ybScpLnNlcmlhbGl6ZSgpO1xyXG4gICAgXHJcbiAgICAvLyBDaGVjayBpZiB0aXRsZSBpcyBlbXB0eVxyXG4gICAgbGV0IHRpdGxlID0gJCgnI3RlbXBsYXRlX3RpdGxlJykudmFsKCk7XHJcbiAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAkKCcudGVtcGxhdGUtdGl0bGUtZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBlcnJvciBtZXNzYWdlIGFmdGVyIHRoZSB0aXRsZSBpbnB1dFxyXG4gICAgICAkKCcjdGVtcGxhdGVfdGl0bGUnKS5hZnRlcignPHNwYW4gY2xhc3M9XCJ0ZW1wbGF0ZS10aXRsZS1lcnJvclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDVweDtcIj5QbGVhc2UgZW50ZXIgYSB0ZW1wbGF0ZSB0aXRsZTwvc3Bhbj4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcclxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQUpBWCBFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzdWJtaXR0aW5nIHRoZSB0ZW1wbGF0ZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBtZUJ1aWxkZXJJbml0Q29uZGl0aW9uVUkoJHBvcHVwKSB7XHJcbiAgICBpZiAoISRwb3B1cCB8fCAhJHBvcHVwLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgJHBvcHVwLmZpbmQoJyN0ZW1wbGF0ZV90eXBlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICRlbCA9ICQodGhpcyk7XHJcbiAgICAgIGlmICgkZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJGVsLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuICAgICAgJGVsLnNlbGVjdDIoeyB3aWR0aDogJzEwMCUnLCBkcm9wZG93blBhcmVudDogJHBvcHVwIH0pO1xyXG4gICAgICB0b2dnbGVDb25kaXRpb25GaWVsZHMoJGVsLnZhbCgpLCAkcG9wdXApO1xyXG4gICAgICAkZWwub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZUNvbmRpdGlvbkZpZWxkcygkKHRoaXMpLnZhbCgpLCAkcG9wdXApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJHBvcHVwLmZpbmQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyICRyb3cgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgJGRpc3BsYXlUeXBlID0gJHJvdy5maW5kKCcubWUtY29uZGl0aW9uLWRpc3BsYXktdHlwZScpO1xyXG4gICAgICB2YXIgJGRpc3BsYXlPbiA9ICRyb3cuZmluZCgnLm1lLWNvbmRpdGlvbi1kaXNwbGF5LW9uJyk7XHJcbiAgICAgIHZhciAkcG9zdFR5cGUgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3QtdHlwZScpO1xyXG4gICAgICB2YXIgJHBvc3RTZWxlY3QgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3Qtc2VsZWN0Jyk7XHJcbiAgICAgIFskZGlzcGxheVR5cGUsICRkaXNwbGF5T24sICRwb3N0VHlwZV0uZm9yRWFjaChmdW5jdGlvbigkc2VsKSB7XHJcbiAgICAgICAgaWYgKCRzZWwubGVuZ3RoICYmICRzZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJHNlbC5zZWxlY3QyKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgaWYgKCRzZWwubGVuZ3RoKSAkc2VsLnNlbGVjdDIoeyB3aWR0aDogJzEwMCUnLCBkcm9wZG93blBhcmVudDogJHBvcHVwIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHNob3dTZWxlY3RpdmUgPSAkZGlzcGxheU9uLnZhbCgpID09PSAnc2VsZWN0aXZlX3Npbmd1bGFyJztcclxuICAgICAgJHJvdy5maW5kKCcubWUtYnVpbGRlci1jb25kaXRpb24tc2VsZWN0aXZlJykudG9nZ2xlKHNob3dTZWxlY3RpdmUpO1xyXG4gICAgICBpZiAoJHBvc3RTZWxlY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCRwb3N0U2VsZWN0Lmhhc0NsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykpICRwb3N0U2VsZWN0LnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuICAgICAgICAkcG9zdFNlbGVjdC5zZWxlY3QyKHtcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBkcm9wZG93blBhcmVudDogJHBvcHVwLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICRwb3N0U2VsZWN0LmRhdGEoJ3BsYWNlaG9sZGVyJykgfHwgJ1NlYXJjaCBvciBzZWxlY3TigKYnLFxyXG4gICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAwLFxyXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkZWxheTogMjUwLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbWVfYnVpbGRlcl9zZWFyY2hfcG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcclxuICAgICAgICAgICAgICAgIHBvc3RfdHlwZTogJHBvc3RUeXBlLnZhbCgpIHx8ICdwb3N0J1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAmJiBkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLnJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGEuZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBkYXRhLmRhdGEucGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0czogW10gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbmRpdGlvbkZpZWxkcyh0ZW1wbGF0ZVR5cGUsICRwb3B1cCkge1xyXG4gICAgdmFyIGlzTWVnYU1lbnUgPSB0ZW1wbGF0ZVR5cGUgPT09ICdtZWdhX21lbnUnO1xyXG4gICAgJHBvcHVwLmZpbmQoJy5tYWdpYy1lbGVtZW50cy1hZGQtY29uZGl0aW9uLWhlYWRlcicpLnRvZ2dsZSghaXNNZWdhTWVudSk7XHJcbiAgICAkcG9wdXAuZmluZCgnLm1hZ2ljLWVsZW1lbnRzLWNvbmRpdGlvbi13cmFwJykudG9nZ2xlKCFpc01lZ2FNZW51KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpcmVfYWpheCAoZGF0YSwgZGlzcGxheV9zZWxlY3RvciwgcGFnaW5hdGlvbl9zZWxlY3Rvcikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICBcclxuICAgICAgICAkKGRpc3BsYXlfc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcclxuICAgICAgICBcclxuICAgICAgICAkKHBhZ2luYXRpb25fc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5wYWdpbmF0aW9uX2h0bWwpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgLy8gQ2xlYW4gdXAgb2xkIG1lc3NhZ2VzIGZpcnN0IHRvIGF2b2lkIGR1cGxpY2F0ZSBlbnRyaWVzXHJcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtZm9ybS1hY3Rpb25zIC5zdWNjZXNzLW1lc3NhZ2UsIC5lZGl0LWxpbmsnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWZvcm0tYWN0aW9ucyBidXR0b24nKS5hZnRlcihcclxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJzdWNjZXNzLW1lc3NhZ2VcIj4ke2RhdGEubWVzc2FnZX08L3NwYW4+YFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBQcmVwZW5kIGFuIGVkaXQgbGluayBpZiBhdmFpbGFibGVcclxuICAgIGlmIChkYXRhLmVkaXRfbGluaykge1xyXG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgYnV0dG9uJykuYmVmb3JlKFxyXG4gICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJlZGl0LWxpbmtcIj4ke2RhdGEuZWRpdF9saW5rfTwvc3Bhbj5gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcHRpb25hbGx5IGNsb3NlIHRoZSBwb3B1cCBvciByZWRpcmVjdFxyXG5cclxuICAgIC8vIEFkZCBsb2dpYyBoZXJlLCBlLmcuLCBzZXQgYSB0aW1lb3V0IHRvIGNsb3NlIG9yIHJlZGlyZWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGRhdGEpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGRhdGEubWVzc2FnZSk7XHJcbiAgICAvLyBZb3UgY291bGQgYWxzbyBkaXNwbGF5IHRoaXMgZXJyb3IgdG8gdGhlIHVzZXIgaW4gdGhlIFVJIGFzIG5lZWRlZFxyXG59XHJcblxyXG59KTsgIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJzZWxlY3RlZEJ1aWxkZXJUeXBlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwiZmluZCIsInJlbW92ZUNsYXNzIiwicG9wdXBUaXRsZSIsImRhdGEiLCJ0ZXh0IiwiZmFkZUluIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJub25jZSIsIm1lX2J1aWxkZXJfYWpheF9vYmplY3QiLCJkYXRhX3R5cGUiLCJmaXJlX2FqYXgiLCJkb2N1bWVudCIsInVybCIsImF0dHIiLCJwYWdlUGFyYW0iLCJVUkxTZWFyY2hQYXJhbXMiLCJzcGxpdCIsInBhZ2VOdW1iZXIiLCJnZXQiLCJwYXJlbnRzIiwicGFnZWQiLCJmYWRlT3V0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImFqYXgiLCJhamF4X3VybCIsInR5cGUiLCJwb3N0X2lkIiwic2VsZWN0ZWRfdHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImh0bWwiLCJzZXRUaW1lb3V0IiwibWVCdWlsZGVySW5pdENvbmRpdGlvblVJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJldmlld0xJbmsiLCJ3aW5kb3ciLCJvcGVuIiwidGhpc19idXR0b24iLCJjb25maXJtIiwidHJpZ2dlciIsInJlbW92ZSIsImNvbmRpdGlvbkNvdW50IiwibGVuZ3RoIiwicmVwbGFjZSIsImJlZm9yZSIsInYiLCJ2YWwiLCIkcm93IiwiY2xvc2VzdCIsInRvZ2dsZSIsIiRzZWwiLCJoYXNDbGFzcyIsImZvcm1EYXRhIiwic2VyaWFsaXplIiwidGl0bGUiLCJhZnRlciIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVFcnJvciIsInhociIsInN0YXR1cyIsImFsZXJ0IiwiJHBvcHVwIiwiZWFjaCIsIiRlbCIsInNlbGVjdDIiLCJ3aWR0aCIsImRyb3Bkb3duUGFyZW50IiwidG9nZ2xlQ29uZGl0aW9uRmllbGRzIiwiJGRpc3BsYXlUeXBlIiwiJGRpc3BsYXlPbiIsIiRwb3N0VHlwZSIsIiRwb3N0U2VsZWN0IiwiZm9yRWFjaCIsInNob3dTZWxlY3RpdmUiLCJwbGFjZWhvbGRlciIsIm1pbmltdW1JbnB1dExlbmd0aCIsImFsbG93Q2xlYXIiLCJkZWxheSIsInBhcmFtcyIsInNlYXJjaCIsInRlcm0iLCJwYWdlIiwicG9zdF90eXBlIiwicHJvY2Vzc1Jlc3VsdHMiLCJyZXN1bHRzIiwicGFnaW5hdGlvbiIsInRlbXBsYXRlVHlwZSIsImlzTWVnYU1lbnUiLCJkaXNwbGF5X3NlbGVjdG9yIiwicGFnaW5hdGlvbl9zZWxlY3RvciIsInBhZ2luYXRpb25faHRtbCIsIm1lc3NhZ2UiLCJlZGl0X2xpbmsiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==