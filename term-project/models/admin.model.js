"use strict";
const db = require("../models/db-conn");


function getOneById(id) {
    let sql = "SELECT * FROM cart WHERE id =? ;";
    const item = db.get(sql, id);
    return item;
}

function createNew(params) {
    let sql =
        'INSERT INTO products ("id", "name", "description", "categoryId", "typeId", "image", "alt", "price", "reference", "cSize", "cHeight", "lugToLug", "lWidth", "crystalType", "wResistance", "mCaliber", "case", "cBack", "crown", "dialColor", "strap", "bezel", "jewels", "pReserve", "vintage", "featured", "inStock")' +
        "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
    const item = db.run(sql, params);
    return item;
}

function addSimilarWatches(params) {
    let sql = 'INSERT INTO similarProducts ("productId", "simWatchId") VALUES (?, ?);';
    const item = db.run(sql, params);
    return item;
}

function findSimilarWatches(id) {
    let sql = "SELECT * FROM similarProducts WHERE productId = ?;"
    const item = db.all(sql, id);
    return item;
}

function findSimilarWatch(param) {
    let sql = "SELECT * FROM similarProducts WHERE productId = ? and simWatchId = ? ;"
    const item = db.get(sql, param);
    return item;
}

function updateSimilarWatch(params) {
    let sql = 'UPDATE similarProducts SET simWatchId = ? WHERE id = ?;';
    const response = db.run(sql, params);
    return response;
}

function update(params) {
    let sql = 'UPDATE products SET "name" = ?, "description" = ?, "categoryId" = ?, "typeId" = ?, "image" = ?, "alt" = ?, "price" = ?, "reference" = ?, "cSize" = ?, "cHeight" = ?, "lugToLug" = ?, "lWidth" = ?, "crystalType" = ?, "wResistance" = ?, "mCaliber" = ?, "case" = ?, "cBack" = ?, "crown" = ?, "dialColor" = ?, "strap" = ?, "bezel" = ?, "jewels" = ?, "pReserve" = ?, "vintage" = ?, "featured" = ?, "inStock" = ? WHERE "id" = ?;';
    const response = db.run(sql, params);
    return response;
};

module.exports = {
    getOneById,
    createNew,
    update,
    addSimilarWatches,
    findSimilarWatch,
    updateSimilarWatch,
    findSimilarWatches,
};
