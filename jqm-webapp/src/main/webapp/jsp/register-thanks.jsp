<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html> 
<html> 
	<head> 
	<meta charset="utf-8">
	<title>Register</title> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />
	<link rel="stylesheet" type="text/css" href="../custom.css" />	
	<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
</head> 
<body> 

<div data-role="page" id="thanksPage" data-theme="d">
	<div data-role="header">
		<a href="/jqm-webapp/ch9/register-server.html" data-icon="home" data-iconpos="notext" data-rel="back"></a>
		<h1>Thank You</h1>
	</div>
	
	<div data-role="content" class="thanks">
		<p>Thanks for registering.  One FREE movie pass was just sent to: <span class="email">${email}</span></p>
		<img src="../images/free-movie.jpg" alt="free movie ticket">
	</div>
</div>

</body>
</html>

