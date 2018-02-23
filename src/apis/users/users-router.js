import express from 'express';
import { UserController } from './users-controller';

export const userRouter = express.Router();

// userRouter.param('id', () => console.log('hello'))

userRouter
  .route('/')
  .get(UserController.getAll)
  .post(UserController.createOne);

userRouter
  .route('/:id')
  .get(UserController.getOne)
  .put(UserController.createOne)
  .delete(UserController.deleteOne);
