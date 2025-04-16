 import "./magic_builder.scss";
 import $ from 'jquery';
    jQuery(function($){
        $('.widget-row').on('click', function() {
            var template = $(this).data('template');
            $('#template-preview-modal').fadeIn();
            console.log(template);
            $.ajax({
                url: magic_builder_data.ajax_url,
                type: 'POST',
                data: {
                    action: 'magic_builder_header_list',
                    template: template,
                    nonce: magic_builder_data.nonce
                },
                beforeSend: function() {
                    //$('.modal-body').html('<p>Loading ' + template + ' template preview...</p>');
                },
                success: function(response) {
                    if (response.success) {
                        $('.modal-body').html(response.data.html);
                        // Destroy existing Select2 instance if it exists
                        if ($('#display-on').data('select2')) {
                            $('#display-on').select2('destroy');
                        }
                        // Reinitialize Select2 with options
                        $('#display-on').select2({
                            width: '100%',
                            placeholder: 'Select display options',
                            allowClear: true
                        });
                        // If there are pre-selected values, trigger change
                        if ($('#display-on').val()) {
                            $('#display-on').trigger('change');
                        }
                    } else {
                        $('.modal-body').html('<p>Error loading template preview.</p>');
                    }
                },
                error: function() {
                    $('.modal-body').html('<p>Error loading template preview.</p>');
                }
            });
            
            // Here you would typically load the template preview content via AJAX
            // For now, we'll just show a placeholder
           // $('.modal-body').html('<p>Loading ' + template + ' template preview...</p>');
        });
        // create new header
        $(document).on('click', '.add-new-header', function() {
            $('#create-content-modal').fadeIn();
        });
        $(document).on('click', '.close-modal', function() {
            $('#create-content-modal').fadeOut();
        });
        // Close modal when clicking the close button or outside the modal
        $('.close-modal, .template-modal').on('click', function(e) {
            if (e.target === this) {
                $('#template-preview-modal').fadeOut();
            }
        });
    });
