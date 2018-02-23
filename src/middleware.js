import bodyParser from 'body-parser';

export const setupMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
}