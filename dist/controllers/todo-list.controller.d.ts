import { Count, Filter, Where } from '@loopback/repository';
import { TodoList } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListController {
    todoListRepository: TodoListRepository;
    constructor(todoListRepository: TodoListRepository);
    create(todoList: Omit<TodoList, 'id'>): Promise<TodoList>;
    count(where?: Where<TodoList>): Promise<Count>;
    find(filter?: Filter<TodoList>): Promise<TodoList[]>;
    updateAll(todoList: Partial<TodoList>, where?: Where<TodoList>): Promise<Count>;
    findById(id: number, filter?: Filter<TodoList>): Promise<TodoList>;
    updateById(id: number, todoList: Partial<TodoList>): Promise<void>;
    deleteById(id: number): Promise<void>;
}
