import {configureStore, combineReducers} from "@reduxjs/toolkit"
import TodoListSlice from "./TodoListSlice"

const reducer = combineReducers({
    todoList: TodoListSlice
})

const store = configureStore({
    reducer
})


export default store