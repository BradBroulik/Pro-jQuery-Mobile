
$( "#registrationPage" ).live( "pageinit", function(){

	$( "form" ).submit(function () {
		$.mobile.showPageLoadingMsg();
		
		$.ajax({
		  	url: "http://localhost:8080/jqm-webapp/rest/register",
		  	type: "POST",
		  	dataType: "jsonp",
		  	jsonp: "jsoncallback",
			data: $("form#register").serialize(),
		  	success: function( response ) {
				$.mobile.changePage( "register-thanks.html", { data: {"email": response.email}} );
		  	},
			error: function( jqXHR, textStatus, errorThrown ) {
				$.mobile.hidePageLoadingMsg();
				console.log('Status: ' + textStatus + "\nError: " + errorThrown);
			}
		});
		
		return false; // Prevent a form submit
	});	
});


$( "#thanksPage" ).live( "pagebeforecreate", function(){
	var email = getParameterByName( "email", $( this ).jqmData( "url" ));
	$( ".email" ).append(email);
});

function getParameterByName(param, url) { 
	var match = RegExp('[?&]' + param + '=([^&]*)').exec(url);  
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));  
}
				