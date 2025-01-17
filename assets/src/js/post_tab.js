import "./../scss/post_tab.scss";
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magicelements_post_tab.default": emkElementor.magicelementsPostTab,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      magicelementsPostTab: function ($scope) {
        let navLinks = $scope.find('.nav-link');
        let postItems = $scope.find('.post-item');
    
        // Initially show all posts
        postItems.show();
    
        // Tab click event
        navLinks.on('click', function () {
            let $clickedTab = $(this);
            let category = $clickedTab.data('category');
    
            // Remove active class from all tabs and add it to the clicked tab
            navLinks.removeClass('active');
            $clickedTab.addClass('active');
    
            // Show or hide posts based on the category
            if (category === 'all') {
                postItems.show(); // Show all posts
            } else {
                postItems.hide(); // Hide all posts
                postItems.filter('.category-' + category).show(); // Show posts with the selected category
            }
        });
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);