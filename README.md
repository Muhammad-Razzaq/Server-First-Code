steps to make hello world of express:
make a javascript file with a name of your choice such as server.js or app.js

1.run npm init command and answer all question, you may leave all answers empty ;-)

2.goto package.json file and add start script as node .js

3.install express package with command npm install express

4.start writing code in your javascript file:

var PORT = process.env.PORT || 5000;
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})

server.listen(PORT, () => {
    console.log("server is running on port 3000");
})
run npm start command to start server

ask your friend to access your server by writing your ip address in their browser (your friend should be connected to your wifi ;-) )

try changing server code a little bit and see what happens

create Procfile file and write web: node .js

create .gitignore file and write [/node_modules]

Try to deploy this server code on heroku
you may get help from here: [https://devcenter.heroku.com/articles/getting-started-with-nodejs]