const express = require("express");
const router = express.Router();
const db = require(".././models")
const helpers = require(".././helpers/task")

router.route("/api/tasks")
    .get(helpers.getTasks)
    .post(helpers.createTask)

router.route("/api/tasks/:id")
    .get(helpers.getTask)
    .put(helpers.updateTask)
    .delete(helpers.deleteTask)

module.exports = router;