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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-builder-list li a').on('click', function (e) {
    e.preventDefault();
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('title'));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings().removeClass('active');
    let popupTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('title');
    console.log(popupTitle);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-header h2').text(popupTitle);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-preview-popup').fadeIn();
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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-new-template-link').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup').fadeIn();
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'new_or_update_builder_template',
        nonce: me_builder_ajax_object.nonce,
        post_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('post-id')
      },
      success: function (response) {
        if (response.success) {
          let html = response.data.html;
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup .content-loader').html(html);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.magic-elements-addnew-popup .loading').removeClass('loading');
        } else {
          console.log(response);
        }
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
        console.log(response.data.html);
        if (response.success) {
          let html = response.data.html;
          this_button.parent().before(html);
        } else {
          console.log(response);
        }
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixzQkFBc0IsQ0FBQ0ksS0FBSztRQUNuQ0MsT0FBTyxFQUFFM0IsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFNBQVM7TUFDbkMsQ0FBQztNQUNEcUIsT0FBTyxFQUFFLFNBQUFBLENBQVNDLFFBQVEsRUFBQztRQUN2QnhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsUUFBUSxDQUFDdEIsSUFBSSxDQUFDdUIsSUFBSSxDQUFDO1FBQy9CLElBQUdELFFBQVEsQ0FBQ0QsT0FBTyxFQUFDO1VBQ2hCLElBQUlFLElBQUksR0FBSUQsUUFBUSxDQUFDdEIsSUFBSSxDQUFDdUIsSUFBSTtVQUM5QkUsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLElBQUksQ0FBQztRQUNyQyxDQUFDLE1BQUk7VUFDRHpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsUUFBUSxDQUFDO1FBQ3pCO01BQ0osQ0FBQztNQUNERSxLQUFLLEVBQUUsU0FBQUEsQ0FBU0EsS0FBSyxFQUFDO1FBQ2xCMUIsT0FBTyxDQUFDQyxHQUFHLENBQUN5QixLQUFLLENBQUM7TUFDdEI7SUFDSCxDQUFDLENBQUM7RUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYnVpbGRlci9idWlsZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvYWRtaW4vYnVpbGRlci9idWlsZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xualF1ZXJ5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWJ1aWxkZXItbGlzdCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKS5kYXRhKCd0aXRsZScpKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGxldCBwb3B1cFRpdGxlID0gJCh0aGlzKS5kYXRhKCd0aXRsZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cFRpdGxlKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctaGVhZGVyIGgyJykudGV4dChwb3B1cFRpdGxlKTtcbiAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLXByZXZpZXctcG9wdXAnKS5mYWRlSW4oKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1hZ2ljLWVsZW1lbnRzLWNsb3NlLXBvcHVwJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLmZhZGVPdXQoKTtcbiAgICB9KTtcbiAgICAkKCcubWFnaWMtZWxlbWVudHMtcHJldmlldy1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgLy8gbmV3IHRlbXBsYXRlXG4gICAgJCgnLmFkZC1uZXctdGVtcGxhdGUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlSW4oKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICduZXdfb3JfdXBkYXRlX2J1aWxkZXJfdGVtcGxhdGUnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgICAgIHBvc3RfaWQ6ICQodGhpcykuZGF0YSgncG9zdC1pZCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCAgPSByZXNwb25zZS5kYXRhLmh0bWw7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAgLmNvbnRlbnQtbG9hZGVyJykuaHRtbChodG1sKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1hZ2ljLWVsZW1lbnRzLWFkZG5ldy1wb3B1cCAubG9hZGluZycpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICAkKCcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwIC5tYWdpYy1lbGVtZW50cy1jbG9zZS1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tYWdpYy1lbGVtZW50cy1hZGRuZXctcG9wdXAnKS5mYWRlT3V0KCk7XG4gICAgIH0pO1xuICAvLyBhZGQgY29uZGl0aW9uICAgXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWFnaWMtZWxlbWVudHMtYWRkbmV3LXBvcHVwICNtZS1hZGQtY29uZGl0aW9uJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0aGlzX2J1dHRvbiA9ICQodGhpcyk7XG4gICAgICQuYWpheCh7XG4gICAgICAgIHVybDogbWVfYnVpbGRlcl9hamF4X29iamVjdC5hamF4X3VybCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdtZV9hZGRfY29uZGl0aW9uJyxcbiAgICAgICAgICAgIG5vbmNlOiBtZV9idWlsZGVyX2FqYXhfb2JqZWN0Lm5vbmNlLFxuICAgICAgICAgICAgcG9zdF9pZDogJCh0aGlzKS5kYXRhKCdwb3N0LWlkJylcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5odG1sKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIGxldCBodG1sICA9IHJlc3BvbnNlLmRhdGEuaHRtbDtcbiAgICAgICAgICAgICAgICB0aGlzX2J1dHRvbi5wYXJlbnQoKS5iZWZvcmUoaHRtbCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgfSk7XG4gIH0pO1xufSk7ICJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsInBvcHVwVGl0bGUiLCJ0ZXh0IiwiZmFkZUluIiwiZG9jdW1lbnQiLCJwYXJlbnRzIiwiZmFkZU91dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ0cmlnZ2VyIiwiYWpheCIsInVybCIsIm1lX2J1aWxkZXJfYWpheF9vYmplY3QiLCJhamF4X3VybCIsInR5cGUiLCJhY3Rpb24iLCJub25jZSIsInBvc3RfaWQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJodG1sIiwiZXJyb3IiLCJ0aGlzX2J1dHRvbiIsInBhcmVudCIsImJlZm9yZSJdLCJzb3VyY2VSb290IjoiIn0=