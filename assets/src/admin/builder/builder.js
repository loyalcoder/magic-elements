import $ from 'jquery';
jQuery(function(){
    // select2
    $('.magic-elements-builder-list li a').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        let popupTitle = $(this).data('title');
        $('.magic-elements-preview-header h2').text(popupTitle);
        $('.magic-elements-preview-popup').fadeIn();
        let dataType = $('.magic-elements-builder-list li a.active').data('type');
        // load preview
        let data = {
            action: 'me_load_preview_data',
            nonce: me_builder_ajax_object.nonce,
            data_type: dataType
        };
        fire_ajax(data, '.magic-elements-preview-list', '.magic-elements-pagination');
    });
    // pagination 
    $(document).on('click', '.magic-elements-pagination a', function(e){
        e.preventDefault();
        const url = $(this).attr('href');
        const pageParam = new URLSearchParams(url.split('?')[1]);
        const pageNumber = pageParam.get('paged');
        let dataType = $(this).parents('.magic-elements-preview-popup').siblings('.magic-elements-builder-sections').find('li a.active').data('type');
        let data = {
            action: 'me_load_preview_data',
            nonce: me_builder_ajax_object.nonce,
            data_type: dataType,
            paged: pageNumber
        };
        fire_ajax(data, '.magic-elements-preview-list', '.magic-elements-pagination');
    });
    $(document).on('click', '.magic-elements-close-popup', function(e){
        e.preventDefault();
        $(this).parents('.magic-elements-preview-popup').fadeOut();
    });
    $('.magic-elements-preview-popup').on('click', function(e){
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }
        $(this).fadeOut();
        //$('.magic-elements-close-popup').trigger('click');
    });
    // new template

    $(document).on('click', '.add-new-template-link, .magic-elements-preview-item .edit-link', function(e){
        e.preventDefault();
        $('.magic-elements-addnew-popup').fadeIn();
        $.ajax({
            url: me_builder_ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'new_or_update_builder_template',
                nonce: me_builder_ajax_object.nonce,
                post_id: $(this).data('id')
            },
            success: function(response){
                if(response.success){                    
                    $('.magic-elements-addnew-popup .content-loader').html(response.data.html);
                    $('.magic-elements-addnew-popup .loading').removeClass('loading');
                    // Initialize select2 after content is loaded
                    setTimeout(function() {
                        $('#template_type').select2({
                            width: '100%',
                            dropdownParent: $('.magic-elements-addnew-popup')
                        });
                        $('.magic-elements-add-condition select').select2({
                            width: '100%',
                            dropdownParent: $('.magic-elements-add-condition')
                        });
                    }, 100);
                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });
    // preview link 
    $(document).on('click', '.add-new-template-link, .magic-elements-preview-item .preview-link', function(e){
        e.preventDefault();
    });
    $(document).on('click', '.magic-elements-preview-item .preview-link, .magic-elements-preview-item .edit-elementor-link', function(e){
        e.preventDefault();
       let  previewLInk = $(this).attr('href');
        window.open(previewLInk, '_blank'); 
    });
    $(document).on('click', '.magic-elements-preview-item .delete-link', function(e){
        e.preventDefault();
        let this_button = $(this);
        let post_id = $(this).data('id');
        
        // Show confirmation dialog
        if (!confirm('Are you sure you want to delete this template?')) {
            return;
        }

        let data = {
            action: 'me_delete_template',
            nonce: me_builder_ajax_object.nonce,
            post_id: post_id
        };
        $.ajax({
            url: me_builder_ajax_object.ajax_url,
            type: 'POST',
            data: data,
            success: function(response){
                if(response.success){
                    $('.magic-elements-builder-list li a.active').trigger('click');
                    this_button.parents('.magic-elements-preview-item').remove();
                }else{
                    console.log(response);
                }
            }
        });
    });

     $(document).on('click', '.magic-elements-addnew-popup .magic-elements-close-popup', function(e){
        e.preventDefault();
        $('.magic-elements-builder-list li a.active').trigger('click');
        $('.magic-elements-addnew-popup').fadeOut();

     });
  // add condition   
  $(document).on('click', '.magic-elements-addnew-popup #me-add-condition', function(e){
    e.preventDefault();
    let this_button = $(this);
     $.ajax({
        url: me_builder_ajax_object.ajax_url,
        type: 'POST',
        data: {
            action: 'me_add_condition',
            nonce: me_builder_ajax_object.nonce,
            post_id: $(this).data('post-id')
        },
        success: function(response){
            if(response.success){
                let html = response.data.html;
                // Get current number of conditions
                let conditionCount = $('.magic-elements-add-condition').length;
                // Replace index numbers in the HTML
                html = html.replace(/\[0\]/g, `[${conditionCount}]`);
                this_button.parent().before(html);
                // Initialize select2 after adding new condition
                setTimeout(function() {
                    $('.magic-elements-add-condition select').select2({
                        width: '100%',
                        dropdownParent: $('.magic-elements-addnew-popup')
                    });
                }, 100);
            }else{
                console.log(response);
            }
        },
        error: function(error){
            console.log(error);
        }
     });
  });
  // remove condition
  $(document).on('click', '.magic-elements-addnew-popup .remove-condition', function(e){
    e.preventDefault();
    $(this).parent().remove();
  });
  // submit template
  $(document).on('click', '.magic-elements-addnew-popup #me-submit-template', function(e){
    e.preventDefault();
    let formData = $('#me-add-template-form').serialize();
    
    // Check if title is empty
    let title = $('#template_title').val();
    if (!title) {
      // Remove any existing error message
      $('.template-title-error').remove();
      
      // Add error message after the title input
      $('#template_title').after('<span class="template-title-error" style="color: red; display: block; margin-top: 5px;">Please enter a template title</span>');
      return;
    }
    $.ajax({
        url: me_builder_ajax_object.ajax_url,
        type: 'POST',
        data: {
            action: 'me_submit_template',
            nonce: me_builder_ajax_object.nonce,
            formData: formData,
        },
        success: function(response) {
            if (response.success) {
                // Handle successful submission
                $('.magic-elements-form-actions button').after('<span class="success-message">'+response.data.message+'</span>');
                if(response.data.edit_link){
                    $('.magic-elements-form-actions button').before(response.data.edit_link);
                 }
                // Optionally close popup or redirect
                
            } else {
                // Handle error message from server
                console.error('Error:', response.data.message);
                // Display error message to user
              
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            alert('An error occurred while submitting the template. Please try again.');
        }
    });
  });
  
  function fire_ajax (data, display_selector, pagination_selector) {
    $.ajax({
      url: me_builder_ajax_object.ajax_url,
      type: 'POST',
      data: data,
      success: function(response){
        
        $(display_selector).html(response.data.html);
        
        $(pagination_selector).html(response.data.pagination_html);
      },
      error: function(error){
        console.log(error);
      }
    });
  }
}); 