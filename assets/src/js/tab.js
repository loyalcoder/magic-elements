import "./../scss/tab.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_tab.default": emkElementor.EmKitTab,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitTab: function ($scope) {
        $(document).ready(function() {
          // Horizontal Tab Logic
          $('.horizontal-tabs .tab').first().addClass('active');
          $('.tab-content .content').first().addClass('active');
        
          $('.horizontal-tabs .tab').on('click', function() {
            var tabId = $(this).data('tab');
            $('.horizontal-tabs .tab').removeClass('active');
            $('.tab-content .content').removeClass('active');
            $(this).addClass('active');
            $('#tab-' + tabId).addClass('active');
          });
        
          // Vertical Tab Logic
          $('.vertical-tabs .tab').first().addClass('active');
          $('.tab-content .content').first().addClass('active');
        
          $('.vertical-tabs .tab').on('click', function() {
            var tabId = $(this).data('tab');
            $('.vertical-tabs .tab').removeClass('active');
            $('.tab-content .content').removeClass('active');
            $(this).addClass('active');
            $('#tab-' + tabId).addClass('active');
          });
        });
        
        
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);