"use strict";
const db = require("../models/db-conn");

function getAllUsers() {
    let sql = "SELECT * FROM users;";
    const data = db.all(sql);
    return data;
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
};
