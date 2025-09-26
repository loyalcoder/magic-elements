/**
 * Magic Elements Button Widget JavaScript
 * Enhanced button functionality with interactive effects
 */

(function($) {
    'use strict';

    class MagicButton {
        constructor() {
            this.init();
        }

        init() {
            this.bindEvents();
            this.initRippleEffect();
            this.initMagneticEffect();
            this.initParallaxEffect();
        }

        bindEvents() {
            $(document).on('mouseenter', '.magic-button', this.handleMouseEnter.bind(this));
            $(document).on('mouseleave', '.magic-button', this.handleMouseLeave.bind(this));
            $(document).on('click', '.magic-button', this.handleClick.bind(this));
            $(document).on('mousemove', '.magic-button', this.handleMouseMove.bind(this));
        }

        handleMouseEnter(e) {
            const $button = $(e.currentTarget);
            
            // Add hover class
            $button.addClass('is-hovering');
            
            // Trigger custom hover event
            $button.trigger('magicButtonHover');
            
            // Initialize magnetic effect
            this.initMagneticEffect($button);
        }

        handleMouseLeave(e) {
            const $button = $(e.currentTarget);
            
            // Remove hover class
            $button.removeClass('is-hovering');
            
            // Reset magnetic effect
            this.resetMagneticEffect($button);
            
            // Trigger custom leave event
            $button.trigger('magicButtonLeave');
        }

        handleClick(e) {
            const $button = $(e.currentTarget);
            
            // Create ripple effect
            this.createRippleEffect(e, $button);
            
            // Trigger custom click event
            $button.trigger('magicButtonClick');
            
            // Add click animation
            $button.addClass('is-clicked');
            setTimeout(() => {
                $button.removeClass('is-clicked');
            }, 300);
        }

        handleMouseMove(e) {
            const $button = $(e.currentTarget);
            
            // Parallax effect for gradient buttons
            if ($button.hasClass('magic-button-gradient')) {
                this.updateParallaxEffect(e, $button);
            }
        }

        createRippleEffect(e, $button) {
            const $ripple = $('<span class="magic-button-ripple"></span>');
            const rect = $button[0].getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            $ripple.css({
                width: size + 'px',
                height: size + 'px',
                left: x + 'px',
                top: y + 'px'
            });

            $button.append($ripple);

            setTimeout(() => {
                $ripple.remove();
            }, 600);
        }

        initRippleEffect() {
            // Add ripple styles if not already present
            if (!$('#magic-button-ripple-styles').length) {
                const styles = `
                    <style id="magic-button-ripple-styles">
                        .magic-button {
                            position: relative;
                            overflow: hidden;
                        }
                        .magic-button-ripple {
                            position: absolute;
                            border-radius: 50%;
                            background: rgba(255, 255, 255, 0.3);
                            transform: scale(0);
                            animation: ripple 0.6s linear;
                            pointer-events: none;
                        }
                        @keyframes ripple {
                            to {
                                transform: scale(4);
                                opacity: 0;
                            }
                        }
                    </style>
                `;
                $('head').append(styles);
            }
        }

        initMagneticEffect($button = null) {
            const buttons = $button ? [$button] : $('.magic-button');
            
            buttons.each((index, button) => {
                const $btn = $(button);
                
                if ($btn.data('magnetic-initialized')) return;
                
                $btn.data('magnetic-initialized', true);
                $btn.data('original-transform', $btn.css('transform'));
            });
        }

        resetMagneticEffect($button) {
            const originalTransform = $button.data('original-transform') || '';
            $button.css('transform', originalTransform);
        }

        updateMagneticEffect(e, $button) {
            const rect = $button[0].getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = Math.max(rect.width, rect.height) / 2;
            const intensity = Math.max(0, 1 - distance / maxDistance);
            
            const translateX = deltaX * intensity * 0.1;
            const translateY = deltaY * intensity * 0.1;
            
            const originalTransform = $button.data('original-transform') || '';
            $button.css('transform', `${originalTransform} translate(${translateX}px, ${translateY}px)`);
        }

        initParallaxEffect() {
            // Parallax effect for gradient backgrounds
            $(document).on('mousemove', '.magic-button-gradient', (e) => {
                const $button = $(e.currentTarget);
                const rect = $button[0].getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (e.clientX - centerX) / rect.width;
                const deltaY = (e.clientY - centerY) / rect.height;
                
                $button.css('background-position', `${50 + deltaX * 20}% ${50 + deltaY * 20}%`);
            });
        }

        updateParallaxEffect(e, $button) {
            const rect = $button[0].getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) / rect.width;
            const deltaY = (e.clientY - centerY) / rect.height;
            
            $button.css('background-position', `${50 + deltaX * 20}% ${50 + deltaY * 20}%`);
        }

        // Public methods for external use
        static animate($button, animation) {
            $button.addClass(`magic-button-animate-${animation}`);
            setTimeout(() => {
                $button.removeClass(`magic-button-animate-${animation}`);
            }, 1000);
        }

        static pulse($button) {
            $button.addClass('magic-button-pulse');
            setTimeout(() => {
                $button.removeClass('magic-button-pulse');
            }, 1000);
        }

        static shake($button) {
            $button.addClass('magic-button-shake');
            setTimeout(() => {
                $button.removeClass('magic-button-shake');
            }, 500);
        }

        static bounce($button) {
            $button.addClass('magic-button-bounce');
            setTimeout(() => {
                $button.removeClass('magic-button-bounce');
            }, 1000);
        }
    }

    // Initialize when DOM is ready
    $(document).ready(function() {
        new MagicButton();
    });

    // Make MagicButton available globally
    window.MagicButton = MagicButton;

    // Additional utility functions
    window.MagicButtonUtils = {
        // Create a button with custom settings
        create: function(settings) {
            const defaults = {
                text: 'Click Me',
                icon: '',
                iconPosition: 'left',
                type: 'filled',
                size: 'md',
                shape: 'rounded',
                width: 'auto',
                link: '#',
                hoverEffect: 'none',
                entranceAnimation: 'none',
                hideIconOnHover: false
            };

            settings = $.extend({}, defaults, settings);

            const $button = $(`
                <div class="magic-button-wrapper">
                    <a class="magic-button magic-button-${settings.size} magic-button-${settings.type} magic-button-${settings.shape} magic-button-width-${settings.width}" href="${settings.link}">
                        ${settings.icon && settings.iconPosition === 'left' ? `<span class="icon icon-left">${settings.icon}</span>` : ''}
                        <span class="button-text">${settings.text}</span>
                        ${settings.icon && settings.iconPosition === 'right' ? `<span class="icon icon-right">${settings.icon}</span>` : ''}
                    </a>
                </div>
            `);

            if (settings.hoverEffect !== 'none') {
                $button.find('.magic-button').addClass(`magic-button-hover-${settings.hoverEffect}`);
            }

            if (settings.entranceAnimation !== 'none') {
                $button.find('.magic-button').addClass(`magic-button-animate-${settings.entranceAnimation}`);
            }

            if (settings.hideIconOnHover) {
                $button.find('.magic-button').addClass('magic-button-hide-icon');
            }

            return $button;
        },

        // Add custom hover effect
        addCustomHoverEffect: function($button, effect) {
            $button.addClass(`magic-button-custom-${effect}`);
        },

        // Remove custom hover effect
        removeCustomHoverEffect: function($button, effect) {
            $button.removeClass(`magic-button-custom-${effect}`);
        },

        // Get button state
        getState: function($button) {
            return {
                isHovering: $button.hasClass('is-hovering'),
                isClicked: $button.hasClass('is-clicked'),
                isAnimating: $button.hasClass('magic-button-animate')
            };
        },

        // Set button disabled state
        setDisabled: function($button, disabled) {
            if (disabled) {
                $button.addClass('magic-button-disabled').attr('disabled', 'disabled');
            } else {
                $button.removeClass('magic-button-disabled').removeAttr('disabled');
            }
        },

        // Set button loading state
        setLoading: function($button, loading) {
            if (loading) {
                $button.addClass('magic-button-loading').html('<span class="magic-button-spinner"></span>');
            } else {
                $button.removeClass('magic-button-loading');
            }
        }
    };

})(jQuery);