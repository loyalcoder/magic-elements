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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsWUFBWSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2NvdW50ZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9jb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgXG4gICAgLy8gVHJhY2sgaW5pdGlhbGl6ZWQgY291bnRlcnNcbiAgICBjb25zdCBpbml0aWFsaXplZENvdW50ZXJzID0gbmV3IFNldCgpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY291bnRlciBhbmltYXRpb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbml0Q291bnRlcigkY291bnRlcikge1xuICAgICAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgICAgIGlmICgkY291bnRlci5kYXRhKCdjb3VudGVyLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gTWFyayBhcyBpbml0aWFsaXplZFxuICAgICAgICAkY291bnRlci5kYXRhKCdjb3VudGVyLWluaXRpYWxpemVkJywgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgY291bnRlciB2YWx1ZXNcbiAgICAgICAgY29uc3QgdGFyZ2V0TnVtID0gcGFyc2VJbnQoJGNvdW50ZXIuYXR0cignZGF0YS1UYXJnZXROdW0nKSkgfHwgcGFyc2VJbnQoJGNvdW50ZXIuYXR0cignZGF0YS10YXJnZXRudW0nKSkgfHwgMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLVNwZWVkJykpIHx8IHBhcnNlSW50KCRjb3VudGVyLmF0dHIoJ2RhdGEtc3BlZWQnKSkgfHwgMjAwMDtcbiAgICAgICAgY29uc3Qgc3RhcnROdW0gPSBwYXJzZUludCgkY291bnRlci5hdHRyKCdkYXRhLVN0YXJ0TnVtJykpIHx8IHBhcnNlSW50KCRjb3VudGVyLmF0dHIoJ2RhdGEtc3RhcnRudW0nKSkgfHwgMDtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0YXJ0IGNvdW50aW5nIGFuaW1hdGlvblxuICAgICAgICBhbmltYXRlQ291bnRlcigkY291bnRlciwgc3RhcnROdW0sIHRhcmdldE51bSwgc3BlZWQpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBBbmltYXRlIGNvdW50ZXIgZnJvbSBzdGFydCB0byBlbmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmltYXRlQ291bnRlcigkY291bnRlciwgc3RhcnQsIGVuZCwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBlbmQgLSBzdGFydDtcbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRWFzaW5nIGZ1bmN0aW9uIChlYXNlLW91dClcbiAgICAgICAgICAgIGNvbnN0IGVhc2VkID0gMSAtIE1hdGgucG93KDEgLSBwcm9ncmVzcywgMyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBNYXRoLmZsb29yKHN0YXJ0ICsgKGRpZmZlcmVuY2UgKiBlYXNlZCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgY291bnRlciB0ZXh0XG4gICAgICAgICAgICAkY291bnRlci50ZXh0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIGFuaW1hdGlvbiBpZiBub3QgY29tcGxldGVcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ291bnRlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBmaW5hbCB2YWx1ZSBpcyBzZXRcbiAgICAgICAgICAgICAgICAkY291bnRlci50ZXh0KGVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFN0YXJ0IGFuaW1hdGlvblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ291bnRlcik7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYWxsIGNvdW50ZXJzIGluIGEgY29udGFpbmVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdENvdW50ZXJzSW5Db250YWluZXIoJGNvbnRhaW5lcikge1xuICAgICAgICAkY29udGFpbmVyLmZpbmQoJy5jb3VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0ICRjb3VudGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICghJGNvdW50ZXIuZGF0YSgnY291bnRlci1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgaW5pdENvdW50ZXIoJGNvdW50ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZWxlbWVudCBpcyBpbiB2aWV3cG9ydFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzSW5WaWV3cG9ydCgkZWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50VG9wID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuICAgICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArICRlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBjb25zdCB2aWV3cG9ydEJvdHRvbSA9IHZpZXdwb3J0VG9wICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRCb3R0b20gPiB2aWV3cG9ydFRvcCAmJiBlbGVtZW50VG9wIDwgdmlld3BvcnRCb3R0b207XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY291bnRlcnMgb24gc2Nyb2xsIChmb3Igc2Nyb2xsLXRyaWdnZXJlZCBhbmltYXRpb24pXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdE9uU2Nyb2xsKCkge1xuICAgICAgICAkKCdbaWRePVwiY291bnRlcnNfXCJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcklkID0gJyMnICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaW5pdGlhbGl6ZWRDb3VudGVycy5oYXMoY29udGFpbmVySWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmIChpc0luVmlld3BvcnQoJGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgICBpbml0Q291bnRlcnNJbkNvbnRhaW5lcigkY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZENvdW50ZXJzLmFkZChjb250YWluZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGFsbCB2aXNpYmxlIGNvdW50ZXJzIGltbWVkaWF0ZWx5XG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdFZpc2libGVDb3VudGVycygpIHtcbiAgICAgICAgJCgnW2lkXj1cImNvdW50ZXJzX1wiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJJZCA9ICcjJyArICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemVkQ291bnRlcnMuaGFzKGNvbnRhaW5lcklkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgIGluaXRDb3VudGVyc0luQ29udGFpbmVyKCRjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVkQ291bnRlcnMuYWRkKGNvbnRhaW5lcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEVsZW1lbnRvciBFZGl0b3IgU3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZWxlbWVudG9yRnJvbnRlbmQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRvckZyb250ZW5kLmhvb2tzKSB7XG4gICAgICAgIGVsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbignZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9lbV9raXRfY291bnRlci5kZWZhdWx0JywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGluaXRDb3VudGVyc0luQ29udGFpbmVyKCRzY29wZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLy8gSW5pdGlhbGl6ZSBvbiBwYWdlIGxvYWRcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluaXRWaXNpYmxlQ291bnRlcnMoKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBJbml0aWFsaXplIG9uIHNjcm9sbFxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluaXRPblNjcm9sbCgpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIEluaXRpYWxpemUgaW1tZWRpYXRlbHkgZm9yIGVsZW1lbnRzIGFscmVhZHkgaW4gdmlld3BvcnRcbiAgICBpbml0T25TY3JvbGwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJpbml0aWFsaXplZENvdW50ZXJzIiwiU2V0IiwiaW5pdENvdW50ZXIiLCIkY291bnRlciIsImRhdGEiLCJ0YXJnZXROdW0iLCJwYXJzZUludCIsImF0dHIiLCJzcGVlZCIsInN0YXJ0TnVtIiwiYW5pbWF0ZUNvdW50ZXIiLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJkaWZmZXJlbmNlIiwidXBkYXRlQ291bnRlciIsImN1cnJlbnRUaW1lIiwiZWxhcHNlZCIsInByb2dyZXNzIiwiTWF0aCIsIm1pbiIsImVhc2VkIiwicG93IiwiY3VycmVudFZhbHVlIiwiZmxvb3IiLCJ0ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5pdENvdW50ZXJzSW5Db250YWluZXIiLCIkY29udGFpbmVyIiwiZmluZCIsImVhY2giLCJpc0luVmlld3BvcnQiLCIkZWxlbWVudCIsImVsZW1lbnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJlbGVtZW50Qm90dG9tIiwib3V0ZXJIZWlnaHQiLCJ2aWV3cG9ydFRvcCIsIndpbmRvdyIsInNjcm9sbFRvcCIsInZpZXdwb3J0Qm90dG9tIiwiaGVpZ2h0IiwiaW5pdE9uU2Nyb2xsIiwiY29udGFpbmVySWQiLCJoYXMiLCJhZGQiLCJpbml0VmlzaWJsZUNvdW50ZXJzIiwiaXMiLCJlbGVtZW50b3JGcm9udGVuZCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9