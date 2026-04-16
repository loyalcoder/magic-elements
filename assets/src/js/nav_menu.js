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
          const toggleStickyShadow = () => {
              const hasScrolled = window.scrollY > 0;

              document.querySelectorAll('.magic-header.is-sticky').forEach((header) => {
                  header.classList.toggle('is-scrolled', hasScrolled);
              });
          };

          $(window).off('scroll.magicElementsStickyShadow').on('scroll.magicElementsStickyShadow', toggleStickyShadow);
          toggleStickyShadow();

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
      },
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);
