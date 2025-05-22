/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/news_ticker.js":
/*!**************************************!*\
  !*** ./assets/src/js/news_ticker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_news_ticker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/news_ticker.scss */ "./assets/src/scss/news_ticker.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_news_ticker.default": emkElementor.EmKitNewsTicker
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitNewsTicker: function ($scope) {
      let $ticker = $scope.find('.multi-source-ticker');
      let settings = $ticker.data('settings');
      let $content = $ticker.find('.mst-content');

      // Initialize Slick slider
      $content.slick({
        slidesToShow: settings.slideShow,
        slidesToScroll: settings.slideScroll,
        autoplay: settings.autoplay,
        autoplaySpeed: settings.speed,
        speed: settings.autoplaySpeed,
        pauseOnHover: settings.pauseOnHover,
        arrows: false,
        infinite: settings.infinite,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      });

      // Handle window resize
      $(window).on('resize', function () {
        $content.slick('resize');
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/news_ticker.scss":
/*!******************************************!*\
  !*** ./assets/src/scss/news_ticker.scss ***!
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
/******/ 	__webpack_require__("./assets/src/scss/news_ticker.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/news_ticker.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL25ld3NfdGlja2VyLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvbmV3c190aWNrZXIuc2Nzcz84NDcxIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvbmV3c190aWNrZXIuc2Nzc1wiO1xyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfbmV3c190aWNrZXIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXROZXdzVGlja2VyLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0TmV3c1RpY2tlcjogZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0ICR0aWNrZXIgPSAkc2NvcGUuZmluZCgnLm11bHRpLXNvdXJjZS10aWNrZXInKTtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSAkdGlja2VyLmRhdGEoJ3NldHRpbmdzJyk7XHJcbiAgICAgICAgbGV0ICRjb250ZW50ID0gJHRpY2tlci5maW5kKCcubXN0LWNvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgU2xpY2sgc2xpZGVyXHJcbiAgICAgICAgJGNvbnRlbnQuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNldHRpbmdzLnNsaWRlU2hvdyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHNldHRpbmdzLnNsaWRlU2Nyb2xsLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogc2V0dGluZ3MuYXV0b3BsYXksXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IHNldHRpbmdzLnNwZWVkLFxyXG4gICAgICAgICAgICBzcGVlZDogc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBzZXR0aW5ncy5wYXVzZU9uSG92ZXIsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBzZXR0aW5ncy5pbmZpbml0ZSxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkY29udGVudC5zbGljaygncmVzaXplJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9uZXdzX3RpY2tlci5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL25ld3NfdGlja2VyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE5ld3NUaWNrZXIiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkdGlja2VyIiwiZmluZCIsInNldHRpbmdzIiwiZGF0YSIsIiRjb250ZW50Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZVNob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImNzc0Vhc2UiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRvdHMiLCJ3aW5kb3ciLCJvbiIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=