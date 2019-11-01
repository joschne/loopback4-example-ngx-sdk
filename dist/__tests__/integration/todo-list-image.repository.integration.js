"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const helpers_1 = require("../helpers");
describe('TodoListImageRepository', () => {
    let todoListImageRepo;
    let todoListRepo;
    let todoRepo;
    before(async () => {
        todoListRepo = new repositories_1.TodoListRepository(helpers_1.testdb, async () => todoRepo, async () => todoListImageRepo);
        todoListImageRepo = new repositories_1.TodoListImageRepository(helpers_1.testdb, async () => todoListRepo);
    });
    beforeEach(helpers_1.givenEmptyDatabase);
    it('includes TodoList in find method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListImageRepo.find({
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual([
            Object.assign(Object.assign({}, testlab_1.toJSON(image)), { todoList: testlab_1.toJSON(list) }),
        ]);
    });
    it('includes TodoList in findById result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo, {});
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListImageRepo.findById(image.id, {
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(image)), { todoList: testlab_1.toJSON(list) }));
    });
    it('includes TodoList in findOne result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo, {});
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListImageRepo.findOne({
            include: [{ relation: 'todoList' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(image)), { todoList: testlab_1.toJSON(list) }));
    });
});
//# sourceMappingURL=todo-list-image.repository.integration.js.map