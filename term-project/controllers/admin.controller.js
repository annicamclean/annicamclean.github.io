"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/admin.model");

function getProductEdit(req, res, next) {
    try {
        res.render('product-edit', {title: 'Product Edit/Add'});
    } catch (err) {
        console.error("Error while getting admin page ", err.message);
        next(err);
    }
}

function getBulkUpload(req, res, next) {
    try {
        res.render('bulk-upload', {title: 'Bulk Upload'});
    } catch (err) {
        console.error("Error while getting admin page ", err.message);
        next(err);
    }
}


function getOneById(req, res, next) {
    try {
        let meal = model.getOneById(req.params.id);
        res.render("cart", { meal: meal, title: 'Meal  #' + req.params.id });
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function createNew(req, res, next) {
    /**
     * "id", "name", "description", "categoryId", "typeId", "image", "alt", "price", "reference", "cSize", "cHeight", "lugToLug", "lWidth", "crystalType", "wResistance", "mCaliber", "case", "cBack", "crown", "dialColor", "strap", "bezel", "jewels", "pReserve", "vintage", "featured", "inStock"
     * 
     * "id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"categoryId"	INTEGER NOT NULL,
	"typeId"	INTEGER NOT NULL,
	"image"	TEXT NOT NULL,
	"alt" TEXT NOT NULL,
	"price"	REAL NOT NULL,
	"reference"	TEXT NOT NULL,
	"cSize"	REAL NOT NULL,
	"cHeight"	REAL NOT NULL,
	"lugToLug"	REAL NOT NULL,
	"lWidth"	REAL NOT NULL,
	"crystalType"	TEXT NOT NULL,
	"wResistance"	TEXT NOT NULL,
	"mCaliber"	TEXT NOT NULL,
	"case"	TEXT NOT NULL,
	"cBack"	TEXT NOT NULL,
	"crown"	TEXT NOT NULL,
	"dialColor"	TEXT NOT NULL,
	"strap"	TEXT NOT NULL,
	"bezel"	TEXT NOT NULL,
	"jewels"	INTEGER NOT NULL,
	"pReserve"	TEXT NOT NULL,
	"vintage"	TEXT NOT NULL,
	"featured"	TEXT NOT NULL,
	"inStock"	INTEGER NOT NULL,
     */
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let description = req.body.description;
    let categoryId = parseInt(req.body.categoryId);
    let typeId = parseInt(req.body.typeId);
    let image = req.body.image;
    let alt = req.body.alt;
    let price = parseFloat(req.body.price);
    let reference = req.body.reference;
    let cSize = parseFloat(req.body.cSize);
    let cHeight = parseFloat(req.body.cHeight);
    let lugToLug = parseFloat(req.body.lugToLug);
    let lWidth = parseFloat(req.body.lWidth);
    let crystalType = req.body.crystalType;
    let wResistance = req.body.wResistance;
    let mCaliber = req.body.mCaliber;
    let case1 = req.body.case;
    let cBack = req.body.cBack;
    let crown = req.body.crown;
    let dialColor = req.body.dialColor;
    let strap = req.body.strap;
    let bezel = req.body.bezel;
    let jewels = parseInt(req.body.jewels);
    let pReserve = req.body.pReserve;
    let vintage = req.body.vintage;
    let featured = req.body.featured;
    let inStock = parseInt(req.body.inStock);
    if (id && name && description && categoryId && typeId && image && alt && price && reference && cSize && cHeight && lugToLug && lWidth && crystalType && wResistance && mCaliber && case1 && cBack && crown && dialColor && strap && bezel && jewels && pReserve && vintage && featured && inStock) {
        let params = [id, name, description, categoryId, typeId, image, alt, price, reference, cSize, cHeight, lugToLug, lWidth, crystalType, wResistance, mCaliber, case1, cBack, crown, dialColor, strap, bezel, jewels, pReserve, vintage && featured, inStock];
        try {
            let meal = model.createNew(params);
            res.render('product-edit', {title: 'Product Edit/Add'});
            // res.json(model.createNew(params));
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
};
