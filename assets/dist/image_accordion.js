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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SU4sS0FBSyxDQUFDVSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2hEO1VBQ0o7VUFFQVQsSUFBSSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsUUFBUSxDQUFDO1VBQ3JDWCxJQUFJLENBQUNILFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDM0IsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFFQSxDQUFDO0VBRURuQixPQUFPLENBQUNvQixFQUFFLENBQUMseUJBQXlCLEVBQUVuQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVnQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQ2xGcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2VfYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfYWNjb3JkaW9uLnNjc3M/NjFlYiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XG4gIFxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgIFwiZW1faW1hZ2VfYWNjb3JkaW9uLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0SW1hZ2VBY2NvcmRpb24sXG4gICAgICAgIH07XG4gIFxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBFbUtpdEltYWdlQWNjb3JkaW9uOiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgIGxldCBpbWFnZV9hY2NvcmRpb24gPSAkc2NvcGUuZmluZCgnLmFjY29yZGlvbicpO1xuICAgIFxuICAgICAgICBpbWFnZV9hY2NvcmRpb24uZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBwcmV2aW91cyBoYW5kbGVycyAodXNlIG5hbWVzcGFjZWQgZXZlbnRzIHRvIGJlIHNhZmUgd2hlbiBFbGVtZW50b3IgcmUtcmVuZGVycyB0aGUgd2lkZ2V0KVxuICAgICAgICAgICAgJGFjY29yZGlvbi5vZmYoJy5lbWtJbWFnZUFjY29yZGlvbicpO1xuXG4gICAgICAgICAgICAvLyBFbnN1cmUgb25lIHRhYiBpcyBhY3RpdmUgYnkgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKCEkYWNjb3JkaW9uLmZpbmQoJy50YWIuYWN0aXZlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGFjY29yZGlvbi5maW5kKCcudGFiJykuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQmluZCBib3RoIGhvdmVyICsgY2xpY2sgb25jZSwgYnV0IGRlY2lkZSB3aGljaCBvbmUgdG8gcmVzcGVjdFxuICAgICAgICAgICAgICogb24gZWFjaCBpbnRlcmFjdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWRnZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgICAqIFRoaXMgd2F5LCBjaGFuZ2luZyBcIkFjdGl2ZSBCZWhhdmlvclwiIGluIHRoZSBlZGl0b3IgKHdoaWNoIHVwZGF0ZXNcbiAgICAgICAgICAgICAqIHRoZSB3cmFwcGVyIGNsYXNzIHZpYSBgcHJlZml4X2NsYXNzYCkgc3RhcnRzIHdvcmtpbmcgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAqIHdpdGhvdXQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAkYWNjb3JkaW9uLm9uKCdtb3VzZWVudGVyLmVta0ltYWdlQWNjb3JkaW9uIGNsaWNrLmVta0ltYWdlQWNjb3JkaW9uJywgJy50YWInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlY3QgYmVoYXZpb3IgZnJvbSB0aGUgd2lkZ2V0IHdyYXBwZXIgY2xhc3MgZmlyc3QgKEVsZW1lbnRvciBwcmVmaXhfY2xhc3MpXG4gICAgICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkc2NvcGUuY2xvc2VzdCgnLmVsZW1lbnRvci13aWRnZXQtZW1faW1hZ2VfYWNjb3JkaW9uJykubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gJHNjb3BlLmNsb3Nlc3QoJy5lbGVtZW50b3Itd2lkZ2V0LWVtX2ltYWdlX2FjY29yZGlvbicpXG4gICAgICAgICAgICAgICAgICAgIDogJHNjb3BlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NBdHRyID0gKCR3cmFwcGVyLmF0dHIoJ2NsYXNzJykgfHwgJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJlaGF2aW9yID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24taG92ZXInKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnaG92ZXInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NBdHRyLmluZGV4T2YoJ2Vtay1pbWFnZS1hY2NvcmRpb24tY2xpY2snKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IgPSAnY2xpY2snO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiByZWFkIGZyb20gZGF0YSBhdHRyaWJ1dGUgb3IgaW5uZXIgYWNjb3JkaW9uIGNsYXNzIChmb3IgZnJvbnRlbmQgcmVuZGVyKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiZWhhdmlvckF0dHIgPSAkYWNjb3JkaW9uLmF0dHIoJ2RhdGEtYWN0aXZlLWJlaGF2aW9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvckF0dHIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiZWhhdmlvckF0dHIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkYWNjb3JkaW9uLmhhc0NsYXNzKCdlbWstaW1hZ2UtYWNjb3JkaW9uLWhvdmVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gJ2hvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBtaXNtYXRjaGVkIGV2ZW50cyAoZS5nLiBpZ25vcmUgY2xpY2sgd2hlbiBiZWhhdmlvciA9IGhvdmVyKVxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hvdmVyJyAmJiBldmVudC50eXBlICE9PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdjbGljaycgJiYgZXZlbnQudHlwZSAhPT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHRhYi5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIH07XG4gIFxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9pbWFnZV9hY2NvcmRpb24uc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9pbWFnZV9hY2NvcmRpb24uanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0SW1hZ2VBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCJpbWFnZV9hY2NvcmRpb24iLCJmaW5kIiwiJGFjY29yZGlvbiIsIm9mZiIsImxlbmd0aCIsImZpcnN0IiwiYWRkQ2xhc3MiLCJvbiIsImV2ZW50IiwiJHRhYiIsIiR3cmFwcGVyIiwiY2xvc2VzdCIsImNsYXNzQXR0ciIsImF0dHIiLCJiZWhhdmlvciIsImluZGV4T2YiLCJiZWhhdmlvckF0dHIiLCJoYXNDbGFzcyIsInR5cGUiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=