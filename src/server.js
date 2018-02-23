import express from 'express';
import { restRouter } from './apis/rest-router';
import { setupMiddleware } from "./middleware";

export const app = express();

setupMiddleware(app);

app.use('/signup', (req, res) => res.json({placeholder: true}));
app.use('/api', restRouter);