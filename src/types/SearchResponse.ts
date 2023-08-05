import { MovieType } from './MovieType';

/**
 * This is the type of the response that comes back from using the ombd api
 */
export type SearchResponse = {
  Search: MovieType[];
  totalResults: string;
  Response: string;
};
