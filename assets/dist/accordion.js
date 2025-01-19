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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMwQixFQUFFLENBQUMseUJBQXlCLEVBQUV6QixZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVtQyxNQUFNLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7QUMzR3BCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9hY2NvcmRpb24uc2Nzcz9mODZmIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvYWNjb3JkaW9uLnNjc3NcIlxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJtYWdpY2VsZW1lbnRzX2FjY29yZGlvbi5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5NYWdpY2VsZW1lbnRzQWNjb3JkaW9uLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIE1hZ2ljZWxlbWVudHNBY2NvcmRpb246IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAkKCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24td3JhcHBlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VJbnQoJHdyYXBwZXIuZGF0YSgnYW5pbWF0aW9uLWR1cmF0aW9uJyksIDEwKSB8fCAzMDA7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gU3R5bGUgMTogT25seSBDdXJyZW50IEl0ZW0gVG9nZ2xlc1xyXG4gICAgICAgICAgICBpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3N0eWxlX29uZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGl0bGVzID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudHMgPSAkd3JhcHBlci5maW5kKCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGZvciBTdHlsZSAxXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLmhpZGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgZmlyc3QgaXRlbSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maXJzdCgpLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpcnN0KCkuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuc2hvdygpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfb25lJykub24oJ2NsaWNrLnN0eWxlX29uZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGFwc2UgYWxsIG90aGVyIGFjY29yZGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAkdGl0bGVzLm5vdCgkdGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCkuZW5kKCkuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50cy5ub3QoJGNvbnRlbnQpLnNsaWRlVXAoZHVyYXRpb24pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBjbGlja2VkIGFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaWNvbnMgZm9yIHRoZSBjbGlja2VkIGFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS50b2dnbGUoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykudG9nZ2xlKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFN0eWxlIDI6IE9ubHkgVGhpcyBJdGVtIFRvZ2dsZXMgSW5kZXBlbmRlbnRseVxyXG4gICAgICAgICAgICBpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3N0eWxlX3R3bycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGl0bGVzID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLXRpdGxlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgZm9yIFN0eWxlIDJcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuaGlkZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdHdvJykub24oJ2NsaWNrLnN0eWxlX3R3bycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB0b2dnbGUgdGhpcyBpdGVtJ3MgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTdHlsZSAzOiBBbGwgSXRlbXMgT3BlbiBCeSBEZWZhdWx0XHJcbiAgICAgICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcygnc3R5bGVfdGhyZWUnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRpdGxlcyA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpY2VsZW1lbnRzLWFjY29yZGlvbi10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnRzID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljZWxlbWVudHMtYWNjb3JkaW9uLWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpY29ucyBhbmQgY29udGVudCBmb3IgU3R5bGUgM1xyXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuaGlkZSgpOyAvLyBIaWRlIGV4cGFuZCBpY29uIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuc2hvdygpOyAvLyBTaG93IGNvbGxhcHNlIGljb24gYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLnNob3coKTsgLy8gRW5zdXJlIGFsbCBpdGVtcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICR0aXRsZXMub2ZmKCdjbGljay5zdHlsZV90aHJlZScpLm9uKCdjbGljay5zdHlsZV90aHJlZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcubWFnaWNlbGVtZW50cy1hY2NvcmRpb24tY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgaWNvbnNcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9hY2NvcmRpb24uc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9hY2NvcmRpb24uanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIk1hZ2ljZWxlbWVudHNBY2NvcmRpb24iLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkd3JhcHBlciIsImR1cmF0aW9uIiwicGFyc2VJbnQiLCJkYXRhIiwiaGFzQ2xhc3MiLCIkdGl0bGVzIiwiZmluZCIsIiRjb250ZW50cyIsInNob3ciLCJoaWRlIiwiZmlyc3QiLCJhZGRDbGFzcyIsIm9mZiIsIm9uIiwiJHRoaXMiLCIkY29udGVudCIsIm5leHQiLCJub3QiLCJyZW1vdmVDbGFzcyIsImVuZCIsInNsaWRlVXAiLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwialF1ZXJ5Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==