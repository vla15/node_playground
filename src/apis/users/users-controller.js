import { generateControllers } from '../modules/query';
import { User } from './users-model';

export const UserController = generateControllers(User);