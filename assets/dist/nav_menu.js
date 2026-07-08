/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/nav_menu.js"
/*!***********************************!*\
  !*** ./assets/src/js/nav_menu.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_nav_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/nav_menu.scss */ "./assets/src/scss/nav_menu.scss");

(function ($, elementor) {
  "use strict";

  let $window = $(elementor);
  let emkElementor = {
    onInit: function () {
      let E_FRONT = elementorFrontend;
      let widgetHandlersMap = {
        "em_kit_nav_menu.default": emkElementor.EmKitNavMenu
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    EmKitNavMenu: function ($scope) {
      // alert('nav menu loaded');
      $('.open_search').on('click', function (event) {
        event.stopPropagation();
        $('.search_block').toggleClass('visible');
        $('.search_block .search_input').focus();
      });
      $('body').on('click', function () {
        $('.search_block').removeClass('visible');
      });
      $('.search_box').on('click', function (event) {
        event.stopPropagation();
      });
      $('.search_input').on('keyup', function (event) {
        if ($(this).val() !== '') {
          $(this).addClass('typing');
        } else {
          $(this).removeClass('typing');
        }
      });
      //offcanvas dropdown menu js
      document.querySelectorAll('.cnw-nav .menu-item-has-children > a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          link.parentElement.classList.toggle('active');
        });
      });
      const getFallbackBackdrop = function () {
        let backdrop = document.querySelector('.emkit-offcanvas-backdrop');
        if (!backdrop) {
          backdrop = document.createElement('div');
          backdrop.className = 'emkit-offcanvas-backdrop';
          backdrop.style.position = 'fixed';
          backdrop.style.top = '0';
          backdrop.style.right = '0';
          backdrop.style.bottom = '0';
          backdrop.style.left = '0';
          backdrop.style.background = 'rgba(0, 0, 0, 0.5)';
          backdrop.style.zIndex = '1040';
          backdrop.style.display = 'none';
          document.body.appendChild(backdrop);
        }
        return backdrop;
      };
      const closeFallbackOffcanvas = function (offcanvasEl) {
        offcanvasEl.classList.remove('show', 'showing', 'hiding');
        offcanvasEl.setAttribute('aria-hidden', 'true');
        const backdrop = document.querySelector('.emkit-offcanvas-backdrop');
        if (backdrop) {
          backdrop.style.display = 'none';
        }
      };

      // Ensure offcanvas opens reliably on trigger click.
      $scope.find('.mobile-menu').off('click.emkitOffcanvas').on('click.emkitOffcanvas', function () {
        const targetSelector = this.getAttribute('data-bs-target');
        if (!targetSelector) {
          return;
        }
        const offcanvasEl = document.querySelector(targetSelector);
        if (!offcanvasEl) {
          return;
        }
        if (window.bootstrap && window.bootstrap.Offcanvas) {
          window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl).show();
          return;
        }

        // Bootstrap JS fallback
        offcanvasEl.classList.add('show');
        offcanvasEl.classList.remove('showing', 'hiding');
        offcanvasEl.setAttribute('aria-modal', 'true');
        offcanvasEl.setAttribute('role', 'dialog');
        const backdrop = getFallbackBackdrop();
        backdrop.style.display = 'block';
        backdrop.onclick = function () {
          closeFallbackOffcanvas(offcanvasEl);
        };
      });
      $scope.find('[data-bs-dismiss="offcanvas"]').off('click.emkitOffcanvasDismiss').on('click.emkitOffcanvasDismiss', function () {
        if (window.bootstrap && window.bootstrap.Offcanvas) {
          return;
        }
        const offcanvasEl = this.closest('.offcanvas');
        if (!offcanvasEl) {
          return;
        }
        closeFallbackOffcanvas(offcanvasEl);
      });
    }
  };
  $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/nav_menu.scss"
