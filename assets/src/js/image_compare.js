(function ($, elementor) {
    "use strict";
    var $window = $(elementor);
  
    var emkElementor = {
      onInit: function () {
        var E_FRONT = elementorFrontend;
        var widgetHandlersMap = {
          "em_kit_image_compare.default": emkElementor.EmKitImageCompare,
        };
  
        $.each(widgetHandlersMap, function (widgetName, callback) {
          E_FRONT.hooks.addAction("frontend/element_ready/" + widgetName, callback);
        });
      },

      EmKitImageCompare: function ($scope) {

        

        let dragging = false;
        let scrolling = false;
        let	resizing = false;
        
        const imageComparisonContainers = $(".comparison-wrapper");
        
        checkPosition(imageComparisonContainers);
        $(window).on("scroll", () => {
            if (!scrolling) {
                scrolling = true;
                !window.requestAnimationFrame
                    ? setTimeout(() => {
                            checkPosition(imageComparisonContainers);
                        }, 100)
                    : requestAnimationFrame(() => {
                            checkPosition(imageComparisonContainers);
                        });
            }
        });
        
        //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
        imageComparisonContainers.each(function() {
            var actual = $(this);
            drags(
                actual.find(".compare-drag"),
                actual.find(".compare-img"),
                actual,
                actual.find('.comparison-label[data-type="original"]'),
                actual.find('.comparison-label[data-type="modified"]')
            );
        });
        
        //upadate images label visibility
        $(window).on("resize", function() {
            if (!resizing) {
                resizing = true;
                !window.requestAnimationFrame
                    ? setTimeout(function() {
                            checkLabel(imageComparisonContainers);
                        }, 100)
                    : requestAnimationFrame(function() {
                            checkLabel(imageComparisonContainers);
                        });
            }
        });
        
        function checkPosition(container) {
            container.each(function() {
                var actualContainer = $(this);
                if (
                    $(window).scrollTop() + $(window).height() * 0.5 >
                    actualContainer.offset().top
                ) {
                    actualContainer.addClass("is-visible");
                }
            });
        
            scrolling = false;
        }
        
        function checkLabel(container) {
            container.each(function() {
                var actual = $(this);
                updateLabel(
                    actual.find('.comparison-label[data-type="modified"]'),
                    actual.find(".compare-img"),
                    "left"
                );
                updateLabel(
                    actual.find('.comparison-label[data-type="original"]'),
                    actual.find(".compare-img"),
                    "right"
                );
            });
        
            resizing = false;
        }
        
        //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
        function drags(
            dragElement,
            resizeElement,
            container,
            labelContainer,
            labelResizeElement
        ) {
            dragElement
                .on("mousedown vmousedown", e => {
                    dragElement.addClass("draggable");
                    resizeElement.addClass("resizable");
        
                    let dragWidth = dragElement.outerWidth(),
                        xPosition = dragElement.offset().left + dragWidth - e.pageX,
                        containerOffset = container.offset().left,
                        containerWidth = container.outerWidth(),
                        minLeft = containerOffset + 10,
                        maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
                    dragElement
                        .parents()
                        .on("mousemove vmousemove", function(e) {
                            if (!dragging) {
                                dragging = true;
                                !window.requestAnimationFrame
                                    ? setTimeout(function() {
                                            animateDraggedHandle(
                                                e,
                                                xPosition,
                                                dragWidth,
                                                minLeft,
                                                maxLeft,
                                                containerOffset,
                                                containerWidth,
                                                resizeElement,
                                                labelContainer,
                                                labelResizeElement
                                            );
                                        }, 100)
                                    : requestAnimationFrame(function() {
                                            animateDraggedHandle(
                                                e,
                                                xPosition,
                                                dragWidth,
                                                minLeft,
                                                maxLeft,
                                                containerOffset,
                                                containerWidth,
                                                resizeElement,
                                                labelContainer,
                                                labelResizeElement
                                            );
                                        });
                            }
                        })
                        .on("mouseup vmouseup", function(e) {
                            dragElement.removeClass("draggable");
                            resizeElement.removeClass("resizable");
                        });
                    e.preventDefault();
                })
                .on("mouseup vmouseup", function(e) {
                    dragElement.removeClass("draggable");
                    resizeElement.removeClass("resizable");
                });
        }
        
        function animateDraggedHandle(
            e,
            xPosition,
            dragWidth,
            minLeft,
            maxLeft,
            containerOffset,
            containerWidth,
            resizeElement,
            labelContainer,
            labelResizeElement
        ) {
            var leftValue = e.pageX + xPosition - dragWidth;
            //constrain the draggable element to move inside his container
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }
        
            var widthValue =
                (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
        
            $(".draggable")
                .css("left", widthValue)
                .on("mouseup vmouseup", function() {
                    $(this).removeClass("draggable");
                    resizeElement.removeClass("resizable");
                });
        
            $(".resizable").css("width", widthValue);
        
            updateLabel(labelResizeElement, resizeElement, "left");
            updateLabel(labelContainer, resizeElement, "right");
            dragging = false;
        }
        
        function updateLabel(label, resizeElement, position) {
            if (position == "left") {
                label.offset().left + label.outerWidth() <
                resizeElement.offset().left + resizeElement.outerWidth()
                    ? label.removeClass("is-hidden")
                    : label.addClass("is-hidden");
            } else {
                label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()
                    ? label.removeClass("is-hidden")
                    : label.addClass("is-hidden");
            }
        }
        

    },
    
    };
  
    $window.on("elementor/frontend/init", emkElementor.onInit);
  })(jQuery, window);