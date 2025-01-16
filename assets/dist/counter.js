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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUyxLQUFLLEVBQUVRLFVBQVUsRUFBRVAsU0FBUyxFQUFFRyxNQUFNLEVBQUU7SUFDL0QsSUFBSUssU0FBUyxHQUFHRCxVQUFVLEdBQUcsR0FBRyxHQUFHN0IsWUFBWSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUdZLEtBQUs7SUFDcEUsSUFBR2EsTUFBTSxJQUFJQyxTQUFTLEVBQUVELE1BQU0sR0FBRyxPQUFPO0lBQ3hDM0IsQ0FBQyxDQUFDZ0MsU0FBUyxDQUFDLENBQUNDLE9BQU8sQ0FBQztNQUNqQlg7SUFDSixDQUFDLEVBQUU7TUFDQ1ksUUFBUSxFQUFFLENBQUNYLEtBQUs7TUFDaEJJLE1BQU0sRUFBRUEsTUFBTTtNQUNkUSxJQUFJLEVBQUUsU0FBQUEsQ0FBVUMsR0FBRyxFQUFFO1FBQ2pCLElBQUlaLFNBQVMsSUFBSSxTQUFTLEVBQUU7VUFDeEJ4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNxQyxJQUFJLENBQUNmLEdBQUcsR0FBR1AsSUFBSSxDQUFDdUIsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLE1BQU07VUFDSHBDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FDLElBQUksQ0FBQ3RCLElBQUksQ0FBQ3VCLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUM7UUFDakM7TUFDSixDQUFDO01BQ0RHLFFBQVEsRUFBRVQ7SUFDZCxDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9jb3VudGVyLnNjc3MiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvY291bnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwialF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgLy8gQ09ORklHXG4gICAgbGV0IHZpc2liaWxpdHlJZHMgPSBbJyNjb3VudGVyc18xJywgJyNjb3VudGVyc18yJywgJyNjb3VudGVyc18zJywgJyNjb3VudGVyc180JywgJyNjb3VudGVyc181JywgJyNjb3VudGVyc182JywgJyNjb3VudGVyc183JywgJyNjb3VudGVyc184JywgJyNjb3VudGVyc185JywgJyNjb3VudGVyc18xMCcsICcjY291bnRlcnNfMTEnLCAnI2NvdW50ZXJzXzEyJywgJyNjb3VudGVyc18xMycsICcjY291bnRlcnNfMTQnLCAnI2NvdW50ZXJzXzE1JyxdOyAvL211c3QgYmUgYW4gYXJyYXksIGNvdWxkIGhhdmUgb25seSBvbmUgZWxlbWVudFxuICAgIGxldCBjb3VudGVyQ2xhc3MgPSAnLmNvdW50ZXInO1xuICAgIGxldCBkZWZhdWx0U3BlZWQgPSAyMDAwOyAvL2RlZmF1bHQgdmFsdWVcblxuICAgIC8vIEVORCBDT05GSUdcblxuICAgIC8vaW5pdCBpZiBpdCBiZWNvbWVzIHZpc2libGUgYnkgc2Nyb2xsaW5nXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldFZpc2liaWxpdHlTdGF0dXMoKTtcbiAgICB9KTtcblxuICAgIC8vaW5pdCBpZiBpdCdzIHZpc2libGUgYnkgcGFnZSBsb2FkaW5nXG4gICAgZ2V0VmlzaWJpbGl0eVN0YXR1cygpO1xuXG4gICAgZnVuY3Rpb24gZ2V0VmlzaWJpbGl0eVN0YXR1cygpIHtcbiAgICAgICAgZWxWYWxGcm9tVG9wID0gW107XG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgICAgICB3aW5kb3dTY3JvbGxWYWxGcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgICB2aXNpYmlsaXR5SWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7IC8vQ2FsbCBlYWNoIGNsYXNzXG4gICAgICAgICAgICB0cnkgeyAvL2F2b2lkIGVycm9yIGlmIGNsYXNzIG5vdCBleGlzdFxuICAgICAgICAgICAgICAgIGVsVmFsRnJvbVRvcFtpbmRleF0gPSBNYXRoLmNlaWwoJChpdGVtKS5vZmZzZXQoKS50b3ApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh3aW5kb3dIZWlnaHQgKyB3aW5kb3dTY3JvbGxWYWxGcm9tVG9wKSA+IGVsVmFsRnJvbVRvcFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyX2luaXQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50ZXJfaW5pdChncm91cElkKSB7XG4gICAgICAgIGxldCBudW0sIHNwZWVkLCBkaXJlY3Rpb24sIGluZGV4ID0gMDtcbiAgICAgICAgJChjb3VudGVyQ2xhc3MpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbnVtID0gJCh0aGlzKS5hdHRyKCdkYXRhLVRhcmdldE51bScpO1xuICAgICAgICAgICAgc3BlZWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtU3BlZWQnKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICQodGhpcykuYXR0cignZGF0YS1EaXJlY3Rpb24nKTtcbiAgICAgICAgICAgIGVhc2luZyA9ICQodGhpcykuYXR0cignZGF0YS1FYXNpbmcnKTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA9PSB1bmRlZmluZWQpIHNwZWVkID0gZGVmYXVsdFNwZWVkO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY18nICsgaW5kZXgpOyAvL2FkZCBhIGNsYXNzIHRvIHJlY29nbml6ZSBlYWNoIGNvdW50ZXJcbiAgICAgICAgICAgIGRvQ291bnQobnVtLCBpbmRleCwgc3BlZWQsIGdyb3VwSWQsIGRpcmVjdGlvbiwgZWFzaW5nKTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvQ291bnQobnVtLCBpbmRleCwgc3BlZWQsIGdyb3VwQ2xhc3MsIGRpcmVjdGlvbiwgZWFzaW5nKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBncm91cENsYXNzICsgJyAnICsgY291bnRlckNsYXNzICsgJy4nICsgJ2NfJyArIGluZGV4O1xuICAgICAgICBpZihlYXNpbmcgPT0gdW5kZWZpbmVkKSBlYXNpbmcgPSBcInN3aW5nXCI7XG4gICAgICAgICQoY2xhc3NOYW1lKS5hbmltYXRlKHtcbiAgICAgICAgICAgIG51bVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogK3NwZWVkLFxuICAgICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmV2ZXJzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KG51bSAtIE1hdGguZmxvb3Iobm93KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguZmxvb3Iobm93KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBkb0NvdW50XG4gICAgICAgIH0pO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJ2aXNpYmlsaXR5SWRzIiwiY291bnRlckNsYXNzIiwiZGVmYXVsdFNwZWVkIiwid2luZG93Iiwib24iLCJnZXRWaXNpYmlsaXR5U3RhdHVzIiwiZWxWYWxGcm9tVG9wIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93U2Nyb2xsVmFsRnJvbVRvcCIsInNjcm9sbFRvcCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJNYXRoIiwiY2VpbCIsIm9mZnNldCIsInRvcCIsImVyciIsImNvdW50ZXJfaW5pdCIsImdyb3VwSWQiLCJudW0iLCJzcGVlZCIsImRpcmVjdGlvbiIsImVhY2giLCJhdHRyIiwiZWFzaW5nIiwidW5kZWZpbmVkIiwiYWRkQ2xhc3MiLCJkb0NvdW50IiwiZ3JvdXBDbGFzcyIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJ0ZXh0IiwiZmxvb3IiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=