"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const testlab_1 = require("@loopback/testlab");
const helpers_1 = require("../helpers");
describe('TodoListApplication', () => {
    let app;
    let client;
    let todoRepo;
    let todoListRepo;
    before(async () => {
        app = await helpers_1.givenRunningApplicationWithCustomConfiguration();
    });
    after(() => app.stop());
    before(async () => {
        ({ todoRepo, todoListRepo } = await helpers_1.givenTodoRepositories(app));
    });
    before(() => {
        client = testlab_1.createRestAppClient(app);
    });
    beforeEach(async () => {
        await todoRepo.deleteAll();
    });
    it('creates a todo', async function () {
        const todo = helpers_1.givenTodo();
        const response = await client
            .post('/todos')
            .send(todo)
            .expect(200);
        testlab_1.expect(response.body).to.containDeep(todo);
        const result = await todoRepo.findById(response.body.id);
        testlab_1.expect(result).to.containDeep(todo);
    });
    it('rejects requests to create a todo with no title', async () => {
        const todo = helpers_1.givenTodo();
        delete todo.title;
        await client
            .post('/todos')
            .send(todo)
            .expect(422);
    });
    context('when dealing with a single persisted todo', () => {
        let persistedTodo;
        beforeEach(async () => {
            persistedTodo = await helpers_1.givenTodoInstance(todoRepo);
        });
        it('gets a todo by ID', () => {
            return client
                .get(`/todos/${persistedTodo.id}`)
                .send()
                .expect(200, testlab_1.toJSON(persistedTodo));
        });
        it('returns 404 when getting a todo that does not exist', () => {
            return client.get('/todos/99999').expect(404);
        });
        it('replaces the todo by ID', async () => {
            const updatedTodo = helpers_1.givenTodo({
                title: 'DO SOMETHING AWESOME',
                desc: 'It has to be something ridiculous',
                isComplete: true,
            });
            await client
                .put(`/todos/${persistedTodo.id}`)
                .send(updatedTodo)
                .expect(204);
            const result = await todoRepo.findById(persistedTodo.id);
            testlab_1.expect(result).to.containEql(updatedTodo);
        });
        it('returns 404 when replacing a todo that does not exist', () => {
            return client
                .put('/todos/99999')
                .send(helpers_1.givenTodo())
                .expect(404);
        });
        it('updates the todo by ID ', async () => {
            const updatedTodo = helpers_1.givenTodo({
                title: 'DO SOMETHING AWESOME',
                isComplete: true,
            });
            await client
                .patch(`/todos/${persistedTodo.id}`)
                .send(updatedTodo)
                .expect(204);
            const result = await todoRepo.findById(persistedTodo.id);
            testlab_1.expect(result).to.containEql(updatedTodo);
        });
        it('returns 404 when updating a todo that does not exist', () => {
            return client
                .patch('/todos/99999')
                .send(helpers_1.givenTodo())
                .expect(404);
        });
        it('deletes the todo', async () => {
            await client
                .del(`/todos/${persistedTodo.id}`)
                .send()
                .expect(204);
            await testlab_1.expect(todoRepo.findById(persistedTodo.id)).to.be.rejectedWith(repository_1.EntityNotFoundError);
        });
        it('returns 404 when deleting a todo that does not exist', async () => {
            await client.del(`/todos/99999`).expect(404);
        });
        it('returns the owning todo-list', async () => {
            const list = await helpers_1.givenTodoListInstance(todoListRepo);
            const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
            await client.get(`/todos/${todo.id}/todo-list`).expect(200, testlab_1.toJSON(list));
        });
    });
    it('queries todos with a filter', async () => {
        await helpers_1.givenTodoInstance(todoRepo, { title: 'wake up', isComplete: true });
        const todoInProgress = await helpers_1.givenTodoInstance(todoRepo, {
            title: 'go to sleep',
            isComplete: false,
        });
        await client
            .get('/todos')
            .query({ filter: { where: { isComplete: false } } })
            .expect(200, [testlab_1.toJSON(todoInProgress)]);
    });
    it('includes TodoList in query result', async () => {
        const list = await helpers_1.givenTodoListInstance(todoListRepo);
        const todo = await helpers_1.givenTodoInstance(todoRepo, { todoListId: list.id });
        const filter = JSON.stringify({ include: [{ relation: 'todoList' }] });
        const response = await client.get('/todos').query({ filter: filter });
        testlab_1.expect(response.body).to.have.length(1);
        testlab_1.expect(response.body[0]).to.deepEqual(Object.assign(Object.assign({}, testlab_1.toJSON(todo)), { todoList: testlab_1.toJSON(list) }));
    });
});
//# sourceMappingURL=todo.acceptance.js.map