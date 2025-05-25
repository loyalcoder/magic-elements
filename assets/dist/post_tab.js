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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdF90YWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2pDLENBQUMsVUFBVUEsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckIsWUFBWTs7RUFDWixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQ0MsU0FBUyxDQUFDO0VBRTFCLElBQUlFLFlBQVksR0FBRztJQUNqQkMsTUFBTSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNsQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQjtNQUMvQixJQUFJQyxpQkFBaUIsR0FBRztRQUN0Qix5QkFBeUIsRUFBRUosWUFBWSxDQUFDSztNQUMxQyxDQUFDO01BRURSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDRixpQkFBaUIsRUFBRSxVQUFVRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtRQUN4RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBR0gsVUFBVSxFQUFFQyxRQUFRLENBQUM7TUFDM0UsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVESCxZQUFZLEVBQUUsU0FBQUEsQ0FBVU0sTUFBTSxFQUFFO01BQzlCLElBQUlDLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDO01BQ3ZDLElBQUlDLFNBQVMsR0FBR0gsTUFBTSxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDOztNQUV6QztNQUNBQyxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDOztNQUVoQjtNQUNBSCxRQUFRLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUM3QixJQUFJQyxXQUFXLEdBQUdwQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUlxQixRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFFM0M7UUFDQVAsUUFBUSxDQUFDUSxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzlCSCxXQUFXLENBQUNJLFFBQVEsQ0FBQyxRQUFRLENBQUM7O1FBRTlCO1FBQ0EsSUFBSUgsUUFBUSxLQUFLLEtBQUssRUFBRTtVQUNwQkosU0FBUyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxNQUFNO1VBQ0hELFNBQVMsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2xCUixTQUFTLENBQUNTLE1BQU0sQ0FBQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQ7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVBLENBQUM7RUFFRGhCLE9BQU8sQ0FBQ2lCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRWhCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRXVCLE1BQU0sRUFBRUMsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQzlDcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL3Bvc3RfdGFiLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvcG9zdF90YWIuc2Nzcz9kOTRkIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvcG9zdF90YWIuc2Nzc1wiO1xuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcbiAgXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XG4gICAgICAgICAgXCJlbV9raXRfcG9zdF90YWIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRQb3N0VGFiLFxuICAgICAgICB9O1xuICBcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgRW1LaXRQb3N0VGFiOiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgIGxldCBuYXZMaW5rcyA9ICRzY29wZS5maW5kKCcubmF2LWxpbmsnKTtcbiAgICAgICAgbGV0IHBvc3RJdGVtcyA9ICRzY29wZS5maW5kKCcucG9zdC1pdGVtJyk7XG4gICAgXG4gICAgICAgIC8vIEluaXRpYWxseSBzaG93IGFsbCBwb3N0c1xuICAgICAgICBwb3N0SXRlbXMuc2hvdygpO1xuICAgIFxuICAgICAgICAvLyBUYWIgY2xpY2sgZXZlbnRcbiAgICAgICAgbmF2TGlua3Mub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICRjbGlja2VkVGFiID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9ICRjbGlja2VkVGFiLmRhdGEoJ2NhdGVnb3J5Jyk7XG4gICAgXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRhYnMgYW5kIGFkZCBpdCB0byB0aGUgY2xpY2tlZCB0YWJcbiAgICAgICAgICAgIG5hdkxpbmtzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRjbGlja2VkVGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICBcbiAgICAgICAgICAgIC8vIFNob3cgb3IgaGlkZSBwb3N0cyBiYXNlZCBvbiB0aGUgY2F0ZWdvcnlcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0SXRlbXMuc2hvdygpOyAvLyBTaG93IGFsbCBwb3N0c1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3N0SXRlbXMuaGlkZSgpOyAvLyBIaWRlIGFsbCBwb3N0c1xuICAgICAgICAgICAgICAgIHBvc3RJdGVtcy5maWx0ZXIoJy5jYXRlZ29yeS0nICsgY2F0ZWdvcnkpLnNob3coKTsgLy8gU2hvdyBwb3N0cyB3aXRoIHRoZSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIH07XG4gIFxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvcG9zdF90YWIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9wb3N0X3RhYi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRQb3N0VGFiIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwibmF2TGlua3MiLCJmaW5kIiwicG9zdEl0ZW1zIiwic2hvdyIsIm9uIiwiJGNsaWNrZWRUYWIiLCJjYXRlZ29yeSIsImRhdGEiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGlkZSIsImZpbHRlciIsImpRdWVyeSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=