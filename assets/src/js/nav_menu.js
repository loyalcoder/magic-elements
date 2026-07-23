import "./../scss/nav_menu.scss"
(function ($, elementor) {
    "use strict";
    let $window = $(elementor);
  
    let emkElementor = {
      onInit: function () {
        let E_FRONT = elementorFrontend;
        let widgetHandlersMap = {
          "em_kit_nav_menu.default": emkElementor.EmKitNavMenu,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitNavMenu: function ($scope) {
          const $root = $scope.find('.magic-header').first().length
            ? $scope.find('.magic-header').first()
            : $scope;
          const $toggle = $root.find('.mobile-menu-toggle');
          const $panel = $root.find('.mobile-menu-panel');
          const $backdrop = $root.find('.mobile-menu-backdrop');
          const $close = $root.find('.mobile-menu-close');
          const $desktopSearchSlot = $root.find('[data-desktop-search-slot]');
          const $mobileSearchSlot = $root.find('[data-mobile-search-slot]');
          const $searchButton = $root.find('.menu-search.open_search').first();

          const moveSearchToMobile = function () {
            if (!$searchButton.length || !$mobileSearchSlot.length) {
              return;
            }
            $mobileSearchSlot.append($searchButton);
          };

          const moveSearchToDesktop = function () {
            if (!$searchButton.length || !$desktopSearchSlot.length) {
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

          $root.find('.open_search').off('click.emkitSearch').on('click.emkitSearch', function(event){
            event.stopPropagation();
            $root.find('.search_block').toggleClass('visible');
            $root.find('.search_block .search_input').focus();
          });

          $root.find('.search_close').off('click.emkitSearchClose').on('click.emkitSearchClose', function(event){
            event.preventDefault();
            event.stopPropagation();
            $root.find('.search_block').removeClass('visible');
          });

          $('body').off('click.emkitSearch').on('click.emkitSearch', function(){
            $('.search_block').removeClass('visible');
          });

          $root.find('.search_box').off('click.emkitSearch').on('click.emkitSearch', function(event){
            event.stopPropagation();
          });

          $root.find('.search_input').off('keyup.emkitSearch').on('keyup.emkitSearch', function(){
            if($(this).val() !== ''){
              $(this).addClass('typing');
            } else {
              $(this).removeClass('typing');
            }
          });

          $root.find('.cnw-nav .menu-item-has-children > a, .cnw-nav-mobile .menu-item-has-children > a')
          .off('click.emkitSubmenu')
          .on('click.emkitSubmenu', function (e) {
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

                  parent.parentElement
                      ?.querySelectorAll(':scope > .menu-item-has-children.active')
                      .forEach(sibling => {
                          if (sibling !== parent) {
                              sibling.classList.remove('active');
                          }
                      });
              }
          });
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);
