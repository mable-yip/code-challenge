import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux'
import { TodoItemPreview } from '../interface/models'

const InputForm = () => { 
    const [todoItem, setTodoItem] = useState<TodoItemPreview>({ description:"", category:"", content:""})
    const dispatch = useDispatch()

    const handleOnChange = (key: string) => (event: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
        const newValue = event.currentTarget.value
        setTodoItem({...todoItem, [key]: newValue})
    }

    return(
        <div>
            <form>
                <h2>
                    Descirption: 
                    <input 
                        value={todoItem.description}
                        onChange={handleOnChange("description")}
                    />
                </h2>
                <h2>
                    Category: 
                    <select 
                        value={todoItem.category}
                        onChange={handleOnChange("category")}
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
                        onChange={handleOnChange("content")}
                    />
                </h2>
                <button 
                    type="button" 
                    onClick={()=>{
                        dispatch(addTodo(todoItem))
                        setTodoItem({ description:"", category:"", content:""})
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputForm