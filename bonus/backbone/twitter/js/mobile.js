// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.11.1.min")
      paths: {
            // Core Libraries
            "jquery": ["//code.jquery.com/jquery-1.11.1.min.js", "libs/jquery-1.11.1.min"],
			"jquerymobile": ["//code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min.js", "libs/jquery.mobile-1.4.3.min"],
            "underscore": "libs/lodash",	
            "backbone": "libs/backbone"
      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {
            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            }
      } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "routers/mobileRouter" ], function( $, Backbone, Mobile ) {

	$( document ).on( "mobileinit", function() {
		// Disable JQM page navigation, let backbone handle routing
		$.mobile.ajaxEnabled = false;
		$.mobile.linkBindingEnabled = false;
		$.mobile.hashListeningEnabled = false;
		$.mobile.pushStateEnabled = false;
		
		// Must manually remove pages from DOM when JQM isn't handling page navigation 
		// Not removing pages in multi-page template...
		// $( document ).on('pagecontainerhide', "div:jqmData(role='page')",
		// function (event, ui) {
		// 		$(event.currentTarget).remove();
		// });
	});

	require( [ "jquerymobile" ], function() {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new Mobile();
	});
} );