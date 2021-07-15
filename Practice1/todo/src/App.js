import './App.css';
import React from "react";
import TodoItem from "./components/todo/todo.component";

const todoItems = [
    {
        id: 1,
        title: "Work",
        value: 'Yes'
    },
    {
        id: 2,
        title: "Rest",
        value: 'No'
    },

]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: todoItems
        }
    }

    handleClick = () => {
        this.setState({
            todoList: [...this.state.todoList, {
                id: document.getElementById('i').value,
                title: document.getElementById('t').value,
                value: document.getElementById('v').value,
            }]
        })
    }
    handleDelete = itemId => {
        const items = this.state.todoList.filter(item => item.id !== itemId);
        this.setState({todoList: items}, () => console.log(this.state.todoList));
    };

    render() {
        return (
            <div>
                <input id={"i"} type="text" placeholder={"Enter id"}/>
                <input id={"t"} type="text" placeholder={"Enter title"}/>
                <input id={"v"} type="text" placeholder={"Enter value"}/>
                <button onClick={this.handleClick}> Add Element</button>
                {this.state.todoList.map(item => (
                        <TodoItem iden={item.id} key={item.id} title={item.title} value={item.value}
                              del={this.handleDelete}> </TodoItem>
                    )
                )}
            </div>
        )


    }
}

export default App;
