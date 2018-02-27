const mongoose = require("mongoose")
// Log af mongo calls
mongoose.set("debug", true);
// Local database
mongoose.connect("mongodb://localhost/task-api")
mongoose.Promise = Promise;

module.exports.Task = require("./task");