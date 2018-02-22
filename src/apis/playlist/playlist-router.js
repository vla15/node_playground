import express from 'express';

export const playlistRouter = express.Router();

playlistRouter
  .route('/')
  .get((req, res) => res.json({ playlistRouter: "get" }))
  .put((req, res) => res.json({ playlistRouter: "get" }))

playlistRouter
  .route('/:id')
  .get((req, res) => res.json({ GetHomie: req.params.id }))
  .put((req, res) => res.json({ PutHomie: req.params.id }))

playlistRouter.all('*', (req, res) => res.json({dance: 'the night away'}))