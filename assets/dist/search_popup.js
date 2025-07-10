/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/search_popup.js":
/*!***************************************!*\
  !*** ./assets/src/js/search_popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_search_popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/search_popup.scss */ "./assets/src/scss/search_popup.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_search_poopup.default": emkElementor.EmKitSearchPopup
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitSearchPopup: function ($scope) {
      var $button = $scope.find('.emk-search-button');
      var $modal = $scope.find('.emk-search-modal');
      var $form = $modal.find('.emk-search-form');
      var $input = $form.find('.emk-search-input');

      // Open Modal
      $button.on('click', function () {
        $modal.addClass('show').fadeIn();
      });

      // Close Modal on backdrop or close button
      $modal.on('click', function (e) {
        if ($(e.target).is('.emk-search-modal') || $(e.target).is('.emk-close-btn')) {
          $modal.fadeOut().removeClass('show');
        }
      });

      // Submit Search
      $form.on('submit', function (e) {
        e.preventDefault();
        let query = $input.val().trim();
        if (query) {
          alert("You searched for: " + query);
          $modal.fadeOut().removeClass('show');
        } else {
          alert("Please enter a search term.");
        }
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/search_popup.scss":
/*!*******************************************!*\
  !*** ./assets/src/scss/search_popup.scss ***!
  \*******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/search_popup.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/search_popup.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoX3BvcHVwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUVyQyxDQUFDLFVBQVVBLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3ZCLFlBQVk7O0VBQ1osSUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUNDLFNBQVMsQ0FBQztFQUUxQixJQUFJRSxZQUFZLEdBQUc7SUFDakJDLE1BQU0sRUFBRSxTQUFBQSxDQUFBLEVBQVk7TUFDbEIsSUFBSUMsT0FBTyxHQUFHQyxpQkFBaUI7TUFDL0IsSUFBSUMsaUJBQWlCLEdBQUc7UUFDdEIsOEJBQThCLEVBQUVKLFlBQVksQ0FBQ0s7TUFDL0MsQ0FBQztNQUVEUixDQUFDLENBQUNTLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsVUFBVUcsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFDeEROLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLENBQUMseUJBQXlCLEdBQUdILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzNFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFREgsZ0JBQWdCLEVBQUUsU0FBQUEsQ0FBVU0sTUFBTSxFQUFFO01BQ2xDLElBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7TUFDL0MsSUFBSUMsTUFBTSxHQUFHSCxNQUFNLENBQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztNQUM3QyxJQUFJRSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDO01BQzNDLElBQUlHLE1BQU0sR0FBR0QsS0FBSyxDQUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUM7O01BRTVDO01BQ0FELE9BQU8sQ0FBQ0ssRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1FBQzlCSCxNQUFNLENBQUNJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDOztNQUVGO01BQ0FMLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVRyxDQUFDLEVBQUU7UUFDOUIsSUFBSXZCLENBQUMsQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJekIsQ0FBQyxDQUFDdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7VUFDM0VSLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN0QztNQUNGLENBQUMsQ0FBQzs7TUFFRjtNQUNBVCxLQUFLLENBQUNFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVUcsQ0FBQyxFQUFFO1FBQzlCQSxDQUFDLENBQUNLLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCLElBQUlDLEtBQUssR0FBR1YsTUFBTSxDQUFDVyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJRixLQUFLLEVBQUU7VUFDVEcsS0FBSyxDQUFDLG9CQUFvQixHQUFHSCxLQUFLLENBQUM7VUFDbkNaLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxDQUFDLE1BQU07VUFDTEssS0FBSyxDQUFDLDZCQUE2QixDQUFDO1FBQ3RDO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUQ5QixPQUFPLENBQUNrQixFQUFFLENBQUMseUJBQXlCLEVBQUVqQixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUU2QixNQUFNLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUNuRGxCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9zZWFyY2hfcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9zZWFyY2hfcG9wdXAuc2Nzcz9kZmJhIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3Mvc2VhcmNoX3BvcHVwLnNjc3NcIjtcclxuXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcblxyXG4gIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgIFwiZW1fa2l0X3NlYXJjaF9wb29wdXAuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRTZWFyY2hQb3B1cCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgRW1LaXRTZWFyY2hQb3B1cDogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICB2YXIgJGJ1dHRvbiA9ICRzY29wZS5maW5kKCcuZW1rLXNlYXJjaC1idXR0b24nKTtcclxuICAgICAgdmFyICRtb2RhbCA9ICRzY29wZS5maW5kKCcuZW1rLXNlYXJjaC1tb2RhbCcpO1xyXG4gICAgICB2YXIgJGZvcm0gPSAkbW9kYWwuZmluZCgnLmVtay1zZWFyY2gtZm9ybScpO1xyXG4gICAgICB2YXIgJGlucHV0ID0gJGZvcm0uZmluZCgnLmVtay1zZWFyY2gtaW5wdXQnKTtcclxuXHJcbiAgICAgIC8vIE9wZW4gTW9kYWxcclxuICAgICAgJGJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1vZGFsLmFkZENsYXNzKCdzaG93JykuZmFkZUluKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ2xvc2UgTW9kYWwgb24gYmFja2Ryb3Agb3IgY2xvc2UgYnV0dG9uXHJcbiAgICAgICRtb2RhbC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLmVtay1zZWFyY2gtbW9kYWwnKSB8fCAkKGUudGFyZ2V0KS5pcygnLmVtay1jbG9zZS1idG4nKSkge1xyXG4gICAgICAgICAgJG1vZGFsLmZhZGVPdXQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTdWJtaXQgU2VhcmNoXHJcbiAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcXVlcnkgPSAkaW5wdXQudmFsKCkudHJpbSgpO1xyXG4gICAgICAgIGlmIChxdWVyeSkge1xyXG4gICAgICAgICAgYWxlcnQoXCJZb3Ugc2VhcmNoZWQgZm9yOiBcIiArIHF1ZXJ5KTtcclxuICAgICAgICAgICRtb2RhbC5mYWRlT3V0KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBzZWFyY2ggdGVybS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG59KShqUXVlcnksIHdpbmRvdyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3Mvc2VhcmNoX3BvcHVwLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvc2VhcmNoX3BvcHVwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdFNlYXJjaFBvcHVwIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJGJ1dHRvbiIsImZpbmQiLCIkbW9kYWwiLCIkZm9ybSIsIiRpbnB1dCIsIm9uIiwiYWRkQ2xhc3MiLCJmYWRlSW4iLCJlIiwidGFyZ2V0IiwiaXMiLCJmYWRlT3V0IiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwidmFsIiwidHJpbSIsImFsZXJ0IiwialF1ZXJ5Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==