const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var ID = req.body.ID;
    var Name = req.body.Name;
    var Gender = req.body.Gender;

    res.send(ID);
    res.send(Name);
    res.send(Gender);
});

app.listen(3000, function() {
    console.log("server started on port 3000");
});