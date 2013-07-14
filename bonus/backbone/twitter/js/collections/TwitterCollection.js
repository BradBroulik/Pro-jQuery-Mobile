// Category Collection
// ===================

// Includes file dependencies
define([ "jquery", "backbone", "models/TwitterModel" ], function( $, Backbone, TwitterModel ) {

    // Extends Backbone.Router
    var Collection = Backbone.Collection.extend( {

        // Sets the Collection model property to be a Category Model
        model: TwitterModel,

		// url: "http://search.twitter.com/search.json?q=xmen",  // This Twitter rest API is now deprecated.  1.1 API requires authentication.
		url: "response.json",

		initialize : function() {
		},		

        // Overriding the Backbone.sync method (the Backbone.fetch method calls the sync method when trying to fetch data)
        sync: function( method, model, options ) {

            // Local Variables
            // ===============

            // Instantiates an empty array
            var tweets = [];

			var data = this.localGet();
			if (data) {
				console.log('Getting data from localStorage...');
				this.reset(data.results);
				
				// Triggers the custom `added` method (which the Category View listens for)
                this.trigger( "added" );

				// Calls the options.success method and passes an array of objects (Internally saves these objects as models to the current collection)
                options.success( data.results );
			} else {
				console.log('Getting data from Twitter API...');
				this.loadTweets(options);
			}
        },

		loadTweets : function(options) {
			var self = this;
			$.ajax( {
				url: self.url,   
			  	// dataType: "jsonp",
				// jsonp: "callback",
			  	success: function( data ) {
					self.reset(data.results);
					self.localSave(data);
					tweets = data.results;
				},
				error: function(data, textStatus, xhr) {
					self.reset(data.results);
					self.localSave(data);
				},
				complete: function() {
	                // Triggers the custom `added` method (which the Category View listens for)
	                self.trigger( "added" );

					// Calls the options.success method and passes an array of objects (Internally saves these objects as models to the current collection)
	                options.success( tweets );
				}
			});			
		},
		
		localSave : function(data) {
			var d = JSON.stringify(data);
			localStorage.setItem('TWEETS', d);
		},
		
		localGet : function() {			
			var d = localStorage.getItem('TWEETS');
		    data = JSON.parse(d);
		    return data;
	   },		

    } );

    // Returns the Model class
    return Collection;

} );