import { Filter } from '@loopback/repository';
import { Todo, TodoList } from '../models';
import { TodoRepository } from '../repositories';
export declare class TodoController {
    protected todoRepo: TodoRepository;
    constructor(todoRepo: TodoRepository);
    createTodo(todo: Omit<Todo, 'id'>): Promise<Todo>;
    findTodoById(id: number, filter?: Filter<Todo>): Promise<Todo>;
    findTodos(filter?: Filter<Todo>): Promise<Todo[]>;
    replaceTodo(id: number, todo: Todo): Promise<void>;
    updateTodo(id: number, todo: Partial<Todo>): Promise<void>;
    deleteTodo(id: number): Promise<void>;
    findOwningList(id: number): Promise<TodoList>;
}
