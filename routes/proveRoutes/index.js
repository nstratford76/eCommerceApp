const routes = require('express').Router();
routes
        .use('01', require('./prove01/prove01Route'))
        .use('02', require('./prove02/prove02Route'))
        .use('03', require('./prove03/prove03Route'))
        .use('04', require('./prove04/prove04Route'))
        .get('/', (req, res, next) =>{
            res.render('pages/prove_assignments/', {
                pageTitle: "Prove Assignments",
                path: "/prove_assignments"});
        });
modules.exports = routes;