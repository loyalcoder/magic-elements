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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2pzL3RhYi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3RhYi5zY3NzP2I3NjMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90YWIuc2Nzc1wiXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xuICBcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICBcImVtX2tpdF90YWIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRUYWIsXG4gICAgICAgIH07XG4gIFxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBFbUtpdFRhYjogZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICBsZXQgdGFicyA9ICRzY29wZS5maW5kKCcudGFicy1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgdGFicy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzQ29udGFpbmVyID0gJCh0aGlzKTtcbiAgICBcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBmaXJzdCB0YWIgYW5kIGl0cyBjb3JyZXNwb25kaW5nIGNvbnRlbnQgYnkgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKCEkdGFic0NvbnRhaW5lci5maW5kKCcudGFiLmFjdGl2ZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLmZpbmQoJy50YWInKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFRhYklkID0gJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpLmZpcnN0KCkuZGF0YSgndGFiJyk7XG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnI3RhYi0nICsgZmlyc3RUYWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gT24gdGFiIGNsaWNrLCBzaG93IHRoZSBjb3JyZXNwb25kaW5nIGNvbnRlbnRcbiAgICAgICAgICAgICR0YWJzQ29udGFpbmVyLm9uKCdjbGljaycsICcudGFiJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYklkID0gJCh0aGlzKS5kYXRhKCd0YWInKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRhYnMgYW5kIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnLnRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkdGFic0NvbnRhaW5lci5maW5kKCcuY29udGVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNsaWNrZWQgdGFiIGFuZCBpdHMgY29ycmVzcG9uZGluZyBjb250ZW50XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJHRhYnNDb250YWluZXIuZmluZCgnI3RhYi0nICsgdGFiSWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIH07XG4gIFxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvdGFiLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvdGFiLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdFRhYiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsInRhYnMiLCJmaW5kIiwiJHRhYnNDb250YWluZXIiLCJsZW5ndGgiLCJmaXJzdCIsImFkZENsYXNzIiwiZmlyc3RUYWJJZCIsImRhdGEiLCJvbiIsInRhYklkIiwicmVtb3ZlQ2xhc3MiLCJqUXVlcnkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9