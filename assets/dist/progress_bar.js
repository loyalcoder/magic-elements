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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQzdIbEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL3Byb2dyZXNzX2Jhci5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3Byb2dyZXNzX2Jhci5zY3NzP2JhMGIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9wcm9ncmVzc19iYXIuc2Nzc1wiO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgICAgICAgXCJlbV9raXRfcHRvZ3Jlc3NfYmFyLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0UHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBFbUtpdFByb2dyZXNzQmFyOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciAkcHJvZ3Jlc3NCYXJzID0gJHNjb3BlLmZpbmQoJy5tYWdpYy1wcm9ncmVzcy1iYXItZmlsbCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUHJlcGFyZSB0b29sdGlwcyAtIG1vdmUgdGhlbSBvdXRzaWRlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAkc2NvcGUuZmluZCgnLm1hZ2ljLXByb2dyZXNzLWJhci1wZXJjZW50YWdlLXRvb2x0aXAnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciAkd3JhcHBlciA9ICR0b29sdGlwLmNsb3Nlc3QoJy5tYWdpYy1wcm9ncmVzcy1iYXItd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbCBwb3NpdGlvbmluZ1xyXG4gICAgICAgICAgICAgICAgJHRvb2x0aXAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnLTMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodCc6ICcxMDAlJywgLy8gU3RhcnQgZnJvbSBsZWZ0bW9zdCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCg1MCUpJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXJcclxuICAgICAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVta0VsZW1lbnRvci5hbmltYXRlUHJvZ3Jlc3NCYXIoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCB7IHRocmVzaG9sZDogMC41IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9ncmVzc0JhcnMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcHJvZ3Jlc3NCYXJzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1rRWxlbWVudG9yLmFuaW1hdGVQcm9ncmVzc0Jhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYW5pbWF0ZVByb2dyZXNzQmFyOiBmdW5jdGlvbihiYXIpIHtcclxuICAgICAgICAgICAgdmFyICRiYXIgPSAkKGJhcik7XHJcbiAgICAgICAgICAgIGlmICgkYmFyLmhhc0NsYXNzKCdhbmltYXRlZCcpKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkYmFyLmFkZENsYXNzKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAkYmFyLmRhdGEoJ3BlcmNlbnQnKTtcclxuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gJGJhci5kYXRhKCdkdXJhdGlvbicpIHx8IDE1MDA7XHJcbiAgICAgICAgICAgIHZhciBkZWxheSA9ICRiYXIuZGF0YSgnZGVsYXknKSB8fCAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICR3cmFwcGVyID0gJGJhci5jbG9zZXN0KCcubWFnaWMtcHJvZ3Jlc3MtYmFyLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljLXByb2dyZXNzLWJhci1wZXJjZW50YWdlLXRvb2x0aXAnKTtcclxuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSAkYmFyLmNsb3Nlc3QoJy5tYWdpYy1wcm9ncmVzcy1iYXItY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHZhciAkcGVyY2VudGFnZUVsZW1lbnRzID0gJHdyYXBwZXIuZmluZCgnLm1hZ2ljLXByb2dyZXNzLWJhci1wZXJjZW50YWdlLCAubWFnaWMtcHJvZ3Jlc3MtYmFyLXBlcmNlbnRhZ2UtdG9vbHRpcCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gJGNvbnRhaW5lci53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVhc2luZyA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQ8LjUgPyAyKnQqdCA6IC0xKyg0LTIqdCkqdCB9OyAvLyBRdWFkcmF0aWMgZWFzaW5nXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgY291bnRlciB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudGVyID0geyB2YWx1ZTogMCB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXJJbnRlcnZhbCA9IDMwOyAvLyBtcyBiZXR3ZWVuIGNvdW50ZXIgdXBkYXRlc1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RDb3VudGVyVXBkYXRlID0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZUZyYW1lKHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhcnRUaW1lKSBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBlcmNlbnQgPSBlYXNlZFByb2dyZXNzICogcGVyY2VudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGl4ZWxXaWR0aCA9IChjdXJyZW50UGVyY2VudCAvIDEwMCkgKiBjb250YWluZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3MgYmFyIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgJGJhci5jc3MoJ3dpZHRoJywgY3VycmVudFBlcmNlbnQgKyAnJScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0b29sdGlwIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0b29sdGlwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcFJpZ2h0ID0gY29udGFpbmVyV2lkdGggLSBwaXhlbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9vbHRpcC5jc3MoJ3JpZ2h0JywgdG9vbHRpcFJpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBjb3VudGVyICh3aXRoIHNlcGFyYXRlIHRpbWluZyBmb3Igc21vb3RoZXIgbnVtYmVycylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxhcHNlZCAtIGxhc3RDb3VudGVyVXBkYXRlID49IGNvdW50ZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyLnZhbHVlID0gTWF0aC5taW4oTWF0aC5mbG9vcihjdXJyZW50UGVyY2VudCksIHBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZUVsZW1lbnRzLnRleHQoY291bnRlci52YWx1ZSArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb3VudGVyVXBkYXRlID0gZWxhcHNlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgYW5pbWF0aW9uIGlmIG5vdCBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIGZpbmFsIHZhbHVlIGlzIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZUVsZW1lbnRzLnRleHQocGVyY2VudCArICclJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUZyYW1lKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbn0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL3Byb2dyZXNzX2Jhci5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL3Byb2dyZXNzX2Jhci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsIndpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRQcm9ncmVzc0JhciIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiRwcm9ncmVzc0JhcnMiLCJmaW5kIiwiJHRvb2x0aXAiLCIkd3JhcHBlciIsImNsb3Nlc3QiLCJhcHBlbmQiLCJjc3MiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYW5pbWF0ZVByb2dyZXNzQmFyIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImJhciIsIiRiYXIiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicGVyY2VudCIsImRhdGEiLCJkdXJhdGlvbiIsImRlbGF5IiwiJGNvbnRhaW5lciIsIiRwZXJjZW50YWdlRWxlbWVudHMiLCJzZXRUaW1lb3V0Iiwic3RhcnRUaW1lIiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsImVhc2luZyIsInQiLCJjb3VudGVyIiwidmFsdWUiLCJjb3VudGVySW50ZXJ2YWwiLCJsYXN0Q291bnRlclVwZGF0ZSIsImFuaW1hdGVGcmFtZSIsInRpbWVzdGFtcCIsImVsYXBzZWQiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJlYXNlZFByb2dyZXNzIiwiY3VycmVudFBlcmNlbnQiLCJwaXhlbFdpZHRoIiwibGVuZ3RoIiwidG9vbHRpcFJpZ2h0IiwiZmxvb3IiLCJ0ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib24iLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9