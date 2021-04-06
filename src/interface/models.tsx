export interface TodoItem {
    id : string 
    description: string
    category: string
    content: string
}

export interface TodoItemList {
    [id: string]: TodoItem
 }

 export type TodoItemPreview = Omit<TodoItem, "id">