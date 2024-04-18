"use strict";
const express = require("express");
const router = express.Router();

const admincontroller = require("../controllers/admin.controller");

router.get("/edit", ensureAuth, admincontroller.getProductEdit);

router.get("/upload", ensureAuth, admincontroller.getBulkUpload);

router.get("/:id", ensureAuth, admincontroller.getOneById);

router.post("/new", ensureAuth, admincontroller.createNew);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;
