import "./../scss/image_accordion.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magicelements_image_accordion.default": emkElementor.magicelementsImageAccordion,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      magicelementsImageAccordion: function ($scope) {
        let image_accordion = $scope.find('.accordion');
    
        image_accordion.each(function () {
            const $accordion = $(this);
            const behavior = $accordion.hasClass('magicelements-image-accordion-hover') ? 'hover' : 'click';
    
            if (!$accordion.find('.tab.active').length) {
                $accordion.find('.tab').first().addClass('active');
            }
    
            if (behavior === 'hover') {
                $accordion.on('mouseenter', '.tab', function () {
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });
            } else {
                $accordion.on('click', '.tab', function () {
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });
            }
        });
      },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);