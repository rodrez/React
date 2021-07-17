import React from 'react'
import axios from 'axios'



const FormData = require('form-data');


class TodoInput extends React.Component {
    constructor(){
        super()
        this.state = {
          item: {
            title: "",
            description: ""
          }
            
        }
    }

      async makePostRequest() {

      const form_data = new FormData();
      form_data.append('title', 'Big Test');
      form_data.append('description', 'gardener');
  
      await axios.post('http://127.0.0.1:8000/api/todos/', form_data, 
          { headers: form_data.getHeaders() });
  
      // let data = res.data;
      
  }  

    // Update the state with the input value of both form fields
    handleInputChange(event) {
      this.setState({
        item: {
          title: event.target.title,
          description: event.target.description
        }
      })
      console.log(this.setState.item);
    }

    // This method is called when the user clicks on the submit button. 
    // It will make a post request to the server and update the state
    // with the new todo item.
    handleSubmit(event) {
      event.preventDefault();
      this.makePostRequest();
    }
  

    render () {
    return (
      <form onSubmit={this.makePostRequest} className='bg-white shadow-lg rounded-sm border border-gray-200 p-4'>
        {/* Body */}
        <div className='mb-3'>
          {/* Title */}
          <label htmlFor='todo-title'>Title</label>
          <input
            id='todo-title'
            className='font-semibold text-gray-800 mb-1 border-2 border-indigo-600'
            placeholder='Enter ToDo Title.'
          />
          {/* Content */}
          <div>
            <label htmlFor='todo-desc'>Description</label>
            <input
              id='todo-desc'
              className='text-sm border-2 border-indigo-600'
              placeholder='Enter your description'
            />
          </div>
        </div>
        {/* Footer */}
        <div className='flex items-center justify-between'>
          {/* Left side */}
          <button
            type='submit'
            className='text-white rounded bg-indigo-500 px-4 py-2 ml-3'
          >
            Save Todo
          </button>
          {/* Right side */}
        </div>
      </form>
    )
  }
}


export default TodoInput
