import express from 'express';
import UserController from '../controllers/user.controller.js';
import UserMiddleware from '../middlewares/user.middleware.js';

export default () => {
  const router = express.Router();
  router.post('/', [
    UserMiddleware.validateRegisterFields,
    UserMiddleware.validateUserAlreadyExist,
    UserController.registerUser,
  ]);
  return router;
};
