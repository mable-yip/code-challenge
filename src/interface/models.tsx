export interface ITodoItem {
    id: string
    description: string
    category: string
    content: string
}

export interface ITodoItemObject {
    id: string
    todoItem: ITodoItem
}
