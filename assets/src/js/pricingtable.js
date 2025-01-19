import "./../scss/pricingtable.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magicelements_pricing_table.default": emkElementor.magicelementsPricingtable,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },
      magicelementsPricingtable: function ($scope) {
        //  alert();
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);