import { createAction, createReducer, PayloadAction} from '@reduxjs/toolkit'
import { v1 as uuidv1 } from 'uuid'
import { TodoItem, TodoItemList } from '../interface/models'

export const addTodo = createAction<TodoItem>('add_todo')
export const deleteTodo = createAction<string>('delete_todo')
export const deleteAllTodos = createAction<null>('delete_all_todo')

const initialTodoList = {}

const reducer = createReducer(initialTodoList, {
    [addTodo.type]:  (state: TodoItemList, action: PayloadAction<TodoItem>) => {
        const id = uuidv1()
        action.payload.id = id
        state[id] = action.payload
    },
    [deleteTodo.type]: (state: TodoItemList, action: PayloadAction<string>) => {
        delete state[action.payload]
    },
    [deleteAllTodos.type]: (state: TodoItemList) => {
        Object.keys(state).forEach(key => { delete state[key] })
    } 
})

export default reducer