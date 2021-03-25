import React from 'react'
import { Link } from 'react-router-dom'

function TodoList(props){
    console.log("~TodoList: ", props.allTodos)
    const allTodoObj = Object.values(props.allTodos)
    console.log(allTodoObj)
    return(
        <div>
            <button onClick={() => props.deleteAllTodos(allTodoObj)}>Deleted selected</button>
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
                            <td onClick={()=>props.deleteTodo(todo.id)}>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TodoList