const express = require("express");
const mates = require("./matematicas"); 
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    var suma = mates.Suma(2,3)
    res.send(`La suma es ${suma}`);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
