(function($) {

	var galleryFilterResults = function( event ) {
		// Gallery data
		var gallery = event.data.gallery;
		var found   = event.data.found;
		var fields  = event.data.fields;

		// Search query
		var value   = jQuery(this).val().toLowerCase();

		// Search the alt tag
		if( fields.indexOf( 'alt' ) > -1 ) {
			found = found.filter(function() {
				return jQuery(this).attr('alt').toLowerCase().indexOf( value ) < 0;
			});
		}

		// Search the caption
		if( fields.indexOf( 'caption' ) > -1 ) {
			found = found.filter(function() {
				return jQuery(this).attr('data-caption').toLowerCase().indexOf( value ) < 0;
			});
		}

		jQuery('img', gallery).each(function() {
			jQuery(this).closest('.gallery-item').show();
		});

		found.each(function() {
			jQuery(this).closest('.gallery-item').hide();
		});
	};

	jQuery('.gallery').each(function() {
		var gallery = jQuery(this);
		var search  = gallery.find('.gallery-search');

		if( search.length > 0 && typeof search !== 'undefined' ) {
			var fields  = gallery.find('.gallery-search').attr('data-fields').split(',');
			var found   = jQuery( 'img', gallery );

			gallery.on('keyup', '.gallery-filters-search', { 
				gallery : gallery, 
				found   : found, 
				fields  : fields 
			}, galleryFilterResults);
		}
	});

})(jQuery);