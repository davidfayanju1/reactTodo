import React from 'react';
import {useState} from 'react';
import './styles/app.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Error from './components/Error';
import InputError from './components/InputError';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [ err, setErr ] = useState('');
  const [inputError, setInputError] = useState('');
  const [color, setColor] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
      <h1>Todo App.</h1>
      <InputError inputError={ inputError }/>
      <Form todoInput={ todoInput }
       setTodoInput={ setTodoInput }
       todos={todos}
       setTodos={setTodos}
       setErr={ setErr } 
       setInputError={ setInputError }
       setColor={ setColor }
       color={ color }
       searchResult={ searchResult }
       setSearchResult ={ setSearchResult } 
       />
      <TodoList todos={ todos } setTodos={setTodos} setErr={ setErr }/>
      <Error err={ err }/>
    </div>
  );
}

export default App;
