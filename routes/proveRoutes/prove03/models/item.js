const fs = require('fs');
const path = require('path');

const Cart = require('./cart');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'routes',
    'proveRoutes',
    'prove03',
    'data',
    'items.json'
);

const getItemsFromFile = callback => {
    fs.readFile(p, (err, data) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    });
}

module.exports = class Item {
    constructor(sku, title, imgURL, price, description) {
        this.sku = sku;
        this.title = title;
        this.imgURL = imgURL;
        this.price = price;
        this.description = description;
    }

    save() {
        getItemsFromFile(items => {
            if (this.sku) {
                const existingItemIndex = items.findIndex(item => item.sku === this.sku);
                const updatedItems = [...items];
                updatedItems[existingItemIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedItems), (err) => {
                    console.log(err);
                });
            }
        });
    }

    static deleteBySku(sku) {
        getItemsFromFile(items => {
            const item = items.find(it => it.sku === sku);
            const updatedItems = items.filter(it => it.sku !== sku);
            fs.writeFile(p, JSON.stringify(updatedItems), err => {
                if (!err) {
                    Cart.deleteItem(sku, item.price);
                }
            })
        });
    }

    static fetchAll(callback) {
        getItemsFromFile(callback);   
    }

    static findBySku(sku, callback) {
        getItemsFromFile(items => {
            const item = items.find(i => i.sku === sku);
            callback(item);
        });
    }
}