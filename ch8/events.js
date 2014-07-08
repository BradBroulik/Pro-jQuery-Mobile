		$( document ).on( "pagebeforechange", function( event, ui ) {
			console.log("pagebeforechange");
		} );
		$( document ).on( "pagecontainerbeforeload", function( event, ui ) {
			console.log("pagecontainerbeforeload to " + ui.dataUrl);
		} );
		

		$( document ).on( "pagebeforecreate", "#page1", function() {
			console.log("pagebeforecreate #page1");
		});			
		$( document ).on( "pagebeforecreate", "#page2", function() {
			console.log("pagebeforecreate #page2");
		});

		$( document ).on( "pagecreate", "#page1", function() {
			console.log("pagecreate #page1");
		});			
		$( document ).on( "pagecreate", "#page2", function() {
			console.log("pagecreate #page2");
		});

		$( document ).on( "pagecontainerload", function( event, ui ) {
			console.log("pagecontainerload to " + ui.dataUrl);
		} );

		$( document ).on( "pagecontainerbeforetransition", function( event, ui ) {
			console.log("pagecontainerbeforetransition to " + ui.toPage.data("url"));
		} );

		$( document ).on( "pagecontainerbeforehide", function( event, ui ) {
			console.log("pagecontainerbeforehide nextPage " + ui.nextPage.data("url"));
		} );

		$( document ).on( "pagecontainerbeforeshow", function( event, ui ) {
			console.log("pagecontainerbeforeshow prevPage " + ui.prevPage.data("url"));
		} );
		
		$( document ).on( "pagecontainertransition", function( event, ui ) {
			console.log("pagecontainertransition to " + ui.toPage.data("url"));
		} );

		$( document ).on( "pagecontainerhide", function( event, ui ) {
			console.log("pagecontainerhide nextPage " + ui.nextPage.data("url"));
		} );

		$( document ).on( "pagecontainershow", function( event, ui ) {
			console.log("pagecontainershow prevPage " + ui.prevPage.data("url"));
		} );

		$( document ).on( "pagechange", function( event, ui ) {
			console.log("pagechange to " + ui.toPage.data("url"));
		} );