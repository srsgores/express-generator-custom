/*------------------------------------------------------------------------------------------------------------------------
 @author: <%= authorName %>
 @www: <%= authorURL %>
 @github: <%= authorGitHub %>

 @twitter: <%= authorTwitter %>

 @copyright: COPYRIGHT 2013 <%= authorCompanyName %>
 =============================================================================
 Filename: main.js
 =============================================================================
 This file is the main javascript file for the <%= name %> application.  If requireJS is being used, the require configuration is set here; otherwise, this file should contain the main front-end javascript logic for the application.
 --------------------------------------------------------------------------------------------------------------------- */

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