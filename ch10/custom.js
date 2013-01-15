$( document ).on( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
    $.mobile.page.prototype.options.addBackBtn = true;
});

$(document).on("deviceready", function(){
    navigator.notification.alert("PhoneGap is initialized...");
});