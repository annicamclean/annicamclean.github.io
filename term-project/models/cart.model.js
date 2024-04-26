"use strict";
const db = require("../models/db-conn");

function getAll() {
    let sql = "SELECT * FROM carts;";
    const data = db.all(sql);
    return data;
}

function getOneById(id) {
    let sql = "SELECT * FROM carts WHERE userId =? and status = 'new';";
    const item = db.get(sql, id);
    return item;
}


function getOneByCartId(id) {
    let sql = 'SELECT cartProducts.id, "cartId", "productId", "quantity", "name", "description", "categoryId", "typeId", "image", "alt", "price", "reference", "cSize", "cHeight", "lugToLug", "lWidth", "crystalType", "wResistance", "mCaliber", "case", "cBack", "crown", "dialColor", "strap", "bezel", "jewels", "pReserve", "vintage", "featured", "inStock" FROM cartProducts, products WHERE cartId =? and cartProducts.productId = products.id;';
    const item = db.all(sql, id);
    return item;
}

function getOneCartProduct(id) {
    let sql = "SELECT * FROM cartProducts WHERE id =?;";
    const item = db.get(sql, id);
    return item;
}

function getCart(id) {
    let sql = "SELECT userId, cartId, productId, quantity, status FROM carts, cartProducts, users WHERE carts.id = cartProducts.cartId and carts.userId = users.id;";
    const item = db.all(sql);
    return item;
}

function createNewCart(params) {
    let sql =
        'INSERT INTO carts ("status", "userId") ' +
        "VALUES(?, ?);";
    const item = db.run(sql, params);
    console.log("Item: " + item);
    return item;
}

function createNew(params) {
    let sql =
        'INSERT INTO menu ("id","name","category","subcategory","price","cost") ' +
        "VALUES(?, ?, ?, ?, ?, ?);";
    const item = db.run(sql, params);
    return item;
}

function addToCart(params) {
    let sql =
        'INSERT INTO cartProducts ("cartId", "productId", "quantity") ' +
        "VALUES(?, ?, ?);";
    const item = db.run(sql, params);
    return item;
}

function updateCart(params) {
    let sql = 'UPDATE cartProducts SET quantity =? WHERE id =?;';
    const response = db.run(sql, params);
    return response;
}

function deleteById(id) {
    let sql = 'DELETE FROM cartProducts WHERE id =?';
    const response = db.run(sql, id);
    return response;
}

function updateCartStatus(id) {
    let sql = "UPDATE carts SET status = 'purchased' WHERE id =?;";
    const response = db.run(sql, id);
    return response;
}   

module.exports = {
    getAll,
    getCart,
    getOneById,
    getOneCartProduct,
    updateCart,
    deleteById,
    getOneByCartId,
    createNewCart,
    addToCart,
    createNew,
    updateCartStatus,
};
