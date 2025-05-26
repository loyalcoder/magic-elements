import $ from 'jquery';
jQuery(function(){
    $('.magic-elements-builder-list li a').on('click', function(e){
        e.preventDefault();
        console.log($(this).data('title'));
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        let popupTitle = $(this).data('title');
        console.log(popupTitle);
        $('.magic-elements-preview-header h2').text(popupTitle);
        $('.magic-elements-preview-popup').fadeIn();
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
        $('.magic-elements-close-popup').trigger('click');
    });
    // new template
    $('.add-new-template-link').on('click', function(e){
        e.preventDefault();
        $('.magic-elements-addnew-popup').fadeIn();
        $.ajax({
            url: me_builder_ajax_object.ajax_url,
            type: 'POST',
            data: {
                action: 'new_or_update_builder_template',
                nonce: me_builder_ajax_object.nonce,
                post_id: $(this).data('post-id')
            },
            success: function(response){
                if(response.success){
                    let html  = response.data.html;
                    $('.magic-elements-addnew-popup .content-loader').html(html);
                    $('.magic-elements-addnew-popup .loading').removeClass('loading');
                }else{
                    console.log(response);
                }
            },
            error: function(error){
                console.log(error);
            }
        });
    });
     $('.magic-elements-addnew-popup .magic-elements-close-popup').on('click', function(e){
        e.preventDefault();
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
  $(document).on('click', '.magic-elements-addnew-popup #remove-condition', function(e){
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
            template_type: 'new'
        },
        success: function(response) {
            if (response.success) {
                // Handle successful submission
                console.log('Template submitted successfully:', response.data);
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
}); 