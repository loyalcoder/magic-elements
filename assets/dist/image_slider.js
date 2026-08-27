/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/image_slider.js"
/*!***************************************!*\
  !*** ./assets/src/js/image_slider.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_image_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/image_slider.scss */ "./assets/src/scss/image_slider.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_image_slider.default": emkElementor.EmKitImageSlider
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitImageSlider: function ($scope) {
      var $slider = $scope.find(".emk-image-slider");
      if (!$slider.length || typeof $.fn.slick !== "function") {
        return;
      }
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
      var settings = $slider.data("settings") || {};
      var zoomEffect = !!settings.zoomEffect;
      var zoomScale = settings.zoomScale || 1.15;
      var zoomDuration = settings.zoomDuration || settings.autoplaySpeed || 5000;
      $slider.css({
        "--emk-zoom-scale": zoomScale,
        "--emk-zoom-duration": zoomDuration + "ms"
      });
      var triggerZoom = function ($slide) {
        if (!zoomEffect || !$slide || !$slide.length) {
          return;
        }
        var $bg = $slide.find(".emk-image-slider__bg");
        var $content = $slide.find(".emk-image-slider__content");
        $bg.removeClass("is-zooming");
        $content.removeClass("is-animated");

        // Force reflow so animation restarts on every slide.
        void $bg[0].offsetWidth;
        $bg.addClass("is-zooming");
        $content.addClass("is-animated");
      };
      $slider.on("init", function (event, slick) {
        triggerZoom($(slick.$slides.get(slick.currentSlide)));
      });
      $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var $current = $(slick.$slides.get(currentSlide));
        $current.find(".emk-image-slider__bg").removeClass("is-zooming");
        $current.find(".emk-image-slider__content").removeClass("is-animated");
      });
      $slider.on("afterChange", function (event, slick, currentSlide) {
        triggerZoom($(slick.$slides.get(currentSlide)));
      });
      $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !!settings.autoplay,
        autoplaySpeed: settings.autoplaySpeed || 5000,
        speed: settings.speed || 800,
        fade: !!settings.fade,
        cssEase: settings.fade ? "ease-in-out" : "ease",
        infinite: settings.infinite !== false,
        pauseOnHover: !!settings.pauseOnHover,
        arrows: !!settings.arrows,
        dots: !!settings.dots,
        adaptiveHeight: false
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/image_slider.scss"
/*!*******************************************!*\
  !*** ./assets/src/scss/image_slider.scss ***!
  \*******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/image_slider.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/image_slider.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM5QixRQUFRLENBQUM4QixJQUFJO1FBQ3JCQyxjQUFjLEVBQUU7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURsRCxPQUFPLENBQUNpQyxFQUFFLENBQUMseUJBQXlCLEVBQUVoQyxZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVpRCxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQzFGbEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2Vfc2xpZGVyLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2Vfc2xpZGVyLnNjc3M/MTRmZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX3NsaWRlci5zY3NzXCI7XG5cbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciAkd2luZG93ID0gJChlbGVtZW50b3IpO1xuXG4gIHZhciBlbWtFbGVtZW50b3IgPSB7XG4gICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xuICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICBcImVtX2tpdF9pbWFnZV9zbGlkZXIuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRJbWFnZVNsaWRlcixcbiAgICAgIH07XG5cbiAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBFbUtpdEltYWdlU2xpZGVyOiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICB2YXIgJHNsaWRlciA9ICRzY29wZS5maW5kKFwiLmVtay1pbWFnZS1zbGlkZXJcIik7XG5cbiAgICAgIGlmICghJHNsaWRlci5sZW5ndGggfHwgdHlwZW9mICQuZm4uc2xpY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2xpZGVyLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgJHNsaWRlci5zbGljayhcInVuc2xpY2tcIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXR0aW5ncyA9ICRzbGlkZXIuZGF0YShcInNldHRpbmdzXCIpIHx8IHt9O1xuICAgICAgdmFyIHpvb21FZmZlY3QgPSAhIXNldHRpbmdzLnpvb21FZmZlY3Q7XG4gICAgICB2YXIgem9vbVNjYWxlID0gc2V0dGluZ3Muem9vbVNjYWxlIHx8IDEuMTU7XG4gICAgICB2YXIgem9vbUR1cmF0aW9uID0gc2V0dGluZ3Muem9vbUR1cmF0aW9uIHx8IHNldHRpbmdzLmF1dG9wbGF5U3BlZWQgfHwgNTAwMDtcblxuICAgICAgJHNsaWRlci5jc3Moe1xuICAgICAgICBcIi0tZW1rLXpvb20tc2NhbGVcIjogem9vbVNjYWxlLFxuICAgICAgICBcIi0tZW1rLXpvb20tZHVyYXRpb25cIjogem9vbUR1cmF0aW9uICsgXCJtc1wiLFxuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmlnZ2VyWm9vbSA9IGZ1bmN0aW9uICgkc2xpZGUpIHtcbiAgICAgICAgaWYgKCF6b29tRWZmZWN0IHx8ICEkc2xpZGUgfHwgISRzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGJnID0gJHNsaWRlLmZpbmQoXCIuZW1rLWltYWdlLXNsaWRlcl9fYmdcIik7XG4gICAgICAgIHZhciAkY29udGVudCA9ICRzbGlkZS5maW5kKFwiLmVtay1pbWFnZS1zbGlkZXJfX2NvbnRlbnRcIik7XG5cbiAgICAgICAgJGJnLnJlbW92ZUNsYXNzKFwiaXMtem9vbWluZ1wiKTtcbiAgICAgICAgJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJpcy1hbmltYXRlZFwiKTtcblxuICAgICAgICAvLyBGb3JjZSByZWZsb3cgc28gYW5pbWF0aW9uIHJlc3RhcnRzIG9uIGV2ZXJ5IHNsaWRlLlxuICAgICAgICB2b2lkICRiZ1swXS5vZmZzZXRXaWR0aDtcblxuICAgICAgICAkYmcuYWRkQ2xhc3MoXCJpcy16b29taW5nXCIpO1xuICAgICAgICAkY29udGVudC5hZGRDbGFzcyhcImlzLWFuaW1hdGVkXCIpO1xuICAgICAgfTtcblxuICAgICAgJHNsaWRlci5vbihcImluaXRcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xuICAgICAgICB0cmlnZ2VyWm9vbSgkKHNsaWNrLiRzbGlkZXMuZ2V0KHNsaWNrLmN1cnJlbnRTbGlkZSkpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkc2xpZGVyLm9uKFwiYmVmb3JlQ2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHZhciAkY3VycmVudCA9ICQoc2xpY2suJHNsaWRlcy5nZXQoY3VycmVudFNsaWRlKSk7XG4gICAgICAgICRjdXJyZW50LmZpbmQoXCIuZW1rLWltYWdlLXNsaWRlcl9fYmdcIikucmVtb3ZlQ2xhc3MoXCJpcy16b29taW5nXCIpO1xuICAgICAgICAkY3VycmVudC5maW5kKFwiLmVtay1pbWFnZS1zbGlkZXJfX2NvbnRlbnRcIikucmVtb3ZlQ2xhc3MoXCJpcy1hbmltYXRlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkc2xpZGVyLm9uKFwiYWZ0ZXJDaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlKSB7XG4gICAgICAgIHRyaWdnZXJab29tKCQoc2xpY2suJHNsaWRlcy5nZXQoY3VycmVudFNsaWRlKSkpO1xuICAgICAgfSk7XG5cbiAgICAgICRzbGlkZXIuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogISFzZXR0aW5ncy5hdXRvcGxheSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCB8fCA1MDAwLFxuICAgICAgICBzcGVlZDogc2V0dGluZ3Muc3BlZWQgfHwgODAwLFxuICAgICAgICBmYWRlOiAhIXNldHRpbmdzLmZhZGUsXG4gICAgICAgIGNzc0Vhc2U6IHNldHRpbmdzLmZhZGUgPyBcImVhc2UtaW4tb3V0XCIgOiBcImVhc2VcIixcbiAgICAgICAgaW5maW5pdGU6IHNldHRpbmdzLmluZmluaXRlICE9PSBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiAhIXNldHRpbmdzLnBhdXNlT25Ib3ZlcixcbiAgICAgICAgYXJyb3dzOiAhIXNldHRpbmdzLmFycm93cyxcbiAgICAgICAgZG90czogISFzZXR0aW5ncy5kb3RzLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xuXG4gICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcbn0pKGpRdWVyeSwgd2luZG93KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9pbWFnZV9zbGlkZXIuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9pbWFnZV9zbGlkZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0SW1hZ2VTbGlkZXIiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkc2xpZGVyIiwiZmluZCIsImxlbmd0aCIsImZuIiwic2xpY2siLCJoYXNDbGFzcyIsInNldHRpbmdzIiwiZGF0YSIsInpvb21FZmZlY3QiLCJ6b29tU2NhbGUiLCJ6b29tRHVyYXRpb24iLCJhdXRvcGxheVNwZWVkIiwiY3NzIiwidHJpZ2dlclpvb20iLCIkc2xpZGUiLCIkYmciLCIkY29udGVudCIsInJlbW92ZUNsYXNzIiwib2Zmc2V0V2lkdGgiLCJhZGRDbGFzcyIsIm9uIiwiZXZlbnQiLCIkc2xpZGVzIiwiZ2V0IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwiJGN1cnJlbnQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5Iiwic3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsImluZmluaXRlIiwicGF1c2VPbkhvdmVyIiwiYXJyb3dzIiwiZG90cyIsImFkYXB0aXZlSGVpZ2h0IiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=