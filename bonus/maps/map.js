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
	
    var initLocation = function() {
    	var location = {}; location.coords = location.coords || {}; location.coords.latitude = location.coords.latitude || {}; location.coords.longitude = location.coords.longitude || {};
    	return location;
    };
		
    $("#show-more a").on( "click", function(e){
    	var location = initLocation();
    	location.coords.latitude = $.urlParam("lat");
    	location.coords.longitude = $.urlParam("lon");
    	JQM.geo.startIndex = $("#list-results li").size() -1; // exclude show more list item
    	JQM.geo.showMore(location);
    	e.preventDefault();
    });		
});

$.urlParam = function(name) { 
	var results = RegExp('[\?&]' + name + '=([^&#]*)').exec(top.window.location.href);  
	return (results !== null) ? results[1] : 0;  
}

/**
 * Geolocation configuration
 */
var JQM = JQM || {};
JQM.geo = {
	location: "",
	zip: "",
	startIndex: "",
	
	/*
	 * Call JQM.geo.init() to initialize a geoloation-based search.
	 */
    init: function() {
    	var self = this;
    	if ( navigator.geolocation ) {
    		console.log("navigator.geolocation...");
			// Find the users current position.  Cache the location for 5 minutes (500000), timeout after 10 seconds (timeout: 10000)
			navigator.geolocation.getCurrentPosition(self.success, self.fail, {maximumAge:500000, enableHighAccuracy:true, timeout:10000 });
    	}
    },
    
    success: function(latlng) {
    	JQM.geo.location = latlng;
    	window.location.href=JQM.geo.getSearchUrl();
    },
    
    fail: function(error) {
    	console.log("navigator.geolocation FAIL " + error);
		// When geolocation is not available, prompte the user to enter their zipcode/city,state to get started.
    	window.location.href="search.html";
    },

    showMore: function(latlng) {
    	$.mobile.loading( 'show' );
    	JQM.geo.location = latlng;

		$.ajax({
		  	url: "showMore.html?lat="+JQM.geo.location.coords.latitude+"&lon="+JQM.geo.location.coords.longitude+"&zip="+JQM.geo.zip+"&startIndex="+JQM.geo.startIndex,
		  	success: function( response ) {
		  		var $listResults = $( "#list-results" );
				$listResults.find( "#show-more" ).before(response);
				$listResults.listview( "refresh" );
				$.mobile.loading( 'hide' );
		  	},
			timeout: 12000,  // Timeout after 12 seconds
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Error, textStatus: " + textStatus + " errorThrown: "+ errorThrown);
				$.mobile.loading( 'hide' );
			}
		});

    },
    
    getSearchUrl: function() {
    	return "search.html?lat="+JQM.geo.location.coords.latitude+"&lon="+JQM.geo.location.coords.longitude+"&zip="+JQM.geo.zip;
    }
};