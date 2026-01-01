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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVTLEtBQUssRUFBRVEsVUFBVSxFQUFFUCxTQUFTLEVBQUVHLE1BQU0sRUFBRTtJQUMvRCxJQUFJSyxTQUFTLEdBQUdELFVBQVUsR0FBRyxHQUFHLEdBQUc3QixZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBR1ksS0FBSztJQUNwRSxJQUFHYSxNQUFNLElBQUlDLFNBQVMsRUFBRUQsTUFBTSxHQUFHLE9BQU87SUFDeEMzQixDQUFDLENBQUNnQyxTQUFTLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO01BQ2pCWDtJQUNKLENBQUMsRUFBRTtNQUNDWSxRQUFRLEVBQUUsQ0FBQ1gsS0FBSztNQUNoQkksTUFBTSxFQUFFQSxNQUFNO01BQ2RRLElBQUksRUFBRSxTQUFBQSxDQUFVQyxHQUFHLEVBQUU7UUFDakIsSUFBSVosU0FBUyxJQUFJLFNBQVMsRUFBRTtVQUN4QnhCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FDLElBQUksQ0FBQ2YsR0FBRyxHQUFHUCxJQUFJLENBQUN1QixLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsTUFBTTtVQUNIcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDcUMsSUFBSSxDQUFDdEIsSUFBSSxDQUFDdUIsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUNqQztNQUNKLENBQUM7TUFDREcsUUFBUSxFQUFFVDtJQUNkLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL2NvdW50ZXIuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9jb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgIC8vIENPTkZJR1xyXG4gICAgbGV0IHZpc2liaWxpdHlJZHMgPSBbJyNjb3VudGVyc18xJywgJyNjb3VudGVyc18yJywgJyNjb3VudGVyc18zJywgJyNjb3VudGVyc180JywgJyNjb3VudGVyc181JywgJyNjb3VudGVyc182JywgJyNjb3VudGVyc183JywgJyNjb3VudGVyc184JywgJyNjb3VudGVyc185JywgJyNjb3VudGVyc18xMCcsICcjY291bnRlcnNfMTEnLCAnI2NvdW50ZXJzXzEyJywgJyNjb3VudGVyc18xMycsICcjY291bnRlcnNfMTQnLCAnI2NvdW50ZXJzXzE1JyxdOyAvL211c3QgYmUgYW4gYXJyYXksIGNvdWxkIGhhdmUgb25seSBvbmUgZWxlbWVudFxyXG4gICAgbGV0IGNvdW50ZXJDbGFzcyA9ICcuY291bnRlcic7XHJcbiAgICBsZXQgZGVmYXVsdFNwZWVkID0gMjAwMDsgLy9kZWZhdWx0IHZhbHVlXHJcblxyXG4gICAgLy8gRU5EIENPTkZJR1xyXG5cclxuICAgIC8vaW5pdCBpZiBpdCBiZWNvbWVzIHZpc2libGUgYnkgc2Nyb2xsaW5nXHJcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZXRWaXNpYmlsaXR5U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2luaXQgaWYgaXQncyB2aXNpYmxlIGJ5IHBhZ2UgbG9hZGluZ1xyXG4gICAgZ2V0VmlzaWJpbGl0eVN0YXR1cygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpc2liaWxpdHlTdGF0dXMoKSB7XHJcbiAgICAgICAgZWxWYWxGcm9tVG9wID0gW107XHJcbiAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcclxuICAgICAgICAgICAgd2luZG93U2Nyb2xsVmFsRnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIHZpc2liaWxpdHlJZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHsgLy9DYWxsIGVhY2ggY2xhc3NcclxuICAgICAgICAgICAgdHJ5IHsgLy9hdm9pZCBlcnJvciBpZiBjbGFzcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgICAgIGVsVmFsRnJvbVRvcFtpbmRleF0gPSBNYXRoLmNlaWwoJChpdGVtKS5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKHdpbmRvd0hlaWdodCArIHdpbmRvd1Njcm9sbFZhbEZyb21Ub3ApID4gZWxWYWxGcm9tVG9wW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcl9pbml0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY291bnRlcl9pbml0KGdyb3VwSWQpIHtcclxuICAgICAgICBsZXQgbnVtLCBzcGVlZCwgZGlyZWN0aW9uLCBpbmRleCA9IDA7XHJcbiAgICAgICAgJChjb3VudGVyQ2xhc3MpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBudW0gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtVGFyZ2V0TnVtJyk7XHJcbiAgICAgICAgICAgIHNwZWVkID0gJCh0aGlzKS5hdHRyKCdkYXRhLVNwZWVkJyk7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1EaXJlY3Rpb24nKTtcclxuICAgICAgICAgICAgZWFzaW5nID0gJCh0aGlzKS5hdHRyKCdkYXRhLUVhc2luZycpO1xyXG4gICAgICAgICAgICBpZiAoc3BlZWQgPT0gdW5kZWZpbmVkKSBzcGVlZCA9IGRlZmF1bHRTcGVlZDtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY18nICsgaW5kZXgpOyAvL2FkZCBhIGNsYXNzIHRvIHJlY29nbml6ZSBlYWNoIGNvdW50ZXJcclxuICAgICAgICAgICAgZG9Db3VudChudW0sIGluZGV4LCBzcGVlZCwgZ3JvdXBJZCwgZGlyZWN0aW9uLCBlYXNpbmcpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvQ291bnQobnVtLCBpbmRleCwgc3BlZWQsIGdyb3VwQ2xhc3MsIGRpcmVjdGlvbiwgZWFzaW5nKSB7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGdyb3VwQ2xhc3MgKyAnICcgKyBjb3VudGVyQ2xhc3MgKyAnLicgKyAnY18nICsgaW5kZXg7XHJcbiAgICAgICAgaWYoZWFzaW5nID09IHVuZGVmaW5lZCkgZWFzaW5nID0gXCJzd2luZ1wiO1xyXG4gICAgICAgICQoY2xhc3NOYW1lKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgbnVtXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogK3NwZWVkLFxyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2luZyxcclxuICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24gKG5vdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQobnVtIC0gTWF0aC5mbG9vcihub3cpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguZmxvb3Iobm93KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBkb0NvdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJ2aXNpYmlsaXR5SWRzIiwiY291bnRlckNsYXNzIiwiZGVmYXVsdFNwZWVkIiwid2luZG93Iiwib24iLCJnZXRWaXNpYmlsaXR5U3RhdHVzIiwiZWxWYWxGcm9tVG9wIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93U2Nyb2xsVmFsRnJvbVRvcCIsInNjcm9sbFRvcCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJNYXRoIiwiY2VpbCIsIm9mZnNldCIsInRvcCIsImVyciIsImNvdW50ZXJfaW5pdCIsImdyb3VwSWQiLCJudW0iLCJzcGVlZCIsImRpcmVjdGlvbiIsImVhY2giLCJhdHRyIiwiZWFzaW5nIiwidW5kZWZpbmVkIiwiYWRkQ2xhc3MiLCJkb0NvdW50IiwiZ3JvdXBDbGFzcyIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJ0ZXh0IiwiZmxvb3IiLCJjb21wbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9