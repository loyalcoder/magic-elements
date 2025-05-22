/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./assets/src/scss/image_compare.scss ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!****************************************!*\
  !*** ./assets/src/js/image_compare.js ***!
  \****************************************/
(function ($, elementor) {
  "use strict";

  let $window = $(elementor);
  let emkElementor = {
    onInit: function () {
      let E_FRONT = elementorFrontend;
      let widgetHandlersMap = {
        "em_kit_image_compare.default": emkElementor.EmKitImageCompare
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitImageCompare: function ($scope) {
      $('.image-compare').each(function () {
        let $this = $(this);
        let orientation = $this.data('orientation') || 'horizontal';
        let beforeLabel = $this.data('before-label') || 'Before';
        let afterLabel = $this.data('after-label') || 'After';
        $this.twentytwenty({
          default_offset_pct: 0.5,
          orientation: orientation,
          before_label: beforeLabel,
          after_label: afterLabel,
          no_overlay: false
        });
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiO1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7O0FDQUEsQ0FBQyxVQUFVQSxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyQixZQUFZOztFQUNaLElBQUlDLE9BQU8sR0FBR0YsQ0FBQyxDQUFDQyxTQUFTLENBQUM7RUFFMUIsSUFBSUUsWUFBWSxHQUFHO0lBQ2pCQyxNQUFNLEVBQUUsU0FBQUEsQ0FBQSxFQUFZO01BQ2xCLElBQUlDLE9BQU8sR0FBR0MsaUJBQWlCO01BQy9CLElBQUlDLGlCQUFpQixHQUFHO1FBQ3RCLDhCQUE4QixFQUFFSixZQUFZLENBQUNLO01BQy9DLENBQUM7TUFFRFIsQ0FBQyxDQUFDUyxJQUFJLENBQUNGLGlCQUFpQixFQUFFLFVBQVVHLFVBQVUsRUFBRUMsUUFBUSxFQUFFO1FBQ3hETixPQUFPLENBQUNPLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLHlCQUF5QixHQUFHSCxVQUFVLEVBQUVDLFFBQVEsQ0FBQztNQUMzRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRURILGlCQUFpQixFQUFFLFNBQUFBLENBQVVNLE1BQU0sRUFBRTtNQUUvQmQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNTLElBQUksQ0FBQyxZQUFZO1FBQ3JDLElBQUlNLEtBQUssR0FBR2YsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuQixJQUFJZ0IsV0FBVyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZO1FBQzNELElBQUlDLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksUUFBUTtRQUN4RCxJQUFJRSxVQUFVLEdBQUdKLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU87UUFFckRGLEtBQUssQ0FBQ0ssWUFBWSxDQUFDO1VBQ2ZDLGtCQUFrQixFQUFFLEdBQUc7VUFDdkJMLFdBQVcsRUFBRUEsV0FBVztVQUN4Qk0sWUFBWSxFQUFFSixXQUFXO1VBQ3pCSyxXQUFXLEVBQUVKLFVBQVU7VUFDdkJLLFVBQVUsRUFBRTtRQUNoQixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTjtFQUVBLENBQUM7RUFFRHRCLE9BQU8sQ0FBQ3VCLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRXRCLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO0FBQzVELENBQUMsRUFBRXNCLE1BQU0sRUFBRUMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2ltYWdlX2NvbXBhcmUuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9pbWFnZV9jb21wYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIoZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIGxldCBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgbGV0IHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfaW1hZ2VfY29tcGFyZS5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdEltYWdlQ29tcGFyZSxcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpdEltYWdlQ29tcGFyZTogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAkKCcuaW1hZ2UtY29tcGFyZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSAkdGhpcy5kYXRhKCdvcmllbnRhdGlvbicpIHx8ICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgbGV0IGJlZm9yZUxhYmVsID0gJHRoaXMuZGF0YSgnYmVmb3JlLWxhYmVsJykgfHwgJ0JlZm9yZSc7XHJcbiAgICAgICAgICAgIGxldCBhZnRlckxhYmVsID0gJHRoaXMuZGF0YSgnYWZ0ZXItbGFiZWwnKSB8fCAnQWZ0ZXInO1xyXG5cclxuICAgICAgICAgICAgJHRoaXMudHdlbnR5dHdlbnR5KHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlX2xhYmVsOiBiZWZvcmVMYWJlbCxcclxuICAgICAgICAgICAgICAgIGFmdGVyX2xhYmVsOiBhZnRlckxhYmVsLFxyXG4gICAgICAgICAgICAgICAgbm9fb3ZlcmxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgICR3aW5kb3cub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBlbWtFbGVtZW50b3Iub25Jbml0KTtcclxuICB9KShqUXVlcnksIHdpbmRvdyk7Il0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdEltYWdlQ29tcGFyZSIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiR0aGlzIiwib3JpZW50YXRpb24iLCJkYXRhIiwiYmVmb3JlTGFiZWwiLCJhZnRlckxhYmVsIiwidHdlbnR5dHdlbnR5IiwiZGVmYXVsdF9vZmZzZXRfcGN0IiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5Iiwib24iLCJqUXVlcnkiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9