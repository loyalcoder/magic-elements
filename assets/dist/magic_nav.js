/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/magic_nav.js"
/*!************************************!*\
  !*** ./assets/src/js/magic_nav.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_magic_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/magic_nav.scss */ "./assets/src/scss/magic_nav.scss");

(function ($, elementor) {
  "use strict";

  const emkMagicNav = {
    onInit: function () {
      const E_FRONT = elementorFrontend;
      const map = {
        "em_kit_magic_nav.default": emkMagicNav.widget
      };
      $.each(map, function (widgetName, callback) {
        E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    widget: function ($scope) {
      const $root = $scope.find(".magic-nav").first();
      if (!$root.length) {
        return;
      }
      const scopeId = $scope.data("id") || "global";
      const ns = "emkitMagicNav." + scopeId;
      const breakpoint = parseInt($root.data("breakpoint"), 10) || 1023;
      const $toggle = $root.find(".magic-nav__toggle");
      const $panel = $root.find(".magic-nav__panel");
      const $backdrop = $root.find(".magic-nav__backdrop");
      const $close = $root.find(".magic-nav__close");
      const isVertical = $root.hasClass("magic-nav--vertical");
      const isMobile = function () {
        return window.matchMedia("(max-width: " + breakpoint + "px)").matches;
      };
      const openPanel = function () {
        $panel.addClass("is-open").attr("aria-hidden", "false");
        $backdrop.addClass("is-open").prop("hidden", false);
        $toggle.attr("aria-expanded", "true");
        document.body.classList.add("magic-nav-open");
      };
      const closePanel = function () {
        $panel.removeClass("is-open").attr("aria-hidden", "true");
        $backdrop.removeClass("is-open").prop("hidden", true);
        $toggle.attr("aria-expanded", "false");
        document.body.classList.remove("magic-nav-open");
        $panel.find(".menu-item-has-children.active").removeClass("active");
      };
      $toggle.off("click." + ns).on("click." + ns, function (event) {
        event.preventDefault();
        event.stopPropagation();
        if ($panel.hasClass("is-open")) {
          closePanel();
        } else {
          openPanel();
        }
      });
      $close.off("click." + ns).on("click." + ns, function (event) {
        event.preventDefault();
        closePanel();
      });
      $backdrop.off("click." + ns).on("click." + ns, function () {
        closePanel();
      });
      $(document).off("keyup." + ns).on("keyup." + ns, function (event) {
        if (event.key === "Escape" && $panel.hasClass("is-open")) {
          closePanel();
        }
      });
      $(window).off("resize." + ns).on("resize." + ns, function () {
        if (!isMobile() && $panel.hasClass("is-open")) {
          closePanel();
        }
      });

      // Submenu toggle: mobile panel always; vertical layout always; placeholder links on desktop.
      $root.find(".magic-nav__menu .menu-item-has-children > a, .magic-nav__mobile-menu .menu-item-has-children > a").off("click." + ns).on("click." + ns, function (event) {
        const link = this;
        const parent = link.parentElement;
        const hasSubMenu = parent.querySelector(":scope > .sub-menu");
        const href = link.getAttribute("href");
        const isPlaceholder = !href || href === "#" || href === "";
        const inMobilePanel = !!link.closest(".magic-nav__panel");
        if (!hasSubMenu) {
          return;
        }
        if (isVertical || inMobilePanel || isPlaceholder || isMobile()) {
          event.preventDefault();
          parent.classList.toggle("active");
          parent.parentElement?.querySelectorAll(":scope > .menu-item-has-children.active").forEach(function (sibling) {
            if (sibling !== parent) {
              sibling.classList.remove("active");
            }
          });
        }
      });
    }
  };
  let didInit = false;
  const boot = function () {
    if (typeof elementorFrontend === "undefined" || !elementorFrontend.hooks) {
      return false;
    }
    if (!didInit) {
      emkMagicNav.onInit();
      didInit = true;
    }
    return true;
  };
  if (!boot()) {
    $(elementor).on("elementor/frontend/init", boot);
  }
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/magic_nav.scss"
/*!****************************************!*\
  !*** ./assets/src/scss/magic_nav.scss ***!
  \****************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/magic_nav.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/magic_nav.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9qcy9tYWdpY19uYXYuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9tYWdpY19uYXYuc2Nzcz84ZTUyIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLy4uL3Njc3MvbWFnaWNfbmF2LnNjc3NcIjtcblxuKGZ1bmN0aW9uICgkLCBlbGVtZW50b3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgY29uc3QgZW1rTWFnaWNOYXYgPSB7XG4gICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBFX0ZST05UID0gZWxlbWVudG9yRnJvbnRlbmQ7XG4gICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgIFwiZW1fa2l0X21hZ2ljX25hdi5kZWZhdWx0XCI6IGVta01hZ2ljTmF2LndpZGdldCxcbiAgICAgIH07XG5cbiAgICAgICQuZWFjaChtYXAsIGZ1bmN0aW9uICh3aWRnZXROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBFX0ZST05ULmhvb2tzLmFkZEFjdGlvbihcImZyb250ZW5kL2VsZW1lbnRfcmVhZHkvXCIgKyB3aWRnZXROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgd2lkZ2V0OiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICBjb25zdCAkcm9vdCA9ICRzY29wZS5maW5kKFwiLm1hZ2ljLW5hdlwiKS5maXJzdCgpO1xuICAgICAgaWYgKCEkcm9vdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY29wZUlkID0gJHNjb3BlLmRhdGEoXCJpZFwiKSB8fCBcImdsb2JhbFwiO1xuICAgICAgY29uc3QgbnMgPSBcImVta2l0TWFnaWNOYXYuXCIgKyBzY29wZUlkO1xuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHBhcnNlSW50KCRyb290LmRhdGEoXCJicmVha3BvaW50XCIpLCAxMCkgfHwgMTAyMztcbiAgICAgIGNvbnN0ICR0b2dnbGUgPSAkcm9vdC5maW5kKFwiLm1hZ2ljLW5hdl9fdG9nZ2xlXCIpO1xuICAgICAgY29uc3QgJHBhbmVsID0gJHJvb3QuZmluZChcIi5tYWdpYy1uYXZfX3BhbmVsXCIpO1xuICAgICAgY29uc3QgJGJhY2tkcm9wID0gJHJvb3QuZmluZChcIi5tYWdpYy1uYXZfX2JhY2tkcm9wXCIpO1xuICAgICAgY29uc3QgJGNsb3NlID0gJHJvb3QuZmluZChcIi5tYWdpYy1uYXZfX2Nsb3NlXCIpO1xuICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9ICRyb290Lmhhc0NsYXNzKFwibWFnaWMtbmF2LS12ZXJ0aWNhbFwiKTtcblxuICAgICAgY29uc3QgaXNNb2JpbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IFwiICsgYnJlYWtwb2ludCArIFwicHgpXCIpLm1hdGNoZXM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvcGVuUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwYW5lbC5hZGRDbGFzcyhcImlzLW9wZW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICRiYWNrZHJvcC5hZGRDbGFzcyhcImlzLW9wZW5cIikucHJvcChcImhpZGRlblwiLCBmYWxzZSk7XG4gICAgICAgICR0b2dnbGUuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtYWdpYy1uYXYtb3BlblwiKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNsb3NlUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwYW5lbC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKS5wcm9wKFwiaGlkZGVuXCIsIHRydWUpO1xuICAgICAgICAkdG9nZ2xlLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1hZ2ljLW5hdi1vcGVuXCIpO1xuICAgICAgICAkcGFuZWwuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH07XG5cbiAgICAgICR0b2dnbGUub2ZmKFwiY2xpY2suXCIgKyBucykub24oXCJjbGljay5cIiArIG5zLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICgkcGFuZWwuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgY2xvc2VQYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wZW5QYW5lbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb3NlLm9mZihcImNsaWNrLlwiICsgbnMpLm9uKFwiY2xpY2suXCIgKyBucywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsb3NlUGFuZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkYmFja2Ryb3Aub2ZmKFwiY2xpY2suXCIgKyBucykub24oXCJjbGljay5cIiArIG5zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3NlUGFuZWwoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKGRvY3VtZW50KVxuICAgICAgICAub2ZmKFwia2V5dXAuXCIgKyBucylcbiAgICAgICAgLm9uKFwia2V5dXAuXCIgKyBucywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJiAkcGFuZWwuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICBjbG9zZVBhbmVsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgJCh3aW5kb3cpXG4gICAgICAgIC5vZmYoXCJyZXNpemUuXCIgKyBucylcbiAgICAgICAgLm9uKFwicmVzaXplLlwiICsgbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWlzTW9iaWxlKCkgJiYgJHBhbmVsLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgY2xvc2VQYW5lbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFN1Ym1lbnUgdG9nZ2xlOiBtb2JpbGUgcGFuZWwgYWx3YXlzOyB2ZXJ0aWNhbCBsYXlvdXQgYWx3YXlzOyBwbGFjZWhvbGRlciBsaW5rcyBvbiBkZXNrdG9wLlxuICAgICAgJHJvb3RcbiAgICAgICAgLmZpbmQoXCIubWFnaWMtbmF2X19tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLm1hZ2ljLW5hdl9fbW9iaWxlLW1lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXG4gICAgICAgIC5vZmYoXCJjbGljay5cIiArIG5zKVxuICAgICAgICAub24oXCJjbGljay5cIiArIG5zLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcztcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBsaW5rLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgY29uc3QgaGFzU3ViTWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gLnN1Yi1tZW51XCIpO1xuICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgY29uc3QgaXNQbGFjZWhvbGRlciA9ICFocmVmIHx8IGhyZWYgPT09IFwiI1wiIHx8IGhyZWYgPT09IFwiXCI7XG4gICAgICAgICAgY29uc3QgaW5Nb2JpbGVQYW5lbCA9ICEhbGluay5jbG9zZXN0KFwiLm1hZ2ljLW5hdl9fcGFuZWxcIik7XG5cbiAgICAgICAgICBpZiAoIWhhc1N1Yk1lbnUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCB8fCBpbk1vYmlsZVBhbmVsIHx8IGlzUGxhY2Vob2xkZXIgfHwgaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgPiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIilcbiAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZyAhPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH07XG5cbiAgbGV0IGRpZEluaXQgPSBmYWxzZTtcbiAgY29uc3QgYm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRvckZyb250ZW5kID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbGVtZW50b3JGcm9udGVuZC5ob29rcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWRpZEluaXQpIHtcbiAgICAgIGVta01hZ2ljTmF2Lm9uSW5pdCgpO1xuICAgICAgZGlkSW5pdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGlmICghYm9vdCgpKSB7XG4gICAgJChlbGVtZW50b3IpLm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgYm9vdCk7XG4gIH1cbn0pKGpRdWVyeSwgd2luZG93KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvc2Nzcy9tYWdpY19uYXYuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9qcy9tYWdpY19uYXYuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsImVta01hZ2ljTmF2Iiwib25Jbml0IiwiRV9GUk9OVCIsImVsZW1lbnRvckZyb250ZW5kIiwibWFwIiwid2lkZ2V0IiwiZWFjaCIsIndpZGdldE5hbWUiLCJjYWxsYmFjayIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHJvb3QiLCJmaW5kIiwiZmlyc3QiLCJsZW5ndGgiLCJzY29wZUlkIiwiZGF0YSIsIm5zIiwiYnJlYWtwb2ludCIsInBhcnNlSW50IiwiJHRvZ2dsZSIsIiRwYW5lbCIsIiRiYWNrZHJvcCIsIiRjbG9zZSIsImlzVmVydGljYWwiLCJoYXNDbGFzcyIsImlzTW9iaWxlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJvcGVuUGFuZWwiLCJhZGRDbGFzcyIsImF0dHIiLCJwcm9wIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VQYW5lbCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwib2ZmIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwibGluayIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJoYXNTdWJNZW51IiwicXVlcnlTZWxlY3RvciIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJpc1BsYWNlaG9sZGVyIiwiaW5Nb2JpbGVQYW5lbCIsImNsb3Nlc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNpYmxpbmciLCJkaWRJbml0IiwiYm9vdCIsImpRdWVyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9