$( document ).on( "mobileinit", function() {
	// Disable JQM page navigation, let backbone handle routing
	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;
	
	// Must manually remove pages from DOM when JQM isn't handling page navigation
	$( document ).on('pagehide', "div:jqmData(role='page')",
	function (event, ui) {
			$(event.currentTarget).remove();
	});
});