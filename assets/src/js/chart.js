import "./../scss/chart.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_chart.default": emkElementor.EmKitchart,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitchart: function ($scope) {
       
var btn = document.getElementById('toggle');
var wrap = document.getElementById('wrap');
btn.addEventListener('click', function(e) {
  wrap.className = "";
  setTimeout(function() {
    wrap.className = "animated";
  },3000);
});
setTimeout(function() {
  wrap.className = "animated";
},1000);
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);