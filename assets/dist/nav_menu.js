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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLENBQUM7TUFDckMsQ0FBQyxDQUFDO0lBQ047RUFDRixDQUFDO0VBRURoRCxPQUFPLENBQUNhLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRVosWUFBWSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFNkQsTUFBTSxFQUFFUixNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUM1SHBCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL25hdl9tZW51LmpzIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL3Njc3MvbmF2X21lbnUuc2Nzcz8wMGZmIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvbmF2X21lbnUuc2Nzc1wiXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGxldCAkd2luZG93ID0gJChlbGVtZW50b3IpO1xuICBcbiAgICBsZXQgZW1rRWxlbWVudG9yID0ge1xuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XG4gICAgICAgIGxldCB3aWRnZXRIYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICBcImVtX2tpdF9uYXZfbWVudS5kZWZhdWx0XCI6IGVta0VsZW1lbnRvci5FbUtpdE5hdk1lbnUsXG4gICAgICAgIH07XG4gIFxuICAgICAgICAkLmVhY2god2lkZ2V0SGFuZGxlcnNNYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBFbUtpdE5hdk1lbnU6IGZ1bmN0aW9uICgkc2NvcGUpIHsgICBcbiAgICAgICAgICAvLyBhbGVydCgnbmF2IG1lbnUgbG9hZGVkJyk7XG4gICAgICAgICAgJCgnLm9wZW5fc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrIC5zZWFyY2hfaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJy5zZWFyY2hfYm94Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkKCcuc2VhcmNoX2lucHV0Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPT0gJycpe1xuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0eXBpbmcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3R5cGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vb2ZmY2FudmFzIGRyb3Bkb3duIG1lbnUganNcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY253LW5hdiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKVxuICAgICAgICAgIC5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgZ2V0RmFsbGJhY2tCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWtpdC1vZmZjYW52YXMtYmFja2Ryb3AnKTtcbiAgICAgICAgICAgIGlmICghYmFja2Ryb3ApIHtcbiAgICAgICAgICAgICAgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gJ2Vta2l0LW9mZmNhbnZhcy1iYWNrZHJvcCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5yaWdodCA9ICcwJztcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuYm90dG9tID0gJzAnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnpJbmRleCA9ICcxMDQwJztcbiAgICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBiYWNrZHJvcDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgY2xvc2VGYWxsYmFja09mZmNhbnZhcyA9IGZ1bmN0aW9uIChvZmZjYW52YXNFbCkge1xuICAgICAgICAgICAgb2ZmY2FudmFzRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICdzaG93aW5nJywgJ2hpZGluZycpO1xuICAgICAgICAgICAgb2ZmY2FudmFzRWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVta2l0LW9mZmNhbnZhcy1iYWNrZHJvcCcpO1xuICAgICAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIEVuc3VyZSBvZmZjYW52YXMgb3BlbnMgcmVsaWFibHkgb24gdHJpZ2dlciBjbGljay5cbiAgICAgICAgICAkc2NvcGUuZmluZCgnLm1vYmlsZS1tZW51Jykub2ZmKCdjbGljay5lbWtpdE9mZmNhbnZhcycpLm9uKCdjbGljay5lbWtpdE9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb2ZmY2FudmFzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGlmICghb2ZmY2FudmFzRWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmJvb3RzdHJhcCAmJiB3aW5kb3cuYm9vdHN0cmFwLk9mZmNhbnZhcykge1xuICAgICAgICAgICAgICB3aW5kb3cuYm9vdHN0cmFwLk9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKG9mZmNhbnZhc0VsKS5zaG93KCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQm9vdHN0cmFwIEpTIGZhbGxiYWNrXG4gICAgICAgICAgICBvZmZjYW52YXNFbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICBvZmZjYW52YXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93aW5nJywgJ2hpZGluZycpO1xuICAgICAgICAgICAgb2ZmY2FudmFzRWwuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgICAgICAgICAgIG9mZmNhbnZhc0VsLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcblxuICAgICAgICAgICAgY29uc3QgYmFja2Ryb3AgPSBnZXRGYWxsYmFja0JhY2tkcm9wKCk7XG4gICAgICAgICAgICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGJhY2tkcm9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNsb3NlRmFsbGJhY2tPZmZjYW52YXMob2ZmY2FudmFzRWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRzY29wZS5maW5kKCdbZGF0YS1icy1kaXNtaXNzPVwib2ZmY2FudmFzXCJdJykub2ZmKCdjbGljay5lbWtpdE9mZmNhbnZhc0Rpc21pc3MnKS5vbignY2xpY2suZW1raXRPZmZjYW52YXNEaXNtaXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ib290c3RyYXAgJiYgd2luZG93LmJvb3RzdHJhcC5PZmZjYW52YXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvZmZjYW52YXNFbCA9IHRoaXMuY2xvc2VzdCgnLm9mZmNhbnZhcycpO1xuICAgICAgICAgICAgaWYgKCFvZmZjYW52YXNFbCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsb3NlRmFsbGJhY2tPZmZjYW52YXMob2ZmY2FudmFzRWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICBcbiAgICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgZW1rRWxlbWVudG9yLm9uSW5pdCk7XG4gIH0pKGpRdWVyeSwgd2luZG93KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9uYXZfbWVudS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL25hdl9tZW51LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIiQiLCJlbGVtZW50b3IiLCIkd2luZG93IiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE5hdk1lbnUiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCJvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsInJlbW92ZUNsYXNzIiwidmFsIiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0RmFsbGJhY2tCYWNrZHJvcCIsImJhY2tkcm9wIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbG9zZUZhbGxiYWNrT2ZmY2FudmFzIiwib2ZmY2FudmFzRWwiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJmaW5kIiwib2ZmIiwidGFyZ2V0U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJib290c3RyYXAiLCJPZmZjYW52YXMiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwic2hvdyIsImFkZCIsIm9uY2xpY2siLCJjbG9zZXN0IiwialF1ZXJ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=