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
        "magicelements_tab.default": emkElementor.magicelementsTab
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    magicelementsTab: function ($scope) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9zcmMvanMvdGFiLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvdGFiLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90YWIuc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcIm1hZ2ljZWxlbWVudHNfdGFiLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLm1hZ2ljZWxlbWVudHNUYWIsXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWFnaWNlbGVtZW50c1RhYjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIGxldCB0YWJzID0gJHNjb3BlLmZpbmQoJy50YWJzLWNvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgdGFicy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJHRhYnNDb250YWluZXIgPSAkKHRoaXMpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBmaXJzdCB0YWIgYW5kIGl0cyBjb3JyZXNwb25kaW5nIGNvbnRlbnQgYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICBpZiAoISR0YWJzQ29udGFpbmVyLmZpbmQoJy50YWIuYWN0aXZlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcudGFiJykuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFRhYklkID0gJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpLmZpcnN0KCkuZGF0YSgndGFiJyk7XHJcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcjdGFiLScgKyBmaXJzdFRhYklkKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBPbiB0YWIgY2xpY2ssIHNob3cgdGhlIGNvcnJlc3BvbmRpbmcgY29udGVudFxyXG4gICAgICAgICAgICAkdGFic0NvbnRhaW5lci5vbignY2xpY2snLCAnLnRhYicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYklkID0gJCh0aGlzKS5kYXRhKCd0YWInKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGFsbCB0YWJzIGFuZCBjb250ZW50c1xyXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJy5jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNsaWNrZWQgdGFiIGFuZCBpdHMgY29ycmVzcG9uZGluZyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJyN0YWItJyArIHRhYklkKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL3RhYi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL3RhYi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwibWFnaWNlbGVtZW50c1RhYiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsInRhYnMiLCJmaW5kIiwiJHRhYnNDb250YWluZXIiLCJsZW5ndGgiLCJmaXJzdCIsImFkZENsYXNzIiwiZmlyc3RUYWJJZCIsImRhdGEiLCJvbiIsInRhYklkIiwicmVtb3ZlQ2xhc3MiLCJqUXVlcnkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9