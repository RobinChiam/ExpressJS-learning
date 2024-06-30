const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

     console.log("Running on Port 3000");
     res.render("index");

})

app.listen(3000);
