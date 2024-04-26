"use strict";
const db = require("../models/db-conn");

function getAllUsers() {
    let sql = "SELECT * FROM users;";
    const data = db.all(sql);
    return data;
}

function searchingP(params) {
    console.log(params);
    //let sql = `SELECT * FROM products, categories, types WHERE name LIKE ? or category LIKE ? or type LIKE ?;`;
    let sql = "SELECT * FROM products WHERE name LIKE ?;";
    console.log(sql);
    let menu = db.all(sql, params);
    console.log(menu);
    return menu;
}

function searchingC(params) {
    console.log(params);
    //let sql = `SELECT * FROM products, categories, types WHERE name LIKE ? or category LIKE ? or type LIKE ?;`;
    let sql = "SELECT products.* FROM products, categories WHERE categories.category LIKE ? and products.categoryId = categories.id;";
    console.log(sql);
    let menu = db.all(sql, params);
    console.log(menu);
    return menu;
}

function searchingT(params) {
    console.log(params);
    //let sql = `SELECT * FROM products, categories, types WHERE name LIKE ? or category LIKE ? or type LIKE ?;`;
    let sql = "SELECT products.* FROM products, types WHERE types.type LIKE ? and products.typeId = types.id;";
    console.log(sql);
    let menu = db.all(sql, params);
    console.log(menu);
    return menu;
}

function getUserById(id) {
    let sql = "SELECT * FROM users WHERE googleId =? ;";
    const item = db.get(sql, id);
    return item;
}

function createNew(params) {
    let sql =
        `INSERT INTO users ("name", "email", "userType", "googleId") VALUES(?, ?, ?, ?);`;
    const item = db.run(sql, params);
    return item;
}

module.exports = {
    getAllUsers,
    getUserById,
    createNew,
    searchingP,
    searchingC,
    searchingT,
};
