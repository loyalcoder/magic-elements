(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_image_accordion.default": emkElementor.EmKitImageAccordion,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitImageAccordion: function ($scope) {
        let image_accordion = $scope.find('.accordion');
    
        image_accordion.each(function () {
            const $accordion = $(this);
            const behavior = $accordion.hasClass('emk-image-accordion-hover') ? 'hover' : 'click';
    
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