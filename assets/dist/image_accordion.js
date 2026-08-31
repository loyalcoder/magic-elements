<<<<<<< HEAD
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SU4sS0FBSyxDQUFDVSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2hEO1VBQ0o7VUFFQVQsSUFBSSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsUUFBUSxDQUFDO1VBQ3JDWCxJQUFJLENBQUNILFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDM0IsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFFQSxDQUFDO0VBRURuQixPQUFPLENBQUNvQixFQUFFLENBQUMseUJBQXlCLEVBQUVuQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVnQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQ2xGcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2VfYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfYWNjb3JkaW9uLnNjc3M/NjFlYiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCJcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwiZW1faW1hZ2VfYWNjb3JkaW9uLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0SW1hZ2VBY2NvcmRpb24sXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgRW1LaXRJbWFnZUFjY29yZGlvbjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBpbWFnZV9hY2NvcmRpb24gPSAkc2NvcGUuZmluZCgnLmFjY29yZGlvbicpO1xyXG4gICAgXHJcbiAgICAgICAgaW1hZ2VfYWNjb3JkaW9uLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgcHJldmlvdXMgaGFuZGxlcnMgKHVzZSBuYW1lc3BhY2VkIGV2ZW50cyB0byBiZSBzYWZlIHdoZW4gRWxlbWVudG9yIHJlLXJlbmRlcnMgdGhlIHdpZGdldClcclxuICAgICAgICAgICAgJGFjY29yZGlvbi5vZmYoJy5lbWtJbWFnZUFjY29yZGlvbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW5zdXJlIG9uZSB0YWIgaXMgYWN0aXZlIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgaWYgKCEkYWNjb3JkaW9uLmZpbmQoJy50YWIuYWN0aXZlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLmZpbmQoJy50YWInKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEJpbmQgYm90aCBob3ZlciArIGNsaWNrIG9uY2UsIGJ1dCBkZWNpZGUgd2hpY2ggb25lIHRvIHJlc3BlY3RcclxuICAgICAgICAgICAgICogb24gZWFjaCBpbnRlcmFjdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWRnZXQgY2xhc3Nlcy5cclxuICAgICAgICAgICAgICogVGhpcyB3YXksIGNoYW5naW5nIFwiQWN0aXZlIEJlaGF2aW9yXCIgaW4gdGhlIGVkaXRvciAod2hpY2ggdXBkYXRlc1xyXG4gICAgICAgICAgICAgKiB0aGUgd3JhcHBlciBjbGFzcyB2aWEgYHByZWZpeF9jbGFzc2ApIHN0YXJ0cyB3b3JraW5nIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAqIHdpdGhvdXQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgJGFjY29yZGlvbi5vbignbW91c2VlbnRlci5lbWtJbWFnZUFjY29yZGlvbiBjbGljay5lbWtJbWFnZUFjY29yZGlvbicsICcudGFiJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZWN0IGJlaGF2aW9yIGZyb20gdGhlIHdpZGdldCB3cmFwcGVyIGNsYXNzIGZpcnN0IChFbGVtZW50b3IgcHJlZml4X2NsYXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkc2NvcGUuY2xvc2VzdCgnLmVsZW1lbnRvci13aWRnZXQtZW1faW1hZ2VfYWNjb3JkaW9uJykubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyAkc2NvcGUuY2xvc2VzdCgnLmVsZW1lbnRvci13aWRnZXQtZW1faW1hZ2VfYWNjb3JkaW9uJylcclxuICAgICAgICAgICAgICAgICAgICA6ICRzY29wZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGFzc0F0dHIgPSAoJHdyYXBwZXIuYXR0cignY2xhc3MnKSB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJlaGF2aW9yID0gJ2NsaWNrJztcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0F0dHIuaW5kZXhPZignZW1rLWltYWdlLWFjY29yZGlvbi1ob3ZlcicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24tY2xpY2snKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvciA9ICdjbGljayc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiByZWFkIGZyb20gZGF0YSBhdHRyaWJ1dGUgb3IgaW5uZXIgYWNjb3JkaW9uIGNsYXNzIChmb3IgZnJvbnRlbmQgcmVuZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlaGF2aW9yQXR0ciA9ICRhY2NvcmRpb24uYXR0cignZGF0YS1hY3RpdmUtYmVoYXZpb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3JBdHRyID09PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJlaGF2aW9yQXR0ciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvciA9ICdjbGljayc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkYWNjb3JkaW9uLmhhc0NsYXNzKCdlbWstaW1hZ2UtYWNjb3JkaW9uLWhvdmVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnaG92ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgbWlzbWF0Y2hlZCBldmVudHMgKGUuZy4gaWdub3JlIGNsaWNrIHdoZW4gYmVoYXZpb3IgPSBob3ZlcilcclxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hvdmVyJyAmJiBldmVudC50eXBlICE9PSAnbW91c2VlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdjbGljaycgJiYgZXZlbnQudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdGFiLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRhYi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2ltYWdlX2FjY29yZGlvbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRJbWFnZUFjY29yZGlvbiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsImltYWdlX2FjY29yZGlvbiIsImZpbmQiLCIkYWNjb3JkaW9uIiwib2ZmIiwibGVuZ3RoIiwiZmlyc3QiLCJhZGRDbGFzcyIsIm9uIiwiZXZlbnQiLCIkdGFiIiwiJHdyYXBwZXIiLCJjbG9zZXN0IiwiY2xhc3NBdHRyIiwiYXR0ciIsImJlaGF2aW9yIiwiaW5kZXhPZiIsImJlaGF2aW9yQXR0ciIsImhhc0NsYXNzIiwidHlwZSIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJqUXVlcnkiLCJ3aW5kb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
=======
(()=>{"use strict";var e,o,c,i;e=jQuery,o=window,c=e(o),i={onInit:function(){var o=elementorFrontend,c={"em_image_accordion.default":i.EmKitImageAccordion};e.each(c,function(e,c){o.hooks.addAction("frontend/element_ready/"+e,c)})},EmKitImageAccordion:function(o){o.find(".accordion").each(function(){const c=e(this);c.off(".emkImageAccordion"),c.find(".tab.active").length||c.find(".tab").first().addClass("active"),c.on("mouseenter.emkImageAccordion click.emkImageAccordion",".tab",function(i){const n=e(this),t=(o.closest(".elementor-widget-em_image_accordion").length?o.closest(".elementor-widget-em_image_accordion"):o).attr("class")||"";let a="click";if(-1!==t.indexOf("emk-image-accordion-hover"))a="hover";else if(-1!==t.indexOf("emk-image-accordion-click"))a="click";else{const e=c.attr("data-active-behavior");"hover"===e?a="hover":"click"===e?a="click":c.hasClass("emk-image-accordion-hover")&&(a="hover")}"hover"===a&&"mouseenter"!==i.type||"click"===a&&"click"!==i.type||(n.siblings().removeClass("active"),n.addClass("active"))})})}},c.on("elementor/frontend/init",i.onInit)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfYWNjb3JkaW9uLmpzIiwibWFwcGluZ3MiOiJ1QkFDV0EsRUFBR0MsRUFFTkMsRUFFQUMsRUFKR0gsRUFpRk5JLE9BakZTSCxFQWlGREksT0EvRUxILEVBQVVGLEVBQUVDLEdBRVpFLEVBQWUsQ0FDakJHLE9BQVEsV0FDTixJQUFJQyxFQUFVQyxrQkFDVkMsRUFBb0IsQ0FDdEIsNkJBQThCTixFQUFhTyxxQkFHN0NWLEVBQUVXLEtBQUtGLEVBQW1CLFNBQVVHLEVBQVlDLEdBQzlDTixFQUFRTyxNQUFNQyxVQUFVLDBCQUE0QkgsRUFBWUMsRUFDbEUsRUFDRixFQUVBSCxvQkFBcUIsU0FBVU0sR0FDUEEsRUFBT0MsS0FBSyxjQUVsQk4sS0FBSyxXQUNqQixNQUFNTyxFQUFhbEIsRUFBRW1CLE1BR3JCRCxFQUFXRSxJQUFJLHNCQUdWRixFQUFXRCxLQUFLLGVBQWVJLFFBQ2hDSCxFQUFXRCxLQUFLLFFBQVFLLFFBQVFDLFNBQVMsVUFVN0NMLEVBQVdNLEdBQUcsdURBQXdELE9BQVEsU0FBVUMsR0FDcEYsTUFBTUMsRUFBTzFCLEVBQUVtQixNQU9UUSxHQUpXWCxFQUFPWSxRQUFRLHdDQUF3Q1AsT0FDbEVMLEVBQU9ZLFFBQVEsd0NBQ2ZaLEdBRXNCYSxLQUFLLFVBQVksR0FFN0MsSUFBSUMsRUFBVyxRQUNmLElBQXdELElBQXBESCxFQUFVSSxRQUFRLDZCQUNsQkQsRUFBVyxhQUNSLElBQXdELElBQXBESCxFQUFVSSxRQUFRLDZCQUN6QkQsRUFBVyxZQUNSLENBRUgsTUFBTUUsRUFBZWQsRUFBV1csS0FBSyx3QkFDaEIsVUFBakJHLEVBQ0FGLEVBQVcsUUFDYSxVQUFqQkUsRUFDUEYsRUFBVyxRQUNKWixFQUFXZSxTQUFTLCtCQUMzQkgsRUFBVyxRQUVuQixDQUdpQixVQUFiQSxHQUF1QyxlQUFmTCxFQUFNUyxNQUdqQixVQUFiSixHQUF1QyxVQUFmTCxFQUFNUyxPQUlsQ1IsRUFBS1MsV0FBV0MsWUFBWSxVQUM1QlYsRUFBS0gsU0FBUyxVQUNsQixFQUNKLEVBQ0osR0FJQXJCLEVBQVFzQixHQUFHLDBCQUEyQnJCLEVBQWFHLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9pbWFnZV9hY2NvcmRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XG4gIFxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgIFwiZW1faW1hZ2VfYWNjb3JkaW9uLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0SW1hZ2VBY2NvcmRpb24sXG4gICAgICAgIH07XG4gIFxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBFbUtpdEltYWdlQWNjb3JkaW9uOiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgIGxldCBpbWFnZV9hY2NvcmRpb24gPSAkc2NvcGUuZmluZCgnLmFjY29yZGlvbicpO1xuICAgIFxuICAgICAgICBpbWFnZV9hY2NvcmRpb24uZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBwcmV2aW91cyBoYW5kbGVycyAodXNlIG5hbWVzcGFjZWQgZXZlbnRzIHRvIGJlIHNhZmUgd2hlbiBFbGVtZW50b3IgcmUtcmVuZGVycyB0aGUgd2lkZ2V0KVxuICAgICAgICAgICAgJGFjY29yZGlvbi5vZmYoJy5lbWtJbWFnZUFjY29yZGlvbicpO1xuXG4gICAgICAgICAgICAvLyBFbnN1cmUgb25lIHRhYiBpcyBhY3RpdmUgYnkgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKCEkYWNjb3JkaW9uLmZpbmQoJy50YWIuYWN0aXZlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGFjY29yZGlvbi5maW5kKCcudGFiJykuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmluZCBib3RoIGhvdmVyICsgY2xpY2sgb25jZSwgYnV0IGRlY2lkZSB3aGljaCBvbmUgdG8gcmVzcGVjdFxuICAgICAgICAgICAgICogb24gZWFjaCBpbnRlcmFjdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWRnZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgICAqIFRoaXMgd2F5LCBjaGFuZ2luZyBcIkFjdGl2ZSBCZWhhdmlvclwiIGluIHRoZSBlZGl0b3IgKHdoaWNoIHVwZGF0ZXNcbiAgICAgICAgICAgICAqIHRoZSB3cmFwcGVyIGNsYXNzIHZpYSBgcHJlZml4X2NsYXNzYCkgc3RhcnRzIHdvcmtpbmcgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAqIHdpdGhvdXQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAkYWNjb3JkaW9uLm9uKCdtb3VzZWVudGVyLmVta0ltYWdlQWNjb3JkaW9uIGNsaWNrLmVta0ltYWdlQWNjb3JkaW9uJywgJy50YWInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlY3QgYmVoYXZpb3IgZnJvbSB0aGUgd2lkZ2V0IHdyYXBwZXIgY2xhc3MgZmlyc3QgKEVsZW1lbnRvciBwcmVmaXhfY2xhc3MpXG4gICAgICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkc2NvcGUuY2xvc2VzdCgnLmVsZW1lbnRvci13aWRnZXQtZW1faW1hZ2VfYWNjb3JkaW9uJykubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gJHNjb3BlLmNsb3Nlc3QoJy5lbGVtZW50b3Itd2lkZ2V0LWVtX2ltYWdlX2FjY29yZGlvbicpXG4gICAgICAgICAgICAgICAgICAgIDogJHNjb3BlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NBdHRyID0gKCR3cmFwcGVyLmF0dHIoJ2NsYXNzJykgfHwgJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJlaGF2aW9yID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24taG92ZXInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnaG92ZXInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24tY2xpY2snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnY2xpY2snO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiByZWFkIGZyb20gZGF0YSBhdHRyaWJ1dGUgb3IgaW5uZXIgYWNjb3JkaW9uIGNsYXNzIChmb3IgZnJvbnRlbmQgcmVuZGVyKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWhhdmlvckF0dHIgPSAkYWNjb3JkaW9uLmF0dHIoJ2RhdGEtYWN0aXZlLWJlaGF2aW9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvckF0dHIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiZWhhdmlvckF0dHIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkYWNjb3JkaW9uLmhhc0NsYXNzKCdlbWstaW1hZ2UtYWNjb3JkaW9uLWhvdmVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBtaXNtYXRjaGVkIGV2ZW50cyAoZS5nLiBpZ25vcmUgY2xpY2sgd2hlbiBiZWhhdmlvciA9IGhvdmVyKVxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hvdmVyJyAmJiBldmVudC50eXBlICE9PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdjbGljaycgJiYgZXZlbnQudHlwZSAhPT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHRhYi5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIH07XG4gIFxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsImpRdWVyeSIsIndpbmRvdyIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRJbWFnZUFjY29yZGlvbiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsImZpbmQiLCIkYWNjb3JkaW9uIiwidGhpcyIsIm9mZiIsImxlbmd0aCIsImZpcnN0IiwiYWRkQ2xhc3MiLCJvbiIsImV2ZW50IiwiJHRhYiIsImNsYXNzQXR0ciIsImNsb3Nlc3QiLCJhdHRyIiwiYmVoYXZpb3IiLCJpbmRleE9mIiwiYmVoYXZpb3JBdHRyIiwiaGFzQ2xhc3MiLCJ0eXBlIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> main
