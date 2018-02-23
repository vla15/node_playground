import express from 'express';
import { userRouter } from './users/index';
import { playlistRouter } from './playlist/index';
import { songRouter } from './song/index';
import { apiErrorHandler } from "./modules/error-handler";

export const restRouter = express.Router();

restRouter.route('/')
  .get((req, res) => res.json({hey: 'hello world'}))

restRouter.use('/user', userRouter);
restRouter.use('/playlist', playlistRouter);
restRouter.use('/song', songRouter);
restRouter.use(apiErrorHandler);