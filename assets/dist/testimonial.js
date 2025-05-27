/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/testimonial.js":
/*!**************************************!*\
  !*** ./assets/src/js/testimonial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_testimonial_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/testimonial.scss */ "./assets/src/scss/testimonial.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_testimonial.default": emkElementor.EmKiTestimonial
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKiTestimonial: function ($scope) {
      let $testimonialSliders = $scope.find('.testimonial-slider');
      $testimonialSliders.each(function () {
        var $slider = $(this);
        var $widget = $slider.closest('.pro-testimonial-widget');

        // Initialize slider
        initSlider($slider, $widget);

        // Initialize slider controls
        initSliderControls($slider);
      });
      function initSlider($slider, $widget) {
        var slidesToShow = parseInt($widget.data('slides-to-show')) || 3;
        var autoplay = $widget.data('autoplay') === 'yes';
        var autoplaySpeed = parseInt($widget.data('autoplay-speed')) || 3000;
        var arrows = $widget.data('arrows') === 'yes';
        var dots = $widget.data('dots') === 'yes';
        $slider.slick({
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          autoplay: autoplay,
          autoplaySpeed: autoplaySpeed,
          arrows: arrows,
          dots: dots,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: Math.min(3, slidesToShow),
              slidesToScroll: 1
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: Math.min(2, slidesToShow),
              slidesToScroll: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      }
      function initSliderControls($slider) {
        // Custom arrow functionality
        if ($slider.slick('getOption', 'arrows')) {
          $slider.on('init afterChange', function (event, slick) {
            var $prevArrow = $slider.find('.slick-prev');
            var $nextArrow = $slider.find('.slick-next');

            // Disable arrows when at beginning/end
            $prevArrow.toggleClass('slick-disabled', slick.currentSlide === 0);
            $nextArrow.toggleClass('slick-disabled', slick.currentSlide === slick.slideCount - slick.options.slidesToShow);
          });
        }

        // Pause on hover if autoplay is enabled
        if ($slider.slick('getOption', 'autoplay')) {
          $slider.on('mouseenter', function () {
            $slider.slick('slickPause');
          }).on('mouseleave', function () {
            $slider.slick('slickPlay');
          });
        }
      }
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/testimonial.scss":
/*!******************************************!*\
  !*** ./assets/src/scss/testimonial.scss ***!
  \******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/testimonial.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/testimonial.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy90ZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL3Rlc3RpbW9uaWFsLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy90ZXN0aW1vbmlhbC5zY3NzXCI7XHJcbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xyXG4gIFxyXG4gICAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICBcImVtX2tpdF90ZXN0aW1vbmlhbC5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpVGVzdGltb25pYWwsXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICBFbUtpVGVzdGltb25pYWw6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgIGxldCAkdGVzdGltb25pYWxTbGlkZXJzID0gJHNjb3BlLmZpbmQoJy50ZXN0aW1vbmlhbC1zbGlkZXInKTtcclxuXHJcbiAgICAkdGVzdGltb25pYWxTbGlkZXJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciAkc2xpZGVyID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgJHdpZGdldCA9ICRzbGlkZXIuY2xvc2VzdCgnLnByby10ZXN0aW1vbmlhbC13aWRnZXQnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXplIHNsaWRlclxyXG4gICAgICAgIGluaXRTbGlkZXIoJHNsaWRlciwgJHdpZGdldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzbGlkZXIgY29udHJvbHNcclxuICAgICAgICBpbml0U2xpZGVyQ29udHJvbHMoJHNsaWRlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2xpZGVyKCRzbGlkZXIsICR3aWRnZXQpIHtcclxuICAgICAgICB2YXIgc2xpZGVzVG9TaG93ID0gcGFyc2VJbnQoJHdpZGdldC5kYXRhKCdzbGlkZXMtdG8tc2hvdycpKSB8fCAzO1xyXG4gICAgICAgIHZhciBhdXRvcGxheSA9ICR3aWRnZXQuZGF0YSgnYXV0b3BsYXknKSA9PT0gJ3llcyc7XHJcbiAgICAgICAgdmFyIGF1dG9wbGF5U3BlZWQgPSBwYXJzZUludCgkd2lkZ2V0LmRhdGEoJ2F1dG9wbGF5LXNwZWVkJykpIHx8IDMwMDA7XHJcbiAgICAgICAgdmFyIGFycm93cyA9ICR3aWRnZXQuZGF0YSgnYXJyb3dzJykgPT09ICd5ZXMnO1xyXG4gICAgICAgIHZhciBkb3RzID0gJHdpZGdldC5kYXRhKCdkb3RzJykgPT09ICd5ZXMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRzbGlkZXIuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvdyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBhdXRvcGxheSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogYXV0b3BsYXlTcGVlZCxcclxuICAgICAgICAgICAgYXJyb3dzOiBhcnJvd3MsXHJcbiAgICAgICAgICAgIGRvdHM6IGRvdHMsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogTWF0aC5taW4oMywgc2xpZGVzVG9TaG93KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IE1hdGgubWluKDIsIHNsaWRlc1RvU2hvdyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTbGlkZXJDb250cm9scygkc2xpZGVyKSB7XHJcbiAgICAgICAgLy8gQ3VzdG9tIGFycm93IGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICBpZiAoJHNsaWRlci5zbGljaygnZ2V0T3B0aW9uJywgJ2Fycm93cycpKSB7XHJcbiAgICAgICAgICAgICRzbGlkZXIub24oJ2luaXQgYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJldkFycm93ID0gJHNsaWRlci5maW5kKCcuc2xpY2stcHJldicpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRuZXh0QXJyb3cgPSAkc2xpZGVyLmZpbmQoJy5zbGljay1uZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYXJyb3dzIHdoZW4gYXQgYmVnaW5uaW5nL2VuZFxyXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdy50b2dnbGVDbGFzcygnc2xpY2stZGlzYWJsZWQnLCBzbGljay5jdXJyZW50U2xpZGUgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdy50b2dnbGVDbGFzcygnc2xpY2stZGlzYWJsZWQnLCBzbGljay5jdXJyZW50U2xpZGUgPT09IHNsaWNrLnNsaWRlQ291bnQgLSBzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGF1c2Ugb24gaG92ZXIgaWYgYXV0b3BsYXkgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmICgkc2xpZGVyLnNsaWNrKCdnZXRPcHRpb24nLCAnYXV0b3BsYXknKSkge1xyXG4gICAgICAgICAgICAkc2xpZGVyLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkc2xpZGVyLnNsaWNrKCdzbGlja1BhdXNlJyk7XHJcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkc2xpZGVyLnNsaWNrKCdzbGlja1BsYXknKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvdGVzdGltb25pYWwuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy90ZXN0aW1vbmlhbC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaVRlc3RpbW9uaWFsIiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHRlc3RpbW9uaWFsU2xpZGVycyIsImZpbmQiLCIkc2xpZGVyIiwiJHdpZGdldCIsImNsb3Nlc3QiLCJpbml0U2xpZGVyIiwiaW5pdFNsaWRlckNvbnRyb2xzIiwic2xpZGVzVG9TaG93IiwicGFyc2VJbnQiLCJkYXRhIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYXJyb3dzIiwiZG90cyIsInNsaWNrIiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiTWF0aCIsIm1pbiIsIm9uIiwiZXZlbnQiLCIkcHJldkFycm93IiwiJG5leHRBcnJvdyIsInRvZ2dsZUNsYXNzIiwiY3VycmVudFNsaWRlIiwic2xpZGVDb3VudCIsIm9wdGlvbnMiLCJqUXVlcnkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9