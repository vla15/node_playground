import express from 'express';
import { restRouter } from './apis/rest-router';
import { setupMiddleware } from "./middleware";
import { apiErrorHandler } from "./apis/modules/error-handler";

export const app = express();

setupMiddleware(app);

app.use('/signup', (req, res) => res.json({placeholder: true}));
app.use('/api', apiErrorHandler, restRouter);

app.get('/', (req, res) => {
  res.json({ok: true});
})