import './App.css';
import axios from "axios";
import { Component } from "react";
import Card from "./components/card/card.component";
import CardGroups from "./components/card-group/card-group.component";
import TodoInput from "./components/todo-input/todo-input.component";

class App extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        this.refreshList();
      }
    
      refreshList = () => {
        axios
          .get("/api/todos/")
          .then((res) => this.setState({ todos: res.data }))
          .catch((err) => console.log(err));
          console.log(this.setState.todos)
      };

    getTodos() {
        axios
            .get('http://127.0.0.1:8000/api/todos/')
            .then(res => {
                this.setState({ todos: res.data })
                console.log(this.state.todos)
            })
    }

    createItem = () => {
        const item = { title: "", description: "" };

        this.setState({ todos: item });
    };

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`/api/todos/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("/api/todos/", item)
            .then((res) => this.refreshList());
    };

    render() {
        return (
            <div>
                <div>
                    <TodoInput createTodo={this.createItem}></TodoInput>
                </div>
                <CardGroups title={"Mistakes on the Works"}>
                    {this.state.todos.map(item => (
                        <div className="w-3/12">
                            <div>
                                <Card title={item.title} key={item.id} description={item.description}
                                    date={item.date}> </Card>
                            </div>
                        </div>
                    ))}

                </CardGroups>
            </div>
        )
    }

}

export default App;
