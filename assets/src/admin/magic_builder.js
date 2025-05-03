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
        // add new condition
        $(document).on('click', '#add-condition', function() {
            $.ajax({
                url: magic_builder_data.ajax_url,
                type: 'POST',
                data: {
                    action: 'magic_builder_header_condition_form',
                    conditionTyp: 'first_label',
                    nonce: magic_builder_data.nonce
                },
                beforeSend: function() {
                $('.preloader').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loading-spinner"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="1"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>');
                },
                success: function(response) {
                    if (response.success) {
                        $('.condition-loader').append(response.data.html);
                        // Initialize Select2 for any new select elements
                        $('.mc-condition-type').select2({
                            width: '100%',
                            placeholder: 'Select options',
                            allowClear: true
                        });
                    } else {
                        $('.condition-group').html('<p>Error loading conditions.</p>');
                    }
                    $('.preloader').html('');
                },
                error: function() {
                    $('.condition-group').html('<p>Error loading conditions.</p>');
                }
            });
        });
        $(document).on('click', '#remove-condition', function() {
            $(this).parent('.form-group').remove();
        });
        // on submit form
        $(document).on('submit', '#create-content-form', function(e) {
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: magic_builder_data.ajax_url,
                type: 'POST',
                data: formData + '&action=magic_builder_create_content&nonce=' + magic_builder_data.nonce,
                beforeSend: function() {
                    $('.preloader').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="loading-spinner"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="1"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>');
                },
                success: function(response) {
                    console.log(response.data, 'farid');
                    if (response.success) {
                        console.log(response.data);
                        $('.me-show-error').html(response.data.edit_url);
                        //window.location.reload();
                    } else {
                        $('.preloader').html('<p class="error">Error creating content.</p>');
                    }
                },
                error: function() {
                    $('.preloader').html('<p class="error">Error creating content.</p>');
                }
            });
           // console.log(formData);
        })
    });
