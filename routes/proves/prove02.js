const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.render('pages/prove_assignments/prove02', { 
        pageTitle: 'Add Book',
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.get('/book', (req, res, next) => {
    res.render('pages/prove_assignments/book', {
      pageTitle: 'Book',
      path: '/prove02',
      book: book,
      hasBook: book.length > 0
    });
});

router.post('/add-book', (req, res, next) => {
    book = {name: req.body.username,
            description: req.body.description };
    res.redirect('/prove02/book');
});

module.exports = router;