import {createStore} from "redux"

export function addTodo(todo){
    console.log(todo)
    return({
        type: "ADD_TODO",
        payload: todo
    })
}

export function deleteTodo(todo){
    return({
        type: "DELETE_TODO",
        payload: todo
    })
}

export function deleteAllTodos(){
    console.log("deleted All")
    return({
        type: "DELETE_ALL_TODOS"
    })
}

export function getAllTodos(){
    console.log("reducer function GET_ALL_TODOS")
    return({
        type: "GET_ALL_TODOS"
    })
}

const initialTodoList =[]

function reducer(state=initialTodoList, action){
    switch(action.type){ 
        case "ADD_TODO":
            console.log(state)
            return [... state, action.payload]
        case "DELETE_TODO":
            return state.filter(todo => todo !== action.payload)
        case "DELETE_ALL_TODOS":
            return []
        case "GET_ALL_TODOS":
            console.log("reducer GET_ALL_TODOS", state)
            return state
        default:
            return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => console.log(store.getState()))
export default store