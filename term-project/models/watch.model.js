"use strict";
const db = require("../models/db-conn");

function getAll() {
    let sql = "SELECT * FROM products ORDER BY name;";
    const data = db.all(sql);
    return data;
}

function getAllCategories() {
    let sql = "SELECT * FROM categories ORDER BY id;";
    const data = db.all(sql);
    return data;
}

function getAllTypes() {
    let sql = "SELECT * FROM types ORDER BY id;";
    const data = db.all(sql);
    return data;
}

function getAllByCategory(category) {
    let sql = "SELECT * FROM categories WHERE category =? ORDER BY id;";
    const data = db.all(sql, category);
    return data;
}

function getAllByBrand(category) {
    let sql = "SELECT * FROM categories WHERE category =? ORDER BY id;";
    const data = db.all(sql, category);
    return data;
}

function getAllByType(type) {
    let sql = "SELECT * FROM types WHERE type =? ORDER BY id;";
    const data = db.all(sql, type);
    return data;
}

function getOneById(id) {
    let sql = "SELECT * FROM products WHERE id =? ;";
    const item = db.get(sql, id);
    return item;
}

function createNew(params) {
    let sql =
        'INSERT INTO menu ("id","name","category","subcategory","price","cost") ' +
        "VALUES(?, ?, ?, ?, ?, ?);";
    const item = db.run(sql, params);
    return item;
}

module.exports = {
    getAll,
    getAllCategories,
    getAllTypes,
    getAllByCategory,
    getAllByBrand,
    getAllByType,
    getOneById,
    createNew,
};
