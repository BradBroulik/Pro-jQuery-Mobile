<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html> 
<html> 
	<head> 
	<meta charset="utf-8">
	<title>Segmented Control Example</title> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" /> 
	<link rel="stylesheet" type="text/css" href="../custom.css" />
	<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js"></script>
</head> 
<body> 

<div data-role="page">
	<div data-role="header" data-position="fixed">
		<a href="/jqm-webapp/ch9/springboard.html" class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-home" data-rel="back"></a>
		<h1>Movies</h1>
		<div data-role="header"  class="segmented-control">
			<div data-role="controlgroup" data-type="horizontal">
				<a href="/jqm-webapp/mvc/movies" class="ui-btn ui-corner-all ui-mini ui-btn-b">In Theatres</a>
				<a href="/jqm-webapp/mvc/movies" class="ui-btn ui-corner-all ui-mini ui-btn-a">Coming Soon</a>
				<a href="/jqm-webapp/mvc/movies" class="ui-btn ui-corner-all ui-mini ui-btn-a">Top Rated</a>
			</div>
		</div>
	</div>
	
	<div class="ui-content">	
		<ul data-role="listview">
		<c:forEach var="movie" items="${movies}">
			<li>
			  <a href="#">
				<img src="../images/${movie.image}" />
				<h3>${movie.title}</h3>
				<p>Rated: ${movie.rating}</p>
				<p>Runtime: ${movie.runtime} min.</p>
			  </a>
			</li>
		</c:forEach>												
		</ul>
	</div>
</div>

</body>
</html>

