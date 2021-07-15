// import React from "react";

const Todo = (props) => (
    <div id={"todo-"+props.key}>
        <h1>{props.title}</h1>
        <span>{props.value}</span>
        <button onClick={() => this.props.del(this.props.item.id)}>Delete</button>
    </div>
)

export default Todo