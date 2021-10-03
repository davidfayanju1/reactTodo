import React, { useState, useEffect } from 'react';

const Form = ({todoInput, setTodoInput, todos, setTodos, setErr, setInputError, setColor, color, setSearchResult, searchResult }) => {

    const getInput = (e) => {
        setTodoInput(e.target.value);
    }

    const submitInput = (e) => {

        e.preventDefault()

        if(todoInput.length === 0){
            setInputError('This Field is Required!');
            setColor('rgb(177, 19, 19)')            
        }else{
            setTodos([
                ...todos, {text: todoInput, key: Math.random() * 1000}
            ]);
    
            setTodoInput('');
            setInputError('');
            setColor(null);

        }

        if(todos.length === 0){
            setErr('');
            setFilterInput('');
        }

    }
    
    const [filterInput, setFilterInput] = useState('');
    
    const getFilterInput = (e) => {
        setFilterInput(e.target.value)
    }

    // filter
    useEffect(() => {
        const myFilter = todos.filter((todo) => todo.text.trim().toLowerCase().includes(filterInput.trim().toLocaleLowerCase()))
        // const myFilter2 = todos.filter((todo) => !todo.text.trim().toLowerCase().includes(filterInput.trim().toLocaleLowerCase()))
        
        setTodos(myFilter)
        // setTodos(myFilter2);
        ;
    }, [filterInput]);

    return ( 
        <div className="form-container" >
            <form>
                <div className="flex-items">
                    <input  
                    onChange={ getInput } 
                    value={ todoInput }
                    type="text" 
                    placeholder="Input Todo" 
                    style={ { borderColor: color } } />
                    <button onClick={ submitInput }>+</button>
                </div>
                {todos.length > 0 && <input onChange={ getFilterInput }  value={ filterInput } type="text" placeholder="Search..." className="second-input"/>}
            </form>
        </div>
     );
}
 
export default Form;