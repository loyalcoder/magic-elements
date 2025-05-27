/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/progress_bar.js":
/*!***************************************!*\
  !*** ./assets/src/js/progress_bar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_progress_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/progress_bar.scss */ "./assets/src/scss/progress_bar.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(window);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_ptogress_bar.default": emkElementor.EmKitProgressBar
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitProgressBar: function ($scope) {
      var $progressBars = $scope.find('.magic-progress-bar-fill');

      // Prepare tooltips - move them outside container
      $scope.find('.magic-progress-bar-percentage-tooltip').each(function () {
        var $tooltip = $(this);
        var $wrapper = $tooltip.closest('.magic-progress-bar-wrapper');
        $wrapper.append($tooltip);

        // Initial positioning
        $tooltip.css({
          'position': 'absolute',
          'top': '-30px',
          'right': '100%',
          // Start from leftmost position
          'transform': 'translateX(50%)'
        });
      });

      // Initialize Intersection Observer
      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              emkElementor.animateProgressBar(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.5
        });
        $progressBars.each(function () {
          observer.observe(this);
        });
      } else {
        $progressBars.each(function () {
          emkElementor.animateProgressBar(this);
        });
      }
    },
    animateProgressBar: function (bar) {
      var $bar = $(bar);
      if ($bar.hasClass('animated')) return;
      $bar.addClass('animated');
      var percent = $bar.data('percent');
      var duration = $bar.data('duration') || 1500;
      var delay = $bar.data('delay') || 0;
      var $wrapper = $bar.closest('.magic-progress-bar-wrapper');
      var $tooltip = $wrapper.find('.magic-progress-bar-percentage-tooltip');
      var $container = $bar.closest('.magic-progress-bar-container');
      var $percentageElements = $wrapper.find('.magic-progress-bar-percentage, .magic-progress-bar-percentage-tooltip');
      setTimeout(function () {
        var startTime = null;
        var containerWidth = $container.width();
        var easing = function (t) {
          return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }; // Quadratic easing

        // Initialize counter values
        var counter = {
          value: 0
        };
        var counterInterval = 30; // ms between counter updates
        var lastCounterUpdate = 0;
        function animateFrame(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var easedProgress = easing(progress);

          // Calculate current width
          var currentPercent = easedProgress * percent;
          var pixelWidth = currentPercent / 100 * containerWidth;

          // Update progress bar width
          $bar.css('width', currentPercent + '%');

          // Update tooltip position
          if ($tooltip.length) {
            var tooltipRight = containerWidth - pixelWidth;
            $tooltip.css('right', tooltipRight + 'px');
          }

          // Update counter (with separate timing for smoother numbers)
          if (elapsed - lastCounterUpdate >= counterInterval) {
            counter.value = Math.min(Math.floor(currentPercent), percent);
            $percentageElements.text(counter.value + '%');
            lastCounterUpdate = elapsed;
          }

          // Continue animation if not complete
          if (progress < 1) {
            requestAnimationFrame(animateFrame);
          } else {
            // Ensure final value is set
            $percentageElements.text(percent + '%');
          }
        }

        // Start the animation
        requestAnimationFrame(animateFrame);
      }, delay);
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/progress_bar.scss":
/*!*******************************************!*\
  !*** ./assets/src/scss/progress_bar.scss ***!
  \*******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/progress_bar.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/progress_bar.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQzdIbEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL3Byb2dyZXNzX2Jhci5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3Byb2dyZXNzX2Jhci5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvcHJvZ3Jlc3NfYmFyLnNjc3NcIjtcclxuXHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgICAgICAgIFwiZW1fa2l0X3B0b2dyZXNzX2Jhci5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdFByb2dyZXNzQmFyLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgRW1LaXRQcm9ncmVzc0JhcjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgJHByb2dyZXNzQmFycyA9ICRzY29wZS5maW5kKCcubWFnaWMtcHJvZ3Jlc3MtYmFyLWZpbGwnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdG9vbHRpcHMgLSBtb3ZlIHRoZW0gb3V0c2lkZSBjb250YWluZXJcclxuICAgICAgICAgICAgJHNjb3BlLmZpbmQoJy5tYWdpYy1wcm9ncmVzcy1iYXItcGVyY2VudGFnZS10b29sdGlwJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHdyYXBwZXIgPSAkdG9vbHRpcC5jbG9zZXN0KCcubWFnaWMtcHJvZ3Jlc3MtYmFyLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgICR3cmFwcGVyLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWwgcG9zaXRpb25pbmdcclxuICAgICAgICAgICAgICAgICR0b29sdGlwLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJy0zMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiAnMTAwJScsIC8vIFN0YXJ0IGZyb20gbGVmdG1vc3QgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoNTAlKSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgSW50ZXJzZWN0aW9uIE9ic2VydmVyXHJcbiAgICAgICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWtFbGVtZW50b3IuYW5pbWF0ZVByb2dyZXNzQmFyKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgeyB0aHJlc2hvbGQ6IDAuNSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkcHJvZ3Jlc3NCYXJzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHByb2dyZXNzQmFycy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVta0VsZW1lbnRvci5hbmltYXRlUHJvZ3Jlc3NCYXIodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFuaW1hdGVQcm9ncmVzc0JhcjogZnVuY3Rpb24oYmFyKSB7XHJcbiAgICAgICAgICAgIHZhciAkYmFyID0gJChiYXIpO1xyXG4gICAgICAgICAgICBpZiAoJGJhci5oYXNDbGFzcygnYW5pbWF0ZWQnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJGJhci5hZGRDbGFzcygnYW5pbWF0ZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50ID0gJGJhci5kYXRhKCdwZXJjZW50Jyk7XHJcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICRiYXIuZGF0YSgnZHVyYXRpb24nKSB8fCAxNTAwO1xyXG4gICAgICAgICAgICB2YXIgZGVsYXkgPSAkYmFyLmRhdGEoJ2RlbGF5JykgfHwgMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciAkd3JhcHBlciA9ICRiYXIuY2xvc2VzdCgnLm1hZ2ljLXByb2dyZXNzLWJhci13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpYy1wcm9ncmVzcy1iYXItcGVyY2VudGFnZS10b29sdGlwJyk7XHJcbiAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJGJhci5jbG9zZXN0KCcubWFnaWMtcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICB2YXIgJHBlcmNlbnRhZ2VFbGVtZW50cyA9ICR3cmFwcGVyLmZpbmQoJy5tYWdpYy1wcm9ncmVzcy1iYXItcGVyY2VudGFnZSwgLm1hZ2ljLXByb2dyZXNzLWJhci1wZXJjZW50YWdlLXRvb2x0aXAnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJXaWR0aCA9ICRjb250YWluZXIud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlYXNpbmcgPSBmdW5jdGlvbih0KSB7IHJldHVybiB0PC41ID8gMip0KnQgOiAtMSsoNC0yKnQpKnQgfTsgLy8gUXVhZHJhdGljIGVhc2luZ1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGNvdW50ZXIgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IHsgdmFsdWU6IDAgfTtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudGVySW50ZXJ2YWwgPSAzMDsgLy8gbXMgYmV0d2VlbiBjb3VudGVyIHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0Q291bnRlclVwZGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVGcmFtZSh0aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0VGltZSkgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGFwc2VkID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNpbmcocHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBjdXJyZW50IHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQZXJjZW50ID0gZWFzZWRQcm9ncmVzcyAqIHBlcmNlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBpeGVsV2lkdGggPSAoY3VycmVudFBlcmNlbnQgLyAxMDApICogY29udGFpbmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb2dyZXNzIGJhciB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICRiYXIuY3NzKCd3aWR0aCcsIGN1cnJlbnRQZXJjZW50ICsgJyUnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdG9vbHRpcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvb2x0aXBSaWdodCA9IGNvbnRhaW5lcldpZHRoIC0gcGl4ZWxXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAuY3NzKCdyaWdodCcsIHRvb2x0aXBSaWdodCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY291bnRlciAod2l0aCBzZXBhcmF0ZSB0aW1pbmcgZm9yIHNtb290aGVyIG51bWJlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgLSBsYXN0Q291bnRlclVwZGF0ZSA+PSBjb3VudGVySW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlci52YWx1ZSA9IE1hdGgubWluKE1hdGguZmxvb3IoY3VycmVudFBlcmNlbnQpLCBwZXJjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBlcmNlbnRhZ2VFbGVtZW50cy50ZXh0KGNvdW50ZXIudmFsdWUgKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q291bnRlclVwZGF0ZSA9IGVsYXBzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGFuaW1hdGlvbiBpZiBub3QgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbCB2YWx1ZSBpcyBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBlcmNlbnRhZ2VFbGVtZW50cy50ZXh0KHBlcmNlbnQgKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG59KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9wcm9ncmVzc19iYXIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9wcm9ncmVzc19iYXIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0UHJvZ3Jlc3NCYXIiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkcHJvZ3Jlc3NCYXJzIiwiZmluZCIsIiR0b29sdGlwIiwiJHdyYXBwZXIiLCJjbG9zZXN0IiwiYXBwZW5kIiwiY3NzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFuaW1hdGVQcm9ncmVzc0JhciIsInRhcmdldCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJiYXIiLCIkYmFyIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInBlcmNlbnQiLCJkYXRhIiwiZHVyYXRpb24iLCJkZWxheSIsIiRjb250YWluZXIiLCIkcGVyY2VudGFnZUVsZW1lbnRzIiwic2V0VGltZW91dCIsInN0YXJ0VGltZSIsImNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCJlYXNpbmciLCJ0IiwiY291bnRlciIsInZhbHVlIiwiY291bnRlckludGVydmFsIiwibGFzdENvdW50ZXJVcGRhdGUiLCJhbmltYXRlRnJhbWUiLCJ0aW1lc3RhbXAiLCJlbGFwc2VkIiwicHJvZ3Jlc3MiLCJNYXRoIiwibWluIiwiZWFzZWRQcm9ncmVzcyIsImN1cnJlbnRQZXJjZW50IiwicGl4ZWxXaWR0aCIsImxlbmd0aCIsInRvb2x0aXBSaWdodCIsImZsb29yIiwidGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==