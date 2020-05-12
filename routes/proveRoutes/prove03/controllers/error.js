exports.get404 = (req, res, next) => {
    res.render('pages/proveAssignments/prove03/pages/404', {
        title: '404 - Page Not Found',
        path: req.url
    })
};