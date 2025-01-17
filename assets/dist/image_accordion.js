/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/image_accordion.js":
/*!******************************************!*\
  !*** ./assets/src/js/image_accordion.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_image_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/image_accordion.scss */ "./assets/src/scss/image_accordion.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "magicelements_image_accordion.default": emkElementor.magicelementsImageAccordion
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    magicelementsImageAccordion: function ($scope) {
      let image_accordion = $scope.find('.accordion');
      image_accordion.each(function () {
        const $accordion = $(this);
        const behavior = $accordion.hasClass('magicelements-image-accordion-hover') ? 'hover' : 'click';
        if (!$accordion.find('.tab.active').length) {
          $accordion.find('.tab').first().addClass('active');
        }
        if (behavior === 'hover') {
          $accordion.on('mouseenter', '.tab', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
          });
        } else {
          $accordion.on('click', '.tab', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
          });
        }
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/image_accordion.scss":
/*!**********************************************!*\
  !*** ./assets/src/scss/image_accordion.scss ***!
  \**********************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/image_accordion.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/image_accordion.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfYWNjb3JkaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUN2QyxDQUFDLFVBQVVBLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3JCLFlBQVk7O0VBQ1osSUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUNDLFNBQVMsQ0FBQztFQUUxQixJQUFJRSxZQUFZLEdBQUc7SUFDakJDLE1BQU0sRUFBRSxTQUFBQSxDQUFBLEVBQVk7TUFDbEIsSUFBSUMsT0FBTyxHQUFHQyxpQkFBaUI7TUFDL0IsSUFBSUMsaUJBQWlCLEdBQUc7UUFDdEIsdUNBQXVDLEVBQUVKLFlBQVksQ0FBQ0s7TUFDeEQsQ0FBQztNQUVEUixDQUFDLENBQUNTLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsVUFBVUcsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFDeEROLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLENBQUMseUJBQXlCLEdBQUdILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzNFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFREgsMkJBQTJCLEVBQUUsU0FBQUEsQ0FBVU0sTUFBTSxFQUFFO01BQzdDLElBQUlDLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDO01BRS9DRCxlQUFlLENBQUNOLElBQUksQ0FBQyxZQUFZO1FBQzdCLE1BQU1RLFVBQVUsR0FBR2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTWtCLFFBQVEsR0FBR0QsVUFBVSxDQUFDRSxRQUFRLENBQUMscUNBQXFDLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTztRQUUvRixJQUFJLENBQUNGLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDSSxNQUFNLEVBQUU7VUFDeENILFVBQVUsQ0FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3REO1FBRUEsSUFBSUosUUFBUSxLQUFLLE9BQU8sRUFBRTtVQUN0QkQsVUFBVSxDQUFDTSxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZO1lBQzVDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDd0IsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN4Q3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NCLFFBQVEsQ0FBQyxRQUFRLENBQUM7VUFDOUIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxNQUFNO1VBQ0hMLFVBQVUsQ0FBQ00sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWTtZQUN2Q3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3dCLFFBQVEsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDeEN6QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzQixRQUFRLENBQUMsUUFBUSxDQUFDO1VBQzlCLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFFRixDQUFDO0VBRURwQixPQUFPLENBQUNxQixFQUFFLENBQUMseUJBQXlCLEVBQUVwQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVzQixNQUFNLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUM3Q3BCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9pbWFnZV9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9pbWFnZV9hY2NvcmRpb24uc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCJcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwibWFnaWNlbGVtZW50c19pbWFnZV9hY2NvcmRpb24uZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IubWFnaWNlbGVtZW50c0ltYWdlQWNjb3JkaW9uLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1hZ2ljZWxlbWVudHNJbWFnZUFjY29yZGlvbjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBpbWFnZV9hY2NvcmRpb24gPSAkc2NvcGUuZmluZCgnLmFjY29yZGlvbicpO1xyXG4gICAgXHJcbiAgICAgICAgaW1hZ2VfYWNjb3JkaW9uLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgY29uc3QgYmVoYXZpb3IgPSAkYWNjb3JkaW9uLmhhc0NsYXNzKCdtYWdpY2VsZW1lbnRzLWltYWdlLWFjY29yZGlvbi1ob3ZlcicpID8gJ2hvdmVyJyA6ICdjbGljayc7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCEkYWNjb3JkaW9uLmZpbmQoJy50YWIuYWN0aXZlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLmZpbmQoJy50YWInKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICAgICAgJGFjY29yZGlvbi5vbignbW91c2VlbnRlcicsICcudGFiJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRhY2NvcmRpb24ub24oJ2NsaWNrJywgJy50YWInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfYWNjb3JkaW9uLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvaW1hZ2VfYWNjb3JkaW9uLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJtYWdpY2VsZW1lbnRzSW1hZ2VBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCJpbWFnZV9hY2NvcmRpb24iLCJmaW5kIiwiJGFjY29yZGlvbiIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCJmaXJzdCIsImFkZENsYXNzIiwib24iLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwialF1ZXJ5Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==