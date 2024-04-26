"use strict";
const { param } = require("../auth/auth.route");
const modelS = require("../models/search.model");
const modelW = require("../models/watch.model");


function search(req, res, next) {
    //let watches = modelW.getAll();
    let term = req.query.term;
    let watchP = modelS.searchingP(`%${term}%`);
    let watchC = modelS.searchingC(`%${term}%`);
    let watchT = modelS.searchingT(`%${term}%`);
    let allWatches = [];
    for (let index = 0; index < watchP.length; index++) {
        allWatches.push(watchP[index]);
    }
    
    for (let index = 0; index < watchC.length; index++) {
        let addIt = true;
        for (let j = 0; j < allWatches.length; j++) {
            if (allWatches[j].name === watchC[index].name) {
                addIt = false;
            }
        }
        if (addIt) {
            allWatches.push(watchC[index]);
        }
    }
    
    for (let index = 0; index < watchT.length; index++) {
        let addIt = true;
        for (let j = 0; j < allWatches.length; j++) {
            if (allWatches[j].name === watchT[index].name) {
                addIt = false;
            }
        }
        if (addIt) {
            allWatches.push(watchT[index]);
        }
    }
    try {
        res.render("searched", { watches: allWatches, title: term });
    } catch (err) {
        console.error("Error while getting users ", err.message);
        next(err);
    }
}

function getAllUsers(req, res, next) {
    try {
        res.json(modelS.getAllUsers());
    } catch (err) {
        console.error("Error while getting users ", err.message);
        next(err);
    }
}

function getUserById(req, res, next) {
    try {
        res.json(modelS.getUserById(req.params.id));
    } catch (err) {
        console.error("Error while getting user  ", err.message);
        next(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    search,
};
