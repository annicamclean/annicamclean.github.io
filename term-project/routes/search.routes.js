"use strict";
const express = require("express");
const router = express.Router();

const searchcontroller = require("../controllers/search.controller");

router.get("/all", searchcontroller.getAllUsers);

router.get("/id/:id",  searchcontroller.getUserById);

router.get("/term", searchcontroller.search);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;