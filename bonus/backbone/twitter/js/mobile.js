// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {
            // Core Libraries
            "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", "libs/jquery-1.9.1.min"],
			"jquerymobile": ["//ajax.aspnetcdn.com/ajax/jquery.mobile/1.3.0/jquery.mobile-1.3.0.min.js", "libs/jquery.mobile-1.3.0.min"],
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
		// $( document ).on('pagehide', "div:jqmData(role='page')",
		// function (event, ui) {
		// 		$(event.currentTarget).remove();
		// });
	});

	require( [ "jquerymobile" ], function() {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new Mobile();
	});
} );