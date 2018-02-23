import { generateControllers } from '../modules/query';
import { Playlist } from './playlist-model';

export const PlaylistController = generateControllers(Playlist);