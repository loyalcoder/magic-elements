/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/vertical_menu.js":
/*!****************************************!*\
  !*** ./assets/src/js/vertical_menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_vertical_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/vertical_menu.scss */ "./assets/src/scss/vertical_menu.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "magic-vertical-menu.default": emkElementor.EmKitVerticalMenu
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitVerticalMenu: function ($scope) {
      let menuContainer = $scope.find('.magic-vertical-menu .menu-item-has-children > a');
      menuContainer.each(function () {
        let $this = $(this);
        let $menuItem = $this.siblings('.sub-menu');
        $this.on('click', function (e) {
          e.preventDefault();
          $menuItem.slideToggle();
          $menuItem.parent().toggleClass('open');
        });
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/vertical_menu.scss":
/*!********************************************!*\
  !*** ./assets/src/scss/vertical_menu.scss ***!
  \********************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/vertical_menu.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/vertical_menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWxfbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsQ0FBQyxVQUFVQSxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyQixZQUFZOztFQUNaLElBQUlDLE9BQU8sR0FBR0YsQ0FBQyxDQUFDQyxTQUFTLENBQUM7RUFFMUIsSUFBSUUsWUFBWSxHQUFHO0lBQ2pCQyxNQUFNLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO01BQ2xCLElBQUlDLE9BQU8sR0FBR0MsaUJBQWlCO01BQy9CLElBQUlDLGlCQUFpQixHQUFHO1FBQ3RCLDZCQUE2QixFQUFFSixZQUFZLENBQUNLO01BQzlDLENBQUM7TUFFRFIsQ0FBQyxDQUFDUyxJQUFJLENBQUNGLGlCQUFpQixFQUFFLFVBQVVHLFVBQVUsRUFBRUMsUUFBUSxFQUFFO1FBQ3hETixPQUFPLENBQUNPLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLHlCQUF5QixHQUFHSCxVQUFVLEVBQUVDLFFBQVEsQ0FBQztNQUMzRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRURILGlCQUFpQixFQUFFLFNBQUFBLENBQVVNLE1BQU0sRUFBRTtNQUNuQyxJQUFJQyxhQUFhLEdBQUdELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGtEQUFrRCxDQUFDO01BQ25GRCxhQUFhLENBQUNOLElBQUksQ0FBQyxZQUFZO1FBQzNCLElBQUlRLEtBQUssR0FBR2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSWtCLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRTNDRixLQUFLLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO1VBQzNCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ2xCSixTQUFTLENBQUNLLFdBQVcsQ0FBQyxDQUFDO1VBQ3ZCTCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDMUMsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBRU47RUFDQSxDQUFDO0VBRUR2QixPQUFPLENBQUNrQixFQUFFLENBQUMseUJBQXlCLEVBQUVqQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM5RCxDQUFDLEVBQUVzQixNQUFNLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNuQ2xCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy92ZXJ0aWNhbF9tZW51LmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvdmVydGljYWxfbWVudS5zY3NzPzM3NzIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy92ZXJ0aWNhbF9tZW51LnNjc3NcIjtcblxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcbiAgXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XG4gICAgICAgICAgXCJtYWdpYy12ZXJ0aWNhbC1tZW51LmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0VmVydGljYWxNZW51LFxuICAgICAgICB9O1xuICBcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgRW1LaXRWZXJ0aWNhbE1lbnU6IGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICAgbGV0IG1lbnVDb250YWluZXIgPSAkc2NvcGUuZmluZCgnLm1hZ2ljLXZlcnRpY2FsLW1lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgbGV0ICRtZW51SXRlbSA9ICR0aGlzLnNpYmxpbmdzKCcuc3ViLW1lbnUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJG1lbnVJdGVtLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgJG1lbnVJdGVtLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0sXG4gICAgfTtcbiAgXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xufSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvdmVydGljYWxfbWVudS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL3ZlcnRpY2FsX21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0VmVydGljYWxNZW51IiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwibWVudUNvbnRhaW5lciIsImZpbmQiLCIkdGhpcyIsIiRtZW51SXRlbSIsInNpYmxpbmdzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZVRvZ2dsZSIsInBhcmVudCIsInRvZ2dsZUNsYXNzIiwialF1ZXJ5Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==