/*!***************************************!*\
  !*** ./assets/src/scss/nav_menu.scss ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./assets/src/scss/nav_menu.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/nav_menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLENBQUM7TUFDckMsQ0FBQyxDQUFDO0lBQ047RUFDRixDQUFDO0VBRURoRCxPQUFPLENBQUNhLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRVosWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFNkQsTUFBTSxFQUFFUixNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUM1SHBCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL25hdl9tZW51LmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvbmF2X21lbnUuc2NzcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25hdl9tZW51LnNjc3NcIlxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIGxldCBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgbGV0IHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfbmF2X21lbnUuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXROYXZNZW51LFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0TmF2TWVudTogZnVuY3Rpb24gKCRzY29wZSkgeyAgIFxyXG4gICAgICAgICAgLy8gYWxlcnQoJ25hdiBtZW51IGxvYWRlZCcpO1xyXG4gICAgICAgICAgJCgnLm9wZW5fc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrIC5zZWFyY2hfaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNlYXJjaF9ib3gnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnLnNlYXJjaF9pbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vb2ZmY2FudmFzIGRyb3Bkb3duIG1lbnUganNcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbnctbmF2IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpXHJcbiAgICAgICAgICAuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgZ2V0RmFsbGJhY2tCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVta2l0LW9mZmNhbnZhcy1iYWNrZHJvcCcpO1xyXG4gICAgICAgICAgICBpZiAoIWJhY2tkcm9wKSB7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSAnZW1raXQtb2ZmY2FudmFzLWJhY2tkcm9wJztcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnJpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS56SW5kZXggPSAnMTA0MCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJhY2tkcm9wO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjbG9zZUZhbGxiYWNrT2ZmY2FudmFzID0gZnVuY3Rpb24gKG9mZmNhbnZhc0VsKSB7XHJcbiAgICAgICAgICAgIG9mZmNhbnZhc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAnc2hvd2luZycsICdoaWRpbmcnKTtcclxuICAgICAgICAgICAgb2ZmY2FudmFzRWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWtpdC1vZmZjYW52YXMtYmFja2Ryb3AnKTtcclxuICAgICAgICAgICAgaWYgKGJhY2tkcm9wKSB7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAvLyBFbnN1cmUgb2ZmY2FudmFzIG9wZW5zIHJlbGlhYmx5IG9uIHRyaWdnZXIgY2xpY2suXHJcbiAgICAgICAgICAkc2NvcGUuZmluZCgnLm1vYmlsZS1tZW51Jykub2ZmKCdjbGljay5lbWtpdE9mZmNhbnZhcycpLm9uKCdjbGljay5lbWtpdE9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2ZmY2FudmFzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFvZmZjYW52YXNFbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5ib290c3RyYXAgJiYgd2luZG93LmJvb3RzdHJhcC5PZmZjYW52YXMpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYm9vdHN0cmFwLk9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKG9mZmNhbnZhc0VsKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCb290c3RyYXAgSlMgZmFsbGJhY2tcclxuICAgICAgICAgICAgb2ZmY2FudmFzRWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICBvZmZjYW52YXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJywgJ2hpZGluZycpO1xyXG4gICAgICAgICAgICBvZmZjYW52YXNFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICBvZmZjYW52YXNFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWNrZHJvcCA9IGdldEZhbGxiYWNrQmFja2Ryb3AoKTtcclxuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgY2xvc2VGYWxsYmFja09mZmNhbnZhcyhvZmZjYW52YXNFbCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkc2NvcGUuZmluZCgnW2RhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXScpLm9mZignY2xpY2suZW1raXRPZmZjYW52YXNEaXNtaXNzJykub24oJ2NsaWNrLmVta2l0T2ZmY2FudmFzRGlzbWlzcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5ib290c3RyYXAgJiYgd2luZG93LmJvb3RzdHJhcC5PZmZjYW52YXMpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZmNhbnZhc0VsID0gdGhpcy5jbG9zZXN0KCcub2ZmY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGlmICghb2ZmY2FudmFzRWwpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsb3NlRmFsbGJhY2tPZmZjYW52YXMob2ZmY2FudmFzRWwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0TmF2TWVudSIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIm9uIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVDbGFzcyIsImZvY3VzIiwicmVtb3ZlQ2xhc3MiLCJ2YWwiLCJhZGRDbGFzcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRGYWxsYmFja0JhY2tkcm9wIiwiYmFja2Ryb3AiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsb3NlRmFsbGJhY2tPZmZjYW52YXMiLCJvZmZjYW52YXNFbCIsInJlbW92ZSIsInNldEF0dHJpYnV0ZSIsImZpbmQiLCJvZmYiLCJ0YXJnZXRTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsIndpbmRvdyIsImJvb3RzdHJhcCIsIk9mZmNhbnZhcyIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJzaG93IiwiYWRkIiwib25jbGljayIsImNsb3Nlc3QiLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==