import React, { Component } from 'react'
import './App.css'
// Import our Component
import { CardList } from './components/card-list/card-list.component'


class App extends Component {
  // Enable us to use this.state
  constructor() {
    super()

    // The state of our component, in this case empty array
    this.state = {
      monsters: []
    }
  }


  // Runs when the components gets mounted to web page
  componentDidMount(){
    // Gets api
    fetch('https://jsonplaceholder.typicode.com/users')
    // Gets the response from the API
    .then(response => response.json())
    // Grabs the user from the API and set the empty state to the users.
    .then(users => this.setState({monsters: users}))
    
  }

  render() {
    return (
      <div className='App'>
        {/* Card List Component to wrap our new array (from map) */}
        <CardList monsters={this.state.monsters}>
        
        </CardList>
      </div>
    )
  }
}

export default App
