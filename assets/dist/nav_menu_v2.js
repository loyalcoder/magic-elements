/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/nav_menu_v2.js"
/*!**************************************!*\
  !*** ./assets/src/js/nav_menu_v2.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_nav_menu_v2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/nav_menu_v2.scss */ "./assets/src/scss/nav_menu_v2.scss");

(function ($, elementor) {
  "use strict";

  const $window = $(elementor);
  const MeNavV2 = {
    onInit: function () {
      const map = {
        "em_kit_nav_menu_v2.default": MeNavV2.initWidget
      };
      $.each(map, function (widgetName, callback) {
        elementorFrontend.hooks.addAction("frontend/element_ready/" + widgetName, callback);
      });
    },
    initWidget: function ($scope) {
      const $root = $scope.find(".me-nav-v2").first();
      if (!$root.length) {
        return;
      }
      MeNavV2.bindSticky($root);
      MeNavV2.bindSearch($root);
      MeNavV2.bindOffcanvas($root);
      MeNavV2.bindOffcanvasSubmenus($root);
      MeNavV2.bindDesktopSubmenus($root);
    },
    bindSticky: function ($root) {
      if ($root.attr("data-sticky") !== "yes") {
        return;
      }
      const widgetId = $root.attr("data-widget-id") || $root.data("widget-id");
      const spacerClass = "me-nav-v2__sticky-spacer";
      let $spacer = $root.next("." + spacerClass);
      if (!$spacer.length) {
        $spacer = $('<div class="' + spacerClass + '" aria-hidden="true"></div>');
        $root.after($spacer);
      }

      // Elementor parents often break native sticky — use fixed instead.
      const $parents = $root.parents(".elementor-widget-container, .elementor-element, .elementor-section, .e-con, .e-con-inner");
      $parents.css("overflow", "visible");
      let triggerOffset = 0;
      const measureTrigger = function () {
        // Measure natural position while not fixed.
        const wasSticky = $root.hasClass("is-sticky");
        if (wasSticky) {
          $root.removeClass("is-sticky");
          $spacer.css({
            display: "none",
            height: "0px"
          });
        }
        triggerOffset = Math.max(0, Math.floor($root.offset().top));
        if (wasSticky) {
          $root.addClass("is-sticky");
        }
      };
      const syncSpacer = function () {
        if ($root.hasClass("is-sticky")) {
          $spacer.css({
            display: "block",
            height: $root.outerHeight() + "px"
          });
        } else {
          $spacer.css({
            display: "none",
            height: "0px"
          });
        }
      };
      const onScroll = function () {
        // Stick only after the menu's original position has been scrolled past.
        const shouldStick = window.scrollY > triggerOffset;
        const isSticky = $root.hasClass("is-sticky");
        if (shouldStick === isSticky) {
          return;
        }
        $root.toggleClass("is-sticky", shouldStick);
        syncSpacer();
      };
      measureTrigger();
      onScroll();
      $(window).off("scroll.meNavV2Sticky." + widgetId).on("scroll.meNavV2Sticky." + widgetId, onScroll);
      $(window).off("resize.meNavV2Sticky." + widgetId).on("resize.meNavV2Sticky." + widgetId, function () {
        measureTrigger();
        onScroll();
        syncSpacer();
      });
    },
    bindSearch: function ($root) {
      const $toggle = $root.find(".me-nav-v2__search-toggle");
      const $panel = $root.find(".me-nav-v2__search-panel");
      const $input = $panel.find(".me-nav-v2__search-input");
      const $results = $panel.find(".me-nav-v2__search-results");
      const $close = $panel.find(".me-nav-v2__search-close");
      if (!$toggle.length || !$panel.length) {
        return;
      }
      let timer = null;
      let xhr = null;
      const openSearch = function () {
        $panel.prop("hidden", false).addClass("is-open");
        $toggle.attr("aria-expanded", "true");
        setTimeout(function () {
          $input.trigger("focus");
        }, 50);
      };
      const closeSearch = function () {
        $panel.prop("hidden", true).removeClass("is-open");
        $toggle.attr("aria-expanded", "false");
        $results.empty();
      };
      $toggle.on("click.meNavV2", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($panel.hasClass("is-open")) {
          closeSearch();
        } else {
          openSearch();
        }
      });
      $close.on("click.meNavV2", function (e) {
        e.preventDefault();
        closeSearch();
      });
      $(document).on("keyup.meNavV2Search", function (e) {
        if (e.key === "Escape") {
          closeSearch();
        }
      });
      $input.on("input.meNavV2", function () {
        const value = $(this).val().trim();
        clearTimeout(timer);
        if (value.length < 2) {
          $results.empty();
          return;
        }
        timer = setTimeout(function () {
          MeNavV2.runAjaxSearch($panel, $results, value, xhr, function (req) {
            xhr = req;
          });
        }, 300);
      });
      $panel.on("click.meNavV2", function (e) {
        e.stopPropagation();
      });
    },
    runAjaxSearch: function ($panel, $results, keyword, prevXhr, setXhr) {
      if (typeof meNavV2 === "undefined") {
        return;
      }
      if (prevXhr && prevXhr.readyState !== 4) {
        prevXhr.abort();
      }
      const postTypes = $panel.attr("data-post-types") || "[]";
      $results.html('<p class="me-nav-v2-search-loading">' + (meNavV2.i18n.searching || "Searching…") + "</p>");
      const req = $.ajax({
        url: meNavV2.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: {
          action: "me_nav_v2_search",
          nonce: meNavV2.nonce,
          s: keyword,
          post_types: postTypes
        }
      }).done(function (response) {
        if (response && response.success && response.data) {
          $results.html(response.data.html || "");
        } else {
          $results.html('<p class="me-nav-v2-search-empty">' + (meNavV2.i18n.empty || "No results found.") + "</p>");
        }
      }).fail(function (jqXHR, textStatus) {
        if (textStatus !== "abort") {
          $results.html('<p class="me-nav-v2-search-empty">' + (meNavV2.i18n.empty || "No results found.") + "</p>");
        }
      });
      if (typeof setXhr === "function") {
        setXhr(req);
      }
    },
    bindOffcanvas: function ($root) {
      const widgetId = $root.data("widget-id");
      let $portal = $root.siblings('[data-me-nav-v2-portal="' + widgetId + '"]').first();
      if (!$portal.length) {
        $portal = $root.closest(".elementor-widget-container, .elementor-element").find('[data-me-nav-v2-portal="' + widgetId + '"]').first();
      }
      if (!$portal.length) {
        $portal = $('[data-me-nav-v2-portal="' + widgetId + '"]').first();
      }

      // Move outside Elementor overflow/stacking contexts so the panel is visible.
      if ($portal.length && !$portal.parent().is("body")) {
        $("body > [data-me-nav-v2-portal=\"" + widgetId + "\"]").remove();
        $portal.appendTo(document.body);
      }
      const $overlay = $portal.find(".me-nav-v2__overlay");
      const $panels = $portal.find(".me-nav-v2__offcanvas");
      const openPanel = function (selector) {
        const $panel = selector ? $(selector) : $panels.first();
        if (!$panel.length) {
          return;
        }
        $panel.addClass("is-open").attr("aria-hidden", "false");
        $overlay.prop("hidden", false).addClass("is-open");
        $("body").addClass("me-nav-v2-offcanvas-open");
      };
      const closePanels = function () {
        $panels.removeClass("is-open").attr("aria-hidden", "true");
        $overlay.prop("hidden", true).removeClass("is-open");
        $("body").removeClass("me-nav-v2-offcanvas-open");
      };
      $root.find("[data-me-offcanvas-open]").off("click.meNavV2Oc").on("click.meNavV2Oc", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const target = $(this).attr("data-me-offcanvas-open");
        openPanel(target);
      });
      $portal.find("[data-me-offcanvas-close]").off("click.meNavV2OcClose").on("click.meNavV2OcClose", function (e) {
        e.preventDefault();
        closePanels();
      });
      $(document).off("keyup.meNavV2Oc." + widgetId).on("keyup.meNavV2Oc." + widgetId, function (e) {
        if (e.key === "Escape") {
          closePanels();
        }
      });
    },
    bindOffcanvasSubmenus: function ($root) {
      const widgetId = $root.data("widget-id");
      const $portal = $('[data-me-nav-v2-portal="' + widgetId + '"]');
      $portal.find(".me-nav-v2__menu--offcanvas .menu-item-has-children > a, .me-nav-v2__menu--offcanvas .menu-item-has-mega > a").off("click.meNavV2Sub").on("click.meNavV2Sub", function (e) {
        const $parent = $(this).parent();
        const hasSub = $parent.find("> .sub-menu").length || $parent.find("> .magic-elements-mega-menu-content").length;
        if (hasSub) {
          e.preventDefault();
          $parent.toggleClass("is-open");
        }
      });
    },
    bindDesktopSubmenus: function ($root) {
      // Touch-friendly: first tap opens submenu / mega, second follows link.
      if (!("ontouchstart" in window)) {
        return;
      }
      $root.find(".me-nav-v2__desktop-nav .menu-item-has-children > a, .me-nav-v2__desktop-nav .menu-item-has-mega > a").off("click.meNavV2Touch").on("click.meNavV2Touch", function (e) {
        const $li = $(this).parent();
        if (!$li.hasClass("is-touch-open")) {
          e.preventDefault();
          $root.find(".menu-item-has-children, .menu-item-has-mega").removeClass("is-touch-open");
          $li.addClass("is-touch-open");
        }
      });
    }
  };
  $window.on("elementor/frontend/init", MeNavV2.onInit);
})(jQuery, window);

