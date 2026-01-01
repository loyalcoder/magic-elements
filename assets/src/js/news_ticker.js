import "./../scss/news_ticker.scss";
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_news_ticker.default": emkElementor.EmKitNewsTicker,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitNewsTicker: function($scope) {
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
              responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
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
        $(window).on('resize', function() {
            $content.slick('resize');
        });
    }
    
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);