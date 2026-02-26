/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/image_accordion.js"
/*!******************************************!*\
  !*** ./assets/src/js/image_accordion.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_image_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/image_accordion.scss */ "./assets/src/scss/image_accordion.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_image_accordion.default": emkElementor.EmKitImageAccordion
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitImageAccordion: function ($scope) {
      let image_accordion = $scope.find('.accordion');
      image_accordion.each(function () {
        const $accordion = $(this);

        // Prefer explicit data attribute from PHP, fallback to class check.
        const behaviorAttr = $accordion.attr('data-active-behavior');
        const behavior = behaviorAttr === 'hover' ? 'hover' : behaviorAttr === 'click' ? 'click' : $accordion.hasClass('emk-image-accordion-hover') ? 'hover' : 'click';
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

/***/ },

/***/ "./assets/src/scss/image_accordion.scss"
/*!**********************************************!*\
  !*** ./assets/src/scss/image_accordion.scss ***!
  \**********************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/image_accordion.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/image_accordion.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2VfYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfYWNjb3JkaW9uLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9pbWFnZV9hY2NvcmRpb24uc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2ltYWdlX2FjY29yZGlvbi5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdEltYWdlQWNjb3JkaW9uLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0SW1hZ2VBY2NvcmRpb246IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICBsZXQgaW1hZ2VfYWNjb3JkaW9uID0gJHNjb3BlLmZpbmQoJy5hY2NvcmRpb24nKTtcclxuICAgIFxyXG4gICAgICAgIGltYWdlX2FjY29yZGlvbi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVmZXIgZXhwbGljaXQgZGF0YSBhdHRyaWJ1dGUgZnJvbSBQSFAsIGZhbGxiYWNrIHRvIGNsYXNzIGNoZWNrLlxyXG4gICAgICAgICAgICBjb25zdCBiZWhhdmlvckF0dHIgPSAkYWNjb3JkaW9uLmF0dHIoJ2RhdGEtYWN0aXZlLWJlaGF2aW9yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlaGF2aW9yID0gYmVoYXZpb3JBdHRyID09PSAnaG92ZXInXHJcbiAgICAgICAgICAgICAgPyAnaG92ZXInXHJcbiAgICAgICAgICAgICAgOiAoYmVoYXZpb3JBdHRyID09PSAnY2xpY2snXHJcbiAgICAgICAgICAgICAgICAgID8gJ2NsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICA6ICgkYWNjb3JkaW9uLmhhc0NsYXNzKCdlbWstaW1hZ2UtYWNjb3JkaW9uLWhvdmVyJykgPyAnaG92ZXInIDogJ2NsaWNrJykpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICghJGFjY29yZGlvbi5maW5kKCcudGFiLmFjdGl2ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJGFjY29yZGlvbi5maW5kKCcudGFiJykuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgICAgICRhY2NvcmRpb24ub24oJ21vdXNlZW50ZXInLCAnLnRhYicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLm9uKCdjbGljaycsICcudGFiJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2ltYWdlX2FjY29yZGlvbi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2ltYWdlX2FjY29yZGlvbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRJbWFnZUFjY29yZGlvbiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsImltYWdlX2FjY29yZGlvbiIsImZpbmQiLCIkYWNjb3JkaW9uIiwiYmVoYXZpb3JBdHRyIiwiYXR0ciIsImJlaGF2aW9yIiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCJmaXJzdCIsImFkZENsYXNzIiwib24iLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=