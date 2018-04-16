const userController = require('../controllers/user.controller');

const express = require('express');

const userRouter = express.Router();

userRouter.route('/create')
  /* .get(userController.list) */
  .post(userController.create);

userRouter.route('/login')
  .post(userController.login);
/* .put(userController.update)
  .delete(userController.remove); */

module.exports = userRouter;
