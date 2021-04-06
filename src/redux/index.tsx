import { createAction, createReducer } from '@reduxjs/toolkit'
import { v1 as uuidv1 } from 'uuid'
import { TodoItemList, TodoItemPreview } from '../interface/models'

export const addTodo = createAction<TodoItemPreview>('add_todo')
export const deleteTodo = createAction<string>('delete_todo')
export const deleteAllTodos = createAction<undefined>('delete_all_todo')

type AddTodoAction = ReturnType<typeof addTodo>
type DeleteTodoAction = ReturnType<typeof deleteTodo>

const initialTodoList = {}

const reducer = createReducer(initialTodoList, {
    [addTodo.type]:  (state: TodoItemList, { payload }: AddTodoAction) => {
        const id = uuidv1()
        state[id] = {...payload, id}
    },
    [deleteTodo.type]: (state: TodoItemList, { payload }: DeleteTodoAction) => {
        delete state[payload]
    },
    [deleteAllTodos.type]: (state: TodoItemList) => {
        Object.keys(state).forEach(key => { delete state[key] })
    } 
})

export default reducer