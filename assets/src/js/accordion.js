import "./../scss/accordion.scss"
(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "magicelements_accordion.default": emkElementor.MagicelementsAccordion,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      MagicelementsAccordion: function ($scope) {
        $('.magicelements-accordion-wrapper').each(function () {
            const $wrapper = $(this);
            const duration = parseInt($wrapper.data('animation-duration'), 10) || 300;
    
            // Style 1: Only Current Item Toggles
            if ($wrapper.hasClass('style_one')) {
                const $titles = $wrapper.find('.magicelements-accordion-title');
                const $contents = $wrapper.find('.magicelements-accordion-content');
    
                // Initialize icons for Style 1
                $titles.find('.accordion_expand_icon').show();
                $titles.find('.accordion_collapse_icon').hide();
    
                // Open the first item by default
                $titles.first().addClass('active');
                $contents.first().show();
                $titles.first().find('.accordion_expand_icon').hide();
                $titles.first().find('.accordion_collapse_icon').show();
    
                $titles.off('click.style_one').on('click.style_one', function () {
                    const $this = $(this);
                    const $content = $this.next('.magicelements-accordion-content');
    
                    // Collapse all other accordions
                    $titles.not($this).removeClass('active').find('.accordion_expand_icon').show().end().find('.accordion_collapse_icon').hide();
                    $contents.not($content).slideUp(duration);
    
                    // Toggle the clicked accordion
                    $this.toggleClass('active');
                    $content.slideToggle(duration);
    
                    // Update icons for the clicked accordion
                    $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));
                    $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));
                });
            }
    
            // Style 2: Only This Item Toggles Independently
            if ($wrapper.hasClass('style_two')) {
                const $titles = $wrapper.find('.magicelements-accordion-title');
    
                // Initialize icons for Style 2
                $titles.find('.accordion_expand_icon').show();
                $titles.find('.accordion_collapse_icon').hide();
    
                $titles.off('click.style_two').on('click.style_two', function () {
                    const $this = $(this);
                    const $content = $this.next('.magicelements-accordion-content');
    
                    // Only toggle this item's content
                    $this.toggleClass('active');
                    $content.slideToggle(duration);
    
                    // Toggle icons
                    $this.find('.accordion_expand_icon').toggle(!$this.hasClass('active'));
                    $this.find('.accordion_collapse_icon').toggle($this.hasClass('active'));
                });
            }
    
            // Style 3: All Items Open By Default
            if ($wrapper.hasClass('style_three')) {
                const $titles = $wrapper.find('.magicelements-accordion-title');
                const $contents = $wrapper.find('.magicelements-accordion-content');
    
                // Initialize icons and content for Style 3
                $titles.find('.accordion_expand_icon').hide(); // Hide expand icon by default
                $titles.find('.accordion_collapse_icon').show(); // Show collapse icon by default
                $contents.show(); // Ensure all items are visible by default
    
                $titles.off('click.style_three').on('click.style_three', function () {
                    const $this = $(this);
                    const $content = $this.next('.magicelements-accordion-content');
    
                    // Toggle content visibility
                    $this.toggleClass('active');
                    $content.slideToggle(duration);
    
                    // Toggle icons
                    $this.find('.accordion_expand_icon').toggle($this.hasClass('active'));
                    $this.find('.accordion_collapse_icon').toggle(!$this.hasClass('active'));
                });
            }
        });
    },
    
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);