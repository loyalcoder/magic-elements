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
jQuery(function ($) {
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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfY29tcGFyZS5qcyIsIm1hcHBpbmdzIjoiO1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7O0FDQUFBLE1BQU0sQ0FBQyxVQUFVQyxDQUFDLEVBQUU7RUFDaEJBLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWTtJQUNqQyxJQUFJQyxLQUFLLEdBQUdGLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkIsSUFBSUcsV0FBVyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZO0lBQzNELElBQUlDLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksUUFBUTtJQUN4RCxJQUFJRSxVQUFVLEdBQUdKLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU87SUFFckRGLEtBQUssQ0FBQ0ssWUFBWSxDQUFDO01BQ2ZDLGtCQUFrQixFQUFFLEdBQUc7TUFDdkJMLFdBQVcsRUFBRUEsV0FBVztNQUN4Qk0sWUFBWSxFQUFFSixXQUFXO01BQ3pCSyxXQUFXLEVBQUVKLFVBQVU7TUFDdkJLLFVBQVUsRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvaW1hZ2VfY29tcGFyZS5zY3NzP2U4NzMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvaW1hZ2VfY29tcGFyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwialF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkKCcuaW1hZ2UtY29tcGFyZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJHRoaXMuZGF0YSgnb3JpZW50YXRpb24nKSB8fCAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgbGV0IGJlZm9yZUxhYmVsID0gJHRoaXMuZGF0YSgnYmVmb3JlLWxhYmVsJykgfHwgJ0JlZm9yZSc7XHJcbiAgICAgICAgbGV0IGFmdGVyTGFiZWwgPSAkdGhpcy5kYXRhKCdhZnRlci1sYWJlbCcpIHx8ICdBZnRlcic7XHJcblxyXG4gICAgICAgICR0aGlzLnR3ZW50eXR3ZW50eSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgIGJlZm9yZV9sYWJlbDogYmVmb3JlTGFiZWwsXHJcbiAgICAgICAgICAgIGFmdGVyX2xhYmVsOiBhZnRlckxhYmVsLFxyXG4gICAgICAgICAgICBub19vdmVybGF5OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJlYWNoIiwiJHRoaXMiLCJvcmllbnRhdGlvbiIsImRhdGEiLCJiZWZvcmVMYWJlbCIsImFmdGVyTGFiZWwiLCJ0d2VudHl0d2VudHkiLCJkZWZhdWx0X29mZnNldF9wY3QiLCJiZWZvcmVfbGFiZWwiLCJhZnRlcl9sYWJlbCIsIm5vX292ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9