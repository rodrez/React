import React, { Component } from 'react'
import './App.css'
// Import our Component
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  // Enable us to use this.state
  constructor() {
    super()

    // The state of our component, in this case empty array
    this.state = {
      monsters: [],
      searchField: ''
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

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state

    // Filters the monsters based on search field values
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        
        <h1> Monsters Rolodex </h1> 
        {/* Card List Component to wrap our new array (from map) */}
        <SearchBox placeholder={"Search Monsters"}
         handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        
        </CardList>
      </div>
    )
  }
}

export default App
