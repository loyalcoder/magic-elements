/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/tab.js"
/*!******************************!*\
  !*** ./assets/src/js/tab.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./assets/src/scss/tab.scss"
/*!**********************************!*\
  !*** ./assets/src/scss/tab.scss ***!
  \**********************************/
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
/******/ 	__webpack_require__("./assets/src/scss/tab.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/tab.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy90YWIuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy90YWIuc2Nzcz9iNzYzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvdGFiLnNjc3NcIlxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfdGFiLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0VGFiLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0VGFiOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHRhYnMgPSAkc2NvcGUuZmluZCgnLnRhYnMtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgICAgICB0YWJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFic0NvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIGZpcnN0IHRhYiBhbmQgaXRzIGNvcnJlc3BvbmRpbmcgY29udGVudCBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIGlmICghJHRhYnNDb250YWluZXIuZmluZCgnLnRhYi5hY3RpdmUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJy50YWInKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGFiSWQgPSAkdGFic0NvbnRhaW5lci5maW5kKCcudGFiJykuZmlyc3QoKS5kYXRhKCd0YWInKTtcclxuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJyN0YWItJyArIGZpcnN0VGFiSWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIE9uIHRhYiBjbGljaywgc2hvdyB0aGUgY29ycmVzcG9uZGluZyBjb250ZW50XHJcbiAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLm9uKCdjbGljaycsICcudGFiJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFiSWQgPSAkKHRoaXMpLmRhdGEoJ3RhYicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRhYnMgYW5kIGNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcudGFiJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnLmNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCB0YWIgYW5kIGl0cyBjb3JyZXNwb25kaW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnI3RhYi0nICsgdGFiSWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy90YWIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy90YWIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwidGFicyIsImZpbmQiLCIkdGFic0NvbnRhaW5lciIsImxlbmd0aCIsImZpcnN0IiwiYWRkQ2xhc3MiLCJmaXJzdFRhYklkIiwiZGF0YSIsIm9uIiwidGFiSWQiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsIndpbmRvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9