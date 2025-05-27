import "./../scss/testimonial.scss";
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_testimonial.default": emkElementor.EmKiTestimonial,
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
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(3, slidesToShow),
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: Math.min(2, slidesToShow),
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    function initSliderControls($slider) {
        // Custom arrow functionality
        if ($slider.slick('getOption', 'arrows')) {
            $slider.on('init afterChange', function(event, slick) {
                var $prevArrow = $slider.find('.slick-prev');
                var $nextArrow = $slider.find('.slick-next');
                
                // Disable arrows when at beginning/end
                $prevArrow.toggleClass('slick-disabled', slick.currentSlide === 0);
                $nextArrow.toggleClass('slick-disabled', slick.currentSlide === slick.slideCount - slick.options.slidesToShow);
            });
        }

        // Pause on hover if autoplay is enabled
        if ($slider.slick('getOption', 'autoplay')) {
            $slider.on('mouseenter', function() {
                $slider.slick('slickPause');
            }).on('mouseleave', function() {
                $slider.slick('slickPlay');
            });
        }
    }
}
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);