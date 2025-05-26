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
            console.log(response.data.html);
            if(response.success){
                let html  = response.data.html;
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
}); 