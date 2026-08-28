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
      let $panel = $root.find(".magic-nav__panel");
      let $backdrop = $root.find(".magic-nav__backdrop");
      let $close = $root.find(".magic-nav__close");
      const isVertical = $root.hasClass("magic-nav--vertical");
      const $existingPortal = $(".magic-nav-portal[data-magic-nav-scope='" + scopeId + "']");

      // Escape Elementor overflow/transform stacking so the panel overlays page content.
      if ($panel.length) {
        $existingPortal.remove();
        const $portal = $("<div/>", {
          class: ["magic-nav-portal", "elementor-element-" + scopeId, $root.hasClass("magic-nav--panel-left") ? "magic-nav--panel-left" : "magic-nav--panel-right"].join(" "),
          "data-magic-nav-scope": scopeId
        });
        $portal.appendTo(document.body);
        $portal.append($panel);
        if ($backdrop.length) {
          $portal.append($backdrop);
        }
      } else if ($existingPortal.length) {
        $panel = $existingPortal.find(".magic-nav__panel");
        $backdrop = $existingPortal.find(".magic-nav__backdrop");
        $close = $existingPortal.find(".magic-nav__close");
      }
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
      $root.find(".magic-nav__menu .menu-item-has-children > a").add($panel.find(".magic-nav__mobile-menu .menu-item-has-children > a")).off("click." + ns).on("click." + ns, function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUEsT0FBTyxLQUFLWixNQUFNLEVBQUU7Y0FDdEJZLE9BQU8sQ0FBQ3ZCLFNBQVMsQ0FBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEM7VUFDRixDQUFDLENBQUM7UUFDTjtNQUNGLENBQUMsQ0FBQztJQUNOO0VBQ0YsQ0FBQztFQUVELElBQUl3QyxPQUFPLEdBQUcsS0FBSztFQUNuQixNQUFNQyxJQUFJLEdBQUcsU0FBQUEsQ0FBQSxFQUFZO0lBQ3ZCLElBQUksT0FBT2xFLGlCQUFpQixLQUFLLFdBQVcsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ00sS0FBSyxFQUFFO01BQ3hFLE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSSxDQUFDMkQsT0FBTyxFQUFFO01BQ1pwRSxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BQ3BCbUUsT0FBTyxHQUFHLElBQUk7SUFDaEI7SUFDQSxPQUFPLElBQUk7RUFDYixDQUFDO0VBRUQsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0lBQ1h2RSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDa0QsRUFBRSxDQUFDLHlCQUF5QixFQUFFb0IsSUFBSSxDQUFDO0VBQ2xEO0FBQ0YsQ0FBQyxFQUFFQyxNQUFNLEVBQUVqQyxNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUM3SmxCOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvLi9hc3NldHMvc3JjL2pzL21hZ2ljX25hdi5qcyIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0Ly4vYXNzZXRzL3NyYy9zY3NzL21hZ2ljX25hdi5zY3NzPzhlNTIiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9tYWdpY19uYXYuc2Nzc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGVsZW1lbnRvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBjb25zdCBlbWtNYWdpY05hdiA9IHtcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IEVfRlJPTlQgPSBlbGVtZW50b3JGcm9udGVuZDtcbiAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgXCJlbV9raXRfbWFnaWNfbmF2LmRlZmF1bHRcIjogZW1rTWFnaWNOYXYud2lkZ2V0LFxuICAgICAgfTtcblxuICAgICAgJC5lYWNoKG1hcCwgZnVuY3Rpb24gKHdpZGdldE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIEVfRlJPTlQuaG9va3MuYWRkQWN0aW9uKFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB3aWRnZXQ6IGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgIGNvbnN0ICRyb290ID0gJHNjb3BlLmZpbmQoXCIubWFnaWMtbmF2XCIpLmZpcnN0KCk7XG4gICAgICBpZiAoISRyb290Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjb3BlSWQgPSAkc2NvcGUuZGF0YShcImlkXCIpIHx8IFwiZ2xvYmFsXCI7XG4gICAgICBjb25zdCBucyA9IFwiZW1raXRNYWdpY05hdi5cIiArIHNjb3BlSWQ7XG4gICAgICBjb25zdCBicmVha3BvaW50ID0gcGFyc2VJbnQoJHJvb3QuZGF0YShcImJyZWFrcG9pbnRcIiksIDEwKSB8fCAxMDIzO1xuICAgICAgY29uc3QgJHRvZ2dsZSA9ICRyb290LmZpbmQoXCIubWFnaWMtbmF2X190b2dnbGVcIik7XG4gICAgICBsZXQgJHBhbmVsID0gJHJvb3QuZmluZChcIi5tYWdpYy1uYXZfX3BhbmVsXCIpO1xuICAgICAgbGV0ICRiYWNrZHJvcCA9ICRyb290LmZpbmQoXCIubWFnaWMtbmF2X19iYWNrZHJvcFwiKTtcbiAgICAgIGxldCAkY2xvc2UgPSAkcm9vdC5maW5kKFwiLm1hZ2ljLW5hdl9fY2xvc2VcIik7XG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gJHJvb3QuaGFzQ2xhc3MoXCJtYWdpYy1uYXYtLXZlcnRpY2FsXCIpO1xuICAgICAgY29uc3QgJGV4aXN0aW5nUG9ydGFsID0gJChcIi5tYWdpYy1uYXYtcG9ydGFsW2RhdGEtbWFnaWMtbmF2LXNjb3BlPSdcIiArIHNjb3BlSWQgKyBcIiddXCIpO1xuXG4gICAgICAvLyBFc2NhcGUgRWxlbWVudG9yIG92ZXJmbG93L3RyYW5zZm9ybSBzdGFja2luZyBzbyB0aGUgcGFuZWwgb3ZlcmxheXMgcGFnZSBjb250ZW50LlxuICAgICAgaWYgKCRwYW5lbC5sZW5ndGgpIHtcbiAgICAgICAgJGV4aXN0aW5nUG9ydGFsLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCAkcG9ydGFsID0gJChcIjxkaXYvPlwiLCB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwibWFnaWMtbmF2LXBvcnRhbFwiLFxuICAgICAgICAgICAgXCJlbGVtZW50b3ItZWxlbWVudC1cIiArIHNjb3BlSWQsXG4gICAgICAgICAgICAkcm9vdC5oYXNDbGFzcyhcIm1hZ2ljLW5hdi0tcGFuZWwtbGVmdFwiKSA/IFwibWFnaWMtbmF2LS1wYW5lbC1sZWZ0XCIgOiBcIm1hZ2ljLW5hdi0tcGFuZWwtcmlnaHRcIixcbiAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgIFwiZGF0YS1tYWdpYy1uYXYtc2NvcGVcIjogc2NvcGVJZCxcbiAgICAgICAgfSk7XG4gICAgICAgICRwb3J0YWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICRwb3J0YWwuYXBwZW5kKCRwYW5lbCk7XG4gICAgICAgIGlmICgkYmFja2Ryb3AubGVuZ3RoKSB7XG4gICAgICAgICAgJHBvcnRhbC5hcHBlbmQoJGJhY2tkcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgkZXhpc3RpbmdQb3J0YWwubGVuZ3RoKSB7XG4gICAgICAgICRwYW5lbCA9ICRleGlzdGluZ1BvcnRhbC5maW5kKFwiLm1hZ2ljLW5hdl9fcGFuZWxcIik7XG4gICAgICAgICRiYWNrZHJvcCA9ICRleGlzdGluZ1BvcnRhbC5maW5kKFwiLm1hZ2ljLW5hdl9fYmFja2Ryb3BcIik7XG4gICAgICAgICRjbG9zZSA9ICRleGlzdGluZ1BvcnRhbC5maW5kKFwiLm1hZ2ljLW5hdl9fY2xvc2VcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzTW9iaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIiArIGJyZWFrcG9pbnQgKyBcInB4KVwiKS5tYXRjaGVzO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb3BlblBhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGFuZWwuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xuICAgICAgICAkYmFja2Ryb3AuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpLnByb3AoXCJoaWRkZW5cIiwgZmFsc2UpO1xuICAgICAgICAkdG9nZ2xlLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibWFnaWMtbmF2LW9wZW5cIik7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVBhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGFuZWwucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICRiYWNrZHJvcC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIikucHJvcChcImhpZGRlblwiLCB0cnVlKTtcbiAgICAgICAgJHRvZ2dsZS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWdpYy1uYXYtb3BlblwiKTtcbiAgICAgICAgJHBhbmVsLmZpbmQoXCIubWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9O1xuXG4gICAgICAkdG9nZ2xlLm9mZihcImNsaWNrLlwiICsgbnMpLm9uKFwiY2xpY2suXCIgKyBucywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoJHBhbmVsLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgIGNsb3NlUGFuZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcGVuUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRjbG9zZS5vZmYoXCJjbGljay5cIiArIG5zKS5vbihcImNsaWNrLlwiICsgbnMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbG9zZVBhbmVsKCk7XG4gICAgICB9KTtcblxuICAgICAgJGJhY2tkcm9wLm9mZihcImNsaWNrLlwiICsgbnMpLm9uKFwiY2xpY2suXCIgKyBucywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG9zZVBhbmVsKCk7XG4gICAgICB9KTtcblxuICAgICAgJChkb2N1bWVudClcbiAgICAgICAgLm9mZihcImtleXVwLlwiICsgbnMpXG4gICAgICAgIC5vbihcImtleXVwLlwiICsgbnMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgJHBhbmVsLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgY2xvc2VQYW5lbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KVxuICAgICAgICAub2ZmKFwicmVzaXplLlwiICsgbnMpXG4gICAgICAgIC5vbihcInJlc2l6ZS5cIiArIG5zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFpc01vYmlsZSgpICYmICRwYW5lbC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGNsb3NlUGFuZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBTdWJtZW51IHRvZ2dsZTogbW9iaWxlIHBhbmVsIGFsd2F5czsgdmVydGljYWwgbGF5b3V0IGFsd2F5czsgcGxhY2Vob2xkZXIgbGlua3Mgb24gZGVza3RvcC5cbiAgICAgICRyb290XG4gICAgICAgIC5maW5kKFwiLm1hZ2ljLW5hdl9fbWVudSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcbiAgICAgICAgLmFkZCgkcGFuZWwuZmluZChcIi5tYWdpYy1uYXZfX21vYmlsZS1tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKSlcbiAgICAgICAgLm9mZihcImNsaWNrLlwiICsgbnMpXG4gICAgICAgIC5vbihcImNsaWNrLlwiICsgbnMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGxpbmsucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBjb25zdCBoYXNTdWJNZW51ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiAuc3ViLW1lbnVcIik7XG4gICAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICBjb25zdCBpc1BsYWNlaG9sZGVyID0gIWhyZWYgfHwgaHJlZiA9PT0gXCIjXCIgfHwgaHJlZiA9PT0gXCJcIjtcbiAgICAgICAgICBjb25zdCBpbk1vYmlsZVBhbmVsID0gISFsaW5rLmNsb3Nlc3QoXCIubWFnaWMtbmF2X19wYW5lbFwiKTtcblxuICAgICAgICAgIGlmICghaGFzU3ViTWVudSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsIHx8IGluTW9iaWxlUGFuZWwgfHwgaXNQbGFjZWhvbGRlciB8fCBpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKVxuICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoc2libGluZykge1xuICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nICE9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfTtcblxuICBsZXQgZGlkSW5pdCA9IGZhbHNlO1xuICBjb25zdCBib290ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudG9yRnJvbnRlbmQgPT09IFwidW5kZWZpbmVkXCIgfHwgIWVsZW1lbnRvckZyb250ZW5kLmhvb2tzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZGlkSW5pdCkge1xuICAgICAgZW1rTWFnaWNOYXYub25Jbml0KCk7XG4gICAgICBkaWRJbml0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgaWYgKCFib290KCkpIHtcbiAgICAkKGVsZW1lbnRvcikub24oXCJlbGVtZW50b3IvZnJvbnRlbmQvaW5pdFwiLCBib290KTtcbiAgfVxufSkoalF1ZXJ5LCB3aW5kb3cpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL21hZ2ljX25hdi5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3JjL2pzL21hZ2ljX25hdi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyIkIiwiZWxlbWVudG9yIiwiZW1rTWFnaWNOYXYiLCJvbkluaXQiLCJFX0ZST05UIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJtYXAiLCJ3aWRnZXQiLCJlYWNoIiwid2lkZ2V0TmFtZSIsImNhbGxiYWNrIiwiaG9va3MiLCJhZGRBY3Rpb24iLCIkc2NvcGUiLCIkcm9vdCIsImZpbmQiLCJmaXJzdCIsImxlbmd0aCIsInNjb3BlSWQiLCJkYXRhIiwibnMiLCJicmVha3BvaW50IiwicGFyc2VJbnQiLCIkdG9nZ2xlIiwiJHBhbmVsIiwiJGJhY2tkcm9wIiwiJGNsb3NlIiwiaXNWZXJ0aWNhbCIsImhhc0NsYXNzIiwiJGV4aXN0aW5nUG9ydGFsIiwicmVtb3ZlIiwiJHBvcnRhbCIsImNsYXNzIiwiam9pbiIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm9wZW5QYW5lbCIsImFkZENsYXNzIiwiYXR0ciIsInByb3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbG9zZVBhbmVsIiwicmVtb3ZlQ2xhc3MiLCJvZmYiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJsaW5rIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImhhc1N1Yk1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsImlzUGxhY2Vob2xkZXIiLCJpbk1vYmlsZVBhbmVsIiwiY2xvc2VzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2libGluZyIsImRpZEluaXQiLCJib290IiwialF1ZXJ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=