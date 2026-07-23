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
      const $root = $scope.find('.magic-header').first().length ? $scope.find('.magic-header').first() : $scope;
      const $toggle = $root.find('.mobile-menu-toggle');
      const $panel = $root.find('.mobile-menu-panel');
      const $backdrop = $root.find('.mobile-menu-backdrop');
      const $close = $root.find('.mobile-menu-close');
      const $desktopSearchSlot = $root.find('[data-desktop-search-slot]');
      const $mobileSearchSlot = $root.find('[data-mobile-search-slot]');
      const $searchButton = $root.find('.menu-search.open_search').first();
      const moveSearchToMobile = function () {
        if (!$searchButton.length || !$mobileSearchSlot.length) {
          return;
        }
        $mobileSearchSlot.append($searchButton);
      };
      const moveSearchToDesktop = function () {
        if (!$searchButton.length || !$desktopSearchSlot.length) {
          return;
        }
        // Keep search before the mobile toggle inside desktop actions.
        const $toggleInSlot = $desktopSearchSlot.find('.mobile-menu-toggle');
        if ($toggleInSlot.length) {
          $searchButton.insertBefore($toggleInSlot);
        } else {
          $desktopSearchSlot.prepend($searchButton);
        }
      };
      const openMobileMenu = function () {
        $panel.addClass('is-open').attr('aria-hidden', 'false');
        $backdrop.addClass('is-open').prop('hidden', false);
        $toggle.attr('aria-expanded', 'true');
        document.body.classList.add('magic-mobile-menu-open');
        moveSearchToMobile();
      };
      const closeMobileMenu = function () {
        $panel.removeClass('is-open').attr('aria-hidden', 'true');
        $backdrop.removeClass('is-open').prop('hidden', true);
        $toggle.attr('aria-expanded', 'false');
        document.body.classList.remove('magic-mobile-menu-open');
        moveSearchToDesktop();
        $panel.find('.menu-item-has-children.active').removeClass('active');
      };
      $toggle.off('click.emkitMobileMenu').on('click.emkitMobileMenu', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if ($panel.hasClass('is-open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
      $close.off('click.emkitMobileMenu').on('click.emkitMobileMenu', function (event) {
        event.preventDefault();
        closeMobileMenu();
      });
      $backdrop.off('click.emkitMobileMenu').on('click.emkitMobileMenu', function () {
        closeMobileMenu();
      });
      $(document).off('keyup.emkitMobileMenu').on('keyup.emkitMobileMenu', function (event) {
        if (event.key === 'Escape' && $panel.hasClass('is-open')) {
          closeMobileMenu();
        }
      });
      $(window).off('resize.emkitMobileMenu').on('resize.emkitMobileMenu', function () {
        if (window.matchMedia('(min-width: 1024px)').matches && $panel.hasClass('is-open')) {
          closeMobileMenu();
        }
      });
      $root.find('.open_search').off('click.emkitSearch').on('click.emkitSearch', function (event) {
        event.stopPropagation();
        $root.find('.search_block').toggleClass('visible');
        $root.find('.search_block .search_input').focus();
      });
      $root.find('.search_close').off('click.emkitSearchClose').on('click.emkitSearchClose', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $root.find('.search_block').removeClass('visible');
      });
      $('body').off('click.emkitSearch').on('click.emkitSearch', function () {
        $('.search_block').removeClass('visible');
      });
      $root.find('.search_box').off('click.emkitSearch').on('click.emkitSearch', function (event) {
        event.stopPropagation();
      });
      $root.find('.search_input').off('keyup.emkitSearch').on('keyup.emkitSearch', function () {
        if ($(this).val() !== '') {
          $(this).addClass('typing');
        } else {
          $(this).removeClass('typing');
        }
      });
      $root.find('.cnw-nav .menu-item-has-children > a, .cnw-nav-mobile .menu-item-has-children > a').off('click.emkitSubmenu').on('click.emkitSubmenu', function (e) {
        const link = this;
        const parent = link.parentElement;
        const hasSubMenu = parent.querySelector(':scope > .sub-menu');
        const href = link.getAttribute('href');
        const isPlaceholder = !href || href === '#' || href === '';
        const inMobilePanel = !!link.closest('.mobile-menu-panel');
        if (!hasSubMenu) {
          return;
        }
        if (isPlaceholder || inMobilePanel || window.matchMedia('(max-width: 1023px)').matches) {
          e.preventDefault();
          parent.classList.toggle('active');
          parent.parentElement?.querySelectorAll(':scope > .menu-item-has-children.active').forEach(sibling => {
            if (sibling !== parent) {
              sibling.classList.remove('active');
            }
          });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxDQUFDQyxNQUFNLENBQUM7QUFDNUQsQ0FBQyxFQUFFbUUsTUFBTSxFQUFFckIsTUFBTSxDQUFDLEM7Ozs7Ozs7Ozs7O0FDNUpwQjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9uYXZfbWVudS5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3M/MDBmZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25hdl9tZW51LnNjc3NcIlxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuICBcclxuICAgIGxldCBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgbGV0IHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfbmF2X21lbnUuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXROYXZNZW51LFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0TmF2TWVudTogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICAgY29uc3QgJHJvb3QgPSAkc2NvcGUuZmluZCgnLm1hZ2ljLWhlYWRlcicpLmZpcnN0KCkubGVuZ3RoXHJcbiAgICAgICAgICAgID8gJHNjb3BlLmZpbmQoJy5tYWdpYy1oZWFkZXInKS5maXJzdCgpXHJcbiAgICAgICAgICAgIDogJHNjb3BlO1xyXG4gICAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICRyb290LmZpbmQoJy5tb2JpbGUtbWVudS10b2dnbGUnKTtcclxuICAgICAgICAgIGNvbnN0ICRwYW5lbCA9ICRyb290LmZpbmQoJy5tb2JpbGUtbWVudS1wYW5lbCcpO1xyXG4gICAgICAgICAgY29uc3QgJGJhY2tkcm9wID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LWJhY2tkcm9wJyk7XHJcbiAgICAgICAgICBjb25zdCAkY2xvc2UgPSAkcm9vdC5maW5kKCcubW9iaWxlLW1lbnUtY2xvc2UnKTtcclxuICAgICAgICAgIGNvbnN0ICRkZXNrdG9wU2VhcmNoU2xvdCA9ICRyb290LmZpbmQoJ1tkYXRhLWRlc2t0b3Atc2VhcmNoLXNsb3RdJyk7XHJcbiAgICAgICAgICBjb25zdCAkbW9iaWxlU2VhcmNoU2xvdCA9ICRyb290LmZpbmQoJ1tkYXRhLW1vYmlsZS1zZWFyY2gtc2xvdF0nKTtcclxuICAgICAgICAgIGNvbnN0ICRzZWFyY2hCdXR0b24gPSAkcm9vdC5maW5kKCcubWVudS1zZWFyY2gub3Blbl9zZWFyY2gnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1vdmVTZWFyY2hUb01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkc2VhcmNoQnV0dG9uLmxlbmd0aCB8fCAhJG1vYmlsZVNlYXJjaFNsb3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRtb2JpbGVTZWFyY2hTbG90LmFwcGVuZCgkc2VhcmNoQnV0dG9uKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgbW92ZVNlYXJjaFRvRGVza3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkc2VhcmNoQnV0dG9uLmxlbmd0aCB8fCAhJGRlc2t0b3BTZWFyY2hTbG90Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBLZWVwIHNlYXJjaCBiZWZvcmUgdGhlIG1vYmlsZSB0b2dnbGUgaW5zaWRlIGRlc2t0b3AgYWN0aW9ucy5cclxuICAgICAgICAgICAgY29uc3QgJHRvZ2dsZUluU2xvdCA9ICRkZXNrdG9wU2VhcmNoU2xvdC5maW5kKCcubW9iaWxlLW1lbnUtdG9nZ2xlJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlSW5TbG90Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICRzZWFyY2hCdXR0b24uaW5zZXJ0QmVmb3JlKCR0b2dnbGVJblNsb3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICRkZXNrdG9wU2VhcmNoU2xvdC5wcmVwZW5kKCRzZWFyY2hCdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9wZW5Nb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkcGFuZWwuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAkYmFja2Ryb3AuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5wcm9wKCdoaWRkZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWFnaWMtbW9iaWxlLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICBtb3ZlU2VhcmNoVG9Nb2JpbGUoKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgY2xvc2VNb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICRiYWNrZHJvcC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLnByb3AoJ2hpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtYWdpYy1tb2JpbGUtbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgIG1vdmVTZWFyY2hUb0Rlc2t0b3AoKTtcclxuICAgICAgICAgICAgJHBhbmVsLmZpbmQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgJHRvZ2dsZS5vZmYoJ2NsaWNrLmVta2l0TW9iaWxlTWVudScpLm9uKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICgkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRjbG9zZS5vZmYoJ2NsaWNrLmVta2l0TW9iaWxlTWVudScpLm9uKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkYmFja2Ryb3Aub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAuZW1raXRNb2JpbGVNZW51Jykub24oJ2tleXVwLmVta2l0TW9iaWxlTWVudScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiAkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuZW1raXRNb2JpbGVNZW51Jykub24oJ3Jlc2l6ZS5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMgJiYgJHBhbmVsLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLm9wZW5fc2VhcmNoJykub2ZmKCdjbGljay5lbWtpdFNlYXJjaCcpLm9uKCdjbGljay5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkcm9vdC5maW5kKCcuc2VhcmNoX2Jsb2NrIC5zZWFyY2hfaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9jbG9zZScpLm9mZignY2xpY2suZW1raXRTZWFyY2hDbG9zZScpLm9uKCdjbGljay5lbWtpdFNlYXJjaENsb3NlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ibG9jaycpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5Jykub2ZmKCdjbGljay5lbWtpdFNlYXJjaCcpLm9uKCdjbGljay5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ib3gnKS5vZmYoJ2NsaWNrLmVta2l0U2VhcmNoJykub24oJ2NsaWNrLmVta2l0U2VhcmNoJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfaW5wdXQnKS5vZmYoJ2tleXVwLmVta2l0U2VhcmNoJykub24oJ2tleXVwLmVta2l0U2VhcmNoJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkcm9vdC5maW5kKCcuY253LW5hdiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5jbnctbmF2LW1vYmlsZSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKVxyXG4gICAgICAgICAgLm9mZignY2xpY2suZW1raXRTdWJtZW51JylcclxuICAgICAgICAgIC5vbignY2xpY2suZW1raXRTdWJtZW51JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcztcclxuICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBsaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgaGFzU3ViTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuc3ViLW1lbnUnKTtcclxuICAgICAgICAgICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICBjb25zdCBpc1BsYWNlaG9sZGVyID0gIWhyZWYgfHwgaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGluTW9iaWxlUGFuZWwgPSAhIWxpbmsuY2xvc2VzdCgnLm1vYmlsZS1tZW51LXBhbmVsJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghaGFzU3ViTWVudSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoaXNQbGFjZWhvbGRlciB8fCBpbk1vYmlsZVBhbmVsIHx8IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChzaWJsaW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgJHdpbmRvdy5vbihcImVsZW1lbnRvci9mcm9udGVuZC9pbml0XCIsIGVta0VsZW1lbnRvci5vbkluaXQpO1xyXG4gIH0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0TmF2TWVudSIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiRyb290IiwiZmluZCIsImZpcnN0IiwibGVuZ3RoIiwiJHRvZ2dsZSIsIiRwYW5lbCIsIiRiYWNrZHJvcCIsIiRjbG9zZSIsIiRkZXNrdG9wU2VhcmNoU2xvdCIsIiRtb2JpbGVTZWFyY2hTbG90IiwiJHNlYXJjaEJ1dHRvbiIsIm1vdmVTZWFyY2hUb01vYmlsZSIsImFwcGVuZCIsIm1vdmVTZWFyY2hUb0Rlc2t0b3AiLCIkdG9nZ2xlSW5TbG90IiwiaW5zZXJ0QmVmb3JlIiwicHJlcGVuZCIsIm9wZW5Nb2JpbGVNZW51IiwiYWRkQ2xhc3MiLCJhdHRyIiwicHJvcCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlTW9iaWxlTWVudSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwib2ZmIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzQ2xhc3MiLCJrZXkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJ2YWwiLCJlIiwibGluayIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJoYXNTdWJNZW51IiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJpc1BsYWNlaG9sZGVyIiwiaW5Nb2JpbGVQYW5lbCIsImNsb3Nlc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNpYmxpbmciLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==