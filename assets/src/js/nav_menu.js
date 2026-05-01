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
          // alert('nav menu loaded');
          $('.open_search').on('click', function(event){
          event.stopPropagation();
            $('.search_block').toggleClass('visible');
            $('.search_block .search_input').focus();
          });

          $('body').on('click', function(){
            $('.search_block').removeClass('visible');
          });

          $('.search_box').on('click', function(event){
            event.stopPropagation();
          });

          $('.search_input').on('keyup', function(event){
            if($(this).val() !== ''){
              $(this).addClass('typing');
            } else {
              $(this).removeClass('typing');
            }
          });
          //offcanvas dropdown menu js
          document.querySelectorAll('.cnw-nav .menu-item-has-children > a')
          .forEach(link => {
              link.addEventListener('click', e => {
                  e.preventDefault();
                  link.parentElement.classList.toggle('active');
              });
          });

          const getFallbackBackdrop = function () {
            let backdrop = document.querySelector('.emkit-offcanvas-backdrop');
            if (!backdrop) {
              backdrop = document.createElement('div');
              backdrop.className = 'emkit-offcanvas-backdrop';
              backdrop.style.position = 'fixed';
              backdrop.style.top = '0';
              backdrop.style.right = '0';
              backdrop.style.bottom = '0';
              backdrop.style.left = '0';
              backdrop.style.background = 'rgba(0, 0, 0, 0.5)';
              backdrop.style.zIndex = '1040';
              backdrop.style.display = 'none';
              document.body.appendChild(backdrop);
            }

            return backdrop;
          };

          const closeFallbackOffcanvas = function (offcanvasEl) {
            offcanvasEl.classList.remove('show', 'showing', 'hiding');
            offcanvasEl.setAttribute('aria-hidden', 'true');

            const backdrop = document.querySelector('.emkit-offcanvas-backdrop');
            if (backdrop) {
              backdrop.style.display = 'none';
            }
          };

          // Ensure offcanvas opens reliably on trigger click.
          $scope.find('.mobile-menu').off('click.emkitOffcanvas').on('click.emkitOffcanvas', function () {
            const targetSelector = this.getAttribute('data-bs-target');
            if (!targetSelector) {
              return;
            }

            const offcanvasEl = document.querySelector(targetSelector);
            if (!offcanvasEl) {
              return;
            }

            if (window.bootstrap && window.bootstrap.Offcanvas) {
              window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl).show();
              return;
            }

            // Bootstrap JS fallback
            offcanvasEl.classList.add('show');
            offcanvasEl.classList.remove('showing', 'hiding');
            offcanvasEl.setAttribute('aria-modal', 'true');
            offcanvasEl.setAttribute('role', 'dialog');

            const backdrop = getFallbackBackdrop();
            backdrop.style.display = 'block';
            backdrop.onclick = function () {
              closeFallbackOffcanvas(offcanvasEl);
            };
          });

          $scope.find('[data-bs-dismiss="offcanvas"]').off('click.emkitOffcanvasDismiss').on('click.emkitOffcanvasDismiss', function () {
            if (window.bootstrap && window.bootstrap.Offcanvas) {
              return;
            }

            const offcanvasEl = this.closest('.offcanvas');
            if (!offcanvasEl) {
              return;
            }

            closeFallbackOffcanvas(offcanvasEl);
          });
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);
