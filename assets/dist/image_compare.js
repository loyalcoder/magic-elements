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
jQuery(document).ready(function ($) {
  $('.me-twentytwenty').each(function () {
    var $this = $(this);
    var orientation = $this.data('orientation') || 'horizontal';
    var beforeLabel = $this.data('before-label') || 'Before';
    var afterLabel = $this.data('after-label') || 'After';
    $this.twentytwenty({
      default_offset_pct: 0.5,
      orientation: orientation,
      before_label: beforeLabel,
      after_label: afterLabel,
      no_overlay: false
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiO1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7O0FDQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7RUFDaENBLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWTtJQUNuQyxJQUFJQyxLQUFLLEdBQUdGLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkIsSUFBSUcsV0FBVyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZO0lBQzNELElBQUlDLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksUUFBUTtJQUN4RCxJQUFJRSxVQUFVLEdBQUdKLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU87SUFFckRGLEtBQUssQ0FBQ0ssWUFBWSxDQUFDO01BQ2ZDLGtCQUFrQixFQUFFLEdBQUc7TUFDdkJMLFdBQVcsRUFBRUEsV0FBVztNQUN4Qk0sWUFBWSxFQUFFSixXQUFXO01BQ3pCSyxXQUFXLEVBQUVKLFVBQVU7TUFDdkJLLFVBQVUsRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfY29tcGFyZS5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL2ltYWdlX2NvbXBhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoJy5tZS10d2VudHl0d2VudHknKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9ICR0aGlzLmRhdGEoJ29yaWVudGF0aW9uJykgfHwgJ2hvcml6b250YWwnO1xyXG4gICAgICAgIHZhciBiZWZvcmVMYWJlbCA9ICR0aGlzLmRhdGEoJ2JlZm9yZS1sYWJlbCcpIHx8ICdCZWZvcmUnO1xyXG4gICAgICAgIHZhciBhZnRlckxhYmVsID0gJHRoaXMuZGF0YSgnYWZ0ZXItbGFiZWwnKSB8fCAnQWZ0ZXInO1xyXG5cclxuICAgICAgICAkdGhpcy50d2VudHl0d2VudHkoe1xyXG4gICAgICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IDAuNSxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICBiZWZvcmVfbGFiZWw6IGJlZm9yZUxhYmVsLFxyXG4gICAgICAgICAgICBhZnRlcl9sYWJlbDogYWZ0ZXJMYWJlbCxcclxuICAgICAgICAgICAgbm9fb3ZlcmxheTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImVhY2giLCIkdGhpcyIsIm9yaWVudGF0aW9uIiwiZGF0YSIsImJlZm9yZUxhYmVsIiwiYWZ0ZXJMYWJlbCIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsImJlZm9yZV9sYWJlbCIsImFmdGVyX2xhYmVsIiwibm9fb3ZlcmxheSJdLCJzb3VyY2VSb290IjoiIn0=