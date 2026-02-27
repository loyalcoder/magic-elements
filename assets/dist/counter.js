/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./assets/src/scss/counter.scss ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!**********************************!*\
  !*** ./assets/src/js/counter.js ***!
  \**********************************/
jQuery(function ($) {
  'use strict';

  // Track initialized counters
  const initializedCounters = new Set();

  /**
   * Initialize counter animation
   */
  function initCounter($counter) {
    // Check if already initialized
    if ($counter.data('counter-initialized')) {
      return;
    }

    // Mark as initialized
    $counter.data('counter-initialized', true);

    // Get counter values
    const targetNum = parseInt($counter.attr('data-TargetNum')) || parseInt($counter.attr('data-targetnum')) || 0;
    const speed = parseInt($counter.attr('data-Speed')) || parseInt($counter.attr('data-speed')) || 2000;
    const startNum = parseInt($counter.attr('data-StartNum')) || parseInt($counter.attr('data-startnum')) || 0;

    // Start counting animation
    animateCounter($counter, startNum, targetNum, speed);
  }

  /**
   * Animate counter from start to end
   */
  function animateCounter($counter, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);

      // Calculate current value
      const currentValue = Math.floor(start + difference * eased);

      // Update counter text
      $counter.text(currentValue);

      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure final value is set
        $counter.text(end);
      }
    }

    // Start animation
    requestAnimationFrame(updateCounter);
  }

  /**
   * Initialize all counters in a container
   */
  function initCountersInContainer($container) {
    $container.find('.counter').each(function () {
      const $counter = $(this);
      if (!$counter.data('counter-initialized')) {
        initCounter($counter);
      }
    });
  }

  /**
   * Check if element is in viewport
   */
  function isInViewport($element) {
    const elementTop = $element.offset().top;
    const elementBottom = elementTop + $element.outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  /**
   * Initialize counters on scroll (for scroll-triggered animation)
   */
  function initOnScroll() {
    $('[id^="counters_"]').each(function () {
      const containerId = '#' + $(this).attr('id');
      if (initializedCounters.has(containerId)) {
        return;
      }
      const $container = $(this);
      if (isInViewport($container)) {
        initCountersInContainer($container);
        initializedCounters.add(containerId);
      }
    });
  }

  /**
   * Initialize all visible counters immediately
   */
  function initVisibleCounters() {
    $('[id^="counters_"]').each(function () {
      const containerId = '#' + $(this).attr('id');
      if (initializedCounters.has(containerId)) {
        return;
      }
      const $container = $(this);
      if ($container.is(':visible')) {
        initCountersInContainer($container);
        initializedCounters.add(containerId);
      }
    });
  }

  // Elementor Editor Support
  if (typeof elementorFrontend !== 'undefined' && elementorFrontend.hooks) {
    elementorFrontend.hooks.addAction('frontend/element_ready/em_kit_counter.default', function ($scope) {
      setTimeout(function () {
        initCountersInContainer($scope);
      }, 100);
    });
  }

  // Initialize on page load
  $(document).ready(function () {
    setTimeout(function () {
      initVisibleCounters();
    }, 300);
  });

  // Initialize on scroll
  $(window).on('scroll', function () {
    initOnScroll();
  });

  // Initialize immediately for elements already in viewport
  initOnScroll();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsIm1hcHBpbmdzIjoiO1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7QUNBQUEsTUFBTSxDQUFDLFVBQVVDLENBQUMsRUFBRTtFQUNoQixZQUFZOztFQUVaO0VBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7O0VBRXJDO0FBQ0o7QUFDQTtFQUNJLFNBQVNDLFdBQVdBLENBQUNDLFFBQVEsRUFBRTtJQUMzQjtJQUNBLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7TUFDdEM7SUFDSjs7SUFFQTtJQUNBRCxRQUFRLENBQUNDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUM7O0lBRTFDO0lBQ0EsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSUQsUUFBUSxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RyxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSUQsUUFBUSxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLElBQUk7SUFDcEcsTUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUlELFFBQVEsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDOztJQUUxRztJQUNBRyxjQUFjLENBQUNQLFFBQVEsRUFBRU0sUUFBUSxFQUFFSixTQUFTLEVBQUVHLEtBQUssQ0FBQztFQUN4RDs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxTQUFTRSxjQUFjQSxDQUFDUCxRQUFRLEVBQUVRLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQUU7SUFDcEQsTUFBTUMsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU1DLFVBQVUsR0FBR0wsR0FBRyxHQUFHRCxLQUFLO0lBRTlCLFNBQVNPLGFBQWFBLENBQUNDLFdBQVcsRUFBRTtNQUNoQyxNQUFNQyxPQUFPLEdBQUdELFdBQVcsR0FBR0wsU0FBUztNQUN2QyxNQUFNTyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLEdBQUdQLFFBQVEsRUFBRSxDQUFDLENBQUM7O01BRWhEO01BQ0EsTUFBTVcsS0FBSyxHQUFHLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQyxHQUFHSixRQUFRLEVBQUUsQ0FBQyxDQUFDOztNQUUzQztNQUNBLE1BQU1LLFlBQVksR0FBR0osSUFBSSxDQUFDSyxLQUFLLENBQUNoQixLQUFLLEdBQUlNLFVBQVUsR0FBR08sS0FBTSxDQUFDOztNQUU3RDtNQUNBckIsUUFBUSxDQUFDeUIsSUFBSSxDQUFDRixZQUFZLENBQUM7O01BRTNCO01BQ0EsSUFBSUwsUUFBUSxHQUFHLENBQUMsRUFBRTtRQUNkUSxxQkFBcUIsQ0FBQ1gsYUFBYSxDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNIO1FBQ0FmLFFBQVEsQ0FBQ3lCLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQztNQUN0QjtJQUNKOztJQUVBO0lBQ0FpQixxQkFBcUIsQ0FBQ1gsYUFBYSxDQUFDO0VBQ3hDOztFQUVBO0FBQ0o7QUFDQTtFQUNJLFNBQVNZLHVCQUF1QkEsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3pDQSxVQUFVLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFlBQVc7TUFDeEMsTUFBTTlCLFFBQVEsR0FBR0osQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN4QixJQUFJLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7UUFDdkNGLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDO01BQ3pCO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBO0VBQ0ksU0FBUytCLFlBQVlBLENBQUNDLFFBQVEsRUFBRTtJQUM1QixNQUFNQyxVQUFVLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsR0FBRztJQUN4QyxNQUFNQyxhQUFhLEdBQUdILFVBQVUsR0FBR0QsUUFBUSxDQUFDSyxXQUFXLENBQUMsQ0FBQztJQUN6RCxNQUFNQyxXQUFXLEdBQUcxQyxDQUFDLENBQUMyQyxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDekMsTUFBTUMsY0FBYyxHQUFHSCxXQUFXLEdBQUcxQyxDQUFDLENBQUMyQyxNQUFNLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7SUFFdkQsT0FBT04sYUFBYSxHQUFHRSxXQUFXLElBQUlMLFVBQVUsR0FBR1EsY0FBYztFQUNyRTs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxTQUFTRSxZQUFZQSxDQUFBLEVBQUc7SUFDcEIvQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2tDLElBQUksQ0FBQyxZQUFXO01BQ25DLE1BQU1jLFdBQVcsR0FBRyxHQUFHLEdBQUdoRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUM7TUFFNUMsSUFBSVAsbUJBQW1CLENBQUNnRCxHQUFHLENBQUNELFdBQVcsQ0FBQyxFQUFFO1FBQ3RDO01BQ0o7TUFFQSxNQUFNaEIsVUFBVSxHQUFHaEMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUMxQixJQUFJbUMsWUFBWSxDQUFDSCxVQUFVLENBQUMsRUFBRTtRQUMxQkQsdUJBQXVCLENBQUNDLFVBQVUsQ0FBQztRQUNuQy9CLG1CQUFtQixDQUFDaUQsR0FBRyxDQUFDRixXQUFXLENBQUM7TUFDeEM7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7RUFDSSxTQUFTRyxtQkFBbUJBLENBQUEsRUFBRztJQUMzQm5ELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDa0MsSUFBSSxDQUFDLFlBQVc7TUFDbkMsTUFBTWMsV0FBVyxHQUFHLEdBQUcsR0FBR2hELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQztNQUU1QyxJQUFJUCxtQkFBbUIsQ0FBQ2dELEdBQUcsQ0FBQ0QsV0FBVyxDQUFDLEVBQUU7UUFDdEM7TUFDSjtNQUVBLE1BQU1oQixVQUFVLEdBQUdoQyxDQUFDLENBQUMsSUFBSSxDQUFDO01BQzFCLElBQUlnQyxVQUFVLENBQUNvQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDM0JyQix1QkFBdUIsQ0FBQ0MsVUFBVSxDQUFDO1FBQ25DL0IsbUJBQW1CLENBQUNpRCxHQUFHLENBQUNGLFdBQVcsQ0FBQztNQUN4QztJQUNKLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBSSxPQUFPSyxpQkFBaUIsS0FBSyxXQUFXLElBQUlBLGlCQUFpQixDQUFDQyxLQUFLLEVBQUU7SUFDckVELGlCQUFpQixDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQywrQ0FBK0MsRUFBRSxVQUFTQyxNQUFNLEVBQUU7TUFDaEdDLFVBQVUsQ0FBQyxZQUFXO1FBQ2xCMUIsdUJBQXVCLENBQUN5QixNQUFNLENBQUM7TUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0F4RCxDQUFDLENBQUMwRCxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7SUFDekJGLFVBQVUsQ0FBQyxZQUFXO01BQ2xCTixtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDLENBQUM7O0VBRUY7RUFDQW5ELENBQUMsQ0FBQzJDLE1BQU0sQ0FBQyxDQUFDaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO0lBQzlCYixZQUFZLENBQUMsQ0FBQztFQUNsQixDQUFDLENBQUM7O0VBRUY7RUFDQUEsWUFBWSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2NvdW50ZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9jb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIFxyXG4gICAgLy8gVHJhY2sgaW5pdGlhbGl6ZWQgY291bnRlcnNcclxuICAgIGNvbnN0IGluaXRpYWxpemVkQ291bnRlcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBjb3VudGVyIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q291bnRlcigkY291bnRlcikge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgaW5pdGlhbGl6ZWRcclxuICAgICAgICBpZiAoJGNvdW50ZXIuZGF0YSgnY291bnRlci1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFyayBhcyBpbml0aWFsaXplZFxyXG4gICAgICAgICRjb3VudGVyLmRhdGEoJ2NvdW50ZXItaW5pdGlhbGl6ZWQnLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXQgY291bnRlciB2YWx1ZXNcclxuICAgICAgICBjb25zdCB0YXJnZXROdW0gPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLVRhcmdldE51bScpKSB8fCBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLXRhcmdldG51bScpKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gcGFyc2VJbnQoJGNvdW50ZXIuYXR0cignZGF0YS1TcGVlZCcpKSB8fCBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLXNwZWVkJykpIHx8IDIwMDA7XHJcbiAgICAgICAgY29uc3Qgc3RhcnROdW0gPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLVN0YXJ0TnVtJykpIHx8IHBhcnNlSW50KCRjb3VudGVyLmF0dHIoJ2RhdGEtc3RhcnRudW0nKSkgfHwgMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdGFydCBjb3VudGluZyBhbmltYXRpb25cclxuICAgICAgICBhbmltYXRlQ291bnRlcigkY291bnRlciwgc3RhcnROdW0sIHRhcmdldE51bSwgc3BlZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgY291bnRlciBmcm9tIHN0YXJ0IHRvIGVuZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlQ291bnRlcigkY291bnRlciwgc3RhcnQsIGVuZCwgZHVyYXRpb24pIHtcclxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gZW5kIC0gc3RhcnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ291bnRlcihjdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVhc2luZyBmdW5jdGlvbiAoZWFzZS1vdXQpXHJcbiAgICAgICAgICAgIGNvbnN0IGVhc2VkID0gMSAtIE1hdGgucG93KDEgLSBwcm9ncmVzcywgMyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgY3VycmVudCB2YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBNYXRoLmZsb29yKHN0YXJ0ICsgKGRpZmZlcmVuY2UgKiBlYXNlZCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGNvdW50ZXIgdGV4dFxyXG4gICAgICAgICAgICAkY291bnRlci50ZXh0KGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb250aW51ZSBhbmltYXRpb24gaWYgbm90IGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVDb3VudGVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbCB2YWx1ZSBpcyBzZXRcclxuICAgICAgICAgICAgICAgICRjb3VudGVyLnRleHQoZW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTdGFydCBhbmltYXRpb25cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ291bnRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBhbGwgY291bnRlcnMgaW4gYSBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENvdW50ZXJzSW5Db250YWluZXIoJGNvbnRhaW5lcikge1xyXG4gICAgICAgICRjb250YWluZXIuZmluZCgnLmNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkY291bnRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmICghJGNvdW50ZXIuZGF0YSgnY291bnRlci1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Q291bnRlcigkY291bnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBlbGVtZW50IGlzIGluIHZpZXdwb3J0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzSW5WaWV3cG9ydCgkZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyAkZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0Qm90dG9tID0gdmlld3BvcnRUb3AgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRCb3R0b20gPiB2aWV3cG9ydFRvcCAmJiBlbGVtZW50VG9wIDwgdmlld3BvcnRCb3R0b207XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBjb3VudGVycyBvbiBzY3JvbGwgKGZvciBzY3JvbGwtdHJpZ2dlcmVkIGFuaW1hdGlvbilcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdE9uU2Nyb2xsKCkge1xyXG4gICAgICAgICQoJ1tpZF49XCJjb3VudGVyc19cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJJZCA9ICcjJyArICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsaXplZENvdW50ZXJzLmhhcyhjb250YWluZXJJZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpc0luVmlld3BvcnQoJGNvbnRhaW5lcikpIHtcclxuICAgICAgICAgICAgICAgIGluaXRDb3VudGVyc0luQ29udGFpbmVyKCRjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWRDb3VudGVycy5hZGQoY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBhbGwgdmlzaWJsZSBjb3VudGVycyBpbW1lZGlhdGVseVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0VmlzaWJsZUNvdW50ZXJzKCkge1xyXG4gICAgICAgICQoJ1tpZF49XCJjb3VudGVyc19cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJJZCA9ICcjJyArICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsaXplZENvdW50ZXJzLmhhcyhjb250YWluZXJJZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Q291bnRlcnNJbkNvbnRhaW5lcigkY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVkQ291bnRlcnMuYWRkKGNvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFbGVtZW50b3IgRWRpdG9yIFN1cHBvcnRcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudG9yRnJvbnRlbmQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRvckZyb250ZW5kLmhvb2tzKSB7XHJcbiAgICAgICAgZWxlbWVudG9yRnJvbnRlbmQuaG9va3MuYWRkQWN0aW9uKCdmcm9udGVuZC9lbGVtZW50X3JlYWR5L2VtX2tpdF9jb3VudGVyLmRlZmF1bHQnLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGluaXRDb3VudGVyc0luQ29udGFpbmVyKCRzY29wZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgb24gcGFnZSBsb2FkXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpbml0VmlzaWJsZUNvdW50ZXJzKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIG9uIHNjcm9sbFxyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbml0T25TY3JvbGwoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIGltbWVkaWF0ZWx5IGZvciBlbGVtZW50cyBhbHJlYWR5IGluIHZpZXdwb3J0XHJcbiAgICBpbml0T25TY3JvbGwoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwiaW5pdGlhbGl6ZWRDb3VudGVycyIsIlNldCIsImluaXRDb3VudGVyIiwiJGNvdW50ZXIiLCJkYXRhIiwidGFyZ2V0TnVtIiwicGFyc2VJbnQiLCJhdHRyIiwic3BlZWQiLCJzdGFydE51bSIsImFuaW1hdGVDb3VudGVyIiwic3RhcnQiLCJlbmQiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZGlmZmVyZW5jZSIsInVwZGF0ZUNvdW50ZXIiLCJjdXJyZW50VGltZSIsImVsYXBzZWQiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJlYXNlZCIsInBvdyIsImN1cnJlbnRWYWx1ZSIsImZsb29yIiwidGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImluaXRDb3VudGVyc0luQ29udGFpbmVyIiwiJGNvbnRhaW5lciIsImZpbmQiLCJlYWNoIiwiaXNJblZpZXdwb3J0IiwiJGVsZW1lbnQiLCJlbGVtZW50VG9wIiwib2Zmc2V0IiwidG9wIiwiZWxlbWVudEJvdHRvbSIsIm91dGVySGVpZ2h0Iiwidmlld3BvcnRUb3AiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJ2aWV3cG9ydEJvdHRvbSIsImhlaWdodCIsImluaXRPblNjcm9sbCIsImNvbnRhaW5lcklkIiwiaGFzIiwiYWRkIiwiaW5pdFZpc2libGVDb3VudGVycyIsImlzIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==