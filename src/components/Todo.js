import React from 'react';

const Todo = ( {todos, todo, setTodos, setErr} ) => {
    
    const handleDelete = () => {
        setTodos(todos.filter((stateTodo) => stateTodo.key !== todo.key));
        outPutErr(todos)     
    };

    const outPutErr = (todos) => {
        if(todos.length === 1){
            setErr('No More Todos...');
        }
    }
    
    return ( 
        <div className="Todo">
            <p>{todo.text}</p>
            <button onClick = { handleDelete }>DEL</button>
        </div>
     );
}
 
export default Todo;