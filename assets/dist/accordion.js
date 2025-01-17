/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/accordion.js":
/*!************************************!*\
  !*** ./assets/src/js/accordion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/accordion.scss */ "./assets/src/scss/accordion.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "magicelements_accordion.default": emkElementor.MagicelementsAccordion
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    MagicelementsAccordion: function ($scope) {
      $('.magicelements-accordion-wrapper').each(function () {
        const $wrapper = $(this);
        const duration = parseInt($wrapper.data('animation-duration'), 10) || 300;

        // Style 1: Only Current Item Toggles
        if ($wrapper.hasClass('style_one')) {
          const $titles = $wrapper.find('.magicelements-accordion-title');
          const $contents = $wrapper.find('.magicelements-accordion-content');

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
            const $content = $this.next('.magicelements-accordion-content');

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
          const $titles = $wrapper.find('.magicelements-accordion-title');

          // Initialize icons for Style 2
          $titles.find('.accordion_expand_icon').show();
          $titles.find('.accordion_collapse_icon').hide();
          $titles.off('click.style_two').on('click.style_two', function () {
            const $this = $(this);
            const $content = $this.next('.magicelements-accordion-content');

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
          const $titles = $wrapper.find('.magicelements-accordion-title');
          const $contents = $wrapper.find('.magicelements-accordion-content');

          // Initialize icons and content for Style 3
          $titles.find('.accordion_expand_icon').hide(); // Hide expand icon by default
          $titles.find('.accordion_collapse_icon').show(); // Show collapse icon by default
          $contents.show(); // Ensure all items are visible by default

          $titles.off('click.style_three').on('click.style_three', function () {
            const $this = $(this);
            const $content = $this.next('.magicelements-accordion-content');

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

/***/ }),

/***/ "./assets/src/scss/accordion.scss":
/*!****************************************!*\
  !*** ./assets/src/scss/accordion.scss ***!
  \****************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/accordion.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/accordion.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMwQixFQUFFLENBQUMseUJBQXlCLEVBQUV6QixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVtQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUMzR3BCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9hY2NvcmRpb24uc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2FjY29yZGlvbi5zY3NzXCJcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwibWFnaWNlbGVtZW50c19hY2NvcmRpb24uZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuTWFnaWNlbGVtZW50c0FjY29yZGlvbixcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBNYWdpY2VsZW1lbnRzQWNjb3JkaW9uOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgJCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KCR3cmFwcGVyLmRhdGEoJ2FuaW1hdGlvbi1kdXJhdGlvbicpLCAxMCkgfHwgMzAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFN0eWxlIDE6IE9ubHkgQ3VycmVudCBJdGVtIFRvZ2dsZXNcclxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV9vbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpY2VsZW1lbnRzLWFjY29yZGlvbi10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpY29ucyBmb3IgU3R5bGUgMVxyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5oaWRlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIGZpcnN0IGl0ZW0gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICRjb250ZW50cy5maXJzdCgpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnNob3coKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5vZmYoJ2NsaWNrLnN0eWxlX29uZScpLm9uKCdjbGljay5zdHlsZV9vbmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHRoaXMubmV4dCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxhcHNlIGFsbCBvdGhlciBhY2NvcmRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgJHRpdGxlcy5ub3QoJHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuc2hvdygpLmVuZCgpLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudHMubm90KCRjb250ZW50KS5zbGlkZVVwKGR1cmF0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgY2xpY2tlZCBhY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpZGVUb2dnbGUoZHVyYXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGljb25zIGZvciB0aGUgY2xpY2tlZCBhY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTdHlsZSAyOiBPbmx5IFRoaXMgSXRlbSBUb2dnbGVzIEluZGVwZW5kZW50bHlcclxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV90d28nKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpY2VsZW1lbnRzLWFjY29yZGlvbi10aXRsZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGZvciBTdHlsZSAyXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5vZmYoJ2NsaWNrLnN0eWxlX3R3bycpLm9uKCdjbGljay5zdHlsZV90d28nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHRoaXMubmV4dCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdG9nZ2xlIHRoaXMgaXRlbSdzIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpZGVUb2dnbGUoZHVyYXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnRvZ2dsZSghJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU3R5bGUgMzogQWxsIEl0ZW1zIE9wZW4gQnkgRGVmYXVsdFxyXG4gICAgICAgICAgICBpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3N0eWxlX3RocmVlJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24tdGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50cyA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpY2VsZW1lbnRzLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgYW5kIGNvbnRlbnQgZm9yIFN0eWxlIDNcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLmhpZGUoKTsgLy8gSGlkZSBleHBhbmQgaWNvbiBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnNob3coKTsgLy8gU2hvdyBjb2xsYXBzZSBpY29uIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICRjb250ZW50cy5zaG93KCk7IC8vIEVuc3VyZSBhbGwgaXRlbXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdGhyZWUnKS5vbignY2xpY2suc3R5bGVfdGhyZWUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHRoaXMubmV4dCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBjb250ZW50IHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpZGVUb2dnbGUoZHVyYXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSghJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvYWNjb3JkaW9uLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvYWNjb3JkaW9uLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJNYWdpY2VsZW1lbnRzQWNjb3JkaW9uIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHdyYXBwZXIiLCJkdXJhdGlvbiIsInBhcnNlSW50IiwiZGF0YSIsImhhc0NsYXNzIiwiJHRpdGxlcyIsImZpbmQiLCIkY29udGVudHMiLCJzaG93IiwiaGlkZSIsImZpcnN0IiwiYWRkQ2xhc3MiLCJvZmYiLCJvbiIsIiR0aGlzIiwiJGNvbnRlbnQiLCJuZXh0Iiwibm90IiwicmVtb3ZlQ2xhc3MiLCJlbmQiLCJzbGlkZVVwIiwidG9nZ2xlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZSIsImpRdWVyeSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=