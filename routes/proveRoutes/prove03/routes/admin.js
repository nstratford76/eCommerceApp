const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-item', adminController.getAddItem);

router.get('/items', adminController.getAddItem);

router.post('/add-item', adminController.postAddItem);

router.get('/edit-item/:itemSku', adminController.getEditItem);

router.post('/edit-item', adminController.postEditItem);

router.post('/delete-item', adminController.postDeleteItem);

module.exports = router;