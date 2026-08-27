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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDMEIsRUFBRSxDQUFDLHlCQUF5QixFQUFFekIsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFbUMsTUFBTSxFQUFFQyxNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUMzR3BCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2FjY29yZGlvbi5zY3NzP2Y4NmYiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9hY2NvcmRpb24uc2Nzc1wiXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xuICBcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XG4gICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICBcImVtX2tpdF9hY2NvcmRpb24uZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRBY2NvcmRpb24sXG4gICAgICAgIH07XG4gIFxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBFbUtpdEFjY29yZGlvbjogZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAkKCcuZW1rLWFjY29yZGlvbi13cmFwcGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkd3JhcHBlciA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlSW50KCR3cmFwcGVyLmRhdGEoJ2FuaW1hdGlvbi1kdXJhdGlvbicpLCAxMCkgfHwgMzAwO1xuICAgIFxuICAgICAgICAgICAgLy8gU3R5bGUgMTogT25seSBDdXJyZW50IEl0ZW0gVG9nZ2xlc1xuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV9vbmUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50cyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGZvciBTdHlsZSAxXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICR0aXRsZXMuZmluZCgnLmFjY29yZGlvbl9jb2xsYXBzZV9pY29uJykuaGlkZSgpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIGZpcnN0IGl0ZW0gYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLmZpcnN0KCkuc2hvdygpO1xuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0aXRsZXMuZmlyc3QoKS5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5zaG93KCk7XG4gICAgXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5vZmYoJ2NsaWNrLnN0eWxlX29uZScpLm9uKCdjbGljay5zdHlsZV9vbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxhcHNlIGFsbCBvdGhlciBhY2NvcmRpb25zXG4gICAgICAgICAgICAgICAgICAgICR0aXRsZXMubm90KCR0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmluZCgnLmFjY29yZGlvbl9leHBhbmRfaWNvbicpLnNob3coKS5lbmQoKS5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50cy5ub3QoJGNvbnRlbnQpLnNsaWRlVXAoZHVyYXRpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsaWNrZWQgYWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQuc2xpZGVUb2dnbGUoZHVyYXRpb24pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaWNvbnMgZm9yIHRoZSBjbGlja2VkIGFjY29yZGlvblxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIFN0eWxlIDI6IE9ubHkgVGhpcyBJdGVtIFRvZ2dsZXMgSW5kZXBlbmRlbnRseVxuICAgICAgICAgICAgaWYgKCR3cmFwcGVyLmhhc0NsYXNzKCdzdHlsZV90d28nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi10aXRsZScpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaWNvbnMgZm9yIFN0eWxlIDJcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fZXhwYW5kX2ljb24nKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS5oaWRlKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5vZmYoJ2NsaWNrLnN0eWxlX3R3bycpLm9uKCdjbGljay5zdHlsZV90d28nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdG9nZ2xlIHRoaXMgaXRlbSdzIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBpY29uc1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2NvbGxhcHNlX2ljb24nKS50b2dnbGUoJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIFN0eWxlIDM6IEFsbCBJdGVtcyBPcGVuIEJ5IERlZmF1bHRcbiAgICAgICAgICAgIGlmICgkd3JhcHBlci5oYXNDbGFzcygnc3R5bGVfdGhyZWUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aXRsZXMgPSAkd3JhcHBlci5maW5kKCcuZW1rLWFjY29yZGlvbi10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50cyA9ICR3cmFwcGVyLmZpbmQoJy5lbWstYWNjb3JkaW9uLWNvbnRlbnQnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGljb25zIGFuZCBjb250ZW50IGZvciBTdHlsZSAzXG4gICAgICAgICAgICAgICAgJHRpdGxlcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykuaGlkZSgpOyAvLyBIaWRlIGV4cGFuZCBpY29uIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAkdGl0bGVzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnNob3coKTsgLy8gU2hvdyBjb2xsYXBzZSBpY29uIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAkY29udGVudHMuc2hvdygpOyAvLyBFbnN1cmUgYWxsIGl0ZW1zIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcbiAgICBcbiAgICAgICAgICAgICAgICAkdGl0bGVzLm9mZignY2xpY2suc3R5bGVfdGhyZWUnKS5vbignY2xpY2suc3R5bGVfdGhyZWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkdGhpcy5uZXh0KCcuZW1rLWFjY29yZGlvbi1jb250ZW50Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBjb250ZW50IHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGVudC5zbGlkZVRvZ2dsZShkdXJhdGlvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBpY29uc1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcuYWNjb3JkaW9uX2V4cGFuZF9pY29uJykudG9nZ2xlKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJy5hY2NvcmRpb25fY29sbGFwc2VfaWNvbicpLnRvZ2dsZSghJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICB9O1xuICBcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XG4gIH0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvYWNjb3JkaW9uLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvYWNjb3JkaW9uLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdEFjY29yZGlvbiIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiR3cmFwcGVyIiwiZHVyYXRpb24iLCJwYXJzZUludCIsImRhdGEiLCJoYXNDbGFzcyIsIiR0aXRsZXMiLCJmaW5kIiwiJGNvbnRlbnRzIiwic2hvdyIsImhpZGUiLCJmaXJzdCIsImFkZENsYXNzIiwib2ZmIiwib24iLCIkdGhpcyIsIiRjb250ZW50IiwibmV4dCIsIm5vdCIsInJlbW92ZUNsYXNzIiwiZW5kIiwic2xpZGVVcCIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGUiLCJqUXVlcnkiLCJ3aW5kb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==