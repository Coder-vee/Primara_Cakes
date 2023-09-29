const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const request = require("request");



const app = express();

app.get("/", function(req, res){
    res.send("Welcome to my Node.JS backend programming language");

})


app.listen("3000", function(){
    console.log("The server is now listening at port 3000");
})