import "./../scss/multi_step.scss";

(function ($, elementor) {
    "use strict";
    var $window = $(window);
  
    var emkElementor = {
        onInit: function () {
            var E_FRONT = elementorFrontend;
            var widgetHandlersMap = {
                "em_kit_multi_step.default": emkElementor.EmKitMultiStep,
            };
    
            $.each(widgetHandlersMap, function (widgetName, callback) {
                E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
            });
        },

        EmKitMultiStep: function ($scope) {
            var $container = $scope.find('.em-multi-step-wizard-container');
            if (!$container.length) return;
            
            var $indicators = $container.find('.em-step-indicator');
            var $contents = $container.find('.em-step-content');
            var $progressFill = $container.find('.em-progress-bar-fill');
            var $prevButton = $container.find('.em-prev-button');
            var $nextButton = $container.find('.em-next-button');
            var $prevArrow = $container.find('.em-step-prev');
            var $nextArrow = $container.find('.em-step-next');
            var $checkboxes = $container.find('.em-step-agree');
            var $completionPopup = $container.find('.em-step-completion-popup');
            var totalSteps = $indicators.length;
            
            // Initialize currentStep from data attribute (0-based index)
            var currentStep = parseInt($container.data('active-step')) || 0;
            
            // Ensure currentStep is within valid range
            currentStep = Math.max(0, Math.min(currentStep, totalSteps - 1));
            
            // Initialize
            updateUI();
            
            // Click on step indicators (both active and completed)
            $indicators.on('click', function() {
                var step = $(this).data('step');
                // Allow clicking on both active and completed steps
                if (step <= currentStep) {
                    currentStep = step;
                    updateUI();
                }
            });
            
            // Navigation buttons
            $prevButton.on('click', goToPrevStep);
            $nextButton.on('click', function() {
                if (validateCurrentStep()) {
                    goToNextStep();
                    checkCompletion();
                }
            });
            
            // Navigation arrows
            $prevArrow.on('click', goToPrevStep);
            $nextArrow.on('click', function() {
                if (validateCurrentStep()) {
                    goToNextStep();
                    checkCompletion();
                }
            });
            
            // Checkbox change event
            $checkboxes.on('change', function() {
                var step = $(this).data('step');
                if (step === currentStep) {
                    updateNextButtonState();
                    checkCompletion();
                }
            });
            
            // Close popup handlers
            $container.on('click', '.em-step-popup-close, .em-step-popup-button', function() {
                $completionPopup.hide();
            });
            
            // Close when clicking on overlay
            $container.on('click', '.em-step-popup-overlay', function(e) {
                if (e.target === this) {
                    $completionPopup.hide();
                }
            });
            
            // Keyboard navigation
            $(document).on('keydown.emkitmulti', function(e) {
                if ($container.is(':visible')) {
                    if (e.key === 'ArrowLeft') {
                        goToPrevStep();
                    } else if (e.key === 'ArrowRight') {
                        if (validateCurrentStep()) {
                            goToNextStep();
                            checkCompletion();
                        }
                    } else if (e.key === 'Escape' && $completionPopup.is(':visible')) {
                        $completionPopup.hide();
                    }
                }
            });
            
            function validateCurrentStep() {
                var $currentContent = $contents.eq(currentStep);
                var $checkbox = $currentContent.find('.em-step-agree');
                
                if ($checkbox.length && !$checkbox.is(':checked')) {
                    $checkbox.focus();
                    return false;
                }
                
                return true;
            }
            
            function updateNextButtonState() {
                var $currentContent = $contents.eq(currentStep);
                var $checkbox = $currentContent.find('.em-step-agree');
                var isNextAllowed = true;
                
                if ($checkbox.length) {
                    isNextAllowed = $checkbox.is(':checked');
                }
                
                $nextButton.prop('disabled', currentStep === totalSteps - 1 || !isNextAllowed);
                $nextArrow.prop('disabled', currentStep === totalSteps - 1 || !isNextAllowed);
            }
            
            function goToPrevStep() {
                if (currentStep > 0) {
                    currentStep--;
                    updateUI();
                }
            }
            
            function goToNextStep() {
                if (currentStep < totalSteps - 1) {
                    currentStep++;
                    updateUI();
                }
            }
            
            function allStepsCompleted() {
                // Check if we're on the last step
                if (currentStep !== totalSteps - 1) return false;
                
                // Check if all checkboxes are checked (if they exist)
                var allCompleted = true;
                $checkboxes.each(function() {
                    if (!$(this).is(':checked')) {
                        allCompleted = false;
                        return false; // break out of the loop
                    }
                });
                return allCompleted;
            }
            
            function checkCompletion() {
                if (allStepsCompleted()) {
                    $completionPopup.fadeIn(300);
                }
            }
            
            function updateUI() {
                // Update indicators
                $indicators.removeClass('active completed');
                $indicators.each(function(index) {
                    if (index === currentStep) {
                        $(this).addClass('active');
                    } else if (index < currentStep) {
                        $(this).addClass('completed');
                    }
                });
                
                // Update content
                $contents.removeClass('active');
                $contents.eq(currentStep).addClass('active');
                
                // Update progress bar
                var progressPercent = (currentStep / (totalSteps - 1)) * 100;
                $progressFill.css('width', progressPercent + '%');
                
                // Update buttons state
                $prevButton.prop('disabled', currentStep === 0);
                updateNextButtonState();
                
                // Update arrows state
                $prevArrow.prop('disabled', currentStep === 0);
                $nextArrow.prop('disabled', currentStep === totalSteps - 1 || 
                    ($contents.eq(currentStep).find('.em-step-agree').length && 
                     !$contents.eq(currentStep).find('.em-step-agree').is(':checked')));
            }
            
            // Cleanup event listeners when widget is removed
            $scope.on('destroy', function() {
                $(document).off('keydown.emkitmulti');
                $container.off('click');
            });
        }
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);