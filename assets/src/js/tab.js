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
        let tabs = $scope.find('.tabs-container');
    
        tabs.each(function () {
            const $tabsContainer = $(this);
    
            // Activate the first tab and its corresponding content by default
            if (!$tabsContainer.find('.tab.active').length) {
                $tabsContainer.find('.tab').first().addClass('active');
                const firstTabId = $tabsContainer.find('.tab').first().data('tab');
                $tabsContainer.find('#tab-' + firstTabId).addClass('active');
            }
    
            // On tab click, show the corresponding content
            $tabsContainer.on('click', '.tab', function () {
                const tabId = $(this).data('tab');
    
                // Remove active class from all tabs and contents
                $tabsContainer.find('.tab').removeClass('active');
                $tabsContainer.find('.content').removeClass('active');
    
                // Add active class to clicked tab and its corresponding content
                $(this).addClass('active');
                $tabsContainer.find('#tab-' + tabId).addClass('active');
            });
        });
    },
    
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);