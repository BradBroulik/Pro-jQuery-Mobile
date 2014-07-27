/** YQL: http://developer.yahoo.com/yql/console/ */
/** MN Twins RSS Feed: http://partner.mlb.com/partnerxml/gen/news/rss/min.xml  */

$( document ).on("pagebeforecreate", "#rssPage", function() {
	$.ajax({
		url: "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url%3D%22http%3A%2F%2Fpartner.mlb.com%2Fpartnerxml%2Fgen%2Fnews%2Frss%2Fmin.xml%22&format=json&diagnostics=true", // NOTE: Remove 'callback' query param from YQL generated restful URL
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response.query.results.item, function(index, result) {
				var $template = $('<div><li><a href="" rel="external" target="_blank"><h1></h1></a></li></div>');
				$template.find("a").attr("href", result.link); // NOTE: switch to "m.mlb.com" domain to see the mobile friendly page.
				$template.find("h1").html(result.title.replace(/\&amp;/g,'&')); // Remove unnecessary &amp; with &
				markup += $template.html();
			});
			$( "#rss-list" ).html(markup).listview( "refresh", true ); // The true parameter indicates we want to refresh the entire list, not just the list items.
			$( "body" ).pagecontainer( "change", "#rssPage" );
		},
		timeout: 6000,  // Timeout after 6 seconds
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Error, textStatus: " + textStatus + " errorThrown: "+ errorThrown);
			$.mobile.loading( 'hide' );

			//show error message
			$( "<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+ $.mobile.pageLoadErrorMessage +"</h1></div>" )
				.css({ "display": "block", "opacity": 0.96, "top": 100 })
				.appendTo( $.mobile.pageContainer )
				.delay( 800 )
				.fadeOut( 1000, function() {
					$( this ).remove();
				});
		}
	});

});