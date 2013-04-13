// Mobile Router
// =============

// Includes file dependencies
define([ "jquery", "backbone", "../models/TwitterModel", "../collections/TwitterCollection", "../views/TwitterView" ], function( $, Backbone, TwitterModel, TwitterCollection, TwitterView ) {

    // Extends Backbone.Router
    var TwitterRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            // Instantiates a new Twitter View
            this.twitterView = new TwitterView( { el: "#twitterPage", collection: new TwitterCollection() } );

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "home",

			// When #page? is on the url, the showPage method is called
			"page?:id": "showPage"
        },

        // Home method
        home: function() {
            $.mobile.changePage( "#homePage", { changeHash: false } );
        },

        // showPage method that passes in the pageID that is appended to the url hash
        showPage: function(pageId) {
          	// Stores the current View inside of the currentView variable
            var currentView = this[ pageId + "View" ];

            $.mobile.loading( "show" );

            // Fetches the Collection of Models for the current View
			currentView.collection.fetch({success:function(){
			    // Programatically changes to the current page
                $.mobile.changePage( "#" + pageId + "Page", { changeHash: false } );
   	        }});
        }

    } );

    // Returns the Router class
    return TwitterRouter;

} );