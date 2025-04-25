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
/*!**************************************!*\
  !*** ./assets/src/scss/counter.scss ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!**********************************!*\
  !*** ./assets/src/js/counter.js ***!
  \**********************************/
jQuery(function ($) {
  // CONFIG
  let visibilityIds = ['#counters_1', '#counters_2', '#counters_3', '#counters_4', '#counters_5', '#counters_6', '#counters_7', '#counters_8', '#counters_9', '#counters_10', '#counters_11', '#counters_12', '#counters_13', '#counters_14', '#counters_15']; //must be an array, could have only one element
  let counterClass = '.counter';
  let defaultSpeed = 2000; //default value

  // END CONFIG

  //init if it becomes visible by scrolling
  $(window).on('scroll', function () {
    getVisibilityStatus();
  });

  //init if it's visible by page loading
  getVisibilityStatus();
  function getVisibilityStatus() {
    elValFromTop = [];
    let windowHeight = $(window).height(),
      windowScrollValFromTop = $(this).scrollTop();
    visibilityIds.forEach(function (item, index) {
      //Call each class
      try {
        //avoid error if class not exist
        elValFromTop[index] = Math.ceil($(item).offset().top);
      } catch (err) {
        return;
      }
      if (windowHeight + windowScrollValFromTop > elValFromTop[index]) {
        counter_init(item);
      }
    });
  }
  function counter_init(groupId) {
    let num,
      speed,
      direction,
      index = 0;
    $(counterClass).each(function () {
      num = $(this).attr('data-TargetNum');
      speed = $(this).attr('data-Speed');
      direction = $(this).attr('data-Direction');
      easing = $(this).attr('data-Easing');
      if (speed == undefined) speed = defaultSpeed;
      $(this).addClass('c_' + index); //add a class to recognize each counter
      doCount(num, index, speed, groupId, direction, easing);
      index++;
    });
  }
  function doCount(num, index, speed, groupClass, direction, easing) {
    let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
    if (easing == undefined) easing = "swing";
    $(className).animate({
      num
    }, {
      duration: +speed,
      easing: easing,
      step: function (now) {
        if (direction == 'reverse') {
          $(this).text(num - Math.floor(now));
        } else {
          $(this).text(Math.floor(now));
        }
      },
      complete: doCount
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUyxLQUFLLEVBQUVRLFVBQVUsRUFBRVAsU0FBUyxFQUFFRyxNQUFNLEVBQUU7SUFDL0QsSUFBSUssU0FBUyxHQUFHRCxVQUFVLEdBQUcsR0FBRyxHQUFHN0IsWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUdZLEtBQUs7SUFDcEUsSUFBR2EsTUFBTSxJQUFJQyxTQUFTLEVBQUVELE1BQU0sR0FBRyxPQUFPO0lBQ3hDM0IsQ0FBQyxDQUFDZ0MsU0FBUyxDQUFDLENBQUNDLE9BQU8sQ0FBQztNQUNqQlg7SUFDSixDQUFDLEVBQUU7TUFDQ1ksUUFBUSxFQUFFLENBQUNYLEtBQUs7TUFDaEJJLE1BQU0sRUFBRUEsTUFBTTtNQUNkUSxJQUFJLEVBQUUsU0FBQUEsQ0FBVUMsR0FBRyxFQUFFO1FBQ2pCLElBQUlaLFNBQVMsSUFBSSxTQUFTLEVBQUU7VUFDeEJ4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQyxJQUFJLENBQUNmLEdBQUcsR0FBR1AsSUFBSSxDQUFDdUIsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLE1BQU07VUFDSHBDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FDLElBQUksQ0FBQ3RCLElBQUksQ0FBQ3VCLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUM7UUFDakM7TUFDSixDQUFDO01BQ0RHLFFBQVEsRUFBRVQ7SUFDZCxDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9jb3VudGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvY291bnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwialF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAvLyBDT05GSUdcclxuICAgIGxldCB2aXNpYmlsaXR5SWRzID0gWycjY291bnRlcnNfMScsICcjY291bnRlcnNfMicsICcjY291bnRlcnNfMycsICcjY291bnRlcnNfNCcsICcjY291bnRlcnNfNScsICcjY291bnRlcnNfNicsICcjY291bnRlcnNfNycsICcjY291bnRlcnNfOCcsICcjY291bnRlcnNfOScsICcjY291bnRlcnNfMTAnLCAnI2NvdW50ZXJzXzExJywgJyNjb3VudGVyc18xMicsICcjY291bnRlcnNfMTMnLCAnI2NvdW50ZXJzXzE0JywgJyNjb3VudGVyc18xNScsXTsgLy9tdXN0IGJlIGFuIGFycmF5LCBjb3VsZCBoYXZlIG9ubHkgb25lIGVsZW1lbnRcclxuICAgIGxldCBjb3VudGVyQ2xhc3MgPSAnLmNvdW50ZXInO1xyXG4gICAgbGV0IGRlZmF1bHRTcGVlZCA9IDIwMDA7IC8vZGVmYXVsdCB2YWx1ZVxyXG5cclxuICAgIC8vIEVORCBDT05GSUdcclxuXHJcbiAgICAvL2luaXQgaWYgaXQgYmVjb21lcyB2aXNpYmxlIGJ5IHNjcm9sbGluZ1xyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ2V0VmlzaWJpbGl0eVN0YXR1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9pbml0IGlmIGl0J3MgdmlzaWJsZSBieSBwYWdlIGxvYWRpbmdcclxuICAgIGdldFZpc2liaWxpdHlTdGF0dXMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWaXNpYmlsaXR5U3RhdHVzKCkge1xyXG4gICAgICAgIGVsVmFsRnJvbVRvcCA9IFtdO1xyXG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbFZhbEZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICB2aXNpYmlsaXR5SWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7IC8vQ2FsbCBlYWNoIGNsYXNzXHJcbiAgICAgICAgICAgIHRyeSB7IC8vYXZvaWQgZXJyb3IgaWYgY2xhc3Mgbm90IGV4aXN0XHJcbiAgICAgICAgICAgICAgICBlbFZhbEZyb21Ub3BbaW5kZXhdID0gTWF0aC5jZWlsKCQoaXRlbSkub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCh3aW5kb3dIZWlnaHQgKyB3aW5kb3dTY3JvbGxWYWxGcm9tVG9wKSA+IGVsVmFsRnJvbVRvcFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXJfaW5pdChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvdW50ZXJfaW5pdChncm91cElkKSB7XHJcbiAgICAgICAgbGV0IG51bSwgc3BlZWQsIGRpcmVjdGlvbiwgaW5kZXggPSAwO1xyXG4gICAgICAgICQoY291bnRlckNsYXNzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbnVtID0gJCh0aGlzKS5hdHRyKCdkYXRhLVRhcmdldE51bScpO1xyXG4gICAgICAgICAgICBzcGVlZCA9ICQodGhpcykuYXR0cignZGF0YS1TcGVlZCcpO1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtRGlyZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIGVhc2luZyA9ICQodGhpcykuYXR0cignZGF0YS1FYXNpbmcnKTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID09IHVuZGVmaW5lZCkgc3BlZWQgPSBkZWZhdWx0U3BlZWQ7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NfJyArIGluZGV4KTsgLy9hZGQgYSBjbGFzcyB0byByZWNvZ25pemUgZWFjaCBjb3VudGVyXHJcbiAgICAgICAgICAgIGRvQ291bnQobnVtLCBpbmRleCwgc3BlZWQsIGdyb3VwSWQsIGRpcmVjdGlvbiwgZWFzaW5nKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkb0NvdW50KG51bSwgaW5kZXgsIHNwZWVkLCBncm91cENsYXNzLCBkaXJlY3Rpb24sIGVhc2luZykge1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBncm91cENsYXNzICsgJyAnICsgY291bnRlckNsYXNzICsgJy4nICsgJ2NfJyArIGluZGV4O1xyXG4gICAgICAgIGlmKGVhc2luZyA9PSB1bmRlZmluZWQpIGVhc2luZyA9IFwic3dpbmdcIjtcclxuICAgICAgICAkKGNsYXNzTmFtZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG51bVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZHVyYXRpb246ICtzcGVlZCxcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXHJcbiAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uIChub3cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KG51bSAtIE1hdGguZmxvb3Iobm93KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudGV4dChNYXRoLmZsb29yKG5vdykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZG9Db3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwidmlzaWJpbGl0eUlkcyIsImNvdW50ZXJDbGFzcyIsImRlZmF1bHRTcGVlZCIsIndpbmRvdyIsIm9uIiwiZ2V0VmlzaWJpbGl0eVN0YXR1cyIsImVsVmFsRnJvbVRvcCIsIndpbmRvd0hlaWdodCIsImhlaWdodCIsIndpbmRvd1Njcm9sbFZhbEZyb21Ub3AiLCJzY3JvbGxUb3AiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiTWF0aCIsImNlaWwiLCJvZmZzZXQiLCJ0b3AiLCJlcnIiLCJjb3VudGVyX2luaXQiLCJncm91cElkIiwibnVtIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJlYWNoIiwiYXR0ciIsImVhc2luZyIsInVuZGVmaW5lZCIsImFkZENsYXNzIiwiZG9Db3VudCIsImdyb3VwQ2xhc3MiLCJjbGFzc05hbWUiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJzdGVwIiwibm93IiwidGV4dCIsImZsb29yIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9