import mongoose from 'mongoose';
import { baseConfig } from './config/index';
mongoose.Promise = global.Promise;

export const connectDb = () => {
  return mongoose.connect(baseConfig.db.url)
}