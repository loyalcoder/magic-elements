/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/multi_step.js":
/*!*************************************!*\
  !*** ./assets/src/js/multi_step.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_multi_step_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/multi_step.scss */ "./assets/src/scss/multi_step.scss");

(function ($, elementor) {
  "use strict";

  var $window = $(window);
  var emkElementor = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "em_kit_multi_step.default": emkElementor.EmKitMultiStep
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
      $indicators.on('click', function () {
        var step = $(this).data('step');
        // Allow clicking on both active and completed steps
        if (step <= currentStep) {
          currentStep = step;
          updateUI();
        }
      });

      // Navigation buttons
      $prevButton.on('click', goToPrevStep);
      $nextButton.on('click', function () {
        if (validateCurrentStep()) {
          goToNextStep();
          checkCompletion();
        }
      });

      // Navigation arrows
      $prevArrow.on('click', goToPrevStep);
      $nextArrow.on('click', function () {
        if (validateCurrentStep()) {
          goToNextStep();
          checkCompletion();
        }
      });

      // Checkbox change event
      $checkboxes.on('change', function () {
        var step = $(this).data('step');
        if (step === currentStep) {
          updateNextButtonState();
          checkCompletion();
        }
      });

      // Close popup handlers
      $container.on('click', '.em-step-popup-close, .em-step-popup-button', function () {
        $completionPopup.hide();
      });

      // Close when clicking on overlay
      $container.on('click', '.em-step-popup-overlay', function (e) {
        if (e.target === this) {
          $completionPopup.hide();
        }
      });

      // Keyboard navigation
      $(document).on('keydown.emkitmulti', function (e) {
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
        $checkboxes.each(function () {
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
        $indicators.each(function (index) {
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
        var progressPercent = currentStep / (totalSteps - 1) * 100;
        $progressFill.css('width', progressPercent + '%');

        // Update buttons state
        $prevButton.prop('disabled', currentStep === 0);
        updateNextButtonState();

        // Update arrows state
        $prevArrow.prop('disabled', currentStep === 0);
        $nextArrow.prop('disabled', currentStep === totalSteps - 1 || $contents.eq(currentStep).find('.em-step-agree').length && !$contents.eq(currentStep).find('.em-step-agree').is(':checked'));
      }

      // Cleanup event listeners when widget is removed
      $scope.on('destroy', function () {
        $(document).off('keydown.emkitmulti');
        $container.off('click');
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ }),

/***/ "./assets/src/scss/multi_step.scss":
/*!*****************************************!*\
  !*** ./assets/src/scss/multi_step.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./assets/src/scss/multi_step.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/multi_step.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlfc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUM7QUFFbkMsQ0FBQyxVQUFVQSxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyQixZQUFZOztFQUNaLElBQUlDLE9BQU8sR0FBR0YsQ0FBQyxDQUFDRyxNQUFNLENBQUM7RUFFdkIsSUFBSUMsWUFBWSxHQUFHO0lBQ2ZDLE1BQU0sRUFBRSxTQUFBQSxDQUFBLEVBQVk7TUFDaEIsSUFBSUMsT0FBTyxHQUFHQyxpQkFBaUI7TUFDL0IsSUFBSUMsaUJBQWlCLEdBQUc7UUFDcEIsMkJBQTJCLEVBQUVKLFlBQVksQ0FBQ0s7TUFDOUMsQ0FBQztNQUVEVCxDQUFDLENBQUNVLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsVUFBVUcsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFDdEROLE9BQU8sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLENBQUMseUJBQXlCLEdBQUdILFVBQVUsRUFBRUMsUUFBUSxDQUFDO01BQzdFLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFREgsY0FBYyxFQUFFLFNBQUFBLENBQVVNLE1BQU0sRUFBRTtNQUM5QixJQUFJQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO01BQy9ELElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxNQUFNLEVBQUU7TUFFeEIsSUFBSUMsV0FBVyxHQUFHSCxVQUFVLENBQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztNQUN2RCxJQUFJRyxTQUFTLEdBQUdKLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDO01BQ25ELElBQUlJLGFBQWEsR0FBR0wsVUFBVSxDQUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7TUFDNUQsSUFBSUssV0FBVyxHQUFHTixVQUFVLENBQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztNQUNwRCxJQUFJTSxXQUFXLEdBQUdQLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDO01BQ3BELElBQUlPLFVBQVUsR0FBR1IsVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO01BQ2pELElBQUlRLFVBQVUsR0FBR1QsVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO01BQ2pELElBQUlTLFdBQVcsR0FBR1YsVUFBVSxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7TUFDbkQsSUFBSVUsZ0JBQWdCLEdBQUdYLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLDJCQUEyQixDQUFDO01BQ25FLElBQUlXLFVBQVUsR0FBR1QsV0FBVyxDQUFDRCxNQUFNOztNQUVuQztNQUNBLElBQUlXLFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxVQUFVLENBQUNlLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7O01BRS9EO01BQ0FGLFdBQVcsR0FBR0csSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0wsV0FBVyxFQUFFRCxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O01BRWhFO01BQ0FPLFFBQVEsQ0FBQyxDQUFDOztNQUVWO01BQ0FoQixXQUFXLENBQUNpQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7UUFDL0IsSUFBSUMsSUFBSSxHQUFHckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQjtRQUNBLElBQUlNLElBQUksSUFBSVIsV0FBVyxFQUFFO1VBQ3JCQSxXQUFXLEdBQUdRLElBQUk7VUFDbEJGLFFBQVEsQ0FBQyxDQUFDO1FBQ2Q7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQWIsV0FBVyxDQUFDYyxFQUFFLENBQUMsT0FBTyxFQUFFRSxZQUFZLENBQUM7TUFDckNmLFdBQVcsQ0FBQ2EsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQy9CLElBQUlHLG1CQUFtQixDQUFDLENBQUMsRUFBRTtVQUN2QkMsWUFBWSxDQUFDLENBQUM7VUFDZEMsZUFBZSxDQUFDLENBQUM7UUFDckI7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQWpCLFVBQVUsQ0FBQ1ksRUFBRSxDQUFDLE9BQU8sRUFBRUUsWUFBWSxDQUFDO01BQ3BDYixVQUFVLENBQUNXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztRQUM5QixJQUFJRyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUU7VUFDdkJDLFlBQVksQ0FBQyxDQUFDO1VBQ2RDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDOztNQUVGO01BQ0FmLFdBQVcsQ0FBQ1UsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO1FBQ2hDLElBQUlDLElBQUksR0FBR3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSU0sSUFBSSxLQUFLUixXQUFXLEVBQUU7VUFDdEJhLHFCQUFxQixDQUFDLENBQUM7VUFDdkJELGVBQWUsQ0FBQyxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDOztNQUVGO01BQ0F6QixVQUFVLENBQUNvQixFQUFFLENBQUMsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLFlBQVc7UUFDN0VULGdCQUFnQixDQUFDZ0IsSUFBSSxDQUFDLENBQUM7TUFDM0IsQ0FBQyxDQUFDOztNQUVGO01BQ0EzQixVQUFVLENBQUNvQixFQUFFLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVNRLENBQUMsRUFBRTtRQUN6RCxJQUFJQSxDQUFDLENBQUNDLE1BQU0sS0FBSyxJQUFJLEVBQUU7VUFDbkJsQixnQkFBZ0IsQ0FBQ2dCLElBQUksQ0FBQyxDQUFDO1FBQzNCO01BQ0osQ0FBQyxDQUFDOztNQUVGO01BQ0EzQyxDQUFDLENBQUM4QyxRQUFRLENBQUMsQ0FBQ1YsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFVBQVNRLENBQUMsRUFBRTtRQUM3QyxJQUFJNUIsVUFBVSxDQUFDK0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1VBQzNCLElBQUlILENBQUMsQ0FBQ0ksR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUN2QlYsWUFBWSxDQUFDLENBQUM7VUFDbEIsQ0FBQyxNQUFNLElBQUlNLENBQUMsQ0FBQ0ksR0FBRyxLQUFLLFlBQVksRUFBRTtZQUMvQixJQUFJVCxtQkFBbUIsQ0FBQyxDQUFDLEVBQUU7Y0FDdkJDLFlBQVksQ0FBQyxDQUFDO2NBQ2RDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JCO1VBQ0osQ0FBQyxNQUFNLElBQUlHLENBQUMsQ0FBQ0ksR0FBRyxLQUFLLFFBQVEsSUFBSXJCLGdCQUFnQixDQUFDb0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlEcEIsZ0JBQWdCLENBQUNnQixJQUFJLENBQUMsQ0FBQztVQUMzQjtRQUNKO01BQ0osQ0FBQyxDQUFDO01BRUYsU0FBU0osbUJBQW1CQSxDQUFBLEVBQUc7UUFDM0IsSUFBSVUsZUFBZSxHQUFHN0IsU0FBUyxDQUFDOEIsRUFBRSxDQUFDckIsV0FBVyxDQUFDO1FBQy9DLElBQUlzQixTQUFTLEdBQUdGLGVBQWUsQ0FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUV0RCxJQUFJa0MsU0FBUyxDQUFDakMsTUFBTSxJQUFJLENBQUNpQyxTQUFTLENBQUNKLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUMvQ0ksU0FBUyxDQUFDQyxLQUFLLENBQUMsQ0FBQztVQUNqQixPQUFPLEtBQUs7UUFDaEI7UUFFQSxPQUFPLElBQUk7TUFDZjtNQUVBLFNBQVNWLHFCQUFxQkEsQ0FBQSxFQUFHO1FBQzdCLElBQUlPLGVBQWUsR0FBRzdCLFNBQVMsQ0FBQzhCLEVBQUUsQ0FBQ3JCLFdBQVcsQ0FBQztRQUMvQyxJQUFJc0IsU0FBUyxHQUFHRixlQUFlLENBQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEQsSUFBSW9DLGFBQWEsR0FBRyxJQUFJO1FBRXhCLElBQUlGLFNBQVMsQ0FBQ2pDLE1BQU0sRUFBRTtVQUNsQm1DLGFBQWEsR0FBR0YsU0FBUyxDQUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO1FBQzVDO1FBRUF4QixXQUFXLENBQUMrQixJQUFJLENBQUMsVUFBVSxFQUFFekIsV0FBVyxLQUFLRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUN5QixhQUFhLENBQUM7UUFDOUU1QixVQUFVLENBQUM2QixJQUFJLENBQUMsVUFBVSxFQUFFekIsV0FBVyxLQUFLRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUN5QixhQUFhLENBQUM7TUFDakY7TUFFQSxTQUFTZixZQUFZQSxDQUFBLEVBQUc7UUFDcEIsSUFBSVQsV0FBVyxHQUFHLENBQUMsRUFBRTtVQUNqQkEsV0FBVyxFQUFFO1VBQ2JNLFFBQVEsQ0FBQyxDQUFDO1FBQ2Q7TUFDSjtNQUVBLFNBQVNLLFlBQVlBLENBQUEsRUFBRztRQUNwQixJQUFJWCxXQUFXLEdBQUdELFVBQVUsR0FBRyxDQUFDLEVBQUU7VUFDOUJDLFdBQVcsRUFBRTtVQUNiTSxRQUFRLENBQUMsQ0FBQztRQUNkO01BQ0o7TUFFQSxTQUFTb0IsaUJBQWlCQSxDQUFBLEVBQUc7UUFDekI7UUFDQSxJQUFJMUIsV0FBVyxLQUFLRCxVQUFVLEdBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSzs7UUFFaEQ7UUFDQSxJQUFJNEIsWUFBWSxHQUFHLElBQUk7UUFDdkI5QixXQUFXLENBQUNoQixJQUFJLENBQUMsWUFBVztVQUN4QixJQUFJLENBQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQytDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QlMsWUFBWSxHQUFHLEtBQUs7WUFDcEIsT0FBTyxLQUFLLENBQUMsQ0FBQztVQUNsQjtRQUNKLENBQUMsQ0FBQztRQUNGLE9BQU9BLFlBQVk7TUFDdkI7TUFFQSxTQUFTZixlQUFlQSxDQUFBLEVBQUc7UUFDdkIsSUFBSWMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO1VBQ3JCNUIsZ0JBQWdCLENBQUM4QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2hDO01BQ0o7TUFFQSxTQUFTdEIsUUFBUUEsQ0FBQSxFQUFHO1FBQ2hCO1FBQ0FoQixXQUFXLENBQUN1QyxXQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDM0N2QyxXQUFXLENBQUNULElBQUksQ0FBQyxVQUFTaUQsS0FBSyxFQUFFO1VBQzdCLElBQUlBLEtBQUssS0FBSzlCLFdBQVcsRUFBRTtZQUN2QjdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRELFFBQVEsQ0FBQyxRQUFRLENBQUM7VUFDOUIsQ0FBQyxNQUFNLElBQUlELEtBQUssR0FBRzlCLFdBQVcsRUFBRTtZQUM1QjdCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRELFFBQVEsQ0FBQyxXQUFXLENBQUM7VUFDakM7UUFDSixDQUFDLENBQUM7O1FBRUY7UUFDQXhDLFNBQVMsQ0FBQ3NDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDL0J0QyxTQUFTLENBQUM4QixFQUFFLENBQUNyQixXQUFXLENBQUMsQ0FBQytCLFFBQVEsQ0FBQyxRQUFRLENBQUM7O1FBRTVDO1FBQ0EsSUFBSUMsZUFBZSxHQUFJaEMsV0FBVyxJQUFJRCxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUksR0FBRztRQUM1RFAsYUFBYSxDQUFDeUMsR0FBRyxDQUFDLE9BQU8sRUFBRUQsZUFBZSxHQUFHLEdBQUcsQ0FBQzs7UUFFakQ7UUFDQXZDLFdBQVcsQ0FBQ2dDLElBQUksQ0FBQyxVQUFVLEVBQUV6QixXQUFXLEtBQUssQ0FBQyxDQUFDO1FBQy9DYSxxQkFBcUIsQ0FBQyxDQUFDOztRQUV2QjtRQUNBbEIsVUFBVSxDQUFDOEIsSUFBSSxDQUFDLFVBQVUsRUFBRXpCLFdBQVcsS0FBSyxDQUFDLENBQUM7UUFDOUNKLFVBQVUsQ0FBQzZCLElBQUksQ0FBQyxVQUFVLEVBQUV6QixXQUFXLEtBQUtELFVBQVUsR0FBRyxDQUFDLElBQ3JEUixTQUFTLENBQUM4QixFQUFFLENBQUNyQixXQUFXLENBQUMsQ0FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sSUFDdkQsQ0FBQ0UsU0FBUyxDQUFDOEIsRUFBRSxDQUFDckIsV0FBVyxDQUFDLENBQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOEIsRUFBRSxDQUFDLFVBQVUsQ0FBRSxDQUFDO01BQzNFOztNQUVBO01BQ0FoQyxNQUFNLENBQUNxQixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVc7UUFDNUJwQyxDQUFDLENBQUM4QyxRQUFRLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQy9DLFVBQVUsQ0FBQytDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ3RCxPQUFPLENBQUNrQyxFQUFFLENBQUMseUJBQXlCLEVBQUVoQyxZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM5RCxDQUFDLEVBQUUyRCxNQUFNLEVBQUU3RCxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDOU1sQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbXVsdGlfc3RlcC5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL211bHRpX3N0ZXAuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL211bHRpX3N0ZXAuc2Nzc1wiO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgXHJcbiAgICB2YXIgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0SGFuZGxlcnNNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBcImVtX2tpdF9tdWx0aV9zdGVwLmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0TXVsdGlTdGVwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEVtS2l0TXVsdGlTdGVwOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJHNjb3BlLmZpbmQoJy5lbS1tdWx0aS1zdGVwLXdpemFyZC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgaWYgKCEkY29udGFpbmVyLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3JzID0gJGNvbnRhaW5lci5maW5kKCcuZW0tc3RlcC1pbmRpY2F0b3InKTtcclxuICAgICAgICAgICAgdmFyICRjb250ZW50cyA9ICRjb250YWluZXIuZmluZCgnLmVtLXN0ZXAtY29udGVudCcpO1xyXG4gICAgICAgICAgICB2YXIgJHByb2dyZXNzRmlsbCA9ICRjb250YWluZXIuZmluZCgnLmVtLXByb2dyZXNzLWJhci1maWxsJyk7XHJcbiAgICAgICAgICAgIHZhciAkcHJldkJ1dHRvbiA9ICRjb250YWluZXIuZmluZCgnLmVtLXByZXYtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHZhciAkbmV4dEJ1dHRvbiA9ICRjb250YWluZXIuZmluZCgnLmVtLW5leHQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHZhciAkcHJldkFycm93ID0gJGNvbnRhaW5lci5maW5kKCcuZW0tc3RlcC1wcmV2Jyk7XHJcbiAgICAgICAgICAgIHZhciAkbmV4dEFycm93ID0gJGNvbnRhaW5lci5maW5kKCcuZW0tc3RlcC1uZXh0Jyk7XHJcbiAgICAgICAgICAgIHZhciAkY2hlY2tib3hlcyA9ICRjb250YWluZXIuZmluZCgnLmVtLXN0ZXAtYWdyZWUnKTtcclxuICAgICAgICAgICAgdmFyICRjb21wbGV0aW9uUG9wdXAgPSAkY29udGFpbmVyLmZpbmQoJy5lbS1zdGVwLWNvbXBsZXRpb24tcG9wdXAnKTtcclxuICAgICAgICAgICAgdmFyIHRvdGFsU3RlcHMgPSAkaW5kaWNhdG9ycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGN1cnJlbnRTdGVwIGZyb20gZGF0YSBhdHRyaWJ1dGUgKDAtYmFzZWQgaW5kZXgpXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RlcCA9IHBhcnNlSW50KCRjb250YWluZXIuZGF0YSgnYWN0aXZlLXN0ZXAnKSkgfHwgMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVuc3VyZSBjdXJyZW50U3RlcCBpcyB3aXRoaW4gdmFsaWQgcmFuZ2VcclxuICAgICAgICAgICAgY3VycmVudFN0ZXAgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjdXJyZW50U3RlcCwgdG90YWxTdGVwcyAtIDEpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemVcclxuICAgICAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENsaWNrIG9uIHN0ZXAgaW5kaWNhdG9ycyAoYm90aCBhY3RpdmUgYW5kIGNvbXBsZXRlZClcclxuICAgICAgICAgICAgJGluZGljYXRvcnMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9ICQodGhpcykuZGF0YSgnc3RlcCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgY2xpY2tpbmcgb24gYm90aCBhY3RpdmUgYW5kIGNvbXBsZXRlZCBzdGVwc1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPD0gY3VycmVudFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBOYXZpZ2F0aW9uIGJ1dHRvbnNcclxuICAgICAgICAgICAgJHByZXZCdXR0b24ub24oJ2NsaWNrJywgZ29Ub1ByZXZTdGVwKTtcclxuICAgICAgICAgICAgJG5leHRCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVDdXJyZW50U3RlcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29Ub05leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgICAgICAgICAgJHByZXZBcnJvdy5vbignY2xpY2snLCBnb1RvUHJldlN0ZXApO1xyXG4gICAgICAgICAgICAkbmV4dEFycm93Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlQ3VycmVudFN0ZXAoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdvVG9OZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ29tcGxldGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENoZWNrYm94IGNoYW5nZSBldmVudFxyXG4gICAgICAgICAgICAkY2hlY2tib3hlcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcCA9ICQodGhpcykuZGF0YSgnc3RlcCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2xvc2UgcG9wdXAgaGFuZGxlcnNcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmVtLXN0ZXAtcG9wdXAtY2xvc2UsIC5lbS1zdGVwLXBvcHVwLWJ1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJGNvbXBsZXRpb25Qb3B1cC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2xvc2Ugd2hlbiBjbGlja2luZyBvbiBvdmVybGF5XHJcbiAgICAgICAgICAgICRjb250YWluZXIub24oJ2NsaWNrJywgJy5lbS1zdGVwLXBvcHVwLW92ZXJsYXknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkY29tcGxldGlvblBvcHVwLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLmVta2l0bXVsdGknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29Ub1ByZXZTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUN1cnJlbnRTdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvVG9OZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiAkY29tcGxldGlvblBvcHVwLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb21wbGV0aW9uUG9wdXAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUN1cnJlbnRTdGVwKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjdXJyZW50Q29udGVudCA9ICRjb250ZW50cy5lcShjdXJyZW50U3RlcCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGNoZWNrYm94ID0gJGN1cnJlbnRDb250ZW50LmZpbmQoJy5lbS1zdGVwLWFncmVlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tib3gubGVuZ3RoICYmICEkY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2tib3guZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVOZXh0QnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRDb250ZW50ID0gJGNvbnRlbnRzLmVxKGN1cnJlbnRTdGVwKTtcclxuICAgICAgICAgICAgICAgIHZhciAkY2hlY2tib3ggPSAkY3VycmVudENvbnRlbnQuZmluZCgnLmVtLXN0ZXAtYWdyZWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc05leHRBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2JveC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc05leHRBbGxvd2VkID0gJGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkbmV4dEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRTdGVwID09PSB0b3RhbFN0ZXBzIC0gMSB8fCAhaXNOZXh0QWxsb3dlZCk7XHJcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93LnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFN0ZXAgPT09IHRvdGFsU3RlcHMgLSAxIHx8ICFpc05leHRBbGxvd2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ29Ub1ByZXZTdGVwKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ29Ub05leHRTdGVwKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwIDwgdG90YWxTdGVwcyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVJKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFsbFN0ZXBzQ29tcGxldGVkKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgb24gdGhlIGxhc3Qgc3RlcFxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGVwICE9PSB0b3RhbFN0ZXBzIC0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgY2hlY2tib3hlcyBhcmUgY2hlY2tlZCAoaWYgdGhleSBleGlzdClcclxuICAgICAgICAgICAgICAgIHZhciBhbGxDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgJGNoZWNrYm94ZXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsQ29tcGxldGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja0NvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3RlcHNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb21wbGV0aW9uUG9wdXAuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcclxuICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzLnJlbW92ZUNsYXNzKCdhY3RpdmUgY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgY3VycmVudFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRzLmVxKGN1cnJlbnRTdGVwKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc1BlcmNlbnQgPSAoY3VycmVudFN0ZXAgLyAodG90YWxTdGVwcyAtIDEpKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICRwcm9ncmVzc0ZpbGwuY3NzKCd3aWR0aCcsIHByb2dyZXNzUGVyY2VudCArICclJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBidXR0b25zIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAkcHJldkJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRTdGVwID09PSAwKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU5leHRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXJyb3dzIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAkcHJldkFycm93LnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFN0ZXAgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdy5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRTdGVwID09PSB0b3RhbFN0ZXBzIC0gMSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAoJGNvbnRlbnRzLmVxKGN1cnJlbnRTdGVwKS5maW5kKCcuZW0tc3RlcC1hZ3JlZScpLmxlbmd0aCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgISRjb250ZW50cy5lcShjdXJyZW50U3RlcCkuZmluZCgnLmVtLXN0ZXAtYWdyZWUnKS5pcygnOmNoZWNrZWQnKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbGVhbnVwIGV2ZW50IGxpc3RlbmVycyB3aGVuIHdpZGdldCBpcyByZW1vdmVkXHJcbiAgICAgICAgICAgICRzY29wZS5vbignZGVzdHJveScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmVta2l0bXVsdGknKTtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIub2ZmKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG59KShqUXVlcnksIHdpbmRvdyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9tdWx0aV9zdGVwLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbXVsdGlfc3RlcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsIndpbmRvdyIsImVta0VsZW1lbnRvciIsIm9uSW5pdCIsIkVfRlJPTlQiLCJlbGVtZW50b3JGcm9udGVuZCIsIndpZGdldEhhbmRsZXJzTWFwIiwiRW1LaXRNdWx0aVN0ZXAiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkY29udGFpbmVyIiwiZmluZCIsImxlbmd0aCIsIiRpbmRpY2F0b3JzIiwiJGNvbnRlbnRzIiwiJHByb2dyZXNzRmlsbCIsIiRwcmV2QnV0dG9uIiwiJG5leHRCdXR0b24iLCIkcHJldkFycm93IiwiJG5leHRBcnJvdyIsIiRjaGVja2JveGVzIiwiJGNvbXBsZXRpb25Qb3B1cCIsInRvdGFsU3RlcHMiLCJjdXJyZW50U3RlcCIsInBhcnNlSW50IiwiZGF0YSIsIk1hdGgiLCJtYXgiLCJtaW4iLCJ1cGRhdGVVSSIsIm9uIiwic3RlcCIsImdvVG9QcmV2U3RlcCIsInZhbGlkYXRlQ3VycmVudFN0ZXAiLCJnb1RvTmV4dFN0ZXAiLCJjaGVja0NvbXBsZXRpb24iLCJ1cGRhdGVOZXh0QnV0dG9uU3RhdGUiLCJoaWRlIiwiZSIsInRhcmdldCIsImRvY3VtZW50IiwiaXMiLCJrZXkiLCIkY3VycmVudENvbnRlbnQiLCJlcSIsIiRjaGVja2JveCIsImZvY3VzIiwiaXNOZXh0QWxsb3dlZCIsInByb3AiLCJhbGxTdGVwc0NvbXBsZXRlZCIsImFsbENvbXBsZXRlZCIsImZhZGVJbiIsInJlbW92ZUNsYXNzIiwiaW5kZXgiLCJhZGRDbGFzcyIsInByb2dyZXNzUGVyY2VudCIsImNzcyIsIm9mZiIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=