import {createStore} from "redux"
import { createAction, createReducer, current } from '@reduxjs/toolkit'


export const addTodo = createAction('add_todo')
export const deleteTodo = createAction('delete_todo')
export const deleteAllTodos = createAction('delete_all_todo')

const initialTodoList =[]

const reducer = createReducer(initialTodoList, {
    [addTodo]: (state, action) => [... state, action.payload],
    [deleteTodo]: (state, action) => current(state).filter(todo => todo !== action.payload),
    [deleteAllTodos]: () => []
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => console.log(store.getState()))
export default store