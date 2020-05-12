const Item = require('../models/item');
const Cart = require('..models/cart');

exports.getItems = (req, res, next) => {
    Item.fetchAll((_items) => {
        res.render('pages/proveAssignments/prove03/store/item-list', {
            title: "Store Items",
            path: "/store/items",
            items: items,
            hasItems: _items.length > 0
        })
    });
}

exports.getItem = (req, res, next) => {
    const _itemSku = req.params._itemSku;
    Item.findBySku(_itemSku, _item => {
        res.render('pages/proveAssignments/prove03/store/item-detail', {
            title: "Item Details", 
            path: '/store/items',
            item: _item
        })
    });
}

exports.getIndex = (req, res, next) => {
    Item.fetchAll((_items) => {
        res.render('pages/proveAssignments/prove03/store/index', {
            title: "Store", 
            path: "/store",
            items: _items,
        })
    })
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Item.fetchAll(items => {
            const cartItems = [];
            console.log(cart.totalPrice);
            for (item of items) {
                const cartItemData = cart.items.find(it => it.sku === item.sku);
                if (cartItemData) {
                    cartItems.push({ itemDataq: item, qty: cartItemData.qty });
                }
            }
            res.render('pages/proveAssignments/prove03/store/cart', {
                path: '/store/cart',
                title: 'Your Cart', 
                items: cartItems,
                totalPrice: cart.totalPrice
            });
        })
    });
}

exports.postCart = (req, res, next) => {
    const _sku = req.body.sku;
    Item.findBySku(_sku, (item) => {
        Cart.addItem(_sku, item.price);
        res.redirect('/proveAssignments/03/store/cart');
    });
}

exports.postCartDeleteItem = (req, res, next) => {
    const _sku = req.body.delSku;
    Item.findBySku(_sku, item => {
        Cart.deleteItem(_sku, item.price);
        res.redirect('/proveAssignments/03/store/cart');
    });
}

exports.getOrders = (req, res, next) => {
    res.render('pages/proveAssignments/prove03/store/orders', {
        path: '/store/orders',
        title: 'Your Orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('pages/proveAssignments/prove03/store/checkout', {
        path: '/store/checkout',
        title: 'Checkout'
    });
}