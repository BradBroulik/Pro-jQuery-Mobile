// Twitter View
// =============

// Includes file dependencies
define([ "jquery", "backbone","models/TwitterModel" ], function( $, Backbone, TwitterModel ) {

    // Extends Backbone.View
    var TwitterView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {

            // The render method is called when Models are added to the Collection
            this.collection.on( "added", this.render, this );

        },

        // Renders all of the Category models on the UI
        render: function() {

            // Sets the view's template property
            this.template = _.template( $( "script#tweetItems" ).html(), { "collection": this.collection } );

            // Renders the view's template inside of the current listview element
            this.$el.find("#tweet-list").html(this.template);

            // Maintains chainability
            return this;
        },

        events: {
            'pagebeforeshow': 'refreshList'
        },

        refreshList: function(e) {
            $( "#tweet-list" ).listview( "refresh", true ); 
        }

    } );

    // Returns the View class
    return TwitterView;

} );