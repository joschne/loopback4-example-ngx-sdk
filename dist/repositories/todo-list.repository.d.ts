import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { Todo, TodoList, TodoListImage, TodoListRelations } from '../models';
import { TodoListImageRepository } from './todo-list-image.repository';
import { TodoRepository } from './todo.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id, TodoListRelations> {
    protected todoRepositoryGetter: Getter<TodoRepository>;
    protected todoListImageRepositoryGetter: Getter<TodoListImageRepository>;
    readonly todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    readonly image: HasOneRepositoryFactory<TodoListImage, typeof TodoList.prototype.id>;
    constructor(dataSource: juggler.DataSource, todoRepositoryGetter: Getter<TodoRepository>, todoListImageRepositoryGetter: Getter<TodoListImageRepository>);
    findByTitle(title: string): Promise<import("../models").TodoListWithRelations | null>;
}
