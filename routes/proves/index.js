const routes = require('express').Router();
routes
        .use('01', require('./prove01'))
        .use('02', require('./prove02'))
        .use('03', require('./prove03'))
        .use('04', require('./prove04'))
        .get('/', (req, res, next) =>{
            res.render('pages/prove_assignments/', {
                pageTitle: "Prove Assignments",
                path: "/prove_assignments"});
        });
modules.exports = routes;