
$( document ).on("pagecreate", "#registrationPage", function() {

	$( "form" ).submit(function () {
		$.mobile.loading( 'show' );
		
		$.ajax({
		  	url: "http://localhost:8080/jqm-webapp/rest/register",
		  	type: "POST",
		  	dataType: "jsonp",
		  	jsonp: "jsoncallback",
			data: $("form#register").serialize(),
		  	success: function( response ) {
				$( "body" ).pagecontainer( "change", "register-thanks.html", { data: {"email": response.email} });
		  	},
			error: function( jqXHR, textStatus, errorThrown ) {
				$.mobile.loading( 'hide' );
				console.log('Status: ' + textStatus + "\nError: " + errorThrown);
			}
		});
		
		return false; // Prevent a form submit
	});	
});


$( document ).on("pagebeforecreate", "#thanksPage", function() {
	var email = getParameterByName( "email", $( this ).jqmData( "url" ));
	$( ".email" ).append(email);
});

function getParameterByName(param, url) { 
	var match = RegExp('[?&]' + param + '=([^&]*)').exec(url);  
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));  
}
				