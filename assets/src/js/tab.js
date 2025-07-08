import "./../scss/tab.scss";

(function ($, elementor) {
    "use strict";
    var $window = $(window);
  
    var emkElementor = {
        onInit: function () {
            var E_FRONT = elementorFrontend;
            var widgetHandlersMap = {
                "em_kit_tab.default": emkElementor.EmKitTab,
            };
  
            $.each(widgetHandlersMap, function (widgetName, callback) {
                E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
            });
        },

        EmKitTab: function ($scope) {
            let tabsContainers = $scope.find('.tabs-container');
    
            tabsContainers.each(function () {
                const $tabsContainer = $(this);
                const $tabs = $tabsContainer.find('.tab');
                const $contents = $tabsContainer.find('.content');
                
                // Initialize tabs - activate first if none active
                if (!$tabs.hasClass('active')) {
                    $tabs.first().addClass('active');
                    const firstTabId = $tabs.first().data('tab');
                    $tabsContainer.find('#tab-' + firstTabId).addClass('active');
                }
    
                // Handle tab click
                $tabs.on('click', function (e) {
                    e.preventDefault();
                    
                    const $clickedTab = $(this);
                    const tabId = $clickedTab.data('tab');
                    const $targetContent = $tabsContainer.find('#tab-' + tabId);
                    
                    // Don't do anything if clicking the already active tab
                    if ($clickedTab.hasClass('active')) {
                        return;
                    }
                    
                    // Remove active classes
                    $tabs.removeClass('active');
                    $contents.removeClass('active');
                    
                    // Add active classes
                    $clickedTab.addClass('active');
                    $targetContent.addClass('active');
                    
                    // Optional: Trigger custom event
                    $tabsContainer.trigger('tab-changed', [tabId, $clickedTab, $targetContent]);
                });
                
                // Handle keyboard navigation for accessibility
                $tabs.on('keydown', function (e) {
                    const $currentTab = $(this);
                    const key = e.keyCode || e.which;
                    
                    // Left/Up arrow
                    if (key === 37 || key === 38) {
                        e.preventDefault();
                        const $prevTab = $currentTab.prev('.tab');
                        if ($prevTab.length) {
                            $prevTab.trigger('click').focus();
                        } else {
                            $tabs.last().trigger('click').focus();
                        }
                    }
                    // Right/Down arrow
                    else if (key === 39 || key === 40) {
                        e.preventDefault();
                        const $nextTab = $currentTab.next('.tab');
                        if ($nextTab.length) {
                            $nextTab.trigger('click').focus();
                        } else {
                            $tabs.first().trigger('click').focus();
                        }
                    }
                    // Home key
                    else if (key === 36) {
                        e.preventDefault();
                        $tabs.first().trigger('click').focus();
                    }
                    // End key
                    else if (key === 35) {
                        e.preventDefault();
                        $tabs.last().trigger('click').focus();
                    }
                });
            });
        }
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
})(jQuery, window);