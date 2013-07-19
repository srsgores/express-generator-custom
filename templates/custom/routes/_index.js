/*------------------------------------------------------------------------------------------------------------------------
 @author: <%= authorName %>
 @www: <%= authorURL %>
 @github: <%= authorGitHub %>

 @twitter: <%= authorTwitter %>

 @copyright: COPYRIGHT 2013 <%= authorCompanyName %>
 =============================================================================
 Filename: index.js
 =============================================================================
 This file is responsible for routing all request to / to the index jade content file
 --------------------------------------------------------------------------------------------------------------------- */
/*
 * GET home page.
 */

exports.index = function (req, res)
{
	res.render("index", { title: "<%= name %>", description: "<%= description %>", keywords: "<%= keywords %>" });
};