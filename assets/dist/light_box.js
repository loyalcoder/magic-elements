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
jQuery(document).ready(function ($) {
  // Lightbox trigger
  $(document).on('click', '.lightbox-trigger', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRfYm94LmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7QUNBQUEsTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUMvQjtFQUNBQSxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQVNDLENBQUMsRUFBRTtJQUNyREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJQyxNQUFNLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQ0wsQ0FBQyxDQUFDSSxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7SUFDbEJOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ08sUUFBUSxDQUFDLGVBQWUsQ0FBQztFQUN2QyxDQUFDLENBQUM7RUFDRjtFQUNBUCxDQUFDLENBQUNGLFFBQVEsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLFVBQVNDLENBQUMsRUFBRTtJQUM3RSxJQUFJRixDQUFDLENBQUNFLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUNJLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJUixDQUFDLENBQUNFLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUNJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO01BQzNGUixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7TUFDdkNULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1UsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUMxQztFQUNKLENBQUMsQ0FBQztFQUNGO0VBQ0FWLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLENBQUNhLEtBQUssQ0FBQyxVQUFTVCxDQUFDLEVBQUU7SUFDMUIsSUFBSUEsQ0FBQyxDQUFDVSxHQUFHLEtBQUssUUFBUSxFQUFFO01BQ3BCWixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7TUFDdkNULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1UsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUMxQztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9saWdodF9ib3guc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9saWdodF9ib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICAgLy8gTGlnaHRib3ggdHJpZ2dlclxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5saWdodGJveC10cmlnZ2VyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcclxuICAgICAgICAkKHRhcmdldCkuZmFkZUluKCk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsaWdodGJveC1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgIC8vIENsb3NlIGxpZ2h0Ym94XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxpZ2h0Ym94LWNsb3NlLCAuY3VzdG9tLWxpZ2h0Ym94LWNvbnRlbnQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdjdXN0b20tbGlnaHRib3gtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdsaWdodGJveC1jbG9zZScpKSB7XHJcbiAgICAgICAgICAgICQoJy5jdXN0b20tbGlnaHRib3gtY29udGVudCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsaWdodGJveC1vcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBDbG9zZSB3aXRoIEVTQyBrZXlcclxuICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgJCgnLmN1c3RvbS1saWdodGJveC1jb250ZW50JykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xpZ2h0Ym94LW9wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhIiwiZmFkZUluIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImZhZGVPdXQiLCJyZW1vdmVDbGFzcyIsImtleXVwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==