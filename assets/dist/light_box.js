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
/*!****************************************!*\
  !*** ./assets/src/scss/light_box.scss ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!************************************!*\
  !*** ./assets/src/js/light_box.js ***!
  \************************************/
jQuery(function ($) {
  // Lightbox trigger
  $(document).on('click', '.lightbox-trigger', function (e) {
    e.preventDefault();
    let target = $(this).data('target');
    $(target).fadeIn();
    $('body').addClass('lightbox-open');
  });
  // Close lightbox
  $(document).on('click', '.lightbox-close, .custom-lightbox-content', function (e) {
    if ($(e.target).hasClass('custom-lightbox-content') || $(e.target).hasClass('lightbox-close')) {
      $('.custom-lightbox-content').fadeOut();
      $('body').removeClass('lightbox-open');
    }
  });
  // Close with ESC key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $('.custom-lightbox-content').fadeOut();
      $('body').removeClass('lightbox-open');
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRfYm94LmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7QUNBQUEsTUFBTSxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUNmO0VBQ0FBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQ3JEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUlDLE1BQU0sR0FBR0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DTixDQUFDLENBQUNLLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQztJQUNsQlAsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxRQUFRLENBQUMsZUFBZSxDQUFDO0VBQ3ZDLENBQUMsQ0FBQztFQUNGO0VBQ0FSLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQzdFLElBQUlILENBQUMsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0ksUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUlULENBQUMsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0ksUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7TUFDM0ZULENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDVSxPQUFPLENBQUMsQ0FBQztNQUN2Q1YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDVyxXQUFXLENBQUMsZUFBZSxDQUFDO0lBQzFDO0VBQ0osQ0FBQyxDQUFDO0VBQ0Y7RUFDQVgsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ1csS0FBSyxDQUFDLFVBQVNULENBQUMsRUFBRTtJQUMxQixJQUFJQSxDQUFDLENBQUNVLEdBQUcsS0FBSyxRQUFRLEVBQUU7TUFDcEJiLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDVSxPQUFPLENBQUMsQ0FBQztNQUN2Q1YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDVyxXQUFXLENBQUMsZUFBZSxDQUFDO0lBQzFDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2xpZ2h0X2JveC5zY3NzP2M1NWUiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbGlnaHRfYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICAgLy8gTGlnaHRib3ggdHJpZ2dlclxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saWdodGJveC10cmlnZ2VyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcclxuICAgICAgICAkKHRhcmdldCkuZmFkZUluKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsaWdodGJveC1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgIC8vIENsb3NlIGxpZ2h0Ym94XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpZ2h0Ym94LWNsb3NlLCAuY3VzdG9tLWxpZ2h0Ym94LWNvbnRlbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdjdXN0b20tbGlnaHRib3gtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdsaWdodGJveC1jbG9zZScpKSB7XHJcbiAgICAgICAgICAgICQoJy5jdXN0b20tbGlnaHRib3gtY29udGVudCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsaWdodGJveC1vcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBDbG9zZSB3aXRoIEVTQyBrZXlcclxuICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgJCgnLmN1c3RvbS1saWdodGJveC1jb250ZW50JykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xpZ2h0Ym94LW9wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGF0YSIsImZhZGVJbiIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJmYWRlT3V0IiwicmVtb3ZlQ2xhc3MiLCJrZXl1cCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=