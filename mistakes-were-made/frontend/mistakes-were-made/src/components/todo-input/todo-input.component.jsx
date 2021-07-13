import React from 'react'

class TodoInput extends React.Component {

    render () {
    return (
      <div className='bg-white shadow-lg rounded-sm border border-gray-200 p-4'>
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
            onClick={this.props.createTodo}
          >
            Save Todo
          </button>
          {/* Right side */}
        </div>
      </div>
    )
  }
}

export default TodoInput
