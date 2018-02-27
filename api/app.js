// Include Express
const express = require("express"),
    app = express();
// Body-Parser
const bodyParser = require("body-parser")



app.get("/", (req, res) => {
    res.send("HEJ")
})


app.listen(process.env.port || 3000, (req, res) => {
    console.log("Server is turned on!")
})
