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
            vertical: settings.direction,
            verticalSwiping: settings.direction,
            autoplay: settings.autoplay,
            autoplaySpeed: settings.speed,
            speed: settings.autoplaySpeed,
            pauseOnHover: settings.pauseOnHover,
            arrows: settings.arrows,
            infinite: settings.infinite,
            rtl: settings.rtl,
            cssEase: 'linear',
            prevArrow: $ticker.find('.mst-prev'),
            nextArrow: $ticker.find('.mst-next')
        });
    
        // Handle window resize
        $(window).on('resize', function() {
            $content.slick('resize');
        });
    }
    
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);