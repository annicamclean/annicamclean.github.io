"use strict";
const express = require("express");
const router = express.Router();

const servicecontroller = require("../controllers/service.controller");

router.get("/all1", ensureAuth, servicecontroller.getAll);

router.get("/all", ensureAuth, servicecontroller.services);

router.get("/:id", ensureAuth, servicecontroller.getOneById);

router.post("/new", ensureAuth, servicecontroller.createNew);

router.get("/adding/id/:id/quantity/:quantity", ensureAuth, servicecontroller.addItem);

router.get("/sub/id/:id/quantity/:quantity", ensureAuth, servicecontroller.subItem);

router.get("/del/id/:id", ensureAuth, servicecontroller.delItem);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;
