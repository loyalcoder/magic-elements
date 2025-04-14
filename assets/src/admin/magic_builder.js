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

        // Close modal when clicking the close button or outside the modal
        $('.close-modal, .template-modal').on('click', function(e) {
            if (e.target === this) {
                $('#template-preview-modal').fadeOut();
            }
        });
    });
