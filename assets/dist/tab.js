/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/tab.js":
/*!******************************!*\
  !*** ./assets/src/js/tab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_tab_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/tab.scss */ "./assets/src/scss/tab.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(window);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_tab.default": emkElementor.EmKitTab
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitTab: function ($scope) {
      let tabsContainers = $scope.find('.tabs-container');
      tabsContainers.each(function () {
        const $tabsContainer = $(this);
        const $tabs = $tabsContainer.find('.tab');
        const $contents = $tabsContainer.find('.content');

        // Initialize tabs - activate first if none active
        if (!$tabs.hasClass('active')) {
          $tabs.first().addClass('active');
          const firstTabId = $tabs.first().data('tab');
          $tabsContainer.find('#tab-' + firstTabId).addClass('active');
        }

        // Handle tab click
        $tabs.on('click', function (e) {
          e.preventDefault();
          const $clickedTab = $(this);
          const tabId = $clickedTab.data('tab');
          const $targetContent = $tabsContainer.find('#tab-' + tabId);

          // Don't do anything if clicking the already active tab
          if ($clickedTab.hasClass('active')) {
            return;
          }

          // Remove active classes
          $tabs.removeClass('active');
          $contents.removeClass('active');

          // Add active classes
          $clickedTab.addClass('active');
          $targetContent.addClass('active');

          // Optional: Trigger custom event
          $tabsContainer.trigger('tab-changed', [tabId, $clickedTab, $targetContent]);
        });

        // Handle keyboard navigation for accessibility
        $tabs.on('keydown', function (e) {
          const $currentTab = $(this);
          const key = e.keyCode || e.which;

          // Left/Up arrow
          if (key === 37 || key === 38) {
            e.preventDefault();
            const $prevTab = $currentTab.prev('.tab');
            if ($prevTab.length) {
              $prevTab.trigger('click').focus();
            } else {
              $tabs.last().trigger('click').focus();
            }
          }
          // Right/Down arrow
          else if (key === 39 || key === 40) {
            e.preventDefault();
            const $nextTab = $currentTab.next('.tab');
            if ($nextTab.length) {
              $nextTab.trigger('click').focus();
            } else {
              $tabs.first().trigger('click').focus();
            }
          }
          // Home key
          else if (key === 36) {
            e.preventDefault();
            $tabs.first().trigger('click').focus();
          }
          // End key
          else if (key === 35) {
            e.preventDefault();
            $tabs.last().trigger('click').focus();
          }
        });
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/tab.scss":
/*!**********************************!*\
  !*** ./assets/src/scss/tab.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	__webpack_require__("./assets/src/scss/tab.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/tab.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ2xCVCxLQUFLLENBQUN1QixJQUFJLENBQUMsQ0FBQyxDQUFDVCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUNRLEtBQUssQ0FBQyxDQUFDO1VBQ3pDO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUR2QyxPQUFPLENBQUN3QixFQUFFLENBQUMseUJBQXlCLEVBQUV0QixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM5RCxDQUFDLEVBQUV3QyxNQUFNLEVBQUUxQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDbkdsQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvdGFiLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvdGFiLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90YWIuc2Nzc1wiO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBcImVtX2tpdF90YWIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRUYWIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEVtS2l0VGFiOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWJzQ29udGFpbmVycyA9ICRzY29wZS5maW5kKCcudGFicy1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0YWJzQ29udGFpbmVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YWJzQ29udGFpbmVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHRhYnNDb250YWluZXIuZmluZCgnLmNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0YWJzIC0gYWN0aXZhdGUgZmlyc3QgaWYgbm9uZSBhY3RpdmVcclxuICAgICAgICAgICAgICAgIGlmICghJHRhYnMuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhYnMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RUYWJJZCA9ICR0YWJzLmZpcnN0KCkuZGF0YSgndGFiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnI3RhYi0nICsgZmlyc3RUYWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGFiIGNsaWNrXHJcbiAgICAgICAgICAgICAgICAkdGFicy5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2xpY2tlZFRhYiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiSWQgPSAkY2xpY2tlZFRhYi5kYXRhKCd0YWInKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0Q29udGVudCA9ICR0YWJzQ29udGFpbmVyLmZpbmQoJyN0YWItJyArIHRhYklkKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBjbGlja2luZyB0aGUgYWxyZWFkeSBhY3RpdmUgdGFiXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjbGlja2VkVGFiLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICR0YWJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICRjbGlja2VkVGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0Q29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWw6IFRyaWdnZXIgY3VzdG9tIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIudHJpZ2dlcigndGFiLWNoYW5nZWQnLCBbdGFiSWQsICRjbGlja2VkVGFiLCAkdGFyZ2V0Q29udGVudF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGZvciBhY2Nlc3NpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAkdGFicy5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRUYWIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExlZnQvVXAgYXJyb3dcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAzNyB8fCBrZXkgPT09IDM4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByZXZUYWIgPSAkY3VycmVudFRhYi5wcmV2KCcudGFiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcHJldlRhYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcmV2VGFiLnRyaWdnZXIoJ2NsaWNrJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YWJzLmxhc3QoKS50cmlnZ2VyKCdjbGljaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmlnaHQvRG93biBhcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gMzkgfHwga2V5ID09PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRuZXh0VGFiID0gJGN1cnJlbnRUYWIubmV4dCgnLnRhYicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG5leHRUYWIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbmV4dFRhYi50cmlnZ2VyKCdjbGljaycpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFicy5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gMzYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFicy5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFicy5sYXN0KCkudHJpZ2dlcignY2xpY2snKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG59KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy90YWIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy90YWIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwidGFic0NvbnRhaW5lcnMiLCJmaW5kIiwiJHRhYnNDb250YWluZXIiLCIkdGFicyIsIiRjb250ZW50cyIsImhhc0NsYXNzIiwiZmlyc3QiLCJhZGRDbGFzcyIsImZpcnN0VGFiSWQiLCJkYXRhIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkY2xpY2tlZFRhYiIsInRhYklkIiwiJHRhcmdldENvbnRlbnQiLCJyZW1vdmVDbGFzcyIsInRyaWdnZXIiLCIkY3VycmVudFRhYiIsImtleSIsImtleUNvZGUiLCJ3aGljaCIsIiRwcmV2VGFiIiwicHJldiIsImxlbmd0aCIsImZvY3VzIiwibGFzdCIsIiRuZXh0VGFiIiwibmV4dCIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=