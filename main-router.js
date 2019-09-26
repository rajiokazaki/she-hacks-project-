const express = require("express"); //import express
const router = express.Router();

const bodyParser= require("body-parser");
router.get(bodyParser.json());
router.get(bodyParser.urlencoded({extended: true}));


//create an express app
router.get("/", (req, res) => {
    res.send("Hello World!");

}); //create a route

//a route for colour(4)
router.get("/colors", (req, res,) => {
    res.send(["red", "blue", "yellow", "pink"]);
});
//a route for fruits
router.get("/fruits", (req, res) => {
   res.send(["mango", "pawpaw", "watermelon", "apple"]); 
});
//a route for login
router.get("/login", (req, res) => {
    console.log(req.body);
    res.send(`username is ${req.body.Username} and password is ${req.body.password}`);
 });

 

router.get("/details", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
    );
});

