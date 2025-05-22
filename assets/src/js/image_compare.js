(function ($, elementor) {
    "use strict";
    let $window = $(elementor);
  
    let emkElementor = {
      onInit: function () {
        let E_FRONT = elementorFrontend;
        let widgetHandlersMap = {
          "em_kit_image_compare.default": emkElementor.EmKitImageCompare,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitImageCompare: function ($scope) {
        
            $('.image-compare').each(function () {
            let $this = $(this);
            let orientation = $this.data('orientation') || 'horizontal';
            let beforeLabel = $this.data('before-label') || 'Before';
            let afterLabel = $this.data('after-label') || 'After';

            $this.twentytwenty({
                default_offset_pct: 0.5,
                orientation: orientation,
                before_label: beforeLabel,
                after_label: afterLabel,
                no_overlay: false,
            });
        });
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);