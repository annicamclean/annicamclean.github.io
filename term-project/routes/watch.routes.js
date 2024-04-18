"use strict";
const express = require("express");
const router = express.Router();

const watchcontroller = require("../controllers/watch.controller");

router.get("/all", watchcontroller.getAll);

router.get("/brand", watchcontroller.getAllBrands);

router.get("/style", watchcontroller.getAllTypes);

router.get("/category/:category", watchcontroller.getAllByCategory);

router.get("/brand/:category", watchcontroller.getAllByBrand);

router.get("/style/:type", watchcontroller.getAllByType);

router.get("/:id", watchcontroller.getOneById);

router.post("/new", ensureAuth, watchcontroller.createNew);

function ensureAuth(req, res, next) {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    //console.log("$$$$$" + req.session.returnTo)
    next();
}

module.exports = router;
