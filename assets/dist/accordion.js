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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDMEIsRUFBRSxDQUFDLHlCQUF5QixFQUFFekIsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFbUMsTUFBTSxFQUFFQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDM0dwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvYWNjb3JkaW9uLnNjc3M/Zjg2ZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2FjY29yZGlvbi5zY3NzXCJcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwiZW1fa2l0X2FjY29yZGlvbi5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdEFjY29yZGlvbixcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpdEFjY29yZGlvbjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICQoJy5lbWstYWNjb3JkaW9uLXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJHdyYXBwZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KCR3cmFwcGVyLmRhdGEoJ2FuaW1hdGlvbi1kdXJhdGlvbicpLCAxMCkgfHwgMzAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFN0eWxlIDE6IE9ubHkgQ3VycmVudCBJdGVtIFRvZ2dsZXNcclxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV9vbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudHMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgZm9yIFN0eWxlIDFcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuaGlkZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBmaXJzdCBpdGVtIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkY29udGVudHMuZmlyc3QoKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpcnN0KCkuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5zaG93KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICR0aXRsZXMub2ZmKCdjbGljay5zdHlsZV9vbmUnKS5vbignY2xpY2suc3R5bGVfb25lJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICR0aGlzLm5leHQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxhcHNlIGFsbCBvdGhlciBhY2NvcmRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgJHRpdGxlcy5ub3QoJHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuc2hvdygpLmVuZCgpLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudHMubm90KCRjb250ZW50KS5zbGlkZVVwKGR1cmF0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgY2xpY2tlZCBhY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpZGVUb2dnbGUoZHVyYXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGljb25zIGZvciB0aGUgY2xpY2tlZCBhY2NvcmRpb25cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTdHlsZSAyOiBPbmx5IFRoaXMgSXRlbSBUb2dnbGVzIEluZGVwZW5kZW50bHlcclxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV90d28nKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgZm9yIFN0eWxlIDJcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuaGlkZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdHdvJykub24oJ2NsaWNrLnN0eWxlX3R3bycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHRvZ2dsZSB0aGlzIGl0ZW0ncyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBpY29uc1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykudG9nZ2xlKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFN0eWxlIDM6IEFsbCBJdGVtcyBPcGVuIEJ5IERlZmF1bHRcclxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV90aHJlZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGl0bGVzID0gJHdyYXBwZXIuZmluZCgnLmVtay1hY2NvcmRpb24tdGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50cyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpY29ucyBhbmQgY29udGVudCBmb3IgU3R5bGUgM1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuaGlkZSgpOyAvLyBIaWRlIGV4cGFuZCBpY29uIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuc2hvdygpOyAvLyBTaG93IGNvbGxhcHNlIGljb24gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLnNob3coKTsgLy8gRW5zdXJlIGFsbCBpdGVtcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICR0aXRsZXMub2ZmKCdjbGljay5zdHlsZV90aHJlZScpLm9uKCdjbGljay5zdHlsZV90aHJlZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgY29udGVudCB2aXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBpY29uc1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS50b2dnbGUoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2FjY29yZGlvbi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2FjY29yZGlvbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkd3JhcHBlciIsImR1cmF0aW9uIiwicGFyc2VJbnQiLCJkYXRhIiwiaGFzQ2xhc3MiLCIkdGl0bGVzIiwiZmluZCIsIiRjb250ZW50cyIsInNob3ciLCJoaWRlIiwiZmlyc3QiLCJhZGRDbGFzcyIsIm9mZiIsIm9uIiwiJHRoaXMiLCIkY29udGVudCIsIm5leHQiLCJub3QiLCJyZW1vdmVDbGFzcyIsImVuZCIsInNsaWRlVXAiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwialF1ZXJ5Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==