import './App.css';
import axios from "axios";
import { Component } from "react";

class App extends Component {
    state = {
        todos: [],
        title: "",
        description: "",
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get("/api/todos/")
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }


    // Post a new todoItem to the server
    addTodoItem = e => {
        e.preventDefault();
        console.log(this.state.todos);
        axios.post("/api/todos/", { title: this.state.title, description: this.state.description })
            .then(response => {
                this.setState({ todos: this.state.todos.concat(response.data) });
                this.setState({ title: '' });
                this.setState({ description: '' });
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }

    // Delete a todoItem from the server
    deleteTodo = (id) => {
        axios
            .delete(`/api/todos/${id}/`)
            .then(res => {
                this.getTodos();
            })
            .catch(err => console.log(err.response.data));
    }


    render() {
        return (
            <div className="App">
                {/* Create a list of todo items */}
                <div className="todo-list">
                    {this.state.todos.map(todo => {
                        return (
                            <div className="todo-item" key={todo.id}>
                                <span className="todo-title bg-indigo-500 px-4 py-2 text-white">{todo.title}</span>
                                <span className="todo-description bg-indigo-200 px-4 py-2">{todo.description}</span>
                                <button className="todo-remove bg-red-600 p-2 rounded text-white" onClick={() => this.deleteTodo(todo.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
                {/* send todo title and description */}
                <form className="todo-form" onSubmit={this.addTodoItem}>
                    <input className="todo-title" type="text" placeholder="Todo Title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                    <input className="todo-description" type="text" placeholder="Todo Description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                    <button className="todo-add bg-blue-500 px-4 py-2" type="submit">Add Todo</button>
                </form>


            </div>
        );
    }
}

export default App;
