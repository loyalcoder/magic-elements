import "./../scss/image_slider.scss";

(function ($, elementor) {
  "use strict";

  var $window = $(elementor);

  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_image_slider.default": emkElementor.EmKitImageSlider,
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
        "--emk-zoom-duration": zoomDuration + "ms",
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
        adaptiveHeight: false,
      });
    },
  };

  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);
