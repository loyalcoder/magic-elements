jQuery(function($) {
    // Lightbox trigger
    $(document).on('click', '.lightbox-trigger', function(e) {
        e.preventDefault();
        let target = $(this).data('target');
        $(target).fadeIn();
        $('body').addClass('lightbox-open');
    });
    // Close lightbox
    $(document).on('click', '.lightbox-close, .custom-lightbox-content', function(e) {
        if ($(e.target).hasClass('custom-lightbox-content') || $(e.target).hasClass('lightbox-close')) {
            $('.custom-lightbox-content').fadeOut();
            $('body').removeClass('lightbox-open');
        }
    });
    // Close with ESC key
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.custom-lightbox-content').fadeOut();
            $('body').removeClass('lightbox-open');
        }
    });
});