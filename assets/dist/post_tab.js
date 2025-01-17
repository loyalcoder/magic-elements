/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/post_tab.js":
/*!***********************************!*\
  !*** ./assets/src/js/post_tab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_post_tab_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/post_tab.scss */ "./assets/src/scss/post_tab.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "magicelements_post_tab.default": emkElementor.magicelementsPostTab
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    magicelementsPostTab: function ($scope) {
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

/***/ }),

/***/ "./assets/src/scss/post_tab.scss":
/*!***************************************!*\
  !*** ./assets/src/scss/post_tab.scss ***!
  \***************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/post_tab.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/post_tab.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF90YWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2pDLENBQUMsVUFBVUEsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckIsWUFBWTs7RUFDWixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsU0FBUyxDQUFDO0VBRTFCLElBQUlFLFlBQVksR0FBRztJQUNqQkMsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNsQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQjtNQUMvQixJQUFJQyxpQkFBaUIsR0FBRztRQUN0QixnQ0FBZ0MsRUFBRUosWUFBWSxDQUFDSztNQUNqRCxDQUFDO01BRURSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxVQUFVRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUN4RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBR0gsVUFBVSxFQUFFQyxRQUFRLENBQUM7TUFDM0UsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVESCxvQkFBb0IsRUFBRSxTQUFBQSxDQUFVTSxNQUFNLEVBQUU7TUFDdEMsSUFBSUMsUUFBUSxHQUFHRCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7TUFDdkMsSUFBSUMsU0FBUyxHQUFHSCxNQUFNLENBQUNFLElBQUksQ0FBQyxZQUFZLENBQUM7O01BRXpDO01BQ0FDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7O01BRWhCO01BQ0FILFFBQVEsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1FBQzdCLElBQUlDLFdBQVcsR0FBR3BCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSXFCLFFBQVEsR0FBR0QsV0FBVyxDQUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDOztRQUUzQztRQUNBUCxRQUFRLENBQUNRLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDOUJILFdBQVcsQ0FBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQzs7UUFFOUI7UUFDQSxJQUFJSCxRQUFRLEtBQUssS0FBSyxFQUFFO1VBQ3BCSixTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDSEQsU0FBUyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbEJSLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFlBQVksR0FBR0wsUUFBUSxDQUFDLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RDtNQUNKLENBQUMsQ0FBQztJQUNOO0VBRUEsQ0FBQztFQUVEaEIsT0FBTyxDQUFDaUIsRUFBRSxDQUFDLHlCQUF5QixFQUFFaEIsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFdUIsTUFBTSxFQUFFQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDOUNwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvcG9zdF90YWIuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9wb3N0X3RhYi5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvcG9zdF90YWIuc2Nzc1wiO1xyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJtYWdpY2VsZW1lbnRzX3Bvc3RfdGFiLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLm1hZ2ljZWxlbWVudHNQb3N0VGFiLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG1hZ2ljZWxlbWVudHNQb3N0VGFiOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IG5hdkxpbmtzID0gJHNjb3BlLmZpbmQoJy5uYXYtbGluaycpO1xyXG4gICAgICAgIGxldCBwb3N0SXRlbXMgPSAkc2NvcGUuZmluZCgnLnBvc3QtaXRlbScpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGx5IHNob3cgYWxsIHBvc3RzXHJcbiAgICAgICAgcG9zdEl0ZW1zLnNob3coKTtcclxuICAgIFxyXG4gICAgICAgIC8vIFRhYiBjbGljayBldmVudFxyXG4gICAgICAgIG5hdkxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0ICRjbGlja2VkVGFiID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gJGNsaWNrZWRUYWIuZGF0YSgnY2F0ZWdvcnknKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRhYnMgYW5kIGFkZCBpdCB0byB0aGUgY2xpY2tlZCB0YWJcclxuICAgICAgICAgICAgbmF2TGlua3MucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkY2xpY2tlZFRhYi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU2hvdyBvciBoaWRlIHBvc3RzIGJhc2VkIG9uIHRoZSBjYXRlZ29yeVxyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0SXRlbXMuc2hvdygpOyAvLyBTaG93IGFsbCBwb3N0c1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdEl0ZW1zLmhpZGUoKTsgLy8gSGlkZSBhbGwgcG9zdHNcclxuICAgICAgICAgICAgICAgIHBvc3RJdGVtcy5maWx0ZXIoJy5jYXRlZ29yeS0nICsgY2F0ZWdvcnkpLnNob3coKTsgLy8gU2hvdyBwb3N0cyB3aXRoIHRoZSBzZWxlY3RlZCBjYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL3Bvc3RfdGFiLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvcG9zdF90YWIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIm1hZ2ljZWxlbWVudHNQb3N0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwibmF2TGlua3MiLCJmaW5kIiwicG9zdEl0ZW1zIiwic2hvdyIsIm9uIiwiJGNsaWNrZWRUYWIiLCJjYXRlZ29yeSIsImRhdGEiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGlkZSIsImZpbHRlciIsImpRdWVyeSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=