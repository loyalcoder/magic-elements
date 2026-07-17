import "../scss/hero_slider.scss";

(function ($, elementor) {
  "use strict";

  var emkHeroSlider = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_hero_slider.default": emkHeroSlider.initWidget,
      };

      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },

    initWidget: function ($scope) {
      var $slider = $scope.find(".emk-hero-slider");
      if (!$slider.length) {
        return;
      }

      // Re-init safe for Elementor editor re-renders.
      $slider.off(".emkHero");
      if ($slider.data("emkHeroTimer")) {
        clearInterval($slider.data("emkHeroTimer"));
        $slider.removeData("emkHeroTimer");
      }

      var $slides = $slider.find(".emk-hero-slide");
      var $pagers = $slider.find(".emk-hero-pagination__btn");
      var total = $slides.length;
      var current = 0;
      var isAnimating = false;
      var autoplay = $slider.data("autoplay") === true || $slider.data("autoplay") === "true";
      var autoplaySpeed = parseInt($slider.data("autoplay-speed"), 10) || 5000;
      var loop = $slider.data("loop") === true || $slider.data("loop") === "true";
      var pauseOnHover = $slider.data("pause-on-hover") === true || $slider.data("pause-on-hover") === "true";
      var speed = parseInt($slider.data("transition-speed"), 10) || 700;
      var parallax = $slider.data("parallax") === true || $slider.data("parallax") === "true";
      var timer = null;

      if (total < 1) {
        return;
      }

      $slides.css("transition-duration", speed + "ms");

      function goTo(index) {
        if (isAnimating || index === current || index < 0 || index >= total) {
          return;
        }

        isAnimating = true;

        var $current = $slides.eq(current);
        var $next = $slides.eq(index);

        $current.addClass("is-leaving").removeClass("is-active").attr("aria-hidden", "true");
        $next.addClass("is-active").attr("aria-hidden", "false");

        $pagers.removeClass("is-active").attr("aria-current", "false");
        $pagers.eq(index).addClass("is-active").attr("aria-current", "true");

        setTimeout(function () {
          $current.removeClass("is-leaving");
          current = index;
          isAnimating = false;
        }, speed);
      }

      function next() {
        var target = current + 1;
        if (target >= total) {
          if (!loop) {
            return;
          }
          target = 0;
        }
        goTo(target);
      }

      function prev() {
        var target = current - 1;
        if (target < 0) {
          if (!loop) {
            return;
          }
          target = total - 1;
        }
        goTo(target);
      }

      function startAutoplay() {
        stopAutoplay();
        if (!autoplay || total < 2) {
          return;
        }
        timer = setInterval(next, autoplaySpeed);
        $slider.data("emkHeroTimer", timer);
      }

      function stopAutoplay() {
        if (timer) {
          clearInterval(timer);
          timer = null;
          $slider.removeData("emkHeroTimer");
        }
      }

      $pagers.on("click.emkHero", function (e) {
        e.preventDefault();
        var index = parseInt($(this).data("index"), 10);
        if (!isNaN(index)) {
          goTo(index);
          startAutoplay();
        }
      });

      $slider.on("keydown.emkHero", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          next();
          startAutoplay();
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          prev();
          startAutoplay();
        }
      });

      if (pauseOnHover && autoplay) {
        $slider.on("mouseenter.emkHero", stopAutoplay);
        $slider.on("mouseleave.emkHero", startAutoplay);
      }

      if (parallax) {
        $slider.on("mousemove.emkHero", function (e) {
          var $activeBg = $slider.find(".emk-hero-slide.is-active .emk-hero-slide__bg");
          if (!$activeBg.length) {
            return;
          }
          var offset = $slider.offset();
          var x = (e.pageX - offset.left) / $slider.outerWidth() - 0.5;
          var y = (e.pageY - offset.top) / $slider.outerHeight() - 0.5;
          $activeBg.css("transform", "translate(" + x * 20 + "px, " + y * 12 + "px) scale(1.05)");
        });

        $slider.on("mouseleave.emkHeroParallax", function () {
          $slider.find(".emk-hero-slide__bg").css("transform", "");
        });
      }

      // Touch swipe
      var touchStartX = 0;
      var touchEndX = 0;

      $slider.on("touchstart.emkHero", function (e) {
        touchStartX = e.originalEvent.changedTouches[0].screenX;
      });

      $slider.on("touchend.emkHero", function (e) {
        touchEndX = e.originalEvent.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            next();
          } else {
            prev();
          }
          startAutoplay();
        }
      });

      $slider.attr("tabindex", "0");
      startAutoplay();
    },
  };

  $(elementor).on("elementor/frontend/init", emkHeroSlider.onInit);
})(jQuery, window);
