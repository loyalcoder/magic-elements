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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaGVyb19zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9oZXJvX3NsaWRlci5zY3NzPzBkNmQiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvaGVyb19zbGlkZXIuc2Nzc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgZW1rSGVyb1NsaWRlciA9IHtcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XG4gICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XG4gICAgICAgIFwiZW1fa2l0X2hlcm9fc2xpZGVyLmRlZmF1bHRcIjogZW1rSGVyb1NsaWRlci5pbml0V2lkZ2V0LFxuICAgICAgfTtcblxuICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGluaXRXaWRnZXQ6IGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgIHZhciAkcm9vdCA9ICRzY29wZS5maW5kKFwiLmVtay1oZXJvLXNsaWRlclwiKTtcbiAgICAgIHZhciAkdHJhY2sgPSAkcm9vdC5maW5kKFwiLmVtay1oZXJvLXNsaWRlcl9fdHJhY2tcIik7XG4gICAgICB2YXIgJHBhZ2VycyA9ICRyb290LmZpbmQoXCIuZW1rLWhlcm8tcGFnaW5hdGlvbl9fYnRuXCIpO1xuXG4gICAgICBpZiAoISRyb290Lmxlbmd0aCB8fCAhJHRyYWNrLmxlbmd0aCB8fCB0eXBlb2YgJC5mbi5zbGljayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCR0cmFjay5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7XG4gICAgICAgICR0cmFjay5vZmYoXCIuZW1rSGVyb1wiKTtcbiAgICAgICAgJHRyYWNrLnNsaWNrKFwidW5zbGlja1wiKTtcbiAgICAgIH1cblxuICAgICAgJHJvb3Qub2ZmKFwiLmVta0hlcm9cIik7XG4gICAgICAkcGFnZXJzLm9mZihcIi5lbWtIZXJvXCIpO1xuXG4gICAgICB2YXIgYXV0b3BsYXkgPSAkcm9vdC5kYXRhKFwiYXV0b3BsYXlcIikgPT09IHRydWUgfHwgJHJvb3QuZGF0YShcImF1dG9wbGF5XCIpID09PSBcInRydWVcIjtcbiAgICAgIHZhciBhdXRvcGxheVNwZWVkID0gcGFyc2VJbnQoJHJvb3QuZGF0YShcImF1dG9wbGF5LXNwZWVkXCIpLCAxMCkgfHwgNTAwMDtcbiAgICAgIHZhciBsb29wID0gJHJvb3QuZGF0YShcImxvb3BcIikgPT09IHRydWUgfHwgJHJvb3QuZGF0YShcImxvb3BcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgdmFyIHBhdXNlT25Ib3ZlciA9ICRyb290LmRhdGEoXCJwYXVzZS1vbi1ob3ZlclwiKSA9PT0gdHJ1ZSB8fCAkcm9vdC5kYXRhKFwicGF1c2Utb24taG92ZXJcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgdmFyIHNwZWVkID0gcGFyc2VJbnQoJHJvb3QuZGF0YShcInRyYW5zaXRpb24tc3BlZWRcIiksIDEwKSB8fCA3MDA7XG4gICAgICB2YXIgZWZmZWN0ID0gJHJvb3QuZGF0YShcImVmZmVjdFwiKSB8fCBcImZhZGVcIjtcbiAgICAgIHZhciBwYXJhbGxheCA9ICRyb290LmRhdGEoXCJwYXJhbGxheFwiKSA9PT0gdHJ1ZSB8fCAkcm9vdC5kYXRhKFwicGFyYWxsYXhcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgdmFyIHVzZUZhZGUgPSBlZmZlY3QgPT09IFwiZmFkZVwiO1xuICAgICAgdmFyIGlzUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICRyb290LmNzcyhcIi0tZW1rLXByb2dyZXNzLWR1cmF0aW9uXCIsIGF1dG9wbGF5U3BlZWQgKyBcIm1zXCIpO1xuXG4gICAgICBmdW5jdGlvbiBjbGVhclByb2dyZXNzKCkge1xuICAgICAgICAkcGFnZXJzLnJlbW92ZUNsYXNzKFwiaXMtcHJvZ3Jlc3NpbmcgaXMtcGF1c2VkXCIpO1xuICAgICAgICAkcGFnZXJzLmZpbmQoXCIuZW1rLWhlcm8tcGFnaW5hdGlvbl9fcmluZy1wcm9ncmVzc1wiKS5vZmYoXCJhbmltYXRpb25lbmQuZW1rSGVyb1wiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3luY1BhZ2VyKGluZGV4KSB7XG4gICAgICAgICRwYWdlcnMucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmUgaXMtcHJvZ3Jlc3NpbmcgaXMtcGF1c2VkXCIpLmF0dHIoXCJhcmlhLWN1cnJlbnRcIiwgXCJmYWxzZVwiKTtcblxuICAgICAgICB2YXIgJGFjdGl2ZSA9ICRwYWdlcnMuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicgKyBpbmRleCArICdcIl0nKTtcbiAgICAgICAgaWYgKCEkYWN0aXZlLmxlbmd0aCkge1xuICAgICAgICAgICRhY3RpdmUgPSAkcGFnZXJzLmVxKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIikuYXR0cihcImFyaWEtY3VycmVudFwiLCBcInRydWVcIik7XG5cbiAgICAgICAgaWYgKCFhdXRvcGxheSB8fCAkcGFnZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHByb2dyZXNzID0gJGFjdGl2ZS5maW5kKFwiLmVtay1oZXJvLXBhZ2luYXRpb25fX3JpbmctcHJvZ3Jlc3NcIik7XG5cbiAgICAgICAgLy8gUmVzdGFydCBDU1MgcHJvZ3Jlc3Mgc28gcmluZyBmaWxsIGRyaXZlcyB0aGUgbmV4dCBzbGlkZS5cbiAgICAgICAgJHByb2dyZXNzLmNzcyhcImFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG4gICAgICAgIHZvaWQgJHByb2dyZXNzWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAkcHJvZ3Jlc3MuY3NzKFwiYW5pbWF0aW9uXCIsIFwiXCIpO1xuXG4gICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoXCJpcy1wcm9ncmVzc2luZ1wiKTtcbiAgICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgICAgJGFjdGl2ZS5hZGRDbGFzcyhcImlzLXBhdXNlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9ncmVzcy5vZmYoXCJhbmltYXRpb25lbmQuZW1rSGVyb1wiKS5vbihcImFuaW1hdGlvbmVuZC5lbWtIZXJvXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYW5pbWF0aW9uTmFtZSAhPT0gXCJlbWstaGVyby1wcm9ncmVzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghJHRyYWNrLmhhc0NsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHRyYWNrLnNsaWNrKFwic2xpY2tOZXh0XCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGF1c2VQcm9ncmVzcygpIHtcbiAgICAgICAgaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgICAkcGFnZXJzLmZpbHRlcihcIi5pcy1wcm9ncmVzc2luZ1wiKS5hZGRDbGFzcyhcImlzLXBhdXNlZFwiKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XG4gICAgICAgICRwYWdlcnMuZmlsdGVyKFwiLmlzLXByb2dyZXNzaW5nXCIpLnJlbW92ZUNsYXNzKFwiaXMtcGF1c2VkXCIpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhbmltYXRlQ29udGVudCgkc2xpZGUpIHtcbiAgICAgICAgaWYgKCEkc2xpZGUgfHwgISRzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGNvbnRlbnQgPSAkc2xpZGUuZmluZChcIi5lbWstaGVyby1zbGlkZV9fY29udGVudFwiKTtcbiAgICAgICAgaWYgKCEkY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkY29udGVudC5yZW1vdmVDbGFzcyhcImlzLWFuaW1hdGVkXCIpO1xuICAgICAgICAvLyBGb3JjZSByZWZsb3cgc28gZmFkZUluVXAgcmVzdGFydHMgb24gZXZlcnkgc2xpZGUuXG4gICAgICAgIHZvaWQgJGNvbnRlbnRbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKFwiaXMtYW5pbWF0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0Q29udGVudCgkc2xpZGUpIHtcbiAgICAgICAgaWYgKCEkc2xpZGUgfHwgISRzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJHNsaWRlLmZpbmQoXCIuZW1rLWhlcm8tc2xpZGVfX2NvbnRlbnRcIikucmVtb3ZlQ2xhc3MoXCJpcy1hbmltYXRlZFwiKTtcbiAgICAgIH1cblxuICAgICAgJHRyYWNrLm9uKFwiaW5pdC5lbWtIZXJvXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2spIHtcbiAgICAgICAgc3luY1BhZ2VyKHNsaWNrLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgIGFuaW1hdGVDb250ZW50KCQoc2xpY2suJHNsaWRlcy5nZXQoc2xpY2suY3VycmVudFNsaWRlKSkpO1xuICAgICAgfSk7XG5cbiAgICAgICR0cmFjay5vbihcImJlZm9yZUNoYW5nZS5lbWtIZXJvXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xuICAgICAgICBjbGVhclByb2dyZXNzKCk7XG4gICAgICAgIHJlc2V0Q29udGVudCgkKHNsaWNrLiRzbGlkZXMuZ2V0KGN1cnJlbnRTbGlkZSkpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkdHJhY2sub24oXCJhZnRlckNoYW5nZS5lbWtIZXJvXCIsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xuICAgICAgICBzeW5jUGFnZXIoY3VycmVudFNsaWRlKTtcbiAgICAgICAgYW5pbWF0ZUNvbnRlbnQoJChzbGljay4kc2xpZGVzLmdldChjdXJyZW50U2xpZGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgJHRyYWNrLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgLy8gUHJvZ3Jlc3MgcmluZyBjb250cm9scyBhdXRvcGxheSB0aW1pbmcuXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICBmYWRlOiB1c2VGYWRlLFxuICAgICAgICBjc3NFYXNlOiB1c2VGYWRlID8gXCJlYXNlLWluLW91dFwiIDogXCJlYXNlXCIsXG4gICAgICAgIGluZmluaXRlOiBsb29wLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgIGZhZGU6IHVzZUZhZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgJHBhZ2Vycy5vbihcImNsaWNrLmVta0hlcm9cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoXCJpbmRleFwiKSwgMTApO1xuICAgICAgICBpZiAoaXNOYU4oaW5kZXgpIHx8ICEkdHJhY2suaGFzQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkdHJhY2suc2xpY2soXCJzbGlja0dvVG9cIiwgaW5kZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXVzZU9uSG92ZXIgJiYgYXV0b3BsYXkpIHtcbiAgICAgICAgJHJvb3Qub24oXCJtb3VzZWVudGVyLmVta0hlcm9cIiwgcGF1c2VQcm9ncmVzcyk7XG4gICAgICAgICRyb290Lm9uKFwibW91c2VsZWF2ZS5lbWtIZXJvXCIsIHJlc3VtZVByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFsbGF4KSB7XG4gICAgICAgICRyb290Lm9uKFwibW91c2Vtb3ZlLmVta0hlcm9cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgJGFjdGl2ZUJnID0gJHRyYWNrLmZpbmQoXCIuc2xpY2stY3VycmVudCAuZW1rLWhlcm8tc2xpZGVfX2JnXCIpO1xuICAgICAgICAgIGlmICghJGFjdGl2ZUJnLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gJHJvb3Qub2Zmc2V0KCk7XG4gICAgICAgICAgdmFyIHggPSAoZS5wYWdlWCAtIG9mZnNldC5sZWZ0KSAvICRyb290Lm91dGVyV2lkdGgoKSAtIDAuNTtcbiAgICAgICAgICB2YXIgeSA9IChlLnBhZ2VZIC0gb2Zmc2V0LnRvcCkgLyAkcm9vdC5vdXRlckhlaWdodCgpIC0gMC41O1xuICAgICAgICAgICRhY3RpdmVCZy5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICogMjAgKyBcInB4LCBcIiArIHkgKiAxMiArIFwicHgpIHNjYWxlKDEuMDUpXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcm9vdC5vbihcIm1vdXNlbGVhdmUuZW1rSGVyb1BhcmFsbGF4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkdHJhY2suZmluZChcIi5lbWstaGVyby1zbGlkZV9fYmdcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwiXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gICQoZWxlbWVudG9yKS5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0hlcm9TbGlkZXIub25Jbml0KTtcbn0pKGpRdWVyeSwgd2luZG93KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9oZXJvX3NsaWRlci5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL2hlcm9fc2xpZGVyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCJlbWtIZXJvU2xpZGVyIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJpbml0V2lkZ2V0IiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHJvb3QiLCJmaW5kIiwiJHRyYWNrIiwiJHBhZ2VycyIsImxlbmd0aCIsImZuIiwic2xpY2siLCJoYXNDbGFzcyIsIm9mZiIsImF1dG9wbGF5IiwiZGF0YSIsImF1dG9wbGF5U3BlZWQiLCJwYXJzZUludCIsImxvb3AiLCJwYXVzZU9uSG92ZXIiLCJzcGVlZCIsImVmZmVjdCIsInBhcmFsbGF4IiwidXNlRmFkZSIsImlzUGF1c2VkIiwiY3NzIiwiY2xlYXJQcm9ncmVzcyIsInJlbW92ZUNsYXNzIiwic3luY1BhZ2VyIiwiaW5kZXgiLCJhdHRyIiwiJGFjdGl2ZSIsImZpbHRlciIsImVxIiwiYWRkQ2xhc3MiLCIkcHJvZ3Jlc3MiLCJvZmZzZXRXaWR0aCIsIm9uIiwiZSIsIm9yaWdpbmFsRXZlbnQiLCJhbmltYXRpb25OYW1lIiwicGF1c2VQcm9ncmVzcyIsInJlc3VtZVByb2dyZXNzIiwiYW5pbWF0ZUNvbnRlbnQiLCIkc2xpZGUiLCIkY29udGVudCIsInJlc2V0Q29udGVudCIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwiJHNsaWRlcyIsImdldCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZmFkZSIsImNzc0Vhc2UiLCJpbmZpbml0ZSIsImFycm93cyIsImRvdHMiLCJhZGFwdGl2ZUhlaWdodCIsIndhaXRGb3JBbmltYXRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCIkYWN0aXZlQmciLCJvZmZzZXQiLCJ4IiwicGFnZVgiLCJsZWZ0Iiwib3V0ZXJXaWR0aCIsInkiLCJwYWdlWSIsInRvcCIsIm91dGVySGVpZ2h0IiwialF1ZXJ5Iiwid2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=