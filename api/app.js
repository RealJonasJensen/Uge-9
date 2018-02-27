// Include Express
const express = require("express"),
    app = express();
// Body-Parser
const bodyParser = require("body-parser")
// Routes
const taskRoutes = require("./routes/tasks")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/views"))

// app.get("/", (req, res) => {
//     res.send("HEJ")
// })

app.use("", taskRoutes)


app.listen(process.env.port || 3000, (req, res) => {
    console.log("Server is turned on!")
})
