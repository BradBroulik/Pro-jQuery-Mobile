$( document ).on("#myPage", "pageinit", function() {
	$.getScript("/js/myPageScript.js",function(){
		// Do something with myPageScript.js
	});
});