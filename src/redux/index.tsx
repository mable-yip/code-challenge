import { createAction, createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import { ITodoItem, ITodoItemObject} from '../interface/models'

export const addTodo = createAction<ITodoItemObject>('add_todo')
export const deleteTodo = createAction<string>('delete_todo')
export const deleteAllTodos = createAction<ITodoItemObject[]>('delete_all_todo')

const initialTodoList = {}

const reducer = createReducer(initialTodoList, {
    [addTodo.type]: produce((draft, action) => {
        draft[action.payload.id] = action.payload
    }),
    [deleteTodo.type]: produce((draft, action) => {delete draft[action.payload]}),
    [deleteAllTodos.type]: produce((draft, action) => {action.payload.map((todo: { id: string }) => delete draft[todo.id])}) //don't know how to empty an object 
})

export default reducer