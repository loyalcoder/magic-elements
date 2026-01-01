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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNxQixFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVc7UUFDNUJwQyxDQUFDLENBQUM4QyxRQUFRLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQy9DLFVBQVUsQ0FBQytDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDM0IsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ3RCxPQUFPLENBQUNrQyxFQUFFLENBQUMseUJBQXlCLEVBQUVoQyxZQUFZLENBQUNDLE1BQU0sQ0FBQztBQUM5RCxDQUFDLEVBQUUyRCxNQUFNLEVBQUU3RCxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDOU1sQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbXVsdGlfc3RlcC5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL211bHRpX3N0ZXAuc2Nzcz9jNmU0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvbXVsdGlfc3RlcC5zY3NzXCI7XHJcblxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuICBcclxuICAgIHZhciBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgICAgICAgIFwiZW1fa2l0X211bHRpX3N0ZXAuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXRNdWx0aVN0ZXAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgRW1LaXRNdWx0aVN0ZXA6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSAkc2NvcGUuZmluZCgnLmVtLW11bHRpLXN0ZXAtd2l6YXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBpZiAoISRjb250YWluZXIubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgJGluZGljYXRvcnMgPSAkY29udGFpbmVyLmZpbmQoJy5lbS1zdGVwLWluZGljYXRvcicpO1xyXG4gICAgICAgICAgICB2YXIgJGNvbnRlbnRzID0gJGNvbnRhaW5lci5maW5kKCcuZW0tc3RlcC1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIHZhciAkcHJvZ3Jlc3NGaWxsID0gJGNvbnRhaW5lci5maW5kKCcuZW0tcHJvZ3Jlc3MtYmFyLWZpbGwnKTtcclxuICAgICAgICAgICAgdmFyICRwcmV2QnV0dG9uID0gJGNvbnRhaW5lci5maW5kKCcuZW0tcHJldi1idXR0b24nKTtcclxuICAgICAgICAgICAgdmFyICRuZXh0QnV0dG9uID0gJGNvbnRhaW5lci5maW5kKCcuZW0tbmV4dC1idXR0b24nKTtcclxuICAgICAgICAgICAgdmFyICRwcmV2QXJyb3cgPSAkY29udGFpbmVyLmZpbmQoJy5lbS1zdGVwLXByZXYnKTtcclxuICAgICAgICAgICAgdmFyICRuZXh0QXJyb3cgPSAkY29udGFpbmVyLmZpbmQoJy5lbS1zdGVwLW5leHQnKTtcclxuICAgICAgICAgICAgdmFyICRjaGVja2JveGVzID0gJGNvbnRhaW5lci5maW5kKCcuZW0tc3RlcC1hZ3JlZScpO1xyXG4gICAgICAgICAgICB2YXIgJGNvbXBsZXRpb25Qb3B1cCA9ICRjb250YWluZXIuZmluZCgnLmVtLXN0ZXAtY29tcGxldGlvbi1wb3B1cCcpO1xyXG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICRpbmRpY2F0b3JzLmxlbmd0aDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgY3VycmVudFN0ZXAgZnJvbSBkYXRhIGF0dHJpYnV0ZSAoMC1iYXNlZCBpbmRleClcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGVwID0gcGFyc2VJbnQoJGNvbnRhaW5lci5kYXRhKCdhY3RpdmUtc3RlcCcpKSB8fCAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRW5zdXJlIGN1cnJlbnRTdGVwIGlzIHdpdGhpbiB2YWxpZCByYW5nZVxyXG4gICAgICAgICAgICBjdXJyZW50U3RlcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGN1cnJlbnRTdGVwLCB0b3RhbFN0ZXBzIC0gMSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZVxyXG4gICAgICAgICAgICB1cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2xpY2sgb24gc3RlcCBpbmRpY2F0b3JzIChib3RoIGFjdGl2ZSBhbmQgY29tcGxldGVkKVxyXG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gJCh0aGlzKS5kYXRhKCdzdGVwJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBjbGlja2luZyBvbiBib3RoIGFjdGl2ZSBhbmQgY29tcGxldGVkIHN0ZXBzXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA8PSBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0gc3RlcDtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE5hdmlnYXRpb24gYnV0dG9uc1xyXG4gICAgICAgICAgICAkcHJldkJ1dHRvbi5vbignY2xpY2snLCBnb1RvUHJldlN0ZXApO1xyXG4gICAgICAgICAgICAkbmV4dEJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUN1cnJlbnRTdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBnb1RvTmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBsZXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICAgICAgICAkcHJldkFycm93Lm9uKCdjbGljaycsIGdvVG9QcmV2U3RlcCk7XHJcbiAgICAgICAgICAgICRuZXh0QXJyb3cub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVDdXJyZW50U3RlcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29Ub05leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hlY2tib3ggY2hhbmdlIGV2ZW50XHJcbiAgICAgICAgICAgICRjaGVja2JveGVzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gJCh0aGlzKS5kYXRhKCdzdGVwJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gY3VycmVudFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOZXh0QnV0dG9uU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBsZXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbG9zZSBwb3B1cCBoYW5kbGVyc1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLm9uKCdjbGljaycsICcuZW0tc3RlcC1wb3B1cC1jbG9zZSwgLmVtLXN0ZXAtcG9wdXAtYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkY29tcGxldGlvblBvcHVwLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDbG9zZSB3aGVuIGNsaWNraW5nIG9uIG92ZXJsYXlcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmVtLXN0ZXAtcG9wdXAtb3ZlcmxheScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb21wbGV0aW9uUG9wdXAuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleWRvd24uZW1raXRtdWx0aScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb1RvUHJldlN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlQ3VycmVudFN0ZXAoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29Ub05leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0NvbXBsZXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmICRjb21wbGV0aW9uUG9wdXAuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbXBsZXRpb25Qb3B1cC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ3VycmVudFN0ZXAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRDb250ZW50ID0gJGNvbnRlbnRzLmVxKGN1cnJlbnRTdGVwKTtcclxuICAgICAgICAgICAgICAgIHZhciAkY2hlY2tib3ggPSAkY3VycmVudENvbnRlbnQuZmluZCgnLmVtLXN0ZXAtYWdyZWUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2JveC5sZW5ndGggJiYgISRjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVja2JveC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU5leHRCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkY3VycmVudENvbnRlbnQgPSAkY29udGVudHMuZXEoY3VycmVudFN0ZXApO1xyXG4gICAgICAgICAgICAgICAgdmFyICRjaGVja2JveCA9ICRjdXJyZW50Q29udGVudC5maW5kKCcuZW0tc3RlcC1hZ3JlZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzTmV4dEFsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrYm94Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTmV4dEFsbG93ZWQgPSAkY2hlY2tib3guaXMoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRuZXh0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFN0ZXAgPT09IHRvdGFsU3RlcHMgLSAxIHx8ICFpc05leHRBbGxvd2VkKTtcclxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3cucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50U3RlcCA9PT0gdG90YWxTdGVwcyAtIDEgfHwgIWlzTmV4dEFsbG93ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnb1RvUHJldlN0ZXAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXAtLTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVVSSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnb1RvTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAgPCB0b3RhbFN0ZXBzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gYWxsU3RlcHNDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSdyZSBvbiB0aGUgbGFzdCBzdGVwXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAgIT09IHRvdGFsU3RlcHMgLSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGFsbCBjaGVja2JveGVzIGFyZSBjaGVja2VkIChpZiB0aGV5IGV4aXN0KVxyXG4gICAgICAgICAgICAgICAgdmFyIGFsbENvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkY2hlY2tib3hlcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVhayBvdXQgb2YgdGhlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGxDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ29tcGxldGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxTdGVwc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBsZXRpb25Qb3B1cC5mYWRlSW4oMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlVUkoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgJGluZGljYXRvcnMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkY29udGVudHMuZXEoY3VycmVudFN0ZXApLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByb2dyZXNzIGJhclxyXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzUGVyY2VudCA9IChjdXJyZW50U3RlcCAvICh0b3RhbFN0ZXBzIC0gMSkpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgJHByb2dyZXNzRmlsbC5jc3MoJ3dpZHRoJywgcHJvZ3Jlc3NQZXJjZW50ICsgJyUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGJ1dHRvbnMgc3RhdGVcclxuICAgICAgICAgICAgICAgICRwcmV2QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFN0ZXAgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhcnJvd3Mgc3RhdGVcclxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3cucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50U3RlcCA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93LnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFN0ZXAgPT09IHRvdGFsU3RlcHMgLSAxIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICgkY29udGVudHMuZXEoY3VycmVudFN0ZXApLmZpbmQoJy5lbS1zdGVwLWFncmVlJykubGVuZ3RoICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAhJGNvbnRlbnRzLmVxKGN1cnJlbnRTdGVwKS5maW5kKCcuZW0tc3RlcC1hZ3JlZScpLmlzKCc6Y2hlY2tlZCcpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXJzIHdoZW4gd2lkZ2V0IGlzIHJlbW92ZWRcclxuICAgICAgICAgICAgJHNjb3BlLm9uKCdkZXN0cm95JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24uZW1raXRtdWx0aScpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5vZmYoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XHJcbn0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL211bHRpX3N0ZXAuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9tdWx0aV9zdGVwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93Iiwid2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE11bHRpU3RlcCIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiRjb250YWluZXIiLCJmaW5kIiwibGVuZ3RoIiwiJGluZGljYXRvcnMiLCIkY29udGVudHMiLCIkcHJvZ3Jlc3NGaWxsIiwiJHByZXZCdXR0b24iLCIkbmV4dEJ1dHRvbiIsIiRwcmV2QXJyb3ciLCIkbmV4dEFycm93IiwiJGNoZWNrYm94ZXMiLCIkY29tcGxldGlvblBvcHVwIiwidG90YWxTdGVwcyIsImN1cnJlbnRTdGVwIiwicGFyc2VJbnQiLCJkYXRhIiwiTWF0aCIsIm1heCIsIm1pbiIsInVwZGF0ZVVJIiwib24iLCJzdGVwIiwiZ29Ub1ByZXZTdGVwIiwidmFsaWRhdGVDdXJyZW50U3RlcCIsImdvVG9OZXh0U3RlcCIsImNoZWNrQ29tcGxldGlvbiIsInVwZGF0ZU5leHRCdXR0b25TdGF0ZSIsImhpZGUiLCJlIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJpcyIsImtleSIsIiRjdXJyZW50Q29udGVudCIsImVxIiwiJGNoZWNrYm94IiwiZm9jdXMiLCJpc05leHRBbGxvd2VkIiwicHJvcCIsImFsbFN0ZXBzQ29tcGxldGVkIiwiYWxsQ29tcGxldGVkIiwiZmFkZUluIiwicmVtb3ZlQ2xhc3MiLCJpbmRleCIsImFkZENsYXNzIiwicHJvZ3Jlc3NQZXJjZW50IiwiY3NzIiwib2ZmIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==