import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {deleteAllTodos, deleteTodo} from "../redux_toolkit/TodoListSlice"

function TodoList(props){
    const allTodos = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => dispatch(deleteAllTodos())}>Deleted selected</button>
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
                        allTodos.map((todo, index) =>
                        <tr key={index}>
                            <td>
                                <Link to={`/todo/${index}`}>
                                    {todo.description}
                                </Link>
                            </td> 
                            <td>{todo.category}</td>
                            <td onClick={()=>dispatch(deleteTodo(todo))}>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TodoList