import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, setErr, setSearchResult, searchResult }) => {
    return ( 
        <div className="TodoList">
            { todos.map((todo) => <Todo todo={ todo } todos={ todos } key={todo.key} setTodos={ setTodos } setErr={ setErr } setSearchResult={ setSearchResult } searchResult={ searchResult }/>) }
        </div>
     );
}
 
export default TodoList;