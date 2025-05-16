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
  $('.image-compare-container').each(function () {
    var $this = $(this);
    $this.twentytwenty({
      default_offset_pct: parseFloat($this.data('offset')) || 0.5,
      orientation: $this.data('orientation') || 'horizontal',
      no_overlay: $this.data('overlay') === 'false',
      move_slider_on_hover: $this.data('hover') === 'true',
      before_label: $this.find('img').eq(0).attr('alt'),
      after_label: $this.find('img').eq(1).attr('alt')
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiO1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7O0FDQUFBLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFTQyxDQUFDLEVBQUU7RUFDL0JBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBVztJQUMxQyxJQUFJQyxLQUFLLEdBQUdGLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkJFLEtBQUssQ0FBQ0MsWUFBWSxDQUFDO01BQ2ZDLGtCQUFrQixFQUFFQyxVQUFVLENBQUNILEtBQUssQ0FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRztNQUMzREMsV0FBVyxFQUFFTCxLQUFLLENBQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZO01BQ3RERSxVQUFVLEVBQUVOLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE9BQU87TUFDN0NHLG9CQUFvQixFQUFFUCxLQUFLLENBQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNO01BQ3BESSxZQUFZLEVBQUVSLEtBQUssQ0FBQ1MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDakRDLFdBQVcsRUFBRVosS0FBSyxDQUFDUyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEtBQUs7SUFDbkQsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2ltYWdlX2NvbXBhcmUuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9pbWFnZV9jb21wYXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuICAgICQoJy5pbWFnZS1jb21wYXJlLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAkdGhpcy50d2VudHl0d2VudHkoe1xyXG4gICAgICAgICAgICBkZWZhdWx0X29mZnNldF9wY3Q6IHBhcnNlRmxvYXQoJHRoaXMuZGF0YSgnb2Zmc2V0JykpIHx8IDAuNSxcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICR0aGlzLmRhdGEoJ29yaWVudGF0aW9uJykgfHwgJ2hvcml6b250YWwnLFxyXG4gICAgICAgICAgICBub19vdmVybGF5OiAkdGhpcy5kYXRhKCdvdmVybGF5JykgPT09ICdmYWxzZScsXHJcbiAgICAgICAgICAgIG1vdmVfc2xpZGVyX29uX2hvdmVyOiAkdGhpcy5kYXRhKCdob3ZlcicpID09PSAndHJ1ZScsXHJcbiAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogJHRoaXMuZmluZCgnaW1nJykuZXEoMCkuYXR0cignYWx0JyksXHJcbiAgICAgICAgICAgIGFmdGVyX2xhYmVsOiAkdGhpcy5maW5kKCdpbWcnKS5lcSgxKS5hdHRyKCdhbHQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImVhY2giLCIkdGhpcyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsInBhcnNlRmxvYXQiLCJkYXRhIiwib3JpZW50YXRpb24iLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJiZWZvcmVfbGFiZWwiLCJmaW5kIiwiZXEiLCJhdHRyIiwiYWZ0ZXJfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9