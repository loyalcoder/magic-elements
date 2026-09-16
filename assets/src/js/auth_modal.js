/**
 * Shared signup / sign-in modal binder.
 *
 * @param {JQueryStatic} $
 * @param {JQuery} $scope Elementor widget scope
 * @param {JQuery} $root Widget root
 * @param {Object} [options]
 * @param {Function} [options.onBeforeOpen]
 */
export function bindAuthModal($, $scope, $root, options) {
  const opts = options || {};
  const authScopeId = $scope.data("id") || "";
  let $authTriggers = $scope
    .find(".open-auth-modal")
    .add($root.find(".open-auth-modal"))
    .add($('[data-me-nav-v2-portal="' + authScopeId + '"] .open-auth-modal'));

  let $authModal = $scope.find(".magic-auth-modal").first();

  if (!$authModal.length) {
    $authModal = $root.find(".magic-auth-modal").first();
  }

  if (!$authTriggers.length || !$authModal.length) {
    // Modal may already live on body from a previous bind.
    $authModal = $('.magic-auth-modal[data-me-auth-scope="' + authScopeId + '"]').first();
    $authTriggers = $authTriggers.add(
      $('[data-me-nav-v2-portal="' + authScopeId + '"] .open-auth-modal')
    );
    if (!$authTriggers.length || !$authModal.length) {
      return;
    }
  }

  const authNs = "emkitAuthModal." + authScopeId;
  const authConfig = typeof meNavAuth !== "undefined" ? meNavAuth : null;

  $(".magic-auth-modal[data-me-auth-scope='" + authScopeId + "']")
    .not($authModal)
    .remove();

  if (!$authModal.data("meAuthMoved")) {
    $authModal
      .addClass("elementor-element-" + authScopeId)
      .attr("data-me-auth-scope", authScopeId)
      .appendTo(document.body)
      .data("meAuthMoved", true);
  }

  const getAuthModal = function () {
    return $('.magic-auth-modal[data-me-auth-scope="' + authScopeId + '"]').first();
  };

  const clearAuthMessage = function ($form) {
    const $message = $form.find("[data-auth-message]");
    $message.prop("hidden", true).removeClass("is-error is-success").text("");
  };

  const showAuthMessage = function ($form, text, type) {
    const $message = $form.find("[data-auth-message]");
    $message
      .prop("hidden", false)
      .removeClass("is-error is-success")
      .addClass(type === "success" ? "is-success" : "is-error")
      .text(
        text ||
          (authConfig && authConfig.i18n && authConfig.i18n.genericError) ||
          "Something went wrong."
      );
  };

  const switchAuthPanel = function (panelName) {
    $authModal = getAuthModal();
    $authModal.find("[data-auth-panel]").removeClass("is-active");
    const $panel = $authModal.find('[data-auth-panel="' + panelName + '"]');
    if ($panel.length) {
      $panel.addClass("is-active");
    }
  };

  const openAuthModal = function (panelName) {
    if (typeof opts.onBeforeOpen === "function") {
      opts.onBeforeOpen();
    }
    $authModal = getAuthModal();
    switchAuthPanel(panelName || "signup");
    $authModal
      .find("[data-auth-message]")
      .prop("hidden", true)
      .text("")
      .removeClass("is-error is-success");
    $authModal.prop("hidden", false);
    void $authModal[0].offsetWidth;
    $authModal.addClass("is-open").attr("aria-hidden", "false");
    document.body.classList.add("magic-auth-modal-open");
    window.setTimeout(function () {
      $authModal
        .find("[data-auth-panel].is-active input:visible")
        .first()
        .trigger("focus");
    }, 50);
  };

  const closeAuthModal = function () {
    $authModal = getAuthModal();
    $authModal.removeClass("is-open").attr("aria-hidden", "true");
    document.body.classList.remove("magic-auth-modal-open");
    const duration =
      parseFloat(
        getComputedStyle($authModal[0]).getPropertyValue(
          "--magic-auth-modal-duration"
        )
      ) || 280;
    window.setTimeout(function () {
      if (!$authModal.hasClass("is-open")) {
        $authModal.prop("hidden", true);
      }
    }, duration);
  };

  $authTriggers.off("click." + authNs).on("click." + authNs, function (event) {
    event.preventDefault();
    event.stopPropagation();
    const panel = $(this).attr("data-auth-modal") || "signup";
    openAuthModal(panel);
  });

  $authModal
    .off("click." + authNs, "[data-auth-modal-close]")
    .on("click." + authNs, "[data-auth-modal-close]", function (event) {
      event.preventDefault();
      closeAuthModal();
    });

  $authModal
    .off("click." + authNs, "[data-auth-switch]")
    .on("click." + authNs, "[data-auth-switch]", function (event) {
      event.preventDefault();
      switchAuthPanel($(this).attr("data-auth-switch"));
    });

  $(document)
    .off("keyup." + authNs)
    .on("keyup." + authNs, function (event) {
      if (event.key === "Escape" && getAuthModal().hasClass("is-open")) {
        closeAuthModal();
      }
    });

  $authModal
    .off("submit." + authNs, "[data-auth-form]")
    .on("submit." + authNs, "[data-auth-form]", function (event) {
      event.preventDefault();

      if (!authConfig || !authConfig.ajaxUrl) {
        return;
      }

      const $form = $(this);
      const formType = $form.attr("data-auth-form");
      const $submit = $form.find(".magic-auth-modal__submit");
      const originalLabel = $submit.text();
      const payload = {
        action:
          formType === "signin" ? "me_nav_auth_login" : "me_nav_auth_register",
        nonce: authConfig.nonce,
      };

      $form.serializeArray().forEach(function (field) {
        payload[field.name] = field.value;
      });

      if (formType === "signup") {
        payload.agree = $form.find('[name="agree"]').is(":checked") ? "1" : "";
      }
      if (formType === "signin") {
        payload.remember = $form.find('[name="remember"]').is(":checked")
          ? "1"
          : "";
      }

      clearAuthMessage($form);
      $submit
        .prop("disabled", true)
        .text(
          (authConfig.i18n && authConfig.i18n.processing) || "Please wait…"
        );

      $.ajax({
        url: authConfig.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: payload,
      })
        .done(function (response) {
          if (response && response.success) {
            showAuthMessage(
              $form,
              response.data && response.data.message,
              "success"
            );
            if (response.data && response.data.open) {
              switchAuthPanel(response.data.open);
              return;
            }
            if (response.data && response.data.redirect) {
              window.setTimeout(function () {
                window.location.href = response.data.redirect;
              }, 600);
            }
            return;
          }
          showAuthMessage(
            $form,
            response && response.data && response.data.message,
            "error"
          );
        })
        .fail(function () {
          showAuthMessage(
            $form,
            authConfig.i18n && authConfig.i18n.genericError,
            "error"
          );
        })
        .always(function () {
          $submit.prop("disabled", false).text(originalLabel);
        });
    });

  $authModal
    .off("click." + authNs, "[data-auth-logout]")
    .on("click." + authNs, "[data-auth-logout]", function (event) {
      event.preventDefault();
      if (!authConfig || !authConfig.ajaxUrl) {
        return;
      }
      const $panel = getAuthModal().find('[data-auth-panel="account"]');
      const $button = $(this);
      const originalLabel = $button.text();
      $button
        .prop("disabled", true)
        .text(
          (authConfig.i18n && authConfig.i18n.processing) || "Please wait…"
        );

      $.ajax({
        url: authConfig.ajaxUrl,
        type: "POST",
        dataType: "json",
        data: {
          action: "me_nav_auth_logout",
          nonce: authConfig.nonce,
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
          showAuthMessage(
            $panel,
            response && response.data && response.data.message,
            "error"
          );
        })
        .fail(function () {
          showAuthMessage(
            $panel,
            authConfig.i18n && authConfig.i18n.genericError,
            "error"
          );
        })
        .always(function () {
          $button.prop("disabled", false).text(originalLabel);
        });
    });
}
