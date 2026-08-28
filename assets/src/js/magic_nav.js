import "./../scss/magic_nav.scss";

(function ($, elementor) {
  "use strict";

  const emkMagicNav = {
    onInit: function () {
      const E_FRONT = elementorFrontend;
      const map = {
        "em_kit_magic_nav.default": emkMagicNav.widget,
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
          class: [
            "magic-nav-portal",
            "elementor-element-" + scopeId,
            $root.hasClass("magic-nav--panel-left") ? "magic-nav--panel-left" : "magic-nav--panel-right",
          ].join(" "),
          "data-magic-nav-scope": scopeId,
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

      $(document)
        .off("keyup." + ns)
        .on("keyup." + ns, function (event) {
          if (event.key === "Escape" && $panel.hasClass("is-open")) {
            closePanel();
          }
        });

      $(window)
        .off("resize." + ns)
        .on("resize." + ns, function () {
          if (!isMobile() && $panel.hasClass("is-open")) {
            closePanel();
          }
        });

      // Submenu toggle: mobile panel always; vertical layout always; placeholder links on desktop.
      $root
        .find(".magic-nav__menu .menu-item-has-children > a")
        .add($panel.find(".magic-nav__mobile-menu .menu-item-has-children > a"))
        .off("click." + ns)
        .on("click." + ns, function (event) {
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

            parent.parentElement
              ?.querySelectorAll(":scope > .menu-item-has-children.active")
              .forEach(function (sibling) {
                if (sibling !== parent) {
                  sibling.classList.remove("active");
                }
              });
          }
        });
    },
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
