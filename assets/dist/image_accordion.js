/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/image_accordion.js"
/*!******************************************!*\
  !*** ./assets/src/js/image_accordion.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_image_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/image_accordion.scss */ "./assets/src/scss/image_accordion.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_image_accordion.default": emkElementor.EmKitImageAccordion
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitImageAccordion: function ($scope) {
      let image_accordion = $scope.find('.accordion');
      image_accordion.each(function () {
        const $accordion = $(this);

        // Remove any previous handlers (use namespaced events to be safe when Elementor re-renders the widget)
        $accordion.off('.emkImageAccordion');

        // Ensure one tab is active by default
        if (!$accordion.find('.tab.active').length) {
          $accordion.find('.tab').first().addClass('active');
        }

        /**
         * Bind both hover + click once, but decide which one to respect
         * on each interaction based on the current widget classes.
         * This way, changing "Active Behavior" in the editor (which updates
         * the wrapper class via `prefix_class`) starts working immediately
         * without a full page reload.
         */
        $accordion.on('mouseenter.emkImageAccordion click.emkImageAccordion', '.tab', function (event) {
          const $tab = $(this);

          // Try to detect behavior from the widget wrapper class first (Elementor prefix_class)
          const $wrapper = $scope.closest('.elementor-widget-em_image_accordion').length ? $scope.closest('.elementor-widget-em_image_accordion') : $scope;
          const classAttr = $wrapper.attr('class') || '';
          let behavior = 'click';
          if (classAttr.indexOf('emk-image-accordion-hover') !== -1) {
            behavior = 'hover';
          } else if (classAttr.indexOf('emk-image-accordion-click') !== -1) {
            behavior = 'click';
          } else {
            // Fallback: read from data attribute or inner accordion class (for frontend render)
            const behaviorAttr = $accordion.attr('data-active-behavior');
            if (behaviorAttr === 'hover') {
              behavior = 'hover';
            } else if (behaviorAttr === 'click') {
              behavior = 'click';
            } else if ($accordion.hasClass('emk-image-accordion-hover')) {
              behavior = 'hover';
            }
          }

          // Ignore mismatched events (e.g. ignore click when behavior = hover)
          if (behavior === 'hover' && event.type !== 'mouseenter') {
            return;
          }
          if (behavior === 'click' && event.type !== 'click') {
            return;
          }
          $tab.siblings().removeClass('active');
          $tab.addClass('active');
        });
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/image_accordion.scss"
/*!**********************************************!*\
  !*** ./assets/src/scss/image_accordion.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./assets/src/scss/image_accordion.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/image_accordion.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SU4sS0FBSyxDQUFDVSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2hEO1VBQ0o7VUFFQVQsSUFBSSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsUUFBUSxDQUFDO1VBQ3JDWCxJQUFJLENBQUNILFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDM0IsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFFQSxDQUFDO0VBRURuQixPQUFPLENBQUNvQixFQUFFLENBQUMseUJBQXlCLEVBQUVuQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVnQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQ2xGcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2VfYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfYWNjb3JkaW9uLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9pbWFnZV9hY2NvcmRpb24uc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2ltYWdlX2FjY29yZGlvbi5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdEltYWdlQWNjb3JkaW9uLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0SW1hZ2VBY2NvcmRpb246IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICBsZXQgaW1hZ2VfYWNjb3JkaW9uID0gJHNjb3BlLmZpbmQoJy5hY2NvcmRpb24nKTtcclxuICAgIFxyXG4gICAgICAgIGltYWdlX2FjY29yZGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYW55IHByZXZpb3VzIGhhbmRsZXJzICh1c2UgbmFtZXNwYWNlZCBldmVudHMgdG8gYmUgc2FmZSB3aGVuIEVsZW1lbnRvciByZS1yZW5kZXJzIHRoZSB3aWRnZXQpXHJcbiAgICAgICAgICAgICRhY2NvcmRpb24ub2ZmKCcuZW1rSW1hZ2VBY2NvcmRpb24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVuc3VyZSBvbmUgdGFiIGlzIGFjdGl2ZSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIGlmICghJGFjY29yZGlvbi5maW5kKCcudGFiLmFjdGl2ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJGFjY29yZGlvbi5maW5kKCcudGFiJykuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBCaW5kIGJvdGggaG92ZXIgKyBjbGljayBvbmNlLCBidXQgZGVjaWRlIHdoaWNoIG9uZSB0byByZXNwZWN0XHJcbiAgICAgICAgICAgICAqIG9uIGVhY2ggaW50ZXJhY3Rpb24gYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkZ2V0IGNsYXNzZXMuXHJcbiAgICAgICAgICAgICAqIFRoaXMgd2F5LCBjaGFuZ2luZyBcIkFjdGl2ZSBCZWhhdmlvclwiIGluIHRoZSBlZGl0b3IgKHdoaWNoIHVwZGF0ZXNcclxuICAgICAgICAgICAgICogdGhlIHdyYXBwZXIgY2xhc3MgdmlhIGBwcmVmaXhfY2xhc3NgKSBzdGFydHMgd29ya2luZyBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICAgKiB3aXRob3V0IGEgZnVsbCBwYWdlIHJlbG9hZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICRhY2NvcmRpb24ub24oJ21vdXNlZW50ZXIuZW1rSW1hZ2VBY2NvcmRpb24gY2xpY2suZW1rSW1hZ2VBY2NvcmRpb24nLCAnLnRhYicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVjdCBiZWhhdmlvciBmcm9tIHRoZSB3aWRnZXQgd3JhcHBlciBjbGFzcyBmaXJzdCAoRWxlbWVudG9yIHByZWZpeF9jbGFzcylcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJHNjb3BlLmNsb3Nlc3QoJy5lbGVtZW50b3Itd2lkZ2V0LWVtX2ltYWdlX2FjY29yZGlvbicpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gJHNjb3BlLmNsb3Nlc3QoJy5lbGVtZW50b3Itd2lkZ2V0LWVtX2ltYWdlX2FjY29yZGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkc2NvcGU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NBdHRyID0gKCR3cmFwcGVyLmF0dHIoJ2NsYXNzJykgfHwgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBiZWhhdmlvciA9ICdjbGljayc7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24taG92ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvciA9ICdob3Zlcic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsYXNzQXR0ci5pbmRleE9mKCdlbWstaW1hZ2UtYWNjb3JkaW9uLWNsaWNrJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnY2xpY2snO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjazogcmVhZCBmcm9tIGRhdGEgYXR0cmlidXRlIG9yIGlubmVyIGFjY29yZGlvbiBjbGFzcyAoZm9yIGZyb250ZW5kIHJlbmRlcilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWhhdmlvckF0dHIgPSAkYWNjb3JkaW9uLmF0dHIoJ2RhdGEtYWN0aXZlLWJlaGF2aW9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yQXR0ciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvciA9ICdob3Zlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiZWhhdmlvckF0dHIgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnY2xpY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGFjY29yZGlvbi5oYXNDbGFzcygnZW1rLWltYWdlLWFjY29yZGlvbi1ob3ZlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIG1pc21hdGNoZWQgZXZlbnRzIChlLmcuIGlnbm9yZSBjbGljayB3aGVuIGJlaGF2aW9yID0gaG92ZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdob3ZlcicgJiYgZXZlbnQudHlwZSAhPT0gJ21vdXNlZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnY2xpY2snICYmIGV2ZW50LnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHRhYi5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0YWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9pbWFnZV9hY2NvcmRpb24uc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9pbWFnZV9hY2NvcmRpb24uanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0SW1hZ2VBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCJpbWFnZV9hY2NvcmRpb24iLCJmaW5kIiwiJGFjY29yZGlvbiIsIm9mZiIsImxlbmd0aCIsImZpcnN0IiwiYWRkQ2xhc3MiLCJvbiIsImV2ZW50IiwiJHRhYiIsIiR3cmFwcGVyIiwiY2xvc2VzdCIsImNsYXNzQXR0ciIsImF0dHIiLCJiZWhhdmlvciIsImluZGV4T2YiLCJiZWhhdmlvckF0dHIiLCJoYXNDbGFzcyIsInR5cGUiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=