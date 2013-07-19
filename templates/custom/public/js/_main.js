<% if (requirejs === true) { %>
requirejs.config({
	"baseUrl": "js/lib", //all module look-ups occur in this directory
	"paths": {
		"app": "../app",
		<% if (jQuery === true) { %>
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min"
		<% } %>
	}
});

// Load the main app module to start the app
requirejs(["app/main"]);
<% } %>