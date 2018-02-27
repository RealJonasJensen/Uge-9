const db = require("../models")

// Routes

// api/tasks

// Get

exports.getTasks = (req,res) => {
    db.Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.send(err))
}

// Post

exports.createTask = (req, res) => {
    //res.send("Hej")
    db.Task.create(req.body)
    .then(newTask => res.status(201).json(newTask))
    .catch(err => res.send(err))
}

// api/tasks/:id

// Get

exports.getTask = (req, res) => {
    db.Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.send(err))
}

// Put

exports.updateTask = (req, res) => {
    db.Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(task => res.json(task))
    .catch(err => res.send(err))
}

// Delete

exports.deleteTask = (req, res) => {
    db.Task.remove({_id: req.params.id})
    .then(() => res.json({message: "Deleted"}))
    .catch(err => res.send(err))
}