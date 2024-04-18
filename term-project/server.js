"use strict";
const express = require("express");
const app = express();
const path = require('path');

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//auth
const session = require('express-session');
const passport = require('passport');
require("./auth/passport");
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', require('./auth/auth.route'));

const watchRouter = require("./routes/watch.routes");
const cartRouter = require("./routes/cart.routes");
const adminRouter = require("./routes/admin.routes");
const userRouter = require("./routes/user.routes");

app.get("/", (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use('/admin', adminRouter);
app.use("/watch", watchRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("App listening at http://localhost:" + PORT);
});
