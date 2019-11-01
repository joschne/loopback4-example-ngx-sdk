"use strict";
// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoListController = class TodoListController {
    constructor(todoListRepository) {
        this.todoListRepository = todoListRepository;
    }
    async create(todoList) {
        return this.todoListRepository.create(todoList);
    }
    async count(where) {
        return this.todoListRepository.count(where);
    }
    async find(filter) {
        return this.todoListRepository.find(filter);
    }
    async updateAll(todoList, where) {
        return this.todoListRepository.updateAll(todoList, where);
    }
    async findById(id, filter) {
        return this.todoListRepository.findById(id, filter);
    }
    async updateById(id, todoList) {
        await this.todoListRepository.updateById(id, todoList);
    }
    async deleteById(id) {
        await this.todoListRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/todo-lists', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.TodoList) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, {
                    title: 'NewTodoList',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "create", null);
__decorate([
    rest_1.get('/todo-lists/count', {
        responses: {
            '200': {
                description: 'TodoList model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TodoList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "count", null);
__decorate([
    rest_1.get('/todo-lists', {
        responses: {
            '200': {
                description: 'Array of TodoList model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.TodoList, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.TodoList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "find", null);
__decorate([
    rest_1.patch('/todo-lists', {
        responses: {
            '200': {
                description: 'TodoList PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.TodoList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/todo-lists/{id}', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.TodoList, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.TodoList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "findById", null);
__decorate([
    rest_1.patch('/todo-lists/{id}', {
        responses: {
            '204': {
                description: 'TodoList PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.TodoList, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "updateById", null);
__decorate([
    rest_1.del('/todo-lists/{id}', {
        responses: {
            '204': {
                description: 'TodoList DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoListController.prototype, "deleteById", null);
TodoListController = __decorate([
    __param(0, repository_1.repository(repositories_1.TodoListRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListController);
exports.TodoListController = TodoListController;
//# sourceMappingURL=todo-list.controller.js.map