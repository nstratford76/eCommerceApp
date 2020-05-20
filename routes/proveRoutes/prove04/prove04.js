const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.render('shop/index', { 
        title: 'Prove 04', 
        path: '/prove04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});
module.exports = router;