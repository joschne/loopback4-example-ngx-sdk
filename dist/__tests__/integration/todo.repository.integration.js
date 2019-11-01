"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const helpers_1 = require("../helpers");
describe('TodoRepository', () => {
    let todoListImageRepo;
    let todoListRepo;
    let todoRepo;
    before(async () => {
        todoListRepo = new repositories_1.TodoListRepository(helpers_1.testdb, async () => todoRepo, async () => todoListImageRepo);
        todoRepo = new repositories_1.TodoRepository(helpers_1.testdb, async () => todoListRepo);
    });
    beforeEach(helpers_1.givenEmptyDatabase);
    it('includes TodoList in find method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoRepo.find({
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual([
            Object.assign(Object.assign({}, testlab_1.toJSON(todo)), { todoList: testlab_1.toJSON(list) }),
        ]);
    });
    it('includes TodoList in findById result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo, {});
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoRepo.findById(todo.id, {
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(todo)), { todoList: testlab_1.toJSON(list) }));
    });
    it('includes TodoList in findOne method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoRepo.findOne({
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(todo)), { todoList: testlab_1.toJSON(list) }));
    });
});
//# sourceMappingURL=todo.repository.integration.js.map