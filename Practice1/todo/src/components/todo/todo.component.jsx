// import React from "react";

import {Component} from "react";

class TodoItem extends Component {
    render() {
        return (<div>
                <h1>{this.props.title}</h1>
                <span>{this.props.value}</span>
                <button onClick={() => this.props.del(this.props.id)}>Delete</button>
            </div>
        )
    }s

}

export default TodoItem