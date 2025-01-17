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

  var $window = $(elementor);
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
      let tabs = $scope.find('.tabs-container');
      tabs.each(function () {
        const $tabsContainer = $(this);

        // Activate the first tab and its corresponding content by default
        if (!$tabsContainer.find('.tab.active').length) {
          $tabsContainer.find('.tab').first().addClass('active');
          const firstTabId = $tabsContainer.find('.tab').first().data('tab');
          $tabsContainer.find('#tab-' + firstTabId).addClass('active');
        }

        // On tab click, show the corresponding content
        $tabsContainer.on('click', '.tab', function () {
          const tabId = $(this).data('tab');

          // Remove active class from all tabs and contents
          $tabsContainer.find('.tab').removeClass('active');
          $tabsContainer.find('.content').removeClass('active');

          // Add active class to clicked tab and its corresponding content
          $(this).addClass('active');
          $tabsContainer.find('#tab-' + tabId).addClass('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2pzL3RhYi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3RhYi5zY3NzP2I3NjMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90YWIuc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2tpdF90YWIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRUYWIsXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgRW1LaXRUYWI6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICBsZXQgdGFicyA9ICRzY29wZS5maW5kKCcudGFicy1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgIHRhYnMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzQ29udGFpbmVyID0gJCh0aGlzKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgZmlyc3QgdGFiIGFuZCBpdHMgY29ycmVzcG9uZGluZyBjb250ZW50IGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgaWYgKCEkdGFic0NvbnRhaW5lci5maW5kKCcudGFiLmFjdGl2ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RUYWJJZCA9ICR0YWJzQ29udGFpbmVyLmZpbmQoJy50YWInKS5maXJzdCgpLmRhdGEoJ3RhYicpO1xyXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnI3RhYi0nICsgZmlyc3RUYWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gT24gdGFiIGNsaWNrLCBzaG93IHRoZSBjb3JyZXNwb25kaW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgJHRhYnNDb250YWluZXIub24oJ2NsaWNrJywgJy50YWInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJJZCA9ICQodGhpcykuZGF0YSgndGFiJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgdGFicyBhbmQgY29udGVudHNcclxuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJy50YWInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcuY29udGVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjbGlja2VkIHRhYiBhbmQgaXRzIGNvcnJlc3BvbmRpbmcgY29udGVudFxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcjdGFiLScgKyB0YWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy90YWIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy90YWIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwidGFicyIsImZpbmQiLCIkdGFic0NvbnRhaW5lciIsImxlbmd0aCIsImZpcnN0IiwiYWRkQ2xhc3MiLCJmaXJzdFRhYklkIiwiZGF0YSIsIm9uIiwidGFiSWQiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=