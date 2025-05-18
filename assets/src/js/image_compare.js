jQuery(function ($) {
    $('.image-compare').each(function () {
        let $this = $(this);
        let orientation = $this.data('orientation') || 'horizontal';
        let beforeLabel = $this.data('before-label') || 'Before';
        let afterLabel = $this.data('after-label') || 'After';

        $this.twentytwenty({
            default_offset_pct: 0.5,
            orientation: orientation,
            before_label: beforeLabel,
            after_label: afterLabel,
            no_overlay: false,
        });
    });
});
