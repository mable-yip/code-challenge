import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux'
import { TodoItem } from '../interface/models'

const InputForm = () => { 
    const [todoItem, setTodoItem] = useState<TodoItem>({ id: "", description:"", category:"", content:""})
    const dispatch = useDispatch()

    return(
        <div>
            <form>
                <h2>
                    Descirption: 
                    <input 
                        value={todoItem.description}
                        onChange={(event: React.FormEvent<HTMLInputElement>) => {
                            const newValue = event.currentTarget.value
                            setTodoItem({...todoItem, description: newValue})
                        }}
                    />
                </h2>
                <h2>
                    Category: 
                    <select 
                        value={todoItem.category}
                        onChange={(event: React.FormEvent<HTMLSelectElement>) => {
                            const newValue = event.currentTarget.value
                            setTodoItem({...todoItem, category: newValue})
                        }}
                    >
                        <option value="">  </option>
                        <option value="css"> css </option>
                        <option value="html"> html </option>
                        <option value="javascript"> javascript </option>
                    </select>
                </h2>
                <h2>
                    Content: 
                    <textarea 
                        value={todoItem.content}
                        onChange={(event: React.FormEvent<HTMLTextAreaElement>) => {
                            const newValue = event.currentTarget.value
                            setTodoItem({...todoItem, content: newValue})
                        }}
                    />
                </h2>
                <button 
                    type="button" 
                    onClick={()=>{
                        dispatch(addTodo(todoItem))
                        setTodoItem({ id: "", description:"", category:"", content:""})
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputForm