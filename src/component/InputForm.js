import React, {useState} from 'react'
import {addTodo} from "../redux_toolkit/TodoListSlice"
import { useDispatch } from "react-redux"

function InputForm(props){ 
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [content, setContent] = useState("")

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
                        dispatch(addTodo({description,category, content}))
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