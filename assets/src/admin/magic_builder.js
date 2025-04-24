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
                    $('.condition-group select').select2({
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
            console.log('remove condition');
            $(this).parent('.form-group').remove();
        });
        // add new condition display
        $(document).on('change', '.condition-display', function() {
            let current_condition = $(this).val();
            let currentElement = $(this);
            if(current_condition == 'singular') {
            $.ajax({
                url: magic_builder_data.ajax_url,
                type: 'POST',
                data: {
                    action: 'magic_builder_singular_options',
                    nonce: magic_builder_data.nonce
                },
                beforeSend: function() {
                    $('.preloader').html('<p>Loading options...</p>');
                },
                success: function(response) {
                    if (response.success) {
                        // Create a new select element for singular options
                        currentElement.parent().append(response.data.html);
                        // Add options to the select
                       
                        
                        // Insert after the current condition display select
                      
                        
                        // Initialize Select2 for the new select
                        $('.condition-singular-d-1').select2({
                            width: '100%',
                            placeholder: 'Select singular option',
                            allowClear: true
                        });
                    } else {
                        $('.condition-loader').html('<p>Error loading singular options.</p>');
                    }
                },
                error: function() {
                    $('.condition-loader').html('<p>Error loading singular options.</p>');
                }
            });
            }else {
                $('.condition-container-dep-2').html('');
            }
        });
        // post type change
        $(document).on('change', '.condition-singular-d-1', function() {
            console.log($(this).val());
            let current_condition = $(this).val();
            let currentElement = $(this);
        $.ajax({
            url: magic_builder_data.ajax_url,
            type: 'POST',
            data: {
                action: 'magic_builder_single_post_type_options',
                nonce: magic_builder_data.nonce,
                post_type: current_condition
            },
            beforeSend: function() {
                $('.preloader').html('<p>Loading options...</p>');
            },
            success: function(response) {
                console.log(response);
                if (response.success) {
                    // Handle the response data
                    $('.condition-container-dep-2').html(response.data.html);
                    
                    // Initialize Select2 for the new content
                    $('.condition-container-dep-2 select').select2({
                        width: '100%',
                        placeholder: 'Select option',
                        allowClear: true
                    });
                } else {
                    $('.condition-loader').html('<p>Error loading post type options.</p>');
                }
            },
            error: function() {
                $('.condition-loader').html('<p>Error loading post type options.</p>');
            }
        });
        });
        $(document).on('change', '.condition-singular-d-2', function() {
            let current_condition = $(this).val();
            let currentElement = $(this);
            console.log($('.condition-singular-d-1').val(), 'last');
            let postOrTaxonomy = '<div class="condition-container-dep-3">Loaded<select class="single_post_loader" multiple></select></div>';
            if(current_condition == 'specific') {
                $('.spacif-ox').html(postOrTaxonomy);
                // Initialize Select2 for the single post loader
                $('.single_post_loader').select2({
                    width: '100%',
                    placeholder: 'Select posts',
                    allowClear: true,
                    multiple: true,
                    minimumInputLength: 1, // Require at least 1 character
                    ajax: {
                        url: magic_builder_data.ajax_url,
                        dataType: 'json',
                        delay: 250,
                        data: function(params) {
                            return {
                                action: 'magic_builder_search_posts',
                                nonce: magic_builder_data.nonce,
                                post_type: currentElement.closest('.condition-item').find('.condition-singular-d-1').val(),
                                search: params.term,
                                page: params.page || 1
                            };
                        },
                        processResults: function(data, params) {
                            params.page = params.page || 1;
                            
                            if (!data.success || !data.data || !data.data.items) {
                                return {
                                    results: [],
                                    pagination: { more: false }
                                };
                            }

                            const results = data.data.items.map(item => ({
                                id: item.ID,
                                text: item.post_title
                            }));

                            return {
                                results: results,
                                pagination: {
                                    more: data.data.pagination.more
                                }
                            };
                        },
                        cache: true
                    }
                });
            }
            
        });
    });
