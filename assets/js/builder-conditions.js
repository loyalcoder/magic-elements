/**
 * Builder conditions UI: Selective Singular display-on + AJAX post search.
 * Loaded on builder page; runs without webpack build.
 */
(function ($) {
  'use strict';

  var POPUP_SEL = '.magic-elements-addnew-popup';
  var ROW_SEL = '.magic-elements-add-condition';

  function syncSelectiveVisibility($row) {
    var displayOn = $row.find('.me-condition-display-on').val();
    $row.find('.me-builder-condition-selective').toggle(displayOn === 'selective_singular');
  }

  function initPostSelect($row, $popup) {
    var $postType = $row.find('.me-builder-post-type');
    var $postSelect = $row.find('.me-builder-post-select');
    if (!$postSelect.length || typeof $.fn.select2 === 'undefined') return;
    if ($postSelect.hasClass('select2-hidden-accessible')) {
      try { $postSelect.select2('destroy'); } catch (e) {}
    }
    $postSelect.select2({
      width: '100%',
      dropdownParent: $popup.length ? $popup : $row,
      placeholder: $postSelect.data('placeholder') || 'Search or select…',
      minimumInputLength: 0,
      allowClear: true,
      ajax: {
        url: typeof me_builder_ajax_object !== 'undefined' ? me_builder_ajax_object.ajax_url : '',
        dataType: 'json',
        type: 'POST',
        delay: 250,
        data: function (params) {
          var pt = $row.find('.me-builder-post-type').val() || 'post';
          return {
            action: 'me_builder_search_posts',
            nonce: typeof me_builder_ajax_object !== 'undefined' ? me_builder_ajax_object.nonce : '',
            search: params.term || '',
            page: params.page || 1,
            post_type: pt
          };
        },
        processResults: function (data, params) {
          params = params || {};
          var page = params.page || 1;
          var results = [];
          var pagination = { more: false };
          if (data && data.success && data.data) {
            if (data.data.results) {
              results = data.data.results.slice();
            }
            if (data.data.pagination) {
              pagination = data.data.pagination;
            }
          }
          // Always prepend \"All <Post Type>\" on first page of results.
          var ptLabel = $postType.find('option:selected').text() || 'posts';
          var allValue = '__all__';
          var allText = 'All ' + ptLabel;
          if (page === 1) {
            var hasAll = results.some(function (item) { return item.id === allValue; });
            if (!hasAll) {
              results.unshift({ id: allValue, text: allText });
            }
          }
          return {
            results: results,
            pagination: pagination
          };
        }
      }
    });
  }

  function initBuilderConditions() {
    var $popup = $(POPUP_SEL);
    if (!$popup.length) return;
    $popup.find(ROW_SEL).each(function () {
      var $row = $(this);
      syncSelectiveVisibility($row);
      initPostSelect($row, $popup);
    });
  }

  $(function () {
    // Show/hide Selective Singular fields when "Display on" changes
    $(document).on('change', '.me-condition-display-on', function () {
      var $row = $(this).closest(ROW_SEL);
      syncSelectiveVisibility($row);
      if ($(this).val() !== 'selective_singular') {
        var $sel = $row.find('.me-builder-post-select');
        if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
          try { $sel.val(null).trigger('change'); } catch (e) {}
        }
      }
    });

    // When post type changes, clear post selection and refresh options (including All <Post Type>)
    $(document).on('change', '.me-builder-post-type', function () {
      var $row = $(this).closest(ROW_SEL);
      var $sel = $row.find('.me-builder-post-select');
      if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
        try { $sel.val(null).trigger('change'); } catch (e) {}
      }
      var $popup = $row.closest(POPUP_SEL);
      initPostSelect($row, $popup);
    });

    // After popup content is loaded (new template or add condition), re-init post selects with AJAX
    $(document).ajaxComplete(function (event, xhr, settings) {
      var data = settings.data || '';
      if (typeof data !== 'string') return;
      if (data.indexOf('new_or_update_builder_template') === -1 && data.indexOf('me_add_condition') === -1) return;
      setTimeout(initBuilderConditions, 220);
    });
  });
})(jQuery);
