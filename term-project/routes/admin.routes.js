"use strict";
const express = require("express");
const router = express.Router();

const admincontroller = require("../controllers/admin.controller");

router.get("/edit", admincontroller.getProductEdit);

router.get("/upload", admincontroller.getBulkUpload);

router.get("/:id", admincontroller.getOneById);

router.post("/new/item", admincontroller.createNew);

router.post("/bulk", admincontroller.bulk);

router.put("/update/id/:id",  admincontroller.update)

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;
