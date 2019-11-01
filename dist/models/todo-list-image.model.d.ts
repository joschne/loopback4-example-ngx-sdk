import { Entity } from '@loopback/repository';
import { TodoListWithRelations } from './todo-list.model';
export declare class TodoListImage extends Entity {
    id: number;
    todoListId: number;
    value: string;
    constructor(data?: Partial<TodoListImage>);
}
export interface TodoListImageRelations {
    todoList?: TodoListWithRelations;
}
export declare type TodoListImageWithRelations = TodoListImage & TodoListImageRelations;
