import express from 'express';
import { SongController } from './song-controller';

export const songRouter = express.Router();

songRouter.param('id', SongController.findByParam);

songRouter
  .route('/')
  .get(SongController.getAll)
  .post(SongController.createOne);

songRouter
  .route('/:id')
  .get(SongController.getOne)
  .put(SongController.createOne)
  .delete(SongController.deleteOne);