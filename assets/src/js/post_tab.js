import "./../scss/post_tab.scss";
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_post_tab.default": emkElementor.EmKitPostTab,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitPostTab: function ($scope) {
        jQuery(document).ready(function ($) {
          // Initially show all posts
          $('.post-item').show();
      
          // Tab click event
          $('.nav-link').on('click', function () {
              // Remove active class from all tabs
              $('.nav-link').removeClass('active');
              // Add active class to clicked tab
              $(this).addClass('active');
      
              // Get the category ID from the clicked tab
              const category = $(this).data('category');
      
              // Show/hide posts based on category
              if (category === 'all') {
                  $('.post-item').show(); // Show all posts
              } else {
                  $('.post-item').hide(); // Hide all posts
                  $('.post-item.category-' + category).show(); // Show posts with selected category
              }
          });
      });
      
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);