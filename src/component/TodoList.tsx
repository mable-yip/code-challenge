import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo, deleteAllTodos } from '../redux'
import { RootState } from '../redux/store'
import { TodoItem } from '../interface/models'

const TodoList = () => {
    const allTodos = useSelector((state: RootState) => state)
    const allTodoObj: TodoItem[] = Object.values(allTodos)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => dispatch(deleteAllTodos(null))}>Deleted selected</button>
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