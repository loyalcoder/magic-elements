import "./../scss/_auth_modal.scss";

/**
 * Global shared auth modal binder (theme + Elementor nav triggers).
 */
(function ($) {
  "use strict";

  $(function () {
    var config = typeof meNavAuth !== "undefined" ? meNavAuth : null;
    var $modal = $('.magic-auth-modal[data-me-auth-scope="global"]').first();

    if (!$modal.length) {
      $modal = $(".magic-auth-modal").first();
    }

    if (!$modal.length || !config || !config.ajaxUrl) {
      return;
    }

    // Ensure modal is portaled to body (avoids overflow clipping).
    if (!$modal.parent().is("body")) {
      $modal.appendTo(document.body);
    }

    var clearMessage = function ($form) {
      $form
        .find("[data-auth-message]")
        .prop("hidden", true)
        .removeClass("is-error is-success")
        .text("");
    };

    var showMessage = function ($form, text, type) {
      $form
        .find("[data-auth-message]")
        .prop("hidden", false)
        .removeClass("is-error is-success")
        .addClass(type === "success" ? "is-success" : "is-error")
        .text(
          text ||
            (config.i18n && config.i18n.genericError) ||
            "Something went wrong."
        );
    };

    var switchPanel = function (panelName) {
      $modal.find("[data-auth-panel]").removeClass("is-active");
      var $panel = $modal.find('[data-auth-panel="' + panelName + '"]');
      if ($panel.length) {
        $panel.addClass("is-active");
      }
    };

    var openModal = function (panelName) {
      $("body").removeClass("me-nav-v2-offcanvas-open magic-mobile-menu-open overflow-hidden");
      $(".mobile-menu-content").addClass("-translate-x-full");
      $(".movie-offcanvas-content").addClass("translate-x-full");
      $(".me-nav-v2__offcanvas").removeClass("is-open").attr("aria-hidden", "true");
      $(".me-nav-v2__overlay").prop("hidden", true).removeClass("is-open");

      switchPanel(panelName || "signup");
      $modal
        .find("[data-auth-message]")
        .prop("hidden", true)
        .text("")
        .removeClass("is-error is-success");
      $modal.prop("hidden", false);
      void $modal[0].offsetWidth;
      $modal.addClass("is-open").attr("aria-hidden", "false");
      $("body").addClass("magic-auth-modal-open");
      window.setTimeout(function () {
        $modal
          .find("[data-auth-panel].is-active input:visible:not([tabindex='-1'])")
          .first()
          .trigger("focus");
      }, 50);
    };

    var closeModal = function () {
      $modal.removeClass("is-open").attr("aria-hidden", "true");
      $("body").removeClass("magic-auth-modal-open");
      var duration =
        parseFloat(
          getComputedStyle($modal[0]).getPropertyValue(
            "--magic-auth-modal-duration"
          )
        ) || 280;
      window.setTimeout(function () {
        if (!$modal.hasClass("is-open")) {
          $modal.prop("hidden", true);
        }
      }, duration);
    };

    $(document).on("click.meAuthGlobal", ".open-auth-modal", function (event) {
      event.preventDefault();
      event.stopPropagation();
      openModal($(this).attr("data-auth-modal") || "signup");
    });

    $modal.on("click.meAuthGlobal", "[data-auth-modal-close]", function (event) {
      event.preventDefault();
      closeModal();
    });

    $modal.on("click.meAuthGlobal", "[data-auth-switch]", function (event) {
      event.preventDefault();
      switchPanel($(this).attr("data-auth-switch"));
    });

    $(document).on("keyup.meAuthGlobal", function (event) {
      if (event.key === "Escape" && $modal.hasClass("is-open")) {
        closeModal();
      }
    });

    $modal.on("submit.meAuthGlobal", "[data-auth-form]", function (event) {
      event.preventDefault();

      var $form = $(this);
      var formType = $form.attr("data-auth-form");
      var $submit = $form.find(".magic-auth-modal__submit");
      var originalLabel = $submit.text();
      var payload = {
        action:
          formType === "signin" ? "me_nav_auth_login" : "me_nav_auth_register",
        nonce: config.nonce,
      };

      $form.serializeArray().forEach(function (field) {
        payload[field.name] = field.value;
      });

      if (formType === "signup") {
        payload.agree = $form.find('[name="agree"]').is(":checked") ? "1" : "";
        payload.website = $form.find('[name="website"]').val() || "";
      }
      if (formType === "signin") {
        payload.remember = $form.find('[name="remember"]').is(":checked")
          ? "1"
          : "";
      }

      clearMessage($form);
      $submit
        .prop("disabled", true)
        .text((config.i18n && config.i18n.processing) || "Please wait…");

      $.ajax({
        url: config.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: payload,
      })
        .done(function (response) {
          if (response && response.success) {
            showMessage(
              $form,
              response.data && response.data.message,
              "success"
            );
            if (response.data && response.data.open) {
              switchPanel(response.data.open);
              return;
            }
            if (response.data && response.data.redirect) {
              window.setTimeout(function () {
                window.location.href = response.data.redirect;
              }, 600);
            }
            return;
          }
          showMessage(
            $form,
            response && response.data && response.data.message,
            "error"
          );
        })
        .fail(function () {
          showMessage(
            $form,
            config.i18n && config.i18n.genericError,
            "error"
          );
        })
        .always(function () {
          $submit.prop("disabled", false).text(originalLabel);
        });
    });

    $modal.on("click.meAuthGlobal", "[data-auth-logout]", function (event) {
      event.preventDefault();
      var $panel = $modal.find('[data-auth-panel="account"]');
      var $button = $(this);
      var originalLabel = $button.text();
      $button
        .prop("disabled", true)
        .text((config.i18n && config.i18n.processing) || "Please wait…");

      $.ajax({
        url: config.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: {
          action: "me_nav_auth_logout",
          nonce: config.nonce,
        },
      })
        .done(function (response) {
          if (
            response &&
            response.success &&
            response.data &&
            response.data.redirect
          ) {
            window.location.href = response.data.redirect;
            return;
          }
          showMessage(
            $panel,
            response && response.data && response.data.message,
            "error"
          );
        })
        .fail(function () {
          showMessage(
            $panel,
            config.i18n && config.i18n.genericError,
            "error"
          );
        })
        .always(function () {
          $button.prop("disabled", false).text(originalLabel);
        });
    });
  });
})(jQuery);
