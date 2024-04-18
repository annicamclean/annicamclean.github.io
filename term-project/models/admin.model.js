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

module.exports = {
    getOneById,
    createNew,
};
