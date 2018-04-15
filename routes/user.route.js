const userController = require('../controllers/user.controller');

const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
  .get(userController.list)
  .post(userController.create);

userRouter.route('/:id')
  .get(userController.find)
  .put(userController.update)
  .delete(userController.remove);

module.exports = userRouter;
