$(document).ready(function() {
    $("a[rel=photo]").fancybox({
        'type'              : 'image',
	    'titlePosition' 	: 'over',
	    'changeSpeed'       : 50,
	    'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
	        var meta = title.split(" - ");
	        var title_html = meta[1]+'<span class="date">&nbsp; - '+meta[0]+'</span>';
	        var html = '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title_html : '')+'</span>';
		    return html;
	    },
    });
});