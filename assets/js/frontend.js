(function($) {
  console.log('Welcome frontend.js file from marlin');
  jQuery(document).ready(function ($) {
    // Add click event listener to each tab
    $('.tab').on('click', function () {
        // Remove active class from all tabs
        $('.tab').removeClass('active');

        // Add active class to the clicked tab
        $(this).addClass('active');
    });
});

})(jQuery);
