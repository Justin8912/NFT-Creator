const express = require("express");  // This is something that helps set up the server - it's very helpful for background stuff
const port = 3000;   // This is mostly just for local host development - wont use this after you set up a website; can be anything
const app = express();  // This allows you to USE express in your application

const parser = require("body-parser");  // This handles data packaging for your request
app.use(parser()); // This tells your thing to use parser()
app.use(express.static("CS329E"))

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'CS329E')))
// this "/" tells you where to go in the localhost
// localhost:portno["/ ""] 
app.get("/host", (req, res) => {   
    // the (req, res) => {} is a function, with the req and res parameters (ES6 notation)
    // app.get("/[put in url extension here]", function(req, res){}) would be the ES5 notation

    res.send("yoyoyo")  // this is what is sent to the browser and what the user looks at
    // res.sendFile("[path]") will send a file
    // res.end()  // This stops the sending - it makes sure the call finishes; this is not used for res.send, buit will be used for files

})


// git commit -m "" prepares the comit
// git status gives all the things that have been changed
// git push pushes to the repository - updates
// git add . initial stages (period will add everything in the directory)
// git clone takes all the files and installs them to your machine

// To add to a machine:
    // 1. Check status by doing "git status" and see what isnt up to date
    // 2. add files to push by doing "git add"
    // 3. prep the files to the repository by " git commit -m "[commit name - descriptive comment]" "
    // 4. push everything to reposityu by doing "git push" 
app.listen(port);