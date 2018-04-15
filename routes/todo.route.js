const todoController = require('../controllers/todo.controller');

const express = require('express');

const todoRouter = express.Router();

todoRouter.route('/')
  .get(todoController.list)
  .post(todoController.create);

todoRouter.route('/:id')
  .get(todoController.find)
  .put(todoController.update)
  .delete(todoController.remove);

module.exports = todoRouter;
