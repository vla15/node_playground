import express from 'express';
import { restRouter } from './apis/rest-router';
import { setupMiddleware } from "./middleware";
import { connectDb } from './db';

export const app = express();

setupMiddleware(app);
connectDb();

app.use('/signup', (req, res) => res.json({placeholder: true}));
app.use('/api', restRouter);