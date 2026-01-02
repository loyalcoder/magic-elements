import "./../scss/nav_menu.scss"
(function ($, elementor) {
    "use strict";
    let $window = $(elementor);
  
    let emkElementor = {
      onInit: function () {
        let E_FRONT = elementorFrontend;
        let widgetHandlersMap = {
          "em_kit_nav_menu.default": emkElementor.EmKitNavMenu,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

        EmKitNavMenu: function ($scope) {   
            alert('Nav Menu Loaded');

        },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);
