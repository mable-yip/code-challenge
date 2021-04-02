import React from 'react'
import InputForm from "./InputForm"
import TodoList from "./TodoList"

const TodoPage = () => {
    return(
        <div>
            <h1> Todo Page</h1>
            <InputForm />
            <TodoList />
        </div>
    )
}

export default TodoPage