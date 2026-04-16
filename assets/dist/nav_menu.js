/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/nav_menu.js"
/*!***********************************!*\
  !*** ./assets/src/js/nav_menu.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_nav_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/nav_menu.scss */ "./assets/src/scss/nav_menu.scss");

(function ($, elementor) {
  "use strict";

  let $window = $(elementor);
  let emkElementor = {
    onInit: function () {
      let E_FRONT = elementorFrontend;
      let widgetHandlersMap = {
        "em_kit_nav_menu.default": emkElementor.EmKitNavMenu
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitNavMenu: function ($scope) {
      const toggleStickyShadow = () => {
        const hasScrolled = window.scrollY > 0;
        document.querySelectorAll('.magic-header.is-sticky').forEach(header => {
          header.classList.toggle('is-scrolled', hasScrolled);
        });
      };
      $(window).off('scroll.magicElementsStickyShadow').on('scroll.magicElementsStickyShadow', toggleStickyShadow);
      toggleStickyShadow();

      // alert('nav menu loaded');
      $('.open_search').on('click', function (event) {
        event.stopPropagation();
        $('.search_block').toggleClass('visible');
        $('.search_block .search_input').focus();
      });
      $('body').on('click', function () {
        $('.search_block').removeClass('visible');
      });
      $('.search_box').on('click', function (event) {
        event.stopPropagation();
      });
      $('.search_input').on('keyup', function (event) {
        if ($(this).val() !== '') {
          $(this).addClass('typing');
        } else {
          $(this).removeClass('typing');
        }
      });
      //offcanvas dropdown menu js
      document.querySelectorAll('.cnw-nav .menu-item-has-children > a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          link.parentElement.classList.toggle('active');
        });
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/nav_menu.scss"
/*!***************************************!*\
  !*** ./assets/src/scss/nav_menu.scss ***!
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
/******/ 	__webpack_require__("./assets/src/scss/nav_menu.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/nav_menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkgsSUFBSSxDQUFDSSxhQUFhLENBQUNmLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUNGLENBQUM7RUFFRHRCLE9BQU8sQ0FBQ3dCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRXZCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRW1DLE1BQU0sRUFBRXRCLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQy9EcEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9uYXZfbWVudS5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvbmF2X21lbnUuc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGxldCAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgbGV0IGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICBsZXQgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2tpdF9uYXZfbWVudS5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdE5hdk1lbnUsXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgRW1LaXROYXZNZW51OiBmdW5jdGlvbiAoJHNjb3BlKSB7ICAgXHJcbiAgICAgICAgICBjb25zdCB0b2dnbGVTdGlja3lTaGFkb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaGFzU2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDA7XHJcblxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWdpYy1oZWFkZXIuaXMtc3RpY2t5JykuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zY3JvbGxlZCcsIGhhc1Njcm9sbGVkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZignc2Nyb2xsLm1hZ2ljRWxlbWVudHNTdGlja3lTaGFkb3cnKS5vbignc2Nyb2xsLm1hZ2ljRWxlbWVudHNTdGlja3lTaGFkb3cnLCB0b2dnbGVTdGlja3lTaGFkb3cpO1xyXG4gICAgICAgICAgdG9nZ2xlU3RpY2t5U2hhZG93KCk7XHJcblxyXG4gICAgICAgICAgLy8gYWxlcnQoJ25hdiBtZW51IGxvYWRlZCcpO1xyXG4gICAgICAgICAgJCgnLm9wZW5fc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrIC5zZWFyY2hfaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNlYXJjaF9ib3gnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNlYXJjaF9pbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vb2ZmY2FudmFzIGRyb3Bkb3duIG1lbnUganNcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbnctbmF2IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpXHJcbiAgICAgICAgICAuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0TmF2TWVudSIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsInRvZ2dsZVN0aWNreVNoYWRvdyIsImhhc1Njcm9sbGVkIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJoZWFkZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvZmYiLCJvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsInJlbW92ZUNsYXNzIiwidmFsIiwiYWRkQ2xhc3MiLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==