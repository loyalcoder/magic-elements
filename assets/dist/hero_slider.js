/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/hero_slider.js"
/*!**************************************!*\
  !*** ./assets/src/js/hero_slider.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_hero_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/hero_slider.scss */ "./assets/src/scss/hero_slider.scss");

(function ($, elementor) {
  "use strict";

  var emkHeroSlider = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_hero_slider.default": emkHeroSlider.initWidget
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    initWidget: function ($scope) {
      var $root = $scope.find(".emk-hero-slider");
      var $track = $root.find(".emk-hero-slider__track");
      var $pagers = $root.find(".emk-hero-pagination__btn");
      if (!$root.length || !$track.length || typeof $.fn.slick !== "function") {
        return;
      }
      if ($track.hasClass("slick-initialized")) {
        $track.off(".emkHero");
        $track.slick("unslick");
      }
      $root.off(".emkHero");
      $pagers.off(".emkHero");
      var autoplay = $root.data("autoplay") === true || $root.data("autoplay") === "true";
      var autoplaySpeed = parseInt($root.data("autoplay-speed"), 10) || 5000;
      var loop = $root.data("loop") === true || $root.data("loop") === "true";
      var pauseOnHover = $root.data("pause-on-hover") === true || $root.data("pause-on-hover") === "true";
      var speed = parseInt($root.data("transition-speed"), 10) || 700;
      var effect = $root.data("effect") || "fade";
      var parallax = $root.data("parallax") === true || $root.data("parallax") === "true";
      var useFade = effect === "fade";
      var isPaused = false;
      $root.css("--emk-progress-duration", autoplaySpeed + "ms");
      function clearProgress() {
        $pagers.removeClass("is-progressing is-paused");
        $pagers.find(".emk-hero-pagination__ring-progress").off("animationend.emkHero");
      }
      function syncPager(index) {
        $pagers.removeClass("is-active is-progressing is-paused").attr("aria-current", "false");
        var $active = $pagers.filter('[data-index="' + index + '"]');
        if (!$active.length) {
          $active = $pagers.eq(index);
        }
        $active.addClass("is-active").attr("aria-current", "true");
        if (!autoplay || $pagers.length < 2) {
          return;
        }
        var $progress = $active.find(".emk-hero-pagination__ring-progress");

        // Restart CSS progress so ring fill drives the next slide.
        $progress.css("animation", "none");
        void $progress[0].offsetWidth;
        $progress.css("animation", "");
        $active.addClass("is-progressing");
        if (isPaused) {
          $active.addClass("is-paused");
        }
        $progress.off("animationend.emkHero").on("animationend.emkHero", function (e) {
          if (e.originalEvent && e.originalEvent.animationName !== "emk-hero-progress") {
            return;
          }
          if (!$track.hasClass("slick-initialized")) {
            return;
          }
          $track.slick("slickNext");
        });
      }
      function pauseProgress() {
        isPaused = true;
        $pagers.filter(".is-progressing").addClass("is-paused");
      }
      function resumeProgress() {
        isPaused = false;
        $pagers.filter(".is-progressing").removeClass("is-paused");
      }
      function animateContent($slide) {
        if (!$slide || !$slide.length) {
          return;
        }
        var $content = $slide.find(".emk-hero-slide__content");
        if (!$content.length) {
          return;
        }
        $content.removeClass("is-animated");
        // Force reflow so fadeInUp restarts on every slide.
        void $content[0].offsetWidth;
        $content.addClass("is-animated");
      }
      function resetContent($slide) {
        if (!$slide || !$slide.length) {
          return;
        }
        $slide.find(".emk-hero-slide__content").removeClass("is-animated");
      }
      $track.on("init.emkHero", function (event, slick) {
        syncPager(slick.currentSlide);
        animateContent($(slick.$slides.get(slick.currentSlide)));
      });
      $track.on("beforeChange.emkHero", function (event, slick, currentSlide) {
        clearProgress();
        resetContent($(slick.$slides.get(currentSlide)));
      });
      $track.on("afterChange.emkHero", function (event, slick, currentSlide) {
        syncPager(currentSlide);
        animateContent($(slick.$slides.get(currentSlide)));
      });
      $track.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // Progress ring controls autoplay timing.
        autoplay: false,
        speed: speed,
        fade: useFade,
        cssEase: useFade ? "ease-in-out" : "ease",
        infinite: loop,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        waitForAnimate: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            adaptiveHeight: true,
            fade: useFade
          }
        }]
      });
      $pagers.on("click.emkHero", function (e) {
        e.preventDefault();
        var index = parseInt($(this).data("index"), 10);
        if (isNaN(index) || !$track.hasClass("slick-initialized")) {
          return;
        }
        $track.slick("slickGoTo", index);
      });
      if (pauseOnHover && autoplay) {
        $root.on("mouseenter.emkHero", pauseProgress);
        $root.on("mouseleave.emkHero", resumeProgress);
      }
      if (parallax) {
        $root.on("mousemove.emkHero", function (e) {
          var $activeBg = $track.find(".slick-current .emk-hero-slide__bg");
          if (!$activeBg.length) {
            return;
          }
          var offset = $root.offset();
          var x = (e.pageX - offset.left) / $root.outerWidth() - 0.5;
          var y = (e.pageY - offset.top) / $root.outerHeight() - 0.5;
          $activeBg.css("transform", "translate(" + x * 20 + "px, " + y * 12 + "px) scale(1.05)");
        });
        $root.on("mouseleave.emkHeroParallax", function () {
          $track.find(".emk-hero-slide__bg").css("transform", "");
        });
      }
    }
  };
  $(elementor).on("elementor/frontend/init", emkHeroSlider.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/hero_slider.scss"
/*!******************************************!*\
  !*** ./assets/src/scss/hero_slider.scss ***!
  \******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/hero_slider.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/hero_slider.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaGVyb19zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9oZXJvX3NsaWRlci5zY3NzPzBkNmQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvaGVyb19zbGlkZXIuc2Nzc1wiO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgdmFyIGVta0hlcm9TbGlkZXIgPSB7XHJcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcclxuICAgICAgdmFyIHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgIFwiZW1fa2l0X2hlcm9fc2xpZGVyLmRlZmF1bHRcIjogZW1rSGVyb1NsaWRlci5pbml0V2lkZ2V0LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0V2lkZ2V0OiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgIHZhciAkcm9vdCA9ICRzY29wZS5maW5kKFwiLmVtay1oZXJvLXNsaWRlclwiKTtcclxuICAgICAgdmFyICR0cmFjayA9ICRyb290LmZpbmQoXCIuZW1rLWhlcm8tc2xpZGVyX190cmFja1wiKTtcclxuICAgICAgdmFyICRwYWdlcnMgPSAkcm9vdC5maW5kKFwiLmVtay1oZXJvLXBhZ2luYXRpb25fX2J0blwiKTtcclxuXHJcbiAgICAgIGlmICghJHJvb3QubGVuZ3RoIHx8ICEkdHJhY2subGVuZ3RoIHx8IHR5cGVvZiAkLmZuLnNsaWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgkdHJhY2suaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSkge1xyXG4gICAgICAgICR0cmFjay5vZmYoXCIuZW1rSGVyb1wiKTtcclxuICAgICAgICAkdHJhY2suc2xpY2soXCJ1bnNsaWNrXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkcm9vdC5vZmYoXCIuZW1rSGVyb1wiKTtcclxuICAgICAgJHBhZ2Vycy5vZmYoXCIuZW1rSGVyb1wiKTtcclxuXHJcbiAgICAgIHZhciBhdXRvcGxheSA9ICRyb290LmRhdGEoXCJhdXRvcGxheVwiKSA9PT0gdHJ1ZSB8fCAkcm9vdC5kYXRhKFwiYXV0b3BsYXlcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICB2YXIgYXV0b3BsYXlTcGVlZCA9IHBhcnNlSW50KCRyb290LmRhdGEoXCJhdXRvcGxheS1zcGVlZFwiKSwgMTApIHx8IDUwMDA7XHJcbiAgICAgIHZhciBsb29wID0gJHJvb3QuZGF0YShcImxvb3BcIikgPT09IHRydWUgfHwgJHJvb3QuZGF0YShcImxvb3BcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICB2YXIgcGF1c2VPbkhvdmVyID0gJHJvb3QuZGF0YShcInBhdXNlLW9uLWhvdmVyXCIpID09PSB0cnVlIHx8ICRyb290LmRhdGEoXCJwYXVzZS1vbi1ob3ZlclwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgIHZhciBzcGVlZCA9IHBhcnNlSW50KCRyb290LmRhdGEoXCJ0cmFuc2l0aW9uLXNwZWVkXCIpLCAxMCkgfHwgNzAwO1xyXG4gICAgICB2YXIgZWZmZWN0ID0gJHJvb3QuZGF0YShcImVmZmVjdFwiKSB8fCBcImZhZGVcIjtcclxuICAgICAgdmFyIHBhcmFsbGF4ID0gJHJvb3QuZGF0YShcInBhcmFsbGF4XCIpID09PSB0cnVlIHx8ICRyb290LmRhdGEoXCJwYXJhbGxheFwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgIHZhciB1c2VGYWRlID0gZWZmZWN0ID09PSBcImZhZGVcIjtcclxuICAgICAgdmFyIGlzUGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAkcm9vdC5jc3MoXCItLWVtay1wcm9ncmVzcy1kdXJhdGlvblwiLCBhdXRvcGxheVNwZWVkICsgXCJtc1wiKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGNsZWFyUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgJHBhZ2Vycy5yZW1vdmVDbGFzcyhcImlzLXByb2dyZXNzaW5nIGlzLXBhdXNlZFwiKTtcclxuICAgICAgICAkcGFnZXJzLmZpbmQoXCIuZW1rLWhlcm8tcGFnaW5hdGlvbl9fcmluZy1wcm9ncmVzc1wiKS5vZmYoXCJhbmltYXRpb25lbmQuZW1rSGVyb1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gc3luY1BhZ2VyKGluZGV4KSB7XHJcbiAgICAgICAgJHBhZ2Vycy5yZW1vdmVDbGFzcyhcImlzLWFjdGl2ZSBpcy1wcm9ncmVzc2luZyBpcy1wYXVzZWRcIikuYXR0cihcImFyaWEtY3VycmVudFwiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICB2YXIgJGFjdGl2ZSA9ICRwYWdlcnMuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcclxuICAgICAgICBpZiAoISRhY3RpdmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkYWN0aXZlID0gJHBhZ2Vycy5lcShpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkYWN0aXZlLmFkZENsYXNzKFwiaXMtYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWN1cnJlbnRcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWF1dG9wbGF5IHx8ICRwYWdlcnMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRwcm9ncmVzcyA9ICRhY3RpdmUuZmluZChcIi5lbWstaGVyby1wYWdpbmF0aW9uX19yaW5nLXByb2dyZXNzXCIpO1xyXG5cclxuICAgICAgICAvLyBSZXN0YXJ0IENTUyBwcm9ncmVzcyBzbyByaW5nIGZpbGwgZHJpdmVzIHRoZSBuZXh0IHNsaWRlLlxyXG4gICAgICAgICRwcm9ncmVzcy5jc3MoXCJhbmltYXRpb25cIiwgXCJub25lXCIpO1xyXG4gICAgICAgIHZvaWQgJHByb2dyZXNzWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICRwcm9ncmVzcy5jc3MoXCJhbmltYXRpb25cIiwgXCJcIik7XHJcblxyXG4gICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoXCJpcy1wcm9ncmVzc2luZ1wiKTtcclxuICAgICAgICBpZiAoaXNQYXVzZWQpIHtcclxuICAgICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoXCJpcy1wYXVzZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJvZ3Jlc3Mub2ZmKFwiYW5pbWF0aW9uZW5kLmVta0hlcm9cIikub24oXCJhbmltYXRpb25lbmQuZW1rSGVyb1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYW5pbWF0aW9uTmFtZSAhPT0gXCJlbWstaGVyby1wcm9ncmVzc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghJHRyYWNrLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHRyYWNrLnNsaWNrKFwic2xpY2tOZXh0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBwYXVzZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGlzUGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAkcGFnZXJzLmZpbHRlcihcIi5pcy1wcm9ncmVzc2luZ1wiKS5hZGRDbGFzcyhcImlzLXBhdXNlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVzdW1lUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAkcGFnZXJzLmZpbHRlcihcIi5pcy1wcm9ncmVzc2luZ1wiKS5yZW1vdmVDbGFzcyhcImlzLXBhdXNlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYW5pbWF0ZUNvbnRlbnQoJHNsaWRlKSB7XHJcbiAgICAgICAgaWYgKCEkc2xpZGUgfHwgISRzbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciAkY29udGVudCA9ICRzbGlkZS5maW5kKFwiLmVtay1oZXJvLXNsaWRlX19jb250ZW50XCIpO1xyXG4gICAgICAgIGlmICghJGNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcyhcImlzLWFuaW1hdGVkXCIpO1xyXG4gICAgICAgIC8vIEZvcmNlIHJlZmxvdyBzbyBmYWRlSW5VcCByZXN0YXJ0cyBvbiBldmVyeSBzbGlkZS5cclxuICAgICAgICB2b2lkICRjb250ZW50WzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKFwiaXMtYW5pbWF0ZWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlc2V0Q29udGVudCgkc2xpZGUpIHtcclxuICAgICAgICBpZiAoISRzbGlkZSB8fCAhJHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2xpZGUuZmluZChcIi5lbWstaGVyby1zbGlkZV9fY29udGVudFwiKS5yZW1vdmVDbGFzcyhcImlzLWFuaW1hdGVkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkdHJhY2sub24oXCJpbml0LmVta0hlcm9cIiwgZnVuY3Rpb24gKGV2ZW50LCBzbGljaykge1xyXG4gICAgICAgIHN5bmNQYWdlcihzbGljay5jdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGFuaW1hdGVDb250ZW50KCQoc2xpY2suJHNsaWRlcy5nZXQoc2xpY2suY3VycmVudFNsaWRlKSkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICR0cmFjay5vbihcImJlZm9yZUNoYW5nZS5lbWtIZXJvXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgIGNsZWFyUHJvZ3Jlc3MoKTtcclxuICAgICAgICByZXNldENvbnRlbnQoJChzbGljay4kc2xpZGVzLmdldChjdXJyZW50U2xpZGUpKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJHRyYWNrLm9uKFwiYWZ0ZXJDaGFuZ2UuZW1rSGVyb1wiLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUpIHtcclxuICAgICAgICBzeW5jUGFnZXIoY3VycmVudFNsaWRlKTtcclxuICAgICAgICBhbmltYXRlQ29udGVudCgkKHNsaWNrLiRzbGlkZXMuZ2V0KGN1cnJlbnRTbGlkZSkpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkdHJhY2suc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAvLyBQcm9ncmVzcyByaW5nIGNvbnRyb2xzIGF1dG9wbGF5IHRpbWluZy5cclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IHNwZWVkLFxyXG4gICAgICAgIGZhZGU6IHVzZUZhZGUsXHJcbiAgICAgICAgY3NzRWFzZTogdXNlRmFkZSA/IFwiZWFzZS1pbi1vdXRcIiA6IFwiZWFzZVwiLFxyXG4gICAgICAgIGluZmluaXRlOiBsb29wLFxyXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgICBmYWRlOiB1c2VGYWRlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICRwYWdlcnMub24oXCJjbGljay5lbWtIZXJvXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KCQodGhpcykuZGF0YShcImluZGV4XCIpLCAxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKGluZGV4KSB8fCAhJHRyYWNrLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHRyYWNrLnNsaWNrKFwic2xpY2tHb1RvXCIsIGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocGF1c2VPbkhvdmVyICYmIGF1dG9wbGF5KSB7XHJcbiAgICAgICAgJHJvb3Qub24oXCJtb3VzZWVudGVyLmVta0hlcm9cIiwgcGF1c2VQcm9ncmVzcyk7XHJcbiAgICAgICAgJHJvb3Qub24oXCJtb3VzZWxlYXZlLmVta0hlcm9cIiwgcmVzdW1lUHJvZ3Jlc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyYWxsYXgpIHtcclxuICAgICAgICAkcm9vdC5vbihcIm1vdXNlbW92ZS5lbWtIZXJvXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2YXIgJGFjdGl2ZUJnID0gJHRyYWNrLmZpbmQoXCIuc2xpY2stY3VycmVudCAuZW1rLWhlcm8tc2xpZGVfX2JnXCIpO1xyXG4gICAgICAgICAgaWYgKCEkYWN0aXZlQmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciBvZmZzZXQgPSAkcm9vdC5vZmZzZXQoKTtcclxuICAgICAgICAgIHZhciB4ID0gKGUucGFnZVggLSBvZmZzZXQubGVmdCkgLyAkcm9vdC5vdXRlcldpZHRoKCkgLSAwLjU7XHJcbiAgICAgICAgICB2YXIgeSA9IChlLnBhZ2VZIC0gb2Zmc2V0LnRvcCkgLyAkcm9vdC5vdXRlckhlaWdodCgpIC0gMC41O1xyXG4gICAgICAgICAgJGFjdGl2ZUJnLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKiAyMCArIFwicHgsIFwiICsgeSAqIDEyICsgXCJweCkgc2NhbGUoMS4wNSlcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyb290Lm9uKFwibW91c2VsZWF2ZS5lbWtIZXJvUGFyYWxsYXhcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHRyYWNrLmZpbmQoXCIuZW1rLWhlcm8tc2xpZGVfX2JnXCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAkKGVsZW1lbnRvcikub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtIZXJvU2xpZGVyLm9uSW5pdCk7XHJcbn0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL2hlcm9fc2xpZGVyLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvaGVyb19zbGlkZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsImVta0hlcm9TbGlkZXIiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsImluaXRXaWRnZXQiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkcm9vdCIsImZpbmQiLCIkdHJhY2siLCIkcGFnZXJzIiwibGVuZ3RoIiwiZm4iLCJzbGljayIsImhhc0NsYXNzIiwib2ZmIiwiYXV0b3BsYXkiLCJkYXRhIiwiYXV0b3BsYXlTcGVlZCIsInBhcnNlSW50IiwibG9vcCIsInBhdXNlT25Ib3ZlciIsInNwZWVkIiwiZWZmZWN0IiwicGFyYWxsYXgiLCJ1c2VGYWRlIiwiaXNQYXVzZWQiLCJjc3MiLCJjbGVhclByb2dyZXNzIiwicmVtb3ZlQ2xhc3MiLCJzeW5jUGFnZXIiLCJpbmRleCIsImF0dHIiLCIkYWN0aXZlIiwiZmlsdGVyIiwiZXEiLCJhZGRDbGFzcyIsIiRwcm9ncmVzcyIsIm9mZnNldFdpZHRoIiwib24iLCJlIiwib3JpZ2luYWxFdmVudCIsImFuaW1hdGlvbk5hbWUiLCJwYXVzZVByb2dyZXNzIiwicmVzdW1lUHJvZ3Jlc3MiLCJhbmltYXRlQ29udGVudCIsIiRzbGlkZSIsIiRjb250ZW50IiwicmVzZXRDb250ZW50IiwiZXZlbnQiLCJjdXJyZW50U2xpZGUiLCIkc2xpZGVzIiwiZ2V0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJmYWRlIiwiY3NzRWFzZSIsImluZmluaXRlIiwiYXJyb3dzIiwiZG90cyIsImFkYXB0aXZlSGVpZ2h0Iiwid2FpdEZvckFuaW1hdGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsIiRhY3RpdmVCZyIsIm9mZnNldCIsIngiLCJwYWdlWCIsImxlZnQiLCJvdXRlcldpZHRoIiwieSIsInBhZ2VZIiwidG9wIiwib3V0ZXJIZWlnaHQiLCJqUXVlcnkiLCJ3aW5kb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==