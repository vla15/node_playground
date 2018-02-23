import { generateControllers } from '../modules/query';
import { Song } from './song-model';

export const SongController = generateControllers(Song);