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
        responsive: [
          {
            breakpoint: 768,
            settings: {
              adaptiveHeight: true,
              fade: useFade,
            },
          },
        ],
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
    },
  };

  $(elementor).on("elementor/frontend/init", emkHeroSlider.onInit);
})(jQuery, window);
