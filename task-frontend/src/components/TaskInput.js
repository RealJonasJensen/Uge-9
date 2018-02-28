import React, { Component } from "react";

class TaskInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    inputHandler = (event) => {
        this.setState({inputValue: event.target.value})
    }

    handleSubmit = () => {
        //console.log(this.state.inputValue)
        this.props.click(this.state.inputValue)
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="input task" value={this.state.inputValue} onChange={this.inputHandler} />
                <button onClick={this.handleSubmit} >Add New</button>
            </div>
        )
    }
}

export default TaskInput;