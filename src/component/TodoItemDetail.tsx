import { useParams, Redirect, useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { TodoItemList} from '../interface/models'

interface ParamTypes {
    todoId: string
}

const TodoItemDetail = () => {
    let history = useHistory();
    const { todoId } = useParams<ParamTypes>()
    const todoItem = useSelector((state: TodoItemList) => state[todoId])    

    const handleClick = () => {
        history.push("/todo");
    }
    
    return(
        <div>
            <h3>Description: {todoItem['description']}</h3>
            <h3>Category: {todoItem['category']}</h3>
            <h3>Content: {todoItem['content']} </h3>
            <button onClick={handleClick}> Back </button>
        </div>
    )
}

export default TodoItemDetail