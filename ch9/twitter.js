	$( "#reviewsPage" ).live( "pageinit", function(){
		
		// When the twitter button is clicked, load our twitter results page.
		// The twitter results will get loaded in #twitterPage's "pagebeforecreate" event.
		$( "#twitterBtn" ).bind( "click", function(e) {
			$.mobile.showPageLoadingMsg();
			$.mobile.loadPage("twitter.html", { reloadPage: true }); // Reload page even if it's already in the DOM
			return false;  // Prevent default click behavior
		});

	});

	$( "#twitterPage" ).live( "pagebeforecreate", function(e){
		
		$.ajax({
		  	url: "http://search.twitter.com/search.json?q=xmen",  // Twitter rest API: https://dev.twitter.com/docs/api/1/get/search
		  	dataType: "jsonp",
			jsonp: "callback",
		  	success: function( response ) {
				var markup = "";
				$.each(response.results, function(index, result) { 
					var $template = $('<div><li><img class="ui-li-icon profile"><p class="from"></p><p class="tweet"></p></li></div>');
					$template.find(".from").append(result.from_user);
					$template.find(".tweet").append(result.text);
					$template.find(".profile").attr("src", result.profile_image_url);
					markup += $template.html();
				});
				$( "#tweet-list" ).append(markup).listview( "refresh", true ); // The true parameter indicates we want to refresh the entire list, not just the list items. 
				$.mobile.changePage( $("#twitterPage") );
		  	},
			timeout: 6000,  // Timeout after 6 seconds
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Error, textStatus: " + textStatus + " errorThrown: "+ errorThrown);
				
				$.mobile.hidePageLoadingMsg();

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