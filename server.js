var PORT = process.env.PORT || 5000;
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("someone else");
    res.send("menu: what do you want? food or water?");
})

server.get("/food", (req, res, next) => {
    console.log("Someone is asking for food");
    res.send("Here is water");
})

server.get("/water", (req, res, next) => {
    console.log("Someone is asking for water");
    res.send("Here is water");
})

server.listen(PORT, () => {
    console.log("server is runnig on port", PORT)
})