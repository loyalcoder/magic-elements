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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDMEIsRUFBRSxDQUFDLHlCQUF5QixFQUFFekIsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFbUMsTUFBTSxFQUFFQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDM0dwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvYWNjb3JkaW9uLnNjc3M/Zjg2ZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2FjY29yZGlvbi5zY3NzXCJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XG4gIFxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgIFwiZW1fa2l0X2FjY29yZGlvbi5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdEFjY29yZGlvbixcbiAgICAgICAgfTtcbiAgXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIEVtS2l0QWNjb3JkaW9uOiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICQoJy5lbWstYWNjb3JkaW9uLXdyYXBwZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VJbnQoJHdyYXBwZXIuZGF0YSgnYW5pbWF0aW9uLWR1cmF0aW9uJyksIDEwKSB8fCAzMDA7XG4gICAgXG4gICAgICAgICAgICAvLyBTdHlsZSAxOiBPbmx5IEN1cnJlbnQgSXRlbSBUb2dnbGVzXG4gICAgICAgICAgICBpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3N0eWxlX29uZScpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHdyYXBwZXIuZmluZCgnLmVtay1hY2NvcmRpb24tY29udGVudCcpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgZm9yIFN0eWxlIDFcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5oaWRlKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgZmlyc3QgaXRlbSBieSBkZWZhdWx0XG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkY29udGVudHMuZmlyc3QoKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnNob3coKTtcbiAgICBcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfb25lJykub24oJ2NsaWNrLnN0eWxlX29uZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICR0aGlzLm5leHQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGFwc2UgYWxsIG90aGVyIGFjY29yZGlvbnNcbiAgICAgICAgICAgICAgICAgICAgJHRpdGxlcy5ub3QoJHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuc2hvdygpLmVuZCgpLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnRzLm5vdCgkY29udGVudCkuc2xpZGVVcChkdXJhdGlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgY2xpY2tlZCBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBpY29ucyBmb3IgdGhlIGNsaWNrZWQgYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gU3R5bGUgMjogT25seSBUaGlzIEl0ZW0gVG9nZ2xlcyBJbmRlcGVuZGVudGx5XG4gICAgICAgICAgICBpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3N0eWxlX3R3bycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpY29ucyBmb3IgU3R5bGUgMlxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdHdvJykub24oJ2NsaWNrLnN0eWxlX3R3bycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICR0aGlzLm5leHQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB0b2dnbGUgdGhpcyBpdGVtJ3MgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGljb25zXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gU3R5bGUgMzogQWxsIEl0ZW1zIE9wZW4gQnkgRGVmYXVsdFxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV90aHJlZScpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHdyYXBwZXIuZmluZCgnLmVtay1hY2NvcmRpb24tY29udGVudCcpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgYW5kIGNvbnRlbnQgZm9yIFN0eWxlIDNcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5oaWRlKCk7IC8vIEhpZGUgZXhwYW5kIGljb24gYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuc2hvdygpOyAvLyBTaG93IGNvbGxhcHNlIGljb24gYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICRjb250ZW50cy5zaG93KCk7IC8vIEVuc3VyZSBhbGwgaXRlbXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxuICAgIFxuICAgICAgICAgICAgICAgICR0aXRsZXMub2ZmKCdjbGljay5zdHlsZV90aHJlZScpLm9uKCdjbGljay5zdHlsZV90aHJlZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICR0aGlzLm5leHQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LnNsaWRlVG9nZ2xlKGR1cmF0aW9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGljb25zXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIH07XG4gIFxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvYWNjb3JkaW9uLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvYWNjb3JkaW9uLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdEFjY29yZGlvbiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiR3cmFwcGVyIiwiZHVyYXRpb24iLCJwYXJzZUludCIsImRhdGEiLCJoYXNDbGFzcyIsIiR0aXRsZXMiLCJmaW5kIiwiJGNvbnRlbnRzIiwic2hvdyIsImhpZGUiLCJmaXJzdCIsImFkZENsYXNzIiwib2ZmIiwib24iLCIkdGhpcyIsIiRjb250ZW50IiwibmV4dCIsIm5vdCIsInJlbW92ZUNsYXNzIiwiZW5kIiwic2xpZGVVcCIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGUiLCJqUXVlcnkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9