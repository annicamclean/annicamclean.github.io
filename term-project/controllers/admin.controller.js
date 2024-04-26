"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const modelA = require("../models/admin.model");
const modelW = require("../models/watch.model");

function getProductEdit(req, res, next) {
    try {
        let watches = modelW.getAllById();
        res.render('product-edit', { title: 'Product Edit/Add', watches: watches });
    } catch (err) {
        console.error("Error while getting admin page ", err.message);
        next(err);
    }
}

function getBulkUpload(req, res, next) {
    try {
        res.render('bulk-upload', { title: 'Bulk Upload' });
    } catch (err) {
        console.error("Error while getting admin page ", err.message);
        next(err);
    }
}


function getOneById(req, res, next) {
    try {
        let meal = modelA.getOneById(req.params.id);
        res.render("cart", { meal: meal, title: 'Meal  #' + req.params.id });
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function createNew(req, res, next) {
    let id = parseInt(req.body.productId2);
    let name = req.body.name2;
    let description = req.body.description2;
    let categoryId = parseInt(req.body.categoryId2);
    let typeId = parseInt(req.body.typeId2);
    let image = req.body.imgPath2;
    let alt = req.body.alt2;
    let price = parseFloat(req.body.price2);
    let reference = req.body.reference2;
    let cSize = parseFloat(req.body.caseSize2);
    let cHeight = parseFloat(req.body.caseHeight2);
    let lugToLug = parseFloat(req.body.lugToLug2);
    let lWidth = parseFloat(req.body.lugWidth2);
    let crystalType = req.body.crystalType2;
    let wResistance = req.body.waterResistance2;
    let mCaliber = req.body.movementCaliber2;
    let case1 = req.body.case2;
    let cBack = req.body.caseBack2;
    let crown = req.body.crown2;
    let dialColor = req.body.dialColor2;
    let strap = req.body.strap2;
    let bezel = req.body.bezel2;
    let jewels = parseInt(req.body.jewels2);
    let pReserve = req.body.powerReserve2;
    let vintage = req.body.vintage2;
    let featured = req.body.featured2;
    let inStock = parseInt(req.body.inStock2);
    let similarWatch = req.body.similarProducts2;
    let similarWatchArray = similarWatch.split(" ");
    if (id && name && description && categoryId && typeId && image && alt && price && reference && cSize && cHeight && lugToLug && lWidth && crystalType && wResistance && mCaliber && case1 && cBack && crown && dialColor && strap && bezel && jewels && pReserve && vintage && featured && inStock) {
        let params = [id, name, description, categoryId, typeId, image, alt, price, reference, cSize, cHeight, lugToLug, lWidth, crystalType, wResistance, mCaliber, case1, cBack, crown, dialColor, strap, bezel, jewels, pReserve, vintage, featured, inStock];
        console.log("THIS IS THE SERVER PARAMS: \n" + params);
        try {
            let watches = modelW.getAllById();
            let newWatch = modelA.createNew(params);
            for (let index = 0; index < similarWatchArray.length; index++) {
                let newParams = [id, similarWatchArray[index]];
                let simWatch = modelA.addSimilarWatches(newParams);
            }
            res.render('product-edit', { title: 'Product Edit/Add', watches: watches });
            // res.json(model.createNew(params));
        } catch (err) {
            console.error("Error while creating menu ", err.message);
            next(err);
        }
    }
}

function bulk(req, res, next) {
    let jsonData = req.file.path;
}

function update(req, res, next) {
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let description = req.body.description;
    let categoryId = parseInt(req.body.categoryId);
    let typeId = parseInt(req.body.typeId);
    let image = req.body.imgPath;
    let alt = req.body.alt;
    let price = parseFloat(req.body.price);
    let reference = req.body.reference;
    let cSize = parseFloat(req.body.caseSize);
    let cHeight = parseFloat(req.body.caseHeight);
    let lugToLug = parseFloat(req.body.lugToLug);
    let lWidth = parseFloat(req.body.lugWidth);
    let crystalType = req.body.crystalType;
    let wResistance = req.body.waterResistance;
    let mCaliber = req.body.movementCaliber;
    let case1 = req.body.case1;
    let cBack = req.body.caseBack;
    let crown = req.body.crown;
    let dialColor = req.body.dialColor;
    let strap = req.body.strap;
    let bezel = req.body.bezel;
    let jewels = parseInt(req.body.jewels);
    let pReserve = req.body.powerReserve;
    let vintage = req.body.vintage;
    let featured = req.body.featured;
    let inStock = parseInt(req.body.inStock);
    let similarWatch = req.body.similarProducts;
    let similarWatchArray = similarWatch.split(" ");
    if (id && name && description && categoryId && typeId && image && alt && price && reference && cSize && cHeight && lugToLug && lWidth && crystalType && wResistance && mCaliber && case1 && cBack && crown && dialColor && strap && bezel && jewels && pReserve && vintage && featured && inStock) {
        let params = [name, description, categoryId, typeId, image, alt, price, reference, cSize, cHeight, lugToLug, lWidth, crystalType, wResistance, mCaliber, case1, cBack, crown, dialColor, strap, bezel, jewels, pReserve, vintage, featured, inStock, id,];
        console.log(params);
        try {
            let watches = modelW.getAllById();
            let updatedWatch = modelA.update(params);
            let allSimWatches = modelA.findSimilarWatches(id);
            for (let index = 0; index < allSimWatches.length; index++) {
                let newParams = [similarWatchArray[index], allSimWatches[index].id];
                let updateSimWatch = modelA.updateSimilarWatch(newParams);
            }
            res.render('product-edit', { title: 'Product Edit/Add', watches: watches });
        } catch (err) {
            console.error("Error while creating menu ", err.message);
            next(err);
        }
    }
}

module.exports = {
    getProductEdit,
    getBulkUpload,
    getOneById,
    createNew,
    update,
    bulk,
};
