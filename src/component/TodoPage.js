import React from 'react'
import InputForm from "./InputForm"
import TodoList from "./TodoList"
import {connect} from 'react-redux'
import {addTodo, deleteTodo, deleteAllTodos} from '../redux'

function TodoPage(props){
    return(
        <div>
            <InputForm addTodo={props.addTodo}/>
            <TodoList 
                allTodos={props.todoList} 
                deleteAllTodos={props.deleteAllTodos}
                deleteTodo={props.deleteTodo}
            />
        </div>
    )
}

export default connect(state=>({todoList: state}), {addTodo, deleteTodo, deleteAllTodos})(TodoPage)