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
  const getScrollY = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  };
  const bindStickyShadow = function ($header, scopeId) {
    if (!$header || !$header.length || !$header.hasClass('is-sticky')) {
      return;
    }
    if ($header.data('meStickyShadowBound')) {
      return;
    }
    $header.data('meStickyShadowBound', true);
    const scrollThreshold = 10;
    const scrollNs = 'scroll.emkitStickyShadow.' + (scopeId || $header[0].id || 'global');
    const updateStickyShadow = function () {
      if (getScrollY() > scrollThreshold) {
        $header.addClass('is-scrolled');
      } else {
        $header.removeClass('is-scrolled');
      }
    };
    $(window).off(scrollNs).on(scrollNs, updateStickyShadow);
    document.addEventListener('scroll', updateStickyShadow, {
      passive: true,
      capture: true
    });
    updateStickyShadow();
  };
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
      const isLayoutFour = $root.hasClass('magic-header-layout-four');
      const moveSearchToMobile = function () {
        // Layout four keeps search in the header; do not move it beside the close button.
        if (isLayoutFour || !$searchButton.length || !$mobileSearchSlot.length) {
          return;
        }
        $mobileSearchSlot.append($searchButton);
      };
      const moveSearchToDesktop = function () {
        if (!$searchButton.length || !$desktopSearchSlot.length) {
          return;
        }
        // Prefer putting search back at the start of the actions group.
        const $dividerOrUser = $desktopSearchSlot.children('.layout-four-divider, .layout-four-user, .search_block').first();
        if ($dividerOrUser.length) {
          $searchButton.insertBefore($dividerOrUser);
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

      // Sticky header: show shadow only after scroll
      bindStickyShadow($root, $scope.data('id'));
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

  // Avoid race: live sites often fire elementor/frontend/init before this file binds.
  let didInitHooks = false;
  const boot = function () {
    if (typeof elementorFrontend === 'undefined' || !elementorFrontend.hooks) {
      return false;
    }
    if (!didInitHooks) {
      emkElementor.onInit();
      didInitHooks = true;
    }
    // Fallback for headers already in DOM (theme builder / cached markup).
    $('.magic-header.is-sticky').each(function () {
      bindStickyShadow($(this), 'fallback');
    });
    return true;
  };
  if (!boot()) {
    $window.on('elementor/frontend/init', function () {
      boot();
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9uYXZfbWVudS5zY3NzPzAwZmYiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9uYXZfbWVudS5zY3NzXCJcclxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgbGV0ICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XHJcblxyXG4gICAgY29uc3QgZ2V0U2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJpbmRTdGlja3lTaGFkb3cgPSBmdW5jdGlvbiAoJGhlYWRlciwgc2NvcGVJZCkge1xyXG4gICAgICBpZiAoISRoZWFkZXIgfHwgISRoZWFkZXIubGVuZ3RoIHx8ICEkaGVhZGVyLmhhc0NsYXNzKCdpcy1zdGlja3knKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJGhlYWRlci5kYXRhKCdtZVN0aWNreVNoYWRvd0JvdW5kJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgJGhlYWRlci5kYXRhKCdtZVN0aWNreVNoYWRvd0JvdW5kJywgdHJ1ZSk7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxUaHJlc2hvbGQgPSAxMDtcclxuICAgICAgY29uc3Qgc2Nyb2xsTnMgPSAnc2Nyb2xsLmVta2l0U3RpY2t5U2hhZG93LicgKyAoc2NvcGVJZCB8fCAkaGVhZGVyWzBdLmlkIHx8ICdnbG9iYWwnKTtcclxuICAgICAgY29uc3QgdXBkYXRlU3RpY2t5U2hhZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChnZXRTY3JvbGxZKCkgPiBzY3JvbGxUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgJCh3aW5kb3cpLm9mZihzY3JvbGxOcykub24oc2Nyb2xsTnMsIHVwZGF0ZVN0aWNreVNoYWRvdyk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVN0aWNreVNoYWRvdywgeyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgICB1cGRhdGVTdGlja3lTaGFkb3coKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBsZXQgZW1rRWxlbWVudG9yID0ge1xyXG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgRV9GUk9OVCA9IGVsZW1lbnRvckZyb250ZW5kO1xyXG4gICAgICAgIGxldCB3aWRnZXRIYW5kbGVyc01hcCA9IHtcclxuICAgICAgICAgIFwiZW1fa2l0X25hdl9tZW51LmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0TmF2TWVudSxcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBFbUtpdE5hdk1lbnU6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICAgICAgIGNvbnN0ICRyb290ID0gJHNjb3BlLmZpbmQoJy5tYWdpYy1oZWFkZXInKS5maXJzdCgpLmxlbmd0aFxyXG4gICAgICAgICAgICA/ICRzY29wZS5maW5kKCcubWFnaWMtaGVhZGVyJykuZmlyc3QoKVxyXG4gICAgICAgICAgICA6ICRzY29wZTtcclxuICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkcm9vdC5maW5kKCcubW9iaWxlLW1lbnUtdG9nZ2xlJyk7XHJcbiAgICAgICAgICBjb25zdCAkcGFuZWwgPSAkcm9vdC5maW5kKCcubW9iaWxlLW1lbnUtcGFuZWwnKTtcclxuICAgICAgICAgIGNvbnN0ICRiYWNrZHJvcCA9ICRyb290LmZpbmQoJy5tb2JpbGUtbWVudS1iYWNrZHJvcCcpO1xyXG4gICAgICAgICAgY29uc3QgJGNsb3NlID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LWNsb3NlJyk7XHJcbiAgICAgICAgICBjb25zdCAkZGVza3RvcFNlYXJjaFNsb3QgPSAkcm9vdC5maW5kKCdbZGF0YS1kZXNrdG9wLXNlYXJjaC1zbG90XScpO1xyXG4gICAgICAgICAgY29uc3QgJG1vYmlsZVNlYXJjaFNsb3QgPSAkcm9vdC5maW5kKCdbZGF0YS1tb2JpbGUtc2VhcmNoLXNsb3RdJyk7XHJcbiAgICAgICAgICBjb25zdCAkc2VhcmNoQnV0dG9uID0gJHJvb3QuZmluZCgnLm1lbnUtc2VhcmNoLm9wZW5fc2VhcmNoJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBtb3ZlU2VhcmNoVG9Nb2JpbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghJHNlYXJjaEJ1dHRvbi5sZW5ndGggfHwgISRtb2JpbGVTZWFyY2hTbG90Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbW9iaWxlU2VhcmNoU2xvdC5hcHBlbmQoJHNlYXJjaEJ1dHRvbik7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1vdmVTZWFyY2hUb0Rlc2t0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghJHNlYXJjaEJ1dHRvbi5sZW5ndGggfHwgISRkZXNrdG9wU2VhcmNoU2xvdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gS2VlcCBzZWFyY2ggYmVmb3JlIHRoZSBtb2JpbGUgdG9nZ2xlIGluc2lkZSBkZXNrdG9wIGFjdGlvbnMuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0b2dnbGVJblNsb3QgPSAkZGVza3RvcFNlYXJjaFNsb3QuZmluZCgnLm1vYmlsZS1tZW51LXRvZ2dsZScpO1xyXG4gICAgICAgICAgICBpZiAoJHRvZ2dsZUluU2xvdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAkc2VhcmNoQnV0dG9uLmluc2VydEJlZm9yZSgkdG9nZ2xlSW5TbG90KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkZGVza3RvcFNlYXJjaFNsb3QucHJlcGVuZCgkc2VhcmNoQnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBvcGVuTW9iaWxlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHBhbmVsLmFkZENsYXNzKCdpcy1vcGVuJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgJGJhY2tkcm9wLmFkZENsYXNzKCdpcy1vcGVuJykucHJvcCgnaGlkZGVuJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21hZ2ljLW1vYmlsZS1tZW51LW9wZW4nKTtcclxuICAgICAgICAgICAgbW92ZVNlYXJjaFRvTW9iaWxlKCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IGNsb3NlTW9iaWxlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHBhbmVsLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAkYmFja2Ryb3AucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5wcm9wKCdoaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgJHRvZ2dsZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFnaWMtbW9iaWxlLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICBtb3ZlU2VhcmNoVG9EZXNrdG9wKCk7XHJcbiAgICAgICAgICAgICRwYW5lbC5maW5kKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICR0b2dnbGUub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJHBhbmVsLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBvcGVuTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkY2xvc2Uub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJGJhY2tkcm9wLm9mZignY2xpY2suZW1raXRNb2JpbGVNZW51Jykub24oJ2NsaWNrLmVta2l0TW9iaWxlTWVudScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwLmVta2l0TW9iaWxlTWVudScpLm9uKCdrZXl1cC5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgJHBhbmVsLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmVta2l0TW9iaWxlTWVudScpLm9uKCdyZXNpemUuZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKS5tYXRjaGVzICYmICRwYW5lbC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRyb290LmZpbmQoJy5vcGVuX3NlYXJjaCcpLm9mZignY2xpY2suZW1raXRTZWFyY2gnKS5vbignY2xpY2suZW1raXRTZWFyY2gnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAkcm9vdC5maW5kKCcuc2VhcmNoX2Jsb2NrJykudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ibG9jayAuc2VhcmNoX2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfY2xvc2UnKS5vZmYoJ2NsaWNrLmVta2l0U2VhcmNoQ2xvc2UnKS5vbignY2xpY2suZW1raXRTZWFyY2hDbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJCgnYm9keScpLm9mZignY2xpY2suZW1raXRTZWFyY2gnKS5vbignY2xpY2suZW1raXRTZWFyY2gnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuc2VhcmNoX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYm94Jykub2ZmKCdjbGljay5lbWtpdFNlYXJjaCcpLm9uKCdjbGljay5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkcm9vdC5maW5kKCcuc2VhcmNoX2lucHV0Jykub2ZmKCdrZXl1cC5lbWtpdFNlYXJjaCcpLm9uKCdrZXl1cC5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgIT09ICcnKXtcclxuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0eXBpbmcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0eXBpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gU3RpY2t5IGhlYWRlcjogc2hvdyBzaGFkb3cgb25seSBhZnRlciBzY3JvbGxcclxuICAgICAgICAgIGJpbmRTdGlja3lTaGFkb3coJHJvb3QsICRzY29wZS5kYXRhKCdpZCcpKTtcclxuXHJcbiAgICAgICAgICAkcm9vdC5maW5kKCcuY253LW5hdiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5jbnctbmF2LW1vYmlsZSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEnKVxyXG4gICAgICAgICAgLm9mZignY2xpY2suZW1raXRTdWJtZW51JylcclxuICAgICAgICAgIC5vbignY2xpY2suZW1raXRTdWJtZW51JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcztcclxuICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBsaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgY29uc3QgaGFzU3ViTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuc3ViLW1lbnUnKTtcclxuICAgICAgICAgICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICBjb25zdCBpc1BsYWNlaG9sZGVyID0gIWhyZWYgfHwgaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGluTW9iaWxlUGFuZWwgPSAhIWxpbmsuY2xvc2VzdCgnLm1vYmlsZS1tZW51LXBhbmVsJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghaGFzU3ViTWVudSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoaXNQbGFjZWhvbGRlciB8fCBpbk1vYmlsZVBhbmVsIHx8IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJykubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChzaWJsaW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEF2b2lkIHJhY2U6IGxpdmUgc2l0ZXMgb2Z0ZW4gZmlyZSBlbGVtZW50b3IvZnJvbnRlbmQvaW5pdCBiZWZvcmUgdGhpcyBmaWxlIGJpbmRzLlxyXG4gICAgbGV0IGRpZEluaXRIb29rcyA9IGZhbHNlO1xyXG4gICAgY29uc3QgYm9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50b3JGcm9udGVuZCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWVsZW1lbnRvckZyb250ZW5kLmhvb2tzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZGlkSW5pdEhvb2tzKSB7XHJcbiAgICAgICAgZW1rRWxlbWVudG9yLm9uSW5pdCgpO1xyXG4gICAgICAgIGRpZEluaXRIb29rcyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRmFsbGJhY2sgZm9yIGhlYWRlcnMgYWxyZWFkeSBpbiBET00gKHRoZW1lIGJ1aWxkZXIgLyBjYWNoZWQgbWFya3VwKS5cclxuICAgICAgJCgnLm1hZ2ljLWhlYWRlci5pcy1zdGlja3knKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBiaW5kU3RpY2t5U2hhZG93KCQodGhpcyksICdmYWxsYmFjaycpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghYm9vdCgpKSB7XHJcbiAgICAgICR3aW5kb3cub24oJ2VsZW1lbnRvci9mcm9udGVuZC9pbml0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGJvb3QoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSkoalF1ZXJ5LCB3aW5kb3cpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL3Njc3MvbmF2X21lbnUuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9uYXZfbWVudS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiJHdpbmRvdyIsImdldFNjcm9sbFkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsImJpbmRTdGlja3lTaGFkb3ciLCIkaGVhZGVyIiwic2NvcGVJZCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZGF0YSIsInNjcm9sbFRocmVzaG9sZCIsInNjcm9sbE5zIiwiaWQiLCJ1cGRhdGVTdGlja3lTaGFkb3ciLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwib2ZmIiwib24iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJlbWtFbGVtZW50b3IiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJ3aWRnZXRIYW5kbGVyc01hcCIsIkVtS2l0TmF2TWVudSIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJob29rcyIsImFkZEFjdGlvbiIsIiRzY29wZSIsIiRyb290IiwiZmluZCIsImZpcnN0IiwiJHRvZ2dsZSIsIiRwYW5lbCIsIiRiYWNrZHJvcCIsIiRjbG9zZSIsIiRkZXNrdG9wU2VhcmNoU2xvdCIsIiRtb2JpbGVTZWFyY2hTbG90IiwiJHNlYXJjaEJ1dHRvbiIsIm1vdmVTZWFyY2hUb01vYmlsZSIsImFwcGVuZCIsIm1vdmVTZWFyY2hUb0Rlc2t0b3AiLCIkdG9nZ2xlSW5TbG90IiwiaW5zZXJ0QmVmb3JlIiwicHJlcGVuZCIsIm9wZW5Nb2JpbGVNZW51IiwiYXR0ciIsInByb3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZU1vYmlsZU1lbnUiLCJyZW1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0b2dnbGVDbGFzcyIsImZvY3VzIiwidmFsIiwiZSIsImxpbmsiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiaGFzU3ViTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiaXNQbGFjZWhvbGRlciIsImluTW9iaWxlUGFuZWwiLCJjbG9zZXN0IiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzaWJsaW5nIiwiZGlkSW5pdEhvb2tzIiwiYm9vdCIsImpRdWVyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9