/***/ },

/***/ "./assets/src/scss/nav_menu_v2.scss"
/*!******************************************!*\
  !*** ./assets/src/scss/nav_menu_v2.scss ***!
  \******************************************/
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
/******/ 	__webpack_require__("./assets/src/scss/nav_menu_v2.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/js/nav_menu_v2.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ZDLElBQUksQ0FDSCxzR0FDRixDQUFDLENBQ0F1QyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FDekJDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVYyxDQUFDLEVBQUU7UUFDckMsTUFBTW9ELEdBQUcsR0FBR3pILENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzRHLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQ2EsR0FBRyxDQUFDckYsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1VBQ2xDaUMsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNsQnhELEtBQUssQ0FDRkMsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQ3BEc0IsV0FBVyxDQUFDLGVBQWUsQ0FBQztVQUMvQm9GLEdBQUcsQ0FBQzVFLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDL0I7TUFDRixDQUFDLENBQUM7SUFDTjtFQUNGLENBQUM7RUFFRDNDLE9BQU8sQ0FBQ3FELEVBQUUsQ0FBQyx5QkFBeUIsRUFBRXBELE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0FBQ3ZELENBQUMsRUFBRXNILE1BQU0sRUFBRXhFLE1BQU0sQ0FBQyxDOzs7Ozs7Ozs7OztBQ25XbEI7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvanMvbmF2X21lbnVfdjIuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC8uL2Fzc2V0cy9zcmMvc2Nzcy9uYXZfbWVudV92Mi5zY3NzP2EwODUiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50b3ItbWFnaWMta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWxlbWVudG9yLW1hZ2ljLWtpdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VsZW1lbnRvci1tYWdpYy1raXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vLi4vc2Nzcy9uYXZfbWVudV92Mi5zY3NzXCI7XG5cbihmdW5jdGlvbiAoJCwgZWxlbWVudG9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGNvbnN0ICR3aW5kb3cgPSAkKGVsZW1lbnRvcik7XG5cbiAgY29uc3QgTWVOYXZWMiA9IHtcbiAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgXCJlbV9raXRfbmF2X21lbnVfdjIuZGVmYXVsdFwiOiBNZU5hdlYyLmluaXRXaWRnZXQsXG4gICAgICB9O1xuXG4gICAgICAkLmVhY2gobWFwLCBmdW5jdGlvbiAod2lkZ2V0TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgZWxlbWVudG9yRnJvbnRlbmQuaG9va3MuYWRkQWN0aW9uKFxuICAgICAgICAgIFwiZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9cIiArIHdpZGdldE5hbWUsXG4gICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbml0V2lkZ2V0OiBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICBjb25zdCAkcm9vdCA9ICRzY29wZS5maW5kKFwiLm1lLW5hdi12MlwiKS5maXJzdCgpO1xuICAgICAgaWYgKCEkcm9vdC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBNZU5hdlYyLmJpbmRTdGlja3koJHJvb3QpO1xuICAgICAgTWVOYXZWMi5iaW5kU2VhcmNoKCRyb290KTtcbiAgICAgIE1lTmF2VjIuYmluZE9mZmNhbnZhcygkcm9vdCk7XG4gICAgICBNZU5hdlYyLmJpbmRPZmZjYW52YXNTdWJtZW51cygkcm9vdCk7XG4gICAgICBNZU5hdlYyLmJpbmREZXNrdG9wU3VibWVudXMoJHJvb3QpO1xuICAgIH0sXG5cbiAgICBiaW5kU3RpY2t5OiBmdW5jdGlvbiAoJHJvb3QpIHtcbiAgICAgIGlmICgkcm9vdC5hdHRyKFwiZGF0YS1zdGlja3lcIikgIT09IFwieWVzXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWRnZXRJZCA9ICRyb290LmF0dHIoXCJkYXRhLXdpZGdldC1pZFwiKSB8fCAkcm9vdC5kYXRhKFwid2lkZ2V0LWlkXCIpO1xuICAgICAgY29uc3Qgc3BhY2VyQ2xhc3MgPSBcIm1lLW5hdi12Ml9fc3RpY2t5LXNwYWNlclwiO1xuICAgICAgbGV0ICRzcGFjZXIgPSAkcm9vdC5uZXh0KFwiLlwiICsgc3BhY2VyQ2xhc3MpO1xuXG4gICAgICBpZiAoISRzcGFjZXIubGVuZ3RoKSB7XG4gICAgICAgICRzcGFjZXIgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIHNwYWNlckNsYXNzICsgJ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PicpO1xuICAgICAgICAkcm9vdC5hZnRlcigkc3BhY2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gRWxlbWVudG9yIHBhcmVudHMgb2Z0ZW4gYnJlYWsgbmF0aXZlIHN0aWNreSDigJQgdXNlIGZpeGVkIGluc3RlYWQuXG4gICAgICBjb25zdCAkcGFyZW50cyA9ICRyb290LnBhcmVudHMoXG4gICAgICAgIFwiLmVsZW1lbnRvci13aWRnZXQtY29udGFpbmVyLCAuZWxlbWVudG9yLWVsZW1lbnQsIC5lbGVtZW50b3Itc2VjdGlvbiwgLmUtY29uLCAuZS1jb24taW5uZXJcIlxuICAgICAgKTtcbiAgICAgICRwYXJlbnRzLmNzcyhcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcblxuICAgICAgbGV0IHRyaWdnZXJPZmZzZXQgPSAwO1xuXG4gICAgICBjb25zdCBtZWFzdXJlVHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWVhc3VyZSBuYXR1cmFsIHBvc2l0aW9uIHdoaWxlIG5vdCBmaXhlZC5cbiAgICAgICAgY29uc3Qgd2FzU3RpY2t5ID0gJHJvb3QuaGFzQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgIGlmICh3YXNTdGlja3kpIHtcbiAgICAgICAgICAkcm9vdC5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAkc3BhY2VyLmNzcyh7IGRpc3BsYXk6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMHB4XCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlck9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3IoJHJvb3Qub2Zmc2V0KCkudG9wKSk7XG4gICAgICAgIGlmICh3YXNTdGlja3kpIHtcbiAgICAgICAgICAkcm9vdC5hZGRDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3luY1NwYWNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRyb290Lmhhc0NsYXNzKFwiaXMtc3RpY2t5XCIpKSB7XG4gICAgICAgICAgJHNwYWNlci5jc3Moe1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiAkcm9vdC5vdXRlckhlaWdodCgpICsgXCJweFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzcGFjZXIuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBweFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3RpY2sgb25seSBhZnRlciB0aGUgbWVudSdzIG9yaWdpbmFsIHBvc2l0aW9uIGhhcyBiZWVuIHNjcm9sbGVkIHBhc3QuXG4gICAgICAgIGNvbnN0IHNob3VsZFN0aWNrID0gd2luZG93LnNjcm9sbFkgPiB0cmlnZ2VyT2Zmc2V0O1xuICAgICAgICBjb25zdCBpc1N0aWNreSA9ICRyb290Lmhhc0NsYXNzKFwiaXMtc3RpY2t5XCIpO1xuXG4gICAgICAgIGlmIChzaG91bGRTdGljayA9PT0gaXNTdGlja3kpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkcm9vdC50b2dnbGVDbGFzcyhcImlzLXN0aWNreVwiLCBzaG91bGRTdGljayk7XG4gICAgICAgIHN5bmNTcGFjZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIG1lYXN1cmVUcmlnZ2VyKCk7XG4gICAgICBvblNjcm9sbCgpO1xuXG4gICAgICAkKHdpbmRvdylcbiAgICAgICAgLm9mZihcInNjcm9sbC5tZU5hdlYyU3RpY2t5LlwiICsgd2lkZ2V0SWQpXG4gICAgICAgIC5vbihcInNjcm9sbC5tZU5hdlYyU3RpY2t5LlwiICsgd2lkZ2V0SWQsIG9uU2Nyb2xsKTtcbiAgICAgICQod2luZG93KVxuICAgICAgICAub2ZmKFwicmVzaXplLm1lTmF2VjJTdGlja3kuXCIgKyB3aWRnZXRJZClcbiAgICAgICAgLm9uKFwicmVzaXplLm1lTmF2VjJTdGlja3kuXCIgKyB3aWRnZXRJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG1lYXN1cmVUcmlnZ2VyKCk7XG4gICAgICAgICAgb25TY3JvbGwoKTtcbiAgICAgICAgICBzeW5jU3BhY2VyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiaW5kU2VhcmNoOiBmdW5jdGlvbiAoJHJvb3QpIHtcbiAgICAgIGNvbnN0ICR0b2dnbGUgPSAkcm9vdC5maW5kKFwiLm1lLW5hdi12Ml9fc2VhcmNoLXRvZ2dsZVwiKTtcbiAgICAgIGNvbnN0ICRwYW5lbCA9ICRyb290LmZpbmQoXCIubWUtbmF2LXYyX19zZWFyY2gtcGFuZWxcIik7XG4gICAgICBjb25zdCAkaW5wdXQgPSAkcGFuZWwuZmluZChcIi5tZS1uYXYtdjJfX3NlYXJjaC1pbnB1dFwiKTtcbiAgICAgIGNvbnN0ICRyZXN1bHRzID0gJHBhbmVsLmZpbmQoXCIubWUtbmF2LXYyX19zZWFyY2gtcmVzdWx0c1wiKTtcbiAgICAgIGNvbnN0ICRjbG9zZSA9ICRwYW5lbC5maW5kKFwiLm1lLW5hdi12Ml9fc2VhcmNoLWNsb3NlXCIpO1xuXG4gICAgICBpZiAoISR0b2dnbGUubGVuZ3RoIHx8ICEkcGFuZWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHRpbWVyID0gbnVsbDtcbiAgICAgIGxldCB4aHIgPSBudWxsO1xuXG4gICAgICBjb25zdCBvcGVuU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGFuZWwucHJvcChcImhpZGRlblwiLCBmYWxzZSkuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAkdG9nZ2xlLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJmb2N1c1wiKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2xvc2VTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwYW5lbC5wcm9wKFwiaGlkZGVuXCIsIHRydWUpLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgJHRvZ2dsZS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAkcmVzdWx0cy5lbXB0eSgpO1xuICAgICAgfTtcblxuICAgICAgJHRvZ2dsZS5vbihcImNsaWNrLm1lTmF2VjJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoJHBhbmVsLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgIGNsb3NlU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3BlblNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJGNsb3NlLm9uKFwiY2xpY2subWVOYXZWMlwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsb3NlU2VhcmNoKCk7XG4gICAgICB9KTtcblxuICAgICAgJChkb2N1bWVudCkub24oXCJrZXl1cC5tZU5hdlYyU2VhcmNoXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgIGNsb3NlU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkaW5wdXQub24oXCJpbnB1dC5tZU5hdlYyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgICAgICRyZXN1bHRzLmVtcHR5KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBNZU5hdlYyLnJ1bkFqYXhTZWFyY2goJHBhbmVsLCAkcmVzdWx0cywgdmFsdWUsIHhociwgZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgeGhyID0gcmVxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfSk7XG5cbiAgICAgICRwYW5lbC5vbihcImNsaWNrLm1lTmF2VjJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBydW5BamF4U2VhcmNoOiBmdW5jdGlvbiAoJHBhbmVsLCAkcmVzdWx0cywga2V5d29yZCwgcHJldlhociwgc2V0WGhyKSB7XG4gICAgICBpZiAodHlwZW9mIG1lTmF2VjIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldlhociAmJiBwcmV2WGhyLnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcHJldlhoci5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3N0VHlwZXMgPSAkcGFuZWwuYXR0cihcImRhdGEtcG9zdC10eXBlc1wiKSB8fCBcIltdXCI7XG4gICAgICAkcmVzdWx0cy5odG1sKFxuICAgICAgICAnPHAgY2xhc3M9XCJtZS1uYXYtdjItc2VhcmNoLWxvYWRpbmdcIj4nICtcbiAgICAgICAgICAobWVOYXZWMi5pMThuLnNlYXJjaGluZyB8fCBcIlNlYXJjaGluZ+KAplwiKSArXG4gICAgICAgICAgXCI8L3A+XCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJlcSA9ICQuYWpheCh7XG4gICAgICAgIHVybDogbWVOYXZWMi5hamF4VXJsLFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWN0aW9uOiBcIm1lX25hdl92Ml9zZWFyY2hcIixcbiAgICAgICAgICBub25jZTogbWVOYXZWMi5ub25jZSxcbiAgICAgICAgICBzOiBrZXl3b3JkLFxuICAgICAgICAgIHBvc3RfdHlwZXM6IHBvc3RUeXBlcyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdWNjZXNzICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICRyZXN1bHRzLmh0bWwocmVzcG9uc2UuZGF0YS5odG1sIHx8IFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcmVzdWx0cy5odG1sKFxuICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJtZS1uYXYtdjItc2VhcmNoLWVtcHR5XCI+JyArXG4gICAgICAgICAgICAgICAgKG1lTmF2VjIuaTE4bi5lbXB0eSB8fCBcIk5vIHJlc3VsdHMgZm91bmQuXCIpICtcbiAgICAgICAgICAgICAgICBcIjwvcD5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgIGlmICh0ZXh0U3RhdHVzICE9PSBcImFib3J0XCIpIHtcbiAgICAgICAgICAgICRyZXN1bHRzLmh0bWwoXG4gICAgICAgICAgICAgICc8cCBjbGFzcz1cIm1lLW5hdi12Mi1zZWFyY2gtZW1wdHlcIj4nICtcbiAgICAgICAgICAgICAgICAobWVOYXZWMi5pMThuLmVtcHR5IHx8IFwiTm8gcmVzdWx0cyBmb3VuZC5cIikgK1xuICAgICAgICAgICAgICAgIFwiPC9wPlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2V0WGhyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc2V0WGhyKHJlcSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJpbmRPZmZjYW52YXM6IGZ1bmN0aW9uICgkcm9vdCkge1xuICAgICAgY29uc3Qgd2lkZ2V0SWQgPSAkcm9vdC5kYXRhKFwid2lkZ2V0LWlkXCIpO1xuICAgICAgbGV0ICRwb3J0YWwgPSAkcm9vdFxuICAgICAgICAuc2libGluZ3MoJ1tkYXRhLW1lLW5hdi12Mi1wb3J0YWw9XCInICsgd2lkZ2V0SWQgKyAnXCJdJylcbiAgICAgICAgLmZpcnN0KCk7XG5cbiAgICAgIGlmICghJHBvcnRhbC5sZW5ndGgpIHtcbiAgICAgICAgJHBvcnRhbCA9ICRyb290XG4gICAgICAgICAgLmNsb3Nlc3QoXCIuZWxlbWVudG9yLXdpZGdldC1jb250YWluZXIsIC5lbGVtZW50b3ItZWxlbWVudFwiKVxuICAgICAgICAgIC5maW5kKCdbZGF0YS1tZS1uYXYtdjItcG9ydGFsPVwiJyArIHdpZGdldElkICsgJ1wiXScpXG4gICAgICAgICAgLmZpcnN0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghJHBvcnRhbC5sZW5ndGgpIHtcbiAgICAgICAgJHBvcnRhbCA9ICQoXG4gICAgICAgICAgJ1tkYXRhLW1lLW5hdi12Mi1wb3J0YWw9XCInICsgd2lkZ2V0SWQgKyAnXCJdJ1xuICAgICAgICApLmZpcnN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1vdmUgb3V0c2lkZSBFbGVtZW50b3Igb3ZlcmZsb3cvc3RhY2tpbmcgY29udGV4dHMgc28gdGhlIHBhbmVsIGlzIHZpc2libGUuXG4gICAgICBpZiAoJHBvcnRhbC5sZW5ndGggJiYgISRwb3J0YWwucGFyZW50KCkuaXMoXCJib2R5XCIpKSB7XG4gICAgICAgICQoXCJib2R5ID4gW2RhdGEtbWUtbmF2LXYyLXBvcnRhbD1cXFwiXCIgKyB3aWRnZXRJZCArIFwiXFxcIl1cIikucmVtb3ZlKCk7XG4gICAgICAgICRwb3J0YWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0ICRvdmVybGF5ID0gJHBvcnRhbC5maW5kKFwiLm1lLW5hdi12Ml9fb3ZlcmxheVwiKTtcbiAgICAgIGNvbnN0ICRwYW5lbHMgPSAkcG9ydGFsLmZpbmQoXCIubWUtbmF2LXYyX19vZmZjYW52YXNcIik7XG5cbiAgICAgIGNvbnN0IG9wZW5QYW5lbCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICBjb25zdCAkcGFuZWwgPSBzZWxlY3RvclxuICAgICAgICAgID8gJChzZWxlY3RvcilcbiAgICAgICAgICA6ICRwYW5lbHMuZmlyc3QoKTtcbiAgICAgICAgaWYgKCEkcGFuZWwubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICRwYW5lbC5hZGRDbGFzcyhcImlzLW9wZW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICRvdmVybGF5LnByb3AoXCJoaWRkZW5cIiwgZmFsc2UpLmFkZENsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJtZS1uYXYtdjItb2ZmY2FudmFzLW9wZW5cIik7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBhbmVscy5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgJG92ZXJsYXkucHJvcChcImhpZGRlblwiLCB0cnVlKS5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibWUtbmF2LXYyLW9mZmNhbnZhcy1vcGVuXCIpO1xuICAgICAgfTtcblxuICAgICAgJHJvb3RcbiAgICAgICAgLmZpbmQoXCJbZGF0YS1tZS1vZmZjYW52YXMtb3Blbl1cIilcbiAgICAgICAgLm9mZihcImNsaWNrLm1lTmF2VjJPY1wiKVxuICAgICAgICAub24oXCJjbGljay5tZU5hdlYyT2NcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLW1lLW9mZmNhbnZhcy1vcGVuXCIpO1xuICAgICAgICAgIG9wZW5QYW5lbCh0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgJHBvcnRhbFxuICAgICAgICAuZmluZChcIltkYXRhLW1lLW9mZmNhbnZhcy1jbG9zZV1cIilcbiAgICAgICAgLm9mZihcImNsaWNrLm1lTmF2VjJPY0Nsb3NlXCIpXG4gICAgICAgIC5vbihcImNsaWNrLm1lTmF2VjJPY0Nsb3NlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNsb3NlUGFuZWxzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAkKGRvY3VtZW50KVxuICAgICAgICAub2ZmKFwia2V5dXAubWVOYXZWMk9jLlwiICsgd2lkZ2V0SWQpXG4gICAgICAgIC5vbihcImtleXVwLm1lTmF2VjJPYy5cIiArIHdpZGdldElkLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgY2xvc2VQYW5lbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiaW5kT2ZmY2FudmFzU3VibWVudXM6IGZ1bmN0aW9uICgkcm9vdCkge1xuICAgICAgY29uc3Qgd2lkZ2V0SWQgPSAkcm9vdC5kYXRhKFwid2lkZ2V0LWlkXCIpO1xuICAgICAgY29uc3QgJHBvcnRhbCA9ICQoXG4gICAgICAgICdbZGF0YS1tZS1uYXYtdjItcG9ydGFsPVwiJyArIHdpZGdldElkICsgJ1wiXSdcbiAgICAgICk7XG5cbiAgICAgICRwb3J0YWxcbiAgICAgICAgLmZpbmQoXG4gICAgICAgICAgXCIubWUtbmF2LXYyX19tZW51LS1vZmZjYW52YXMgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAubWUtbmF2LXYyX19tZW51LS1vZmZjYW52YXMgLm1lbnUtaXRlbS1oYXMtbWVnYSA+IGFcIlxuICAgICAgICApXG4gICAgICAgIC5vZmYoXCJjbGljay5tZU5hdlYyU3ViXCIpXG4gICAgICAgIC5vbihcImNsaWNrLm1lTmF2VjJTdWJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zdCAkcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICBjb25zdCBoYXNTdWIgPVxuICAgICAgICAgICAgJHBhcmVudC5maW5kKFwiPiAuc3ViLW1lbnVcIikubGVuZ3RoIHx8XG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoXCI+IC5tYWdpYy1lbGVtZW50cy1tZWdhLW1lbnUtY29udGVudFwiKS5sZW5ndGg7XG4gICAgICAgICAgaWYgKGhhc1N1Yikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYmluZERlc2t0b3BTdWJtZW51czogZnVuY3Rpb24gKCRyb290KSB7XG4gICAgICAvLyBUb3VjaC1mcmllbmRseTogZmlyc3QgdGFwIG9wZW5zIHN1Ym1lbnUgLyBtZWdhLCBzZWNvbmQgZm9sbG93cyBsaW5rLlxuICAgICAgaWYgKCEoXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJHJvb3RcbiAgICAgICAgLmZpbmQoXG4gICAgICAgICAgXCIubWUtbmF2LXYyX19kZXNrdG9wLW5hdiAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5tZS1uYXYtdjJfX2Rlc2t0b3AtbmF2IC5tZW51LWl0ZW0taGFzLW1lZ2EgPiBhXCJcbiAgICAgICAgKVxuICAgICAgICAub2ZmKFwiY2xpY2subWVOYXZWMlRvdWNoXCIpXG4gICAgICAgIC5vbihcImNsaWNrLm1lTmF2VjJUb3VjaFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnN0ICRsaSA9ICQodGhpcykucGFyZW50KCk7XG4gICAgICAgICAgaWYgKCEkbGkuaGFzQ2xhc3MoXCJpcy10b3VjaC1vcGVuXCIpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkcm9vdFxuICAgICAgICAgICAgICAuZmluZChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLCAubWVudS1pdGVtLWhhcy1tZWdhXCIpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImlzLXRvdWNoLW9wZW5cIik7XG4gICAgICAgICAgICAkbGkuYWRkQ2xhc3MoXCJpcy10b3VjaC1vcGVuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfTtcblxuICAkd2luZG93Lm9uKFwiZWxlbWVudG9yL2Zyb250ZW5kL2luaXRcIiwgTWVOYXZWMi5vbkluaXQpO1xufSkoalF1ZXJ5LCB3aW5kb3cpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NyYy9zY3NzL25hdl9tZW51X3YyLnNjc3NcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Fzc2V0cy9zcmMvanMvbmF2X21lbnVfdjIuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiJCIsImVsZW1lbnRvciIsIiR3aW5kb3ciLCJNZU5hdlYyIiwib25Jbml0IiwibWFwIiwiaW5pdFdpZGdldCIsImVhY2giLCJ3aWRnZXROYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50b3JGcm9udGVuZCIsImhvb2tzIiwiYWRkQWN0aW9uIiwiJHNjb3BlIiwiJHJvb3QiLCJmaW5kIiwiZmlyc3QiLCJsZW5ndGgiLCJiaW5kU3RpY2t5IiwiYmluZFNlYXJjaCIsImJpbmRPZmZjYW52YXMiLCJiaW5kT2ZmY2FudmFzU3VibWVudXMiLCJiaW5kRGVza3RvcFN1Ym1lbnVzIiwiYXR0ciIsIndpZGdldElkIiwiZGF0YSIsInNwYWNlckNsYXNzIiwiJHNwYWNlciIsIm5leHQiLCJhZnRlciIsIiRwYXJlbnRzIiwicGFyZW50cyIsImNzcyIsInRyaWdnZXJPZmZzZXQiLCJtZWFzdXJlVHJpZ2dlciIsIndhc1N0aWNreSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiTWF0aCIsIm1heCIsImZsb29yIiwib2Zmc2V0IiwidG9wIiwiYWRkQ2xhc3MiLCJzeW5jU3BhY2VyIiwib3V0ZXJIZWlnaHQiLCJvblNjcm9sbCIsInNob3VsZFN0aWNrIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU3RpY2t5IiwidG9nZ2xlQ2xhc3MiLCJvZmYiLCJvbiIsIiR0b2dnbGUiLCIkcGFuZWwiLCIkaW5wdXQiLCIkcmVzdWx0cyIsIiRjbG9zZSIsInRpbWVyIiwieGhyIiwib3BlblNlYXJjaCIsInByb3AiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsImNsb3NlU2VhcmNoIiwiZW1wdHkiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImtleSIsInZhbHVlIiwidmFsIiwidHJpbSIsImNsZWFyVGltZW91dCIsInJ1bkFqYXhTZWFyY2giLCJyZXEiLCJrZXl3b3JkIiwicHJldlhociIsInNldFhociIsIm1lTmF2VjIiLCJyZWFkeVN0YXRlIiwiYWJvcnQiLCJwb3N0VHlwZXMiLCJodG1sIiwiaTE4biIsInNlYXJjaGluZyIsImFqYXgiLCJ1cmwiLCJhamF4VXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYWN0aW9uIiwibm9uY2UiLCJzIiwicG9zdF90eXBlcyIsImRvbmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiJHBvcnRhbCIsInNpYmxpbmdzIiwiY2xvc2VzdCIsInBhcmVudCIsImlzIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJib2R5IiwiJG92ZXJsYXkiLCIkcGFuZWxzIiwib3BlblBhbmVsIiwic2VsZWN0b3IiLCJjbG9zZVBhbmVscyIsInRhcmdldCIsIiRwYXJlbnQiLCJoYXNTdWIiLCIkbGkiLCJqUXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==