import React, { useState } from 'react';
import './App.css';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.todo.value;
    if (newTodo !== "" && newTodo !== " "){
      setTodos([...todos, newTodo]); 
    }
    e.target.reset();
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };
  
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className="container">
      <div className="App">
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" placeholder="Add a new task" autoComplete='off' />
          <button type="submit">Add</button>
        </form>
        <ul> 
          {todos.map((todo, index) => (
            <li key={index}>
              <AiTwotoneCheckCircle style={{marginRight: '42px' }} /> 
              <span className='todo-item'>{todo.charAt(0).toUpperCase() + todo.slice(1)}</span>
              <button className='delete-btn' onClick={() => handleDelete(index)}> <span>Delete < BsFillTrashFill style={{ verticalAlign: 'middle', marginLeft: '5px' }}/></span></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;