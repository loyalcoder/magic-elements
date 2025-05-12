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
        speed: settings.autoplaySpeed,
        pauseOnHover: settings.pauseOnHover,
        arrows: settings.arrows,
        infinite: settings.infinite,
        rtl: settings.rtl,
        cssEase: 'linear',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c190aWNrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ3BDLENBQUMsVUFBVUEsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckIsWUFBWTs7RUFDWixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsU0FBUyxDQUFDO0VBRTFCLElBQUlFLFlBQVksR0FBRztJQUNqQkMsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNsQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQjtNQUMvQixJQUFJQyxpQkFBaUIsR0FBRztRQUN0Qiw0QkFBNEIsRUFBRUosWUFBWSxDQUFDSztNQUM3QyxDQUFDO01BRURSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxVQUFVRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUN4RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBR0gsVUFBVSxFQUFFQyxRQUFRLENBQUM7TUFDM0UsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVESCxlQUFlLEVBQUUsU0FBQUEsQ0FBU00sTUFBTSxFQUFFO01BQ2hDLElBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUM7TUFDakQsSUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUNHLElBQUksQ0FBQyxVQUFVLENBQUM7TUFDdkMsSUFBSUMsUUFBUSxHQUFHSixPQUFPLENBQUNDLElBQUksQ0FBQyxjQUFjLENBQUM7O01BRTNDO01BQ0FHLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1FBQ1hDLFFBQVEsRUFBRUosUUFBUSxDQUFDSyxTQUFTO1FBQzVCQyxlQUFlLEVBQUVOLFFBQVEsQ0FBQ0ssU0FBUztRQUNuQ0UsUUFBUSxFQUFFUCxRQUFRLENBQUNPLFFBQVE7UUFDM0JDLGFBQWEsRUFBRVIsUUFBUSxDQUFDUyxLQUFLO1FBQzdCQSxLQUFLLEVBQUVULFFBQVEsQ0FBQ1EsYUFBYTtRQUM3QkUsWUFBWSxFQUFFVixRQUFRLENBQUNVLFlBQVk7UUFDbkNDLE1BQU0sRUFBRVgsUUFBUSxDQUFDVyxNQUFNO1FBQ3ZCQyxRQUFRLEVBQUVaLFFBQVEsQ0FBQ1ksUUFBUTtRQUMzQkMsR0FBRyxFQUFFYixRQUFRLENBQUNhLEdBQUc7UUFDakJDLE9BQU8sRUFBRSxRQUFRO1FBQ2pCQyxTQUFTLEVBQUVqQixPQUFPLENBQUNDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcENpQixTQUFTLEVBQUVsQixPQUFPLENBQUNDLElBQUksQ0FBQyxXQUFXO01BQ3ZDLENBQUMsQ0FBQzs7TUFFRjtNQUNBaEIsQ0FBQyxDQUFDa0MsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztRQUM5QmhCLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQztNQUM1QixDQUFDLENBQUM7SUFDTjtFQUdBLENBQUM7RUFFRGxCLE9BQU8sQ0FBQ2lDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRWhDLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRWdDLE1BQU0sRUFBRUYsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQ2hEcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL25ld3NfdGlja2VyLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvbmV3c190aWNrZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25ld3NfdGlja2VyLnNjc3NcIjtcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwiZW1fa2l0X25ld3NfdGlja2VyLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0TmV3c1RpY2tlcixcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpdE5ld3NUaWNrZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgIGxldCAkdGlja2VyID0gJHNjb3BlLmZpbmQoJy5tdWx0aS1zb3VyY2UtdGlja2VyJyk7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gJHRpY2tlci5kYXRhKCdzZXR0aW5ncycpO1xyXG4gICAgICAgIGxldCAkY29udGVudCA9ICR0aWNrZXIuZmluZCgnLm1zdC1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXplIFNsaWNrIHNsaWRlclxyXG4gICAgICAgICRjb250ZW50LnNsaWNrKHtcclxuICAgICAgICAgICAgdmVydGljYWw6IHNldHRpbmdzLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBzZXR0aW5ncy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBzZXR0aW5ncy5hdXRvcGxheSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogc2V0dGluZ3Muc3BlZWQsXHJcbiAgICAgICAgICAgIHNwZWVkOiBzZXR0aW5ncy5hdXRvcGxheVNwZWVkLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHNldHRpbmdzLnBhdXNlT25Ib3ZlcixcclxuICAgICAgICAgICAgYXJyb3dzOiBzZXR0aW5ncy5hcnJvd3MsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBzZXR0aW5ncy5pbmZpbml0ZSxcclxuICAgICAgICAgICAgcnRsOiBzZXR0aW5ncy5ydGwsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICR0aWNrZXIuZmluZCgnLm1zdC1wcmV2JyksXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJHRpY2tlci5maW5kKCcubXN0LW5leHQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkY29udGVudC5zbGljaygncmVzaXplJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9uZXdzX3RpY2tlci5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL25ld3NfdGlja2VyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE5ld3NUaWNrZXIiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkdGlja2VyIiwiZmluZCIsInNldHRpbmdzIiwiZGF0YSIsIiRjb250ZW50Iiwic2xpY2siLCJ2ZXJ0aWNhbCIsImRpcmVjdGlvbiIsInZlcnRpY2FsU3dpcGluZyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJydGwiLCJjc3NFYXNlIiwicHJldkFycm93IiwibmV4dEFycm93Iiwid2luZG93Iiwib24iLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9