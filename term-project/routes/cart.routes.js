"use strict";
const express = require("express");
const router = express.Router();

const cartcontroller = require("../controllers/cart.controller");

router.get("/all", ensureAuth, cartcontroller.getAll);

router.get("/:id", ensureAuth, cartcontroller.getOneById);

router.post("/new", ensureAuth, cartcontroller.createNew);

router.get("/add/id/:id/quantity/:quantity", ensureAuth, cartcontroller.addToCart);

router.get("/adding/id/:id/quantity/:quantity", ensureAuth, cartcontroller.addItem);

router.get("/sub/id/:id/quantity/:quantity", ensureAuth, cartcontroller.subItem);

router.get("/del/id/:id", ensureAuth, cartcontroller.delItem);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;
