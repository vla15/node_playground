import express from 'express';
import { restRouter, graphQLRouter} from './apis/index';
import { setupMiddleware } from "./middleware";
import { connectDb } from './db';
import { graphqlExpress } from "apollo-server-express";

export const app = express();

setupMiddleware(app);
connectDb();

app.use('/signup', (req, res) => res.json({placeholder: true}));
app.use('/api', restRouter);
api.use('/graphql', graphQLRouter)
app.use('/docs', graphqlExpress)