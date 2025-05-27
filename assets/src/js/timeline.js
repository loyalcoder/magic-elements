import "./../scss/timeline.scss";
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magicelements_timeline.default": emkElementor.EmKiTimeline,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKiTimeline: function ($scope) {
        let $timelineWrappers = $scope.find('.ultimate-timeline');
    
        $timelineWrappers.each(function () {
            var $timeline = $(this);
    
            // Initialize animations
            initAnimations($timeline);

            if ($timeline.hasClass('filterable')) {
                initFiltering($timeline);
            }
        });
    
        function initAnimations($timeline) {
            if (typeof IntersectionObserver !== 'undefined') {
                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            $(entry.target).addClass('animate-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
    
                $timeline.find('.timeline-item').each(function () {
                    observer.observe(this);
                });
            } else {
                $timeline.find('.timeline-item').each(function (index) {
                    var $item = $(this);
                    setTimeout(function () {
                        $item.addClass('animate-in');
                    }, 100 * index);
                });
            }
        }
    
        function initFiltering($timeline) {
            $timeline.on('click', '.timeline-filter-button', function () {
                var $button = $(this);
                var filterValue = $button.data('filter');
    
                $timeline.find('.timeline-filter-button').removeClass('active');
                $button.addClass('active');
    
                if (filterValue === 'all') {
                    $timeline.find('.timeline-item').fadeIn(300).addClass('visible');
                } else {
                    $timeline.find('.timeline-item').removeClass('visible').fadeOut(200);
                    $timeline.find('.timeline-item[data-category="' + filterValue + '"]').fadeIn(300).addClass('visible');
                }
            });
        }
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);