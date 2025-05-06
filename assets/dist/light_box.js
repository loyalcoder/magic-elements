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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRfYm94LmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7QUNBQUEsTUFBTSxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUNmO0VBQ0FBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQ3JEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUlDLE1BQU0sR0FBR0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DTixDQUFDLENBQUNLLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQztJQUNsQlAsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxRQUFRLENBQUMsZUFBZSxDQUFDO0VBQ3ZDLENBQUMsQ0FBQztFQUNGO0VBQ0FSLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQzdFLElBQUlILENBQUMsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0ksUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUlULENBQUMsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFNLENBQUMsQ0FBQ0ksUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7TUFDM0ZULENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDVSxPQUFPLENBQUMsQ0FBQztNQUN2Q1YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDVyxXQUFXLENBQUMsZUFBZSxDQUFDO0lBQzFDO0VBQ0osQ0FBQyxDQUFDO0VBQ0Y7RUFDQVgsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ1csS0FBSyxDQUFDLFVBQVNULENBQUMsRUFBRTtJQUMxQixJQUFJQSxDQUFDLENBQUNVLEdBQUcsS0FBSyxRQUFRLEVBQUU7TUFDcEJiLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDVSxPQUFPLENBQUMsQ0FBQztNQUN2Q1YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDVyxXQUFXLENBQUMsZUFBZSxDQUFDO0lBQzFDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2xpZ2h0X2JveC5zY3NzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL2xpZ2h0X2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwialF1ZXJ5KGZ1bmN0aW9uKCQpIHtcclxuICAgIC8vIExpZ2h0Ym94IHRyaWdnZXJcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubGlnaHRib3gtdHJpZ2dlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XHJcbiAgICAgICAgJCh0YXJnZXQpLmZhZGVJbigpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGlnaHRib3gtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDbG9zZSBsaWdodGJveFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saWdodGJveC1jbG9zZSwgLmN1c3RvbS1saWdodGJveC1jb250ZW50JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnY3VzdG9tLWxpZ2h0Ym94LWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGlnaHRib3gtY2xvc2UnKSkge1xyXG4gICAgICAgICAgICAkKCcuY3VzdG9tLWxpZ2h0Ym94LWNvbnRlbnQnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGlnaHRib3gtb3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gQ2xvc2Ugd2l0aCBFU0Mga2V5XHJcbiAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICQoJy5jdXN0b20tbGlnaHRib3gtY29udGVudCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsaWdodGJveC1vcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImRhdGEiLCJmYWRlSW4iLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiZmFkZU91dCIsInJlbW92ZUNsYXNzIiwia2V5dXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9