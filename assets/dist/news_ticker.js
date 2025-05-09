/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/news_ticker.js":
/*!**************************************!*\
  !*** ./assets/src/js/news_ticker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_news_ticker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/news_ticker.scss */ "./assets/src/scss/news_ticker.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_news_ticker.default": emkElementor.EmKitNewsTicker
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitNewsTicker: function ($scope) {
      let $ticker = $scope.find('.multi-source-ticker');
      let settings = $ticker.data('settings');
      let $content = $ticker.find('.mst-content');

      // Initialize Slick slider
      $content.slick({
        vertical: settings.direction,
        verticalSwiping: settings.direction,
        autoplay: settings.autoplay,
        autoplaySpeed: settings.speed,
        pauseOnHover: settings.pauseOnHover,
        arrows: settings.arrows,
        infinite: settings.infinite,
        rtl: settings.rtl,
        prevArrow: $ticker.find('.mst-prev'),
        nextArrow: $ticker.find('.mst-next')
      });

      // Handle window resize
      $(window).on('resize', function () {
        $content.slick('resize');
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/news_ticker.scss":
/*!******************************************!*\
  !*** ./assets/src/scss/news_ticker.scss ***!
  \******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/news_ticker.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/news_ticker.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c190aWNrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ3BDLENBQUMsVUFBVUEsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckIsWUFBWTs7RUFDWixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsU0FBUyxDQUFDO0VBRTFCLElBQUlFLFlBQVksR0FBRztJQUNqQkMsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNsQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQjtNQUMvQixJQUFJQyxpQkFBaUIsR0FBRztRQUN0Qiw0QkFBNEIsRUFBRUosWUFBWSxDQUFDSztNQUM3QyxDQUFDO01BRURSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxVQUFVRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUN4RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBR0gsVUFBVSxFQUFFQyxRQUFRLENBQUM7TUFDM0UsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVESCxlQUFlLEVBQUUsU0FBQUEsQ0FBU00sTUFBTSxFQUFFO01BQ2hDLElBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUM7TUFDakQsSUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUNHLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDdkMsSUFBSUMsUUFBUSxHQUFHSixPQUFPLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUM7O01BRTNDO01BQ0FHLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1FBQ1hDLFFBQVEsRUFBRUosUUFBUSxDQUFDSyxTQUFTO1FBQzVCQyxlQUFlLEVBQUVOLFFBQVEsQ0FBQ0ssU0FBUztRQUNuQ0UsUUFBUSxFQUFFUCxRQUFRLENBQUNPLFFBQVE7UUFDM0JDLGFBQWEsRUFBRVIsUUFBUSxDQUFDUyxLQUFLO1FBQzdCQyxZQUFZLEVBQUVWLFFBQVEsQ0FBQ1UsWUFBWTtRQUNuQ0MsTUFBTSxFQUFFWCxRQUFRLENBQUNXLE1BQU07UUFDdkJDLFFBQVEsRUFBRVosUUFBUSxDQUFDWSxRQUFRO1FBQzNCQyxHQUFHLEVBQUViLFFBQVEsQ0FBQ2EsR0FBRztRQUNqQkMsU0FBUyxFQUFFaEIsT0FBTyxDQUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDZ0IsU0FBUyxFQUFFakIsT0FBTyxDQUFDQyxJQUFJLENBQUMsV0FBVztNQUN2QyxDQUFDLENBQUM7O01BRUY7TUFDQWhCLENBQUMsQ0FBQ2lDLE1BQU0sQ0FBQyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7UUFDOUJmLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQztNQUM1QixDQUFDLENBQUM7SUFDTjtFQUdBLENBQUM7RUFFRGxCLE9BQU8sQ0FBQ2dDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRS9CLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRStCLE1BQU0sRUFBRUYsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQzlDcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL25ld3NfdGlja2VyLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvbmV3c190aWNrZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25ld3NfdGlja2VyLnNjc3NcIjtcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwiZW1fa2l0X25ld3NfdGlja2VyLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0TmV3c1RpY2tlcixcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpdE5ld3NUaWNrZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgIGxldCAkdGlja2VyID0gJHNjb3BlLmZpbmQoJy5tdWx0aS1zb3VyY2UtdGlja2VyJyk7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gJHRpY2tlci5kYXRhKCdzZXR0aW5ncycpO1xyXG4gICAgICAgIGxldCAkY29udGVudCA9ICR0aWNrZXIuZmluZCgnLm1zdC1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXplIFNsaWNrIHNsaWRlclxyXG4gICAgICAgICRjb250ZW50LnNsaWNrKHtcclxuICAgICAgICAgICAgdmVydGljYWw6IHNldHRpbmdzLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBzZXR0aW5ncy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBzZXR0aW5ncy5hdXRvcGxheSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogc2V0dGluZ3Muc3BlZWQsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3Zlcjogc2V0dGluZ3MucGF1c2VPbkhvdmVyLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHNldHRpbmdzLmFycm93cyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHNldHRpbmdzLmluZmluaXRlLFxyXG4gICAgICAgICAgICBydGw6IHNldHRpbmdzLnJ0bCxcclxuICAgICAgICAgICAgcHJldkFycm93OiAkdGlja2VyLmZpbmQoJy5tc3QtcHJldicpLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICR0aWNrZXIuZmluZCgnLm1zdC1uZXh0JylcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQuc2xpY2soJ3Jlc2l6ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvbmV3c190aWNrZXIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9uZXdzX3RpY2tlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXROZXdzVGlja2VyIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHRpY2tlciIsImZpbmQiLCJzZXR0aW5ncyIsImRhdGEiLCIkY29udGVudCIsInNsaWNrIiwidmVydGljYWwiLCJkaXJlY3Rpb24iLCJ2ZXJ0aWNhbFN3aXBpbmciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsInBhdXNlT25Ib3ZlciIsImFycm93cyIsImluZmluaXRlIiwicnRsIiwicHJldkFycm93IiwibmV4dEFycm93Iiwid2luZG93Iiwib24iLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9