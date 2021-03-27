import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAllTodos, deleteTodo } from '../redux'

function TodoList(){
    const allTodos = useSelector(state => state)
    const allTodoObj = Object.values(allTodos)
    const dispatch = useDispatch()
    console.log(allTodoObj)
    return(
        <div>
            <button onClick={() => dispatch(deleteAllTodos(allTodoObj))}>Deleted selected</button>
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
                        allTodoObj.map((todo) =>
                        <tr key={todo.id}>
                            <td>
                                <Link to={`/todo/${todo.id}`}>
                                    {todo.description}
                                </Link>
                            </td> 
                            <td>{todo.category}</td>
                            <td onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TodoList