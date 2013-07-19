//define modules here
<% if (modernizr) { %>
define(["modernizr", function() {
	return window.Modernizr;
}]);
<% } %>

<% if (jQuery) { %>
define(["jquery"], function($) {
	//load modules.  Act on them
	$(function() {
		//do anything needed with jquery once it's loaded
	});
});
<% } %>