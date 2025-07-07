/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/timeline.js":
/*!***********************************!*\
  !*** ./assets/src/js/timeline.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_timeline_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/timeline.scss */ "./assets/src/scss/timeline.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "magicelements_timeline.default": emkElementor.EmKiTimeline
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKiTimeline: function ($scope) {
      let $timelineWrappers = $scope.find('.ultimate-timeline');
      $timelineWrappers.each(function () {
        var $timeline = $(this);

        // Initialize animations
        initAnimations($timeline);

        // Initialize specific layouts
        // if ($timeline.hasClass('horizontal')) {
        //     initHorizontalTimeline($timeline);
        // }

        if ($timeline.hasClass('filterable')) {
          initFiltering($timeline);
        }
      });
      function initAnimations($timeline) {
        if (typeof IntersectionObserver !== 'undefined') {
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                $(entry.target).addClass('animate-in');
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.1
          });
          $timeline.find('.timeline-item').each(function () {
            observer.observe(this);
          });
        } else {
          $timeline.find('.timeline-item').each(function (index) {
            var $item = $(this);
            setTimeout(function () {
              $item.addClass('animate-in');
            }, 100 * index);
          });
        }
      }

      // function initHorizontalTimeline($timeline) {
      //     var $items = $timeline.find('.timeline-item');
      //     var $wrapper = $timeline.find('.timeline-items-wrapper');
      //     var itemWidth = $items.outerWidth();
      //     var scrollPosition = 0;

      //     function centerItem(index) {
      //         if (index < 0) index = 0;
      //         if (index >= $items.length) index = $items.length - 1;

      //         var newPosition = index * (itemWidth + 20);
      //         $timeline.stop().animate({ scrollLeft: newPosition }, 300);
      //         $items.removeClass('active');
      //         $items.eq(index).addClass('active');
      //     }

      //     $timeline.on('scroll', function () {
      //         scrollPosition = $timeline.scrollLeft();
      //         var activeIndex = Math.round(scrollPosition / (itemWidth + 20));
      //         centerItem(activeIndex);
      //     });

      //     centerItem(0);

      //     $(window).on('resize', function () {
      //         itemWidth = $items.outerWidth();
      //         centerItem(Math.round($timeline.scrollLeft() / (itemWidth + 20)));
      //     });

      //     $timeline.append(
      //         '<button class="timeline-nav-button timeline-prev"><i class="fas fa-chevron-left"></i></button>' +
      //         '<button class="timeline-nav-button timeline-next"><i class="fas fa-chevron-right"></i></button>'
      //     );

      //     $timeline.on('click', '.timeline-prev', function () {
      //         var currentIndex = Math.round($timeline.scrollLeft() / (itemWidth + 20));
      //         centerItem(currentIndex - 1);
      //     });

      //     $timeline.on('click', '.timeline-next', function () {
      //         var currentIndex = Math.round($timeline.scrollLeft() / (itemWidth + 20));
      //         centerItem(currentIndex + 1);
      //     });
      // }

      function initFiltering($timeline) {
        $timeline.on('click', '.timeline-filter-button', function () {
          var $button = $(this);
          var filterValue = $button.data('filter');
          $timeline.find('.timeline-filter-button').removeClass('active');
          $button.addClass('active');
          if (filterValue === 'all') {
            $timeline.find('.timeline-item').fadeIn(300).addClass('visible');
          } else {
            $timeline.find('.timeline-item').removeClass('visible').fadeOut(200);
            $timeline.find('.timeline-item[data-category="' + filterValue + '"]').fadeIn(300).addClass('visible');
          }
        });
      }
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/timeline.scss":
/*!***************************************!*\
  !*** ./assets/src/scss/timeline.scss ***!
  \***************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/timeline.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/timeline.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3RpbWVsaW5lLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90aW1lbGluZS5zY3NzXCI7XHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcIm1hZ2ljZWxlbWVudHNfdGltZWxpbmUuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaVRpbWVsaW5lLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2lUaW1lbGluZTogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIGxldCAkdGltZWxpbmVXcmFwcGVycyA9ICRzY29wZS5maW5kKCcudWx0aW1hdGUtdGltZWxpbmUnKTtcclxuICAgIFxyXG4gICAgICAgICR0aW1lbGluZVdyYXBwZXJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRpbWVsaW5lID0gJCh0aGlzKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgaW5pdEFuaW1hdGlvbnMoJHRpbWVsaW5lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHNwZWNpZmljIGxheW91dHNcclxuICAgICAgICAgICAgLy8gaWYgKCR0aW1lbGluZS5oYXNDbGFzcygnaG9yaXpvbnRhbCcpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpbml0SG9yaXpvbnRhbFRpbWVsaW5lKCR0aW1lbGluZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoJHRpbWVsaW5lLmhhc0NsYXNzKCdmaWx0ZXJhYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIGluaXRGaWx0ZXJpbmcoJHRpbWVsaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdEFuaW1hdGlvbnMoJHRpbWVsaW5lKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLmFkZENsYXNzKCdhbmltYXRlLWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgeyB0aHJlc2hvbGQ6IDAuMSB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaXRlbS5hZGRDbGFzcygnYW5pbWF0ZS1pbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCAqIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gaW5pdEhvcml6b250YWxUaW1lbGluZSgkdGltZWxpbmUpIHtcclxuICAgICAgICAvLyAgICAgdmFyICRpdGVtcyA9ICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbScpO1xyXG4gICAgICAgIC8vICAgICB2YXIgJHdyYXBwZXIgPSAkdGltZWxpbmUuZmluZCgnLnRpbWVsaW5lLWl0ZW1zLXdyYXBwZXInKTtcclxuICAgICAgICAvLyAgICAgdmFyIGl0ZW1XaWR0aCA9ICRpdGVtcy5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgLy8gICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IDA7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgZnVuY3Rpb24gY2VudGVySXRlbShpbmRleCkge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGluZGV4ID49ICRpdGVtcy5sZW5ndGgpIGluZGV4ID0gJGl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICBcclxuICAgICAgICAvLyAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IGluZGV4ICogKGl0ZW1XaWR0aCArIDIwKTtcclxuICAgICAgICAvLyAgICAgICAgICR0aW1lbGluZS5zdG9wKCkuYW5pbWF0ZSh7IHNjcm9sbExlZnQ6IG5ld1Bvc2l0aW9uIH0sIDMwMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAkaXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgJGl0ZW1zLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vICAgICAkdGltZWxpbmUub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFBvc2l0aW9uID0gJHRpbWVsaW5lLnNjcm9sbExlZnQoKTtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBhY3RpdmVJbmRleCA9IE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24gLyAoaXRlbVdpZHRoICsgMjApKTtcclxuICAgICAgICAvLyAgICAgICAgIGNlbnRlckl0ZW0oYWN0aXZlSW5kZXgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICBjZW50ZXJJdGVtKDApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgaXRlbVdpZHRoID0gJGl0ZW1zLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAvLyAgICAgICAgIGNlbnRlckl0ZW0oTWF0aC5yb3VuZCgkdGltZWxpbmUuc2Nyb2xsTGVmdCgpIC8gKGl0ZW1XaWR0aCArIDIwKSkpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICAkdGltZWxpbmUuYXBwZW5kKFxyXG4gICAgICAgIC8vICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJ0aW1lbGluZS1uYXYtYnV0dG9uIHRpbWVsaW5lLXByZXZcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyArXHJcbiAgICAgICAgLy8gICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cInRpbWVsaW5lLW5hdi1idXR0b24gdGltZWxpbmUtbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+J1xyXG4gICAgICAgIC8vICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gICAgICR0aW1lbGluZS5vbignY2xpY2snLCAnLnRpbWVsaW5lLXByZXYnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gTWF0aC5yb3VuZCgkdGltZWxpbmUuc2Nyb2xsTGVmdCgpIC8gKGl0ZW1XaWR0aCArIDIwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICBjZW50ZXJJdGVtKGN1cnJlbnRJbmRleCAtIDEpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vICAgICAkdGltZWxpbmUub24oJ2NsaWNrJywgJy50aW1lbGluZS1uZXh0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoJHRpbWVsaW5lLnNjcm9sbExlZnQoKSAvIChpdGVtV2lkdGggKyAyMCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgY2VudGVySXRlbShjdXJyZW50SW5kZXggKyAxKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdEZpbHRlcmluZygkdGltZWxpbmUpIHtcclxuICAgICAgICAgICAgJHRpbWVsaW5lLm9uKCdjbGljaycsICcudGltZWxpbmUtZmlsdGVyLWJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJWYWx1ZSA9ICRidXR0b24uZGF0YSgnZmlsdGVyJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtZmlsdGVyLWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICRidXR0b24uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyVmFsdWUgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtJykuZmFkZUluKDMwMCkuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKS5mYWRlT3V0KDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtW2RhdGEtY2F0ZWdvcnk9XCInICsgZmlsdGVyVmFsdWUgKyAnXCJdJykuZmFkZUluKDMwMCkuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy90aW1lbGluZS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL3RpbWVsaW5lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpVGltZWxpbmUiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkdGltZWxpbmVXcmFwcGVycyIsImZpbmQiLCIkdGltZWxpbmUiLCJpbml0QW5pbWF0aW9ucyIsImhhc0NsYXNzIiwiaW5pdEZpbHRlcmluZyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJhZGRDbGFzcyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJpbmRleCIsIiRpdGVtIiwic2V0VGltZW91dCIsIm9uIiwiJGJ1dHRvbiIsImZpbHRlclZhbHVlIiwiZGF0YSIsInJlbW92ZUNsYXNzIiwiZmFkZUluIiwiZmFkZU91dCIsImpRdWVyeSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=