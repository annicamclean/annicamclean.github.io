"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/watch.model");

function getAll(req, res, next) {
    let watches = model.getAll();
    let categories = model.getAllCategories();
    try {
        res.render("products", { watches: watches, title: 'Brands', categories: categories });
        // res.json(meals);
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllBrands(req, res, next) {
    let watches = model.getAll();
    let categories = model.getAllCategories();
    try {
        res.render("products", { watches: watches, title: 'Brands', categories: categories });
        // res.json(meals);
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllVintage(req, res, next) {
    let category = "Vintage";
    let watches = model.getAll();
    let categories = model.getAllCategories();
    try {
        res.render("vintage", { watches: watches, title: category, categories: categories });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllTypes(req, res, next) {
    let watches = model.getAll();
    let styles = model.getAllTypes();
    try {
        res.render("styles", { watches: watches, title: 'Styles', styles: styles });
        // res.json(meals);
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllByCategory(req, res, next) {
    let category = req.params.category;
    let meals = model.getAllByCategory(category)
    try {
        res.render("products", { meals: meals, title: ' ' + category + ' Meals' });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllByBrand(req, res, next) {
    let category = req.params.category;
    let watches = model.getAll();
    let categories = model.getAllCategories();
    try {
        res.render("brands", { watches: watches, title: category, categories: categories });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getAllByType(req, res, next) {
    let type = req.params.type;
    let watches = model.getAll();
    let styles = model.getAllTypes();
    try {
        res.render("types", { styles: styles, title: type, watches: watches });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function getOneById(req, res, next) {
    try {
        console.log(req.params.id);
        let watch = model.getOneById(req.params.id);
        console.log(watch.id);
        let similarProducts = model.getAllSWatches(watch.id);
        console.log(similarProducts);
        res.render("details", { watch: watch, title: req.params.name, similarProducts: similarProducts});
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error(`Error while getting ${req.params.name}`, err.message);
        next(err);
    }
}

function createNew(req, res, next) {
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let category = req.body.category;
    let subcategory = req.body.subcategory;
    let price = parseFloat(req.body.price);
    let cost = parseFloat(req.body.cost);
    if (id && name && category && subcategory && price && cost) {
        let params = [id, name, category, subcategory, price, cost];
        try {
            let meal = model.createNew(params);
            res.render("products", { meal: meal, title: 'Meal  #' + req.params.id });
            // res.json(model.createNew(params));
        } catch (err) {
            console.error("Error while creating menu ", err.message);
            next(err);
        }
    }
}

function search(req, res, next) {
    let term = req.query.term;
    let watches = [];
    console.log("Watches: " + watches);
    if (term) {
        let searchTerm = '%' + term + '%';
        watches = model.search(searchTerm);
        console.log("Watches: " + watches);
    }
    else {
        watches = model.getAll();
        console.log("Watches: " + watches);
    }
    try {
        res.render("products", { watches: watches, title: term , user: req.user });
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

module.exports = {
    getAll,
    search,
    getAllBrands,
    getAllTypes,
    getAllByBrand,
    getAllByType,
    getAllByCategory,
    getOneById,
    createNew,
    getAllVintage,
};
