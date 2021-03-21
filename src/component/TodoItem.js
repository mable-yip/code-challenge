import {useState} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux"

function TodoItem(props){
    const allTodos = useSelector((state) => state.todoList)
    const {todoIndex} = useParams()
    const[redirect, setRedirect] = useState(false)

    function renderRedirect(){
        if (redirect){
            return <Redirect to='/todo'/>
        }
    }
    
    return(
        <div>
            <h3>Description: {allTodos[todoIndex].description}</h3>
            <h3>Category: {allTodos[todoIndex].category}</h3>
            <h3>Content: {allTodos[todoIndex].content} </h3>
            {renderRedirect()}
            <button onClick={()=>setRedirect(true)}> Back </button>
        </div>
    )
}

export default TodoItem