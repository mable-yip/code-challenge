import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function TodoItem(props){
    const {todoIndex} = useParams()
    const[redirect, setRedirect] = useState(false)
    const todoItem = props.todoList[todoIndex]
    console.log(todoItem)


    function renderRedirect(){
        if (redirect){
            return <Redirect to='/todo'/>
        }
    }
    
    return(
        <div>
            <h3>Description: {todoItem['description']}</h3>
            <h3>Category: {todoItem['category']}</h3>
            <h3>Content: {todoItem['content']} </h3>
            {renderRedirect()}
            <button onClick={()=>setRedirect(true)}> Back </button>
        </div>
    )
}

export default connect(state=>({todoList: state}),{})(TodoItem)