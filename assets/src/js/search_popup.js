import "./../scss/search_popup.scss";

(function ($, elementor) {
  "use strict";
  var $window = $(elementor);

  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_search_poopup.default": emkElementor.EmKitSearchPopup,
      };

      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },

    EmKitSearchPopup: function ($scope) {
      var $button = $scope.find('.emk-search-button');
      var $modal = $scope.find('.emk-search-modal');
      var $form = $modal.find('.emk-search-form');
      var $input = $form.find('.emk-search-input');

      // Open Modal
      $button.on('click', function () {
        $modal.addClass('show').fadeIn();
      });

      // Close Modal on backdrop or close button
      $modal.on('click', function (e) {
        if ($(e.target).is('.emk-search-modal') || $(e.target).is('.emk-close-btn')) {
          $modal.fadeOut().removeClass('show');
        }
      });

      // Submit Search
      $form.on('submit', function (e) {
        e.preventDefault();
        let query = $input.val().trim();
        if (query) {
          alert("You searched for: " + query);
          $modal.fadeOut().removeClass('show');
        } else {
          alert("Please enter a search term.");
        }
      });
    },
  };

  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);
