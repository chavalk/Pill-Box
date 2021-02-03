// *****************************************************************************
// html-routes.js - this file offers a set of routes for displaying and saving data to the db
// *****************************************************************************

// Requiring our models
var isAuthenticated = require("../config/isAuthenticated");

// Routes
// ===================================================================
module.exports = function (app) {

    // Initial log in route
    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("index");
    });

    // GET route for create user page
    app.get("/createuser", function (req, res) {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("createUser");
    });

    // Add isAuthenticated middleware
    app.get("/dashboard", isAuthenticated, function(req, res) {
        res.render("dashboard");
    })
};