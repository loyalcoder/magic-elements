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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7TUFDRDNELEtBQUssRUFBRSxTQUFBQSxDQUFTQSxLQUFLLEVBQUM7UUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDLENBQUM7RUFDSjtFQUNBLFNBQVN5QixhQUFhQSxDQUFDekQsSUFBSSxFQUFFO0lBQzNCO0lBQ0FaLDZDQUFDLENBQUMsMkRBQTJELENBQUMsQ0FBQ3FELE1BQU0sQ0FBQyxDQUFDOztJQUV2RTtJQUNBckQsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDb0UsS0FBSyxDQUMxQyxpQ0FBaUN4RCxJQUFJLENBQUM0RixPQUFPLFNBQ2pELENBQUM7O0lBRUQ7SUFDQSxJQUFJNUYsSUFBSSxDQUFDNkYsU0FBUyxFQUFFO01BQ2hCekcsNkNBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDeUQsTUFBTSxDQUMzQywyQkFBMkI3QyxJQUFJLENBQUM2RixTQUFTLFNBQzdDLENBQUM7SUFDTDs7SUFFQTs7SUFFQTtFQUNKO0VBRUEsU0FBU25DLFdBQVdBLENBQUMxRCxJQUFJLEVBQUU7SUFDdkJpQyxPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLEVBQUVoQyxJQUFJLENBQUM0RixPQUFPLENBQUM7SUFDckM7RUFDSjtBQUVBLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9hZG1pbi9idWlsZGVyL2J1aWxkZXIuc2Nzcz9mMjE1Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2FkbWluL2J1aWxkZXIvYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xualF1ZXJ5KGZ1bmN0aW9uKCl7XG4gICAgbGV0IHNlbGVjdGVkQnVpbGRlclR5cGUgPSAnJztcbiAgICAvLyBzZWxlY3QyXG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBsZXQgcG9wdXBUaXRsZSA9ICQodGhpcykuZGF0YSgndGl0bGUnKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaGVhZGVyIGgyJykudGV4dChwb3B1cFRpdGxlKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5mYWRlSW4oKTtcbiAgICAgICAgbGV0IGRhdGFUeXBlID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGVyVHlwZSA9IGRhdGFUeXBlO1xuICAgICAgICAvLyBsb2FkIHByZXZpZXdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZV9hamF4KGRhdGEsICcubWFnaWMtZWxlbWVudHMtcHJldmlldy1saXN0JywgJy5tYWdpYy1lbGVtZW50cy1wYWdpbmF0aW9uJyk7XG4gICAgfSk7XG4gICAgLy8gcGFnaW5hdGlvbiBcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICBjb25zdCBwYWdlUGFyYW0gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2VQYXJhbS5nZXQoJ3BhZ2VkJyk7XG4gICAgICAgIGxldCBkYXRhVHlwZSA9ICQodGhpcykucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5zaWJsaW5ncygnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItc2VjdGlvbnMnKS5maW5kKCdsaSBhLmFjdGl2ZScpLmRhdGEoJ3R5cGUnKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9sb2FkX3ByZXZpZXdfZGF0YScsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIGRhdGFfdHlwZTogZGF0YVR5cGUsXG4gICAgICAgICAgICBwYWdlZDogcGFnZU51bWJlclxuICAgICAgICB9O1xuICAgICAgICBmaXJlX2FqYXgoZGF0YSwgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWxpc3QnLCAnLm1hZ2ljLWVsZW1lbnRzLXBhZ2luYXRpb24nKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZmFkZU91dCgpO1xuICAgICAgICAvLyQoJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgLy8gbmV3IHRlbXBsYXRlXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1uZXctdGVtcGxhdGUtbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1saW5rJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVJbigpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0LmFqYXhfdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ25ld19vcl91cGRhdGVfYnVpbGRlcl90ZW1wbGF0ZScsXG4gICAgICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdpZCcpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX3R5cGU6IHNlbGVjdGVkQnVpbGRlclR5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcyl7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAuY29udGVudC1sb2FkZXInKS5odG1sKHJlc3BvbnNlLmRhdGEuaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLmxvYWRpbmcnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlbGVjdDIgYW5kIGNvbmRpdGlvbiBVSSBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVCdWlsZGVySW5pdENvbmRpdGlvblVJKCQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBwcmV2aWV3IGxpbmsgXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hZGQtbmV3LXRlbXBsYXRlLWxpbmssIC5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tYWdpYy1lbGVtZW50cy1wcmV2aWV3LWl0ZW0gLnByZXZpZXctbGluaywgLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZWRpdC1lbGVtZW50b3ItbGluaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgbGV0ICBwcmV2aWV3TEluayA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICB3aW5kb3cub3BlbihwcmV2aWV3TEluaywgJ19ibGFuaycpOyBcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbSAuZGVsZXRlLWxpbmsnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGhpc19idXR0b24gPSAkKHRoaXMpO1xuICAgICAgICBsZXQgcG9zdF9pZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNob3cgY29uZmlybWF0aW9uIGRpYWxvZ1xuICAgICAgICBpZiAoIWNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0ZW1wbGF0ZT8nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9kZWxldGVfdGVtcGxhdGUnLFxuICAgICAgICAgICAgbm9uY2U6IG1lX2J1aWxkZXJfYWpheF9vYmplY3Qubm9uY2UsXG4gICAgICAgICAgICBwb3N0X2lkOiBwb3N0X2lkXG4gICAgICAgIH07XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEuYWN0aXZlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc19idXR0b24ucGFyZW50cygnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaXRlbScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAubWFnaWMtZWxlbWVudHMtY2xvc2UtcG9wdXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWFnaWMtZWxlbWVudHMtYnVpbGRlci1saXN0IGxpIGEuYWN0aXZlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCcpLmZhZGVPdXQoKTtcblxuICAgICB9KTtcbiAgLy8gYWRkIGNvbmRpdGlvbiAgIFxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAjbWUtYWRkLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdGhpc19idXR0b24gPSAkKHRoaXMpO1xuICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfYWRkX2NvbmRpdGlvbicsXG4gICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgncG9zdC1pZCcpXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIGxldCBodG1sID0gcmVzcG9uc2UuZGF0YS5odG1sO1xuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IG51bWJlciBvZiBjb25kaXRpb25zXG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkNvdW50ID0gJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSBpbmRleCBudW1iZXJzIGluIHRoZSBIVE1MXG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxbMFxcXS9nLCBgWyR7Y29uZGl0aW9uQ291bnR9XWApO1xuICAgICAgICAgICAgICAgIHRoaXNfYnV0dG9uLnBhcmVudCgpLmJlZm9yZShodG1sKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlbGVjdDIgYW5kIGNvbmRpdGlvbiBVSSBmb3IgbmV3IHJvd1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lQnVpbGRlckluaXRDb25kaXRpb25VSSgkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwJykpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgfSk7XG4gIH0pO1xuICAvLyBEaXNwbGF5LW9uIGNoYW5nZTogc2hvdy9oaWRlIHNlbGVjdGl2ZSBzaW5ndWxhciBmaWVsZHNcbiAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tZS1jb25kaXRpb24tZGlzcGxheS1vbicsIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gJCh0aGlzKS52YWwoKTtcbiAgICB2YXIgJHJvdyA9ICQodGhpcykuY2xvc2VzdCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKTtcbiAgICAkcm93LmZpbmQoJy5tZS1idWlsZGVyLWNvbmRpdGlvbi1zZWxlY3RpdmUnKS50b2dnbGUodiA9PT0gJ3NlbGVjdGl2ZV9zaW5ndWxhcicpO1xuICAgIGlmICh2ICE9PSAnc2VsZWN0aXZlX3Npbmd1bGFyJykge1xuICAgICAgdmFyICRzZWwgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3Qtc2VsZWN0Jyk7XG4gICAgICBpZiAoJHNlbC5sZW5ndGggJiYgJHNlbC5oYXNDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpKSB7XG4gICAgICAgICRzZWwudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gUG9zdCB0eXBlIGNoYW5nZTogY2xlYXIgcG9zdCBzZWxlY3QgKHNlbGVjdGVkIGl0ZW1zIG1heSBiZSBmcm9tIGFub3RoZXIgdHlwZSlcbiAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tZS1idWlsZGVyLXBvc3QtdHlwZScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciAkcm93ID0gJCh0aGlzKS5jbG9zZXN0KCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbicpO1xuICAgIHZhciAkc2VsID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xuICAgIGlmICgkc2VsLmxlbmd0aCAmJiAkc2VsLmhhc0NsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykpIHtcbiAgICAgICRzZWwudmFsKG51bGwpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gcmVtb3ZlIGNvbmRpdGlvblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAucmVtb3ZlLWNvbmRpdGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICB9KTtcbiAgLy8gc3VibWl0IHRlbXBsYXRlXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1zdWJtaXQtdGVtcGxhdGUnLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZvcm1EYXRhID0gJCgnI21lLWFkZC10ZW1wbGF0ZS1mb3JtJykuc2VyaWFsaXplKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGl0bGUgaXMgZW1wdHlcbiAgICBsZXQgdGl0bGUgPSAkKCcjdGVtcGxhdGVfdGl0bGUnKS52YWwoKTtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGVycm9yIG1lc3NhZ2VcbiAgICAgICQoJy50ZW1wbGF0ZS10aXRsZS1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZXJyb3IgbWVzc2FnZSBhZnRlciB0aGUgdGl0bGUgaW5wdXRcbiAgICAgICQoJyN0ZW1wbGF0ZV90aXRsZScpLmFmdGVyKCc8c3BhbiBjbGFzcz1cInRlbXBsYXRlLXRpdGxlLWVycm9yXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNXB4O1wiPlBsZWFzZSBlbnRlciBhIHRlbXBsYXRlIHRpdGxlPC9zcGFuPicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnbWVfc3VibWl0X3RlbXBsYXRlJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgZm9ybURhdGE6IGZvcm1EYXRhLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQUpBWCBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc3VibWl0dGluZyB0aGUgdGVtcGxhdGUuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICBmdW5jdGlvbiBtZUJ1aWxkZXJJbml0Q29uZGl0aW9uVUkoJHBvcHVwKSB7XG4gICAgaWYgKCEkcG9wdXAgfHwgISRwb3B1cC5sZW5ndGgpIHJldHVybjtcbiAgICAkcG9wdXAuZmluZCgnI3RlbXBsYXRlX3R5cGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRlbCA9ICQodGhpcyk7XG4gICAgICBpZiAoJGVsLmhhc0NsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykpICRlbC5zZWxlY3QyKCdkZXN0cm95Jyk7XG4gICAgICAkZWwuc2VsZWN0Mih7IHdpZHRoOiAnMTAwJScsIGRyb3Bkb3duUGFyZW50OiAkcG9wdXAgfSk7XG4gICAgICB0b2dnbGVDb25kaXRpb25GaWVsZHMoJGVsLnZhbCgpLCAkcG9wdXApO1xuICAgICAgJGVsLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9nZ2xlQ29uZGl0aW9uRmllbGRzKCQodGhpcykudmFsKCksICRwb3B1cCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAkcG9wdXAuZmluZCgnLm1hZ2ljLWVsZW1lbnRzLWFkZC1jb25kaXRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRyb3cgPSAkKHRoaXMpO1xuICAgICAgdmFyICRkaXNwbGF5VHlwZSA9ICRyb3cuZmluZCgnLm1lLWNvbmRpdGlvbi1kaXNwbGF5LXR5cGUnKTtcbiAgICAgIHZhciAkZGlzcGxheU9uID0gJHJvdy5maW5kKCcubWUtY29uZGl0aW9uLWRpc3BsYXktb24nKTtcbiAgICAgIHZhciAkcG9zdFR5cGUgPSAkcm93LmZpbmQoJy5tZS1idWlsZGVyLXBvc3QtdHlwZScpO1xuICAgICAgdmFyICRwb3N0U2VsZWN0ID0gJHJvdy5maW5kKCcubWUtYnVpbGRlci1wb3N0LXNlbGVjdCcpO1xuICAgICAgWyRkaXNwbGF5VHlwZSwgJGRpc3BsYXlPbiwgJHBvc3RUeXBlXS5mb3JFYWNoKGZ1bmN0aW9uKCRzZWwpIHtcbiAgICAgICAgaWYgKCRzZWwubGVuZ3RoICYmICRzZWwuaGFzQ2xhc3MoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKSkgJHNlbC5zZWxlY3QyKCdkZXN0cm95Jyk7XG4gICAgICAgIGlmICgkc2VsLmxlbmd0aCkgJHNlbC5zZWxlY3QyKHsgd2lkdGg6ICcxMDAlJywgZHJvcGRvd25QYXJlbnQ6ICRwb3B1cCB9KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHNob3dTZWxlY3RpdmUgPSAkZGlzcGxheU9uLnZhbCgpID09PSAnc2VsZWN0aXZlX3Npbmd1bGFyJztcbiAgICAgICRyb3cuZmluZCgnLm1lLWJ1aWxkZXItY29uZGl0aW9uLXNlbGVjdGl2ZScpLnRvZ2dsZShzaG93U2VsZWN0aXZlKTtcbiAgICAgIGlmICgkcG9zdFNlbGVjdC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCRwb3N0U2VsZWN0Lmhhc0NsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJykpICRwb3N0U2VsZWN0LnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgJHBvc3RTZWxlY3Quc2VsZWN0Mih7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBkcm9wZG93blBhcmVudDogJHBvcHVwLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAkcG9zdFNlbGVjdC5kYXRhKCdwbGFjZWhvbGRlcicpIHx8ICdTZWFyY2ggb3Igc2VsZWN04oCmJyxcbiAgICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXG4gICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgICAgICBhamF4OiB7XG4gICAgICAgICAgICB1cmw6IG1lX2J1aWxkZXJfYWpheF9vYmplY3QuYWpheF91cmwsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGVsYXk6IDI1MCxcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ21lX2J1aWxkZXJfc2VhcmNoX3Bvc3RzJyxcbiAgICAgICAgICAgICAgICBub25jZTogbWVfYnVpbGRlcl9hamF4X29iamVjdC5ub25jZSxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtIHx8ICcnLFxuICAgICAgICAgICAgICAgIHBhZ2U6IHBhcmFtcy5wYWdlIHx8IDEsXG4gICAgICAgICAgICAgICAgcG9zdF90eXBlOiAkcG9zdFR5cGUudmFsKCkgfHwgJ3Bvc3QnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAmJiBkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5kYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBkYXRhLmRhdGEucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0czogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29uZGl0aW9uRmllbGRzKHRlbXBsYXRlVHlwZSwgJHBvcHVwKSB7XG4gICAgdmFyIGlzTWVnYU1lbnUgPSB0ZW1wbGF0ZVR5cGUgPT09ICdtZWdhX21lbnUnO1xuICAgICRwb3B1cC5maW5kKCcubWFnaWMtZWxlbWVudHMtYWRkLWNvbmRpdGlvbi1oZWFkZXInKS50b2dnbGUoIWlzTWVnYU1lbnUpO1xuICAgICRwb3B1cC5maW5kKCcubWFnaWMtZWxlbWVudHMtY29uZGl0aW9uLXdyYXAnKS50b2dnbGUoIWlzTWVnYU1lbnUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlyZV9hamF4IChkYXRhLCBkaXNwbGF5X3NlbGVjdG9yLCBwYWdpbmF0aW9uX3NlbGVjdG9yKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIFxuICAgICAgICAkKGRpc3BsYXlfc2VsZWN0b3IpLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sKTtcbiAgICAgICAgXG4gICAgICAgICQocGFnaW5hdGlvbl9zZWxlY3RvcikuaHRtbChyZXNwb25zZS5kYXRhLnBhZ2luYXRpb25faHRtbCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Y2Nlc3MoZGF0YSkge1xuICAgIC8vIENsZWFuIHVwIG9sZCBtZXNzYWdlcyBmaXJzdCB0byBhdm9pZCBkdXBsaWNhdGUgZW50cmllc1xuICAgICQoJy5tYWdpYy1lbGVtZW50cy1mb3JtLWFjdGlvbnMgLnN1Y2Nlc3MtbWVzc2FnZSwgLmVkaXQtbGluaycpLnJlbW92ZSgpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBzdWNjZXNzIG1lc3NhZ2VcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtZm9ybS1hY3Rpb25zIGJ1dHRvbicpLmFmdGVyKFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJzdWNjZXNzLW1lc3NhZ2VcIj4ke2RhdGEubWVzc2FnZX08L3NwYW4+YFxuICAgICk7XG5cbiAgICAvLyBQcmVwZW5kIGFuIGVkaXQgbGluayBpZiBhdmFpbGFibGVcbiAgICBpZiAoZGF0YS5lZGl0X2xpbmspIHtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWZvcm0tYWN0aW9ucyBidXR0b24nKS5iZWZvcmUoXG4gICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJlZGl0LWxpbmtcIj4ke2RhdGEuZWRpdF9saW5rfTwvc3Bhbj5gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uYWxseSBjbG9zZSB0aGUgcG9wdXAgb3IgcmVkaXJlY3RcblxuICAgIC8vIEFkZCBsb2dpYyBoZXJlLCBlLmcuLCBzZXQgYSB0aW1lb3V0IHRvIGNsb3NlIG9yIHJlZGlyZWN0XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGRhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBkYXRhLm1lc3NhZ2UpO1xuICAgIC8vIFlvdSBjb3VsZCBhbHNvIGRpc3BsYXkgdGhpcyBlcnJvciB0byB0aGUgdXNlciBpbiB0aGUgVUkgYXMgbmVlZGVkXG59XG5cbn0pOyAiXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsInNlbGVjdGVkQnVpbGRlclR5cGUiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJwb3B1cFRpdGxlIiwiZGF0YSIsInRleHQiLCJmYWRlSW4iLCJkYXRhVHlwZSIsImFjdGlvbiIsIm5vbmNlIiwibWVfYnVpbGRlcl9hamF4X29iamVjdCIsImRhdGFfdHlwZSIsImZpcmVfYWpheCIsImRvY3VtZW50IiwidXJsIiwiYXR0ciIsInBhZ2VQYXJhbSIsIlVSTFNlYXJjaFBhcmFtcyIsInNwbGl0IiwicGFnZU51bWJlciIsImdldCIsInBhcmVudHMiLCJwYWdlZCIsImZhZGVPdXQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiYWpheCIsImFqYXhfdXJsIiwidHlwZSIsInBvc3RfaWQiLCJzZWxlY3RlZF90eXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiaHRtbCIsInNldFRpbWVvdXQiLCJtZUJ1aWxkZXJJbml0Q29uZGl0aW9uVUkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcmV2aWV3TEluayIsIndpbmRvdyIsIm9wZW4iLCJ0aGlzX2J1dHRvbiIsImNvbmZpcm0iLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiY29uZGl0aW9uQ291bnQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiYmVmb3JlIiwidiIsInZhbCIsIiRyb3ciLCJjbG9zZXN0IiwidG9nZ2xlIiwiJHNlbCIsImhhc0NsYXNzIiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJ0aXRsZSIsImFmdGVyIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwieGhyIiwic3RhdHVzIiwiYWxlcnQiLCIkcG9wdXAiLCJlYWNoIiwiJGVsIiwic2VsZWN0MiIsIndpZHRoIiwiZHJvcGRvd25QYXJlbnQiLCJ0b2dnbGVDb25kaXRpb25GaWVsZHMiLCIkZGlzcGxheVR5cGUiLCIkZGlzcGxheU9uIiwiJHBvc3RUeXBlIiwiJHBvc3RTZWxlY3QiLCJmb3JFYWNoIiwic2hvd1NlbGVjdGl2ZSIsInBsYWNlaG9sZGVyIiwibWluaW11bUlucHV0TGVuZ3RoIiwiYWxsb3dDbGVhciIsImRlbGF5IiwicGFyYW1zIiwic2VhcmNoIiwidGVybSIsInBhZ2UiLCJwb3N0X3R5cGUiLCJwcm9jZXNzUmVzdWx0cyIsInJlc3VsdHMiLCJwYWdpbmF0aW9uIiwidGVtcGxhdGVUeXBlIiwiaXNNZWdhTWVudSIsImRpc3BsYXlfc2VsZWN0b3IiLCJwYWdpbmF0aW9uX3NlbGVjdG9yIiwicGFnaW5hdGlvbl9odG1sIiwibWVzc2FnZSIsImVkaXRfbGluayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9