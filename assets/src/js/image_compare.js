jQuery(document).ready(function($) {
    $('.image-compare-container').each(function() {
        var $this = $(this);
        $this.twentytwenty({
            default_offset_pct: parseFloat($this.data('offset')) || 0.5,
            orientation: $this.data('orientation') || 'horizontal',
            no_overlay: $this.data('overlay') === 'false',
            move_slider_on_hover: $this.data('hover') === 'true',
            before_label: $this.find('img').eq(0).attr('alt'),
            after_label: $this.find('img').eq(1).attr('alt')
        });
    });
});