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
                    // Initialize select2 and condition UI after content is loaded
                    setTimeout(function() {
                        meBuilderInitConditionUI($('.magic-elements-addnew-popup'));
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
                // Initialize select2 and condition UI for new row
                setTimeout(function() {
                    meBuilderInitConditionUI($('.magic-elements-addnew-popup'));
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
  // Display-on change: show/hide selective singular fields
  $(document).on('change', '.magic-elements-addnew-popup .me-condition-display-on', function() {
    var v = $(this).val();
    var $row = $(this).closest('.magic-elements-add-condition');
    $row.find('.me-builder-condition-selective').toggle(v === 'selective_singular');
    if (v !== 'selective_singular') {
      var $sel = $row.find('.me-builder-post-select');
      if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
        $sel.val(null).trigger('change');
      }
    }
  });

  // Post type change: clear post select (selected items may be from another type)
  $(document).on('change', '.magic-elements-addnew-popup .me-builder-post-type', function() {
    var $row = $(this).closest('.magic-elements-add-condition');
    var $sel = $row.find('.me-builder-post-select');
    if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
      $sel.val(null).trigger('change');
    }
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
                handleSuccess(response.data);
            } else {
                handleError(response.data);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', error);
            alert('An error occurred while submitting the template. Please try again.');
        }
    });
  });
  
  function meBuilderInitConditionUI($popup) {
    if (!$popup || !$popup.length) return;
    $popup.find('#template_type').each(function() {
      var $el = $(this);
      if ($el.hasClass('select2-hidden-accessible')) $el.select2('destroy');
      $el.select2({ width: '100%', dropdownParent: $popup });
    });
    $popup.find('.magic-elements-add-condition').each(function() {
      var $row = $(this);
      var $displayType = $row.find('.me-condition-display-type');
      var $displayOn = $row.find('.me-condition-display-on');
      var $postType = $row.find('.me-builder-post-type');
      var $postSelect = $row.find('.me-builder-post-select');
      [$displayType, $displayOn, $postType].forEach(function($sel) {
        if ($sel.length && $sel.hasClass('select2-hidden-accessible')) $sel.select2('destroy');
        if ($sel.length) $sel.select2({ width: '100%', dropdownParent: $popup });
      });
      var showSelective = $displayOn.val() === 'selective_singular';
      $row.find('.me-builder-condition-selective').toggle(showSelective);
      if ($postSelect.length) {
        if ($postSelect.hasClass('select2-hidden-accessible')) $postSelect.select2('destroy');
        $postSelect.select2({
          width: '100%',
          dropdownParent: $popup,
          placeholder: $postSelect.data('placeholder') || 'Search or select…',
          minimumInputLength: 0,
          allowClear: true,
          ajax: {
            url: me_builder_ajax_object.ajax_url,
            dataType: 'json',
            delay: 250,
            data: function(params) {
              return {
                action: 'me_builder_search_posts',
                nonce: me_builder_ajax_object.nonce,
                search: params.term || '',
                page: params.page || 1,
                post_type: $postType.val() || 'post'
              };
            },
            processResults: function(data) {
              if (data.success && data.data && data.data.results) {
                return {
                  results: data.data.results,
                  pagination: data.data.pagination
                };
              }
              return { results: [] };
            }
          }
        });
      }
    });
  }

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
  function handleSuccess(data) {
    // Clean up old messages first to avoid duplicate entries
    $('.magic-elements-form-actions .success-message, .edit-link').remove();

    // Append the success message
    $('.magic-elements-form-actions button').after(
        `<span class="success-message">${data.message}</span>`
    );

    // Prepend an edit link if available
    if (data.edit_link) {
        $('.magic-elements-form-actions button').before(
            `<span class="edit-link">${data.edit_link}</span>`
        );
    }

    // Optionally close the popup or redirect

    // Add logic here, e.g., set a timeout to close or redirect
}

function handleError(data) {
    console.error('Error:', data.message);
    // You could also display this error to the user in the UI as needed
}

}); 