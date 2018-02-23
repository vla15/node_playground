import express from 'express';
import { PlaylistController } from './playlist-controller';

export const playlistRouter = express.Router();

playlistRouter
  .route('/')
  .get(PlaylistController.getAll)
  .put(PlaylistController.createOne);

playlistRouter
  .route('/:id')
  .get(PlaylistController.getOne)
  .put(PlaylistController.createOne)
  .delete(PlaylistController.deleteOne);