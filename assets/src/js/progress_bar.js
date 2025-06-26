import "./../scss/progress_bar.scss";

(function ($, elementor) {
    "use strict";
    var $window = $(window);

    var emkElementor = {
        onInit: function () {
            var E_FRONT = elementorFrontend;
            var widgetHandlersMap = {
                "em_kit_ptogress_bar.default": emkElementor.EmKitProgressBar,
            };

            $.each(widgetHandlersMap, function (widgetName, callback) {
                E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
            });
        },

        EmKitProgressBar: function ($scope) {
            var $progressBars = $scope.find('.magic-progress-bar-fill');
            
            // Prepare tooltips - move them outside container
            $scope.find('.magic-progress-bar-percentage-tooltip').each(function() {
                var $tooltip = $(this);
                var $wrapper = $tooltip.closest('.magic-progress-bar-wrapper');
                $wrapper.append($tooltip);
                
                // Initial positioning
                $tooltip.css({
                    'position': 'absolute',
                    'top': '-30px',
                    'right': '100%', // Start from leftmost position
                    'transform': 'translateX(50%)'
                });
            });
            
            // Initialize Intersection Observer
            if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            emkElementor.animateProgressBar(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });

                $progressBars.each(function() {
                    observer.observe(this);
                });
            } else {
                $progressBars.each(function() {
                    emkElementor.animateProgressBar(this);
                });
            }
        },

        animateProgressBar: function(bar) {
            var $bar = $(bar);
            if ($bar.hasClass('animated')) return;
            
            $bar.addClass('animated');
            
            var percent = $bar.data('percent');
            var duration = $bar.data('duration') || 1500;
            var delay = $bar.data('delay') || 0;
            
            var $wrapper = $bar.closest('.magic-progress-bar-wrapper');
            var $tooltip = $wrapper.find('.magic-progress-bar-percentage-tooltip');
            var $container = $bar.closest('.magic-progress-bar-container');
            var $percentageElements = $wrapper.find('.magic-progress-bar-percentage, .magic-progress-bar-percentage-tooltip');
            
            setTimeout(function() {
                var startTime = null;
                var containerWidth = $container.width();
                var easing = function(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }; // Quadratic easing
                
                // Initialize counter values
                var counter = { value: 0 };
                var counterInterval = 30; // ms between counter updates
                var lastCounterUpdate = 0;
                
                function animateFrame(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var elapsed = timestamp - startTime;
                    var progress = Math.min(elapsed / duration, 1);
                    var easedProgress = easing(progress);
                    
                    // Calculate current width
                    var currentPercent = easedProgress * percent;
                    var pixelWidth = (currentPercent / 100) * containerWidth;
                    
                    // Update progress bar width
                    $bar.css('width', currentPercent + '%');
                    
                    // Update tooltip position
                    if ($tooltip.length) {
                        var tooltipRight = containerWidth - pixelWidth;
                        $tooltip.css('right', tooltipRight + 'px');
                    }
                    
                    // Update counter (with separate timing for smoother numbers)
                    if (elapsed - lastCounterUpdate >= counterInterval) {
                        counter.value = Math.min(Math.floor(currentPercent), percent);
                        $percentageElements.text(counter.value + '%');
                        lastCounterUpdate = elapsed;
                    }
                    
                    // Continue animation if not complete
                    if (progress < 1) {
                        requestAnimationFrame(animateFrame);
                    } else {
                        // Ensure final value is set
                        $percentageElements.text(percent + '%');
                    }
                }
                
                // Start the animation
                requestAnimationFrame(animateFrame);
                
            }, delay);
        }
    };

    $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);