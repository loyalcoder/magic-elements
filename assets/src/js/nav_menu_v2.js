import "./../scss/nav_menu_v2.scss";

(function ($, elementor) {
  "use strict";

  const $window = $(elementor);

  const MeNavV2 = {
    onInit: function () {
      const map = {
        "em_kit_nav_menu_v2.default": MeNavV2.initWidget,
      };

      $.each(map, function (widgetName, callback) {
        elementorFrontend.hooks.addAction(
          "frontend/element_ready/" + widgetName,
          callback
        );
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
      MeNavV2.bindMegaMenus($root);
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
      const $parents = $root.parents(
        ".elementor-widget-container, .elementor-element, .elementor-section, .e-con, .e-con-inner"
      );
      $parents.css("overflow", "visible");

      let triggerOffset = 0;
      let stickyReady = false;

      const measureTrigger = function () {
        // Measure natural position while not fixed.
        const wasSticky = $root.hasClass("is-sticky");
        if (wasSticky) {
          $root.removeClass("is-sticky");
          $spacer.css({ display: "none", height: "0px" });
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
            height: $root.outerHeight() + "px",
          });
        } else {
          $spacer.css({
            display: "none",
            height: "0px",
          });
        }
      };

      const onScroll = function () {
        // Stick only after the menu's original position has been scrolled past.
        const shouldStick = window.scrollY > triggerOffset;
        const isSticky = $root.hasClass("is-sticky");

        if (shouldStick !== isSticky) {
          $root.toggleClass("is-sticky", shouldStick);
          if (stickyReady && shouldStick) {
            $root.addClass("is-sticky-animated");
          }
          if (!shouldStick) {
            $root.removeClass("is-sticky-animated");
          }
          syncSpacer();
        }
        stickyReady = true;
      };

      measureTrigger();
      onScroll();

      $(window)
        .off("scroll.meNavV2Sticky." + widgetId)
        .on("scroll.meNavV2Sticky." + widgetId, onScroll);
      $(window)
        .off("resize.meNavV2Sticky." + widgetId)
        .on("resize.meNavV2Sticky." + widgetId, function () {
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
      $results.html(
        '<p class="me-nav-v2-search-loading">' +
          (meNavV2.i18n.searching || "Searching…") +
          "</p>"
      );

      const req = $.ajax({
        url: meNavV2.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: {
          action: "me_nav_v2_search",
          nonce: meNavV2.nonce,
          s: keyword,
          post_types: postTypes,
        },
      })
        .done(function (response) {
          if (response && response.success && response.data) {
            $results.html(response.data.html || "");
          } else {
            $results.html(
              '<p class="me-nav-v2-search-empty">' +
                (meNavV2.i18n.empty || "No results found.") +
                "</p>"
            );
          }
        })
        .fail(function (jqXHR, textStatus) {
          if (textStatus !== "abort") {
            $results.html(
              '<p class="me-nav-v2-search-empty">' +
                (meNavV2.i18n.empty || "No results found.") +
                "</p>"
            );
          }
        });

      if (typeof setXhr === "function") {
        setXhr(req);
      }
    },

    bindOffcanvas: function ($root) {
      const widgetId = $root.data("widget-id");
      let $portal = $root
        .siblings('[data-me-nav-v2-portal="' + widgetId + '"]')
        .first();

      if (!$portal.length) {
        $portal = $root
          .closest(".elementor-widget-container, .elementor-element")
          .find('[data-me-nav-v2-portal="' + widgetId + '"]')
          .first();
      }

      if (!$portal.length) {
        $portal = $(
          '[data-me-nav-v2-portal="' + widgetId + '"]'
        ).first();
      }

      // Move outside Elementor overflow/stacking contexts so the panel is visible.
      if ($portal.length && !$portal.parent().is("body")) {
        $("body > [data-me-nav-v2-portal=\"" + widgetId + "\"]").remove();
        $portal.appendTo(document.body);
      }

      const $overlay = $portal.find(".me-nav-v2__overlay");
      const $panels = $portal.find(".me-nav-v2__offcanvas");

      const openPanel = function (selector) {
        const $panel = selector
          ? $(selector)
          : $panels.first();
        if (!$panel.length) {
          return;
        }

        // Ensure panel opens from the configured side.
        const position =
          $root.attr("data-offcanvas-position") ||
          ($panel.hasClass("me-nav-v2__offcanvas--left") ? "left" : "right");
        $panel
          .removeClass("me-nav-v2__offcanvas--left me-nav-v2__offcanvas--right")
          .addClass("me-nav-v2__offcanvas--" + position);

        $panel.addClass("is-open").attr("aria-hidden", "false");
        $overlay.prop("hidden", false).addClass("is-open");
        $("body").addClass("me-nav-v2-offcanvas-open");
      };

      const closePanels = function () {
        $panels.removeClass("is-open").attr("aria-hidden", "true");
        $overlay.prop("hidden", true).removeClass("is-open");
        $("body").removeClass("me-nav-v2-offcanvas-open");
      };

      $root
        .find("[data-me-offcanvas-open]")
        .off("click.meNavV2Oc")
        .on("click.meNavV2Oc", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const target = $(this).attr("data-me-offcanvas-open");
          openPanel(target);
        });

      $portal
        .find("[data-me-offcanvas-close]")
        .off("click.meNavV2OcClose")
        .on("click.meNavV2OcClose", function (e) {
          e.preventDefault();
          closePanels();
        });

      $(document)
        .off("keyup.meNavV2Oc." + widgetId)
        .on("keyup.meNavV2Oc." + widgetId, function (e) {
          if (e.key === "Escape") {
            closePanels();
          }
        });
    },

    bindOffcanvasSubmenus: function ($root) {
      const widgetId = $root.data("widget-id");
      const $portal = $(
        '[data-me-nav-v2-portal="' + widgetId + '"]'
      );

      $portal
        .find(
          ".me-nav-v2__menu--offcanvas .menu-item-has-children > a, .me-nav-v2__menu--offcanvas .menu-item-has-mega > a"
        )
        .off("click.meNavV2Sub")
        .on("click.meNavV2Sub", function (e) {
          const $parent = $(this).parent();
          const hasSub =
            $parent.find("> .sub-menu").length ||
            $parent.find("> .magic-elements-mega-menu-content").length;
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

      $root
        .find(
          ".me-nav-v2__desktop-nav .menu-item-has-children > a, .me-nav-v2__desktop-nav .menu-item-has-mega > a"
        )
        .off("click.meNavV2Touch")
        .on("click.meNavV2Touch", function (e) {
          const $li = $(this).parent();
          if (!$li.hasClass("is-touch-open")) {
            e.preventDefault();
            $root
              .find(".menu-item-has-children, .menu-item-has-mega")
              .removeClass("is-touch-open is-mega-open");
            $li.addClass("is-touch-open is-mega-open");
          }
        });
    },

    /**
     * Keep mega menu open while moving mouse from item → panel.
     * CSS :hover alone fails when there is an offset/gap.
     */
    bindMegaMenus: function ($root) {
      if (!$root.hasClass("me-nav-v2--mega")) {
        return;
      }

      const $items = $root.find(".me-nav-v2__desktop-nav .menu-item-has-mega");
      if (!$items.length) {
        return;
      }

      let closeTimer = null;

      const openMega = function ($li) {
        clearTimeout(closeTimer);
        $items.not($li).removeClass("is-mega-open");
        $li.addClass("is-mega-open");
      };

      const scheduleClose = function ($li) {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          $li.removeClass("is-mega-open");
        }, 220);
      };

      $items
        .off("mouseenter.meNavV2Mega mouseleave.meNavV2Mega")
        .on("mouseenter.meNavV2Mega", function () {
          openMega($(this));
        })
        .on("mouseleave.meNavV2Mega", function () {
          scheduleClose($(this));
        });

      // Also keep open while hovering the mega panel itself.
      $items
        .find("> .magic-elements-mega-menu-content")
        .off("mouseenter.meNavV2MegaPanel mouseleave.meNavV2MegaPanel")
        .on("mouseenter.meNavV2MegaPanel", function () {
          openMega($(this).closest(".menu-item-has-mega"));
        })
        .on("mouseleave.meNavV2MegaPanel", function () {
          scheduleClose($(this).closest(".menu-item-has-mega"));
        });
    },
  };

  $window.on("elementor/frontend/init", MeNavV2.onInit);
})(jQuery, window);
