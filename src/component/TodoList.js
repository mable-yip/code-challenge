import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import TodoItem from "./TodoItem"

function TodoList(props){
    console.log("TodoList: ", props.allTodos)
    return(
        <div>
            <button onClick={() => props.deleteAllTodos()}>Deleted selected</button>
            <table>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Operate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allTodos.map((todo, index) =>
                        <tr key={index}>
                            <td>
                                <Link to={`/todo/${index}`}>
                                    {todo.description}
                                </Link>
                            </td> 
                            <td>{todo.category}</td>
                            <td onClick={()=>props.deleteTodo(todo)}>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TodoList