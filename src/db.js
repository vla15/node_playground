import mongoose from 'mongoose';
import config from './config/index';
mongoose.Promise = global.Promise;

export const connectDb = () => {
  return mongoose.connect(config.db.url)
}