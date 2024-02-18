(function ($) {
  $('#pkun-enquiry-form form').on('submit', function (event) {
    event.preventDefault();

    var data = $(this).serialize();

    $.post(EM_KIT_data.ajax_url, data, function (response) {
      console.log('response ', response);
    }).fail(function () {
      console.log(EM_KIT_data.message);
    });
  });
})(jQuery);
