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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9uYXZfbWVudS5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3M/MDBmZiIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi8uLi9zY3NzL25hdl9tZW51LnNjc3NcIlxyXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICQoZWxlbWVudG9yKTtcclxuXHJcbiAgICBjb25zdCBnZXRTY3JvbGxZID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYmluZFN0aWNreVNoYWRvdyA9IGZ1bmN0aW9uICgkaGVhZGVyLCBzY29wZUlkKSB7XHJcbiAgICAgIGlmICghJGhlYWRlciB8fCAhJGhlYWRlci5sZW5ndGggfHwgISRoZWFkZXIuaGFzQ2xhc3MoJ2lzLXN0aWNreScpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkaGVhZGVyLmRhdGEoJ21lU3RpY2t5U2hhZG93Qm91bmQnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAkaGVhZGVyLmRhdGEoJ21lU3RpY2t5U2hhZG93Qm91bmQnLCB0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbFRocmVzaG9sZCA9IDEwO1xyXG4gICAgICBjb25zdCBzY3JvbGxOcyA9ICdzY3JvbGwuZW1raXRTdGlja3lTaGFkb3cuJyArIChzY29wZUlkIHx8ICRoZWFkZXJbMF0uaWQgfHwgJ2dsb2JhbCcpO1xyXG4gICAgICBjb25zdCB1cGRhdGVTdGlja3lTaGFkb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGdldFNjcm9sbFkoKSA+IHNjcm9sbFRocmVzaG9sZCkge1xyXG4gICAgICAgICAgJGhlYWRlci5hZGRDbGFzcygnaXMtc2Nyb2xsZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnaXMtc2Nyb2xsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkKHdpbmRvdykub2ZmKHNjcm9sbE5zKS5vbihzY3JvbGxOcywgdXBkYXRlU3RpY2t5U2hhZG93KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlU3RpY2t5U2hhZG93LCB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgIHVwZGF0ZVN0aWNreVNoYWRvdygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGxldCBlbWtFbGVtZW50b3IgPSB7XHJcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XHJcbiAgICAgICAgbGV0IHdpZGdldEhhbmRsZXJzTWFwID0ge1xyXG4gICAgICAgICAgXCJlbV9raXRfbmF2X21lbnUuZGVmYXVsdFwiOiBlbWtFbGVtZW50b3IuRW1LaXROYXZNZW51LFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgJC5lYWNoKHdpZGdldEhhbmRsZXJzTWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIEVtS2l0TmF2TWVudTogZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgICAgY29uc3QgJHJvb3QgPSAkc2NvcGUuZmluZCgnLm1hZ2ljLWhlYWRlcicpLmZpcnN0KCkubGVuZ3RoXHJcbiAgICAgICAgICAgID8gJHNjb3BlLmZpbmQoJy5tYWdpYy1oZWFkZXInKS5maXJzdCgpXHJcbiAgICAgICAgICAgIDogJHNjb3BlO1xyXG4gICAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICRyb290LmZpbmQoJy5tb2JpbGUtbWVudS10b2dnbGUnKTtcclxuICAgICAgICAgIGNvbnN0ICRwYW5lbCA9ICRyb290LmZpbmQoJy5tb2JpbGUtbWVudS1wYW5lbCcpO1xyXG4gICAgICAgICAgY29uc3QgJGJhY2tkcm9wID0gJHJvb3QuZmluZCgnLm1vYmlsZS1tZW51LWJhY2tkcm9wJyk7XHJcbiAgICAgICAgICBjb25zdCAkY2xvc2UgPSAkcm9vdC5maW5kKCcubW9iaWxlLW1lbnUtY2xvc2UnKTtcclxuICAgICAgICAgIGNvbnN0ICRkZXNrdG9wU2VhcmNoU2xvdCA9ICRyb290LmZpbmQoJ1tkYXRhLWRlc2t0b3Atc2VhcmNoLXNsb3RdJyk7XHJcbiAgICAgICAgICBjb25zdCAkbW9iaWxlU2VhcmNoU2xvdCA9ICRyb290LmZpbmQoJ1tkYXRhLW1vYmlsZS1zZWFyY2gtc2xvdF0nKTtcclxuICAgICAgICAgIGNvbnN0ICRzZWFyY2hCdXR0b24gPSAkcm9vdC5maW5kKCcubWVudS1zZWFyY2gub3Blbl9zZWFyY2gnKS5maXJzdCgpO1xyXG4gICAgICAgICAgY29uc3QgaXNMYXlvdXRGb3VyID0gJHJvb3QuaGFzQ2xhc3MoJ21hZ2ljLWhlYWRlci1sYXlvdXQtZm91cicpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1vdmVTZWFyY2hUb01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gTGF5b3V0IGZvdXIga2VlcHMgc2VhcmNoIGluIHRoZSBoZWFkZXI7IGRvIG5vdCBtb3ZlIGl0IGJlc2lkZSB0aGUgY2xvc2UgYnV0dG9uLlxyXG4gICAgICAgICAgICBpZiAoaXNMYXlvdXRGb3VyIHx8ICEkc2VhcmNoQnV0dG9uLmxlbmd0aCB8fCAhJG1vYmlsZVNlYXJjaFNsb3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRtb2JpbGVTZWFyY2hTbG90LmFwcGVuZCgkc2VhcmNoQnV0dG9uKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgbW92ZVNlYXJjaFRvRGVza3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCEkc2VhcmNoQnV0dG9uLmxlbmd0aCB8fCAhJGRlc2t0b3BTZWFyY2hTbG90Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQcmVmZXIgcHV0dGluZyBzZWFyY2ggYmFjayBhdCB0aGUgc3RhcnQgb2YgdGhlIGFjdGlvbnMgZ3JvdXAuXHJcbiAgICAgICAgICAgIGNvbnN0ICRkaXZpZGVyT3JVc2VyID0gJGRlc2t0b3BTZWFyY2hTbG90LmNoaWxkcmVuKCcubGF5b3V0LWZvdXItZGl2aWRlciwgLmxheW91dC1mb3VyLXVzZXIsIC5zZWFyY2hfYmxvY2snKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGRpdmlkZXJPclVzZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgJHNlYXJjaEJ1dHRvbi5pbnNlcnRCZWZvcmUoJGRpdmlkZXJPclVzZXIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBLZWVwIHNlYXJjaCBiZWZvcmUgdGhlIG1vYmlsZSB0b2dnbGUgaW5zaWRlIGRlc2t0b3AgYWN0aW9ucy5cclxuICAgICAgICAgICAgY29uc3QgJHRvZ2dsZUluU2xvdCA9ICRkZXNrdG9wU2VhcmNoU2xvdC5maW5kKCcubW9iaWxlLW1lbnUtdG9nZ2xlJyk7XHJcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlSW5TbG90Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICRzZWFyY2hCdXR0b24uaW5zZXJ0QmVmb3JlKCR0b2dnbGVJblNsb3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICRkZXNrdG9wU2VhcmNoU2xvdC5wcmVwZW5kKCRzZWFyY2hCdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9wZW5Nb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkcGFuZWwuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAkYmFja2Ryb3AuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5wcm9wKCdoaWRkZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWFnaWMtbW9iaWxlLW1lbnUtb3BlbicpO1xyXG4gICAgICAgICAgICBtb3ZlU2VhcmNoVG9Nb2JpbGUoKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgY2xvc2VNb2JpbGVNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICRiYWNrZHJvcC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLnByb3AoJ2hpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtYWdpYy1tb2JpbGUtbWVudS1vcGVuJyk7XHJcbiAgICAgICAgICAgIG1vdmVTZWFyY2hUb0Rlc2t0b3AoKTtcclxuICAgICAgICAgICAgJHBhbmVsLmZpbmQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgJHRvZ2dsZS5vZmYoJ2NsaWNrLmVta2l0TW9iaWxlTWVudScpLm9uKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICgkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRjbG9zZS5vZmYoJ2NsaWNrLmVta2l0TW9iaWxlTWVudScpLm9uKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkYmFja2Ryb3Aub2ZmKCdjbGljay5lbWtpdE1vYmlsZU1lbnUnKS5vbignY2xpY2suZW1raXRNb2JpbGVNZW51JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAuZW1raXRNb2JpbGVNZW51Jykub24oJ2tleXVwLmVta2l0TW9iaWxlTWVudScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiAkcGFuZWwuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuZW1raXRNb2JpbGVNZW51Jykub24oJ3Jlc2l6ZS5lbWtpdE1vYmlsZU1lbnUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMgJiYgJHBhbmVsLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLm9wZW5fc2VhcmNoJykub2ZmKCdjbGljay5lbWtpdFNlYXJjaCcpLm9uKCdjbGljay5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfYmxvY2snKS50b2dnbGVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkcm9vdC5maW5kKCcuc2VhcmNoX2Jsb2NrIC5zZWFyY2hfaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9jbG9zZScpLm9mZignY2xpY2suZW1raXRTZWFyY2hDbG9zZScpLm9uKCdjbGljay5lbWtpdFNlYXJjaENsb3NlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ibG9jaycpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKCdib2R5Jykub2ZmKCdjbGljay5lbWtpdFNlYXJjaCcpLm9uKCdjbGljay5lbWtpdFNlYXJjaCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2hfYmxvY2snKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLnNlYXJjaF9ib3gnKS5vZmYoJ2NsaWNrLmVta2l0U2VhcmNoJykub24oJ2NsaWNrLmVta2l0U2VhcmNoJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICRyb290LmZpbmQoJy5zZWFyY2hfaW5wdXQnKS5vZmYoJ2tleXVwLmVta2l0U2VhcmNoJykub24oJ2tleXVwLmVta2l0U2VhcmNoJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3R5cGluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBTdGlja3kgaGVhZGVyOiBzaG93IHNoYWRvdyBvbmx5IGFmdGVyIHNjcm9sbFxyXG4gICAgICAgICAgYmluZFN0aWNreVNoYWRvdygkcm9vdCwgJHNjb3BlLmRhdGEoJ2lkJykpO1xyXG5cclxuICAgICAgICAgIC8vIEFwcHMgZnVsbHNjcmVlbiBvZmZjYW52YXMgKExheW91dCBGb3VyKVxyXG4gICAgICAgICAgY29uc3QgJGFwcHNUcmlnZ2VyID0gJHJvb3QuZmluZCgnLm9wZW4tYXBwcy1vZmZjYW52YXMnKTtcclxuICAgICAgICAgIGxldCAkYXBwc09mZmNhbnZhcyA9ICRyb290LmZpbmQoJy5tYWdpYy1hcHBzLW9mZmNhbnZhcycpLmZpcnN0KCk7XHJcbiAgICAgICAgICBpZiAoJGFwcHNUcmlnZ2VyLmxlbmd0aCAmJiAkYXBwc09mZmNhbnZhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9ICRzY29wZS5kYXRhKCdpZCcpIHx8ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBhcHBzTnMgPSAnZW1raXRBcHBzT2ZmY2FudmFzLicgKyBzY29wZUlkO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHN0YWxlIHBhbmVscyBmcm9tIHByZXZpb3VzIGVkaXRvciByZS1yZW5kZXJzLlxyXG4gICAgICAgICAgICAkKCcubWFnaWMtYXBwcy1vZmZjYW52YXNbZGF0YS1tZS1hcHBzLXNjb3BlPVwiJyArIHNjb3BlSWQgKyAnXCJdJykubm90KCRhcHBzT2ZmY2FudmFzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGFwcHNPZmZjYW52YXMuZGF0YSgnbWVBcHBzTW92ZWQnKSkge1xyXG4gICAgICAgICAgICAgICRhcHBzT2ZmY2FudmFzXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2VsZW1lbnRvci1lbGVtZW50LScgKyBzY29wZUlkKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtbWUtYXBwcy1zY29wZScsIHNjb3BlSWQpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgICAgICAgIC5kYXRhKCdtZUFwcHNNb3ZlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcGVuQXBwc09mZmNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhcyA9ICQoJy5tYWdpYy1hcHBzLW9mZmNhbnZhc1tkYXRhLW1lLWFwcHMtc2NvcGU9XCInICsgc2NvcGVJZCArICdcIl0nKS5maXJzdCgpO1xyXG4gICAgICAgICAgICAgICRhcHBzT2ZmY2FudmFzLnByb3AoJ2hpZGRlbicsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAvLyBGb3JjZSByZWZsb3cgc28gQ1NTIHRyYW5zaXRpb24gcnVucyBhZnRlciB1bmhpZGluZy5cclxuICAgICAgICAgICAgICB2b2lkICRhcHBzT2ZmY2FudmFzWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICRhcHBzT2ZmY2FudmFzLmFkZENsYXNzKCdpcy1vcGVuJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAkYXBwc1RyaWdnZXIuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtYWdpYy1hcHBzLW9mZmNhbnZhcy1vcGVuJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZUFwcHNPZmZjYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJGFwcHNPZmZjYW52YXMgPSAkKCcubWFnaWMtYXBwcy1vZmZjYW52YXNbZGF0YS1tZS1hcHBzLXNjb3BlPVwiJyArIHNjb3BlSWQgKyAnXCJdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgICAkYXBwc09mZmNhbnZhcy5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAkYXBwc1RyaWdnZXIuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWFnaWMtYXBwcy1vZmZjYW52YXMtb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSgkYXBwc09mZmNhbnZhc1swXSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1tYWdpYy1hcHBzLW9mZmNhbnZhcy1kdXJhdGlvbicpKSB8fCA0NTA7XHJcbiAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkYXBwc09mZmNhbnZhcy5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICRhcHBzT2ZmY2FudmFzLnByb3AoJ2hpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRhcHBzVHJpZ2dlci5vZmYoJ2NsaWNrLicgKyBhcHBzTnMpLm9uKCdjbGljay4nICsgYXBwc05zLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIGlmICgkYXBwc09mZmNhbnZhcy5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUFwcHNPZmZjYW52YXMoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3BlbkFwcHNPZmZjYW52YXMoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGFwcHNPZmZjYW52YXMub2ZmKCdjbGljay4nICsgYXBwc05zLCAnW2RhdGEtYXBwcy1vZmZjYW52YXMtY2xvc2VdJykub24oJ2NsaWNrLicgKyBhcHBzTnMsICdbZGF0YS1hcHBzLW9mZmNhbnZhcy1jbG9zZV0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNsb3NlQXBwc09mZmNhbnZhcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAuJyArIGFwcHNOcykub24oJ2tleXVwLicgKyBhcHBzTnMsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmICRhcHBzT2ZmY2FudmFzLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQXBwc09mZmNhbnZhcygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJHJvb3QuZmluZCgnLmNudy1uYXYgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAuY253LW5hdi1tb2JpbGUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhJylcclxuICAgICAgICAgIC5vZmYoJ2NsaWNrLmVta2l0U3VibWVudScpXHJcbiAgICAgICAgICAub24oJ2NsaWNrLmVta2l0U3VibWVudScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbGluay5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1N1Yk1lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLnN1Yi1tZW51Jyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXNQbGFjZWhvbGRlciA9ICFocmVmIHx8IGhyZWYgPT09ICcjJyB8fCBocmVmID09PSAnJztcclxuICAgICAgICAgICAgICBjb25zdCBpbk1vYmlsZVBhbmVsID0gISFsaW5rLmNsb3Nlc3QoJy5tb2JpbGUtbWVudS1wYW5lbCcpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoIWhhc1N1Yk1lbnUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKGlzUGxhY2Vob2xkZXIgfHwgaW5Nb2JpbGVQYW5lbCB8fCB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goc2libGluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBdm9pZCByYWNlOiBsaXZlIHNpdGVzIG9mdGVuIGZpcmUgZWxlbWVudG9yL2Zyb250ZW5kL2luaXQgYmVmb3JlIHRoaXMgZmlsZSBiaW5kcy5cclxuICAgIGxldCBkaWRJbml0SG9va3MgPSBmYWxzZTtcclxuICAgIGNvbnN0IGJvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudG9yRnJvbnRlbmQgPT09ICd1bmRlZmluZWQnIHx8ICFlbGVtZW50b3JGcm9udGVuZC5ob29rcykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWRpZEluaXRIb29rcykge1xyXG4gICAgICAgIGVta0VsZW1lbnRvci5vbkluaXQoKTtcclxuICAgICAgICBkaWRJbml0SG9va3MgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEZhbGxiYWNrIGZvciBoZWFkZXJzIGFscmVhZHkgaW4gRE9NICh0aGVtZSBidWlsZGVyIC8gY2FjaGVkIG1hcmt1cCkuXHJcbiAgICAgICQoJy5tYWdpYy1oZWFkZXIuaXMtc3RpY2t5JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYmluZFN0aWNreVNoYWRvdygkKHRoaXMpLCAnZmFsbGJhY2snKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWJvb3QoKSkge1xyXG4gICAgICAkd2luZG93Lm9uKCdlbGVtZW50b3IvZnJvbnRlbmQvaW5pdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBib290KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pKGpRdWVyeSwgd2luZG93KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51LnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJnZXRTY3JvbGxZIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJiaW5kU3RpY2t5U2hhZG93IiwiJGhlYWRlciIsInNjb3BlSWQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImRhdGEiLCJzY3JvbGxUaHJlc2hvbGQiLCJzY3JvbGxOcyIsImlkIiwidXBkYXRlU3RpY2t5U2hhZG93IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm9mZiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjYXB0dXJlIiwiZW1rRWxlbWVudG9yIiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwid2lkZ2V0SGFuZGxlcnNNYXAiLCJFbUtpdE5hdk1lbnUiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkcm9vdCIsImZpbmQiLCJmaXJzdCIsIiR0b2dnbGUiLCIkcGFuZWwiLCIkYmFja2Ryb3AiLCIkY2xvc2UiLCIkZGVza3RvcFNlYXJjaFNsb3QiLCIkbW9iaWxlU2VhcmNoU2xvdCIsIiRzZWFyY2hCdXR0b24iLCJpc0xheW91dEZvdXIiLCJtb3ZlU2VhcmNoVG9Nb2JpbGUiLCJhcHBlbmQiLCJtb3ZlU2VhcmNoVG9EZXNrdG9wIiwiJGRpdmlkZXJPclVzZXIiLCJjaGlsZHJlbiIsImluc2VydEJlZm9yZSIsIiR0b2dnbGVJblNsb3QiLCJwcmVwZW5kIiwib3Blbk1vYmlsZU1lbnUiLCJhdHRyIiwicHJvcCIsImNsYXNzTGlzdCIsImFkZCIsImNsb3NlTW9iaWxlTWVudSIsInJlbW92ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJ2YWwiLCIkYXBwc1RyaWdnZXIiLCIkYXBwc09mZmNhbnZhcyIsImFwcHNOcyIsIm5vdCIsImFwcGVuZFRvIiwib3BlbkFwcHNPZmZjYW52YXMiLCJvZmZzZXRXaWR0aCIsImNsb3NlQXBwc09mZmNhbnZhcyIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2V0VGltZW91dCIsImUiLCJsaW5rIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImhhc1N1Yk1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImlzUGxhY2Vob2xkZXIiLCJpbk1vYmlsZVBhbmVsIiwiY2xvc2VzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2libGluZyIsImRpZEluaXRIb29rcyIsImJvb3QiLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==