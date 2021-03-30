import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { RootState } from '../redux/store'
import { ITodoItem, ITodoItemObject} from '../interface/models'

interface ParamTypes {
    todoId: string
}


function TodoItem(){
    const { todoId } = useParams<ParamTypes>()
    console.log(todoId)
    const[redirect, setRedirect] = useState(false)  
    const todoItemList = useSelector((state: RootState) => state)    
    const itemListObject: ITodoItemObject[] = Object.values(todoItemList)

    const TodoItem = itemListObject.filter(item => item.id === todoId)

    console.log(TodoItem)

    function renderRedirect(){
        if (redirect){
            return <Redirect to='/todo'/>
        }
    }
    
    return(
        <div>
            <h3>Description: {TodoItem[0].todoItem['description']}</h3>
            <h3>Category: {TodoItem[0].todoItem['category']}</h3>
            <h3>Content: {TodoItem[0].todoItem['content']} </h3>
            {renderRedirect()}
            <button onClick={()=>setRedirect(true)}> Back </button>
        </div>
    )
}

export default TodoItem