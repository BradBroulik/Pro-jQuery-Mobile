$( document ).on("pagecreate", "#myPage", function() {
	$.getScript("/js/myPageScript.js",function(){
		// Do something with myPageScript.js
	});
});