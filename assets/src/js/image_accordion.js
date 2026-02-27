import "./../scss/image_accordion.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_image_accordion.default": emkElementor.EmKitImageAccordion,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitImageAccordion: function ($scope) {
        let image_accordion = $scope.find('.accordion');
    
        image_accordion.each(function () {
            const $accordion = $(this);

            // Remove any previous handlers (use namespaced events to be safe when Elementor re-renders the widget)
            $accordion.off('.emkImageAccordion');

            // Ensure one tab is active by default
            if (!$accordion.find('.tab.active').length) {
                $accordion.find('.tab').first().addClass('active');
            }

            /**
             * Bind both hover + click once, but decide which one to respect
             * on each interaction based on the current widget classes.
             * This way, changing "Active Behavior" in the editor (which updates
             * the wrapper class via `prefix_class`) starts working immediately
             * without a full page reload.
             */
            $accordion.on('mouseenter.emkImageAccordion click.emkImageAccordion', '.tab', function (event) {
                const $tab = $(this);

                // Try to detect behavior from the widget wrapper class first (Elementor prefix_class)
                const $wrapper = $scope.closest('.elementor-widget-em_image_accordion').length
                    ? $scope.closest('.elementor-widget-em_image_accordion')
                    : $scope;

                const classAttr = ($wrapper.attr('class') || '');

                let behavior = 'click';
                if (classAttr.indexOf('emk-image-accordion-hover') !== -1) {
                    behavior = 'hover';
                } else if (classAttr.indexOf('emk-image-accordion-click') !== -1) {
                    behavior = 'click';
                } else {
                    // Fallback: read from data attribute or inner accordion class (for frontend render)
                    const behaviorAttr = $accordion.attr('data-active-behavior');
                    if (behaviorAttr === 'hover') {
                        behavior = 'hover';
                    } else if (behaviorAttr === 'click') {
                        behavior = 'click';
                    } else if ($accordion.hasClass('emk-image-accordion-hover')) {
                        behavior = 'hover';
                    }
                }

                // Ignore mismatched events (e.g. ignore click when behavior = hover)
                if (behavior === 'hover' && event.type !== 'mouseenter') {
                    return;
                }
                if (behavior === 'click' && event.type !== 'click') {
                    return;
                }

                $tab.siblings().removeClass('active');
                $tab.addClass('active');
            });
        });
    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);