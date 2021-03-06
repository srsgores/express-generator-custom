/**
 * Module dependencies.
 */

var express = require("express")
	, routes = require("./routes")
	, http = require("http")
	<% if (lessMiddleWare === true) { %>
	, less = require("less-middleware")
	<% } %>
	, path = require("path")
	<% if (sassMiddleWare === true) { %>
	, sass = require("node-sass")
	<% } %>;

var app = express();

app.configure(function ()
{
	app.set("port", process.env.PORT || 3000);
	app.set("views", __dirname + "/views");
	app.set("view engine", "jade");
	app.use(express.favicon());
	app.use(express.logger("dev"));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser("your secret here"));
	app.use(express.session());
	app.use(app.router);

	<% if (lessMiddleWare === true) { %>
	app.use(require("less-middleware")(
		{ src: __dirname + "/public/less",
			compress: true,
			optimization: 1,
			prefix: "/css",
			dest: __dirname + "/public/css"}));
	<% } %>

	<% if (sassMiddleWare === true) { %>
		app.use(
			sass.middleware({
				src: __dirname + "/public/sass",
				dest: __dirname + "/public",
				debug: true
			}));
	<% } %>
	app.use(express.static(path.join(__dirname, "public")));
});

app.configure("development", function ()
{
	app.use(express.errorHandler());
});

app.get("/", routes.index);

http.createServer(app).listen(app.get("port"), function ()
{
	console.log("Express server listening on port " + app.get("port"));
});