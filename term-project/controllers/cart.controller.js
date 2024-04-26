"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const modelC = require("../models/cart.model");
const modelW = require("../models/watch.model");
const modelU = require("../models/user.model");


function getAll(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.session.returnTo: " + req.session.returnTo);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    let cartItems = getOneCartsProducts(user);
    console.log("Cart Items" + cartItems);
    try {
        res.render("cart", { title: 'Shopping Cart', user: user, cartItems: cartItems });
        // res.json(meals);
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }
}

function checkingOut(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.session.returnTo: " + req.session.returnTo);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    let cartItems = getOneCartsProducts(user);
    let cart = modelC.getOneById(user.id);
    if (!cart || cart.status === "new") {
        cart = modelC.updateCartStatus(cart.id);
    }
    try {
        res.render("checkout", { title: 'Checkout', user: user, cartItems: cartItems });
        // res.json(meals);
    } catch (err) {
        console.error("Error while getting menu ", err.message);
        next(err);
    }

}

/*function getCart(req, res, next) {
    req.session.returnTo = req.originalUrl;
    let carts = modelC.getCart();
    let watches = modelW.getAll();
    let users = modelU.getAll();
    try {
        res("cart");
    } catch (err) {
        console.error("Error while getting cart", err.message);
        next(err);
    }
}*/

function getOneCartsProducts(user) {
    let cart = modelC.getOneById(user.id);
    if (!cart || cart.status !== "new") {
        let userId = user.id;
        let status = "new";
        let params = [status, userId];
        cart = modelC.createNewCart(params);
    }
    let cartProducts = modelC.getOneByCartId(cart.id);
    return cartProducts;
}

function getCart(user) {
    let cart = modelC.getOneById(user.id);
    console.log(cart.id);
    if (!cart || cart.status != "new") {
        let userId = user.id;
        let status = "new";
        let params = [status, userId];
        cart = modelC.createNewCart(params);
    }
    return cart;
}

function getOneById(req, res, next) {
    try {
        let meal = modelC.getOneById(req.params.id);
        res.render("cart", { meal: meal, title: 'Meal  #' + req.params.id });
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error("Error while getting one cart ", err.message);
        next(err);
    }
}

/*function getCurrentUser(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.session.returnTo: " + req.session.returnTo);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    return user;
}*/

function addToCart(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.session.returnTo: " + req.session.returnTo);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    let cart = getCart(user);
    let cartId = cart.id;
    console.log("Cart ID: " + cartId);
    let productId = req.params.id;
    console.log("Product ID: " + productId);
    let quantity = req.params.quantity;
    console.log("Quantity ID: " + quantity);
    let params2 = [cartId, productId, quantity];
    console.log(params2);
    let addedItem = modelC.addToCart(params2);
    console.log("Added Items " + addedItem);
    try {
        let watch = modelW.getOneById(productId);
        console.log("Watch: " + watch);
        res.render("details", { watch: watch }/*"index"*/);
        // res.json(model.getOneById(req.params.id));
    } catch (err) {
        console.error(`Error while adding to cart`, err.message);
        next(err);
    }
}

function addItem(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.user.id: " + req.user.id);
    console.log("req.session.returnTo: " + req.session.returnTo);
    console.log("req.user.id: " + req.user.id);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    let cartProduct = modelC.getOneCartProduct(req.params.id);
    let id = cartProduct.id;
    let quantity = cartProduct.quantity + 1;
    let params2 = [quantity, id];
    let addedItem = modelC.updateCart(params2);
    try {
        let cartItems = getOneCartsProducts(user);
        res.render("cart", { title: 'Shopping Cart', cartItems: cartItems, user: user });
    } catch (err) {
        console.error(`Error while adding to cart`, err.message);
        next(err);
    }
}

function subItem(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.user.id: " + req.user.id);
    console.log("req.session.returnTo: " + req.session.returnTo);
    console.log("req.user.id: " + req.user.id);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    console.log("req.params.id: " + req.params.id);
    let cartProduct = modelC.getOneCartProduct(req.params.id);
    console.log("CartProduct: " + cartProduct);
    let id = cartProduct.id;
    let quantity = cartProduct.quantity - 1;
    if (quantity > 0) {
        let params2 = [quantity, id];
        let addedItem = modelC.updateCart(params2);
    } else {
        let addedItem = modelC.deleteById(id);
    }
    try {
        let cartItems = getOneCartsProducts(user);
        res.render("cart", { title: 'Shopping Cart', cartItems: cartItems, user: user });
    } catch (err) {
        console.error(`Error while adding to cart`, err.message);
        next(err);
    }
}

function delItem(req, res, next) {
    console.log("Start");
    req.session.returnTo = req.originalUrl;
    console.log("req.user.id: " + req.user.id);
    console.log("req.session.returnTo: " + req.session.returnTo);
    console.log("req.user.id: " + req.user.id);
    let user = modelU.getUserById(req.user.id);
    console.log("user: " + user);
    if (!user) {
        console.log(req.user);
        let googleId = String(req.user.id);
        let name = String(req.user.displayName);
        let email = String(req.user.emails[0].value);
        let userType = "Shopper";
        let params = [name, email, userType, googleId];
        modelU.createNew(params);
        user = modelU.getUserById(req.user.id);
    }
    let cartProduct = modelC.getOneCartProduct(req.params.id);
    let id = cartProduct.id;
    let addedItem = modelC.deleteById(id);
    try {
        let cartItems = getOneCartsProducts(user);
        res.render("cart", { title: 'Shopping Cart', cartItems: cartItems, user: user });
    } catch (err) {
        console.error(`Error while adding to cart`, err.message);
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
            res.render("cart", { meal: meal, title: 'Meal  #' + req.params.id });
            // res.json(model.createNew(params));
        } catch (err) {
            console.error("Error while creating menu ", err.message);
            next(err);
        }
    }
}

module.exports = {
    getAll,
    addToCart,
    delItem,
    addItem,
    subItem,
    getOneById,
    createNew,
    checkingOut,
};
