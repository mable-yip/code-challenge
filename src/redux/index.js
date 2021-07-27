
import { createAction, createReducer } from '@reduxjs/toolkit'
import produce from 'immer'

export const addTodo = createAction('add_todo')
export const deleteTodo = createAction('delete_todo')
export const deleteAllTodos = createAction('delete_all_todo')

const initialTodoList = {}

const reducer = createReducer(initialTodoList, {
    [addTodo]: produce((draft, action) => {
        draft[action.payload.id] = action.payload
    }),
    [deleteTodo]: produce((draft, action) => {delete draft[action.payload]}),
    [deleteAllTodos]: produce((draft, action) => {action.payload.map(todo => delete draft[todo.id])}) //don't know how to empty an object 
})

export default reducer
