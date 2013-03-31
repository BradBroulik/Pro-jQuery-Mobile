$( document ).on("pageinit", "#map-page", function() {
	var $mapSwitch = $( "#map-switch" ),
	    $listSwitch = $( "#list-switch" ),
		$map = $("#map-canvas"),
        $list = $("#list-canvas");
		
    $mapSwitch.on( "click", function(e){
       	$map.show();
       	$map.gmap();
       	$list.hide();
    });
	
    $listSwitch.on( "click", function(e){
       	$list.show();
		$map.hide();
    });

    $("#show-more a").on( "click", function(e){
		// Assume we already have a cached geolocation because it's not necessary for this example.
		var location = location || {};
		    location.coords = location.coords || {};
			location.coords.latitude = location.coords.latitude || {};
			location.coords.longitude = location.coords.longitude || {};
    	
		JQM.geo.startIndex = $("#list-results li").size() -1; // exclude show more list item
    	JQM.geo.showMore(location);
    	e.preventDefault();
    });
});

/**
 * Geolocation configuration
 */
var JQM = JQM || {};
JQM.geo = {
	location: "",
	zip: "",
	startIndex: "",

    showMore: function(latlng) {
    	$.mobile.loading( "show" );
    	JQM.geo.location = latlng;

		$.ajax({
		  	url: "showMore.html?lat="+JQM.geo.location.coords.latitude+"&lon="+JQM.geo.location.coords.longitude+"&zip="+JQM.geo.zip+"&startIndex="+JQM.geo.startIndex,
		  	success: function( response ) {
		  		var $listResults = $( "#list-results" );
				$listResults.find( "#show-more" ).before(response);
				$listResults.listview( "refresh" );
				$.mobile.loading( 'hide' );
		  	},
			timeout: 6000,  // Timeout after 6 seconds
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Error, textStatus: " + textStatus + " errorThrown: "+ errorThrown);
				$.mobile.loading( "hide" );
			}
		});
    }
};