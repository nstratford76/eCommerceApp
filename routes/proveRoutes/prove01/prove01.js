const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.render('pages/prove_assignments/prove01', { 
        title: 'Prove 01', 
        path: '/prove01', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});
module.exports = router;