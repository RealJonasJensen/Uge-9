import React, { Component } from "react";
// Components
import ItemList from "./ItemList";
import TaskInput from "./TaskInput";
// Api
const APIURL = "/api/tasks/"
// Requires
const axios = require("axios")

class TaskList extends Component {
    state = {
        tasks: []
    }

    //  ======= Axios calls =======

    componentWillMount() {
        axios.get(APIURL)
            .then(data => this.setState({ tasks: data.data }))
            .catch(err => console.log(err))
    };

    handleSubmit = (value) => {
        // console.log("Hej fra taskList", value)
        axios.post(APIURL, { name: value })
            .then(response => this.setState({ tasks: [...this.state.tasks, response.data] }))
            .catch(err => console.log(err));
    }

    deleteHandler = (id) => {
        const deleteUrl = APIURL + id;
        const tasks = this.state.tasks.filter(task => task._id !== id);
        axios.delete(deleteUrl)
            .then(response => this.setState({ tasks }))
            .catch(err => console.log(err))
    }

    updateHandler = (task) => {
        console.log("Lets update id: ", task._id)
        const updateUrl = APIURL + task._id;

        axios.put(updateUrl, { completed: !task.completed })
            .then(response => {
                console.log(response)
                const tasks = this.state.tasks.map(task => {
                    if (task._id === response.data._id) {
                        return { ...task, completed: !task.completed };
                    } else {
                        return task;
                    }
                })
                this.setState({ tasks })
            })

    }


    render() {

        const tasks = this.state.tasks.map((t, ind) => {
            // console.log({...t})
            // {...t} Passes every information as props
            return <ItemList key={t._id} {...t} onDelete={this.deleteHandler.bind(this, t._id)} onUpdate={this.updateHandler.bind(this, t)} />
        })

        // console.log(tasks)

        return (
            <div>
                <h1>Lets Goo!!</h1>
                <TaskInput click={this.handleSubmit} />
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default TaskList