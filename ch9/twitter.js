	$( document ).on("pagecreate", "#reviewsPage", function() {
		// When the twitter button is clicked, load our twitter results page.
		// The twitter results will get loaded in #twitterPage's "pagebeforecreate" event.
		$( "#twitterBtn" ).on( "click", function(e) {
			$.mobile.loading( 'show' );
			$( "body" ).pagecontainer( "load", "twitter.html", { reloadPage: true }); // Reload page even if it's already in the DOM
			return false;  // Prevent default click behavior
		});
	});

	$( document ).on("pagebeforecreate", "#twitterPage", function() {
		$.ajax({
			// url: "http://search.twitter.com/search.json?q=xmen",  // This Twitter rest API is now deprecated.  1.1 API requires authentication.
			url: "response.json",
			//dataType: "jsonp",
			//jsonp: "callback",
			success: function( response ) {
				var markup = "";
				$.each(response.results, function(index, result) {
					var $template = $('<div><li><img class="ui-li-icon profile"><p class="from"></p><p class="tweet"></p></li></div>');
					$template.find(".from").html(result.from_user);
					$template.find(".tweet").html(result.text);
					$template.find(".profile").attr("src", result.profile_image_url);
					markup += $template.html();
				});
				$( "#tweet-list" ).html(markup).listview( "refresh", true ); // The true parameter indicates we want to refresh the entire list, not just the list items.
				$( "body" ).pagecontainer( "change", "#twitterPage", { transition: "slide" });
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