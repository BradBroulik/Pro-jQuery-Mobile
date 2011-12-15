$(document).bind("mobileinit", function(){
	$.mobile.allowCrossDomainPages = true;
    $.mobile.page.prototype.options.addBackBtn = true;
});

$(document).bind("deviceready", function(){
    navigator.notification.alert("PhoneGap is initialized...");
});