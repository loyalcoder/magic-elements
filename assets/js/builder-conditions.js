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
    var isSelective = displayOn === 'selective_singular';
    $row.find('.me-builder-condition-selective').toggle(isSelective);
    if (isSelective) {
      syncScopeVisibility($row);
    }
  }

  function syncScopeVisibility($row) {
    var mode = $row.find('.me-builder-selective-mode').val() || 'all_posts';
    $row.find('.me-builder-post-select-wrap').toggle(mode === 'custom');
    var showTax = mode === 'taxonomy';
    $row.find('.me-builder-taxonomy-wrap').toggle(showTax);
    $row.find('.me-builder-taxonomy-terms-wrap').toggle(showTax);
    if (showTax) {
      fillTaxonomySelect($row);
      var tax = $row.find('.me-builder-taxonomy').val();
      if (tax) loadTermsForTaxonomy($row, tax);
    }
  }

  function fillTaxonomySelect($row) {
    var postType = $row.find('.me-builder-post-type').val() || 'post';
    var $taxSelect = $row.find('.me-builder-taxonomy');
    if (!$taxSelect.length) return;
    var taxonomies = (typeof window.me_builder_taxonomies_by_post_type !== 'undefined' && window.me_builder_taxonomies_by_post_type[postType]) ? window.me_builder_taxonomies_by_post_type[postType] : {};
    var current = $taxSelect.val();
    $taxSelect.find('option:not(:first)').remove();
    $.each(taxonomies, function (slug, label) {
      $taxSelect.append($('<option></option>').attr('value', slug).text(label));
    });
    if (current && taxonomies[current]) {
      $taxSelect.val(current);
    } else {
      $taxSelect.val('');
    }
  }

  function loadTermsForTaxonomy($row, taxonomy, $popup, preserveSelection) {
    var $termSelect = $row.find('.me-builder-taxonomy-terms');
    if (!$termSelect.length || !taxonomy) return;
    $popup = $popup || $row.closest(POPUP_SEL);
    if ($termSelect.hasClass('select2-hidden-accessible')) {
      try { $termSelect.select2('destroy'); } catch (e) {}
    }
    var currentVal = (preserveSelection !== false) ? ($termSelect.val() || []) : [];
    $termSelect.find('option').remove();
    $.ajax({
      url: typeof me_builder_ajax_object !== 'undefined' ? me_builder_ajax_object.ajax_url : '',
      type: 'POST',
      data: {
        action: 'me_builder_get_terms',
        nonce: typeof me_builder_ajax_object !== 'undefined' ? me_builder_ajax_object.nonce : '',
        taxonomy: taxonomy
      },
      dataType: 'json',
      success: function (res) {
        var terms = (res && res.success && res.data && res.data.terms) ? res.data.terms : [];
        terms.forEach(function (t) {
          $termSelect.append($('<option></option>').attr('value', t.id).text(t.text));
        });
        if (currentVal && currentVal.length) {
          $termSelect.val(currentVal);
        }
        if (typeof $.fn.select2 !== 'undefined') {
          $termSelect.select2({
            width: '100%',
            dropdownParent: $popup.length ? $popup : $row,
            placeholder: $termSelect.data('placeholder') || 'Select terms (optional)',
            allowClear: true
          });
        }
      }
    });
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
      var mode = $row.find('.me-builder-selective-mode').val() || 'all_posts';
      if (mode === 'custom') {
        initPostSelect($row, $popup);
      } else if (mode === 'taxonomy') {
        var tax = $row.find('.me-builder-taxonomy').val();
        if (tax) loadTermsForTaxonomy($row, tax, $popup);
      }
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

    // Scope change: show Custom (post select) or Taxonomy dropdown
    $(document).on('change', '.me-builder-selective-mode', function () {
      var $row = $(this).closest(ROW_SEL);
      syncScopeVisibility($row);
      var mode = $(this).val();
      if (mode === 'custom') {
        var $popup = $row.closest(POPUP_SEL);
        initPostSelect($row, $popup);
      } else if (mode === 'all_posts') {
        var $sel = $row.find('.me-builder-post-select');
        if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
          try { $sel.val(null).trigger('change'); } catch (e) {}
        }
      }
    });

    // When post type changes: clear post selection if custom; refill taxonomy if taxonomy scope
    $(document).on('change', '.me-builder-post-type', function () {
      var $row = $(this).closest(ROW_SEL);
      var $sel = $row.find('.me-builder-post-select');
      if ($sel.length && $sel.hasClass('select2-hidden-accessible')) {
        try { $sel.val(null).trigger('change'); } catch (e) {}
      }
      var mode = $row.find('.me-builder-selective-mode').val() || 'all_posts';
      if (mode === 'taxonomy') {
        fillTaxonomySelect($row);
        var tax = $row.find('.me-builder-taxonomy').val();
        if (tax) loadTermsForTaxonomy($row, tax, undefined, false);
      } else if (mode === 'custom') {
        var $popup = $row.closest(POPUP_SEL);
        initPostSelect($row, $popup);
      }
    });

    // When taxonomy changes: load terms for that taxonomy (clear previous term selection)
    $(document).on('change', '.me-builder-taxonomy', function () {
      var $row = $(this).closest(ROW_SEL);
      var tax = $(this).val();
      if (tax) {
        loadTermsForTaxonomy($row, tax, undefined, false);
      } else {
        var $termSelect = $row.find('.me-builder-taxonomy-terms');
        if ($termSelect.length && $termSelect.hasClass('select2-hidden-accessible')) {
          try { $termSelect.select2('destroy'); } catch (e) {}
        }
        $row.find('.me-builder-taxonomy-terms').find('option').remove();
      }
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
