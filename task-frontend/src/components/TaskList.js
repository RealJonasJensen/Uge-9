import React, { Component } from "react";

// Components
import ItemList from "./ItemList"

// Api
const APIURL = "/api/tasks/"
// Requires
const axios = require("axios")

class TaskList extends Component {
    state = {
        tasks: []
    }

    componentWillMount(){
        axios.get(APIURL)
        .then(data => this.setState({tasks: data.data}))
        .catch(err => console.log(err))
    };

    // Axios call


    render() {

        const tasks = this.state.tasks.map((t, ind) => {
            console.log({...t})
            return <ItemList key={t._id} {...t} />
        })

        // console.log(task)

        return (
            <div>
                <h1>Lets Goo!!</h1>
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default TaskList