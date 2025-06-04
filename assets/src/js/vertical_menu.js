import "./../scss/vertical_menu.scss";

(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magic-vertical-menu.default": emkElementor.EmKitVerticalMenu,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitVerticalMenu: function ($scope) {
        let menuContainer = $scope.find('.magic-vertical-menu .menu-item-has-children > a');
        menuContainer.each(function () {
            let $this = $(this);
            let $menuItem = $this.siblings('.sub-menu');
            
            $this.on('click', function (e) {
                e.preventDefault();
                $menuItem.slideToggle();
                $menuItem.parent().toggleClass('open');
            });
        });
        
    },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);