import React, {useState} from 'react'
import { v1 as uuidv1 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux'

function InputForm(){ 
    const [description, setDescription] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const dispatch = useDispatch()

    return(
        <div>
            <form>
                <h2>
                    Descirption: 
                    <input 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                </h2>
                <h2>
                    Category: 
                    <select 
                        value={category}
                        onChange={e=>setCategory(e.target.value)}
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
                        value={content}
                        onChange={e=>setContent(e.target.value)}
                    />
                </h2>
                <button 
                    type="button" 
                    onClick={()=>{
                        const id = uuidv1();
                        console.log(id, description,category, content)
                        const todoItem = {
                            id, description, category, content
                        }
                        dispatch(addTodo({id, todoItem}))
                        setDescription("")
                        setCategory("")
                        setContent("")
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputForm