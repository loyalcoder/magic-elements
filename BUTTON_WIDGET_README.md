# Magic Elements Enhanced Button Widget

## Overview

The Enhanced Button widget is a comprehensive Elementor widget that provides advanced button functionality with extensive customization options, interactive effects, and modern design features.

## Features

### 🎨 **Button Types**
- **Filled** - Solid background with hover effects
- **Outline** - Transparent with border, fills on hover
- **Ghost** - Minimal design with subtle hover effects
- **Gradient** - Animated gradient background

### 📏 **Button Sizes**
- Extra Small (xs)
- Small (sm)
- Medium (md) - Default
- Large (lg)
- Extra Large (xl)

### 🔲 **Button Shapes**
- **Square** - Sharp corners
- **Rounded** - Slightly rounded corners
- **Pill** - Fully rounded ends
- **Circle** - Perfect circle (icon only)

### 🎯 **Icon Support**
- **Icon Position**: Left, Right, Top, Bottom
- **Icon Spacing**: Customizable spacing between icon and text
- **Icon Size**: Adjustable icon size
- **Hide Icon on Hover**: Divi-style icon hiding effect

### ✨ **Hover Effects**
- **Slide** - Slides button on hover
- **Push** - Scales button on hover
- **Shutter** - Shutter effect overlay
- **Flash** - Flash animation
- **Pulse** - Continuous pulse
- **Rubber** - Rubber band effect
- **Swing** - Swing animation
- **Tada** - Celebration effect
- **Wobble** - Wobble animation
- **Jello** - Jello effect
- **Bounce** - Bounce animation
- **Flip** - 3D flip effect
- **Rotate** - Rotation effect
- **Scale** - Scale animation

### 🎭 **Entrance Animations**
- **Fade In** - Simple fade in
- **Fade In Up** - Fade in from bottom
- **Fade In Down** - Fade in from top
- **Fade In Left** - Fade in from left
- **Fade In Right** - Fade in from right
- **Slide In Up** - Slide in from bottom
- **Slide In Down** - Slide in from top
- **Slide In Left** - Slide in from left
- **Slide In Right** - Slide in from right
- **Zoom In** - Zoom in effect
- **Bounce In** - Bounce in effect
- **Rotate In** - Rotate in effect

### 🎨 **Styling Options**
- **Typography** - Full typography control
- **Colors** - Text and background colors
- **Borders** - Border styles and colors
- **Border Radius** - Custom border radius
- **Box Shadow** - Shadow effects
- **Padding** - Custom padding
- **Width** - Auto, Full Width, or Custom width

### 🎪 **Interactive Features**
- **Ripple Effect** - Material design ripple on click
- **Magnetic Effect** - Button follows cursor
- **Parallax Effect** - Gradient background follows mouse
- **Hover States** - Custom hover animations
- **Click Animations** - Click feedback animations

## Usage

### Basic Setup
1. Add the "Enhanced Button" widget to your Elementor page
2. Configure the button text and link
3. Choose button size, type, and shape
4. Add an icon if desired
5. Select hover effects and animations

### Advanced Customization
1. **Icon Configuration**
   - Select icon from Elementor's icon library
   - Choose position (Left, Right, Top, Bottom)
   - Adjust spacing and size
   - Enable "Hide Icon on Hover" for Divi-style effect

2. **Hover Effects**
   - Select from 15 different hover animations
   - Customize animation duration
   - Set hover scale factor

3. **Entrance Animations**
   - Choose entrance animation type
   - Set animation delay
   - Preview animations in real-time

4. **Styling**
   - Use Elementor's style controls for colors, typography, borders
   - Customize padding and margins
   - Set custom width if needed

### JavaScript API

The button widget provides a JavaScript API for advanced interactions:

```javascript
// Get button state
const state = MagicButtonUtils.getState($button);

// Set disabled state
MagicButtonUtils.setDisabled($button, true);

// Set loading state
MagicButtonUtils.setLoading($button, true);

// Create button programmatically
const $button = MagicButtonUtils.create({
    text: 'Click Me',
    icon: '<i class="fas fa-star"></i>',
    iconPosition: 'left',
    type: 'filled',
    size: 'md',
    shape: 'rounded',
    width: 'auto',
    link: '#',
    hoverEffect: 'pulse',
    entranceAnimation: 'fadeInUp',
    hideIconOnHover: true
});

// Trigger animations
MagicButton.animate($button, 'bounce');
MagicButton.pulse($button);
MagicButton.shake($button);
```

## CSS Classes

The widget generates the following CSS classes:

```css
.magic-button-wrapper          /* Button container */
.magic-button                 /* Main button element */
.magic-button-{size}         /* Size classes (xs, sm, md, lg, xl) */
.magic-button-{type}         /* Type classes (filled, outline, ghost, gradient) */
.magic-button-{shape}        /* Shape classes (square, rounded, pill, circle) */
.magic-button-width-{width}  /* Width classes (auto, full, custom) */
.magic-button-hover-{effect} /* Hover effect classes */
.magic-button-animate-{anim} /* Entrance animation classes */
.magic-button-hide-icon      /* Icon hiding class */
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized CSS with minimal repaints
- Efficient JavaScript with event delegation
- Lazy loading of animations
- Responsive design with mobile optimizations

## Accessibility

- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- High contrast support

## Examples

### Basic Button
```html
<div class="magic-button-wrapper">
    <a class="magic-button magic-button-md magic-button-filled magic-button-rounded" href="#">
        <span class="button-text">Click Here</span>
    </a>
</div>
```

### Button with Icon
```html
<div class="magic-button-wrapper">
    <a class="magic-button magic-button-md magic-button-outline magic-button-pill" href="#">
        <span class="icon icon-left">
            <i class="fas fa-arrow-right"></i>
        </span>
        <span class="button-text">Learn More</span>
    </a>
</div>
```

### Animated Button
```html
<div class="magic-button-wrapper">
    <a class="magic-button magic-button-lg magic-button-gradient magic-button-rounded magic-button-hover-pulse magic-button-animate-fadeInUp" href="#">
        <span class="button-text">Get Started</span>
    </a>
</div>
```

## Troubleshooting

### Common Issues

1. **Button not appearing**
   - Check if Elementor is active
   - Verify widget is enabled in settings
   - Clear cache and refresh

2. **Animations not working**
   - Ensure JavaScript is enabled
   - Check for console errors
   - Verify CSS is loaded

3. **Icons not showing**
   - Check icon library is loaded
   - Verify icon class names
   - Ensure Font Awesome is active

### Debug Mode

Enable debug mode by adding this to your theme's functions.php:

```php
add_action('wp_footer', function() {
    if (current_user_can('administrator')) {
        echo '<script>window.MAGIC_BUTTON_DEBUG = true;</script>';
    }
});
```

## Changelog

### Version 1.0.0
- Initial release
- 15 hover effects
- 13 entrance animations
- Icon support with 4 positions
- 4 button types
- 4 button shapes
- 5 button sizes
- Interactive effects (ripple, magnetic, parallax)
- Full Elementor integration
- Responsive design
- Accessibility features

## Support

For support and feature requests, please contact the development team or create an issue in the project repository. 