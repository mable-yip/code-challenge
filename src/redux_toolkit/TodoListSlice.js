import { createSlice, current } from '@reduxjs/toolkit'

const TodoListSlice = createSlice({
    name: "counter",
    initialState: [],
    reducers: {
        addTodo: (state, action) => [... state, action.payload],
        deleteTodo: (state, action) => {
            let newList = current(state)
            console.log(newList)
            console.log(action.payload)
            return newList.filter(todo => todo !== action.payload)
        },
        deleteAllTodos: () => []
    }
})

export const {addTodo, deleteTodo, deleteAllTodos} = TodoListSlice.actions
export default TodoListSlice.reducer;