const express = require("express")
const app = express()

app.get("/", (req, res) => {

     console.log("Running on Port 3000")
     res.send("Hello World")

})

app.listen(3000)
