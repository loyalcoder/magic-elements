(()=>{"use strict";var o,n,c,i;o=jQuery,n=window,c=o(n),i={onInit:function(){var n=elementorFrontend,c={"em_kit_accordion.default":i.EmKitAccordion};o.each(c,(function(o,c){n.hooks.addAction("frontend/element_ready/"+o,c)}))},EmKitAccordion:function(n){o(".emk-accordion-wrapper").each((function(){const n=o(this),c=parseInt(n.data("animation-duration"),10)||300;if(n.hasClass("style_one")){const i=n.find(".emk-accordion-title"),e=n.find(".emk-accordion-content");i.find(".accordion_expand_icon").show(),i.find(".accordion_collapse_icon").hide(),i.first().addClass("active"),e.first().show(),i.first().find(".accordion_expand_icon").hide(),i.first().find(".accordion_collapse_icon").show(),i.off("click.style_one").on("click.style_one",(function(){const n=o(this),t=n.next(".emk-accordion-content");i.not(n).removeClass("active").find(".accordion_expand_icon").show().end().find(".accordion_collapse_icon").hide(),e.not(t).slideUp(c),n.toggleClass("active"),t.slideToggle(c),n.find(".accordion_expand_icon").toggle(!n.hasClass("active")),n.find(".accordion_collapse_icon").toggle(n.hasClass("active"))}))}if(n.hasClass("style_two")){const i=n.find(".emk-accordion-title");i.find(".accordion_expand_icon").show(),i.find(".accordion_collapse_icon").hide(),i.off("click.style_two").on("click.style_two",(function(){const n=o(this),i=n.next(".emk-accordion-content");n.toggleClass("active"),i.slideToggle(c),n.find(".accordion_expand_icon").toggle(!n.hasClass("active")),n.find(".accordion_collapse_icon").toggle(n.hasClass("active"))}))}if(n.hasClass("style_three")){const i=n.find(".emk-accordion-title"),e=n.find(".emk-accordion-content");i.find(".accordion_expand_icon").hide(),i.find(".accordion_collapse_icon").show(),e.show(),i.off("click.style_three").on("click.style_three",(function(){const n=o(this),i=n.next(".emk-accordion-content");n.toggleClass("active"),i.slideToggle(c),n.find(".accordion_expand_icon").toggle(n.hasClass("active")),n.find(".accordion_collapse_icon").toggle(!n.hasClass("active"))}))}}))}},c.on("elementor/frontend/init",i.onInit)})();