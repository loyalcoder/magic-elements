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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Vfc2xpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUVyQyxDQUFDLFVBQVVBLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3ZCLFlBQVk7O0VBRVosSUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUNDLFNBQVMsQ0FBQztFQUUxQixJQUFJRSxZQUFZLEdBQUc7SUFDakJDLE1BQU0sRUFBRSxTQUFBQSxDQUFBLEVBQVk7TUFDbEIsSUFBSUMsT0FBTyxHQUFHQyxpQkFBaUI7TUFDL0IsSUFBSUMsaUJBQWlCLEdBQUc7UUFDdEIsNkJBQTZCLEVBQUVKLFlBQVksQ0FBQ0s7TUFDOUMsQ0FBQztNQUVEUixDQUFDLENBQUNTLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsVUFBVUcsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFDeEROLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLENBQUMseUJBQXlCLEdBQUdILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzNFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFREgsZ0JBQWdCLEVBQUUsU0FBQUEsQ0FBVU0sTUFBTSxFQUFFO01BQ2xDLElBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUM7TUFFOUMsSUFBSSxDQUFDRCxPQUFPLENBQUNFLE1BQU0sSUFBSSxPQUFPakIsQ0FBQyxDQUFDa0IsRUFBRSxDQUFDQyxLQUFLLEtBQUssVUFBVSxFQUFFO1FBQ3ZEO01BQ0Y7TUFFQSxJQUFJSixPQUFPLENBQUNLLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQ3pDTCxPQUFPLENBQUNJLEtBQUssQ0FBQyxTQUFTLENBQUM7TUFDMUI7TUFFQSxJQUFJRSxRQUFRLEdBQUdOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUM3QyxJQUFJQyxVQUFVLEdBQUcsQ0FBQyxDQUFDRixRQUFRLENBQUNFLFVBQVU7TUFDdEMsSUFBSUMsU0FBUyxHQUFHSCxRQUFRLENBQUNHLFNBQVMsSUFBSSxJQUFJO01BQzFDLElBQUlDLFlBQVksR0FBR0osUUFBUSxDQUFDSSxZQUFZLElBQUlKLFFBQVEsQ0FBQ0ssYUFBYSxJQUFJLElBQUk7TUFFMUVYLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDO1FBQ1Ysa0JBQWtCLEVBQUVILFNBQVM7UUFDN0IscUJBQXFCLEVBQUVDLFlBQVksR0FBRztNQUN4QyxDQUFDLENBQUM7TUFFRixJQUFJRyxXQUFXLEdBQUcsU0FBQUEsQ0FBVUMsTUFBTSxFQUFFO1FBQ2xDLElBQUksQ0FBQ04sVUFBVSxJQUFJLENBQUNNLE1BQU0sSUFBSSxDQUFDQSxNQUFNLENBQUNaLE1BQU0sRUFBRTtVQUM1QztRQUNGO1FBRUEsSUFBSWEsR0FBRyxHQUFHRCxNQUFNLENBQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM5QyxJQUFJZSxRQUFRLEdBQUdGLE1BQU0sQ0FBQ2IsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBRXhEYyxHQUFHLENBQUNFLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0JELFFBQVEsQ0FBQ0MsV0FBVyxDQUFDLGFBQWEsQ0FBQzs7UUFFbkM7UUFDQSxLQUFLRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNHLFdBQVc7UUFFdkJILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQkgsUUFBUSxDQUFDRyxRQUFRLENBQUMsYUFBYSxDQUFDO01BQ2xDLENBQUM7TUFFRG5CLE9BQU8sQ0FBQ29CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVUMsS0FBSyxFQUFFakIsS0FBSyxFQUFFO1FBQ3pDUyxXQUFXLENBQUM1QixDQUFDLENBQUNtQixLQUFLLENBQUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLEtBQUssQ0FBQ29CLFlBQVksQ0FBQyxDQUFDLENBQUM7TUFDdkQsQ0FBQyxDQUFDO01BRUZ4QixPQUFPLENBQUNvQixFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVVDLEtBQUssRUFBRWpCLEtBQUssRUFBRW9CLFlBQVksRUFBRUMsU0FBUyxFQUFFO1FBQzFFLElBQUlDLFFBQVEsR0FBR3pDLENBQUMsQ0FBQ21CLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLENBQUMsQ0FBQztRQUNqREUsUUFBUSxDQUFDekIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNnQixXQUFXLENBQUMsWUFBWSxDQUFDO1FBQ2hFUyxRQUFRLENBQUN6QixJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQ2dCLFdBQVcsQ0FBQyxhQUFhLENBQUM7TUFDeEUsQ0FBQyxDQUFDO01BRUZqQixPQUFPLENBQUNvQixFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVVDLEtBQUssRUFBRWpCLEtBQUssRUFBRW9CLFlBQVksRUFBRTtRQUM5RFgsV0FBVyxDQUFDNUIsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUM7TUFDakQsQ0FBQyxDQUFDO01BRUZ4QixPQUFPLENBQUNJLEtBQUssQ0FBQztRQUNadUIsWUFBWSxFQUFFLENBQUM7UUFDZkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLFFBQVEsRUFBRSxDQUFDLENBQUN2QixRQUFRLENBQUN1QixRQUFRO1FBQzdCbEIsYUFBYSxFQUFFTCxRQUFRLENBQUNLLGFBQWEsSUFBSSxJQUFJO1FBQzdDbUIsS0FBSyxFQUFFeEIsUUFBUSxDQUFDd0IsS0FBSyxJQUFJLEdBQUc7UUFDNUJDLElBQUksRUFBRSxDQUFDLENBQUN6QixRQUFRLENBQUN5QixJQUFJO1FBQ3JCQyxPQUFPLEVBQUUxQixRQUFRLENBQUN5QixJQUFJLEdBQUcsYUFBYSxHQUFHLE1BQU07UUFDL0NFLFFBQVEsRUFBRTNCLFFBQVEsQ0FBQzJCLFFBQVEsS0FBSyxLQUFLO1FBQ3JDQyxZQUFZLEVBQUUsQ0FBQyxDQUFDNUIsUUFBUSxDQUFDNEIsWUFBWTtRQUNyQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQzdCLFFBQVEsQ0FBQzZCLE1BQU07UUFDekJDLElBQUksRUFBRSxDQUFDLENBQUM5QixRQUFRLENBQUM4QixJQUFJO1FBQ3JCQyxjQUFjLEVBQUU7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRURsRCxPQUFPLENBQUNpQyxFQUFFLENBQUMseUJBQXlCLEVBQUVoQyxZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM1RCxDQUFDLEVBQUVpRCxNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQzFGbEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2Vfc2xpZGVyLmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2Vfc2xpZGVyLnNjc3M/MTRmZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL2ltYWdlX3NsaWRlci5zY3NzXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuXHJcbiAgdmFyIGVta0VsZW1lbnRvciA9IHtcclxuICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgXCJlbV9raXRfaW1hZ2Vfc2xpZGVyLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0SW1hZ2VTbGlkZXIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEVtS2l0SW1hZ2VTbGlkZXI6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgdmFyICRzbGlkZXIgPSAkc2NvcGUuZmluZChcIi5lbWstaW1hZ2Utc2xpZGVyXCIpO1xyXG5cclxuICAgICAgaWYgKCEkc2xpZGVyLmxlbmd0aCB8fCB0eXBlb2YgJC5mbi5zbGljayAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJHNsaWRlci5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7XHJcbiAgICAgICAgJHNsaWRlci5zbGljayhcInVuc2xpY2tcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzZXR0aW5ncyA9ICRzbGlkZXIuZGF0YShcInNldHRpbmdzXCIpIHx8IHt9O1xyXG4gICAgICB2YXIgem9vbUVmZmVjdCA9ICEhc2V0dGluZ3Muem9vbUVmZmVjdDtcclxuICAgICAgdmFyIHpvb21TY2FsZSA9IHNldHRpbmdzLnpvb21TY2FsZSB8fCAxLjE1O1xyXG4gICAgICB2YXIgem9vbUR1cmF0aW9uID0gc2V0dGluZ3Muem9vbUR1cmF0aW9uIHx8IHNldHRpbmdzLmF1dG9wbGF5U3BlZWQgfHwgNTAwMDtcclxuXHJcbiAgICAgICRzbGlkZXIuY3NzKHtcclxuICAgICAgICBcIi0tZW1rLXpvb20tc2NhbGVcIjogem9vbVNjYWxlLFxyXG4gICAgICAgIFwiLS1lbWstem9vbS1kdXJhdGlvblwiOiB6b29tRHVyYXRpb24gKyBcIm1zXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHRyaWdnZXJab29tID0gZnVuY3Rpb24gKCRzbGlkZSkge1xyXG4gICAgICAgIGlmICghem9vbUVmZmVjdCB8fCAhJHNsaWRlIHx8ICEkc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgJGJnID0gJHNsaWRlLmZpbmQoXCIuZW1rLWltYWdlLXNsaWRlcl9fYmdcIik7XHJcbiAgICAgICAgdmFyICRjb250ZW50ID0gJHNsaWRlLmZpbmQoXCIuZW1rLWltYWdlLXNsaWRlcl9fY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgJGJnLnJlbW92ZUNsYXNzKFwiaXMtem9vbWluZ1wiKTtcclxuICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcyhcImlzLWFuaW1hdGVkXCIpO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSByZWZsb3cgc28gYW5pbWF0aW9uIHJlc3RhcnRzIG9uIGV2ZXJ5IHNsaWRlLlxyXG4gICAgICAgIHZvaWQgJGJnWzBdLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAkYmcuYWRkQ2xhc3MoXCJpcy16b29taW5nXCIpO1xyXG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKFwiaXMtYW5pbWF0ZWRcIik7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkc2xpZGVyLm9uKFwiaW5pdFwiLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrKSB7XHJcbiAgICAgICAgdHJpZ2dlclpvb20oJChzbGljay4kc2xpZGVzLmdldChzbGljay5jdXJyZW50U2xpZGUpKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJHNsaWRlci5vbihcImJlZm9yZUNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xyXG4gICAgICAgIHZhciAkY3VycmVudCA9ICQoc2xpY2suJHNsaWRlcy5nZXQoY3VycmVudFNsaWRlKSk7XHJcbiAgICAgICAgJGN1cnJlbnQuZmluZChcIi5lbWstaW1hZ2Utc2xpZGVyX19iZ1wiKS5yZW1vdmVDbGFzcyhcImlzLXpvb21pbmdcIik7XHJcbiAgICAgICAgJGN1cnJlbnQuZmluZChcIi5lbWstaW1hZ2Utc2xpZGVyX19jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwiaXMtYW5pbWF0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJHNsaWRlci5vbihcImFmdGVyQ2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgIHRyaWdnZXJab29tKCQoc2xpY2suJHNsaWRlcy5nZXQoY3VycmVudFNsaWRlKSkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRzbGlkZXIuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhdXRvcGxheTogISFzZXR0aW5ncy5hdXRvcGxheSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiBzZXR0aW5ncy5hdXRvcGxheVNwZWVkIHx8IDUwMDAsXHJcbiAgICAgICAgc3BlZWQ6IHNldHRpbmdzLnNwZWVkIHx8IDgwMCxcclxuICAgICAgICBmYWRlOiAhIXNldHRpbmdzLmZhZGUsXHJcbiAgICAgICAgY3NzRWFzZTogc2V0dGluZ3MuZmFkZSA/IFwiZWFzZS1pbi1vdXRcIiA6IFwiZWFzZVwiLFxyXG4gICAgICAgIGluZmluaXRlOiBzZXR0aW5ncy5pbmZpbml0ZSAhPT0gZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiAhIXNldHRpbmdzLnBhdXNlT25Ib3ZlcixcclxuICAgICAgICBhcnJvd3M6ICEhc2V0dGluZ3MuYXJyb3dzLFxyXG4gICAgICAgIGRvdHM6ICEhc2V0dGluZ3MuZG90cyxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbn0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2ltYWdlX3NsaWRlci5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2ltYWdlX3NsaWRlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRJbWFnZVNsaWRlciIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiRzbGlkZXIiLCJmaW5kIiwibGVuZ3RoIiwiZm4iLCJzbGljayIsImhhc0NsYXNzIiwic2V0dGluZ3MiLCJkYXRhIiwiem9vbUVmZmVjdCIsInpvb21TY2FsZSIsInpvb21EdXJhdGlvbiIsImF1dG9wbGF5U3BlZWQiLCJjc3MiLCJ0cmlnZ2VyWm9vbSIsIiRzbGlkZSIsIiRiZyIsIiRjb250ZW50IiwicmVtb3ZlQ2xhc3MiLCJvZmZzZXRXaWR0aCIsImFkZENsYXNzIiwib24iLCJldmVudCIsIiRzbGlkZXMiLCJnZXQiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCIkY3VycmVudCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJzcGVlZCIsImZhZGUiLCJjc3NFYXNlIiwiaW5maW5pdGUiLCJwYXVzZU9uSG92ZXIiLCJhcnJvd3MiLCJkb3RzIiwiYWRhcHRpdmVIZWlnaHQiLCJqUXVlcnkiLCJ3aW5kb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==