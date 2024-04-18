"use strict";
const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controller");

router.get("/all", ensureAuth, usercontroller.getAllUsers);

router.get("/:id", ensureAuth, usercontroller.getUserById);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;