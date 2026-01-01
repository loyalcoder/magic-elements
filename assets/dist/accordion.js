/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/accordion.js"
/*!************************************!*\
  !*** ./assets/src/js/accordion.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/accordion.scss */ "./assets/src/scss/accordion.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_accordion.default": emkElementor.EmKitAccordion
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitAccordion: function ($scope) {
      $('.emk-accordion-wrapper').each(function () {
        const $wrapper = $(this);
        const duration = parseInt($wrapper.data('animation-duration'), 10) || 300;

        // Style 1: Only Current Item Toggles
        if ($wrapper.hasClass('style_one')) {
          const $titles = $wrapper.find('.emk-accordion-title');
          const $contents = $wrapper.find('.emk-accordion-content');

          // Initialize icons for Style 1
          $titles.find('.accordion_expand_icon').show();
          $titles.find('.accordion_collapse_icon').hide();

          // Open the first item by default
          $titles.first().addClass('active');
          $contents.first().show();
          $titles.first().find('.accordion_expand_icon').hide();
          $titles.first().find('.accordion_collapse_icon').show();
          $titles.off('click.style_one').on('click.style_one', function () {
            const $this = $(this);
            const $content = $this.next('.emk-accordion-content');

            // Collapse all other accordions
            $titles.not($this).removeClass('active').find('.accordion_expand_icon').show().end().find('.accordion_collapse_icon').hide();
            $contents.not($content).slideUp(duration);

            // Toggle the clicked accordion
            $this.toggleClass('active');
            $content.slideToggle(duration);

            // Update icons for the clicked accordion
            $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));
            $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));
          });
        }

        // Style 2: Only This Item Toggles Independently
        if ($wrapper.hasClass('style_two')) {
          const $titles = $wrapper.find('.emk-accordion-title');

          // Initialize icons for Style 2
          $titles.find('.accordion_expand_icon').show();
          $titles.find('.accordion_collapse_icon').hide();
          $titles.off('click.style_two').on('click.style_two', function () {
            const $this = $(this);
            const $content = $this.next('.emk-accordion-content');

            // Only toggle this item's content
            $this.toggleClass('active');
            $content.slideToggle(duration);

            // Toggle icons
            $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));
            $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));
          });
        }

        // Style 3: All Items Open By Default
        if ($wrapper.hasClass('style_three')) {
          const $titles = $wrapper.find('.emk-accordion-title');
          const $contents = $wrapper.find('.emk-accordion-content');

          // Initialize icons and content for Style 3
          $titles.find('.accordion_expand_icon').hide(); // Hide expand icon by default
          $titles.find('.accordion_collapse_icon').show(); // Show collapse icon by default
          $contents.show(); // Ensure all items are visible by default

          $titles.off('click.style_three').on('click.style_three', function () {
            const $this = $(this);
            const $content = $this.next('.emk-accordion-content');

            // Toggle content visibility
            $this.toggleClass('active');
            $content.slideToggle(duration);

            // Toggle icons
            $this.find('.accordion_expand_icon').toggle($this.hasClass('active'));
            $this.find('.accordion_collapse_icon').toggle(!$this.hasClass('active'));
          });
        }
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/accordion.scss"
/*!****************************************!*\
  !*** ./assets/src/scss/accordion.scss ***!
  \****************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/accordion.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/accordion.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDMEIsRUFBRSxDQUFDLHlCQUF5QixFQUFFekIsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFbUMsTUFBTSxFQUFFQyxNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUMzR3BCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2FjY29yZGlvbi5zY3NzP2Y4NmYiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9hY2NvcmRpb24uc2Nzc1wiXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2tpdF9hY2NvcmRpb24uZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRBY2NvcmRpb24sXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgRW1LaXRBY2NvcmRpb246IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAkKCcuZW1rLWFjY29yZGlvbi13cmFwcGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUludCgkd3JhcHBlci5kYXRhKCdhbmltYXRpb24tZHVyYXRpb24nKSwgMTApIHx8IDMwMDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTdHlsZSAxOiBPbmx5IEN1cnJlbnQgSXRlbSBUb2dnbGVzXHJcbiAgICAgICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcygnc3R5bGVfb25lJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHdyYXBwZXIuZmluZCgnLmVtay1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGZvciBTdHlsZSAxXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgZmlyc3QgaXRlbSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpcnN0KCkuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuc2hvdygpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfb25lJykub24oJ2NsaWNrLnN0eWxlX29uZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsYXBzZSBhbGwgb3RoZXIgYWNjb3JkaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICR0aXRsZXMubm90KCR0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKS5lbmQoKS5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnRzLm5vdCgkY29udGVudCkuc2xpZGVVcChkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsaWNrZWQgYWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBpY29ucyBmb3IgdGhlIGNsaWNrZWQgYWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnRvZ2dsZSghJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU3R5bGUgMjogT25seSBUaGlzIEl0ZW0gVG9nZ2xlcyBJbmRlcGVuZGVudGx5XHJcbiAgICAgICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcygnc3R5bGVfdHdvJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi10aXRsZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGZvciBTdHlsZSAyXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5vZmYoJ2NsaWNrLnN0eWxlX3R3bycpLm9uKCdjbGljay5zdHlsZV90d28nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHRoaXMubmV4dCgnLmVtay1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB0b2dnbGUgdGhpcyBpdGVtJ3MgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTdHlsZSAzOiBBbGwgSXRlbXMgT3BlbiBCeSBEZWZhdWx0XHJcbiAgICAgICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcygnc3R5bGVfdGhyZWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudHMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgYW5kIGNvbnRlbnQgZm9yIFN0eWxlIDNcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLmhpZGUoKTsgLy8gSGlkZSBleHBhbmQgaWNvbiBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnNob3coKTsgLy8gU2hvdyBjb2xsYXBzZSBpY29uIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICRjb250ZW50cy5zaG93KCk7IC8vIEVuc3VyZSBhbGwgaXRlbXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdGhyZWUnKS5vbignY2xpY2suc3R5bGVfdGhyZWUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHRoaXMubmV4dCgnLmVtay1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2FjY29yZGlvbi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2FjY29yZGlvbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkd3JhcHBlciIsImR1cmF0aW9uIiwicGFyc2VJbnQiLCJkYXRhIiwiaGFzQ2xhc3MiLCIkdGl0bGVzIiwiZmluZCIsIiRjb250ZW50cyIsInNob3ciLCJoaWRlIiwiZmlyc3QiLCJhZGRDbGFzcyIsIm9mZiIsIm9uIiwiJHRoaXMiLCIkY29udGVudCIsIm5leHQiLCJub3QiLCJyZW1vdmVDbGFzcyIsImVuZCIsInNsaWRlVXAiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=