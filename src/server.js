import express from 'express';
import { restRouter } from './apis/rest-router';

export const app = express();


app.use('/api', restRouter);

app.get('/', (req, res) => {
  res.json({ok: true});
})