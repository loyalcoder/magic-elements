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

      // Apps fullscreen offcanvas (Layout Four)
      const $appsTrigger = $root.find('.open-apps-offcanvas');
      let $appsOffcanvas = $root.find('.magic-apps-offcanvas').first();
      if ($appsTrigger.length && $appsOffcanvas.length) {
        const scopeId = $scope.data('id') || '';
        const appsNs = 'emkitAppsOffcanvas.' + scopeId;

        // Remove stale panels from previous editor re-renders.
        $('.magic-apps-offcanvas[data-me-apps-scope="' + scopeId + '"]').not($appsOffcanvas).remove();
        if (!$appsOffcanvas.data('meAppsMoved')) {
          $appsOffcanvas.addClass('elementor-element-' + scopeId).attr('data-me-apps-scope', scopeId).appendTo(document.body).data('meAppsMoved', true);
        }
        const openAppsOffcanvas = function () {
          closeMobileMenu();
          $appsOffcanvas = $('.magic-apps-offcanvas[data-me-apps-scope="' + scopeId + '"]').first();
          $appsOffcanvas.prop('hidden', false);
          // Force reflow so CSS transition runs after unhiding.
          void $appsOffcanvas[0].offsetWidth;
          $appsOffcanvas.addClass('is-open').attr('aria-hidden', 'false');
          $appsTrigger.attr('aria-expanded', 'true');
          document.body.classList.add('magic-apps-offcanvas-open');
        };
        const closeAppsOffcanvas = function () {
          $appsOffcanvas = $('.magic-apps-offcanvas[data-me-apps-scope="' + scopeId + '"]').first();
          $appsOffcanvas.removeClass('is-open').attr('aria-hidden', 'true');
          $appsTrigger.attr('aria-expanded', 'false');
          document.body.classList.remove('magic-apps-offcanvas-open');
          const duration = parseFloat(getComputedStyle($appsOffcanvas[0]).getPropertyValue('--magic-apps-offcanvas-duration')) || 450;
          window.setTimeout(function () {
            if (!$appsOffcanvas.hasClass('is-open')) {
              $appsOffcanvas.prop('hidden', true);
            }
          }, duration);
        };
        $appsTrigger.off('click.' + appsNs).on('click.' + appsNs, function (event) {
          event.preventDefault();
          event.stopPropagation();
          if ($appsOffcanvas.hasClass('is-open')) {
            closeAppsOffcanvas();
          } else {
            openAppsOffcanvas();
          }
        });
        $appsOffcanvas.off('click.' + appsNs, '[data-apps-offcanvas-close]').on('click.' + appsNs, '[data-apps-offcanvas-close]', function (event) {
          event.preventDefault();
          closeAppsOffcanvas();
        });
        $(document).off('keyup.' + appsNs).on('keyup.' + appsNs, function (event) {
          if (event.key === 'Escape' && $appsOffcanvas.hasClass('is-open')) {
            closeAppsOffcanvas();
          }
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9uYXZfbWVudS5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3M/MDBmZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25hdl9tZW51LnNjc3NcIlxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBsZXQgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcblxuICAgIGNvbnN0IGdldFNjcm9sbFkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgICB9O1xuXG4gICAgY29uc3QgYmluZFN0aWNreVNoYWRvdyA9IGZ1bmN0aW9uICgkaGVhZGVyLCBzY29wZUlkKSB7XG4gICAgICBpZiAoISRoZWFkZXIgfHwgISRoZWFkZXIubGVuZ3RoIHx8ICEkaGVhZGVyLmhhc0NsYXNzKCdpcy1zdGlja3knKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoJGhlYWRlci5kYXRhKCdtZVN0aWNreVNoYWRvd0JvdW5kJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJGhlYWRlci5kYXRhKCdtZVN0aWNreVNoYWRvd0JvdW5kJywgdHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRocmVzaG9sZCA9IDEwO1xuICAgICAgY29uc3Qgc2Nyb2xsTnMgPSAnc2Nyb2xsLmVta2l0U3RpY2t5U2hhZG93LicgKyAoc2NvcGVJZCB8fCAkaGVhZGVyWzBdLmlkIHx8ICdnbG9iYWwnKTtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0aWNreVNoYWRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdldFNjcm9sbFkoKSA+IHNjcm9sbFRocmVzaG9sZCkge1xuICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnaXMtc2Nyb2xsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh3aW5kb3cpLm9mZihzY3JvbGxOcykub24oc2Nyb2xsTnMsIHVwZGF0ZVN0aWNreVNoYWRvdyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVTdGlja3lTaGFkb3csIHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgIHVwZGF0ZVN0aWNreVNoYWRvdygpO1xuICAgIH07XG4gIFxuICAgIGxldCBlbWtFbGVtZW50b3IgPSB7XG4gICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgICAgbGV0IHdpZGdldEhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgIFwiZW1fa2l0X25hdl9tZW51LmRlZmF1bHRcIjogZW1rRWxlbWVudG9yLkVtS2l0TmF2TWVudSxcbiAgICAgICAgfTtcbiAgXG4gICAgICAgICQuZWFjaCh3aWRnZXRIYW5kbGVyc01hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgRV9GUk9OVC5ob29rcy5hZGRBY3Rpb24oXCJmcm9udGVuZC9lbGVtZW50X3JlYWR5L1wiICsgd2lkZ2V0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIEVtS2l0TmF2TWVudTogZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAgIGNvbnN0ICRyb290ID0gJHNjb3BlLmZpbmQoJy5tYWdpYy1oZWFkZXInKS5maXJzdCgpLmxlbmd0aFxuICAgICAgICAgICAgPyAkc2NvcGUuZmluZCgnLm1hZ2ljLWhlYWRlcicpLmZpcnN0KClcbiAgICAgICAgICAgIDogJHNjb3BlO1xuICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkcm9vdC5maW5kKCcubW9iaWxlLW1lbnUtdG9nZ2xlJyk7XG4gICAgICAgICAgY29uc3QgJHBhbmVsID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LXBhbmVsJyk7XG4gICAgICAgICAgY29uc3QgJGJhY2tkcm9wID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LWJhY2tkcm9wJyk7XG4gICAgICAgICAgY29uc3QgJGNsb3NlID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LWNsb3NlJyk7XG4gICAgICAgICAgY29uc3QgJGRlc2t0b3BTZWFyY2hTbG90ID0gJHJvb3QuZmluZCgnW2RhdGEtZGVza3RvcC1zZWFyY2gtc2xvdF0nKTtcbiAgICAgICAgICBjb25zdCAkbW9iaWxlU2VhcmNoU2xvdCA9ICRyb290LmZpbmQoJ1tkYXRhLW1vYmlsZS1zZWFyY2gtc2xvdF0nKTtcbiAgICAgICAgICBjb25zdCAkc2VhcmNoQnV0dG9uID0gJHJvb3QuZmluZCgnLm1lbnUtc2VhcmNoLm9wZW5fc2VhcmNoJykuZmlyc3QoKTtcbiAgICAgICAgICBjb25zdCBpc0xheW91dEZvdXIgPSAkcm9vdC5oYXNDbGFzcygnbWFnaWMtaGVhZGVyLWxheW91dC1mb3VyJyk7XG5cbiAgICAgICAgICBjb25zdCBtb3ZlU2VhcmNoVG9Nb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBMYXlvdXQgZm91ciBrZWVwcyBzZWFyY2ggaW4gdGhlIGhlYWRlcjsgZG8gbm90IG1vdmUgaXQgYmVzaWRlIHRoZSBjbG9zZSBidXR0b24uXG4gICAgICAgICAgICBpZiAoaXNMYXlvdXRGb3VyIHx8ICEkc2VhcmNoQnV0dG9uLmxlbmd0aCB8fCAhJG1vYmlsZVNlYXJjaFNsb3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRtb2JpbGVTZWFyY2hTbG90LmFwcGVuZCgkc2VhcmNoQnV0dG9uKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgbW92ZVNlYXJjaFRvRGVza3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghJHNlYXJjaEJ1dHRvbi5sZW5ndGggfHwgISRkZXNrdG9wU2VhcmNoU2xvdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmVyIHB1dHRpbmcgc2VhcmNoIGJhY2sgYXQgdGhlIHN0YXJ0IG9mIHRoZSBhY3Rpb25zIGdyb3VwLlxuICAgICAgICAgICAgY29uc3QgJGRpdmlkZXJPclVzZXIgPSAkZGVza3RvcFNlYXJjaFNsb3QuY2hpbGRyZW4oJy5sYXlvdXQtZm91ci1kaXZpZGVyLCAubGF5b3V0LWZvdXItdXNlciwgLnNlYXJjaF9ibG9jaycpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJGRpdmlkZXJPclVzZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRzZWFyY2hCdXR0b24uaW5zZXJ0QmVmb3JlKCRkaXZpZGVyT3JVc2VyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gS2VlcCBzZWFyY2ggYmVmb3JlIHRoZSBtb2JpbGUgdG9nZ2xlIGluc2lkZSBkZXNrdG9wIGFjdGlvbnMuXG4gICAgICAgICAgICBjb25zdCAkdG9nZ2xlSW5TbG90ID0gJGRlc2t0b3BTZWFyY2hTbG90LmZpbmQoJy5tb2JpbGUtbWVudS10b2dnbGUnKTtcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlSW5TbG90Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAkc2VhcmNoQnV0dG9uLmluc2VydEJlZm9yZSgkdG9nZ2xlSW5TbG90KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRkZXNrdG9wU2VhcmNoU2xvdC5wcmVwZW5kKCRzZWFyY2hCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBvcGVuTW9iaWxlTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwYW5lbC5hZGRDbGFzcygnaXMtb3BlbicpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAkYmFja2Ryb3AuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5wcm9wKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtYWdpYy1tb2JpbGUtbWVudS1vcGVuJyk7XG4gICAgICAgICAgICBtb3ZlU2VhcmNoVG9Nb2JpbGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgY2xvc2VNb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBhbmVsLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICAgICAgJGJhY2tkcm9wLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykucHJvcCgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFnaWMtbW9iaWxlLW1lbnUtb3BlbicpO1xuICAgICAgICAgICAgbW92ZVNlYXJjaFRvRGVza3RvcCgpO1xuICAgICAgICAgICAgJHBhbmVsLmZpbmQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJHRvZ2dsZS5vZmYoJ2NsaWNrLmVta2l0TW9iaWxlTWVudScpLm9uKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICgkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkY2xvc2Uub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkYmFja2Ryb3Aub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwLmVta2l0TW9iaWxlTWVudScpLm9uKCdrZXl1cC5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmICRwYW5lbC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmVta2l0TW9iaWxlTWVudScpLm9uKCdyZXNpemUuZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJykubWF0Y2hlcyAmJiAkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRyb290LmZpbmQoJy5vcGVuX3NlYXJjaCcpLm9mZignY2xpY2suZW1raXRTZWFyY2gnKS5vbignY2xpY2suZW1raXRTZWFyY2gnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ibG9jayAuc2VhcmNoX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfY2xvc2UnKS5vZmYoJ2NsaWNrLmVta2l0U2VhcmNoQ2xvc2UnKS5vbignY2xpY2suZW1raXRTZWFyY2hDbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJCgnYm9keScpLm9mZignY2xpY2suZW1raXRTZWFyY2gnKS5vbignY2xpY2suZW1raXRTZWFyY2gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnLnNlYXJjaF9ibG9jaycpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkcm9vdC5maW5kKCcuc2VhcmNoX2JveCcpLm9mZignY2xpY2suZW1raXRTZWFyY2gnKS5vbignY2xpY2suZW1raXRTZWFyY2gnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfaW5wdXQnKS5vZmYoJ2tleXVwLmVta2l0U2VhcmNoJykub24oJ2tleXVwLmVta2l0U2VhcmNoJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgIT09ICcnKXtcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndHlwaW5nJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0eXBpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFN0aWNreSBoZWFkZXI6IHNob3cgc2hhZG93IG9ubHkgYWZ0ZXIgc2Nyb2xsXG4gICAgICAgICAgYmluZFN0aWNreVNoYWRvdygkcm9vdCwgJHNjb3BlLmRhdGEoJ2lkJykpO1xuXG4gICAgICAgICAgLy8gQXBwcyBmdWxsc2NyZWVuIG9mZmNhbnZhcyAoTGF5b3V0IEZvdXIpXG4gICAgICAgICAgY29uc3QgJGFwcHNUcmlnZ2VyID0gJHJvb3QuZmluZCgnLm9wZW4tYXBwcy1vZmZjYW52YXMnKTtcbiAgICAgICAgICBsZXQgJGFwcHNPZmZjYW52YXMgPSAkcm9vdC5maW5kKCcubWFnaWMtYXBwcy1vZmZjYW52YXMnKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkYXBwc1RyaWdnZXIubGVuZ3RoICYmICRhcHBzT2ZmY2FudmFzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9ICRzY29wZS5kYXRhKCdpZCcpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgYXBwc05zID0gJ2Vta2l0QXBwc09mZmNhbnZhcy4nICsgc2NvcGVJZDtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHN0YWxlIHBhbmVscyBmcm9tIHByZXZpb3VzIGVkaXRvciByZS1yZW5kZXJzLlxuICAgICAgICAgICAgJCgnLm1hZ2ljLWFwcHMtb2ZmY2FudmFzW2RhdGEtbWUtYXBwcy1zY29wZT1cIicgKyBzY29wZUlkICsgJ1wiXScpLm5vdCgkYXBwc09mZmNhbnZhcykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICghJGFwcHNPZmZjYW52YXMuZGF0YSgnbWVBcHBzTW92ZWQnKSkge1xuICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhc1xuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZWxlbWVudG9yLWVsZW1lbnQtJyArIHNjb3BlSWQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtbWUtYXBwcy1zY29wZScsIHNjb3BlSWQpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ21lQXBwc01vdmVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wZW5BcHBzT2ZmY2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgICAgICAgJGFwcHNPZmZjYW52YXMgPSAkKCcubWFnaWMtYXBwcy1vZmZjYW52YXNbZGF0YS1tZS1hcHBzLXNjb3BlPVwiJyArIHNjb3BlSWQgKyAnXCJdJykuZmlyc3QoKTtcbiAgICAgICAgICAgICAgJGFwcHNPZmZjYW52YXMucHJvcCgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAvLyBGb3JjZSByZWZsb3cgc28gQ1NTIHRyYW5zaXRpb24gcnVucyBhZnRlciB1bmhpZGluZy5cbiAgICAgICAgICAgICAgdm9pZCAkYXBwc09mZmNhbnZhc1swXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgJGFwcHNPZmZjYW52YXMuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgICAkYXBwc1RyaWdnZXIuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWFnaWMtYXBwcy1vZmZjYW52YXMtb3BlbicpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2xvc2VBcHBzT2ZmY2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhcyA9ICQoJy5tYWdpYy1hcHBzLW9mZmNhbnZhc1tkYXRhLW1lLWFwcHMtc2NvcGU9XCInICsgc2NvcGVJZCArICdcIl0nKS5maXJzdCgpO1xuICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhcy5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgJGFwcHNUcmlnZ2VyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtYWdpYy1hcHBzLW9mZmNhbnZhcy1vcGVuJyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoJGFwcHNPZmZjYW52YXNbMF0pLmdldFByb3BlcnR5VmFsdWUoJy0tbWFnaWMtYXBwcy1vZmZjYW52YXMtZHVyYXRpb24nKSkgfHwgNDUwO1xuICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkYXBwc09mZmNhbnZhcy5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhcy5wcm9wKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRhcHBzVHJpZ2dlci5vZmYoJ2NsaWNrLicgKyBhcHBzTnMpLm9uKCdjbGljay4nICsgYXBwc05zLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIGlmICgkYXBwc09mZmNhbnZhcy5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VBcHBzT2ZmY2FudmFzKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3BlbkFwcHNPZmZjYW52YXMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRhcHBzT2ZmY2FudmFzLm9mZignY2xpY2suJyArIGFwcHNOcywgJ1tkYXRhLWFwcHMtb2ZmY2FudmFzLWNsb3NlXScpLm9uKCdjbGljay4nICsgYXBwc05zLCAnW2RhdGEtYXBwcy1vZmZjYW52YXMtY2xvc2VdJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGNsb3NlQXBwc09mZmNhbnZhcygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAuJyArIGFwcHNOcykub24oJ2tleXVwLicgKyBhcHBzTnMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiAkYXBwc09mZmNhbnZhcy5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VBcHBzT2ZmY2FudmFzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRyb290LmZpbmQoJy5jbnctbmF2IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLmNudy1uYXYtbW9iaWxlIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYScpXG4gICAgICAgICAgLm9mZignY2xpY2suZW1raXRTdWJtZW51JylcbiAgICAgICAgICAub24oJ2NsaWNrLmVta2l0U3VibWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzO1xuICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBsaW5rLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGNvbnN0IGhhc1N1Yk1lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLnN1Yi1tZW51Jyk7XG4gICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgICBjb25zdCBpc1BsYWNlaG9sZGVyID0gIWhyZWYgfHwgaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnO1xuICAgICAgICAgICAgICBjb25zdCBpbk1vYmlsZVBhbmVsID0gISFsaW5rLmNsb3Nlc3QoJy5tb2JpbGUtbWVudS1wYW5lbCcpO1xuXG4gICAgICAgICAgICAgIGlmICghaGFzU3ViTWVudSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGlzUGxhY2Vob2xkZXIgfHwgaW5Nb2JpbGVQYW5lbCB8fCB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goc2libGluZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gQXZvaWQgcmFjZTogbGl2ZSBzaXRlcyBvZnRlbiBmaXJlIGVsZW1lbnRvci9mcm9udGVuZC9pbml0IGJlZm9yZSB0aGlzIGZpbGUgYmluZHMuXG4gICAgbGV0IGRpZEluaXRIb29rcyA9IGZhbHNlO1xuICAgIGNvbnN0IGJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRvckZyb250ZW5kID09PSAndW5kZWZpbmVkJyB8fCAhZWxlbWVudG9yRnJvbnRlbmQuaG9va3MpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFkaWRJbml0SG9va3MpIHtcbiAgICAgICAgZW1rRWxlbWVudG9yLm9uSW5pdCgpO1xuICAgICAgICBkaWRJbml0SG9va3MgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gRmFsbGJhY2sgZm9yIGhlYWRlcnMgYWxyZWFkeSBpbiBET00gKHRoZW1lIGJ1aWxkZXIgLyBjYWNoZWQgbWFya3VwKS5cbiAgICAgICQoJy5tYWdpYy1oZWFkZXIuaXMtc3RpY2t5JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmRTdGlja3lTaGFkb3coJCh0aGlzKSwgJ2ZhbGxiYWNrJyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBpZiAoIWJvb3QoKSkge1xuICAgICAgJHdpbmRvdy5vbignZWxlbWVudG9yL2Zyb250ZW5kL2luaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJvb3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoalF1ZXJ5LCB3aW5kb3cpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJnZXRTY3JvbGxZIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJiaW5kU3RpY2t5U2hhZG93IiwiJGhlYWRlciIsInNjb3BlSWQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImRhdGEiLCJzY3JvbGxUaHJlc2hvbGQiLCJzY3JvbGxOcyIsImlkIiwidXBkYXRlU3RpY2t5U2hhZG93IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm9mZiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjYXB0dXJlIiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE5hdk1lbnUiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkcm9vdCIsImZpbmQiLCJmaXJzdCIsIiR0b2dnbGUiLCIkcGFuZWwiLCIkYmFja2Ryb3AiLCIkY2xvc2UiLCIkZGVza3RvcFNlYXJjaFNsb3QiLCIkbW9iaWxlU2VhcmNoU2xvdCIsIiRzZWFyY2hCdXR0b24iLCJpc0xheW91dEZvdXIiLCJtb3ZlU2VhcmNoVG9Nb2JpbGUiLCJhcHBlbmQiLCJtb3ZlU2VhcmNoVG9EZXNrdG9wIiwiJGRpdmlkZXJPclVzZXIiLCJjaGlsZHJlbiIsImluc2VydEJlZm9yZSIsIiR0b2dnbGVJblNsb3QiLCJwcmVwZW5kIiwib3Blbk1vYmlsZU1lbnUiLCJhdHRyIiwicHJvcCIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlTW9iaWxlTWVudSIsInJlbW92ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJ2YWwiLCIkYXBwc1RyaWdnZXIiLCIkYXBwc09mZmNhbnZhcyIsImFwcHNOcyIsIm5vdCIsImFwcGVuZFRvIiwib3BlbkFwcHNPZmZjYW52YXMiLCJvZmZzZXRXaWR0aCIsImNsb3NlQXBwc09mZmNhbnZhcyIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2V0VGltZW91dCIsImUiLCJsaW5rIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImhhc1N1Yk1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImlzUGxhY2Vob2xkZXIiLCJpbk1vYmlsZVBhbmVsIiwiY2xvc2VzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2libGluZyIsImRpZEluaXRIb29rcyIsImJvb3QiLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==