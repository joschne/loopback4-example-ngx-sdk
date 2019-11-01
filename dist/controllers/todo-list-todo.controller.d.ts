import { Count, Filter, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListTodoController {
    protected todoListRepo: TodoListRepository;
    constructor(todoListRepo: TodoListRepository);
    create(id: number, todo: Omit<Todo, 'id'>): Promise<Todo>;
    find(id: number, filter?: Filter<Todo>): Promise<Todo[]>;
    patch(id: number, todo: Partial<Todo>, where?: Where<Todo>): Promise<Count>;
    delete(id: number, where?: Where<Todo>): Promise<Count>;
}
