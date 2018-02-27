const mongoose = require("mongoose")

var taskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: "Necessary"
    },
    completed: {
        type: Boolean,
        default: false,
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;