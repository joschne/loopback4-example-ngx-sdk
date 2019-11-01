"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const repositories_1 = require("../../repositories");
const helpers_1 = require("../helpers");
describe('TodoListRepository', () => {
    let todoListImageRepo;
    let todoListRepo;
    let todoRepo;
    before(async () => {
        todoListRepo = new repositories_1.TodoListRepository(helpers_1.testdb, async () => todoRepo, async () => todoListImageRepo);
        todoRepo = new repositories_1.TodoRepository(helpers_1.testdb, async () => todoListRepo);
        todoListImageRepo = new repositories_1.TodoListImageRepository(helpers_1.testdb, async () => todoListRepo);
    });
    beforeEach(helpers_1.givenEmptyDatabase);
    it('includes Todos in find method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoListRepo.find({
            include: [{ relation: 'todos' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual([
            Object.assign(Object.assign({}, testlab_1.toJSON(list)), { todos: [testlab_1.toJSON(todo)] }),
        ]);
    });
    it('includes Todos in findById result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoListRepo.findById(list.id, {
            include: [{ relation: 'todos' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(list)), { todos: [testlab_1.toJSON(todo)] }));
    });
    it('includes Todos in findOne method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const response = await todoListRepo.findOne({
            where: { id: list.id },
            include: [{ relation: 'todos' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(list)), { todos: [testlab_1.toJSON(todo)] }));
    });
    it('includes TodoListImage in find method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListRepo.find({
            include: [{ relation: 'image' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual([
            Object.assign(Object.assign({}, testlab_1.toJSON(list)), { image: testlab_1.toJSON(image) }),
        ]);
    });
    it('includes TodoListImage in findById method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListRepo.findById(list.id, {
            include: [{ relation: 'image' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(list)), { image: testlab_1.toJSON(image) }));
    });
    it('includes TodoListImage in findOne method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListRepo.findOne({
            include: [{ relation: 'image' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(list)), { image: testlab_1.toJSON(image) }));
    });
    it('includes both Todos and TodoListImage in find method result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const image = await helpers_1.givenTodoListImageInstance(todoListImageRepo, {
            todoListId: list.id,
        });
        const response = await todoListRepo.find({
            include: [{ relation: 'image' }, { relation: 'todos' }],
        });
        testlab_1.expect(testlab_1.toJSON(response)).to.deepEqual([
            Object.assign(Object.assign({}, testlab_1.toJSON(list)), { image: testlab_1.toJSON(image), todos: [testlab_1.toJSON(todo)] }),
        ]);
    });
});
//# sourceMappingURL=todo-list.repository.integration.js.map