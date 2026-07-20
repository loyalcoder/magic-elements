/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/post_tab.js"
/*!***********************************!*\
  !*** ./assets/src/js/post_tab.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_post_tab_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/post_tab.scss */ "./assets/src/scss/post_tab.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_post_tab.default": emkElementor.EmKitPostTab
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitPostTab: function ($scope) {
      let navLinks = $scope.find('.nav-link');
      let postItems = $scope.find('.post-item');

      // Initially show all posts
      postItems.show();

      // Tab click event
      navLinks.on('click', function () {
        let $clickedTab = $(this);
        let category = $clickedTab.data('category');

        // Remove active class from all tabs and add it to the clicked tab
        navLinks.removeClass('active');
        $clickedTab.addClass('active');

        // Show or hide posts based on the category
        if (category === 'all') {
          postItems.show(); // Show all posts
        } else {
          postItems.hide(); // Hide all posts
          postItems.filter('.category-' + category).show(); // Show posts with the selected category
        }
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/post_tab.scss"
/*!***************************************!*\
  !*** ./assets/src/scss/post_tab.scss ***!
  \***************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/post_tab.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/post_tab.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF90YWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2pDLENBQUMsVUFBVUEsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckIsWUFBWTs7RUFDWixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsU0FBUyxDQUFDO0VBRTFCLElBQUlFLFlBQVksR0FBRztJQUNqQkMsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNsQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQjtNQUMvQixJQUFJQyxpQkFBaUIsR0FBRztRQUN0Qix5QkFBeUIsRUFBRUosWUFBWSxDQUFDSztNQUMxQyxDQUFDO01BRURSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxVQUFVRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUN4RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBR0gsVUFBVSxFQUFFQyxRQUFRLENBQUM7TUFDM0UsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVESCxZQUFZLEVBQUUsU0FBQUEsQ0FBVU0sTUFBTSxFQUFFO01BQzlCLElBQUlDLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDO01BQ3ZDLElBQUlDLFNBQVMsR0FBR0gsTUFBTSxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDOztNQUV6QztNQUNBQyxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDOztNQUVoQjtNQUNBSCxRQUFRLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUM3QixJQUFJQyxXQUFXLEdBQUdwQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUlxQixRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFFM0M7UUFDQVAsUUFBUSxDQUFDUSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlCSCxXQUFXLENBQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUM7O1FBRTlCO1FBQ0EsSUFBSUgsUUFBUSxLQUFLLEtBQUssRUFBRTtVQUNwQkosU0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxNQUFNO1VBQ0hELFNBQVMsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2xCUixTQUFTLENBQUNTLE1BQU0sQ0FBQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQ7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVBLENBQUM7RUFFRGhCLE9BQU8sQ0FBQ2lCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRWhCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRXVCLE1BQU0sRUFBRUMsTUFBTSxDQUFDLEM7Ozs7Ozs7Ozs7O0FDOUNwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9wb3N0X3RhYi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3Bvc3RfdGFiLnNjc3M/ZDk0ZCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL3Bvc3RfdGFiLnNjc3NcIjtcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XG4gIFxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgIFwiZW1fa2l0X3Bvc3RfdGFiLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0UG9zdFRhYixcbiAgICAgICAgfTtcbiAgXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIEVtS2l0UG9zdFRhYjogZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICBsZXQgbmF2TGlua3MgPSAkc2NvcGUuZmluZCgnLm5hdi1saW5rJyk7XG4gICAgICAgIGxldCBwb3N0SXRlbXMgPSAkc2NvcGUuZmluZCgnLnBvc3QtaXRlbScpO1xuICAgIFxuICAgICAgICAvLyBJbml0aWFsbHkgc2hvdyBhbGwgcG9zdHNcbiAgICAgICAgcG9zdEl0ZW1zLnNob3coKTtcbiAgICBcbiAgICAgICAgLy8gVGFiIGNsaWNrIGV2ZW50XG4gICAgICAgIG5hdkxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCAkY2xpY2tlZFRhYiA9ICQodGhpcyk7XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSAkY2xpY2tlZFRhYi5kYXRhKCdjYXRlZ29yeScpO1xuICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGFsbCB0YWJzIGFuZCBhZGQgaXQgdG8gdGhlIGNsaWNrZWQgdGFiXG4gICAgICAgICAgICBuYXZMaW5rcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkY2xpY2tlZFRhYi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgXG4gICAgICAgICAgICAvLyBTaG93IG9yIGhpZGUgcG9zdHMgYmFzZWQgb24gdGhlIGNhdGVnb3J5XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgcG9zdEl0ZW1zLnNob3coKTsgLy8gU2hvdyBhbGwgcG9zdHNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zdEl0ZW1zLmhpZGUoKTsgLy8gSGlkZSBhbGwgcG9zdHNcbiAgICAgICAgICAgICAgICBwb3N0SXRlbXMuZmlsdGVyKCcuY2F0ZWdvcnktJyArIGNhdGVnb3J5KS5zaG93KCk7IC8vIFNob3cgcG9zdHMgd2l0aCB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICB9O1xuICBcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XG4gIH0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvcG9zdF90YWIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9wb3N0X3RhYi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRQb3N0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwibmF2TGlua3MiLCJmaW5kIiwicG9zdEl0ZW1zIiwic2hvdyIsIm9uIiwiJGNsaWNrZWRUYWIiLCJjYXRlZ29yeSIsImRhdGEiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGlkZSIsImZpbHRlciIsImpRdWVyeSIsIndpbmRvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9