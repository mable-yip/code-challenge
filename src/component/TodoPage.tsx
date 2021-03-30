import React from 'react'
import InputForm from "./InputForm"
import TodoList from "./TodoList"

function TodoPage(){
    return(
        <div>
            <h1> Todo Page</h1>
            <InputForm />
            <TodoList />
        </div>
    )
}

export default TodoPage