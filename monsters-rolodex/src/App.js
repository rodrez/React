import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      string: "Hello Fabian"
    }
  }
  checkText = (text) => {
    if (text.includes("Fabian")){
        return "Hello World"
    }else{
      return "Hello Fabian"
    }
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={()=>this.setState({string: this.checkText(this.state.string)})}>
            {this.state.string}
          </button>
        </header>
      </div>
    );
  }
}


export default App;
