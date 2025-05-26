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
        if ($timeline.hasClass('horizontal')) {
          initHorizontalTimeline($timeline);
        }
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
      function initHorizontalTimeline($timeline) {
        var $items = $timeline.find('.timeline-item');
        var $wrapper = $timeline.find('.timeline-items-wrapper');
        var itemWidth = $items.outerWidth();
        var scrollPosition = 0;
        function centerItem(index) {
          if (index < 0) index = 0;
          if (index >= $items.length) index = $items.length - 1;
          var newPosition = index * (itemWidth + 20);
          $timeline.stop().animate({
            scrollLeft: newPosition
          }, 300);
          $items.removeClass('active');
          $items.eq(index).addClass('active');
        }
        $timeline.on('scroll', function () {
          scrollPosition = $timeline.scrollLeft();
          var activeIndex = Math.round(scrollPosition / (itemWidth + 20));
          centerItem(activeIndex);
        });
        centerItem(0);
        $(window).on('resize', function () {
          itemWidth = $items.outerWidth();
          centerItem(Math.round($timeline.scrollLeft() / (itemWidth + 20)));
        });
        $timeline.append('<button class="timeline-nav-button timeline-prev"><i class="fas fa-chevron-left"></i></button>' + '<button class="timeline-nav-button timeline-next"><i class="fas fa-chevron-right"></i></button>');
        $timeline.on('click', '.timeline-prev', function () {
          var currentIndex = Math.round($timeline.scrollLeft() / (itemWidth + 20));
          centerItem(currentIndex - 1);
        });
        $timeline.on('click', '.timeline-next', function () {
          var currentIndex = Math.round($timeline.scrollLeft() / (itemWidth + 20));
          centerItem(currentIndex + 1);
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMyQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM5QixRQUFRLENBQUMsU0FBUyxDQUFDO1VBQ3BFLENBQUMsTUFBTTtZQUNIWixTQUFTLENBQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDK0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDYSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3BFM0MsU0FBUyxDQUFDRCxJQUFJLENBQUMsZ0NBQWdDLEdBQUd5QyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzlCLFFBQVEsQ0FBQyxTQUFTLENBQUM7VUFDekc7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKO0VBRUEsQ0FBQztFQUVEM0IsT0FBTyxDQUFDK0MsRUFBRSxDQUFDLHlCQUF5QixFQUFFOUMsWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFeUQsTUFBTSxFQUFFUixNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDOUhwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy90aW1lbGluZS5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvdGltZWxpbmUuc2Nzc1wiO1xyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJtYWdpY2VsZW1lbnRzX3RpbWVsaW5lLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2lUaW1lbGluZSxcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpVGltZWxpbmU6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICBsZXQgJHRpbWVsaW5lV3JhcHBlcnMgPSAkc2NvcGUuZmluZCgnLnVsdGltYXRlLXRpbWVsaW5lJyk7XHJcbiAgICBcclxuICAgICAgICAkdGltZWxpbmVXcmFwcGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICR0aW1lbGluZSA9ICQodGhpcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBhbmltYXRpb25zXHJcbiAgICAgICAgICAgIGluaXRBbmltYXRpb25zKCR0aW1lbGluZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBzcGVjaWZpYyBsYXlvdXRzXHJcbiAgICAgICAgICAgIGlmICgkdGltZWxpbmUuaGFzQ2xhc3MoJ2hvcml6b250YWwnKSkge1xyXG4gICAgICAgICAgICAgICAgaW5pdEhvcml6b250YWxUaW1lbGluZSgkdGltZWxpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCR0aW1lbGluZS5oYXNDbGFzcygnZmlsdGVyYWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0RmlsdGVyaW5nKCR0aW1lbGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRBbmltYXRpb25zKCR0aW1lbGluZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZW50cnkudGFyZ2V0KS5hZGRDbGFzcygnYW5pbWF0ZS1pbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIHsgdGhyZXNob2xkOiAwLjEgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpdGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ2FuaW1hdGUtaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAgKiBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRIb3Jpem9udGFsVGltZWxpbmUoJHRpbWVsaW5lKSB7XHJcbiAgICAgICAgICAgIHZhciAkaXRlbXMgPSAkdGltZWxpbmUuZmluZCgnLnRpbWVsaW5lLWl0ZW0nKTtcclxuICAgICAgICAgICAgdmFyICR3cmFwcGVyID0gJHRpbWVsaW5lLmZpbmQoJy50aW1lbGluZS1pdGVtcy13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtV2lkdGggPSAkaXRlbXMub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNlbnRlckl0ZW0oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAkaXRlbXMubGVuZ3RoKSBpbmRleCA9ICRpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBpbmRleCAqIChpdGVtV2lkdGggKyAyMCk7XHJcbiAgICAgICAgICAgICAgICAkdGltZWxpbmUuc3RvcCgpLmFuaW1hdGUoeyBzY3JvbGxMZWZ0OiBuZXdQb3NpdGlvbiB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgJGl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICRpdGVtcy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgJHRpbWVsaW5lLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvbiA9ICR0aW1lbGluZS5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBNYXRoLnJvdW5kKHNjcm9sbFBvc2l0aW9uIC8gKGl0ZW1XaWR0aCArIDIwKSk7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJJdGVtKGFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgY2VudGVySXRlbSgwKTtcclxuICAgIFxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCA9ICRpdGVtcy5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJJdGVtKE1hdGgucm91bmQoJHRpbWVsaW5lLnNjcm9sbExlZnQoKSAvIChpdGVtV2lkdGggKyAyMCkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgJHRpbWVsaW5lLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwidGltZWxpbmUtbmF2LWJ1dHRvbiB0aW1lbGluZS1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJ0aW1lbGluZS1uYXYtYnV0dG9uIHRpbWVsaW5lLW5leHRcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPidcclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAkdGltZWxpbmUub24oJ2NsaWNrJywgJy50aW1lbGluZS1wcmV2JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoJHRpbWVsaW5lLnNjcm9sbExlZnQoKSAvIChpdGVtV2lkdGggKyAyMCkpO1xyXG4gICAgICAgICAgICAgICAgY2VudGVySXRlbShjdXJyZW50SW5kZXggLSAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgJHRpbWVsaW5lLm9uKCdjbGljaycsICcudGltZWxpbmUtbmV4dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBNYXRoLnJvdW5kKCR0aW1lbGluZS5zY3JvbGxMZWZ0KCkgLyAoaXRlbVdpZHRoICsgMjApKTtcclxuICAgICAgICAgICAgICAgIGNlbnRlckl0ZW0oY3VycmVudEluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRGaWx0ZXJpbmcoJHRpbWVsaW5lKSB7XHJcbiAgICAgICAgICAgICR0aW1lbGluZS5vbignY2xpY2snLCAnLnRpbWVsaW5lLWZpbHRlci1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyVmFsdWUgPSAkYnV0dG9uLmRhdGEoJ2ZpbHRlcicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAkdGltZWxpbmUuZmluZCgnLnRpbWVsaW5lLWZpbHRlci1idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkYnV0dG9uLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlclZhbHVlID09PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbScpLmZhZGVJbigzMDApLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbScpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJykuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lbGluZS5maW5kKCcudGltZWxpbmUtaXRlbVtkYXRhLWNhdGVnb3J5PVwiJyArIGZpbHRlclZhbHVlICsgJ1wiXScpLmZhZGVJbigzMDApLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvdGltZWxpbmUuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy90aW1lbGluZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaVRpbWVsaW5lIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHRpbWVsaW5lV3JhcHBlcnMiLCJmaW5kIiwiJHRpbWVsaW5lIiwiaW5pdEFuaW1hdGlvbnMiLCJoYXNDbGFzcyIsImluaXRIb3Jpem9udGFsVGltZWxpbmUiLCJpbml0RmlsdGVyaW5nIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImFkZENsYXNzIiwidW5vYnNlcnZlIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImluZGV4IiwiJGl0ZW0iLCJzZXRUaW1lb3V0IiwiJGl0ZW1zIiwiJHdyYXBwZXIiLCJpdGVtV2lkdGgiLCJvdXRlcldpZHRoIiwic2Nyb2xsUG9zaXRpb24iLCJjZW50ZXJJdGVtIiwibGVuZ3RoIiwibmV3UG9zaXRpb24iLCJzdG9wIiwiYW5pbWF0ZSIsInNjcm9sbExlZnQiLCJyZW1vdmVDbGFzcyIsImVxIiwib24iLCJhY3RpdmVJbmRleCIsIk1hdGgiLCJyb3VuZCIsIndpbmRvdyIsImFwcGVuZCIsImN1cnJlbnRJbmRleCIsIiRidXR0b24iLCJmaWx0ZXJWYWx1ZSIsImRhdGEiLCJmYWRlSW4iLCJmYWRlT3V0IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==