const userController = require('../controllers/user.controller');

const express = require('express');

const userRouter = express.Router();

userRouter.route('/create')
  /* .get(userController.list) */
  .post(userController.create);

userRouter.route('/login')
  .post(userController.login);
/* .delete(userController.remove); */
userRouter.route('/login/:id').put(userController.update);

module.exports = userRouter;
