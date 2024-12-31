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
          // Activate the first tab by default
          $('.tab').first().addClass('active');
          $('.content').first().addClass('active');
        
          // On tab click, show the corresponding content
          $('.tab').on('click', function() {
            var tabId = $(this).data('tab');
        
            // Remove active class from all tabs and contents
            $('.tab').removeClass('active');
            $('.content').removeClass('active');
        
            // Add active class to clicked tab and corresponding content
            $(this).addClass('active');
            $('#tab-' + tabId).addClass('active');
          });
        });
        
        
        
        
        
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);