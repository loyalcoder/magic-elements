jQuery(document).ready(function ($) {
    $('.me-twentytwenty').each(function () {
        var $this = $(this);
        var orientation = $this.data('orientation') || 'horizontal';
        var beforeLabel = $this.data('before-label') || 'Before';
        var afterLabel = $this.data('after-label') || 'After';

        $this.twentytwenty({
            default_offset_pct: 0.5,
            orientation: orientation,
            before_label: beforeLabel,
            after_label: afterLabel,
            no_overlay: false,
        });
    });
});
