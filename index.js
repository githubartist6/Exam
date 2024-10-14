const signup = require("./models/singup.js");
const addmission_form = require("./models/admistionform.js");
const enrol = require("./models/updatepassword.js");

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
// const {  validationResult } = require('express-validator')


const app = express();
const port = 1000;

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
async function main() {
    try {
        await mongoose.connect('mongodb+srv://jitendraks20022:03Z2BLl4ckjEm4J5@cluster0.iegc1.mongodb.net/'); // Update with your connection string
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

main();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// .............. Routes code start ...........


// c
app.get("/c", (req, res) => {
    res.render("c.ejs");
});

// ccc
app.get("/ccc", (req, res) => {
    res.render("ccc.ejs");
});

// css
app.get("/css", (req, res) => {
    res.render("css.ejs");
});

// dart
app.get("/dart", (req, res) => {
    res.render("dart.ejs");
});

// forgot
app.get("/forgot", (req, res) => {
    res.render("forgot", { error: null });
});

// golang
app.get("/golang", (req, res) => {
    res.render("golang", { error: null });
});

// hacking
app.get("/hacking", (req, res) => {
    res.render("hacking.ejs");
});

// haskell
app.get("/haskell", (req, res) => {
    res.render("haskell.ejs");
});

// home
app.get("/home", (req, res) => {
    res.render("home.ejs");
});

// html
app.get("/html", (req, res) => {
    res.render("html.ejs");
});

// js
app.get("/js", (req, res) => {
    res.render("js.ejs");
});

// kotlin
app.get("/kotlin", (req, res) => {
    res.render("kotlin.ejs");
});

// login
app.get("/", (req, res) => {
    res.render("index", { error: null });
});

// matlab
app.get("/matlab", (req, res) => {
    res.render("matlab.ejs");
});

// newpassword
app.get("/newpassword", (req, res) => {
    res.render("newpassword", { error: null });
});

// php
app.get("/php", (req, res) => {
    res.render("php.ejs");
});

// python
app.get("/python", (req, res) => {
    res.render("python.ejs");
});

// react
app.get("/react", (req, res) => {
    res.render("react.ejs");
});

// ruby
app.get("/ruby", (req, res) => {
    res.render("ruby.ejs");
});

// rust
app.get("/rust", (req, res) => {
    res.render("rust.ejs");
});

// scala
app.get("/scala", (req, res) => {
    res.render("scala", { error: null });
});

// shell
app.get("/shell", (req, res) => {
    res.render("shell", { error: null });
});

// signup
app.get("/signup", (req, res) => {
    res.render("signup", { error: null });
});

// sql
app.get("/sql", (req, res) => {
    res.render("sql", { error: null });
});

// swift
app.get("/swift", (req, res) => {
    res.render("swift", { error: null });
});

// typeScript
app.get("/typeScript", (req, res) => {
    res.render("typeScript", { error: null });
});

// webdevlopment
app.get("/webdevlopment", (req, res) => {
    res.render("webdevlopment", { error: null });
});

// ........... Routes code end .............



// signup data store
app.post('/signup', async (req, res) => {
    const { fullname, email, phone, password, book } = req.body;

    try {
        // Check if email already exists
        const existingUser = await signup.findOne({ email });
        if (existingUser) {
             return res.render("signup", { error: "Email already in use!", fullname, email, phone, book });
        }

        const signupdata = new signup({
            name: fullname,
            email: email,
            phone: phone,
            password: password,
            book: book
        });

        const password_stor = new enrol({
            email: email
        })
        await password_stor.save();

        await signupdata.save();
        res.redirect("/home");
    } catch (error) {
        console.error(error);
        return res.render("signup", { error: "Error saving signup data!", fullname, email, phone, book });
    }
});


// Login datamach code 
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const datamach = await signup.findOne({ email: email });

        // If email not found
        if (!datamach) {
            return res.render("login", { error: "Invalid email" });
        }

        // If password is incorrect
        if (datamach.password !== password) {
            return res.render("login", { error: "Incorrect password" });
        }

        res.redirect("/home");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


// forget password code

app.post("/forgot", async (req, res) => {
    const { email, book } = req.body;

    try {
        const datamach = await signup.findOne({ email: email });

        // अगर ईमेल नहीं मिला
        if (!datamach) {
            return res.render("forgot", { error: "Invalid email" });
        }

        // अगर पासवर्ड गलत है
        if (datamach.book !== book) {
            return res.render("forgot", { error: "Incorrect book" });
        }

        res.redirect("/newpassword");
    } catch (error) {
        console.error(error);
        return res.render("forgot", { error: "Internal server error" });
    }
});


// ............... new password ...................

app.post("/newpassword", async (req, res) => {
    try {
        let { email, book } = req.body;
        let oldpassword = await signup.findOne({ email: email });

        // Check if the email exists
        if (!oldpassword) {
            return res.render("newpassword", { error: "Email not found." });
        }

        let oldpass = oldpassword.password;

        // Update the password history
        await enrol.updateOne(
            { email: email },
            { $push: { passwordupdate: { $each: [{ oldpassword: oldpass, newpassword: "newpassword" }] } } }
        );

        // Assuming you want to update the password too
        await signup.updateOne(
            { email: email },
            { $set: { password: "newpassword" } } // Replace "newpassword" as needed
        );

        res.redirect("https://exam-hz9u.onrender.com");
    } catch (error) {
        console.error(error);
        res.render("newpassword", { error: "An error occurred while updating the password." });
    }
});

